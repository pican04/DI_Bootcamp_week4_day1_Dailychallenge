// Dailychallenge

//get form
let form = document.forms[0];

// get div with listTasks
let TasksList = document.querySelector(".listTasks");

// identifiant increment
let numero = 0;

// Create an empty array
const tasksArray = []

// Create a function called addTask()
function addTask(element) {
    element.preventDefault();

    // check that the input is not empty,
    let value = document.getElementById("todo-text").value;

    if (value != "") {
        // add it to the array
        tasksArray.push(value);

        // ADD IT TO THE DOM
        let myDiv = document.createElement("div"); // create new element
        myDiv.classList.add("custom-control", "custom-checkbox");

        let checkBox = document.createElement("input"); // create new checkbox
        checkBox.classList.add("custom-control-input");
        checkBox.id = `chk${numero}`;
        checkBox.setAttribute("type", "checkbox");

        let newLabel = document.createElement("label"); // create new label
        newLabel.classList.add("custom-control-label");
        newLabel.setAttribute("for", `chk${numero}`);
        newLabel.style.color = "black";
        newLabel.textContent = value;

        // append elements to div
        myDiv.appendChild(checkBox);
        myDiv.appendChild(newLabel);

        // add elemet to div listTasks
        TasksList.append(myDiv);

        // reset input 
        document.getElementById("todo-text").value = "";

        // add event on checkbox
        let myCheck = document.getElementById(`chk${numero}`);
        myCheck.addEventListener("change", (element) => {
            if (element.target.checked) {
                newLabel.style.color = "red";
                newLabel.innerHTML = `<strike>${value}</strike>`;
            } else {
                newLabel.textContent = value;
                newLabel.style.color = "black";
            }
        })

        numero++;
    } else {
        alert("Enter un text please");
    }
}

// on submit form
form.addEventListener("submit", addTask);