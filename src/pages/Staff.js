import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";
import Member from "../components/Member";
import SubNavBar from "../components/SubNavBar";

const Staff = () => {
  const { cast } = useContext(DetailContext);

  return (
    <div>
      <SubNavBar /> <br />
      {cast.cast.map((member, index) => (
        <Member key={member.person.id} index={index} member={member.person} />
      ))}
    </div>
  );
};

export default React.memo(Staff);
