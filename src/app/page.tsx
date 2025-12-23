import React from 'react';
import { Metadata } from "next";
import Hero from './components/home/hero';

import History from './components/home/history';
import Features from './components/shared/features';
import CompanyInfo from './components/home/info';
import BlogSmall from './components/shared/blog';
import DiscoverProperties from './components/home/property-option';
import Listing from './components/home/property-list';
import Testimonials from './components/home/testimonial';
export const metadata = {
  metadataBase: new URL("https://www.chuks.ai"),

 title: {
  default: "STEM Institute AI – Learn STEM Smarter on WhatsApp",
  template: "%s | STEM Institute AI",
},

description:
  "STEM Institute AI is an intelligent WhatsApp-based learning platform for STEM education. Learn science, technology, engineering, and mathematics through an AI tutor—interactive, accessible, and designed for modern learners.",

keywords: [
  "STEM Institute AI",
  "STEM education Nigeria",
  "AI learning on WhatsApp",
  "WhatsApp learning platform",
  "STEM tutoring AI",
  "AI education assistant",
  "science and technology learning",
  "engineering and math education",
  "AI tutor",
  "digital learning Africa",
],

openGraph: {
  title: "STEM Institute AI – Learn STEM on WhatsApp",
  description:
    "Learn science, technology, engineering, and mathematics through an AI-powered WhatsApp tutor. STEM Institute AI delivers structured learning, guidance, and support—anytime, anywhere.",
  url: "https://www.steminstitute.ai",
  siteName: "STEM Institute AI",
  type: "website",
  images: [
    {
      url: "https://steminstitute.netlify.app/_next/image?url=%2Fimages%2Fhero%2Fteacher.png&w=1080&q=75",
      width: 1200,
      height: 630,
      alt: "STEM Institute AI – WhatsApp STEM Learning Assistant",
    },
  ],
},

twitter: {
  card: "summary_large_image",
  title: "STEM Institute AI – Learn STEM Smarter on WhatsApp",
  description:
    "An AI-powered STEM learning experience delivered entirely on WhatsApp. Learn smarter, faster, and anywhere with STEM Institute AI.",
  images: [
    "https://steminstitute.netlify.app/_next/image?url=%2Fimages%2Fhero%2Fteacher.png&w=1080&q=75",
  ],
  creator: "@steminstitute",
},

robots: {
  index: true,
  follow: true,
},

alternates: {
  canonical: "https://www.steminstitute.ai",
},

};


export default function Home() {
  return (
    <main>
      <Hero />
      <DiscoverProperties />
      <Listing />
      
     
      <History />
      <Testimonials />
      <CompanyInfo />
      
    </main>
  )
}
