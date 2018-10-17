# Summary
This directory includes some basic functions implemented in typescript according to the requirements.

To run the project follow these steps:
```
npm install
npm run compile
npm run start
```

Swagger docs will loud in: http://localhost:2002/docs

To run the unit tests
```
npm run test
```

# Contents
- controllers: the functions to be called based on the http requests
- services:
```
 * functions.ts: The first 4 requirements 
 * utilities.ts: The javascript requrements (string extensions for startsWith & endsWith)
```
- test: All the tests are in test/services/**.ts

# SQL
Since I only have <b>MySql</b> on my local machine this test is done based on mysql queries. Most of the queries are the same for both MSSQL & Mysql.

Requirement 9

First answer (Return the names of all salespeople that have an order with George):
```
SELECT distinct s.Name 
FROM Salesperson as s
inner join  Orders as o on o.SalespersonId = s.SalespersonId
inner join  Customer as c on c.CustomerId = o.CustomerId
where c.Name = 'George';
```

Second answer (Return the names of all salespeople that do not have any order with George):
```
SELECT distinct s.Name 
FROM Salesperson as s
inner join  Orders as o on o.SalespersonId = s.SalespersonId
inner join  Customer as c on c.CustomerId = o.CustomerId
where c.Name != 'George';
```


Third answer (Return the names of salespeople that have 2 or more orders.):
```
SELECT  s.Name
FROM new_schema_1.Salesperson as s where s.SalespersonId In
(
select SalespersonId
from new_schema_1.Orders as o
group by o.SalespersonId
having count(o.OrderId) >= 2
)
```


Requirement 10

First answer (Return the name of the salesperson with the 3rd highest salary.):
### Note: MSQQL doesn't support Limit/offset, instead it could be implemented using row_number.

```
SELECT s.*
FROM new_schema_1.Salesperson as s
order by s.Salary desc
Limit 1 Offset 2;
```

Second answer (Create a new roll-up table BigOrders(where columns are CustomerID, TotalOrderValue),
and insert into that table customers whose total Amount across all orders is greater than 1000):
```
CREATE TABLE `BigOrders` (
  `CustomreId` INT NOT NULL,
  `TotalOrderValue` INT NULL,
  PRIMARY KEY (`CustomreId`));
```
```
Insert into new_schema_1.BigOrders
Select o.CustomerId as CustomerId, Sum(o.NumberOfUnits * o.CostOfUnits) as TotalOrderValue
from new_schema_1.Orders as o 
group by  o.CustomerId
```

Third answer (Return the total Amount of orders for each month, ordered by year, then month (both in descending order):
```
Select Year(OrderDate), Month(OrderDate), Sum(o.NumberOfUnits * o.CostOfUnits) as TotalOrders
from new_schema_1.Orders as o 
group by Year(OrderDate), Month(OrderDate) 
Order by Year(OrderDate) desc, Month(OrderDate) desc

```