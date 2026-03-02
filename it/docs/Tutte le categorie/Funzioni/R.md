# R



### R Connect

**Sintassi:** RConnection = R Connect()

**Descrizione:** Restituisce un oggetto che supporta script della connessione R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

RConnection = R Connect();

```

### R Control

**Sintassi:** R Control( Interrupt | Async( bool ) | Echo( bool ) )

**Descrizione:** Cambia le opzioni di controllo per R

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init( Echo( true ) );R Control( Echo( false ) );R Submit( "Add R code" );

```

### R Execute

**Sintassi:** R Execute( { list of Inputs }, { list of Outputs }, statements )

**Descrizione:** Invia elenco di input, esegue istruzioni e restituisce un elenco di output.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();a = "abcdef";d = 3.141;x = 0;z = 0;v = [9 8 7, 6 5 4, 3 2 1];m = [1 2 3, 4 5 6, 7 8 9];rc = R Execute( {v, m, a, d}, {x, z, a, d}, "\[x <- rnorm(5)z <- v * m]\" );Show( v, m, rc, x, z, a, d );

```

### R Get

**Sintassi:** y = R Get( name )

**Descrizione:** Restituisce dati da R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati R ( numerico | stringa | matrice | elenco | tabella di dati).

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();x1 = [1, 2, 3];R Send( x1 );x2 = R Get( x1 );Show( x1, x2 );dt1 = New Table( "Test", New Column( "Col", Values( [10, 20, 30] ) ) );R Send( dt1 );dt2 = R Get( dt1 );Close( dt1, No Save );

```

### R Get Graphics

**Sintassi:** R graphics = R Get Graphics( format )

**Descrizione:** DEPRECATO in JMP 19 e non ha alcun effetto. In sostituzione, impostare il dispositivo su un nome di file come png("r_plot.png"), quindi aprire il file per recuperare l&apos;immagine. Questa opzione verrà rimossa da JMP 20. Il codice seguente mostra una soluzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";R Execute( {img_path}, {}, "\[png(img_path)plot(1:10)dev.off()]\" );plot = Open( img_path );rc = Delete File( img_path );

```

### R Get Version

**Sintassi:** version = R Get Version()

**Descrizione:** Restituisce il numero di versione di R utilizzato con le interfacce JMP R.

**JMP Versione aggiunta:** 14

```jsl

R Init();version = R Get Version();Show( version );

```

### R Init

**Sintassi:** R Init()

**Descrizione:** Inizializza le interfacce R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();

```

### R Is Connected

**Sintassi:** connected = R Is Connected()

**Descrizione:** Restituisce 1 se esiste una connessione attiva R, in caso contrario 0.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();connected = R Is Connected();

```

### R JMP Name to R Name

**Sintassi:** R name = R JMP Name To R Name( JMP name )

**Descrizione:** Associa il nome di una variabile JMP a un nome di variabile R utilizzando le regole di assegnazione dei nomi alle variabili R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R name = R JMP Name to R Name( a b c );

```

### R Send

**Sintassi:** R Send( name, &lt;R Name( as_name ) | "as_name"&gt; )

**Descrizione:** Invia dati a R, dove l&apos;argomento name può rappresentare uno qualsiasi dei seguenti tipi di dati JMP (numerico | stringa | matrice | elenco | tabella di dati | colonna della tabella di dati).

**JMP Versione aggiunta:** prima della versione 14

#### Colonna

```jsl

R Init();dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt:weight );Close( dt );w = R Get( "dt.weight" );

```

#### Tabella di dati

```jsl

R Init();x = [1, 2, 3];R Send( x, "x1" );rx = R Get( "x1" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );R Send( dt );Close( dt );R Submit( "dt" );

```

### R Send File

**Sintassi:** R Send File( filename, &lt;R Name( name )&gt; )

**Descrizione:** Invia a R un file di dati, in cui l&apos;argomento filenameè una stringa che specifica il percorso del file da inviare a R.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();R Send File( "$SAMPLE_DATA/Big Class.jmp" );R Send File( "$SAMPLE_DATA/Baseball.jmp" );R Submit( "Big.Class" );R Submit( "Baseball" );

```

### R Submit

**Sintassi:** R Submit( statements )

**Descrizione:** Invia istruzioni a R. Le istruzioni possono essere sotto forma di valore stringa o elenco di valori stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();img_path = Get Path Variable( "TEMP" ) || "r_plot.png";code ="\[x <- rnorm(1000)hx <- hist(x, breaks=100, plot=FALSE)png("IMG_PATH")plot(hx, col=ifelse(abs(hx$breaks) < 1.669, 4, 2))dev.off()x <- rnorm (100)y <- x**2 + rnorm (100)summary(y)]\";// substitue portable path into R coder_code = Substitute( code, "IMG_PATH", img_path );R Submit( r_code );Wait( 3 );plot = Open( img_path );rc = Delete File( img_path );

```

### R Submit File

**Sintassi:** R Submit File( path )

**Descrizione:** Invia istruzioni a R mediante un file specificato dall&apos;argomento path.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();file_path = Get Path Variable( "SAMPLE_SCRIPTS" ) || "R/SI_example.R";R Submit File( file_path );

```

### R Term

**Sintassi:** R Term()

**Descrizione:** Deprecato in JMP 19 e non ha alcun effetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

R Init();R Term();

```

