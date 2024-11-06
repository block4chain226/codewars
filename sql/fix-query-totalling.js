// Oh no! Timmys been moved into the database divison of his software company but as we know Timmy loves making mistakes. Help Timmy keep his job by fixing his query...
// Timmy works for a statistical analysis company and has been given a task of totaling the number of sales on a given day grouped by each department name and then each day.

select count(s.id) sale_count, s.transaction_date::date as day, d.name department
from department d inner join sale s
on s.department_id = d.id
group by  d.name,  day
order by day, department