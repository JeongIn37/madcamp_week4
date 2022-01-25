import "./styles/Menu.css";

import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Menu(props) {
  console.log("game_popup:", props.checked);

  return (
    <div className="menu">
      <button className="menu_button">
        <Link
          to="/main"
          style={{ textDecoration: "none", color: "white", padding: 40 }}
        >
          게임하기
        </Link>
      </button>
      <button className="menu_button">
        <Link
          to="/ending_collect"
          style={{ textDecoration: "none", color: "white", padding: 40 }}
        >
          엔딩 모음
        </Link>
      </button>
      <button className="menu_button">
        <Link
          to="/credit"
          style={{ textDecoration: "none", color: "white", padding: 40 }}
        >
          크레딧
        </Link>
      </button>
    </div>
  );
}

export default Menu;