import React from "react";
import { useLanguage } from "../context/LanguageContext";
import introductionPT from "../data/aboutme.json";
import introductionEN from "../data/aboutme.en.json";

const IntroductionContainer = () => {
  const { language } = useLanguage();
  
  const introduction = language === 'pt' ? introductionPT : introductionEN;

  const descriptionList = introduction.descriptions.map((item) => (
    <li key={`${language}-${item}`}>{item}</li>
  ));

  return <ul style={descriptionStyle}>{descriptionList}</ul>;
};

const descriptionStyle: React.CSSProperties = {
  listStyleType: "disc",
  color: "var(--desc-color)",
  paddingTop: "4px",
  paddingRight: "0px",
  paddingBottom: "4px",
  fontWeight: "lighter",
  fontSize: "0.9em",
};

export default IntroductionContainer;
