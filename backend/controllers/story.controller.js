const db = require("../config/database");

exports.getMyStories = async (req, res) => {
    console.log("story/getMyStories, body:"+req.body);
    const userId = parseInt(req.body.userId);

    const response = await db.query('SELECT "stories"."mediapath", "stories"."createdAt", "stories"."id", "users"."name","users"."photoPath" FROM stories left join users on "users"."id" = "stories"."userId" WHERE "userId" IN (SELECT "subscriptionId" FROM subscriptions where "subscriberId"=$1)  AND INTERVAL \'1\' DAY + "createdAt">= NOW();', [userId]);
    res.status(200).send(response.rows);

};
