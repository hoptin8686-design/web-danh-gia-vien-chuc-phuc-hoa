import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Đánh Giá, Xếp Loại Viên Chức Tháng 11/2026 | THPT Phục Hòa",
  description:
    "Hệ thống quản lý, thiết kế nội dung công việc chính Tháng 11/2026 (giai đoạn T5 - T11/2026) của CBQL, GV, TTCM, NV phục vụ đánh giá, xếp loại viên chức, người lao động theo Nghị định 90/2020 & 48/2023 - Trường THPT Phục Hòa, Cao Bằng",
  keywords: [
    "Đánh giá viên chức tháng 11 2026",
    "Xếp loại người lao động",
    "CBQL GV TTCM NV",
    "Import công việc",
    "THPT Phục Hòa",
    "Cao Bằng",
    "Nghị định 90/2020",
    "Nghị định 48/2023"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
