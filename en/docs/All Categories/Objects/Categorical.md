# Categorical



## Associated Constructors

### Categorical

**Syntax:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Description:** Summarizes and analyzes categorical response data. Data can be simple responses, multiple responses, repeated measures, rater agreement, aligned responses, or free text. Includes the ability to generate custom cross tabulations of responses.

#### Aligned Responses

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		Empty(),		Empty(),		Aligned Responses(			:I am working on my career, :I want to see the world,			:My home needs some major improvements, :I have vast interests outside of work,			:I want to get my debt under control, :I come from a large family		)	));

```

#### Multiple Response (Structured)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical( Structured( :Gender, :Brush Delimited + :Floss Delimited ) );

```

#### Multiple Response with Nested Groups

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ) );

```

#### Nested within Individual Factors

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:Single Status * :Gender + :School Age Children * :Gender,		:I am working on my career + :I want to see the world	));

```

#### One Response by Two Nested Factors

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

#### Rater Agreement

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );Categorical( Rater Agreement( :A, :B, :C ) );

```

#### Repeated Measures

```jsl

dt = Open( "$SAMPLE_DATA/Presidential Elections.jmp" );Categorical(	Repeated Measures(		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n,		:"2000 Winner"n, :"2004 Winner"n, :"2008 Winner"n, :"2012 Winner"n	));

```

#### Three Responses by Two Individual Factors (Structured)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:I am working on my career + :I want to see the world,		:Gender + :Single Status + :Age Group	));

```

## Columns

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Description:** Performs a separate analysis for each level of the specified column.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Description:** Specifies a column whose values assign a frequency to each row for the analysis.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Freq( :_freqcol ));

```

### Grouping Category

**Syntax:** obj &lt;&lt; Grouping Category( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### ID

**Syntax:** obj &lt;&lt; ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**Syntax:** obj &lt;&lt; Sample Size( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

## Item Messages

### Agreement Statistic

**Syntax:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**Description:** Tests how closely raters agree with one another and if the lack of agreement is symmetrical. Available only for a Rater Agreement response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical(	Rater Agreement( :First Survey, :Second Survey ),	Freq( :Count ),	Agreement Statistic( 0 ));Wait( 1 );obj << Agreement Statistic( 1 );

```

### Aligned Responses

**Syntax:** obj = Categorical(...Aligned Responses( columns )...)

**Description:** Summarizes data from multiple columns that have the same response levels in a single report.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Aligned Responses( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Arrange in Rows

**Syntax:** obj &lt;&lt; Arrange in Rows( number )

**Description:** Arranges the reports so that they go across the page. Specify the number of reports to appear in each row.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Responses( :country ),	Legend( 0 ),	Arrange in Rows( 2 ));Wait( 1 );obj << Arrange in Rows( 1 );

```

### Binomial

**Syntax:** obj &lt;&lt; Binomial( state=0|1 )

**Description:** Performs a chi-square test of independence of response levels assuming a binomial distribution for each category. Note: Available only for multiple responses.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Cell Chisq

**Syntax:** obj &lt;&lt; Cell Chisq( state=0|1 )

**Description:** Shows or hides p-values for each cell in the table for a chi-square test of independence. The p-values are colored and shaded according to whether the count is larger or smaller than the expected count.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**Syntax:** obj &lt;&lt; Cell Chisq FDR( state=0|1 )

**Description:** Shows or hides false discovery rate (FDR) adjusted p-values for each cell in the table for a chi-square test of independence. The FDR adjusted p-values are colored and shaded according to whether the count is larger or smaller than the expected count.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**Syntax:** obj &lt;&lt; ChiSquare Test Choices( "Both LR and Pearson"|"LR Only"|"Pearson Only" )

**Description:** Specifies which tests are displayed in the tests for homogeneity, either the Likelihood Ratio Chi-Squared, the Pearson Chi-Squared, or both. Available only for a single response.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << ChiSquare Test Choices( "Pearson Only" );obj << Test Response Homogeneity( 1 );

```

### Compare Each Cell

**Syntax:** obj &lt;&lt; Compare Each Cell( state=0|1 )

