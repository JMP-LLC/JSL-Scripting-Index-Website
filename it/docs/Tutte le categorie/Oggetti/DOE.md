# DOE



## Colonne

### Factor

**Sintassi:** obj << Factor( column(s) )

### Response

**Sintassi:** obj << Response( column(s) )

### X

**Sintassi:** obj << X( column(s) )

### Y

**Sintassi:** obj << Y( column(s) )

## Costruttori associati

### DOE

**Sintassi:** DOE

## Messaggi degli elementi

### A-Optimality Parameter Weights

**Sintassi:** obj << A-Optimality Parameter Weights

**Descrizione:** Imposta i pesi da usare per la creazione di un piano A-ottimale.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ), Add Term( {1, 0} ), Add Term( {1, 1} ),
	Add Term( {2, 1} ), Add Term( {3, 1} ), Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ), Add Term( {2, 1}, {3, 1} ), Set Sample Size( 14 ),
	Optimality Criterion( "Make A-Optimal Design"n ),
	"A-Optimality Parameter Weights"n( [1 1 1 1 0.1 0.1 0.1] )}
);

```

### ALT Factor Settings

**Sintassi:** obj << ALT Factor Settings

**Descrizione:** Per il numero di fattori dato in un piano di test accelerato di durata, consente di specificare nome del fattore, numero di livelli, trasformazione del fattore e condizioni di utilizzo e test.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### ALT Plan Setup

**Sintassi:** obj << ALT Plan Setup( 1|2|3 )

**Descrizione:** Specifica la scelta iniziale del modello per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Add Alias Term

**Sintassi:** obj << Add Alias Term

**Descrizione:** Aggiunge un termine alias all&apos;elenco di termini alias. Specifica il numero e potenza del fattore per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Alias Term( {1, 1}, {2, 1} );
d << Add Alias Term( {1, 2} );

```

### Add Constraint

**Sintassi:** obj << Add Constraint

**Descrizione:** Aggiunge vincoli lineari attraverso una matrice. Ogni riga rappresenta un vincolo. L’ultima colonna è per i valori sul lato destro dei vincoli di disuguaglianza. In JSL, i vincoli di disuguaglianza devono essere inferiori o uguali ai valori sulla destra.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} )
);

```

### Add Factor

**Sintassi:** obj << Add Factor( Continuous|Discrete Numeric|Blocking|Constant|Categorical|Mixture )

**Descrizione:** Aggiunge un fattore del tipo specificato e argomenti facoltativi. Se non viene specificato nulla, questo comando aggiunge un fattore continuo.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design );
d << Add Factor( Continuous, -1, 1, "X1", 0 );
d << Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 );
d << Add Factor( Categorical, {"L1", "L2"}, "X3", 0 );
d << Add Factor( Blocking, 8, "X4" );
d << Add Factor( Constant, 3, "X5" );

```

### Add Functional Response

**Sintassi:** obj << Add Functional Response

**Descrizione:** Aggiunge una risposta funzionale con il nome, il numero di misurazioni per esecuzione e i valori specificati.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Functional Response( "Y", 5, {1, 2, 3, 4, 5} ),
	Set Random Seed( 46055034 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 )
);

```

### Add Potential Term

**Sintassi:** obj << Add Potential Term

**Descrizione:** Aggiunge un termine Se possibile all&apos;elenco di termini del modello. Specifica il numero e potenza del fattore per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Potential Term( {1, 1}, {2, 1} );
d << Add Potential Term( {1, 2} );

```

### Add Response

**Sintassi:** obj << Add Response( goal, name, lower limit, upper limit, importance, lower detection limit, upper detection limit )

**Descrizione:** Aggiunge una risposta con l&apos;obiettivo, il nome, il limite inferiore, il limite superiore e l&apos;importanza specificati.

**Esempio 1**

```jsl

Names Default To Here( 1 );
DOE( Custom Design, Add Response( Match Target, "Y", 10, 30, 1 ) );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
DOE( Custom Design, Add Response( Match Target, "Y", ., ., 1, 10, 30 ) );

```

### Add Term

**Sintassi:** obj << Add Term

**Descrizione:** Aggiunge un termine "Necessario" all&apos;elenco di termini del modello. Gli effetti sono specificati da {numero di fattori, potenza}. È possibile creare interazioni separando gli effetti con virgole.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Add Term( {1, 1}, {2, 1} );
d << Add Term( {1, 2} );

```

### Additional Designs

**Sintassi:** obj << Additional Designs

**Descrizione:** Specifica fino a nove piani supplementari da confrontare con il piano di riferimento.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Allow covariate rows to be repeated

**Sintassi:** obj << Allow covariate rows to be repeated( state=0|1 )

**Descrizione:** Specifica se è consentito ripetere nel piano le righe covariate.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Augment Method

**Sintassi:** obj << Augment Method( Replicate|Centerpoints|Fold Over|Add Axial|Augment )

**Descrizione:** Specifica il tipo di metodo di allargamento e i rispettivi parametri.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Augment );
d << Set Sample Size( 24 );
d << Make Design;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Augment Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Augment Method( Replicate, 2 );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Centerpoints, 3 );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Fold Over, [1 2] );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Augment Method( Add Axial, 1, 2 );

```

