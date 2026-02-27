# EMP Measurement Systems Analysis



## Colonne

### By

**Sintassi:** obj = EMP Measurement Systems Analysis(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Produce report multipli, uno per ogni livello delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator ),	Part( :Part ),	Model( Crossed ),	Dispersion Chart Type( Range ),	By( :Instrument ));

```

### Grouping

**Sintassi:** obj = EMP Measurement Systems Analysis(...&lt;Grouping( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne categoriche come variabili di raggruppamento.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	Grouping( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Measurement

**Sintassi:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne continue delle misurazioni.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Measurement( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Part

**Sintassi:** obj = EMP Measurement Systems Analysis(...Part( column )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la colonna categorica che designa la parte o l&apos;unità.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Sample ID( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Sample ID

**Sintassi:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la colonna categorica che designa la parte o l&apos;unità.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Sample ID( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Standard

**Sintassi:** obj = EMP Measurement Systems Analysis(...&lt;Standard( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna standard o di riferimento che contiene i valori noti per la parte misurata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Response ),	Part( :Part ),	Standard( :Standard ),	Model( "Main" ),	Dispersion Chart Type( "Range" ));

```

### X

**Sintassi:** obj = EMP Measurement Systems Analysis(...&lt;X( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne categoriche come variabili di raggruppamento.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	Grouping( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Y

**Sintassi:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne continue delle misurazioni.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Measurement( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

## Costruttori associati

### EMP Measurement Systems Analysis

**Sintassi:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Descrizione:** Avvia il metodo EMP (Evaluating the Measurement Process – Valutazione del processo di misurazione) per l&apos;analisi dei sistemi di misura. I grafici della media e di dispersione (range o deviazione standard) sono visualizzati per impostazione predefinita.

#### Incrociato con il modello degli effetti di interazione a due fattori, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Incrociato con il modello degli effetti di interazione a due fattori, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati e poi nidificati, grafico del range

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( Range ),	Variance Components( 1 ));

```

#### Modello effetti incrociati e poi nidificati, grafico della deviazione standard

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati e poi incrociati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati poi incrociati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti principali, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti principali, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Conv Limit

**Sintassi:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**Descrizione:** Imposta il limite di convergenza utilizzato per il calcolo delle componenti della varianza. Questa opzione influisce solo sulle analisi REML.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << Select Rows( 5 ) << Exclude( 1 );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Conv Limit( 1e-7 ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Data Table Window;

```

### EMP MSA Analysis

**Sintassi:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**Descrizione:** Specifica le opzioni del report dell&apos;analisi EMP MSA per ogni risposta di misura.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis(		"Y",		EMP Results( 1 ),		Variance Components( 1 ),		"EMP Gauge R&R Results"n( 1 )	));

```

### Edit MSA Metadata

**Sintassi:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**Descrizione:** Apre una finestra che consente di aggiungere o modificare il range di tolleranza, i limiti di tolleranza, la media storica e sigma storico del processo per tutte le analisi. I report vengono aggiornati automaticamente.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) ));Wait( 1 );obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Timing;Show( t );

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

### Include Interactions in Reproducibility

**Sintassi:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**Descrizione:** Include le interazioni nel calcolo della statistica di riproducibilità.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Include Interactions in Reproducibility( 1 ));obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Max Iter

**Sintassi:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**Descrizione:** Imposta il numero massimo di iterazioni utilizzate per il calcolo delle componenti della varianza. Questa opzione influisce solo sulle analisi REML.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << Select Rows( 5 ) << Exclude( 1 );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Max Iter( 200 ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Messaggi degli elementi condivisi

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Report View( "Summary" );

```

### Save All Metadata to Table

**Sintassi:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**Descrizione:** Crea una nuova tabella di dati che contiene i metadati MSA e Sigma della misura per ogni colonna di dati di misurazione. La tabella è in formato verticale e contiene una riga per ogni variabile di misura. È possibile salvare i valori di tolleranza inferiore e superiore come colonne aggiuntive nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << Save All Metadata to Table;

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Metadata as Column Properties

**Sintassi:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**Descrizione:** Per ogni colonna di dati di misurazione, salva i metadati MSA e Sigma della misura come proprietà della colonna all&apos;interno della colonna della tabella di dati originale. È possibile salvare i valori di tolleranza inferiore e superiore come proprietà Limiti di specifica della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << Save Metadata as Column Properties;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Script Window;

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

### Set Alpha Level

**Sintassi:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il livello alfa utilizzato per i report di confronto delle distorsioni e di confronto errori test-retest. "0.05", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Set Alpha Level( .01 ));obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**Sintassi:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Imposta il seme casuale su un valore specifico; in questo modo tutte le esecuzioni successive che utilizzano lo stesso seme saranno riproducibili.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Set Random Seed( 12345 ));obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**Sintassi:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica un valore costante che viene moltiplicato per sigma. "6", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Sigma Multiplier( 5.15 ),	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) ));

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## EMP MSA Analysis > EMP AIAG Gauge Results

### Messaggi degli elementi

#### AIAG Labels

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**Descrizione:** Mostra o nasconde le etichette nella tabella Risultati AIAG di valutazione della ripetibilità e riproducibilità (Gauge R&R). Le etichette sono definite dall&apos;Automotive Industry Action Group (AIAG). Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

#### Discrimination Ratio

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**Descrizione:** Mostra o nasconde il rapporto di discriminazione per il modello specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### Messaggi degli elementi

#### Show Connected Means

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Connected Means( state=0|1 )))

**Descrizione:** Mostra o nasconde le linee che collegano i valori medi di misurazione sulla carta delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

#### Show Control Limits

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Control Limits( state=0|1 )))

