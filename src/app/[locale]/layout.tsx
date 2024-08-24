import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/common/NavBar";
import Footer from "@/components/common/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agrani DOER",
  description:
    "Agrani Bank Limited is a state-owned bank, a trusted and secure destination for banking services for all people. The name 'Agrani DOER Banking' represents the effort to bring this service to the customer's doorstep. 'Agrani DOER Banking' is committed to providing easy and secure banking services in every upazila of the country, especially in remote areas, through a robust and effective agent network. With a bit of awareness and caution, Agrani Bank is as safe as Agrani DOER Banking in terms of customer service.",
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <NavBar />
          <ToastContainer />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
