import { NextRequest, NextResponse } from 'next/server';

/**
 * Image Proxy API Route
 * Proxies Directus images to avoid CORS issues in HTML content
 * Usage: /api/image-proxy?url=<encoded-directus-asset-url>
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageUrl = searchParams.get('url');

  if (!imageUrl) {
    return NextResponse.json({ error: 'Missing url parameter' }, { status: 400 });
  }

  try {
    // Decode the URL
    const decodedUrl = decodeURIComponent(imageUrl);

    // Validate it's a Directus URL (security measure)
    const directusUrl = process.env.NEXT_PUBLIC_DIRECTUS_URL;
    if (!decodedUrl.startsWith(directusUrl || '')) {
      return NextResponse.json({ error: 'Invalid image URL' }, { status: 400 });
    }

    // Fetch the image from Directus
    const response = await fetch(decodedUrl, {
      headers: {
        // Add any necessary Directus authentication headers here if needed
        // 'Authorization': `Bearer ${process.env.DIRECTUS_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      console.error('Failed to fetch image:', response.status, response.statusText);
      return NextResponse.json({ error: 'Failed to fetch image' }, { status: response.status });
    }

    // Get the image buffer
    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Return the image with proper headers
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=3600, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