**Descrizione:** Mostra o nasconde i limiti di controllo sulla carta delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura tra i limiti di controllo sulla carta delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Data

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Data( state=0|1 )))

**Descrizione:** Mostra o nasconde i punti di dati sulla carta delle medie.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

#### Show Grand Mean

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Grand Mean( state=0|1 )))

**Descrizione:** Mostra o nasconde la media generale della variabile Y sulla carta delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

#### Show Separators

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Separators( state=0|1 )))

**Descrizione:** Mostra o nasconde le linee verticali che separano le variabili X nella carta delle medie. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### Messaggi degli elementi

#### Show Average Dispersion

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**Descrizione:** Mostra o nasconde il range o la deviazione standard medi sul grafico di dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

#### Show Connected Points

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**Descrizione:** Mostra o nasconde le linee che collegano tutti i range o le deviazioni standard sul grafico di dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

#### Show Control Limits

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**Descrizione:** Mostra o nasconde i limiti di controllo sul grafico di dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura tra i limiti di controllo sul grafico di dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Separators

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Separators( state=0|1 )))

**Descrizione:** Mostra o nasconde le linee verticali che separano le variabili X sul grafico di dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### Messaggi degli elementi

#### Show Avg Bias Points

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**Descrizione:** Mostra o nasconde i punti di distorsione media sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**Descrizione:** Mostra o nasconde i punti di distorsione sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**Descrizione:** Mostra o nasconde le curve di confidenza della linea di stima sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 1 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 0 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 1 )));

```

#### Show Line of Fit

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**Descrizione:** Mostra o nasconde la linea di stima sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**Descrizione:** Mostra o nasconde la linea di distorsione media generale sul grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 1 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 0 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 1 )));

```

## EMP MSA Analysis

### Messaggi degli elementi

#### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));preset = obj << (EMP MSA Analysis[1] << New Preset);dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj2 = dt2 << EMP Measurement Systems Analysis(	Y( :Measurement ),	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ));Wait( 1 );obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

#### Average Chart

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma dei valori medi di misura per ogni combinazione delle variabili Parte e X. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

#### Bias Comparison

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Bias Comparison( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico di analisi delle medie per verificare se le variabili X hanno medie diverse.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

#### Dispersion Chart

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( state=0|1 ))

**Descrizione:** Mostra o nasconde il grafico di dispersione specificato. Il grafico di dispersione di default è il Grafico del range. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

#### EMP Results

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; EMP Results( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che calcola diverse statistiche per facilitare la valutazione e la classificazione del sistema di misurazione.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

#### Edit MSA Metadata

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( state=0|1 ))

**Descrizione:** Apre una finestra che consente di aggiungere o modificare il range di tolleranza, i limiti di tolleranza, la media storica e sigma storico del processo per tutte le analisi. I report vengono aggiornati automaticamente.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Edit MSA Metadata(	Lower Tolerance( 120 ),	Upper Tolerance( 240 )));

```

#### Effective Resolution

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Effective Resolution( state=0|1 ))

**Descrizione:** Mostra o nasconde una tabella che contiene i risultati per la risoluzione di un sistema di misura, che aiuta a determinare il funzionamento degli incrementi di misura.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

#### Linearity and Bias Results

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico e un riepilogo da un&apos;analisi di regressione utilizzando la colonna standard come variabile X e la distorsione come variabile Y.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

#### Misclassification Probabilities

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Misclassification Probabilties( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che contiene le probabilità di errore di classificazione per il modello dato.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

#### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));preset = obj << (EMP MSA Analysis[1] << New Preset);

```

#### Parallelism Plots

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Parallelism Plots( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico sovrapposto che riflette i valori di misurazione medi per ciascuna parte.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

#### Risultati AIAG di valutazione della ripetibilità e riproducibilità (Gauge R&R)

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che suddivide la variabilità delle misure in variazione tra parti e variazione del sistema di misura. Il calcolo della riproducibilità include le interazioni.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	MSA Metadata(		:Y(			Lower Tolerance( 120 ),			Upper Tolerance( 240 ),			Tolerance Range( 120 ),			Historical Process Sigma( 25 )		)	),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

#### Risultati EMP valutazione della ripetibilità e riproducibilità (Gauge R&R)

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "EMP Gauge R&R Results"n( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che suddivide la variabilità delle misure in variazione tra parti e variazione del sistema di misura. I calcoli in questo report sono basati sulle varianze, non sui range.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

#### Shift Detection Profiler

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Shift Detection Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde una serie interattiva di grafici che è possibile regolare per vedere le probabilità di ricevere avvertimenti sul grafico di comportamento del processo.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

#### Show Monitor Classification Legend

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Monitor Classification Legend( state=0|1 ))

**Descrizione:** Mostra o nasconde la legenda di classificazione dei monitoraggi nel report Risultati EMP. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << EMP Results( 1 ));Wait( 1 );obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

#### Show Part Legend

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Part Legend( state=0|1 ))

**Descrizione:** Mostra o nasconde la legenda parziale per i grafici della media e dispersione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

#### Show Shift Detection Profiler Legend

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Shift Detection Profiler Legend( state=0|1 ))

**Descrizione:** Mostra o nasconde la legenda nel Profiler di rilevazione dello shift. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));Wait( 1 );obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

#### Test-Retest Error Comparison

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "Test-Retest Error Comparison"n( state=0|1 ))

**Descrizione:** Mostra o nasconde un grafico di analisi delle medie per le varianze o di analisi dei range delle medie per verificare se uno qualsiasi dei gruppi ha diversi livelli di errore test-retest.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

#### Variance Components

**Sintassi:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che contiene le stime delle componenti della varianza per il modello specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

