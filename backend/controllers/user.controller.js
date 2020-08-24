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
exports.suggestedPeople= async (req, res) => {

    const userId = parseInt(req.body.userId);
    const limit = req.body.limit ? parseInt(req.body.limit) : 20;
    const offset = req.body.offset ? parseInt(req.body.offset) : 0;
    const response = {} ;

    const user_rows = await db.query('SELECT  distinct ON  ("users"."id") "users"."id", "name", "photo_path", "about_user" FROM users left join subscriptions on "users"."id" = "subscriptions"."subscriber_id" WHERE "users"."id"  IN (SELECT "subscriber_id" FROM subscriptions where "subscription_id"=$1) and "users"."id"  not in (SELECT "subscription_id" FROM subscriptions where "subscriber_id"=$1) group by "users"."id","name", "photo_path", "about_user"  limit $2 offset $3;', [userId,limit,offset]);
    const totalCount = await db.query('SELECT  distinct ON  (subscriber_id) count(*)  FROM users left join subscriptions on "users"."id" = "subscriptions"."subscriber_id" WHERE "users"."id"  IN (SELECT "subscriber_id" FROM subscriptions where "subscription_id"=$1) and "users"."id"  not in (SELECT "subscription_id" FROM subscriptions where "subscriber_id"=$1) group by "subscriber_id";', [userId]);

    response.totalCount = totalCount.rowCount;
    response.user_list = user_rows.rows;
    console.log(response);
    res.status(200).send(response);
}

exports.listAllUsers = async (req, res) => {
    const response = await db.query('SELECT * FROM users ORDER BY name ASC');
    res.status(200).send(response.rows);
};
