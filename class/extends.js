class Tesla {
    turbo(amount) {
        console.log(`The 100 added to your current speed, result is:${amount + 100} `);
    }
}

class Ferrari extends Tesla {

}

const f = new Tesla();
console.log(f.turbo(10));
//console.log(f.boost(50));