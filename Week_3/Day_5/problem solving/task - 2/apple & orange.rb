require 'json'
require 'stringio'


def countApplesAndOranges(s, t, a, b, apples, oranges)
    # Write your code here
    apples_positions = apples.map { |d| a + d }
    oranges_positions = oranges.map { |d| b + d }

    apples_on_house = apples_positions.count { |pos| pos.between?(s, t) }
    oranges_on_house = oranges_positions.count { |pos| pos.between?(s, t) }

    puts apples_on_house
    puts oranges_on_house

end

first_multiple_input = gets.rstrip.split

s = first_multiple_input[0].to_i

t = first_multiple_input[1].to_i

second_multiple_input = gets.rstrip.split

a = second_multiple_input[0].to_i

b = second_multiple_input[1].to_i

third_multiple_input = gets.rstrip.split

m = third_multiple_input[0].to_i

n = third_multiple_input[1].to_i

apples = gets.rstrip.split.map(&:to_i)

oranges = gets.rstrip.split.map(&:to_i)

countApplesAndOranges s, t, a, b, apples, oranges
