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

  const response: any = await axios.post(
    "http://localhost:3001/api/document",
    {
      id: 0,
      name: "Test",
      data: obj,
    },
    {
      responseType: "blob",
    }
  );

  if (response.status === 200) {
    console.log(response.data);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(response.data);
    link.download = "test";
    link.click();
    link.remove();
  }

  console.log(document);
}
