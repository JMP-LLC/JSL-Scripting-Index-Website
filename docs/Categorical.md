# Categorical



### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Agreement Statistic

**Syntax:** obj << Agreement Statistic( state=0|1 )

**Description:** Tests how closely raters agree with one another and if the lack of agreement is symmetrical. Available only for a Rater Agreement response. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count ),
	Agreement Statistic( 0 )
);
Wait( 1 );
obj << Agreement Statistic( 1 );

```

### Aligned Responses

**Syntax:** obj = Categorical(...Aligned Responses( columns )...)

**Description:** Summarizes data from multiple columns that have the same response levels in a single report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Aligned Responses( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Search by name**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Arrange in Rows

**Syntax:** obj << Arrange in Rows( number )

**Description:** Arranges the reports so that they go across the page. Specify the number of reports to appear in each row.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Responses( :country ),
	Legend( 0 ),
	Arrange in Rows( 2 )
);
Wait( 1 );
obj << Arrange in Rows( 1 );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Binomial

**Syntax:** obj << Binomial( state=0|1 )

**Description:** Performs a chi-square test of independence of response levels assuming a binomial distribution for each category. Note: Available only for multiple responses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Description:** Broadcasts a message to a platform. If return results from individual objects are tables, they are concatenated if possible, and the final format is identical to either the result from the Save Combined Table option in a Table Box or the result from the Concatenate option using a Source column. Other than those, results are stored in a list and returned.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );

```

### Categorical

**Syntax:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Description:** Summarizes and analyzes categorical response data. Data can be simple responses, multiple responses, repeated measures, rater agreement, aligned responses, or free text. Includes the ability to generate custom cross tabulations of responses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Chisq

**Syntax:** obj << Cell Chisq( state=0|1 )

**Description:** Shows or hides p-values for each cell in the table for a chi-square test of independence. The p-values are colored and shaded according to whether the count is larger or smaller than the expected count.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**Syntax:** obj << Cell Chisq FDR( state=0|1 )

**Description:** Shows or hides false discovery rate (FDR) adjusted p-values for each cell in the table for a chi-square test of independence. The FDR adjusted p-values are colored and shaded according to whether the count is larger or smaller than the expected count.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**Syntax:** obj << ChiSquare Test Choices( "Both LR and Pearson"|"LR Only"|"Pearson Only" )

**Description:** Specifies which tests are displayed in the tests for homogeneity, either the Likelihood Ratio Chi-Squared, the Pearson Chi-Squared, or both. Available only for a single response.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << ChiSquare Test Choices( "Pearson Only" );
obj << Test Response Homogeneity( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Description:** Adds a control panel for changing the platform&apos;s variables

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Compare Each Cell

**Syntax:** obj << Compare Each Cell( state=0|1 )

**Description:** Compares each level of the response versus all other levels combined across levels of a grouping variable.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**Syntax:** obj << Compare Each Cell FDR( state=0|1 )

**Description:** Compares each level of the response versus all other levels combined across levels of a grouping variable, with false discovery rate (FDR) adjustment.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**Syntax:** obj << Compare Each Sample( state=0|1 )

**Description:** Compares responses across levels of a grouping variable.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**Syntax:** obj << Compare Each Sample FDR( state=0|1 )

**Description:** Compares responses across levels of a grouping variable with false discovery rate (FDR) adjustment.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**Syntax:** obj << Conditional Association( state=0|1 )

**Description:** Shows or hides the rate of having a response in a column given the same response in a row. Available only for Multiple Response, Multiple Delimited, and Multiple Response by ID models with Unique Occurrences within ID selected.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	ID( :Response ID ),
	Unique Occurrences within ID( 1 ),
	Structured( :Brush, :Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Conditional Association( 1 )
);

```

### Confidence Interval Coverage

**Syntax:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...)

**Description:** Sets the coverage of confidence intervals for rates and share of responses. The coverage is equal to (1-alpha). "0.95" by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);

```

### Confidence Limits Format

**Syntax:** obj << Confidence Limits Format( format, <options> )

**Description:** Formats the confidence limits for Share and Rate in the table. The default value is "Percent", 6, 2.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);
Wait( 1 );
obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**Syntax:** obj << Contents Summary( state=0|1 )

**Description:** Collects all tests and p-values into one report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Contents Summary( 1 );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Copy Script;

