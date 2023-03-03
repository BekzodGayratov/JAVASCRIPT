// arrays

// arrayni 2 xil usulda e'lon qilsa bo'ladi.

// arrayning rasmiy syntaksizi orqali.
var fruits = new  Array();

// odatiy holda
var vegetables = [];



var names = ["John","Doe","Cristiano"];

for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}


// const and let 

const name1 = "Bekzod";
name1 = "Jamshid" // Sintaksis xato bo'lmasa ham lekin runtime da xato beradi. const O'zgaruvchilar faqat bir marta qiymat oladi.

let name2 =  "Sardor";
name2 = "Ravshan"; // Sintaksisda ham muammo yo'q runtime da ham xato bermaydi. let O'zgaruvchilar qiymatini qayta o'zgartira oladi.
console.log(name2);