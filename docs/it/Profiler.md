# Profiler



## Design Space Profiler

### Connect Hide Mode

**Sintassi:** obj << Connect Hide Mode( state=0|1 )

**Descrizione:** Per la tabella connessa, invece di selezionare i punti che rientrano nei limiti, questa opzione nasconde i punti che non rientrano nei limiti.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Connect Hide Mode( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Connect to Table

**Sintassi:** obj << Connect to Table( data table )

**Descrizione:** Collega il report Profiler dello spazio del piano alla tabella di dati specificata. Le righe che contengono fattori entro i limiti inferiore e superiore correnti sono selezionate nella tabella collegata.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj << Output Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Connect to Table( dt2 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Design Space Profiler

**Sintassi:** Design Space Profiler

**Descrizione:** Avvia il Profiler dello spazio del piano che aiuta a mappare i limiti di specifica delle variabili Y rispetto ai limiti di specifica delle variabili X.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );

```

### Get Midpoints from Profiler

**Sintassi:** obj << Get Midpoints from Profiler( fraction )

**Descrizione:** Ottiene le impostazioni correnti dei fattori dal Profiler di previsione e imposta i punti medi per ciascun fattore nel Profiler dello spazio del piano a tali valori. I limiti sono costruiti intorno a ciascun valore del punto medio utilizzando una frazione specificata del range dei fattori.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Get Midpoints from Profiler( 0.5 );

```

### Lock

**Sintassi:** obj << Lock( Lock(colume name(lock_value),...) )

**Descrizione:** Locks the continuous factor at the specified value. This lock is temporary.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Lock( Ethanol( 5 ) );

```

### Make and Connect Random Table

**Sintassi:** obj << Make and Connect Random Table( number, <Add Random Noise( state=0|1 )>, <Embed Factor Space Scatterplots>, <Embed Response Space Scatterplots> )

**Descrizione:** Crea una nuova tabella di dati che contiene impostazioni dei fattori distribuite uniformemente e le corrispondenti risposte simulate. Sono disponibili opzioni per specificare come vengono simulate le risposte e se incorporare grafici a dispersione di risposte e fattori nel report. La selezione di righe nella tabella di dati è collegata ai profiler nel report.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj2 << Make and Connect Random Table(
	10000,
	Add Random Noise( 1 ),
	Embed Factor Space Scatterplots
);
Wait( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Move Corner Inward

**Sintassi:** obj << Move Corner Inward

### Move Corner Outward

**Sintassi:** obj << Move Corner Outward

### Move Inward

**Sintassi:** obj << Move Inward( <number=1> )

**Descrizione:** Trova il limite di specifica con il percorso più ripido verso l&apos;alto e sposta quel limite di specifica verso l&apos;interno. Usare l&apos;argomento facoltativo number per specificare quante volte viene eseguito questo processo.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Move Inward( 4 );
Wait( 2 );
obj2 << Move Outward;

```

### Move Outward

**Sintassi:** obj << Move Outward( <number=1> )

**Descrizione:** Trova il limite di specifica con il percorso meno ripido verso il basso e sposta tale limite di specifica verso l&apos;esterno. Usare l&apos;argomento facoltativo number per specificare quante volte viene eseguito questo processo.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Move Outward( 2 );
Wait( 2 );
obj2 << Move Outward;

```

### Reset Factor Space

**Sintassi:** obj << Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**Descrizione:** Modifica lo spazio dei fattori per restringere, ampliare o spostare il range di uno o più fattori. Se gli intervalli dei limiti sono troppo ristretti, ciò può causare un volume dei limiti ridotto e creare stime imprecise basate sulla simulazione.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
Wait( 1 );
obj2 << Reset Factor Space(
	Butanol( -0.275, 11 ),
	Ethanol( -0.25, 10.25 ),
	Methanol( -0.25, 10.25 ),
	Propanol( -0.25, 10.25 ),
	Time( 0.95, 3 )
);

```

### Save Simulation Table

**Sintassi:** obj << Save Simulation Table( state=0|1 )

### Save X Spec Limits

**Sintassi:** obj << Save X Spec Limits

**Descrizione:** Salva i limiti delle specifiche X correnti come proprietà della colonna.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Save X Spec Limits;

```

### Send Limits to Profiler as Constraints

**Sintassi:** obj << Send Limits to Profiler as Constraints

**Descrizione:** Invia i limiti X correnti al profiler come vincoli di limite.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Profiler as Constraints;

```

### Send Limits to Simulator

**Sintassi:** obj << Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**Descrizione:** Invia i limiti X correnti al simulatore come parametri di una distribuzione specificata. Invia anche i valori della deviazione standard dell’errore per ogni risposta come deviazione standard per il disturbo casuale aggiunto.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

### Send Midpoints to Profiler

**Sintassi:** obj << Send Midpoints to Profiler

**Descrizione:** Invia al profiler i punti medi per i limiti X correnti.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Midpoints to Profiler;

```

### Set Limits

**Sintassi:** obj << Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**Descrizione:** Imposta i limiti del fattore utilizzando uno script.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

### Show Corners

**Sintassi:** obj << Show Corners( state=0|1 )

**Descrizione:** Mostra o nasconde il report Angoli. Questo report contiene una tabella delle probabilità entro specifica calcolate agli estremi dello spazio dei fattori. Le probabilità sono calcolate utilizzando una distribuzione normale centrata sui valori previsti e tagliata ai limiti di specifica.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Corners;

```

### Show Current Profiler Values

**Sintassi:** obj << Show Current Profiler Values( state=0|1 )

**Descrizione:** Mostra il valore corrente del profiler come linea verticale grigia con punti distanziati.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Current Profiler Values( 1 );

```

### Show Impact Ratios

**Sintassi:** obj << Show Impact Ratios( state=0|1 )

**Descrizione:** Shows or hides the impact ratios. These ratios show how sensitive changes in each factor, from midpoint to each limit, affect how far the predictions are from their specification limits.

```js

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Impact Ratios;

```

### Show Portion for Each Response

**Sintassi:** obj << Show Portion for Each Response( state=0|1 )

**Descrizione:** Aggiunge una colonna che contiene la porzione in specifica per ciascuna risposta ai limiti X correnti.

```js

Names Default To Here( 1 );

Names Default To Here( 1 );
Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} )
);
New Column( "Pred Formula Impurities",
	Numeric,
	Continuous,
	Formula(
		0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} )
);
obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Portion for Each Response( 1 );
obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

