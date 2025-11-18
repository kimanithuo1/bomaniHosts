import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'BomaniHosts - Trusted Rentals in Kenya',
  description = 'Find and book verified short-term and medium-term rentals across Kenya with BomaniHosts.',
  keywords = 'rentals, Kenya, accommodation, short term, vacation homes',
  ogImage = '/og-image.jpg',
  ogType = 'website',
  jsonLd = null,
}) => {
  const siteUrl = 'https://bomanihosts.com'; // Update with actual URL
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={window.location.href} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      
      {/* JSON-LD Structured Data */}
      {jsonLd && (
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;