# Text Explorer



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Produce report multipli, uno per ogni livello delle variabili.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );

```

### ID

**Sintassi:** obj &lt;&lt; ID( column )

**Descrizione:** Una colonna utilizzata per identificare rispondenti separati nella tabella di dati di output Salva DTM in pila per associazione e nel report Analisi delle classi latenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	ID( :School Age Children )
);
obj << Save Stacked DTM For Association;

```

### Text Columns

**Sintassi:** obj &lt;&lt; Text Columns( column(s) )

**Descrizione:** Una colonna di testo che contiene i documenti da elaborare. Ogni valore di riga viene trattato come un documento.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Validation

**Sintassi:** obj &lt;&lt; Validation( column )

**Descrizione:** Una colonna numerica contenente due o tre valori distinti. Se ci sono due valori, il valore più piccolo definisce il set di training e il valore più grande definisce il set di validazione. Se ci sono tre valori, questi valori definiscono il set di training, di validazione e di test, in ordine crescente di dimensione. Se ci sono più di tre valori, vengono ignorati tutti tranne i tre più piccoli.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	Text Columns( :Reasons Not to Floss ),
	Validation( :School Age Children )
);
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

## Costruttori associati

### Text Explorer

**Sintassi:** Text Explorer( Text Columns( columns ) )

**Descrizione:** Analizza le parole dal testo in una colonna, le conta, le associa ad altre colonne, salva indicatori e rappresenta relazioni.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Delimiters

**Sintassi:** obj &lt;&lt; Add Delimiters( "string" )

**Descrizione:** Aggiunge caratteri di delimitazione forniti dall&apos;utente, in una singola stringa, all&apos;elenco predefinito dei caratteri di delimitazione per la suddivisione delle parole.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
Wait( 1 );
obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**Sintassi:** obj &lt;&lt; Add Phrase Exceptions( list )

**Descrizione:** Aggiunge un elenco di frasi da rimuovere dall&apos;elenco dei termini.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Phrases( {"twice a day", "every time", "time consuming"} );
Wait( 1 );
obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**Sintassi:** obj &lt;&lt; Add Phrases( list )

**Descrizione:** Aggiunge un elenco di frasi all&apos;elenco dei termini per essere analizzate come termini singoli. I conteggi dei termini sono aggiornati di conseguenza.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**Sintassi:** obj &lt;&lt; Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**Descrizione:** Aggiunge un elenco di stringhe di testo ricodificate da rimuovere.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );
Wait( 1 );
obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**Sintassi:** obj &lt;&lt; Add Recodes( { {pair1}, {pair2}, ...} )

**Descrizione:** Aggiunge un elenco di coppie di parole da ricodificare.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**Sintassi:** obj &lt;&lt; Add Stem Exceptions( list )

**Descrizione:** Aggiunge un elenco di parole che sono escluse dalla lemmatizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**Sintassi:** obj &lt;&lt; Add Stem Overrides( list )

**Descrizione:** Aggiunge un elenco di parole la cui lemmatizzazione è sempre consentita.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Overrides( {"care"} );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**Sintassi:** obj &lt;&lt; Add Stop Word Exceptions( list )

**Descrizione:** Aggiunge un elenco di parole da rimuovere come stop word e da aggiungere all&apos;elenco dei termini.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**Sintassi:** obj &lt;&lt; Add Stop Words( list )

**Descrizione:** Aggiunge un elenco di parole da rimuovere dall&apos;elenco dei termini e da ignorare nell&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Words( {"use", "feel", "like"} );

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Cloud Width

**Sintassi:** obj &lt;&lt; Cloud Width( number )

**Descrizione:** Imposta la larghezza del word cloud in base al numero di pixel specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Cloud Width( 150 );

```

### Coloring

**Sintassi:** obj &lt;&lt; Coloring( "Nessuno"|"Colore uniforme"|"Grigi arbitrari"|"Colori arbitrari"|"Per valori della colonna..." )

**Descrizione:** Specifica la colorazione dei termini nel word cloud.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Copy Script;

```

### Custom Stemmer

**Sintassi:** obj &lt;&lt; Custom Stemmer( Function( {string, dot}, ... ) )

**Descrizione:** Esegue la lemmatizzazione secondo le specifiche dell&apos;utente. Specifica una funzione che prende l&apos;argomento &apos;stringa&apos; (un termine di un documento), lo analizza per determinare quale pattern contiene e, se necessario, sostituisce i caratteri con l&apos;argomento &apos;punto&apos;. Questa funzione sostituisce l&apos;algoritmo standard di lemmatizzazione. Ogni parola che viene cambiata dovrebbe includere il punto di lemmatizzazione alla fine. Se la lemmatizzazione è abilitata per la piattaforma in uso, questa funzione viene chiamata per ogni termine univoco trovato nel corpus.

**JMP Versione aggiunta:** 15

