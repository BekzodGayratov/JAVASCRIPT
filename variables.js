// JavaScript typed dasturlash tili emas. Uch xil yo'q bilan o'garuvchilarni e'lon qilish mumkin masalan.
// const, let, var


//const
const fName = "Bekzod";
// fName = "Hello"; => bu xato. const bilan tanitilgan o'zgaruvchilar hech qachon o'zgarmaydi.
console.log(fName);


//let and var
function ok() {
    var x = 0;
    let y = 1;

    if (true) {
        // let faqat if blockining ichida qiymatini o'zgartiradi.
        // var esa if ichida bo'lgani bilan qiymati butun funksiya bo'ylab o'zgaradi.
        var x = 2;
        let y = 4;
        console.log(x);
        console.log(y);
    }

    console.log(x);
    console.log(y);
}

ok();

