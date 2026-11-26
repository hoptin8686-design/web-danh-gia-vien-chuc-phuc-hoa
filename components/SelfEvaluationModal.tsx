"use client";

import React, { useState } from "react";
import { X, Award, Sparkles, Download } from "lucide-react";
import confetti from "canvas-confetti";
import { JobItem, JOBS_DATA } from "@/lib/jobs_data";

interface SelfEvaluationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SelfEvaluationModal: React.FC<SelfEvaluationModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [role, setRole] = useState<"cbql" | "gv" | "nv" | "ttcm">("ttcm");
  const [evalMonth, setEvalMonth] = useState<"11" | "10" | "all">("11");
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("Tổ trưởng Chuyên môn");
  const [hasInitiative, setHasInitiative] = useState(true);
  const [deductions, setDeductions] = useState<number>(0);
  const [calculated, setCalculated] = useState(false);

  if (!isOpen) return null;

  const allRoleJobs: JobItem[] = JOBS_DATA[role];
  const currentJobs: JobItem[] =
    evalMonth === "all"
      ? allRoleJobs
      : allRoleJobs.filter((j) => j.month === Number(evalMonth));

  const getExcelHref = () => {
    if (evalMonth === "11") {
      if (role === "cbql") return "/downloads/Import_cong_viec_CBQL_Thang_11.xlsx";
      if (role === "gv") return "/downloads/Import_cong_viec_GV_Thang_11.xlsx";
      if (role === "ttcm") return "/downloads/Import_cong_viec_TTCM_Thang_11.xlsx";
      return "/downloads/Import_cong_viec_NV_Thang_11.xlsx";
    }
    if (evalMonth === "10") {
      if (role === "gv") return "/downloads/Import_cong_viec_GV_Thang_10.xlsx";
      if (role === "ttcm") return "/downloads/Import_cong_viec_TTCM_Thang_10.xlsx";
    }
    if (role === "cbql") return "/downloads/Import_cong_viec_CBQL.xlsx";
    if (role === "gv") return "/downloads/Import_cong_viec_GV.xlsx";
    if (role === "ttcm") return "/downloads/Import_cong_viec_TTCM.xlsx";
    return "/downloads/Import_cong_viec_NV.xlsx";
  };

  const handleCalculate = () => {
    setCalculated(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  const getProposedRanking = () => {
    const finalScore = Math.max(0, 100 - deductions);
    if (finalScore >= 95 && hasInitiative && deductions === 0) {
      return {
        level: "Hoàn Thành Xuất Sắc Nhiệm Vụ",
        color: "text-amber-400 bg-amber-500/10 border-amber-500/30",
        desc: "Đạt đủ điều kiện: 100% nhiệm vụ hoàn thành xuất sắc + có sáng kiến/giải pháp đổi mới được ghi nhận + không bị trừ điểm thi đua.",
      };
    }
    if (finalScore >= 80 && deductions < 15) {
      return {
        level: "Hoàn Thành Tốt Nhiệm Vụ",
        color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
        desc: "Đạt đủ điều kiện: 100% nhiệm vụ hoàn thành đúng tiến độ và chất lượng theo kế hoạch.",
      };
    }
    if (finalScore >= 50) {
      return {
        level: "Hoàn Thành Nhiệm Vụ",
        color: "text-blue-400 bg-blue-500/10 border-blue-500/30",
        desc: "Hoàn thành các nhiệm vụ cơ bản, có một số tiêu chí cần cải thiện.",
      };
    }
    return {
      level: "Không Hoàn Thành Nhiệm Vụ",
      color: "text-red-400 bg-red-500/10 border-red-500/30",
      desc: "Có trên 20% nhiệm vụ chưa hoàn thành hoặc bị xử lý kỷ luật theo quy định.",
    };
  };

  const ranking = getProposedRanking();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Title */}
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Công Cụ Tự Đánh Giá
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Phiếu Tự Đánh Giá & Dự Kiến Xếp Loại Viên Chức
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Theo Nghị định 90/2020/NĐ-CP, Nghị định 48/2023/NĐ-CP & Quy chế THPT Phục Hòa
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Kỳ đánh giá:
              </label>
              <select
                value={evalMonth}
                onChange={(e) => setEvalMonth(e.target.value as "11" | "10" | "all")}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-cyan-500/40 text-sm text-cyan-300 font-semibold focus:outline-none focus:border-blue-500"
              >
                <option value="11">Tháng 11/2026 (Mới)</option>
                <option value="10">Tháng 10/2026</option>
                <option value="all">Giai đoạn T5 - T11/2026</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Họ và tên viên chức:
              </label>
              <input
                type="text"
                placeholder="Ví dụ: Đàm Thị Hợp"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Nhóm đối tượng:
              </label>
              <select
                value={role}
                onChange={(e) => {
                  const nextRole = e.target.value as "cbql" | "gv" | "nv" | "ttcm";
                  setRole(nextRole);
                  setPosition(
                    nextRole === "cbql"
                      ? "Hiệu trưởng / Phó Hiệu trưởng"
                      : nextRole === "ttcm"
                      ? "Tổ trưởng Chuyên môn"
                      : nextRole === "gv"
                      ? "Giáo viên"
                      : "Nhân viên"
                  );
                }}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="cbql">Cán bộ Quản lý (CBQL)</option>
                <option value="ttcm">Tổ trưởng Chuyên môn (TTCM)</option>
                <option value="gv">Giáo viên (GV)</option>
                <option value="nv">Nhân viên (NV)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Chức vụ / Vị trí công tác:
              </label>
              <input
                type="text"
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Điểm trừ vi phạm (nếu có):
              </label>
              <input
                type="number"
                min="0"
                max="100"
                value={deductions}
                onChange={(e) => setDeductions(Number(e.target.value))}
                className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Sáng kiến kinh nghiệm checkbox */}
          <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-white block">
                Có sáng kiến kinh nghiệm / Đề tài NCKH / Giải pháp đổi mới:
              </span>
              <span className="text-[11px] text-slate-400">
                (Điều kiện bắt buộc đối với mức Hoàn thành xuất sắc nhiệm vụ)
              </span>
            </div>
            <input
              type="checkbox"
              checked={hasInitiative}
              onChange={(e) => setHasInitiative(e.target.checked)}
              className="w-5 h-5 accent-blue-600 rounded cursor-pointer"
            />
          </div>
        </div>

        {/* Calculate Button */}
        <button
          onClick={handleCalculate}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-98 transition-all"
        >
          <Award className="w-4 h-4 text-yellow-300" />
          Tính Điểm & Xếp Loại Tự Động
        </button>

        {/* Results Card */}
        {calculated && (
          <div className={`p-5 rounded-2xl border ${ranking.color} space-y-3 animate-fade-in`}>
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400">
                {fullName ? `${fullName} (${position})` : "Kết quả dự kiến"} —{" "}
                {evalMonth === "all" ? "T5-T11/2026" : `Tháng ${evalMonth}/2026`}:
              </span>
              <span className="text-sm font-bold">
                Điểm thi đua: {Math.max(0, 100 - deductions)} / 100
              </span>
            </div>
            <h4 className="text-lg font-black">{ranking.level}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{ranking.desc}</p>
            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs gap-2 flex-wrap">
              <span className="text-slate-400">
                Đã hoàn thành {currentJobs.length}/{currentJobs.length} công việc theo danh mục
              </span>
              <a
                href={getExcelHref()}
                download
                className="font-bold underline text-cyan-400 flex items-center gap-1"
              >
                <Download className="w-3.5 h-3.5" />
                Tải file Excel để nộp
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
