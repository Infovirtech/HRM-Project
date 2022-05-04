var selectedRow = null
function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData)
        resetForm();
    }


}
function readFormData() {
    var formData = {};
    formData["name"] = document.getElementById("name").value;
    formData["companyName"] = document.getElementById("companyName").value;
    formData["designation"] = document.getElementById("designation").value;
    return formData;


}

function insertNewRecord(data) {
    var table = document.getElementById("clientList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.companyName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.designation;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = `<button onclick="onEdit(this)">Edit</button>
    <button onclick="onDelete(this)">Delete</button>`;
}

function resetForm() {
    document.getElementById("name").value = "";
    document.getElementById("companyName").value = "";
    document.getElementById("designation").value = "";
    
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("companyName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("designation").value = selectedRow.cells[2].innerHTML;
}
   
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.name;
    selectedRow.cells[1].innerHTML = formData.companyName;
    selectedRow.cells[2].innerHTML = formData.designation;
    
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("clientList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if(document.getElementById("name").value == "") {
        isValid = false;
        document.getElementById("nameValidationError").classList.remove("hide");
    } else{
        isValid = true;
        if (!document.getElementById("nameValidationError").classList.contains("hide"))
            document.getElementById("nameValidationError").classList.add("hide");
    }
    return isValid;
}

