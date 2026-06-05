# CUSUM Control Chart

> **Summary**: Create a CUSUM Control Chart for quality control monitoring using a predefined data table.

<!-- Keywords: #ControlChart, #CUSUMControlChart, #Chart, #Get, #LowerSide -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Engine Temperature Sensor.jmp");
// CUSUM Control Chart
CUSUM Control Chart(
	Y( :Y ),
	Lower Side( 1 ),
	Target( 100 ),
	Sigma( 10 )
);
```

