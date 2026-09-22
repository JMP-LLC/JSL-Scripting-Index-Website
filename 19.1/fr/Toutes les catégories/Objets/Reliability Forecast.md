# Reliability Forecast



## Constructeurs associés

### Reliability Forecast

**Syntaxe :** Reliability Forecast

**Description :** Prévoit les défaillances futures en se basant sur les données observées et sur les unités futures à risque. La plate-forme accepte plusieurs formats d’entrée. Voir chaque format pour les détails de spécification.

#### Format de dates

```jsl

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );obj = dt1 << Reliability Forecast(	Input Format( Dates ),	Production Data Table(		dt1,		Production Count( :Sold Quantity ),		Timestamp( :Sold Month )	),	Failure Data Table(		dt2,		Failure Time( :Return Month ),		Timestamp( :Sold Month ),		Failure Count( :Return Quantity )	),	Life Time Unit( Month ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 6, Month ),		Forecast Type( Sequential ),		Interval Type( Prediction Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 1 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Format Nevada

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Format temps avant événement

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

## Messages d'éléments

### Contract

**Syntaxe :** obj &lt;&lt; Forecast( Contract( length, unit ) )

**Description :** Spécifie la durée et l&apos;unité de temps pour le contrat utilisé pour la prévision du risque futur.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Distribution

**Syntaxe :** obj &lt;&lt; Forecast( Distribution( name ) )

**Description :** Spécifie la distribution utilisée pour prévoir le risque futur.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Forecast Options

**Syntaxe :** obj &lt;&lt; Forecast Options( forecast message(), ... ); (obj &lt;&lt; Forecast Options) &lt;&lt; forecast message()

**Description :** Envoie les messages à l&apos;objet scriptable du rapport de prévision. Vous pouvez spécifier une ou plusieurs options dans le menu du triangle rouge du rapport de prévision. S&apos;il n&apos;y a pas d&apos;argument, cette option renvoie une référence JSL à l&apos;objet scriptable Rapport de prévision. S&apos;il y a des arguments, cette option renvoie une référence JSL à l&apos;objet plate-forme. Pour plus d&apos;informations, consultez les entrées sous Options de prévision.

#### Avec les arguments

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );obj << Forecast Options( Animation( 0 ), Use Contract Length( 1 ), Show Interval( 1 ) );

```

#### Sans argument

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );(obj << Forecast Options) << Show Interval( 0 );

```

### Forecast To

**Syntaxe :** obj &lt;&lt; Forecast( Forecast To( time ) )

**Description :** Spécifie l&apos;heure finale à laquelle le risque futur est prévu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Forecast Type

**Syntaxe :** obj &lt;&lt; Forecast( Forecast Type( type ) )

**Description :** Spécifie le type de quantité utilisée pour prévoir le risque futur. L&apos;argument type peut être Incrémentiel ou Cumulé.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Future Risk Set

**Syntaxe :** obj &lt;&lt; Forecast( Future Risk Set( count vector, time vector ) )

**Description :** Spécifie l&apos;ensemble des risques à venir utilisé pour prévoir les risques à venir. Les arguments sont un vecteur des dénombrements de production et un vecteur des temps futurs.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Get Results

**Syntaxe :** obj &lt;&lt; Get Results

**Description :** Renvoie une liste nommée qui contient les résultats de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );result = obj << Get Results;

```

### Group

**Syntaxe :** obj &lt;&lt; Forecast( Group( group ), ... )

**Description :** Identifie le groupe auquel tous les messages de la même clause de prévision doivent être envoyés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Input Format

**Syntaxe :** obj = Reliability Forecast(...Input Format( Nevada|Dates|Time to Event )...)

**Description :** Spécifie le type de format des données d&apos;entrée pour l&apos;analyse.

#### Format de dates

```jsl

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );obj = dt1 << Reliability Forecast(	Input Format( Dates ),	Production Data Table(		dt1,		Production Count( :Sold Quantity ),		Timestamp( :Sold Month )	),	Failure Data Table(		dt2,		Failure Time( :Return Month ),		Timestamp( :Sold Month ),		Failure Count( :Return Quantity )	),	Life Time Unit( Month ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 6, Month ),		Forecast Type( Sequential ),		Interval Type( Prediction Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 1 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Format Nevada

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production.jmp" );dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Sold Quantity ),	Timestamp( :Sold Month ),	Failure Count(		:"08/2009"n, :"09/2009"n, :"10/2009"n, :"11/2009"n, :"12/2009"n, :"01/2010"n,		:"02/2010"n	),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3022.5, 3307.5, 3502, 3502, 3502, 3502],			[3347827200, 3350246400, 3352924800, 3355516800, 3358195200, 3360787200]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 12, Month ),		Forecast Type( Sequential ),		Interval Type( No Interval ),		Alpha( 0.05 )	));

```

