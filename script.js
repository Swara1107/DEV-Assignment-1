const studentForm = document.getElementById("studentForm");

const studentTable = document.getElementById("studentTable");


studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const roll = document.getElementById("roll").value;

    const branch = document.getElementById("branch").value;


    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${branch}</td>
        <td>
            <button onclick="deleteStudent(this)">
                Delete
            </button>
        </td>
    `;

    studentTable.appendChild(row);

    studentForm.reset();
});


function deleteStudent(button) {

    button.parentElement.parentElement.remove();

}