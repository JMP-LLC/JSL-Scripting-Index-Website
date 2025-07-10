# Nonlinear



### Accept Current Estimates

**Sintassi:** obj << Accept Current Estimates

**Descrizione:** Produce il report sulla soluzione utilizzando le stime correnti, anche se le stime non convergono.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Parameter Bounds( B0( 15, . ) ) );
obj << Finish;
obj << Accept Current Estimates;

```

### Action

**Sintassi:** obj << Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Cerca per nome**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Ricerca all'interno delle cartelle**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Sintassi:** obj << Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Sintassi:** obj = Nonlinear(...<By( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );

```

### CL Alpha

**Sintassi:** obj << CL Alpha( number=.05 )

**Descrizione:** Specifica il livello alfa per i limiti di confidenza per le stime dei parametri. ".05", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Alpha( .01 );
obj << Confidence Limits;

```

### CL Limit

**Sintassi:** obj << CL Limit( number=.00001 )

**Descrizione:** Specifica il criterio di convergenza utilizzato per calcolare i limiti di confidenza delle stime dei parametri. ".00001", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Limit( .002 );
obj << Confidence Limits;

```

### Column Switcher

**Sintassi:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Confidence Limits

**Sintassi:** obj << Confidence Limits

**Descrizione:** Calcola gli intervalli di confidenza per tutte le stime dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;

```

### Contour Profiler

**Sintassi:** obj << Contour Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler isometrico, che mostra graficamente i profili isometrici della risposta per due fattori alla volta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Copy ByGroup Script

**Sintassi:** obj << Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Copy Script;

```

### Custom Estimate

**Sintassi:** obj << Custom Estimate( expression )

**Descrizione:** Stima una funzione dei parametri specificata dall&apos;utente. L&apos;espressione e l&apos;errore standard dell&apos;espressione vengono calcolati utilizzando le stime correnti dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Custom Estimate( B0 + A + D );

```

### Custom Estimation Profiler

**Sintassi:** obj << Custom Estimation Profiler( Custom Estimation( {initial values}, expression ), <Transformation( "Log"|"Logit"|"None" ), Profiler( script )> )

**Descrizione:** Consente di costruire un profiler per un&apos;espressione personalizzata. Inserire un&apos;espressione che coinvolga parametri e almeno un fattore. Di default, l&apos;opzione Trasformazione è impostata a Nessuna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logistic w Loss.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Expand Intermediate Formulas( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 ),
	Custom Estimation Profiler(
		Custom Estimation( {x = 30}, 1 / (1 + Exp( b0 + b1 * x )) ),
		Transformation( "Logit" ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				x(
					140,
					Min( -37.4344314814814 ),
					Max( 392.622262689059 ),
					Lock( 0 ),
					Show( 1 )
				)
			)
		)
	)
);

```

### Custom Inverse Prediction

**Sintassi:** obj << Custom Inverse Prediction( Response( l1, l2, ... ), <Term Value( column( number ) )> )

**Descrizione:** Stima un valore X per ogni valore di risposta specificato. Vengono calcolati anche gli errori standard e i limiti di confidenza per i valori X stimati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 0 );
obj << Custom Inverse Prediction( Response( 100, 150, 200 ) );

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Data Table Window;

```

### Delta

**Sintassi:** obj << Delta( number=5.0e-6 )

**Descrizione:** Specifica il valore delta utilizzato nell&apos;opzione Solo derivate numeriche. "5.0e-6", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Delta( 0.2 );
obj << Finish;

```

### Expand Intermediate Formulas

**Sintassi:** obj << Expand Intermediate Formulas( state=0|1 )

**Descrizione:** Utilizza formule intermedie espanse nella risoluzione e nelle formule salvate. Questa opzione influisce sulle formule nell&apos;output quando il modello dipende da una colonna con una formula, in quanto esaminerà le colonne originali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Finish

**Sintassi:** obj << Finish

**Descrizione:** Inizia il processo di stima e passa al comando successivo solo se la soluzione è convergente o terminata. Negli script, si consiglia di utilizzare l&apos;opzione Termina invece dell&apos;opzione Vai.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Finish;
obj << Profiler;

```

### Freq

**Sintassi:** obj = Nonlinear(...<Freq( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Freq( _freqcol ) );

```

