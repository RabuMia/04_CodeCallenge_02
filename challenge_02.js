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

let getraenke, alter;

getraenke = "Milch"; // <= kleiner als 5
getraenke = "Saft"; // <= kleiner als 12
getraenke = "Cola"; // <= kleiner als 17
getraenke = "Wein"; // >= kleiner als 18

switch (getraenke) 
{
    case ( alter <= 5):
        console.log("Du darfst Milch trinken!")
        break;
    case ( alter <= 12):
            console.log("Du darfst Saft trinken!")
            break;
    case ( alter <= 17):
        console.log("Du darfst Cola trinken!")
        break;
    case ( alter >= 18):
        console.log("Du darfst Wein trinken!")
        break;
    default:
        console.log("Das war eine falsche Eingabe! Bitte gib ein Alter ein!")
      break;
}
