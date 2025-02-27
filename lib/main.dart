import 'package:flutter/material.dart';
import 'screens/question_screen.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Expert System',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: QuestionScreen(),
    );
  }
}
