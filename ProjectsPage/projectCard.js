const projectOverlay = document.querySelector(".project-overlay");
let projectsInfo = "";
window.addEventListener("load", () => {
  setTimeout(() => {
    GetData();
  }, 300);
});

document.querySelectorAll(".project-wrapper").forEach((project) => {
  project.addEventListener("click", (event) => {
    fullScreen(project);
  });
});

function fullScreen(project) {
  const projectId = project.id;
  const projectInfo = projectsInfo.filter((proj) => proj.id == projectId)[0];
  console.log(projectInfo);

  projectOverlay.style.display = "flex";
  projectOverlay.style.animation = "overlay-animation 0.5s forwards";

  projectOverlay
    .querySelector(".project-overlay-cover-image")
    .style.setProperty("--image", `url(${projectInfo.image})`);
  projectOverlay.querySelector("h1").innerHTML = projectInfo.name;
  projectInfo.tags.forEach((tag) => {
    const newTag = document.createElement("p");
    newTag.classList.add("tag");
    newTag.innerHTML = tag;
    projectOverlay.querySelector(".project-tags").appendChild(newTag);
  });
  projectOverlay.querySelector(".project-overlay-description").innerHTML =
    projectInfo.description;
  console.log(projectInfo.link == "");
  if (projectInfo.link == "") {
    projectOverlay.querySelector("a").parentElement.style.display = "none";
    return;
  }
  projectOverlay.querySelector("a").href = projectInfo.link;
}

function hideProjectOverlay() {
  projectOverlay.querySelectorAll(".tag").forEach((element) => {
    element.remove();
  });
  projectOverlay.querySelector("a").parentElement.style.display = "inherit";
  projectOverlay.style.animation = "overlay-animation-reverse 0.5s forwards ";
  setTimeout(() => {
    projectOverlay.style.display = "none";
  }, 500);
}

async function GetData() {
  const response = await fetch("/projectsData/projects.json");
  const data = await response.json();

  projectsInfo = await data.projects;
}
