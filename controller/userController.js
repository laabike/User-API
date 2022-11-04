const {Users} = require("../model/User");
const {v4: uuid} = require("uuid");

//create new users
exports.createUser = async (req, res) => {
    try {
        // const user = await req.body;
        const {name, email, password} = await req.body;
        const newUser = {
            id: uuid(),
            name,
            email,
            password,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
        }
        // user.id = uuid;

        Users.push(newUser);
        res.status(201).json({
            message: "User created successfully",
            newUser,
        });
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
}

//to get all users
exports.getUsers = async (req, res) => {
    try {
        const users = Users;
        res.status(200).json({
            message: "All users",
            users,
        }); 
    } catch (err) {
        res.status(500).json ({message: err});
    }
}

//to get single user
exports.getUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        res.status(200).json({
            message: "User exists",
            user,
        })
    }
    catch (err) {
        res.status(500).json ({message: err});
    }
}

//to edit/update user
exports.updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const{name, email, password} = await req.body;
        user.name = name;
        user.email = email;
        user.password = password;
        res.status(200).json({
            message: "User details updated successfully.",
            user,
        })
    }
    catch (err) {
        res.status(500).json ({message: err})
    }
}

//to delete an existing user
exports.deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        Users.splice(Users.indexOf(user), 1);
        res.status(200).json({
            message:"User successfully deleted.",
            user,
        })
    }
    catch (err) {
        res.status(500).json({message: err})
    }
}

