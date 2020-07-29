import React, { useContext } from "react";
import { DetailContext } from "../contexts/DetailProvider";

export default function Main() {
  const { main } = useContext(DetailContext);

  return <div>{main.summary}</div>;
}
