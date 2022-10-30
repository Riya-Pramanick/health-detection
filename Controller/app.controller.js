
const ConditionCheckedFunction = require('../Helper/conditionChecked');

module.exports.appController = async (req, res) => {
    try {
        let returnJson = new Map();
        let incomingData = req.body.data;
        for(let dataIndex = 0; dataIndex < incomingData.length; dataIndex++){
            let data = incomingData[dataIndex];
            let conditionChecked = await ConditionCheckedFunction.conditionChecked(data);
            console.log(conditionChecked,data);
            if(returnJson.has(conditionChecked.condition)){
                let count = returnJson.get(conditionChecked.condition);
                returnJson.set(conditionChecked.condition, count+1);
            }
            else{
                returnJson.set(conditionChecked.condition, 1);
            }
            
    }
    res.status(200).json({
        "message": "Success",
        "status": true,
        "data": {
            "overweight": returnJson.get("Overweight"),
        }
        
    });
        
    } catch (error) {
        res.status(500).json({
            "message": "Internal Server Error",
            "status": false,
            "data": error,
            
        });
        
        
    }
}