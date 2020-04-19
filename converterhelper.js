class Converter {
    //this is the base unit we want to convert to something else
    constructor(unitToConvert) {
        //we'll store this unit internally as _unitToConvert
        let check = parseFloat(unitToConvert);
        if(isNaN(check)) {
            throw new Error("Error: you must pass a number to constructor!");
        } else {
            this._unitToConvert = check;
        }
        
    }
}

//define a class named MetricToImperial here, which extends the Converter class shown above.

class MetricToImperial extends Converter { //class named MetricToImperial that extends Converter class
    constructor(value) { //the class constructor with value parameter
        super(value); 
    }

    convertMetersToFeet() { //convert meters to feet
        return this._unitToConvert * 3.2808; //return the result of method
    }

    convertMetersToMiles() { //convert meters to miles
        return this._unitToConvert * 0.00062137; //return the result of method
    }

    convertLitersToGallons() { //convert liters to gallons
        return this._unitToConvert * 0.26417; //return the result of method
    }

    convertLitersToQuarts() { //convert liters to quarts
        return this._unitToConvert * 1.056688; //return the result of method
    }

    convertKilosToPounds() { //convert kilos to pounds
        return this._unitToConvert * 2.2046; //return the result of method
    }

    convertCelsiusToFahrenheit() { //convert celsius to fahrenheit
        return this._unitToConvert * 1.8 + 32; //return the result of method
    }

    static toTwoDecimalPlaces(number) { //toTwoDecimalPlaces() accept single parameter
        let floatExp = /[\.][\d]/; //variable to store regEx to check if float
        try{ 
            if(floatExp.test(number) === false){ //if number is not a float 
                throw new Error("Number is not a floating-point number"); //throwing error if the number is not floating-point
            } else { //if error not thrown
                return number.toFixed(2); //return number with 2 decimal points
            }
        } catch (e){ //catch error 
            console.log(e.toString()); //log error to console.log
            return number; //return the result
        }
    }
}