## Simulator

### Automatic Histogram Update

**Sintassi:** simuobj << Automatic Historgram Update( state=0|1 )

**Descrizione:** Aggiorna l&apos;istogramma con nuovi valori simulati quando le distribuzioni dei fattori vengono modificate.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Simulate
);
simobj = obj << Get Simulator;
simobj << Automatic Histogram Update( 1 );
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Defect Parametric Profile

**Sintassi:** simobj << Defect Parametric Profile( state=0|1 )

**Descrizione:** Rappresenta il tasso medio di difetti in base ai parametri di distribuzione. Questa opzione è disponibile solo dopo avere selezionato il Profiler dei difetti.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

simobj = obj << Get Simulator;
simobj << Defect Parametric Profile( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Defect Parametric Profile( 1 ),
		Simulate
	)
);

```

### Defect Profiler

**Sintassi:** simobj << Defect Profiler( state=0|1 )

**Descrizione:** Mostra il tasso di difetti come funzione isolata di ogni fattore. Questa opzione è disponibile solo se sono stati definiti dei limiti di specifica.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Simulate
	)
);
simobj = obj << Get Simulator;
simobj << Defect Profiler( 1 );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

```

### N Runs

**Sintassi:** obj << Simulator( N Runs(number=1000) )

**Descrizione:** Imposta il numero di esecuzioni per la simulazione. "10000", per impostazione predefinita.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( N Runs( 2500 ), Simulate );

```

### Resimulate

**Sintassi:** simobj << Resimulate

**Descrizione:** Riavvia la simulazione. Questa opzione è utile dopo che sono state apportate delle modifiche alle distribuzioni dei fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
simobj = obj << Get Simulator;
simobj << Resimulate;

```

### Set Random Seed

**Sintassi:** obj << Simulator( Set Random Seed( number ) )

**Descrizione:** Imposta il seme casuale su un valore specifico; in questo modo tutte le esecuzioni successive che utilizzano lo stesso seme saranno riproducibili.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

### Simulate to table

**Sintassi:** simobj << Simulate To Table(N Runs(n),factorName<<Sequence Location(low,high,nSteps),factorName2<<Sequence Spread(low,high,nSteps),factorName3<<Not Sequenced)

**Descrizione:** Crea una tabella di risultati della simulazione, in sequenza su medie o distribuzioni diverse

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
simobj = obj << Get Simulator;
simobj << Simulate to table(
	N Runs( 20 ),
	SILICA << Sequence Location( .5, 2, 4 ),
	SILANE << Sequence Location( 35, 65, 4 ),
	SULFUR << Sequence Location( 1.5, 3, 4 )
);

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
obj << Simulator(
	Simulate to table(
		N Runs( 20 ),
		SILICA << Sequence Location( .5, 2, 4 ),
		SILANE << Sequence Location( 35, 65, 4 ),
		SULFUR << Sequence Location( 1.5, 3, 4 )
	)
);

