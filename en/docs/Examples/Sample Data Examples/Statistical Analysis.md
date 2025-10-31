# Statistical Analysis

More examples for this topic using the sample data files provided with JMP

### Perform a partition analysis on a dataset using various predictor variables and initial splits criteria to maximize significance.

```jsl

// Open data table
dt = Open("$Sample_Data/Equity.jmp");
// Partition
Partition(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON,
		:JOB, :YOJ, :DEROG, :DELINQ,
		:CLAGE, :NINQ, :CLNO, :DEBTINC
	),
	Show Split Prob( 1 ),
	Criterion( "Maximize Significance" ),
	Initial Splits(
		:DELINQ >= 1,
		{:DEBTINC >= 43.8475437170116},
		{:DEBTINC >= 45.7439490589145}
	)
);

```

