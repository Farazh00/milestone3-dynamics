//listing elements
document.getElementById('resumeForm')?.addEventListener('submit', function(event){
event.preventDefault();


//type assertion
const profilePictureinput = document.getElementById('profilePicture') as HTMLInputElement
const nameElement = document.getElementById('name') as HTMLInputElement
const emailElement = document.getElementById('email') as HTMLInputElement
const mobElement = document.getElementById('mob') as HTMLInputElement
const educationElement = document.getElementById('education') as HTMLInputElement
const experienceElement = document.getElementById('experience') as HTMLInputElement
const skillsElement = document.getElementById('skills') as HTMLInputElement


if (profilePictureinput && nameElement && emailElement && mobElement && experienceElement && educationElement && skillsElement) {
    
    const name = nameElement.value;
    const email = emailElement.value;
    const mob = mobElement.value;
    const education = educationElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const profilePicturefile = profilePictureinput.files?.[0]
    const profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";

    const resumeOutput = `
    <h2>Resume</h2>
     ${profilePictureURL ? `<img src="${profilePictureURL} alt="Profile Picture" class="profilePicture">` : ""}
    
    <p><strong>Name:</strong> ${name} </p>
    <p><strong>Email:</strong> ${email} </p>
    <p><strong>Mob No:</strong> ${mob} </p>
    <h3>Education</h3>
    <p><strong>Education:</strong> ${education} </p>
    <h3>experience</h3>
    <p><strong>Experience:</strong> ${experience} </p>
    <h3>Skills</h3>
    <p><strong>Skills:</strong> ${skills} </p>
     `;


const resumeOutputElement = document.getElementById('resumeOutput')
if (resumeOutputElement){
    resumeOutputElement.innerHTML = resumeOutput
} else {
    console.error('The resume output element are missing')
}

} else {
    console.error('one or more output element are missing')
}



})