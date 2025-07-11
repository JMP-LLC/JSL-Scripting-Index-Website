# Sequencing Variants Toolset



## Sequencing Variants Toolset Run

### Auto Send Output to Files List

**Syntax:** obj << Auto Send Output to Files List( state=0|1 )

**Description:** Sends output files to the files list panel.

### Bam Files

**Syntax:** obj << Bam Files

**Description:** Specifies BAM files.

### Bcf Files

**Syntax:** obj << Bcf Files

**Description:** Specifies BCF files.

### Caller

**Syntax:** obj << Caller( "Multiallelic"|"Consensus"="Multiallelic" )

**Description:** "Multiallelic" by default.

### Copy Task Specification

**Syntax:** obj << Copy Task Specification

**Description:** Copies the current sequencing variants toolset specifications to the clipboard.

**JMP Version Added:** 19

### Files

**Syntax:** obj << Files

**Description:** Load input files to be run in samtools.

### Ploidy

**Syntax:** obj << Ploidy( number=2 )

**Description:** "2" by default.

### Recall in Task Specification

**Syntax:** obj << Recall in Task Specification

**Description:** Sets the task specification in the Task Specification report to the specified model.

### Ref Files

**Syntax:** obj << Ref Files

**Description:** Specifies Reference Genome files.

### Remove Run

**Syntax:** obj << ( Run[number] << Remove Run( state=0|1 ) )

**Description:** Removes the specified run report from the report window.

### Results Folder

**Syntax:** obj << Results Folder

**Description:** Specifies the result folder.

### Sam Files

**Syntax:** obj << Sam Files

**Description:** Specifies SAM files.

### Send Output to Files List

**Syntax:** obj << Send Output to Files List( state=0|1 )

**Description:** Sends output files to the file list panel.

### Sort Reads By

**Syntax:** obj << Sort Reads By( "Coordinates"|"Alpha-numeric"|"Lexicographical"="Coordinates" )

**Description:** "Coordinates" by default.

### Summary

**Syntax:** obj << Summary( state=0|1 )

**Description:** Shows or hides a report that contains details of the run. On by default.

### Target Regions

**Syntax:** obj << Target Regions

**Description:** Sets target regions. The specification of regions requires that the BAM file be coordinate-sorted and indexed.

### Task

**Syntax:** obj << Task( "Index Fasta"|"Convert SAM to BAM"|"Sort Reads"|"Add Mate Coordinates"|"Remove Duplicates"|"Merge Files"|"Index BAM"|"Convert BAM To SAM"|"Extract Mapped Reads"|"Extract Unmapped Reads"|"Extract Target Regions"|"Extract Properly Aligned"|"Extract First Read"|"Tag Mismatches and Insertions"|"Count Alignment"|"Count Alignment By Flag"|"Count Alignment By Reference"|"Generate Statistics"|"Generate Base Alignment Quality"|"Generate Read Depth"|"Bgzip Compress"|"Bgzip Decompress"|"Generate Genotype Likelihoods"|"Generate Genotype Calls"|"Convert Bcf to Vcf"|"Convert Vcf to Bcf" )

**Description:** Determines the task to run.

### Title

**Syntax:** obj << Title

**Description:** Sets a title.

### Unthreaded

**Syntax:** obj << Unthreaded( state=0|1 )

**Description:** Use only the main thread for calculations

### Vcf Files

**Syntax:** obj << Vcf Files

**Description:** Specifies VCF files.

## Sequencing Variants Toolset Specification

### Auto Send Output to Files List

**Syntax:** obj << Auto Send Output to Files List( state=0|1 )

**Description:** Sends output files to the files list panel.

### Bam Files

**Syntax:** obj << Bam Files

**Description:** Specifies BAM files.

### Bcf Files

**Syntax:** obj << Bcf Files

**Description:** Specifies BCF files.

### Caller

**Syntax:** obj << Caller( "Multiallelic"|"Consensus"="Multiallelic" )

**Description:** "Multiallelic" by default.

### Files

**Syntax:** obj << Files

**Description:** Load input files to be run in samtools.

