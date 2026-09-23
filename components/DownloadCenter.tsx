"use client";

import React from "react";
import {
  FileSpreadsheet,
  Download,
  CheckCircle2,
  AlertTriangle,
  Info,
  ExternalLink,
  Users,
  BookOpen,
  Layers,
  ArrowDownCircle,
} from "lucide-react";

export const DownloadCenter: React.FC = () => {
  const files = [
    {
      title: "File Tổng Hợp Toàn Bộ (CBQL + GV + NV)",
      filename: "Import_cong_viec_Tong_hop_tat_ca.xlsx",
      path: "/downloads/Import_cong_viec_Tong_hop_tat_ca.xlsx",
      count: "67 công việc",
      desc: "Chứa đầy đủ danh mục công việc của Cán bộ Quản lý, Giáo viên và Nhân viên toàn trường.",
      badge: "Đầy đủ nhất",
      color: "border-blue-500/30 bg-blue-500/10 text-blue-400",
      icon: Layers,
    },
    {
      title: "File Dành Riêng Cho Cán Bộ Quản Lý (CBQL)",
      filename: "Import_cong_viec_CBQL.xlsx",
      path: "/downloads/Import_cong_viec_CBQL.xlsx",
      count: "25 công việc",
      desc: "Dành cho Hiệu trưởng và các Phó Hiệu trưởng thực hiện import công việc cá nhân.",
      badge: "CBQL",
      color: "border-amber-500/30 bg-amber-500/10 text-amber-400",
      icon: Users,
    },
    {
      title: "File Dành Riêng Cho Giáo Viên (GV)",
      filename: "Import_cong_viec_GV.xlsx",
      path: "/downloads/Import_cong_viec_GV.xlsx",
      count: "20 công việc",
      desc: "Dành cho Giáo viên bộ môn, Giáo viên chủ nhiệm và Tổ trưởng chuyên môn.",
      badge: "Giáo viên",
      color: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
      icon: BookOpen,
    },
    {
      title: "File Dành Riêng Cho Nhân Viên (NV)",
      filename: "Import_cong_viec_NV.xlsx",
      path: "/downloads/Import_cong_viec_NV.xlsx",
      count: "22 công việc",
      desc: "Dành cho Kế toán, Văn thư, Thủ quỹ, Thiết bị - Thí nghiệm, Thư viện, Y tế, CNTT.",
      badge: "Nhân viên",
      color: "border-purple-500/30 bg-purple-500/10 text-purple-400",
      icon: FileSpreadsheet,
    },
    {
      title: "File Gốc Import Công Việc (Desktop)",
      filename: "Import công việc.xlsx",
      path: "/downloads/Import công việc.xlsx",
      count: "File gốc chuẩn hóa",
      desc: "File định dạng gốc của phần mềm, đồng bộ với file trên Màn hình nền (Desktop) của máy tính.",
      badge: "File gốc",
      color: "border-cyan-500/30 bg-cyan-500/10 text-cyan-400",
      icon: ArrowDownCircle,
    },
  ];

  return (
    <div className="space-y-8 py-6">
      {/* Title */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-slate-800">
        <h2 className="text-2xl font-extrabold text-white flex items-center gap-3">
          <FileSpreadsheet className="w-7 h-7 text-emerald-400" />
          Trung Tâm Tải Về File Mẫu Import Công Việc (.xlsx)
        </h2>
        <p className="text-slate-400 text-sm mt-2 max-w-3xl leading-relaxed">
          Tất cả các file Excel dưới đây đã được lập trình tự động điền đầy đủ dữ liệu công việc chuẩn hóa
          theo đúng quy chế và biểu mẫu của Sở GD&ĐT Cao Bằng. Quý thầy cô chỉ cần tải về và import trực
          tiếp lên phần mềm quản lý viên chức.
        </p>
      </div>

      {/* Files List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {files.map((file, idx) => {
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
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white transition-all flex items-center justify-center gap-2 shadow-md shadow-blue-600/20 active:scale-98"
                >
                  <Download className="w-4 h-4" />
                  Tải Về Máy Tính (.xlsx)
                </a>
              </div>
            </div>
          );
        })}
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
