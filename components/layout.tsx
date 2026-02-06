import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Core SEO - High-Authority Messaging */}
        <title>LocalLeadBot | AI Growth Infrastructure & Revenue Automation</title>
        <meta name="description" content="We engineer local market dominance. LocalLeadBot installs proprietary AI Sales Agents and high-performance Revenue Hubs for professional firms." />
        <meta name="keywords" content="Growth Infrastructure, AI Sales Agent, Revenue Automation, Local SEO, Client Acquisition Systems, Law Firm Marketing, Medical Practice Growth" />

        {/* The 'Identity Lock': Adding the trailing slash as the definitive URL */}
        <link rel="canonical" href="https://www.localleadbot.com/" />
        
        {/* Explicit Indexing Signal: Tells Google this is the 'Master' version */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        
        <meta name="author" content="LocalLeadBot Infrastructure" />
        
        {/* Social Media Previews (Open Graph) */}
        <meta property="og:title" content="LocalLeadBot | The Growth Engine" />
        <meta property="og:description" content="Automated systems for local market dominance. High-performance growth infrastructure." />
        <meta property="og:url" content="https://www.localleadbot.com/" />
        <meta property="og:image" content="https://www.localleadbot.com/og-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="LocalLeadBot" />

        {/* Twitter/X Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LocalLeadBot | AI Growth Infrastructure" />
        <meta name="twitter:description" content="Engineering local dominance for professional service firms." />
        <meta name="twitter:image" content="https://www.localleadbot.com/og-image.jpg" />

        {/* Mobile App Optimization for Chrome/Android */}
        <meta name="theme-color" content="#030303" />
      </Helmet>

      {/* Renders the App Content */}
      {children}
    </HelmetProvider>
  );
};