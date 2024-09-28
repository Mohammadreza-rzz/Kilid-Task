import type { Metadata } from "next";
import "../assets/styles/globals.scss";
import { Header, MainPageSlider } from "@/view";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <MainPageSlider />
        <div className="bg-red-400 max-w-[1260px] mx-auto">{children}</div>
      </body>
    </html>
  );
}
