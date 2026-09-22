# MATLAB Connection



## Elementmeldungen

### Control

**Syntax:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**Beschreibung:** Steuert die Ausführung von MATLAB.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**Syntax:** obj &lt;&lt; Disconnect

**Beschreibung:** Beendet die MATLAB-Schnittstellen.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**Syntax:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück. Der optionale Parameter echo() ist standardmäßig „wahr“. Der Parameter echo steuert das Echo des MATLAB-Quellcodes im Protokoll. Das logische „wahr“ (1) aktiviert das Echo des Quellcodes, während 0 das Echo im Protokoll unterdrückt.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**Syntax:** y = obj &lt;&lt; Get( name )

**Beschreibung:** Ruft Daten von MATLAB ab. Das Argument name kann jeden der folgenden MATLAB-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Data Frame).

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**Syntax:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**Beschreibung:** Gibt das letzte Grafikobjekt, das in das MATLAB-Graphen-Anzeigefenster geschrieben wurde, in einem vom Argument format angegebenen Grafikformat zurück.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**Syntax:** version = obj &lt;&lt; Get Version

**Beschreibung:** Gibt die Versionsnummer von MATLAB der aktuellen Verbindung zurück.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**Syntax:** x = obj &lt;&lt; Is Connected

**Beschreibung:** Gibt 1 zurück, wenn eine aktive MATLAB-Verbindung besteht, andernfalls wird 0 zurückgegeben.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**Syntax:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem MATLAB-Variablennamen zu und verwendet Namensregeln von MATLAB-Variablen.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**Syntax:** obj &lt;&lt; Load( path )

**Beschreibung:** Lädt eine Datei „\*.mat“ in MATLAB und gibt die Variablen an ein assoziatives JSL-Array zurück.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**Syntax:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**Beschreibung:** Sendet Daten an MATLAB. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**Syntax:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an MATLAB; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an MATLAB zu sendenden Datei angibt.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**Syntax:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**Beschreibung:** Sendet Daten an MATLAB. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**Syntax:** obj &lt;&lt; Submit( statements )

**Beschreibung:** Sendet Anweisungen an MATLAB. Anweisungen können in Form einer Zeichenkette oder einer Liste von Zeichenketten sein.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**Syntax:** obj &lt;&lt; Submit File( path )

**Beschreibung:** Sendet Anweisungen an MATLAB und verwendet dafür eine Datei, die vom Argument path angegeben wird.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