#### Format temps avant événement

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

### Interval Type

**Syntaxe :** obj &lt;&lt; Forecast( Interval Type( type ) )

**Description :** Spécifie le type d&apos;intervalle utilisé pour prévoir l&apos;erreur autour du risque futur. L&apos;intervalle type peut être Aucun intervalle, Intervalle de plugin, ou Intervalle de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Risk Set

**Syntaxe :** obj &lt;&lt; Forecast( Risk Set( count vector ) )

**Description :** Spécifie l&apos;ensemble des risques existants utilisé pour prévoir les risques futurs.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Save Data in Time to Event Format

**Syntaxe :** obj &lt;&lt; Save Data in Time to Event Format

**Description :** Enregistre les données au format Nevada ou Dates dans une nouvelle table de données au format Temps avant évènement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );obj << Save Data in Time to Event Format;

```

### Save Forecast Data Table

**Syntaxe :** obj &lt;&lt; Save Forecast Data Table

**Description :** Enregistre le nombre cumulé et incrémentiel des retours dans une nouvelle table de données, conjointement aux variables sélectionnées dans la fenêtre de lancement. Pour les analyses groupées, les noms de table incluent l&apos;ID de groupe et le mot « Aggregated ». Les rendements existants sont également inclus dans les tables de données agrégées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );dt results = obj << Save Forecast Data Table;

```

### Set Interval Level

**Syntaxe :** obj &lt;&lt; Forecast( Set Interval Level( value ) )

**Description :** Spécifie le niveau de confiance pour l&apos;intervalle utilisé pour prévoir l&apos;erreur autour du risque futur.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );n = N Rows( dt );mat = dt << get as matrix;mat = (mat || J( n, 1, 1 )) |/ (mat || J( n, 1, 2 ));dt = As Table( mat );Column( dt, 2 ) << Format( "m/y", 7 );Column( dt, 2 ) << set name( "Time" );Column( dt, 1 ) << set name( "Volume" );For Each( {i}, 3 :: 38,	Column( dt, i ) << set name(		Format( Date Increment( Column( dt, 2 )[i - 2], "Month", 1 ), "m/y", 7 )	));Column( dt, 39 ) << set name( "Group" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Group ID( :Group ),	Life Time Unit( Month ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast Options( Show Interval( 1 ) ));obj << Forecast(	Group( "1" ),	Risk Set(		[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026, 1950,		1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966,		2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]	),	Future Risk Set( [2003, 2003], [3139862400, 3142540800] ),	Forecast To( "01/2004" ),	Distribution( Weibull ),	Contract( 5, Month ),	Forecast Type( Cumulative ),	Interval Type( No Interval ),	Set Interval Level( 0.9 ));obj << Forecast(	Group( "2" ),	Risk Set(		[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2026, 1950, 1989, 1963, 1954, 2030, 1981, 2006,		1991, 1950, 2025, 1996, 1987, 1957, 1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045,		2018, 2036]	),	Future Risk Set( [2000, 3000], [3139862400, 3142540800] ),	Forecast To( "08/2005" ),	Distribution( Weibull ),	Contract( 36, Month ),	Forecast Type( Incremental ),	Interval Type( Prediction Interval ),	Set Interval Level( 0.9 ));

```

### Show Graph Filter

**Syntaxe :** obj &lt;&lt; Show Graph Filter( state=0|1 )

**Description :** Affiche ou masque le filtre de graphiques pour vous permettre de sélectionner les périodes de production à afficher dans les graphiques des données observées. Les barres s&apos;estompent pour les périodes désélectionnées. Désélectionnez les périodes pour afficher le graphique dans son état d&apos;origine. Cette option n&apos;est pas disponible pour les données Temps avant événement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );obj << Show Graph Filter( 1 );

```

### Show Legend

**Syntaxe :** obj &lt;&lt; Show Legend( state=0|1 )

**Description :** Affiche ou masque une légende pour le rapport Données observées. Cette option n&apos;est pas disponible pour les données Temps avant événement.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );obj << Show Legend( 1 );

