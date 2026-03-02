# Surface Plot



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Produce report multipli, uno per ogni livello delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);

```

### Columns

**Sintassi:** obj &lt;&lt; Columns( column(s) )

**Descrizione:** Variabili che saranno disponibili per le coordinate X, Y e Z nel grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**Sintassi:** obj &lt;&lt; Factors( column(s) )

**Descrizione:** Variabili che saranno disponibili per le coordinate X, Y e Z nel grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## Costruttori associati

### Surface Plot

**Sintassi:** Surface Plot( Columns() )

**Descrizione:** Produce un grafico tridimensionale rotante di punti o una superficie definita da una formula salvata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

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

### Clip Sheet

**Sintassi:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Descrizione:** Restringe la superficie ai range delle colonne che sono utilizzate nella formula della prima colonna di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet1

**Sintassi:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**Descrizione:** Restringe la superficie ai range delle colonne che sono utilizzate nella formula della prima colonna di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet2

**Sintassi:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**Descrizione:** Restringe la superficie ai range delle colonne che sono utilizzate nella formula della seconda colonna di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( "Both Sides" );
Wait( 1 );
obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**Sintassi:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**Descrizione:** Restringe la superficie ai range delle colonne che sono utilizzate nella formula della terza colonna di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**Sintassi:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**Descrizione:** Restringe la superficie ai range delle colonne che sono utilizzate nella formula della quarta colonna di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Clip Sheet4( 1 );

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

### Contour Color

**Sintassi:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Descrizione:** Specifica il colore del profilo isometrico sulla superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**Sintassi:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**Descrizione:** Specifica il colore del profilo isometrico sulla superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**Sintassi:** obj &lt;&lt; Contour Color2( color )

**Descrizione:** Specifica il colore del profilo isometrico sulla superficie per la seconda risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Show Contour2( "On Surface" );
Wait( 1 );
obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**Sintassi:** obj &lt;&lt; Contour Color3( color )

**Descrizione:** Specifica il colore del profilo isometrico sulla superficie per la terza risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Show Contour3( "On Surface" );
Wait( 1 );
obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**Sintassi:** obj &lt;&lt; Contour Color4( color )

**Descrizione:** Specifica il colore del profilo isometrico sulla superficie per la quarta risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" ),
	Show Surface1( "Off" )
);
obj << Show Contour4( "On Surface" );
Wait( 1 );
obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**Sintassi:** obj &lt;&lt; Control Panel( state=0|1 )

**Descrizione:** Mostra o nasconde il pannello di controllo, che include i controlli per l&apos;aspetto, le variabili indipendenti e le variabili dipendenti. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Table Window;

```

### Data points Color

**Sintassi:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Descrizione:** Cambia il colore dei punti dati per la prima variabile dipendente disegnata sulla superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**Sintassi:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**Descrizione:** Cambia il colore dei punti dati per la prima variabile dipendente disegnata sulla superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**Sintassi:** obj &lt;&lt; Data points Color2( color )

**Descrizione:** Cambia il colore dei punti dati per la seconda variabile dipendente disegnata sulla superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( "Mesh" );
obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**Sintassi:** obj &lt;&lt; Data points Color3( color )

**Descrizione:** Cambia il colore dei punti dati per la terza variabile dipendente disegnata sulla superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Needles" );
obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**Sintassi:** obj &lt;&lt; Data points Color4( color )

**Descrizione:** Cambia il colore dei punti dati per la quarta variabile dipendente disegnata sulla superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Datapoints Choice4( "Surface" );
obj << Data points Color4( 100, 0, 200 );
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**Sintassi:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Descrizione:** Specifica la modalità di visualizzazione dei punti sulla superficie per la prima risposta. Lo stile di default è l&apos;opzione Punti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**Sintassi:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Descrizione:** Specifica la modalità di visualizzazione dei punti sulla superficie per la prima risposta. Lo stile di default è l&apos;opzione Punti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**Sintassi:** obj &lt;&lt; Datapoints Choice2( "Disattivato"|"Punti"|"Aghi"|"Rete"|"Superficie" )

**Descrizione:** Specifica la modalità di visualizzazione dei punti sulla superficie per la seconda risposta. Lo stile di default è l&apos;opzione Punti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
Wait( 1 );
obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**Sintassi:** obj &lt;&lt; Datapoints Choice3( "Disattivato"|"Punti"|"Aghi"|"Rete"|"Superficie" )

