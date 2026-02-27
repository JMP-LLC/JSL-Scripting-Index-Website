# Tabulate



## Colonne

### Analysis Columns

**Sintassi:** Analysis Columns( Column(s) )

**Descrizione:** Aggiunge colonne di analisi alla tabella corrente. Può essere usato con il comando Aggiungi tabella o il comando Modifica tabella.

#### Aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Analysis Columns( :CO ) );

```

#### Aggiunge a nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :type ));

```

### Columns by Categories

**Sintassi:** Columns by Categories( column1, column2, ...) )

**Descrizione:** Aggiunge alla tabella una tabulazione incrociata dei nomi di colonna e le categorie riunite per colonne con valori simili. Durante l&apos;esecuzione dello script, il messaggio di colonne per categorie deve essere entro un messaggio di tabella di colonne o di righe.

#### Aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ));obj << Modify Table( Row Table( 1 ), Columns by Categories( :Money ) );

```

#### Aggiunge a nuova

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

### Freq

**Sintassi:** Freq( Column )

**Descrizione:** Specifica la colonna di frequenza da utilizzare nel calcolo delle statistiche

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));Wait( 1 );obj << Freq( :Count );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

### Grouping Columns

**Sintassi:** Grouping Columns( Column(s) )

**Descrizione:** Aggiunge colonne di raggruppamento alla tabella corrente. Può essere usato con il comando Aggiungi tabella o il comando Modifica tabella.

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Row Table( 1 ), Grouping Column( :age ) );

```

#### Aggiunge a nuova

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Grouping Columns( :sex ) ) ));

```

#### Aggiunge nidificata a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Column Table( 1 ), Grouping Column( :age ) );

```

### ID

**Sintassi:** ID( Column )

**Descrizione:** Specifica la colonna identificatore che è usata per contare le occorrenze univoche.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));Wait( 1 );obj << ID( :Division );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

### Page Column

**Sintassi:** Page Column( Column )

**Descrizione:** Specifica la colonna delle pagine da utilizzare per l&apos;impostazione delle pagine di report

#### Colonna di pagine delle risposte multiple

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Imposta colonna di pagina in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### Imposta colonna e livello di pagina in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));Wait( 1 );obj << Page Column( :sex( "F" ) );

```

#### Imposta colonna e livello di pagina in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex( "F" ) ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

### Weight

**Sintassi:** Weight( Column )

**Descrizione:** Specifica la colonna di peso da utilizzare nel calcolo delle statistiche

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));Wait( 1 );obj << Weight( :Weight );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

## Costruttori associati

### Tabulate

**Sintassi:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descrizione:** Crea una tabella personalizzata di statistiche di riepilogo di una o più variabili. Le variabili possono essere raggruppate per una o più colonne di classificazione. Consente di creare la tabella di riepilogo mediante operazioni di trascinamento e rilascio.

#### Categorie e statistiche

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### Categorie nidificate

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Colonna di pagine

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Colonna di pagine delle risposte multiple

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Colonna ID

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Colonne di raggruppamento delle risposte multiple

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### Colonne di raggruppamento impilate

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### Colonne per categorie

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### Colonne riempite

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Frequenza

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### Peso

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### Tabelle a righe e colonne multiple

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

#### Tabelle a righe multiple

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Add

**Sintassi:** add(&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**Descrizione:** Si usa con Modifica tabella per aggiungere colonne e statistiche a una tabella esistente. Serve anche come alias per Aggiungi tabella

#### Aggiunge colonna di analisi prima della nominata

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :weight ) ) ));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) ));

```

#### Aggiunge statistica dopo la nominata

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( After( Statistics( Max ) ), Statistics( Range ) ));

```

#### Aggiunge statistica prima della prima

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### Aggiunge statistica prima dell'indice

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Statistics( 2 ) ), Statistics( Median ) ));

```

### Add Table

**Sintassi:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**Descrizione:** Aggiunge una tabella alla finestra se non è presente, oppure accoda una tabella all&apos;oggetto tabella esistente.

#### Aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### Aggiunge a vuota

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add Table( Row Table( Grouping Columns( :age ) ) );