```

### Count Missing Responses

**Syntax:** obj = Categorical(...Count Missing Responses( state=0|1 )...)

**Description:** Includes missing values as a response category.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );
Categorical( X( :Trial 1 ), Count Missing Responses( 1 ), Responses( :Trial 4 ) );

```

### Count Test

**Syntax:** obj << Count Test( state=0|1 )

**Description:** Performs a chi-square test of independence of rates using Poisson regression. Note: Available only for multiple responses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Crosstab

**Syntax:** obj << Crosstab( state=0|1 )

**Description:** Generates a cross tabulation of counts with the response levels defining  the columns and the grouping variable levels defining the rows. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );
obj << Crosstab( 1 );

```

### Crosstab Transposed

**Syntax:** obj << Crosstab Transposed( state=0|1 )

**Description:** Generates a cross tabulation of counts with the response levels defining  the rows and the grouping variable levels defining the columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Description:** Move the data table window for this analysis to the front.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Data Table Window;

```

### Exclude Nonresponses

**Syntax:** obj << Exclude Nonresponses( state=0|1 )

**Description:** Excludes nonresponses for count and homogeneity tests when comparing multiple response categories. Empty or missing cells are treated as nonresponses. Using a separate category for none-of-these is recommended.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	Structured(
		:"What is your gender ? "n, :"What colors do you like? (with nonresponse)"n
	),
	Share Chart( 0 ),
	Homogeneity Test( 1 )
);
Wait( 1 );
obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**Syntax:** obj << FDR Adjusted PValues( state=0|1 )

**Description:** False discovery rate adjusted p-values (Benjamini and Hochberg, 1995) are used when there are many p-values and it becomes easy for some tests to be significant by chance alone.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << FDR Adjusted PValues( 1 );

```

### Filter

**Syntax:** obj << Filter( state=0|1 )

**Description:** Filters data to specific groups or ranges, locally.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Responses( :country ),
	Legend( 0 ),
	Local Data Filter(
		Location( {634, 43} ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
		Add Filter( columns( :sex ), Where( :sex == "Female" ) )
	)
);
Wait( 1.0 );
obj << Filter( 0 );

```

### Force Crosstab Shading

**Syntax:** obj << Force Crosstab Shading( state=0|1 )

**Description:** Uses shading on Crosstab reports even if Global Preferences are set not to shade. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Force Crosstab Shading( 0 );
Wait( 1 );
obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**Syntax:** obj << Force Labels Horizontal( state=0|1 )

**Description:** Uses horizontal labels on the crosstab table regardless of the length of the text. The label text is wrapped rather than rotated.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
Wait( 1 );
obj << Force Labels Horizontal( 1 );

```

### Format Elements

**Syntax:** obj << Format Elements

**Description:** Opens a window that enables you to specify formats for various elements of the report.

### Freq

**Syntax:** obj << Freq( column )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Freq( _freqcol )
);

```

### Frequencies

**Syntax:** obj << Frequencies( state=0|1 )

**Description:** Shows or hides the Frequency table in the report. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Frequencies( 0 )
);
Wait( 1 );
obj << Frequencies( 1 );

```

### Frequencies Format

**Syntax:** obj << Frequencies Format( format, <options> )

**Description:** Formats the Frequency values in the table. The default value is "Fixed Dec", 7, 0.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**Syntax:** obj << Frequency Chart( state=0|1 )

**Description:** Shows or hides the Frequency Chart in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Frequency Chart( 1 );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Syntax:** obj << Get Data Table

**Description:** Returns a reference to the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Description:** Return the Group Platform object if this platform is part of a Group. Otherwise, returns Empty().

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Grouping Category

**Syntax:** obj << Grouping Category( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Grouping Option

**Syntax:** obj = Categorical(...Grouping Option( "Combinations"|"Each Individually"|"Both" )...)

**Description:** Sets the grouping method for the X variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Aligned Responses( :country, :size ),
	Grouping Option( Each Individually )
);

```

### Hide Nonsignificant

**Syntax:** obj << Hide Nonsignificant( state=0|1 )

**Description:** Suppresses reports that are non-significant.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**Syntax:** obj << Highlight Cells

**Description:** Highlights the cells that satisfy the specified conditions.

### Homogeneity Test

**Syntax:** obj << Homogeneity Test( state=0|1 )

