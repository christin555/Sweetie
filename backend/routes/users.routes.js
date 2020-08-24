const router = require('express-promise-router')();
const userController = require('../controllers/user.controller');

// ==> Definindo as rotas do CRUD - 'Product':

// ==> Rota responsável por criar um novo 'Product': (POST): localhost:3000/api/products
router.post('/users', userController.createUser);
router.post('/suggestedPeople', userController.suggestedPeople);
router.get('/users', userController.listAllUsers);

module.exports = router;
