import React from "react";

interface IJobProps {
  employer: {
    name: string;
    location: string;
    url: string;
  };
  position: string;
  duration: string;
  descriptions: string[];
}

const Job = (props: IJobProps) => {
  const descriptionsList = props.descriptions.map((item) => (
    <li key={`${props.employer.name}-${item}`}>{item}</li>
  ));

  return (
    <li style={listItemStyle}>
      <span>
        <span style={nameStyle}>
          <a
            target="_blank"
            rel="nofollow noopener noreferrer"
            href={props.employer.url}
            style={linkStyle}
          >
            {props.employer.name}
          </a>
        </span>
        ,{"\u00A0"}
        <span>{props.employer.location}</span>
      </span>
      <br />
      <span style={positionStyle}>{props.position}</span>
      <br />
      <div style={{ textAlign: "right" }}>
        <span style={durationStyle}>{props.duration}</span>
      </div>
      <ul style={descriptionStyle}>{descriptionsList}</ul>
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

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "var(--link-color)",
};

const positionStyle: React.CSSProperties = {
  fontStyle: "italic",
};

const durationStyle: React.CSSProperties = {
  fontSize: "0.8em",
  fontWeight: "bold",
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

export default Job;
