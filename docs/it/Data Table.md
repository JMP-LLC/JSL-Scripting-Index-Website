# Data Table



## Column Scripting

### Add Column Properties

**Sintassi:** obj << Add Column Properties

**Descrizione:** Aggiunge proprietà alla colonna selezionata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

### Add From Row States

**Sintassi:** obj << Add From Row States

**Descrizione:** Aggiorna una colonna di stato delle righe con le modifiche di stato utilizzate attualmente che non corrispondono allo stato predefinito.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

### Add To Row States

**Sintassi:** obj << Add To Row States

**Descrizione:** Copia tutti i valori di stato della riga presenti in una colonna e che non corrispondono allo stato predefinito nello stato di riga utilizzato attualmente nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

### Codes to Labels

**Sintassi:** :col << Codes To Labels(<AssociativeArray>|<ListOfAssignments>)

**Descrizione:** Crea una colonna di valori alfanumerici utilizzando etichette di valori corrispondenti ai codici originali.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

### Color Cell by Value

**Sintassi:** obj << Color Cell by Value( state=0|1 )

**Descrizione:** Cambia il colore per la visualizzazione di celle nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =
	-10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

### Color Cells

**Sintassi:** obj << Color Cells( color, <row | { row1, row2, ...} > )

**Descrizione:** Colora le celle della colonna con il colore specificato. Se non sono indicate le righe, viene applicato lo stesso colore all&apos;intera colonna.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

### Compact

**Sintassi:** :col << Compact( <1|0> )

**Descrizione:** Cambia gli elementi interni di una colonna alfanumerica in modo da memorizzare una sola copia di ogni valore, risparmiando potenzialmente memoria e accelerando alcune operazioni. L&apos;opzione Salva formato controlla il formato in cui viene salvata la colonna. Il formato ridotto è più piccolo e veloce da caricare, ma la tabella non può essere aperta in JMP 17 e versioni precedenti. Il formato predefinito utilizza la preferenza del formato di salvataggio.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

### Convert to Table Column

**Sintassi:** obj << Convert to Table Column

**Descrizione:** Aggiunge la colonna di trasformazione alla tabella di dati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

### Copy from Row States

**Sintassi:** obj << Copy from Row States

**Descrizione:** Copia in una colonna tutti i valori di stato della riga utilizzati attualmente nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

### Copy to Row States

**Sintassi:** obj << Copy to Row States

**Descrizione:** Copia tutti i valori di stato della riga presenti in una colonna nello stato di riga utilizzato attualmente nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

### Data Type

**Sintassi:** obj << Data Type(  "Numeric"|"Character"|"Expression"|"Row State", <Format("format string")>, <Input Format("format string")>, <1|2|4>, < <<Fail On Conversion Error >, < <<Return Failed Rows > )

**Descrizione:** Imposta il tipo di dati per la colonna. Utilizzando gli argomenti facoltativi, è anche possibile impostare il formato, il formato di input e la larghezza in byte se la colonna è numerica. Se i valori non vengono convertiti, annulla la modifica del tipo di dati. Ciò è particolarmente utile quando si converte una colonna alfanumerica in una colonna numerica. Restituisci righe non riuscite restituisce un elenco contenente gli indici delle righe la cui conversione non è riuscita.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Esempio 4**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

### Delete Formula

**Sintassi:** obj << Delete Formula

**Descrizione:** Elimina qualsiasi formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

### Delete Property

**Sintassi:** obj << Delete Property( property name )

**Descrizione:** Elimina la proprietà con nome dalla colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

### Eval Formula

**Sintassi:** obj << Eval Formula

**Descrizione:** Valuta la formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

### Format

**Sintassi:** obj << Format( "Best|Fixed Dec...", <width>, <dec>, <"Use Thousands Separator">  )

obj << Format( "mdy|ddmmyy|Long Date...", width )

obj << Format( "Format Pattern", pattern )

obj << Format("Currency", <Country symbol>, <width>, <"Use Thousands Separator"> ) 

obj << Format("Use Thousands Separator" )

**Descrizione:** Imposta il formato utilizzato per visualizzare i dati nella colonna. I formati disponibili sono tutti quelli elencati sotto la voce Formato nella finestra di dialogo Informazioni sulla colonna.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = New Table( "hour24_times",
	Add Rows( 3 ),
	New Column( "time",
		Continuous,
		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),
		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )
	)
);

```

### Formula

**Sintassi:** obj << Set Formula( formula ) 

obj << Formula( formula )

**Descrizione:** Imposta la formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

### Get Column Properties

**Sintassi:** obj << Get Column Properties

**Descrizione:** Copia tutte le proprietà definite nelle colonne selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

### Get Compact

**Sintassi:** obj << Get Compact

**Descrizione:** È un insieme compatto sulla colonna

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

### Get Data Table

**Sintassi:** obj << Get Data Table

**Descrizione:** Ottiene la tabella di dati della colonna.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

### Get Data Type

**Sintassi:** obj << Get Data Type( <"English">  )

**Descrizione:** Restituisce il tipo di dati per la colonna. Se si omette la parola chiave "English", il tipo di dati viene restituito nella lingua in cui è eseguito JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

### Get Data Type Length

**Sintassi:** obj << Get Data Type Length( <English> )

**Descrizione:** Restituisce il tipo di dati e la lunghezza dei dati della colonna. È restituito solo il tipo di dati se la lunghezza dei dati non è fissa, come la maggior parte delle colonne alfanumeriche.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),
	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) )
);
nameTypeLength = dt:Name << Get Data Type Length;
ageTypeLength = dt:Age << Get Data Type Length;
Show( nameTypeLength, ageTypeLength );

```

### Get Display Width

**Sintassi:** obj << Get Display Width

**Descrizione:** Ottiene la larghezza di visualizzazione della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

### Get Excluded

**Sintassi:** obj << Get Excluded

**Descrizione:** Restituisce 1 se la colonna è esclusa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

### Get Field Width

**Sintassi:** obj << Get Field Width

**Descrizione:** Restituisce la larghezza del campo utilizzato per visualizzare i dati nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

### Get Format

**Sintassi:** obj << Get Format

**Descrizione:** Restituisce il formato per la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

### Get Formula

**Sintassi:** obj << Get Formula

**Descrizione:** Restituisce la formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

### Get Group Name

**Sintassi:** obj << Get Group Name

**Descrizione:** Restituisce il nome del gruppo o il percorso del gruppo che contiene questa colonna, se esistente.

**JMP Versione aggiunta:** 19

**Gruppo nidificato**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**Gruppo semplice**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

### Get Header Background Color

**Sintassi:** obj << Get Header Background Color

**Descrizione:** Ottiene il colore dell&apos;intestazione

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

### Get Header Chart Type

**Sintassi:** obj << Get Header Chart Type

**Descrizione:** Ottiene il tipo di grafico visualizzato nell&apos;intestazione della colonna della tabella di dati.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

### Get Header Text Color

**Sintassi:** obj << Get Header Text Color

**Descrizione:** Ottiene il colore del testo dell&apos;intestazione

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

### Get Hidden

**Sintassi:** obj << Get Hidden

**Descrizione:** Restituisce 1 se la colonna è nascosta

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

### Get Initial Data

**Sintassi:** obj << Get Initial Data

**Descrizione:** Ottiene il valore dell&apos;espressione utilizzata per inizializzare i dati della colonna.

```js

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

### Get Input Format

**Sintassi:** obj << Get Input Format

**Descrizione:** Restituisce il formato utilizzato per l&apos;input e la memorizzazione dei dati per la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

### Get Labeled

**Sintassi:** obj << Get Labeled

**Descrizione:** Restituisce 1 se la colonna è etichettata

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

### Get List Check

**Sintassi:** obj << Get List Check

**Descrizione:** Restituisce la verifica elenco, se definita nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

### Get Lock

**Sintassi:** obj << Get Lock

**Descrizione:** Restituisce il valore vero (true) se una colonna è bloccata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

### Get Modeling Type

**Sintassi:** obj << Get Modeling Type( <"English">  )

**Descrizione:** Restituisce il tipo di modellizzazione per la colonna. Se si omette la parola chiave "English", il tipo di modellizzazione viene restituito nella lingua in cui è eseguito JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

### Get Name

**Sintassi:** obj << Get Name

**Descrizione:** Restituisce il nome della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

### Get Properties List

**Sintassi:** obj << Get Properties List

**Descrizione:** Ottiene l&apos;elenco dei nomi di tutte le proprietà per questa colonna

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

### Get Property

**Sintassi:** obj << Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency|  Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Descrizione:** Restituisce proprietà specifiche, se definite nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

### Get Range Check

**Sintassi:** obj << Get Range Check

**Descrizione:** Restituisce la verifica range, se definita nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

### Get Role

**Sintassi:** obj << Get Role( <"English">  )

**Descrizione:** Restituisce il ruolo per la colonna. Se si omette la parola chiave "English", il ruolo viene restituito nella lingua in cui è eseguito JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Restituisce lo script per ricreare la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

### Get Scroll Locked

**Sintassi:** obj << Get Scroll Locked

**Descrizione:** Restituisce 1 se la colonna ha lo scorrimento bloccato

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

### Get Selected

**Sintassi:** obj << Get Selected

**Descrizione:** Restituisce 1 se la colonna è selezionata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

### Get Stored Values

**Sintassi:** obj << Get Stored Values

**Descrizione:** Restituisce i valori nelle colonne senza conversione dei codici dei valori mancanti

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Stored Values;
Show( valuesMatrix );
valuesList = :Height << GetStoredValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

### Get Use Value Labels

**Sintassi:** obj << Get Use Value Labels

**Descrizione:** Restituisce lo stato del flag Utilizza etichette dei valori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

### Get Value Labels

**Sintassi:** obj << Get Value Labels

**Descrizione:** Restituisce le etichette dei valori, se definite nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

### Get Values

**Sintassi:** obj << Get Values

**Descrizione:** Restituisce i valori nella colonna.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

### Ignore Errors

**Sintassi:** obj << Ignore Errors( state=0|1 )

**Descrizione:** Imposta il flag per ignorare gli errori quando la formula della colonna viene valutata

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

### Input Format

**Sintassi:** obj << Input Format( format )

obj << Input Format( "Format Pattern", pattern )

**Descrizione:** Imposta il formato utilizzato per l&apos;input e la memorizzazione dei dati per la colonna. Questa opzione è utilizzata spesso per i formati di data e ora.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = New Table( "duration_table",
	Add Rows( 3 ),
	New Column( "durations",
		Continuous,
		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),
		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),
		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )
	)
);

```

### Is Transform Column

**Sintassi:** obj << Is Transform Column

**Descrizione:** Restituisce 1 se la colonna è una colonna di trasformazione, 0 in caso contrario.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

### IsTransformedOnSASExport

**Sintassi:** obj << IsTransformedOnSASExport

**Descrizione:** Restituisce un valore vero (true) se i dati nel data set SAS risultante per questa colonna saranno modificati al momento dell&apos;esportazione in SAS. Nota: l&apos;opzione si applica solo alle colonne delle date, poiché le date sono memorizzate in modo diverso in SAS e in JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

### Labels to Codes

**Sintassi:** :col << Labels to Codes(<AssociativeArray>|<ListOfAssignments>)

**Descrizione:** Crea una colonna di codici numerici con etichette di valori corrispondenti ai valori alfanumerici originali.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

### Lock

**Sintassi:** obj << Lock

**Descrizione:** Blocca la colonna impedendo qualsiasi ulteriore modifica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

### Preselect Role

**Sintassi:** obj << Preselect Role( "Nessun ruolo"|"X"|"Y"|"Peso"|"Freq"|"Validazione" )

**Descrizione:** Assegna un ruolo preselezionato alla colonna nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

### Remove Value Labels

**Sintassi:** obj << Remove Value Labels

**Descrizione:** Rimuove qualsiasi etichetta dei valori definita nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

### Reset Transform

**Sintassi:** obj << Reset Transform

**Descrizione:** Rimuove i dati memorizzati nella cache per la colonna di trasformazione. Effettuando l&apos;accesso ai dati della colonna la cache verrà ricostruita. Utilizzare questa opzione per ridurre la memoria o per consentire un ricalcolo se la formula dipende da informazioni esterne.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

### Set Data Type

**Sintassi:** obj << Set Data Type(  "Numeric"|"Character"|"Expression"|"Row State", <Format("format string")>, <Input Format("format string")>, <1|2|4>, < <<Fail On Conversion Error >, < <<Return Failed Rows > )

**Descrizione:** Imposta il tipo di dati per la colonna. Utilizzando gli argomenti facoltativi, è anche possibile impostare il formato, il formato di input e la larghezza in byte se la colonna è numerica. Se i valori non vengono convertiti, annulla la modifica del tipo di dati. Ciò è particolarmente utile quando si converte una colonna alfanumerica in una colonna numerica. Restituisci righe non riuscite restituisce un elenco contenente gli indici delle righe la cui conversione non è riuscita.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Esempio 4**

