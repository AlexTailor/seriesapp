import React, { useContext } from "react";
import Card from "../components/Card";
import { DetailContext } from "../contexts/DetailProvider";
import { Link } from "react-router-dom";

const Shows = (props) => {
  const { series, searchValue, fetchSearchBySearchValue } = useContext(
    DetailContext
  );

  const getValue = (e) => {
    fetchSearchBySearchValue(e.target.value);
  };

  return (
    <div className="mainCont">
      <form>
        <input type="text" onChange={getValue} />
        <Link to={"/show/search/" + searchValue}>
          <button onChange={getValue}>Search</button>
        </Link>
      </form>
      <div className="box">
        {series.map((show, index) => (
          <Card key={show.id} index={index} show={show} />
        ))}
      </div>
    </div>
  );
};

export default React.memo(Shows);
