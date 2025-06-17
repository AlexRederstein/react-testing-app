import logo from "../../logo.jpg";
import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [now, setNow] = useState(new Date());

  setInterval(() => setNow(new Date()), 1000);

  return (
    <header>
      <img style={{ height: "3rem", marginRight: "5px" }} src={logo} />
      <h3>ERA</h3>
      <div className="HeaderButtonsPanel">
        <button>Статьи</button>
        <button>Войти</button>
      </div>
    </header>
  );
}
