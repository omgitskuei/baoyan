import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://baoyan.org"),
  title: "寶嚴山寶嚴禪寺 Baoyan Chan Monastery",
  description: "這是一座禪宗道場，是僧團的安僧立命處，是眾人心之嚮往處，是三界浪子的歸心處。一座實踐百丈家風的禪宗叢林，一座兼具現代感與古樸氛韻的禪宗道場",
  applicationName: "Baoyan Chan Monastery",
  authors: [{ name: "Kuei-Feng Tung 董奎峰", url: "https://github.com/omgitskuei/" }],
  generator: "Next.js",
  keywords: "buddhism, taiwan, baoyan chan monastery, meditation, education, philanthropy, non-profit",
  creator: "Kuei-Feng Tung 董奎峰",
  robots: "index, follow",
  openGraph: {
    title: "寶嚴山寶嚴禪寺 Baoyan Chan Monastery",
    description: "這是一座禪宗道場，是僧團的安僧立命處，是眾人心之嚮往處，是三界浪子的歸心處。一座實踐百丈家風的禪宗叢林，一座兼具現代感與古樸氛韻的禪宗道場",
    url: "https://www.baoyan.org/",
    siteName: "寶嚴山寶嚴禪寺 Baoyan Chan Monastery",
    images: [{
      url: "/logo.svg",
    }],
    type: "website",
  },
};

const Style: { [key: string]: React.CSSProperties } = {
  html: {
    width: "100%",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    // height: "100%",
    width: "100%",
    padding: "1em",
    background: "linear-gradient(rgb(var(--background-end-rgb)), rgb(var(--background-start-rgb)))",
    // border: "20px black solid"
    // flexBasis: "min-content",
    // width: "100vw",
  },
  main: {
    flexGrow: "1",
    // flexBasis: "1",
    // height: "100%",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="zh-Hant" style={Style.html}>
      <body style={Style.body}>
        <Navbar buttonDatas={[
          {
            label: "認識寶嚴", 
            link: "/about",
            key: "1",
          }, 
          {
            label: "最新消息", 
            link: "/news", 
            key: "2",
          },
          {
            label: "年度課程", 
            link: "https://www.baoyan.org/2024%E8%AA%B2%E7%A8%8B%E8%A1%A8",
            key: "3",
          }, 
          {
            label: "法務及活動", 
            link: "https://www.baoyan.org/2024%E6%B3%95%E5%8B%99%E5%8F%8A%E6%B4%BB%E5%8B%95",
            key: "4",
          }, 
          {
            label: "法寶流通", 
            link: "https://www.baoyan.org/%E6%B3%95%E5%AF%B6%E6%B5%81%E9%80%9A",
            key: "5",
          },
          {
            label: "捐款護持", 
            link: "",
            key: "6",
          },
          {
            label: "我的課程", 
            link: "https://www.baoyan.org/%E6%B7%B1%E5%85%A5%E7%B6%93%E8%97%8F",
            key: "7",
          }
        ]}>
        </Navbar>
        <main style={Style.main}>
          {children}
        </main>
        <Footer venueName={"寶嚴禪寺南區總部圓道禪院"} 
          address={"高雄市鼓山區美術東八街8號"} 
          telAreaCode={"07"} telNum={"522-4676"} 
          orgEmail={"yuandaochanmonastery@gmail.com"} 
          faxAreaCode={"07"} faxNum={"553-0053"} 
          mobile={"0970-811-155"}
          copyrightYear="2024"></Footer>
      </body>
    </html>
  );
}
