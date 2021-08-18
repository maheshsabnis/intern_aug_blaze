var StringOperations = function(){
    this.getStringLength=function(str){
        private();
        return str.length;
    };
    this.reverseString=function(str){
        private();
        var res = '';
        for(var i=str.length-1;i>0;i--){
            res+=str[i];
        }
        return res;
    };
    this.changeCase = function(str,c){
        private();
        switch(c){
            case 'U': return str.toUpperCase();
            case 'L': return str.toLowerCase();
        }
    };
    function private(){
        console.log('I Am Private Function');
    }
};

// Ref. Function is having input parameters
// they will be used like COnstructor Parameter
var MathObject = function(x,y){
    var name='Mahesh'; // local private declaration hut will be scopped to all functions inside the Ref. Function
    this.newname = "dddfddddddd";
    this.addWithSquare = function(){
        console.log(name);
        return (x*x)+2*x*y + (y*y);
    };

    this.subscractWithSquare = function(){
        console.log(name);
        return (x*x)-2*x*y + (y*y);
    };
}
