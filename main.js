
// Declaring HTML elements
const file = document.getElementById('file')
const img = document.querySelector('#image')
const personName = document.getElementById('name')
const personTitle = document.getElementById('title')
const personStartDate = document.getElementById('jobStartDate')
const personEndDate = document.getElementById('jobEndDate')
const colStartDate = document.getElementById('startDate')
const colEndDate = document.getElementById('endDate')
const jobMessage = document.getElementById('jobMessage')
const ColMessage = document.getElementById('ColMessage')
const desc = document.getElementById('desc')
const skill = document.getElementById('skill')
const topSection = document.getElementById('cvTop')
const experienceSection = document.querySelector('.cvExperienceDiv')
const cvProfileSection = document.querySelector('.cvProfileSection')
const cvContainer = document.querySelector('.cvContainer')
const mainButton = document.getElementById('previewBtn')
const newExperienceDiv = document.getElementById('newExp') 
const experienceBtn = document.getElementById('addCompBtn')

let cvCont = document.getElementById('cvContainer')
let downloadBtn = document.getElementById('downloadBtn')
downloadBtn.onclick = (e) => html2pdf(cvCont)



desc.addEventListener('click', ()=>{
let start = personStartDate.value
let end = personEndDate.value
let s = new Date(start)
let e = new Date(end)
let currentDate = new Date()

if(e <= s || s >= currentDate || e > currentDate){
  jobMessage.style.display = 'block' 
  desc.style.backgroundColor = '#ff000059'
  personEndDate.style.border = '2px solid red'
  desc.style.border = '2px solid red' 
}else{
  jobMessage.style.display = 'none' 
  desc.style.backgroundColor = '#d6e6e7a4'
  personEndDate.style.border = '2px solid transparent'
  desc.style.border = '2px solid transparent'
}
})

skill.addEventListener('click', ()=>{
let cStart = colStartDate.value
let cEnd = colEndDate.value
let cS = new Date(cStart)
let cE = new Date(cEnd)
let currentDate = new Date()

if(cE <= cS || cS >= currentDate || cE > currentDate){
  ColMessage.style.display = 'block' 
  skill.style.backgroundColor = '#ff000059'
  colEndDate.style.border = '2px solid red'
  skill.style.border = '2px solid red' 
}else{
  ColMessage.style.display = 'none' 
  skill.style.backgroundColor = '#d6e6e7a4'
  colEndDate.style.border = '2px solid transparent'
  skill.style.border = '2px solid transparent'
}
})


// Function to change image
file.addEventListener('change', function(){
  const choosedFile = this.files[0]
  if(choosedFile){
      const reader = new FileReader();
      
      reader.addEventListener('load', function(){
         img.setAttribute('src', reader.result)  
      })
      reader.readAsDataURL(choosedFile)
  }
})


// EVENTLISTENER -----
//change the event listener to operate a function that will make sure we
// pass all the conditions to submit the form
mainButton.addEventListener('click', canWeSubmitForm);

const allInputs = document.querySelectorAll('.input');

//a list to hold the inputs that need values
let needInputArray = [];
//variable to hold the index number of the input to remove from our list
let index;

