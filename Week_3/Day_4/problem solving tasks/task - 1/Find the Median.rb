require 'json'
require 'stringio'

# the array is not sorted and he said is odd length So i do'nt need to handle the even length cases. i need to sort
# the array and return the middle element then find the index of the median by dividing the length of the array by 2.

# ex. arr = [1,5,2,7,3,6,4]
# sorted_array = [1,2,3,4,5,6,7]
# indexes      = [0,1,2,3,4,5,6]
# length_of_array = 7
# index_of_median = 7/2 = 3

def findMedian(arr)
    sorted_array = arr.sort
    index_of_median = sorted_array.length / 2
    return sorted_array[index_of_median]
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

arr = gets.rstrip.split.map(&:to_i)

result = findMedian arr

fptr.write result
fptr.write "\n"

fptr.close()
