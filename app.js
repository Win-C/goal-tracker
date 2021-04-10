"use strict";

const goalForm = document.getElementById("new-goal");
const goalArea = document.getElementById("goals");


/** Function handles form submission */
function handleFormInputs(evt) {
  evt.preventDefault();

  const userData = formatFormData(evt);
  addGoalToDOM(userData);

  goalForm.reset();  // clears the form after handling user data
}

/** Function handles deleting a goal */
function deleteGoal(evt){
  if (evt.target.classList.contains("delete")){
    evt.target.parentElement.remove();
  }
}

/** Function gathers form data into an object
 *  Takes in the event object
 *  Returns an object with form data like
 *  => { name, description, type, difficulty, urgent }
 */
function formatFormData(evt){
  return {
    name: evt.target.name.value,
    description: evt.target.description.value,
    type: evt.target.type.value,
    difficulty: evt.target.difficulty.value,
    urgent: evt.target.urgent.checked,
  };
}

/** Function handles adding a new goal to DOM 
 *  Takes in data provided by the user
*/
function addGoalToDOM(data) {
  let newGoal = document.createElement("div");
  newGoal.classList.add("goal");

  let titleArea = document.createElement("h3");
  titleArea.innerText = data.name;

  let descriptionArea = document.createElement("p");
  descriptionArea.innerText = data.description;

  let typeArea = document.createElement("p");
  typeArea.innerText = "Goal Type: " + data.type;

  let difficultyArea = document.createElement("p");
  difficultyArea.innerText = "Goal Difficulty: " + data.difficulty;

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete", "btn-close");

  if (data.urgent){
    let urgent = document.createElement("span");
    urgent.classList.add("urgent", "badge", "bg-warning");
    urgent.innerText = "urgent!";
    titleArea.append(urgent);
  }

  newGoal.append(
    titleArea,
    descriptionArea,
    typeArea,
    difficultyArea,
    deleteButton,
  );
  goalArea.append(newGoal);
}

goalForm.addEventListener("submit", handleFormInputs);
document.addEventListener("click", deleteGoal);
