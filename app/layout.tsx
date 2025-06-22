import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "combrain-log",
  description: "combrain의 개발 블로그입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
