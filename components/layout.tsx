import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const siteUrl = "https://www.localleadbot.pro/";
  const description = "AI lead generation and sales automation for law firms, medical practices, and home service companies. LocalLeadBot generates qualified leads and automates your sales pipeline.";

  const schemaOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "LocalLeadBot",
    "url": siteUrl,
    "logo": `${siteUrl}local-lead-bot-logo.png`,
    "description": description,
    "sameAs": [
      "https://www.localleadbot.pro"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Sales",
      "url": siteUrl
    }
  };

  const schemaLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LocalLeadBot",
    "url": siteUrl,
    "description": "Lead generation and sales automation for professional service firms",
    "areaServed": "US"
  };

  return (
    <HelmetProvider>
      <Helmet>
        {/* Core Identity Lock */}
        <title>LocalLeadBot | AI Lead Generation for Law Firms, Medical Practices & Home Services</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        
        {/* Open Graph (Website Identity) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="LocalLeadBot | AI Lead Generation Software" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}og-image.webp`} />
        <meta property="og:site_name" content="LocalLeadBot" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LocalLeadBot | AI Lead Generation for Your Business" />
        <meta name="twitter:description" content="Get qualified leads automatically with AI-powered sales automation." />
        <meta name="twitter:image" content={`${siteUrl}og-image.webp`} />

        <meta name="theme-color" content="#030303" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="lead generation software, AI sales automation, law firm leads, patient acquisition, home service leads" />

        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify(schemaOrganization)}
        </script>

        {/* Structured Data - LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify(schemaLocalBusiness)}
        </script>

        {/* FAQ Schema for Featured Snippets */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How does LocalLeadBot generate leads?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LocalLeadBot uses AI agents to identify high-intent prospects actively searching for your services, pre-qualifies them automatically, and delivers warm leads ready to convert."
                }
              },
              {
                "@type": "Question",
                "name": "What industries does LocalLeadBot serve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "LocalLeadBot specializes in lead generation for law firms, medical practices, and home service companies including plumbing, electrical, HVAC, and other trades."
                }
              },
              {
                "@type": "Question",
                "name": "What is the cost of LocalLeadBot?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Pricing is customized based on your industry, location, and lead volume requirements. Contact us for a personalized quote."
                }
              }
            ]
          })}
        </script>
      </Helmet>
      {children}
    </HelmetProvider>
  );
};