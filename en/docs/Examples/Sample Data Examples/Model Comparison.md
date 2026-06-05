# Model Comparison

> **Summary**: Use model comparison to compare several types of models

<!-- Keywords: #ModelComparison, #Format, #Where -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Model Comparison
Model Comparison(
	Y(
		:
		"Pred Body Fat - 2nd Order Stepwise"n,
		:
		"Pred Body Fat - Variable Reduction PCA"n,
		:"Pred Body Fat - Stepwise"n,
		:"Pred Body Fat - Partition"n,
		:"Pred Body Fat - PLS"n,
		:
		"Pred Body Fat - Bootstrap Forest"n,
		:"Pred Body Fat - Boosted Tree"n,
		:
		"Pred Body Fat - Neural (3,0,0)"n,
		:
		"Pred Body Fat - Neural (4,0,0),(8,0,0)"n,
		:
		"Pred Body Fat - Boosted Neural"n,
		:
		"Pred Body Fat - Ensemble Model"n
	),
	Where(
		Format( :Validation ) ==
		"Validation"
	)
);
```

