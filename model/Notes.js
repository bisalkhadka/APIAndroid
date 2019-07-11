const mongoose = require('mongoose');
const NoteSchema = new mongoose.Schema({


        note1: { // column name
            type: String   //data type String
        },
        note2: { // column name
            type: String   //data type String
        }
       
    })
    
        
 const Note= mongoose.model('Note',NoteSchema)
    
module.exports = Note 
 