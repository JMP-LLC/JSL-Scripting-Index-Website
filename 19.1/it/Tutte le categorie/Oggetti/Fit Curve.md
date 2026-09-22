# Fit Curve



## ANOM for Estimates

### Messaggi degli elementi

#### Point Options

**Sintassi:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descrizione:** Specifica lo stile di rappresentazione dei punti nel grafico. Si può scegliere tra aghi verticali, punti collegati e solo punti. Per impostazione predefinita, il grafico è rappresentato con aghi che collegano i punti alla linea orizzontale che viene tracciata in corrispondenza della media.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintassi:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**Descrizione:** Modifica il livello alfa utilizzato per calcolare i limiti di decisione.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintassi:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descrizione:** Mostra o nasconde la linea centrale (media generale) nel grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintassi:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura dei limiti di decisione per il grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintassi:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descrizione:** Mostra o nasconde le linee dei limiti di decisione per il grafico ANOM. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintassi:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene le medie di gruppo e i limiti di decisione.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

## Colonne

### By

**Sintassi:** obj = Fit Curve(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;

```

### Freq

**Sintassi:** obj = Fit Curve(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Freq( :_freqcol ));obj << Fit Logistic 4P;

```

### Group

**Sintassi:** obj = Fit Curve(...&lt;Group( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una variabile di raggruppamento. Il modello stimato ha parametri separati per ogni livello della variabile di raggruppamento.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Regressor

**Sintassi:** obj = Fit Curve(...&lt;Regressor( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili predittore

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Response

**Sintassi:** obj = Fit Curve(...Response( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Supplementary

**Sintassi:** obj = Fit Curve(...&lt;Supplementary( column(s) )&gt;...)

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );obj << Fit Cubic;

```

### Weight

**Sintassi:** obj = Fit Curve(...&lt;Weight( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Weight( :_weightcol ));obj << Fit Logistic 4P;

```

### X

**Sintassi:** obj = Fit Curve(...&lt;X( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili predittore

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Y

**Sintassi:** obj = Fit Curve(...Y( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le variabili di risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Z

**Sintassi:** obj = Fit Curve(...&lt;Z( column(s) )&gt;...)

**Descrizione:** Specifica una o più variabili supplementari. Le variabili supplementari non vengono utilizzate in alcun calcolo della piattaforma e la loro inclusione non influisce sui risultati. Queste variabili possono migliorare l&apos;interpretazione dei dati o essere utilizzate in analisi future.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );obj << Fit Cubic;

```

## Costruttori associati

### Fit Curve

**Sintassi:** Fit Curve( Y( column ), X( column ) )

**Descrizione:** Stima vari modelli non lineari incorporati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

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

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Data Table Window;

```

### F1 Analysis

**Sintassi:** obj &lt;&lt; F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Descrizione:** Esegue un&apos;analisi della curva di dissoluzione utilizzando il fattore di differenza F1, che misura la differenza percentuale tra le curve della compressa di riferimento e le curve della compressa di test in ogni punto temporale.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << F1 Analysis(	Alpha( 0.05 ),	Reference Level( "R01" ),	Bootstrap Samples( 2000 ),	Random Seed( 1234 ));

```

### F2 Analysis

**Sintassi:** obj &lt;&lt; F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Descrizione:** Esegue un&apos;analisi della curva di dissoluzione utilizzando il fattore di similarità F2, che misura la similarità di dissoluzione percentuale tra le curve della compressa di riferimento e le curve della compressa di test.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << F2 Analysis(	Alpha( 0.1 ),	Reference Level( "R01" ),	Bootstrap Samples( 3000 ),	Random Seed( 4321 ));

```

### Fit Antoine Equation

**Sintassi:** obj &lt;&lt; Fit Antoine Equation

**Descrizione:** Stima il modello di Antoine sui dati. Questo modello è spesso utilizzato per modellizzare la pressione di vapore come funzione della temperatura.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**Sintassi:** obj &lt;&lt; Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**Sintassi:** obj &lt;&lt; Fit Biexponential 4P

**Descrizione:** Stima un modello biesponenziale a quattro parametri sui dati.

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**Sintassi:** obj &lt;&lt; Fit Biexponential 5P

**Descrizione:** Stima un modello biesponenziale a cinque parametri sui dati.

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**Sintassi:** obj &lt;&lt; Fit Cell Growth 4P

**Descrizione:** Stima un modello di crescita e decadimento a quattro parametri sui dati.

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Cell Growth 4P;

```

### Fit Cubic

**Sintassi:** obj &lt;&lt; Fit Cubic

**Descrizione:** Stima un modello cubico sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Cubic;

```

### Fit ExGaussian Peak

**Sintassi:** obj &lt;&lt; Fit ExGaussian Peak

**Descrizione:** Stima un modello di picco gaussiano modificato esponenzialmente sui dati.

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**Sintassi:** obj &lt;&lt; Fit Exponential 2P

**Descrizione:** Stima un modello esponenziale a due parametri sui dati. La risposta stimata ha un asintoto a zero.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Fit Curve( Y( :pop ), X( :year ) );obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**Sintassi:** obj &lt;&lt; Fit Exponential 3P

**Descrizione:** Stima un modello esponenziale a tre parametri sui dati. La risposta stimata è limitata da un asintoto stimato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Fit Curve( Y( :pop ), X( :year ) );obj << Fit Exponential 3P;

```

### Fit First Order Rate

**Sintassi:** obj &lt;&lt; Fit First Order Rate

**Descrizione:** Stima un modello di tasso di primo ordine sui dati. Questa opzione è utile nella modellizzazione di reazioni chimiche ed è disponibile solo quando i valori X sono non negativi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**Sintassi:** obj &lt;&lt; Fit First Order with Equilibrium

**Descrizione:** Stima un modello di tasso di primo ordine con equilibrio sui dati. Questa opzione è utile nella modellizzazione di reazioni chimiche ed è disponibile solo quando i valori X sono non negativi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**Sintassi:** obj &lt;&lt; Fit First Order with Limits

**Descrizione:** Stima un modello di tasso di primo ordine con limiti sui dati. Questa opzione è utile nella modellizzazione di reazioni chimiche ed è disponibile solo quando i valori X sono non negativi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**Sintassi:** obj &lt;&lt; Fit Gaussian Peak

**Descrizione:** Stima un modello di picco gaussiano sui dati.

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**Sintassi:** obj &lt;&lt; Fit Gompertz 3P

**Descrizione:** Stima una curva di Gompertz a tre parametri sui dati. La risposta stimata è limitata da zero e un asintoto stimato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**Sintassi:** obj &lt;&lt; Fit Gompertz 4P

**Descrizione:** Stima una curva di Gompertz a quattro parametri sui dati. La risposta stimata è limitata da due asintoti stimati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Gompertz 4P;

```

### Fit Higuchi

**Sintassi:** obj &lt;&lt; Fit Higuchi

**Descrizione:** Stima un modello di Higuchi sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**Sintassi:** obj &lt;&lt; Fit Higuchi with Burst

**Descrizione:** Stima un modello di Higuchi con una componente burst sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**Sintassi:** obj &lt;&lt; Fit Higuchi with Lag

**Descrizione:** Stima un modello di Higuchi con una componente di ritardo sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**Sintassi:** obj &lt;&lt; "Fit Hixson-Crowell"n

**Descrizione:** Stima un modello di Hixson-Crowell sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**Sintassi:** obj &lt;&lt; "Fit Hixson-Crowell with Lag"n

**Descrizione:** Stima un modello Hixson-Crowell con una componente di ritardo sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**Sintassi:** obj &lt;&lt; Fit Hybrid Exponential

**Descrizione:** Stima un modello di ibrida esponenziale sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**Sintassi:** obj &lt;&lt; Fit Inverse Michaelis Menten; obj &lt;&lt; "Fit Inverse Michaelis-Menten"n

**Descrizione:** Stima il modello di cinetica enzimatica di Michaelis-Menten inverso sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**Sintassi:** obj &lt;&lt; "Fit Korsmeyer-Peppas"n

**Descrizione:** Stima un modello di Korsmeyer-Peppas sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**Sintassi:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Burst"n

**Descrizione:** Stima un modello di Korsmeyer-Peppas con una componente burst sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**Sintassi:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Lag"n

**Descrizione:** Stima un modello di Korsmeyer-Peppas con una componente di ritardo sui dati. Questa è una tecnica parametrica per confrontare le curve di dissoluzione.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**Sintassi:** obj &lt;&lt; Fit Linear

**Descrizione:** Stima un modello di regressione dei minimi quadrati sui dati. Sul diagramma viene mostrata la linea stimata ed è fornito un report di stima.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Linear;

```

### Fit Logistic 2P

**Sintassi:** obj &lt;&lt; Fit Logistic 2P

**Descrizione:** Stima una curva logistica a due parametri sui dati. La risposta stimata è limitata dagli asintoti zero e uno.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;miny = Min( dat[0, 3] );maxy = Max( dat[0, 3] );newy = (dat[0, 3] - miny) / (maxy - miny);form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**Sintassi:** obj &lt;&lt; Fit Logistic 3P

**Descrizione:** Stima una curva logistica a tre parametri sui dati. La risposta stimata è limitata da zero e un asintoto stimato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**Sintassi:** obj &lt;&lt; Fit Logistic 4P

**Descrizione:** Stima una modello logistico a quattro parametri sui dati. La risposta stimata è limitata da due asintoti stimati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**Sintassi:** obj &lt;&lt; Fit Logistic 4P Hill

**Descrizione:** Stima una modello logistico a quattro parametri sui dati. La risposta stimata è limitata da due asintoti stimati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**Sintassi:** obj &lt;&lt; Fit Logistic 4P Rodbard

**Descrizione:** Stima una modello logistico a quattro parametri sui dati. La risposta stimata è limitata da due asintoti stimati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**Sintassi:** obj &lt;&lt; Fit Logistic 5P

**Descrizione:** Stima una modello logistico a cinque parametri sui dati. La risposta stimata è limitata da due asintoti stimati. A differenza delle altre curve logistiche, la curva logistica a cinque parametri non è simmetrica.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**Sintassi:** obj &lt;&lt; Fit Lorentzian Peak

**Descrizione:** Stima un modello di picco lorentziano sui dati.

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**Sintassi:** obj &lt;&lt; Fit Mechanistic Growth

**Descrizione:** Stima il modello di crescita meccanicistica sui dati. Si tratta di una riparametrizzazione del modello Esponenziale 3P.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**Sintassi:** obj &lt;&lt; Fit Michaelis Menten; obj &lt;&lt; "Fit Michaelis-Menten"n

**Descrizione:** Stima il modello di cinetica enzimatica di Michaelis-Menten sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**Sintassi:** obj &lt;&lt; Fit One Compartment Oral Dose

**Descrizione:** Stima un modello a un comparto dose orale sui dati. Questo modello è idoneo per modellare la concentrazione di farmaco nell&apos;organismo dopo una dose orale.

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**Sintassi:** obj &lt;&lt; Fit Pearson VII Peak

### Fit Power Model

**Sintassi:** obj &lt;&lt; Fit Power Model

**Descrizione:** Stima un modello di potenza sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Power Model;

```

### Fit Probit 2P

**Sintassi:** obj &lt;&lt; Fit Probit 2P

**Descrizione:** Stima una curva probit a due parametri sui dati. La risposta stimata è limitata agli asintoti zero e uno.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;miny = Min( dat[0, 3] );maxy = Max( dat[0, 3] );newy = (dat[0, 3] - miny) / (maxy - miny);form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 2P;

```

### Fit Probit 3P

**Sintassi:** obj &lt;&lt; Fit Probit 3P

**Descrizione:** Stima una curva probit a tre parametri sui dati. La risposta stimata è delimitata tra zero e un asintoto stimato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 3P;

```

### Fit Probit 4P

**Sintassi:** obj &lt;&lt; Fit Probit 4P

**Descrizione:** Stima un modello probit a quattro parametri sui dati. La risposta stimata è limitata a due asintoti stimati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**Sintassi:** obj &lt;&lt; Fit Pseudo-Voigt

### Fit Quadratic

**Sintassi:** obj &lt;&lt; Fit Quadratic

**Descrizione:** Stima un modello quadratico sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quadratic;

```

### Fit Quartic

**Sintassi:** obj &lt;&lt; Fit Quartic

**Descrizione:** Stima un polinomio di quarto grado sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quartic;

```

### Fit Quintic

**Sintassi:** obj &lt;&lt; Fit Quintic

**Descrizione:** Stima un polinomio di quinto grado sui dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quintic;

```

### Fit Second Order

**Sintassi:** obj &lt;&lt; Fit Second Order

**Descrizione:** Stima un modello di tasso di secondo ordine sui dati. Questa opzione è utile nella modellizzazione di reazioni chimiche ed è disponibile solo quando i valori X sono non negativi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Second Order;

```

### Fit Second Order with Two Components

**Sintassi:** obj &lt;&lt; Fit Second Order with Two Components

**Descrizione:** Stima un modello di tasso di secondo ordine con due componenti sui dati. Questa opzione è utile nella modellizzazione di reazioni chimiche ed è disponibile solo quando i valori X sono non negativi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**Sintassi:** obj &lt;&lt; Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**Sintassi:** obj &lt;&lt; Fit Two Compartment IV Bolus Dose

**Descrizione:** Stima un modello a due comparti della dose in bolo endovenoso sui dati. Questo modello è idoneo per la modellizzazione della concentrazione di farmaco nell&apos;organismo dopo una dose in bolo endovenoso.

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**Sintassi:** obj &lt;&lt; Fit Weibull Growth

**Descrizione:** Stima un modello di crescita di Weibull a tre parametri sui dati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );obj << Fit Weibull Growth;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Timing;Show( t );

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

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Multivariate Distance

**Sintassi:** obj &lt;&lt; Multivariate Distance( Alpha( number ), Reference Level( level ))

**Descrizione:** Esegue un&apos;analisi della curva di dissoluzione utilizzando la distanza di Mahalanobis M, che misura la distanza multivariata tra le curve della compressa di riferimento e le curve della compressa di test.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

```

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Script Window;

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

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### T2EQ

**Sintassi:** obj &lt;&lt; T2EQ( Alpha( number ), Reference Level( level ))

**Descrizione:** Esegue un&apos;analisi della curva di dissoluzione utilizzando il test di equivalenza T2EQ, che misura la distanza multivariata tra le curve della compressa di riferimento e le curve della compressa di test.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintassi:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Equivalence with Ratios

### Messaggi degli elementi

#### Set Alpha Level

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**Descrizione:** Imposta il livello alfa utilizzato per calcolare gli intervalli di confidenza sul grafico di equivalenza.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )	));

```

#### Set Decision Lines

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**Descrizione:** Imposta le linee di decisione inferiori e superiori sul grafico di equivalenza.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )	));

```

#### Show Center Line

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**Descrizione:** Mostra o nasconde la linea centrale sul grafico di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Center Line( 0 ) ),		Equivalence with Ratios( 1, Show Center Line( 1 ) ),		Equivalence with Ratios( 1, Show Center Line( 0 ) )	));

```

#### Show Decision Limit Shading

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**Descrizione:** Mostra o nasconde l&apos;ombreggiatura del limite di decisione sul grafico di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )	));

```

#### Show Decision Limits

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**Descrizione:** Mostra o nasconde le linee del limite di decisione sul grafico di equivalenza. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )	));

```

#### Show Summary Report

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**Descrizione:** Mostra o nasconde il report Riepilogo delle equivalenze che contiene le stime dei parametri, i limiti di decisione e indica se il parametro ha superato i limiti.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) )	));

