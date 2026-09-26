"use client";

import React from "react";
import {
  Users,
  BookOpen,
  FileSpreadsheet,
  Award,
  CheckCircle2,
  AlertCircle,
  Clock,
  Download,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
  Sparkles,
  Layers,
} from "lucide-react";

interface DashboardProps {
  onSelectRole: (role: string) => void;
  onOpenSelfEval: () => void;
  onOpenDownloads: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  onSelectRole,
  onOpenSelfEval,
  onOpenDownloads,
}) => {
  return (
    <div className="space-y-10 py-6">
      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950/40 to-slate-900 border border-slate-800 p-8 sm:p-10 shadow-2xl">
        <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 -mb-12 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
            Giai đoạn: Tháng 5/2026 - Tháng 9/2026 (Kết thúc năm học, Thi TN, Bồi dưỡng Hè & Đầu năm học mới)
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Hệ Thống Thiết Kế & Quản Lý Công Việc Đánh Giá, Xếp Loại Viên Chức
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Giải pháp số hóa toàn diện nội dung công việc chính của <strong>Cán bộ Quản lý (CBQL)</strong>,{" "}
            <strong>Giáo viên (GV)</strong> và <strong>Nhân viên (NV)</strong> Trường THPT Phục Hòa. Tương
            thích 100% định dạng mẫu <code>Import công việc.xlsx</code> trên hệ thống đánh giá CCVC Sở GD&ĐT Cao Bằng.
          </p>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={onOpenSelfEval}
              className="px-5 py-3 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all flex items-center gap-2 active:scale-95"
            >
              <Award className="w-4 h-4 text-yellow-300" />
              Bắt Đầu Tự Đánh Giá KPI
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onOpenDownloads}
              className="px-5 py-3 rounded-xl font-semibold text-sm bg-slate-800/90 hover:bg-slate-700 text-white border border-slate-700 transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              Tải File Excel Import (.xlsx)
            </button>
          </div>
        </div>
      </div>

      {/* 3 Role Categories Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* CBQL */}
        <div
          onClick={() => onSelectRole("cbql")}
          className="group relative cursor-pointer glass-card rounded-2xl p-6 border border-slate-800 hover:border-amber-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-amber-400">33</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
            Cán Bộ Quản Lý (CBQL)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Hiệu trưởng & các Phó Hiệu trưởng: Quản trị chiến lược, chuyên môn sư phạm, kiểm tra nội bộ,
            ngân sách, CSVC và chuyển đổi số.
          </p>
          <div className="flex items-center justify-between text-xs text-amber-400 font-semibold pt-3 border-t border-slate-800">
            <span>Xem 33 công việc chuẩn</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* GV */}
        <div
          onClick={() => onSelectRole("gv")}
          className="group relative cursor-pointer glass-card rounded-2xl p-6 border border-slate-800 hover:border-emerald-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-emerald-400">27</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
            Giáo Viên (GV)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Giáo viên bộ môn, GVCN & Tổ trưởng CM: KHDH theo CV 5512, tích hợp AI, bồi dưỡng HSG, phụ đạo
            học sinh, công tác chủ nhiệm, nghiên cứu sáng kiến.
          </p>
          <div className="flex items-center justify-between text-xs text-emerald-400 font-semibold pt-3 border-t border-slate-800">
            <span>Xem 27 công việc chuẩn</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* NV */}
        <div
          onClick={() => onSelectRole("nv")}
          className="group relative cursor-pointer glass-card rounded-2xl p-6 border border-slate-800 hover:border-purple-500/40 transition-all"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
              <FileSpreadsheet className="w-6 h-6" />
            </div>
            <span className="text-2xl font-black text-purple-400">30</span>
          </div>
          <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
            Nhân Viên (NV)
          </h3>
          <p className="text-xs text-slate-400 leading-relaxed mb-4">
            Kế toán, Văn thư, Thủ quỹ, Thiết bị - Thí nghiệm, Thư viện, Y tế, CNTT: Nghiệp vụ tài chính, lưu
            trữ, con dấu, dịch vụ công, chăm sóc sức khỏe.
          </p>
          <div className="flex items-center justify-between text-xs text-purple-400 font-semibold pt-3 border-t border-slate-800">
            <span>Xem 30 công việc chuẩn</span>
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
              Căn cứ theo Nghị định số 90/2020/NĐ-CP và Nghị định số 48/2023/NĐ-CP của Chính phủ
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
          Quy Trình 04 Bước Đánh Giá, Xếp Loại Viên Chức
        </h3>
        <p className="text-xs text-slate-400 mb-6">
          Quy trình thực hiện chuẩn mực hàng tháng và tổng kết năm học tại Trường THPT Phục Hòa
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-500 text-blue-400 font-bold flex items-center justify-center text-sm mb-3">
              1
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Tự Đánh Giá</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Viên chức, người lao động căn cứ kết quả thực hiện các công việc trong danh mục chuẩn để tự
              chấm điểm và xếp loại.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-indigo-600/20 border border-indigo-500 text-indigo-400 font-bold flex items-center justify-center text-sm mb-3">
              2
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Họp Tổ Góp Ý</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Tổ chuyên môn / Tổ văn phòng họp, nhận xét, đánh giá từng thành viên; bỏ phiếu tín nhiệm đề
              nghị mức xếp loại.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-cyan-600/20 border border-cyan-500 text-cyan-400 font-bold flex items-center justify-center text-sm mb-3">
              3
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Hội Đồng Thẩm Định</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hội đồng Đánh giá xếp loại nhà trường thẩm định hồ sơ, rà soát tỷ lệ xuất sắc (tối đa 20%) và
              minh chứng sáng kiến.
            </p>
          </div>

          <div className="bg-slate-900/80 rounded-2xl p-5 border border-slate-800 relative">
            <div className="w-8 h-8 rounded-full bg-emerald-600/20 border border-emerald-500 text-emerald-400 font-bold flex items-center justify-center text-sm mb-3">
              4
            </div>
            <h4 className="font-bold text-white text-sm mb-1.5">Hiệu Trưởng Quyết Định</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Hiệu trưởng ban hành Quyết định công nhận kết quả xếp loại chất lượng, công khai và báo cáo Sở
              GD&ĐT.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
