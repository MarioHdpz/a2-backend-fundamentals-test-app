const router = require('express').Router();
const {
  crearMascota,
  obtenerMascotas,
  modificarMascota,
  eliminarMascota
} = require('../controllers/mascotas')
var auth = require('./auth');

console.log(auth.op)

router.get('/', auth.opcional, obtenerMascotas)
router.get('/:id', auth.opcional, obtenerMascotas)// nuevo endpoint con todos los detalles de mascota
router.post('/', auth.requerido, crearMascota)
// router.put('/:id',auth.required, modificarMascota)
// router.delete('/:id',auth.required, eliminarMascota)

module.exports = router;