var faker = require('faker');



let photos = [
    "https://sun3-10.userapi.com/c836539/v836539989/768bb/tvNE7qozA0g.jpg",
    "https://sun9-29.userapi.com/c853428/v853428686/1e5e25/yZOhbGE3VGs.jpg",
    "https://goarctic.ru/upload/iblock/444/4445f76ff7261804dfc52f8531daa7a4.jpg",

];
let createRecord = (knex, id) => {
    return knex('users').insert({
        id,
        name: faker.internet.userName(),
        email: faker.internet.exampleEmail(),
        photo_path: faker.internet.avatar(),
        about_user: faker.lorem.sentence(),
        web_site: faker.internet.exampleEmail()

    })
}


exports.seed = function(knex) {
    return knex('users').del()
        .then( () => {
            let records = [];

            for (let i = 1; i < 100; i++) {
                records.push(createRecord(knex, i))
            };

            return Promise.all(records);
        });
};
