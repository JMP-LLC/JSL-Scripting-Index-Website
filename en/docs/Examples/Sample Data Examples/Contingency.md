# Contingency

## Example 1
> **Summary**: Perform a contingency analysis

<!-- Keywords: #Contingency, #ContingencyTable, #CellChiSquare, #Col%, #Count -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Alcohol.jmp");
// Contingency
Contingency(
	Y( :Relapsed ),
	X( :Alcohol Consumption ),
	Freq( :Count ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	)
);
```

## Example 2
> **Summary**: Perform a contingency analysis with crosstabs

<!-- Keywords: #Contingency, #Col%, #Count, #Crosstabs, #Deviation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Big Class.jmp");
// Contingency
Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);
```

## Example 3
> **Summary**: Perform contingency analysis

<!-- Keywords: #Contingency, #ContingencyTable, #CellChiSquare, #Col%, #ColCum -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Physical Data.jmp");
// Contingency
Contingency(
	Y( :Country ),
	X( :Type ),
	Contingency Table(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
```

## Example 4
> **Summary**: Generate contingency analysis

<!-- Keywords: #Contingency -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Car Poll.jmp");
// Contingency
Contingency(
	Y( :type ),
	X( :marital status )
);
```

## Example 5
> **Summary**: Generate contingency analysis with correspondence analysis

<!-- Keywords: #Contingency, #CorrespondenceAnalysis, #Crosstabs, #Freq, #Tests -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Cheese.jmp");
// Contingency
Contingency(
	Y( :Response ),
	X( :Cheese ),
	Freq( :Count ),
	Crosstabs( 0 ),
	Tests( 0 ),
	Correspondence Analysis( 1 )
);
```

## Example 6
> **Summary**: Stack columns of a table and perform contingency analysis on the stacked data

<!-- Keywords: #Contingency, #ContingencyTable, #DataTable, #CellChiSquare, #Col% -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Children's Popularity.jmp");
// Stack Columns and Analyze
Data Table( "Children's Popularity.jmp" )
 << Stack(
	columns(
		:Grades, :Sports, :Looks, :Money
	),
	Source Label Column(
		"Characteristic"
	),
	Stacked Data Column( "Importance" ),
	Output Table( "Stacked Importance" )
);
Contingency(
	Y( :Characteristic ),
	X( :Importance ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
```

## Example 7
> **Summary**: Analyze a contingency table for the relationship between smoking status and lung cancer incidence.

<!-- Keywords: #Contingency, #ContingencyTable, #CellChiSquare, #Col%, #Count -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Lung Cancer Choice.jmp");
// Contingency
Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	Tests( 0 )
);
```

## Example 8
> **Summary**: Perform a contingency analysis on the Lung Cancer data table using Smoking status as the independent variable, with frequency counts.

<!-- Keywords: #Contingency, #ContingencyTable, #CellChiSquare, #Col%, #Count -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Lung Cancer.jmp");
// Contingency
Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 )
	),
	Tests( 0 )
);
```

## Example 9
> **Summary**: Construct a contingency table to analyze the relationship between message recipients (To) and senders (From) using count, total percentage, column percentage, and row percentage.

<!-- Keywords: #Contingency, #Col%, #Count, #Crosstabs, #Deviation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Mail Messages.jmp");
// Contingency
Contingency(
	Y( :To ),
	X( :From ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);
```

## Example 10
> **Summary**: Calculate and display contingency statistics for a 2x2 table using the Agreement Statistic.

<!-- Keywords: #Contingency, #AgreementStatistic, #Freq -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Prime Minister Ratings.jmp");
// Contingency
Contingency(
	Y( 2 ),
	X( 1 ),
	Freq( 3 ),
	Agreement Statistic( 1 )
);
```

## Example 11
> **Summary**: Perform a contingency analysis on categorical variables age and sex, displaying counts, percentages, and expected frequencies.

<!-- Keywords: #Contingency, #Col%, #Count, #Crosstabs, #Deviation -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/World Class.jmp");
// Contingency
Contingency(
	Y( :age ),
	X( :sex ),
	Crosstabs(
		Count( 1 ),
		Total %( 1 ),
		Col %( 1 ),
		Row %( 1 ),
		Expected( 0 ),
		Deviation( 0 ),
		"Cell Chi^2"n( 0 )
	)
);
```

