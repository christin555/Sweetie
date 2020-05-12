const db = require("../config/database");

exports.getLenta = async (req, res) => {
    console.log("posts/getLenta:"+req.body);
    const userId = parseInt(req.body.userId);
    const offset = parseInt(req.body.offset);
    const response = await db.query(
        'SELECT "posts"."mediaPath", "posts"."createdAt", "posts"."id", "posts"."location", "posts"."description","users"."name", "users"."photoPath",\n' +
        '(SELECT count(*) FROM comments \n' +
        '        WHERE "comments"."postId" = "posts"."id") AS "commentsCount",\n' +
        '(SELECT "text" FROM comments \n' +
        '        WHERE "comments"."postId" = "posts"."id" group by id order by "createdAt" DESC limit 1) AS "lastComment"\n' +
        'FROM posts left join users on "users"."id" = "posts"."userId" WHERE "userId" IN (SELECT "subscriptionId" FROM subscriptions where "subscriberId"=$1)  order by "posts"."createdAt" DESC limit 10 offset 10*$2', [userId,offset]);
    res.status(200).send(response.rows);

};