**Descrizione:** Specifica la modalità di visualizzazione dei punti sulla superficie per la terza risposta. Lo stile di default è l&apos;opzione Punti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**Sintassi:** obj &lt;&lt; Datapoints Choice4( "Disattivato"|"Punti"|"Aghi"|"Rete"|"Superficie" )

**Descrizione:** Specifica la modalità di visualizzazione dei punti sulla superficie per la quarta risposta. Lo stile di default è l&apos;opzione Punti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**Sintassi:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**Descrizione:** Mostra o nasconde le opzioni per i punti nei controlli delle variabili dipendenti. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**Sintassi:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**Descrizione:** Mostra o nasconde le opzioni della griglia nei controlli delle variabili dipendenti. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Response Grid( 0 );

```

### Equation

**Sintassi:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**Descrizione:** Assegna le equazioni ai fogli in un ordine specificato nella sezione Variabili dipendenti. Per ignorare una risposta, specificare un valore mancante utilizzando un punto.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Show Surface2( "Both sides" );
obj << Equation( ., ".7*:Silane+5*:Silica" );
obj << Show Formula( 1 );

```

### Fit to Window

**Sintassi:** obj &lt;&lt; Fit to Window( "Automatica"|"Attivato"|"Disattivato" )

**Descrizione:** Imposta il comportamento di espansione automatica del report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Fit to Window( "Off" );

```

### Formula

**Sintassi:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Descrizione:** Assegna formule in colonne ai fogli nell&apos;ordine specificato nella sezione Variabili dipendenti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice2( "Surface" )
);
obj << Show Surface2( "Both sides" );
obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**Sintassi:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**Descrizione:** Modifica le opzioni di visualizzazione della superficie. Questa opzione utilizza i messaggi della piattaforma Grafico a dispersione 3D. Per i dettagli, vedere la descrizione completa in Grafico a dispersione 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Frame3D(
	Set Graph Size( 692, 671 ),
	Set Rotation( -54, 0, 38 ),
	Background Color( 255, 177, 125 )
);

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

### Hide Lights Border

**Sintassi:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**Descrizione:** Mostra o nasconde i controlli dell&apos;illuminazione.

```jsl

obj = Surface Plot();
Wait( 1 );
obj << Hide Lights Border( 1 );

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

### Iso Value

**Sintassi:** obj &lt;&lt; Iso Value( id, value )

**Descrizione:** Modifica il valore del cursore isosuperficie per una particolare variabile dipendente. L&apos;argomento id identifica la variabile dipendente utilizzando un indice a base zero.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Iso Value( 0, 100 );
obj << Iso Value( 1, 1500 );

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

### Lock Z Scale

**Sintassi:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**Descrizione:** Blocca l&apos;asse Z ai valori correnti.

```jsl

obj = Surface Plot();
obj << Lock Z Scale( 1 );

```

### Mesh Color

**Sintassi:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Descrizione:** Specifica il colore della rete di superficie per la prima variabile dipendente. Questa opzione è disponibile solo quando per l&apos;opzione Rete è stato selezionato un valore diverso da Disattivato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**Sintassi:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**Descrizione:** Specifica il colore della rete di superficie per la prima variabile dipendente. Questa opzione è disponibile solo quando per l&apos;opzione Rete è stato selezionato un valore diverso da Disattivato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**Sintassi:** obj &lt;&lt; Mesh Color2( color )

**Descrizione:** Specifica il colore della rete di superficie per la seconda variabile dipendente. Questa opzione è disponibile solo quando per l&apos;opzione Rete è stato selezionato un valore diverso da Disattivato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
obj << Show Mesh2( "X and Y" );
Wait( 1 );
obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**Sintassi:** obj &lt;&lt; Mesh Color3( color )

**Descrizione:** Specifica il colore della rete di superficie per la terza variabile dipendente. Questa opzione è disponibile solo quando per l&apos;opzione Rete è stato selezionato un valore diverso da Disattivato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Mode( "Isosurface" );
obj << Show Mesh3( "X and Y" );
Wait( 1 );
obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**Sintassi:** obj &lt;&lt; Mesh Color4( color )

**Descrizione:** Specifica il colore della rete di superficie per la quarta variabile dipendente. Questa opzione è disponibile solo quando per l&apos;opzione Rete è stato selezionato un valore diverso da Disattivato.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Mesh4( "X and Y" );
Wait( 1 );
obj << Mesh Color4( {0, 250, 0} );

