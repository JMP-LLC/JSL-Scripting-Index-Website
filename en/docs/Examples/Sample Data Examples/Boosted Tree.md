# Boosted Tree

## Example 1
> **Summary**: Build a boosted tree model

<!-- Keywords: #BoostedTree, #LearningRate, #Method, #NumberofLayers, #Reset -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Bands Data.jmp");
// Boosted Tree of Banding?
Random Reset( 123 );
Boosted Tree(
	Y( :Banding? ),
	X(
		:grain screened,
		:proof on ctd ink, :blade mfg,
		:paper type, :ink type,
		:direct steam, :solvent type,
		:type on cylinder, :press type,
		:unit number, :cylinder size,
		:paper mill location,
		:plating tank, :proof cut,
		:viscosity, :caliper,
		:ink temperature, :humidity,
		:roughness, :blade pressure,
		:varnish pct, :press speed,
		:ink pct, :solvent pct,
		:ESA Voltage, :ESA Amperage, :wax,
		:hardener, :roller durometer,
		:current density,
		:anode space ratio,
		:chrome content
	),
	Validation Portion( 0.2 ),
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 41 ),
	Learning Rate( 0.1 ),
	Go
);
```

## Example 2
> **Summary**: Generate a boosted tree model with validation

<!-- Keywords: #BoostedTree, #LearningRate, #Method, #NumberofLayers, #SplitsperTree -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Body Fat.jmp");
// Boosted Tree
Boosted Tree(
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
	Method( "Boosted Tree" ),
	Splits per Tree( 3 ),
	Number of Layers( 30 ),
	Learning Rate( 0.1 ),
	Go
);
```

