let form = document.getElementById("itemForm");
let nameInput = document.getElementById("name");
let descInput = document.getElementById("description");
let categoryInput = document.getElementById("category");
let tableBody = document.getElementById("itemTable");
let submitBtn = document.getElementById("submitBtn");
let searchInput = document.getElementById("searchInput");

let editIndex = null;
let items = [];

function renderTable() {
  let filter = searchInput.value.toLowerCase();
  tableBody.innerHTML = "";

  for (let i = 0; i < items.length; i++) {
    if (
      items[i].name.toLowerCase().includes(filter) ||
      items[i].desc.toLowerCase().includes(filter) ||
      items[i].category.toLowerCase().includes(filter)
    ) {
      let row = tableBody.insertRow();
      row.insertCell(0).innerText = i + 1;
      row.insertCell(1).innerText = items[i].name;
      row.insertCell(2).innerText = items[i].desc;
      row.insertCell(3).innerText = items[i].category;

      let actionsCell = row.insertCell(4);
      actionsCell.innerHTML = `
        <button onclick="editRow(${i})">Edit</button>
        <button onclick="deleteRow(${i})">Delete</button>
      `;
    }
  }

  console.log("Current Items Array:", items);
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = nameInput.value.trim();
  let desc = descInput.value.trim();
  let category = categoryInput.value;

  let duplicate = items.some(
    (item) =>
      item.name.toLowerCase() === name.toLowerCase() &&
      item.desc.toLowerCase() === desc.toLowerCase() &&
      item.category.toLowerCase() === category.toLowerCase()
  );

  if (duplicate && editIndex === null) {
    alert("This item already exists!");
    return;
  }

  if (editIndex === null) {
    items.push({ name, desc, category });
  } else {
    items[editIndex] = { name, desc, category };
    editIndex = null;
    submitBtn.innerText = "Add";
  }

  form.reset();
  renderTable();
});

function deleteRow(index) {
  items.splice(index, 1);
  renderTable();
}

function editRow(index) {
  nameInput.value = items[index].name;
  descInput.value = items[index].desc;
  categoryInput.value = items[index].category;
  editIndex = index;
  submitBtn.innerText = "Update";
}

searchInput.addEventListener("input", renderTable);