```

### Simulation Experiment

**Sintassi:** simobj << Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),<Run>,<Selected Factors(factor1,..)> )

**Descrizione:** Esegue un esperimento di simulazione pianificato basato sulle posizioni delle distribuzioni di fattori entro il modello.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
simobj = obj << Get Simulator;
simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
obj << Simulator( Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run ) );

```

### Simulator

**Sintassi:** obj << Simulator( state=0|1, <Factors( column << Random( )|Fixed( constant )| Expression( )| Multivariate( ) )>, <Responses( column << No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )>

**Descrizione:** Avvia il simulatore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);

```

### X Correlations

**Sintassi:** obj << Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**Descrizione:** Imposta le correlazioni sui fattori X quando l&apos;impostazione di simulazione per i fattori è impostata a Multivariata.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),
	Simulate
);

```

### Y Correlations

**Sintassi:** obj << Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**Descrizione:** Imposta le correlazioni sulle risposte Y quando il disturbo multivariato viene aggiunto alle risposte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << Add Multivariate Noise( 1 ),
		Pred Formula MODULUS << No Noise, Pred Formula ELONG << Add Multivariate Noise( 1 ),
		Pred Formula HARDNESS << No Noise
	),
	Y Correlations(
		1,
		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG,
		Pred Formula HARDNESS},
		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]
	),
	Simulate
);

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

### Adapt Y Axis

**Sintassi:** obj << Adapt Y Axis( state=0|1 )

**Descrizione:** Ridimensiona l&apos;asse verticale se la risposta è fuori dal range dell&apos;asse, in modo da includere il range della risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize Desirability;
Wait( 1 );
obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**Sintassi:** obj << Add Shapley graph scripts to data table( state=0|1 )

**Descrizione:** Aggiunge gli script del grafico a barre JSL Graph Builder dei valori di Shapley per righe per ogni risposta nel modello.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Add Shapley graph scripts to data table( 1 ),
	Save Shapley Values
));

```

### Animation

**Sintassi:** obj << Animation( <Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )>, <Speed(ticks)>, <Go>, <Stop> )

**Descrizione:** Avvia o arresta l&apos;animazione del profiler. Si può anche specificare il modo in cui l&apos;animazione scorre tra le combinazioni di fattori.

**JMP Versione aggiunta:** 16

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
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**Sintassi:** obj << Append Settings to Table

**Descrizione:** Salva le impostazioni del profiler corrente come una nuova riga alla fine della tabella di dati.

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
obj << Append Settings to Table;

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

### Arrange in Rows

**Sintassi:** obj << Arrange in Rows( number )

**Descrizione:** Specifica il numero di diagrammi che compaiono in una riga.

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
Wait( 2 );
obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**Sintassi:** obj << Broadcast Factor Settings

**Descrizione:** Invia le impostazioni del fattore per il profiler corrente a tutti gli altri profiler. Questa opzione non collega i profiler.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Colorize

**Sintassi:** obj << Colorize( matrix )

**Descrizione:** Specifica una matrice di proporzioni tra 0 per senza colore e 1 per il rosso scuro. le righe e le colonne della matrice corrispondono alle variabili Y e X nel profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**Sintassi:** subobj << Colorize Profiler

**Descrizione:** Colora le celle nel profiler in base agli indici di importanza totale dell&apos;effetto usando una scala di intensità dal rosso al bianco.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Colorize Profiler;

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

### Combinations

**Sintassi:** obj << Combinations( "Misto"|"A due vie"|"A più vie" )

**Descrizione:** Specifica i tipi di interazioni che vengono mostrati come curve di interazione sovrapposte nel profiler.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**Sintassi:** obj << Compute Shapley values for all rows( state=0|1 )

**Descrizione:** Calcola i valori di Shapley per tutte le righe della tabella di dati, escluse e non escluse.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Compute Shapley values for all rows( 1 ),
	Save Shapley Values
));

```

### Conditional Predictions

**Sintassi:** obj << Conditional Predictions( state=0|1 )

**Descrizione:** Include gli effetti casuali nella formulazione del valore previsto e dei profili. Questa opzione è disponibile solo nella personalità Stima misti della piattaforma Stima modello quando effetti casuali sono inclusi nel modello.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj1 = dt << Run Script( "Repeated Measures Model" );
obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**Sintassi:** obj << Confidence Intervals( state=0|1 )

**Descrizione:** Mostra o nasconde gli intervalli di confidenza al 95% per le medie simulate sulle curve del grafico del profiler. Disponibile solo se nella finestra di avvio è specificata una formula Errore std.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj1 = dt << Run Script( "RSM for 4 Responses" );
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION,
		:Pred SE MODULUS
	)
);
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Contour Profiler

**Sintassi:** obj << Contour Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler isometrico.

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
obj << Contour Profiler( 1 );

