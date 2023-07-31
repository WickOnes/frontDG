import React, { useEffect, useMemo, useState } from "react";
import { Input } from "./Input/Input";
import { ButtonPrimary } from "./ButtonPrimary/ButtonPrimary";
import { getDocumentList } from "../servises/api/DocumentApi";
import { DocumentGenerate } from "./DocumentGenerate/DocumentGenerate";
import { Value } from "sass";

export const AuthletForm = () => {
  const [data, setData] = useState();

  useMemo(() => {
    setTimeout(() => {
      getDocumentList().then((value) => setData(value));
    }, 1000);
  }, []);

  if (!data) return <p>LOADING</p>;

  return <DocumentGenerate obj={data[1]} />;
};

