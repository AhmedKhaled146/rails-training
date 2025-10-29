require 'json'
require 'stringio'

def closestNumbers(arr)
    # Write your code here
    sorted_array = arr.sort
    min_diff = Float::INFINITY
    result = []
    (0...sorted_array.length - 1).each do |i|
        diff = sorted_array[i + 1] - sorted_array[i]
        if diff < min_diff
            min_diff = diff
            result = [sorted_array[i], sorted_array[i + 1]]
        elsif diff == min_diff
            result.push(sorted_array[i], sorted_array[i + 1])
        end
    end
    return result
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

arr = gets.rstrip.split.map(&:to_i)

result = closestNumbers arr

fptr.write result.join " "
fptr.write "\n"

fptr.close()
