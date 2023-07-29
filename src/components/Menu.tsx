import React, { ReactElement, useState } from "react";
import { AuthletForm } from "./AuthletForm";

export const Menu = () => {
  const [element, setElement] = useState<ReactElement>();

  const createAuthlet = () => {
    setElement(AuthletForm);
  };

  if(element) return element

  return (
    <div className="Menu">
        <button className="Authlet" onClick={createAuthlet}>
          Аутлет
        </button>
    </div>
  );
};
