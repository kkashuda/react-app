# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?

prosecco = Drink.create(
  title: "Rasberry  Limoncello Prosecco",
  description: "Amazingly refreshing, bubbly, and sweet – a perfect summer cocktail that you can make in just 5 minutes!",
  steps: "In a large pitcher, whisk together prosecco and limoncello. Serve over raspberries, garnished with mint, if desired.",
  source: "http://damndelicious.net/2014/06/09/raspberry-limoncello-prosecco/",
)

prosecco.ingredients.create(description: "3 cups prosecco, chilled")
prosecco.ingredients.create(description: "1 cup limoncello liqueur, chilled")
prosecco.ingredients.create(description: "1 cup frozen raspberries")
prosecco.ingredients.create(description: "6 sprigs fresh mint")