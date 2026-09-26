"use client";

import React, { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Copy,
  Check,
  Calendar,
  Layers,
  FileCheck,
  ChevronDown,
  Sparkles,
  Download,
  Users,
  BookOpen,
  FileSpreadsheet,
} from "lucide-react";
import { JobItem, ALL_JOBS, JOBS_DATA } from "@/lib/jobs_data";

interface JobExplorerProps {
  initialRole?: string;
  onOpenSelfEval: () => void;
}

export const JobExplorer: React.FC<JobExplorerProps> = ({
  initialRole = "all",
  onOpenSelfEval,
}) => {
  const [roleFilter, setRoleFilter] = useState<string>(initialRole);
  const [monthFilter, setMonthFilter] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter jobs
  const filteredJobs = useMemo(() => {
    return ALL_JOBS.filter((job) => {
      // Role filter
      if (roleFilter !== "all" && job.role.toLowerCase() !== roleFilter.toLowerCase()) {
        return false;
      }
      // Month filter
      if (monthFilter !== null && (job as any).month !== monthFilter) {
        return false;
      }
      // Search term
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase();
        return (
          job.name.toLowerCase().includes(query) ||
          job.spcvFull.toLowerCase().includes(query) ||
          job.notes.toLowerCase().includes(query) ||
          job.deadline.includes(query)
        );
      }
      return true;
    });
  }, [roleFilter, monthFilter, searchTerm]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getRoleBadge = (role: string) => {
    switch (role) {
      case "CBQL":
        return "bg-amber-500/10 text-amber-400 border-amber-500/20";
      case "GV":
        return "bg-emerald-500/10 text-emerald-400 border-emerald-500/20";
      case "NV":
        return "bg-purple-500/10 text-purple-400 border-purple-500/20";
      default:
        return "bg-blue-500/10 text-blue-400 border-blue-500/20";
    }
  };

  return (
    <div className="space-y-6 py-6">
      {/* Search & Filter Header */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          {/* Role Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-800 overflow-x-auto">
            <button
              onClick={() => setRoleFilter("all")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                roleFilter === "all"
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Tất Cả ({ALL_JOBS.length})
            </button>
            <button
              onClick={() => setRoleFilter("cbql")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                roleFilter === "cbql"
                  ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              CBQL ({JOBS_DATA.cbql.length})
            </button>
            <button
              onClick={() => setRoleFilter("gv")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                roleFilter === "gv"
                  ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              Giáo Viên ({JOBS_DATA.gv.length})
            </button>
            <button
              onClick={() => setRoleFilter("nv")}
              className={`px-3.5 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                roleFilter === "nv"
                  ? "bg-purple-600 text-white shadow-md shadow-purple-600/30"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <FileSpreadsheet className="w-3.5 h-3.5" />
              Nhân Viên ({JOBS_DATA.nv.length})
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên công việc, mã SPCV, minh chứng..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white"
              >
                Xóa
              </button>
            )}
          </div>
        </div>

        {/* Month Filter */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs font-semibold text-slate-400">Lọc theo tháng:</span>
          <div className="flex items-center gap-1.5 flex-wrap">
            <button
              onClick={() => setMonthFilter(null)}
              className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                monthFilter === null
                  ? "bg-blue-600 text-white"
                  : "text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
              }`}
            >
              Tất cả tháng
            </button>
            {[5, 6, 7, 8, 9].map((m) => (
              <button
                key={m}
                onClick={() => setMonthFilter(monthFilter === m ? null : m)}
                className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                  monthFilter === m
                    ? "bg-indigo-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white bg-slate-900 border border-slate-800"
                }`}
              >
                Tháng {m}/2026
              </button>
            ))}
          </div>
        </div>

        {/* Quick Download Links */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="text-slate-400 flex items-center gap-2">
            <span className="font-semibold text-white">Kết quả tìm kiếm:</span>
            <span>{filteredJobs.length} công việc</span>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={`/downloads/Import_cong_viec_${
                roleFilter === "cbql"
                  ? "CBQL"
                  : roleFilter === "gv"
                  ? "GV"
                  : roleFilter === "nv"
                  ? "NV"
                  : "Tong_hop_tat_ca"
              }.xlsx`}
              download
              className="px-3 py-1.5 rounded-lg bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/30 font-semibold transition-all flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              Tải File Excel Nhóm Hiện Tại
            </a>
            <button
              onClick={onOpenSelfEval}
              className="px-3 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 font-semibold transition-all flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Tự Đánh Giá Nhóm Này
            </button>
          </div>
        </div>
      </div>

      {/* Jobs List / Table */}
      <div className="space-y-4">
        {filteredJobs.length === 0 ? (
          <div className="glass-panel rounded-2xl p-12 text-center border border-slate-800">
            <Layers className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h4 className="text-base font-bold text-white mb-1">Không tìm thấy công việc phù hợp</h4>
            <p className="text-xs text-slate-400 mb-4">
              Vui lòng thử lại với từ khóa khác hoặc chuyển sang nhóm đối tượng khác.
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setRoleFilter("all");
                setMonthFilter(null);
              }}
              className="px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 text-white"
            >
              Đặt lại bộ lọc
            </button>
          </div>
        ) : (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="glass-card rounded-2xl p-5 border border-slate-800 hover:border-slate-700 space-y-3 transition-all"
            >
              {/* Top Row: Role, TT, SPCV, Deadline */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getRoleBadge(
                      job.role
                    )}`}
                  >
                    {job.role}
                  </span>
                  <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2 py-0.5 rounded-md border border-slate-800">
                    TT: #{job.tt}
                  </span>
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-md border border-cyan-500/20">
                    {job.spcvCode}
                  </span>
                  {(job as any).month && (
                    <span className="text-xs font-semibold text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded-md border border-indigo-500/20">
                      T.{(job as any).month}/2026
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Calendar className="w-3.5 h-3.5 text-blue-400" />
                  <span>Hạn hoàn thành:</span>
                  <span className="font-semibold text-white bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {job.deadline}
                  </span>
                </div>
              </div>

              {/* Job Title */}
              <div>
                <h4 className="text-base font-bold text-white leading-snug">{job.name}</h4>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
                  <span className="text-slate-500">Thuộc sản phẩm/công việc:</span>
                  <span className="text-slate-300 font-medium">{job.spcvName}</span>
                </p>
              </div>

              {/* KPI Badges & Notes */}
              <div className="pt-3 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* KPI Metrics */}
                <div className="flex items-center gap-3 text-xs">
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Số lượng:</span>
                    <span className="font-bold text-emerald-400">{job.targetQuantity}%</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Chất lượng:</span>
                    <span className="font-bold text-emerald-400">{job.targetQuality}%</span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                    <span className="text-slate-400">Tiến độ:</span>
                    <span className="font-bold text-emerald-400">{job.targetProgress}%</span>
                  </div>
                </div>

                {/* Evidence / Copy button */}
                <div className="flex items-center gap-2">
                  <span className="text-xs text-slate-400 italic truncate max-w-xs sm:max-w-md">
                    MC: {job.notes}
                  </span>
                  <button
                    onClick={() => handleCopy(job.id, job.name)}
                    title="Sao chép tên công việc"
                    className="p-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 transition-all flex items-center gap-1"
                  >
                    {copiedId === job.id ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
