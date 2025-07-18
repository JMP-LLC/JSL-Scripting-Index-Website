# Reliability Forecast



## Elementmeldungen

### Contract

**Syntax:** obj &lt;&lt; Forecast( Contract( length, unit ) )

**Beschreibung:** Gibt die Länge und Zeiteinheit für den Vertrag an, die für die Vorhersage künftiger Risiken verwendet wird.

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

### Distribution

**Syntax:** obj &lt;&lt; Forecast( Distribution( name ) )

**Beschreibung:** Gibt die Verteilung an, die für die Vorhersage künftiger Risiken verwendet wird.

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

**Syntax:** obj &lt;&lt; Forecast Options( forecast message(), ... );(obj &lt;&lt; Forecast Options) &lt;&lt; forecast message()

**Beschreibung:** Sendet Meldungen an das skriptfähige Objekt des Vorhersageberichts. Sie können eine oder mehrere Optionen im Menü über das rote Dreieck des Vorhersageberichts angeben. Wenn keine Argumente vorhanden sind, gibt diese Option eine JSL-Referenz auf das skriptfähige Objekt des Vorhersageberichts zurück. Wenn Argumente vorhanden sind, gibt diese Option eine JSL-Referenz auf das Plattformobjekt zurück. Weitere Informationen finden Sie bei den Einträgen unter Vorhersageoptionen.

#### Mit Argumenten

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Forecast Options( Animation( 0 ), Use Contract Length( 1 ), Show Interval( 1 ) );

```

#### Ohne Argumente

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
(obj << Forecast Options) << Show Interval( 0 );

```

### Forecast To

**Syntax:** obj &lt;&lt; Forecast( Forecast To( time ) )

**Beschreibung:** Gibt die letzte Zeit an, zu der künftiges Risiko vorhergesagt wird.

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

**Syntax:** obj &lt;&lt; Forecast( Forecast Type( type ) )

**Beschreibung:** Gibt die Art der Quantität an, die für die Vorhersage künftiger Risiken verwendet wird. Das Argument type kann inkrementell oder kumuliert sein.

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

**Syntax:** obj &lt;&lt; Forecast( Future Risk Set( count vector, time vector ) )

**Beschreibung:** Gibt den künftigen Risikosatz an, der für die Vorhersage künftiger Risiken verwendet wird. Die Argumente sind ein Vektor von Produktionszahlen und ein Vektor für künftige Zeiten.

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

### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Beschreibung:** Gibt eine benannte Liste zurück, die Vorhersageergebnisse enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
result = obj << Get Results;

```

### Group

**Syntax:** obj &lt;&lt; Forecast( Group( group ), ... )

**Beschreibung:** Identifiziert die Gruppe, an die alle Meldungen in der gleichen Vorhersageklausel gesendet werden sollen.

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

### Input Format

**Syntax:** obj = Reliability Forecast(...Input Format( Nevada|Dates|Time to Event )...)

**Beschreibung:** Gibt den Formattyp der Eingabedaten für die Analyse an.

#### Datumsformat

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

#### Nevada-Format

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

#### Zeit-bis-Ereignis-Format

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

**Syntax:** obj &lt;&lt; Forecast( Interval Type( type ) )

**Beschreibung:** Gibt den Typ des Intervalls an, der für die Vorhersage des Fehlers um das zukünftige Risiko verwendet wird. Das Intervall type kann Kein Intervall, ein Plugin-Intervall oder ein Vorhersageintervall sein.

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

### Risk Set

**Syntax:** obj &lt;&lt; Forecast( Risk Set( count vector ) )

**Beschreibung:** Gibt den Satz vorhandener Risiken an, der für die Vorhersage künftiger Risiken verwendet wird.

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

**Syntax:** obj &lt;&lt; Save Data in Time to Event Format

**Beschreibung:** Speichert Daten im Nevada- oder Datumsformat in einer neuen Datentabelle im Zeit-bis-Ereignis-Format.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Save Data in Time to Event Format;

```

### Save Forecast Data Table

**Syntax:** obj &lt;&lt; Save Forecast Data Table

**Beschreibung:** Speichert die kumulierte und inkrementelle Anzahl von Rückgaben in einer neuen Datentabelle, zusammen mit den Variablen, die Sie im Startfenster ausgewählt haben. Bei gruppierten Analysen enthalten Tabellennamen die Gruppen-ID und das Wort „aggregiert“. Vorhandene Rückgaben werden auch in die aggregierten Datentabellen aufgenommen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
dt results = obj << Save Forecast Data Table;