```

### Aggregate Statistics

**Sintassi:** Aggregate Statistics( column )

**Descrizione:** Aggiunge alla tabella corrente una colonna separata per ciascun livello della colonna specificata insieme a una colonna sommatoria. Durante l&apos;esecuzione dello script, il messaggio di statistiche aggregate deve essere entro un messaggio di tabella di colonne o di righe.

#### Imposta quando si aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ) ));obj << Modify Table(	Row Table( 1 ),	Grouping Columns( :Region ),	Aggregate Statistics( :Region ));

```

#### Imposta quando si aggiunge a nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ), Aggregate Statistics( :Region ) )	));

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Change Item Label

**Sintassi:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**Descrizione:** Modifica l&apos;etichetta di un campo di immissione di testo nella tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Data Table Window;

```

### Delete

**Sintassi:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**Descrizione:** Si usa con Modifica tabella per rimuovere colonne e statistiche da una tabella esistente.

#### Elimina colonna di analisi nominata

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### Elimina statistica all'indice

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Statistics( 1 ) ) );

```

### Display Column Width

**Sintassi:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; ); obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**Descrizione:** Imposta o restituisce la larghezza di visualizzazione di una colonna in una tabella del report Disponi in tabella. Path è una sequenza di intestazioni di colonna tra virgolette che traccia il percorso della colonna. Width è la larghezza di una colonna in pixel. Usare Data Column per definire le colonne nel corpo principale della tabella o Row Label per le colonne nell&apos;area delle etichette delle righe. Se sono presenti più tabelle nel report, usare Column Table(n) o Row Table(n) per specificare a quale tabella si applicano path. Se width non è specificato, questa opzione restituisce la larghezza corrente della colonna specificata.

#### Imposta la larghezza dell'etichetta della riga

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

#### Ottiene larghezza della colonna

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width(	Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" ));

```

#### Ridimensiona le colonne di dati a larghezze uguali

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, Std Dev ) ),		Row Table( Grouping Columns( :Region ) )	));stats = {"Min", "Max", "Mean", "Std Dev"};ns = N Items( stats );a = {};For( i = 1, i <= ns, i++,	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) ));amax = Max( a );For( i = 1, i <= ns, i++,	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax ));

```

### Full Path Column Name

**Sintassi:** obj &lt;&lt; Full Path Column Name( true | false )

**Descrizione:** Se impostato, il nome della colonna per la tabella di output deve includere i nomi delle colonne di raggruppamento

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Full Path Column Name( 1 );obj << Make Into Data Table;

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Ignore duplicate responses

**Sintassi:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Versione aggiunta:** 19

#### Imposta in esistente

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

### Ignore duplicates in multiple response columns

**Sintassi:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**Descrizione:** Ignora le risposte duplicate nelle colonne delle risposte multiple. Ogni risposta ripetuta viene trattata come una singola occorrenza.

**JMP Versione aggiunta:** 19

#### Imposta in esistente

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicates In Multiple Response Columns( 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicates In Multiple Response Columns( 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

### Include missing for grouping columns

**Sintassi:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**Descrizione:** Aggiunge una colonna separata contenente conteggi dei valori mancanti per tutte le colonne di raggruppamento nella tabella corrente.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));obj << Include Missing For Grouping Columns( 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Include Missing For Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Make Into Data Table

**Sintassi:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**Descrizione:** Crea una nuova tabella di dati dalla tabella creata con la funzione di disposizione in tabella.

#### Trasforma in tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make Into Data Table;

```

#### Trasforma in tabella di dati invisibile

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Invisible( 1 ) );

```

#### Utilizza i nomi di colonna con percorsi completi

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**Sintassi:** obj &lt;&lt; Max scroll locked columns( number=3 )

**Descrizione:** Imposta il numero massimo di colonne da bloccare durante lo scorrimento. Tutte o nessuna delle colonne intestazioni delle righe verrà bloccata. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 19

#### Il limite consente il conteggio intestazioni

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 2 );obj << Make Into Data Table;

```

#### Limite inferiore a conteggio intestazioni

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 1 );obj << Make Into Data Table;

```

### Messaggi degli elementi condivisi

### Missing sum is zero

**Sintassi:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**Descrizione:** Specifica se i valori mancanti per la statistica di riepilogo della somma devono essere visualizzati come 0 o mancanti.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));obj << Missing Sum Is Zero( 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Missing Sum Is Zero( 1 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));

