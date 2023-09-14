
import 'package:cloud_firestore/cloud_firestore.dart';

class Pocket {
  final String name;
  final String description;
  final num amount;
  final num totalNeeded;

  Pocket({required this.name, required this.description, this.amount=0, this.totalNeeded = 0});

  factory Pocket.fromSnapshot(DocumentSnapshot doc) {
    return Pocket(
      name: doc['name'], 
      amount: doc['amount'],
      description: doc['descrription']
    );
  }
}