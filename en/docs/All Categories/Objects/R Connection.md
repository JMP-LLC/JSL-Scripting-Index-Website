# R Connection



## Associated Constructors

### R Connect

**Syntax:** RConnection = R Connect()

**Description:** Returns an R connection scriptable object.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## Item Messages

### Control

**Syntax:** obj << Control( Echo( Boolean ) )

**Description:** Changes the control options for R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**Syntax:** obj << Disconnect

**Description:** Deprecated in JMP 19 and has no effect.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**Syntax:** list = obj << Execute( { list of Inputs }, { list of Outputs }, statements )

**Description:** Sends a list of inputs, executes statements and returns a list of outputs.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
a = "abcdef";
d = 3.1415927;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = RConnection << Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### Get

**Syntax:** y = obj << Get( name )

**Description:** Returns data from R, where the name argument can represent any of the following R data types ( numeric | string | matrix | list | data frame).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x1 = [1, 2, 3];
RConnection << Set( x1 );
x2 = RConnection << Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
RConnection << Set( dt1 );
dt2 = RConnection << Get( dt1 );
Close( dt1, No Save );

```

### Get Graphics

**Syntax:** R graphics = obj << Get Graphics( format )

**Description:** DEPRECATED in JMP 19 and has no effect. As a replacement, set device to a file name such as png("r_plot.png"), and then open the file to retrieve the image. This option will be removed from JMP 20. Code below shows workaround.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
RConnection << Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Get Version

**Syntax:** version = obj << Get Version

**Description:** Returns the version number of R used in the current connection.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**Syntax:** x = obj << Is Connected

**Description:** Returns 1 if there is an active R connection; otherwise, returns 0.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**Syntax:** Rname = JMP Name To R Name( JMP name )

**Description:** Maps a JMP variable name to an R variable name using R variable naming rules.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**Syntax:** y = obj << Send( name, <R Name( name )> )

**Description:** Sends data to R, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Send( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Send( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Send File

**Syntax:** y = obj << Send File( filename, <R Name( name )> )

**Description:** Sends a data file to R, where the filename argument is a string specifying a pathname to the file to be sent to R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**Syntax:** y = obj << Set( name, <R Name( name )> )

**Description:** Sends data to R, where the name argument can represent any of the following JMP data types ( numeric | string | matrix | list | data table).

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = [1, 2, 3];
RConnection << Set( x );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Set( dt );
Close( dt );
RConnection << Submit( "dt" );

```

### Submit

**Syntax:** obj << Submit( statements )

**Description:** Submit statements to R. Statements can be in the form of a string value or list of string values.

```jsl

Names Default To Here( 1 );

RConnection = R Connect();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
code =
"\[
x <- rnorm(1000)
hx <- hist(x, breaks=100, plot=FALSE)
png("IMG_PATH")
plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))
dev.off()
x <- rnorm (100)
y <- x**2 + rnorm (100)
summary(y)
]\";
// substitue portable path into R code
r_code = Substitute( code, "IMG_PATH", img_path );
RConnection << Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### Submit File

**Syntax:** obj << Submit File( path )

**Description:** Submits statements to R using a file specified by the path argument.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

