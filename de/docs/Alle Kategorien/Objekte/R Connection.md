# R Connection



## Elementmeldungen

### Control

**Syntax:** obj << Control( Echo( Boolean ) )

**Beschreibung:** Ändert die Kontrolloptionen für R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**Syntax:** obj << Disconnect

**Beschreibung:** Veraltet in JMP 19 und hat keine Wirkung.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**Syntax:** list = obj << Execute( { list of Inputs }, { list of Outputs }, statements )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück.

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

**Beschreibung:** Ruft Daten von R ab. Das Argument name kann jeden der folgenden R-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datenfeld).

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

**Beschreibung:** VERALTET in JMP 19 und hat keine Wirkung. Als Ersatz setzen Sie das Gerät auf einen Dateinamen wie png(„r_plot.png“) und öffnen dann die Datei, um das Bild abzurufen. Diese Option wird aus JMP 20 entfernt. Der folgende Code zeigt eine Abhilfe.

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

**Beschreibung:** Gibt die Versionsnummer von R der aktuellen Verbindung zurück.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**Syntax:** x = obj << Is Connected

**Beschreibung:** Gibt 1 zurück, wenn eine aktive R-Verbindung besteht, andernfalls wird 0 zurückgegeben.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**Syntax:** Rname = JMP Name To R Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem R-Variablennamen zu und verwendet Namensregeln von R-Variablen.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**Syntax:** y = obj << Send( name, <R Name( name )> )

**Beschreibung:** Sendet Daten an R. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle).

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

**Beschreibung:** Sendet eine Datendatei an R; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an R zu sendenden Datei angibt.

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

**Beschreibung:** Sendet Daten an R. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle).

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

**Beschreibung:** Sendet Anweisungen an R. Anweisungen können in Form einer Zeichenkette oder einer Liste von Zeichenketten sein.

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

**Beschreibung:** Sendet Anweisungen an R und verwendet dafür eine Datei, die vom Argument path angegeben wird.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

## Zugehörige Konstruktoren

### R Connect

**Syntax:** RConnection = R Connect()

**Beschreibung:** Gibt ein skriptfähiges Objekt einer R-Verbindung zurück.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

