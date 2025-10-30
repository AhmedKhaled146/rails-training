require 'json'
require 'stringio'

def getTotalX(a, b)
    # Write your code here
    def gcd(x, y)
        y == 0 ? x : gcd(y, x % y)
    end

    def lcm(x, y)
        (x * y) / gcd(x, y)
    end
    
    lcm_a = a.reduce { |acc, num| lcm(acc, num) }
    gcd_b = b.reduce { |acc, num| gcd(acc, num) }

    count = 0
    multiple = lcm_a

    while multiple <= gcd_b
        count += 1 if (gcd_b % multiple).zero?
        multiple += lcm_a
    end

    count

end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

first_multiple_input = gets.rstrip.split

n = first_multiple_input[0].to_i

m = first_multiple_input[1].to_i

arr = gets.rstrip.split.map(&:to_i)

brr = gets.rstrip.split.map(&:to_i)

total = getTotalX arr, brr

fptr.write total
fptr.write "\n"

fptr.close()
