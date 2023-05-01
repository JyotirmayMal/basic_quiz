// Get the user info section
const userInfoSection = document.querySelector('.user-info');

// Get the edit button and edit form
const editBtn = document.querySelector('.edit-btn');
const editForm = document.querySelector('.edit-form');

// Get the form inputs
const nameInput = document.getElementById('name');
const uidInput = document.getElementById('user-id');
const branchInput = document.getElementById('branch');
const skillInput = document.getElementById('tech-skills');

const fileInput = document.getElementById('file-input');
const profileImg = document.getElementById('profile-img');

// Add event listener to edit button
editBtn.addEventListener('click', () => {
  // Display the edit form and hide the user info section
  editForm.style.display = 'block';
  userInfoSection.style.display = 'none';

  // Set the form input values to the current user info values
  nameInput.value = userInfoSection.querySelector('p:nth-of-type(4)').textContent.split(':')[1].trim();
  uidInput.value = userInfoSection.querySelector('p:nth-of-type(5)').textContent.split(':')[1].trim();
  branchInput.value = userInfoSection.querySelector('p:nth-of-type(8)').textContent.split(':')[1].trim();
  skillInput.value = userInfoSection.querySelector('p:nth-of-type(9)').textContent.split(':')[1].trim();
});

// Add event listener to cancel button
document.querySelector('.edit-form button[type="button"]').addEventListener('click', () => {
  // Hide the edit form and display the user info section
  editForm.style.display = 'none';
  userInfoSection.style.display = 'block';
});



// Add event listener to save button
document.querySelector('.edit-form button[type="submit"]').addEventListener('click', (event) => {
  // Prevent form from submitting
  event.preventDefault();

  // Update the user info values with the form input values
  userInfoSection.querySelector('p:nth-of-type(4)').textContent = `Name: ${nameInput.value}`;
  userInfoSection.querySelector('p:nth-of-type(5)').textContent = `UserID: ${uidInput.value}`;
  userInfoSection.querySelector('p:nth-of-type(8)').textContent = `Branch: ${branchInput.value}`;
  userInfoSection.querySelector('p:nth-of-type(9)').textContent = `Technical Skills: ${skillInput.value}`;
  

  // Hide the edit form and display the updated user info section
  editForm.style.display = 'none';
  userInfoSection.style.display = 'block';
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => {
    profileImg.src = reader.result;
  };
});