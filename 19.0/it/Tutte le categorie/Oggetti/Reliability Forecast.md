# Reliability Forecast



## Costruttori associati

### Reliability Forecast

**Sintassi:** Reliability Forecast

**Descrizione:** Prevede i guasti futuri sulla base dei dati osservati e delle future unità a rischio. La piattaforma accetta diversi formati di input. Per ulteriori informazioni vedere ciascun formato.

#### Formato Date

```jsl


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

#### Formato Nevada

```jsl

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

#### Formato Tempo all'evento

```jsl


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

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

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
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

### Contract

**Sintassi:** obj &lt;&lt; Forecast( Contract( length, unit ) )

**Descrizione:** Specifica la lunghezza e l&apos;unità di tempo del contratto utilizzato per prevedere il rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

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
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

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
obj << Data Table Window;

```

### Distribution

**Sintassi:** obj &lt;&lt; Forecast( Distribution( name ) )

**Descrizione:** Specifica la distribuzione che viene utilizzata per prevedere il rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Forecast Options

**Sintassi:** obj &lt;&lt; Forecast Options( forecast message(), ... );(obj &lt;&lt; Forecast Options) &lt;&lt; forecast message()

**Descrizione:** Invia messaggi all&apos;oggetto che supporta script del report di Forecast. È possibile specificare una o più opzioni dal menu associato al triangolo rosso del report di Forecast. Se non sono presenti argomenti, questa opzione restituisce un riferimento JSL all&apos;oggetto che supporta script del report di Forecast. Se sono presenti argomenti, questa opzione restituisce un riferimento JSL all&apos;oggetto della piattaforma. Per ulteriori informazioni, vedere le voci in Opzioni di forecast.

#### Con argomenti

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Forecast Options( Animation( 0 ), Use Contract Length( 1 ), Show Interval( 1 ) );

```

#### Senza argomenti

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
(obj << Forecast Options) << Show Interval( 0 );

```

### Forecast To

**Sintassi:** obj &lt;&lt; Forecast( Forecast To( time ) )

**Descrizione:** Specifica l&apos;ora finale in cui è previsto il rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Forecast Type

**Sintassi:** obj &lt;&lt; Forecast( Forecast Type( type ) )

**Descrizione:** Specifica il tipo di quantità utilizzato per prevedere il rischio futuro. L&apos;argomento type può essere incrementale o cumulativo.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Future Risk Set

**Sintassi:** obj &lt;&lt; Forecast( Future Risk Set( count vector, time vector ) )

**Descrizione:** Specifica il set di rischi futuri che viene utilizzato per prevedere il rischio futuro. Gli argomenti sono un vettore di conteggi di produzione e un vettore di tempi futuri.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
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

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

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
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Results

**Sintassi:** obj &lt;&lt; Get Results

**Descrizione:** Restituisce un elenco con nomi che contiene i risultati di forecasting.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
result = obj << Get Results;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

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
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

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
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

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

### Group

**Sintassi:** obj &lt;&lt; Forecast( Group( group ), ... )

**Descrizione:** Identifica il gruppo a cui devono essere inviati tutti i messaggi nella stessa clausola di Forecast.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

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

### Input Format

**Sintassi:** obj = Reliability Forecast(...Input Format( Nevada|Dates|Time to Event )...)

**Descrizione:** Specifica il tipo di formato dei dati di input per l&apos;analisi.

#### Formato Date

```jsl


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

#### Formato Nevada

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production.jmp" );
dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Sold Quantity ),
	Timestamp( :Sold Month ),
	Failure Count(
		:"08/2009"n, :"09/2009"n, :"10/2009"n, :"11/2009"n, :"12/2009"n, :"01/2010"n,
		:"02/2010"n
	),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3022.5, 3307.5, 3502, 3502, 3502, 3502],
			[3347827200, 3350246400, 3352924800, 3355516800, 3358195200, 3360787200]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 12, Month ),
		Forecast Type( Sequential ),
		Interval Type( No Interval ),
		Alpha( 0.05 )
	)
);

```

#### Formato Tempo all'evento

