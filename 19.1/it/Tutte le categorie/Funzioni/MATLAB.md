# MATLAB



### Check MATLAB Dependencies

**Sintassi:** Check MATLAB Dependencies()

**Descrizione:** Controlla se le dipendenze MATLAB sono installate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies();	Print( "Dependencies are installed" );,	Print( "Dependencies are installed" ));

```

### Install MATLAB Dependencies

**Sintassi:** Install MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descrizione:** Installa le dipendenze MATLAB necessarie.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( !Check MATLAB Dependencies(),	Install MATLAB Dependencies(),	Print( "Dependencies are installed" ));

```

### MATLAB Connect

**Sintassi:** MATLABConnection = MATLAB Connect(&lt;Echo(0|1)&gt;)

**Descrizione:** Restituisce un oggetto connessione MATLAB che supporta script.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLABConnection = MATLAB Connect();x = MatlabConnection << Is Connected;Show( x );

```

### MATLAB Control

**Sintassi:** MATLAB Control( Echo(bool) )

**Descrizione:** Cambia le opzioni di controllo per MATLAB

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init( Echo( true ) );MATLAB Control( Echo( false ) );MATLAB Submit(	"\[	v = [9 8 7, 6 5 4, 3 2 1];	m = [1 2 3, 4 5 6, 7 8 9];	rowjoin = [v ; m]	coljoin = [v , m]]\");MATLAB Term();

```

### MATLAB Execute

**Sintassi:** MATLAB Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descrizione:** Invia un elenco di input, esegue istruzioni e restituisce un elenco di output.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];ml = MATLAB Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v) called Left divisionx = m .* v; % element-wise product]\");Show( v, m, ml, x, z, a, d );MATLAB Term();

```

### MATLAB Get

**Sintassi:** y = MATLAB Get( name )

**Descrizione:** Restituisce dati da MATLAB, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati MATLAB (numerico | stringa | matrice | elenco | frame di dati).

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();x1 = [1, 2, 3];MATLAB Send( x1 );x2 = MATLAB Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt1 );dt2 = MATLAB Get( dt1 );dt2 << New Data View;Close( dt1 );MATLAB Term();

```

### MATLAB Get Graphics

**Sintassi:** MATLAB graphics = MATLAB Get Graphics( format )

**Descrizione:** Restituisce l&apos;ultimo oggetto grafico scritto nella finestra di visualizzazione del grafico MATLAB in un formato grafico specificato dall&apos;argomento format.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();ml = MATLAB Submit( "\[plot(1:10)]\" );plot = MATLAB Get Graphics( png );pngJMP = New Window( "Plot", Picture Box( plot ) );pngJMP << Close Window;MATLAB Submit( "close" );//Needed this command to close the figure generated from MatlabMATLAB Term();

```

### MATLAB Get Version

**Sintassi:** version = MATLAB Get Version()

**Descrizione:** Restituisce il numero di versione di MATLAB utilizzato con le interfacce JMP MATLAB.

**JMP Versione aggiunta:** 14

```jsl

MATLAB Init();version = MATLAB Get Version();Show( version );MATLAB Term();

```

### MATLAB Init

**Sintassi:** MATLAB Init(&lt;Echo(0|1)&gt;)

**Descrizione:** Inizializza le interfacce MATLAB.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### MATLAB Is Connected

**Sintassi:** connected = MATLAB Is Connected()

**Descrizione:** Restituisce 1 se esiste una connessione MATLAB attiva, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();x = MATLAB Is Connected();Show( x );MATLAB Term();

```

### MATLAB JMP Name to MATLAB Name

**Sintassi:** MATLAB name = MATLAB JMP Name To MATLAB Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile MATLAB utilizzando le regole di assegnazione dei nomi alle variabili di MATLAB.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB name = MATLAB JMP Name to MATLAB Name( a b c );Show( MATLAB name );MATLAB Term();

```

### MATLAB Load

**Sintassi:** MATLAB Load( path )

**Descrizione:** Carica variabili da un file ".mat" in MATLAB e restituisce le variabili in un array associativo JSL.

**JMP Versione aggiunta:** 19

```jsl

MATLAB Init();// if .mat file contained: x = 40; y = 'hello';vars = MATLAB Load( "path/to/.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLAB Term();

```

### MATLAB Send

**Sintassi:** MATLAB Send( name, &lt;MATLAB Name( name )&gt;, &lt;Named Arguments&gt; )

**Descrizione:** Invia dati a MATLAB, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati).

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();x = [1, 2, 3];MATLAB Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send( dt );Close( dt );MATLAB Submit( "x" );MATLAB Submit( "dt" );MATLAB Term();

```

### MATLAB Send File

**Sintassi:** MATLAB Send File( filename, &lt;MATLAB Name( name )&gt; )

**Descrizione:** Invia un file di dati a MATLAB, dove l&apos;argomento filename è una stringa che specifica il nome del percorso del file da inviare a MATLAB.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB Send File( "$SAMPLE_DATA/Big Class.jmp" );MATLAB Send File( "$SAMPLE_DATA/Baseball.jmp" );MATLAB Submit( "BigClass" );MATLAB Submit( "Baseball" );MATLAB Term();

```

### MATLAB Submit

**Sintassi:** MATLAB Submit( statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descrizione:** Invia istruzioni a MATLAB. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\" );getStr = MATLAB Get( str );getNum = MATLAB Get( a );Show( getStr, getNum );MATLAB Term();

```

### MATLAB Submit File

**Sintassi:** MATLAB Submit File( path, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descrizione:** Invia istruzioni a MATLAB mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB Submit File( "file containing MATLAB source.m" );MATLAB Term();

```

### MATLAB Term

**Sintassi:** MATLAB Term()

**Descrizione:** Termina le interfacce MATLAB.

**JMP Versione aggiunta:** prima della versione 14

```jsl

MATLAB Init();MATLAB Submit( "\[str = 'The quick brown fox jumps over the lazy dog';]\" );getStr = MATLAB Get( str );Show( getStr );MATLAB Term();

```

### Update MATLAB Dependencies

**Sintassi:** Update MATLAB Dependencies(&lt;Patch(0|1)&gt;)

**Descrizione:** Aggiorna le dipendenze MATLAB necessarie.

**JMP Versione aggiunta:** prima della versione 14

```jsl

If( Check MATLAB Dependencies(),	Update MATLAB Dependencies(),	Print( "Dependencies are updated" ));

```

