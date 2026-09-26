"use client";

import React, { useState } from "react";
import {
  Award,
  FileSpreadsheet,
  BookOpen,
  CheckCircle2,
  Users,
  Layers,
  Sparkles,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenSelfEval: () => void;
  onOpenRegulations: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenSelfEval,
  onOpenRegulations,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass-panel border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & School Info */}
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-lg shadow-blue-500/25 flex items-center justify-center">
              <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                <Award className="w-6 h-6 text-cyan-400 animate-pulse" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-full border border-blue-500/20">
                  SỞ GD&ĐT CAO BẰNG
                </span>
                <span className="text-xs text-amber-300 font-semibold bg-amber-500/10 px-2 py-0.5 rounded-full border border-amber-500/20">
                  Tháng 5/2026 - Tháng 9/2026
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
                TRƯỜNG THPT PHỤC HÒA
              </h1>
              <p className="text-xs text-slate-400 font-medium hidden sm:block">
                Hệ Thống Đánh Giá, Xếp Loại Viên Chức & Người Lao Động (CBQL - GV - NV)
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
            <button
              onClick={() => setActiveTab("overview")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "overview"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Layers className="w-4 h-4" />
              Tổng quan
            </button>
            <button
              onClick={() => setActiveTab("cbql")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "cbql"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <Users className="w-4 h-4 text-amber-400" />
              CBQL (33)
            </button>
            <button
              onClick={() => setActiveTab("gv")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "gv"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <BookOpen className="w-4 h-4 text-emerald-400" />
              Giáo viên (27)
            </button>
            <button
              onClick={() => setActiveTab("nv")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "nv"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 text-purple-400" />
              Nhân viên (30)
            </button>
            <button
              onClick={() => setActiveTab("downloads")}
              className={`px-3.5 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "downloads"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-300 hover:text-white hover:bg-slate-800/60"
              }`}
            >
              <FileSpreadsheet className="w-4 h-4 text-cyan-400" />
              Tải Excel Import
            </button>
          </nav>

          {/* Quick Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenRegulations}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 border border-slate-700/80 transition-all flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              Văn bản pháp quy
            </button>
            <button
              onClick={onOpenSelfEval}
              className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:opacity-95 text-white shadow-lg shadow-blue-600/25 transition-all flex items-center gap-2 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-yellow-300" />
              Tự Đánh Giá KPI
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenSelfEval}
              className="p-2 rounded-xl bg-blue-600 text-white text-xs font-bold"
            >
              Đánh giá
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-800 bg-slate-950/95 px-4 py-4 space-y-2">
          <button
            onClick={() => {
              setActiveTab("overview");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
              activeTab === "overview" ? "bg-blue-600 text-white" : "text-slate-300 bg-slate-900/60"
            }`}
          >
            Tổng quan hệ thống
          </button>
          <button
            onClick={() => {
              setActiveTab("cbql");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
              activeTab === "cbql" ? "bg-blue-600 text-white" : "text-slate-300 bg-slate-900/60"
            }`}
          >
            Công việc Cán bộ Quản lý (33)
          </button>
          <button
            onClick={() => {
              setActiveTab("gv");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
              activeTab === "gv" ? "bg-blue-600 text-white" : "text-slate-300 bg-slate-900/60"
            }`}
          >
            Công việc Giáo viên (27)
          </button>
          <button
            onClick={() => {
              setActiveTab("nv");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
              activeTab === "nv" ? "bg-blue-600 text-white" : "text-slate-300 bg-slate-900/60"
            }`}
          >
            Công việc Nhân viên (30)
          </button>
          <button
            onClick={() => {
              setActiveTab("downloads");
              setMobileMenuOpen(false);
            }}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium ${
              activeTab === "downloads" ? "bg-blue-600 text-white" : "text-slate-300 bg-slate-900/60"
            }`}
          >
            Tải các file Excel Import
          </button>
          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onOpenRegulations();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-200 text-center"
            >
              Văn bản pháp quy
            </button>
            <button
              onClick={() => {
                onOpenSelfEval();
                setMobileMenuOpen(false);
              }}
              className="px-3 py-2 text-xs font-bold rounded-xl bg-blue-600 text-white text-center"
            >
              Tự Đánh Giá
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
