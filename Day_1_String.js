function calcluateLengthOfString(){

let str ="   fly me   to   the moon  "

let splitStr= str.trim().split(/\s+/)

console.log(splitStr)

//find last word in the array

let lastWord= splitStr[splitStr.length-1]
//print the last word
console.log("last word is:", lastWord)
//print the length of last word
console.log("length of last word is:", lastWord.length)

}

calcluateLengthOfString()

function checkIsAnagaram(string1, string2){

    let sortedString1 = string1.split("").sort().join("")
    console.log("String 1:",sortedString1)

      let sortedString2 = string2.split("").sort().join("")
    console.log("String 2:",sortedString2)

    if(sortedString2===sortedString1){
        console.log("string1 and string2 is a Anangaram")
    }
    else{
         console.log("string1 and string2 is not a Anangaram")
    }

}

checkIsAnagaram('listen', 'silent')