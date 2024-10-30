import React, { useEffect, useState } from "react";

const ErrorMessage = ({ recipes }) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (!recipes || recipes.length === 0) {
      setErrorMessage("There are no recipes available right now.");
    } else {
      setErrorMessage("");
    }
  }, [recipes]);

  return <section  className="error">{errorMessage && <p>{errorMessage}</p>}</section>;
};

export default ErrorMessage;