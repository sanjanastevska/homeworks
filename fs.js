const fs = require('fs');

//creating a JS object with a table array in it
const obj = {
    table:[]
}

function createJSONObject(idParam, firstNameParam, lastNameParam) {
    obj.table.push({id: idParam, firstName: firstNameParam, lastName: lastNameParam});
    fs.writeFileSync('data.json', JSON.stringify(obj, null, 2), 'utf-8');
}

createJSONObject("1", "dasdas", "sdkajsda")
createJSONObject("2", "vbabskjdnas",  "ewrwerwerwerwe")
createJSONObject("3", "dasdas", "sdasdasdas")
 
//Reading the data.json file
const readFile = fs.readFileSync('data.json', 'utf-8');
console.log(readFile);

//Updating data.json file
const updateItemById = id => {
    obj.table.forEach(element => {
        if(element.id == id){
            element.firstName = 'Sanja';
        }
        fs.writeFileSync('data.json', JSON.stringify(obj, null, 2), 'utf-8');
    });
}
updateItemById("123w4das");

// Read an item by id from data.json
const readItemById = id => {

    obj.table.forEach(element => {
        if(element.id == id){
            console.log(element);
        } else {
            console.log(`Object with id ${element.id} is not found`)
        }
    });
}

readItemById("2");

// Delete an item from data.json
const deleteItemById = id => {
    const removeItem = id;
    items = obj.table.filter((item) => {
        return item.id !== removeItem;
    })
    obj.table = items;
    fs.writeFileSync('data.json', JSON.stringify(obj, null, 2), 'utf-8');         
}

deleteItemById('2');