```jsl


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

### Interval Type

**Sintassi:** obj &lt;&lt; Forecast( Interval Type( type ) )

**Descrizione:** Specifica il tipo di intervallo utilizzato per prevedere l&apos;errore intorno al rischio futuro. L&apos;intervallo type può essere Nessun intervallo, Plugin intervallo o Intervallo di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
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

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

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
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

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
obj << Relaunch Analysis;

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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

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
obj << Report View( "Summary" );

```

### Risk Set

**Sintassi:** obj &lt;&lt; Forecast( Risk Set( count vector ) )

**Descrizione:** Specifica il set di rischi esistente che viene utilizzato per prevedere il rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Save Data in Time to Event Format

**Sintassi:** obj &lt;&lt; Save Data in Time to Event Format

**Descrizione:** Salva i dati formattati Nevada o Date in una nuova tabella di dati formattata Tempo all&apos;evento.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Save Data in Time to Event Format;

```

### Save Forecast Data Table

**Sintassi:** obj &lt;&lt; Save Forecast Data Table

**Descrizione:** Salva il numero cumulativo e incrementale di rendimenti in una nuova tabella di dati, insieme alle variabili selezionate nella finestra di avvio. Per le analisi raggruppate, i nomi delle tabelle includono l&apos;ID del gruppo e la parola "Aggregato". I rendimenti esistenti sono inclusi anche nelle tabelle di dati aggregati.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
dt results = obj << Save Forecast Data Table;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

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
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( _bycol ) );
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
obj[1] << Save Script for All Objects To Data Table;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( _bycol ) );
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
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

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
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

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
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

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
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

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
obj << Save Script to Script Window;

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

### Set Interval Level

**Sintassi:** obj &lt;&lt; Forecast( Set Interval Level( value ) )

**Descrizione:** Specifica il livello di confidenza dell&apos;intervallo utilizzato per prevedere l&apos;errore intorno al rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
n = N Rows( dt );
mat = dt << get as matrix;
mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));
dt = As Table( mat );
Column( dt, 2 ) << Format( "m/y", 7 );
Column( dt, 2 ) << set name( "Time" );
Column( dt, 1 ) << set name( "Volume" );
For Each( {i}, 3 :: 38,
	Column( dt, i ) << set name(
		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )
	)
);
Column( dt, 39 ) << set name( "Group" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Group ID( :Group ),
	Life Time Unit( Month ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast Options( Show Interval( 1 ) )
);
obj << Forecast(
	Group( "1" ),
	Risk Set(
		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,
		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,
		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
	),
	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),
	Forecast To( "01/2004" ),
	Distribution( Weibull ),
	Contract( 5, Month ),
	Forecast Type( Cumulative ),
	Interval Type( No Interval ),
	Set Interval Level( 0.9 )
);
obj << Forecast(
	Group( "2" ),
	Risk Set(
		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,
		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,
		2018, 2036]
	),
	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),
	Forecast To( "08/2005" ),
	Distribution( Weibull ),
	Contract( 36, Month ),
	Forecast Type( Incremental ),
	Interval Type( Prediction Interval ),
	Set Interval Level( 0.9 )
);

```

### Show Graph Filter

**Sintassi:** obj &lt;&lt; Show Graph Filter( state=0|1 )

**Descrizione:** Mostra o nasconde il filtro dei grafici in modo da poter selezionare i periodi di produzione da mostrare nei grafici dei dati osservati. Le barre si attenuano per i periodi deselezionati. Deselezionare i periodi per mostrare il grafico allo stato originale. Questa opzione non è disponibile per i dati Tempo all&apos;evento.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Graph Filter( 1 );

