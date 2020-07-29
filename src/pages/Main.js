import React, { useContext } from "react";
import { DetailProvider } from "../contexts/DetailProvider";

export default function Main() {
  const { main } = useContext(DetailProvider);

  return <div>{main.summary}</div>;
}
