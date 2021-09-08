class DataClass {
    constructor(){
        this.Data = [
            {id:101,name:'A'}
        ];
    }

    getData(){
        return this.Data;
    }

    saveData(data){
        this.Data.push(data);
        return this.Data;
    }
}

module.exports = DataClass;