**Description:** Performs a chi-square test of independence of response levels assuming a binomial distribution for each category. Note: Available only for multiple responses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

```

### ID

**Syntax:** obj << ID( column )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Response Categories in Excluded Rows

**Syntax:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**Description:** Specifies that the report include response categories that appear only in excluded rows. The counts for these categories are zero.

**JMP Version Added:** 15

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Select Where( :size == "Small" );
dt << Exclude;
obj = Categorical(
	Include Response Categories in Excluded Rows( 1 ),
	X( :marital status ),
	Responses( :size )
);

```

### Include Responses Not in Data

**Syntax:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...)

**Description:** Shows response categories that have value labels, even if they do not occur in the data.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:type << Set Property(
	Value Labels(
		{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" = "Work"}
	)
);
obj = Categorical( X( :marital status ), Responses( :type ) );
obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**Syntax:** obj = Categorical(...Indicator Group( columns )...)

**Description:** Summarizes data from a multiple response variable where the responses are in multiple indicator columns.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	)
);

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Mean Confidence Interval

**Syntax:** obj << Mean Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the means

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Confidence Interval( 1 );

```

### Mean Score

**Syntax:** obj << Mean Score( state=0|1 )

**Description:** Displays the mean score, based on raw numeric codes or value scores, in the crosstab table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );

```

### Mean Score Comparisons

**Syntax:** obj << Mean Score Comparisons( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**Syntax:** obj << Mean Score Comparisons FDR( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**Syntax:** obj << Mean Score Comparisons as Suffix( state=0|1 )

**Description:** Compares the mean scores across grouping categories.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**Syntax:** obj << Mean Std Error( state=0|1 )

**Description:** Shows or hides the standard error for the means

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Std Error( 1 );

```

### Means Format

**Syntax:** obj << Means Format( format, <options> )

**Description:** Formats the mean scores in the table. The default value is "Fixed", 6, 2.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );
Wait( 1 );
obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**Syntax:** obj = Categorical(...Multiple Delimited( column )...)

**Description:** Summarizes data from a multiple response variable where the responses are in a single column and each response is separated by a comma, semicolon, or tab.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );
obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );

```

### Multiple Response

**Syntax:** obj = Categorical(...Multiple Response( columns )...)

**Description:** Summarizes data from a multiple response variable where each possible response is recorded in its own individual column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Multiple Response( :Failure1, :Failure2, :Failure3 ),
	Frequency Chart( 0 )
);

```

### Multiple Response by ID

**Syntax:** obj = Categorical(...Multiple Response by ID( column )...)

**Description:** Summarizes data from a multiple response variable where there is a single column of responses and a second column containing an ID for the subject.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Order Response Levels High to Low

**Syntax:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...)

**Description:** Reorders the report so that categories with the highest value are at the top.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Order Response Levels High to Low( 1 ),
	Responses( :country )
);

```

### Order by Significance

**Syntax:** obj << Order by Significance( state=0|1 )

**Description:** Reorders the reports so that the most significant reports are at the top.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Order by Significance( 1 );

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Poisson

**Syntax:** obj << Poisson( state=0|1 )

**Description:** Performs a chi-square test of independence of rates using Poisson regression. Note: Available only for multiple responses.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Rate Confidence Interval

**Syntax:** obj << Rate Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the rate probability. The confidence interval is a normal interval using the standard errors from the Poisson linear model.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );
obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**Syntax:** obj << Rate Per Case( state=0|1 )

**Description:** Shows or hides the Rate per Case table in the report. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Rate Per Case( 0 )
);
Wait( 1 );
obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**Syntax:** obj << Rate per Case Responding( state=0|1 )

**Description:** Shows or hides the rate of response per case responding (excluding missing).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**Syntax:** obj = Categorical(...Rater Agreement( columns )...)

**Description:** Summarizes data from multiple columns where each column is a rating for the same question or item, but is given by a different individual (rater).

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relative Risk

**Syntax:** obj << Relative Risk( state=0|1, {}, {level of interest} )

**Description:** Shows or hides the relative risks for a two-level grouping variable for each level of the response. Available when the grouping variable has two levels and either the response has two levels or is a multiple response and the Unique occurrences within ID option has been selected.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect,
	),
	Sample Size( :SampleSize ),
	X( :clean )
);
obj << Relative Risk( 1, {}, {"after"} );

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj << Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Repeated Measures

