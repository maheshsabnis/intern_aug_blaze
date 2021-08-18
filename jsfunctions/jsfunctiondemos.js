function doWork(){
    console.log('Do Work Called');
}

function processValues(x){
    if(typeof(x) == 'number') {
        console.log(x*x);
    }
    if(typeof(x) == 'string'){
        console.log(x.toUpperCase());
    }
}

function stringOperations(str,c){
  switch(c){
      case 'U': return str.toUpperCase();
      case 'L': return str.toLowerCase();
  }
}