```

## Fit Curve CDOE

### Messaggi degli elementi

#### CDOE Fit Plot

**Sintassi:** scrobj &lt;&lt; CDOE Fit Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma dei valori stimati. Se viene specificata una variabile di gruppo, esiste anche una griglia di diagrammi dei valori stimati per ciascun livello della variabile di gruppo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["CDOE Fit"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << CDOE Fit Plot( 0 );

```

#### CDOE Profiler

**Sintassi:** scrobj &lt;&lt; CDOE Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il Profiler CDOE, che consente di esplorare come cambia la risposta in base alle variabili supplementari. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << CDOE Profiler( 0 );

```

#### Diagnostic Plots

**Sintassi:** scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descrizione:** Mostra o nasconde i diagrammi effettivi rispetto a previsti e residui per la variabile di risposta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["Diagnostic Plots"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Diagnostic Plots( 0 );

```

#### Generalized Regression for Model Parameters

**Sintassi:** scrobj &lt;&lt; Generalized Regression for Model Parameters( state=0|1 )

**Descrizione:** Mostra o nasconde i report Regressione generalizzata per ciascun parametro del modello. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Generalized Regression for Model Parameters( 0 );

```

#### Save Prediction Formula

**Sintassi:** scrobj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula di previsione per la risposta.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Save Prediction Formula;

```

