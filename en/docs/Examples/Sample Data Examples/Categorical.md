# Categorical

## Example 1
> **Summary**: Perform response screening analysis to identify most significant categorical factors

<!-- Keywords: #Categorical, #ResponseScreening, #ForceXCategorical, #ForceYCategorical -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Response Screening
Response Screening(
	Y(
		:Job Satisfaction,
		:I am working on my career,
		:I want to see the world,
		:
		My home needs some major improvements,
		:
		I have vast interests outside of work,
		:
		I want to get my debt under control,
		:I come from a large family,
		:Brush, :Floss
	),
	X(
		:Gender, :Single Status,
		:School Age Children, :Age Group
	),
	Force X Categorical( 1 ),
	Force Y Categorical( 1 )
);
```

## Example 2
> **Summary**: Perform categorical analysis with crosstab transposed and test for response homogeneity

<!-- Keywords: #Categorical, #CrosstabTransposed, #GroupingOption, #Legend, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Categorical Several
Categorical(
	X( :Age Group, :School Age Children ),
	Grouping Option(
		"Each Individually"
	),
	Responses(
		:I am working on my career
	),
	Responses(
		:
		My home needs some major improvements
	),
	Responses(
		:
		I have vast interests outside of work
	),
	Responses(
		:I come from a large family
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

## Example 3
> **Summary**: Perform categorical analysis with crosstab transposed and test for response homogeneity

<!-- Keywords: #Categorical, #CrosstabTransposed, #Legend, #Responses, #TestResponseHomogeneity -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Career by Age Group
Categorical(
	X( :Age Group ),
	Responses(
		:I am working on my career
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

## Example 4
> **Summary**: Perform categorical analysis with crosstab transposed and test for response homogeneity

<!-- Keywords: #Categorical, #CrosstabTransposed, #Legend, #Responses, #TestResponseHomogeneity -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Home Needs Improve by School Children
Categorical(
	X( :School Age Children ),
	Responses(
		:
		My home needs some major improvements
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

## Example 5
> **Summary**: Perform categorical analysis with crosstab transposed and test for response homogeneity

<!-- Keywords: #Categorical, #CrosstabTransposed, #Legend, #Responses, #TestResponseHomogeneity -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Vast Interests by School Children
Categorical(
	X( :School Age Children ),
	Responses(
		:
		I have vast interests outside of work
	),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Response Homogeneity( 1 )
);
```

## Example 6
> **Summary**: Perform categorical analysis with indicator group

