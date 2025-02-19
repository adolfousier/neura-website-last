"use client";

import React from 'react';
import { Privacy } from "@/components/sections/Privacy/Privacy";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <>
      <Navigation />
      <Privacy />
      <Footer />
    </>
  );
}