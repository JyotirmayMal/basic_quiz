
		const uploadForm = document.getElementById("upload-form");
		const uploadList = document.getElementById("upload-list");

		// add upload to local storage
        // Handle form submission
  uploadForm.addEventListener("submit", function(event) {
    event.preventDefault(); // prevent default form behavior

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;
    const file = document.getElementById("file").files[0];

    // Create a new file upload object
    const newUpload = {
      name: name,
      email: email,
      description: description,
      file: file.name,
      size: file.size,
      type: file.type,
      timestamp: new Date().getTime()
    };

    // Add new upload object to local storage
    let uploads = JSON.parse(localStorage.getItem("uploads")) || [];
    uploads.push(newUpload);
    localStorage.setItem("uploads", JSON.stringify(uploads));

    // Add new upload to upload list
    const uploadRow = document.createElement("tr");
    uploadRow.innerHTML = `
      <td>${newUpload.name}</td>
      <td>${newUpload.email}</td>
      <td>${newUpload.description}</td>
      <td>${newUpload.file} (${newUpload.size} bytes)</td>
    `;
    uploadList.insertBefore(uploadRow, uploadList.firstChild);

    // Reset form
    uploadForm.reset();
  });
