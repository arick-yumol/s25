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

db.fruits.aggregate( [ 
	{ $match: { onSale: true } }, 
	{ $count: "fruit_count_on_sale" } 
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

db.fruits.aggregate( [ 
	{ $match: { stock: { $gt: 20 } } }, 
	{ $count: "fruit_stock_above_20" } 
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
        $group: {
            _id: "$supplier_id",
            avg_price: {
                $avg: "$price"
            }
        }
	} 
]);

db.fruits.aggregate([ 
	{ 
		$match: { 
			onSale: true 
		} 
	}, 
	{ 
		$group: { 
			_id: "$supplier_id", 
			avg_price: { 
				$avg: "$price" 
			} 
		} 
	} 
]);

db.fruits.aggregate([ 
	{ $match: { onSale: true } }, 
	{ $group: { _id: "$supplier_id", avg_price: { $avg: "$price" } } } 
]);
================== 4 ==================

================== 5 ==================
db.fruits.aggregate([ 
    { 
    	$match: { 
    		onSale: true 
    	} 
    }, 
	{ 
		$group: { 
			_id: "$supplier_id", 
			highest_price: { 
				$max: "$price" 
			} 
		} 
	} 
]);

db.fruits.aggregate([ 
    { $match: { onSale: true } }, 
	{ $group: { _id: "$supplier_id", highest_price: { $max: "$price" } } } 
]);
================== 5 ==================

================== 6 ==================
db.fruits.aggregate([ 
    { 
    	$match: { 
    		onSale: true 
    	} 
    }, 
	{ 
		$group: { 
			_id: "$supplier_id", 
			lowest_price: { 
				$min: "$price" 
			} 
		} 
	} 
]);

db.fruits.aggregate([ 
    { $match: { onSale: true } }, 
	{ $group: { _id: "$supplier_id", lowest_price: { $min: "$price" } } } 
]);
================== 6 ==================

*/