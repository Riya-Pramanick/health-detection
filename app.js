
const express = require('express');
const PORT = 8000;
const bodyParser = require('body-parser');


var app = express();
const rtsIndex = require('./routes/index.router');



app.use(bodyParser.json({limit:'50mb', extended: true, parameterLimit: 50000 }));
app.use('/api/v1', rtsIndex);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));