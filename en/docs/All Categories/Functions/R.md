# R



### R Connect

**Syntax:** RConnection = R Connect()

**Description:** Returns an R connection scriptable object.

**JMP Version Added:** Before version 14

```jsl

RConnection = R Connect();

```

### R Control

**Syntax:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Description:** Changes the control options for R

**JMP Version Added:** Before version 14

```jsl

R Init( Echo( true ) );R Control( Echo( false ) );R Submit( "Add R code" );

```

### R Execute

**Syntax:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Description:** Sends a list of inputs, executes statements and returns a list of outputs.

**JMP Version Added:** Before version 14

```jsl

R Init();a = "abcdef";d = 3.141;x = 0;z = 0;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[x <- rnorm(5)z <- v * m]\" );Show( v, m, rc, x, z, a, d );

```

### R Get

**Syntax:** y = R Get( name )

**Description:** Returns data from R, where the name argument can represent any of the following R data types ( numeric | string | matrix | list | data frame).

**JMP Version Added:** Before version 14

```jsl

R Init();x1 = [1, 2, 3];R Send( x1 );x2 = R Get( x1 );Show( x1, x2 );dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );R Send( dt1 );dt2 = R Get( dt1 );Close( dt1, No Save );

```

### R Get Graphics

**Syntax:** R graphics = R Get Graphics( format )

**Description:** DEPRECATED in JMP 19 and has no effect. As a replacement, set device to a file name such as png("r_plot.png"), and then open the file to retrieve the image. This option will be removed from JMP 20. Code below shows workaround.

**JMP Version Added:** Before version 14

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";R Execute( {img_path}, {}, "\[png(img_path)plot(1:10)dev.off()]\" );plot = Open( img_path );rc = Delete File( img_path );

```

### R Get Version

**Syntax:** version = R Get Version()

**Description:** Returns the version number of R being used with the JMP R interfaces.

**JMP Version Added:** 14

```jsl

R Init();version = R Get Version();Show( version );

```

### R Init

**Syntax:** R Init()

**Description:** Initializes the R Interfaces.

**JMP Version Added:** Before version 14

```jsl

R Init();

```

### R Is Connected

**Syntax:** connected = R Is Connected()

**Description:** Returns 1 if there is an active R connection; otherwise, returns 0.

**JMP Version Added:** Before version 14

```jsl

R Init();connected = R Is Connected();

```

### R JMP Name to R Name

**Syntax:** R name = R JMP Name To R Name( JMP name )

**Description:** Maps a JMP variable name to an R variable name using R variable naming rules.

**JMP Version Added:** Before version 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntax:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Description:** Sends data to R, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table | data table column).

**JMP Version Added:** Before version 14

#### Column

```jsl

R Init();dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt:weight );Close( dt );w = R Get( "dt.weight" );

```

#### Data Table

```jsl

R Init();x = [1, 2, 3];R Send( x, "x1" );rx = R Get( "x1" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt );Close( dt );R Submit( "dt" );

```

### R Send File

**Syntax:** R Send File( filename, &lt;R Name( name )&gt; )

**Description:** Sends a data file to R, where the filename argument is a string specifying a pathname to the file to be sent to R.

**JMP Version Added:** Before version 14

```jsl

R Init();R Send File( "$SAMPLE_DATA/Big Class.jmp" );R Send File( "$SAMPLE_DATA/Baseball.jmp" );R Submit( "Big.Class" );R Submit( "Baseball" );

```

### R Submit

**Syntax:** R Submit( statements )

**Description:** Submit statements to R. Statements can be in the form of a string value or list of string values.

**JMP Version Added:** Before version 14

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";code ="\[x <- rnorm(1000)hx <- hist(x, breaks=100, plot=FALSE)png("IMG_PATH")plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))dev.off()x <- rnorm (100)y <- x**2 + rnorm (100)summary(y)]\";// substitue portable path into R coder_code = Substitute( code, "IMG_PATH", img_path );R Submit( r_code );Wait( 3 );plot = Open( img_path );rc = Delete File( img_path );

```

### R Submit File

**Syntax:** R Submit File( path )

**Description:** Submits statements to R using a file specified by the path argument.

**JMP Version Added:** Before version 14

```jsl

R Init();file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";R Submit File( file_path );

```

### R Term

**Syntax:** R Term()

**Description:** Deprecated in JMP 19 and has no effect.

**JMP Version Added:** Before version 14

```jsl

R Init();R Term();

```

