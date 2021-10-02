const mascot = "Quintessential Samoyed";

function validateEntry(entry) {
    while (isNaN(parseInt(entry)) == true || entry == "0" || parseInt(entry) > 10) {
        entry = prompt("Please enter a valid number:", "Type here");
    }
    
    // Checks if the input is a float, then rounds it to the nearest whole number.
    if (!(entry % 1 === 0)) {
        entry = Math.round(parseFloat(entry))
    } 

    // Converts a negative number entered and converts it into positive using the Math.abs() absolute value function. Otherwise, stores the parsed int into the userNun variable.
    if (parseInt(entry) < 0) {
        entry = Math.abs(parseInt(entry));
    } else {
        entry = parseInt(entry);
        return entry;
    }
}


function getShape(numberOfSides) {
    switch(numberOfSides) {
        case 1:
            return "A polygon that has 1 side is a \"monogon.\"";
        case 2:
            return "A polygon that has 2 sides is a \"digon.\"";
        case 3:
            return "A polygon that has 3 sides is a \"triangle.\"";
        case 4:
            return "A polygon that has 4 sides is a \"quadrilateral.\"";
        case 5:
            return "A polygon that has 5 sides is a \"pentagon.\"";
        case 6: 
            return "A polygon that has 6 sides is a \"hexagon.\"";
        case 7:
            return "A polygon that has 7 sides is a \"septagon.\"";
        case 8:
            return "A polygon that has 8 sides is a \"octagon.\"";
        case 9:
            return "A polygon that has 9 sides is a \"nonagon.\"";
        case 10:
            return "A polygon that has 10 sides is a \"decagon.\"";
    }
}