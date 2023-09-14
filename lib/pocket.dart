
class Pocket {
  final String name;
  final String description;

  Pocket({required this.name, required this.description});

  factory Pocket.fromSnapshot(DocumentSnapshot doc) {
    return Pocket(
      name: doc['name'], 
      amount: doc['amount']
    );
  }
}