# Bootstrap Forest

> **Summary**: Generate a bootstrap forest model with validation

<!-- Keywords: #BootstrapForest, #Method, #NumberTerms, #NumberTrees, #PortionBootstrap -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Bootstrap Forest
Bootstrap Forest(
	Y( :Percent body fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n,
		:"Height (inches)"n,
		:"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n,
		:"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n,
		:"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n,
		:
		"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation( :Validation ),
	Method( "Bootstrap Forest" ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 100 ),
	Go
);
```

