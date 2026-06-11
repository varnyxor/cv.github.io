import React from "react";
import interestsPT from "../data/interests.json";
import interestsEN from "../data/interests.en.json";
import { useLanguage } from "../context/LanguageContext";

const InterestsContainer = () => {
  const { language } = useLanguage();
  
  const interests = language === 'pt' ? interestsPT : interestsEN;
  
  const listStyle: React.CSSProperties = {
    listStyleType: "circle",
  };
  
  const interestItems = interests.map((interest) => (
    <span style={{ marginTop: "5px" }} key={interest}>
      <div style={interestItemStyle}>{interest}</div>
      &nbsp;
    </span>
  ));

  return (
    <ul style={listStyle}>
      <li style={listItemStyle}>
        <span style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
          {interestItems}
        </span>
      </li>
    </ul>
  );
};

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const interestItemStyle: React.CSSProperties = {
  display: "inline",
  paddingTop: "3px",
  paddingRight: "10px",
  paddingBottom: "3px",
  paddingLeft: "10px",
  marginTop: "5px",
  marginRight: "5px",
  marginBottom: "0px",
  marginLeft: "0px",
  backgroundColor: "var(--skill-bg-color)",
  borderRadius: "3px",
  color: "var(--skill-text-color)",
  fontSize: "0.8em",
  fontWeight: "lighter",
};

export default InterestsContainer;