### Get By Levels

**Sintassi:** obj << Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj << Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get CI

**Sintassi:** obj << Get CI

**Descrizione:** Restituisce gli intervalli di confidenza per le stime dei parametri. Nota: L&apos;opzione Intervalli di confidenza deve essere selezionata prima di specificare l&apos;opzione Carica CI.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;
G = obj << Get CI;
Show( G );

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Piattaforma con filtro**

```js

Names Default To Here( 1 );
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

### Get Corr

**Sintassi:** obj << Get Corr

**Descrizione:** Restituisce la correlazione delle stime.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Corr;
Show( G );

```

### Get Cov

**Sintassi:** obj << Get Cov

**Descrizione:** Restituisce la covarianza delle stime.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Cov;
Show( G );

```

### Get Data Table

**Sintassi:** obj << Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Estimates

**Sintassi:** obj << Get Estimates

**Descrizione:** Restituisce le stime dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Estimates;
Show( G );

```

### Get Group Platform

**Sintassi:** obj << Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Parameter Names

**Sintassi:** obj << Get Parameter Names

**Descrizione:** Restituisce i nomi dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Parameter Names;
Show( G );

```

### Get SSE

**Sintassi:** obj << Get SSE

**Descrizione:** Restituisce la somma degli errori quadratici (SSE).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get SSE;
Show( G );

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Std Errors

**Sintassi:** obj << Get Std Errors

**Descrizione:** Restituisce gli errori standard delle stime dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Std Errors;
Show( G );

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj << Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj << Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Sintassi:** obj << Go

**Descrizione:** Inizia l&apos;iterazione in background per trovare la soluzione non lineare. Negli script, si consiglia di utilizzare l&apos;opzione Termina invece dell&apos;opzione Vai.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;

```

### Gradient Limit

**Sintassi:** obj << Gradient Limit( number=1e-6 )

**Descrizione:** Specifica il valore del limite di arresto per il criterio del gradiente. "1e-6", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Gradient Limit( 0.0002 );
obj << Finish;

```

### Group

**Sintassi:** obj = Nonlinear(...<Group( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una variabile di raggruppamento. Il modello stimato ha parametri separati per ogni livello della variabile di raggruppamento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << Run Script( "Fit Curve" );					 

obj = dt << Nonlinear(
	Y( :Toxicity ),
	X( :Toxicity Predictor Formula ),
	Group( :Formulation ),
	Newton,
	Finish
);

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Iteration Limit

**Sintassi:** obj << Iteration Limit( number=60 )

**Descrizione:** Specifica il numero massimo di iterazioni. "60", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Iteration Limit( 10 );
obj << Finish;

```

### Iteration Log

