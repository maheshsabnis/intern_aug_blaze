// the facade interface
var GrantAccessToUser=function(username,password){
    this.username = username;
    this.password = password;
};
// the Sub-System that connect to furtjher other sub-systems to provide execution
GrantAccessToUser.prototype = {
    accessApplication = function(){
        let result;
        // logic for application access
        if(!new CheckUser().exist(this.username)){
            result = "UserName Not Found"
        } else if(!new ChechAuthentication().IsAuthenticated(this.username,this.password)){
            result = "UserNAme and PAssword Not Found";
        } else if(new GetRole().getRole(this.username).length === 0) {
            result = "Sorry, Usser is not assigned the role";
        } else if(!new CheckRoleAccess().IsRoleAuthorized(result)){
            result = "The Roe does not have any access";
        }
        result = `For the User ${this.username} and the role ${result} teh access is granted`;
        return result;
    }
};
// sub-system
var CheckUser = function(){
    this.exist = function(username){
        // logic to check user
        return true;
    }
};
// sub-system
var ChechAuthentication = function(){
    this.IsAuthenticated = function(usetname,password){
        // logic to verify the username and password
        return true;
    }
}
// sub-system
var GetRole  =function(){
    this.getRole = function(username){
        // logic to retrieve role for User
        return "Manager";
    }
}
// sub-system
var CheckRoleAccess = function(){
    this.IsRoleAuthorized = function(role){
        // check if the role has access rights
        return true;
    }
}

var client = function(){
    var grantStatus = GrantAccessToUser("Mahesh", "mahesh"); 
    var receivable = grantStatus.accessApplication();

}