### Blocks

**Sintassi:** obj << Blocks

**Descrizione:** Specifica la dimensione del blocco per un piano con blocco incompleto bilanciato (BIBD).

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design, Treatments( 3, {"L1", "L2", "L3"} ) );
d << Blocks( 2 );
d << Make Design;

```

### Center Points

**Sintassi:** obj << Center Points

**Descrizione:** Specifica il numero di punti centrali.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Center Points( 2 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 ),
	Center Points( 1 )
);

```

### Change Anticipated Coefficients

**Sintassi:** obj << Change Anticipated Coefficients

**Descrizione:** Cambia i coefficienti anticipati nell&apos;analisi di potenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Change Anticipated Coefficients( [1 2 3 4 2 2 2 3 3 3] );

```

### Change Factor Settings

**Sintassi:** obj << Change Factor Settings

**Descrizione:** Specifica il minimo, il massimo e il nome del fattore della miscela o continuo incluso nel primo argomento. Particolarmente utile per piattaforme con fattori inizialmente predefiniti.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = DOE( Response Surface Design );
d << Change Factor Settings( 1, 2, 3, "A" );
d << Change Factor Settings( 2, 0, 4 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = DOE( Mixture Design );
d << Change Factor Settings( 1, 0.1, 0.4, "A" );
d << Change Factor Settings( 3, 0, 0.8, "C" );

```

### Check Inscribe

**Sintassi:** obj << Check Inscribe

**Descrizione:** Ridimensiona il piano in modo che i punti assiali siano alle estremità inferiore e superiore del range.

```jsl

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );
d << Check Inscribe;

```

### Choice Design Table Output

**Sintassi:** obj << Choice Design Table Output( "Separa"|"Combinati" )

**Descrizione:** Specifica come creare una tabella di dati per un piano di scelta.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Add Term( {1, 1} ), Add Term( {2, 1} ),
	Set Prior Mean Choice( [0 0] ), Set Prior Variance Matrix( [1 0, 0 1] ),
	Set Number of Attributes( 2 ), Set Number of Profiles( 2 ),
	Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Make Design,
	Choice Design Table Output( Combined )}
);

```

### D Efficiency Weight

**Sintassi:** obj << D Efficiency Weight

**Descrizione:** Utilizzare questa opzione per controllare l&apos;importanza relativa dell&apos;efficienza D nel ridurre la generazione di alias. Specificare un numero compreso tra zero e uno.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	D Efficiency Weight( 0.5 ),
	Make Design
);

```

### Design Search Time

**Sintassi:** obj << Design Search Time( number )

**Descrizione:** Specifica il numero di secondi di ricerca di un piano.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Make Design}
);

```

### Disallowed Combinations

**Sintassi:** obj << Disallowed Combinations

**Descrizione:** Permette di creare uno script che restituisce il valore vero per tutte le combinazioni di fattori che devono essere escluse dal piano.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ),
	Number of Starts( 100 ),
	Disallowed Combinations( X1 > 0.5 & X2 == 2 ),
	Make Design
);

```

### Discrete Numeric Powers Set to Necessary

**Sintassi:** obj << Discrete Numeric Powers Set to Necessary( state=0|1 )

**Descrizione:** Specifica se le potenze nei fattori numerici discreti devono essere termini del modello necessari.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Discrete Numeric, {1, 2, 3}, "X1", 0 ),
	Add Factor( Discrete Numeric, {1, 2, 3}, "X2", 0 ),
	Discrete Numeric Powers Set to Necessary( 1 ),
	Make Model( Linear )
);

```

### Distribution Choice

**Sintassi:** obj << Distribution Choice

**Descrizione:** Specifica la distribuzione per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Enforce Use of Selected Covariate Rows

**Sintassi:** obj << Enforce Use of Selected Covariate Rows( state=0|1 )

**Descrizione:** Specifica se tutte le righe covariate selezionate devono essere incluse nel piano.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### FFF Optimality Criterion

**Sintassi:** obj << FFF Optimality Criterion( "MaxPro"|"Centroide" )

**Descrizione:** Specifica il criterio utilizzato nel piano. Si consiglia il valore predefinito.

**Esempio 1**

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Find Subset

**Sintassi:** obj << Find Subset

**Descrizione:** Trova il sottoinsieme D-ottimale di un piano a vertici estremi.

```jsl

Names Default To Here( 1 );
d = DOE( Mixture Design, Add Factor( Mixture, 0.1, 1, "X4", 0 ) );
d << Mixture Design Type( Extreme Vertices, 3 );
d << Find Subset( 10 );

```

### GOSSDDetails

**Sintassi:** obj << GOSSDDetails

**Descrizione:** Restituisce le impostazioni correnti dei fattori come elenco.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design );
Show( d << GOSSDDetails );

```

### GOSSDStructure

**Sintassi:** obj << GOSSDStructure

