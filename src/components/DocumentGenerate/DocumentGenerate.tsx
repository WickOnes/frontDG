import React from "react";
import "./DocumentGenerate.scss"
import { Input } from "../Input/Input";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";
import { postData } from "../../servises/api/DocumentApi";


export const DocumentGenerate = ({ obj }: any) => {
  let inputs: any = obj.dataList;

  const data = new Map();

  function add({ target }: any) {
    console.log(target.name, target.value);

    if (target.type === "checkbox") {
      if (data.get(target.name) instanceof Set)
        if (target.checked)
          data.set(
            target.name,
            new Set([...data.get(target.name), target.value])
          );
        else data.get(target.name).delete(target.value);
      else data.set(target.name, new Set([target.value]));
    } else data.set(target.name, target.value);
  }

  function sendData() {
    postData(data);
  }

  return (
    <div className="input-content">
      {inputs.map((v: any, index: number) => {
        if (v.type === "radio") {
          return (
            <div key={index} className="input-content__radio">
              {v.value.map((element: any, index: number) => {
                return (
                  <div key={index}>
                    <Input
                      {...v}
                      value={element}
                      type="radio"
                      onChange={add}
                      placeholder={v.placeholder}
                    />
                    <label htmlFor="product">{element}</label>
                  </div>
                );
              })}
            </div>
          );
        }
        if (v.type === "checkbox") {
          return (
            <div key={index} className="input-content__cheackbox">
              {v.value.map((element: any, index: number) => {
                return (
                  <div key={index} >
                    <Input
                      {...v}
                      value={element}
                      type={v.type}
                      onChange={add}
                      placeholder={v.placeholder}
                    />
                    <label htmlFor="formPay">{element}</label>
                  </div>
                );
              })}
            </div>
          );
        }

        return (
        
            <Input
              {...v}
              key={index}
              onChange={add}
              placeholder={v.placeholder}
            />
        
        );
      })}

      <ButtonPrimary onClick={sendData}>Generete</ButtonPrimary>
    </div>
  );
};
