import 'package:flutter/material.dart';
import '../services/evaluation_service.dart';
import 'result_screen.dart';

class QuestionScreen extends StatefulWidget {
  @override
  _QuestionScreenState createState() => _QuestionScreenState();
}

class _QuestionScreenState extends State<QuestionScreen> {
  final Map<String, dynamic> applicantInfo = {
    "Python course work": false,
    "Software Engineering course work": false,
    "Agile course": false,
    "Bachelor in CS": false,
    "3 years Python development": 0,
    "1 year data development": 0,
    "Experience in Agile projects": 0,
    "Used Git": false,
    "3 years managing software projects": 0,
    "2 years in Agile projects": 0,
    "PMI Lean Project Management Certification": false,
    "3 years using Python to develop Expert Systems": 0,
    "2 years data architecture and development": 0,
    "Masters in CS": false,
  };

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Applicant Information'),
      ),
      body: SingleChildScrollView(
        padding: EdgeInsets.all(16.0),
        child: Column(
          children: [
            buildSwitch("Python course work"),
            buildSwitch("Software Engineering course work"),
            buildSwitch("Agile course"),
            buildSwitch("Bachelor in CS"),
            buildNumberInput("3 years Python development"),
            buildNumberInput("1 year data development"),
            buildNumberInput("Experience in Agile projects"),
            buildSwitch("Used Git"),
            buildNumberInput("3 years managing software projects"),
            buildNumberInput("2 years in Agile projects"),
            buildSwitch("PMI Lean Project Management Certification"),
            buildNumberInput("3 years using Python to develop Expert Systems"),
            buildNumberInput("2 years data architecture and development"),
            buildSwitch("Masters in CS"),
            SizedBox(height: 20),
            ElevatedButton(
              onPressed: () {
                List<String> qualifiedPositions =
                    EvaluationService.evaluateApplicant(applicantInfo);
                Navigator.push(
                  context,
                  MaterialPageRoute(
                    builder: (context) =>
                        ResultScreen(qualifiedPositions: qualifiedPositions),
                  ),
                );
              },
              child: Text('Submit'),
            ),
          ],
        ),
      ),
    );
  }

  Widget buildSwitch(String key) {
    return SwitchListTile(
      title: Text(key),
      value: applicantInfo[key],
      onChanged: (bool value) {
        setState(() {
          applicantInfo[key] = value;
        });
      },
    );
  }

  Widget buildNumberInput(String key) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 8.0),
      child: TextField(
        decoration: InputDecoration(
          labelText: key,
          border: OutlineInputBorder(),
        ),
        keyboardType: TextInputType.number,
        onChanged: (value) {
          setState(() {
            applicantInfo[key] = int.tryParse(value) ?? 0;
          });
        },
      ),
    );
  }
}
