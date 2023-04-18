// Prototiplar (Prototype) bu - JavaScript obyektlari bir-biridan xususiyatlarini meros qilib olish mexanizimidir.
// Prototiplar konstruktor funksiyadan foydalanib obyektga yangi xususiyat qo'shish uchun ishlatiladi.
function Person() {
    this.name = "John";
    this.age = 23;
}

const person1 = new Person();
const person2 = new Person();

// Adding property to constructor function
// Obyektga yango xususiyat qo'shish
Person.prototype.gender = "male";

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
// qo'shilgan yangi xususiyatni ishlatish
console.log(person1.gender);
console.log(person2.gender);


// Prototip qiymatlarini o'zgartirish ham mumkin masalan.

function Shaxs (){
    this.name = "Abdulloh"
}

// Obyektga yangi xususiyat qo'shish
Shaxs.prototype.age = 20;

// crating an object
const shax1 = new Shaxs();
console.log(shax1.age);

Shaxs.prototype.age = 50;

const shaxs2 = new Shaxs();
console.log(shaxs2.age);

//////////////////////////////////////////////////

// Agar biror xususiyat konstruktor function ichida e'lon qilinib unga qiymat berilgan bo'lsa
// Biz bu xususiyatni prototip yordamida o'zgartira olmaymiz! Masalan

function Tesla(){
    this.model = "T10"
}

// adding property
Person.prototype.model = "T20"; // bu foydasiz. Chunki Tesla ichida "model" nomli o'zgaruvchi mavjud biz unga yangi qiymat bera olmayiz sababi har safar ildiz olinganda default qiymatni o'zlashtiradi.
Person.prototype.age = 20; // bu ish beradi chunki. Tesla ichida "age" nomli o'zgaruvchi yo'q biz uni yangi qiymat bilan kirita olamiz