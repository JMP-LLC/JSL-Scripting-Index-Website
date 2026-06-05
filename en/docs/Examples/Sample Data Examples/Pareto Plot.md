# Pareto Plot

## Example 1
> **Summary**: Create a Pareto Plot to analyze cause categories and ship events with test rates across different groups.

<!-- Keywords: #ParetoPlot, #Cause, #Groups, #Plot, #TestRatesAcrossGroups -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Pareto Plot 3
Pareto Plot(
	Cause( :color ),
	X( :Ship event ),
	Test Rates Across Groups( 1 )
);
```

## Example 2
> **Summary**: Generate a Pareto Plot to identify the primary causes of surface quality issues from the Hardware Surface Unit Data.

<!-- Keywords: #ParetoPlot, #Cause, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Pareto Plot
Pareto Plot( Cause( :surface quality ) );
```

## Example 3
> **Summary**: Create a Pareto Plot with 'color' as the cause variable using the Pareto Plot function.

<!-- Keywords: #ParetoPlot, #Cause, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Pareto Plot 2
Pareto Plot( Cause( :color ) );
```

## Example 4
> **Summary**: Generate a Pareto plot to analyze the dependency of surface quality on different parts, excluding the rate plots and closing the plot outline.

<!-- Keywords: #ParetoPlot, #Cause, #Close, #Groups, #NoPlot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Hardware Surface Unit Data.jmp");
// Pareto Plot 4
Pareto Plot(
	Cause( :surface quality ),
	X( :Part ),
	Test Rates Across Groups( 1 ),
	No Plot( 1 ),
	SendToReport(
		Dispatch( {}, "Plots", OutlineBox,
			{Close( 1 )}
		)
	)
);
```

## Example 5
> **Summary**: Create a Pareto Plot to identify the major causes of failure from the provided data table.

<!-- Keywords: #ParetoPlot, #Cause, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure Raw Data.jmp");
// Pareto Plot
Pareto Plot( Cause( :failure ) );
```

## Example 6
> **Summary**: Create a Pareto Plot for cause analysis using failure data and frequency counts.

<!-- Keywords: #ParetoPlot, #Cause, #Freq, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	Freq( :N )
);
```

## Example 7
> **Summary**:  Generate a Pareto Plot analysis  using specified columns for causes, contributing factors, and frequencies

<!-- Keywords: #ParetoPlot, #Cause, #Freq, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure2.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N )
);
```

## Example 8
> **Summary**: Generate a Pareto Plot to visualize the frequency of failure causes, with X-axis categories including clean and date.

<!-- Keywords: #ParetoPlot, #Cause, #Freq, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N )
);
```

## Example 9
> **Summary**: Generate a Pareto plot displaying the top causes of failures using categorical variables and frequency counts.

<!-- Keywords: #ParetoPlot, #Cause, #Freq, #Plot -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3ID.jmp");
// Pareto Plot
Pareto Plot(
	Cause( :failure ),
	X( :clean, :date ),
	Freq( :N )
);
```

## Example 10
> **Summary**: Create a Pareto plot to visualize the rate of occurrences for different causes across various processes in the Quality Control data table.

<!-- Keywords: #ParetoPlot, #Cause, #Colors, #Freq, #Groups -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failuressize.jmp");
// Pareto Plot - Rate
Pareto Plot(
	Cause( :Causes ),
	X( :Process ),
	Freq( :Count ),
	Per Unit Rates( 1 ),
	Test Rates Across Groups( 1 ),
	Cause[1] << Colors( "Red" ),
	Cause[2] << Colors( "Purple" ),
	Cause[4] << Colors( "BlueGreen" ),
	Cause[5] << Colors( "Yellow" ),
	Cause[6] << Colors( "Blue" ),
	Cause[7] << Colors( "Orange" )
);
```

## Example 11
> **Summary**: Create a Pareto Plot for analyzing defect causes with per-unit analysis and testing rates across groups.

<!-- Keywords: #ParetoPlot, #Cause, #Code, #Column, #Freq -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failuressize.jmp");
// Pareto Plot - DPU
Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis(
		Value In Freq Column(
			Cause Code( "size" )
		)
	),
	X( :Process ),
	Freq( :Count ),
	Per Unit Rates( 1 ),
	Test Rates Across Groups( 1 )
);
```

