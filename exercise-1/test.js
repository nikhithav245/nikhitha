var input = [
    { "name": "Tina White",
      "id": 14
    },
    { "name": "Allen Durgan",
      "id": 15
    },
    { "name": "Ryann Wiegand",
      "id": 16
    }
    ]
    var output = input.some(function(eachRow){
        return eachRow.name === 'Tina White';
    });
    
    console.log(output);