**Description:** Compares each level of the response versus all other levels combined across levels of a grouping variable.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**Syntax:** obj &lt;&lt; Compare Each Cell FDR( state=0|1 )

**Description:** Compares each level of the response versus all other levels combined across levels of a grouping variable, with false discovery rate (FDR) adjustment.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**Syntax:** obj &lt;&lt; Compare Each Sample( state=0|1 )

**Description:** Compares responses across levels of a grouping variable.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**Syntax:** obj &lt;&lt; Compare Each Sample FDR( state=0|1 )

**Description:** Compares responses across levels of a grouping variable with false discovery rate (FDR) adjustment.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**Syntax:** obj &lt;&lt; Conditional Association( state=0|1 )

**Description:** Shows or hides the rate of having a response in a column given the same response in a row. Available only for Multiple Response, Multiple Delimited, and Multiple Response by ID models with Unique Occurrences within ID selected.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	ID( :Response ID ),	Unique Occurrences within ID( 1 ),	Structured( :Brush, :Brush Delimited ),	Share Chart( 0 ),	Legend( 0 ),	Conditional Association( 1 ));

```

### Confidence Interval Coverage

**Syntax:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...)

**Description:** Sets the coverage of confidence intervals for rates and share of responses. The coverage is equal to (1-alpha). "0.95" by default.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));

```

### Confidence Limits Format

**Syntax:** obj &lt;&lt; Confidence Limits Format( format, &lt;options&gt; )

**Description:** Formats the confidence limits for Share and Rate in the table. The default value is "Percent", 6, 2.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));Wait( 1 );obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**Syntax:** obj &lt;&lt; Contents Summary( state=0|1 )

**Description:** Collects all tests and p-values into one report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Contents Summary( 1 );

```

### Count Missing Responses

**Syntax:** obj = Categorical(...Count Missing Responses( state=0|1 )...)

**Description:** Includes missing values as a response category.

```jsl

dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );Categorical( X( :Trial 1 ), Count Missing Responses( 1 ), Responses( :Trial 4 ) );

```

### Count Test

**Syntax:** obj &lt;&lt; Count Test( state=0|1 )

**Description:** Performs a chi-square test of independence of rates using Poisson regression. Note: Available only for multiple responses.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Crosstab

**Syntax:** obj &lt;&lt; Crosstab( state=0|1 )

**Description:** Generates a cross tabulation of counts with the response levels defining  the columns and the grouping variable levels defining the rows. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );obj << Crosstab( 1 );

```

### Crosstab Transposed

**Syntax:** obj &lt;&lt; Crosstab Transposed( state=0|1 )

**Description:** Generates a cross tabulation of counts with the response levels defining  the rows and the grouping variable levels defining the columns.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );

```

### Exclude Nonresponses

**Syntax:** obj &lt;&lt; Exclude Nonresponses( state=0|1 )

**Description:** Excludes nonresponses for count and homogeneity tests when comparing multiple response categories. Empty or missing cells are treated as nonresponses. Using a separate category for none-of-these is recommended.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	Structured( :"What is your gender ? "n, :"What colors do you like? (with nonresponse)"n ),	Share Chart( 0 ),	Homogeneity Test( 1 ));Wait( 1 );obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**Syntax:** obj &lt;&lt; FDR Adjusted PValues( state=0|1 )

**Description:** False discovery rate adjusted p-values (Benjamini and Hochberg, 1995) are used when there are many p-values and it becomes easy for some tests to be significant by chance alone.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << FDR Adjusted PValues( 1 );

```

### Filter

**Syntax:** obj &lt;&lt; Filter( state=0|1 )

**Description:** Filters data to specific groups or ranges, locally.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	Responses( :country ),	Legend( 0 ),	Local Data Filter(		Location( {634, 43} ),		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),		Add Filter( columns( :sex ), Where( :sex == "Female" ) )	));Wait( 1.0 );obj << Filter( 0 );

```

### Force Crosstab Shading

**Syntax:** obj &lt;&lt; Force Crosstab Shading( state=0|1 )

**Description:** Uses shading on Crosstab reports even if Global Preferences are set not to shade. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Force Crosstab Shading( 0 );Wait( 1 );obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**Syntax:** obj &lt;&lt; Force Labels Horizontal( state=0|1 )

**Description:** Uses horizontal labels on the crosstab table regardless of the length of the text. The label text is wrapped rather than rotated.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );Wait( 1 );obj << Force Labels Horizontal( 1 );

```

