import React from "react";
import { Input } from "../Input/Input";
import { ButtonPrimary } from "../ButtonPrimary/ButtonPrimary";


export const DocumentGenerate = () => {
  const inputs = [
    {
      placeholder: "Торговий агент",
      name: "tradeName",
    },
    {
      placeholder: "Тип ТТ",
      name: "typeTradePoint",
    },
    {
      placeholder: "Продукція",
      name: "product",
      type: "checkbox",
      value: ["шоко", "корм", "ригли"],
    },
    {
      placeholder: "День візиту",
      name: "visitDey",
    },
    {
      placeholder: "Назва клієнта",
      name: "clientName",
    },
    {
      placeholder: "Адреса доставки",
      name: "address",
    },
    {
      placeholder: "Форма оплати",
      name: "formPay",
      type: "radio",
      value: ["нал2ф", "чек/факт", "чек/кр", "б/н"],
    },
    {
      placeholder: "Відтермінування",
      name: "postponement",
      type: "radio",
      value: [0, 7, 14, 21],
    },
    
    {
      placeholder: "Прайс",
      name: "price",
      type: "radio",
      value: ["розниця", "СПТ", "аптека", "АЗС" , "хорека"],
    },
    {
      placeholder: "Контакти",
      name: "contact",
    },
    {
      placeholder: "Телефон",
      name: "phone",
    },
  ];

  const data = new Map();
  const object = Object.fromEntries(data);
  // console.log(object);

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

  function genereta() {
    console.log(data);
  }

  return (
    <div>
      {inputs.map((v, index) => {
        if (v.type === "radio") {
          return (
            <div key={index}>
              {v.value.map((element, index) => {
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
            <div key={index}>
              {v.value.map((element, index) => {
                return (
                  <div key={index}>
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

      <ButtonPrimary onClick={genereta}>Generete</ButtonPrimary>
    </div>
  );
};
