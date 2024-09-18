var _a;
//listing elements
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    //type assertion
    var profilePictureinput = document.getElementById('profilePicture');
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var mobElement = document.getElementById('mob');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (profilePictureinput && nameElement && emailElement && mobElement && experienceElement && educationElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var mob = mobElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var profilePicturefile = (_a = profilePictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePicturefile ? URL.createObjectURL(profilePicturefile) : "";
        var resumeOutput = "\n    <h2>Resume</h2>\n     ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, " alt=\"Profile Picture\" class=\"profilePicture\">") : "", "\n    \n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Mob No:</strong> ").concat(mob, " </p>\n    <h3>Education</h3>\n    <p><strong>Education:</strong> ").concat(education, " </p>\n    <h3>experience</h3>\n    <p><strong>Experience:</strong> ").concat(experience, " </p>\n    <h3>Skills</h3>\n    <p><strong>Skills:</strong> ").concat(skills, " </p>\n     ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The resume output element are missing');
        }
    }
    else {
        console.error('one or more output element are missing');
    }
});
