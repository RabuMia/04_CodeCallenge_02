/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

--> "Max trinkt Cola."

/* Getränke-Challenge */

// getraenke = "Milch"; // <= kleiner als 5
// getraenke = "Saft"; // <= kleiner als 12
// getraenke = "Cola"; // <= kleiner als 17
// getraenke = "Wein"; // >= kleiner als 18

let getName, alter;

getName = prompt("Bitte gebe dein Name ein!");
alter = prompt("Bitte gebe dein Alter ein!");


// switch (true) 
// {
//     case ( alter <= 5):
//         console.log("Du darfst Milch trinken!");
//         break;
//     case ( alter <= 12):
//             console.log("Du darfst Saft trinken!");
//             break;
//     case ( alter <= 17):
//         console.log("Du darfst Cola trinken!");
//         break;
//     case ( alter >= 18):
//         console.log("Du darfst Wein trinken!");
//         break;
//     default:
//         console.log("Das war eine falsche Eingabe! Bitte gib ein Alter ein!");
//       break;
// }

if (alter <= 5) 

 {  
    console.log(getName + " darf Milch trinken!");   
 } 

 else if(alter <= 12)
 {

     console.log(getName + " darf Saft trinken!");   
 } 

 else if (alter <= 17)
 {
    
     console.log(getName + " darf Cola trinken!"); 
 }
 else if (alter >= 18)
 {
    
     console.log(getName + " darf Wein trinken!"); 
 }
 else 
 {
    console.log("Das war eine falsche Eingabe! Bitte gib ein Alter ein!"); 
 }