```js

Names Default To Here( 1 );
dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

### Set Display Width

**Sintassi:** obj << Set Display Width( number )

**Descrizione:** Modifica la larghezza di visualizzazione della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

### Set Each Value

**Sintassi:** obj << Set Each Value( number )

**Descrizione:** Imposta tutti i valori in una colonna a una costante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

### Set Excluded

**Sintassi:** obj << Set Excluded

**Descrizione:** Esclude la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

### Set Field Width

**Sintassi:** obj << Set Field Width( number )

**Descrizione:** Imposta la larghezza del campo utilizzato per visualizzare i dati nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

### Set Formula

**Sintassi:** obj << Set Formula( formula ) 

obj << Formula( formula )

**Descrizione:** Imposta la formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

### Set Header Background Color

**Sintassi:** obj << Set Header Background Color

**Descrizione:** Imposta il colore dell&apos;intestazione. Impostare a "Nessuno" per usare il colore predefinito

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

### Set Header Chart Type

**Sintassi:** obj << Set Header Chart Type

**Descrizione:** Imposta il tipo di grafico da visualizzare nell&apos;intestazione della colonna della tabella di dati.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

### Set Header Text Color

**Sintassi:** obj << Set Header Text Color

**Descrizione:** Imposta il colore del testo dell&apos;intestazione. Impostare a "Nessuno" per usare il colore predefinito

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

### Set Hidden

**Sintassi:** obj << Set Hidden

**Descrizione:** Nasconde la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

### Set Initial Data

**Sintassi:** obj << Set Initial Data

**Descrizione:** Inizializza i dati della colonna con qualsiasi costante o una semplice espressione.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

### Set Labeled

**Sintassi:** obj << Set Labeled

**Descrizione:** Usa il valore dei dati della colonna per l&apos;etichetta.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

### Set Modeling Type

**Sintassi:** obj << Set Modeling Type( "Nessuno"|"Continuo"|"Ordinale"|"Nominale"|"Stato della riga"|"Risposta multipla"|"Testo non strutturato"|"Vettore" )

**Descrizione:** Imposta il tipo di modellizzazione per la colonna nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

### Set Name

**Sintassi:** obj << Set Name( name )

**Descrizione:** Imposta il nome della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

### Set Property

**Sintassi:** obj << Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Descrizione:** Imposta le proprietà nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

### Set Scroll Locked

**Sintassi:** obj << Set Scroll Locked

**Descrizione:** Blocca lo scorrimento della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

### Set Selected

**Sintassi:** obj << Set Selected( state=0|1 )

**Descrizione:** Seleziona la colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

### Set Use for Marker

**Sintassi:** obj << Set Use for Marker

**Descrizione:** Usa i valori in questa colonna come indicatori in un grafico. Possono essere idonee colonne dell&apos;espressione con immagini o colonne alfanumeriche con ID.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

### Set Values

**Sintassi:** obj << Set Values( [ value1, value2, value3, ... ] )

**Descrizione:** Imposta i valori in una colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

### SetLock

**Sintassi:** obj << SetLock

**Descrizione:** Blocca la colonna impedendo qualsiasi ulteriore modifica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

### Suppress Eval

**Sintassi:** obj << Suppress Eval( state=0|1 )

**Descrizione:** Imposta il flag per eliminare la valutazione della formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

### Use Value Labels

**Sintassi:** obj << Use Value Labels( state=0|1 )

**Descrizione:** Sostituisce le etichette dei valori definite nella colonna in tutto l&apos;output.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

### Value Labels

**Sintassi:** obj << Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Descrizione:** Imposta le etichette dei valori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Add Multiple Columns

**Sintassi:** obj << Add Multiple Columns( Column prefix, number of columns, <before first|after last|after(column)>, Character|Numeric|Row State, <fieldwidth(number)> )

**Descrizione:** Crea nuove colonne nella tabella di dati corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

### Clear Column Selection

**Sintassi:** obj << Clear Column Selection

**Descrizione:** Deseleziona le colonne selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clone Formula Column

**Sintassi:** obj << Clone Formula Column( column, n, <Substitute Column Reference( column1, list )> )

**Descrizione:** Crea n nuove colonne con formula sulla base della column specificata. I riferimenti della colonna a column1 dalla formula originale saranno sostituiti da ogni colonna in list per tutte le colonne n. Usare argomenti multipli Substitute Column Reference quando si sostituisce più di un riferimento di colonna dalla formula originale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );
list1 = {:BP 8W, :BP 8F};
list2 = {:BP 12W, :BP 12F};
list3 = {:BP 6W, :BP 6F};
dt << Clone Formula Column(
	"Day 1",
	2,
	Substitute Column Reference( :BP 8M, list1 ),
	Substitute Column Reference( :BP 12M, list2 ),
	Substitute Column Reference( :BP 6M, list3 )
);

```

### Column

**Sintassi:** Column( <data table>, "column name"|column number )

**Descrizione:** Restituisce un riferimento alla colonna della tabella di dati specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### Columns Manager

**Sintassi:** obj << Columns Manager

**Descrizione:** Richiama Gestione colonne nella tabella corrente, che mostra le proprietà e le statistiche delle colonne.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

### Combine Columns

**Sintassi:** obj << Combine Columns

**Descrizione:** Combina una serie di colonne in una colonna delimitata (a risposta multipla).

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compress Selected Columns

**Sintassi:** obj << Compress Selected Columns( { column1, column2, ... )

**Descrizione:** Comprime ciascuna colonna nella forma più compatta.

I dati alfanumerici saranno di 1 byte se vi sono meno di 255 livelli.

I dati numerici saranno di 1 byte se i dati sono compresi tra -127 e 127.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Exclude/Unexclude

**Sintassi:** obj << Exclude( 0|1 )

**Descrizione:** Esclude la colonna dall&apos;esecuzione di qualsiasi analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

### Formula

**Sintassi:** obj << Formula

**Descrizione:** Imposta una formula nella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

### Freq

**Sintassi:** obj << Preselect Role( Freq )

**Descrizione:** Assegna il ruolo Freq alla colonna della tabella di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

### Go to

**Sintassi:** obj << Go to( column name|column number )

**Descrizione:** Seleziona la colonna specificata nella tabella di dati corrente e si posiziona su di essa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

### Hide/Unhide

**Sintassi:** obj << Hide( 0|1 )

**Descrizione:** Nasconde la colonna nella griglia dei dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

### Invert Column Selection

**Sintassi:** obj << Invert Column Selection( <list of columns> )

**Descrizione:** Inverte la selezione delle colonne corrente. Se è specificato un elenco di colonne, saranno selezionate le colonne non nell’elenco.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

### Label/Unlabel

**Sintassi:** obj << Label( 0|1 )

**Descrizione:** Imposta questa colonna come etichetta per l&apos;identificazione. I valori nella colonna compariranno in un grafico quando si seleziona un punto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

### Make Indicator Columns

**Sintassi:** obj << Make Indicator Columns

**Descrizione:** Crea un set di colonne di indicatori dalla colonna selezionata

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Move Selected Columns

**Sintassi:** obj << Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({<a>, <b>, ...}) )

**Descrizione:** Sposta le colonne selezionate nella tabella di dati.

**After column**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

### New Column

**Sintassi:** obj << New Column( <name>, <data type>, <modeling type>, <Format()>, <Formula()>, <Set Property()>, <Set Values()>, <Like()> )

**Descrizione:** Crea una nuova colonna nella tabella di dati corrente.

**Like**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**Nuova tabella**

```js

Names Default To Here( 1 );
New Table( "test",
	Add Rows( 5 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )
	),
	New Column( "age",
		Numeric,
		Ordinal,
		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),
		Set Values( [12, 12, 12, 12, 12] )
	),
	New Column( "code",
		Character( 2 ),
		Nominal,
		Set Values( {"AA", "AA", "BB", "BB", "AA"} )
	)
);

```

**Semplici**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

### New Formula Column

**Sintassi:** dt << New Formula Column(Operation(name, <Category(name)>), Columns(columns), <Group By(columns)>)

**Descrizione:** Crea una colonna della formula nella tabella utilizzando le colonne specificate e applicando le colonne delle operazioni e di raggruppamento facoltativo. La categoria dell&apos;operazione può essere specificata, se necessario, per chiarire il nome dell&apos;operazione. Restituisce un elenco di riferimenti di colonna alle colonne create.

**JMP Versione aggiunta:** 17

**Log 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

**Raggruppa per**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

### Next Selected Column

**Sintassi:** obj << Next Selected Column

**Descrizione:** Va alla colonna selezionata successiva.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

### No Role

**Sintassi:** obj << Preselect Role( No Role )

**Descrizione:** Rimuove il ruolo assegnato dalla colonna della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

### Original Order

**Sintassi:** obj << Original Order

**Descrizione:** Riporta le colonne al loro ordine originale nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

### Paste Column Properties

**Sintassi:** obj << Paste Column Properties

**Descrizione:** Incolla dagli Appunti elenchi multipli di proprietà delle colonne in colonne multiple. Facoltativamente è possibile specificare un elenco di colonne target invece di selezionarle nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Previous Selected Column

**Sintassi:** obj << Previous Selected Column

**Descrizione:** Va alla colonna selezionata precedente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
dt << Next Selected Column;
Wait( 2 );
dt << Previous Selected Column;

```

### Reorder by Data Type

**Sintassi:** obj << Reorder by Data Type

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per tipo di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

### Reorder by Modeling Type

**Sintassi:** obj << Reorder by Modeling Type

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per tipo di modellizzazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

### Reorder by Name

**Sintassi:** obj << Reorder by Name

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per nome di colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

### Reverse Order

**Sintassi:** obj << Reverse Order

**Descrizione:** Inverte l&apos;ordine delle colonne nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

### Set Label Columns

**Sintassi:** obj << Set Label Columns( column(s) )

**Descrizione:** Assegna un ruolo dell&apos;etichetta a colonne selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Scroll Lock Columns

**Sintassi:** obj << Set Scroll Lock Columns( column(s) )

**Descrizione:** Blocca colonne selezionate della tabella di dati per impedirne lo scorrimento.  Per indicare che una colonna è bloccata, il colore di sfondo cambia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Text to Columns

**Sintassi:** obj << Text to Columns

**Descrizione:** Crea un set di colonne di testo o di colonne di indicatori da una colonna con testo delimitato

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Use for Marker

**Sintassi:** obj << UseForMarker( 0|1 )

**Descrizione:** Usa i valori in questa colonna come indicatori in un grafico. Possono essere idonee colonne dell&apos;espressione con immagini o colonne alfanumeriche con ID.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

### Validation

**Sintassi:** obj << Preselect Role( Validation)

**Descrizione:** Assegna il ruolo Validazione alla colonna della tabella di dati

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

### Weight

**Sintassi:** obj << Preselect Role( Weight )

**Descrizione:** Assegna il ruolo Peso alla colonna della tabella di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

### X

**Sintassi:** obj << Preselect Role( X )

**Descrizione:** Assegna il ruolo X alla colonna della tabella di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

### Y

**Sintassi:** obj << Preselect Role( Y )

**Descrizione:** Assegna il ruolo Y alla colonna della tabella di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### Add Rows

**Sintassi:** obj << Add Rows( <n>, <At Start|At End|After(m)> | {list of (column name = value) pairs}) )

**Descrizione:** Aggiunge n righe, all&apos;inizio, alla fine o dopo la riga m alla tabella di dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

### Clear Row States

**Sintassi:** obj << Clear Row States

**Descrizione:** Cancella da tutte le righe gli stati, compresi selezionato, escluso, nascosto, indicatori, etichette e colori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

### Clear Select

**Sintassi:** obj << Clear Select

**Descrizione:** Cancella o deseleziona le righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

### Clear Selected Row States

**Sintassi:** obj << Clear Selected Row States

**Descrizione:** Cancella dalle righe selezionate gli stati, compresi selezionato, escluso, nascosto, indicatori, etichette e colori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

### Color Rows by Row State

**Sintassi:** obj << Color Rows by Row State

**Descrizione:** Mostra/Nasconde, nelle celle della tabella di dati, il colore assegnato nello stato della riga.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

### Color by Column

**Sintassi:** obj << Color by Column( column, <Color( number )>, <Color Theme( color theme )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Descrizione:** Assegna un colore a ciascuna riga nella tabella di dati in base al valore della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

### Color or Mark by Column

**Sintassi:** obj << Color or Mark by Column( column, <Color( number )>, <Color Theme( color theme )>, <Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )> )

**Descrizione:** Associa colori o indicatori ai valori di una colonna specifica

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

### Colors

**Sintassi:** obj << Colors( color )

**Descrizione:** Colora le righe selezionate in tutti gli output grafici contenenti indicatori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

### Data Filter

**Sintassi:** obj << Data Filter( <Location(x,y)>, <"Close Outline">, <"Local">, <Inverse(0|1)>, <Show Columns Selector(0|1)>, <Title(string)>, <Save And Restore Current Row States(0|1)>, <Conditional(0|1)>, <Auto Clear(0|1)>, <Group By AND(0|1)>, <Show Histograms And Bars(0|1)>, <Count Excluded Rows(0|1)>, <Mode(...)>, <Add Filter(Columns(...), Where(...), Display(...), <Select Missing(cols)>, <Order By Count(cols)>)>, <Favorites(...)>, <Animation(...)> )

**Descrizione:** Crea o mostra un filtro sui dati dove si selezionano interattivamente sottoinsiemi complessi di dati. L&apos;opzione Mode determina quali stati della riga sono interessati dalla selezione nel filtro. Il comando Add Filter aggiungerà un gruppo di filtri con le clausole Columns e Where specificate. Se sono presenti più gruppi di filtri, il comportamento combinato è determinato dall&apos;opzione Group By AND. Se è specificata la parola chiave Local, il filtro può essere incorporato in un report per filtrare una o più piattaforme senza interessare altri report.

**Filtro sui dati globale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Location( {218, 114} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :age, :height ),
		Where( :age == {13, 14, 15} ),
		Where( :height >= 65 & :height <= 70 )
	),
	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
);

```

**Filtro sui dati locali**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Local Data Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Mode( Show( 1 ), Include( 1 ) ),
				Add Filter(
					columns( :age, :height ),
					Where( :age == {13, 14, 15} ),
					Where( :height >= 65 & :height <= 70 )
				),
				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
			),
			dt << Run Script( "Bivariate" ),
			dt << Run Script( "Distribution" )
		)
	)
);

