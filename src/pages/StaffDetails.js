import React, { useContext } from "react";
import { IdProviderContext } from "../contexts/IdProviderContext";
import { DetailContext } from "../contexts/DetailProvider";

function StaffDetails() {
  const { staffId } = useContext(IdProviderContext);
  const {
    fetchPersonsById,
    personDetail,
    fetchCastCreditsById,
    personCastCredit,
  } = useContext(DetailContext);
  fetchPersonsById(staffId);
  fetchCastCreditsById(staffId);

  const pic = personDetail.image ? personDetail.image : [];
  return (
    <div className="mainCont">
      <br />
      <div className="details">
        <p>{personDetail.name}</p>
        <div className="card">
          <p>{personDetail.birthday}</p>
          <p>{personDetail.deathday}</p>
          <p>{personDetail.gender}</p>
          <p>{personCastCredit._embedded}</p>
        </div>
        <img alt={personDetail.name} src={pic.medium} />
      </div>
    </div>
  );
}

export default React.memo(StaffDetails);