**Descrizione:** Specifica la struttura di un GOSSD

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
d = DOE( Group Orthogonal Supersaturated Design );
d << GOSSDStructure( 6, 8 );

```

### Get Alias Matrix

**Sintassi:** obj << Get Alias Matrix

**Descrizione:** Restituisce la matrice degli alias dalla valutazione del piano.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Alias Matrix;

```

### Get Design Diagnostics

**Sintassi:** obj << Get Design Diagnostics

**Descrizione:** Restituisce efficienza D, efficienza G, efficienza A e varianza media di previsione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Design Diagnostics;

```

### Get Effect Power

**Sintassi:** obj << Get Effect Power

**Descrizione:** Restituisce il vettore di potenze per stime degli effetti.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/2x3x4 Factorial.jmp" );
d = DOE( Evaluate Design, X( :X1, :X2, :X3 ), Y( :Y ) );
d << Get Effect Power;

```

### Get Estimation Efficiencies

**Sintassi:** obj << Get Estimation Efficiencies

**Descrizione:** Restituisce un vettore per la maggiore larghezza di ciascuna stima dei parametri rispetto a un piano ideale.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Estimation Efficiencies;

```

### Get MaxPro Values

**Sintassi:** obj << Get MaxPro Values

**Descrizione:** Restituisce i valori MaxPro per un piano rapido-flessibile, compresi alcuni sottopiani basati sui livelli di un fattore categorico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
d = DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);
d << Get MaxPro Values;

```

### Get Number of Random Starts

**Sintassi:** obj << Get Number of Random Starts

**Descrizione:** Restituisce il numero di partenze casuali utilizzate nella generazione del piano.

**JMP Versione aggiunta:** 15

### Get Power

**Sintassi:** obj << Get Power

**Descrizione:** Restituisce il vettore di potenze per stime dei parametri.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get Power;

```

### Get Prediction Variances

**Sintassi:** obj << Get Prediction Variances

**Descrizione:** Restituisce le varianze del vettore di previsione dal diagramma della relazione tra frazione dello spazio sperimentale e varianza prevista.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);
d << Get Prediction Variances;

```

### Get X Matrix

**Sintassi:** obj << Get X Matrix

**Descrizione:** Restituisce la matrice del piano (denominata anche matrice X).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Get X Matrix;

```

### Group New Runs Into Separate Block

**Sintassi:** obj << Group New Runs Into Separate Block

**Descrizione:** Aggiunge un fattore di blocco che raggruppa nuove esecuzioni in blocchi separati quando si allarga un piano.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Augment Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Group New Runs Into Separate Block;

```

### Load Constraints

**Sintassi:** obj << Load Constraints

**Descrizione:** Carica una tabella di vincoli di fattori salvata in precedenza, per utilizzarla nell&apos;esperimento in corso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Diamond Constraints.jmp" );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 0} ),
	Load Constraints
);

```

### Load Design

**Sintassi:** obj << Load Design

**Descrizione:** Carica piano

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design );
d << Load Design();

```

### Load Factors

**Sintassi:** obj << Load Factors

**Descrizione:** Carica una tabella di fattori salvata in precedenza, per utilizzarla nell&apos;esperimento in corso.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Factors.jmp" );
DOE( Custom Design, Load Factors );

```

### Load Responses

**Sintassi:** obj << Load Responses

**Descrizione:** Carica una tabella di dati di risposte precedentemente salvata.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Response.jmp" );
DOE( Custom Design, Load Responses );

```

### Local Design

**Sintassi:** obj << Local Design( state=0|1 )

**Descrizione:** Specifica se deve essere creato il piano locale per la media a priori.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Local Design( 0 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Make Design

**Sintassi:** obj << Make Design

**Descrizione:** Crea il piano specificato nello script.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( RSM );
d << Make Design;

```

### Make Model

**Sintassi:** obj << Make Model( Linear|Interactions|RSM )

**Descrizione:** Aggiunge termini all&apos;elenco di termini del modello per il modello specificato.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( RSM );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add Factor, Add Factor, Add Factor );
d << Make Model( Interactions );

```

### Make Strip Plot Design

**Sintassi:** obj << Make Strip Plot Design

**Descrizione:** Specifica un piano strip plot quando i fattori difficili da modificare variano indipendentemente dai fattori molto difficili da modificare.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Make Strip Plot Design;

```

### Make Table

**Sintassi:** obj << Make Table

**Descrizione:** Crea una tabella di dati dal piano corrente.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Make Table;

```

### Make Test Plan

**Sintassi:** obj << Make Test Plan

**Descrizione:** Crea il piano di test per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] ),
	Make Design, Make Test Plan}
);

```

### MaxPro Categorical Weight

**Sintassi:** obj << MaxPro Categorical Weight

**Descrizione:** Specifica il peso MaxPro. I valori superiori a 1 aumentano la separazione dei punti che hanno lo stesso livello categorico.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
DOE(
	Space Filling Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Categorical, {"L1", "L2", "L3", "L4"}, "X3", 0 ),
	FFF Optimality Criterion( MaxPro ), MaxPro Categorical Weight( 4 ),
	Space Filling Design Type( Fast Flexible Filling, 100 )}
);

```

