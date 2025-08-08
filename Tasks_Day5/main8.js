let items = [];

function createItem(item) {
  items.push(item);
  console.log(` Added item: "${item}"`);
}

function readItems() {
  console.log(" Current items:");
  if (items.length === 0) {
    console.log(" No items in the list.");
  }
   else {
    items.forEach((item, index) => {
      console.log(`${index}: ${item}`);
    });
  }
}

function updateItem(index, newValue) {
  if (index >= 0 && index < items.length) {
    console.log(` Updated item at index ${index} from "${items[index]}" to "${newValue}"`);
    items[index] = newValue;
  } 
  else {
    console.log(" Invalid index.");
  }
}

function deleteItem(index) {
  if (index >= 0 && index < items.length) {
    console.log(` Deleted item "${items[index]}" at index ${index}`);
    items.splice(index, 1);
  } else {
    console.log(" Invalid index.");
  }
}