```

### Messaggi degli elementi condivisi

### Mode

**Sintassi:** obj &lt;&lt; Mode( "Foglio, punti"|"Isosuperficie"|"Griglia di densità" )

**Descrizione:** Specifica la modalità di visualizzazione delle superfici sul diagramma. L&apos;opzione Punti dei fogli mostra fogli, punti e linee sulla superficie. L&apos;opzione Isosuperficie utilizza una formula con tre variabili indipendenti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface 2( "Both Sides" );
obj << Show Surface 4( "Both Sides" );
obj << Mode( "Isosurface" );

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

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Resolution

**Sintassi:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Descrizione:** Cambia la risoluzione utilizzata per disegnare il grafico di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### Response

**Sintassi:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**Descrizione:** Identifica fino a quattro colonne di risposta per rappresentare punti sovrapposti. Per ignorare una risposta, utilizzare qualsiasi stringa tra virgolette come segnaposto.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice3( "Surface" )
);
obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**Sintassi:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Descrizione:** Modifica il tema colori della superficie per la prima risposta. Questa opzione è disponibile solo per le colonne di risposta punto che utilizzano un gradiente continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**Sintassi:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**Descrizione:** Modifica il tema colori della superficie per la prima risposta. Questa opzione è disponibile solo per le colonne di risposta punto che utilizzano un gradiente continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**Sintassi:** obj &lt;&lt; Response Column Color Theme2( color theme )

**Descrizione:** Modifica il tema colori della superficie per la seconda risposta. Questa opzione è disponibile solo per le colonne di risposta punto che utilizzano un gradiente continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Continuous Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**Sintassi:** obj &lt;&lt; Response Column Color Theme3( color theme )

**Descrizione:** Modifica il tema colori della superficie per la terza risposta. Questa opzione è disponibile solo per le colonne di risposta punto che utilizzano un gradiente continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Continuous Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**Sintassi:** obj &lt;&lt; Response Column Color Theme4( color theme )

**Descrizione:** Modifica il tema colori della superficie per la quarta risposta. Questa opzione è disponibile solo per le colonne di risposta punto che utilizzano un gradiente continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Continuous Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**Sintassi:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descrizione:** Specifica se la prima superficie è colorata usando un colore a tinta unita, gradienti continui o gradienti discreti. Questa opzione è disponibile solo se la superficie viene generata utilizzando una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**Sintassi:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descrizione:** Specifica se la prima superficie è colorata usando un colore a tinta unita, gradienti continui o gradienti discreti. Questa opzione è disponibile solo se la superficie viene generata utilizzando una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**Sintassi:** obj &lt;&lt; Response Column Fill2( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica se la seconda superficie è colorata usando un colore a tinta unita, gradienti continui o gradienti discreti. Questa opzione è disponibile solo se la superficie viene generata utilizzando una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**Sintassi:** obj &lt;&lt; Response Column Fill3( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica se la terza superficie è colorata usando un colore a tinta unita, gradienti continui o gradienti discreti. Questa opzione è disponibile solo se la superficie viene generata utilizzando una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**Sintassi:** obj &lt;&lt; Response Column Fill4( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica se la quarta superficie è colorata usando un colore a tinta unita, gradienti continui o gradienti discreti. Questa opzione è disponibile solo se la superficie viene generata utilizzando una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**Sintassi:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Descrizione:** Mostra o nasconde le linee tra i livelli del gradiente sulla superficie per la prima risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**Sintassi:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**Descrizione:** Mostra o nasconde le linee tra i livelli del gradiente sulla superficie per la prima risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**Sintassi:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**Descrizione:** Mostra o nasconde le linee tra i livelli del gradiente sulla superficie per la seconda risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**Sintassi:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**Descrizione:** Mostra o nasconde le linee tra i livelli del gradiente sulla superficie per la terza risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 0 );
Wait( 1 );
obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**Sintassi:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**Descrizione:** Mostra o nasconde le linee tra i livelli del gradiente sulla superficie per la quarta risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	),
	Response Column Gradient Lines4( 0 )
);
Wait( 1 );
obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**Sintassi:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Descrizione:** Specifica il numero di gradienti sulla superficie per la prima risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**Sintassi:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**Descrizione:** Specifica il numero di gradienti sulla superficie per la prima risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**Sintassi:** obj &lt;&lt; Response Column Gradients2( number )

**Descrizione:** Specifica il numero di gradienti sulla superficie per la seconda risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**Sintassi:** obj &lt;&lt; Response Column Gradients3( number )

**Descrizione:** Specifica il numero di gradienti sulla superficie per la terza risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**Sintassi:** obj &lt;&lt; Response Column Gradients4( number )

**Descrizione:** Specifica il numero di gradienti sulla superficie per la quarta risposta. Questa opzione è disponibile solo se la superficie è generata utilizzando gradienti discreti con una colonna di risposta punto dipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Gradients4( 10 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Script Window;

```

