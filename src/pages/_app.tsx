import Head from "next/head";
import "../styles/base.scss";
import "../styles/fonts.css";
import "../styles/theme.css";
import { AppProps } from "next/app";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Head>
          <title>CV | João Lopes Frias - Software Developer & Production Manager</title>
          <meta name="description" content="Software developer and production manager specializing in TypeScript, React, PAWN development, and industrial operations. Open-source contributor with expertise in developer tools and warehouse management." />
          <meta name="keywords" content="software developer, production manager, TypeScript, React, PAWN, open.mp, SA-MP, developer tools, warehouse operations, forklift operator, Portugal" />
          <meta name="author" content="João Lopes Frias" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="João Lopes Frias - Software Developer & Production Manager" />
          <meta property="og:description" content="Full-stack developer and industrial professional with expertise in TypeScript, React, and production line management." />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://joaolopes.xyz" />
          <link rel="canonical" href="https://joaolopes.xyz" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </LanguageProvider>
  );
}
