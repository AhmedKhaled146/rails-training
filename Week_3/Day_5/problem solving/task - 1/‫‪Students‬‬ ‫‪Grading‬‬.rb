require 'json'
require 'stringio'

def gradingStudents(grades)
    # Write your code here
      grades.map do |grade|
        if grade < 38
            grade
        else
            next_multiple = ((grade / 5).to_i + 1) * 5
            if next_multiple - grade < 3
                next_multiple
            else
                grade
            end
        end
    end
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

grades_count = gets.strip.to_i

grades = Array.new(grades_count)

grades_count.times do |i|
    grades_item = gets.strip.to_i
    grades[i] = grades_item
end

result = gradingStudents grades

fptr.write result.join "\n"
fptr.write "\n"

fptr.close()