### Scale response axes independently

**Sintassi:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 )&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica se esiste una scala separata per ogni risposta o se la scala dell&apos;asse per tutte le risposte corrisponde alla scala della prima risposta inserita nella finestra di avvio.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Scale response axes independently( 1 )
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Scale response axes independently( 0 );

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

### Set Z Variable

**Sintassi:** obj &lt;&lt; Set Z Variable( column )

**Descrizione:** Imposta la colonna specificata come variabile Z nel grafico di superficie. Questa opzione è disponibile solo per le isosuperfici.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Mode( "Isosurface" )
);
obj << Set Y Variable( :SULFUR );
Wait( 1 );
obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**Sintassi:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**Descrizione:** Specifica gli attributi per l&apos;asse della variabile indipendente specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
Wait( 1 );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**Sintassi:** obj &lt;&lt; SetXVariable( column )

**Descrizione:** Imposta la colonna visualizzata come variabile X sul grafico di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set X Variable( :SULFUR );

```

### SetYVariable

**Sintassi:** obj &lt;&lt; SetYVariable( column )

**Descrizione:** Imposta la colonna visualizzata come variabile Y sul grafico di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**Sintassi:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**Descrizione:** Specifica gli attributi per l&apos;asse Z.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**Sintassi:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Descrizione:** Specifica il posizionamento delle linee isometriche sul diagramma in relazione alla superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour1

**Sintassi:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Descrizione:** Specifica il posizionamento delle linee isometriche sul diagramma in relazione alla superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour2

**Sintassi:** obj &lt;&lt; Show Contour2( "Disattivato"|"Sotto"|"Sopra"|"Sulla superficie" )

**Descrizione:** Specifica il posizionamento delle linee isometriche sul diagramma in relazione alla superficie per la seconda risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour2( "Above" );

```

### Show Contour3

**Sintassi:** obj &lt;&lt; Show Contour3( "Disattivato"|"Sotto"|"Sopra"|"Sulla superficie" )

**Descrizione:** Specifica il posizionamento delle linee isometriche sul diagramma in relazione alla superficie per la terza risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
Wait( 1 );
obj << Show Contour3( "Below" );

```

### Show Contour4

**Sintassi:** obj &lt;&lt; Show Contour4( "Disattivato"|"Sotto"|"Sopra"|"Sulla superficie" )

**Descrizione:** Specifica il posizionamento delle linee isometriche sul diagramma in relazione alla superficie per la quarta risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
Wait( 1 );
obj << Show Contour4( "On Surface" );

```

### Show Mesh

**Sintassi:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Descrizione:** Specifica lo stile della rete di superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**Sintassi:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Descrizione:** Specifica lo stile della rete di superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**Sintassi:** obj &lt;&lt; Show Mesh2( "Disattivato"|"X e Y"|"X"|"Y" )

**Descrizione:** Specifica lo stile della rete di superficie per la seconda risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh2( "X" );

```

### Show Mesh3

**Sintassi:** obj &lt;&lt; Show Mesh3( "Disattivato"|"X e Y"|"X"|"Y" )

**Descrizione:** Specifica lo stile della rete di superficie per la terza risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh3( "Y" );

```

### Show Mesh4

**Sintassi:** obj &lt;&lt; Show Mesh4( "Disattivato"|"X e Y"|"X"|"Y" )

**Descrizione:** Specifica lo stile della rete di superficie per la quarta risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh4( "X and Y" );

```

### Show Surface

**Sintassi:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Descrizione:** Specifica come appare la superficie della prima risposta. Questa opzione è disponibile solo per le superfici generate da una risposta della colonna della formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface1

**Sintassi:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Descrizione:** Specifica come appare la superficie della prima risposta. Questa opzione è disponibile solo per le superfici generate da una risposta della colonna della formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface2

**Sintassi:** obj &lt;&lt; Show Surface2( "Disattivato"|"Entrambi i lati"|"Solo sopra"|"Solo sotto" )

**Descrizione:** Specifica come appare la superficie della seconda risposta. Questa opzione è disponibile solo per le superfici generate da una risposta della colonna della formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**Sintassi:** obj &lt;&lt; Show Surface3( "Disattivato"|"Entrambi i lati"|"Solo sopra"|"Solo sotto" )

**Descrizione:** Specifica come appare la superficie della terza risposta. Questa opzione è disponibile solo per le superfici generate da una risposta della colonna della formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface3( "Above Only" );

```