### Mixture Design Type

**Sintassi:** obj << Mixture Design Type( Simplex Centroid|Simplex Lattice|ABCD|Extreme Vertices|Space Filling )

**Descrizione:** Specifica il tipo di piano della miscela. Vengono utilizzati i parametri predefiniti a meno che si specifichi il parametro come secondo argomento.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Simplex Centroid, 2 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Simplex Lattice, 4 );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( ABCD );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Change Factor Settings( 1, .05, .25 );
d << Mixture Design Type( Extreme Vertices, 3 );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
d = doe( Mixture Design );
d << Mixture Design Type( Space Filling, 25 );

```

### Mixture Sum

**Sintassi:** obj << Mixture Sum

**Descrizione:** Utilizzare questa opzione quando si desidera esprimere la somma di tutti gli ingredienti diversa da 1. Il totale della miscela è la somma di tutte le quantità degli ingredienti.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Mixture Sum( 50 ),
	Add Factor( Mixture, 10, 25, "X1", 0 ),
	Add Factor( Mixture, 0, 15, "X2", 0 ),
	Add Factor( Mixture, 25, 40, "X3", 0 ),
	Make Design
);

```

### Nesting Structure

**Sintassi:** obj << Nesting Structure

**Descrizione:** Specifica la struttura di nidificazione del piano. Usare un elenco con parentesi per indicare la nidificazione (il primo elemento è un fattore di nidificazione, il secondo elemento è un elenco con parentesi di fattori o strutture nidificati). Usare la concatenazione orizzontale (&apos;||&apos;) per indicare fattori o strutture incrociati.

```jsl

Names Default To Here( 1 );
DOE(
	MSA Design,
	Add Factor( Categorical, {"L1", "L2"}, "X1", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1, 1 ) ),
	Nesting Structure( {"X1", {"X2"}} || "X3" )
);

```

### Number of Column Starts

**Sintassi:** obj << Number of Column Starts

**Descrizione:** Specifica il numero di volte in cui le colonne casuali sono ottimizzate per ciascun fattore di un piano di screening degli effetti principali.

```jsl

Names Default To Here( 1 );
DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Screening Type( 1 ),
	Number of Column Starts( 100 ),
	Set Sample Size( 12 ),
	Make Design
);

```

### Number of Extra Runs

**Sintassi:** obj << Number of Extra Runs

**Descrizione:** Specifica il numero di esecuzioni aggiuntive da includere in un piano di screening definitivo.

```jsl

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Number of Starts

**Sintassi:** obj << Number of Starts

**Descrizione:** Specifica il numero di volte in cui il piano viene rigenerato per ottimizzare il piano generale.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Number of Starts( 1000 ),
	Make Design
);

```

### Optimality Criterion

**Sintassi:** obj << Optimality Criterion( "Consigliato"|"Costruisci piano D-ottimale"|"Costruisci piano I-ottimale"|"Costruisci piano A-ottimale"|"Costruisci piano alias-ottimale" )

**Descrizione:** Specifica il criterio utilizzato nel piano. Si consiglia il valore predefinito.

**Esempio 1**

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( "Make I-optimal Design" ),
	Make Design
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Optimality Criterion( 2 ),
	Make Design
);

```

### Order Column

**Sintassi:** obj << Order Column

**Descrizione:** Richiede una colonna Ordine quando viene creata la tabella di dati.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;
d << OrderColumn( 1 );

```

### Prior Parameter Variance

**Sintassi:** obj << Prior Parameter Variance

**Descrizione:** Utilizzare questa opzione per controllare il peso utilizzato per i termini Se possibile in un modello. I valori più elevati significano maggiori informazioni a priori e una varianza inferiore. Le varianze sono i reciproci dei valori inseriti.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Potential Term( {1, 1} ),
	Add Potential Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Prior Parameter Variance( [0, 1, 2, 6] ),
	Make Design
);

```

### Prior Specification Choice

**Sintassi:** obj << Prior Specification Choice

**Descrizione:** Imposta l&apos;opzione per specificare i parametri a priori, dove 1 indica Specifica intercetta e 2 indica Specifica quantile.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 1 ), Set Prior Mean ALT( [-40 1.5 2] ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Reference Design

**Sintassi:** obj << Reference Design

**Descrizione:** Specifica il piano di riferimento per il confronto tra piani.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 12 ),
	Make Design,
	Make Table
);
DOE( Custom Design, Add Factor, Add Factor, Add Factor, Make Design, Make Table );
DOE(
	Custom Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Set Sample Size( 4 ),
	Make Design,
	Make Table
);
DOE(
	Compare Designs,
	Reference Design( "Custom Design", X( :X1, :X2, :X3 ) ),
	Additional Designs(
		"Custom Design 2",
		X( :X1, :X2, :X3 ),
		"Custom Design 3",
		X( :X1, :X2, :X3 )
	)
);

```

### Remove Alias Term

**Sintassi:** obj << Remove Alias Term

