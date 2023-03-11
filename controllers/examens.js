const Examen = require("../models/examen");
const jwt = require("jsonwebtoken");

const secret = `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODE5NzU3OCwiaWF0IjoxNjc4MTk3NTc4fQ.QIeroobSegUra2jRjN8DhO2REYUMlZiwfB12bq9FY4A`;

//GET
const get = async (req, res) => {
    let response = {
        status: "Success",
        message: "GETTING examens",
        data: {
            examens: await Examen.find()
        },
    };
    if (response.data.examens.length) {
        res.json(response);
    } else {
        res.send({
            status: "Error",
            message: "No examens found"
        });
    };
};


//POST
const create = async (req, res) => {
    let datum = req.body.datum;
    let plaats = req.body.plaats;
    let opmerking = req.body.opmerking;
    let e = new Examen();
    e.datum = datum;
    e.plaats = plaats;
    e.opmerking = opmerking;
    let jwtoken = jwt.sign(
        {
            datum: e.datum,
            plaats: e.plaats,
            opmerking: e.opmerking,
        },
        secret
    );

    await e.save();
    res.send({
        status: "Success",
        message: "Posting API examen",
        data: jwtoken
    });
};

module.exports.get = get;
module.exports.create = create;