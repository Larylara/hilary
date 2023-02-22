class age {
    checkLimit(age) {
        if (age < 0 || age > 149) {
            return `L'age est invalide!!!!!!!!!`;
        } else {
            return true;
        }
    }
    checkType(age) {
        if (isNaN(age)) {
            return `L'age est invalide!!!!!!!!!`;
        } else {
            return true;
        }
    }
}

class user {
    constructor(age) {
        this.age = age;
    }
    setAge(age) {
        if (this.age.checkLimit(age) == true && this.age.checkType(age) == true) {
            return `SUPER`;
        }else{
            return `LARISSA Everythings you try is n'importekoi`;
        }
    }
}

let recup = window.prompt(`Yo individu\n Entre ton age!`);
const instanciation = new age();
const utilisateur = new user(instanciation);

let x = utilisateur.setAge(recup);


console.log(x);