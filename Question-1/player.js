// Code by Utsav Patel - Question1
// Player constructor function
function Gamer(userName) {
  this.userName = userName;
  this.level = 1;
  this.experience = 0;
}

// Method to gain experience points
Gamer.prototype.addExperience = function(expPoints) {
  this.experience += expPoints;

  // Check if experience exceeds or reaches 10
  while (this.experience >= 10) {
    this.experience -= 10;
    this.level += 1;
  }
};

// Method to display player’s current stats
Gamer.prototype.getStats = function() {
  return `Username: ${this.userName}, Level: ${this.level}, Experience Points: ${this.experience}`;
};

// Instantiate a new player
const gamer1 = new Gamer('Max');

// Functions to interact with HTML
function addExperience() {
  gamer1.addExperience(5); // Adding 5 experience points for demonstration
}

function displayStats() {
  document.getElementById('playerStats').innerText = gamer1.getStats();
}