**Sintassi:** obj << Iteration Log( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella Iterazioni. Una volta selezionata questa opzione, la piattaforma registra le iterazioni successive nella tabella.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Iteration Log( 1 );
obj << Finish;
obj << Plot( 0 );
Report( obj )["Iterations"] << Close( 0 );

```

### Local Data Filter

**Sintassi:** obj << Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Lock Parameter

**Sintassi:** obj << Lock Parameter( Name, ... )

**Descrizione:** Blocca i singoli parametri a un valore specifico in modo che rimangano costanti durante il processo di iterazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0 );
obj << Finish;

```

### Loss

**Sintassi:** obj = Nonlinear(...<Loss( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna della formula che contiene una funzione di perdita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ship Damage.jmp" );
obj = dt << Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);

```

### Loss is Neg LogLikelihood

**Sintassi:** obj << Loss is Neg LogLikelihood( state=0|1 )

**Descrizione:** Assume che la somma della formula di perdita specificata sia la log-verosimiglianza negativa e utilizza le statistiche chi-quadro invece delle statistiche F nell&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 )
);
obj << Loss is Neg LogLikelihood( 0 );
obj << Finish;

```

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Newton

**Sintassi:** obj << Newton

**Descrizione:** Specifica il metodo di ottimizzazione Gauss-Newton (per i minimi quadrati regolari) o Newton-Raphson (per i modelli che contengono funzioni di perdita).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Newton;
obj << Finish;

```

### Nonlinear

**Sintassi:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Descrizione:** Stima modelli non lineari mediante minimi quadrati o una funzione di perdita personalizzata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Numeric Chain Deriv Delta

**Sintassi:** obj << Numeric Chain Deriv Delta( =1e-5 )

**Descrizione:** Specifica il parametro delta utilizzato quando si approssima la derivata di una formula non lineare che non ha una derivata integrata. "1e-5", per impostazione predefinita.

**JMP Versione aggiunta:** 14

### Numeric Derivatives Only

**Sintassi:** obj << Numeric Derivatives Only( state=0|1 )

**Descrizione:** Specifica che nel metodo di stima vengano utilizzate solo le derivate numeriche.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Finish;

```

### Obj Change Limit

**Sintassi:** obj << Obj Change Limit( number=1e-15 )

**Descrizione:** Specifica il valore del limite di arresto per il criterio di modifica dell&apos;obiettivo. "1e-15", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Obj Change Limit( 1e-10 );
obj << Finish;

```

### Parameter Bounds

**Sintassi:** obj << Parameter Bounds( <parameter name( lower, upper )> )

**Descrizione:** Imposta i limiti dei parametri specificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Parameter Bounds( B0( 0, . ) );
obj << Finish;

```

### Parameter Contour Profiler

**Sintassi:** obj << Parameter Contour Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler isometrico che traccia il profilo dell&apos;SSE o della perdita in funzione dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Contour Profiler( 1 );

```

### Parameter Profiler

**Sintassi:** obj << Parameter Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler di previsione che traccia il profilo dell&apos;SSE o della perdita in funzione dei parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Profiler( 1 );

```

### Parameter Surface Profiler

**Sintassi:** obj << Parameter Surface Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico di superficie tridimensionale che traccia il profilo dell&apos;SSE o della perdita in funzione dei parametri. Questa opzione è disponibile solo per i modelli che contengono due o più parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Surface Profiler( 1 );

```

### Paste Local Data Filter

**Sintassi:** obj << Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```js

Names Default To Here( 1 );
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

### Plot

**Sintassi:** obj << Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico che traccia la formula di previsione in funzione esattamente di un&apos;altra variabile. Per impostazione predefinita l&apos;opzione è attivata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
Wait( 1 );
obj << Plot( 0 );
obj << Finish;

```

### Predictor Formula

**Sintassi:** obj = Nonlinear(...<Predictor Formula( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna che contiene la variabile X o una formula del modello con parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Profile Likelihood

**Sintassi:** obj << Profile Likelihood( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma della funzione di verosimiglianza relativa, scalata per avere un valore massimo di uno, tra i valori di un singolo parametro mentre tutti gli altri parametri sono ottimizzati per minimizzare la funzione di perdita. Questa opzione è disponibile solo quando la piattaforma Non lineare viene avviata con una funzione di perdita che contiene due o più parametri.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Unconstrained Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0},
			If(
				Censor == 0, -Log( Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log( 1 - Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Unconstrained Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood( 1 );

```

### Profile Likelihood Contour

**Sintassi:** obj << Profile Likelihood Contour( state=0|1 )

**Descrizione:** Mostra o nasconde i profili isometrici della confidenza della funzione di verosimiglianza relativa tra due parametri, mentre tutti gli altri parametri sono ottimizzati per minimizzare la funzione di perdita. Questa opzione è disponibile solo quando la piattaforma Non lineare viene avviata con una funzione di perdita che contiene tre o più parametri.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Partial Unconstrained DS Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0, p = 0.5},
			If(
				p < 0 | p > 1, .,
				Censor == 0,
					-Log( p * Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log(
						1 - p * Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) )
					)
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Partial Unconstrained DS Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood Contour( 1 );

```

### Profiler

**Sintassi:** obj << Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Profiler( 1 );

```

### QuasiNewton BFGS

**Sintassi:** obj << QuasiNewton BFGS

**Descrizione:** Specifica QuasiNewton BFGS come metodo di ottimizzazione. Questo metodo è il migliore per grandi quantità di parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton BFGS;
obj << Finish;

```

### QuasiNewton SR1

**Sintassi:** obj << QuasiNewton SR1

**Descrizione:** Specifica QuasiNewton SR1 come metodo di ottimizzazione. Questo metodo evita di ricalcolare le derivate a ogni iterazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton SR1;
obj << Finish;

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj << Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relative Gradient

**Sintassi:** obj << Relative Gradient( number=1e-6 )

**Descrizione:** Specifica il valore del limite di arresto per il criterio del gradiente relativo. "1e-6", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Relative Gradient( 0.0001 );
obj << Finish;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj << Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remember Solution

**Sintassi:** obj << Remember Solution( name )

**Descrizione:** Crea un report denominato Modelli memorizzati, che contiene le stime dei parametri correnti e le statistiche di riepilogo. I risultati di modelli multipli possono essere ricordati e confrontati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Remember Solution( "New Model" );

```

### Remove Column Switcher

**Sintassi:** obj << Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```js

Names Default To Here( 1 );
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

**Sintassi:** obj << Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj << Report;

Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Report View( "Summary" );

```

### Reset

**Sintassi:** obj << Reset

**Descrizione:** Reimposta il criterio di convergenza dopo la risoluzione. Questa opzione è utile quando si cerca di stimare di nuovo il modello con valori iniziali diversi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Finish;
Wait( 2 );
obj << Reset;

```

### Response

**Sintassi:** obj = Nonlinear(...<Response( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile di risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Revert To Original Parameters

**Sintassi:** obj << Revert To Original Parameters

**Descrizione:** Riporta i valori correnti dei parametri del Pannello di controllo ai valori originali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 1 );
obj << Revert to Original Parameters;

```

### SSE Grid

**Sintassi:** obj << SSE Grid

**Descrizione:** Crea una griglia di valori intorno alle stime della soluzione e calcola la somma dei quadrati dell&apos;errore per ciascun valore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << SSE Grid;

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj << Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj << Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Estimates

**Sintassi:** obj << Save Estimates

**Descrizione:** Salva le stime dei parametri correnti nei valori dei parametri nella colonna con formula.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 1 );
obj << Save Estimates;

