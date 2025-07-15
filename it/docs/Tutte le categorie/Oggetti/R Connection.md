# R Connection



## Costruttori associati

### R Connect

**Sintassi:** RConnection = R Connect()

**Descrizione:** Restituisce un oggetto che supporta script della connessione R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

## Messaggi degli elementi

### Control

**Sintassi:** obj &lt;&lt; Control( Echo( Boolean ) )

**Descrizione:** Cambia le opzioni di controllo per R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Control( Echo( 0 ) );
RConnection << Submit( "rnorm(10)" );

```

### Disconnect

**Sintassi:** obj &lt;&lt; Disconnect

**Descrizione:** Deprecato in JMP 19 e non ha alcun effetto.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Disconnect;

```

### Execute

**Sintassi:** list = obj &lt;&lt; Execute( { list of Inputs }, { list of Outputs }, statements )

**Descrizione:** Invia un elenco di input, esegue istruzioni e restituisce un elenco di output.

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

**Sintassi:** y = obj &lt;&lt; Get( name )

**Descrizione:** Restituisce dati da R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati R (numerico | stringa | matrice | elenco | tabella di dati).

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

**Sintassi:** R graphics = obj &lt;&lt; Get Graphics( format )

**Descrizione:** DEPRECATO in JMP 19 e non ha alcun effetto. In sostituzione, impostare il dispositivo su un nome di file come png("r_plot.png"), quindi aprire il file per recuperare l&apos;immagine. Questa opzione verrà rimossa a partire da JMP 20. Il codice seguente mostra una soluzione.

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

**Sintassi:** version = obj &lt;&lt; Get Version

**Descrizione:** Restituisce il numero di versione di R utilizzato nella connessione corrente.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
version = RConnection << Get Version;
Show( version );

```

### Is Connected

**Sintassi:** x = obj &lt;&lt; Is Connected

**Descrizione:** Restituisce 1 se esiste una connessione R attiva, in caso contrario 0.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
x = RConnection << Is Connected;
Show( x );

```

### JMP Name To R Name

**Sintassi:** Rname = JMP Name To R Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile R utilizzando le regole di assegnazione dei nomi alle variabili R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RName = RConnection << JMP Name To R Name( a b c );
Show( RName );

```

### Send

**Sintassi:** y = obj &lt;&lt; Send( name, &lt;R Name( name )&gt; )

**Descrizione:** Invia dati a R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati).

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

**Sintassi:** y = obj &lt;&lt; Send File( filename, &lt;R Name( name )&gt; )

**Descrizione:** Invia a R un file di dati, in cui l&apos;argomento filenameè una stringa che specifica il percorso del file da inviare a R.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Send File( "$SAMPLE_DATA/Big Class.jmp" );
RConnection << Disconnect;
dtname = "$SAMPLE_DATA/Baseball.jmp";
RConnection << Send File( dtname );

```

### Set

**Sintassi:** y = obj &lt;&lt; Set( name, &lt;R Name( name )&gt; )

**Descrizione:** Invia dati a R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP ( numerico | stringa | matrice | elenco | tabella di dati).

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

**Sintassi:** obj &lt;&lt; Submit( statements )

**Descrizione:** Invia istruzioni a R. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa.

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

**Sintassi:** obj &lt;&lt; Submit File( path )

**Descrizione:** Invia istruzioni a R mediante un file specificato dall&apos;argomento path.

```jsl

Names Default To Here( 1 );
RConnection = R Connect();
RConnection << Submit File( "file containing R source." );

```