```

### Converge Limit

**Sintassi:** obj << Converge Limit( number )

**Descrizione:** Specifica il criterio di convergenza per l&apos;algoritmo di ottimizzazione. Se il criterio di convergenza è inferiore a questo valore per due iterazioni consecutive, l&apos;algoritmo si interrompe.

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
obj << Converge limit( 0.0001 );
obj << Optimize;

```

### Copy Script

**Sintassi:** obj << Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

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
obj << Copy Script;

```

### Copy Settings Script

**Sintassi:** obj << Copy Settings Script

**Descrizione:** Copia le impostazioni del fattore corrente negli Appunti. Le impostazioni possono poi essere incollate in un altro profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**Sintassi:** obj << Custom Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler personalizzato.

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
obj << Custom Profiler( 1 );

```

### Data Points

**Sintassi:** obj << Data Points( state=0|1 )

**Descrizione:** Mostra o nasconde i singoli punti di dati nel grafico Profiler di previsione. I punti di dati si attenuano in base alla distanza dal piano di ciascun profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Points( 1 );

```

### Data Table Window

**Sintassi:** obj << Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

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
obj << Data Table Window;

```

### Default N Grid Points

**Sintassi:** obj << Default N Grid Points( number )

**Descrizione:** Imposta il numero di livelli per ciascun fattore continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Default N Grid Points( 5 );

```

### Default N Levels

**Sintassi:** obj << Default N Levels( number )

### Dependent Resampled Inputs

**Sintassi:** obj << Dependent Resampled Inputs( state=0|1 )

**Descrizione:** Calcola gli indici utilizzati nell&apos;opzione Valuta importanza della variabile ricampionando la tabella di dati assumendo che gli input siano dipendenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**Sintassi:** obj << Design Space( state=0|1 )

### Design Space Profiler

**Sintassi:** obj << Design Space Profiler( state=0|1 )

**Descrizione:** Avvia il Profiler dello spazio del piano che aiuta a mappare i limiti di specifica delle variabili Y rispetto ai limiti di specifica delle variabili X.

```js

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Tiretread.jmp" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property(
	"Spec Limits",
	{LSL( 350 ), USL( 500 ), Show Limits( 1 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Spec Limits",
	{LSL( 65 ), USL( 75 ), Show Limits( 1 )}
);
dt:Pred Formula ABRASION << Set Property(
	"Predicting",
	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )}
);
dt:Pred Formula MODULUS << Set Property(
	"Predicting",
	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )}
);
dt:Pred Formula ELONG << Set Property(
	"Predicting",
	{:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Predicting",
	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )}
);
Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) )
);

```

### Desirability Functions

**Sintassi:** obj << Desirability Functions( state=0|1 )

**Descrizione:** Mostra o nasconde le funzioni di desiderabilità che sono utili quando si ottimizza su molte risposte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );

```

### Edit Constraints

**Sintassi:** obj << Edit Constraints

**Descrizione:** Aggiunge, modifica o elimina vincoli lineari.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Edit Constraints;

```

### Extrapolation Control Option

**Sintassi:** obj << Extrapolation Control Option( "Disattivato"|"Attivo"|"Avvertimento attivato" )

**Descrizione:** Specifica se il controllo dell&apos;estrapolazione è attivato o disattivato, o se sono attivati solo gli avvertimenti di controllo dell&apos;estrapolazione.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**Sintassi:** obj << Extrapolation Details( state=0|1 )

**Descrizione:** Mostra o nasconde i dettagli del controllo dell&apos;estrapolazione che danno la metrica di estrapolazione del punto corrente e la soglia di estrapolazione.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**Sintassi:** obj << Extrapolation Type Option( "T2 regolarizzato"|"K vicini più prossimi" )

**JMP Versione aggiunta:** 18

### Formulas for OPTMODEL

**Sintassi:** obj << Formulas for OPTMODEL

**Descrizione:** Salva le formule di previsione dal modello in un nuovo file come istruzioni SAS per PROC OPTMODEL.

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
obj << Formulas for OPTMODEL;

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

### Get Constraints

**Sintassi:** obj << Get Constraints

**Descrizione:** Restituisce un elenco di vincoli di fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula Y ),
	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), )
);
obj << Get Constraints;

```

### Get Container

**Sintassi:** obj << Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

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

### Get Data Table

**Sintassi:** obj << Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Desirability

**Sintassi:** obj << Get Desirability

**Descrizione:** Restituisce le impostazioni di desiderabilità correnti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
d = obj << Get Desirability;
Show( d );

```

### Get Factor Settings

**Sintassi:** obj << Get Factor Settings

**Descrizione:** Restituisce le impostazioni correnti dei fattori come elenco.

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
obj << Get Factor Settings;

```

### Get Factor Settings Script

**Sintassi:** obj << Get Factor Settings Script