```

### Set Interval Level

**Syntax:** obj &lt;&lt; Forecast( Set Interval Level( value ) )

**Beschreibung:** Gibt das Konfidenzniveau für das Intervall an, das für die Vorhersage des Fehlers um das zukünftige Risiko verwendet wird.

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

**Syntax:** obj &lt;&lt; Show Graph Filter( state=0|1 )

**Beschreibung:** Zeigt den Graphenfilter an oder blendet ihn aus, so dass Sie auswählen können, welche Produktionsperioden in den Graphen der beobachteten Daten angezeigt werden sollen. Balken für nicht ausgewählte Zeiträume werden ausgeblendet. Wählen Sie die Perioden ab, um den Graphen in seinem ursprünglichen Zustand anzuzeigen. Diese Option ist bei Zeit-bis-Ereignis-Daten nicht verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Graph Filter( 1 );

```

### Show Legend

**Syntax:** obj &lt;&lt; Show Legend( state=0|1 )

**Beschreibung:** Zeigt eine Legende für den Bericht der beobachteten Daten an oder blendet sie aus. Diese Option ist bei Zeit-bis-Ereignis-Daten nicht verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Legend( 1 );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

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

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

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

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

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

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

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

#### Plattform mit Filter

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

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

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

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

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

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

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

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

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

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

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

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

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

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

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

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

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

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

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

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

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

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

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

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

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

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

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

#### Beispiel 2

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

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

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

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

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

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

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

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

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

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

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

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

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

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

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

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

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

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Zugehörige Konstruktoren

### Reliability Forecast

**Syntax:** Reliability Forecast

**Beschreibung:** Sagt künftige Ausfälle basierend auf beobachteten Daten und künftigen Einheiten unter Risiko vorher. Die Plattform akzeptiert verschiedene Eingabeformate. Sie finden zu jedem Format weitere Details für die Spezifikation.

#### Datumsformat

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

#### Nevada-Format

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

#### Zeit-bis-Ereignis-Format

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

## Forecast Options

### Elementmeldungen

#### Animation

**Syntax:** obj &lt;&lt; Animation( state=0|1 )

**Beschreibung:** Steuert das Blinken der Hotspots in den Vorhersagegraphen. Standardmäßig ein.

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

**Syntax:** obj &lt;&lt; Forecasting Interval Type( type )

**Beschreibung:** Gibt den Typ des Intervalls an, der für die Vorhersage des Fehlers um das zukünftige Risiko verwendet wird. Das Intervall type kann ein Plugin-Intervall oder ein Vorhersageintervall sein.

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

**Syntax:** obj &lt;&lt; Import Future Risk Set

**Beschreibung:** Ermöglicht Ihnen, künftige Produktionsdaten aus einer anderen offenen Datentabelle zu importieren. Die neuen Vorhersagen erscheinen dann im zukünftigen Risikographen. Die importierte Datentabelle muss eine Spalte für Zeitstempel und für Produktionsmengen haben.

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

**Syntax:** obj &lt;&lt; Interactive Configuration of Risk Sets( state=0|1 )

**Beschreibung:** Legt fest, ob Sie Hotspots in den Graphen ziehen können.

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

**Syntax:** obj &lt;&lt; Monte Carlo Sample Size( number )

**Beschreibung:** Gibt die Stichprobengröße der Simulation an, die zum Generieren der Vorhersageintervalle verwendet wird.

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

**Syntax:** obj &lt;&lt; Random Seed( number )

**Beschreibung:** Gibt einen zufälligen Startwert an, der verwendet werden kann, um die simulierten Vorhersageintervalle zu reproduzieren.

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

**Syntax:** obj &lt;&lt; Save Forecast Data Table

**Beschreibung:** Speichert die kumulierte und inkrementelle Anzahl von Rückgaben in einer neuen Datentabelle, zusammen mit den Variablen, die Sie im Startfenster ausgewählt haben. Bei gruppierten Analysen enthalten Tabellennamen die Gruppen-ID und das Wort „aggregiert“. Vorhandene Rückgaben werden auch in die aggregierten Datentabellen aufgenommen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Save Forecast Data Table;

