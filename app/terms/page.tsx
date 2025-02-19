"use client";

import React from 'react';
import { Terms } from "@/components/sections/Terms/Terms";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <Terms />
      <Footer />
    </>
  );
}