**Descrizione:** Restituisce le impostazioni correnti del fattore come espressione che può essere usata in uno script.

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
obj << Get Factor Settings Script;

```

### Get Main Indices

**Sintassi:** obj << Get Main Indices

**Descrizione:** Salva gli indici principali dell&apos;analisi Valuta importanza della variabile in un nuovo file come istruzioni SAS per la PROC OPTMODEL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Main Indices;

```

### Get Script

**Sintassi:** obj << Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

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
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj << Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

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
t = obj << Get Script With Data Table;
Show( t );

```

### Get Simulator

**Sintassi:** obj << Get Simulator

**Descrizione:** Restituisce un riferimento al simulatore.

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
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ),
		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Get Timing

**Sintassi:** obj << Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

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
t = obj << Get Timing;
Show( t );

```

### Get Total Indices

**Sintassi:** obj << Get Total Indices

**Descrizione:** Salva gli indici totali dall&apos;analisi Valuta importanza della variabile in un nuovo file come istruzioni SAS per la PROC OPTMODEL.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Total Indices;

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

### Graph Spacing

**Sintassi:** obj << Graph Spacing( number )

**Descrizione:** Imposta la quantità di spazio orizzontale tra i riquadri del grafico.

**JMP Versione aggiunta:** 16

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
Wait( 2 );
obj << Graph Spacing( 20 );

```

### Hide Desirability Row

**Sintassi:** obj << Hide Desirability Row( state=0|1 )

**Descrizione:** Hides or unhides the row of desirability profiles.

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
obj << Desirability Functions( 1 );
Wait( 1 );
obj << Hide Desirability Row( 1 );

```

### Hide Y Variables

**Sintassi:** obj << Hide Y Variables( Y columns )

**Descrizione:** Specifica le variabili di risposta che si desidera mostrare o nascondere nel profiler.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 0.5 );
obj << Hide Y Variables( :Pred Formula MODULUS );

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

### Independent Resampled Inputs

**Sintassi:** obj << Independent Resampled Inputs( state=0|1 )

**Descrizione:** Calcola gli indici utilizzati nell&apos;opzione Valuta importanza della variabile ricampionando la tabella di dati assumendo che gli input siano indipendenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**Sintassi:** obj << Independent Uniform Inputs( state=0|1 )

**Descrizione:** Calcola gli indici utilizzati nell&apos;opzione Valuta importanza della variabile ricampionando la tabella di dati assumendo che gli input abbiano distribuzioni uniformi indipendenti.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**Sintassi:** obj << Interaction Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde un profiler delle interazioni per ciascuna risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Interaction Profiler( 1 );

```

### Linearly Constrained Inputs

**Sintassi:** obj << Linearly Constrained Inputs( state=0|1 )

**Descrizione:** Calcola gli indici utilizzati nell&apos;opzione Valuta importanza della variabile ricampionando la tabella di dati su una distribuzione uniforme definita dai vincoli lineari.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**Sintassi:** obj << Link Profilers( state=0|1 )

**Descrizione:** Collega insieme tutti i profiler in un unico report: se si modifica un fattore in un profiler, la stessa modifica sarà applicata a quel fattore in tutti gli altri profiler.

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
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**Sintassi:** obj << Load Constraints from Table

**Descrizione:** Loads linear constraints from a data table.

```js

Names Default To Here( 1 );

dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Profile at Boundary( "Stop at Boundaries" );

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

### Log Iterations

**Sintassi:** obj << Log Iterations( state=0|1 )

**Descrizione:** Crea una nuova tabella di dati che contiene le iterazioni dell&apos;algoritmo di ottimizzazione.

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
obj << Log Iterations( 1 );
obj << Optimize;

```

### Max Cycles

**Sintassi:** obj << Max Cycles( number )

**Descrizione:** Specifica il numero massimo di cicli all&apos;interno di ciascuna esecuzione nell&apos;algoritmo di ottimizzazione.

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
obj << Max Cycles( 5 );
obj << Optimize;

```

### MaxIter

**Sintassi:** obj << MaxIter( number )

**Descrizione:** Specifica il numero massimo di iterazioni all&apos;interno di ciascuna esecuzione nell&apos;algoritmo di ottimizzazione.

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
obj << MaxIter( 10 );
obj << Optimize;

```

### Maximize Desirability

**Sintassi:** obj << Maximize Desirability

**Descrizione:** Imposta i valori correnti dei fattori per massimizzare le funzioni di desiderabilità.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Maximize Desirability;

```

### Maximize and Remember

**Sintassi:** obj << Maximize and Remember

**Descrizione:** Massimizza le funzioni di desiderabilità e ricorda le impostazioni associate.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**Sintassi:** obj << Maximize for Each Grid Point

