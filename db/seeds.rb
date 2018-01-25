# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

200.times do
    name = Faker::Song.name
    description = Faker::Song.description
    category = Faker::Song.category
    price = Faker::Song.price
    version = Faker::Song.version
    author = Faker::Song.author
    logo = Faker::Avatar.image(name, '50x50', 'png', 'set4')
    Song.create(name: name, description: description, category: category, price: price, version: version, author: author, logo: logo)
  end
