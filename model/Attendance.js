const mongoose = require('mongoose');
const jwt = require('jsonwebtoken')
const AttendanceSchema = new mongoose.Schema({

  
    rnumber: { // column name
        type: String   //data type String
    },
       
        rclass: { // column name
            type: String   //data type String
        },

        name: { // column name
            type: String   //data type String
        }
       
       
    })
    const Attendance= mongoose.model('Attendance',AttendanceSchema)
    module.exports = Attendance 
 