**Descrizione:** Massimizza le funzioni di desiderabilità per ciascun punto della griglia che contenga uno o più fattori costanti. Questa opzione richiede il blocco di almeno un fattore.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**Sintassi:** obj << Maximum Number of Curves( number=500 )

**Descrizione:** Specifica il numero massimo di curve da mostrare quando si seleziona l&apos;opzione Interazioni sovrapposte. Se il numero totale possibile di curve è superiore al numero massimo di curve specificato, viene tracciato un campione arbitrario. "500", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Maximum Number of Curves( 100 );

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

### Noise Factors

**Sintassi:** obj = Profiler(...<Noise Factors( column(s) )>...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica i fattori di disturbo, che devono essere colonne che costituiscono ingredienti delle colonne della formula. I fattori di disturbo sono usati per studiare la robustezza (o linearità) rispetto alla variazione trasmessa da questi fattori. Il profiler risultante include le derivate delle formule rispetto ai fattori di disturbo.

**Esempio di profiler**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Esempio di profiler della miscela**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Esempio di profiler isometrico**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Esempio di profiler personalizzato**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

### Optimization Control Panel

**Sintassi:** obj << Optimization Control Panel( state=0|1 )

### Output Grid Table

**Sintassi:** obj << Output Grid Table

**Descrizione:** Crea una nuova tabella di dati che contiene colonne per i fattori contenenti valori di griglia, colonne per ciascuna delle risposte con valori calcolati per ciascun punto della griglia e il calcolo della desiderabilità per ciascun punto della griglia.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Grid Table;

```

### Output Random Table

**Sintassi:** obj << Output Random Table( number of runs,<Add Random Noise> )

**Descrizione:** Crea una nuova tabella di dati con impostazioni di fattori casuali e valori previsti su tali impostazioni dei fattori per il numero di esecuzioni specificato. È disponibile anche un&apos;opzione per aggiungere un disturbo casuale alle risposte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**Sintassi:** obj << Overlaid Interactions( state=0|1 )

**Descrizione:** Mostra o nasconde le curve ombreggiate nei diagrammi del Profiler di previsione. Le curve ombreggiate rappresentano i profiler per i diversi tipi di interazioni tra i range dei fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );

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

### Paste Settings Script

**Sintassi:** obj << Paste Settings Script

**Descrizione:** Incolla le impostazioni del profiler dagli Appunti a un profiler in un altro report.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**Sintassi:** obj << Predict for Another Table( <data table> )

**Descrizione:** Aggiunge colonne di previsione a una tabella di dati specificata, utilizzando i fattori presenti in tale tabella. Questa opzione è disponibile solo per le risposte continue.

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
dt2 = dt << Subset(
	All rows,
	columns( :SILICA, :SILANE, :SULFUR ),
	Output Table( "Subset" )
);
obj << Predict For Another Table( dt2 );

```

### Prediction Formula

**Sintassi:** obj = Profiler(...Prediction Formula( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le colonne di risposta che contengono formule.

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

### Prediction Intervals

**Sintassi:** obj << Prediction Intervals( state=0|1 )

**Descrizione:** Mostra o nasconde gli intervalli di previsione al 95% che includono sia la variazione nella stima del modello sia la variazione nell&apos;errore residuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ELONG ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Desirability Functions( 0 )
		),
		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Effect Summary( 0 )}
	)
);

```

### Prediction Profiler

**Sintassi:** obj << Prediction Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione.

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
obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**Sintassi:** obj << Profile at Boundary( "Ruota ai limiti"|"Interrompi ai limiti" )

**Descrizione:** Identifica il metodo di gestione dei limiti per i fattori che hanno vincoli. Questa opzione è disponibile solo per i modelli di previsione che contengono variabili miscela, quando c&apos;è un vincolo lineare o quando è specificata l&apos;opzione Cambia vincoli lineari.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );
obj1 = Fit Model(
	Y( :Damping ),
	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),
	Personality( "Standard Least Squares" ),
	Run Model( 1 )
);
obj1 << Prediction Formula;
obj2 = Profiler( Y( :Pred Formula Damping ) );
Wait( 1 );
obj2 << Profile at Boundary( "Stop at Boundaries" );

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

### Prop of Error Bars

**Sintassi:** obj << Prop of Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde le barre di errore sul grafico del profiler. Questa opzione è disponibile solo quando la colonna contiene una proprietà della colonna Sigma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( Sigma, 5 );
:Pred Formula MODULUS << Set Property( Sigma, 100 );
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Prop of Error Bars( 1 );

```

### Redo Analysis

**Sintassi:** obj << Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

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
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj << Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

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
obj << Relaunch Analysis;

