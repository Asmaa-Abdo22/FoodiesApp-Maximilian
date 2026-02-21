import "./globals.css";
import type { ReactNode } from "react";
import MainHeader from "@/components/mainHeader/mainHeader";


export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white ">
     
        <MainHeader />
        <main className="relative  z-10 mt-20 px-4 md:px-[10%]">{children}</main>
      </body>
    </html>
  );
}
