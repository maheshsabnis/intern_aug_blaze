// write an extension for StringOperations object

StringOperations.prototype.checkNoOfSpaces = function(str){
   var spacesCount = 0;
   for(var i=0;i<str.length;i++){
       if(str[i]=== ' '){
           spacesCount++;
       }
   } 
   return spacesCount;
};