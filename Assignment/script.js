document.getElementById("personalForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally
  
    // Reset previous error messages
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("cityError").textContent = "";
    document.getElementById("confirmationMessage").innerHTML = "";
  
    // Get form values
    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value, 10);
    const address = document.getElementById("address").value;
    const pincode = document.getElementById("pincode").value;
    const city = document.getElementById("city").value;
  
    // Validation: Check if Name is blank
    if (!name.trim()) {
      document.getElementById("nameError").textContent = "Name cannot be blank.";
      return; // Stop form submission if validation fails
    }
  
    // Validation: Check if Age is greater than 0
    if (isNaN(age) || age <= 0) {
      document.getElementById("ageError").textContent = "Age must be a positive number greater than 0.";
      return; // Stop form submission if validation fails
    }
  
    // Validation: Check if City is selected
    if (!city) {
      document.getElementById("cityError").textContent = "Please select a city.";
      return; // Stop form submission if validation fails
    }
  
    // Display confirmation message after selecting a city
    document.getElementById("confirmationMessage").innerHTML = `You have selected ${city}.`;
  
    // Hide the form container and show the result container
    document.querySelector(".form-container").style.display = "none";
    document.getElementById("resultContainer").style.display = "block";
  
    // Populate the result table
    const tableBody = document.querySelector("#resultTable tbody");
    tableBody.innerHTML = `
      <tr>
        <td>${name}</td>
        <td>${age}</td>
        <td>${address}</td>
        <td>${pincode}</td>
        <td>${city}</td>
      </tr>
    `;
  });
  
  // Reset button functionality
  document.getElementById("resetButton").addEventListener("click", function() {
    // Clear the form fields and error messages
    document.getElementById("personalForm").reset();
    document.getElementById("nameError").textContent = "";
    document.getElementById("ageError").textContent = "";
    document.getElementById("cityError").textContent = "";
    document.getElementById("confirmationMessage").innerHTML = "";
  });
  
  // Back button functionality to return to the form
  document.getElementById("backButton").addEventListener("click", function() {
    // Hide the result container and show the form container
    document.querySelector(".form-container").style.display = "block";
    document.getElementById("resultContainer").style.display = "none";
  });
  