// our function to see if we can submit
function canWeSubmitForm(e) {
  e.preventDefault();
  // we can pass this value to the submitForm function later
  const btn = e.target;

  // Every time we try to submit the form, set all the button borders to none
  // This way if they were red before, but are now filled in with value, they
  // will not be red anymore
  allInputs.forEach(input => {
    input.style.border = 'none';
    
    // we push any input field that does not have value to an array
    if (input.value === '') {
      //push each input to the list that needs values
      needInputArray.push(input);
    }

    // we also add an event listener to each input so that as we fill
    // out the values we can do the following...
    input.addEventListener('input', () => {
      // remove the red border
      input.style.border = 'none';
      // get the index position of the input in our input array list that need values
      index = needInputArray.indexOf(input);
      if (index > -1) {
        // use splice method to go to the index and remove that input from array
        needInputArray.splice(index, 1);
        //so you can see the list being updated in the browser console dev tools
        console.log(needInputArray);
      }
    })
  });

  
  
  

  // every time the form submits it checks to see if the list of inputs that
  // need values is empty. If it is not empty...
  if (needInputArray.length !== 0) {
    // then we give each input that IS in the array a red border, 
    // because it has no value in it. Then it will stop at the else because the 
    // first condition was met. Then we start the whole function over on the next
    // click of the button.
    needInputArray.forEach(input => {
      //give red border
      input.style.border = '2px solid red'
    });

    // However the else works if the need input array list IS empty...
  } 

  else {
    // if it is then we call our submit form function and pass the button as a parameter(or argument)
    // instead of the click event. This way you can still create your form based on the btn 
    submitForm(btn);
    
  }
};

