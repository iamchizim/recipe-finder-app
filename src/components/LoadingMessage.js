import React from "react";
import { useState, useEffect } from "react";
const LoadingMessage = ({ recipes }) => {
  const [loadingMessage, setLoadingMessage] = useState("");

  useEffect(() => {
    if (!recipes) {
      setLoadingMessage("Loading...");
    } else {
      setLoadingMessage("");
    }
  }, [recipes]);

  return (
    <section className="loading">
      {loadingMessage && <p>{loadingMessage}</p>}
    </section>
  );
};

export default LoadingMessage;