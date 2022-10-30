




function bmiCalculation (data){
    try {
        let bmi = data.WeightKg / ((data.HeightCm * data.HeightCm) / 10000);
        return bmi;
        
    } catch (error) {
        throw error;
        
    }
}



async function conditionChecked (data){
    try {
        let bmi =  bmiCalculation(data);
        console.log(bmi);
        let returnobject = {};
        if(bmi < 18.5){
            returnobject = {
                "bmi": bmi,
                "condition": "Underweight",
                "healthRisk": "Malnutrition risk"
            }
        }
        else if(bmi >= 18.5 && bmi <= 24.9999999){
            returnobject = {
                "bmi": bmi,
                "condition": "Normal weight",
                "healthRisk": "Low risk"
            }
        }
        else if(bmi >= 25 && bmi < 29.9){
            returnobject = {
                "bmi": bmi,
                "condition": "Overweight",
                "healthRisk": "Enhanced risk"
            }
        }
        else if(bmi >= 30 && bmi <= 34.9){
            returnobject = {
                "bmi": bmi,
                "condition": "Moderately obese",
                "healthRisk": "Medium risk"
            }
        }
        else if(bmi >= 35 && bmi <= 39.9){
            returnobject = {
                "bmi": bmi,
                "condition": "Severely obese",
                "healthRisk": "High risk"
            }
        }
        else if(bmi >= 40){
            returnobject = {
                "bmi": bmi,
                "condition": "Very severely obese",
                "healthRisk": "Very high risk"
            }
        }

        return returnobject;
        
        
    } catch (error) {
        throw error;
        
    }
}


module.exports = {
    conditionChecked
}