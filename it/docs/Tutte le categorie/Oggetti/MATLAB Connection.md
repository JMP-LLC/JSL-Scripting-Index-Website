# MATLAB Connection



## Messaggi degli elementi

### Control

**Sintassi:** obj &lt;&lt; Control(&lt;Echo(Boolean)&gt;)

**Descrizione:** Controlla l&apos;esecuzione di MATLAB.

```jsl

conn = MATLAB Connect();conn << Control( Echo( 0 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // no echoconn << Control( Echo( 1 ) );conn << Submit( "\[ a = 'hello'; ]\" ); // echo

```

### Disconnect

**Sintassi:** obj &lt;&lt; Disconnect

**Descrizione:** Termina le interfacce MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Disconnect;

```

### Execute

**Sintassi:** obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements, &lt;Echo(0|1)&gt;, &lt;Expand(0|1)&gt; )

**Descrizione:** Invia un elenco di input, esegue le istruzioni e restituisce un elenco di output. Il parametro opzionale echo() è di default Vero. Il parametro echo controlla l&apos;eco dell&apos;origine MATLAB nel log. Il valore Vero logico (1) abilita l&apos;eco dell&apos;origine, mentre 0 sopprime l&apos;eco nel log.

```jsl

MATLABConnection = MATLAB Connect();a = "abcdef";d = 3.141;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];MATLABConnection << Execute(	{v, m, a, d},	{x, z, a, d},	"\[a = v * m; % matrix productd = v / m; % = v * inv(m) called Right divisionz = m \ v; % = m * inv(v)	called Left divisionx = m .* v; % element-wise product]\");Show( v, m, x, z, a, d );MATLABConnection << Disconnect;

```

### Get

**Sintassi:** y = obj &lt;&lt; Get( name )

**Descrizione:** Restituisce dati da MATLAB, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati MATLAB (numerico | stringa | matrice | elenco | frame di dati).

```jsl

MATLABConnection = MATLAB Connect();x1 = [1, 2, 3];MATLABConnection << Set( x1 );x2 = MATLABConnection << Get( x1 );Show( x1, x2 );dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt1 );dt2 = MATLABConnection << Get( dt1 );dt2 << New Data View;Close( dt1 );MATLABConnection << Disconnect;

```

### Get Graphics

**Sintassi:** MATLAB graphics = obj &lt;&lt; Get Graphics( format )

**Descrizione:** Restituisce l&apos;ultimo oggetto grafico scritto nella finestra di visualizzazione del grafico MATLAB in un formato grafico specificato dall&apos;argomento format.

```jsl

MATLABConnection = MATLAB Connect();ml = MATLABConnection << Submit( "\[x = 0:pi/100:2*pi;y = sin(x);plot(x,y)]\" );plot = MATLABConnection << Get Graphics( png );New Window( "Plot", Picture Box( plot ) );MATLABConnection << Disconnect;

```

### Get Version

**Sintassi:** version = obj &lt;&lt; Get Version

**Descrizione:** Restituisce il numero di versione di MATLAB utilizzato nella connessione corrente.

```jsl

MATLABConnection = MATLAB Connect();version = MATLABConnection << Get Version;Show( version );MATLABConnection << Disconnect;

```

### Is Connected

**Sintassi:** x = obj &lt;&lt; Is Connected

**Descrizione:** Restituisce 1 se esiste una connessione MATLAB attiva, in caso contrario 0.

```jsl

MATLABConnection = MATLAB Connect();x = MATLABConnection << Is Connected;Show( x );MATLABConnection << Disconnect;

```

### JMP Name To MATLAB Name

**Sintassi:** obj &lt;&lt; JMP Name To MATLAB Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile MATLAB utilizzando le regole di assegnazione dei nomi alle variabili di MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLAB Name = MATLABConnection << JMP Name To MATLAB Name( a b c );Show( MATLAB Name );MATLABConnection << Disconnect;

```

### Load

**Sintassi:** obj &lt;&lt; Load( path )

**Descrizione:** Carica un file ".mat" in MATLAB e restituisce le variabili in un array associativo JSL.

```jsl

MATLABConnection = MATLAB Connect();// .mat file has x, y variables with valuesvars = MATLABConnection << Load( "path/to/matfile.mat" );Show( vars << Get Value( "x" ), vars << Get Value( "y" ) );MATLABConnection << Disconnect;

```

### Send

**Sintassi:** y = obj &lt;&lt; Send( name, &lt;Named Arguments&gt; )

**Descrizione:** Invia dati a MATLAB, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Send( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Send( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Send File

**Sintassi:** y = obj &lt;&lt; Send File( filename, &lt;MATLAB Name ( name )&gt; )

**Descrizione:** Invia un file di dati a MATLAB, dove l&apos;argomento filename è una stringa che specifica il nome del percorso del file da inviare a MATLAB.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );dtname = "$SAMPLE_DATA/Baseball.jmp";MATLABConnection << Send File( dtname );MATLABConnection << Submit( "BigClass" );MATLABConnection << Submit( "Baseball" );MATLABConnection << Disconnect;

```

### Set

**Sintassi:** y = obj &lt;&lt; Set( name, &lt;MATLAB Name ( name )&gt; )

**Descrizione:** Invia dati a MATLAB, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati).

```jsl

MATLABConnection = MATLAB Connect();x = [1, 2, 3];MATLABConnection << Set( x );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );MATLABConnection << Set( dt );Close( dt );MATLABConnection << Submit( "x" );MATLABConnection << Submit( "dt" );MATLABConnection << Disconnect;

```

### Submit

**Sintassi:** obj &lt;&lt; Submit( statements )

**Descrizione:** Invia istruzioni a MATLAB. Le istruzioni possono essere sotto forma di valore stringa o un elenco di valori stringa.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit(	"\[str = 'The quick brown fox jumps over the lazy dog';a = 200;]\");getStr = MATLABConnection << Get( str );getNum = MATLABConnection << Get( a );Show( getStr, getNum );MATLABConnection << Disconnect;

```

### Submit File

**Sintassi:** obj &lt;&lt; Submit File( path )

**Descrizione:** Invia istruzioni a MATLAB mediante un file specificato dall&apos;argomento path.

```jsl

MATLABConnection = MATLAB Connect();MATLABConnection << Submit File( "file containing MATLAB source." );MATLABConnection << Disconnect;

```

