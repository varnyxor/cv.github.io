// pages/404.tsx
import React from "react";
import { useLanguage } from "../context/LanguageContext";
import SocialsContainer from "../containers/SocialsContainer";
import { Col, Row, Container } from "../components/ui";
import LanguageSwitcher from "../components/LanguageSwitcher";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Link from "next/link";
import Head from "next/head";

const Custom404 = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      title: "404 - Page Not Found",
      message: "The page you are looking for doesn't exist.",
      returnHome: "Return to homepage",
      viewSource: "Source code (Github)"
    },
    pt: {
      title: "404 - Página Não Encontrada",
      message: "A página que está a procurar não existe.",
      returnHome: "Voltar à página inicial",
      viewSource: "Código fonte (Github)"
    },
  };

  return (
    <>
      <Head>
        <title>404 | João Lopes Frias</title>
      </Head>
      <Container>
        <Row style={titleMargin}>
          <Col style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: 280, lineHeight: 1.2 }}>
              João Leandro Lopes Frias
            </h1>
          </Col>
        </Row>
        <Row style={socialsMargin}>
          <Col style={{ textAlign: "center" }}>
            <SocialsContainer />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              textAlign: "right",
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <LanguageSwitcher />
            <div style={{ width: "20px" }}></div>
            <ThemeSwitcher />
          </Col>
        </Row>
        <hr style={separatorStyle} />
        <Row style={{ margin: "60px 0" }}>
          <Col style={{ textAlign: "center" }}>
            <h1>{translations[language].title}</h1>
            <p style={{ color: "var(--desc-color)", fontSize: "1.2em" }}>
              {translations[language].message}
            </p>
            <Link href="/" style={linkStyle}>
              {translations[language].returnHome}
            </Link>
          </Col>
        </Row>
        <hr style={separatorStyle} />
        <Row style={footerMargin}>
          <Col style={{ textAlign: "center" }}>
            <span
              style={{
                display: "inline-block",
                marginRight: "1rem",
              }}
            >
              <a
                style={linkStyle}
                href="https://joaolopes.xyz/"
                rel="nofollow noreferrer"
                target="_blank"
              >
                © João &apos;itsneufox&apos; Lopes
              </a>
              &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              <a
                style={linkStyle}
                href="https://github.com/itsneufox/cv.github.io"
                rel="nofollow noreferrer"
                target="_blank"
              >
                {translations[language].viewSource}
              </a>
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

const separatorStyle: React.CSSProperties = {
  color: "var(--separator-color)",
  backgroundColor: "var(--separator-color)",
  height: "1px",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--link-color)",
};

const titleMargin: React.CSSProperties = {
  margin: "30px 0 10px 0",
};

const socialsMargin: React.CSSProperties = {
  margin: "10px 0 20px 0",
};

const footerMargin: React.CSSProperties = {
  margin: "20px 0 20px 0",
};

export default Custom404;
