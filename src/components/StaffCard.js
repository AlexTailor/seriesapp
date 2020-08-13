import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IdProviderContext } from "../contexts/IdProviderContext";

export default function StaffCard(props) {
  const { setStaffId, staffId } = useContext(IdProviderContext);
  const pic = props.staff.image ? props.staff.image.medium : [];

  return (
    <section className="main-container">
      <h1>{props.staff.name}</h1>
      <div className="location" id="home">
        <div className="box">
          <Link
            onClick={() => setStaffId(props.staff.id)}
            to={"staff/details/" + staffId}
          >
            <img src={pic} alt={props.staff.name} />
          </Link>
        </div>
      </div>
    </section>
  );
}
