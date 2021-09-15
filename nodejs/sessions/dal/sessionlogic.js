const {Sequelize,DataTypes}  =  require('sequelize');
const path = require('path');
const sequelize = new Sequelize("Company", "root", "P@ssw0rd_", {
    host: 'localhost',
    dialect:'mysql'
});


const deptModel = require(path.join(__dirname, './../models/department'))(sequelize, Sequelize.DataTypes);

const usersModel = require(path.join(__dirname, './../models/users'))(sequelize, Sequelize.DataTypes);

class AuthLogic {
    async registerUser(req,resp){
        // logic for creating new user
        let user = req.body;
        await sequelize.sync({force:false});
        // check if the user already exists
        let usr = await usersModel.findOne({where:{UserName: user.UserName}});
        if(usr!==null) {
            // conflict
            return resp.status(409).send({message: `User Name ${user.UserName} already exists`});
        }
        // else create user
        let created  = await usersModel.create(user);
        return resp.status(201).send({message: `User Name ${user.UserName} CReated`});

    }
    async authUser(req,resp){
        // Logic for authenticating user 
        let user = req.body;
        // check if the user exist
        let usr = await usersModel.findOne({where:{UserName: user.UserName}});
        if(usr === null) {
            return resp.status(404).send({message: `User Name ${user.UserName} not found please register`});
        }
        // match the password
        if(usr.PAssword.trim() !== user.PAssword.trim()){
            return resp.status(401).send({message: `User Name ${user.UserName}Password does not match`});
        }
        // else authenticate the request
        // this will be available from express and express-session middleware configured
        req.session.loggedin = true; // the user will be authenticated for Login on the current session. This will be stored in Express Process
        // configure the session name to the user name This will be stored in Express Process
        req.session.name = user.UserName;
        console.log(`CUrrewnt Sesion for the user is = ${req.session.name}`);
        return resp.status(200).send({message: `User Name ${user.UserName}is Authencated`});
    }
    async getData(req,resp){
        console.log(`NAme = ${req.session.name}`);
        // get data from database
        // first check if the request has the sessionname
        if(req.session.name === undefined){
            return resp.status(401).send({message: `Either authentication is not done or else the session is expired. Please gonin again`});
        }
        // else send the data 
        await sequelize.sync({force:false});
        let data = await deptModel.findAll();
        return resp.status(200).send({message: data});
    }
    async logout(req,resp) {
        console.log(`NAme in logout request= ${req.session.name}`);

        // destroy the session
        req.session.destroy();
        return resp.status(200).send({message: 'Logout Successfully'});
    }
}

module.exports = AuthLogic;