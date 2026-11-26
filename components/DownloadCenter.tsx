"use client";

import React from "react";
import {
  FileSpreadsheet,
  Download,
  CheckCircle2,
  AlertTriangle,
  Info,
  Users,
  BookOpen,
  Layers,
  ArrowDownCircle,
  Award,
  Sparkles,
} from "lucide-react";

export const DownloadCenter: React.FC = () => {
  const month11Files = [
    {
      title: "Tổng Hợp Toàn Trường - Tháng 11/2026",
      filename: "Import_cong_viec_Thang_11_Tong_hop.xlsx",
      path: "/downloads/Import_cong_viec_Thang_11_Tong_hop.xlsx",
      count: "44 công việc",
      desc: "Bao gồm toàn bộ danh mục công việc Tháng 11/2026 của CBQL, Giáo viên, TTCM và Nhân viên.",
      badge: "Mới Tháng 11",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-300",
      icon: Layers,
    },
    {
      title: "Cán Bộ Quản Lý (CBQL) - Tháng 11/2026",
      filename: "Import_cong_viec_CBQL_Thang_11.xlsx",
      path: "/downloads/Import_cong_viec_CBQL_Thang_11.xlsx",
      count: "10 công việc",
      desc: "Ngoại khóa Ngày Pháp luật 02/11, Kế hoạch 20/11, Hội giảng, Cuộc thi KHKT, Quy chế CTNB, kiểm tra VnEdu & cuối HKI.",
      badge: "CBQL T11",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      icon: Users,
    },
    {
      title: "Giáo Viên (GV) - Tháng 11/2026",
      filename: "Import_cong_viec_GV_Thang_11.xlsx",
      path: "/downloads/Import_cong_viec_GV_Thang_11.xlsx",
      count: "12 công việc",
      desc: "Giảng dạy tuần 10-13 chuẩn 5512, Thao giảng/Hội giảng 20/11, hướng dẫn KHKT, ôn thi TN & HSG, điểm VnEdu, BDTX AI.",
      badge: "GV T11",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      icon: BookOpen,
    },
    {
      title: "Tổ Trưởng Chuyên Môn (TTCM) - Tháng 11/2026",
      filename: "Import_cong_viec_TTCM_Thang_11.xlsx",
      path: "/downloads/Import_cong_viec_TTCM_Thang_11.xlsx",
      count: "14 công việc",
      desc: "Kế hoạch tổ T11, Hội giảng 20/11, chấm KHKT, SHCM NCBH, kiểm tra nội bộ & Sổ điểm VnEdu/Học bạ số, dạy 14 tiết/tuần.",
      badge: "TTCM T11",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      icon: Award,
    },
    {
      title: "Nhân Viên (NV) - Tháng 11/2026",
      filename: "Import_cong_viec_NV_Thang_11.xlsx",
      path: "/downloads/Import_cong_viec_NV_Thang_11.xlsx",
      count: "8 công việc",
      desc: "Lương T11 & Quy chế CTNB, văn thư iOffice, học bổng & quỹ 20/11, thiết bị âm thanh 20/11, y tế, thư viện, website & CSDL.",
      badge: "NV T11",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      icon: FileSpreadsheet,
    },
  ];

  const cumulativeFiles = [
    {
      title: "Tổng Hợp Giai Đoạn T5 - T11/2026 (CBQL + GV + NV)",
      filename: "Import_cong_viec_Tong_hop_tat_ca.xlsx",
      path: "/downloads/Import_cong_viec_Tong_hop_tat_ca.xlsx",
      count: "150 công việc",
      desc: "Chứa đầy đủ danh mục công việc của CBQL, Giáo viên và Nhân viên từ Tháng 5 đến hết Tháng 11/2026.",
      badge: "Đầy đủ T5-T11",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      icon: Layers,
    },
    {
      title: "File Cán Bộ Quản Lý (CBQL) - T5 đến T11/2026",
      filename: "Import_cong_viec_CBQL.xlsx",
      path: "/downloads/Import_cong_viec_CBQL.xlsx",
      count: "53 công việc",
      desc: "Dành cho Hiệu trưởng và các Phó Hiệu trưởng tổng hợp toàn bộ công việc từ Tháng 5 đến Tháng 11/2026.",
      badge: "CBQL T5-T11",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      icon: Users,
    },
    {
      title: "File Giáo Viên (GV) - T5 đến T11/2026",
      filename: "Import_cong_viec_GV.xlsx",
      path: "/downloads/Import_cong_viec_GV.xlsx",
      count: "51 công việc",
      desc: "Chứa toàn bộ công việc của Giáo viên bộ môn và GVCN từ Tháng 5/2026 đến hết Tháng 11/2026.",
      badge: "GV T5-T11",
      color: "border-teal-500/30 bg-teal-500/10 text-teal-400",
      icon: BookOpen,
    },
    {
      title: "File Tổ Trưởng Chuyên Môn (TTCM) - T10 & T11/2026",
      filename: "Import_cong_viec_TTCM.xlsx",
      path: "/downloads/Import_cong_viec_TTCM.xlsx",
      count: "28 công việc",
      desc: "Tổng hợp công việc Tổ trưởng Chuyên môn Tháng 10 và Tháng 11/2026 (mỗi tháng 14 công việc).",
      badge: "TTCM T10-T11",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      icon: Award,
    },
    {
      title: "File Nhân Viên (NV) - T5 đến T11/2026",
      filename: "Import_cong_viec_NV.xlsx",
      path: "/downloads/Import_cong_viec_NV.xlsx",
      count: "46 công việc",
      desc: "Dành cho Kế toán, Văn thư, Thủ quỹ, Thiết bị - Thí nghiệm, Thư viện, Y tế, CNTT (T5 - T11/2026).",
      badge: "NV T5-T11",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      icon: FileSpreadsheet,
    },
    {
      title: "File Giáo Viên (GV) - Tháng 10/2026 (Tham chiếu)",
      filename: "Import_cong_viec_GV_Thang_10.xlsx",
      path: "/downloads/Import_cong_viec_GV_Thang_10.xlsx",
      count: "12 công việc",
      desc: "Lưu trữ danh mục công việc Giáo viên Tháng 10/2026 (kiểm tra giữa HK1).",
      badge: "Lưu trữ T10",
      color: "border-slate-600/40 bg-slate-800/60 text-slate-300",
      icon: BookOpen,
    },
    {
      title: "File Tổ Trưởng CM (TTCM) - Tháng 10/2026 (Tham chiếu)",
      filename: "Import_cong_viec_TTCM_Thang_10.xlsx",
      path: "/downloads/Import_cong_viec_TTCM_Thang_10.xlsx",
      count: "14 công việc",
      desc: "Lưu trữ danh mục công việc Tổ trưởng Chuyên môn Tháng 10/2026.",
      badge: "Lưu trữ T10",
      color: "border-slate-600/40 bg-slate-800/60 text-slate-300",
      icon: Award,
    },
    {
      title: "File Gốc Import Công Việc (Chuẩn Sở GD&ĐT)",
      filename: "Import công việc.xlsx",
      path: "/downloads/Import công việc.xlsx",
      count: "150 công việc",
      desc: "File định dạng gốc của phần mềm đánh giá CCVC Sở GD&ĐT Cao Bằng đã đồng bộ dữ liệu T5-T11/2026.",
      badge: "File gốc",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      icon: ArrowDownCircle,
    },
  ];

  const renderGrid = (items: typeof month11Files, accentButton: boolean) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((file, idx) => {
        const Icon = file.icon;
        return (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between space-y-4"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${file.color}`}>
                  {file.badge}
                </span>
                <span className="text-xs font-semibold text-slate-400 bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                  {file.count}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1.5 flex items-center gap-2">
                <Icon className="w-5 h-5 text-slate-300" />
                {file.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-3">{file.desc}</p>
              <div className="text-xs font-mono text-slate-500 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800/80 truncate">
                📄 {file.filename}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800/80">
              <a
                href={file.path}
                download={file.filename}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white transition-all flex items-center justify-center gap-2 shadow-md active:scale-98 ${
                  accentButton
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-cyan-600/20"
                    : "bg-blue-600 hover:bg-blue-500 shadow-blue-600/20"
                }`}
              >
                <Download className="w-4 h-4" />
                Tải Về Máy Tính (.xlsx)
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-8 py-6">
      {/* Title */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
          <FileSpreadsheet className="w-7 h-7 text-emerald-400" />
          Trung Tâm Tải Về File Mẫu Import Công Việc (.xlsx)
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Tất cả các file Excel dưới đây đã được chuẩn hóa theo đúng cấu trúc cột, mã sản phẩm công việc
          (SPCV) và biểu mẫu của Sở GD&ĐT Cao Bằng. Quý thầy cô chọn đúng nhóm đối tượng của{" "}
          <strong className="text-cyan-300">Tháng 11/2026</strong> để tải về và import trực tiếp lên hệ thống.
        </p>
      </div>

      {/* Month 11 Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">
            Bộ File Import Công Việc Tháng 11/2026 (Chuẩn Đánh Giá Tháng 11)
          </h3>
        </div>
        {renderGrid(month11Files, true)}
      </div>

      {/* Cumulative Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-400" />
          <h3 className="text-lg font-bold text-white">
            Bộ File Tổng Hợp Giai Đoạn (T5 - T11/2026) & Lưu Trữ Tháng 10
          </h3>
        </div>
        {renderGrid(cumulativeFiles, false)}
      </div>

      {/* Import Guidance Notice */}
      <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-400" />
          Quy Tắc Import Bắt Buộc Khi Đưa Lên Hệ Thống
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs text-slate-300">
          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-amber-400 flex items-center gap-1">
              <AlertTriangle className="w-3.5 h-3.5" />
              1. Cấu trúc dòng
            </span>
            <p className="text-slate-400">
              Dữ liệu từ dòng 1 đến dòng 8 là hướng dẫn và tiêu đề. Hệ thống bắt đầu nạp dữ liệu từ dòng 9
              trở đi. Không được xóa dòng 8.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              2. Đánh số cột TT
            </span>
            <p className="text-slate-400">
              Cột TT đánh số tăng dần từ 1 cho từng sản phẩm/công việc. Ví dụ sản phẩm A có 3 công việc con
              thì đánh số 1, 2, 3.
            </p>
          </div>

          <div className="bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-1.5">
            <span className="font-bold text-cyan-400 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              3. Chỉ số KPI
            </span>
            <p className="text-slate-400">
              Các cột Số lượng, Chất lượng, Tiến độ nhập số từ 0 đến 100 (tỷ lệ 100% hoàn thành). Không nhập
              chữ vào cột số.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
