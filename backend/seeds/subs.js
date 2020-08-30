var faker = require('faker');

let createRecord = (knex, id) => {
    return knex('subscriptions').insert({
        id,
        subscriber_id: faker.random.number({
            'min': 1,
            'max': 100
        }),
        subscription_id: 1,
    })
}


exports.seed = function(knex) {
    return knex('subscriptions').del()
        .then( () => {
            let records = [];

            for (let i = 1; i < 100; i++) {
                records.push(createRecord(knex, i))
            };


            return Promise.all(records);
        });
};
