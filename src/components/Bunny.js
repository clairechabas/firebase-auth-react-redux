import React from "react";
import { Link } from "react-router-dom";
import requireAuth from "./hoc/requireAuth";

const Bunny = () => {
  return (
    <div className="page">
      <div>
        <span className="emoji" role="img" aria-label="Rabbit Face">
          🐰
        </span>
      </div>
      <p>
        You are on the Bunny component. When in bunnies country, do what bunnies
        do.
      </p>
      <Link to="/" className="btn-link">
        Jump back home
      </Link>
    </div>
  );
};

export default requireAuth(Bunny);
