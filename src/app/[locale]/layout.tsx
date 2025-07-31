import "../globals.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navBar";
import { Poiret_One } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider, hasLocale } from "next-intl";

const poiret = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poiret",
});

export const metadata = {
  title: "Leco Biagioni",
  icons: {
    icon: "/favicon.ico",
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${poiret.className} bg-[var(--main-bg)]`}>
        <NextIntlClientProvider>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
