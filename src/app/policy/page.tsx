"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function PolicySection({ title, children }: SectionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
      >
        <span>{title}</span>
        <ChevronDown
          className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="px-5 pb-6 pt-2 text-gray-700 leading-relaxed text-sm md:text-base space-y-3">
          {children}
        </div>
      )}
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-52 pb-20 px-6">
      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-4">
          STEM Institute AI — Policies & Legal Information
        </h1>

        <p className="text-center text-gray-600 mb-12">
          These policies explain how STEM Institute AI operates, protects users,
          and delivers learning through WhatsApp.
        </p>

        <div className="space-y-6">

          {/* TERMS */}
          <PolicySection title="1. Terms of Use">
            <p>
              STEM Institute AI is a WhatsApp-native learning platform powered by
              artificial intelligence. By accessing or using the service, you
              agree to these terms.
            </p>

            <p>
              The platform delivers STEM lessons, quizzes, projects, and
              certifications through conversational AI. We may update or improve
              the service over time.
            </p>

            <p>
              Users are responsible for how they engage with the learning content
              and must not misuse the platform.
            </p>
          </PolicySection>

          {/* ELIGIBILITY */}
          <PolicySection title="2. Eligibility & Responsible Use">
            <p>
              STEM Institute AI is designed for students, professionals,
              institutions, and lifelong learners.
            </p>

            <ul className="list-disc pl-6">
              <li>Users must provide accurate information when required</li>
              <li>No misuse, abuse, or disruption of the learning system</li>
              <li>No attempt to copy, reverse-engineer, or exploit the AI system</li>
            </ul>
          </PolicySection>

          {/* PRIVACY */}
          <PolicySection title="3. Privacy & Data Protection">
            <p>
              We respect user privacy and handle data responsibly in accordance
              with applicable data protection laws.
            </p>

            <p>
              Data collected may include WhatsApp interactions, learning progress,
              and basic contact information necessary to deliver the service.
            </p>

            <p>
              We do not sell personal data. Data is used only to improve learning
              outcomes and platform reliability.
            </p>
          </PolicySection>

          {/* AI LIMITATIONS */}
          <PolicySection title="4. AI Limitations & Learning Disclaimer">
            <p>
              STEM Institute AI uses artificial intelligence to assist learning.
              While designed to be accurate and helpful, AI responses may
              occasionally be incomplete or imperfect.
            </p>

            <p>
              Users should apply critical thinking and, where necessary, seek
              guidance from qualified educators or professionals.
            </p>
          </PolicySection>

          {/* CERTIFICATIONS */}
          <PolicySection title="5. Certifications & Learning Records">
            <p>
              Certificates issued by STEM Institute AI reflect completion of
              learning activities and assessments conducted within the platform.
            </p>

            <p>
              Certificates do not replace formal academic degrees unless stated
              otherwise.
            </p>
          </PolicySection>

          {/* SUSPENSION */}
          <PolicySection title="6. Account Suspension">
            <p>
              We reserve the right to suspend or restrict access if users violate
              these policies or misuse the platform.
            </p>
          </PolicySection>

          {/* LIABILITY */}
          <PolicySection title="7. Limitation of Liability">
            <p>
              STEM Institute AI is provided on an “as-is” basis. We are not liable
              for indirect or consequential damages arising from use of the
              platform.
            </p>
          </PolicySection>

          {/* CONTACT */}
          <PolicySection title="8. Contact & Support">
            <p>
              For questions about these policies or the platform, please contact:
            </p>

            <p>
              📧 <strong>Email:</strong> support@steminstitute.ai
            </p>
          </PolicySection>

        </div>
      </div>
    </div>
  );
}
