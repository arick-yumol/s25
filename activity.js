/*

================== 2 ==================
db.fruits.aggregate( [ 
	{ 
		$match: { 
			onSale: true 
		} 
	}, 
	{ 
		$count: "fruit_count_on_sale"
	} 
] );
================== 2 ==================

================== 3 ==================
db.fruits.aggregate( [ 
	{ 
		$match: { 
			stock: {
				$gt: 20
			} 
		} 
	}, 
	{ 
		$count: "fruit_stock_above_20"
	} 
] );
================== 3 ==================

================== 4 ==================
db.fruits.aggregate([ 
	{ 
        $match: { 
            onSale: true
         }
	}, 
    {
        $unwind: "$origin"
    }, 
	{ 
        $group: {
            _id: "$origin",
            avg_price: {
                $avg: "$price"
            }
        }
	} 
]);
================== 4 ==================

================== 5 ==================
db.fruits.aggregate([ 
    {
        $unwind: "$origin"
    }, 
	{ 
        $group: {
            _id: "$origin",
            highest_price: {
                $max: "$price"
            }
        }
	} 
]);
================== 5 ==================

================== 6 ==================
db.fruits.aggregate([ 
    {
        $unwind: "$origin"
    }, 
	{ 
        $group: {
            _id: "$origin",
            lowest_price: {
                $min: "$price"
            }
        }
	} 
]);
================== 6 ==================

*/