**Syntax:** obj = Categorical(...Repeated Measures( columns )...)

**Description:** Summarizes data from multiple columns where each column contains responses to the same question made at different time points.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Report View( "Summary" );

```

### Response Frequencies

**Syntax:** obj = Categorical(...Response Frequencies( columns )...)

**Description:** Summarizes a multiple response variable where the frequency of each possible response is recorded in its own column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	X( :clean, :date ),
	Sample Size( :SampleSize )
);

```

### Response Levels

**Syntax:** obj << Response Levels( state=0|1 )

**Description:** Shows or hides data levels for each response. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Response Levels( 0 );
Wait( 1 );
obj << Response Levels( 1 );

```

### Responses

**Syntax:** obj = Categorical(...Responses( column )...)

**Description:** Summarizes responses from a single column. If multiple columns are selected, the categorical report contains a separate report for each individual column.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**Syntax:** obj << Sample Size( column )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Creates a JSL script to produce this analysis, and save it as a table property in the data table. You can specify a name for the script. The Append Suffix option appends a numeric suffix to the script name, which differentiates the script from an existing script with the same name. The Prompt option prompts the user to specify a script name. The Replace option replaces an existing script with the same name.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Contingency Table

**Syntax:** obj << Save Contingency Table

**Description:** Saves the values in the crosstab table to a new data table. The new table uses the original column names.

**JMP Version Added:** 14

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Contingency Table;

```

### Save Excel File

**Syntax:** obj << Save Excel File

**Description:** Saves the tables to an Excel spreadsheet file.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Excel File(
	"$DOCUMENTS\ExcelCarSize.xlsx",
	Separate Rows for Each Cell Statistic( 1 )
);

```

### Save Frequencies

**Syntax:** obj << Save Frequencies

**Description:** Saves the frequencies to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Frequencies;

```

### Save Mean Scores

**Syntax:** obj << Save Mean Scores

**Description:** Saves the mean scores for each sample group to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Mean Scores;

```

### Save Rate Per Case

**Syntax:** obj << Save Rate Per Case

**Description:** Saves the rate per case to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Rate Per Case;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Script Window;

```

### Save Share of Responses

**Syntax:** obj << Save Share of Responses

**Description:** Saves the share of responses to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Share of Responses;

```

### Save Stacked Table

**Syntax:** obj << Save Stacked Table

**Description:** Saves the values in the crosstab table to a new data table. The new table uses general column names.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Stacked Table;

```

### Save Test Homogeneity

**Syntax:** obj << Save Test Homogeneity

**Description:** Saves the results from the tests for homogeneity to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Test Homogeneity;

```

### Save Test Rates

**Syntax:** obj << Save Test Rates

**Description:** Saves the results of the Test Multiple Response option to a new data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Test Rates;

```

### Save Transposed Frequencies

**Syntax:** obj << Save Transposed Frequencies

**Description:** Saves the transposed frequencies to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**Syntax:** obj << Save Transposed Rate Per Case

**Description:** Saves the transformed rate per case to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**Syntax:** obj << Save Transposed Share of Responses

**Description:** Saves the transposed share of responses to a new table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**Syntax:** obj << Save tTests and pValues

**Description:** Save t tests and p-values from the Compare Means tests to a new data table.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save ttests and pvalues;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description:** SendToEmbeddedScriptable restores settings of embedded scriptable objects.

```

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value(
				Time( 6000, Lock( 0 ), Show( 1 ) )
			)}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} )
	)
);

```

### Share Chart

**Syntax:** obj << Share Chart( state=0|1 )

**Description:** Shows or hides the Share Chart in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share Chart( 0 )
);
Wait( 1 );
obj << Share Chart( 1 );

```

### Share Confidence Interval

**Syntax:** obj << Share Confidence Interval( state=0|1 )

**Description:** Shows or hides the confidence interval for the share response probability. The confidence interval is constructed using Wilson&apos;s Score test method.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**Syntax:** obj << Share Of Responses( state=0|1 )

**Description:** Shows or hides the Share of Responses table in the report. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share of Responses( 0 )
);
Wait( 1 );
obj << Share of Responses( 1 );

```

### Shares and Rates Format

**Syntax:** obj << Shares and Rates Format( format, <options> )

**Description:** Formats the Share, Rate, and Rate per Response values in the table. The default value is "Percent", 6, 1.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**Syntax:** obj = Categorical(...Shorten Labels( state=0|1 )...)