```

### Save Estimates To Table

**Sintassi:** obj << Save Estimates To Table

**Descrizione:** Crea una nuova tabella di dati che contiene le stime dei parametri.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Estimates To Table;

```

### Save Indiv Confid Limit Formula

**Sintassi:** obj << Save Indiv Confid Limit Formula

**Descrizione:** Salva nuove colonne con formula nella tabella di dati. Le nuove colonne contengono le formule per calcolare l&apos;intervallo di confidenza per una previsione individuale. Si tratta di un intervallo di confidenza di un valore individuale della risposta a un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limit Formula;

```

### Save Indiv Confid Limits

**Sintassi:** obj << Save Indiv Confid Limits

**Descrizione:** Salva nuove colonne nella tabella di dati. Le nuove colonne contengono i limiti di confidenza asintotici per una previsione individuale. Si tratta dell&apos;intervallo di confidenza di un valore di risposta individuale a un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limits;

```

### Save Inverse Prediction Formula

**Sintassi:** obj << Save Inverse Prediction Formula

**Descrizione:** Salva nuove colonne con formula nella tabella di dati. Le nuove colonne contengono le formule per la previsione inversa del modello, l&apos;errore standard di una previsione inversa e l&apos;errore standard di una previsione inversa individuale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Inverse Prediction Formula;

```

### Save Pred Confid Limit Formula

**Sintassi:** obj << Save Pred Confid Limit Formula

**Descrizione:** Salva nuove colonne con formula nella tabella di dati. Le nuove colonne contengono le formule per calcolare l&apos;intervallo di confidenza per una previsione del modello. Si tratta di un intervallo di confidenza per il valore medio della risposta a un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limit Formula;

```

### Save Pred Confid Limits

**Sintassi:** obj << Save Pred Confid Limits

**Descrizione:** Salva nuove colonne nella tabella di dati. Le nuove colonne contengono i limiti di confidenza asintotici per la previsione del modello. Si tratta dell&apos;intervallo di confidenza per il valore medio della risposta a un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limits;

```

### Save Prediction Formula

**Sintassi:** obj << Save Prediction Formula

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La nuova colonna contiene la formula di previsione utilizzando le stime dei parametri correnti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Prediction Formula;

```

### Save Residual Formula

**Sintassi:** obj << Save Residual Formula

