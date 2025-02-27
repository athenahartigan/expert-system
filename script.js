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
        desiredSkills: ["PMI Lean Project Management Certification"],
        qualifications: [],
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

function evaluateApplicant() {
    const applicantInfo = {
        "Python course work": document.getElementById("python-course").checked,
        "Software Engineering course work": document.getElementById("software-engineering").checked,
        "Agile course": document.getElementById("agile-course").checked,
        "Bachelor in CS": document.getElementById("bachelor-cs").checked,
        "3 years Python development": parseInt(document.getElementById("python-development").value) || 0,
        "1 year data development": parseInt(document.getElementById("data-development").value) || 0,
        "Experience in Agile projects": parseInt(document.getElementById("agile-projects").value) || 0,
        "Used Git": document.getElementById("used-git").checked,
        "3 years managing software projects": parseInt(document.getElementById("managing-projects").value) || 0,
        "2 years in Agile projects": parseInt(document.getElementById("agile-experience").value) || 0,
        "PMI Lean Project Management Certification": document.getElementById("pmi-certification").checked,
        "3 years using Python to develop Expert Systems": parseInt(document.getElementById("expert-systems").value) || 0,
        "2 years data architecture and development": parseInt(document.getElementById("data-architecture").value) || 0,
        "Masters in CS": document.getElementById("masters-cs").checked,
    };

    const qualifiedPositions = positions.filter(position => {
        const meetsNeededSkills = position.neededSkills.every(skill => applicantInfo[skill]);
        const meetsQualifications = position.qualifications.every(qualification => applicantInfo[qualification]);

        return meetsNeededSkills && meetsQualifications;
    }).map(position => position.name);

    displayResult(qualifiedPositions);
}

function displayResult(qualifiedPositions) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "";

    if (qualifiedPositions.length > 0) {
        resultDiv.innerHTML = `
            <p>Congratulations! You are qualified for the following positions:</p>
            <ul>${qualifiedPositions.map(position => `<li>${position}</li>`).join('')}</ul>
        `;
    } else {
        resultDiv.innerHTML = `
            <p>Unfortunately, you do not meet the required qualifications for any available positions.</p>
        `;
    }
}