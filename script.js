const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function getDescription() {
    return document.getElementById("description-box").value;
}

function addTask() {
    if (inputBox.value === '') {
        alert("Please Write Something");
    } else {
        let li = document.createElement("li");

        let taskSpan = document.createElement("span");
        taskSpan.className = "task";
        taskSpan.innerHTML = inputBox.value;
        taskSpan.setAttribute("contenteditable", "true"); 
        li.appendChild(taskSpan);

        let descriptionSpan = document.createElement("span");
        descriptionSpan.className = "description";
        descriptionSpan.innerHTML = getDescription();
        li.appendChild(descriptionSpan);

        listContainer.appendChild(li);

        let removeButton = document.createElement("span");
        removeButton.className = "x";
        removeButton.innerHTML = "x";
        li.appendChild(removeButton);
    }

    inputBox.value = "";
    document.getElementById("description-box").value = "";

    saveData();
}

listContainer.addEventListener("click", function (e) {
    const clickedElement = e.target;

    if (clickedElement.tagName === "LI" && !isEditableElement(clickedElement)) {
        clickedElement.classList.toggle("checked");
        saveData();
    } else if (clickedElement.tagName === "SPAN" && clickedElement.className === "x") {
        clickedElement.parentElement.remove();
        saveData();
    }
}, false);

function isEditableElement(element) {
    return element.hasAttribute("contenteditable");
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
