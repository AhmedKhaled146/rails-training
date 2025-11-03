===> Task 01 - Revising Aggregations - The Sum Function

SELECT SUM(Population) FROM CITY WHERE District = 'California';

===> Task 02 - Average Population

SELECT FLOOR(AVG(Population)) FROM CITY;

===> Task 03 - African Cities

SELECT Name FROM CITY WHERE CountryCode IN (SELECT Code FROM COUNTRY WHERE Continent = 'Africa');

===> Task 04 - Average Population of Each Continent.

SELECT COUNTRY.Continent, FLOOR(AVG(CITY.Population)) AS AvgPopulation
FROM CITY
JOIN COUNTRY ON CITY.CountryCode = COUNTRY.Code
GROUP BY COUNTRY.Continent;

===> Task 05 - Placements

SELECT s.Name
FROM Students s
JOIN Friends f ON s.ID = f.ID
JOIN Packages p1 ON s.ID = p1.ID
JOIN Packages p2 ON f.Friend_ID = p2.ID
WHERE p2.Salary > p1.Salary
ORDER BY p2.Salary;