```

### Remember Settings

**Sintassi:** obj << Remember Settings

**Descrizione:** Aggiunge un riquadro al report con i valori delle impostazioni dei fattori.

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
obj << Remember Settings;

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

### Remove Profiler

**Sintassi:** scobj << Remove Profiler

**Descrizione:** Rimuove il profiler dal report della piattaforma. Questa opzione è disponibile solo in un numero limitato di piattaforme.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
rpt = obj << Report();
rpt["Model Specification"] << Close( 1 );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);
scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();
scobj << Remove Profiler;

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

### Reorder X Variables

**Sintassi:** obj << Reorder X Variables( columns )

**Descrizione:** Riordina gli effetti principali del modello nel profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**Sintassi:** obj << Reorder Y Variables( columns )

**Descrizione:** Riordina le variabili di risposta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder Y Variables(
	:Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG
);

```

### Reorder factors by main effect importance

**Sintassi:** subobj << Reorder factors by main effect importance

**Descrizione:** Riordina le celle nel Profiler di previsione secondo gli indici di importanza degli effetti principali.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**Sintassi:** subobj << Reorder factors by total importance

**Descrizione:** Riordina le celle nel Profiler di previsione secondo gli indici di importanza totale per i fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;
Wait( 1 );
subobj << Reorder factors by total importance;

```

### Report

**Sintassi:** obj << Report;

Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj << Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

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
obj << Report View( "Summary" );

```

### Reset

**Sintassi:** obj << Reset

**Descrizione:** Reimposta le funzioni di desiderabilità.

### Reset Factor Grid

**Sintassi:** obj << Reset Factor Grid

### Reset Factors

**Sintassi:** obj << Reset Factors

**Descrizione:** Apre una finestra per cambiare la griglia dei fattori.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Reset Factor Grid;

```

### Response Limits

**Sintassi:** Pred Y << Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**Descrizione:** Definisce le impostazioni delle funzioni di desiderabilità per una singola risposta, così come i valori di desiderabilità associati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Pred Formula ABRASION << Response Limits(
		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ),
		Importance( 1 )}
	)
);
obj << Desirability Functions( 1 );

```

### Samples per Factor

**Sintassi:** obj << Samples per Factor( number=6 )

**Descrizione:** Specifica il numero di valori campione presi per ogni fattore continuo per le interazioni a due vie. Questo valore si riduce per le interazioni a più vie ed è condizionato dal numero massimo di curve. "6", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**Sintassi:** obj << Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**Descrizione:** Usa l&apos;aggregazione di bootstrap (bagging) per effettuare previsioni e salva le medie e gli errori standard delle previsioni degli aggregati di bootstrap nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Crossvalidation( No Crossvalidation ),
	Go
);
obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Constraints to Script

**Sintassi:** obj << Save Constraints to Script

**Descrizione:** Salva i vincoli lineari esistenti in uno script della tabella denominato Vincolo.

```js

Names Default To Here( 1 );
dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Save Constraints to Script;

```

### Save Constraints to Table

**Sintassi:** obj << Save Constraints to Table

**Descrizione:** Saves existing linear constraints to a new data table.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Script(
	"Constraint",
	{1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6}
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Constraints to Table;

```

### Save Desirabilities

**Sintassi:** obj << Save Desirabilities

**Descrizione:** Salva le impostazioni delle tre funzioni di desiderabilità per ciascuna risposta, così come i valori di desiderabilità associati, come una proprietà della colonna Limiti di risposta nella tabella di dati.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirabilities;

```

### Save Desirability Formula

**Sintassi:** obj << Save Desirability Formula

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La nuova colonna contiene una formula per la desiderabilità combinata tra le risposte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirability Formula;

```

### Save Expanded Formulas

**Sintassi:** obj << Save Expanded Formulas

**Descrizione:** Salva una nuova colonna della formula nella tabella di dati. La nuova colonna contiene riferimenti di formule risolte all&apos;interno delle formule usate come variabili Y per vedere le variabili sottostanti. È disponibile solo dopo che l&apos;opzione Espandi formule intermedie è stata selezionata nella finestra di avvio o dopo che è stato specificato il messaggio Espandi nello script del profiler.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Save Script for All Objects

**Sintassi:** obj << Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

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
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj << Save Script for All Objects To Data Table( <name> )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

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
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj << Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

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
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj << Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

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
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj << Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

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
obj << Save Script to Script Window;

```

### Save Shapley Values

**Sintassi:** obj << Save Shapley Values

**Descrizione:** Calcola i valori di Shapley per ogni riga della tabella di dati non esclusa.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

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

### Sensitivity Indicator

**Sintassi:** obj << Sensitivity Indicator( state=0|1 )

**Descrizione:** Mostra o nasconde un triangolo viola che può aiutare a individuare rapidamente le celle sensibili nei profili di grandi dimensioni. L&apos;altezza e la direzione del triangolo corrispondono al valore della derivata parziale della funzione di profilo al suo valore corrente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**Sintassi:** obj << Set Desirabilities

**Descrizione:** Apre la finestra Obiettivo della risposta dove si possono impostare specifici valori di desiderabilità.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Set Desirabilities;

```

### Set Script

**Sintassi:** obj << Set Script( Function( {arguments}, <{locals}>, expr ) )

**Descrizione:** Imposta uno script che sarà eseguito ogni volta che si modifica un fattore.

```js

Names Default To Here( 1 );
ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**Sintassi:** obj << Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), <multiplier> )

