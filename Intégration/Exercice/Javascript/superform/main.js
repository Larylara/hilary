
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

class namee {
    checkFormat(namee) {
        if(isNaN(namee)) {
            return "good";
        } else {
            return "Veuillez bien entrer un nombre";
        }
    }
}


class user {
    constructor(age, namee) {
        this.âge = age;
        this.nom = namee;
    }
    setAge(age) {
        if (this.âge.checkLimit(age) == true && this.âge.checkType(age) == true) {
            return `Periodt`;
        }else{
            return `Please correct your answer`;
        }
    }
    setName(namee) {
        if (this.nom.checkFormat(namee)) {
            return `Periodt`;
        }else{
            return `Please correct your answer`;
        }
    }
}

// let firstRecup = document.querySelector("#name");
// let secondRecup = document.querySelector("#age");

// const fInstanciation = new age();
// const sInstanciation = new namee();

// const utilisateur1 = new user(fInstanciation);
// const utilisateur2 = new user(sInstanciation);

// let x = utilisateur1.setAge();
// let y = utilisateur2.setName();

// console.log(x);
// console.log(y);