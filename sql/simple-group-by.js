//For this challenge you need to create a simple GROUP BY statement,
//you want to group all the people by their age and count the people who have the same age.

select count(id) people_count, age from people group by age