const employeCtrl = {}

const Employee = require('../models/Employe')

employeCtrl.getEmployees = async (req,res)=>{
    const employees = await Employee.find()
    res.json(employees)
}

employeCtrl.createEmployees = async (req,res)=>{
    const newEmployee = new Employee(req.body)
    await newEmployee.save()
    res.send({message:'employee created!'})
}

employeCtrl.getEmploye = async (req,res)=>{

}

employeCtrl.editEmployee = (req,res)=>{

}

employeCtrl.deleteEmployees = (req,res)=>{

}

module.exports = employeCtrl