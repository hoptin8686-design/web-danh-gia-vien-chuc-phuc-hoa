"use client";

import React from "react";
import { Award, ShieldCheck, Heart } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 py-8 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <Award className="w-5 h-5 text-blue-500" />
            <span className="font-bold text-white text-sm">TRƯỜNG THPT PHỤC HÒA</span>
            <span className="text-xs text-slate-500">|</span>
            <span className="text-xs text-slate-400">Sở GD&ĐT Cao Bằng</span>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Hệ thống chuẩn hóa danh mục công việc & đánh giá, xếp loại viên chức, người lao động 2026 - 2027.
          </p>
        </div>

        <div className="flex items-center gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-1.5 text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <ShieldCheck className="w-4 h-4" />
            Chuẩn Nghị Định 90 & 48
          </div>
        </div>
      </div>
    </footer>
  );
};
