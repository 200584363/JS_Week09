// Code by Utsav Patel - Question2
// User class definition
class SiteUser {
  constructor(fullName, emailAddress) {
    this.fullName = fullName;
    this.emailAddress = emailAddress;
  }

  // Method to view user data
  showData() {
    return `User: ${this.fullName}, Email: ${this.emailAddress}`;
  }
}

// Create a user instance
const siteUser1 = new SiteUser('Jane Doe', 'jane.doe@college.edu');

// Function to display user data in HTML
function viewUserInfo() {
  document.getElementById('userData').innerText = siteUser1.showData();
}
