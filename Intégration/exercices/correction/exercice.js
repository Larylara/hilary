// ************** exercice 2 *********************
document.addEventListener('DOMContentLoaded', function () {
    function longestWord(string) {
        let y = string.split(' ');
        console.log(y)
        let longest = y[0].length;
        for (let x = 1; x < y.length; x++) {
            if (longest < y[x].length) {
                longest = y[x].length;
            }
        } return longest
    }
    // console.log(longestWord(window.prompt('entrez une liste de mots!')));
})

function longestWordV2(string) {
    str = string.split(" ").map(function (y) {
        str = y.length;
        return str;
    });
    return Math.max(...str);
}
// console.log(longestWordV2(window.prompt("Entrez une phrase")));


/************************** Exercice 3 *********************/
let arr1 = [20, 32, 97];
let arr2 = [156, 851, 138];

function largestNumber(arr) {
    let val = arr[0];
    for (let x = 1; x < arr.length; x++) {
        if (val < arr[x]) {
            val = arr[x];
        }
    }
    return val
}
// console.log(largestNumber(arr1));


/************************** Exercice 4 *********************/

function largestNumberV2(arr) {
    return Math.max(...arr);
}
// console.log(largestNumberV2(arr2));

function confirmEnd(string, end) {
    return string.endsWith(end);
}
// console.log(confirmEnd("bonjour", "r"));


/************************** Exercice 5 *********************/

function truncate(a, b) {


    if (a.length < b) {
        return (a.slice(0, b));
    }
    else {
        return (a.slice(0, b) + "...")
    }
}
// console.log(truncate("salut a tous",10));


/************************** Exercice 6 *********************/

function findElement(array, funcx) {
    return array.find(funcx)

}
// console.log(findElement([1, 3, 5, 8, 9, 10], function (num) { return num % 2 === 0; }))


/************************** Exercice 7 *********************/

function perroquet(string, num) {
    return string.repeat(num);
    
}
// console.log(perroquet("bonjour", 5));


/************************** Exercice 8 *********************/

function factorialize(num){
    let nbr=1;
    for(let i = num; i>0; i--){
        nbr *=i;
    }
    return nbr;
}

// console.log(factorialize(-5));


/****************EXERCICE 9 ****************/

let tab1=["1", "hjg", "15"]
let tab2=["pa", "hjg", "45", "maman"]
let tab3=[];
function frankenSplice(tab1, tab2, index){
    let tab3 = tab2;
    for(let i=0; i<tab1.length; i++){
       tab3.splice(index,0,tab1[i]);
       index++;
    }
    return tab3;
}
// console.log(frankenSplice(tab1, tab2, 2))


/********************EXERCICE 10*********************/

let table = ["Carl", "Tomy", "Josué", undefined,"Armel", "Hilary", false, "", null, "Rhétice", "Larissa", "La vache", NaN,"Conrad", "Amir", 0, "Emile"];
function delfausseV(table){
    return table.filter(function(element){if(element){return element}})
}

//  console.log(delfausseV(table));


/********************EXERCICE 11*********************/

function getIndexToIns(arr, toInsert){
let tableau=arr.split(" ");
tableau.push(toInsert);
tableau.sort(function(a,b){
    return a-b
})
return tableau.indexOf(toInsert);
}
// let insert1=window.prompt("Renseignez les valeur");
// let insert2=window.prompt("renseignez une valeur au hasard");
// console.log(getIndexToIns(insert1,insert2));


/********************* exercice 12**************** */

// function mutation(elA,elB){
    //     let recup = [];
    //     for(key of elB){
        //         if(elA.indexOf(key)!=-1){
            //             recup.push(true);
            //         }else{
                //             recup.push(false);
                //         }
                //     }
                //     let test = recup.every(function(para){return (para==true)})
                //     return test;
                // }
                // let tab = [];
                // tab.push(window.prompt("Entrer le premier element").toLowerCase()) 
                // tab.push(window.prompt("Entrer le deuxieme element").toLowerCase())
                // console.log(mutation(tab[0],tab[1]));


/********************* exercice 13************** */

let tab = [0, 1, 2, 3, 4, 5,6, 7,8,9,10,11]
let size = 4
function chunkArrayInGroups(arr,size){
let nbrSouTab= arr.length/size;
let interval=0;
const tab=[];
for(let i=0; i<nbrSouTab;i++){
    tab[i]=arr.slice(interval,(interval+size));
    interval+=size;
}
    return tab;
}
// chunkArrayInGroups(tab,size)


/********************* exercice 14 A ************* */

let string = prompt('Ecris !');
function latinPing(string) {
    let phrase=''
    string=string.split(' ');
    string.forEach(word => {
        if(word.indexOf('!')>0  || word.indexOf('.')>0  || word.indexOf('?')>0){
            phrase += word.slice(1,(word.length-1)) + word.charAt(0) +'ay'+word.charAt(word.length-1)+' ';
        }else if(word.charCodeAt(0)>63){
            phrase += word.slice(1) + word.charAt(0) + 'ay ';
        }else{
            phrase += word+' ';
        }
    });
   
        return phrase;
    }

 console.log( latinPing(string));


// ***************** Exercice 14 B *********//

function programme (){
    let c = 0;
    let i = 0;
    const x = Number(window.prompt("veillez entrer un nombre svp"));
    while(i<x){
        const y = Number(window.prompt("veillez entrer une valeur svp"));
        c +=y;
        i++; 
    }
    console.log(c);
}
// programme();


/***********EXERCICE 14 C *******************/


function uniqueVal() {
    let deck = [10, 25, 2,"erik", 10, 129,"erik", 25, 3 ], carte;
    carte = [... new Set(deck)].sort(function(a,b) {
        return b - a;
    });
    console.log(carte);
}

//uniqueVal();