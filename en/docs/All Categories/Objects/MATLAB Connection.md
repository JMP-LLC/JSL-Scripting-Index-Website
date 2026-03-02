# MATLAB Connection



## Item Messages

### Control

**Syntax:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**Description:** Controls the execution of MATLAB.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Description:** Terminates the MATLAB interfaces.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**Syntax:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Description:** Sends a list of inputs, executes statements, and returns a list of outputs. Optional echo() parameter defaults to True. The echo parameter controls echoing the MATLAB source to the log. Logical True (1) enables echo of source while 0 suppresses the echo to the log.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**Syntax:** y = obj &lt;&lt; Get( name )

**Description:** Returns data from MATLAB, where the name argument can represent any of the following MATLAB data types ( numeric | string | matrix | list | data frame).

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**Syntax:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**Description:** Returns the last graphics object written to the MATLAB graph display window in a graphics format specified by the format argument.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**Syntax:** version = obj &lt;&lt; Get Version

**Description:** Returns the version number of MATLAB used in the current connection.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**Syntax:** x = obj &lt;&lt; Is Connected

**Description:** Returns 1 if there is an active MATLAB connection; otherwise, returns 0.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**Syntax:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**Description:** Maps a JMP variable name to a MATLAB variable name using MATLAB variable naming rules.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**Syntax:** obj &lt;&lt; Load( path )

**Description:** Loads a ".mat" file into MATLAB and returns the variables to a JSL associative array.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**Syntax:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**Description:** Sends data to MATLAB, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**Syntax:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**Description:** Sends a data file to MATLAB, where the filename argument is a string that specifies a path name to the file to be sent to MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**Syntax:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**Description:** Sends data to MATLAB, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**Syntax:** obj &lt;&lt; Submit( statements )

**Description:** Submit statements to MATLAB. Statements can be in the form of a string value or a list of string values.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**Syntax:** obj &lt;&lt; Submit File( path )

**Description:** Submits statements to MATLAB using a file specified by the path argument.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

