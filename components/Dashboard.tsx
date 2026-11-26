"use client";

import React from "react";
import {
  Users,
  BookOpen,
  FileSpreadsheet,
  Award,
  Download,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { JOBS_DATA } from "@/lib/jobs_data";

interface DashboardProps {
  onSelectRole: (role: string, month?: number | null) => void;
  onOpenSelfEval: () => void;
  onOpenDownloads: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onSelectRole,
  onOpenSelfEval,
  onOpenDownloads,
}) => {
  const m11Counts = {
    cbql: JOBS_DATA.cbql.filter((j) => j.month === 11).length,
    gv: JOBS_DATA.gv.filter((j) => j.month === 11).length,
    ttcm: JOBS_DATA.ttcm.filter((j) => j.month === 11).length,
    nv: JOBS_DATA.nv.filter((j) => j.month === 11).length,
  };
  const totalM11 = m11Counts.cbql + m11Counts.gv + m11Counts.ttcm + m11Counts.nv;

  return (
    <div className="space-y-10 py-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Giai đoạn: Tháng 5/2026 - Tháng 11/2026 (Ngày Pháp luật 02/11, Thao giảng 20/11, KHKT & Chuẩn bị cuối HKI)
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Hệ Thống Đánh Giá, Xếp Loại Viên Chức Tháng 11/2026
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Cập nhật đồng bộ danh mục công việc chuẩn hóa{" "}
            <strong className="text-cyan-300">Tháng 11/2026 ({totalM11} đầu việc trọng tâm)</strong> theo Kế hoạch
            công tác tháng 11 và Báo cáo 115/BC-THPT của Trường THPT Phục Hòa. Tương thích 100% định dạng mẫu{" "}
            <code>Import công việc.xlsx</code> trên hệ thống đánh giá CCVC Sở GD&ĐT Cao Bằng.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onSelectRole("all", 11)}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-600/30 transition-all flex items-center gap-2 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-yellow-300" />
              Xem Công Việc Tháng 11/2026 ({totalM11})
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenSelfEval}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 active:scale-95"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              Tự Đánh Giá KPI Tháng 11
            </button>
            <button
              onClick={onOpenDownloads}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Tải Excel Import Tháng 11 (.xlsx)
            </button>
          </div>
        </div>
      </div>

      {/* Month 11 Highlight Strip */}
      <div className="glass-panel rounded-3xl p-6 border border-cyan-500/30 bg-gradient-to-r from-cyan-950/20 via-slate-900/90 to-indigo-950/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-1">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Trọng Tâm Đánh Giá Tháng 11/2026 (Từ 01/11 đến 30/11/2026)
            </div>
            <h3 className="text-lg font-bold text-white">
              Kỷ Niệm 44 Năm Ngày Nhà Giáo Việt Nam 20/11, Hội Giảng, Cuộc Thi KHKT & Kiểm Tra Nội Bộ
            </h3>
          </div>
          <a
            href="/downloads/Import_cong_viec_Thang_11_Tong_hop.xlsx"
            download="Import_cong_viec_Thang_11_Tong_hop.xlsx"
            className="shrink-0 px-4 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold transition-all flex items-center gap-2 shadow-md shadow-cyan-600/20"
          >
            <Download className="w-4 h-4" />
            Tải Trọn Bộ Tháng 11 ({totalM11} việc)
          </a>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
          <button
            onClick={() => onSelectRole("cbql", 11)}
            className="text-left p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 transition-all"
          >
            <div className="text-amber-400 font-bold mb-1">CBQL Tháng 11 ({m11Counts.cbql} việc)</div>
            <div className="text-slate-400 line-clamp-2">
              Ngoại khóa 02/11, Lễ 20/11, KHKT, Quy chế CTNB, kiểm tra VnEdu & cuối HKI
            </div>
          </button>
          <button
            onClick={() => onSelectRole("gv", 11)}
            className="text-left p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-emerald-500/40 transition-all"
          >
            <div className="text-emerald-400 font-bold mb-1">Giáo viên Tháng 11 ({m11Counts.gv} việc)</div>
            <div className="text-slate-400 line-clamp-2">
              Giảng dạy tuần 10-13, Thao giảng 20/11, hướng dẫn KHKT, ôn thi TN & HSG
            </div>
          </button>
          <button
            onClick={() => onSelectRole("ttcm", 11)}
            className="text-left p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-all"
          >
            <div className="text-cyan-400 font-bold mb-1">TTCM Tháng 11 ({m11Counts.ttcm} việc)</div>
            <div className="text-slate-400 line-clamp-2">
              Hội giảng 20/11, chấm KHKT, SHCM NCBH, kiểm tra VnEdu & Học bạ số, dạy 14 tiết
            </div>
          </button>
          <button
            onClick={() => onSelectRole("nv", 11)}
            className="text-left p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-purple-500/40 transition-all"
          >
            <div className="text-purple-400 font-bold mb-1">Nhân viên Tháng 11 ({m11Counts.nv} việc)</div>
            <div className="text-slate-400 line-clamp-2">
              Lương T11 & Quy chế CTNB, văn thư iOffice, học bổng 20/11, thiết bị, y tế, CNTT
            </div>
          </button>
        </div>
      </div>

      {/* 4 Role Categories Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* CBQL */}
        <div
          onClick={() => onSelectRole("cbql", 11)}
          className="group relative cursor-pointer glass-card rounded-2xl p-5 border border-slate-800 hover:border-amber-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30">
                Mới T11 (+{m11Counts.cbql})
              </span>
              <span className="text-2xl font-black text-amber-400">{JOBS_DATA.cbql.length}</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            Cán Bộ Quản Lý (CBQL)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Hiệu trưởng & Phó Hiệu trưởng: Chỉ đạo Ngày Pháp luật, Hội giảng 20/11, Cuộc thi KHKT, Quy chế
            chi tiêu nội bộ, kiểm tra nội bộ & Học bạ số.
          </p>
          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold pt-3 border-t border-slate-800">
            <span>{JOBS_DATA.cbql.length} công việc (T5-T11)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* GV */}
        <div
          onClick={() => onSelectRole("gv", 11)}
          className="group relative cursor-pointer glass-card rounded-2xl p-5 border border-slate-800 hover:border-emerald-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded-full border border-emerald-500/30">
                Mới T11 (+{m11Counts.gv})
              </span>
              <span className="text-2xl font-black text-emerald-400">{JOBS_DATA.gv.length}</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            Giáo Viên (GV)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Giáo viên bộ môn & GVCN: Giảng dạy tuần 10-13 chuẩn 5512, thao giảng 20/11, hướng dẫn KHKT,
            ôn thi TN THPT, bồi dưỡng HSG, VnEdu & chuẩn bị cuối HKI.
          </p>
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold pt-3 border-t border-slate-800">
            <span>{JOBS_DATA.gv.length} công việc (T5-T11)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* TTCM */}
        <div
          onClick={() => onSelectRole("ttcm", 11)}
          className="group relative cursor-pointer glass-card rounded-2xl p-5 border border-cyan-500/30 hover:border-cyan-400/60 bg-gradient-to-b from-cyan-950/20 to-transparent transition-all shadow-lg shadow-cyan-950/30"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 bg-cyan-500/20 px-2 py-0.5 rounded-full border border-cyan-500/30">
                Mới T11 (+{m11Counts.ttcm})
              </span>
              <span className="text-2xl font-black text-cyan-400">{JOBS_DATA.ttcm.length}</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
            Tổ Trưởng Chuyên Môn
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Quản lý tổ tháng 11, tổ chức Hội giảng 20/11, chấm Dự án KHKT, SHCM NCBH AI, kiểm tra VnEdu
            & Học bạ số, ma trận cuối HKI, dạy 14 tiết/tuần.
          </p>
          <div className="flex items-center justify-between text-xs text-cyan-400 font-semibold pt-3 border-t border-slate-800">
            <span>{m11Counts.ttcm} việc T11 ({JOBS_DATA.ttcm.length} T10-T11)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* NV */}
        <div
          onClick={() => onSelectRole("nv", 11)}
          className="group relative cursor-pointer glass-card rounded-2xl p-5 border border-slate-800 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-11 h-11 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full border border-purple-500/30">
                Mới T11 (+{m11Counts.nv})
              </span>
              <span className="text-2xl font-black text-purple-400">{JOBS_DATA.nv.length}</span>
            </div>
          </div>
          <h3 className="text-base font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            Nhân Viên (NV)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Kế toán, Văn thư, Thủ quỹ, Thiết bị - TN, Thư viện, Y tế, CNTT: Lương & Quy chế CTNB,
            văn bản iOffice, học bổng & âm thanh 20/11, truyền thông.
          </p>
          <div className="flex items-center justify-between text-xs text-purple-400 font-semibold pt-3 border-t border-slate-800">
            <span>{JOBS_DATA.nv.length} công việc (T5-T11)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>

      {/* 4 Ranking Levels according to Decree 90/2020 & 48/2023 */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Award className="w-5 h-5 text-yellow-400" />
              Khung Tiêu Chuẩn 04 Mức Xếp Loại Chất Lượng Viên Chức
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Căn cứ Nghị định 90/2020/NĐ-CP, Nghị định 48/2023/NĐ-CP và Quyết định 48/QĐ-THPT Trường THPT Phục Hòa
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Level 1 */}
          <div className="rounded-2xl bg-slate-900/90 border border-amber-500/30 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                Mức 1
              </span>
              <span className="text-xs font-medium text-slate-400">Tối đa 20%</span>
            </div>
            <h4 className="text-base font-bold text-amber-300 mb-2">Hoàn Thành Xuất Sắc</h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Hoàn thành 100% nhiệm vụ theo kế hoạch, vượt tiến độ hoặc chất lượng cao.</li>
              <li>Có sáng kiến, đề tài KH hoặc giải pháp đổi mới được cấp có thẩm quyền công nhận.</li>
              <li>Tập thể đơn vị do cá nhân phụ trách đạt danh hiệu tập thể tiên tiến trở lên (đối với CBQL).</li>
            </ul>
          </div>

          {/* Level 2 */}
          <div className="rounded-2xl bg-slate-900/90 border border-emerald-500/30 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                Mức 2
              </span>
              <span className="text-xs font-medium text-slate-400">Đại đa số</span>
            </div>
            <h4 className="text-base font-bold text-emerald-300 mb-2">Hoàn Thành Tốt</h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Hoàn thành 100% nhiệm vụ được giao đảm bảo đúng tiến độ và chất lượng.</li>
              <li>Chấp hành nghiêm đường lối, chính sách, quy chế và kỷ luật lao động.</li>
              <li>Có tinh thần trách nhiệm, phối hợp tốt trong công tác chuyên môn.</li>
            </ul>
          </div>

          {/* Level 3 */}
          <div className="rounded-2xl bg-slate-900/90 border border-blue-500/30 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2 py-0.5 rounded-md border border-blue-500/20">
                Mức 3
              </span>
              <span className="text-xs font-medium text-slate-400">Đạt yêu cầu</span>
            </div>
            <h4 className="text-base font-bold text-blue-300 mb-2">Hoàn Thành Nhiệm Vụ</h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Hoàn thành các nhiệm vụ được giao, có không quá 20% tiêu chí chưa bảo đảm tiến độ.</li>
              <li>Chấp hành nội quy, quy chế làm việc của cơ quan, trường học.</li>
              <li>Không vi phạm kỷ luật từ mức khiển trách trở lên.</li>
            </ul>
          </div>

          {/* Level 4 */}
          <div className="rounded-2xl bg-slate-900/90 border border-red-500/30 p-5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-red-500/10 rounded-full blur-xl pointer-events-none" />
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold uppercase tracking-wider text-red-400 bg-red-500/10 px-2 py-0.5 rounded-md border border-red-500/20">
                Mức 4
              </span>
              <span className="text-xs font-medium text-red-400">Xem xét kỷ luật</span>
            </div>
            <h4 className="text-base font-bold text-red-300 mb-2">Không Hoàn Thành</h4>
            <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
              <li>Có trên 20% tiêu chí/công việc không hoàn thành hoặc không bảo đảm chất lượng.</li>
              <li>Vi phạm kỷ luật trong thực hiện nhiệm vụ hoặc đạo đức nhà giáo.</li>
              <li>Gây mất đoàn kết nội bộ hoặc vi phạm pháp luật bị xử lý kỷ luật.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 4-Step Evaluation Workflow */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-400" />
          Quy Trình 04 Bước Đánh Giá, Xếp Loại Viên Chức Tháng 11/2026
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Thực hiện đánh giá, xếp loại viên chức, người lao động tháng 11/2026 từ ngày 01/12 đến ngày 03/12/2026 tại Trường THPT Phục Hòa
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 font-bold flex items-center justify-center text-sm mb-3">
              1
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Tự Đánh Giá & Import</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Viên chức, người lao động tải file Excel công việc tháng 11 chuẩn hóa, tự chấm điểm KPI và
              import lên hệ thống đánh giá CCVC.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500 text-indigo-400 font-bold flex items-center justify-center text-sm mb-3">
              2
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Họp Tổ Góp Ý</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tổ chuyên môn / Tổ văn phòng họp nhận xét, đánh giá kết quả tháng 11 từng thành viên; bỏ phiếu
              tín nhiệm đề nghị mức xếp loại.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-cyan-600/20 border border-cyan-500 text-cyan-400 font-bold flex items-center justify-center text-sm mb-3">
              3
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Hội Đồng Thẩm Định</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hội đồng Đánh giá xếp loại nhà trường thẩm định hồ sơ, rà soát tỷ lệ xuất sắc (tối đa 20%) và
              minh chứng thao giảng, KHKT, SKKN.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-bold flex items-center justify-center text-sm mb-3">
              4
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Hiệu Trưởng Quyết Định</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hiệu trưởng ban hành Quyết định công nhận kết quả xếp loại chất lượng tháng 11/2026, công khai
              và tổng hợp báo cáo Sở GD&ĐT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
