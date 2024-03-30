const mongoose  = require("mongoose");
const details = new mongoose.Schema({
    name :{
        type :String,
        required:true
    },
    email :{
        type :String,
        required:true,
        unique:true
    },

    contact:{
        type :String,
        required:true,
        unique:true
    },

    team:{
        type :String,
        required: function () {
            return this.team === "2";
        }
    },
    
    second_member_name:{
        type :String,
        required: function () {
            return this.team === "2";
        }
    },

    second_member_email:{
        type :String,
        required: function () {
            return this.team === "2";
        }
    },

    second_member_contact:{
        type :String,
        required: function () {
            return this.team === "2";
        },  
    },

})



const  Register = new mongoose.model("Register", details);

module.exports = Register;