### Ploidy

**Syntax:** obj << Ploidy( number=2 )

**Description:** Specifies a positive number that indicates the ploidy level. "2" by default.

### Ref Files

**Syntax:** obj << Ref Files

**Description:** Specifies Reference Genome files.

### Results Folder

**Syntax:** obj << Results Folder

**Description:** Specifies the result folder.

### Sam Files

**Syntax:** obj << Sam Files

**Description:** Specifies SAM files.

### Sort Reads By

**Syntax:** obj << Sort Reads By( "Coordinates"|"Alpha-numeric"|"Lexicographical"="Coordinates" )

**Description:** "Coordinates" by default.

### Target Regions

**Syntax:** obj << Target Regions

**Description:** Sets target regions. The specification of regions requires that the BAM file be coordinate-sorted and indexed.

### Task

**Syntax:** obj << Task( "Index Fasta"|"Convert SAM to BAM"|"Sort Reads"|"Add Mate Coordinates"|"Remove Duplicates"|"Merge Files"|"Index BAM"|"Convert BAM To SAM"|"Extract Mapped Reads"|"Extract Unmapped Reads"|"Extract Target Regions"|"Extract Properly Aligned"|"Extract First Read"|"Tag Mismatches and Insertions"|"Count Alignment"|"Count Alignment By Flag"|"Count Alignment By Reference"|"Generate Statistics"|"Generate Base Alignment Quality"|"Generate Read Depth"|"Bgzip Compress"|"Bgzip Decompress"|"Generate Genotype Likelihoods"|"Generate Genotype Calls"|"Convert Bcf to Vcf"|"Convert Vcf to Bcf"="Index Fasta" )

**Description:** Determines the task to run. "Index Fasta" by default.

### Title

**Syntax:** obj << Title

**Description:** Sets a title.

### Unthreaded

**Syntax:** obj << Unthreaded( state=0|1 )

**Description:** Use only the main thread for calculations

### Vcf Files

**Syntax:** obj << Vcf Files

**Description:** Specifies VCF files.

### Action

**Syntax:** obj << Action

**Description:** All-purpose trapdoor within a platform to insert expressions to evaluate. Temporarily sets the DisplayBox and DataTable contexts to the Platform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Description:** Apply a previously created preset to the object, updating the options and customizations to match the saved settings.

**JMP Version Added:** 18

**Anonymous preset**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Search within folder(s)**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Arguments

**Syntax:** obj << Arguments

**Description:** Enables specification of options to run the platform from the scripting window.

### Copy Script

**Syntax:** obj << Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```js

Names Default To Here( 1 );
obj << Copy Script;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj << Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

**General**

```js

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Platform with Filter**

```js

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

```js

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj << Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```js

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Description:** Times the platform launch.

```js

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Description:** Return a number indicating the level of Interactive HTML support for the display object. 1 means some or all elements are supported. 0 means no support.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Description:** Ignores the current settings of the platform&apos;s preferences. The message is ignored when sent to the platform after creation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Description:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version Added:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Render Preset

**Syntax:** Render Preset( preset )

**Description:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version Added:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Description:** Returns a reference to the report object.

```js

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Run Cmd

**Syntax:** obj << Run Cmd

**Description:** Determines the sequencing variants toolset task to be run from the scripting window.

### Run Spec

**Syntax:** obj << Run Spec

**Description:** Determines the sequencing variants toolset task to be run from the interface window.

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```js

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```js

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```js

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```js

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```js

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Description:** Sends platform commands or display customization commands to each level of a by-group.

```js

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

```js

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

```js

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

### Sequencing Variants Toolset

**Syntax:** Sequencing Variants Toolset

**Description:** Provides a framework to process and analyze high-throughput sequencing data with SamTools and BcfTools.

### Specification

**Syntax:** obj << Specification

**Description:** Enables specification of a task.

### Title

**Syntax:** obj << Title( "new title" )

**Description:** Sets the title of the platform.

```js

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Description:** Returns a reference to the root node in the report.

```js

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Syntax:** obj << View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

