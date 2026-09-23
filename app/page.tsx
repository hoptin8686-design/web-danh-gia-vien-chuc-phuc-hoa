"use client";

import React, { useState } from "react";
import { Header } from "@/components/Header";
import { Dashboard } from "@/components/Dashboard";
import { JobExplorer } from "@/components/JobExplorer";
import { DownloadCenter } from "@/components/DownloadCenter";
import { SelfEvaluationModal } from "@/components/SelfEvaluationModal";
import { RegulationsModal } from "@/components/RegulationsModal";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<string>("overview");
  const [isSelfEvalOpen, setIsSelfEvalOpen] = useState(false);
  const [isRegulationsOpen, setIsRegulationsOpen] = useState(false);

  const handleSelectRole = (role: string) => {
    setActiveTab(role);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenSelfEval={() => setIsSelfEvalOpen(true)}
        onOpenRegulations={() => setIsRegulationsOpen(true)}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {activeTab === "overview" && (
          <Dashboard
            onSelectRole={handleSelectRole}
            onOpenSelfEval={() => setIsSelfEvalOpen(true)}
            onOpenDownloads={() => setActiveTab("downloads")}
          />
        )}

        {(activeTab === "cbql" || activeTab === "gv" || activeTab === "nv") && (
          <JobExplorer
            key={activeTab}
            initialRole={activeTab}
            onOpenSelfEval={() => setIsSelfEvalOpen(true)}
          />
        )}

        {activeTab === "downloads" && <DownloadCenter />}
      </main>

      {/* Modals */}
      <SelfEvaluationModal
        isOpen={isSelfEvalOpen}
        onClose={() => setIsSelfEvalOpen(false)}
      />

      <RegulationsModal
        isOpen={isRegulationsOpen}
        onClose={() => setIsRegulationsOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