```

### Show Legend

**Sintassi:** obj &lt;&lt; Show Legend( state=0|1 )

**Descrizione:** Mostra o nasconde una legenda per il report Dati osservati. Questa opzione non è disponibile per i dati Tempo all&apos;evento.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Legend( 1 );

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
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

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
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Forecast Options

### Messaggi degli elementi

#### Animation

**Sintassi:** obj &lt;&lt; Animation( state=0|1 )

**Descrizione:** Controlla il lampeggiamento degli hotspot nei grafici di forecast. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Forecasting Interval Type

**Sintassi:** obj &lt;&lt; Forecasting Interval Type( type )

**Descrizione:** Specifica il tipo di intervallo utilizzato per prevedere l&apos;errore intorno al rischio futuro. L&apos;intervallo type può essere Plugin intervallo o Intervallo di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Import Future Risk Set

**Sintassi:** obj &lt;&lt; Import Future Risk Set

**Descrizione:** Consente di importare dati sulla produzione futura da un&apos;altra tabella di dati aperta. Le nuove previsioni compaiono quindi nel grafico del rischio futuro. La tabella di dati importata deve avere una colonna per data e ora e conteggi della produzione.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
import set = [3139862400 2000, 3142540800 2050, 3145219200 2100, 3147811200 2150, 3150489600
2200, 3153081600 2250];
dt import = As Table( import set, <<Column Names( {"Time", "Volume"} ) );
option << Import Future Risk Set;

```

#### Interactive Configuration of Risk Sets

**Sintassi:** obj &lt;&lt; Interactive Configuration of Risk Sets( state=0|1 )

**Descrizione:** Determina se è possibile trascinare gli hotspot nei grafici.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Monte Carlo Sample Size

**Sintassi:** obj &lt;&lt; Monte Carlo Sample Size( number )

**Descrizione:** Specifica la dimensione campionaria della simulazione utilizzata per generare gli intervalli di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Random Seed

**Sintassi:** obj &lt;&lt; Random Seed( number )

**Descrizione:** Specifica un seme casuale che può essere utilizzato per riprodurre gli intervalli di previsione simulati.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Save Forecast Data Table

**Sintassi:** obj &lt;&lt; Save Forecast Data Table

**Descrizione:** Salva il numero cumulativo e incrementale di rendimenti in una nuova tabella di dati, insieme alle variabili selezionate nella finestra di avvio. Per le analisi raggruppate, i nomi delle tabelle includono l&apos;ID del gruppo e la parola "Aggregato". I rendimenti esistenti sono inclusi anche nelle tabelle di dati aggregati.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Save Forecast Data Table;

```

#### Set Failure Cost

**Sintassi:** obj &lt;&lt; Set Failure Cost( number )

**Descrizione:** Specifica il costo per ogni guasto.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Show Interval

**Sintassi:** obj &lt;&lt; Show Interval( state=0|1 )

**Descrizione:** Mostra o nasconde i limiti di confidenza al 95% nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Spreadsheet Configuration of Risk Sets

**Sintassi:** obj &lt;&lt; Spreadsheet Configuration of Risk Sets( state=0|1 )

**Descrizione:** Mostra o nasconde un report che consente di inserire conteggi e data e ora di produzione specifici invece di aggiungerli ai grafici interattivi.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Approximate Distribution

**Sintassi:** obj &lt;&lt; Use Approximate Distribution( state=0|1 )

**Descrizione:** Specifica che gli intervalli di previsione sono generati utilizzando una distribuzione di Poisson per approssimare il numero di guasti in ciascun intervallo. Se questa opzione non è selezionata, gli intervalli di previsione utilizzano una distribuzione multinomiale per simulare il numero di guasti in ciascun intervallo.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Contract Length

**Sintassi:** obj &lt;&lt; Use Contract Length( state=0|1 )

**Descrizione:** Determina se la lunghezza del contratto specificata è considerata nel forecast.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

#### Use Failure Cost

**Sintassi:** obj &lt;&lt; Use Failure Cost( state=0|1 )

**Descrizione:** Mostra il costo dei guasti invece del conteggio dei guasti nel grafico del rischio futuro.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Animation( 0 );
option << Interactive Configuration of Risk Sets( 0 );
option << Spreadsheet Configuration of Risk Sets( 1 );
option << Show Interval( 1 );
option << Forecasting Interval Type( Prediction Interval );
option << Use Contract Length( 1 );
option << Use Failure Cost( 1 );
option << Set Failure Cost( 100 );
option << Monte Carlo Sample Size( 10000 );
option << Random Seed( 1111 );
option << Use Approximate Distribution( 1 );

```

