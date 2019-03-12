// Main calculate function
function calculateSum( e ) {
    let totalSum = document.getElementById( 'inputDigit' ).value;

    if ( validateSum( totalSum ) ) {
        document.getElementById( 'calculatorOutput' ).innerHTML = "The result is: " + getTypeSum( totalSum );
    }
}

function validateSum( totalSum ) {

    // Fresh regex for the sum, it only accepts the sums that are listed on the page
    let regexForSum = /^[0-9]*[-+*:]{1}[0-9]*$/g;

    if ( totalSum.match( regexForSum ) ) {
        return true;
    }

    if ( totalSum.includes( " " ) ) {
        document.getElementById( 'calculatorOutput' ).innerHTML = "Your sum contains a blank space, please remove it";
        return false;
    }

    // If the sum doesn't pass the regex check
    document.getElementById( 'calculatorOutput' ).innerHTML = "Your sum contains 2 or more (invalid) special characters. Please make sure that you only have one of them in your sum!";

    return false;
}

function getTypeSum( totalSum ) {
    // Filter by character
    if ( totalSum.includes( ':' ) ) {
        return calculateResult( totalSum, ":" )
    }

    if ( totalSum.includes( '*' ) ) {
        return calculateResult( totalSum, "*" )
    }

    if ( totalSum.includes( '+' ) ) {
        return calculateResult( totalSum, "+" )
    }

    if ( totalSum.includes( '-' ) ) {
        return calculateResult( totalSum, "-" )
    }

    document.getElementById( 'calculatorOutput' ).innerHTML = "Sorry, we couldn't find any proper special character. Please try again";
}

document.getElementById( 'calculateButton' ).addEventListener( 'click', calculateSum );

function calculateResult( totalSum, sumType ) {

    // Splitting the total sum by character so we have the first and second digit
    let firstDigit = totalSum.split( sumType )[ 0 ];
    let secondDigit = totalSum.split( sumType )[ 1 ];
    let result = 0;

    if ( sumType === "+" ) {
        result = +firstDigit + +secondDigit;
    }

    if ( sumType === "-" ) {
        result = +firstDigit - +secondDigit;
    }

    if ( sumType === "*" ) {
        result = +firstDigit * +secondDigit;
    }

    if ( sumType === ":" ) {
        result = +firstDigit / +secondDigit;
    }

    console.log( result );

    return result;
}