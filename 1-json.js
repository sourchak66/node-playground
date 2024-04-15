import fs from "fs";

// const book = {
//     title : "Ego Is The Enemy",
//     author : "Ryan Holiday"
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// const bookData = JSON.parse(bookJSON);
// console.log(bookData);

// fs.writeFileSync("1-json.json", bookJSON);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Sourav Chakraborty";
user.age = "22";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

// console.log(data.title);