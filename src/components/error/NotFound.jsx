import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <img
        src="https://www.cloudns.net/blog/wp-content/uploads/2023/10/Error-404-Page-Not-Found.png"
        alt="notFound"
      />
      <button onClick={() => navigate("/")} className="btn">
        Home
      </button>
    </div>
  );
};

export default NotFound;
