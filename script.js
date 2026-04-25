let currentWater = 0;
let goal = 2000;

function setGoal() {
  const goalInput = document.getElementById('goalInput');
  const newGoal = parseInt(goalInput.value);

  if (newGoal && newGoal > 0) {
    goal = newGoal;
    document.getElementById('goalDisplay').innerText = `Goal: ${goal} ml`;
    updateUI();
    goalInput.value = ''; 
  } else {
    alert("Please enter a valid number for your goal.");
  }
}

function addWater(amount) {
  currentWater += amount;
  updateUI();
}

function updateUI() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');
  const remainingText = document.getElementById('remainingText');

  
  let percentage = (currentWater / goal) * 100;
  
 
  const displayPercentage = percentage > 100 ? 100 : percentage;
  progressBar.style.width = `${displayPercentage}%`;


  progressText.innerText = `${Math.round(percentage)}% completed`;
  
  const remaining = goal - currentWater;
  if (remaining <= 0) {
    remainingText.innerText = "Goal Reached! 💧";
    remainingText.style.color = "#4CAF50";
    remainingText.style.fontWeight = "bold";
  } else {
    remainingText.innerText = `Remaining: ${remaining} ml`;
    remainingText.style.color = "black";
    remainingText.style.fontWeight = "normal";
  }
}