import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Service() {
  return (
    <div>
      <h2>Service component</h2>

      <div className="sub-head">
        <Link to={""}>App</Link>
        <Link to={"Web"}>Web</Link>
      </div>
      <Outlet />
    </div>
  );
}
