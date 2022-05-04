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
    formData["leave_type"] = document.getElementById("leave_type").value;
    formData["date1"] = document.getElementById("date1").value;
    formData["date2"] = document.getElementById("date2").value;
    formData["text"] = document.getElementById("text").value;
    formData["leave_reason"] = document.getElementById("leave_reason").value;
    return formData;


}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.leave_type;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date1;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.date2;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.text;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.leave_reason;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<button onclick="onEdit(this)">Edit</button>
    <button onclick="onDelete(this)">Delete</button>`;
}
function resetForm() {
    document.getElementById("leave_type").value = "";
    document.getElementById("date1").value = "";
    document.getElementById("date2").value = "";
    document.getElementById("text").value = "";
    document.getElementById("leave_reason").value = "";
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("leave_type").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("date2").value = selectedRow.cells[2].innerHTML;
    document.getElementById("text").value = selectedRow.cells[3].innerHTML;
    document.getElementById("leave_reason").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.leave_type;
    selectedRow.cells[1].innerHTML = formData.date1;
    selectedRow.cells[2].innerHTML = formData.date2;
    selectedRow.cells[3].innerHTML = formData.text;
    selectedRow.cells[4].innerHTML = formData.leave_reason;
}
function onDelete(td) {
    if (confirm('Are you sure to delete this record?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if(document.getElementById("leave_type").value == "") {
        isValid = false;
        document.getElementById("leave_typeValidationError").classList.remove("hide");
    } else{
        isValid = true;
        if (!document.getElementById("leave_typeValidationError").classList.contains("hide"))
            document.getElementById("leave_typeValidationError").classList.add("hide");
    }
    return isValid;
}