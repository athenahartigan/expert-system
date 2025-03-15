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
    if (currentQuestionIndex === questions.length - 1) {
      displayFinishButton();
    } else {
      setTimeout(nextQuestion, 100);
    }
  };

  const noLabel = document.createElement("label");
  noLabel.innerText = "No";
  const noInput = document.createElement("input");
  noInput.type = "radio";
  noInput.name = question.id;
  noInput.value = "no";
  noInput.id = question.id + "-no";
  noInput.onclick = () => {
    applicantInfo[question.text] = false;
    noLabel.classList.add("selected");
    yesLabel.classList.remove("selected");
    if (currentQuestionIndex === questions.length - 1) {
      displayFinishButton();
    } else {
      setTimeout(nextQuestion, 100);
    }
  };

  yesLabel.setAttribute("for", yesInput.id);
  noLabel.setAttribute("for", noInput.id);

  yesNoGroup.appendChild(yesInput);
  yesNoGroup.appendChild(yesLabel);
  yesNoGroup.appendChild(noInput);
  yesNoGroup.appendChild(noLabel);

  formGroup.appendChild(label);
  formGroup.appendChild(yesNoGroup);
  container.appendChild(formGroup);

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  if (currentQuestionIndex > 0) {
    const backButton = document.createElement("button");
    backButton.id = "back-button";
    backButton.innerText = "Back";
    backButton.classList.add("back-button");
    backButton.onclick = prevQuestion;
    buttonContainer.appendChild(backButton);
  }

  if (
    Object.keys(applicantInfo).length > currentQuestionIndex &&
    currentQuestionIndex < questions.length - 1
  ) {
    const nextButton = document.createElement("button");
    nextButton.id = "next-button";
    nextButton.innerText = "Next";
    nextButton.classList.add("next-button");
    nextButton.onclick = nextQuestion;
    buttonContainer.appendChild(nextButton);
  }

  if (
    Object.keys(applicantInfo).length > currentQuestionIndex &&
    Object.keys(applicantInfo).length === questions.length
  ) {
    const finishButton = document.createElement("button");
    finishButton.id = "finish-button";
    finishButton.innerText = "Finish";
    finishButton.classList.add("finish-button");
    finishButton.onclick = evaluateApplicant;

    if (currentQuestionIndex === 0) {
      finishButton.classList.add("finish-button-left");
      buttonContainer.appendChild(finishButton);
    } else if (currentQuestionIndex === questions.length - 1) {
      finishButton.classList.add("finish-button-right");
      buttonContainer.appendChild(finishButton);
    } else {
      buttonContainer.appendChild(finishButton);
    }
  }

  container.appendChild(buttonContainer);

  if (applicantInfo[question.text] === true) {
    yesInput.checked = true;
    yesLabel.classList.add("selected");
  } else if (applicantInfo[question.text] === false) {
    noInput.checked = true;
    noLabel.classList.add("selected");
  }

  if (
    currentQuestionIndex === questions.length - 1 &&
    applicantInfo[questions[questions.length - 1].text] !== undefined
  ) {
    displayFinishButton();
  }
}

function displayFinishButton() {
  const container = document.getElementById("questions-container");
  let buttonContainer = container.querySelector(".button-container");

  if (!buttonContainer.querySelector("#finish-button")) {
    const finishButton = document.createElement("button");
    finishButton.id = "finish-button";
    finishButton.innerText = "Finish";
    finishButton.onclick = evaluateApplicant;
    finishButton.classList.add("finish-button");

    if (currentQuestionIndex === 0) {
      finishButton.classList.add("finish-button-left");
    } else if (currentQuestionIndex === questions.length - 1) {
      finishButton.classList.add("finish-button-right");
    }
    buttonContainer.appendChild(finishButton);
  }
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  } else {
    document.getElementById("result").innerHTML = "";
    document.getElementById("questions-container").style.display = "block";
    document.getElementById("question").style.display = "block";
    displayQuestion(currentQuestionIndex);
  }
}

