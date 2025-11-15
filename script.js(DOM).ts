// Form submit event listener
document.getElementById("student-form").addEventListener("submit", addStudent);

// Add student function
function addStudent(e) {
    e.preventDefault();

    let nameField = document.getElementById("student-name");
    let nameValue = nameField.value.trim();

    // Empty validation
    if (nameValue === "") {
        alert("Please enter a student name!");
        return;
    }

    // Creating the list item
    let li = document.createElement("li");
    li.classList.add("student-item");

    // Span for student name
    let nameSpan = document.createElement("span");
    nameSpan.textContent = nameValue;

    // Edit Button
    let editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("btn-edit");
    editBtn.onclick = () => editStudent(nameSpan);

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("btn-delete");
    deleteBtn.onclick = () => li.remove();

    // Attach everything
    li.appendChild(nameSpan);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("student-list").appendChild(li);

    // Clear input
    nameField.value = "";
}

// Edit function
function editStudent(nameSpan) {
    let newName = prompt("Enter the new name:", nameSpan.textContent);

    if (newName && newName.trim() !== "") {
        nameSpan.textContent = newName.trim();
    }
}

// Highlight toggle
document.getElementById("highlight-btn").addEventListener("click", () => {
    let items = document.querySelectorAll(".student-item");
    items.forEach(item => item.classList.toggle("highlight"));
});