```

### Data View

**Sintassi:** obj << Data View

**Descrizione:** Crea una nuova visualizzazione dati delle righe al momento selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

### Delete Rows

**Sintassi:** obj << Delete Rows

**Descrizione:** Elimina le righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

### Exclude/Unexclude

**Sintassi:** obj << Exclude/Unexclude

**Descrizione:** Esclude le righe selezionate in modo che non contribuiscano ai calcoli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

### Get Rows

**Sintassi:** obj << Get Rows( number )

**Descrizione:** Restituisce un elenco di valori delle colonne per le righe specificate

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

### Go to Row

**Sintassi:** obj << Go to Row( row number )

**Descrizione:** Restituisce un oggetto di riga, va alla riga specificata, seleziona la riga e la evidenzia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

### Hide and Exclude

**Sintassi:** obj << Hide and Exclude

**Descrizione:** Nasconde le righe selezionate non facendole comparire sui grafici e le esclude dai calcoli.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

### Hide/Unhide

**Sintassi:** obj << Hide/Unhide

**Descrizione:** Nasconde le righe selezionate in modo che non compaiano nei grafici.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

### Insert Rows

**Sintassi:** obj << Insert Rows

**Descrizione:** Inserisce le righe prima delle righe selezionate. Non ha effetto se non è selezionata alcuna riga.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

### Invert Row Selection

**Sintassi:** obj << Invert Row Selection

**Descrizione:** Inverte la selezione di righe corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

### Label/Unlabel

**Sintassi:** obj << Label/Unlabel

**Descrizione:** Assegna un&apos;etichetta alle righe selezionate in tutti gli output grafici contenenti indicatori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

### Marker by Column

**Sintassi:** obj << Marker by Column( column, <Marker( number )>, <Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )>, <Color theme( string )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Descrizione:** Assegna un indicatore a ciascuna riga nella tabella di dati in base al valore della colonna specificata.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/big class.jmp" );
dt << Marker By Column(
	:age,
	Marker( 1 ),
	Color theme( "White to Red" ),
	Marker Theme( "alphanumeric" ),
	Reverse Scale( 1 ),
	Make Window With Legend
);

```

### Markers

**Sintassi:** obj << Markers( marker )

**Descrizione:** Cambia gli indicatori delle righe selezionate in tutti gli output grafici contenenti indicatori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

### Move Rows

**Sintassi:** obj << Move Rows( At Start|At End|After(n) )

**Descrizione:** Sposta le righe selezionate in alto o in basso nella tabella di dati, fino alla nuova posizione specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

### Name Selection in Column

**Sintassi:** obj << Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Descrizione:** Crea una nuova colonna categorica con due valori, ciascuno di essi per gli insiemi di righe selezionate e non selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

### Next Selected

**Sintassi:** obj << Next Selected

**Descrizione:** Evidenzia la riga successiva nel gruppo di righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

### Previous Selected

**Sintassi:** obj << Previous Selected

**Descrizione:** Evidenzia la riga precedente nel gruppo di righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

### Row Editor

**Sintassi:** obj << Row Editor

**Descrizione:** Apre la finestra di dialogo Editor delle righe per le righe selezionate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

### Row Selection

**Sintassi:** obj << Row Selection( Select Where(condition), < current selection("extend" | "restrict" | "clear")>, <Dialog("Keep Dialog Open")>, <Match Case(0|1)> )

**Descrizione:** Seleziona tutte le righe che soddisfano la condizione definita, con la possibilità di estendere o limitare le selezioni esistenti, di eseguire la selezione o solo di mostrare la finestra di dialogo. Quando si omette l&apos;opzione Maiuscole/minuscole, l&apos;impostazione di default è una corrispondenza con distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** 15

**Esempio 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Esempio 3**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**Esempio 4**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

### Select All Matching Cells

**Sintassi:** obj << Select All Matching Cells

**Descrizione:** Seleziona in tutte le tabelle di dati aperte tutte le righe in cui i valori nella colonna selezionata corrispondono a uno dei valori delle righe selezionate in quella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

### Select All Rows

**Sintassi:** obj << Select All Rows

**Descrizione:** Seleziona tutte le righe nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

### Select Dominant

**Sintassi:** obj << Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Descrizione:** Seleziona tutte le righe in base ai valori alto (1) o basso (0) dei limiti nel grafico di Pareto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

### Select Duplicate Rows

**Sintassi:** obj << Select Duplicate Rows( <match(column1, column2, ...)> )

**Descrizione:** Seleziona righe duplicate e corrispondenze nelle colonne selezionate. Se non sono specificate colonne di corrispondenza, le righe sono corrispondenti su tutte le colonne della tabella. Restituisce il numero di righe duplicate.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

### Select Excluded

**Sintassi:** obj << Select Excluded

**Descrizione:** Seleziona tutte le righe escluse nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

### Select Hidden

**Sintassi:** obj << Select Hidden

**Descrizione:** Seleziona tutte le righe nascoste nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

### Select Labeled

**Sintassi:** obj << Select Labeled

**Descrizione:** Seleziona tutte le righe etichettate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

### Select Matching Cells

**Sintassi:** obj << Select Matching Cells

**Descrizione:** Seleziona tutte le righe in cui i valori nella colonna selezionata corrispondono a uno dei valori delle righe selezionate in quella colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

### Select Randomly

**Sintassi:** obj << Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Descrizione:** Seleziona in modo casuale un gruppo specificato di righe.

**Dimensione campionaria**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**Probability**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**Tasso di campionamento**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

### Select Rows

**Sintassi:** obj << Select Rows( [row1, row2, ...] )

**Descrizione:** Seleziona le righe specificate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

### Select Where

**Sintassi:** obj << Select Where( condition, < current selection("extend" | "restrict" | "clear")> )

**Descrizione:** Le opzioni sono estendere o limitare le selezioni, eseguire la selezione o mostrare solo la finestra di dialogo.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Get Data Filter

**Sintassi:** expr = obj << Get Data Filter

**Descrizione:** Restituisce la definizione del filtro della vista filtro

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

### Get Data Table

**Sintassi:** data table = obj << Get Data Table

**Descrizione:** Restituisce la tabella che possiede la vista filtro

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

### Get Name

**Sintassi:** string = obj << Get Name

**Descrizione:** Ottiene il nome della vista filtro

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

### Get Show Hidden Rows

**Sintassi:** 0|1 = obj << Get Show Hidden Rows

**Descrizione:** Restituisce l&apos;impostazione per mostrare le righe nascoste per questa vista filtro

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Show Hidden Rows );

```

### Get Type

**Sintassi:** obj << Get Type

**Descrizione:** Ottiene il tipo di vista filtro; uno dei seguenti: "Non filtrata", "Filtrata" o "TemporaneaFiltrata".

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Is Locked

**Sintassi:** 0|1 = obj << Is Locked

**Descrizione:** Restituisce l&apos;impostazione del blocco per questa vista filtro

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Lock( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Is Locked );

```

### Is Temporary

**Sintassi:** 0|1 = obj << Is Temporary

**Descrizione:** Restituisce 1 se la vista filtrata è una vista filtro temporanea

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Is Unfiltered

**Sintassi:** 0|1 = obj << Is Unfiltered

**Descrizione:** Restituisce 1 se la vista filtrata è la vista filtro non filtrata

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

### Lock

**Sintassi:** obj << Lock( 0|1 )

**Descrizione:** Impedisce la modifica di questa vista filtro.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Lock( 1 );
Show( fv << Is Locked );

```

### Set Data Filter

**Sintassi:** obj << Set Data Filter( expr )

**Descrizione:** Modifica la definizione del filtro della vista filtro. La definizione del filtro della vista non filtrata non può essere modificata

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter(
		Inverse( 1 ),
		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
	)
);
Show( fv << Get Data Filter );

```

### Set Name

**Sintassi:** string = obj << Set Name( name )

**Descrizione:** Modifica il nome della vista filtro. I nomi della vista non filtrata e della vista filtrata temporanea non possono essere modificati.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Set Name( "Dream Penguins" ) );
Show( fv << Get Name );

```

### Show Hidden Rows

**Sintassi:** obj << Show Hidden Rows( 0|1 )

**Descrizione:** Modifica l&apos;impostazione per mostrare le righe nascoste per questa vista filtro.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Show Hidden Rows( 0 );
Show( fv << Get Show Hidden Rows );

```

### Add Properties to Table

**Sintassi:** obj << Add Properties to Table

**Descrizione:** Aggiungi le proprietà alla tabella.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Sintassi:** obj << Add Scripts to Table

**Descrizione:** Questo comando è un alias di &apos;Aggiungi le proprietà alla tabella&apos;.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**Sintassi:** obj << Anonymize( columns( columns ), <Output Table( name )> )

**Descrizione:** Crea una nuova tabella di dati con gli identificativi univoci rimossi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Sintassi:** obj << Apply Columns List Filter To Data Grid( state=0|1 )

**Descrizione:** Attivare per applicare i filtri dell&apos;elenco delle colonne della tabella di dati alla griglia dei dati.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Sintassi:** dt << Apply Formula([Columns(<col|{cols}|Group(col, count)|<group name>, [Ref(<name>)], [List Ref(<name>)]]+, [Output(In Place|In Place Formula|New Formula(<prefix>|New Static(<prefix>)], [Group(<name>)])

**Descrizione:** Utilizza una formula per trasformare una o più colonne e inserire i risultati (come formule o dati) in colonne nuove o esistenti.

È necessario definire almeno un gruppo di colonne (una singola colonna, un elenco esplicito di colonne, una sequenza di colonne o il nome di un gruppo di colonne esistente).

Il primo gruppo definito sostituisce i dati correnti delle colonne target con i risultati della formula. Se necessario, nella formula si può specificare un nome che si riferisca alle colonne prese una alla volta (Rif) o come un elenco di colonne (Rif elenco).

Infine, si può specificare il tipo di output, facoltativamente con un nome e il nome del gruppo per le nuove colonne.

**JMP Versione aggiunta:** 18

**New Data Columns/ListRef**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns(
		Group( :height, 2 ),
		Ref( "_relative_from_height" ),
		ListRef( "height_to_weight" )
	),
	Formula( _relative_from_height / Sum( height_to_weight ) ),
	Output( New Static )
);

```

**New Formula Columns/Grouping**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

**Simple New Formula Column**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Association Analysis

**Sintassi:** Association Analysis( Item( columns ), ID( columns ) )

**Descrizione:** Identifica connessioni tra gruppi di elementi in un evento o transazione indipendente. L&apos;analisi di associazione è frequentemente utilizzata per analizzare i dati transazionali (detti anche market basket) per identificare elementi che spesso compaiono insieme nelle transazioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Sintassi:** Attribute Chart( Y( columns ), X( columns ) )

**Descrizione:** Analizza le misurazioni categoriche per mostrare le misure di accordo tra le risposte, come i valutatori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Sintassi:** Bayesian Optimization

**Descrizione:** Recommends factor settings to optimize responses by augmenting the data table.

**JMP Versione aggiunta:** 19

### Begin Data Update

**Sintassi:** obj << Begin Data Update

**Descrizione:** Sospende tutti i messaggi di aggiornamento fino al raggiungimento del comando Termina aggiornamento dati. Questa opzione è utile per aggiornare numerose celle senza interruzioni e si applica solo alle modifiche nelle celle di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Bivariate

**Sintassi:** Bivariate( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua rispetto a un&apos;altra variabile continua. I metodi di analisi comprendono la stima di linee, polinomi, spline e densità bivariate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Sintassi:** Boosted Tree (Y( column ), X( columns ))

**Descrizione:** Costruisce un modello predittivo creando un grande albero decisionale additivo che è una sequenza di alberi decisionali più piccoli. Ognuno degli alberi è stimato sui residui dell&apos;albero precedente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**Sintassi:** Bootstrap Forest (Y( column ), X( columns ))

**Descrizione:** Costruisce un modello predittivo calcolando una media dei valori previsti da molti alberi decisionali. Ogni albero decisionale è stimato su un campione bootstrap casuale dei dati di training.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Bubble Plot

**Sintassi:** Bubble Plot( X( column ), Y( column ), <Sizes( column )>, <Time( column )>, <ID( column )>, <Coloring( column ) )

**Descrizione:** Produce un grafico a dispersione a bolle bidimensionale che può essere animato attraverso una variabile temporale. Ulteriori variabili possono essere utilizzate per dimensionare e colorare le bolle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**Sintassi:** CUSUM Control Chart( Y( column ), <X( column )>, <By( column )>, <Data Units( 0|1 )>, <Show Excluded Region( 0|1 )>  )

**Descrizione:** Crea un grafico che traccia le somme cumulative delle deviazioni delle medie dei sottogruppi da un target. Questo grafico è anche chiamato grafico CUSUM tabulare.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Categorical

**Sintassi:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Descrizione:** Riepiloga e analizza i dati della risposta categorica. I dati possono essere risposte semplici, risposte multiple, misure ripetute, accordo dei valutatori, risposte allineate o testo libero. Include la possibilità di generare tabelle a campi incrociati personalizzate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**Sintassi:** Cell Plot( Y( column(s) ), <X( column )> )

**Descrizione:** Genera una griglia rettangolare di celle disegnate con corrispondenza uno-a-uno ai valori della tabella di dati. Le celle della griglia sono colorate sulla base dei valori nelle celle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

### Checksum

**Sintassi:** obj << Checksum( < Version(version) >, < Include(flags) >, < Exclude(flags) > )

**Descrizione:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**Esempio 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Choice

**Sintassi:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Descrizione:** Modellizza i dati da un esperimento di scelta che studia le preferenze dei clienti. Stima la probabilità che una specifica configurazione sia preferita usando una forma di regressione logistica condizionale.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

### Clear Cell Colors

**Sintassi:** obj << Clear Cell Colors

**Descrizione:** Cancella il colore delle celle delle colonne selezionate. Se non è selezionata alcuna colonna, vengono cancellati i colori delle celle di tutte le colonne.

**JMP Versione aggiunta:** 15

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors();

```

### Clear Column Selection

**Sintassi:** obj << Clear Column Selection

**Descrizione:** Deseleziona le colonne selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**Sintassi:** obj << Clear Edit Lock( [ <"Modify Cells">, <"Add rows">, <"Add Columns">, <"Delete Rows">, <"Delete Columns">] )

**Descrizione:** Consente le operazioni specificate sulla tabella di dati non consentite in precedenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Sintassi:** obj << Clear Properties Selection( { property1, property2, ... )

**Descrizione:** Deseleziona le proprietà della tabella specificata dove l&apos;elenco può essere un elenco di nomi di proprietà o indici di proprietà. Se non compare alcun elenco, deselezionare tutte le proprietà selezionate.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**Sintassi:** dt << Clone( < Table Name(name) >, < Copy Formulas(1|0) >, < Eval Formulas(1|0) > )

**Descrizione:** Crea una copia della tabella di dati

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close

**Sintassi:** Close( data table name, <NoSave|Save("path")> )

**Descrizione:** Chiude la tabella di dati referenziata dal primo argomento, che per impostazione predefinita punta alla tabella di dati corrente. Il secondo argomento è utilizzato per salvare la tabella di dati. Utilizzare un&apos;estensione del file appropriata nel percorso per salvare le tabelle di dati in formato non JMP. Specificando NoSave non verrà richiesto di salvare o di ignorare le modifiche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Close Data Grid

**Sintassi:** obj << Close Data Grid

**Descrizione:** Chiude o apre la griglia di dati

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**Sintassi:** obj << Close Side Panels

**Descrizione:** Chiude o apre i riquadri laterali della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**Sintassi:** obj << Close summary panels

**Descrizione:** Chiude o apre i riquadri di riepilogo della tabella di dati.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**Sintassi:** obj << Cluster

### Cluster Variables

**Sintassi:** Cluster Variables( Y( columns ) )

**Descrizione:** Raggruppa le variabili (colonne) in gruppi che possono essere rappresentati da un singolo componente o variabile. Le variabili del cluster possono essere utilizzate come tecnica di riduzione delle dimensioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Collapse All Column Groups

**Sintassi:** obj << Collapse All Column Groups

**Descrizione:** Comprime tutti i gruppi di colonne

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**Sintassi:** obj << Column Filter

**Descrizione:** Retrieves object to manipulate active column filter for the table.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Expand All Column Groups;
dt:sex << Hide( 1 );

// Use immediately
dt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );
dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );
dt << Column Filter( Clear );

// Return an object and send messages later
cf = dt << Column Filter;
cf << Column Name( "3yr" );
cf << Get Script;

// Related to (can also send to object)
dt << Show Hidden Columns in Columns List( 0 );
dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Sintassi:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descrizione:** Crea uno scambiatore di colonne standalone

**JMP Versione aggiunta:** 16

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		V List Box(
			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),
			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )
		)
	)
);
cs << Link Platform( female );
cs << Link Platform( male );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )
	)
);
cs << Link Platform( b[1] );
cs << Link Platform( b[2] );

