// ****************************************E x e r c i c e 1***************************************************

    function firstUpperCase(string) {
        
            str = string.split(" ").map(function(x) {
            str = x.charAt(0).toUpperCase()+x.slice(1).toLowerCase();
            return str;
        }) 
        
        console.log(str.join(" "));
    }
    firstUpperCase("bonjour tout le monde");


// ****************************************E x e r c i c e 2***************************************************

function longestWorld(string) {
       
    str = string.split(" ").map(function(y) {
        str = y.length;
        return str;

    })
    console.log(Math.max(...str));
    }
    longestWorld("les chaussettes de l'archiduchesse");

// ****************************************E x e r c i c e 3***************************************************

function largestWord(arr) {

    console.log(Math.max(...arr));
}
largestWord([20, 32, 97]);
largestWord([156, 851, 138]);
largestWord([357, 195, 759]);

// ****************************************E x e r c i c e 4***************************************************

function confirmEnd(string, end) {
    result = string.endsWith(end);
    console.log(result);
}
confirmEnd("bonjour", "r");

// ****************************************E x e r c i c e 5***************************************************

function truncate(str, num) {
    str = window.prompt("Entrez un mot");
    num = window.prompt("Entrez un nombre");
    if(str.length > num) {
        console.log(str.slice(0,num) + "..."); 
    }else if(str.length < num) {
        console.log(str);
    }

}
truncate();

// ****************************************E x e r c i c e 6***************************************************

// function findElement() {
//     if() {}
// }

// ****************************************E x e r c i c e 7***************************************************

// function repeat(string, num) {
//     string = window.prompt("Entrez un mot");
//     num = parseFloat(window.prompt("Entrez un nombre"));
//     if(num <= 0) {
//         console.log("false"); 
//     }else {
//        console.log(string.repeat(num));
//     }
// }
// repeat();

// ****************************************E x e r c i c e 8***************************************************

function factorialize(number) {
    number = parseFloat(window.prompt("Entrez un nombre"));
    let num = 1;
    for(let i=1; i <= number ; i++) {
        num = num*i;
    }
    console.log(num);
}
factorialize();

// ****************************************E x e r c i c e 9***************************************************

// function frankenSplice(arr1, arr2, index) {
//     arr1 = [1, 2, 3];
//     arr2 = [4, 5];
//     index = 1;
//     splice = arr2.splice(1, 0, arr1)
//     console.log(splice);
// }
// frankenSplice();