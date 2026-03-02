# Tabulate



## Associated Constructors

### Tabulate

**Syntax:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Description:** Creates a custom table of summary statistics of one or more variables. The variables can be grouped by one or more classification columns. Enables you to build the summary table using drag and drop operations.

#### Categories and stats

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),
Row Table( Grouping Columns( :Grade, :Age ) )
)
);

```

#### Columns by Categories

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) )
);

```

#### Frequency

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Freq( :Count ),
Add Table( Row Table( Grouping Columns( :Causes ) ) )
);

```

#### ID column

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
ID( :Division ),
Set Format( Uniform Format( 10, 2 ) ),
Add Table(
Column Table(
Statistics( Sum ),
Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
Pack(
Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
Template( "^FIRST  (^OTHERS)", "/" )
)
),
Row Table( Grouping Columns( :Mfr Name ) )
)
);

```

#### Multiple response grouping columns

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),
Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )
)
);

```

#### Multiple response page column

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = Tabulate(
Show Control Panel( 0 ),
Page Column( :family cars( "Jeep" ) ),
Add Table(
Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),
Row Table( Grouping Columns( :sex ) )
)
);

```

#### Multiple row and column tables

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :gender ) ),
Column Table( Grouping Columns( :race ) ),
Row Table( Grouping Columns( :goals ) ),
Row Table( Grouping Columns( :"Urban/Rural"n ) )
)
);

```

#### Multiple row tables

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Row Table( Grouping Columns( :Grades ) ),
Row Table( Grouping Columns( :Sports ) ),
Row Table( Grouping Columns( :Looks ) ),
Row Table( Grouping Columns( :Money ) )
)
);

```

#### Nested categories

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);

```

#### Packed columns

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Statistics( Sum, Max ),
Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
Pack(
Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
Template( "^FIRST  (^OTHERS)", "/" )
)
),
Row Table( Grouping Columns( :Mfr Name, :Engine ) )
)
);

```

#### Page column

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Page Column( :Engine( "Gas" ) ),
Add Table(
Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),
Row Table( Grouping Columns( :Mfr Name ) )
)
);

```

#### Stacked grouping columns

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :marital status ),
Add Aggregate Statistics( :marital status ),
Analysis Columns( :age ),
Statistics( Min, Max )
),
Row Table(
Grouping Columns( :sex, :country, :size ),
Add Aggregate Statistics( :sex, :country, :size ),
Stack Grouping Columns( 1 )
)
)
);

```

#### Weight

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Weight( :Weight ),
Add Table(
Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Type ) )
)
);

```

## Item Messages

### Add

**Syntax:** add (&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**Description:** Used with Modify Table to add columns and statistics to an existing table. Also serves as an alias for Add Table

#### Add stat after named

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	Add( After( Statistics( max ) ), Statistics( Range ) )
);

```

#### Add analysis column before named

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Column Table( Analysis Columns( :weight ) ) )
);
Wait( 0 );
obj << modify table(
column table( 1 ),
Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) )
);

```

#### Add stat before first

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :Type ),
Analysis Columns( :"Sales ($M)"n, :Assets ),
statistics( min, mean, max )
)
)
);
Wait( 0 );
obj << modify table( column table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### Add stat before index

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :Type ),
Analysis Columns( :"Sales ($M)"n, :Assets ),
statistics( min, mean, max )
)
)
);
Wait( 0 );
obj << modify table(
column table( 1 ),
Add( Before( Statistics( 2 ) ), Statistics( Median ) )
);

```

### Add Table

**Syntax:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**Description:** Adds a table to the window if there is no current table or appends a table to the existing table object.

#### Add to empty

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate( Show Control Panel( 0 ) );
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add Table( row table( grouping column( :age ) ) );

```

#### Add to exisiting

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

### Aggregate Statistics

**Syntax:** Aggregate Statistics( column )

**Description:** Adds a separate column for each level of the specified column together with a summation column to the current table. When scripting, the Aggregate Statistics message must be within either a Column Table message or a Row Table message.

#### Set when adding to existing

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Column Table( Analysis columns( :OZONE ), statistics( mean ) ) )
);
obj << modify table(
row table( 1 ),
Grouping Columns( :Region ),
aggregate statistics( :Region )
);

```

#### Set when adding to new

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis columns( :OZONE ), statistics( mean ) ),
Row Table( Grouping Columns( :Region ), aggregate statistics( :Region ) )
)
);

```

### Analysis Columns

**Syntax:** Analysis Columns( Column(s) )

**Description:** Adds analysis columns to the current table. It can be used with the Add Table command or Modify Table command.

#### Add new

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Region ) )
)
);

```

