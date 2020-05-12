const db = require("../config/database");

exports.createUser = async (req, res) => {

        var user ={
            name: req.body.name
        };

    const { rows } = await db.query(
            "INSERT INTO users(name) VALUES($1)",[user.name],
            (err, res) => {
                console.log(err, res);
            }
        );
        res.send(user);

};

exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY name ASC');
    res.status(200).send(response.rows);
};