**Descrizione:** Rimuove un termine dall&apos;elenco di termini alias. Specifica il numero e potenza dei fattori per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Alias Term( {1, 1}, {3, 1} );

```

### Remove All Alias Terms

**Sintassi:** obj << Remove All Alias Terms

**Descrizione:** Rimuove tutti i termini alias dall&apos;elenco dei termini alias

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Remove All Alias Terms;

```

### Remove Term

**Sintassi:** obj << Remove Term

**Descrizione:** Rimuove un termine dall&apos;elenco di termini del modello. Specifica il numero e potenza dei fattori per ciascun effetto in un elenco. Crea interazioni separando gli effetti con virgole.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Remove Term( {1, 1}, {3, 1} );
d << Remove Term( {3, 2} );

```

### Replicates

**Sintassi:** obj << Replicates

**Descrizione:** Specifica il numero di esecuzioni replicate. Per i piani MSA, un secondo argomento specifica la struttura della replica: 0=Completamente randomizzata, 1=Ripetizione batch, 2=Ripetizione veloce.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Make Model( Linear );
d << Replicates( 2 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = DOE(
	MSA Design,
	{Add Response( None, "Y", ., ., . ), Add Factor(
		Categorical,
		{"L1", "L2"},
		"X1",
		MSA( 4, 1 )
	), Add Factor( Categorical, {"L1", "L2"}, "X2", MSA( 4, 1 ) ),
	Add Factor( Categorical, {"L1", "L2"}, "X3", MSA( 4, 1 ) ), Set Random Seed( 3983347 ),
	Replicates( 2, 0 ), Simulate Responses( 0 )}
);

```

### Report

**Sintassi:** obj << Report

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design );
r = d << report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Constraints

**Sintassi:** obj << Save Constraints

**Descrizione:** Salva i vincoli dei fattori dell&apos;esperimento corrente in una tabella JMP, in modo da poterli utilizzare per un altro esperimento

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Add Constraint( [1 1 0 1, 1 0 1 1] ),
	Add Term( {1, 0} ),
	Save Constraints
);

```

### Save Factors

**Sintassi:** obj << Save Factors

**Descrizione:** Salva i fattori appena creati in una tabella JMP, in modo da poterli utilizzare per un altro esperimento.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Factors
);

```

### Save Responses

**Sintassi:** obj << Save Responses

**Descrizione:** Salva le risposte create dall&apos;utente come tabella di dati JMP. È possibile caricare queste risposte in altri esperimenti.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Response( Match Target, "Stretch", 350, 550, 1 ),
	Add Factor( Continuous, 0.7, 1.7, "Silica", 0 ),
	Add Factor( Continuous, 1.8, 2.8, "Sulfur", 0 ),
	Add Factor( Continuous, 40, 60, "Silane", 0 ),
	Save Responses
);

```

### Save Script to Data Table

**Sintassi:** obj << Save Script to Data Table

**Descrizione:** Crea uno script che riprodurrà questo piano.

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script che riprodurrà questo piano.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Save Script to Script Window
);

```

### Save X Matrix

**Sintassi:** obj << Save X Matrix( state=0|1 )

**Descrizione:** Salva la matrice del piano (denominata anche matrice X) come proprietà di una tabella nella tabella di dati di JMP che contiene il piano.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Save X Matrix,
	Make Design,
	Make Table
);

```

### Screening Type

**Sintassi:** obj << Screening Type

**Descrizione:** Specifica un piano di screening degli effetti principali che è ortogonale o quasi ortogonale.

```jsl

Names Default To Here( 1 );
d = DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Screening Type( 1 );
d << Set Sample Size( 12 );
d << Make Design;

```

### Select Covariate Rows

**Sintassi:** obj << Select Covariate Rows

**Descrizione:** Specifica le righe della tabella covariata da selezionare in DOE.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
DOE(
	Custom Design,
	Add Response( Maximize, "Y", ., ., . ),
	Add Factor( Covariate, :sex, 0 ),
	Add Factor( Covariate, :height, 0 ),
	Add Factor( Covariate, :weight, 0 ),
	Add Term( {1, 0} ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Enforce Use of Selected Covariate Rows( 1 ),
	Allow covariate rows to be repeated( 1 ),
	Select Covariate Rows( [1 2 3 4] ),
	Set Sample Size( 24 )
);

```

### Set ALT Probability of Interest

**Sintassi:** obj << Set ALT Probability of Interest

**Descrizione:** Imposta la probabilità osservata per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set ALT Time Range

**Sintassi:** obj << Set ALT Time Range

**Descrizione:** Imposta il range di tempo osservato per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Failure Probability Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Average Cluster Size

**Sintassi:** obj << Set Average Cluster Size

**Descrizione:** Controlla il numero dei punti casuali per la clusterizzazione di un piano a spazio pieno rapido e flessibile.

```jsl

Names Default To Here( 1 );
DOE(
	Space Filling Design,
	Change Factor Settings( 1, -1, 1, "X1" ),
	Change Factor Settings( 2, -1, 1, "X2" ),
	Set Average Cluster Size( 100 ),
	Space Filling Design Type( Fast Flexible Filling, 50 )
);

```

