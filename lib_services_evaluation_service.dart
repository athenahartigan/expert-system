import '../models/position.dart';

class EvaluationService {
  static List<String> evaluateApplicant(Map<String, dynamic> applicantInfo) {
    List<String> qualifiedPositions = [];

    for (Position position in positions) {
      bool meetsNeededSkills = position.neededSkills.every((skill) =>
          applicantInfo.containsKey(skill) && applicantInfo[skill] == true);
      bool meetsQualifications = position.qualifications.every((qualification) =>
          applicantInfo.containsKey(qualification) &&
          applicantInfo[qualification] == true);

      if (meetsNeededSkills && meetsQualifications) {
        qualifiedPositions.add(position.name);
      }
    }

    return qualifiedPositions;
  }

  static Map<String, String> getQualificationReasoning() {
    return {
      "Python course work": "Completed Python coursework",
      "Software Engineering course work": "Completed Software Engineering coursework",
      "Agile course": "Completed Agile course",
      "Bachelor in CS": "Has a Bachelor in Computer Science",
      "3 years Python development": "Years of Python development experience",
      "1 year data development": "Years of data development experience",
      "Experience in Agile projects": "Experience in Agile projects",
      "Used Git": "Used Git",
      "3 years managing software projects": "Years of experience managing software projects",
      "2 years in Agile projects": "Years of experience in Agile projects",
      "PMI Lean Project Management Certification": "Has a PMI Lean Project Management Certification",
      "3 years using Python to develop Expert Systems": "Years of experience using Python to develop Expert Systems",
      "2 years data architecture and development": "Years of data architecture and development experience",
      "Masters in CS": "Has a Masters in Computer Science",
    };
  }
}