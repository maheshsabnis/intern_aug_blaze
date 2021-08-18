function StringsOperations(str){
    function private(){
        console.log('private');
    }
    return {
       name: "Mahesh Sabnis", 
       getStringLength:function(){
            return str.length;
        },
       reverseString:function(){
            var res = '';
            for(var i=str.length-1;i>0;i--){
                res+=str[i];
            }
            return res;
        },
        changeCase:function(c){
            switch(c){
                case 'U': return str.toUpperCase();
                case 'L': return str.toLowerCase();
            }
        }
    };
};

StringsOperations.prototype.printMessage = function(){
    console.log(this.name);
};