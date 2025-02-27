import 'package:flutter/material.dart';

class ResultScreen extends StatelessWidget {
  final List<String> qualifiedPositions;

  ResultScreen({required this.qualifiedPositions});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Result'),
      ),
      body: Padding(
        padding: EdgeInsets.all(16.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            if (qualifiedPositions.isNotEmpty)
              ...[
                Text(
                  'Congratulations! You are qualified for the following positions:',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
                ),
                ...qualifiedPositions.map((position) => Text(position)).toList(),
              ]
            else
              Text(
                'Unfortunately, you do not meet the required qualifications for any available positions.',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
              ),
            SizedBox(height: 20),
            Text(
              'Reasoning:',
              style: TextStyle(fontSize: 18, fontWeight: FontWeight.bold),
            ),
            // Display reasoning (add your reasoning logic here)
          ],
        ),
      ),
    );
  }
}
