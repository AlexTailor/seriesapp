import React, { useContext } from "react";
import StaffCard from "../components/StaffCard";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";

export default function MainStaff() {
  const {
    randomStaff,
    inputName,
    setInputName,
    fetchPersonsByName,
  } = useContext(DetailContext);

  const getName = (e) => {
    setInputName(e.target.value);
  };

  const getInput = () => {
    fetchPersonsByName(inputName);
  };
  return (
    <div>
      <div className="mainCont">
        <form>
          <input type="text" onChange={getName} />
          <Link to={"/search/" + inputName}>
            <button onClick={getInput}>Search</button>
          </Link>
        </form>
        <div className="box">
          {randomStaff.map((staff, index) => (
            <StaffCard key={staff.id} index={index} staff={staff} />
          ))}
        </div>
      </div>
    </div>
  );
}
