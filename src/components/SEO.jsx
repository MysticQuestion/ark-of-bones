import { Helmet } from 'react-helmet-async';
import { ASSETS, BRAND, SITE_URL } from '../config/brand';

export default function SEO({ title, description, path = '/', image = ASSETS.social, schema }) {
  const isStagingBuild = import.meta.env.DEV || import.meta.env.VITE_DEPLOYMENT_ENV === 'preview';
  const pageTitle = title === BRAND.name ? `${BRAND.name} | ${BRAND.proposition}` : `${title} | ${BRAND.name}`;
  const canonical = new URL(path, SITE_URL).toString();
  const socialImage = new URL(image, SITE_URL).toString();
  const pathParts = path.split('/').filter(Boolean);
  const breadcrumb = pathParts.length ? {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      ...pathParts.map((part, index) => ({
        '@type': 'ListItem',
        position: index + 2,
        name: index === pathParts.length - 1 ? title : part.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
        item: new URL(`/${pathParts.slice(0, index + 1).join('/')}`, SITE_URL).toString(),
      })),
    ],
  } : null;
  const structuredData = [
    ...(schema ? (Array.isArray(schema) ? schema : [schema]) : []),
    ...(breadcrumb ? [breadcrumb] : []),
  ];

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      {isStagingBuild ? <meta name="robots" content="noindex, nofollow" /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={BRAND.name} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={socialImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {structuredData.length ? (
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      ) : null}
    </Helmet>
  );
}
