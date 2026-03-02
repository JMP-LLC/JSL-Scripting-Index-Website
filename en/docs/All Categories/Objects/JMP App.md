# JMP App



## Item Messages

### Combine Windows

**Syntax:** obj &lt;&lt; Combine Windows( {list of reports or data tables}, {...} )

**Description:** Combine the given list of platform reports or data tables into a new module. The application must not be currently running or in an edit state.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dist = Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));biv = Bivariate( Y( :weight ), X( :height ) );app = JMP App();app << Set Name( "Instant App" );app << Combine Windows( {dist << Report, biv << Report} );(app << Get Modules)[1] << Set Window Title( "My Report" );app << Run;

```

### Debug

**Syntax:** obj &lt;&lt; Debug

**Description:** Run the application in the debugger.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Launcher with Report.jmpappsource" );app << Debug;

```

### Edit

**Syntax:** obj &lt;&lt; Edit

**Description:** Edit the application or dashboard in the builder.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;

```

### Get Modules

**Syntax:** list = obj &lt;&lt; Get Modules

**Description:** Get a list of the modules defined in the application.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit Application;app << Get Modules();

```

### Get Namespace

**Syntax:** obj &lt;&lt; Get Namespace

**Description:** Get the namespace for the module instance.

```jsl

app = JMP App();(app << Get Namespace) << Show Contents;

```

### Get Windows

**Syntax:** obj &lt;&lt; Get Windows

**Description:** Returns a list of open windows created as instances of application modules. Note that other windows created by application scripts, using New Window() or other functions, will not be included.

**JMP Version Added:** 14

**Example 1**

```jsl

app = JMP App();Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Historical.jmp" );app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;app << Get Windows();

```

**Example 2**

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Graph Launcher.jmpappsource" );app << Run;launcher = (app << Get Windows())[1];launcher[Button Box( 1 )] << Click;launcher[Button Box( 1 )] << Click;app << Get Windows();

```

### Open File

**Syntax:** obj &lt;&lt; Open File( &lt;path&gt; )

**Description:** Load the application from the given file.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );box = app << Edit Application;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Description:** Relaunches the Dashboard or Application, creating a new running copy of the Application.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Relaunch Analysis;

```

### Run

**Syntax:** obj &lt;&lt; Run

**Description:** Run the application or dashboard.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Run;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Description:** Save a New Window() script

```jsl

app = Include( "$SAMPLE_DASHBOARDS/Six Quality Graphs Dashboard.jmpappsource" );app << Run;app << Save Script for All Objects;

```

### Save Script to Add-In

**Syntax:** obj &lt;&lt; Save Script to Add-In

**Description:** Create a script (JSL) to produce this analysis, and load it into the Add-in Builder

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << "Save Script to Add-In";

```

### Save Script to Data Table

**Syntax:** app &lt;&lt; Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description:** Create a JSL script to produce this analysis, and save it as a table property in the data table.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Data Table;

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Description:** Create a JSL script to produce this analysis, and add a Button to the journal containing this script.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Journal;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Description:** Create a JSL script to produce this analysis, and append it to the current Script text window.

```jsl

app = JMP App();app << Open File( "$SAMPLE_APPS/Instant App.jmpappsource" );app << Edit;app << Save Script to Script Window;

```

