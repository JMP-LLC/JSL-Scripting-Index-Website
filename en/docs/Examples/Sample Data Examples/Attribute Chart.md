# Attribute Chart

> **Summary**: Generate an attribute chart

<!-- Keywords: #AttributeChart, #Chart, #EffectivenessReport, #Report, #Standard -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Attribute Gauge.jmp");
// Attribute Chart
Attribute Chart(
	Y( :A, :B, :C ),
	X( :Part ),
	Standard( :Standard ),
	Effectiveness Report( 1 )
);
```

