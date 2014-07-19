//Javascript for the lottery ticket, to handle:
// -Selecting and deselecting numbers
// -Doing front-end validation on lottery tickets
// -Submitting lottery tickets

var numbers = [];
var okToAdd;

function addNumber(number) {
    $('#shadow-root #' + number).addClass('selected');
    numbers.push(number);
    console.info("Added " + number);
    $('#' + number).addClass('selected');
}

function selectNumber(number) {
    if (numbers.length === 0)
        addNumber(number);
    else {
        okToAdd = false;
        for (var i = 0; i < numbers.length; i++) { //Check to see if the number has already been selected; if so, remove the number from numbers
            if (numbers[i] === number) {
                //remove class 'selected' from number
                console.log("Removed " + number);
                numbers.splice(i, 1);
                okToAdd = false; //If number was not index 0 in numbers, the for loop would have run multiple times, and okToAdd would have been set to true.  Set okToAdd to false to prevent the number from being added to numbers again
                break;
            } else okToAdd = true;
        }
        //If the user hasn't already selected 4 numbers, add the number to numbers
        if (numbers.length === 4) {
            //show message
            console.warn("Can't add " + number + "; 4 numbers already selected");
        } else if (okToAdd) {
            addNumber(number);
        }
    }

}

Polymer('lottery-ticket', {

    }

);