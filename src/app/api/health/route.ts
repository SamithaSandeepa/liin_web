import { NextResponse } from 'next/server';

/**
 * Health Check API
 * 
 * This endpoint is used to verify that the application is running
 * and can respond to requests. Useful for monitoring and load balancers.
 * 
 * @returns JSON response with status and timestamp
 */
export async function GET() {
  try {
    return NextResponse.json(
      {
        status: 'ok',
        message: 'LIIN Web Application is running',
        timestamp: new Date().toISOString(),
        uptime: process.uptime(),
        environment: process.env.NODE_ENV || 'development',
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'error',
        message: 'Health check failed',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
