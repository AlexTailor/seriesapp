import React from "react";

const Member = (props) => {
  return (
    <ul>
      <p>{props.member.name}</p>
      <img alt={props.member.name} src={props.member.image.medium} />
    </ul>
  );
};

export default React.memo(Member);
