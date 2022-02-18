import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      Sayfa bulunamadı. Anasayfaya yönlenmek için{" "}
      <Link to="/">Tıklayınız.</Link>
      {""}
    </div>
  );
}

export default NotFound;
