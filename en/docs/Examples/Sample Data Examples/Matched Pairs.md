# Matched Pairs

## Example 1
> **Summary**: Perform a t-test on matched pairs data

<!-- Keywords: #MatchedPairs, #Frame, #Pairs, #ReferenceFrame -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/BabySleep.jmp");
// paired t-test
(
Matched Pairs(
	y( Awake, Asleep ),
	Reference Frame( 1 )
) << report)[AxisBox( 1 )] << Revert Axis;
```

## Example 2
> **Summary**: Perform a paired t-test

<!-- Keywords: #MatchedPairs, #Frame, #Pairs, #ReferenceFrame -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Blood Pressure by Time.jmp");
// paired t-test
(
Matched Pairs(
	y( BP AM, BP PM ),
	Reference Frame( 1 )
) << report)[AxisBox( 1 )] << Revert Axis;
```

## Example 3
> **Summary**: Perform matched pairs analysis on LogHist0 and LogHist1 variables.

<!-- Keywords: #MatchedPairs, #Pairs -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Dogs.jmp");
// Matched Pairs
Matched Pairs(
	Y( :LogHist0, :LogHist1 )
);
```

