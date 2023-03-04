class Tesla {
    // Polimorfizm
    increment() {
        let n = 0;
        n++
        console.log(n);
    }

    sayHello() {
        console.log("Hello OOP")
    }

}

class Ferrari extends Tesla {

}

var ferrari = new Ferrari();

ferrari.increment();