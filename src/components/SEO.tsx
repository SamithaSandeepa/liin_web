import Script from 'next/script';

interface SEOScriptsProps {
  schemas: Array<Record<string, any>>;
}

export default function SEOScripts({ schemas }: SEOScriptsProps) {
  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
