# CUSUM

> **Summary**: Create a Cusum Chart to monitor the weight process with specified control parameters.

<!-- Keywords: #ControlChart, #CUSUM, #Chart, #Delta, #Get -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Oil1 Cusum.jmp");
// Cusum Chart
Control Chart(
	Sample Size( :hour ),
	H( 2 ),
	Chart Col(
		:weight,
		CUSUM(
			Two sided( 1 ),
			Target( 8.1 ),
			Delta( 1 ),
			Sigma( 0.05 ),
			Head Start( 0.05 )
		)
	)
);
```