#### Add to existing

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Region ) )
)
);
obj << modify table( column table( 1 ), analysis columns( :CO ) );

```

### Change Item Label

**Syntax:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**Description:** Changes the label on a text entry field in the table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Columns by Categories

**Syntax:** Columns by Categories( column1, column2, ...) )

**Description:** Adds a cross-tabulation of the column names and the categories gathered for columns with similar values to the table.  When scripting, the Columns by Categories message must be within either a Column Table message or a Row Table message.

#### Add to existing

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) )
);
obj << modify table( row table( 1 ), columns by categories( :Money ) );

```

#### Add to new

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) )
);

```

### Delete

**Syntax:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**Description:** Used with Modify Table to remove columns and statistics from an existing table.

#### Delete named analysis column

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

#### Delete stat at index

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :Type ),
Analysis Columns( :"Sales ($M)"n, :Assets ),
statistics( min, mean, max )
)
)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( statistics( 1 ) ) );

```

### Display Column Width

**Syntax:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; );obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**Description:** Sets or returns the display width of a column in a Tabulate report table. Path is a sequence of quoted column headings that traces the path of the column. Width is the width of a column in pixels. Use Data Column to define columns in the main body of the table or Row Label for columns in the row labels area. If there are multiple tables in the report, use Column Table(n) or Row Table(n) to specify which table the path applies to. If width is not specified, this option returns the current width of the specified column.

#### Get column width

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :sex, :marital status ),
Analysis Columns( :age ),
Statistics( Sum, "% of Total" )
),
Row Table( Grouping Columns( :type ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Display Column Width(
Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" )
);

```

#### Resize data columns to equal widths

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Set Format( Mean( :OZONE( 6, 4 ) ) ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, std dev ) ),
Row Table( Grouping Columns( :Region ) )
)
);
stats = {"Min", "Max", "Mean", "Std Dev"};
ns = N Items( stats );
a = {};
For( i = 1, i <= ns, i++,
a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) )
);
amax = Max( a );
For( i = 1, i <= ns, i++,
obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax )
);

```

#### Set row label width

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :sex, :marital status ),
Analysis Columns( :age ),
Statistics( Sum, "% of Total" )
),
Row Table( Grouping Columns( :type ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

### Freq

**Syntax:** Freq( Column )

**Description:** Specify the frequency column to be used in computing for statistics

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Grouping Columns( :Causes ) ) )
);
Wait( 1 );
obj << Freq( :Count );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Freq( :Count ),
Add Table( Row Table( Grouping Columns( :Causes ) ) )
);

```

### Full Path Column Name

**Syntax:** obj &lt;&lt; Full Path Column Name( true | false )

**Description:** If set, column name for output table should include the grouping columns name

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Full Path Column Name( 1 );
obj << Make Into Data Table;

```

### Grouping Columns

**Syntax:** Grouping Columns( Column(s) )

**Description:** Adds grouping columns to the current table. It can be used with the Add Table command or Modify Table command.

#### Add nested to existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate( Show Control Panel( 0 ) );
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( column table( 1 ), grouping column( :age ) );

```

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);

```

#### Add to existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate( Show Control Panel( 0 ) );
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( row table( 1 ), grouping column( :age ) );

```

#### Add to new

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Column Table( Grouping Columns( :sex ) ) )
);

```

### ID

**Syntax:** ID( Column )

**Description:** Specifies the identifier column that is used to count unique occurrences.

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Set Format( Uniform Format( 10, 2 ) ),
Add Table(
Column Table(
Statistics( Sum ),
Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
Pack(
Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
Template( "^FIRST  (^OTHERS)", "/" )
)
),
Row Table( Grouping Columns( :Mfr Name ) )
)
);
Wait( 1 );
obj << ID( :Division );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
ID( :Division ),
Set Format( Uniform Format( 10, 2 ) ),
Add Table(
Column Table(
Statistics( Sum ),
Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
Pack(
Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
Template( "^FIRST  (^OTHERS)", "/" )
)
),
Row Table( Grouping Columns( :Mfr Name ) )
)
);

```

### Ignore duplicate responses

**Syntax:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Version Added:** 19

#### Set in existing

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :family cars ) ),
Row Table( Grouping Columns( :sex, :age ) )
)
);
obj << Ignore duplicate responses( Grouping Columns( :family cars ), 1 );

```

#### Set in new

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Ignore duplicate responses( Grouping Columns( :family cars ), 1 ),
Add Table(
Column Table( Grouping Columns( :family cars ) ),
Row Table( Grouping Columns( :sex, :age ) )
)
);

