var items = [
    "Clean room",
    "Make dinner",
    "Walk dog"
];

function _addItem(item){
    items.push(item);
};

function _removeItem(item){
    var index = items.indexOf(item);
    if (index > -1) {
        items.splice(index, 1);
    }
};

function _getAllItems(){
    return JSON.stringify(items);
};

module.exports = {
    getItems : items,
    addItem : _addItem,
    removeItem : _removeItem,
    getAllItems : _getAllItems
}