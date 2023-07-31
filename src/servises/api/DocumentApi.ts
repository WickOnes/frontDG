import axios from "axios";

export async function getDocumentList() {
  const list = await axios.get("https://dgsv.onrender.com/api/document");
  return list.data;
}

export async function postData(data: any) {
  const obj = Object.fromEntries(data);
  for (let key in obj) {
    if (obj[key] instanceof Set) {
      obj[key] = [...obj[key]];
    }
  }

  const json = JSON.stringify(obj);

  const document: any = await axios.post("http://localhost:3001/api/document", json);

  console.log(json);
}