```

### Ignore duplicates in multiple response columns

**Syntax:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**Description:** Ignores duplicate responses in multiple response columns. Each repeated response is treated as a single occurrence.

**JMP Version Added:** 19

#### Set in existing

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :family cars ) ),
Row Table( Grouping Columns( :sex, :age ) )
)
);
obj << Ignore duplicates in multiple response columns( 1 );

```

#### Set in new

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Ignore duplicates in multiple response columns( 1 ),
Add Table(
Column Table( Grouping Columns( :family cars ) ),
Row Table( Grouping Columns( :sex, :age ) )
)
);

```

### Include missing for grouping columns

**Syntax:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**Description:** Adds a separate column containing counts for missing values for all grouping columns in the current table.

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Grouping Columns( :Doors ) ) )
);
obj << Include missing for grouping columns( 1 );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Include missing for grouping columns( 1 ),
Add Table( Row Table( Grouping Columns( :Doors ) ) )
);

```

### Make Into Data Table

**Syntax:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table ( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**Description:** Creates a new data table from the table created in Tabulate.

#### Make into data table

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Make Into Data Table;

```

#### Make into invisible data table

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Make into Data Table( invisible( 1 ) );

```

#### Use full path column names

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**Syntax:** obj &lt;&lt; Max scroll locked columns( number=3 )

**Description:** Set the maximum number of columns to be scroll locked. Either all or none of the row header columns will be locked. On by default.

**JMP Version Added:** 19

#### Limit allows header count

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Scroll lock row headers in data table export( 1 );
obj << Max Scroll Locked Columns( 2 );
obj << Make Into Data Table;

```

#### Limit under header count

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Scroll lock row headers in data table export( 1 );
obj << Max Scroll Locked Columns( 1 );
obj << Make Into Data Table;

```

### Missing sum is zero

**Syntax:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**Description:** Specifies if missing values for the sum summary statistic should be displayed as 0 or missing.

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),
Row Table( Grouping Columns( :name ) )
)
);
obj << Missing Sum Is Zero( 1 );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Missing Sum Is Zero( 1 ),
Add Table(
Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),
Row Table( Grouping Columns( :name ) )
)
);

```

### Modify Table

**Syntax:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**Description:** Modifies an existing table.

#### Delete analysis column

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

#### Build  and edit full table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate( Show Control Panel( 0 ) );
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
obj << Add Table( Column Table( Analysis Column( :height ) ) );
obj << Add Table( Column Table( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), statistics( min, max ) );
obj << Modify Table( Column Table( 2 ), grouping columns( :sex ) );
obj << Modify Table( Column Table( 2 ), Analysis Column( :Weight ) );
Wait( 1 );
obj << Modify Table( Column Table( 2 ), delete( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), delete( statistics( "sum" ) ) );

```

### Modify Table Option

**Syntax:** obj &lt;&lt; Modify Table Option

**Description:** Used with Modify Table to modify table options in an existing table.

#### Stack grouping columns in existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ) )
	)
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

#### Change stacked group label in existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )
	)
);
obj << Modify Table(
	Row Table( 1 ),
	Modify Table Option( Change Stacked Group Label ),
	"new label"
);

```

### Move

**Syntax:** move (&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**Description:** Used with Modify Table to move columns and statistics in an existing table.

**JMP Version Added:** 19

#### Move stat after named

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	move( column table( 1 ), Statistics( mean ) ),
	After( Statistics( max ) )
);

```

#### Move grouping column from column to row table

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	row table( 1 ),
	move( column table( 1 ), Grouping Column( :Type ) ),
	before first
);

```

### Order By Count

**Syntax:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### Set in exisiting

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Grouping Columns( :age ) ) )
);
obj << Order By Count( Grouping Columns( :age ), 1 );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Order By Count( Grouping Columns( :age ), 1 ),
Add Table( Row Table( Grouping Columns( :age ) ) )
);

```

### Order by count of grouping columns

**Syntax:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**Description:** Sorts the levels of the grouping columns by counts in the table.

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table( Row Table( Grouping Columns( :Make ) ) )
);
obj << Order by Count of Grouping Columns( 1 );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Order by Count of Grouping Columns( 1 ),
Add Table( Row Table( Grouping Columns( :Make ) ) )
);

```

### Pack

**Syntax:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**Description:** Pack multiple statistics into one column in the table. The Template option specifies the formatting of the items.

#### Pack analysis columns in new with template

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);

```

#### Pack analysis columns in existing

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table(
	Column Table( 1 ),
	Pack(
		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
		Template( "^FIRST  (^OTHERS)", "/" )
	)
);