### Format Elements

**Syntax:** obj &lt;&lt; Format Elements

**Description:** Opens a window that enables you to specify formats for various elements of the report.

### Frequencies

**Syntax:** obj &lt;&lt; Frequencies( state=0|1 )

**Description:** Shows or hides the Frequency table in the report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Frequencies( 0 ));Wait( 1 );obj << Frequencies( 1 );

```

### Frequencies Format

**Syntax:** obj &lt;&lt; Frequencies Format( format, &lt;options&gt; )

**Description:** Formats the Frequency values in the table. The default value is "Fixed Dec", 7, 0.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**Syntax:** obj &lt;&lt; Frequency Chart( state=0|1 )

**Description:** Shows or hides the Frequency Chart in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Frequency Chart( 1 );

```

### Grouping Option

**Syntax:** obj = Categorical(...Grouping Option( "Combinations"|"Each Individually"|"Both" )...)

**Description:** Sets the grouping method for the X variables.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Aligned Responses( :country, :size ),	Grouping Option( Each Individually ));

```

### Hide Nonsignificant

**Syntax:** obj &lt;&lt; Hide Nonsignificant( state=0|1 )

**Description:** Suppresses reports that are non-significant.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**Syntax:** obj &lt;&lt; Highlight Cells

**Description:** Highlights the cells that satisfy the specified conditions.

#### Highlight by Category

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Color( "Magenta" ), Category( "30-34" ) ),	Highlight Cells( Share >= 0.46, Color( "Green" ), Category( "5 to 10 years" ) ),	Highlight Cells( Share < 0.5, Color( "Blue" ), Category( "Agree" ) ),	Highlight Cells( Mean Score <= 2, Color( "Yellow" ), Category( "25-29" ) ));

```

#### Highlight by Column

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Column( :Age Group ) ),	Highlight Cells( Share >= 0.46, Color( "Fuchsia" ), Column( :Brush ) ));

```

#### Highlight by Highest and Lowest in Table

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );Categorical(	ID( :ID ),	X( :clean, :date ),	Multiple Delimited( :failures ),	Share Chart( 1 ),	Highlight Cells( Highest in Table( Freq ), Color( "Green" ) ),	Highlight Cells( Lowest in Table( Freq ), Color( "Purple" ) ));

```

#### Highlight by Highest Response and Highest Sample

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Highest Response( Share ), Color( "Green" ) ),	Highlight Cells( Highest Sample( Share ), Color( "Purple" ) ));

```

#### Highlight by Lowest Response and Lowest Sample

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Lowest Response( Share ), Color( "Green" ) ),	Highlight Cells( Lowest Sample( Share ), Color( "Purple" ) ));

```

#### Highlight by Mean Score and Share

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	X( :Gender, :Age Group ),	Responses( :Job Satisfaction ),	Responses( :I am working on my career ),	Mean Score( 1 ),	Mean Std Error( 1 ),	Mean Confidence Interval( 1 ),	Std Dev Score( 1 ),	Share Chart( 0 ),	Highlight Cells( Mean Score > 2.3, Color( "Blue" ) ),	Highlight Cells( Share >= 0.6, Color( "Cyan" ) ),	Highlight Cells( Share > 0.7, Color( "Green" ) ));

```

### Homogeneity Test

**Syntax:** obj &lt;&lt; Homogeneity Test( state=0|1 )

**Description:** Performs a chi-square test of independence of response levels assuming a binomial distribution for each category. Note: Available only for multiple responses.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Include Response Categories in Excluded Rows

**Syntax:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**Description:** Specifies that the report include response categories that appear only in excluded rows. The counts for these categories are zero.

**JMP Version Added:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Select Where( :size == "Small" );dt << Exclude;obj = Categorical(	Include Response Categories in Excluded Rows( 1 ),	X( :marital status ),	Responses( :size ));

```

### Include Responses Not in Data

**Syntax:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...)