```jsl

//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);

```

### Customize Regex

**Sintassi:** obj = Text Explorer(...Customize Regex( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Apre l&apos;editor Espressione regolare di Explorer del testo per modificare le impostazioni delle espressioni regolari. Questa opzione è disponibile solo con il metodo di tokenizzazione regex.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Regex" );
obj << Customize Regex();

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Data Table Window;

```

### Discriminant Analysis

**Sintassi:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Descrizione:** Prevede una classificazione di ogni documento in una categoria di una colonna di risposta specificata utilizzando l&apos;analisi discriminante lineare della matrice dei termini del documento.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Discriminant Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Column( :Gender )
);

```

### Font

**Sintassi:** obj &lt;&lt; Font( font )

**Descrizione:** Specifica il carattere, lo stile e la dimensione dei termini nel word cloud.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Font( "Arial Narrow", 11, "Plain" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Builtin Phrases

**Sintassi:** obj &lt;&lt; Include Builtin Phrases( state=0|1 )

**Descrizione:** Specifica che le frasi incorporate sono incluse nelle frasi che sono usate nel processo di tokenizzazione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**Sintassi:** obj &lt;&lt; Include Builtin Stop Words( state=0|1 )

**Descrizione:** Specifica che le stop word incorporate sono incluse nelle stop word utilizzate nel processo di tokenizzazione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Stop Words( 0 );

```

### Language

**Sintassi:** obj = Text Explorer(...Language( "Visualizza lingua"|"Inglese"|"Tedesco"|"Spagnolo"|"Francese"|"Italiano"|"Giapponese"|"Cinese (semplificato)"|"Cinese (tradizionale)"|"Coreano" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la lingua utilizzata per l&apos;elaborazione dei testi. La scelta influisce sulla lemmatizzazione e gli elenchi integrati di stop word, ricodifiche e frasi.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Language( "German" ) );

```

### Latent Class Analysis

**Sintassi:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Descrizione:** Raggruppa i documenti in cluster di documenti simili usando un&apos;analisi di classi latenti sulla matrice binaria pesata dei termini del documento.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Latent Semantic Analysis

**Sintassi:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Descrizione:** Effettua una scomposizione sparsa di valori singolari della matrice dei termini del documento.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Layout

**Sintassi:** obj &lt;&lt; Layout( "Ordinato"|"Alfabetico"|"Centrato " )

**Descrizione:** Specifica la disposizione dei termini nel word cloud.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Layout( "Alphabetical" );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Maximum Characters per Word

**Sintassi:** obj = Text Explorer(...Maximum Characters per Word( number=50 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il massimo number di caratteri che può contenere una parola per essere inclusa come termine nell&apos;analisi. "50", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Characters per Word( 15 )
);

```

### Maximum Number of Phrases

**Sintassi:** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il number massimo di frasi che compaiono nell&apos;elenco delle frasi. "5000", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Number of Phrases( 50 )
);

```

### Maximum Words per Phrase

**Sintassi:** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il number massimo di parole che una frase può contenere da includere come frase nell&apos;analisi. "4", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Maximum Words per Phrase( 2 )
);

```

### Messaggi degli elementi condivisi

### Minimum Characters per Word

**Sintassi:** obj = Text Explorer(...Minimum Characters per Word( number=1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il number di caratteri che deve contenere una parola per essere inclusa come termine nell&apos;analisi. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Minimum Characters per Word( 3 )
);

```

### Minimum Frequency for Phrase

**Sintassi:** obj &lt;&lt; Minimum Frequency for Phrase( number )

**Descrizione:** Specifica il number di occorrenze di una frase affinché sia inclusa nell&apos;elenco delle frasi. Per impostazione predefinita non esiste un minimo.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Minimum Frequency for Phrase( 5 );

```

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Phrases Alphabetical

**Sintassi:** obj &lt;&lt; Phrases Alphabetical( state=0|1 )

**Descrizione:** Ordina l&apos;elenco delle frasi alfabeticamente. L&apos;impostazione predefinita è l&apos;ordinamento per conteggio decrescente.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Phrases Alphabetical( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Report View( "Summary" );

```

### Rotated SVD

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**Sintassi:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Descrizione:** Effettua una scomposizione sparsa di valori singolari della matrice dei termini del documento.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save DTM Formula

**Sintassi:** obj &lt;&lt; Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Descrizione:** Salva una colonna della formula con valore vettoriale nella tabella di dati usando la funzione JSL Text Score. La lunghezza del vettore dipende dalle opzioni specificate dall&apos;utente per il numero massimo di termini, la frequenza minima dei termini e la ponderazione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save DTM Formula(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Document Term Matrix

**Sintassi:** obj &lt;&lt; Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**Descrizione:** Salva colonne nella tabella di dati per ogni colonna della matrice dei termini del documento. Il numero di colonne dipende dalle opzioni specificate dall&apos;utente per il numero massimo di termini, la frequenza minima dei termini e la ponderazione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Document Term Matrix(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Script Window;

```

### Save Stacked DTM for Association

**Sintassi:** obj &lt;&lt; Save Stacked DTM for Association

**Descrizione:** Salva una versione in pila della matrice dei termini del documento in una nuova tabella di dati. Se è specificata una variabile ID nella finestra di avvio di Explorer del testo, la variabile ID è usata per identificare le righe da cui ogni termine proviene nella tabella di dati del testo originale.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Stacked DTM For Association;

```

### Save Term Table

**Sintassi:** obj &lt;&lt; Save Term Table

**Descrizione:** Crea una tabella di dati JMP che contiene ogni termine dell&apos;elenco dei termini, il numero di occorrenze e il numero di documenti che contiene ogni termine.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Term Table;

```

### SaveRegexColumn

**Sintassi:** obj &lt;&lt; SaveRegexColumn( text )

**Descrizione:** Salva le espressioni regolari personalizzate specificate in una nuova colonna nella tabella di dati.

```jsl

 
dt = New Table( "WordTable",
	New Column( "Original Words",
		Character,
		"Nominal",
		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )
	)
);
dt << Text Explorer(
	Text Columns( :Original Words ), 
// the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.	
	// {2} means repeat twice. 
	// [a-z]* means 0 or more letters, greedily. (the rest of the word)
	Set Regex(
		Custom(
			Title( "Two Vowels" ),
			Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ),
			Result( "\[\1]\" ),

		)
	),
	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it
	SaveRegexColumn( "Poly Vowel Words" )
);

```

### Score Terms by Column

**Sintassi:** obj &lt;&lt; Score Terms by Column( column )

**Descrizione:** Salva gli score basati su valori in una specifica colonna della tabella di dati creata dall&apos;opzione Salva tabella dei termini. Gli score di ciascun termine sono il valore medio della colonna specificata ponderati con il numero di occorrenze del termine in ciascuna riga.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Score Terms By Column( :Salary );

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sentiment Analysis

**Sintassi:** obj &lt;&lt; Sentiment Analysis( state=0|1 )

**Descrizione:** Identifica i termini sentiment nei documenti utilizzando l&apos;analisi lessicale e classifica i documenti in base al sentiment positivo, negativo e generale.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**Sintassi:** obj &lt;&lt; Set Delimiters( "string" )

**Descrizione:** Sostituisce l&apos;elenco predefinito dei caratteri di delimitazione per la suddivisione delle parole con caratteri forniti dall&apos;utente in una singola stringa.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
obj << Set Delimiters( " " );

```

### Set Regex

**Sintassi:** obj &lt;&lt; Set Regex( ... )

**Descrizione:** Sostituisce le espressioni regolari predefinite utilizzate nel metodo di tokenizzazione Regex.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**Sintassi:** obj &lt;&lt; Show Delimiters( state=0|1 )

**Descrizione:** Mostra o nasconde i delimitatori usati per la tokenizzazione. Questa opzione è disponibile solo quando il metodo di tokenizzazione è Parole di base.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
Wait( 1 );
obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**Sintassi:** obj &lt;&lt; Show Filters for all Tables( state=0|1 )

**Descrizione:** Mostra o nasconde i filtri che possono essere usati per la ricerca nelle tabelle del report. Questa opzione si applica alle seguenti tabelle: Stop Word, Frasi specificate, Eccezioni dei lemmi, Elenco di termini, Elenco di frasi e Report dei lemmi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Filters for All Tables( 1 );

```

### Show Legend

**Sintassi:** obj &lt;&lt; Show Legend( state=0|1 )

**Descrizione:** Mostra o nasconde la legenda del word cloud. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );
Wait( 1 );
obj << Show Legend( 0 );

```

### Show Phrase List

**Sintassi:** obj &lt;&lt; Show Phrase List( state=0|1 )

**Descrizione:** Mostra o nasconde il report Elenco delle frasi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Phrase List( 0 );

```

### Show Recodes

**Sintassi:** obj &lt;&lt; Show Recodes( state=0|1 )

**Descrizione:** Mostra o nasconde un elenco dei termini ricodificati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Recodes( {{"flossing", "floss"}} );
Wait( 1 );
obj << Show Recodes( 1 );

```

### Show Selected Rows

**Sintassi:** obj &lt;&lt; Show Selected Rows

**Descrizione:** Apre una finestra che contiene il testo dei documenti che si trovano nelle righe al momento selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
Current Data Table() << Select Rows( [1 2 3 4] );
obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**Sintassi:** obj &lt;&lt; Show Specified Phrases( state=0|1 )

**Descrizione:** Mostra o nasconde un elenco delle frasi che sono state specificate dall&apos;utente per essere trattate come termini.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Specified Phrases( 1 );
Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**Sintassi:** obj &lt;&lt; Show Stem Exceptions( state=0|1 )

**Descrizione:** Mostra o nasconde i termini che sono esclusi dalla lemmatizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**Sintassi:** obj &lt;&lt; Show Stem Report( state=0|1 )

**Descrizione:** Mostra o nasconde il report Lemmatizzazione che contiene due tabelle di risultati di lemmatizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem for Combining" );
obj << Show Stem Report( 1 );

```

### Show Stop Words

**Sintassi:** obj &lt;&lt; Show Stop Words( state=0|1 )

**Descrizione:** Mostra o nasconde un elenco di stop word che sono usate nell&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stop Words( 1 );

```

### Show Summary Counts

**Sintassi:** obj &lt;&lt; Show Summary Counts( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella di conteggi riassuntivi. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Summary Counts( 0 );

```

### Show Term List

**Sintassi:** obj &lt;&lt; Show Term List( state=0|1 )

**Descrizione:** Mostra o nasconde il report Elenco dei termini. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**Sintassi:** obj &lt;&lt; Show Term and Phrase Options( state=0|1 )

**Descrizione:** Mostra o nasconde i pulsanti nel report Elenchi di termini e frasi che corrispondono alle opzioni disponibili nei menu a comparsa per ogni elenco.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**Sintassi:** obj &lt;&lt; Show Word Cloud( state=0|1 )

**Descrizione:** Mostra o nasconde il word cloud.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Word Cloud( 1 );

```

### Stemming

**Sintassi:** obj = Text Explorer(...Stemming( "Nessuna lemmatizzazione"|"Lemmatizza per combinare"|"Lemmatizza tutti i termini" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica un metodo di combinazione dei termini con caratteri iniziali simili ma finali diversi.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem All Terms" );

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Term Selection

**Sintassi:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**Descrizione:** Analizza quali termini spiegano meglio le diverse risposte. La selezione dei termini è utile anche per la sentiment analysis quando le risposte sono valutazioni.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Terms Alphabetical

**Sintassi:** obj &lt;&lt; Terms Alphabetical( state=0|1 )

**Descrizione:** Ordina l&apos;elenco dei termini alfabeticamente. L&apos;impostazione predefinita è l&apos;ordinamento per conteggio decrescente.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Terms Alphabetical( 1 );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Title( "My Platform" );

```

### Tokenizing

**Sintassi:** obj = Text Explorer(...Tokenizing( "Regex"|"Parole di base" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica un metodo di analisi del testo in termini o token. I metodi disponibili sono Regex e Parole di base.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Topic Analysis

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Treat Numbers as Words

**Sintassi:** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Considera le parole interamente composte da cifre come token. Disponibile solo con il metodo di tokenizzazione Parole di base.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );
obj << Treat Numbers as Words( 1 );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Discriminant Analysis

### Costruttori associati

#### Discriminant Analysis

**Sintassi:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**Descrizione:** Prevede una classificazione di ogni documento in una categoria di una colonna di risposta specificata utilizzando l&apos;analisi discriminante lineare della matrice dei termini del documento.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);

```

### Messaggi degli elementi

#### Canonical Plot

**Sintassi:** obj &lt;&lt; Canonical Plot( state=0|1, N Canon( number ) )

**Descrizione:** Mostra o nasconde un diagramma dei documenti e delle medie di gruppo nello spazio canonico. Lo spazio canonico è lo spazio che principalmente separa i gruppi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Analisi discriminante dalla finestra del report Explorer del testo.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
Wait( 1 );
obj2 << Remove;

```

#### Save Canonical Scores

**Sintassi:** obj &lt;&lt; Save Canonical Scores( N Canon( number ) )

**Descrizione:** Salva nella tabella di dati le colonne che contengono gli score dallo spazio canonico per ogni osservazione. Lo spazio canonico è lo spazio che principalmente separa i gruppi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Canonical Scores( N Canon( 3 ) );

```

#### Save Probabilities

**Sintassi:** obj &lt;&lt; Save Probabilities

**Descrizione:** Salva una colonna di probabilità nella tabella di dati per ogni livello di risposta oltre a una colonna che contiene la risposta più probabile.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**Sintassi:** obj &lt;&lt; Save Probability Formulas

**Descrizione:** Salva colonne con formule nella tabella di dati per la previsione della risposta più probabile. Queste colonne usano la funzione Text Score per calcolare la probabilità per ogni livello di risposta.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probability Formulas;

```

## LCA Analysis

### Costruttori associati

#### Latent Class Analysis

**Sintassi:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**Descrizione:** Raggruppa i documenti in cluster di documenti simili usando un&apos;analisi di classi latenti sulla matrice binaria pesata dei termini del documento.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Messaggi degli elementi

#### Cluster Mixture Probabilities

**Sintassi:** obj &lt;&lt; Cluster Mixture Probabilities( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella di probabilità di appartenenza di un&apos;osservazione a ciascun cluster. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Mixture Probabilities( 0 );

```

#### Cluster Probabilities by Row

**Sintassi:** obj &lt;&lt; Cluster Probabilities by Row( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella Probabilità della miscela, che contiene le probabilità di appartenenza al cluster per ogni riga. La colonna Cluster più probabile indica il cluster con la più elevata probabilità di appartenenza per ogni riga. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Probabilities by row( 0 );

```

#### Color by Cluster

**Sintassi:** obj &lt;&lt; Color by Cluster

**Descrizione:** Colora ogni riga della tabella dei dati in base al suo cluster più probabile.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Color by Cluster;

```

#### MDS Plot

**Sintassi:** obj &lt;&lt; MDS Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma di scaling multidimensionale, che è una rappresentazione bidimensionale della prossimità dei cluster. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << MDS Plot( 0 );

```

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report di Analisi delle classi latenti dal report Explorer del testo.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Remove;

```

#### Rename Clusters

**Sintassi:** obj &lt;&lt; Rename Clusters( "name1", "name2", ... )

**Descrizione:** Consente di aggiungere nomi descrittivi per uno o più cluster

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

#### Save Probabilities

**Sintassi:** obj &lt;&lt; Save Probabilities

**Descrizione:** Salva la probabilità di appartenenza di un documento a ciascun cluster come colonna separata nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**Sintassi:** obj &lt;&lt; Save Probability Formulas

**Descrizione:** Salva una colonna della formula nella tabella di dati per ogni cluster e una colonna della formula per il cluster più probabile.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probability Formulas;

```

#### Set Random Seed

**Sintassi:** obj &lt;&lt; Latent Class Analysis( Set Random Seed( number ) )

**Descrizione:** Imposta un seme casuale per l&apos;analisi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 ),
	Set Random Seed( 1234 )
);

```

#### Term Probabilities by Cluster

**Sintassi:** obj &lt;&lt; Term Probabilities by Cluster( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella di termini con una stima per ogni cluster. La stima è la probabilità condizionata che un documento contenga il termine, dato che il documento appartiene a un particolare cluster. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Term Probabilities by Cluster( 0 );

```

#### Top Terms by Cluster

**Sintassi:** obj &lt;&lt; Top Terms by Cluster( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella dei dieci termini con gli score più alti in ogni cluster. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Top Terms by Cluster( 0 );

```

#### Word Clouds by Cluster

**Sintassi:** obj &lt;&lt; Word Clouds by Cluster( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di cloud di parole, una per ogni cluster.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### Costruttori associati

#### Rotated SVD

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### Topic Analysis

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### Messaggi degli elementi

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Analisi degli argomenti dal report SVD.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Remove;

```

#### Rename Topics

**Sintassi:** obj &lt;&lt; Rename Topics

**Descrizione:** Consente di aggiungere nomi descrittivi per uno o più argomenti.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

#### Rotation Matrix

**Sintassi:** obj &lt;&lt; Rotation Matrix( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di rotazione per la rotazione varimax.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Rotation Matrix( 1 );
Report( obj )["Rotation Matrix"] << Close( 0 );

```

#### Save Document Topic Vectors

**Sintassi:** obj &lt;&lt; Save Document Topic Vectors

**Descrizione:** Salva i vettori singolari dall&apos;analisi dei topic in nuove colonne nella tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Document Topic Vectors;

```

#### Save Item Topic Vectors

**Sintassi:** obj &lt;&lt; Save Item Topic Vectors

**Descrizione:** Salva i vettori degli argomenti in una nuova tabella di dati Score argomento elemento.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Item Topic Vectors;

```

#### Save Term Topic Vectors

**Sintassi:** obj &lt;&lt; Save Term Topic Vectors

**Descrizione:** Salva i vettori di argomento dall&apos;analisi dei topic come colonne in una nuova tabella di dati. Se è già aperta una tabella dei termini, allora le colonne vengono salvate in quella tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj << Save Term Table;
obj3 << Save Term Topic Vectors;

```

#### Save Topic Vector Formula

**Sintassi:** obj &lt;&lt; Save Topic Vector Formula

**Descrizione:** Salva nella tabella di dati una formula con il tipo di modellizzazione Vettore che contiene la decomposizione ai valori singolari ruotata. La colonna risultante utilizza la funzione Text Score.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Topic Vector Formula;

```

#### Save Transaction Topic Vectors

**Sintassi:** obj &lt;&lt; Save Transaction Topic Vectors

**Descrizione:** Salva un numero specificato dall&apos;utente di vettori singolari dalla decomposizione ai valori singolari ruotati (vettori argomento) in nuove colonne della tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Transaction Topic Vectors;

```

#### Top Loadings by Topic

**Sintassi:** obj &lt;&lt; Top Loadings by Topic( state=0|1 )

**Descrizione:** Mostra o nasconde il report Pesi principali per argomento, che contiene una tabella di termini per ogni argomento. I termini in ogni tabella sono quelli che hanno i pesi fattoriali più grandi in valore assoluto per ogni argomento. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Top Loadings by Topic( 0 );

```

#### Topic Loadings

**Sintassi:** obj &lt;&lt; Topic Loadings( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella Pesi argomento, che contiene una matrice dei pesi fattoriali tra gli argomenti per ogni termine. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Loadings"] << Close( 0 );
Wait( 1 );
obj3 << Topic Loadings( 0 );

```

#### Topic Scatterplot Matrix

**Sintassi:** obj &lt;&lt; Topic Scatterplot Matrix( state=0|1 )

**Descrizione:** Mostra/nasconde una matrice del grafico a dispersione dei vettori ruotati di scomposizione di valori singolari.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Topic Scatterplot Matrix( 1 );

```

#### Topic Scores

**Sintassi:** obj &lt;&lt; Topic Scores( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di score tra gli argomenti per ogni documento. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores( 0 );

```

#### Topic Scores Plots

**Sintassi:** obj &lt;&lt; Topic Scores Plots( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene un diagramma degli score degli argomenti per ogni documento. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores Plots"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores Plots( 0 );

```

#### Variance Explained by Each Topic

**Sintassi:** obj &lt;&lt; Variance Explained by Each Topic( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella che contiene la varianza spiegata da ogni argomento. La tabella include anche le colonne della percentuale e della percentuale cumulativa della variazione che è spiegata da ogni argomento.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Variance Explained by Each Topic( 1 );
Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

#### Word Clouds by Topic

**Sintassi:** obj &lt;&lt; Word Clouds by Topic( state=0|1 )

**Descrizione:** Mostra o nasconde una matrice di cloud di parole, una per ogni topic.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Word Clouds by Topic( 1 );
Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### Costruttori associati

#### Latent Semantic Analysis

**Sintassi:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Descrizione:** Effettua una scomposizione sparsa di valori singolari della matrice dei termini del documento.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

#### SVD

**Sintassi:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**Descrizione:** Effettua una scomposizione sparsa di valori singolari della matrice dei termini del documento.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### Messaggi degli elementi

#### Cluster Documents

**Sintassi:** obj &lt;&lt; Cluster Documents( state=0|1 )

**Descrizione:** Mostra/nasconde un&apos;analisi della clusterizzazione gerarchica dei documenti nei dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Cluster Documents( 1 );

```

#### Cluster Items

**Sintassi:** obj &lt;&lt; Cluster Items( state=0|1 )

**Descrizione:** Mostra/nasconde un&apos;analisi della clusterizzazione gerarchica dei termini nei dati.

**JMP Versione aggiunta:** 14

```jsl


dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Items( 1 );

```

#### Cluster Terms

**Sintassi:** obj &lt;&lt; Cluster Terms( state=0|1 )

**Descrizione:** Mostra/nasconde un&apos;analisi della clusterizzazione gerarchica dei termini nei dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << obj << Cluster Terms( 1 );

```

#### Cluster Transactions

**Sintassi:** obj &lt;&lt; Cluster Transactions( state=0|1 )

**Descrizione:** Mostra/nasconde un&apos;analisi della clusterizzazione gerarchica dei documenti nei dati.

**JMP Versione aggiunta:** 14

```jsl


dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Transactions( 1 );

```

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report SVD dalla finestra del report Explorer del testo.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
Wait( 1 );
obj2 << Remove;

```

#### Rotated SVD

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### SVD Scatterplot Matrix

**Sintassi:** obj &lt;&lt; SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**Descrizione:** Mostra/Nasconde una matrice del grafico a dispersione dei vettori di scomposizione di valori singolari dei termini e del documento per ogni diagramma SVD.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

#### Save Document Singular Vectors

**Sintassi:** obj &lt;&lt; Save Document Singular Vectors(number)

**Descrizione:** Salva in nuove colonne della tabella di dati il numero specificato di vettori singolari dalla decomposizione ai valori singolari del documento.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Document Singular Vectors( 5 );

```

#### Save Item SVD

**Sintassi:** obj &lt;&lt; Save Item SVD

**Descrizione:** Crea una tabella di dati che contiene un numero di vettori singolari che è possibile specificare per ogni elemento. Questi sono i valori singolari a destra della matrice degli elementi della transazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item SVD( 5 );

```

#### Save Item Singular Vectors

**Sintassi:** obj &lt;&lt; Save Item Singular Vectors

**Descrizione:** Crea una tabella di dati che contiene un numero di vettori singolari che è possibile specificare per ogni elemento. Questi sono i valori singolari a destra della matrice degli elementi della transazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item Singular Vectors( 5 );

```

#### Save Singular Vector Formula

**Sintassi:** obj &lt;&lt; Save Singular Vector Formula

**Descrizione:** Salva nella tabella di dati una colonna della formula con valore vettoriale che contiene la decomposizione ai valori singolari del documento. La colonna della formula usa la funzione Text Score.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Singular Vector Formula;

```

#### Save Term Singular Vectors

**Sintassi:** obj &lt;&lt; Save Term Singular Vectors( number )

**Descrizione:** Salva come colonne in una nuova tabella di dati il numero specificato di vettori singolari dalla decomposizione ai valori singolari dei termini. Ogni riga corrisponde a un termine. Se è già aperta una tabella dei termini, allora le colonne vengono salvate in tale tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Term Singular Vectors( 5 );

```

#### Save Transaction SVD

**Sintassi:** obj &lt;&lt; Save Transaction SVD

**Descrizione:** Crea una tabella di dati che contiene un numero di vettori singolari che è possibile specificare per ogni transazione. Questi sono i valori singolari a sinistra della matrice degli elementi della transazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction SVD( 5 );

```

#### Save Transaction Singular Vectors

**Sintassi:** obj &lt;&lt; Save Transaction Singular Vectors

**Descrizione:** Crea una tabella di dati che contiene un numero di vettori singolari che è possibile specificare per ogni transazione. Questi sono i valori singolari a sinistra della matrice degli elementi della transazione.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction Singular Vectors( 5 );

```

#### Select Near Neighbors

**Sintassi:** obj &lt;&lt; Select Near Neighbors( number=10 )

**Descrizione:** Trova e seleziona i k vicini più prossimi dei punti selezionati nel diagramma SVD del documento. "10", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
dt << Select Rows( [102, 237] );
obj2 << Select Near Neighbors( 8 );

```

#### Topic Analysis

**Sintassi:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**Descrizione:** Effettua una decomposizione ai valori singolari ruotata varimax della matrice dei termini del documento per generare gruppi di termini denominati topic.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### Costruttori associati

#### Sentiment Analysis

**Sintassi:** Sentiment Analysis( state=0|1 )

**Descrizione:** Identifica i termini sentiment nei documenti utilizzando l&apos;analisi lessicale e classifica i documenti in base al sentiment positivo, negativo e generale.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Messaggi degli elementi

#### Add Feature Words

**Sintassi:** obj &lt;&lt; Add Feature Words( list )

**Descrizione:** Aggiunge un elenco di parole da classificare come funzioni.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Add Feature Words( {"floss"} );

```

#### Add Intensifier Exception Words

**Sintassi:** obj &lt;&lt; Add Intensifier Exception Words( list )

**Descrizione:** Aggiunge un elenco di termini intensificatori da rimuovere dall&apos;analisi.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Exception Words( {"almost"} );

```

#### Add Intensifier Words

**Sintassi:** obj &lt;&lt; Add Intensifier Words( {{&lt;word, multiplier&gt;}, {&lt;word&gt;, &lt;multiplier&gt;}, ... } )

**Descrizione:** Aggiunge un elenco di parole da usare come termini intensificatori nell&apos;analisi. I moltiplicatori sono numeri in virgola mobile generalmente utilizzati nel range [-2, 2].

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

#### Add Negation Exception Words

**Sintassi:** obj &lt;&lt; Add Negation Exception Words( list )

**Descrizione:** Aggiunge un elenco di termini di negazione da rimuovere dall&apos;analisi.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Exception Words( {"without"} );

```

#### Add Negation Words

**Sintassi:** obj &lt;&lt; Add Negation Words( list )

**Descrizione:** Aggiunge un elenco di parole da usare come termini di negazione nell&apos;analisi.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Words( {"dont"} );

```

#### Add Sentiment Exception Words

**Sintassi:** obj &lt;&lt; Add Sentiment Exception Words( list )

**Descrizione:** Aggiunge un elenco di termini sentiment da rimuovere dall&apos;analisi.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Exception Words( {"easy"} );

```

#### Add Sentiment Words

**Sintassi:** obj &lt;&lt; Add Sentiment Words( {{&lt;word&gt;, &lt;score&gt;}, {&lt;word&gt;, &lt;score&gt;}, ... } )

**Descrizione:** Aggiunge un elenco di parole da usare come termini di sentiment nell&apos;analisi. Gli score sono numeri interi compresi nel range [-100, 100].

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

#### Include Builtin Intensifier Terms

**Sintassi:** obj &lt;&lt; Include Builtin Intensifier Terms( state=0|1 )

**Descrizione:** Specifica che i termini intensificatori incorporati sono inclusi nei termini intensificatori utilizzati nella sentiment analysis. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Intensifier Terms( 0 );

```

#### Include Builtin Negation Terms

**Sintassi:** obj &lt;&lt; Include Builtin Negation Terms( state=0|1 )

**Descrizione:** Specifica che i termini di negazione incorporati sono inclusi nei termini di negazione usati per la sentiment analysis. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Negation Terms( 0 );

```

#### Include Builtin Sentiment Terms

**Sintassi:** obj &lt;&lt; Include Builtin Sentiment Terms( state=0|1 )

**Descrizione:** Specifica che i termini sentiment incorporati sono inclusi nei termini sentiment utilizzati nella sentiment analysis. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Sentiment Terms( 0 );

```

#### Parse Documents

**Sintassi:** obj &lt;&lt; Parse Documents( state=0|1 )

**Descrizione:** Specifica che è utilizzata l&apos;elaborazione del linguaggio naturale (NLP) per analizzare i documenti. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Parse Documents( 0 );

```

#### Save Count of Sentiment Scores by Document

**Sintassi:** obj &lt;&lt; Save Count of Sentiment Scores by Document

**Descrizione:** Salva una colonna nella tabella di dati per ogni termine di sentiment. Ogni colonna contiene i conteggi delle occorrenze di ogni termine di sentiment in ogni documento.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Count of Sentiment Scores by Document;

```

#### Save Document Scores

**Sintassi:** obj &lt;&lt; Save Document Scores

**Descrizione:** Salva gli score dei documenti in nuove colonne della tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Document Scores;

```

#### Score Column

**Sintassi:** obj &lt;&lt; Score Column( column )

**Descrizione:** Specifica una colonna che contiene informazioni note da confrontare con il sentiment calcolato.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Score Column( :Gender );

```

#### Scoring

**Sintassi:** obj &lt;&lt; Scoring( "Scalato"|"Min Max" )

**Descrizione:** Imposta lo stile per calcolare lo score complessivo dei documenti. L&apos;opzione Scalato somma gli score delle frasi positive e negative e poi divide la somma per il numero di frasi. L&apos;opzione Min Max è calcolata come la somma dello score massimo positivo e dello score minimo negativo.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Scoring( "Min Max" );

```

#### Show Feature Finder

**Sintassi:** obj &lt;&lt; Show Feature Finder( state=0|1 )

**Descrizione:** Mostra o nasconde un report che consente di porzionare i sentiment in base alle caratteristiche selezionate. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Features"] << Close( 0 );
Wait( 2 );
sent << Show Feature Finder( 0 );

```

#### Show Intensifier Terms

**Sintassi:** obj &lt;&lt; Show Intensifier Terms( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella dei termini intensificatori. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Intensifier Terms"] << Close( 0 );
Wait( 2 );
sent << Show Intensifier Terms( 0 );

```

#### Show Negation Terms

**Sintassi:** obj &lt;&lt; Show Negation Terms( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella dei termini di negazione. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Negation Terms"] << Close( 0 );
Wait( 2 );
sent << Show Negation Terms( 0 );

```

#### Show Sentiment Cloud

**Sintassi:** obj &lt;&lt; Show Sentiment Cloud( state=0|1 )

**Descrizione:** Mostra o nasconde il word cloud delle frasi di sentiment.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Show Sentiment Cloud( 1 );

```

#### Show Sentiment Terms

**Sintassi:** obj &lt;&lt; Show Sentiment Terms( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella dei termini di sentiment. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Sentiment Terms"] << Close( 0 );
Wait( 2 );
sent << Show Sentiment Terms( 0 );

```

## Term Selection

### Costruttori associati

#### Term Selection

**Sintassi:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**Descrizione:** Analizza quali termini spiegano meglio le diverse risposte. La selezione dei termini è utile anche per la sentiment analysis quando le risposte sono valutazioni.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Messaggi degli elementi

#### Model Choice

**Sintassi:** obj &lt;&lt; Term Selection( Model Choice(&lt;index&gt;) )

**Descrizione:** Specifica qual è il modello corrente per l&apos;area di riepilogo.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Models

**Sintassi:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )))

**Descrizione:** Specifica le informazioni necessarie a generare un modello.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Selezione dei termini dalla finestra del report Explorer del testo.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
Wait( 1 );
term << Remove;

```

#### Save Document Scores

**Sintassi:** obj &lt;&lt; Save Document Scores

**Descrizione:** Salva gli score dei documenti in nuove colonne della tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Document Scores;

```

#### Save Prediction Formulas

**Sintassi:** obj &lt;&lt; Save Prediction Formulas

**Descrizione:** Salva colonne nella tabella di dati che contengono le formule di previsione per l&apos;analisi al momento selezionata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Prediction Formulas;

```

#### Save Term Score DTM

**Sintassi:** obj &lt;&lt; Save Term Score DTM

**Descrizione:** Salva colonne nella tabella di dati per ogni termine rilevante nell&apos;analisi al momento selezionata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Term Score DTM;

```

#### Show Term Cloud

**Sintassi:** obj &lt;&lt; Show Term Cloud( state=0|1 )

**Descrizione:** Mostra o nasconde un cloud di parole dei termini del coefficiente.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Show Term Cloud;

```