```

#### Pack analysis columns in new

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Statistics( Sum ),
Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )
),
Row Table( Grouping Columns( :Mfr Name, :Engine ) )
)
);

```

### Page Column

**Syntax:** Page Column( Column )

**Description:** Specify the page column to be used for setting up pages of report

#### Multiple response page column

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );
obj = Tabulate(
Show Control Panel( 0 ),
Page Column( :family cars( "Jeep" ) ),
Add Table(
Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),
Row Table( Grouping Columns( :sex ) )
)
);

```

#### Set page column and level in existing

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
Row Table( Grouping Columns( :age ) )
)
);
Wait( 1 );
obj << page column( :sex( "F" ) );

```

#### Set page column and level in new

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Page Column( :sex( "F" ) ),
Add Table(
Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
Row Table( Grouping Columns( :age ) )
)
);

```

#### Set page column in new

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Page Column( :sex ),
Add Table(
Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
Row Table( Grouping Columns( :age ) )
)
);

```

### Plot Scale

**Syntax:** obj &lt;&lt; Plot Scale( min, max )

**Description:** Sets the scale on the bar chart.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**Syntax:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**Description:** Removes the specified column label in the table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
Wait( 2 );
obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**Syntax:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**Description:** Restores the previously removed, specified column label in the table.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
obj << Remove Column Label( Grouping Columns( :Region ) );
Wait( 2 );
obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Syntax:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**Description:** Used with Modify Table to convert between analysis columns and grouping columns in an existing table.

**JMP Version Added:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( N ), Grouping Columns( :age ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save grouping as tags in data table export

**Syntax:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**Description:** Sets if the grouping levels should be included in the data table as column tags. On by default.

**JMP Version Added:** 19

#### Don't save tags

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Save grouping as tags in data table export( 0 );
obj << Make Into Data Table;

```

#### Save tags

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Save grouping as tags in data table export( 1 );
obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Syntax:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**Description:** Sets if the columns containing the row headers should be scroll locked. On by default.

**JMP Version Added:** 19

#### Don't scroll lock row headers

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Scroll lock row headers in data table export( 0 );
obj << Make Into Data Table;

```

#### Scroll lock row headers

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Grouping Columns( :sex, :marital status ) ),
Row Table( Grouping Columns( :country, :size ) )
)
);
obj << Scroll lock row headers in data table export( 1 );
obj << Make Into Data Table;

```

### Set Format

**Syntax:** Set Format( statistic( Column( format ) )

**Description:** Sets the format displayed for analysis columns.

#### Format in existing

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Region ) )
)
);
obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### Format multiple stats and analysis columns

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Tabulate(
Show Control Panel( 0 ),
Set Format(
Mean(
:height( 10, 1 ),
Analysis Column(
Transform Column( "Log[height]", Formula( Log( :height ) ) ),
Format( 10, "Best" )
)
),
"% of Total"n(
:height( 12, 2 ),
Analysis Column(
Transform Column( "Log[height]", Formula( Log( :height ) ) ),
Format( 12, 2 )
)
)
),
Add Table(
Column Table(
Analysis Columns(
:height,
Transform Column( "Log[height]", Formula( Log( :height ) ) )
),
Statistics( Mean, "% of Total"n )
),
Row Table( Grouping Columns( :sex ) )
)
);

```

#### Format single stat and analysis column

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Set Format( Mean( :OZONE( 6, 4 ) ) ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Region ) )
)
);

```

#### Format stat without analysis column

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Set Format( Row %( Format( 9, 1, "Percent" ) ) ),
Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) )
);

```

### Show Chart

**Syntax:** obj &lt;&lt; Show Chart( state=0|1 )

**Description:** Displays or hides a bar chart generated from the table created in Tabulate.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );

```

### Show Control

**Syntax:** obj &lt;&lt; Show Control( state=0|1 )

### Show Control Panel

**Syntax:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Description:** Displays or hides the control panel used to manipulate the table created in Tabulate. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Control Panel( 1 );

```

### Show Shading

**Syntax:** obj &lt;&lt; Show Shading( state=0|1 )

**Description:** Displays or hides alternating shaded and nonshaded lines on the table created in Tabulate. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Shading( 1 );

```

### Show Table

**Syntax:** obj &lt;&lt; Show Table( state=0|1 )

**Description:** Displays or hides the table created in Tabulate. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Table( 1 );

```

### Show Test Build Panel

**Syntax:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**Description:** Displays or hides the panel controlling sampling for a test build of the table.

