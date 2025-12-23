import React from "react";
import PageHeader from "@/components/page-header";
import CertificateCard from "@/components/certificate-card";

export default function CertificatesPage() {
  return (
    <div className="container relative max-w-6xl py-6 lg:py-10">
      <PageHeader
        title="Chứng chỉ & Bằng cấp"
        description="Những chứng chỉ mình đã đạt được trong hành trình học tập và phát triển."
      />
      <hr className="my-8" />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <CertificateCard
          title="JavaScript Essentials 1"
          issuer="Cisco Networking Academy"
          date="Nov 24, 2025"
          imageSrc="/images/certificates/Essentials-1.png"
          imageAlt="JavaScript Essentials 1 Certificate"
        />
        <CertificateCard
          title="JavaScript Essentials 2"
          issuer="Cisco Networking Academy"
          date="Nov 24, 2025"
          imageSrc="/images/certificates/Essentials-2.png"
          imageAlt="JavaScript Essentials 2 Certificate"
        />
        <CertificateCard
          title="Networking Basics"
          issuer="Cisco Networking Academy"
          date="Nov 17, 2025"
          imageSrc="/images/certificates/Networking-Basics.png"
          imageAlt="Networking Basics Certificate"
        />
        <CertificateCard
          title="Introduction to Cybersecurity"
          issuer="Cisco Networking Academy"
          date="Nov 19, 2024"
          imageSrc="/images/certificates/Cybersecurity.png"
          imageAlt="Introduction to Cybersecurity Certificate"
        />
      </div>
    </div>
  );
}
