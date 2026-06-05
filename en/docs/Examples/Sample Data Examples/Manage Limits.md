# Manage Limits

> **Summary**: Open the manage limits utility

<!-- Keywords: #ManageLimits, #Grouping, #Limits, #ProcessVariables, #Variables -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cheese Manufacturing Data.jmp");
// Manage Limits
Manage Limits(
	Process Variables(
		:pH, :Salt Concentration,
		:Moisture Content
	),
	Grouping( :Cheese Type )
);
```