```

### Combine Columns

**Sintassi:** obj << Combine Columns

**Descrizione:** Combina diverse colonne in un&apos;unica colonna con i valori di ciascuna colonna di origine separati dal delimitatore specificato.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**Sintassi:** obj << Compare Data Tables( Compare with( Data Table( name )), <Compare table variables and scripts( 0|1)>, <show window>,<Compare columns attributes and properties( 0|1)>, <Compare data( 0|1 )>, <Show difference summary(0|1)>, <Show difference plot(0|1)> )

**Descrizione:** Confronta due tabelle di dati aperte e riporta le differenze tra i dati e tra i metadati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Sintassi:** obj << Compress File When Saved( state=0|1 )

**Descrizione:** Comprime il file durante il salvataggio della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Sintassi:** obj << Compress Selected Columns( { column1, column2, ...} )

**Descrizione:** Comprime ciascuna colonna nella forma più compatta.

I dati alfanumerici saranno di 1 byte se vi sono meno di 255 livelli.

I dati numerici saranno di 1 byte se i dati sono compresi tra -127 e 127.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Sintassi:** obj << Concatenate( <Private>, <Invisible>, Data Table( name ), <Data Table(name), ...> <Label( column )>, <Output Table( name ) | Append to first table>, <Keep Formulas>, <Create Source Column> )

**Descrizione:** Combina le righe di diverse tabelle di dati e crea una nuova tabella di dati o aggiunge le righe alla prima tabella di dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate(
	Data Table( dt1 ),
	Data Table( dt2 ),
	"Append to first table",
	"Create source column"
);

```

### Contingency

**Sintassi:** Contingency( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica in una serie di gruppi categorici. I metodi di analisi comprendono test del chi-quadrato e diagrammi a mosaico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Sintassi:** Contour Plot( X( column, column ), Y( column ) )

**Descrizione:** Produce un grafico di tre variabili in una vista bidimensionale dove la terza variabile è rappresentata da curve isometriche di valore costante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Sintassi:** Contour Profiler( Y( column1, column2, ...  ) )

**Descrizione:** Produce un grafico isometrico interattivo che consente di esplorare come una o più risposte previste cambiano attraverso coppie di fattori. I valori dei fattori non utilizzati nel grafico possono essere variati per esplorare ulteriormente l&apos;impatto delle impostazioni dei fattori sulle risposte previste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**Sintassi:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), <Chart( Position( number ), Points( Statistic( "statistic" ), <points options> ), Limits( Sigma( "sigma" ), <limits options> )> ) ) )

**Descrizione:** Consente di creare in modo interattivo carte di controllo, utilizzate per determinare se un processo è stabile e prevedibile. La piattaforma Costruttore di carte di controllo può essere utilizzata per creare i seguenti tipi di carte di controllo: IMR, BarraX, Esecuzione breve, Sequenziale, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sulle medie, A tre vie ed Evento raro.

**Carta P'**

```js

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

**Carta U'**

```js

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

