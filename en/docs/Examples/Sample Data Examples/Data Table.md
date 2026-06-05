# Data Table

## Example 1
> **Summary**: Example jsl to add new rows to a table

<!-- Keywords: #DataTable, #AddRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cherts.jmp");
// Add New Rows
Current Data Table() <<
Add Rows(
	{:location name = "Lanesboro", :Al =
	3866, :Mn = 15.56, :Na = 262.95, :Br
	 = 0.88, :Ce = 0.45, :Co = 0.31, :Cr
	 = 10.57, :Cs = 0.26, :Eu = 0.04, :Fe
	 = 433.86, :Hf = 0.15, :La = 0.28,
	:Sc = 0.12, :sm = 0.03, :U = 0.75},
	{:location name = "Stockton", :al =
	2789.16, :Mn = 6.6, :Na = 208.6, :Br
	 = 0.45, :Ce = 0.4, :Co = 0.28, :Cr
	 = 11.76, :Cs = 0.25, :Eu = 0.04, :Fe
	 = 342.8, :Hf = 0.08, :La = 0.12, :Sc
	 = 0.05, :Sm = 0.02, :U = 0.63}
);
```

## Example 2
> **Summary**: Simulate binary outcomes using a logistic regression model with multiple predictors in the Binomial Experiment data table.

<!-- Keywords: #DataTable, #Binomial, #Column, #Exp, #Formula -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Binomial Experiment.jmp");
// Simulate Model Responses
dt = Current Data Table();
col = Column( "Y Simulated" );
col <<
Formula(
	Random Binomial(
		1,
		1 / (1
		+Exp(
			-1 * (1 + 1 * :X1 + 0.9 * :X2
			 + 0.8 * :X3 + 0.7 * :X4
			+0.6 * :X5 + 0.5 * :X6)
		))
	)
);
```

## Example 3
> **Summary**: Add a new row to the data table to represent a single dice roll using the Add Rows function.

<!-- Keywords: #DataTable, #AddRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/DiceRolls.jmp");
// Roll Once
Current Data Table() << Add Rows( 1 );
```

## Example 4
> **Summary**: Create multiple rows in the data table to simulate rolling a dice many times.

<!-- Keywords: #DataTable, #AddRows -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/DiceRolls.jmp");
// Roll Many
Current Data Table() <<
Add Rows( :Num Rolls );
```

## Example 5
> **Summary**: Transpose specific columns in the data table.

<!-- Keywords: #DataTable, #columns -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Materials1.jmp");
// Transpose
Current Data Table() <<
Columns( :plastic, :tin, :gold )`;
```

## Example 6
> **Summary**: Exclude the last 100 rows of data from the current active data table.

<!-- Keywords: #DataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Polyethylene Process.jmp");
// Set currrent data as excluded
dt = Current Data Table();
lastRow = N Rows( dt );
For( i = 101, i <= lastRow, i++,
	Row State( i ) = Excluded State( 1 )
);
```

## Example 7
> **Summary**: Clear excluded data starting from row 101 in the specified data table

<!-- Keywords: #DataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Polyethylene Process.jmp");
// Clear excluded data
dt = Current Data Table();
lastRow = N Rows( dt );
For( i = 101, i <= lastRow, i++,
	Row State( i ) = Excluded State( 0 )
);
```

## Example 8
> **Summary**: Add a simulation column with a Weibull distribution and set specification limits.

<!-- Keywords: #DataTable, #Column, #Formula, #Limits, #NewColumn -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Tablet Measurements.jmp");
// Add Simulation Column
dt = Current Data Table();
dt <<
New Column( "Simulated Purity",
	Formula(
		Random Weibull(
			1589.7167836,
			99.918708989
		)
	),
	Set Property(
		"Spec Limits",
		{LSL( 99.5 ), Show Limits( 0 )}
	)
);
```

