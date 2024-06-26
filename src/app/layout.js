import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../Components/Navbar"
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import Footer from "@/Components/Footer";
import Call from "../Components/Call"
import WhatsApp from "../Components/WhatsApp"
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's already imported

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChannelConnectPRO",
  description: "ChannelConnectPRO is Providing HighSpeed Internet And Cable Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        {children}
        <WhatsApp/>
        <Call/>
        <Footer/>
        </body>
        
    </html>
  );
}