### Show Surface4

**Sintassi:** obj &lt;&lt; Show Surface4( "Disattivato"|"Entrambi i lati"|"Solo sopra"|"Solo sotto" )

**Descrizione:** Specifica come appare la superficie della quarta risposta. Questa opzione è disponibile solo per le superfici generate da una risposta della colonna della formula.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface4( "Both Sides" );

```

### Show formula

**Sintassi:** obj &lt;&lt; Show formula( state=0|1 )

**Descrizione:** Mostra o nasconde la formula per tutte le variabili dipendenti attualmente presenti nel grafico di superficie.

```jsl

obj = Surface Plot();
obj << Show Formula( 1 );

```

### Surface Alpha

**Sintassi:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Descrizione:** Specifica l&apos;opacità dell&apos;isosuperficie per la prima variabile di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**Sintassi:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**Descrizione:** Specifica l&apos;opacità dell&apos;isosuperficie per la prima variabile di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**Sintassi:** obj &lt;&lt; Surface Alpha2( number )

**Descrizione:** Specifica l&apos;opacità dell&apos;isosuperficie per la seconda variabile di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface2( "Both sides" );
Wait( 1 );
obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**Sintassi:** obj &lt;&lt; Surface Alpha3( number )

**Descrizione:** Specifica l&apos;opacità dell&apos;isosuperficie per la terza variabile di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**Sintassi:** obj &lt;&lt; Surface Alpha4( number )

**Descrizione:** Specifica l&apos;opacità dell&apos;isosuperficie per la quarta variabile di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Surface Alpha4( 0.90 );

```

### Surface Color

**Sintassi:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Descrizione:** Specifica il colore della superficie per la prima risposta quando il tipo di riempimento è continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**Sintassi:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**Descrizione:** Specifica il metodo utilizzato per colorare ciascuna delle quattro superfici possibili. Si noti che la formula può essere diversa da quella utilizzata per tracciare la superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**Sintassi:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Descrizione:** Specifica i punti finali della sfumatura del colore sulla superficie per la prima risposta. Questa opzione è disponibile solo quando si utilizza una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**Sintassi:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**Descrizione:** Specifica i punti finali della sfumatura del colore sulla superficie per la prima risposta. Questa opzione è disponibile solo quando si utilizza una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**Sintassi:** obj &lt;&lt; Surface Color Range2( "Dati"|"Asse" )

**Descrizione:** Specifica i punti finali della sfumatura del colore sulla superficie per la seconda risposta. Questa opzione è disponibile solo quando si utilizza una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( "Both Sides" )
);
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**Sintassi:** obj &lt;&lt; Surface Color Range3( "Dati"|"Asse" )

