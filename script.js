// A
const addTheWordCool = (array) => {
    array.push ("cool");
    return array
}
console.log("Add cool:", addTheWordCool(["nice", "awesome", "tof"]));
resultaat: ["nice", "awesome", "tof", "cool"]

// B
const amountOfElementsInArray = (array) => {
    return array.length;
};

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen'])); 

// C
const selectBelgiumFromBenelux = (array) => {
    return array[0];
};

// Gevonden met Google
const selectBelgiumFromBenelux2 = (array) => {
    return array.shift();
  };

console.log(selectBelgiumFromBenelux(["Belgie", "Nederland", "Luxemburg"])); 
console.log(selectBelgiumFromBenelux2(["Belgie", "Nederland", "Luxemburg"])); 

// D
const lastElementInArray = (array) => {
    return array.pop();
  };

// Gevonden met Google
// const lastElementInArray2 = (array) => {
//     return array [array.lenght - 1]; 
//   };

console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"])); 
// console.log(lastElementInArray2(["Haas", "Cavia", "Kip", "Schildpad"])); //Deze returns undefined ???

// E
const presidents = ["Trump", "Obama", "Bush", "Clinton"] 

// slice verandert niet het originele array maar maakt een nieuwe 
const impeachTrumpSlice = (array) => {
    return array.slice (1, 4);
};

// splice verandert het originele array, returneert het originele minus wat je weg hebt gehaalt
const impeachTrumpSplice = (array) => {
// Eerts haal je de eerste we en dan kan je het originele returneren exclusief de eerste item
    const newArray = array.splice (0, 1);
    return array
};

console.log(impeachTrumpSlice(presidents)); // ["Obama", "Bush", "Clinton"]
console.log(impeachTrumpSplice(presidents)); // ["Obama", "Bush", "Clinton"]

// F
const stringsTogether = (array) => {
    return array.join(' ');
}

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}'])) 
//resultaat: "Winc Academy is leuk ;-}"

// G
const combineArrays = (array1, array2) => {
    return array1.concat(array2);
}
console.log (combineArrays([1,2,3], [4,5,6]) );
// resultaat: [1,2,3,4,5,6]