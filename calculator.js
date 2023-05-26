
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");    
});

app.post("/", function (req, res) {
    var num1 = req.body.num1;
    var num2 = req.body.num2;

    var no1 = Number(num1);
    var no2 = Number(num2);

    var result = no1 + no2;
    console.log(result);

    res.send(String(result));
});

app.get("/bmiCalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function (req, res) {
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var result = bmiCalculator(weight,height);

    res.send(String(result));
});

app.listen(3000, function () {
    console.log("The server is running on port 3000");
});

function bmiCalculator (weight, height) {
    var bmiValue = weight/(height*height);
    var interpretation = Math.round(bmiValue);
    if (interpretation < 18.5)
    {return "Your BMI is " + interpretation + ", so you are underweight.";}
    if (interpretation >= 18.5 && interpretation <= 24.9)
    {return "Your BMI is " + interpretation + ", so you have a normal weight.";}
    if (interpretation > 24.9)
    {return "Your BMI is " + interpretation + ", so you are overweight.";}
    return interpretation;
}