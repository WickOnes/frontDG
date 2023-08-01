import React, { useEffect, useMemo, useState } from "react";
import { getDocumentList } from "../../servises/api/DocumentApi";
import { DocumentGenerate } from "../DocumentGenerate/DocumentGenerate";
import { setInterval } from "timers";
import { Loader } from "../Loader/Loader";

export const AuthletForm = () => {
  const [data, setData] = useState();

  useMemo(() => {

    setTimeout(()=>{
      getDocumentList().then((value) => setData(value));
    },3000)
   
     
  
  }, []);

  if (!data) return <Loader/>;

  return <DocumentGenerate obj={data[1]} />;
};
