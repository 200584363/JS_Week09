# JS Week-09
# OOP Game Challenge

This repository contains solutions to an Object-Oriented Programming (OOP) challenge, demonstrating the use of classes, prototypes, inheritance, and methods in JavaScript. The challenge is divided into three main questions, with each part building on core OOP concepts. 

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Challenge Details](#challenge-details)
  - [Q1: Player Class](#q1-player-class)
  - [Q2: User Class](#q2-user-class)
  - [Q3: Admin Class](#q3-admin-class)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

---

## Project Overview

The OOP Game Challenge focuses on simulating a basic game environment, user information management, and role-based permissions using JavaScript. The project demonstrates:
- Class-based OOP principles.
- Prototype-based methods for reusability.
- Inheritance to extend class functionality.

Each section includes HTML and JavaScript files to create a user interface for interacting with the classes and methods.

## Technologies Used
- HTML5
- JavaScript (ES6+)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/200584363/JS_Week09.git
   cd JS_Week09

2. Open each HTML file in a browser to run the application:
   Q1: Open q1_player.html
   Q2: Open q2_user.html
   Q3: Open q3_admin.html

# Challenge Details
Q1: Player Class
- Objective: Implement a Gamer class that simulates a game character with experience points (XP) and levels.
- Constructor: Initializes with userName, level, and experience.

Methods:
- addExperience(points): Adds XP to the character. If XP is 10 or more, it increases the level by 1 and reduces XP by 10.
- getStats(): Displays the character’s current stats, including name, level, and XP.

Files:
- q1_player.html – HTML interface for testing the Gamer class.
- player.js – JavaScript file containing the Gamer class logic.

Q2: User Class
- Objective: Create a SiteUser class that represents a user of a college website.
- Constructor: Takes fullName and emailAddress.

Methods:
- showData(): Displays the user's information.

Files:
- q2_user.html – HTML interface for testing the SiteUser class.
- user.js – JavaScript file containing the SiteUser class logic.

Q3: Admin Class
- Objective: Create an Admin class that extends SiteUser and includes additional admin-specific functionality.
- Constructor: Inherits from SiteUser.

Methods:
- modifyData(): Allows the admin to edit website data.

Files:
- q3_admin.html – HTML interface for testing the Admin class.
- admin.js – JavaScript file containing the Admin class logic.

# File Structure
```bash
200584363/JS_Week09/
├── q1_player.html        # HTML file for Q1 (Player Class)
├── player.js             # JavaScript for Q1 (Player Class)
├── q2_user.html          # HTML file for Q2 (User Class)
├── user.js               # JavaScript for Q2 (User Class)
├── q3_admin.html         # HTML file for Q3 (Admin Class)
└── admin.js              # JavaScript for Q3 (Admin Class)
```
# Contributing
Contributions are welcome! If you'd like to improve the project or fix any issues:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a pull request.
