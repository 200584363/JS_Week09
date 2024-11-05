// Code by Utsav Patel - Question3
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
  
  // Admin class that inherits from SiteUser
  class WebsiteAdmin extends SiteUser {
    // Method to edit website data
    modifyData() {
      return `${this.fullName} is authorized to edit website content.`;
    }
  }
  
  // Create an admin instance
  const admin1 = new WebsiteAdmin('UtsavPatel', 'utsav@gmail.com');
  
  // Functions to interact with HTML
  function displayAdminInfo() {
    document.getElementById('adminData').innerText = admin1.showData();
  }
  
  function modifyData() {
    document.getElementById('adminData').innerText = admin1.modifyData();
  }
  