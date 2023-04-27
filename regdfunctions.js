
    const form = document.getElementById('myForm');
      form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!form.checkValidity()) {
          alert('Please fill in all required fields with valid values.');
          return;
        }
        const name = form.elements['name'].value;
        const email = form.elements['email'].value;
        const age = form.elements['age'].value;
        const newWindow = window.open('', '_blank');
        newWindow.document.write(`<h2>Name: ${name}</h2><p>Email: ${email}</p><p>Age: ${age}</p>`);
        form.reset();
      });



    function clearErrors(){

        errors=document.getElementsByClassName('fromerror');
        for(let item of errors)
        {
            item.innerHTML="";
        }
    }
function seterror(id,error){
    //sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('fromerror')[0].innerHTML=error;
}
function validateForm(){

    // Get form inputs
  const name = document.forms["myform"]["fname"].value.trim();
  const userId = document.forms["myform"]["userId"].value.trim();
  const age = document.forms["myform"]["fage"].value.trim();
  const technicalSkills = document.querySelectorAll('input[name="technicalSkills"]:checked');



    var returnval=true;
    clearErrors();

    if(name.length<5){
        seterror("name","Length of name is too short");
        returnval=false;
    
    }

    if (name === "" || name.length > 25 || !/^[a-zA-Z]+$/.test(name)) {
    document.getElementById("nameError").innerHTML = "Please enter a valid name (max 25 characters)";
    returnval = false;
  } else {
    document.getElementById("nameError").innerHTML = "";
  }
//user id
  if (userId === "") {
    document.getElementById("userIdError").innerHTML = "Please enter a user ID";
    returnval = false;
  } else {
    document.getElementById("userIdError").innerHTML = "";
  }
    //email
    var email=document.forms['myform']["femail"].value;
    if(email.length>20){
    seterror("email","enter valid email");
    returnval=false;
    }
    //phone number
    var phone=document.forms['myform']["fphone"].value;
    if(phone.length!=10){
    seterror("phone","enter valid phone number");
    returnval=false;
    }
    //password
    var pass=document.forms['myform']["fpass"].value;
    if(pass.length<6){
    
    seterror("pass","Password must be atleast 6 charecters");
    returnval=false;
    }
    //confirm password
    var cpass=document.forms['myform']["fcpass"].value;
    if(cpass!=pass){
    
    seterror("cpass","Password and confirm password should be matched");
    returnval=false;
    }
    // Check if age field is empty or not between 18 to 23
  if (age === "" || age < 18 || age > 23 || !/^\d+$/.test(age)) {
    document.getElementById("ageError").innerHTML = "Please enter a valid age (between 18 to 23)";
    returnval = false;
  } else {
    document.getElementById("ageError").innerHTML = "";
  }
  // Check if at least 2 technical skills are selected
  if (technicalSkills.length < 2) {
    document.getElementById("technicalSkillsError").innerHTML = "Please select at least 2 technical skills";
    returnval = false;
  } else {
    document.getElementById("technicalSkillsError").innerHTML = "";
  }
    

return returnval;

}

function handleSubmit(event) {
      event.preventDefault();
      const name = document.myform.fname.value;
      const userId = document.myform.userId.value;
      const age = document.myform.fage.value;
      const gender = document.querySelector('input[name="user_gender"]:checked').value;
      const branch = document.getElementById('branch').value;
      const skills = document.querySelectorAll('input[name="technicalSkills"]:checked');
      const skillsArray = [...skills].map(skill => skill.value);
      const userData = { name, userId, age, gender, branch, skills: skillsArray };
      const userDataString = JSON.stringify(userData);
      window.open('about:blank', '_blank').document.write(`<pre>${userDataString}</pre>`);
    }

