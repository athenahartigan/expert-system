class Position {
  final String name;
  final List<String> neededSkills;
  final List<String> desiredSkills;
  final List<String> qualifications;

  Position({
    required this.name,
    required this.neededSkills,
    required this.desiredSkills,
    required this.qualifications,
  });
}

final List<Position> positions = [
  Position(
    name: "Entry-Level Python Engineer",
    neededSkills: ["Python course work", "Software Engineering course work"],
    desiredSkills: ["Agile course"],
    qualifications: ["Bachelor in CS"],
  ),
  Position(
    name: "Python Engineer",
    neededSkills: [
      "3 years Python development",
      "1 year data development",
      "Experience in Agile projects"
    ],
    desiredSkills: ["Used Git"],
    qualifications: ["Bachelor in CS"],
  ),
  Position(
    name: "Project Manager",
    neededSkills: [
      "3 years managing software projects",
      "2 years in Agile projects"
    ],
    desiredSkills: ["PMI Lean Project Management Certification"],
    qualifications: [],
  ),
  Position(
    name: "Senior Knowledge Engineer",
    neededSkills: [
      "3 years using Python to develop Expert Systems",
      "2 years data architecture and development"
    ],
    desiredSkills: [],
    qualifications: ["Masters in CS"],
  ),
];
