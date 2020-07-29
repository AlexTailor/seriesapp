import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Member from "../components/Member";

const Staff = () => {
  const { cast } = useContext(DetailContext);
  console.log(cast);
  return (
    <div>
      {cast.cast.map((member, index) => (
        <Member key={member.person.id} index={index} member={member.person} />
      ))}
    </div>
  );
};

export default React.memo(Staff);
