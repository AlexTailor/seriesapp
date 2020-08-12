import React, { useContext } from "react";
import Card from "../components/Card";
import { DetailContext } from "../contexts/DetailProvider";

const Shows = (props) => {
  const { series, fetchSearchBySearchValue } = useContext(DetailContext);

  const getValue = (e) => {
    fetchSearchBySearchValue(e.target.value);
    return e.target.value;
  };

  return (
    <div className="mainCont">
      <form>
        <input type="text" value={text} onChange={getValue} />
        <Link to={"/show/search/" + getvalue}>
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