**Descrizione:** Può essere utilizzato per specificare il moltiplicatore della soglia di estrapolazione generale. In alternativa, è possibile utilizzare questa funzione per aprire una finestra che consente di correggere il moltiplicatore della soglia di estrapolazione.

**JMP Versione aggiunta:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Extrapolation Details( 1 ),
	Extrapolation Control Option( "Warning On" ),
	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )
));

```

### Set to Data in Row

**Sintassi:** obj << Set to Data in Row( row number )

**Descrizione:** Assegna alle variabili X del profiler i valori di una riga in una tabella di dati.

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
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**Sintassi:** obj << Shapley Background Data Choice( "Percentuale data set di training"|"Numero di righe del data set di training" )

**Descrizione:** Specifica i dati in background nei calcoli di Shapley come percentuale dei dati di training o come numero di righe dei dati di training.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 150 ),
	Save Shapley Values
));

```

### Shapley Number of Permutations

**Sintassi:** obj << Shapley Number of Permutations( number=10 )

**Descrizione:** Imposta il numero di permutazioni da utilizzare per il calcolo dei valori di Shapley. "10", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values ));

```

### Shapley Number of Rows of Training Data

**Sintassi:** obj << Shapley Number of Rows of Training Data( number=100 )

**Descrizione:** Imposta il numero di righe dei dati di training utilizzati per stimare il modello da utilizzare come dati in background nei calcoli di Shapley. "100", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 125 ),
	Save Shapley Values
));

```

### Shapley Percent Training Data

**Sintassi:** obj << Shapley Percent Training Data( number=100 )

**Descrizione:** Imposta la percentuale dei dati di training utilizzati per stimare il modello da utilizzare come dati in background nei calcoli di Shapley. "100", per impostazione predefinita.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 50 ),
	Save Shapley Values
));

```

### Shapley Set Random Seed

**Sintassi:** obj << Shapley Set Random Seed( number )

**Descrizione:** Imposta un seme casuale per il calcolo dei valori di Shapley.

**JMP Versione aggiunta:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**Sintassi:** obj << Show Creator( state=0|1 )

**Descrizione:** Mostra o nasconde il nome della piattaforma che ha creato la formula nella colonna di risposta. Il nome della piattaforma compare sull&apos;asse verticale. Disponibile solo se la colonna di risposta contiene un argomento nominato dal Creatore nella proprietà della colonna Previsione di.

**JMP Versione aggiunta:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
fm = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	)
);

predForm = fm << Save Columns( "Prediction Formula" );

Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**Sintassi:** obj << Show Formulas

**Descrizione:** Apre una finestra di script che contiene JSL per tutte le formule da profilare.

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
obj << Show Formulas;

```

### Simulator

**Sintassi:** obj << Simulator( state=0|1 )

**Descrizione:** Mostra o nasconde Simulatore.

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
obj << Simulator( 1 );

```

### Spanning Range

**Sintassi:** obj << Spanning Range( "Range dell&apos;asse interno"|"Range completo dell&apos;asse"|"Una deviazione standard"|"Due deviazioni standard"|"Range di dati" )

**Descrizione:** Specifica come viene determinato il range di campionamento di ciascun fattore continuo. Il range di campionamento di ciascun fattore definisce i valori minimi e massimi per i quali vengono create le curve di interazione.

**JMP Versione aggiunta:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**Sintassi:** obj << Surface Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di superficie.

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

### Term Value

**Sintassi:** obj << Term Value( factor( current value, <Lock( 0|1 )>, <Min( number )>, <Max( number)> ) )

**Descrizione:** Specifica le impostazioni per i singoli fattori, incluso il valore corrente, lo stato di blocco e il range.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Title

**Sintassi:** obj << Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

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
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj << Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

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
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Trips

**Sintassi:** obj << Trips( number )

**Descrizione:** Specifica il numero di partenze casuali nell&apos;algoritmo di ottimizzazione. Ogni esecuzione riavvia l&apos;algoritmo da un punto di partenza diverso.

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
obj << Trips( 10 );
obj << Optimize;

```

### Unthreaded

**Sintassi:** obj << Unthreaded( state=0|1 )

**Descrizione:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

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

### Y

**Sintassi:** obj = Profiler(...Y( column(s) )...)

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Descrizione:** Specifica le colonne di risposta che contengono formule.

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