```

#### Set Failure Cost

**Syntax:** obj &lt;&lt; Set Failure Cost( number )

**Beschreibung:** Gibt die Kosten für jeden Ausfall an.

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

**Syntax:** obj &lt;&lt; Show Interval( state=0|1 )

**Beschreibung:** Blendet 95%-Konfidenzgrenzen im Graphen ein oder aus.

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

**Syntax:** obj &lt;&lt; Spreadsheet Configuration of Risk Sets( state=0|1 )

**Beschreibung:** Zeigt einen Bericht an oder blendet ihn aus, in den Sie spezifische Produktionsmengen und Zeitstempel eingeben können, statt sie den interaktiven Graphen hinzuzufügen.

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

**Syntax:** obj &lt;&lt; Use Approximate Distribution( state=0|1 )

**Beschreibung:** Gibt an, dass die Vorhersageintervalle mithilfe einer Poisson-Verteilung generiert werden, um die Anzahl von Ausfällen in jedem Intervall zu approximieren. Wenn diese Option nicht ausgewählt ist, verwenden die Vorhersageintervalle eine multinomiale Verteilung, um die Anzahl von Ausfällen in jedem Intervall zu simulieren.

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

**Syntax:** obj &lt;&lt; Use Contract Length( state=0|1 )

**Beschreibung:** Legt fest, ob die angegebene Vertragsdauer in der Vorhersage berücksichtigt wird.

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

**Syntax:** obj &lt;&lt; Use Failure Cost( state=0|1 )

**Beschreibung:** Zeigt statt der Ausfallhäufigkeiten im zukünftigen Risikographen Ausfallkosten an.

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

### Elementmeldungen

#### Censor Code

**Syntax:** obj = Reliability Forecast(...Input Format( Dates ), Censor Code( value=1 )...)

**Beschreibung:** Identifiziert den Wert in der Zensorspalte, der rechts zensierte Beobachtungen angibt.

#### Life Time Unit

**Syntax:** obj = Reliability Forecast(...Input Format( Dates ), Life Time Unit( unit )...)

**Beschreibung:** Gibt das tatsächliche Datum/Uhrzeit-Format aller Zeitstempel an, auch das Format der Spaltentitel für die zurückgegebenen Häufigkeiten. Diese Einstellung wird in Inkrementen von Vorhersageschritten verwendet. Das Argument unit kann eines der folgenden Argumente sein: Numerisch, Jahr, Monat, Woche, Tag, Stunde, Minute oder Sekunde.

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

### Spalten

#### Failure Count

**Syntax:** obj &lt;&lt; Failure Count( column )

#### Failure Time

**Syntax:** obj &lt;&lt; Failure Time( column(s) )

#### Group ID

**Syntax:** obj &lt;&lt; Group ID( column )

#### Left Censor

**Syntax:** obj &lt;&lt; Left Censor( column )

#### Production Count

**Syntax:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Syntax:** obj &lt;&lt; Timestamp( column )

## Reliability Forecast for Nevada Format

### Elementmeldungen

#### Interval Censored Failure

**Syntax:** obj = Reliability Forecast(...Input Format( Nevada ), Interval Censored Failure( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt an, dass die zurückgegebenen Größen als intervallzensierte Beobachtungen behandelt werden. Das Intervall liegt zwischen der zuletzt aufgezeichneten Zeit und dem Zeitpunkt, zu dem der Ausfall beobachtet wurde. Standardmäßig ein.

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

**Syntax:** obj = Reliability Forecast(...Input Format( Nevada ), Life Time Unit( unit )...)

**Beschreibung:** Gibt das tatsächliche Datum/Uhrzeit-Format aller Zeitstempel an, auch das Format der Spaltentitel für die zurückgegebenen Häufigkeiten. Diese Einstellung wird in Inkrementen von Vorhersageschritten verwendet. Das Argument unit kann eines der folgenden Argumente sein: Numerisch, Jahr, Monat, Woche, Tag, Stunde, Minute oder Sekunde.

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

### Spalten

#### Failure Count

**Syntax:** obj &lt;&lt; Failure Count( column(s) )

#### Group ID

**Syntax:** obj &lt;&lt; Group ID( column )

#### Production Count

**Syntax:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Syntax:** obj &lt;&lt; Timestamp( column )

## Reliability Forecast for Time to Event Format

### Elementmeldungen

#### Censor Code

**Syntax:** obj = Reliability Forecast(...Input Format( Time to Event ), Censor Code( value=1 )...)

**Beschreibung:** Identifiziert den Wert in der Zensorspalte, der rechts zensierte Beobachtungen angibt.

#### Forecast Start

**Syntax:** obj = Reliability Forecast(...Input Format( Time to Event ), Forecast Start( time )...)

**Beschreibung:** Gibt die Zeit an, zu der die Vorhersage beginnt. Das Format der Uhrzeit ist von der Einstellung der Option „Life Time Unit“ abhängig.

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

**Syntax:** obj = Reliability Forecast(...Input Format( Time to Event ), Life Time Unit( unit )...)

**Beschreibung:** Gibt das tatsächliche Datum/Uhrzeit-Format aller Zeitstempel an, auch das Format der Spaltentitel für die zurückgegebenen Häufigkeiten. Diese Einstellung wird in Inkrementen von Vorhersageschritten verwendet. Das Argument unit kann eines der folgenden Argumente sein: Numerisch, Jahr, Monat, Woche, Tag, Stunde, Minute oder Sekunde.

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

### Spalten

#### Censor

**Syntax:** obj &lt;&lt; Censor( column )

#### Freq

**Syntax:** obj &lt;&lt; Freq( column )

#### Group ID

**Syntax:** obj &lt;&lt; Group ID( column )

#### Time to Event

**Syntax:** obj &lt;&lt; Time to Event( column(s) )

