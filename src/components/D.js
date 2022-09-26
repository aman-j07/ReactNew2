import React, { useContext } from "react";
import { UserContext } from "../App";

function D() {
  const user=useContext(UserContext)
  return (<p>{user}</p>);
}

export default D;