**Description:** Shortens labels by removing common prefixes and suffixes.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Age Range",
	Numeric,
	"Continuous",
	Formula( :age > 12 ),
	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} )
);
obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );
Wait( 2 );
obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**Syntax:** obj << Show Columns Used in Report( state=0|1 )

**Description:** Shows or hides Columns Used in Report information. This option affects only columns that have an SPSS or SAS Name or SPSS or SAS Label Column Property.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:country << Set Property( "SAS Label", "Country of Manufacture Origin" );
obj = Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**Syntax:** obj << Show Highlight Legend( state=0|1 )

**Description:** On by default.

### Show Supercategories

**Syntax:** obj << Show Supercategories( state=0|1 )

**Description:** Shows or hides supercategories. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}
		)
	),
	Legend( 0 )
);
obj << Show Supercategories( 0 );
Wait( 1 );
obj << Show Supercategories( 1 );

```

### Show Warnings

**Syntax:** obj << Show Warnings( state=0|1 )

**Description:** Shows warnings for chi-square tests related to small sample size.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << Show Warnings( 1 );

```

### Std Dev Format

**Syntax:** obj << Std Dev Format( format, <options> )

**Description:** Formats the standard deviation scores in the table. The default value is "Fixed", 6, 2.

**JMP Version Added:** 19

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );
Wait( 1 );
obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**Syntax:** obj << Std Dev Score( state=0|1 )

**Description:** Displays the standard deviation score, based on raw numeric codes or value scores, in the crosstab table

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );

```

### Structured

**Syntax:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns...  )...)

**Description:** Generates a structured cross tabulation of two or more variables.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured(
		:Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group
	)
);

```

### Supercategories

**Syntax:** obj << Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**Description:** Specifies supercategories to locally aggregate response categories.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}
		)
	),
	Legend( 0 )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Test Response Homogeneity

**Syntax:** obj << Test Response Homogeneity( state=0|1 )

**Description:** Tests the response column for homogeneity, giving both Likelihood Ratio and Pearson Chi-Squared tests. Available only for a single response.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Test Response Homogeneity( 1 );

```

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Total Cases

**Syntax:** obj << Total Cases( state=0|1 )

**Description:** For multiple-response variables, shows the total number of cases in the crosstab table. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red., :I like the color orange.
	)
);
obj << Total Cases( 0 );
Wait( 1 );
obj << Total Cases( 1 );

```

### Total Cases Responding

**Syntax:** obj << Total Cases Responding( state=0|1 )

**Description:** For multiple-response variables, shows the total number of cases who responded at least once in the crosstab table. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red., :I like the color orange.
	)
);
obj << Total Cases Responding( 0 );
Wait( 1 );
obj << Total Cases Responding( 1 );

```

### Total Responses

**Syntax:** obj << Total Responses( state=0|1 )

**Description:** Shows the total number of responses in the crosstab table. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Total Responses( 0 );
Wait( 1 );
obj << Total Responses( 1 );

```

### Totals First

**Syntax:** obj << Totals First( state=0|1 )

**Description:** Shows the Response Totals near the top or left of the crosstab, but only if the totals are the same across multiple tables down each column.

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description:** Create a transform column in the local context of an object, usually a platform. The transform column is active only for the lifetime of the platform.

**JMP Version Added:** 16

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transition Report

**Syntax:** obj << Transition Report( state=0|1 )

**Description:** Shows or hides a report showing how the categories have changed across time. Available only for a Repeated Measures model. On by default.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);
obj << Transition Report( 1 );

```

### Transposed Freq Chart

**Syntax:** obj << Transposed Freq Chart( state=0|1 )

**Description:** Shows or hides a transposed frequency chart that contains a column for each response level and horizontal rows for the different sample levels.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :marital status ), Responses( :country ) );
obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**Syntax:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...)

**Description:** Aligns multiple responses across rows that have the same ID.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Unique occurrences within ID( 1 ),
	Multiple Response by ID( :failure )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...)

**Description:** Set the type of the window to be created for the report. By default a Visible report window will be created. An Invisible window will not appear on screen, but is discoverable by functions such as Window(). A Private window responds to most window messages but is not discoverable and must be addressed through the report object

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Syntax:** obj << X( column(s) )

```

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