## Fit

### Messaggi degli elementi

#### Area Under Curve

**Sintassi:** obj &lt;&lt; Fit Command( Area Under Curve( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Area Under Curve( state=0|1 ))

**Descrizione:** Calcola l&apos;area sotto la funzione di previsione stimata.

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

#### Compare Parameter Estimates

**Sintassi:** obj &lt;&lt; Fit Command( Compare Parameter Estimates( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Compare Parameter Estimates( state=0|1 ))

**Descrizione:** Confronta la stima del parametro di ciascun gruppo con la media generale. Questo confronto viene effettuato per ciascun parametro.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

#### Curve DOE Analysis

**Sintassi:** obj &lt;&lt; (Fit[number|name] &lt;&lt; Curve DOE Analysis( state=0|1 ))

**Descrizione:** Avvia un report di regressione generalizzata all&apos;interno della piattaforma Stima curva. Un modello di regressione generalizzata è stimato per ciascun parametro del modello utilizzando le variabili supplementari come effetti del modello.

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),	SendToReport(		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,			{Close( 1 )}		)	));obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

#### Custom Inverse Prediction

**Sintassi:** obj &lt;&lt; Fit Command( Custom Inverse Prediction( Response( value ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Custom Inverse Prediction( Response( value )))

**Descrizione:** Prevede un valore X per il valore di risposta specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

#### Equivalence Test

**Sintassi:** obj &lt;&lt; Fit Command( Equivalence Test( Reference Group( column ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Equivalence Test( Reference Group( column )))

**Descrizione:** Verifica se la curva stimata per ciascun gruppo è praticamente equivalente alla curva stimata di un gruppo di riferimento.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

#### Inflection Point

**Sintassi:** obj &lt;&lt; Fit Command( Inflection Point( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Inflection Point( state=0|1 ))

**Descrizione:** Mostra o nasconde un report delle stime dei punti di flesso per il modello. Questa opzione è disponibile solo per i modelli Crescita di Weibull, Logistica 4P Rodbard e Logistica 5P.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

#### Make Parameter Table

**Sintassi:** obj &lt;&lt; Fit Command( Make Parameter Table ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Make Parameter Table)

**Descrizione:** Crea una tabella di riepilogo delle stime dei parametri.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Make Parameter Table );

```

#### Peak Response

**Sintassi:** obj &lt;&lt; Fit Command( Peak Response( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Peak Response( state=0|1 ))

**Descrizione:** Calcola la stima della variabile Y al picco della curva stimata. Questa opzione è disponibile per i modelli Crescita celle 4P e Un comparto.

**JMP Versione aggiunta:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

#### Plot Actual by Predicted

**Sintassi:** obj &lt;&lt; Fit Command( Plot Actual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma con i valori effettivi di risposta sull&apos;asse verticale e i valori previsti sull&apos;asse orizzontale. Nelle buone stime, i punti sono vicini alla diagonale. È possibile vedere quali punti sono lontani dalla diagonale, cercare pattern e visualizzare il test.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**Sintassi:** obj &lt;&lt; Fit Command( Plot Residual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Residual by Predicted( state=0|1 ))

**Descrizione:** Mostra o nasconde un diagramma con i residui sull&apos;asse verticale e il numero di riga sull&apos;asse orizzontale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Profiler

**Sintassi:** obj &lt;&lt; Fit Command( Profiler( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Profiler( state=0|1 ))

**Descrizione:** Mostra o nasconde un profiler della funzione di previsione stimata e le relative derivate prima e seconda.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; (Fit[number|name]&lt;&lt;Remove Fit)

**Descrizione:** Rimuove la stima specificata dal report.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Bootstrap Results

**Sintassi:** obj &lt;&lt; Fit Command( Save Bootstrap Results ); obj &lt;&lt; (Fit[number] &lt;&lt; Save Bootstrap Results)

**Descrizione:** Salva le colonne in una nuova tabella di dati. La tabella di dati contiene i risultati bootstrap di un&apos;analisi F1 o F2.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),	F2 Analysis(		Alpha( 0.1 ),		Reference Level( "R01" ),		Bootstrap Samples( 2500 ),		Random Seed( 1234 )	),	SendToReport(		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )	));obj << (fit[1] << Save Bootstrap Results);

```

#### Save First Derivative

**Sintassi:** obj &lt;&lt; Fit Command( Save First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save First Derivative)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula per la derivata prima della previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save First Derivative );

```

#### Save Inverse Prediction Formula

**Sintassi:** obj &lt;&lt; Fit Command( Save Inverse Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Inverse Prediction Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula per la funzione inversa del modello stimato.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

#### Save Parametric Prediction Formula

**Sintassi:** obj &lt;&lt; Fit Command( Save Parametric Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Parametric Prediction Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula di previsione espressa in modo da poter essere utilizzata dalla piattaforma Non lineare.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

#### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Fit Command( Save Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Prediction Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula di previsione per le stime dei parametri correnti.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit[1] << Save Prediction Formula);

```

#### Save Residual Formula

**Sintassi:** obj &lt;&lt; Fit Command( Save Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Residual Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene una formula per i residui.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Residual Formula );

```

#### Save Stacked Data

**Sintassi:** obj &lt;&lt; Fit Command( Save Stacked Data ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Stacked Data)

**Descrizione:** Salva le colonne in una nuova tabella di dati. La tabella di dati contiene i dati originali nel formato impilato oltre a una colonna per i valori previsti della risposta e una colonna per i residui.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi( Save Stacked Data );

```

#### Save Std Error of First Derivative

**Sintassi:** obj &lt;&lt; Fit Command( Save Std Error of First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of First Derivative)

**Descrizione:** Salva una nuova colonna nella tabella di dati originale. La nuova colonna contiene la formula per l&apos;errore standard della derivata prima della previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

#### Save Std Error of Predicted

**Sintassi:** obj &lt;&lt; Fit Command( Save Std Error of Predicted ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of Predicted)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula per calcolare gli errori standard delle previsioni.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

#### Save Studentized Residual Formula

**Sintassi:** obj &lt;&lt; Fit Command( Save Studentized Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Studentized Residual Formula)

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati originale. La nuova colonna contiene la formula dei residui studentizzati, che sono residui standard divisi per le loro deviazioni standard stimate.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

#### Test Parallelism

**Sintassi:** obj &lt;&lt; Fit Command( Test Parallelism( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Test Parallelism( state=0|1 ))

**Descrizione:** Verifica se le curve stimate hanno una forma simile tra i gruppi.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

#### Time to Peak Response

**Sintassi:** obj &lt;&lt; Fit Command( Time to Peak Response( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Time to Peak Response( state=0|1 ))

**Descrizione:** Calcola la stima della variabile X al picco della curva stimata. Questa opzione è disponibile solo per i modelli Crescita celle 4P e Un comparto.

**JMP Versione aggiunta:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

