const positions = [
  {
    name: "Entry-Level Python Engineer",
    neededSkills: ["Python course work", "Software Engineering course work"],
    desiredSkills: ["Agile course"],
    qualifications: ["Bachelor in CS"],
  },
  {
    name: "Python Engineer",
    neededSkills: [
      "3 years Python development",
      "1 year data development",
      "Experience in Agile projects",
    ],
    desiredSkills: ["Used Git"],
    qualifications: ["Bachelor in CS"],
  },
  {
    name: "Project Manager",
    neededSkills: [
      "3 years managing software projects",
      "2 years in Agile projects",
    ],
    desiredSkills: [],
    qualifications: ["PMI Lean Project Management Certification"],
  },
  {
    name: "Senior Knowledge Engineer",
    neededSkills: [
      "3 years using Python to develop Expert Systems",
      "2 years data architecture and development",
    ],
    desiredSkills: [],
    qualifications: ["Masters in CS"],
  },
];

const questions = [
  { id: "python-course", text: "Python course work", type: "yesno" },
  {
    id: "software-engineering",
    text: "Software Engineering course work",
    type: "yesno",
  },
  { id: "agile-course", text: "Agile course", type: "yesno" },
  { id: "bachelor-cs", text: "Bachelor in CS", type: "yesno" },
  {
    id: "python-development",
    text: "3 years Python development",
    type: "yesno",
  },
  { id: "data-development", text: "1 year data development", type: "yesno" },
  { id: "agile-projects", text: "Experience in Agile projects", type: "yesno" },
  { id: "used-git", text: "Used Git", type: "yesno" },
  {
    id: "managing-projects",
    text: "3 years managing software projects",
    type: "yesno",
  },
  { id: "agile-experience", text: "2 years in Agile projects", type: "yesno" },
  {
    id: "pmi-certification",
    text: "PMI Lean Project Management Certification",
    type: "yesno",
  },
  {
    id: "expert-systems",
    text: "3 years using Python to develop Expert Systems",
    type: "yesno",
  },
  {
    id: "data-architecture",
    text: "2 years data architecture and development",
    type: "yesno",
  },
  { id: "masters-cs", text: "Masters in CS", type: "yesno" },
];

let currentQuestionIndex = 0;
const applicantInfo = {};

function displayQuestion(index) {
  const container = document.getElementById("questions-container");
  container.innerHTML = "";

  const question = questions[index];
  const formGroup = document.createElement("div");
  formGroup.className = "form-group";

  const label = document.createElement("label");
  label.innerText = question.text;

  const yesNoGroup = document.createElement("div");
  yesNoGroup.className = "yes-no-group";

  const yesLabel = document.createElement("label");
  yesLabel.innerText = "Yes";
  const yesInput = document.createElement("input");
  yesInput.type = "radio";
  yesInput.name = question.id;
  yesInput.value = "yes";
  yesInput.id = question.id + "-yes";
  yesInput.onclick = () => {
    applicantInfo[question.text] = true;
    yesLabel.classList.add("selected");
    noLabel.classList.remove("selected");
    setTimeout(nextQuestion, 100); // Short delay to show color change
  };

  const noLabel = document.createElement("label");
  noLabel.innerText = "No";
  const noInput = document.createElement("input");
  noInput.type = "radio";
  noInput.name = question.id;
  noInput.value = "no";
  noInput.id = question.id + "-no";
  noInput.onclick = () => {
    applicantInfo[question.text] = fa