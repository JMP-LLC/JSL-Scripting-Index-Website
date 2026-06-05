# EWMA Control Chart

## Example 1
> **Summary**: Generate an Exponentially Weighted Moving Average (EWMA) Control Chart using the Quality Control platform.

<!-- Keywords: #ControlChart, #EWMAControlChart, #Chart, #Get, #Group -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Clips2.jmp");
// EWMA Chart
EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Date ),
	Use Overall Mean for Target( 1 )
);
```

## Example 2
> **Summary**: Generate an Exponentially Weighted Moving Average (EWMA) control chart for monitoring quality control metrics.

<!-- Keywords: #ControlChart, #EWMAControlChart, #Chart, #Group, #Subgroup -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Clips1.jmp");
// EWMA Chart
EWMA Control Chart(
	Y( :Gap ),
	Subgroup( :Sample )
);
```

## Example 3
> **Summary**: Create an Exponentially Weighted Moving Average (EWMA) Control Chart for monitoring the temperature variable over time subgroups in the Quality Control/Quench dataset.

<!-- Keywords: #ControlChart, #EWMAControlChart, #Chart, #Group, #Subgroup -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Quench.jmp");
// EWMA Control Chart of Temp
EWMA Control Chart(
	Y( :Temp ),
	Subgroup( :Time stamp )
);
```