**Grafico a tre vie (impostare dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico a tre vie (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

**Grafico BarraX/R**

```js

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**Grafico BarraX/S (impostare dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico BarraX/S (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico C**

```js

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Grafico della differenza esecuzione breve**

```js

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Class( "Short Run" ), Variables( Y( :Weight ), Part( :Product ) ) );

```

**Grafico della differenza esecuzione breve per BarraX**

```js

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**Grafico di esecuzione**

```js

Names Default To Here( 1 );
// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

**Grafico di range mobile mediano**

```js

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Grafico G degli eventi rari**

```js

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

**Grafico IMR**

```js

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Grafico Levey-Jennings**

```js

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

**Grafico NP**

```js

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Grafico P**

```js

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Grafico standardizzato esecuzione breve**

```js

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**Grafico standardizzato esecuzione breve per BarraX**

```js

Names Default To Here( 1 );
// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

**Grafico T degli eventi rari**

```js

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**Grafico U**

```js

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**IMR sul grafico della deviazione standard del gruppo (impostare dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico della deviazione standard del gruppo (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico delle medie (impostazione dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico delle medie (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle deviazioni standard di gruppo (impostare dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle deviazioni standard di gruppo (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle medie di gruppo (impostare dimensione del sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle medie di gruppo (variabile di sottogruppo)**

```js

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

### Copy Column Properties

**Sintassi:** obj << Copy Column Properties( <column 1 column 2, ...> )

**Descrizione:** Copia negli Appunti le proprietà delle colonne selezionate in un elenco di elenchi di proprietà separati. Facoltativamente è possibile specificare un elenco di colonne di origine invece di preselezionarle nella tabella di dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**Sintassi:** obj << Copy Selected Properties

**Descrizione:** Copia le proprietà della tabella selezionata negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**Sintassi:** obj << Copy Table Script( <"No data"> )

**Descrizione:** Copia uno script per ricreare la tabella di dati. Lo script risultante comprende tutti gli script della tabella memorizzati nella tabella di dati. Facoltativamente, aggiungere la parola chiave "Nessun dato" per omettere i dati dallo script.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Cumulative Damage

**Sintassi:** Cumulative Damage

**Descrizione:** Analizza modelli varying stress e step stress.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Custom Profiler

**Sintassi:** Custom Profiler( Y( column1, column2, ... ) )

**Descrizione:** Fornisce un&apos;interfaccia che consente di ottimizzare le risposte senza un output grafico. Questo profiler è utile per problemi più grandi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Debug Script

**Sintassi:** obj << Debug Script( name )

**Descrizione:** Esegue il debugging di uno script con nome memorizzato come proprietà nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**Sintassi:** obj << Decision Tree

### Define Tag

**Sintassi:** Define Tag(<name>, [Color(<color>)], [Symbol(<symbol char>)], [Description(<text>)], [Replace(<existing tag name>)])

**Descrizione:** Crea o aggiorna la definizione di un tag di colonna sulla tabella. Se il tag non esiste, crearlo. Assegnare facoltativamente colore, simbolo e altri attributi.

**JMP Versione aggiunta:** 19

**Color, Symbol, or None**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

**New Tag**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

**Replace**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Degradation

**Sintassi:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), <X( column )>, <Label( column )>, <Freq( column )>, <Censor( column )>, <Censor Code( value )>, <Upper Spec Limit( value )>, <Lower Spec Limit( value )>, <Censoring Time( value )> )

**Descrizione:** Modella la degradazione nel tempo usando curve lineari e non lineari. Le opzioni di analisi comprendono l&apos;analisi della stabilità e la generazione di pseudo dati di guasto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Delete Columns

**Sintassi:** obj << Delete Columns( <column>, <column>, ... )

**Descrizione:** Elimina le colonne specificate. Se non è specificato alcun argomento elimina le colonne selezionate nella tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**Sintassi:** obj << Delete Filter View( name | obj )

**Descrizione:** Elimina la vista filtro specificata.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv male = dt << New Filter View(
	"Male",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) )
);
Wait( 1 );
dt << Delete Filter View( fv dream );
dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Sintassi:** obj << Delete Scripts( <script| {script 1, script 2, script 3, ...} > )

**Descrizione:** Elimina gli script specificati dalla tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**Sintassi:** obj << Delete Table Property

**Descrizione:** Alias per Elimina Script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Sintassi:** obj << Delete Table Variable( name )

**Descrizione:** Elimina una variabile della tabella memorizzata nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Sintassi:** Delete Tag(<tag>|{<tag>, <tag>, ...}, [force(0|1)

**Descrizione:** Elimina un tag dalla tabella. I tag non vengono eliminati se una qualsiasi colonna li utilizza ancora, a meno che non venga fornito il flag Force(1).

**JMP Versione aggiunta:** 19

**Delete tag**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

**Force delete**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Sintassi:** obj << Deselect Column Group( name of group | list of names )

**Descrizione:** Deseleziona i gruppi di colonne. Se è omesso il gruppo di colonne, saranno deselezionati tutti i gruppi di colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Destructive Degradation

**Sintassi:** Destructive Degradation( Y( column ), Time( column ), <X( column )>, <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Descrizione:** Modella dati di degradazione distruttiva nel tempo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Diagram

**Sintassi:** Diagram( Y( column ), X( column ) )

**Descrizione:** Crea un diagramma di causa ed effetto. Detti anche diagrammi di Ishikawa o diagrammi a lisca di pesce, sono diagrammi gerarchici che consentono di esplorare le cause originali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Disable Undo

**Sintassi:** obj << Disable Undo( state=0|1 )

**Descrizione:** Quando l&apos;opzione è impostata, è impossibile annullare qualsiasi operazione sulla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### Discriminant

**Sintassi:** Discriminant( Y( columns ), X( columns ) )

**Descrizione:** Stima la distanza da ogni osservazione a ogni media multivariata del gruppo (centroide) mediante la distanza di Mahalanobis. Le osservazioni vengono poi classificate nel gruppo a cui sono più vicine.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**Sintassi:** Distance Matrix( Y( columns ) )

**Descrizione:** Calcola le distanze tra le righe utilizzando diversi metodi.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**Sintassi:** Distribution( Column() )

**Descrizione:** Mostra statistiche di distribuzione e di riepilogo univariate per ogni variabile. I risultati e le opzioni dipendono dal tipo di modellizzazione di ogni variabile. Alcune opzioni includono istogrammi, box plot, diagrammi dei quantili, stima di distribuzioni e analisi di capability.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**Sintassi:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Descrizione:** Avvia il metodo EMP (Evaluating the Measurement Process – Valutazione del processo di misurazione) per l&apos;analisi dei sistemi di misura. I grafici della media e di dispersione (range o deviazione standard) sono visualizzati per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### EWMA Control Chart

**Sintassi:** EWMA Control Chart( Y( column ), <Subgroup( column )>, <By( column )>, <Center Data( 1 )> )

**Descrizione:** Crea un grafico che traccia le medie mobili ponderate esponenzialmente e un diagramma che traccia le singole osservazioni o le medie dei sottogruppi. Un grafico EWMA è noto anche come grafico di controllo di feedback.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### End Data Update

**Sintassi:** obj << End Data Update

**Descrizione:** Invia tutti i messaggi di aggiornamento sospesi dall&apos;esecuzione del comando Inizia aggiornamento dati. Questa opzione è utile per aggiornare numerose celle senza interruzioni e si applica solo alle modifiche nelle celle di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**Sintassi:** obj << Exclude Columns( < 0|1 > | < { column1, column2, ... } >  )

**Descrizione:** Esclude le colonne dall&apos;esecuzione di qualsiasi analisi

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Sintassi:** obj << Exit Filter View

**Descrizione:** Torna alla vista non filtrata. Se si è già nella vista non filtrata, l&apos;operazione non ha alcun effetto.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**Sintassi:** obj << Expand All Column Groups

**Descrizione:** Espande tutti i gruppi di colonne

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Explore Missing Values

**Sintassi:** Explore Missing Values( Y( columns ) )

**Descrizione:** Trova pattern di valori mancanti ed esegue l&apos;imputazione.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Sintassi:** Explore Outliers( Y( columns ) )

**Descrizione:** Identifica, esplora e gestisce outlier in dati univariati o multivariati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Sintassi:** Explore Patterns( Y( columns ) )

**Descrizione:** Ricerca caratteristiche insolite nei dati, incluse lunghe esecuzioni, lunghe sequenze duplicate, valori formattati insoliti ed esecuzioni di relazioni lineari.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Sintassi:** Factor Analysis( Y( columns ) )

**Descrizione:** Scopre la struttura sottostante dei dati estraendo variabili non osservate, o fattori, che rappresentano la variabilità comune tra le variabili osservate. La rotazione dei fattori è utilizzata per aumentarne l&apos;interpretabilità.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fatigue Model

**Sintassi:** Fatigue Model( N( column ), X( column ), <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Descrizione:** Analizza i dati di fatica, noto anche come modellizzazione di curve S-N.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**Sintassi:** Fit Curve( Y( column ), X( column ) )

**Descrizione:** Stima vari modelli non lineari incorporati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**Sintassi:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), <Censor( column )> )

**Descrizione:** Analizza la distribuzione di dati tempo all&apos;evento parametrizzata da un singolo fattore di regressione. Le opzioni di analisi comprendono modelli di guasto accelerati, distribuzioni di sopravvivenza tra gruppi e trasformazioni di fattori di regressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Model

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Descrizione:** Stima modelli di regressione lineare, inclusi analisi della varianza, regressione logistica, componenti della varianza, regressione penalizzata, regressione stepwise, MANOVA e modelli di sopravvivenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Fit Parametric Survival

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Descrizione:** Stima un modello di regressione lineare sui tempi di sopravvivenza. Questi modelli possono essere usati per tempi di sopravvivenza che non possono essere espressi come una funzione di una o più variabili esplicative. Considera varie distribuzioni della sopravvivenza e la censura.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Fit Proportional Hazards

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Descrizione:** Stima un modello di regressione semiparametrica (il modello dei rischi proporzionali di Cox) per valutare l&apos;effetto delle variabili esplicative sui tempi di sopravvivenza prendendo in considerazione la censura.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### Formula Depot

**Sintassi:** Formula Depot

**Descrizione:** Un contenitore per modelli di previsione che supporta confronto di modelli, creazione di profili e generazione di codici di scoring. Il depot delle formule viene avviato dal menu Analizza, dai comandi Pubblica nelle piattaforme di modellizzazione, Ricodifica e Editor delle formule.

```js

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Sintassi:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Descrizione:** Stima modelli funzionali utilizzando un modello base B-Spline, P-Spline, Fourier o Wavelet. È possibile eseguire un&apos;analisi delle componenti principali funzionali sul modello funzionale per estrarre caratteristiche importanti dai dati. Esiste anche un&apos;opzione per eseguire l&apos;analisi delle componenti principali funzionali direttamente sui dati, senza prima stimare un modello di funzione di base.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Sintassi:** Gaussian Process( Y( column ), X( columns ) )

**Descrizione:** Modellizza la relazione tra una risposta continua e uno o più predittori continui come spline con interpolazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Get Active Filter View

**Sintassi:** fv = obj << Get Active Filter View

**Descrizione:** Ottiene la vista filtro attiva. Restituisce un oggetto VistaFiltro.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Sintassi:** obj << Get All Columns As Matrix

**Descrizione:** Restituisce la tabella di dati come una matrice. Le colonne alfanumeriche sono numerate secondo i livelli di ordinamento, a partire da 1.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**Sintassi:** obj << Get As Report

**Descrizione:** Restituisce un report della tabella di dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**Sintassi:** obj << Get Cell Height

**Descrizione:** Ottieni l&apos;altezza di visualizzazione di una riga.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**Sintassi:** obj << Get Column Group( name of column group | list of names )

**Descrizione:** Restituisce l&apos;elenco delle colonne nel gruppo di colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**Sintassi:** obj << Get Column Groups Names

**Descrizione:** Restituisce i nomi dei gruppi di colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**Sintassi:** obj << Get Column Names( <Numeric|Character|RowState>, <Continuous|Ordinal|Nominal>,<String> )

**Descrizione:** Restituisce i nomi delle colonne nella tabella di dati. Se si utilizza come parola chiave una stringa, vengono restituite stringhe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**Sintassi:** obj << Get Column Reference( list of column names )

**Descrizione:** Restituisce il riferimento della colonna delle stringhe nell&apos;elenco

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**Sintassi:** obj << Get Edit Lock

**Descrizione:** Ottieni l&apos;elenco delle operazioni non consentite nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**Sintassi:** obj << Get Excluded Columns

**Descrizione:** Restituisce le colonne attualmente escluse nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**Sintassi:** obj << Get Excluded Rows

**Descrizione:** Restituisce le righe al momento escluse nella tabella di dati. Preferire Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**Sintassi:** fv = obj << Get Filter View( name | <<Temporary | <<Unfiltered )

**Descrizione:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv dream = dt << Get Filter View( "Dream" );
Show( fv dream << Get Name );
Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Sintassi:** { fv, ... } = obj << Get Filter Views( < Temporary(0|1) >, < Unfiltered(0|1) > )

**Descrizione:** Ottiene un elenco di tutte le viste filtro. Di default, le viste temporanee e non filtrate non sono incluse.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );
Show( fvs << Get Name );

```

### Get Header Height

**Sintassi:** obj << Get Header Height

**Descrizione:** Ottiene l&apos;altezza di visualizzazione dell&apos;intestazione colonna

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**Sintassi:** obj << Get Hidden Columns

**Descrizione:** Restituisce le colonne attualmente nascoste nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**Sintassi:** obj << Get Hidden Rows

**Descrizione:** Restituisce le righe al momento nascoste nella tabella di dati. Preferire Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**Sintassi:** obj << Get Label Columns

**Descrizione:** Restituisce le colonne utilizzate per etichettare le righe.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**Sintassi:** obj << Get Labeled Rows

**Descrizione:** Restituisce le righe al momento etichettate nella tabella di dati. Preferire Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**Sintassi:** obj << Get Lock( state=0|1 )

**Descrizione:** Controlla se la tabella di dati è bloccata.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Sintassi:** obj << Get MM SAS DATA Step for Formula Columns

**Descrizione:** Crea il codice di un passo di DATA SAS Model Manager che corrisponde alle colonne della formula in una tabella di dati JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Sintassi:** obj << Get Name( <"Ignore Extension"> )

**Descrizione:** Restituisce il nome visualizzato della tabella di dati. Con l&apos;argomento facoltativo &apos;Ignora estensione&apos;, il comando restituisce il nome della tabella di dati senza l&apos;estensione

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**Sintassi:** obj << Get Path

**Descrizione:** Restituisce il percorso completo della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**Sintassi:** obj << Get Property(  name  )

**Descrizione:** Restituisce la proprietà con nome nella tabella di dati come uno script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**Sintassi:** obj << Get Row ID Width

**Descrizione:** Ottiene la larghezza di visualizzazione dell&apos;area ID della riga

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**Sintassi:** obj << Get Row States

**Descrizione:** Restituisce un vettore contenente valori di stato della riga codificati per ciascuna riga nella tabella di dati. Si noti che i valori di stato della riga codificati non possono essere usati come struttura di stato della riga nelle funzioni di stato della riga quali Colore di. L&apos;esempio 2 illustra una modalità in cui usare il vettore direttamente.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Sintassi:** obj << Get Rows Where

**Descrizione:** Restituisce le righe nella tabella di dati che corrispondono ai criteri della clausola Where. Preferire invece Where.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Sintassi:** obj << Get SAS DATA Step for Formula Columns

**Descrizione:** Crea il codice di un passo di DATA SAS che corrisponde alle colonne della formula in una tabella di dati JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Sintassi:** obj << Get Script( <script name> )

**Descrizione:** Restituisce lo script richiesto. Se è omesso il nome dello script, restituisce una rappresentazione del testo della tabella di dati insieme a tutti gli script memorizzati nei dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Sintassi:** obj << Get Script Group( name of script group )

**Descrizione:** Restituisce l&apos;elenco degli script nel gruppo.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**Sintassi:** obj << Get Script Groups Names

**Descrizione:** Restituisce l&apos;elenco dei nomi di gruppi di script.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Sintassi:** obj << Get Scroll Locked Columns

**Descrizione:** Restituisce le colonne attualmente con blocco dello scorrimento nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**Sintassi:** obj << Get Selected Columns

**Descrizione:** Restituisce i nomi delle colonne selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**Sintassi:** obj << Get Selected Properties( <{list of properties}> )

**Descrizione:** Ottiene le proprietà della tabella selezionata (variabile e script) in un elenco. Invece di selezionare è possibile usare un elenco facoltativo per specificare le proprietà da ottenere.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Sintassi:** obj << Get Selected Rows

**Descrizione:** Restituisce le righe attualmente selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**Sintassi:** obj << Get Table Script Names

**Descrizione:** Restituisce i nomi di tutte le proprietà nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**Sintassi:** obj << Get Table Variable( name )

**Descrizione:** Restituisce il valore di una variabile specificata nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**Sintassi:** obj << Get Table Variable Names

**Descrizione:** Restituisce i nomi di tutte le variabili nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**Sintassi:** obj << Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Descrizione:** Restituisce l&apos;elenco delle colonne che corrispondono ai tag forniti. Se viene richiesta l&apos;intersezione, vengono restituite solo le colonne che contengono tutti i tag elencati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );
dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );
dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Sintassi:** dt << Get Transforms()

**Descrizione:** Recupera l&apos;elenco delle colonne di trasformazione associate a questa tabella di dati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Sintassi:** obj << Get as Matrix( <list of columns by name>, <list of columns by number>, <column range> )

**Descrizione:** Restituisce le colonne specificate nella tabella di dati come una matrice. Il valore predefinito è tutte le colonne numeriche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Graph Builder

**Sintassi:** Graph Builder( Variables( X(column ), Y( column ), <Group X( column )>, <Group Y( column )>, <Shape( column )>, <Color( column )>, <Overlay( column )>, <Freq( column )> ), <Elements(...)> ) )

**Descrizione:** Offre un&apos;interfaccia grafica interattiva che consente di esplorare i dati. È possibile trascinare le colonne nelle zone del grafico per creare una varietà di grafici, tra cui grafici a dispersione, grafici dei profili isometrici, grafici a barre, grafici ad area, box plot, istogrammi, heatmap, grafici a torta, mappe ad albero, diagrammi a mosaico e mappe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Group Columns

**Sintassi:** obj << Group Columns( first column, number )

obj << Group Columns( {column1, column2, ...})

obj << Group Columns(group name | Path({<a>, <b>, ...}), {column1, column2, ...})

obj << Group Columns( group name | Path({<a>, <b>, ...}), first column, number )

**Descrizione:** Raggruppa un elenco di colonne.

**Add to group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

**Using count**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Sintassi:** obj << Group Scripts({ script1, script2, ...}) 

obj << Group Scripts(group name | Path({<a>, <b>, ...}), {script1, script1, ...})

**Descrizione:** Raggruppa un elenco di script.

**JMP Versione aggiunta:** 14

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

**Simple group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**Sintassi:** dt << Has Column( name, < Exact Match(1|0) > )

**Descrizione:** Chiede se la tabella di dati ha una colonna con il nome specificato.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**Sintassi:** obj << Has data view

**Descrizione:** Restituisce vero se la tabella di dati ha una finestra visibile aperta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**Sintassi:** obj << Hide Columns( < 0|1 > | < { column1, column2, ... } >  )

**Descrizione:** Nasconde le colonne nella griglia dei dati

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Hierarchical Cluster

**Sintassi:** Hierarchical Cluster( Y( columns ) )

**Descrizione:** Righe di cluster basate su variabili continue o categoriche. La clusterizzazione gerarchica inizia trattando ogni riga come il proprio cluster e successivamente combinando due cluster alla volta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Is Dirty

**Sintassi:** obj << Is Dirty

**Descrizione:** Richiede se la tabella di dati è stata modificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**Sintassi:** obj << Is Linked Subset

**Descrizione:** Chiede se la tabella di dati è un sottoinsieme collegato

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### Item Analysis

**Sintassi:** Item Analysis( Y( columns ) )

**Descrizione:** Correla un tratto o capacità alla probabilità di un individuo di sostenere o rispondere correttamente a un elemento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### JMP Query Builder

**Sintassi:** obj << JMP Query Builder

**Descrizione:** Crea una query per una o più tabelle di dati JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**Sintassi:** obj << Join( <Private>, <Invisible>,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), <Drop Multiples( 0|1, 0|1 )>, <Include nonmatches( 0|1, 0|1 )>,<Copy formula( 0|1 )>, <Suppress Formula Evaluation>, <Update>, <Merge Same Name Columns>, <Preserve Main Table Order> )

**Descrizione:** Combina più tabelle di dati in una nuova tabella di dati. I dati possono essere combinati assegnando le righe, associando valori di colonne o in modo cartesiano.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Join(
	With( Data Table( "Little" ) ),
	Select( :popcorn, :oil amt, :batch, :yield ),
	SelectWith( :yield ),
	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

### Journal

**Sintassi:** obj << Journal

**Descrizione:** Crea un journal dalla tabella di dati. Viene inclusa solo la griglia dei dati, senza note, variabili né script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**Sintassi:** dt << Journal Link( < Save( <filepath> ) | Embed( ) >, < Button Name( "Ben") > )

**Descrizione:** Aggiunge un tasto di collegamento alla tabella di dati a un journal. Usare embed() o save(), ma non entrambi. Embed() non ha opzioni. L’opzione save() è simile a dt<<save(). Usare ButtonName() per ignorare l’etichetta del pulsante. Restituisce un nuovo pulsante di collegamento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link(
	Save( "$temp/DeleteMe1.jmp" ),
	ButtonName( "Fancy Name for Temporary File" )
);
// even more fancy...
button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text name
button << UnderlineStyle( 0 ); // not using the link-style appearance
button << SetIcon( "DataTableFile" ); // add an icon
button << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label
// save it with a prompt...you can change the name in the save-as dialog...or cancel
dt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from prompt
Close( dt, "NoSave" );

```

### K Means Cluster

**Sintassi:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Clusterizza righe in base alle variabili numeriche in tabelle di dati con milioni di righe. È necessario specificare in anticipo il numero dei cluster.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**Sintassi:** K Nearest Neighbors(Y( column ), X( columns ))

**Descrizione:** Prevede una risposta continua o categorica sulla base delle risposte dei K vicini più prossimi nello spazio delle variabili X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Last Modified

**Sintassi:** obj << Last Modified

**Descrizione:** Restituisce la data dell&apos;ultima modifica salvata alla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Latent Class Analysis

**Sintassi:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Clusterizza righe sulla base di variabili categoriche utilizzando miscele multinomiali. È necessario specificare in anticipo il numero di classi latenti (cluster).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**Sintassi:** Life Distribution( Y( column(s) ) )

**Descrizione:** Analizza la distribuzione dati Tempo all&apos;evento. Può essere usato per eseguire la modellizzazione di dati censurati, durata di un prodotto, affidabilità e cause concorrenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Lock Data Table

**Sintassi:** obj << Lock Data Table( state=0|1 )

**Descrizione:** Blocca le tabelle di dati in modo che non sia possibile modificare o aggiungere valori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### Logistic

**Sintassi:** Logistic( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica rispetto a una variabile continua. I metodi di analisi includono la regressione logistica e curve ROC.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### MSA Variability Chart

**Sintassi:** obj << MSA Variability Chart( Y( column ), X( columns ) )

**Descrizione:** Visualizza un grafico di variabilità che mostra come una misura vari tra categorie ed effettua un&apos;analisi che esamina come la media e la varianza cambino tra le categorie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Sintassi:** obj << Make Indicator Columns

**Descrizione:** Converte una colonna nominale o ordinale nel numero di colonne corrispondente al numero di categorie. I nomi delle colonne risultanti sono le categorie della colonna di origine. I valori delle colonne risultanti sono zero o uno.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Sintassi:** rs = dt << Make RowState Handler( function(a) )

**Descrizione:** Crea un gestore dello stato della riga per la tabella di dati. L&apos;argomento della funzione contiene le righe i cui stati vengono cambiati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Sintassi:** sd = dt << Make SAS Data Step( )

sd = dt << Make SAS Data Step( SaveJMPMetadata(true) )

**Descrizione:** Restituisce la tabella di dati come passo di DATA SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**Sintassi:** sd = dt << Make SAS Data Step Window( )

sd = dt << Make SAS Data Step Window( SaveJMPMetadata(true) )

**Descrizione:** Apre una nuova finestra di tipo SAS e crea un passo di DATA SAS a partire dalla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Make Validation Column

**Sintassi:** Make Validation Column( <Colonne di stratificazione(columns)>, <Colonne di raggruppamento(columns)>, <Colonna cutpoint(column)>, <ID batch cutpoint(column)> )

**Descrizione:** Crea una colonna usata per dividere i dati in set di training, validazione e test.

**Esempio di stratificazione**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Make Validation Column(
	Stratification Columns( :Gender ),
	Training Set( 0.50 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Valid1" ),
	Random Seed( 1234 ),
	Go
);

```

**Esempio di valore soglia**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( 0.60 ),
	Validation Set( 0.25 ),
	Test Set( 0.15 ),
	New Column Name( "Cutpoint Batch Validation" ),
	Go
);

```

### Manage Limits

**Sintassi:** Manage Limits( Process Variables( columns ) )

**Descrizione:** Avvia l&apos;utilità per la gestione dei limiti di qualità per più colonne contemporaneamente. È possibile aggiungere, modificare e salvare limiti nelle proprietà della colonna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**Sintassi:** Marker Admixture( Marker( columns ) )

**Descrizione:** Stima la mescolanza di popolazione per gli individui in base ai genotipi dei marcatori.

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Marker Imputation

**Sintassi:** Marker Imputation( Marker( columns ) )

**Descrizione:** Imputes numeric missing marker genotypes.

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Marker Relatedness

**Sintassi:** Marker Relatedness( Marker( columns ) )

**Descrizione:** Stima diversi tipi di misure di relazione genomica tra coppie di individui sulla base di marcatori genetici in organismi sia diploidi sia poliploidi.

**JMP Versione aggiunta:** 18

**Esempio 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" ),
	Kinship Type( "Identical by State" )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE On" ),
	Kinship Type( "Identical by State" )
);

```

### Marker Simulation

**Sintassi:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Descrizione:** Simula i genotipi dei marcatori dagli incroci dei genitori e calcola le relative misure di prestazione di riproduzione.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker Statistics

**Sintassi:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Descrizione:** Esegue analisi sui dati dei marcatori genetici per calcolare misure come la minore frequenza allelica, l&apos;equilibrio di Hardy-Weinberg e il Linkage Disequilibrium.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**Sintassi:** Matched Pairs( Y( columns ), X( column ) )

**Descrizione:** Confronta le medie di serie di variabili corrispondenti mediante t test appaiati o semplice analisi delle misurazioni ripetute per rappresentare la correlazione tra risposte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Sintassi:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Descrizione:** Crea un piano per trovare la combinazione di attributi del prodotto che i clienti preferiscono di più e di meno.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);

```

### Merge Referenced Data

**Sintassi:** obj << Merge Referenced Data

**Descrizione:** Rende la tabella standalone unendo i dati della tabella di origine con le colonne referenziate ed eliminando i collegamenti. Anche la proprietà Collega riferimento delle colonne di riferimento sarà rimossa.

```js

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Sintassi:** obj << Missing Data Pattern( columns( columns ), <Output Table( name )> )

**Descrizione:** Trova i pattern dei valori mancanti nella tabella di dati e crea una tabella di ogni pattern e della relativa frequenza.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Mixture Profiler

**Sintassi:** Mixture Profiler( Y( column1, column2, ...  ) )

**Descrizione:** Produce un grafico ternario interattivo che consente di esplorare i profiler isometrici delle formule di previsione salvate per i modelli di miscela con tre o più fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Sintassi:** Model Comparison( Predictors( columns ), Group( column ) )

**Descrizione:** Confronta le performance tra modelli mediante colonne con formula di previsione.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Sintassi:** Model Driven Multivariate Control Chart( Process( columns ) )

**Descrizione:** Crea carte di controllo multivariate sulla base di componenti principali o metodi dei minimi quadrati parziali.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**Sintassi:** Model Screening( Y( column ), X( columns ) )

**Descrizione:** Stima molti modelli predittivi diversi, in modo da poter selezionare il migliore.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Move Column Group

**Sintassi:** obj << Move Column Group( name of group | Path({<a>, <b>, ...}), to first | to last | after(column) | after(group) | after(Path({<a>, <b>, ...})) )

**Descrizione:** Sposta il gruppo di colonne nel percorso specificato. Se è omesso il nome del gruppo di colonne, saranno spostati tutti i gruppi.

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

**Move all**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

**To first**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**Sintassi:** obj << Move Script Group( name of group | Path({<a>, <b>, ...}), to first | to last | after(script) | after(group) | after(Path({<a>, <b>, ...})) )

**Descrizione:** Sposta il gruppo di script nel percorso specificato. Se è omesso il nome del gruppo di script, vengono spostati tutti i gruppi.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << move script group( "VL", after( "Oneway" ) );
Wait( 1 );
dt << move script group( "GB", after( "VL" ) );
Wait( 1 );
dt << move script group( "VL", after( Path( {"GB"} ) ) );
Wait( 1 );
dt << move script group( to first );

```

### Move Selected Scripts

**Sintassi:** obj << Move Selected Scripts( script|list of scripts|group|Path({<a>, <b>, ...}), to first | to last | after(script) | after(group) | after(Path({<a>, <b>, ...})) )

**Descrizione:** Sposta gli script nel percorso specificato.

**JMP Versione aggiunta:** 14

**After group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

**Move Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

**To first**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**Sintassi:** obj << Move down

**Descrizione:** Sostituisce i valori presenti nella prima riga della tabella di dati con i nomi delle colonne e sostituisce i nomi delle colonne con nomi di sequenziazione predefiniti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**Sintassi:** obj << Move up

**Descrizione:** Sostituisce i nomi delle colonne con i valori nella prima riga della tabella di dati.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**Sintassi:** obj << Move up and append

**Descrizione:** Sostituisce i nomi delle colonne aggiungendo i valori presenti nella prima riga della tabella di dati ai nomi delle colonne corrispondenti.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### Multidimensional Scaling

**Sintassi:** Multidimensional Scaling( Y( columns ) )

**Descrizione:** Crea una rappresentazione visiva del pattern di prossimità tra un insieme di oggetti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**Sintassi:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Descrizione:** Identifica associazioni tra i livelli di variabili categoriche. L&apos;analisi delle corrispondenze multiple è analoga all&apos;analisi delle componenti principali per dati categorici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Sintassi:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Descrizione:** Analizza l&apos;accordo tra i partecipanti nell&apos;analisi dei dati sensoriali.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

### Multivariate

**Sintassi:** Multivariate( Y( columns ) )

**Descrizione:** Esplora la correlazione e associazioni tra variabili numeriche mediante una serie di tecniche di analisi multivariata. Queste tecniche includono sia misure di associazione parametriche che non parametriche, matrici del grafico a dispersione, analisi delle componenti principali, analisi degli outlier e affidabilità dell&apos;elemento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**Sintassi:** Multivariate Embedding( Y( columns ) )

**Descrizione:** Mappa i dati da spazi ad altissima dimensionalità a spazi a bassa dimensionalità utilizzando il metodo UMAP (Uniform Manifold Approximation and Projection) o il metodo t-Distributed Stochastic Neighbor Embedding (t-SNE). Molte volte si desidera mappare i dati su due o tre dimensioni in modo da poter visualizzare facilmente lo spazio a bassa dimensionalità. Entrambi i metodi tentano di preservare la struttura locale dei dati, ma UMAP è generalmente più veloce di t-SNE per data set di grandi dimensioni.

**JMP Versione aggiunta:** 17

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Naive Bayes

**Sintassi:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Descrizione:** Prevede l&apos;appartenenza a un gruppo per una variabile categorica sulla base della prossimità dei valori del suo predittore ai valori del predittore di ciascun gruppo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**Sintassi:** Neural( Y( column ), X( columns ), <Validation( column )> )

**Descrizione:** Stima una o più variabili di risposta mediante una funzione flessibile delle variabili di input. La struttura flessibile comprende funzioni di stratificazione e a S.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Data Box

**Sintassi:** obj << New Data Box( < <<Enable Filter Views(0|1) > )

**Descrizione:** Crea una vista tabella di dati in un albero del riquadro di visualizzazione. Modifica la tabella di dati corrente nella tabella di dati indicata. L&apos;argomento opzionale Enable Filter Views controlla se la vista consente o meno le viste filtri; l&apos;impostazione di default le consente.

```js

Names Default To Here( 1 );
dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );
New Window( "school",
	H List Box(
		dtA << New Data Box(),
		Text Box(),
		dtA << Distribution(
			ContinuousDistribution( Column( :weight ) ),
			NominalDistribution( Column( :age ) )
		)
	)
);
dtA = 0;

```

### New Data View

**Sintassi:** obj << New Data View

**Descrizione:** Crea una nuova visualizzazione della tabella di dati. Questa visualizzazione è collegata all&apos;originale nel senso che qualsiasi elemento evidenziato o modificato ha effetto sull&apos;originale. Questa opzione è utile quando è necessario spostarsi su parti differenti di una medesima tabella.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**Sintassi:** fv = dt << New Filter View( < name >, < Copy From(name|obj) >, < Temporary(0|1) >, < Active(0|1) >, < DataFilter(expr) >)

**Descrizione:** Crea una nuova vista filtro. Viene restituito l&apos;oggetto VistaFiltro creato. La nuova vista filtro sarà attiva di default. Se non si assegna un nome alla vista filtro, questa è temporanea, a meno che non si imposti Temporaneo a zero.

**JMP Versione aggiunta:** 19

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter(
		Data Filter(
			Inverse( 1 ),
			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
		)
	)
);

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Sintassi:** New Property( name, script ) 

New Script( name, script )

**Descrizione:** Crea e imposta una nuova proprietà nella tabella di dati come script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table

**Sintassi:** New Table( name, <invisible>, <private>, <actions> )

**Descrizione:** Crea una nuova tabella di dati. "Invisible" nasconde la tabella di dati dalla visualizzazione, ma la elenca nella finestra Home di JMP. "Private" nasconde completamente la tabella. "Visible" è l&apos;impostazione predefinita e crea una normale tabella visibile ed elencata nella finestra Home di JMP. Gli argomenti actions facoltativi sono qualsiasi messaggio supportato dalle tabelle di dati.

```js

Names Default To Here( 1 );
dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### New Table Variable

**Sintassi:** obj << New Table Variable( name, number )

**Descrizione:** Crea e imposta una nuova variabile nella tabella di dati come valore costante. Se esiste una variabile con lo stesso nome, al nome della nuova variabile viene aggiunto un numero per renderlo univoco. Il comando simile Imposta variabile della tabella è consigliato nella maggior parte dei casi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### Nonlinear

**Sintassi:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Descrizione:** Stima modelli non lineari mediante minimi quadrati o una funzione di perdita personalizzata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Sintassi:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Raggruppa le righe in base a variabili numeriche quando i dati provengono da una miscela di distribuzioni normali multivariate sovrapposte. È necessario specificare in anticipo il numero di cluster.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**Sintassi:** Normalization( Y( columns ) )

**Descrizione:** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**Sintassi:** Notebook

**Descrizione:** Crea un nuovo blocco appunti o restituisce il blocco appunti con il nome o l&apos;indice fornito.

```js

Names Default To Here( 1 );

nb = Notebook();

```

### OC Curves

**Sintassi:** obj << OC Curves

**Descrizione:** Crea un grafico che traccia la probabilità di non rilevare uno spostamento nel processo come funzione della dimensione dello spostamento.

**JMP Versione aggiunta:** 16

### Oneway

**Sintassi:** Oneway( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua tra una serie di gruppi categorici. I metodi di analisi comprendono ANOVA, confronti di medie, analisi delle medie e diagrammi dei quantili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Sintassi:** Open( file path, <invisible>, <private>, <select columns(list)> | <ignore columns(list)>, <column names only>, <Table Info> )

**Descrizione:** Apre un file JMP o importa un altro tipo di file supportato. L&apos;opzione di apertura della tabella di dati &apos;Invisibile&apos; nasconde il file alla visualizzazione ma lo elenca nella finestra Home di JMP, &apos;Privato&apos; nasconde il file completamente. L&apos;opzione del file &apos;Seleziona colonne&apos; legge solo le colonne specificate, &apos;Ignora colonne&apos; è l&apos;inverso di &apos;Seleziona colonne&apos;, non legge le colonne specificate. Le opzioni del file JMP &apos;Solo nomi colonne&apos; e &apos;Info tabella&apos; non leggono i dati, né creano una tabella di dati. &apos;Solo nomi colonne&apos; restituisce l&apos;elenco dei nomi delle colonne della tabella di dati, &apos;Informazioni tabella&apos; restituisce il numero di colonne e righe nella tabella di dati. Le opzioni &apos;PRIMO(n)&apos;/&apos;ULTIMO(n)&apos;/&apos;CASUALE(n)&apos; leggono solo n righe della tabella di dati. Se n è un numero tra 0 e 1, n è interpretato come una frazione del numero totale di righe della tabella di dati.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**Esempio 4**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

**Esempio 5**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

**Esempio 6**

```js

Names Default To Here( 1 );
info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**Sintassi:** Parallel Plot( Y( columns ),  <X( column )> )

**Descrizione:** Genera un diagramma di due o più variabili con segmenti di linee di collegamento per ogni riga.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Sintassi:** Pareto Plot( Cause( column ), <X( column )>, <Subcategory( column )>, <Freq( column )>, <Weight( column )> )

**Descrizione:** Visualizza la frequenza relativa degli elementi in un processo correlato alla qualità in ordine decrescente. È possibile definire una o più variabili di classificazione per creare un grafico di Pareto comparativo.

**Gruppo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

**Semplice**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

**Sottocategoria**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Partial Least Squares

**Sintassi:** Partial Least Squares( Y( columns ), X( columns ) )

**Descrizione:** Stima un modello su una o più variabili di risposta usando fattori latenti. Ciò permette ai modelli di essere stimati quando le variabili esplicative sono altamente correlate o quando sono presenti più variabili esplicative che osservazioni.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Partition

**Sintassi:** obj << Partition( Y( column ), X( column(s) ) )

**Descrizione:** Costruisce un albero decisionale suddividendo ricorsivamente i dati in base a una relazione tra il predittore e i valori di risposta. Sia la risposta che i predittori possono essere o continui o categorici.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

### Paste Column Properties

**Sintassi:** obj << Paste Column Properties

**Descrizione:** Incolla dagli Appunti elenchi multipli di proprietà delle colonne in colonne multiple. Facoltativamente è possibile specificare un elenco di colonne target invece di selezionarle nella tabella di dati.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Predictor Screening

**Sintassi:** Predictor Screening( Y( columns ), X( columns ) )

**Descrizione:** Identifica predittori significativi da un grande numero di candidati utilizzando la partizione foresta di bootstrap per valutare il contributo dei predittori sulla risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Sintassi:** Principal Components( Y( columns ) )

**Descrizione:** Modella la variazione in un set di variabili in termini di un numero più piccolo di combinazioni lineari indipendenti (componenti principali) di tali variabili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**Sintassi:** Process Capability( Process Variables (columns), < Spec Limits() > )

**Descrizione:** Calcola un&apos;analisi di capability del processo per ciascun processo e crea grafici utili per l&apos;analisi di capability di più processi contemporaneamente. È anche possibile definire i limiti di specifica.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**Sintassi:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Descrizione:** Identifica passi di processi associati a scarso rendimento.

```js

Names Default To Here( 1 );
dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );
dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );
obj = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" )
);

```

### Process Screening

**Sintassi:** Process Screening( Process Variables( columns ) )

**Descrizione:** Esamina molti processi da diversi punti di vista, tra cui stabilità, capability, test delle carte di controllo e shift (drift). Favorisce la capacità di concentrarsi su quali processi hanno bisogno di attenzione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**Sintassi:** Profiler( Y( column1, <column2>, ..., <PredSE column1, PredSE column2>, ... ), <Expand> )

**Descrizione:** Produce un grafico interattivo che consente di esplorare come cambia una risposta prevista al variare delle impostazioni dei fattori. Per ogni fattore, il profiler mostra tracce di previsione che si basano su formule di previsione salvate e vincoli lineari e illustra come la risposta cambia rispetto a quel fattore. L&apos;argomento Espandi corrisponde all&apos;opzione Espandi formule intermedie nella finestra di avvio.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recode

**Sintassi:** obj << Recode

**Descrizione:** Ricodifica i valori precedenti delle colonne selezionate in nuovi valori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**Sintassi:** obj << Recode Column(<source column reference>, {<transform>, ...}, <Update Properties(0|1)>, <By Word(Delimiters(<chars>)>, Target Column(<column reference> | <column name>))

**Descrizione:** Applica le trasformazioni elencate a ciascun valore della colonna di origine e memorizza il risultato nella colonna originale o nella colonna target specificata. L&apos;opzione Per parola divide i dati alfanumerici forniti in valori di input più piccoli. Una volta determinati i valori di input, le trasformazioni vengono applicate a tali valori separatamente.

Speciali variabili JSL vengono popolate durante l&apos;esecuzione del comando:

	_rcNow è il valore corrente dell&apos;input dopo le trasformazioni precedenti.

	_rcOrig è il valore originale dell&apos;input.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( :age );
col << Data Type( "Character" );
dt << Recode Column(
	:age,
	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},
	Target Column( col )
);

```

### Recurrence Analysis

**Sintassi:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), <Grouping( column )> )

**Descrizione:** Analizza come un evento ricorrente è distribuito nel tempo, per sistema o finché il sistema stesso va fuori servizio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**Sintassi:** Reliability Forecast

**Descrizione:** Prevede i guasti futuri sulla base dei dati osservati e delle future unità a rischio. La piattaforma accetta diversi formati di input. Per ulteriori informazioni vedere ciascun formato.

**Formato Date**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table(
		dt1,
		Production Count( :Sold Quantity ),
		Timestamp( :Sold Month )
	),
	Failure Data Table(
		dt2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],
			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 6, Month ),
		Forecast Type( Sequential ),
		Interval Type( Prediction Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 1 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Formato Nevada**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group(),
		Risk Set(
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,
			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,
			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
		),
		Forecast To( "01/2004" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

**Formato Tempo all'evento**

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );
obj = dt << Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :"Time (Month)"n, :Time Right ),
	Freq( :Freq ),
	Life Time Unit( Month ),
	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),
	Forecast(
		Group( "" ),
		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),
		Forecast To( "09/01/2010" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( [1] ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( 0 ),
		Use Approximate Distribution( 1 )
	)
);

```

### Reliability Growth

**Sintassi:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**Descrizione:** Modella la variazione di affidabilità di un singolo sistema riparabile nel tempo in quanto i miglioramenti sono incorporati nel piano. La piattaforma accetta diversi formati di input. Per ulteriori informazioni vedere ciascun formato.

**Date**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Sistemi paralleli**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**Sistemi simultanei**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Tempo all'evento**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Rename Column Group

**Sintassi:** obj << Rename Column Group( oldname | Path({<a>, <b>, ...}), newname )

**Descrizione:** Rinomina il gruppo di colonne.

**Nested Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

**Simple Group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**Sintassi:** obj << Rename Script Group( oldname | Path({<a>, <b>, ...}), newname )

**Descrizione:** Rinomina il gruppo di script

**JMP Versione aggiunta:** 14

**Nested group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

**Simple group**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Sintassi:** obj << Rename Table Property( old name, new name )

**Descrizione:** Rinomina la Proprietà di tabella specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Sintassi:** obj << Rename Table Script( old name, new name )

**Descrizione:** Rinomina lo Script di tabella specificato.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Sintassi:** obj << Rename Table Variable( old name, new name )

**Descrizione:** Rinomina una Variabile di tabella specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Repeated Measures Degradation

**Sintassi:** Repeated Measures Degradation( Y( column ), Time( column ), <X( column )>, <Freq( column )>, <Censor( column ), Censor Code( value )> )

**Descrizione:** Modella i dati di degradazione su misure ripetute nel tempo con parametri casuali.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" )
);

```

### Rerun Formulas

**Sintassi:** obj << Rerun Formulas

**Descrizione:** Rivaluta tutte le formule delle colonne nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**Sintassi:** dt >> Reset Transforms()

**Descrizione:** Quando si accede alle colonne di trasformazione, i loro dati vengono memorizzati nella cache per chiamate future. Questa funzione rimuove tali dati. I dati vengono ricreati se si accede nuovamente alla colonna.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Response Screening

**Sintassi:** Response Screening( Y( columns ), X( columns ) )

**Descrizione:** Rende automatico il processo di conduzione di test per effetti a modello lineare su un grande numero di risposte. I risultati dei test e le statistiche di riepilogo sono presentati in tabelle di dati e diagrammi. Il false discovery rate (FDR) evita dichiarazioni di significatività errate. Un metodo di stima robusta riduce la sensibilità dei test agli outlier.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Revert

**Sintassi:** obj << Revert

**Descrizione:** Annulla qualsiasi modifica alla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**Sintassi:** obj << Run Formulas

**Descrizione:** Esegue tutte le valutazioni delle formule in sospeso. Non saranno valutate tutte le formule.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Sintassi:** obj << Run Script( name )

**Descrizione:** Esegue uno script con nome memorizzato come proprietà nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**Sintassi:** obj << Save( <filepath>, <file type> ) 

obj << Save As( filepath, <file type> )

**Descrizione:** Salva la tabella di dati in qualsiasi formato supportato. I formati supportati includono .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt e .stx. Alcuni formati sono supportati solo in Windows. Per maggiori dettagli vedere Using JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save As

**Sintassi:** obj << Save( <filepath>, <file type> ) 

obj << Save As( filepath, <file type> )

**Descrizione:** Salva la tabella di dati in qualsiasi formato supportato. I formati supportati includono .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt e .stx. Alcuni formati sono supportati solo in Windows. Per maggiori dettagli vedere Using JMP.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save Database

**Sintassi:** obj << Save Database( connectInfo, TableName )

**Descrizione:** Salva di nuovo la tabella di dati in un database.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Scatterplot 3D

**Sintassi:** Scatterplot 3D( Y( columns ) )

**Descrizione:** Genera un grafico a dispersione tridimensionale rotante per tre o più variabili. Se si specificano più di tre variabili, è possibile scorrere in successione le variabili che vengono mostrate nel grafico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**Sintassi:** Scatterplot Matrix( Y( columns ), <X( columns )>, <Group( column )>, <By( column )> )

**Descrizione:** Produce una griglia di grafici a dispersione che consente di esplorare le relazioni bivariate. Se non sono specificate variabili X, i grafici a dispersione sono per tutte le coppie di variabili Y. Se vengono specificate una o più variabili X, i grafici a dispersione sono per le variabili Y rappresentate rispetto alle variabili X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Screen Predictors

**Sintassi:** obj << Screen Predictors

**Descrizione:** Questo è un alias e un vecchio nome dello Screening dei predittori

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Sintassi:** obj << Select Column Group( name of group | list of names )

**Descrizione:** Seleziona i gruppi di colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Sintassi:** obj << Select Properties( { property1, property2, ... )

**Descrizione:** Seleziona le proprietà della tabella specificata dove l&apos;elenco può essere un elenco di nomi di proprietà o indici di proprietà.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Sintassi:** obj << Select Script Group( <name of group | { group1, group2, ...} > )

**Descrizione:** Seleziona i gruppi di script. Se non è specificato alcun gruppo di script, tutti i gruppi sono selezionati.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**Sintassi:** obj << Select Scripts( <name of script | { script1, script2, ...} > )

**Descrizione:** Seleziona gli script nominati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**Sintassi:** obj << Select columns( <column>, <column>, ... )

**Descrizione:** Seleziona le colonne specificate. Per selezionare tutte le colonne, usare la parola chiave &apos;Tutte&apos;.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Sintassi:** obj << Sequencing Variants Toolset

**Descrizione:** Interfaccia per la piattaforma dell&apos;add-in Set di strumenti varianti di sequenziamento

### Set Active Filter View

**Sintassi:** obj << Set Active Filter View( name | obj )

**Descrizione:** Imposta la vista filtro attiva

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Sintassi:** obj << Set Cell Height( number )

**Descrizione:** Imposta l’altezza di visualizzazione di ogni cella della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**Sintassi:** obj << Set Dirty( state=0|1 )

**Descrizione:** Contrassegna come modificata la tabella di dati, anche se non vi è stata alcuna modifica. Questa opzione è utile perché venga richiesto il salvataggio alla chiusura.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**Sintassi:** obj << Set Edit Lock( [ <"Modify Cells">, <"Add rows">, <"Add Columns">, <"Delete Rows">, <"Delete Columns">] )

**Descrizione:** Non consente le operazioni specificate sulla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Sintassi:** obj << Set Header Height( number )

**Descrizione:** Imposta l&apos;altezza di visualizzazione dell&apos;intestazione della colonna

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**Sintassi:** obj << Set Label Columns( column(s) )

**Descrizione:** Assegna un ruolo dell&apos;etichetta a colonne selezionate nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Sintassi:** obj << Set Matrix( [ matrix with rows separated by commas ] )

**Descrizione:** Crea una tabella di dati a partire da una matrice.

```js

Names Default To Here( 1 );
dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Sintassi:** obj << Set Name( new TableName )

**Descrizione:** Cambia il nome della tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**Sintassi:** obj << Set Property(  name, script  )

**Descrizione:** Crea e imposta una nuova proprietà nella tabella di dati come script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**Sintassi:** obj << Set Row ID Width( number )

**Descrizione:** Imposta la larghezza di visualizzazione dell&apos;area ID della riga

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**Sintassi:** obj << Set Row States( [state1, state2, ... stateN] )

**Descrizione:** Imposta gli stati delle righe per tutte le righe nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**Sintassi:** obj << Set Scroll Lock Columns( column(s) )

**Descrizione:** Blocca colonne selezionate della tabella di dati per impedirne lo scorrimento.  Per indicare che una colonna è bloccata, il colore di sfondo cambia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Sintassi:** obj << Set Table Variable( name, number )

**Descrizione:** Crea e imposta una nuova variabile nella tabella di dati come valore costante. Una variabile esistente con lo stesso nome sarà sovrascritta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Sintassi:** obj << Show Header Filter Icons( state=0|1 )

**Descrizione:** Show or hide the filter icons on columns in the current filter view.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Sintassi:** obj << Show Header Graphs( state=0|1 )

**Descrizione:** Show or hide the header graphs in the data table display.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Sintassi:** obj << Show Header Groups( state=0|1 )

**Descrizione:** Show or hide the column groups in the data table display.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Sintassi:** obj << Show Header Statistics( state=0|1 )

**Descrizione:** Show or hide the header statistics in the data table display.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Sintassi:** obj << Show Header Tags( state=0|1 )

**Descrizione:** Show or hide the column tags in the data table display.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Sintassi:** obj << Show Hidden Columns In Columns List( state=0|1 )

**Descrizione:** Disattivare per omettere le colonne nascoste dall&apos;elenco delle colonne della tabella di dati. Queste colonne non vengono mai visualizzate nella griglia dei dati.

**JMP Versione aggiunta:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Sintassi:** dt << Show Transforms()

**Descrizione:** Scrive informazioni nel log sulle colonne di trasformazione associate a questa tabella di dati e alle sue piattaforme. Si tratta di informazioni e il formato potrebbe cambiare. Non deve essere analizzato.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**Sintassi:** obj << Sort( <Private>, <Invisible>, <Replace table>, By( column ), Order( ascending|descending ) )

**Descrizione:** Crea una nuova tabella di dati che viene ordinata rispetto a colonne specificate in ordine crescente o decrescente.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Sintassi:** obj << Split( Split( columns ), Split by( column ), <Group(column)>, <Private>|<Invisible>, <Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )>, <Copy formula( 0|1 )>, <Suppress formula evaluation( 0|1 )>, <Sort by Column Property>, <Output Table( "name" )> )

**Descrizione:** Crea una nuova tabella di dati che mappa diverse righe di una colonna in una riga in diverse colonne.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );
:Day of Week << set property( "Row Order Levels", 1 );
dt << Split(
	Split By( :Day of Week ),
	Split( :Bill Amount ),
	Sort by Column Property,
	remaining columns( drop all )
);

```

### Stack

**Sintassi:** obj << Stack( <Private>, <Invisible>, columns( columns ), <Source Label Column( string )>, <Stacked Data Column( string )>, <Copy formula( 0|1 )>, <Number of Series(n)>, <Contiguous>, <Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))>, <Output Table( "name" )>) )

**Descrizione:** Crea una nuova tabella di dati con valori di più colonne impilate in un&apos;unica colonna.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Contiguous,
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" )
);

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "BP" )
);

```

### Structural Equation Models

**Sintassi:** Structural Equation Models( Model Variables ( columns ) )

**Descrizione:** Offre un contesto per stimare una serie di modelli, inclusa analisi fattoriale di conferma, modelli di percorso con o senza variabili latenti, modelli di errore di misurazione e modelli di curva di crescita latente.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Subscribe

**Sintassi:** obj << Subscribe( Key( <"client"> ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Descrizione:** Sottoscrive per ricevere messaggi relativi a modifiche nella tabella di dati. La chiave è il nome di sottoscrizione per consentirne il riferimento. Il parametro facoltativo, client, attiva una conferma di chiusura quando si tenta di chiudere la tabella di dati. La funzione può essere il nome di una funzione definita in precedenza o la funzione stessa. On Close richiede un solo argomento per la funzione, la tabella di dati. Gli altri messaggi richiedono un ulteriore argomento: un elenco di colonne o un numero di righe interessate. Ogni sottoscrizione rimane attiva fino all&apos;annullamento della sottoscrizione stessa.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );
f = Function( {dtab, oldname},
	Print( "oldname", oldname );
	Print( "new name", dtab << getname() );
);
fsave = Function( {dtab, newpathname},
	Print( "new path name", newpathname );
	Print( "new name", dtab << getname() );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << Subscribe( "name1", On Save( fsave ) );
fcols = Function( {dtab, b},
	n = N Items( b );
	dtname = (dtab << getname());
	Print( dtname );
	Print( n );
	For( i = 1, i <= n, i++,
		colname = (b[i] << getname());
		Print( colname );
	);
);
dt << Subscribe( "name2", On Delete Columns( fcols ) ); 
//Try deleting a column, then close the data table.

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {dtab, col, oldname},
	Print( dtab << getname() );
	Print( "new column name", (col << getname()) );
	Print( "old name", oldname );
);
sub = dt << Subscribe( "", OnRenameColumn( f ) );
Column( dt, 1 ) << set name( "test" );
Wait( 1 );
dt << unsubscribe( sub, on rename column );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
delRowsFn = Function( {a, b, rows},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print Matrix( rows );
);
addRowsFn = Function( {a, b, insert},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print( insert );
);
dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
// Try deleting some rows and adding new ones.

```

### Subset

**Sintassi:** obj << Subset( <Private>, <Invisible>, <Selected columns>, <Columns(column list)>, <All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])>, <By(column list)>, <Sampling Rate(fraction)>, <Sample Size(integer)>, <Stratify(column list)>, <Link to original data table(0|1)>, <Copy formula(0|1)>, <Suppress Formula Evaluation>, <Keep by columns> )

**Descrizione:** Crea una nuova tabella di dati partendo dalle righe e colonne selezionate nella tabella di origine. È anche possibile selezionare in modo casuale le righe da inserire nel sottoinsieme.

**By**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

**Campione stratificato**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

**Righe**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

**Righe filtrate**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

### Summary

**Sintassi:** obj << Summary( <Private>, <Invisible>, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), <N (column)>, <Mean( column )>, <Std Dev( column )>, <Min( column )>, <Max( column )>, <Range( column )>, <Sum( column )>, <CV( column )>...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Descrizione:** Crea una nuova tabella dati di statistiche di riepilogo. Se sono specificate variabili di raggruppamento, è presente una riga per ogni livello di una variabile di raggruppamento o per ogni combinazione di livelli di più variabili di raggruppamento.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Support Vector Machines

**Sintassi:** Support Vector Machines(Y( column ), X( columns ))

**Descrizione:** Prevede una risposta basata sui vettori di supporto nello spazio delle variabili X. Uno degli obiettivi dell&apos;algoritmo delle macchine a vettori di supporto è di utilizzare i dati di training per apprendere come classificare i nuovi dati.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Suppress Formula Eval

**Sintassi:** obj << Suppress Formula Eval( state=0|1 )

**Descrizione:** Elimina o attiva la valutazione della formula. Questa opzione è utile per aggiungere più velocemente righe e per eseguire analisi multiple e ordinamenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Surface Plot

**Sintassi:** Surface Plot( Columns() )

**Descrizione:** Produce un grafico tridimensionale rotante di punti o una superficie definita da una formula salvata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**Sintassi:** Survival( Y( columns ), Censor( column ), <Grouping( column )> )

**Descrizione:** Calcola stime delle funzioni di sopravvivenza tramite il metodo del prodotto-limite (stime di sopravvivenza di Kaplan-Meier) per uno o più gruppi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Sintassi:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descrizione:** Crea una tabella personalizzata di statistiche di riepilogo di una o più variabili. Le variabili possono essere raggruppate per una o più colonne di classificazione. Consente di creare la tabella di riepilogo mediante operazioni di trascinamento e rilascio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**Sintassi:** Ternary Plot( Y( columns ) )

**Descrizione:** Produce un diagramma bidimensionale di una miscela di tre componenti che si sommano a una costante.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Sintassi:** Text Explorer( Text Columns( columns ) )

**Descrizione:** Analizza le parole dal testo in una colonna, le conta, le associa ad altre colonne, salva indicatori e rappresenta relazioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Text to Columns

**Sintassi:** obj << Text to Columns( delimiters(<"separator">, <TAB>, <NEWLINE>), columns(column1, column2, ...) )

**Descrizione:** Converte una colonna di stringhe con delimitatore incorporato in colonne separate. Le colonne risultanti possono essere colonne di indicatori. I delimitatori possono essere qualsiasi carattere, la parola chiave TAB o la parola chiave NEWLINE.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Time Series

**Sintassi:** Time Series( Y( column ) )

**Descrizione:** Modella una serie di osservazioni su punti temporali equidistanti. Include un grafico delle serie storiche, autocorrelazioni, variogramma, densità spettrale, ARIMA, ARIMA stagionale, modelli di smoothing e forecast.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Sintassi:** Time Series Forecast( Y( column ) )

**Descrizione:** Stima e prevede serie temporali multiple utilizzando metodi specifici.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Torch Deep Learning

**Sintassi:** obj << Torch Deep Learning

**Descrizione:** Interfaccia per la piattaforma dell&apos;add-in Torch Deep Learning

### Transform Column

**Sintassi:** dt << Transform Column(<name>, Formula(<expression>), [Replace(0|1)], [Private(0|1)], [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Descrizione:** Crea una colonna di trasformazione associata alla tabella target. La colonna di trasformazione è accessibile come una normale colonna. 

	Nome: nome della colonna

	Formula: la formula che definisce i dati nella colonna di trasformazione

	Sostituisci: con questo flag, una trasformazione definita con lo stesso nome di una trasformazione esistente sostituirà la trasformazione esistente. Senza questo flag, la trasformazione esistente verrà restituita se è equivalente; altrimenti il nome della nuova colonna verrà cambiato per essere diverso.

	Privato: con questo flag, la colonna non comparirà negli elenchi di selezione delle colonne

	Tipo di dato: specificare facoltativamente il tipo di dato. Se non specificato, verrà dedotto dalla prima riga.

	Tipo di modellizzazione: specificare facoltativamente il tipo di modellizzazione. Se non specificato, verrà utilizzato il valore predefinito per il tipo di dato

	Proprietà della colonna: sono tutte le proprietà standard delle colonne che si desidera impostare. È possibile impostarle sulla colonna anche dopo la sua creazione.

**JMP Versione aggiunta:** 16

**Nested**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

**Random**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

**Simple**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**Sintassi:** obj << Transpose( <Private>, <Invisible>,columns( columns ), By( column ), <Label( column )>, <Output Table( name )> )

**Descrizione:** Crea una nuova tabella di dati dalla tabella di origine dove le righe e le colonne sono scambiate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**Sintassi:** obj << Type 1 Gauge( Y( column ) )

**Descrizione:** Analizza i sistemi di misurazione su dati continui utilizzando il metodo Gauge tipo 1 per valutare la capability di un processo di misurazione su una parte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );
dt << Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),
		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),
		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )
	)
);

```

### Ungroup Columns

**Sintassi:** obj << Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Descrizione:** Separa un elenco di colonne.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Sintassi:** obj << Ungroup Scripts( name of script group | list of scripts )

**Descrizione:** Separa un elenco di script. Se gli script non sono specificati, gli script selezionati verranno separati dal rispettivo gruppo. Tutti i gruppi verranno rimossi dal raggruppamento se non è specificato né selezionato alcuno script.

**JMP Versione aggiunta:** 14

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**Sintassi:** obj << Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Descrizione:** Annulla le precedenti sottoscrizioni alla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**Sintassi:** obj << Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(<ALL>, <NONE>, <{column1, column2, ...}>), Replace columns in main table(<ALL>, <NONE>, <{column1, column2, ...}>), <Ignore missing> )

**Descrizione:** Unisce una tabella di dati aggiornati nella tabella di dati originale aggiungendo o sostituendo le colonne selezionate.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} ),
	Replace columns in Main Table( {:height} )
);

```

**Esempio 3**

```js

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} )
);

