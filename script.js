

const nameText = "Danesh Kadappa Hosur";
const roleText = "Computer Science Graduate";

const nameElement = document.getElementById("name");
const roleElement = document.getElementById("role");

let nameIndex = 0;
let roleIndex = 0;

function typeName() {
  if (nameIndex < nameText.length) {
    nameElement.textContent += nameText.charAt(nameIndex);
    nameIndex++;
    setTimeout(typeName, 100);
  } else {
    setTimeout(typeRole, 500); // Delay before role starts
  }
}

function typeRole() {
  if (roleIndex < roleText.length) {
    roleElement.textContent += roleText.charAt(roleIndex);
    roleIndex++;
    setTimeout(typeRole, 100);
  }
}

window.onload = typeName;





    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        document.getElementById('scroll-progress-bar').style.width = `${scrolled}%`;
    });

