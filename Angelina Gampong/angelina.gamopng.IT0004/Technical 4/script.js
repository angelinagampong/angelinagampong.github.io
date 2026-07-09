let tasks = [
   //adds items to the list
];

//elements
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

//function declaration
//adding DOM elements
function renderTasks() {
   taskList.innerHTML = "";
   tasks.forEach(function(task) {
       const li = document.createElement("li");
       const deleteBtn = document.createElement("button");
       li.textContent = task.text;
       deleteBtn.textContent = "Delete";
       deleteBtn.className = "delete-btn";
       deleteBtn.addEventListener("click", function() {
           removeTask(task.id);
       });
       li.appendChild(deleteBtn);
       taskList.appendChild(li);
   });
}

//client side
//will appear on the webpage when nothing is entered and the add button is clicked
function addTask() {
   const inputValue = taskInput.value.trim();
   if (inputValue === '') {
       alert("Please enter a valid task!");
       return;
   }

   //create new task
   const newTask = {
       id: Date.now(),
       text: inputValue
   };
   tasks.push(newTask);
   taskInput.value = ""; 
   renderTasks();        
}

//remove tasks from to do list
function removeTask(id) {
   tasks = tasks.filter(function(task) {
       return task.id !== id;
   });
   renderTasks();
}

//when user clicks the button
addTaskBtn.addEventListener("click", addTask);
taskInput.addEventListener("keydown", function(event) {
   if (event.key === "Enter") {
       addTask();
   }
});

renderTasks();