**Description:** Shows response categories that have value labels, even if they do not occur in the data.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:type << Set Property(	Value Labels,	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" = "Work"});obj = Categorical( X( :marital status ), Responses( :type ) );obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**Syntax:** obj = Categorical(...Indicator Group( columns )...)

**Description:** Summarizes data from a multiple response variable where the responses are in multiple indicator columns.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Indicator Group(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	));

```

### Mean Confidence Interval

**Syntax:** obj &lt;&lt; Mean Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the means

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Confidence Interval( 1 );

```

### Mean Score

**Syntax:** obj &lt;&lt; Mean Score( state=0|1 )

**Description:** Displays the mean score, based on raw numeric codes or value scores, in the crosstab table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );

```

### Mean Score Comparisons

**Syntax:** obj &lt;&lt; Mean Score Comparisons( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**Syntax:** obj &lt;&lt; Mean Score Comparisons FDR( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**Syntax:** obj &lt;&lt; Mean Score Comparisons as Suffix( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**Syntax:** obj &lt;&lt; Mean Std Error( state=0|1 )

**Description:** Shows or hides the standard error for the means

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Std Error( 1 );

```

### Means Format

**Syntax:** obj &lt;&lt; Means Format( format, &lt;options&gt; )

**Description:** Formats the mean scores in the table. The default value is "Fixed", 6, 2.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );Wait( 1 );obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**Syntax:** obj = Categorical(...Multiple Delimited( column )...)

**Description:** Summarizes data from a multiple response variable where the responses are in a single column and each response is separated by a comma, semicolon, or tab.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );

```

### Multiple Response

**Syntax:** obj = Categorical(...Multiple Response( columns )...)

**Description:** Summarizes data from a multiple response variable where each possible response is recorded in its own individual column.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Multiple Response( :Failure1, :Failure2, :Failure3 ),	Frequency Chart( 0 ));

```

### Multiple Response by ID

**Syntax:** obj = Categorical(...Multiple Response by ID( column )...)

**Description:** Summarizes data from a multiple response variable where there is a single column of responses and a second column containing an ID for the subject.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));

```

### Order Response Levels High to Low

**Syntax:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...)

**Description:** Reorders the report so that categories with the highest value are at the top.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Order Response Levels High to Low( 1 ),	Responses( :country ));

```

### Order by Significance

**Syntax:** obj &lt;&lt; Order by Significance( state=0|1 )

**Description:** Reorders the reports so that the most significant reports are at the top.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Order by Significance( 1 );

```

### Poisson

**Syntax:** obj &lt;&lt; Poisson( state=0|1 )

**Description:** Performs a chi-square test of independence of rates using Poisson regression. Note: Available only for multiple responses.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Rate Confidence Interval

**Syntax:** obj &lt;&lt; Rate Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the rate probability. The confidence interval is a normal interval using the standard errors from the Poisson linear model.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**Syntax:** obj &lt;&lt; Rate Per Case( state=0|1 )

**Description:** Shows or hides the Rate per Case table in the report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Rate Per Case( 0 ));Wait( 1 );obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**Syntax:** obj &lt;&lt; Rate per Case Responding( state=0|1 )

**Description:** Shows or hides the rate of response per case responding (excluding missing).

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**Syntax:** obj = Categorical(...Rater Agreement( columns )...)

**Description:** Summarizes data from multiple columns where each column is a rating for the same question or item, but is given by a different individual (rater).

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Relative Risk

**Syntax:** obj &lt;&lt; Relative Risk( state=0|1, {}, {level of interest} )

**Description:** Shows or hides the relative risks for a two-level grouping variable for each level of the response. Available when the grouping variable has two levels and either the response has two levels or is a multiple response and the Unique occurrences within ID option has been selected.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect,	),	Sample Size( :SampleSize ),	X( :clean ));obj << Relative Risk( 1, {}, {"after"} );

```

### Repeated Measures

**Syntax:** obj = Categorical(...Repeated Measures( columns )...)

**Description:** Summarizes data from multiple columns where each column contains responses to the same question made at different time points.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Response Frequencies

**Syntax:** obj = Categorical(...Response Frequencies( columns )...)