<!-- Keywords: #Categorical, #Response, #Chart, #Crosstab, #FrequencyChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Brushing Indicator Group by Age
Categorical(
	X( :Age Group ),
	Indicator Group(
		:Brush After Waking Up,
		:Brush After Meal,
		:Brush Before Sleep,
		:Brush Another Time
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

## Example 7
> **Summary**: Perform categorical analysis with indicator group

<!-- Keywords: #Categorical, #Response, #Chart, #CrosstabTransposed, #FrequencyChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Flossing Indicator by Age
Categorical(
	X( :Age Group ),
	Indicator Group(
		:Floss After Waking Up,
		:Floss After Meal,
		:Floss Before Sleep,
		:Floss Another Time
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

## Example 8
> **Summary**: Perform categorical analysis with multiple delimited and test each response

<!-- Keywords: #Categorical, #Response, #Chart, #CrosstabTransposed, #FrequencyChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Brushing Delimited by Age
Categorical(
	X( :Age Group ),
	Multiple Delimited(
		:Brush Delimited
	),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

## Example 9
> **Summary**: Perform categorical analysis with multiple delimited and test each response

<!-- Keywords: #Categorical, #Response, #Chart, #CrosstabTransposed, #FrequencyChart -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Flossing Delimited by Age
Categorical(
	X( :Age Group ),
	Multiple Delimited(
		:Floss Delimited
	),
	Share Of Responses( 0 ),
	Share Chart( 0 ),
	Frequency Chart( 1 ),
	Crosstab Transposed( 1 ),
	Legend( 0 ),
	Test Each Response( 1 )
);
```

## Example 10
> **Summary**: Perform categorical analysis with free text

<!-- Keywords: #Categorical, #Column, #CrosstabTransposed, #FreeText, #Legend -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Consumer Preferences.jmp");
// Free Text Floss Reasons
Categorical(
	Free Text(
		:Reasons Not to Floss,
		<<Score Words by Column( :Floss ),
		<<Save Word Table
	),
	Crosstab Transposed( 1 ),
	Legend( 0 )
);
```

## Example 11
> **Summary**: Create a categorical analysis comparing various responses across different age groups using the Categorical function.

<!-- Keywords: #Categorical, #Legend, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Discovery US 2018 Survey.jmp");
// Categorical by Age
Categorical(
	X( :Age ),
	Responses( :Handedness ),
	Responses( :Analysis ),
	Responses( :BBQ ),
	Responses( :Pie ),
	Responses( :Discoveries ),
	Responses( :OS ),
	Responses( :Usage ),
	Responses( :Boy Band ),
	Responses( :DGA ),
	Responses( :Type ),
	Legend( 0 )
);
```

## Example 12
> **Summary**: Categorize selected variables and create indicator groups for further analysis.

<!-- Keywords: #Categorical, #Group, #IndicatorGroup -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failures3Indicators.jmp");
// Categorical
Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion,
		:doping, :metallization,
		:miscellaneous, :oxide defect,
		:silicon defect
	)
);
```

## Example 13
> **Summary**: Analyze a dataset containing failure frequencies using categorical analysis with sample size, date, and multiple response variables.

<!-- Keywords: #Categorical, #Frequencies, #ResponseFrequencies, #SampleSize, #Size -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3Freq.jmp");
// Categorical
Categorical(
	Sample Size( :SampleSize ),
	X( :clean, :date ),
	Response Frequencies(
		:contamination, :corrosion,
		:doping, :metallization,
		:miscellaneous, :oxide defect,
		:silicon defect
	)
);
```

## Example 14
> **Summary**: Perform Categorical Multivariate ID Analysis using the Freq, ID, X, Multiple Response by ID, and Sample Size functions.

<!-- Keywords: #Categorical, #Freq, #ID, #MultipleResponsebyID, #SampleSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3ID.jmp");
// Cat MultID
Categorical(
	Freq( :N ),
	ID( :ID ),
	X( :clean ),
	Multiple Response by ID( :failure ),
	Sample Size( :SampleSize )
);
```

## Example 15
> **Summary**: Apply categorical multivariate ID analysis using the Categorical platform with frequency, ID, X, multiple response by ID, and sample size configurations.

<!-- Keywords: #Categorical, #Freq, #ID, #MultipleResponsebyID, #SampleSize -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3ID.jmp");
// Cat MultID2
Categorical(
	Freq( :N ),
	ID( :ID ),
	X( :clean, :date ),
	Multiple Response by ID( :failure ),
	Sample Size( :SampleSize )
);
```

## Example 16
> **Summary**: Create a categorical analysis for variables and generate a frequency chart in the Categorical platform.

<!-- Keywords: #Categorical, #Response, #Chart, #FrequencyChart, #MultipleResponse -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failure3MultipleField.jmp");
// Categorical
Categorical(
	X( :clean, :date ),
	Multiple Response(
		:Failure1, :Failure2, :Failure3
	),
	Frequency Chart( 0 )
);
```

## Example 17
> **Summary**: Run Categorical Delimited analysis using the Categorical function with specified variables from the Failures3Delimited data table.

<!-- Keywords: #Categorical, #ID, #MultipleDelimited -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Quality Control/Failures3Delimited.jmp");
// Categorical Delimited
Categorical(
	ID( :ID ),
	X( :clean, :date ),
	Multiple Delimited( :failureS )
);
```

## Example 18
> **Summary**: Create a categorical analysis with the 'Sex' and 'Passenger Class' variables, separate responses by 'Survived' and display results in a crosstab format.

<!-- Keywords: #Categorical, #CrosstabFormat, #Format, #Legend, #Responses -->

**Code:**
```jsl
// Open data table
dt = Open("$Sample_Data/Titanic Passengers.jmp");
// Categorical
Categorical(
	X( :Sex, :Passenger Class ),
	Separate Responses( :Survived ),
	Crosstab Format( 1 ),
	Legend( 0 )
);
```

