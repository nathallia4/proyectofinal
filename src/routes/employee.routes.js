const { Router } = require('express')
const router = Router()
const employeesCtrl = require('../controllers/employees.controller.js') 

router.get('/',employeesCtrl.getEmployees)
router.post('/',employeesCtrl.createEmployees)
router.get('/:id',employeesCtrl.getEmployees)
router.put('/:id',employeesCtrl.editEmployee)
router.delete('/:id',employeesCtrl.deleteEmployees)

module.exports = router; 