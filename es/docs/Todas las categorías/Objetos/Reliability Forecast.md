# Reliability Forecast



## Constructores asociados

### Reliability Forecast

**Sintaxis:** Reliability Forecast

**Descripción:** Predice fallas futuras a partir de los datos observados y futuras unidades en riesgo. La plataforma acepta varios formatos de entrada. Consulte cada formato para detalles de especificación.

#### Formato de fechas

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

#### Formato de tiempo hasta suceso

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

## Mensajes del elemento

### Contract

**Sintaxis:** obj &lt;&lt; Forecast( Contract( length, unit ) )

**Descripción:** Especifica la longitud y la unidad de tiempo del contrato que se utiliza para pronosticar el riesgo futuro.

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

**Sintaxis:** obj &lt;&lt; Forecast( Distribution( name ) )

**Descripción:** Especifica la distribución que se utiliza para pronosticar el riesgo futuro.

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

**Sintaxis:** obj &lt;&lt; Forecast Options( forecast message(), ... );(obj &lt;&lt; Forecast Options) &lt;&lt; forecast message()

**Descripción:** Envía mensajes al objeto que admite scripts del informe Pronóstico. Puede especificar una o más opciones en el menú con triángulo rojo del informe Pronóstico. Si no hay argumentos, esta opción devuelve una referencia JSL al objeto que admite scripts del informe Pronóstico. Si hay argumentos, esta opción devuelve una referencia JSL al objeto de plataforma. Consulte las entradas de las opciones de Pronóstico para obtener más información.

#### Con argumentos

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Forecast Options( Animation( 0 ), Use Contract Length( 1 ), Show Interval( 1 ) );

```

#### Sin argumentos

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
(obj << Forecast Options) << Show Interval( 0 );

```

### Forecast To

**Sintaxis:** obj &lt;&lt; Forecast( Forecast To( time ) )

**Descripción:** Especifica el momento final en el que se pronostica el riesgo futuro.

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

**Sintaxis:** obj &lt;&lt; Forecast( Forecast Type( type ) )

**Descripción:** Especifica el tipo de cantidad que se utiliza para pronosticar el riesgo futuro. El argumento type puede ser incremental o acumulativo.

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

**Sintaxis:** obj &lt;&lt; Forecast( Future Risk Set( count vector, time vector ) )

**Descripción:** Especifica el conjunto de riesgos futuros que se utiliza para pronosticar el riesgo futuro. Los argumentos son un vector de conteos de producción y un vector de tiempos futuros.

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

**Sintaxis:** obj &lt;&lt; Get Results

**Descripción:** Devuelve una lista con nombre que contiene los resultados del pronóstico.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
result = obj << Get Results;

```

### Group

**Sintaxis:** obj &lt;&lt; Forecast( Group( group ), ... )

**Descripción:** Identifica el grupo al que deben enviarse todos los mensajes de la misma cláusula de pronóstico.

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

**Sintaxis:** obj = Reliability Forecast(...Input Format( Nevada|Dates|Time to Event )...)

**Descripción:** Especifica el tipo de formato de los datos de entrada para el análisis.

#### Formato de fechas

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

#### Formato de tiempo hasta suceso

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

### Interval Type

**Sintaxis:** obj &lt;&lt; Forecast( Interval Type( type ) )

**Descripción:** Especifica el tipo de intervalo que se utiliza para pronosticar el error en torno al riesgo futuro. El intervalo type puede ser No hay ningún intervalo, Intervalo de plugin o Intervalo de predicción.

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

**Sintaxis:** obj &lt;&lt; Forecast( Risk Set( count vector ) )

**Descripción:** Especifica el conjunto de riesgos existentes que se utiliza para pronosticar el riesgo futuro.

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

**Sintaxis:** obj &lt;&lt; Save Data in Time to Event Format

**Descripción:** Guarda los datos con formato Nevada o Fechas en una tabla de datos nueva con formato Tiempo hasta suceso.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Save Data in Time to Event Format;

```

### Save Forecast Data Table

**Sintaxis:** obj &lt;&lt; Save Forecast Data Table