function submitForm(btn){
  
  cvContainer.style.display = 'block'
  downloadBtn.style.display = 'block'
  mainButton.style.display = 'none'
    // personalDetails Declaration
  // The btn is now passed as a parameter from the function call on line 95 instead of the original click 
  // event, but it still works exactly the same.
    let pImage = btn.parentElement.parentElement.children[0].children[0].children[0].src

    let pName = btn.parentElement.parentElement.children[0].children[1].children[1].children[1].value
    

    let pTitle = btn.parentElement.parentElement.children[0].children[1].children[2].children[1].value
   
    let pTelNumber = btn.parentElement.parentElement.children[0].children[2].children[1].children[1].value

    let pEmail = btn.parentElement.parentElement.children[0].children[2].children[2].children[1].value

    let pWebsite = btn.parentElement.parentElement.children[0].children[2].children[3].children[1].value
    

    // Experience Section Declaration
    let expSection = btn.parentElement.parentElement.children[1]
    let companyName = expSection.children[1].children[0].children[0].children[1].value
   
    let jobTitle = expSection.children[1].children[0].children[1].children[1].value

    let startDate = expSection.children[1].children[1].children[0].children[1].value

    let endDate = expSection.children[1].children[1].children[1].children[2].value

    let jobDescription = expSection.children[1].children[2].children[1].value
  
     
    // Profile section declaration
    let profileSummary = btn.parentElement.parentElement.children[2].children[1].children[1].value
 
    let certificate = btn.parentElement.parentElement.children[2].children[2].children[0].children[0].children[1].value
   
    let collegeName = btn.parentElement.parentElement.children[2].children[2].children[0].children[1].children[1].value
    
    let colStartDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[0].children[1].value
  
    let colEndDate = btn.parentElement.parentElement.children[2].children[2].children[1].children[1].children[2].value
   
    let pSkill = btn.parentElement.parentElement.children[2].children[3].children[0].children[0].children[1].children[0].value
  
    let pHobby = btn.parentElement.parentElement.children[2].children[3].children[0].children[1].children[1].children[0].value
   
  
// TOP SECTION DIVISIONS --------------------------
//Creating new div element for image.   
let imageDiv = document.createElement('div')
imageDiv.classList.add('cvTopDiv')
imageDiv.innerHTML = `<img src="${pImage}">`
//Divison that contains both the name and title. 
let pNameTitle = document.createElement('div')
pNameTitle.classList.add('cvNameDiv')
// Craeting name division element
let pNameEntered = document.createElement('div')
pNameEntered.classList.add('cvName')
pNameEntered.innerHTML = `<h2>${pName}</h2>`
pNameTitle.appendChild(pNameEntered)

// Creating title divsion element
let pTitleEntered = document.createElement('div')
pTitleEntered.classList.add('cvProff')
pTitleEntered.innerHTML = `<p>${pTitle}</p>`
pNameTitle.appendChild(pTitleEntered)

//Creating a new div element to hold phone number, email and website
let contactDiv = document.createElement('div')
contactDiv.classList.add('cvContactDiv') 

// Creating anew div element for tel Number
let telNumber = document.createElement('div')
telNumber.innerHTML =  `<i class='bx bx-phone icon' ></i>
                        <h4>${pTelNumber}</h4>`
contactDiv.appendChild(telNumber)   

// Creating a new div element for the Email entered.
let emialEntered = document.createElement('div')
emialEntered.innerHTML = `  <i class='bx bx-mail-send icon'></i>
                            <h4>${pEmail}</h4>`
contactDiv.appendChild(emialEntered) 

// Creating a new div element for the Website link entered.
let websiteEntered = document.createElement('div')
websiteEntered.innerHTML = `  <i class='bx bx-globe icon'></i>
                              <h4>${pWebsite}</h4>`
contactDiv.appendChild(websiteEntered) 

// Appending  all the divisions to the main section.
topSection.appendChild(imageDiv)
topSection.appendChild(pNameTitle)
topSection.appendChild(contactDiv)

// EXPERIENCE SECTION DIVISIONS
//  new div element for company details
let companyDetail = document.createElement('div')
companyDetail.classList.add('companyDetails')
experienceSection.style.marginTop = '2rem'


// Creating a new div element to enter company name
let compName = document.createElement('div')
compName.innerHTML = `<h3 class="titles">PREVIOUS JOB</h3><p class="companyName">${companyName}</p>`
companyDetail.appendChild(compName)

// Creating a new div element to enter job title
let jobT = document.createElement('div')
jobT.innerHTML = `<p class="jobTitle">${jobTitle}</p>`
companyDetail.appendChild(jobT)

// Creating a new div element to enter dates
let dates = document.createElement('div')
dates.classList.add('dates')

// creating a new div to enter startdate
let strtDate = document.createElement('div')
strtDate.classList.add('startDate')
strtDate.innerHTML = `${startDate}`
dates.appendChild(strtDate) 

// creating a new div to enter endDate
let end_Date = document.createElement('div')
end_Date.classList.add('endDate')
end_Date.innerHTML = `${endDate}`
dates.appendChild(end_Date) 

// creating a new div to enter description
let jobDesc = document.createElement('div')
jobDesc.classList.add('jobDesc')
jobDesc.innerHTML = `${jobDescription}`

// // append company details to the main section
experienceSection.appendChild(companyDetail)
experienceSection.appendChild(dates)
experienceSection.appendChild(jobDesc)

//PROFILE DETAILS SECTION 
// let us  create a new div to enter profile summary
let pSummary = document.createElement('div')
pSummary.classList.add('pSummary')
pSummary.innerHTML = ` <h3 class="titles">Profile</h3>
<p>
${profileSummary}
</p>` 

//  a new div to enter college name and certficate 
let collegeCert = document.createElement('div')
collegeCert.classList.add('colCert')
collegeCert.innerHTML = `<h3 class="titles">EDUCATION</h3><h4 class="cerficate">${certificate}</h4>
<p class="college">${collegeName}</p>`

//  a new div to enter college start and end dates 
let collegeDates = document.createElement('div')
collegeDates.classList.add('collegeDatesDiv')
collegeDates.innerHTML = 
` <div class="collegeStartDate">${colStartDate}</div>
<div class="collegeEndDate">${colEndDate}</div>`

//  a new div to enter skills and Hobbies
let skillHobby = document.createElement('div')
skillHobby.classList.add('skillHobbyDiv')
skillHobby.innerHTML = 
`<div class="personSkills">
<h3 class="titles">EXPERTISE</h3>
${pSkill}</div>
<div class="personHobby">
<h3 class="titles">HOBBIES</h3>
${pHobby}
</div>`

cvProfileSection.appendChild(pSummary)
cvProfileSection.appendChild(collegeCert)
cvProfileSection.appendChild(collegeDates)
cvProfileSection.appendChild(skillHobby)
};
 


