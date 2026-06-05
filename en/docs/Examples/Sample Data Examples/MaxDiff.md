# MaxDiff

## Example 1
> **Summary**: Perform MaxDiff analysis using a Firth bias-adjusted logistic regression model to analyze multiple-choice data with profile effects.

<!-- Keywords: #MaxDiff, #Effects, #Grouping, #ID, #OneTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Design Experiment/Candy Survey.jmp");
// MaxDiff
MaxDiff(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Choice ),
	Profile Grouping(
		:Subject, :Choice Set
	),
	Profile Effects( :Candy ),
	"Firth Bias-adjusted Estimates"n( 1 )
);
```

## Example 2
> **Summary**: Perform One Table MaxDiff analysis with Firth Bias-Adjusted Estimates on data from Potato Chip Combined.jmp.

<!-- Keywords: #MaxDiff, #ChoiceSetID, #Effects, #Grouping, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Combined.jmp");
// One Table MaxDiff
MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);
```

## Example 3
> **Summary**: Perform a MaxDiff analysis for flavor preference using the Potato Chip Responses, Profiles, and Subjects data tables .

<!-- Keywords: #DataTable, #MaxDiff, #Effects, #ID, #ProfileDataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// MaxDiff for Flavor
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
MaxDiff(
	Response Data Table(
		Data Table(
			"Potato Chip Responses"
		)
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table(
			"Potato Chip Subjects"
		)
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

## Example 4
> **Summary**: Perform MaxDiff analysis with no subject effects using the MaxDiff platform.

<!-- Keywords: #DataTable, #MaxDiff, #Effects, #ID, #ProfileDataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// MaxDiff with No Subject Effects
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
MaxDiff(
	Response Data Table(
		Data Table(
			"Potato Chip Responses"
		)
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table(
			"Potato Chip Subjects"
		)
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

## Example 5
> **Summary**: Analyze customer preference data for potato chips using Max Diff with a focus on product of value.

<!-- Keywords: #DataTable, #MaxDiff, #Effects, #ID, #ProfileDataTable -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// Max Diff for Product Of
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
MaxDiff(
	Response Data Table(
		Data Table(
			"Potato Chip Responses"
		)
	),
	Profile DataTable(
		Potato Chip Profiles
	),
	Subject DataTable(
		Data Table(
			"Potato Chip Subjects"
		)
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Product Of ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

## Example 6
> **Summary**: Perform a MaxDiff analysis using Hierarchical Bayes with additional effects from Profile and Subject data tables, and apply Firth Bias-Adjusted Estimates.

<!-- Keywords: #DataTable, #MaxDiff, #Effects, #HierarchicalBayes, #ID -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Potato Chip Responses.jmp");
// MaxDiff with Hierarchical Bayes
Open(
	"$Sample_Data/Potato Chip Subjects.jmp"
);
Open(
	"$Sample_Data/Potato Chip Responses.jmp"
);
Open(
	"$Sample_Data/Potato Chip Profiles.jmp"
);
MaxDiff(
	Response Data Table(
		Data Table(
			"Potato Chip Responses"
		)
	),
	Profile DataTable(
		Data Table(
			"Potato Chip Profiles"
		)
	),
	Subject DataTable(
		Data Table(
			"Potato Chip Subjects"
		)
	),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices(
		:Choice 1, :Choice 2, :Choice 3
	),
	Profile ID( :Profile ID ),
	Profile Effects( :Product Of ),
	Subject Subject ID( :Respondent ),
	Subject Effects(
		:Citizenship, :Gender
	),
	Hierarchical Bayes( 1 ),
	Hierarchical Bayes( 1 ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Best Option( :Best Profile ),
	Response Worst Option(
		:Worst Profile
	)
);
```