**Descripción:** Guarda el número de devoluciones acumulativo e incremental en una tabla de datos nueva, junto con las variables que haya seleccionado en la ventana de inicio. Para los análisis agrupados, los nombres de tabla incluyen el ID de grupo y la palabra "Agregada". Las devoluciones existentes también se incluyen en las tablas de datos agregados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
dt results = obj << Save Forecast Data Table;

```

### Set Interval Level

**Sintaxis:** obj &lt;&lt; Forecast( Set Interval Level( value ) )

**Descripción:** Especifica el nivel de confianza para el intervalo que se utiliza para pronosticar el error en torno al riesgo futuro.

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

**Sintaxis:** obj &lt;&lt; Show Graph Filter( state=0|1 )

**Descripción:** Muestra u oculta el filtro de gráficos para que pueda seleccionar qué periodos de producción se mostrarán en los gráficos de datos observados. Las barras se desvanecen para los periodos deseleccionados. Deseleccione los periodos para mostrar el gráfico en su estado original. Esta opción no está disponible para los datos de Tiempo hasta suceso.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Graph Filter( 1 );

```

### Show Legend

**Sintaxis:** obj &lt;&lt; Show Legend( state=0|1 )

**Descripción:** Muestra u oculta una leyenda para el informe Datos observados. Esta opción no está disponible para los datos de Tiempo hasta suceso.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
obj << Show Legend( 1 );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

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

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

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

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

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

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

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

#### Plataforma con filtro

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

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

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

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

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

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

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

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

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

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

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

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

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

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

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

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

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

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

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

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

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

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

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

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

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

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

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

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

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

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

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

#### Ejemplo 2

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

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

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

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

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

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

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

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

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

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

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

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

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

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

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

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

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

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Forecast Options

### Mensajes del elemento

#### Animation

**Sintaxis:** obj &lt;&lt; Animation( state=0|1 )

**Descripción:** Controla el parpadeo de las zonas activas en los gráficos de pronóstico. Opción activada de forma predeterminada.

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

**Sintaxis:** obj &lt;&lt; Forecasting Interval Type( type )

**Descripción:** Especifica el tipo de intervalo que se utiliza para pronosticar el error en torno al riesgo futuro. El intervalo type puede ser un intervalo de plugin o un intervalo de predicción.

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

**Sintaxis:** obj &lt;&lt; Import Future Risk Set

**Descripción:** Le permite importar datos de producción futuros desde otra tabla de datos abierta. A continuación, las predicciones nuevas aparecen en el gráfico de riesgo futuro. La tabla de datos importada debe tener una columna para las marcas de tiempo y para los conteos de producción.

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

**Sintaxis:** obj &lt;&lt; Interactive Configuration of Risk Sets( state=0|1 )

**Descripción:** Determina si se pueden arrastrar las zonas activas en los gráficos.

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

**Sintaxis:** obj &lt;&lt; Monte Carlo Sample Size( number )

**Descripción:** Especifica el tamaño muestral de la simulación que se utiliza para generar los intervalos de predicción.

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

**Sintaxis:** obj &lt;&lt; Random Seed( number )

**Descripción:** Especifica una semilla aleatoria que se puede utilizar para reproducir los intervalos de predicción simulados.

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

**Sintaxis:** obj &lt;&lt; Save Forecast Data Table

**Descripción:** Guarda el número de devoluciones acumulativo e incremental en una tabla de datos nueva, junto con las variables que haya seleccionado en la ventana de inicio. Para los análisis agrupados, los nombres de tabla incluyen el ID de grupo y la palabra "Agregada". Las devoluciones existentes también se incluyen en las tablas de datos agregados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
obj = dt << Run Script( "Reliability Forecast" );
option = obj << Forecast Options;
option << Save Forecast Data Table;