```

### Update From Database

**Sintassi:** obj << Update From Database( connectInfo )

**Descrizione:** Aggiorna i dati nella tabella di dati con dati reimportati dal database.

```js

Names Default To Here( 1 );
dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### Uplift

**Sintassi:** Uplift( Y( column ), X( columns ), Treatment( column )  )

**Descrizione:** Stima un albero di partizione ricorsivo che seleziona le suddivisioni in modo da massimizzare le differenze di trattamento. I modelli identificano gruppi di individui che più probabilmente potrebbero rispondere a un trattamento.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Variability Chart

**Sintassi:** Variability Chart( Y( column ), X( columns ) )

**Descrizione:** Analizza le misurazioni continue per determinare come stia funzionando il sistema di misurazione. Si può anche effettuare uno studio gauge per vedere le misurazioni della variazione dei dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**Sintassi:** Virtual Join

**Descrizione:** Collega una tabella di dati principale a una tabella di dati secondaria tramite una colonna ID.

Consente alla tabella principale di accedere a colonne della tabella secondaria senza unire fisicamente le tabelle.



La proprietà Collega colonna ID contrassegna una colonna nella tabella secondaria come la colonna ID.



La proprietà Collega colonna di riferimento mappa una colonna nella tabella principale alla colonna ID della tabella secondaria.

