# MATLAB



### Check MATLAB Dependencies

**Syntax:** Check MATLAB Dependencies()

**Beschreibung:** Prüft, ob MATLAB-Abhängigkeiten installiert sind.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**Syntax:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Beschreibung:** Installiert die erforderlichen MATLAB-Abhängigkeiten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**Syntax:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**Beschreibung:** Gibt ein skriptfähiges Objekt der MATLAB-Verbindung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**Syntax:** MATLAB Control( Echo(bool) )

**Beschreibung:** Ändert die Kontrolloptionen für MATLAB.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**Syntax:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Beschreibung:** Sendet eine Liste von Eingaben, führt Anweisungen aus und gibt eine Liste von Ausgaben zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**Syntax:** y = MATLAB Get( name )

**Beschreibung:** Ruft Daten von MATLAB ab. Das Argument name kann jeden der folgenden MATLAB-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Data Frame).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**Syntax:** MATLAB graphics = MATLAB Get Graphics( format )

**Beschreibung:** Gibt das letzte Grafikobjekt, das in das MATLAB-Graphen-Anzeigefenster geschrieben wurde, in einem vom Argument format angegebenen Grafikformat zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**Syntax:** version = MATLAB Get Version()

**Beschreibung:** Gibt die Versionsnummer von MATLAB zurück, die mit den MATLAB-Schnittstellen in JMP verwendet wird.

**JMP Version hinzugefügt:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**Syntax:** MATLAB Init(&lt;Echo(0|1)&gt;)

**Beschreibung:** Initialisiert die MATLAB-Schnittstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**Syntax:** connected = MATLAB Is Connected()

**Beschreibung:** Gibt 1 zurück, wenn eine aktive MATLAB-Verbindung besteht, andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**Syntax:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**Beschreibung:** Ordnet einen JMP-Variablennamen einem MATLAB-Variablennamen zu und verwendet Namensregeln von MATLAB-Variablen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**Syntax:** MATLAB Load( path )

**Beschreibung:** Lädt Variablen aus einer Datei „\*.mat“ in MATLAB und gibt die Variablen an ein assoziatives JSL-Array zurück.

**JMP Version hinzugefügt:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**Syntax:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**Beschreibung:** Sendet Daten an MATLAB. Das Argument name kann jeden der folgenden JMP-Datentypen darstellen (Numerisch | Zeichenkette | Matrix | Liste | Datentabelle).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**Syntax:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**Beschreibung:** Sendet eine Datendatei an MATLAB; dabei ist das filename-Argument eine Zeichenkette, die den Pfadnamen der an MATLAB zu sendenden Datei angibt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**Syntax:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Beschreibung:** Sendet Anweisungen an MATLAB. Anweisungen können in Form einer Zeichenkette oder einer Liste von Zeichenketten sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**Syntax:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Beschreibung:** Sendet Anweisungen an MATLAB und verwendet dafür eine Datei, die vom Argument path angegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**Syntax:** MATLAB Term()

**Beschreibung:** Beendet die MATLAB-Schnittstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**Syntax:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Beschreibung:** Aktualisiert die erforderlichen MATLAB-Abhängigkeiten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

