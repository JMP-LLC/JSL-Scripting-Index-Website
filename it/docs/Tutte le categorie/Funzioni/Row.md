# Row



### As Table

**Sintassi:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Descrizione:** Converte una matrice in una tabella di dati. Si può usare l&apos;opzione invisible per evitare di visualizzare la tabella.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**Sintassi:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Descrizione:** Restituisce un valore di colonna senza proprietà della colonna applicate. Se non è specificata l&apos;opzione della riga, si assume la riga corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**Sintassi:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Descrizione:** Restituisce un riferimento alla colonna della tabella di dati specificata. La parola chiave "formattato" consente l&apos;accesso ai dati formattati, come l’etichetta del valore.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**Sintassi:** name = Column Name( n )

**Descrizione:** Restituisce il nome della n-esima colonna della tabella di dati corrente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**Sintassi:** y = Count( start, end, s, &lt;n=1&gt; )

**Descrizione:** Restituisce l&apos;i-esimo valore nella sequenza dei numeri da start a end, incrementandolo di s e ripetendo ogni numero n volte, dove i è determinato dal valore della funzione Row(). Poiché dipende dalla funzione Row(), la funzione Count() è utilizzata in genere nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Current Data Table

**Sintassi:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Descrizione:** Restituisce la tabella di dati corrente o, se presente, rende la tabella di dati specificata corrente.



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**Sintassi:** dt = Data Table( name|number )

**Descrizione:** Restituisce un riferimento alla tabella di dati specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**Sintassi:** y = Dif( x, &lt;n=1&gt; )

**Descrizione:** Restituisce x - Lag( x, n ), detto anche "prima differenza". Poiché dipende da Row(), Dif() è utile soprattutto nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**Sintassi:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Descrizione:** Restituisce un vettore di riga con le dimensioni della tabella di dati corrente, una tabella di dati specificata, o una matrice. Le dimensioni sono il numero di righe e il numero di colonne e sono elencate in tale ordine.

**JMP Versione aggiunta:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**Sintassi:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Descrizione:** Restituisce un riferimento alla tabella di dati specificata.



La ricerca è limitata alle tabelle nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Sintassi:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Descrizione:** Restituisce un elenco di tutte le tabelle di dati aperte.



L&apos;elenco è limitato alle tabelle nel progetto corrente (oppure nessun progetto se non si sta eseguendo lo script in un progetto).



Per specificare un progetto, usare l&apos;argomento facoltativo Progetto() con un titolo, indice, riquadro di visualizzazione o oggetto finestra. Usare Progetto(0) per non specificare alcun progetto quando si esegue lo script in un progetto.

**JMP Versione aggiunta:** 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

#### Esempio 2

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**Sintassi:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Descrizione:** Restituisce il valore di x con la riga attuale definita come Row() - n. Poiché dipende da Row(), Lag() è utile soprattutto nelle formule di colonna.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**Sintassi:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Descrizione:** Restituisce il numero di righe della tabella di dati corrente, di una tabella di dati specificata o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Sintassi:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Descrizione:** Restituisce il numero di righe della tabella di dati corrente, di una tabella di dati specificata o di una matrice.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Sintassi:** n = N Table()

**Descrizione:** Restituisce il numero di tabelle di dati al momento aperte.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**Sintassi:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Descrizione:** Crea una nuova colonna nella tabella di dati corrente. Gli argomenti facoltativi actions sono tutti i messaggi supportati dalle colonne di dati.

**JMP Versione aggiunta:** prima della versione 14

#### Semplici

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

#### Simile

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

### New Column by Text Matching

**Sintassi:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Descrizione:** Crea una nuova colonna eseguendo un pattern di espressione regolare su una colonna esistente.

**JMP Versione aggiunta:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**Sintassi:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Descrizione:** Crea una nuova tabella di dati. "Invisible" nasconde la tabella di dati dalla visualizzazione, ma la elenca nella finestra Home di JMP. "Private" nasconde completamente la tabella. "Visible" è l&apos;impostazione predefinita e crea una normale tabella visibile ed elencata nella finestra Home di JMP. Gli argomenti actions facoltativi sono qualsiasi messaggio supportato dalle tabelle di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**Sintassi:** y = Row(); Row() = y

**Descrizione:** Restituisce la riga corrente in una tabella di dati. Può essere impostato come un valore L. Ripristina la riga corrente assegnando il valore 0.

**JMP Versione aggiunta:** prima della versione 14

#### Imposta riga

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

#### Reimposta riga

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Sequence

**Sintassi:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Descrizione:** Restituisce il Row()esimo elemento nella sequenza di numeri da start a end incrementato di incr. Ogni numero della sequenza è ripetuto n volte. A causa della dipendenza da Row(), la funzione Sequence() è utile principalmente in formule di colonna. Per creare sequenze come matrici JSL, vedere Index().

**JMP Versione aggiunta:** prima della versione 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**Sintassi:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Descrizione:** Sottoscrive all&apos;elenco delle tabelle di dati per ricevere comunicazione quando una nuova tabella di dati viene aggiunta o chiusa.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

#### Esempio 2

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Sintassi:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Descrizione:** Restituisce l&apos;i-esimo valore di un oggetto indicizzabile che può essere una colonna di una tabella di dati, una matrice, un elenco o un elemento di visualizzazione report.

**JMP Versione aggiunta:** prima della versione 14

```jsl

{11, 12, 13}[2];

```

### Suppress Formula Eval

**Sintassi:** Suppress Formula Eval( &lt;suppress=1&gt; )

**Descrizione:** Elimina la valutazione delle formule in tutte le tabelle di dati se l&apos;argomento è diverso da zero.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**Sintassi:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Descrizione:** Rimuove la sottoscrizione all&apos;elenco delle tabelle di dati aggiunto tramite il comando "sottoscrivi all&apos;elenco delle tabelle di dati".

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

#### Esempio 2

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

