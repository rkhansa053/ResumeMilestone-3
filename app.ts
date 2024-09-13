

// Define a function to handle submission form

document.getElementById('resume_form')?.addEventListener("submit", (event) => {
    event.preventDefault()


// Type asserting

const name = (document.getElementById('name') as HTMLInputElement).value;
const email = (document.getElementById('email') as HTMLInputElement).value;
const phone_number = (document.getElementById('phone_number') as HTMLInputElement).value;
const education = (document.getElementById('education') as HTMLTextAreaElement).value;
const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
const skills = (document.getElementById('skills') as HTMLInputElement).value;

// Create output Dynamically

const resumeHTML = `
<h2>${name}</h2>
<p>Email: <a href="mailto:${email}">${email}</a></p>
<p><strong>Phone Number:</strong>${phone_number}
<h3>Education</h3>
<p>${education}</p>
<h3>Experience</h3>
<p>${experience}</p>
<h3>Skills</h3>
<p>${skills}</p>
`;

const resumeOutputElement = document.getElementById('resumeOutput')
if(resumeOutputElement) {
    resumeOutputElement.innerHTML = resumeHTML
} else {
    console.error('The resume output elements are missing');
} 
});

