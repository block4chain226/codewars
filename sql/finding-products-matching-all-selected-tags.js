//For our task, we want to find products that are tagged with both Electronics and Gadgets.
// The query should return product_id values in desc order for products that are associated with both of these tags


select distinct pt1.product_id from product_tags pt1
inner join product_tags pt2 on pt1.product_id = pt2.product_id
where pt1.tag = 'Electronics' and pt2.tag = 'Gadgets'
order by product_id desc
