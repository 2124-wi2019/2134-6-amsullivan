/*  Anna Sullivan
    script.js
    INFO2134WW
    Thoendel
    4/19/2020
*/

window.addEventListener("load", () => { 

    const userInputs = document.getElementById("userInput"); //set userInputs element to constant variable s
    const actionLink = document.getElementById("action"); //set anchor element to constant variable 
    const errorHolder = document.getElementById("errorHolder"); //set div element to constant variable 
    const errorList = document.getElementById("errorList"); //set UL element to constant variable 
    const resultsHolder = document.getElementById("resultHolder"); //set div element to constant variable 

    userInputs.addEventListener("keyup", (e) => { //event listener added on keyup event to check userInputs
        errorList.innerHTML = ""; //reset errorList to blank
        if(userInputs.value === ""){ //userInputs is blank
            displayError("Error: User input cannot be blank!"); //calling function to add an error message
            userInputs.focus(); //reset focus to input
        }
        if(isNaN(userInputs.value)){
            displayError("You must enter a whole number to convert"); //calling method to add an error message
            userInputs.focus(); //reset focus to input
        }
        if(userInputs.value !== "" && !isNaN(userInputs.value)){ //userInputs is not empty and contains a number value
            convertFromHolder.setAttribute("class", "visible"); //setAttribute class visible
        }
    });

    const convertFromHolder = document.getElementById("convertFromHolder"); //set div element to constant variable 
    const convertToHolder = document.getElementById("convertToHolder"); //set div element to constant 
    const optionChange = document.getElementById("convertFrom"); //set select element to constant variable
    const conTo = document.getElementById("convertTo"); //set select element to constant variable 

    optionChange.addEventListener("change", (e) => { //event listener added for change event of the convert from selection field
        convertToHolder.setAttribute("class", "hidden"); //setting the div to hidden
        conTo.innerHTML = ""; //reset conTo to blank
        let conversion; //created variable that the MetricToImperial object will be stored in
        switch(optionChange.value){ //switch statement based on value chosen in the convertFrom select box
            case "Meters": //option is metters
                    createSelectOption("feet", "Feet"); //creating select option for feet 
                    createSelectOption("miles", "Miles"); //creating select option for miles 
                    convertToHolder.setAttribute("class", "visible"); //setAttribute class visible
                    actionLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        switch(conTo.value){ //switch statement to check convertTo value
                            case "Feet": //option is Feet
                                conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertMetersToFeet()) + " Feet"; //displaying the calculation with format -- calling static method and conversion method
                                break; 
                            case "Miles": //option is Miles
                                conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertMetersToMiles()) + " Miles"; //displaying the calculation with format -- calling static method and conversion method
                                break; 
                        }
                    });
                    break; 
            case "Liters": //option is Liters
                    createSelectOption("gallons", "Gallons"); //creating select option for gallons
                    createSelectOption("quarts", "Quarts"); //creating select option for quarts
                    convertToHolder.setAttribute("class", "visible");  //setAttribute class visible
                    actionLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resultsHolder to clear
                        switch(conTo.value){ //switch statement to check convertTo value
                            case "Gallons": //option is Gallons
                                conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertLitersToGallons()) + " Gallons"; //displaying the calculation with format -- calling static method and conversion method
                                break; 
                            case "Quarts": //option is Quarts
                                conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                                resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertLitersToQuarts()) + " Quarts"; //displaying the calculation with format -- calling static method and conversion method
                                break; 
                        }
                    });
                    break; 
            case "Kilos": //option is Kilos
                    createSelectOption("pounds", "Pounds"); //creating select option for pounds
                    convertToHolder.setAttribute("class", "visible"); //setAttribute class visible
                    actionLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                        resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertKilosToPounds()) + " Pounds"; //displaying the calculation with format -- calling static method and conversion method
                    });
                    break; 
            case "Celsius": //option is Celsius
                    createSelectOption("fahrenheit", "Fahrenheit"); //creating select option for fahrenheit
                    convertToHolder.setAttribute("class", "visible"); //setAttribute class visible
                    actionLink.addEventListener("click", (e) => { //adding event listener for a click on the convert anchor
                        resultsHolder.innerHTML = ""; //resetting value of results holder div to blank
                        conversion = new MetricToImperial(userInputs.value); //creating new MetricToImperial instance
                        resultsHolder.innerHTML = MetricToImperial.toTwoDecimalPlaces(conversion.convertCelsiusToFahrenheit()) + " Degrees Fahrenheit"; //displaying the calculation
                    });
                    break; 
        }   
    });


    function displayError(errorMessage){ //function to create and append error messages
        let errorString = ""; //creating errorString variable
        errorString += errorMessage; //appending error message to errorString
        let errorLi = document.createElement("li"); //creating li element
        errorLi.innerHTML = errorString; //adding error message to the li
        errorList.appendChild(errorLi); // appendChild li to the ul
        errorHolder.setAttribute("class", "visible"); //setting the error holder class to visible
    }

    function createSelectOption(idValue, selectValue){ //function to create a select option
        let element = document.createElement("option"); //creating option element in element variable
        element.setAttribute("id", idValue); //setting id of the element
        element.innerHTML = selectValue; //setting innerhtml of the option element
        conTo.appendChild(element); //appending the option element to the convert to select field
    }


});