```

## Messages d'éléments partagés

### Action

**Syntaxe :** obj &lt;&lt; Action

**Description :** Trappe tout usage dans une plate-forme pour y insérer les expressions à calculer. Définit provisoirement les contextes des boîtes d’affichage et des tables de données dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntaxe :** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Description :** Appliquez une préconfiguration créée précédemment à l&apos;objet, ce qui met à jour les options et les personnalisations pour correspondre aux paramètres enregistrés.

**JMP Version ajoutée :** 18

#### Préconfiguration anonyme

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Rechercher dans les dossiers

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Rechercher par nom

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntaxe :** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Description :** Refait l&apos;analyse automatiquement pour l&apos;exclusion et les modifications de données. Si l&apos;option Nouveau calcul automatique est activée, envisagez d&apos;utiliser les commandes Wait(0) pour vous assurer que l&apos;exclusion et les modifications de données sont prises en compte avant le recalcul.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntaxe :** obj &lt;&lt; Get Web Support

**Description :** Renvoyer un nombre indiquant le niveau de support HTML interactif pour l&apos;objet d&apos;affichage. 1 signifie que tout ou partie des éléments sont pris en charge. 0 signifie qu&apos;il n&apos;y a aucun support.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntaxe :** obj &lt;&lt; Get Where Expr

**Description :** Renvoie l&apos;expression Where pour le sous-ensemble de données, si la plate-forme a été lancée avec By() ou Where(). Sinon, renvoie la Empty()

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntaxe :** Ignore Platform Preferences( state=0|1 )

**Description :** Ignore les paramètres actuels des préférences de la plate-forme. Le message est ignoré lorsqu&apos;il est envoyé à la plate-forme après la création.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntaxe :** obj &lt;&lt; Local Data Filter

**Description :** Permet de filtrer les données locales, dans la plate-forme concernée, par groupes ou étendues spécifiques

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntaxe :** obj = New Preset()

**Description :** Créez une préconfiguration anonyme représentant les options et les personnalisations appliquées à l&apos;objet. Cet objet peut être passé à Apply Preset pour copier les paramètres vers un autre objet du même type.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntaxe :** obj &lt;&lt; Paste Local Data Filter

**Description :** Appliquer le filtre des données locales du presse-papiers au rapport actif.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntaxe :** obj &lt;&lt; Redo Analysis

**Description :** Exécute à nouveau cette même analyse dans une nouvelle fenêtre. L&apos;analyse sera différente si les données ont été modifiées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntaxe :** obj &lt;&lt; Remove Column Switcher

**Description :** Supprime le sélecteur de colonne le plus récent ajouté à la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntaxe :** obj &lt;&lt; Remove Local Data Filter

**Description :** Permet de supprimer un filtre de données locales créé précédemment et rétablit toutes les valeurs des données directement dans la table de données utilisée dans la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntaxe :** obj &lt;&lt; Report; Report( obj )

**Description :** Renvoie une référence à l’objet rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( :_bycol ),	Group Options( Return Group( 1 ) ));obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ), By( :_bycol ),	Group Options( Return Group( 1 ) ));obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Save Script to Script Window;

```

### SendToByGroup

**Syntaxe :** SendToByGroup( {":Column == level"}, command );

**Description :** Envoie les commandes de plate-forme ou de personnalisation d’affichage à chaque niveau d’un « par groupe ».

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntaxe :** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Description :** SendToEmbeddedScriptable rétablit les paramètres des objets scriptables intégrés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntaxe :** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Description :** La commande “Send To Report” est utilisée en tandem avec la commande “Dispatch” pour personnaliser l’aspect du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntaxe :** obj &lt;&lt; Sync to Data Table Changes

**Description :** Sync avec l&apos;exclusion et les modifications apportées aux données.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntaxe :** obj &lt;&lt; Title( "new title" )

**Description :** Définit le titre de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Forecast Options

### Messages d'éléments

#### Animation

**Syntaxe :** obj &lt;&lt; Animation( state=0|1 )

**Description :** Contrôle le clignotement des points actifs dans les graphiques de prévision. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Forecasting Interval Type

**Syntaxe :** obj &lt;&lt; Forecasting Interval Type( type )

