/*
    path: api/login
*/
const {Router} = require('express');
const { check } = require('express-validator');

const { crearUsuario, login, renewToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();


router.post('/new', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'Debes asignar una contraseña').not().isEmpty(),
    validarCampos,
], crearUsuario);

//post: /
//validar email, password

router.post('/', [
check('email', 'El email es obligatorio').not().isEmpty(),
    check('password', 'Debes asignar una contraseña').not().isEmpty(),
], login);

router.get('/renew', validarJWT, renewToken);

module.exports = router;