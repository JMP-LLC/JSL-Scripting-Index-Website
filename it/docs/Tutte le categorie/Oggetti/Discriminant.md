# Discriminant



## Colonne

### By

**Sintassi:** obj = Discriminant(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Categories

**Sintassi:** obj = Discriminant(...Categories( column )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la colonna che contiene le categorie o i gruppi in cui le osservazioni devono essere classificate.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Covariates

**Sintassi:** obj = Discriminant(...Covariates( column(s) )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne che contengono variabili continue utilizzate per classificare le osservazioni in categorie.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Freq

**Sintassi:** obj = Discriminant(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Freq( _freqcol )
);

```

### Validation

**Sintassi:** obj = Discriminant(...&lt;Validation( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna numerica che definisce i set di validazione. Questa colonna deve contenere al massimo tre valori distinti.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
obj = dt << Discriminant(
	X( :Severity ),
	Validation( :Validation ),
	Y( :BMI, :Age, :Time ),
	Use Matrix Columns( 1 )
);

```

### Weight

**Sintassi:** obj = Discriminant(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Weight( _weightcol )
);

```

### X

**Sintassi:** obj = Discriminant(...X( column )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica la colonna che contiene le categorie o i gruppi in cui le osservazioni devono essere classificate.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Y

**Sintassi:** obj = Discriminant(...Y( column(s) )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne che contengono variabili continue utilizzate per classificare le osservazioni in categorie.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

## Costruttori associati

### Discriminant

**Sintassi:** Discriminant( Y( columns ), X( columns ) )

**Descrizione:** Stima la distanza da ogni osservazione a ogni media multivariata del gruppo (centroide) mediante la distanza di Mahalanobis. Le osservazioni vengono poi classificate nel gruppo a cui sono più vicine.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

### Apply This Model

**Sintassi:** obj &lt;&lt; Apply This Model

**Descrizione:** Applica la selezione corrente di variabili al modello di selezione stepwise delle variabili e chiude la finestra di dialogo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
Wait( 2 );
obj << Apply This Model;

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Biplot Ray Position

**Sintassi:** obj &lt;&lt; Biplot Ray Position( [x position, y position, radius scaling] )

**Descrizione:** Permette di specificare la posizione e il raggio di scala dei raggi del biplot nel diagramma canonico e nel diagramma canonico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Biplot Ray Position( [0, 1.7, 3.5] );

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

### Canonical 3D Plot

**Sintassi:** obj &lt;&lt; Canonical 3D Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde una versione tridimensionale del diagramma canonico. Nota: disponibile solo in presenza di quattro o più gruppi.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Canonical 3D Plot( 1 );
(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**Sintassi:** obj &lt;&lt; Canonical Plot( state=0|1 )

**Descrizione:** Mostra/Nasconde il diagramma canonico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Canonical Plot( 1 );

```

### Color Points

**Sintassi:** obj &lt;&lt; Color Points

**Descrizione:** Colora i punti del diagramma canonico e del diagramma canonico 3D in base ai livelli della variabile X. Gli indicatori di colore vengono aggiunti alle righe della tabella dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
dt << Clear Row States;
Wait( 2 );
obj << Color Points;

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

### Consider New Levels

**Sintassi:** obj &lt;&lt; Consider New Levels( fraction )

**Descrizione:** Specifica che alcuni punti potrebbero non rientrare in alcun gruppo conosciuto e dovrebbero essere considerati come appartenenti a un nuovo gruppo non classificato. Inserire la probabilità a priori di un nuovo livello.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Consider New Levels( 0.05 );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Cross Validate by Excluded Rows

**Sintassi:** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**Descrizione:** Specifica che le righe escluse formeranno un set di validazione per il quale verranno calcolate statistiche di stima. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 14

<b>Elemento Finestra di dialogo di avvio: Sì</b>

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Data Table Window;

```

### Discriminant Method

**Sintassi:** obj &lt;&lt; Discriminant Method( Linear );obj &lt;&lt; Discriminant Method( Quadratic );obj &lt;&lt; Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) );obj &lt;&lt; Discriminant Method( Wide Linear )&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica il metodo discriminante.

L&apos;opzione Regularized richiede ulteriori argomenti. Il parametro Regularization Lambda varia da 0 (analisi discriminante quadratica) a 1 (analisi discriminante lineare). Il parametro Regularization Gamma varia da 0 (nessuno shrinkage) a 1 (solo diagonali).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Discriminant Method(
	Regularized,
	Regularization Lambda( 0.2 ),
	Regularization Gamma( 0.6 )
);

```

### Discriminant Scores

**Sintassi:** obj &lt;&lt; Discriminant Scores( state=0|1 )

**Descrizione:** Mostra o nasconde una tabella degli score discriminanti per ogni riga. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Discriminant Scores( 1 );

```

### Enter All

**Sintassi:** obj &lt;&lt; Enter All

**Descrizione:** Aggiunge tutte le variabili al modello di selezione stepwise delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Discrim Matrices

**Sintassi:** obj &lt;&lt; Get Discrim Matrices

**Descrizione:** Restituisce un elenco che contiene le matrici discriminanti dell&apos;analisi. Questo elenco contiene una lista con nome per ciascuno dei seguenti elementi: i nomi Y, i nomi X, i valori X e le medie Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
z = obj << Get Discrim Matrices;
Show( z );

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

### Get Measures

**Sintassi:** obj &lt;&lt; Get Measures

**Descrizione:** Restituisce misure di stima sintetiche del modello.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Get Measures;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

### Go

**Sintassi:** obj &lt;&lt; Go

**Descrizione:** Inserisce le covariate in passi progressivi fino a quando l&apos;R-quadro smetterà di crescere.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Go;

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

### Make Scoring Script

**Sintassi:** obj &lt;&lt; Make Scoring Script

**Descrizione:** Crea uno script che costruisce le colonne della formula salvate dall&apos;opzione Salva formule. È possibile salvare questo script e utilizzarlo, magari con altre tabelle di dati, per creare le colonne delle formule che calcolano le probabilità di appartenenza e prevedono l&apos;appartenenza a gruppi.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Make Scoring Script;

```

### Messaggi degli elementi condivisi

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

### Precision Recall Curve

**Sintassi:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descrizione:** Mostra o nasconde il diagramma della curva di Precisione-Richiamo che contiene una curva per ogni livello della variabile di risposta. Una curva di precisione-richiamo traccia i valori di precisione rispetto ai valori di richiamo a una serie di soglie.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Precision Recall Curve( 1 );

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Profiler;

```

### Publish Probability Formulas

**Sintassi:** obj &lt;&lt; Publish Probability Formulas

**Descrizione:** Crea formule di probabilità e le salva come script della colonna della formula nella piattaforma Depot delle formule. Se un report di Depot delle formule non è aperto, questa opzione crea il report di Depot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Publish Probability Formulas;

```

### ROC Curve

**Sintassi:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descrizione:** Mostra o nasconde la curva ROC (Receiver Operating Characteristic) per ciascun livello della variabile di risposta. La curva ROC è un grafico della sensibilità rispetto a (1 - specificità).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
Wait( 0 );
obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove All

**Sintassi:** obj &lt;&lt; Remove All

**Descrizione:** Rimuove tutte le variabili dal modello di selezione stepwise delle variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Remove All;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Canonical Scores

**Sintassi:** obj &lt;&lt; Save Canonical Scores

**Descrizione:** Salva le colonne nella tabella di dati che contengono le formule di score canonico per ogni osservazione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Canonical Scores;

```

### Save Discrim Matrices

**Sintassi:** obj &lt;&lt; Save Discrim Matrices

**Descrizione:** Salva uno script nella tabella di dati che contiene un elenco delle matrici discriminanti dell&apos;analisi. Questo elenco contiene un elenco con nome per ciascuno dei seguenti elementi: i nomi Y, i nomi X, i valori X e le medie Y.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Discrim Matrices;

```

### Save Formulas

**Sintassi:** obj &lt;&lt; Save Formulas

**Descrizione:** Salva le formule di distanza, di probabilità e di previsione di appartenenza nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Formulas;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Script Window;

```

### Save To New Data Table

**Sintassi:** obj &lt;&lt; Save To New Data Table

**Descrizione:** Salva le medie di gruppo e i raggi del biplot sulle variabili canoniche insieme agli score canonici in una nuova tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save To New Data Table;

```

### Scatterplot Matrix

**Sintassi:** obj &lt;&lt; Scatterplot Matrix

**Descrizione:** Apre un report di matrice di grafici a dispersione, che mostra una matrice con un grafico a dispersione per ogni coppia di covariate. L&apos;opzione richiama la piattaforma Matrice grafico a dispersione con ellissi di densità ombreggiate per ogni gruppo. I grafici a dispersione includono tutte le osservazioni nella tabella di dati, anche se viene usata la validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Scatterplot Matrix( 1 );

```

### Score Data

**Sintassi:** obj &lt;&lt; Score Data( state=0|1 )

### Select Misclassified Rows

**Sintassi:** obj &lt;&lt; Select Misclassified Rows

**Descrizione:** Seleziona le righe con errori di classificazione nella tabella di dati e nelle finestre di report che visualizzano un elenco per riga.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );
obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**Sintassi:** obj &lt;&lt; Select Uncertain Rows( fraction )

**Descrizione:** Seleziona le righe con classificazioni incerte nella tabella di dati e nelle finestre di report che visualizzano un elenco per riga. Una riga incerta è una riga la cui probabilità di appartenenza a un gruppo non è né vicina a 0 né vicina a 1. L&apos;argomento fraction rappresenta la differenza di probabilità da 0 o 1 che definisce quando una probabilità è incerta.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );
obj << Select Uncertain Rows( 0.2 );

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

### Show Biplot Rays

**Sintassi:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Descrizione:** Mostra o nasconde i raggi del biplot nel diagramma canonico e nel diagramma canonico 3D. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**Sintassi:** obj &lt;&lt; Show Canonical Details( state=0|1 )

**Descrizione:** Mostra o nasconde il report dei dettagli dell&apos;analisi canonica.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**Sintassi:** obj &lt;&lt; Show Canonical Structure( state=0|1 )

**Descrizione:** Mostra o nasconde il report delle strutture canoniche.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**Sintassi:** obj &lt;&lt; Show Canonical Structures( state=0|1 )

### Show Classification Counts

**Sintassi:** obj &lt;&lt; Show Classification Counts( state=0|1 )

**Descrizione:** Mostra o nasconde le matrici di confusione, mostrando i conteggi osservati rispetto a quelli previsti, nel report Riepiloghi di score. Per impostazione predefinita, il report Riepiloghi di score mostra una matrice di confusione per ogni livello della X categorica.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**Sintassi:** obj &lt;&lt; Show Distances to Each Group( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la distanza di Mahalanobis quadratica di ogni osservazione rispetto alla media di ogni gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Distances to each group( 1 );

```

### Show Group Means

**Sintassi:** obj &lt;&lt; Show Group Means( state=0|1 )

**Descrizione:** Mostra o nasconde il report Medie di gruppo che fornisce la media di ogni covariata. Vengono visualizzate le medie per ogni livello della variabile X e le medie complessive.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**Sintassi:** obj &lt;&lt; Show Interesting Rows Only( state=0|1 )

**Descrizione:** Nel report Score discriminanti, mostra solo le righe che contengono errori di classificazione e quelle con probabilità prevista tra 0,05 e 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**Sintassi:** obj &lt;&lt; Show Means CL Ellipses( state=0|1 )

**Descrizione:** Mostra o nasconde le ellissi di confidenza al 95% per la media di ogni gruppo sul diagramma canonico e sul diagramma canonico 3D, assumendo la normalità. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**Sintassi:** obj &lt;&lt; Show Normal 50% Contours( state=0|1 )

**Descrizione:** Mostra o nasconde nel diagramma canonico e nel diagramma canonico 3D la regione dell&apos;ellisse normale stimata in modo da contenere il 50% della popolazione per ciascun gruppo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Normal 50% Contours( 1 );

```

### Show Points

**Sintassi:** obj &lt;&lt; Show Points( state=0|1 )

**Descrizione:** Mostra o nasconde i punti nel diagramma canonico e nel diagramma canonico 3D. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**Sintassi:** obj &lt;&lt; Show Probabilities to Each Group( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene la probabilità che un&apos;osservazione appartenga a ciascuno dei gruppi definiti dalla X categorica.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**Sintassi:** obj &lt;&lt; Show Within Covariances( state=0|1 )

**Descrizione:** Mostra o nasconde report relativi alle matrici di covarianza. I report che compaiono dipendono dal metodo discriminante specificato. Non disponibile per il metodo discriminante ampio lineare.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**Sintassi:** obj = Discriminant(...Shrink Covariances( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Restringe gli elementi fuori diagonale della matrice aggregata di covarianza entro gruppi e delle matrici di covarianza entro gruppi. Questo può migliorare la stabilità e ridurre la varianza della previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Shrink Covariances( 1 )
);

```

### Specify Priors

**Sintassi:** obj &lt;&lt; Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**Descrizione:** Imposta le probabilità a priori per ciascun livello della variabile X.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**Sintassi:** obj &lt;&lt; Step Backward

**Descrizione:** Si sposta un passo indietro nella selezione stepwise delle variabili rimuovendo una variabile dal modello.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Step Backward;

```

### Step Forward

**Sintassi:** obj &lt;&lt; Step Forward

**Descrizione:** Si sposta un passo avanti nella selezione stepwise delle variabili aggiungendo una variabile al modello.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;

```

### Stepwise Variable Selection

**Sintassi:** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Mostra o nasconde il pannello di controllo di Selezione colonne. Questo pannello di controllo contiene opzioni che consentono di eseguire la selezione delle variabili in modalità stepwise utilizzando l&apos;analisi di covarianza e i p-value. Questa opzione non è disponibile per il metodo ampio lineare.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

### Uncentered Canonical

**Sintassi:** obj = Discriminant(...Uncentered Canonical( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Elimina la centratura degli score canonici per la compatibilità con versioni precedenti di JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Uncentered Canonical( 1 )
);

```

### Use Matrix Columns

**Sintassi:** obj &lt;&lt; Use Matrix Columns( state=0|1 )

**Descrizione:** Specifica che le colonne delle matrici devono essere utilizzate nei calcoli. Le colonne delle matrici possono ridurre l&apos;overhead nel calcolo delle previsioni di scoring nelle colonne delle formule.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Matrix Columns( 1 )
);

```

### Use Pseudoinverses

**Sintassi:** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Utilizza le pseudoinverse di Moore-Penrose nell&apos;analisi quando la matrice di covarianza è singolare. Gli score risultanti coinvolgono tutte le covariate. Se lasciata deselezionata, l&apos;analisi ignora le covariate che sono combinazioni lineari di covariate che le precedono nell’elenco di Y, covariate. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Pseudoinverses( 0 )
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

**Sintassi:** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

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