**Description:** Summarizes a multiple response variable where the frequency of each possible response is recorded in its own column.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	X( :clean, :date ),	Sample Size( :SampleSize ));

```

### Response Levels

**Syntax:** obj &lt;&lt; Response Levels( state=0|1 )

**Description:** Shows or hides data levels for each response. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Response Levels( 0 );Wait( 1 );obj << Response Levels( 1 );

```

### Responses

**Syntax:** obj = Categorical(...Responses( column )...)

**Description:** Summarizes responses from a single column. If multiple columns are selected, the categorical report contains a separate report for each individual column.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save Contingency Table

**Syntax:** obj &lt;&lt; Save Contingency Table

**Description:** Saves the values in the crosstab table to a new data table. The new table uses the original column names.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Contingency Table;

```

### Save DocX File

**Syntax:** obj &lt;&lt; Save DocX File

**Description:** Undocumented and Experimental Feature

### Save Excel File

**Syntax:** obj &lt;&lt; Save Excel File

**Description:** Saves the tables to an Excel spreadsheet file.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Excel File(	"$DOCUMENTS\ExcelCarSize.xlsx",	Separate Rows for Each Cell Statistic( 1 ));

```

### Save Frequencies

**Syntax:** obj &lt;&lt; Save Frequencies

**Description:** Saves the frequencies to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Frequencies;

```

### Save Mean Scores

**Syntax:** obj &lt;&lt; Save Mean Scores

**Description:** Saves the mean scores for each sample group to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Mean Scores;

```

### Save Rate Per Case

**Syntax:** obj &lt;&lt; Save Rate Per Case

**Description:** Saves the rate per case to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Rate Per Case;

```

### Save Share of Responses

**Syntax:** obj &lt;&lt; Save Share of Responses

**Description:** Saves the share of responses to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Share of Responses;

```

### Save Stacked Table

**Syntax:** obj &lt;&lt; Save Stacked Table

**Description:** Saves the values in the crosstab table to a new data table. The new table uses general column names.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Stacked Table;

```

### Save Test Homogeneity

**Syntax:** obj &lt;&lt; Save Test Homogeneity

**Description:** Saves the results from the tests for homogeneity to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Test Homogeneity;

```

### Save Test Rates

**Syntax:** obj &lt;&lt; Save Test Rates

**Description:** Saves the results of the Test Multiple Response option to a new data table.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Test Rates;

```

### Save Transposed Frequencies

**Syntax:** obj &lt;&lt; Save Transposed Frequencies

**Description:** Saves the transposed frequencies to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**Syntax:** obj &lt;&lt; Save Transposed Rate Per Case

**Description:** Saves the transformed rate per case to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**Syntax:** obj &lt;&lt; Save Transposed Share of Responses

**Description:** Saves the transposed share of responses to a new table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**Syntax:** obj &lt;&lt; Save tTests and pValues

**Description:** Save t tests and p-values from the Compare Means tests to a new data table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save ttests and pvalues;

```

### Share Chart

**Syntax:** obj &lt;&lt; Share Chart( state=0|1 )

**Description:** Shows or hides the Share Chart in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Share Chart( 0 ));Wait( 1 );obj << Share Chart( 1 );

```

### Share Confidence Interval

**Syntax:** obj &lt;&lt; Share Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the share response probability. The confidence interval is constructed using Wilson&apos;s Score test method.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**Syntax:** obj &lt;&lt; Share Of Responses( state=0|1 )

**Description:** Shows or hides the Share of Responses table in the report. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Share of Responses( 0 ));Wait( 1 );obj << Share of Responses( 1 );

```

### Shares and Rates Format

**Syntax:** obj &lt;&lt; Shares and Rates Format( format, &lt;options&gt; )

**Description:** Formats the Share, Rate, and Rate per Response values in the table. The default value is "Percent", 6, 1.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**Syntax:** obj = Categorical(...Shorten Labels( state=0|1 )...)

**Description:** Shortens labels by removing common prefixes and suffixes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Age Range",	Numeric,	"Continuous",	Formula( :age > 12 ),	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} ));obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );Wait( 2 );obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**Syntax:** obj &lt;&lt; Show Columns Used in Report( state=0|1 )

