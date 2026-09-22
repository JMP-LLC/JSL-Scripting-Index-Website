# Formula Depot



## Associated Constructors

### Formula Depot

**Syntax:** Formula Depot

**Description:** A container for prediction models that supports model comparison, profiling, and scoring code generation. The Formula Depot is launched through the analyze menu, Publish commands in modeling platforms, Recode, and the Formula Editor.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];

```

## Item Messages

### Add Formula from Column

**Syntax:** Predictor = obj &lt;&lt; Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), &lt;Expand Intermediate Formulas(number)&gt; )

**Description:** Add an existing prediction formula column from the given table to the Formula Depot

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Save Probability Formula;mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"mp << Generate Python Code;

```

### Copy Formulas as Functions

**Syntax:** obj &lt;&lt; Copy Formulas as Functions( &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Copies the given models onto the clipboard as a scalar Function() statement.

**JMP Version Added:** 14

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Formulas as Functions( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Formulas as Transforms

**Syntax:** obj &lt;&lt; Copy Formulas as Transforms( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Copies the given models onto the clipboard within a Transform Column() statement.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Copy Formulas as Transforms(    // English: Formulas("Fit Nominal Logistic - Species")	Formulas( 1 ));Wait( 0 );text = Get Clipboard();Show( text );

```

### Copy Scripts

**Syntax:** obj &lt;&lt; Copy Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Copies the scripts for the given formulas stored in the Formula Depot to the clipboard.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();predictor = model << Publish Probability Formulas;fd << Copy Scripts( Formulas( predictor ) );Wait( 0 );text = Get Clipboard();Show( text );

```

### Generate C Code

**Syntax:** obj &lt;&lt; Generate C Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Description:** Generates C code for the given models stored in the Formula Depot. Output goes to an editor window or to a string variable if the &apos;No Editor&apos; argument is given.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string c_code = fd << Generate C Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// c_code = predictor << Generate C Code(No Editor);Save Text File( "$TEMP\logist.c", c_code );// Open code in editor windowfd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**Syntax:** obj &lt;&lt; Generate JavaScript Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Description:** Generates JavaScript code for the given models stored in the Formula Depot. Output goes to an editor window or to a string variable if the &apos;No Editor&apos; argument is given.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// js_code = predictor << Generate JavaScript Code(No Editor);Save Text File( "$TEMP\logist.js", js_code );// Open code in editor windowfd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**Syntax:** obj &lt;&lt; Generate Python Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Description:** Generates Python code for the given models stored in the Formula Depot. Output goes to an editor window or to a string variable if the &apos;No Editor&apos; argument is given.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// py_code = predictor << Generate Python Code(No Editor);Save Text File( "$TEMP\logist.py", py_code );// Open code in editor windowfd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**Syntax:** obj &lt;&lt; Generate SAS Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt; )

**Description:** Generates SAS (DS2) code for the given models stored in the Formula Depot. Output goes to an editor window or to a string variable if the &apos;No Editor&apos; argument is given.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );md = dt << Run Script( "Nominal Logistic" );predictor = md << Publish Probability Formulas;// Save code to string sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );// shortcut using predictor reference// sas_code = predictor << Generate SAS Code(No Editor);Save Text File( "$TEMP\logist.sas", sas_code );// Open code in editor windowfd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**Syntax:** obj &lt;&lt; Generate SQL Code( &lt;Formulas(name|index|reference, ...)&gt;, &lt;No Editor&gt;, &lt;QUOTE_STYLE&gt; )

**Description:** Generates SQL code (column definitions suitable for use in an SQL Select statement) for the given models stored in the Formula Depot. Output goes to an editor window or to a string variable if the "No Editor" argument is given. QUOTE_STYLE is a string denoting one of the SQL databases supported by JMP (MySQL, Impala, Hive, and so on) or a SQL quoting type ("Underline", "Backquote", "Bracket" or "Doublequote").

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );md = dt << Run Script( "Elastic Net Poisson, BIC" );mp_obs = md << xpath( "//OutlineBox" );scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );mp = scriptables[2];predictor = mp << Publish Prediction Formula;// Save code to string sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );// shortcut using predictor reference// sql_code = predictor << Generate SQL Code(No Editor);Save Text File( "$TEMP\genreg.sql", sql_code );// Open code in editor windowfd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Model Comparison

**Syntax:** obj &lt;&lt; Model Comparison( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Compares the given models stored in the Formula Depot using the model comparison utility, based on the contents of the given table.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );// Other options:// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};// fd << ModelComparison( Formulas( mds ) );// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );// fd << ModelComparison; // all models

```

### Profiler

**Syntax:** obj &lt;&lt; Profiler( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Profiles the given models stored in the Formula Depot using the Profiler utility, based on the contents of the given table.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_mp = nl_md << Publish Probability Formulas;nn_md = Neural(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Informative Missing( 0 ),	Validation Method( "Holdback", 0.3333 ),	Fit( NTanH( 3 ) ));nn_mp = nn_md << Publish Prediction Formula;fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**Syntax:** obj &lt;&lt; Remove Model Comparison

**Description:** Removes all Model Comparison reports from the current Formula Depot.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Model Comparison();fd << Remove Model Comparison();

```

### Remove Profiler

**Syntax:** obj &lt;&lt; Remove Profiler

**Description:** Removes all Profilers from the current Formula Depot.

```jsl

fd = Formula Depot();dt = Open( "$SAMPLE_DATA/Iris.jmp" );nl_md = dt << Run Script( "Nominal Logistic" );nl_md << Publish Probability Formulas;fd << Profiler();fd << Remove Profiler();

```

### Rename Formula Depot

**Syntax:** obj &lt;&lt; Rename Formula Depot( text )

```jsl

fd = Formula Depot();fd << Rename Formula Depot( "New Name" );

```

### Run Scripts

**Syntax:** obj &lt;&lt; Run Scripts( &lt;Table(name|reference)&gt;, &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Saves the given models to the current or given JMP data table as one or more formula columns.

```jsl

// Create a Formula Depot to store the modeldt1 = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt1 << RunScript( "Nominal Logistic" );fd1 = Formula Depot();model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );// Clean-upClose( dt1, NoSave );fd1 << Close Window;// Read FD from diskOpen( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];// Create columns from stored model; usually this is a new table with a compatible schemadt2 = Open( "$SAMPLE_DATA\Iris.jmp" );fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Show Scripts

**Syntax:** obj &lt;&lt; Show Scripts( &lt;Formulas(name|index|reference, ...)&gt; )

**Description:** Opens a new Formula Window (or appends to an open Formula Window) that contains scripts for the given formulas stored in the Formula Depot.

```jsl

dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );fd = Formula Depot();model << Publish Probability Formulas;fd << Show Scripts( Formulas( 1 ) );

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

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Description:** Create a JSL script to produce this analysis, and put it on the clipboard.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Copy Script;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Description:** Returns an associative array mapping the by group columns to their values.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Description:** Returns a reference to the container box that holds the content for the object.

#### General

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Platform with Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Description:** Returns a reference to the data table.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Description:** Creates a script (JSL) to produce this analysis and returns it as an expression.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Description:** Creates a script(JSL) to produce this analysis specifically referencing this data table and returns it as an expression.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Description:** Times the platform launch.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];t = obj << Get Timing;Show( t );

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

### New Preset

**Syntax:** obj = New Preset()

**Description:** Create an anonymous preset representing the options and customizations applied to the object. This object can be passed to Apply Preset to copy the settings to another object of the same type.

**JMP Version Added:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Description:** Returns a reference to the report object.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description:** Saves a script for all report objects to the current data table. This option is useful when you have multiple reports in the window. The script is named after the first platform unless you specify the script name in quotes.

**Example 1**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table;

```

**Example 2**

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File(	"$TEMP\fd.jrp",	Char( Name Expr( fd_script ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Description:** Create a JSL script to produce this analysis, and show it in the report itself. Useful to preserve a printed record of what was done.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Save Script to Script Window;

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

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Description:** Sets the title of the platform.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Description:** Returns a reference to the root node in the report.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Description:** Returns the XML code that is used to create the interactive HTML report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