### Set Axial Choice

**Sintassi:** obj << Set Axial Choice( 1|2|3|4 )

**Descrizione:** Specifica le impostazioni del valore assiale. Utilizza 1 per Ruotabile, 2 per Ortogonale, 3 per Sulla faccia e 4 per Specificato dall&apos;utente.

```jsl

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Choice( 2 );

```

### Set Axial Value

**Sintassi:** obj << Set Axial Value

**Descrizione:** Specifica il valore assiale specificato dall&apos;utente.

```jsl

Names Default To Here( 1 );
d = DOE( Response Surface Design, Make Design( 2 ) );
d << Set Axial Value( 2 );

```

### Set Candidate Runs

**Sintassi:** obj << Set Candidate Runs

**Descrizione:** Imposta le esecuzioni candidate per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Delta For Power

**Sintassi:** obj << Set Delta For Power

**Descrizione:** Specifica i valori dei coefficienti previsti nell&apos;analisi di potenza. I coefficienti previsti saranno la metà del valore specificato.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Delta For Power( 3 ),
	Make Design
);

```

### Set Expected Number of Respondents

**Sintassi:** obj << Set Expected Number of Respondents

**Descrizione:** Imposta il numero previsto di rispondenti per indagine.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Generators

**Sintassi:** obj << Set Generators

**Descrizione:** Specifica i generatori da usare in un piano di screening.

```jsl

Names Default To Here( 1 );
DOE(
	Screening Design,
	{Add Factor, Add Factor, Add Factor, Make Design( 1 ), Set Generators( [1, 1, 0] )}
);

```

### Set Inspection Times

**Sintassi:** obj << Set Inspection Times

**Descrizione:** Imposta i tempi di ispezione per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Length of Test

**Sintassi:** obj << Set Length of Test

**Descrizione:** Imposta la lunghezza del test per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Level Values

**Sintassi:** obj << Set Level Values

**Descrizione:** Imposta i valori del livello per i(l) fattore(i) di accelerazione in un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Monitoring at Intervals", {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Set Monitoring Choice

**Sintassi:** obj << Set Monitoring Choice

**Descrizione:** Specifica il tipo di monitoraggio di un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set N Subplots

**Sintassi:** obj << Set N Subplots

**Descrizione:** Specifica il numero di diagrammi secondari quando sono presenti sia fattori difficili sia molto difficili da modificare.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 )
);
d << Set N Whole Plots( 4 );
d << Set N Subplots( 8 );

```

### Set N Whole Plots

**Sintassi:** obj << Set N Whole Plots

**Descrizione:** Specifica il numero di diagrammi completi quando sono presenti fattori difficili da modificare o molto difficili da modificare.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 )
);
d << Set N Whole Plots( 6 );

```

### Set Number of Attributes

**Sintassi:** obj << Set Number of Attributes

**Descrizione:** Imposta il numero di attributi che può cambiare in un set di scelte.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Choice Sets

**Sintassi:** obj << Set Number of Choice Sets

**Descrizione:** Imposta il numero di set di scelte per indagine.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of FDS points

**Sintassi:** obj << Set Number of FDS points

**Descrizione:** Imposta il numero di punti usato per generare il diagramma della relazione tra frazione dello spazio sperimentale e varianza prevista.

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	{Add Factor( Continuous, -1, 1, "X1", 0 ), Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Sample Size( 7 ), Design Search Time( 8 ), Set Number of FDS points( 20000 ),
	Make Design}
);

```

### Set Number of Profiles

**Sintassi:** obj << Set Number of Profiles

**Descrizione:** Imposta il numero di profili per set di scelte.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Surveys

**Sintassi:** obj << Set Number of Surveys

**Descrizione:** Imposta il numero di indagini per un piano di scelta.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Number of Units

**Sintassi:** obj << Set Number of Units

**Descrizione:** Imposta il numero di unità nell&apos;esperimento per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Correlation ALT

**Sintassi:** obj << Set Prior Correlation ALT

**Descrizione:** Imposta le correlazioni a priori per un piano di test di durata accelerato.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean ALT

**Sintassi:** obj << Set Prior Mean ALT

**Descrizione:** Imposta la media a priori per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Mean Choice

**Sintassi:** obj << Set Prior Mean Choice

**Descrizione:** Imposta la media a priori per un piano di scelta.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set Prior Quantile ALT

**Sintassi:** obj << Set Prior Quantile ALT

**Descrizione:** Imposta le informazioni per specificare l&apos;intercetta a priori basata su un quantile.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Prior Specification Choice( 2 ), Set Prior Quantile ALT( {[1.5 2], 0.065, 2642, 45} ),
	Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Std Error ALT

**Sintassi:** obj << Set Prior Std Error ALT

**Descrizione:** Imposta l&apos;errore standard a priori per un piano di test di durata accelerato.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Number of Units( 150 )}
);