La proprietà Collega riferimento consente di impostare il riferimento alla tabella di dati o il percorso della tabella di dati che se desidera collegare.

L&apos;opzione &apos;Usa nome colonna collegata&apos; creerà le colonne collegate con il nome della colonna di origine invece del nome univoco completo.

**Esempio 1**

```js

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);
cID << Save( "$temp\cID.jmp" );

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID",
		Numeric,
		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),
		Set Values( [1, 2, 1, 2] )
	),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);

Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );

Favs:colorID[2] = 1; // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );
Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );

Write( "\!nRalph's color changed." );

```

**Esempio 2**

```js

Names Default To Here( 1 );
cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name" )}
);


Favs:color << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );

```

**Esempio 3**

```js

Names Default To Here( 1 );

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )}
);

Favs2 = New Table( "More Favorites",
	Add Rows( 4 ),
	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),
	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) )
);

// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  
// automatically open the linked tables for you when you open the main referencing table.
Favs2:ID << Set Property( "Link ID", 1 );
cID:ID << Set Property(
	"Link Reference",
	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )}
);

Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by default
Favs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites table
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // Change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );
cid:person << hide( 0 );

Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

### XGBoost

**Sintassi:** obj << XGBoost

**Descrizione:** Interfaccia sperimentale per XGBoost per la modellizzazione predittiva con boosting del gradiente stocastico

### set private

**Sintassi:** obj << set private( <1|0> )

**Descrizione:** Rende la tabella privata. Una tabella privata viene omessa dall&apos;elenco delle tabelle di dati e dalle sottoscrizioni.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private;
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private( 0 );
Show( Get Data Table List() );
Wait( 1 );

Close( dt, No Save );

```