**Descrizione:** Salva una nuova colonna con formula nella tabella di dati. La nuova colonna contiene la formula per il calcolo dei residui.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Residual Formula;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Script Window;

```

### Save Specific Solving Formula

**Sintassi:** obj << Save Specific Solving Formula( <column to solve for, {name1=expr1, ...}, Save Formula for Std Error Mean, Save Formula for Std Error Individual> )

**Descrizione:** Salva nuove colonne con formula nella tabella di dati. Le nuove colonne contengono le formule per la previsione e l&apos;errore standard per la valutazione di una variabile X data la variabile di risposta e altri valori X nei dati o una costante.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :year, {:pop = 200}, Save Formula for Std Error Mean );

```

**Esempio 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :pop, Save Formula for Std Error Individual );

```

### Save Std Error of Individual

**Sintassi:** obj << Save Std Error of Individual

**Descrizione:** Salva una nuova colonna con formula nella tabella di dati. La nuova colonna contiene la formula dell&apos;errore standard per una previsione individuale. Si tratta dell&apos;errore standard per la previsione del valore individuale della risposta per un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Individual;

```

### Save Std Error of Predicted

**Sintassi:** obj << Save Std Error of Predicted

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La nuova colonna contiene la formula dell&apos;errore standard per la previsione del modello. Si tratta dell&apos;errore standard per la previsione del valore medio della risposta per un determinato valore X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Predicted;

```

### Second Deriv Method

**Sintassi:** obj << Second Deriv Method( state=0|1 )

**Descrizione:** Specifica che il metodo di stima debba utilizzare le derivate seconde.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Second Deriv Method( 1 ), Finish );

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```js

Names Default To Here( 1 );
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

```js

Names Default To Here( 1 );

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Parameter

**Sintassi:** obj << Set Parameter( name=expr, ... )

**Descrizione:** Imposta uno o più valori dei parametri prima di stimare il modello. Questa opzione è utile sia per fissare un parametro a un particolare valore sia per impostare i valori iniziali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
Wait( 2 );
obj << Finish;

```

### Show Derivatives

**Sintassi:** obj << Show Derivatives

**Descrizione:** Mostra le derivate della formula non lineare nel log.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Show Derivatives;

```

### Show Prediction Expression

**Sintassi:** obj << Show Prediction Expression( state=0|1 )

**Descrizione:** Mostra o nasconde il modello di previsione o la funzione di perdita nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Step

**Sintassi:** obj << Step

**Descrizione:** Effettua un passo di iterazione per la risoluzione del modello non lineare.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Step;
Wait( 1 );
obj << Step;

```

### Stop

**Sintassi:** obj << Stop

**Descrizione:** Interrompe il processo di stima del modello non lineare fermandolo all&apos;iterazione corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;
obj << Stop;

```

### Surface Profiler

**Sintassi:** obj << Surface Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico di superficie tridimensionale. Questa opzione è disponibile solo per i modelli con due o più variabili X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Surface Profiler( 1 );

```

### Sync to Data Table Changes

**Sintassi:** obj << Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintassi:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Unlock Parameter

**Sintassi:** obj << Unlock Parameter( Name, ... )

**Descrizione:** Sblocca i parametri specificati. Utilizzare questa opzione per i fattori precedentemente bloccati, in modo che siano liberi di cambiare durante il processo di iterazione.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0, A, D );
obj << Finish;
Wait( 2 );
obj << Unlock Parameter( B0, A );
obj << Finish;

```

### Unthreaded

**Sintassi:** obj << Unthreaded( state=0|1 )

**Descrizione:** Esegue le iterazioni nel thread di calcolo principale.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Nonlinear( Y( :Algae density ), X( :Mitscherlich ) );
obj << Unthreaded( 1 );
obj << Finish;

```

### View Web XML

**Sintassi:** obj << View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Sintassi:** obj = Nonlinear(...<Weight( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Weight( _weightcol ) );

```

### Window View

**Sintassi:** obj = Nonlinear(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Sintassi:** obj = Nonlinear(...<X( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica una colonna che contiene la variabile X o una formula del modello con parametri.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Y

**Sintassi:** obj = Nonlinear(...<Y( column )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica la variabile di risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