**Descrizione:** Specifica i punti finali della sfumatura del colore sulla superficie per la terza risposta. Questa opzione è disponibile solo quando si utilizza una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface3( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**Sintassi:** obj &lt;&lt; Surface Color Range4( "Dati"|"Asse" )

**Descrizione:** Specifica i punti finali della sfumatura del colore sulla superficie per la quarta risposta. Questa opzione è disponibile solo quando si utilizza una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**Sintassi:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Descrizione:** Specifica il tema colori della superficie per la prima risposta. Questa opzione è disponibile solo per le colonne di risposta della formula che utilizzano una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**Sintassi:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**Descrizione:** Specifica il tema colori della superficie per la prima risposta. Questa opzione è disponibile solo per le colonne di risposta della formula che utilizzano una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**Sintassi:** obj &lt;&lt; Surface Color Theme2( color theme )

**Descrizione:** Specifica il tema colori della superficie per la seconda risposta. Questa opzione è disponibile solo per le colonne di risposta della formula che utilizzano una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type2( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**Sintassi:** obj &lt;&lt; Surface Color Theme3( color theme )

**Descrizione:** Specifica il tema colori della superficie per la terza risposta. Questa opzione è disponibile solo per le colonne di risposta della formula che utilizzano una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Gradient Type3( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**Sintassi:** obj &lt;&lt; Surface Color Theme4( color theme )

**Descrizione:** Specifica il tema colori della superficie per la quarta risposta. Questa opzione è disponibile solo per le colonne di risposta della formula che utilizzano una sfumatura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Gradient Type4( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**Sintassi:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**Descrizione:** Specifica il colore della superficie per la prima risposta quando il tipo di riempimento è continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**Sintassi:** obj &lt;&lt; Surface Color2( color )

**Descrizione:** Specifica il colore della superficie per la seconda risposta quando il tipo di riempimento è continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**Sintassi:** obj &lt;&lt; Surface Color3( color )

**Descrizione:** Specifica il colore della superficie per la terza risposta quando il tipo di riempimento è continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**Sintassi:** obj &lt;&lt; Surface Color4( color )

**Descrizione:** Specifica il colore della superficie per la quarta risposta quando il tipo di riempimento è continuo.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**Sintassi:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descrizione:** Specifica il tipo di riempimento della superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**Sintassi:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descrizione:** Specifica il tipo di riempimento della superficie per la prima risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**Sintassi:** obj &lt;&lt; Surface Gradient Type2( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica il tipo di riempimento della superficie per la seconda risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
Wait( 1 );
obj << Surface Gradient Type2( "Discrete Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**Sintassi:** obj &lt;&lt; Surface Gradient Type3( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica il tipo di riempimento della superficie per la terza risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type3( "Solid" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**Sintassi:** obj &lt;&lt; Surface Gradient Type4( "Continuo"|"Gradienti continui"|"Gradienti discreti" )

**Descrizione:** Specifica il tipo di riempimento della superficie per la quarta risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type4( "Discrete Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**Sintassi:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Descrizione:** Specifica il numero di linee di gradiente sulla superficie della prima risposta. Questa opzione è disponibile solo se si utilizzano gradienti discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients1

**Sintassi:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**Descrizione:** Specifica il numero di linee di gradiente sulla superficie della prima risposta. Questa opzione è disponibile solo se si utilizzano gradienti discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients2

**Sintassi:** obj &lt;&lt; Surface Gradients2( number )

**Descrizione:** Specifica il numero di linee di gradiente sulla superficie della seconda risposta. Questa opzione è disponibile solo se si utilizzano gradienti discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" ),
	Surface Color Method( "Solid", ":Pred Formula MODULUS" )
);
obj << Surface Gradient Type2( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**Sintassi:** obj &lt;&lt; Surface Gradients3( number )

**Descrizione:** Specifica il numero di linee di gradiente sulla superficie della terza risposta. Questa opzione è disponibile solo se si utilizzano gradienti discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both sides" ),
	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" )
);
obj << Surface Gradient Type3( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**Sintassi:** obj &lt;&lt; Surface Gradients4( number )

**Descrizione:** Specifica il numero di linee di gradiente sulla superficie della quarta risposta. Questa opzione è disponibile solo se si utilizzano gradienti discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both sides" ),
	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" )
);
obj << Surface Gradient Type4( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients4( 9 );

```

### Surface Lighting

**Sintassi:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Descrizione:** Specifica l&apos;illuminazione della superficie per la superficie della prima risposta. Questa opzione è disponibile solo con gradienti continui e discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**Sintassi:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Descrizione:** Specifica l&apos;illuminazione della superficie per la superficie della prima risposta. Questa opzione è disponibile solo con gradienti continui e discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**Sintassi:** obj &lt;&lt; Surface Lighting2( "Nessuno"|"Riflesso basso"|"Normale" )

**Descrizione:** Specifica l&apos;illuminazione della superficie per la superficie della seconda risposta. Questa opzione è disponibile solo con gradienti continui e discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( "Both Sides" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**Sintassi:** obj &lt;&lt; Surface Lighting3( "Nessuno"|"Riflesso basso"|"Normale" )

**Descrizione:** Specifica l&apos;illuminazione della superficie per la superficie della terza risposta. Questa opzione è disponibile solo con gradienti continui e discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**Sintassi:** obj &lt;&lt; Surface Lighting4( "Nessuno"|"Riflesso basso"|"Normale" )

**Descrizione:** Specifica l&apos;illuminazione della superficie per la superficie della quarta risposta. Questa opzione è disponibile solo con gradienti continui e discreti.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**Sintassi:** obj &lt;&lt; Surface Selector( state=0|1 )

**Descrizione:** Mostra o nasconde le opzioni di superficie nei controlli delle variabili dipendenti. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Surface Selector( 0 );

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

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

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

### X Grid

**Sintassi:** obj &lt;&lt; X Grid( state=0|1 )

**Descrizione:** Mostra o nasconde una griglia perpendicolare all&apos;asse X.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << X Grid( 1 );

```

### X Resolution

**Sintassi:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Descrizione:** Cambia la risoluzione utilizzata per disegnare il grafico di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### XRotate

**Sintassi:** obj &lt;&lt; XRotate( degrees )

**Descrizione:** Ruota il grafico di superficie sull&apos;asse X.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << XRotate( 30 );

```

### Y Grid

**Sintassi:** obj &lt;&lt; Y Grid( state=0|1 )

**Descrizione:** Mostra o nasconde una griglia perpendicolare all&apos;asse Y.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Y Grid( 1 );

```

### Y Resolution

**Sintassi:** obj &lt;&lt; Resolution( number )obj &lt;&lt; X Resolution( number )obj &lt;&lt; Y Resolution( number )

**Descrizione:** Cambia la risoluzione utilizzata per disegnare il grafico di superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### YRotate

**Sintassi:** obj &lt;&lt; YRotate( degrees )

**Descrizione:** Ruota il grafico di superficie sull&apos;asse Y.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << YRotate( 20 );

```

### Z Grid

**Sintassi:** obj &lt;&lt; Z Grid( state=0|1 )

**Descrizione:** Mostra o nasconde una griglia perpendicolare all&apos;asse Z.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Z Grid( 1 );

```

### Z Grid Position

**Sintassi:** obj &lt;&lt; Z Grid Position( fraction )

**Descrizione:** Sposta la griglia Z alla percentuale specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
Wait( 1 );
obj << Z Grid Position( 0.733 );

```

### ZRotate

**Sintassi:** obj &lt;&lt; ZRotate( degrees )

**Descrizione:** Ruota il grafico di superficie sull&apos;asse Z.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << ZRotate( 45 );

```

## Surface Frame3D

### Costruttori associati

#### Surface Frame3D

**Sintassi:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**Descrizione:** Invia comandi di visualizzazione al grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Messaggi degli elementi

#### Add Ellipsoid

**Sintassi:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Descrizione:** Disegna una ellissoide nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

#### Add Markers

**Sintassi:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Descrizione:** Disegna n indicatori nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**Sintassi:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Descrizione:** Disegna un vettore o una freccia nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**Sintassi:** obj &lt;&lt; Get Axes

**Descrizione:** Restituisce lo stato di visualizzazione degli assi nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Axes );
Show( s );

```

#### Get Box

**Sintassi:** obj &lt;&lt; Get Box

**Descrizione:** Restituisce lo stato di visualizzazione del frame del riquadro nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Grab Handles

**Sintassi:** obj &lt;&lt; Get Grab Handles

**Descrizione:** Restituisce lo stato di visualizzazione delle maniglie di trascinamento nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

#### Get Graph Size

**Sintassi:** obj &lt;&lt; Get Graph Size

**Descrizione:** Restituisce le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Graph Size );
Show( s );

```

#### Get Grids

**Sintassi:** obj &lt;&lt; Get Grids

**Descrizione:** Restituisce lo stato di visualizzazione delle griglie nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Grids );
Show( s );

```

#### Get Hide Lights Border

**Sintassi:** obj &lt;&lt; Get Hide Lights Border

**Descrizione:** Restituisce lo stato del bordo luminoso intorno al grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

#### Get Line Scale

**Sintassi:** obj &lt;&lt; Get Line Scale

**Descrizione:** Restituisce la larghezza della linea per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
w = obj << Frame3D( Get Line Scale );
Show( w );

```

#### Get Marker Quality

**Sintassi:** obj &lt;&lt; Get Marker Quality

**Descrizione:** Restituisce le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

#### Get Marker Scale

**Sintassi:** obj &lt;&lt; Get Marker Scale

**Descrizione:** Restituisce le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

#### Get Marker Transparency

**Sintassi:** obj &lt;&lt; Get Marker Transparency

**Descrizione:** Restituisce la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

#### Get Rotation

**Sintassi:** obj &lt;&lt; Get Rotation

**Descrizione:** Restituisce la rotazione corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Frame3D( Get Rotation() );
Show( r );

```

#### Get Text Scale

**Sintassi:** obj &lt;&lt; Get Text Scale

**Descrizione:** Restituisce la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Text Scale );
Show( s );

```

#### Get View Ortho

**Sintassi:** obj &lt;&lt; Get View Ortho

**Descrizione:** Restituisce lo stato della visualizzazione ortogonale del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
o = obj << Frame3D( Get View Ortho );
Show( o );

```

#### Get View Perspective

**Sintassi:** obj &lt;&lt; Get View Perspective

**Descrizione:** Restituisce la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Get View Perspective );
Show( p );

```

#### Get View Zoom

**Sintassi:** obj &lt;&lt; Get View Zoom

**Descrizione:** Restituisce lo zoom corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
z = obj << Frame3D( Get View Zoom );
Show( z );

```

#### Get Wall Color

**Sintassi:** obj &lt;&lt; Get Wall Color

**Descrizione:** Restituisce il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Wall Color );
Show( c );

```

#### Get Walls

**Sintassi:** obj &lt;&lt; Get Walls

**Descrizione:** Restituisce lo stato di visualizzazione delle pareti del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Walls );
Show( s );

```

#### Get X Axis Color

**Sintassi:** obj &lt;&lt; Get X Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

#### Get X Axis Label

**Sintassi:** obj &lt;&lt; Get X Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

#### Get Y Axis Color

**Sintassi:** obj &lt;&lt; Get Y Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

#### Get Y Axis Label

**Sintassi:** obj &lt;&lt; Get Y Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

#### Get Z Axis Color

**Sintassi:** obj &lt;&lt; Get Z Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

#### Get Z Axis Label

**Sintassi:** obj &lt;&lt; Get Z Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

#### Legend

**Sintassi:** obj &lt;&lt; Legend( state=0|1 )

**Descrizione:** Mostra/Nasconde la legenda del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 0 ) );
Wait( 2 );
obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**Sintassi:** obj &lt;&lt; Set Axes( state=0|1 )

**Descrizione:** Mostra/Nasconde gli assi X, Y e Z nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**Sintassi:** obj &lt;&lt; Set Box( state=0|1 )

**Descrizione:** Mostra/Nasconde il frame del riquadro nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**Sintassi:** obj &lt;&lt; Set Graph Size( x, y )

**Descrizione:** Imposta le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**Sintassi:** obj &lt;&lt; Set Grids( state=0|1 )

**Descrizione:** Mostra/Nasconde le griglie nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**Sintassi:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Descrizione:** Mostra/Nasconde il bordo luminoso intorno al grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**Sintassi:** obj &lt;&lt; Set Line Scale( number )

**Descrizione:** Imposta la larghezza della linea per la griglia del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**Sintassi:** obj &lt;&lt; Set Marker Quality( number )

**Descrizione:** Imposta le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**Sintassi:** obj &lt;&lt; Set Marker Scale( number )

**Descrizione:** Imposta le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**Sintassi:** obj &lt;&lt; Set Marker Transparency( fraction )

**Descrizione:** Imposta la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**Sintassi:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Descrizione:** Imposta il tasso di oscillazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**Sintassi:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Descrizione:** Ruota il frame fino alle coordinate specificate.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**Sintassi:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Descrizione:** Ruota il grafico su un asse specificato. I valori dx e dy sono un movimento delta del mouse rispetto al punto (sx, sy).

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**Sintassi:** obj &lt;&lt; Set Text Scale( number )

**Descrizione:** Imposta la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**Sintassi:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Descrizione:** Visualizza il grafico in proiezione ortogonale o lineare.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**Sintassi:** obj &lt;&lt; Set View Perspective( fraction )

**Descrizione:** Imposta la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**Sintassi:** obj &lt;&lt; Set View Zoom( number )

**Descrizione:** Imposta lo zoom per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**Sintassi:** obj &lt;&lt; Set Wall Color( number )

**Descrizione:** Imposta il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**Sintassi:** obj &lt;&lt; Set Walls( state=0|1 )

**Descrizione:** Mostra/Nasconde le pareti del grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**Sintassi:** obj &lt;&lt; Set X Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**Sintassi:** obj &lt;&lt; Set X Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**Sintassi:** obj &lt;&lt; Set Y Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**Sintassi:** obj &lt;&lt; Set Y Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**Sintassi:** obj &lt;&lt; Set Z Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**Sintassi:** obj &lt;&lt; Set Z Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**Sintassi:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**Sintassi:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**Sintassi:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**Sintassi:** obj &lt;&lt; get light active( light number )

**Descrizione:** Restituisce la fonte luminosa specificata attiva che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

#### get light color

**Sintassi:** obj &lt;&lt; get light color( light number )

**Descrizione:** Restituisce come elenco {red, green, blue} il colore della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

#### get light position

**Sintassi:** obj &lt;&lt; get light position( light number )

**Descrizione:** Restituisce come elenco {x, y, z} la posizione della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

#### set light active

**Sintassi:** obj &lt;&lt; set light active( light number, state=0|1 )

**Descrizione:** Attiva la fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**Sintassi:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Descrizione:** Imposta il colore della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**Sintassi:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Descrizione:** Imposta la posizione della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

