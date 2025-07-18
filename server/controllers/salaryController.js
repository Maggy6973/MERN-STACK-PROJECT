import Salary from "../models/Salary.js";
import mongoose from "mongoose"
import Employee from "../models/Employee.js";

const addSalary = async (req, res) => {
    try {
        const {employeeId, basicSalary, allowances, deductions, payDate} = req.body;

        const totalSalary = parseInt(basicSalary) + parseInt(allowances) - parseInt(deductions);

        const newSalary = new Salary({
            employeeId,
            basicSalary,
            allowances,
            deductions,
            netSalary: totalSalary,
            payDate
        })

        await newSalary.save();

        return res.status(200).json({success: true});

    } catch (error) {
        return res.status(500).json({success: false, error: "salary add server error"});
    }
}

const getSalary = async (req, res) => {
    try {
       const {id} = req.params;
       // Use id directly if it's a valid ObjectId string
       let salary = await Salary.find({ employeeId: id }).populate('employeeId', 'employeeId');
       if(!salary || salary.length < 1) {
        const employee = await Employee.findOne({userId: id})
        salary = await Salary.find({ employeeId: employee._id }).populate('employeeId', 'employeeId');
       }
       return res.status(200).json({success: true, salary});
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({success: false, error: "salary get server error"})
    }
}


export{addSalary, getSalary}