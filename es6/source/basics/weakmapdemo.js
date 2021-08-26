let wm = new WeakMap();
let o1 = {Danme:'D1'};
let o2 = {Dname:'D2'};
let o3 = {Dname:'D3'};
let o4 = {Dname:'D4'};

wm.set(o1, [{Eno:101,Ename:"ABC",Sal:12000},{Eno:102,Ename:"DEF",Sal:11000}]);
wm.set(o2, [{Eno:103,Ename:"GHI",Sal:12000},{Eno:104,Ename:"JKL",Sal:11000}]);
wm.set(o3, [{Eno:105,Ename:"MNO",Sal:12000},{Eno:106,Ename:"PQR",Sal:11000}]);
wm.set(o4, [{Eno:107,Ename:"STU",Sal:12000},{Eno:108,Ename:"VWX",Sal:11000}]);
wm.set({Dname:'D5'}, [{Eno:109,Ename:"YZA",Sal:12000},{Eno:110,Ename:"BCD",Sal:11000}]);

console.log(`Map HAs the Record ${wm.has(o1)}`);
o1=null;
console.log(`Map HAs the Record ${wm.has(o1)}`);

