
global.expect = require('chai').expect;

var data1=[
    {id:14, name:"Tina White", createdAt:"2021-03-31T15:59:27.302Z"},
    {id:15,name:"Allen Durgan", createdAt:"2021-03-31T10:02:15.415Z"}
];

expect(data1.map(e=>e.name)).to.include("Allen Durgan");//true

