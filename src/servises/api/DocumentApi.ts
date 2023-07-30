import axios from "axios";

export async function getDocumentList() {
    const list = await axios.get("https://dgsv.onrender.com/api/document");
    return list.data;
}

 export async function main() {
    const data = await getDocumentList();
    console.log(data);
}

