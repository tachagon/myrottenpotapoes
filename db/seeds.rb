# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
more_movies = [
	{:title => 'Aladdin 2', :rating => 'G',
		:release_date => '25-Nov-1992'},
	{:title => 'When Harry Met Sally 2', :rating => 'R',
		:release_date => '21-Jul-1989'},
	{:title => 'The Help 2', :rating => 'PG-13',
		:release_date => '10-Aug-2011'},
	{:title => 'Raiders of the Lost Ark 2', :rating => 'PG',
		:release_date => '12-Jun-1981'}
	]

more_movies.each do |movie|
	Movie.create!(movie)
end