```

### Set Prior Variance ALT

**Sintassi:** obj << Set Prior Variance ALT

**Descrizione:** Imposta la varianza a priori per un piano di test accelerato di durata.

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( "Continuous Monitoring" ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Variance ALT( [0.1 0 0, 0 0.1 0, 0 0 0.1] ),
	Use Prior Uncertainty( 1 ), Set ALT Time Range( 10000, 20000 ),
	Set ALT Probability of Interest( 0.1 ), Set Length of Test( 1000 ),
	Set Number of Units( 150 )}
);

```

### Set Prior Variance Matrix

**Sintassi:** obj << Set Prior Variance Matrix

**Descrizione:** Imposta la matrice di varianza a priori per un piano di scelta.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 )}
);

```

### Set RMSE

**Sintassi:** obj << Set RMSE

**Descrizione:** Specifica lo scarto quadratico medio (RMSE) previsto nell&apos;analisi di potenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set RMSE( 1.5 );

```

### Set Random Seed

**Sintassi:** obj << Set Random Seed

**Descrizione:** Utile a fini didattici. Se si imposta il seme casuale su un valore specifico, tutti gli studenti avranno il medesimo piano.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set Random Seed( 34067086 ),
	Make Design
);

```

### Set Run Order

**Sintassi:** obj << Set Run Order

**Descrizione:** Specifica le modalità di impostazione dell&apos;ordine delle esecuzioni quando si crea una tabella di dati da un piano.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Design;
d << Set Run Order( Sort Left to Right );
d << Make Table;

```

### Set Runs Per Random Block

**Sintassi:** obj << Set Runs Per Random Block

**Descrizione:** Specifica la dimensione dei blocchi casuali nel piano.

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Model( Linear )
);
d << Set Runs Per Random Block( 4 );

```

### Set Sample Size

**Sintassi:** obj << Set Sample Size

**Descrizione:** Specifica la dimensione campionaria prima della creazione del piano. Se il numero specificato è inferiore al valore minimo mostrato nel designer, la dimensione campionaria è impostata al valore minimo.

```jsl

Names Default To Here( 1 );
d = DOE( Custom Design, Add factor, Add factor, Add factor );
d << Make Model( Linear );
d << Set Sample Size( 12 );

```

### Set Significance Level

**Sintassi:** obj << Set Significance Level

**Descrizione:** Cambia il livello di significatività nell&apos;analisi di potenza.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
d = DOE( Evaluate Design, X( :Silica, :Sulfur, :Silane ), Y( :Stretch ) );
d << Set Significance Level( 0.10 );

```

### Set Strength

**Sintassi:** obj << Set Strength

**Descrizione:** Imposta la forza degli array di copertura

```jsl

Names Default To Here( 1 );
d = DOE(
	Covering Array,
	Add factor( Categorical ),
	Add factor( Categorical ),
	Add factor( Categorical )
);
d << Set Strength( 3 );
d << Make Table;

```

### Show Blocking Options

**Sintassi:** obj << Show Blocking Options

**Descrizione:** Specifica la scelta di creazione di blocchi e il numero di blocchi per un piano di screening definitivo. Un valore pari a 0 indica nessun blocco.

**Esempio 1**

```jsl

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 0, 0 ),
	Number of Extra Runs( 4 )
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
DOE(
	Definitive Screening Design,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Add Factor,
	Show Blocking Options( 1, 2 ),
	Number of Extra Runs( 4 )
);

```

### Simulate Responses

**Sintassi:** obj << Simulate Responses( state=0|1 )

**Descrizione:** Aggiunge i dati delle risposte alla tabella dei piani JMP. Utile a fini didattici, per l&apos;insegnamento di DOE.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Simulate Responses,
	Make Table
);

```

### Solve for Power

**Sintassi:** obj << Solve for Power

**Descrizione:** Imposta i coefficienti anticipati nell&apos;analisi di potenza in modo che la potenza si avvicini al valore specificato.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Solve for Power( 0.8 )
);

```

### Space Filling Design Type

**Sintassi:** obj << Space Filling Design Type( Sphere Packing|Latin Hypercube|Uniform|Minimum Potential|Maximum Entropy|IMSE Optimal|Fast Flexible Filling )

**Descrizione:** Specifica il tipo di piano a spazio pieno e il numero di esecuzioni.

**Esempio 1**

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Sphere Packing, 30 );

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Latin Hypercube, 100 );

```

**Esempio 3**

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Uniform, 20 );

```

**Esempio 4**

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design );
d << Space Filling Design Type( Fast Flexible Filling, 100 );

```

**Esempio 5**

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );
d << Make Design;

```

### Sphere Radius

**Sintassi:** obj << Sphere Radius

**Descrizione:** Specifica una regione sferica del piano e permette di definirne il raggio.

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Sphere Radius( 1 ),
	Make Design
);

