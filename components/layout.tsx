import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <HelmetProvider>
      <Helmet>
        {/* Core SEO - Targeting Law, Med, & Home Services */}
        <title>LocalLeadBot | AI Growth Infrastructure & Revenue Automation</title>
        <meta name="description" content="We engineer local market dominance. LocalLeadBot installs proprietary AI Sales Agents and high-performance Revenue Hubs for professional firms." />
        <meta name="keywords" content="Growth Infrastructure, AI Sales Agent, Revenue Automation, Local SEO, Client Acquisition Systems, Law Firm Marketing, Medical Practice Growth" />

        {/* Brand Authority & Security */}
        <link rel="canonical" href="https://www.localleadbot.com" />
        <meta name="author" content="LocalLeadBot Infrastructure" />
        
        {/* Social Media Link Previews (Open Graph) */}
        <meta property="og:title" content="LocalLeadBot | The Growth Engine" />
        <meta property="og:description" content="Automated systems for local market dominance. High-performance growth infrastructure." />
        <meta property="og:url" content="https://www.localleadbot.com" />
        <meta property="og:image" content="https://www.localleadbot.com/og-image.jpg" />
        <meta property="og:type" content="website" />

        {/* Twitter/X Card Preview */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="LocalLeadBot | AI Growth Infrastructure" />
        <meta name="twitter:description" content="Engineering local dominance for professional service firms." />
      </Helmet>

      {/* Renders the App Content */}
      {children}
    </HelmetProvider>
  );
};