import { ReactElement, useEffect, useState } from "react";
import { AuthletForm } from "./AuthletForm";
import { getDocumentList, main } from "../servises/api/DocumentApi";

export const Menu = () => {
  const [element, setElement] = useState<ReactElement>();

 useEffect(() => {
  
getDocumentList().then((value)=>{
console.log(value);
})
  }, []);



  const createAuthlet = () => {
    setElement(AuthletForm);
  };

  if (element) return element;

  return (
    <div className="Menu">
      <button className="Authlet" onClick={createAuthlet}>
        Аутлет
      </button>
    </div>
  );
};