```

### Modify Table

**Sintassi:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**Descrizione:** Modifica una tabella esistente.

#### Crea e modifica una tabella completa

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add table( Row Table( Grouping Columns( :age ) ) );obj << Add Table( Column Table( Analysis Columns( :height ) ) );obj << Add Table( Column Table( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Statistics( Min, Max ) );obj << Modify Table( Column Table( 2 ), Grouping Columns( :sex ) );obj << Modify Table( Column Table( 2 ), Analysis Columns( :weight ) );Wait( 1 );obj << Modify Table( Column Table( 2 ), Delete( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Delete( Statistics( Sum ) ) );

```

#### Elimina colonna di analisi

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

### Modify Table Option

**Sintassi:** obj &lt;&lt; Modify Table Option

**Descrizione:** Si usa con Modifica tabella per modificare le opzioni della tabella di una tabella esistente.

#### Cambia etichetta di gruppo impilato in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )	));obj << Modify Table(	Row Table( 1 ),	Modify Table Option( Change Stacked Group Label ),	"new label");

```

#### Impila colonne di raggruppamento in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ) )	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

### Move

**Sintassi:** move(&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**Descrizione:** Si usa con Modifica tabella per spostare colonne e statistiche in una tabella esistente.

**JMP Versione aggiunta:** 19

#### Sposta la colonna di raggruppamento dalla colonna alla tabella di righe

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Row Table( 1 ),	Move( Column Table( 1 ), Grouping Column( :Type ) ),	Before First);

```

#### Sposta statistica dopo la nominata

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Move( Column Table( 1 ), Statistics( Mean ) ),	After( Statistics( Max ) ));

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Order By Count

**Sintassi:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));obj << Order By Count( Grouping Columns( :age ), 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order By Count( Grouping Columns( :age ), 1 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));

```

### Order by count of grouping columns

**Sintassi:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**Descrizione:** Ordina i livelli delle colonne di raggruppamento in base ai conteggi nella tabella.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));obj << Order by Count of Grouping Columns( 1 );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order by Count of Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));

```

### Pack

**Sintassi:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**Descrizione:** Riunisce più statistiche in una colonna della tabella. L&apos;opzione Template specifica la formattazione degli elementi.

#### Riempie colonne di analisi in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table(	Column Table( 1 ),	Pack(		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),		Template( "^FIRST  (^OTHERS)", "/" )	));

```

#### Riempie colonne di analisi in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Riempie colonne di analisi in nuova con template

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Plot Scale

**Sintassi:** obj &lt;&lt; Plot Scale( min, max )

**Descrizione:** Imposta la scala del grafico a barre.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Plot Scale( 0, 25 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Relaunch Analysis;

```

### Remove Column Label

**Sintassi:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**Descrizione:** Rimuove l&apos;etichetta della colonna specificata nella tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));Wait( 2 );obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintassi:** obj &lt;&lt; Report; Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Report View( "Summary" );

```

### Restore Column Label

**Sintassi:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**Descrizione:** Ripristina nella tabella l&apos;etichetta della colonna precedentemente rimossa.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));obj << Remove Column Label( Grouping Columns( :Region ) );Wait( 2 );obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Sintassi:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**Descrizione:** Si usa con Modifica tabella per convertire le colonne di analisi e le colonne di raggruppamento in una tabella esistente.

**JMP Versione aggiunta:** 19

#### Cambia colonna di analisi in colonna di raggruppamento

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Analysis Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Analysis Column( :age ) ), Grouping Column );

```

#### Cambia colonna di raggruppamento in colonna di analisi

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Grouping Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Script Window;

```

### Save grouping as tags in data table export

**Sintassi:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**Descrizione:** Imposta se i livelli di raggruppamento devono essere inclusi nella tabella di dati come tag della colonna. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 19

#### Non salva i tag

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 0 );obj << Make Into Data Table;

```

#### Salva i tag

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 1 );obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Sintassi:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**Descrizione:** Imposta se le colonne contenenti le intestazioni delle righe devono essere bloccate per lo scorrimento. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 19