## Reliability Forecast for Dates Format

### Colonne

#### Failure Count

**Sintassi:** obj &lt;&lt; Failure Count( column )

#### Failure Time

**Sintassi:** obj &lt;&lt; Failure Time( column(s) )

#### Group ID

**Sintassi:** obj &lt;&lt; Group ID( column )

#### Left Censor

**Sintassi:** obj &lt;&lt; Left Censor( column )

#### Production Count

**Sintassi:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Sintassi:** obj &lt;&lt; Timestamp( column )

### Messaggi degli elementi

#### Censor Code

**Sintassi:** obj = Reliability Forecast(...Input Format( Dates ), Censor Code( value=1 )...)

**Descrizione:** Identifica il valore nella colonna Censura che indica le osservazioni con censura a destra.

#### Life Time Unit

**Sintassi:** obj = Reliability Forecast(...Input Format( Dates ), Life Time Unit( unit )...)

**Descrizione:** Specifica il formato di data e ora fisico di tutti gli indicatori di data e ora, incluso il formato dei titoli delle colonne per i conteggi di restituzione. Questa impostazione è utilizzata per il forecast di incrementi a passi. L&apos;argomento unit può essere uno qualsiasi dei seguenti: Numerico, Anno, Mese, Settimana, Giorno, Ora, Minuto o Secondo.

```jsl


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

## Reliability Forecast for Nevada Format

### Colonne

#### Failure Count

**Sintassi:** obj &lt;&lt; Failure Count( column(s) )

#### Group ID

**Sintassi:** obj &lt;&lt; Group ID( column )

#### Production Count

**Sintassi:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Sintassi:** obj &lt;&lt; Timestamp( column )

### Messaggi degli elementi

#### Interval Censored Failure

**Sintassi:** obj = Reliability Forecast(...Input Format( Nevada ), Interval Censored Failure( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica che le quantità restituite devono essere trattate come osservazioni con censura intervallare. L&apos;intervallo è tra l&apos;ultima ora registrata e l&apos;ora in cui è stato osservato il guasto. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

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

#### Life Time Unit

**Sintassi:** obj = Reliability Forecast(...Input Format( Nevada ), Life Time Unit( unit )...)

**Descrizione:** Specifica il formato di data e ora fisico di tutti gli indicatori di data e ora, incluso il formato dei titoli delle colonne per i conteggi di restituzione. Questa impostazione è utilizzata per il forecast di incrementi a passi. L&apos;argomento unit può essere uno qualsiasi dei seguenti: Numerico, Anno, Mese, Settimana, Giorno, Ora, Minuto o Secondo.

```jsl

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

## Reliability Forecast for Time to Event Format

### Colonne

#### Censor

**Sintassi:** obj &lt;&lt; Censor( column )

#### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

#### Group ID

**Sintassi:** obj &lt;&lt; Group ID( column )

#### Time to Event

**Sintassi:** obj &lt;&lt; Time to Event( column(s) )

### Messaggi degli elementi

#### Censor Code

**Sintassi:** obj = Reliability Forecast(...Input Format( Time to Event ), Censor Code( value=1 )...)

**Descrizione:** Identifica il valore nella colonna Censura che indica le osservazioni con censura a destra.

#### Forecast Start

**Sintassi:** obj = Reliability Forecast(...Input Format( Time to Event ), Forecast Start( time )...)

**Descrizione:** Specifica l&apos;ora in cui inizia il forecast. Il formato dell&apos;ora dipende dall&apos;impostazione dell&apos;opzione Unità del tempo di sopravvivenza.

```jsl


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

#### Life Time Unit

**Sintassi:** obj = Reliability Forecast(...Input Format( Time to Event ), Life Time Unit( unit )...)

**Descrizione:** Specifica il formato di data e ora fisico di tutti gli indicatori di data e ora, incluso il formato dei titoli delle colonne per i conteggi di restituzione. Questa impostazione è utilizzata per il forecast di incrementi a passi. L&apos;argomento unit può essere uno qualsiasi dei seguenti: Numerico, Anno, Mese, Settimana, Giorno, Ora, Minuto o Secondo.

```jsl


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

