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
    nextQuestion();
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
    nextQuestion();
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

  // Add navigation buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  if (currentQuestionIndex > 0) {
    const backButton = document.createElement("button");
    backButton.innerText = "Back";
    backButton.onclick = prevQuestion;
    buttonContainer.appendChild(backButton);
  }

  container.appendChild(buttonContainer);
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    displayQuestion(currentQuestionIndex);
  } else {
    evaluateApplicant();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    displayQuestion(currentQuestionIndex);
  } else {
    // If navigating back from the results page
    document.getElementById("result").innerHTML = "";
    document.getElementById("questions-container").style.display = "block";
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

  const qualifiedPositions = positions
    .map((position) => {
      const meetsNeededSkills = position.neededSkills.every(
        (skill) => applicantInfo[skill] === true
      );
      const meetsQualifications = position.qualifications.every(
        (qualification) => applicantInfo[qualification] === true
      );

      if (meetsNeededSkills && meetsQualifications) {
        const bonusSkills = position.desiredSkills.filter(
          (skill) => applicantInfo[skill] === true
        );
        return {
          name: position.name,
          bonusSkills: bonusSkills,
        };
      } else {
        return null;
      }
    })
    .filter((position) => position !== null);

  displayResult(qualifiedPositions);
}

function displayResult(qualifiedPositions) {
  // Hide the questions container
  const container = document.getElementById("questions-container");
  container.style.display = "none";

  const question = document.getElementById("question");
  question.style.display = "none";

  // Display the results
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  if (qualifiedPositions.length > 0) {
    resultDiv.innerHTML = `
        <H1>Congratulations!</H1>
        <H4>You are qualified for the following positions:</H4>
        <ul>
          ${qualifiedPositions
            .map(
              (position) => `
            <li>${position.name}
              ${
                position.bonusSkills.length > 0
                  ? `
                <ul>
                  <li>Bonus you also have:</li>
                  ${position.bonusSkills
                    .map((skill) => `<li>${skill}</li>`)
                    .join("")}
                </ul>`
                  : ""
              }
            </li>
          `
            )
            .join("")}
        </ul>
      `;
  } else {
    resultDiv.innerHTML = `
        <p>Unfortunately, you do not meet the required qualifications for any available positions.</p>
      `;
  }

  // Add navigation buttons
  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const backButton = document.createElement("button");
  backButton.innerText = "Back";
  backButton.onclick = () => {
    document.getElementById("questions-container").style.display = "block";
    document.getElementById("question").style.display = "block";
    document.getElementById("result").innerHTML = "";
    currentQuestionIndex = questions.length - 1;
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
  document.getElementById("result").innerHTML = "";
  displayQuestion(currentQuestionIndex);
}

// Initialize the first question
displayQuestion(currentQuestionIndex);