```

#### Set Failure Cost

**Sintaxis:** obj &lt;&lt; Set Failure Cost( number )

**Descripción:** Especifica el coste de cada error.

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

**Sintaxis:** obj &lt;&lt; Show Interval( state=0|1 )

**Descripción:** Muestra u oculta los límites de confianza al 95 % en el gráfico.

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

**Sintaxis:** obj &lt;&lt; Spreadsheet Configuration of Risk Sets( state=0|1 )

**Descripción:** Muestra u oculta un informe que le permite introducir conteos de producción específicos y marcas de tiempo en lugar de agregarlos a los gráficos interactivos.

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

**Sintaxis:** obj &lt;&lt; Use Approximate Distribution( state=0|1 )

**Descripción:** Especifica que los intervalos de predicción se generan mediante una distribución de Poisson para aproximar el número de fallas en cada intervalo. Si no se selecciona esta opción, los intervalos de predicción utilizan una distribución multinomial para simular el número de fallas en cada intervalo.

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

**Sintaxis:** obj &lt;&lt; Use Contract Length( state=0|1 )

**Descripción:** Determina si la longitud de contrato especificada se tiene en cuenta en el pronóstico.

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

**Sintaxis:** obj &lt;&lt; Use Failure Cost( state=0|1 )

**Descripción:** Muestra el coste de fallas en lugar del conteo de fallas en el gráfico de riesgo futuro.

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

### Columnas

#### Failure Count

**Sintaxis:** obj &lt;&lt; Failure Count( column )

#### Failure Time

**Sintaxis:** obj &lt;&lt; Failure Time( column(s) )

#### Group ID

**Sintaxis:** obj &lt;&lt; Group ID( column )

#### Left Censor

**Sintaxis:** obj &lt;&lt; Left Censor( column )

#### Production Count

**Sintaxis:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Sintaxis:** obj &lt;&lt; Timestamp( column )

### Mensajes del elemento

#### Censor Code

**Sintaxis:** obj = Reliability Forecast(...Input Format( Dates ), Censor Code( value=1 )...)

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha.

#### Life Time Unit

**Sintaxis:** obj = Reliability Forecast(...Input Format( Dates ), Life Time Unit( unit )...)

**Descripción:** Especifica el formato de fecha y hora físico de todas las marcas de tiempo, incluido el formato de los títulos de columna para los conteos devueltos. Esta configuración se utiliza en los incrementos de paso de pronóstico. El argumento unit puede ser cualquiera de los siguientes: numérico, año, mes, semana, día, hora, minuto o segundo.

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

### Columnas

#### Failure Count

**Sintaxis:** obj &lt;&lt; Failure Count( column(s) )

#### Group ID

**Sintaxis:** obj &lt;&lt; Group ID( column )

#### Production Count

**Sintaxis:** obj &lt;&lt; Production Count( column )

#### Timestamp

**Sintaxis:** obj &lt;&lt; Timestamp( column )

### Mensajes del elemento

#### Interval Censored Failure

**Sintaxis:** obj = Reliability Forecast(...Input Format( Nevada ), Interval Censored Failure( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica que las cantidades devueltas se tratarán como observaciones censuradas por intervalo. El intervalo se encuentra entre la última hora registrada y la hora en que se observó la falla. Opción activada de forma predeterminada.

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

**Sintaxis:** obj = Reliability Forecast(...Input Format( Nevada ), Life Time Unit( unit )...)

**Descripción:** Especifica el formato de fecha y hora físico de todas las marcas de tiempo, incluido el formato de los títulos de columna para los conteos devueltos. Esta configuración se utiliza en los incrementos de paso de pronóstico. El argumento unit puede ser cualquiera de los siguientes: numérico, año, mes, semana, día, hora, minuto o segundo.

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

### Columnas

#### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

#### Group ID

**Sintaxis:** obj &lt;&lt; Group ID( column )

#### Time to Event

**Sintaxis:** obj &lt;&lt; Time to Event( column(s) )

### Mensajes del elemento

#### Censor Code

**Sintaxis:** obj = Reliability Forecast(...Input Format( Time to Event ), Censor Code( value=1 )...)

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha.

#### Forecast Start

**Sintaxis:** obj = Reliability Forecast(...Input Format( Time to Event ), Forecast Start( time )...)

**Descripción:** Especifica la hora a la que comienza el pronóstico. El formato del tiempo depende de la configuración de la opción Unidad de duración de vida.

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

**Sintaxis:** obj = Reliability Forecast(...Input Format( Time to Event ), Life Time Unit( unit )...)

**Descripción:** Especifica el formato de fecha y hora físico de todas las marcas de tiempo, incluido el formato de los títulos de columna para los conteos devueltos. Esta configuración se utiliza en los incrementos de paso de pronóstico. El argumento unit puede ser cualquiera de los siguientes: numérico, año, mes, semana, día, hora, minuto o segundo.

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

