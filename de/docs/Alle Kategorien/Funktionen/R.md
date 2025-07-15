# R



### R Connect

**Syntax:** RConnection = R Connect()

**Beschreibung:** Gibt ein skriptfähiges Objekt einer R-Verbindung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
RConnection = R Connect();

```

### R Control

**Syntax:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Beschreibung:** Ändert die Kontrolloptionen für R

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init( Echo( true ) );
R Control( Echo( false ) );
R Submit( "Add R code" );

```

### R Execute

**Syntax:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
a = "abcdef";
d = 3.141;
x = 0;
z = 0;
v = [9 8 7, 6 5 4, 3 2 1];
m = [1 2 3, 4 5 6, 7 8 9];
rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[
x <- rnorm(5)
z <- v * m
]\" );
Show( v, m, rc, x, z, a, d );

```

### R Get

**Syntax:** y = R Get( name )

**Beschreibung:** Ruft Daten von R ab. Das Argument name kann jeden der folgenden R-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datenfeld).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
x1 = [1, 2, 3];
R Send( x1 );
x2 = R Get( x1 );
Show( x1, x2 );
dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );
R Send( dt1 );
dt2 = R Get( dt1 );
Close( dt1, No Save );

```

### R Get Graphics

**Syntax:** R graphics = R Get Graphics( format )

**Beschreibung:** VERALTET in JMP 19 und hat keine Wirkung. Als Ersatz setzen Sie das Gerät auf einen Dateinamen wie png(„r_plot.png“) und öffnen dann die Datei, um das Bild abzurufen. Diese Option wird aus JMP 20 entfernt. Der folgende Code zeigt eine Abhilfe.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
img_path = Get Path Variable( "TEMP" ) || "r_plot.png";
R Execute( {img_path}, {}, "\[
png(img_path)
plot(1:10)
dev.off()
]\" );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Get Version

**Syntax:** version = R Get Version()

**Beschreibung:** Gibt die Versionsnummer von R zurück, die mit den R-Schnittstellen in JMP verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
R Init();
version = R Get Version();
Show( version );

```

### R Init

**Syntax:** R Init()

**Beschreibung:** Initialisiert die R-Schnittstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();

```

### R Is Connected

**Syntax:** connected = R Is Connected()

**Beschreibung:** Gibt 1 zurück, wenn eine aktive R-Verbindung besteht, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
connected = R Is Connected();

```

### R JMP Name to R Name

**Syntax:** R name = R JMP Name To R Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem R-Variablennamen zu und verwendet Namensregeln von R-Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R name = R JMP Name to R Name( a b c );

```

### R Send

**Syntax:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Beschreibung:** Sendet Daten an R. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (numeric | string | matrix | list | data table | data table column).

**JMP Version hinzugefügt:** Vor Version 14

**Datentabelle**

```jsl

Names Default To Here( 1 );
R Init();
x = [1, 2, 3];
R Send( x, "x1" );
rx = R Get( "x1" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt );
Close( dt );
R Submit( "dt" );

```

**Spalte**

```jsl

Names Default To Here( 1 );
R Init();
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
R Send( dt:weight );
Close( dt );
w = R Get( "weight" );

```

### R Send File

**Syntax:** R Send File( filename, &lt;R Name( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an R; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an R zu sendenden Datei angibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
R Send File( "$SAMPLE_DATA/Big Class.jmp" );
R Send File( "$SAMPLE_DATA/Baseball.jmp" );
R Submit( "Big.Class" );
R Submit( "Baseball" );

```

### R Submit

**Syntax:** R Submit( statements )

**Beschreibung:** Sendet Anweisungen an R. Anweisungen können in Form einer Zeichenkette oder einer Liste von Zeichenketten sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );

R Init();
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
R Submit( r_code );
Wait( 3 );
plot = Open( img_path );
rc = Delete File( img_path );

```

### R Submit File

**Syntax:** R Submit File( path )

**Beschreibung:** Sendet Anweisungen an R und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );

R Init();
file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";
R Submit File( file_path );

```

### R Term

**Syntax:** R Term()

**Beschreibung:** Veraltet in JMP 19 und hat keine Wirkung.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
R Init();
R Term();

```