**Description :** Spécifie le type d&apos;intervalle utilisé pour prévoir l&apos;erreur autour du risque futur. Le type d&apos;intervalle peut être un intervalle de plugin ou un intervalle de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Import Future Risk Set

**Syntaxe :** obj &lt;&lt; Import Future Risk Set

**Description :** Vous permet d&apos;importer les données de production futures d&apos;une autre table de données ouverte. Les nouvelles prévisions apparaissent alors dans le graphique de risque futur. La table de données importée doit avoir une colonne pour les horodatages et pour le nombre de productions.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;import set = [3139862400 2000, 3142540800 2050, 3145219200 2100, 3147811200 2150, 31504896002200, 3153081600 2250];dt import = As Table( import set, <<Column Names( {"Time", "Volume"} ) );option << Import Future Risk Set;

```

#### Interactive Configuration of Risk Sets

**Syntaxe :** obj &lt;&lt; Interactive Configuration of Risk Sets( state=0|1 )

**Description :** Détermine si vous pouvez faire glisser les points actifs dans les graphiques.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Monte Carlo Sample Size

**Syntaxe :** obj &lt;&lt; Monte Carlo Sample Size( number )

**Description :** Spécifie la taille d&apos;échantillon de la simulation utilisée pour générer les intervalles de prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Random Seed

**Syntaxe :** obj &lt;&lt; Random Seed( number )

**Description :** Spécifie une graine aléatoire pouvant être utilisée pour reproduire les intervalles de prévision simulés.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Save Forecast Data Table

**Syntaxe :** obj &lt;&lt; Save Forecast Data Table

**Description :** Enregistre le nombre cumulé et incrémentiel des retours dans une nouvelle table de données, conjointement aux variables sélectionnées dans la fenêtre de lancement. Pour les analyses groupées, les noms de table incluent l&apos;ID de groupe et le mot « Aggregated ». Les rendements existants sont également inclus dans les tables de données agrégées.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Save Forecast Data Table;

```

#### Set Failure Cost

**Syntaxe :** obj &lt;&lt; Set Failure Cost( number )

**Description :** Spécifie le coût pour chaque défaillance.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Show Interval

**Syntaxe :** obj &lt;&lt; Show Interval( state=0|1 )

**Description :** Affiche ou masque les limites de confiance à 95 % dans le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Spreadsheet Configuration of Risk Sets

**Syntaxe :** obj &lt;&lt; Spreadsheet Configuration of Risk Sets( state=0|1 )

**Description :** Affiche ou masque un rapport qui vous permet de saisir des dénombrements de production et des horodatages spécifiques au lieu de les ajouter aux graphiques interactifs.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Use Approximate Distribution

**Syntaxe :** obj &lt;&lt; Use Approximate Distribution( state=0|1 )

**Description :** Indique que les intervalles de prévision sont générés en utilisant une distribution de Poisson pour se rapprocher du nombre de défaillances dans chaque intervalle. Si cette option n&apos;est pas sélectionnée, les intervalles de prévision utilisent une distribution multinomiale pour simuler le nombre de défaillances dans chaque intervalle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Use Contract Length

**Syntaxe :** obj &lt;&lt; Use Contract Length( state=0|1 )

**Description :** Détermine si la durée du contrat spécifiée est prise en compte dans la prévision.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

#### Use Failure Cost

**Syntaxe :** obj &lt;&lt; Use Failure Cost( state=0|1 )

**Description :** Affiche le coût de défaillance au lieu du nombre de défaillances dans le graphique de risque futur.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );obj = dt << Run Script( "Reliability Forecast" );option = obj << Forecast Options;option << Animation( 0 );option << Interactive Configuration of Risk Sets( 0 );option << Spreadsheet Configuration of Risk Sets( 1 );option << Show Interval( 1 );option << Forecasting Interval Type( Prediction Interval );option << Use Contract Length( 1 );option << Use Failure Cost( 1 );option << Set Failure Cost( 100 );option << Monte Carlo Sample Size( 10000 );option << Random Seed( 1111 );option << Use Approximate Distribution( 1 );