#### Blocca intestazioni delle righe durante lo scorrimento

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Make Into Data Table;

```

#### Non blocca intestazioni delle righe durante lo scorrimento

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 0 );obj << Make Into Data Table;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Set Format

**Sintassi:** Set Format( statistic( Column( format ) )

**Descrizione:** Imposta il formato visualizzato per le colonne di analisi.

#### Formatta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### Formatta più colonne di statistiche e analisi

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Tabulate(	Show Control Panel( 0 ),	Set Format(		Mean(			:height( 10, 1 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 10, "Best" )			)		),		"% of Total"n(			:height( 12, 2 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 12, 2 )			)		)	),	Add Table(		Column Table(			Analysis Columns(				:height,				Transform Column( "Log[height]", Formula( Log( :height ) ) )			),			Statistics( Mean, "% of Total"n )		),		Row Table( Grouping Columns( :sex ) )	));

```

#### Formatta singola colonna di statistiche e analisi

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### Formatta statistiche senza colonna di analisi

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Row %( Format( 9, 1, "Percent" ) ) ),	Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) ));

```

### Show Chart

**Sintassi:** obj &lt;&lt; Show Chart( state=0|1 )

**Descrizione:** Mostra/Nasconde un grafico a barre generato dalla tabella creata con la funzione di disposizione in tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );

```

### Show Control Panel

**Sintassi:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello di controllo utilizzato per modificare la tabella creata con la funzione di disposizione in tabella. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Control Panel( 1 );

```

### Show Shading

**Sintassi:** obj &lt;&lt; Show Shading( state=0|1 )

**Descrizione:** Mostra/Nasconde linee alternate ombreggiate o non ombreggiate sulla tabella creata con la funzione di disposizione in tabella. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Shading( 1 );

```

### Show Table

**Sintassi:** obj &lt;&lt; Show Table( state=0|1 )

**Descrizione:** Mostra/Nasconde la tabella creata con la funzione di disposizione in tabella. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Table( 1 );

```

### Show Test Build Panel

**Sintassi:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello che controlla il campionamento per la creazione del test della tabella.

#### Mostra per esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Show Test Build Panel( 1 );

```

#### Mostra per nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Show Test Build Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

### Show Tooltip

**Sintassi:** obj &lt;&lt; Show Tooltip( state=0|1 )

**Descrizione:** Mostra/Nasconde le descrizioni comando quando si passa il mouse su zone di rilascio e menu dell&apos;output Disponi in tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Sintassi:** Stack Grouping Columns(0 | 1)

**Descrizione:** Impila le colonne di raggruppamento in un&apos;unica colonna, utilizzando il rientro per mostrare la struttura di annidamento.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size )		)	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

### Statistics

**Sintassi:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Descrizione:** Aggiunge statistiche a una colonna o riga nella tabella. Durante l&apos;esecuzione dello script, il messaggio Statistica() risiede accanto al messaggio di identificazione Colonne di analisi( colonna ) ed entrambi sono nidificati entro un comando Tabella di righe() o Tabella di colonne().

#### Aggiunge a esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Statistics( Min ) );

```

#### Aggiunge a nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Test Build

**Sintassi:** obj &lt;&lt; Test Build( Sample Size( number ) )

**Descrizione:** Visualizza la tabella utilizzando un campione del build di test dei dati con dimensione number.

#### Imposta in esistente

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );

```

#### Imposta in nuova

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Test Build( Sample Size( 100 ) ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

### Test Data View

**Sintassi:** obj &lt;&lt; Test Data View

**Descrizione:** Visualizza la tabella di dati utilizzata come campione per creare la tabella del test.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );obj << Test Data View;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Undo

**Sintassi:** obj &lt;&lt; Undo

**Descrizione:** Rimuove l&apos;effetto dell&apos;ultima operazione effettuata sulla tabella corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );Wait( 2 );obj << Undo;

```

### Uniform plot scale

**Sintassi:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**Descrizione:** Imposta le scale in modo uguale per tutte le sottocategorie del grafico a barre. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Uniform Plot Scale( 1 );

```

### Unpack

**Sintassi:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**Descrizione:** Estrae un insieme compresso di colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Tabulate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