function evaluateApplicant() {
  questions.forEach((question) => {
    const selectedOption = document.querySelector(
      `input[name="${question.id}"]:checked`
    );
    if (selectedOption) {
      applicantInfo[question.text] = selectedOption.value === "yes";
    }
  });

  document.getElementById("questions-container").style.display = "none";
  document.getElementById("question").style.display = "none";

  const qualifiedPositions = [];
  const disqualifiedPositions = [];

  positions.forEach((position) => {
    const neededSkills = position.neededSkills.map((skill) => ({
      skill: skill,
      met: applicantInfo[skill] === true,
    }));
    const qualifications = position.qualifications.map((qualification) => ({
      qualification: qualification,
      met: applicantInfo[qualification] === true,
    }));
    const desiredSkills = position.desiredSkills.map((skill) => ({
      skill: skill,
      met: applicantInfo[skill] === true,
    }));

    const meetsNeededSkills = neededSkills.every((item) => item.met);
    const meetsQualifications = qualifications.every((item) => item.met);

    if (meetsNeededSkills && meetsQualifications) {
      qualifiedPositions.push({
        name: position.name,
        neededSkills: neededSkills,
        qualifications: qualifications,
        desiredSkills: desiredSkills,
      });
    } else {
      disqualifiedPositions.push({
        name: position.name,
        neededSkills: neededSkills,
        qualifications: qualifications,
        desiredSkills: desiredSkills,
      });
    }
  });

  displayResult(qualifiedPositions, disqualifiedPositions);
}

function displayResult(qualifiedPositions, disqualifiedPositions) {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (qualifiedPositions.length > 0) {
    resultDiv.innerHTML += `
      <h1>Congratulations!</h1>
      <h4>You are qualified for the following positions:</h4>
      <ul>
        ${qualifiedPositions
          .map(
            (position) => `
          <li>${position.name}
            <ul>
              <li>Needed Skills:</li>
              ${position.neededSkills
                .map(
                  (item) => `
                <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                    item.met ? "✓" : "✗"
                  }</span> ${item.skill}</li>
              `
                )
                .join("")}
              <li>Qualifications:</li>
              ${position.qualifications
                .map(
                  (item) => `
                <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                    item.met ? "✓" : "✗"
                  }</span> ${item.qualification}</li>
              `
                )
                .join("")}
              ${
                position.desiredSkills.length > 0
                  ? `
                <li>Desired Skills:</li>
                ${position.desiredSkills
                  .map(
                    (item) => `
                  <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                      item.met ? "✓" : "✗"
                    }</span> ${item.skill}</li>
                `
                  )
                  .join("")}
              `
                  : ""
              }
            </ul>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  if (disqualifiedPositions.length > 0) {
    resultDiv.innerHTML += `
      <h4>Unfortunately You Didn't Qualify For:</h4>
      <ul>
        ${disqualifiedPositions
          .map(
            (position) => `
          <li>${position.name}
            <ul>
              <li>Needed Skills:</li>
              ${position.neededSkills
                .map(
                  (item) => `
                <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                    item.met ? "✓" : "✗"
                  }</span> ${item.skill}</li>
              `
                )
                .join("")}
              <li>Qualifications:</li>
              ${position.qualifications
                .map(
                  (item) => `
                <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                    item.met ? "✓" : "✗"
                  }</span> ${item.qualification}</li>
              `
                )
                .join("")}
              ${
                position.desiredSkills.length > 0
                  ? `
                <li>Desired Skills:</li>
                ${position.desiredSkills
                  .map(
                    (item) => `
                  <li><span class="${item.met ? "checkmark" : "crossmark"}">${
                      item.met ? "✓" : "✗"
                    }</span> ${item.skill}</li>
                `
                  )
                  .join("")}
              `
                  : ""
              }
            </ul>
          </li>
        `
          )
          .join("")}
      </ul>
    `;
  }

  if (qualifiedPositions.length === 0 && disqualifiedPositions.length === 0) {
    resultDiv.innerHTML = `
      <p>Unfortunately, you do not meet the required qualifications for any available positions.</p>
    `;
  }

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.onclick = () => {
    document.getElementById("questions-container").style.display = "block";
    document.getElementById("question").style.display = "block";
    resultDiv.innerHTML = "";
    displayQuestion(currentQuestionIndex);
  };
  buttonContainer.appendChild(backButton);

  const restartButton = document.createElement("button");
  restartButton.innerText = "Restart";
  restartButton.onclick = restart;
  buttonContainer.appendChild(restartButton);

  resultDiv.appendChild(buttonContainer);
}

function restart() {
  currentQuestionIndex = 0;
  for (let key in applicantInfo) {
    delete applicantInfo[key];
  }
  document.getElementById("questions-container").style.display = "block";
  document.getElementById("question").style.display = "block";
  document.getElementById("result").innerHTML = "";
  displayQuestion(currentQuestionIndex);
}

displayQuestion(currentQuestionIndex);
