// It's time to assess which of the world's greatest fighters are through to the 6 coveted places in the semi-finals of the Street Fighter World Fighting Championship. Every fight of the year has been recorded and each fighter's ' +
// 'wins and losses need to be added up.
// Each row of the table fighters records, alongside the fighter's name, whether they won (1) or lost (0), as well as the type of move that ended the bout.

select name,
    sum(case when w.move like '%Hadoken' or w.move like '%Shouoken' or w.move like '%Kikoken' then 0  else won end) won,
    sum(case when w.move like '%Hadoken' or w.move like '%Shouoken' or w.move like '%Kikoken' then 0 else lost end) lost
from fighters f inner join winning_moves w
on f.move_id = w.id
group by name
order by won desc
limit 6