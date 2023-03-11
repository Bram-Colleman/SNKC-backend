const Activiteit = require("../models/activiteit");
const jwt = require("jsonwebtoken");

const secret = `eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTY3ODE5NzU3OCwiaWF0IjoxNjc4MTk3NTc4fQ.QIeroobSegUra2jRjN8DhO2REYUMlZiwfB12bq9FY4A`;

//GET
const get = async (req, res) => {
    let response = {
        status: "Success",
        message: "GETTING activiteiten",
        data: {
            activiteiten: await Activiteit.find().sort({datum: 'asc'})
        },
    };
    if (response.data.activiteiten.length) {
        res.json(response);
    } else {
        res.send({
            status: "Error",
            message: "No activiteiten found"
        });
    };
};


//POST
const create = async (req, res) => {
    let titel = req.body.titel;
    let datum = req.body.datum;
    let opmerking = req.body.opmerking;
    let plaats = req.body.plaats;
    let uur = req.body.tijd;
    let a = new Activiteit();
    a.titel = titel;
    a.datum = datum;
    a.opmerking = opmerking;
    a.plaats = plaats;
    a.uur = uur;
    let jwtoken = jwt.sign(
        {
            titel: a.titel,
            datum: a.datum,
            opmerking: a.opmerking,
            plaats: a.plaats,
            uur: a.uur
        },
        secret
    );

    await a.save();
    res.send({
        status: "Success",
        message: "Posting API activiteit",
        data: jwtoken
    });
};

module.exports.get = get;
module.exports.create = create;