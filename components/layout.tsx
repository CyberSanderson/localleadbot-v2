import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const siteUrl = "https://www.localleadbot.com/";
  const description = "We engineer local market dominance for Law, Medical, and Home Service firms. LocalLeadBot installs proprietary AI Sales Agents and high-performance Revenue Hubs.";

  return (
    <HelmetProvider>
      <Helmet>
        <title>LocalLeadBot | AI Growth Infrastructure & Revenue Automation</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={siteUrl} />
        
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="author" content="LocalLeadBot Infrastructure" />
        
        {/* Open Graph (Website Identity) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content="LocalLeadBot | AI Growth Infrastructure" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}og-image.webp`} />
        <meta property="og:site_name" content="LocalLeadBot" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LocalLeadBot | Capture. Convert. Conquer." />
        <meta name="twitter:description" content="Engineering local dominance for professional service firms." />
        <meta name="twitter:image" content={`${siteUrl}og-image.webp`} />

        <meta name="theme-color" content="#030303" />
      </Helmet>
      {children}
    </HelmetProvider>
  );
};