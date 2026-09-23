"use client";

import React, { useState } from "react";
import { X, BookOpen, FileText, CheckCircle2, ShieldAlert } from "lucide-react";

interface RegulationsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegulationsModal: React.FC<RegulationsModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"nd90" | "nd48" | "truong">("truong");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 my-8 max-h-[90vh] flex flex-col">
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
            <BookOpen className="w-3.5 h-3.5 text-blue-400" />
            Căn Cứ Pháp Lý
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Văn Bản Pháp Quy Về Đánh Giá, Xếp Loại Viên Chức
          </h3>
        </div>

        {/* Tabs */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab("truong")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "truong"
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white bg-slate-950"
            }`}
          >
            Quy Chế THPT Phục Hòa
          </button>
          <button
            onClick={() => setActiveTab("nd90")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "nd90"
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white bg-slate-950"
            }`}
          >
            Nghị định 90/2020/NĐ-CP
          </button>
          <button
            onClick={() => setActiveTab("nd48")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === "nd48"
                ? "bg-blue-600 text-white"
                : "text-slate-400 hover:text-white bg-slate-950"
            }`}
          >
            Nghị định 48/2023/NĐ-CP (Sửa đổi)
          </button>
        </div>

        {/* Tab Content */}
        <div className="overflow-y-auto space-y-4 text-xs text-slate-300 pr-2">
          {activeTab === "truong" && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-amber-400">
                Quy Định Tiêu Chí Thi Đua & Thang Điểm Trường THPT Phục Hòa
              </h4>
              <p>
                - Thang điểm chuẩn: <strong>100 điểm</strong>/tháng đối với mỗi CBQL, Giáo viên và Nhân
                viên. Điểm cuối năm là trung bình cộng điểm các tháng.
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <span className="font-bold text-white block">Cơ cấu điểm thi đua:</span>
                <ul className="list-disc list-inside space-y-1 text-slate-400">
                  <li>
                    <strong>Nền nếp & Chấp hành quy chế:</strong> 30 điểm (thực hiện giờ giấc, chào cờ,
                    hội họp, trang phục, bảo mật thông tin nội bộ).
                  </li>
                  <li>
                    <strong>Thực hiện ngày giờ công & chuyên môn:</strong> 30 điểm (lên lớp đúng giờ, hồ
                    sơ giáo án, chấm bài, vào điểm đúng hạn).
                  </li>
                  <li>
                    <strong>Hiệu quả công tác & chất lượng giáo dục:</strong> 25 điểm (tỷ lệ học sinh đạt
                    chuẩn, bồi dưỡng HSG, phụ đạo yếu kém).
                  </li>
                  <li>
                    <strong>Đổi mới, sáng tạo & nghiên cứu:</strong> 15 điểm (sáng kiến, chuyển đổi số,
                    bài giảng điện tử, tích hợp AI).
                  </li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === "nd90" && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-emerald-400">
                Nghị định số 90/2020/NĐ-CP ngày 13/8/2020 của Chính phủ
              </h4>
              <p>
                Quy định về đánh giá, xếp loại chất lượng cán bộ, công chức, viên chức. Gồm 04 mức xếp loại:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-slate-300">
                <li>
                  <strong>Hoàn thành xuất sắc nhiệm vụ:</strong> Đạt 100% chỉ tiêu theo hợp đồng/kế hoạch,
                  hoàn thành vượt mức hoặc có giải pháp sáng tạo, sáng kiến được công nhận. Tỷ lệ không quá
                  20% số viên chức xếp loại hoàn thành tốt nhiệm vụ.
                </li>
                <li>
                  <strong>Hoàn thành tốt nhiệm vụ:</strong> Hoàn thành 100% nhiệm vụ bảo đảm tiến độ, chất
                  lượng; chấp hành nghiêm kỷ luật lao động.
                </li>
                <li>
                  <strong>Hoàn thành nhiệm vụ:</strong> Hoàn thành các nhiệm vụ được giao, có không quá 20%
                  tiêu chí chưa bảo đảm tiến độ.
                </li>
                <li>
                  <strong>Không hoàn thành nhiệm vụ:</strong> Có trên 20% tiêu chí chưa hoàn thành hoặc bị
                  xử lý kỷ luật.
                </li>
              </ul>
            </div>
          )}

          {activeTab === "nd48" && (
            <div className="space-y-4">
              <h4 className="text-sm font-bold text-cyan-400">
                Nghị định số 48/2023/NĐ-CP ngày 17/7/2023 của Chính phủ
              </h4>
              <p>
                Sửa đổi, bổ sung một số điều của Nghị định số 90/2020/NĐ-CP về đánh giá, xếp loại chất lượng
                cán bộ, công chức, viên chức:
              </p>
              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2">
                <p>
                  - Bổ sung quy định: Viên chức bị xử lý kỷ luật trong năm đánh giá thì xếp loại{" "}
                  <strong>Không hoàn thành nhiệm vụ</strong> (trừ trường hợp vi phạm chưa đến mức xử lý).
                </p>
                <p>
                  - Cải cách thủ tục đánh giá: Khuyến khích ứng dụng công nghệ thông tin, số hóa dữ liệu
                  đánh giá, sử dụng hồ sơ minh chứng điện tử để giảm thiểu giấy tờ.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
