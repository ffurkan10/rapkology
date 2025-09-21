import Footer from "@/components/layout/Footer";
import "./globals.css";
import Header from "@/components/layout/Header";
import { Saira_Condensed } from "next/font/google"

const saira = Saira_Condensed({
  subsets: ["latin"], 
  weight: ["200", "300", "400", "500", "600", "700", "800"], 
})

export const metadata = {
  title: "Rapkology - Rap Kültürünün İncelikleri, Sanatçı Profil ve Şarkı Analizleri",
  description: "Rapkology, rap müziğin derinliklerine dalın. Rap sanatçıları, sözler ve şarkılar hakkında kapsamlı bilgiler, analizler ve daha fazlası. Rap dünyasının incelikleri burada!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${saira.className} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
