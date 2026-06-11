import React from "react";

interface IEducationProps {
  name: string;
  location: string;
  duration: string;
  degree?: string;
}

const Education = (props: IEducationProps) => {
  return (
    <li style={listItemStyle}>
      <span>
        <span style={nameStyle}>{props.name}</span>
        ,{"\u00A0"}
        <span>{props.location}</span>
      </span>
      <br />
      <div style={{textAlign: "right"}}>
        <span style={durationStyle}>{props.duration}</span>
      </div>
      <div>{props.degree}</div>
      <br />
    </li>
  );
};

const listItemStyle: React.CSSProperties = {
  width: "100%",
};

const nameStyle: React.CSSProperties = {
  fontSize: "1.2em",
  fontWeight: "bolder",
};

const durationStyle: React.CSSProperties = {
  fontSize: "0.8em",
  fontWeight: "bold",
};

export default Education;