**Description:** Shows or hides Columns Used in Report information. This option affects only columns that have an SPSS or SAS Name or SPSS or SAS Label Column Property.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:country << Set Property( "SAS Label", "Country of Manufacture Origin" );obj = Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**Syntax:** obj &lt;&lt; Show Highlight Legend( state=0|1 )

**Description:** On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.8 ),	Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) ));obj << Show Highlight Legend( 0 );Wait( 1 );obj << Show Highlight Legend( 1 );

```

### Show Supercategories

**Syntax:** obj &lt;&lt; Show Supercategories( state=0|1 )

**Description:** Shows or hides supercategories. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.(			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}		)	),	Legend( 0 ));obj << Show Supercategories( 0 );Wait( 1 );obj << Show Supercategories( 1 );

```

### Show Warnings

**Syntax:** obj &lt;&lt; Show Warnings( state=0|1 )

**Description:** Shows warnings for chi-square tests related to small sample size.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << Show Warnings( 1 );

```

### Std Dev Format

**Syntax:** obj &lt;&lt; Std Dev Format( format, &lt;options&gt; )

**Description:** Formats the standard deviation scores in the table. The default value is "Fixed", 6, 2.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );Wait( 1 );obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**Syntax:** obj &lt;&lt; Std Dev Score( state=0|1 )

**Description:** Displays the standard deviation score, based on raw numeric codes or value scores, in the crosstab table

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );

```

### Structured

**Syntax:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns... )...)

**Description:** Generates a structured cross tabulation of two or more variables.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group ));

```

### Supercategories

**Syntax:** obj &lt;&lt; Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**Description:** Specifies supercategories to locally aggregate response categories.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.(			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}		)	),	Legend( 0 ));

```

### Test Response Homogeneity

**Syntax:** obj &lt;&lt; Test Response Homogeneity( state=0|1 )

**Description:** Tests the response column for homogeneity, giving both Likelihood Ratio and Pearson Chi-Squared tests. Available only for a single response.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Test Response Homogeneity( 1 );

```

### Total Cases

**Syntax:** obj &lt;&lt; Total Cases( state=0|1 )

**Description:** For multiple-response variables, shows the total number of cases in the crosstab table. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response(		:I like the color blue., :I like the color red., :I like the color orange.	));obj << Total Cases( 0 );Wait( 1 );obj << Total Cases( 1 );

```

### Total Cases Responding

**Syntax:** obj &lt;&lt; Total Cases Responding( state=0|1 )

**Description:** For multiple-response variables, shows the total number of cases who responded at least once in the crosstab table. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response(		:I like the color blue., :I like the color red., :I like the color orange.	));obj << Total Cases Responding( 0 );Wait( 1 );obj << Total Cases Responding( 1 );

```

### Total Responses

**Syntax:** obj &lt;&lt; Total Responses( state=0|1 )

**Description:** Shows the total number of responses in the crosstab table. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Total Responses( 0 );Wait( 1 );obj << Total Responses( 1 );

```

### Totals First

**Syntax:** obj &lt;&lt; Totals First( state=0|1 )

**Description:** Shows the Response Totals near the top or left of the crosstab, but only if the totals are the same across multiple tables down each column.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Categorical(	Structured(		:Single Status + :School Age Children,		:Employee Tenure + :Position Tenure + :Age Group	),	Frequencies( 0 ),	Totals First( 1 ),	Total Responses( 0 ));

```

### Transition Report

**Syntax:** obj &lt;&lt; Transition Report( state=0|1 )

**Description:** Shows or hides a report showing how the categories have changed across time. Available only for a Repeated Measures model. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );obj << Transition Report( 1 );

```

### Transposed Freq Chart

**Syntax:** obj &lt;&lt; Transposed Freq Chart( state=0|1 )

**Description:** Shows or hides a transposed frequency chart that contains a column for each response level and horizontal rows for the different sample levels.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :marital status ), Responses( :country ) );obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**Syntax:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...)

**Description:** Aligns multiple responses across rows that have the same ID.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Unique occurrences within ID( 1 ),	Multiple Response by ID( :failure ));

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

