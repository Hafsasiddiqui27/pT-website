
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head />
      <body>
      
        {/* {Header} */}
      <Header />
      {children}

      <Footer />
    
     

       
      </body>
    </html>
  );
}
