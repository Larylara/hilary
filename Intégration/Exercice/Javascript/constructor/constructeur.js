class user {
    constructor(name, fname, job = null) {
        this.name = name;
        this.fname = fname;
        this.job = job;

    }
    fullName() {
        return `${this.name} ${this.fname} ${this.job}`
    }

}
let admin = new user("TOHON", "JoJo");
console.log(admin.fullName());