```

## Reliability Forecast for Dates Format

### Colonnes

#### Failure Count

**Syntaxe :** obj &lt;&lt; Failure Count( column )

#### Failure Time

**Syntaxe :** obj &lt;&lt; Failure Time( column(s) )

#### Group ID

**Syntaxe :** obj &lt;&lt; Group ID( column )

#### Left Censor

**Syntaxe :** obj &lt;&lt; Left Censor( column )

#### Production Count

**Syntaxe :** obj &lt;&lt; Production Count( column )

#### Timestamp

**Syntaxe :** obj &lt;&lt; Timestamp( column )

### Messages d'éléments

#### Censor Code

**Syntaxe :** obj = Reliability Forecast(...Input Format( Dates ), Censor Code( value=1 )...)

**Description :** Identifie la valeur de la colonne Censure qui désigne les observations censurées à droite.

#### Life Time Unit

**Syntaxe :** obj = Reliability Forecast(...Input Format( Dates ), Life Time Unit( unit )...)

**Description :** Spécifie le format de date et d&apos;heure de toutes les estampille temporelles, y compris le format des titres de colonne pour les dénombrements de retour. Ce paramètre est utilisé dans la prévision des incréments d&apos;étape. L&apos;argument unit peut être l&apos;un des suivants : numérique, année, mois, semaine, jour, heure, minute ou seconde.

```jsl

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );obj = dt1 << Reliability Forecast(	Input Format( Dates ),	Production Data Table(		dt1,		Production Count( :Sold Quantity ),		Timestamp( :Sold Month )	),	Failure Data Table(		dt2,		Failure Time( :Return Month ),		Timestamp( :Sold Month ),		Failure Count( :Return Quantity )	),	Life Time Unit( Month ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 6, Month ),		Forecast Type( Sequential ),		Interval Type( Prediction Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 1 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

## Reliability Forecast for Nevada Format

### Colonnes

#### Failure Count

**Syntaxe :** obj &lt;&lt; Failure Count( column(s) )

#### Group ID

**Syntaxe :** obj &lt;&lt; Group ID( column )

#### Production Count

**Syntaxe :** obj &lt;&lt; Production Count( column )

#### Timestamp

**Syntaxe :** obj &lt;&lt; Timestamp( column )

### Messages d'éléments

#### Interval Censored Failure

**Syntaxe :** obj = Reliability Forecast(...Input Format( Nevada ), Interval Censored Failure( state=0|1 )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Spécifie que les quantités renvoyées doivent être traitées comme des observations avec intervalle de censure. L&apos;intervalle est compris entre la dernière heure enregistrée et l&apos;heure à laquelle l&apos;échec a été observé. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Life Time Unit

**Syntaxe :** obj = Reliability Forecast(...Input Format( Nevada ), Life Time Unit( unit )...)

**Description :** Spécifie le format de date et d&apos;heure de toutes les estampille temporelles, y compris le format des titres de colonne pour les dénombrements de retour. Ce paramètre est utilisé dans la prévision des incréments d&apos;étape. L&apos;argument unit peut être l&apos;un des suivants : numérique, année, mois, semaine, jour, heure, minute ou seconde.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

## Reliability Forecast for Time to Event Format

### Colonnes

#### Censor

**Syntaxe :** obj &lt;&lt; Censor( column )

#### Freq

**Syntaxe :** obj &lt;&lt; Freq( column )

**Description :** Spécifie une colonne dont les valeurs assignent une fréquence à chaque ligne pour l&apos;analyse.

#### Group ID

**Syntaxe :** obj &lt;&lt; Group ID( column )

#### Time to Event

**Syntaxe :** obj &lt;&lt; Time to Event( column(s) )

### Messages d'éléments

#### Censor Code

**Syntaxe :** obj = Reliability Forecast(...Input Format( Time to Event ), Censor Code( value=1 )...)

**Description :** Identifie la valeur de la colonne Censure qui désigne les observations censurées à droite.

#### Forecast Start

**Syntaxe :** obj = Reliability Forecast(...Input Format( Time to Event ), Forecast Start( time )...)

**Description :** Spécifie l&apos;heure à laquelle la prévision commence. Le format de l&apos;heure dépend du paramètre de l&apos;option Unité de durée de vie.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

#### Life Time Unit

**Syntaxe :** obj = Reliability Forecast(...Input Format( Time to Event ), Life Time Unit( unit )...)

**Description :** Spécifie le format de date et d&apos;heure de toutes les estampille temporelles, y compris le format des titres de colonne pour les dénombrements de retour. Ce paramètre est utilisé dans la prévision des incréments d&apos;étape. L&apos;argument unit peut être l&apos;un des suivants : numérique, année, mois, semaine, jour, heure, minute ou seconde.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