```

### Split Plot Variance Ratio

**Sintassi:** obj << Split Plot Variance Ratio( Whole Plot Ratio | [Whole Plot Ratio, Subplot Ratio] )

**Descrizione:** Per i fattori difficili da modificare, specifica il rapporto di varianza tra l&apos;errore del diagramma completo e l&apos;errore esecuzione per esecuzione. Per i fattori difficili e molto difficili da modificare, specifica il rapporto tra il diagramma completo e l&apos;errore del diagramma secondario e l&apos;errore esecuzione per esecuzione.

**Esempio 1**

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 1 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Set N Whole Plots( 4 ),
	Split Plot Variance Ratio( 2 ),
	Make Design
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
d = DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 2 ),
	Add Factor( Continuous, -1, 1, "X2", 1 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Set N Whole Plots( 4 )
);
d << Split Plot Variance Ratio( [3, 2] );
d << Make Design;

```

### Suppress Cotter Designs

**Sintassi:** obj << Suppress Cotter Designs( state=0|1 )

**Descrizione:** Mostra/Nasconde piani di Cotter nell&apos;elenco di piani di screening. Questa opzione è selezionata per impostazione predefinita e significa che i piani di Cotter non sono inizialmente presenti nell&apos;elenco dei piani di screening. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

Names Default To Here( 1 );
DOE(
	Screening Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Factor( Continuous, -1, 1, "X3", 0 ),
	Suppress Cotter Designs,
	Make Design( 5 )
);

```

### Table of Correlations

**Sintassi:** obj << Table of Correlations

**Descrizione:** Crea una tabella di dati con la Tabella di correlazioni da Diagnostiche del piano.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Make Design,
	Table of Correlations
);

```

### Theta

**Sintassi:** obj << Theta

**Descrizione:** Specifica il vettore del parametro di covarianza per piani a spazio pieno.

```jsl

Names Default To Here( 1 );
d = DOE( Space Filling Design, Space Filling Design Type( IMSE Optimal, 20 ) );
d << Theta( [2, 3] );

```

### Treatments

**Sintassi:** obj << Treatments

**Descrizione:** Specifica il numero di trattamenti per un piano con blocco incompleto bilanciato (BIBD).

**JMP Versione aggiunta:** 14

```jsl

Names Default To Here( 1 );
d = DOE( Balanced Incomplete Block Design );
d << Treatments( 3, {"L1", "L2", "L3"} );
d << Make Design;

```

### Use Bayesian information

**Sintassi:** obj << Use Bayesian information( state=0|1 )

**Descrizione:** Usa informazioni a priori nell&apos;impostazione bayesiana per le diagnostiche del piano.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
DOE(
	Custom Design,
	Add Factor( Continuous, -1, 1, "X1", 0 ),
	Add Factor( Continuous, -1, 1, "X2", 0 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Potential Term( {1, 1}, {2, 1} ),
	Number of Starts( 10 ),
	Make Design,
	Use Bayesian Information( 1 )
);

```

### Use Blue to Red color theme for color map

**Sintassi:** obj << Use Blue to Red color theme for color map( state=0|1 )

**Descrizione:** Utilizza il tema dei colori da blu a rosso per la mappa a colori sulle correlazioni.

**JMP Versione aggiunta:** 15

### Use Prior Uncertainty

**Sintassi:** obj << Use Prior Uncertainty( state=0|1 )

**Descrizione:** Specifica se l&apos;incertezza a priori deve essere utilizzata per costruire il piano ottimale.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
DOE(
	Accelerated Life Test Plan,
	{ALT Plan Setup( 1 ), Set Monitoring Choice( 2, {5, 200, 200} ),
	ALT Optimality Criterion( "Make Quantile Estimate Optimal" ),
	ALT Factor Settings( 1, {"X1", 3, 1, 20, 30, 90, 110} ),
	Set Level Values( 1, [90 100 110] ), Distribution Choice( LogNormal ),
	Set Prior Mean ALT( [-40 1.5 2] ), Set Prior Std Error ALT( [10, 0.2, 0.5] ),
	Set Prior Correlation ALT( [1 -0.99 0, -0.99 1 0, 0 0 1] ), Use Prior Uncertainty( 1 ),
	Set ALT Time Range( 10000, 20000 ), Set ALT Probability of Interest( 0.1 ),
	Set Length of Test( 1000 ), Set Inspection Times( [200 400 600 800 1000] ),
	Set Number of Units( 150 ), Set Candidate Runs( [90 0 150, 100 0 150, 110 0 150] )}
);

```

### Utility Neutral Design

**Sintassi:** obj << Utility Neutral Design( state=0|1 )

**Descrizione:** Specifica se deve essere creato il piano di scelta neutro delle utilità.

```jsl

Names Default To Here( 1 );
DOE(
	Choice Design,
	{Add Factor( Categorical, {"L1", "L2"}, "X1", 0 ),
	Add Factor( Categorical, {"L1", "L2"}, "X2", 0 ), Set Random Seed( 1245253625 ),
	Add Term( {1, 1} ), Add Term( {2, 1} ), Set Prior Mean Choice( [0 0] ),
	Set Prior Variance Matrix( [1 0, 0 1] ), Set Number of Attributes( 2 ),
	Set Number of Profiles( 2 ), Set Number of Choice Sets( 8 ), Set Number of Surveys( 1 ),
	Set Expected Number of Respondents( 1 ), Utility Neutral Design( 1 )}
);

```