#### Show for existing

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
Show Control Panel( 1 ),
Add Table(
Column Table( Statistics( Mean, Std Dev ) ),
Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
)
);
obj << Show Test Build Panel( 1 );

```

#### Show for new

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
Show Control Panel( 1 ),
Show Test Build Panel( 1 ),
Add Table(
Column Table( Statistics( Mean, Std Dev ) ),
Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
)
);

```

### Show Tooltip

**Syntax:** obj &lt;&lt; Show Tooltip( state=0|1 )

**Description:** Displays or hides the tooltips when hovering on drop zones and menus the Tabulate output.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Syntax:** Stack Grouping Columns(0 | 1)

**Description:** Stack the grouping columns into a single column, using indenting to show the nesting structure.

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :marital status ),
			Add Aggregate Statistics( :marital status ),
			Analysis Columns( :age ),
			Statistics( Min, Max )
		),
		Row Table(
			Grouping Columns( :sex, :country, :size ),
			Add Aggregate Statistics( :sex, :country, :size ),
			Stack Grouping Columns( 1 )
		)
	)
);

```

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table(
Grouping Columns( :marital status ),
Add Aggregate Statistics( :marital status ),
Analysis Columns( :age ),
Statistics( Min, Max )
),
Row Table(
Grouping Columns( :sex, :country, :size ),
Add Aggregate Statistics( :sex, :country, :size )
)
)
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

### Statistics

**Syntax:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Description:** Adds statistics to a column or row in the table. When scripting, the Statistics() message resides next to the identifying Analysis Columns( column ) message, and both are nested within either a Row Table() or Column Table() command.

#### Add new

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),
Row Table( Grouping Columns( :Region ) )
)
);

```

#### Add to existing

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),
Row Table( Grouping Columns( :Region ) )
)
);
obj << modify table( column table( 1 ), Statistics( Min ) );

```

### Test Build

**Syntax:** obj &lt;&lt; Test Build( Sample Size( number ) )

**Description:** Displays the table using a test build sample of the data of size number.

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Add Table(
Column Table( Statistics( Mean, Std Dev ) ),
Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
)
);
obj << Test Build( Sample Size( 100 ) );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Test Build( Sample Size( 100 ) ),
Add Table(
Column Table( Statistics( Mean, Std Dev ) ),
Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
)
);

```

### Test Data View

**Syntax:** obj &lt;&lt; Test Data View

**Description:** Displays the data table used as a sample to build the test table.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );
obj << Test Data View;

```

### Undo

**Syntax:** obj &lt;&lt; Undo

**Description:** Removes the effect of the last operation issued to the current table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );
Wait( 2 );
obj << undo;

```

### Uniform plot scale

**Syntax:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**Description:** Sets the scales for all subcategories to be the same on the bar chart. On by default.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Uniform Plot Scale( 1 );

```

### Unpack

**Syntax:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**Description:** Unpacks a packed set of columns.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

### Weight

**Syntax:** Weight( Column )

**Description:** Specify the weight column to be used in computing for statistics

#### Set in existing

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Type ) )
	)
);
Wait( 1 );
obj << Weight( :Weight );

```

#### Set in new

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
Show Control Panel( 0 ),
Weight( :Weight ),
Add Table(
Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
Row Table( Grouping Columns( :Type ) )
)
);

```

## Shared Item Messages

### Action

**Syntax:** obj &lt;&lt; Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Search within folder(s)

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description:** Redoes the analysis automatically for exclude and data changes. If the Automatic Recalc option is turned on, you should consider using Wait(0) commands to ensure that the exclude and data changes take effect before the recalculation.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description:** Adds a control panel for changing the platform&apos;s variables

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Description:** Move the data table window for this analysis to the front.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Description:** Returns the Where expression for the data subset, if the platform was launched with By() or Where(). Otherwise, returns Empty()

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Description:** To filter data to specific groups or ranges, but local to this platform

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Description:** Apply the local data filter from the clipboard to the current report.

```jsl

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

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Description:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Opens the platform launch window and recalls the settings that were used to create the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Description:** Removes the most recent Column Switcher that has been added to the platform.

```jsl

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Description:** If a local data filter has been created, this removes it and restores the platform to use all the data in the data table directly

```jsl

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

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Description:** Returns a reference to the report object.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Full"|"Summary" )

**Description:** The report view determines the level of detail visible in a platform report. Full shows all of the detail, while Summary shows only select content, dependent on the platform. For customized behavior, display boxes support a <<Set Summary Behavior message.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```jsl

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

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description:** Send To Report is used in tandem with the Dispatch command to customize the appearance of a report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Description:** Sync with the exclude and data changes that have been made.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

