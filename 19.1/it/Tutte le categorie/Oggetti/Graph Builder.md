# Graph Builder



## Area Element

### Costruttori associati

#### Area Element

**Sintassi:** Area Element

**Descrizione:** mostra una risposta sommarizzata per categorie.

**Area del range come intervallo personalizzato intorno alla linea**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

**Area sovrapposta con pattern di riempimento**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Grafico ad area impilato**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Grafico ad area impilato al 100%**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox,			{Format( "Percent", 13, 0 ), Max( 1 )}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

### Messaggi degli elementi

#### Area Style

**Sintassi:** obj &lt;&lt; Area Style( "Impilato"|"Sovrapposto"|"Range"|"Range impilato" )

#### Connection

**Sintassi:** obj &lt;&lt; Connection( "Linea"|"Freccia"|"Curva"|"Passo"|"Passo centrato"|"Orizzontale"|"Verticale" )

#### Error Interval

**Sintassi:** obj &lt;&lt; Error Interval( "Automatica"|"Nessuno"|"Range"|"Range interquartile"|"Errore standard"|"Deviazione standard"|"Intervallo di confidenza"|"Deviazione assoluta mediana"|"Intervallo personalizzato"|"Intervallo a due vie" )

#### Interval Style

**Sintassi:** obj &lt;&lt; Interval Style( "Barra degli errori"|"Banda"|"Banda hash"|"Freccia" )

#### Missing Factors

**Sintassi:** obj &lt;&lt; Missing Factors( "Ignora"|"Tratta come mancante"|"Tratta come zero" )

**Descrizione:** Come mostrare connessioni che includono livelli di fattori mancanti.

**JMP Versione aggiunta:** 15

#### Missing Values

**Sintassi:** obj &lt;&lt; Missing Values( "Connesso Continuo"|"Connesso Sfumato"|"Connesso Tratteggiato"|"Nessuna connessione" )

**Descrizione:** Come mostrare connessioni che includono valori mancanti.

#### Ordering

**Sintassi:** obj &lt;&lt; Ordering( "Automatica"|"Ordine delle righe"|"Sommarizzato"|"Entro la riga" )

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Row order

**Sintassi:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Sintassi:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Sintassi:** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**Sintassi:** obj &lt;&lt; Stack Negative( "Sovrapposizione"|"Separa negativi"|"Tratta come zero" )

**Descrizione:** Controlla come vengono gestiti i valori negativi dei dati quando vengono impilati.

**JMP Versione aggiunta:** 17

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Costruttori associati

### Graph Builder

**Sintassi:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Descrizione:** Offre un&apos;interfaccia grafica interattiva che consente di esplorare i dati. È possibile trascinare le colonne nelle zone del grafico per creare una varietà di grafici, tra cui grafici a dispersione, grafici dei profili isometrici, grafici a barre, grafici ad area, box plot, istogrammi, heatmap, grafici a torta, mappe ad albero, diagrammi a mosaico e mappe.

#### Assi x multipli

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### Assi y paralleli, linee sovrapposte

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Assi y sinistro e destro

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Combinazione grafico a barre e linea di tendenza smoothing

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### Curve della funzione di distribuzione cumulativa empirica sovrapposte

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### Diagramma di flusso della marcia di Napoleone

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Grafici indipendenti con la variabile BY

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Grafici violino con quartili

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### Grafico a barre in pila al 100%

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Grafico a bolle con curve sovrapposte

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### Grafico a dispersione con box plot marginali

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### Grafico di variabilità

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### Intervallo di confidenza della proporzione binomiale

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Linea con intervallo di banda personalizzato

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### Linee connesse con punti sovrapposti

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### Linee freccia, una per riga

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### Mappa coropletica aree uguali del Mediterraneo

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Mappa wafer

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### Profiler isometrici densità kernel bivariata sovrapposti

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### Punti del diagramma di contorno  e del grafico a dispersione

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### Punti e smoother

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### Raggruppamento trellis in stile Coplot

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Riquadri con assi y non allineati

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### Riquadri di regressione lineare

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### Tabella di riepilogo degli assi

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Add Element

**Sintassi:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**Descrizione:** Aggiunge un nuovo elemento grafico alle posizioni X e Y specificate. La specifica dell&apos;elemento comprende il nome dell&apos;elemento, i ruoli di dati che utilizza e i rispettivi valori di opzione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**Sintassi:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**Descrizione:** Aggiunge una nuova variabile al modello del Costruttore di grafici, con un ruolo e una posizione specificati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

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

### Auto Stretching

**Sintassi:** obj &lt;&lt; Auto Stretching( state=0|1 )

**Descrizione:** Attiva o disattiva l&apos;estensione automatica del grafico con la finestra che lo contiene. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Back Color

**Sintassi:** obj &lt;&lt; Back Color( color )

**Descrizione:** Imposta il colore per tutto lo sfondo intorno al grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Categorical Color Theme

**Sintassi:** obj &lt;&lt; Categorical Color Theme

**Descrizione:** Imposta il tema colori usato per le categorie.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Continuous Color Theme

**Sintassi:** obj &lt;&lt; Continuous Color Theme

**Descrizione:** Imposta il tema colori usato per i gradienti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

```

### Done

**Sintassi:** obj &lt;&lt; Done

**Descrizione:** Nasconde il pannello di controllo e disattiva qualsiasi campionamento delle righe.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**Sintassi:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() )) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Identifica gli elementi della visualizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**Sintassi:** obj &lt;&lt; Error Bar Offset

**Descrizione:** Apre una finestra di dialogo per impostare l&apos;offset per le barre degli errori.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**Sintassi:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero. "1", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**Sintassi:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero quando sono presenti sia l&apos;asse sinistro che quello destro. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**Sintassi:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**Descrizione:** Moltiplicatore per la quantità con cui la scala di un asse è estesa per includere lo zero quando si è in modalità Assi Y paralleli. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**Sintassi:** obj &lt;&lt; Fit to Window( "Automatica"|"Attivato"|"Disattivato"|"Mantieni proporzioni" )

**Descrizione:** Imposta il comportamento di espansione automatica del report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Element

**Sintassi:** obj &lt;&lt; Get Element( xposition, yposition, i )

**Descrizione:** Restituisce le specifiche di un elemento grafico per le posizioni x e y specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**Sintassi:** obj &lt;&lt; Get Elements( xposition, yposition )

**Descrizione:** Restituisce un elenco di specifiche di un elemento per le posizioni x e y specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Legend Display

**Sintassi:** obj &lt;&lt; Get Legend Display

**Descrizione:** Restituisce il riquadro di visualizzazione della legenda per il grafico che può essere interrogato o modificato.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**Sintassi:** obj &lt;&lt; Get Legend Server

**Descrizione:** Restituisce un oggetto che contiene le informazioni utilizzate dalla visualizzazione della legenda e dai corrispondenti segmenti di visualizzazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**Sintassi:** obj &lt;&lt; Get N Elements( xposition, yposition )

**Descrizione:** Restituisce il numero di elementi grafici per le posizioni x e y specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**Sintassi:** nrole

**Descrizione:** Restituisce il numero di posizioni in uso per un dato ruolo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**Sintassi:** n = obj &lt;&lt; Get N Variables

**Descrizione:** Restituisce il numero di variabili in uso.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

```

### Get Variable

**Sintassi:** obj &lt;&lt; Get Variable( index )

**Descrizione:** Restituisce una specifica di variabile.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**Sintassi:** list = obj &lt;&lt; Get Variables

**Descrizione:** Restituisce un elenco di specifiche di variabili per le variabili in uso.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

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

### Graph Spacing

**Sintassi:** obj &lt;&lt; Graph Spacing( gap=1 )

**Descrizione:** Imposta la quantità di spazio tra i riquadri del grafico. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**Sintassi:** obj &lt;&lt; Grid Color( color )

**Descrizione:** Imposta il colore per le linee della griglia intorno al grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**Sintassi:** obj &lt;&lt; Grid Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza delle linee della griglia.. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Include Missing Categories

**Sintassi:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Descrizione:** Tratta i valori mancanti come livello separato per le variabili categoriche.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**Sintassi:** obj &lt;&lt; Launch Analysis

**Descrizione:** Avvia un&apos;analisi utilizzando le variabili correnti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**Sintassi:** obj &lt;&lt; Legend Floating Offset

**Descrizione:** Imposta l&apos;offset in pixel per la legenda quando la posizione della legenda è impostata su "Mobile".

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**Sintassi:** obj &lt;&lt; Legend Position( "Destra"|"Basso"|"Interna sinistra"|"Interna destra"|"All&apos;interno in basso a sinistra"|"All&apos;interno in basso a destra"|"Mobile all&apos;interno" )

**Descrizione:** Imposta la posizione della legenda.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**Sintassi:** obj &lt;&lt; Legend Settings

**Descrizione:** Apre una finestra di dialogo per modificare le proprietà della legenda.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**Sintassi:** obj &lt;&lt; Level Fill Color( color )

**Descrizione:** Imposta il colore per i nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**Sintassi:** obj &lt;&lt; Level Frame Color( color )

**Descrizione:** Imposta il colore per le linee intorno ai nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**Sintassi:** obj &lt;&lt; Level Spacing Color( color )

**Descrizione:** Imposta il colore della spaziatura tra le etichette di livello.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**Sintassi:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza della spaziatura tra le etichette di livello. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**Sintassi:** obj &lt;&lt; Level Text Color( color )

**Descrizione:** Imposta il colore per il testo dei nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**Sintassi:** obj &lt;&lt; Level Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame dei nomi di livello nel grafico. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**Sintassi:** obj &lt;&lt; Level Underline( state=0|1 )

**Descrizione:** Sottolinea i nomi di livello nel grafico o rimuove la sottolineatura.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**Sintassi:** obj &lt;&lt; Lighten large fills( state=0|1 )

**Descrizione:** Schiarisce automaticamente i colori per elementi torta, mappa ad albero e mosaico che riempiono grandi aree. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**Sintassi:** obj &lt;&lt; Link Page Axes( "Nessuno"|"Solo X"|"Solo Y"|"X e Y" )

**Descrizione:** Definisce quali assi sono collegati tra livelli di gruppi di pagine.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Lock Scales

**Sintassi:** obj &lt;&lt; Lock Scales( state=0|1 )

**Descrizione:** Blocca i range dell&apos;asse e del gradiente in modo che non possano variare in risposta a modifiche dei dati o dei filtri.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**Sintassi:** obj &lt;&lt; Make into Data Table

**Descrizione:** Crea una nuova tabella di dati contenente le immagini dei grafici.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Messaggi degli elementi condivisi

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Order Statistic

**Sintassi:** obj &lt;&lt; Order Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"="Media" )

**Descrizione:** Imposta l&apos;ordine predefinito basato su una statistica di riepilogo applicato quando per una variabile nel grafico si utilizza il messaggio &apos;Ordina per&apos;. "Media", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**Sintassi:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**Descrizione:** Limita il numero di livelli di sovrapposizione in cui la codifica di sovrapposizione utilizzerà gli stili di linea per l&apos;impostazione automatica in presenza di una variabile di colore. "6", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**Sintassi:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**Descrizione:** Limita il numero di livelli di sovrapposizione in cui la codifica di sovrapposizione utilizzerà gli stili degli indicatori per l&apos;impostazione automatica in presenza di una variabile di colore. "62", per impostazione predefinita.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**Sintassi:** obj &lt;&lt; Page Count Limit( count=200 )

**Descrizione:** Imposta il numero massimo di pagine create per la variabile della pagina, per evitare la degradazione accidentale delle performance. "200", per impostazione predefinita.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),	Elements( Points( X, Y ) ));gb << Page Count Limit( 5 );

```

### Page Gap Size

**Sintassi:** obj &lt;&lt; Page Gap Size( gap=25 )

**Descrizione:** Imposta la quantità di spazio tra i gruppi di pagine. "25", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**Sintassi:** obj &lt;&lt; Page Level Fill Color( color )

**Descrizione:** Imposta il colore per i nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**Sintassi:** obj &lt;&lt; Page Level Frame Color( color )

**Descrizione:** Imposta il colore per le linee intorno ai nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**Sintassi:** obj &lt;&lt; Page Level Text Color( color )

**Descrizione:** Imposta il colore per il testo dei nomi di livello nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**Sintassi:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame dei nomi di livello nel grafico. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Transparency( .2 );

```

### Page Level Underline

**Sintassi:** obj &lt;&lt; Page Level Underline( state=0|1 )

**Descrizione:** Sottolinea i nomi di livello nel grafico o rimuove la sottolineatura.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**Sintassi:** obj &lt;&lt; Parallel Axis Merging( "Sempre"|"Bassa similarità"|"Similarità media"|"Alta similarità"|"Mai" )

**Descrizione:** Determina quando l&apos;impostazione automatica Combina scale deve scegliere Parallelo unito invece di Parallelo indipendente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**Sintassi:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**Descrizione:** Tutti gli assi Y condividono lo stesso grafico. Come le coordinate parallele, ma con una variabile X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Random Seed

**Sintassi:** obj &lt;&lt; Random Seed( number )

**Descrizione:** Imposta un seme specifico per jitter casuale.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relative Sizes

**Sintassi:** Relative Sizes(axis, matrix of relative size values)

**Descrizione:** Determina la proporzione di spazio assegnata a ciascuno degli assi multipli di una serie.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Element

**Sintassi:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**Descrizione:** Rimuove un elemento grafico alle posizioni X e Y specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Remove Variable

**Sintassi:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**Descrizione:** Rimuove una variabile dal modello del Costruttore di grafici, specificata dall&apos;indice o da un nome di colonna, ruolo e una posizione specificati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**Sintassi:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**Descrizione:** Determina se l&apos;asse delle pagine collegate in una griglia deve essere visualizzato una volta per ogni grafico o una volta per ogni riga o colonna di grafici.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Report

**Sintassi:** obj &lt;&lt; Report; Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Sampling

**Sintassi:** obj &lt;&lt; Sampling( number )

**Descrizione:** Seleziona in modo casuale un sottoinsieme di dati utilizzando una proporzione o un conteggio specificato. È utile quando i dati sono di grandi dimensioni e il grafico dovrà essere ancora modificato.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

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

### Set Alpha Level

**Sintassi:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**Sintassi:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**Descrizione:** Modifica il livello alfa utilizzato per le bande di confidenza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**Sintassi:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello di controllo. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**Sintassi:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**Descrizione:** Mostra o nasconde le righe escluse sui diagrammi. Quando questa opzione è selezionata, le righe escluse sono incluse nel conteggio dei punti fuori controllo, ma escluse dai calcoli numerici.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**Sintassi:** obj &lt;&lt; Show Footer( state=0|1 )

**Descrizione:** Mostra/Nasconde il testo del piè di pagina. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**Sintassi:** obj &lt;&lt; Show Legend( state=0|1 )

**Descrizione:** Mostra/Nasconde la legenda a destra del grafico. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**Sintassi:** obj &lt;&lt; Show Subtitle( state=0|1 )

**Descrizione:** Mostra o nasconde il sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**Sintassi:** obj &lt;&lt; Show Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo del grafico. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**Sintassi:** obj &lt;&lt; Show X Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse X. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**Sintassi:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo dell&apos;asse X. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**Sintassi:** obj &lt;&lt; Show Y Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse Y. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**Sintassi:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**Descrizione:** Mostra o nasconde il titolo dell&apos;asse Y. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**Sintassi:** obj &lt;&lt; Size( width, height )

**Descrizione:** Imposta le dimensioni del grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**Sintassi:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**Descrizione:** Imposta i bordi dei riquadri interni del grafico. "0", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**Sintassi:** obj &lt;&lt; Subtitle Alignment( "Sinistra"|"Centrale"|"Destra"|"Automatica" )

**Descrizione:** Imposta l&apos;allineamento del sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**Sintassi:** obj &lt;&lt; Subtitle Span( "Completa"|"Contenuto del grafico" )

**Descrizione:** Imposta l&apos;estensione del sottotitolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**Sintassi:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**Descrizione:** Imposta la statistica di riepilogo predefinita utilizzata dai diversi elementi nel grafico. Per gli elementi di grafici a barre e a linee, l&apos;impostazione predefinita è &apos;Media&apos;. "Media", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Title Alignment

**Sintassi:** obj &lt;&lt; Title Alignment( "Sinistra"|"Centrale"|"Destra" )

**Descrizione:** Imposta l&apos;allineamento del titolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**Sintassi:** obj &lt;&lt; Title Fill Color( color )

**Descrizione:** Imposta il colore per il riempimento dello sfondo del titolo nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**Sintassi:** obj &lt;&lt; Title Frame Color( color )

**Descrizione:** Imposta il colore per la linea intorno al frame del titolo nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**Sintassi:** obj &lt;&lt; Title Span( "Completa"|"Contenuto del grafico" )

**Descrizione:** Imposta l&apos;estensione del titolo del grafico.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**Sintassi:** obj &lt;&lt; Title Text Color( color )

**Descrizione:** Imposta il colore per il testo del titolo nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**Sintassi:** obj &lt;&lt; Title Transparency( fraction=1 )

**Descrizione:** Imposta la trasparenza per il frame del titolo nel grafico. "1", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**Sintassi:** obj &lt;&lt; Title Underline( state=0|1 )

**Descrizione:** Sottolinea il titolo nel grafico o rimuove la sottolineatura.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Update Element

**Sintassi:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**Descrizione:** Modifica le proprietà di un elemento esistente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**Sintassi:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**Descrizione:** Inizializza i livelli legenda con colori riga quando ogni livello ha un unico colore. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**Sintassi:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Definisce le variabili utilizzate nella visualizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### X Group Edge

**Sintassi:** obj &lt;&lt; X Group Edge( "Alto"|"Basso" )

**Descrizione:** Sposta in alto o in basso l&apos;asse per il gruppo X. Per impostazione predefinita l&apos;asse viene spostato in alto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**Sintassi:** obj &lt;&lt; Y Group Edge( "Sinistra"|"Destra" )

**Descrizione:** Sposta a destra o a sinistra l&apos;asse per il gruppo Y. Per impostazione predefinita l&apos;asse viene spostato a destra.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**Sintassi:** obj &lt;&lt; Y Group Level Orientation( "Orizzontale"|"Verticale" )

**Descrizione:** Determina se il testo dell&apos;etichetta del livello del gruppo Y è orizzontale o verticale (ruotata).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**Sintassi:** obj &lt;&lt; Y Group Title Orientation( "Orizzontale"|"Verticale" )

**Descrizione:** Determina se il testo dell&apos;etichetta del titolo del gruppo Y è orizzontale o verticale (ruotata).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

```

## Bar Element

### Costruttori associati

#### Bar Element

**Sintassi:** Bar Element

**Descrizione:** mostra una risposta sommarizzata per categorie.

**Barre con linee sovrapposte**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**Barre con valori piccoli impilate come Altro**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**Barre di larghezza variabile, ordinate per valore**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**Barre impilate divergenti con scala Likert**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements(		Bar(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			Y,			Legend( 4 ),			Bar Style( "Stacked" )		)	),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**Barre riempite che evidenziano le dieci categorie principali**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements(		Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) )	),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) ||						"B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ),			Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )			}		)	));

```

**Colorazione delle barre in base ai dati**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula(			If(				:diff == Col Minimum( :diff ), "min",				:diff == Col Maximum( :diff ), "max",				"other"			)		)	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [0, 1, -1]} )}		)	));

```

**Diagramma ad aghi**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

**Grafico a barre con barre etichettate**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**Grafico a barre con intervalli di confidenza**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**Grafico a barre del range**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**Grafico a barre e a frecce**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**Grafico a barre in pila al 100%**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**Grafico a barre in pila di 3 variabili e colori personalizzati**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements(		Bar(			X,			Y( 1 ),			Y( 2 ),			Y( 3 ),			Bar Style( "Stacked" ),			Summary Statistic( "Mean" ),			Legend( 5 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Grafico a barre in pila ordinate**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer",				"Defective sanding", "Loose veneer", "Sand throughs", "Scratched veneer",				"Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**Grafico a barre ordinato per conteggio**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**Grafico a barre raggruppato affiancato utilizzando la mediana**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Grafico bullet**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )}		)	));

```

**Intervallo con punto utilizzando le trasformate**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**Linee mobili con punti sovrapposti**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

### Messaggi degli elementi

#### Bar Style

**Sintassi:** obj &lt;&lt; Bar Style( "Affiancato"|"Impilato"|"Ordinato impilato"|"Punto"|"Nidificato"|"Range"|"Range affiancati"|"Intervallo"|"Intervalli affiancati"|"Intervallo a due vie"|"Freccia"|"Singolo"|"Stock"|"Box plot"|"Ago"|"Float"|"Mappa ad albero"|"Riempito" )

#### Error Interval

**Sintassi:** obj &lt;&lt; Error Interval( "Automatica"|"Nessuno"|"Range"|"Range interquartile"|"Errore standard"|"Deviazione standard"|"Intervallo di confidenza"|"Deviazione assoluta mediana"|"Intervallo personalizzato"|"Intervallo a due vie" )

#### Interval Style

**Sintassi:** obj &lt;&lt; Interval Style( "Barra degli errori"|"Banda"|"Banda hash"|"Freccia" )

#### Label

**Sintassi:** obj &lt;&lt; Label( "Nessuna etichetta"|"Etichetta per valore"|"Etichetta per percentuale di valori totali"|"Etichetta per riga" )

#### Label Format

**Sintassi:** obj &lt;&lt; Label Format

**JMP Versione aggiunta:** 16

#### Overlap

**Sintassi:** obj &lt;&lt; Overlap( "Automatica"|"Nessuna"|"Metà"|"Completa" )

**JMP Versione aggiunta:** 16

#### Packed Coloring

**Sintassi:** obj &lt;&lt; Packed Coloring( "Colore della barra"|"Colore della barra ombreggiato"|"Grigi" )

**JMP Versione aggiunta:** 14

#### Packed Labeling

**Sintassi:** obj &lt;&lt; Packed Labeling( number )

**JMP Versione aggiunta:** 14

#### Packed Ordering

**Sintassi:** obj &lt;&lt; Packed Ordering( "Per dimensione"|"Per etichetta" )

**JMP Versione aggiunta:** 14

#### Packed Placement

**Sintassi:** obj &lt;&lt; Packed Placement( "Stack separato"|"Stack minore"|"Primo stack" )

**JMP Versione aggiunta:** 14

#### Packed Primaries

**Sintassi:** obj &lt;&lt; Packed Primaries( number )

**JMP Versione aggiunta:** 14

#### Packed Primary Labels

**Sintassi:** obj &lt;&lt; Packed Primary Labels( "Sull&apos;asse"|"Barre interne" )

**JMP Versione aggiunta:** 14

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Save Summary Formula

**Sintassi:** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Box Plot Element

### Costruttori associati

#### Box Plot Element

**Sintassi:** Box Plot Element

**Descrizione:** mostra una vista compatta della distribuzione di una variabile con quartili e outlier.

**Box plot degli outlier orizzontali**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**Box plot pieni con colore basato sui dati**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

**Box plot sovrapposti**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

### Messaggi degli elementi

#### 5 Number Summary

**Sintassi:** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP Versione aggiunta:** 14

#### Box Placement

**Sintassi:** obj &lt;&lt; Box Placement( "Offset"|"Allinea" )

**JMP Versione aggiunta:** 16

#### Box Style

**Sintassi:** obj &lt;&lt; Box Style( "Normale"|"Continuo"|"Fine" )

#### Box Type

**Sintassi:** obj &lt;&lt; Box Type( "Quantile"|"Outlier" )

#### Confidence Diamond

**Sintassi:** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP Versione aggiunta:** 16

#### Fences

**Sintassi:** obj &lt;&lt; Fences( state=0|1 )

**JMP Versione aggiunta:** 16

#### Jitter

**Sintassi:** obj &lt;&lt; Jitter( "Nessuno"|"Automatica"|"Numero uniforme casuale"|"Numero normale casuale"|"Jitter di densità casuale"|"Riempito"|"Griglia"|"Griglia esagonale"|"Grafico a sciame" )

#### Notched

**Sintassi:** obj &lt;&lt; Notched( state=0|1 )

**JMP Versione aggiunta:** 16

#### Outliers

**Sintassi:** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Shortest Half

**Sintassi:** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP Versione aggiunta:** 16

#### Shortest Half Color

**Sintassi:** obj &lt;&lt; Shortest Half Color( color )

**JMP Versione aggiunta:** 16

#### Width Proportion

**Sintassi:** obj &lt;&lt; Width Proportion( number=0 )

**Descrizione:** "0", per impostazione predefinita.

**JMP Versione aggiunta:** 15

## Caption Element

### Costruttori associati

#### Caption Element

**Sintassi:** Caption Element

**Descrizione:** mostra un valore di statistica di riepilogo per i dati.

**Due statistiche con didascalia, per fattore**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

**Linea di riferimento basata sui dati**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**Statistica di riepilogo con didascalie a livello di grafico**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**Statistiche di riepilogo della tabella degli assi**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### Messaggi degli elementi

#### Location

**Sintassi:** obj &lt;&lt; Location( "Grafico"|"Grafico per fattore"|"Tabella degli assi"|"Linea di riferimento asse" )

#### Number Format

**Sintassi:** obj &lt;&lt; Number Format

**JMP Versione aggiunta:** 16

#### Per Factor

**Sintassi:** obj &lt;&lt; Per Factor( state=0|1 )

**JMP Versione aggiunta:** 14

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"|"Riepilogo a 5 numeri" )

#### Summary Statistic 2

**Sintassi:** obj &lt;&lt; Summary Statistic 2( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"|"Riepilogo a 5 numeri" )

#### Summary Statistic 3

**Sintassi:** obj &lt;&lt; Summary Statistic 3( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"|"Riepilogo a 5 numeri" )

#### Summary Statistic 4

**Sintassi:** obj &lt;&lt; Summary Statistic 4( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"|"Riepilogo a 5 numeri" )

#### Summary Statistic 5

**Sintassi:** obj &lt;&lt; Summary Statistic 5( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile"|"Riepilogo a 5 numeri" )

#### X Position

**Sintassi:** obj &lt;&lt; X Position( "Sinistra"|"Intermedio"|"Destra" )

#### Y Position

**Sintassi:** obj &lt;&lt; Y Position( "Alto"|"Intermedio"|"Basso" )

## Contour Element

### Costruttori associati

#### Contour Element

**Sintassi:** Contour Element

**Descrizione:** mostra regioni di densità dei dati (o profili isometrici di valore con una variabile Colore). Produce grafici violino quando X è categorica.

**Grafici violino con linea mediana e rombo medio**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )}		)	));

```

**Grafici violino con quartili**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**Grafici violino sovrapposti a box plot sottili**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

**HDR, regioni a più alta densità**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

**Heatmap con contorni a riquadri**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

**Profiler isometrico densità kernel bivariata**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**Profiler isometrico geografico**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour(			X,			Y,			Legend( 5 ),			Boundary( 0 ),			Number of Levels( 5 ),			Alpha( 0.04 ),			Smoothness( 0.02 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {gradient( {Color Theme( "White to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ),			Reference Line Order( 4 ), Reorder Segs( {1, 3} ),			DispatchSeg( Contour Seg( 1 ), {Clip Shape( Boundaries( "US States" ) )} )}		)	));

```

**Profili isometrici lisci**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements(		Contour(			X,			Y,			Legend( 7 ),			Number of Levels( 5 ),			Alpha( 0.1 ),			Smoothness( 0.065 )		)	));

```

### Messaggi degli elementi

#### Adapt to Axis Scale

**Sintassi:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Descrizione:** Per la trasformazione logaritmica e altre trasformazioni dell&apos;asse, applica calcoli alle coordinate della trasformata.

#### Alpha

**Sintassi:** obj &lt;&lt; Alpha( number )

**Descrizione:** Controlla la forma del limite. Un valore 0 determina un involucro convesso del set di punti. Valori superiori eliminano i triangoli con lati lunghi.

**JMP Versione aggiunta:** 15

#### Boundary

**Sintassi:** obj &lt;&lt; Boundary( state=0|1 )

**Descrizione:** Traccia una linea al limite della regione di dati definita. Questo limite potrebbe essere non convesso in base alla proprietà alfa.

**JMP Versione aggiunta:** 15

#### Contour Placement

**Sintassi:** obj &lt;&lt; Contour Placement( "Offset"|"Allinea" )

**JMP Versione aggiunta:** 16

#### Contour Type

**Sintassi:** obj &lt;&lt; Contour Type( "Violino"|"HDR" )

**JMP Versione aggiunta:** 15

#### Contour Type 1D

**Sintassi:** obj &lt;&lt; Contour Type 1D( "Violino"|"HDR" )

**JMP Versione aggiunta:** 15

#### Contour Type 2D

**Sintassi:** obj &lt;&lt; Contour Type 2D( "Densità non parametrica"|"Bagplot"|"HDR" )

**JMP Versione aggiunta:** 15

#### Fill

**Sintassi:** obj &lt;&lt; Fill( state=0|1 )

**Descrizione:** Riempie le regioni tra i profiler isometrici utilizzando colori dal gradiente.

**JMP Versione aggiunta:** 15

#### Jitter

**Sintassi:** obj &lt;&lt; Jitter( "Nessuno"|"Automatica"|"Numero uniforme casuale"|"Numero normale casuale"|"Jitter di densità casuale"|"Riempito"|"Griglia"|"Griglia esagonale"|"Grafico a sciame" )

#### Line

**Sintassi:** obj &lt;&lt; Line( state=0|1 )

**Descrizione:** Traccia una linea a ogni curva di livello, colorata dal gradiente o da un colore della linea separato.

**JMP Versione aggiunta:** 15

#### Number of Levels

**Sintassi:** obj &lt;&lt; Number of Levels( number )

**Descrizione:** Imposta il numero di regioni con profiler isometrici da disegnare.

#### Outliers

**Sintassi:** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**Sintassi:** obj &lt;&lt; Smoothness( number )

**Descrizione:** Esegue lo smoothing dei dati sottostanti e dei profili isometrici.

**JMP Versione aggiunta:** 14

#### Transform

**Sintassi:** obj &lt;&lt; Transform( "Nessuno"|"Range normalizzato" )

**Descrizione:** Facoltativamente, trasforma i punti prima del calcolo della triangolazione, utilizzata per l&apos;interpolazione.

#### Violin Scaling

**Sintassi:** obj &lt;&lt; Violin Scaling( "Area uguale"|"Larghezza uguale"|"Area pesata" )

**JMP Versione aggiunta:** 14

## Ellipse Element

### Costruttori associati

#### Ellipse Element

**Sintassi:** Ellipse Element

**Descrizione:** mostra un&apos;ellisse di densità bivariata normale.

**Ellisse di densità con coefficiente di correlazione**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**Ellisse di densità con indicatore della media centrale**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) )	));

```

**Ellisse di densità in pannelli**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species ),		Group Y( :Sex )	),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model(				10,				Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} )			)}		)	));

```

**Ellissi di densità sovrapposte**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

### Messaggi degli elementi

#### Adapt to Axis Scale

**Sintassi:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Descrizione:** Per la trasformazione logaritmica e altre trasformazioni dell&apos;asse, applica calcoli alle coordinate della trasformata.

#### Correlation

**Sintassi:** obj &lt;&lt; Correlation( state=0|1 )

**Descrizione:** Coefficiente di correlazione per le variabili X e Y.

#### Coverage

**Sintassi:** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**Sintassi:** obj &lt;&lt; Mean Point( state=0|1 )

**Descrizione:** Mostra il punto medio dell&apos;ellisse.

## Formula Element

### Costruttori associati

#### Formula Element

**Sintassi:** Formula Element

**Descrizione:** mostra una funzione definita da una formula nella colonna.

**Confronto di modelli**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :linear ),		"Newton",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :quad ),		"QuasiNewton SR1",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

**Equazioni parametriche**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

### Messaggi degli elementi

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

## Heatmap Element

### Costruttori associati

#### Heatmap Element

**Sintassi:** Heatmap Element

**Descrizione:** mostra i conteggi utilizzando i colori per le categorie X e Y.

**Colore di sfondo basato sui dati**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State )			-Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap(			:State,			Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) )		),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox,			{Format( "Engineering SI", 13 ), Minor Ticks( 0 )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient(						{Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )}					)}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

**Heatmap categorica con gradiente personalizzato**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter(		Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) )	),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical",							"Diverging"}, {{42, 63, 255}, {166, 170, 203}, {192, 192, 192},							{201, 165, 165}, {252, 11, 11}, Missing( "Black" )}, {0, 0.33,							0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**Heatmap con colore categorico**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**Heatmap esagonale dei conteggi**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements(		Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} )			)}		)	));

```

**Heatmap etichettata**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**Mappa wafer**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

### Messaggi degli elementi

#### Bin Shape

**Sintassi:** obj &lt;&lt; Bin Shape( "Rettangolare"|"Esagonale" )

**JMP Versione aggiunta:** 16

#### Cell Outline

**Sintassi:** obj &lt;&lt; Cell Outline( state=0|1 )

**Descrizione:** Definisce l&apos;incremento massimo della dimensione del carattere.

**JMP Versione aggiunta:** 16

#### Hex Bin Radius

**Sintassi:** obj &lt;&lt; Hex Bin Radius( number )

**JMP Versione aggiunta:** 16

#### Label

**Sintassi:** obj &lt;&lt; Label( "Nessuna etichetta"|"Etichetta per valore"|"Etichetta per percentuale di valori totali"|"Etichetta per riga" )

**JMP Versione aggiunta:** 14

#### Label Format

**Sintassi:** obj &lt;&lt; Label Format

**JMP Versione aggiunta:** 16

#### Max Label Size

**Sintassi:** obj &lt;&lt; Max Label Size( number )

## Histogram Element

### Costruttori associati

#### Histogram Element

**Sintassi:** Histogram Element

**Descrizione:** mostra la distribuzione di una variabile mediante binning.

**Area di densità kernel liscia**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements(		Histogram(			X,			Y,			Legend( 8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.08 )		)	));

```

**Grafico ridgeline**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

**Istogramma con asse di conteggio**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox,			{Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )}		),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Flight Distance by Airline" )}		)	));

```

**Istogrammi per livello di fattore**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**Istogrammi sovrapposti, etichette percentuali**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

### Messaggi degli elementi

#### Confid Percent

**Sintassi:** obj &lt;&lt; Confid Percent( number=. )

**Descrizione:** Intervallo di confidenza per la media, specificata la copertura in percentuale. ".", per impostazione predefinita.

**JMP Versione aggiunta:** 14

#### Counts

**Sintassi:** obj &lt;&lt; Counts( state=0|1 )

**JMP Versione aggiunta:** 15

#### Histogram Style

**Sintassi:** obj &lt;&lt; Histogram Style( "Barra"|"Poligono"|"Densità kernel"|"Shadowgramma" )

**JMP Versione aggiunta:** 15

#### Horizontal

**Sintassi:** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**Sintassi:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP Versione aggiunta:** 14

#### Overlap

**Sintassi:** obj &lt;&lt; Overlap( number )

**JMP Versione aggiunta:** 15

#### Percents

**Sintassi:** obj &lt;&lt; Percents( state=0|1 )

**JMP Versione aggiunta:** 15

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Response Scale

**Sintassi:** obj &lt;&lt; Response Scale( "Conteggio"|"Percentuale"|"Riempi" )

**JMP Versione aggiunta:** 15

#### Smoothness

**Sintassi:** obj &lt;&lt; Smoothness( number )

**Descrizione:** La bandwidth controlla la quantità di smoothing nella curva di densità. Riducendo la bandwidth, la curva risulta meno lineare con più picchi. Incrementando la bandwidth, la curva risulterà più lineare ma potrebbero oscurarsi alcuni dettagli.

**JMP Versione aggiunta:** 15

#### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

#### t Test for Mean At

**Sintassi:** obj &lt;&lt; t Test for Mean At( number=. )

**Descrizione:** Verifica che la media sia un valore specificato. ".", per impostazione predefinita.

**JMP Versione aggiunta:** 14

## Line Element

### Costruttori associati

#### Line Element

**Sintassi:** Line Element

**Descrizione:** mostra una risposta sommarizzata per categorie.

**Bump chart, ranghi connessi**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific",				"Plains", "South", "Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**Carta sequenziale, per ordine di riga**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**Diagramma a spaghetti**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**Estensioni degli eventi**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox,			{Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties(					1,					{Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )}				),				Properties(					2,					{Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )}				)			)}		)	));

```

**Frecce connesse**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

**Grafico a dispersione connesso**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**Grafico a linee con banda di errore**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements(		Line(			X,			Y,			Legend( 4 ),			Error Interval( "Confidence Interval" ),			Interval Style( "Band" )		)	));

```

**Grafico a linee della media mobile**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Grafico a linee della media mobile finale**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Linee etichettate**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**Linee freccia, una per riga**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

### Messaggi degli elementi

#### Connection

**Sintassi:** obj &lt;&lt; Connection( "Linea"|"Freccia"|"Curva"|"Passo"|"Passo centrato"|"Orizzontale"|"Verticale" )

#### Error Interval

**Sintassi:** obj &lt;&lt; Error Interval( "Automatica"|"Nessuno"|"Range"|"Range interquartile"|"Errore standard"|"Deviazione standard"|"Intervallo di confidenza"|"Deviazione assoluta mediana"|"Intervallo personalizzato"|"Intervallo a due vie" )

#### Fill

**Sintassi:** obj &lt;&lt; Fill( "Nessuno"|"Riempi sotto"|"Riempi tra" )

**JMP Versione aggiunta:** 15

#### Interval Style

**Sintassi:** obj &lt;&lt; Interval Style( "Barra degli errori"|"Banda"|"Banda hash"|"Freccia" )

#### Missing Factors

**Sintassi:** obj &lt;&lt; Missing Factors( "Ignora"|"Tratta come mancante"|"Tratta come zero" )

**Descrizione:** Come mostrare connessioni che includono livelli di fattori mancanti.

**JMP Versione aggiunta:** 15

#### Missing Values

**Sintassi:** obj &lt;&lt; Missing Values( "Connesso Continuo"|"Connesso Sfumato"|"Connesso Tratteggiato"|"Nessuna connessione" )

**Descrizione:** Come mostrare connessioni che includono valori mancanti.

#### Ordering

**Sintassi:** obj &lt;&lt; Ordering( "Automatica"|"Ordine delle righe"|"Sommarizzato"|"Entro la riga" )

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Row order

**Sintassi:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Sintassi:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Sintassi:** obj &lt;&lt; Smoothness( number )

#### Stack

**Sintassi:** obj &lt;&lt; Stack( state=0|1 )

**JMP Versione aggiunta:** 15

#### Stack Negative

**Sintassi:** obj &lt;&lt; Stack Negative( "Sovrapposizione"|"Separa negativi"|"Tratta come zero" )

**Descrizione:** Controlla come vengono gestiti i valori negativi dei dati quando vengono impilati.

**JMP Versione aggiunta:** 17

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Line of Fit Element

### Costruttori associati

#### Line of Fit Element

**Sintassi:** Line of Fit Element

**Descrizione:** Mostra una regressione lineare con intervalli di confidenza per X e Y continue. Stima medie per X categorico.

**Regressione delle serie storiche**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

**Regressioni lineari sovrapposte**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

**Stima ANOVA, a una variabile, confronto tra le medie**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**Stime quadratiche**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 9 ) ),		Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) )	));

```

### Messaggi degli elementi

#### Adapt to Axis Scale

**Sintassi:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Descrizione:** Per la trasformazione logaritmica e altre trasformazioni dell&apos;asse, applica calcoli alle coordinate della trasformata.

#### Confidence of Fit

**Sintassi:** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**Sintassi:** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**Sintassi:** obj &lt;&lt; Constrain Parameters( state=0|1 )

**Descrizione:** Parametri di vincolo ETS

**JMP Versione aggiunta:** 17

#### Degree

**Sintassi:** obj &lt;&lt; Degree( "Lineare"|"Quadratico"|"Cubico" )

#### Equation

**Sintassi:** obj &lt;&lt; Equation( state=0|1 )

**Descrizione:** Equazione della stima.

#### F Test

**Sintassi:** obj &lt;&lt; F Test( state=0|1 )

**Descrizione:** Livello di significatività per il test a modello intero.

**JMP Versione aggiunta:** 14

#### Fit

**Sintassi:** obj &lt;&lt; Fit( "Polinomio"|"Robusta di Cauchy"|"Serie storica" )

**JMP Versione aggiunta:** 15

#### Forecast Model

**Sintassi:** obj &lt;&lt; Forecast Model( state=0|1 )

**Descrizione:** Mostra quale modello è utilizzato per il forecast, con stime dei parametri.

**JMP Versione aggiunta:** 15

#### Forecast Periods

**Sintassi:** obj &lt;&lt; Forecast Periods( number )

**Descrizione:** Numero di periodi da prevedere.

**JMP Versione aggiunta:** 15

#### Means and Std Devs

**Sintassi:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**Descrizione:** Mostra le medie e le deviazioni standard di ogni gruppo accanto alla linea media.

**JMP Versione aggiunta:** 14

#### Prediction

**Sintassi:** obj &lt;&lt; Prediction( state=0|1 )

**Descrizione:** Regione di confidenza dei singoli valori previsti

#### RMSE

**Sintassi:** obj &lt;&lt; RMSE( state=0|1 )

**Descrizione:** Scarto quadratico medio, una misura di errore in unità della risposta.

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Root Mean Square Error

**Sintassi:** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**Sintassi:** obj &lt;&lt; R²( state=0|1 )

**Descrizione:** Coefficiente di determinazione, una misura della bontà di previsione della stima dei dati.

#### Save Formula

**Sintassi:** obj &lt;&lt; Save Formula

#### Seasonal Period

**Sintassi:** obj &lt;&lt; Seasonal Period( number )

**Descrizione:** Numero di periodi in una stagione. Per esempio, con i dati mensili si hanno 12 periodi per stagione in un anno.

**JMP Versione aggiunta:** 15

#### Unequal Variances

**Sintassi:** obj &lt;&lt; Unequal Variances( state=0|1 )

**Descrizione:** Se calcolare test e limiti di confidenza sulla base dell&apos;assunzione che diversi gruppi hanno diverse varianze.

## Mosaic Element

### Costruttori associati

#### Mosaic Element

**Sintassi:** Mosaic Element

**Descrizione:** mostra i conteggi utilizzando una dimensione per le categorie X e Y.

**Grafico a mosaico**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

**Mosaico orizzontale**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

### Messaggi degli elementi

#### Cell Labeling

**Sintassi:** obj &lt;&lt; Cell Labeling( "Nessuna etichetta"|"Etichetta per conteggio"|"Etichetta per percentuale"|"Etichetta per valore"|"Etichetta per riga" )

**JMP Versione aggiunta:** 14

#### Chi-square Test

**Sintassi:** obj &lt;&lt; Chi-square Test( state=0|1 )

**Descrizione:** Test del chi-quadrato i cui tassi di risposta sono gli stessi tra i gruppi o le cui due risposte sono indipendenti

**JMP Versione aggiunta:** 14

#### Confid Percent

**Sintassi:** obj &lt;&lt; Confid Percent( number=. )

**Descrizione:** Copertura dell&apos;intervallo di confidenza sulla proporzione nel livello superiore, in percentuale. ".", per impostazione predefinita.

**JMP Versione aggiunta:** 14

#### Horizontal

**Sintassi:** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**Sintassi:** obj &lt;&lt; Label Format

**JMP Versione aggiunta:** 16

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Test Proportion At

**Sintassi:** obj &lt;&lt; Test Proportion At( number=. )

**Descrizione:** Verifica che la proporzione al livello superiore sia un valore specificato. ".", per impostazione predefinita.

**JMP Versione aggiunta:** 14

#### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

## Parallel Element

### Costruttori associati

#### Parallel Element

**Sintassi:** Parallel Element

**Descrizione:** Mostra molte variabili lungo assi paralleli con una linea connessa per ciascuna riga.

**Box plot paralleli**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements(		Box Plot(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 11 )		)	));

```

**Coordinate parallele con scala allineata**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**Diagramma a coordinate parallele**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Diagrammi a punti paralleli**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Set paralleli**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

**Set paralleli di Sankey**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X(			:"What is your favorite color? (select one)"n,			Position( 1 ),			Combine( "Parallel Independent" )		),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark(					Label( "What is your favorite color?" ),					Label( "Specific favorite color" )				), Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

### Messaggi degli elementi

#### Axes Labels

**Sintassi:** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**Sintassi:** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**Sintassi:** obj &lt;&lt; Smoothness( number )

**JMP Versione aggiunta:** 16

## Pie Element

### Costruttori associati

#### Pie Element

**Sintassi:** Pie Element

**Descrizione:** mostra porzioni di un intero.

**Grafico a ciambella per conteggio**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**Grafico a torta per conteggio**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ) ) ));

```

**Riquadro torta**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "SmartPhone OS Market Share" )}		)	));

```

### Messaggi degli elementi

#### Label

**Sintassi:** obj &lt;&lt; Label( "Nessuna etichetta"|"Etichetta per valore"|"Etichetta per percentuale di valori totali"|"Etichetta per riga" )

#### Label Format

**Sintassi:** obj &lt;&lt; Label Format

**JMP Versione aggiunta:** 16

#### Pie Style

**Sintassi:** obj &lt;&lt; Pie Style( "Torta"|"Anello"|"Coxcomb" )

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Points Element

### Costruttori associati

#### Points Element

**Sintassi:** Points Element

**Descrizione:** mostra un grafico a dispersione dei valori di dati.

**Diagramma a punti con smoothing**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox,			{Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties(					0,					{Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )}				),				Properties(					1,					{Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )}				),				Properties(					2,					{Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )}				),				Properties(					3,					{Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

**Diagramma a punti della densità**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Jitter( "Hex Grid" ),			Jitter Side( "Positive" ),			Jitter Smooth( 1 )		)	),	SendToReport(		Dispatch( {}, "Female", ScaleBox,			{Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )}		)	));

```

**Diagrammi a punti a griglia esagonale**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Diagrammi a punti centrati affiancati**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Diagrammi a punti centrati affiancati con smoothing**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Diagrammi a punti sul lato opposto esagonali**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points(			X,			Y,			Legend( 9 ),			Jitter( "Hex Grid" ),			Jitter Side( "Ordinal" ),			Jitter Smooth( 1 )		)	),	Local Data Filter(		Add Filter(			columns( :type of space ),			Where( :type of space == {"exterior", "interior"} )		)	),	SendToReport(		Dispatch( {}, "Y", ScaleBox,			{Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )}		),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**Grafico a dispersione con dimensioni e colori**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

**Grafico di variabilità**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

**Jitter di riempimento circonferenza**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )}		)	));

```

**Latitudine e longitudine**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) )}		)	));

```

**Matrice grafico a dispersione**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements(		Position( 1, 2 ),		Points( X, Y, Legend( 57 ) ),		Smoother( X, Y, Legend( 58 ) )	),	Elements(		Position( 1, 3 ),		Points( X, Y, Legend( 59 ) ),		Smoother( X, Y, Legend( 60 ) )	),	Elements(		Position( 1, 4 ),		Points( X, Y, Legend( 61 ) ),		Smoother( X, Y, Legend( 62 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 63 ) ),		Smoother( X, Y, Legend( 64 ) )	),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements(		Position( 2, 3 ),		Points( X, Y, Legend( 67 ) ),		Smoother( X, Y, Legend( 68 ) )	),	Elements(		Position( 2, 4 ),		Points( X, Y, Legend( 69 ) ),		Smoother( X, Y, Legend( 70 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 71 ) ),		Smoother( X, Y, Legend( 72 ) )	),	Elements(		Position( 3, 2 ),		Points( X, Y, Legend( 73 ) ),		Smoother( X, Y, Legend( 74 ) )	),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements(		Position( 3, 4 ),		Points( X, Y, Legend( 77 ) ),		Smoother( X, Y, Legend( 78 ) )	),	Elements(		Position( 4, 1 ),		Points( X, Y, Legend( 79 ) ),		Smoother( X, Y, Legend( 80 ) )	),	Elements(		Position( 4, 2 ),		Points( X, Y, Legend( 81 ) ),		Smoother( X, Y, Legend( 82 ) )	),	Elements(		Position( 4, 3 ),		Points( X, Y, Legend( 83 ) ),		Smoother( X, Y, Legend( 84 ) )	),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

### Messaggi degli elementi

#### Error Interval

**Sintassi:** obj &lt;&lt; Error Interval( "Automatica"|"Nessuno"|"Range"|"Range interquartile"|"Errore standard"|"Deviazione standard"|"Intervallo di confidenza"|"Deviazione assoluta mediana"|"Intervallo personalizzato"|"Intervallo a due vie" )

#### Interval Style

**Sintassi:** obj &lt;&lt; Interval Style( "Barra degli errori"|"Banda"|"Banda hash"|"Freccia" )

#### Jitter

**Sintassi:** obj &lt;&lt; Jitter( "Nessuno"|"Automatica"|"Numero uniforme casuale"|"Numero normale casuale"|"Jitter di densità casuale"|"Riempito"|"Griglia"|"Griglia esagonale"|"Grafico a sciame" )

#### Jitter Limit

**Sintassi:** obj &lt;&lt; Jitter Limit( number )

**JMP Versione aggiunta:** 14

#### Jitter Overlap

**Sintassi:** obj &lt;&lt; Jitter Overlap( number )

**JMP Versione aggiunta:** 19

#### Jitter Side

**Sintassi:** obj &lt;&lt; Jitter Side( "Centrato "|"Positivo"|"Negativo"|"Ordinale" )

#### Jitter Smooth

**Sintassi:** obj &lt;&lt; Jitter Smooth( number )

**JMP Versione aggiunta:** 19

#### Label

**Sintassi:** obj &lt;&lt; Label( "Nessuna etichetta"|"Etichetta per valore"|"Etichetta per riga"|"Etichetta per riga e valore" )

#### Label Format

**Sintassi:** obj &lt;&lt; Label Format

**JMP Versione aggiunta:** 18

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Save Summary Formula

**Sintassi:** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**Sintassi:** obj &lt;&lt; Set Shape Column

**JMP Versione aggiunta:** 16

#### Set Shape Expression

**Sintassi:** obj &lt;&lt; Set Shape Expression

**JMP Versione aggiunta:** 16

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Shapes Element

### Costruttori associati

#### Map Shapes Element

**Sintassi:** Map Shapes Element

**Descrizione:** mostra aree definite da una variabile Forma della mappa, di solito con una variabile Colore.

**File della forma personalizzato con colore categorico**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**File della forma personalizzato con colore sfumato**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**Mappa coropletica aree uguali del Mediterraneo**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

**Mappa coropletica del mondo**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**Mappa del mondo centrata sull'Asia/Pacifico**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

### Messaggi degli elementi

#### Aspect Ratio

**Sintassi:** obj &lt;&lt; Aspect Ratio( number )

**Descrizione:** Rapporto di scaling fattore di aggiustamento X:Y.

#### Show Missing Shapes

**Sintassi:** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP Versione aggiunta:** 16

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

## Smoother Element

### Costruttori associati

#### Smoother Element

**Sintassi:** Smoother Element

**Descrizione:** mostra una curva di smoothing attraverso i dati. Migliore per X e Y continui con una relazione sconosciuta.

**Confronto tra smoother: loess, spline, p-spline**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ),			Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

**Curve di tendenza di smoothing, in riquadri**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Curve di tendenza di smoothing, in riquadri e sovrapposte**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State ),		Overlay( :Commodity )	),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	));

```

**Curve di tendenza di smoothing, sovrapposte**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Linea di tendenza smoother monotona**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother(			X,			Y,			Method( "P-Spline" ),			Lambda( 0.3 ),			Shape Constraint( "Non-descending" )		)	));

```

**Linee di tendenza di smoothing su diagrammi di dispersione**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

**Monotono sull'asse log x**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Legend( 12 ),			Method( "P-Spline" ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} )	));

```

**Smoother ciclico**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

**Tendenza di smoothing e intervallo di confidenza**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) )	));

```

**Tendenza serie storiche di smoothing con divisione**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :date ),		Y( :Ozone Concentration ),		Overlay( :Intervention for post 1960 period )	),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

### Messaggi degli elementi

#### Adapt to Axis Scale

**Sintassi:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Descrizione:** Per la trasformazione logaritmica e altre trasformazioni dell&apos;asse, applica calcoli alle coordinate della trasformata.

#### Confidence Bootstrap

**Sintassi:** obj &lt;&lt; Confidence Bootstrap( number )

**JMP Versione aggiunta:** 14

#### Confidence of Fit

**Sintassi:** obj &lt;&lt; Confidence of Fit( state=0|1 )

**Descrizione:** Regione della confidenza di bootstrap per la stima.

**JMP Versione aggiunta:** 14

#### Constrain Confidence Region

**Sintassi:** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**Descrizione:** Se il vincolo di forma si applica anche alle stime bootstrap utilizzate per calcolare la regione di confidenza della stima.

**JMP Versione aggiunta:** 19

#### Degree

**Sintassi:** obj &lt;&lt; Degree( "Mediana"|"Media"|"Lineare"|"Quadratico"|"Cubico" )

**JMP Versione aggiunta:** 16

#### Lambda

**Sintassi:** obj &lt;&lt; Lambda( number )

#### Local Constraint

**Sintassi:** obj &lt;&lt; Local Constraint( state=0|1 )

**Descrizione:** Limita la curva al range di valori vicini.

**JMP Versione aggiunta:** 19

#### Local Region

**Sintassi:** obj &lt;&lt; Local Region( "Potenza"|"Frazione"|"Fissa"|"Finale" )

**JMP Versione aggiunta:** 16

#### Local Robustness

**Sintassi:** obj &lt;&lt; Local Robustness( number )

**JMP Versione aggiunta:** 16

#### Local Weighting

**Sintassi:** obj &lt;&lt; Local Weighting( "Tricubo"|"Coseno"|"Epanechnikov"|"Gaussiana"|"Cauchy"|"Laplace"|"Triangolare"|"Rettangolare" )

**JMP Versione aggiunta:** 16

#### Local Width

**Sintassi:** obj &lt;&lt; Local Width( number )

**JMP Versione aggiunta:** 16

#### Maximum Constraint

**Sintassi:** obj &lt;&lt; Maximum Constraint( number )

#### Method

**Sintassi:** obj &lt;&lt; Method( "Spline"|"P-Spline"|"Kernel locale"|"Savitzky-Golay"|"Media mobile"|"Riquadro mobile" )

**JMP Versione aggiunta:** 15

#### Minimum Constraint

**Sintassi:** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**Sintassi:** obj &lt;&lt; Response Axis( "Automatica"|"X"|"Y" )

#### Save Formula

**Sintassi:** obj &lt;&lt; Save Formula

#### Scale lambda for count

**Sintassi:** obj &lt;&lt; Scale lambda for count( state=0|1 )

**Descrizione:** Regola lambda del parametro di smoothing spline per tenere conto della dimensione dei dati. Utile per uno smoothing coerente tra gruppi di diverse dimensioni.

#### Shape Constraint

**Sintassi:** obj &lt;&lt; Shape Constraint( "Nessuna"|"Non discendente"|"Non ascendente"|"Picco"|"Valle"|"Picco e valle"|"Inizio piatto"|"Fine piatta"|"Inizio e fine piatti"|"Ciclo" )

**JMP Versione aggiunta:** 19

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "Nessuno"|"N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

#### Trim

**Sintassi:** obj &lt;&lt; Trim( number )

**JMP Versione aggiunta:** 16

## Treemap Element

### Costruttori associati

#### Treemap Element

**Sintassi:** Treemap Element

**Descrizione:** mostra una risposta sommarizzata per molte categorie.

**Gradiente colore continua**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

**Mappa ad albero nidificata, squarify**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements(		Treemap(			X( 1 ),			X( 2 ),			X( 3 ),			Legend( 6 ),			Layout( "Squarify" ),			Group Labels( "Above" )		)	));

```

**Suggerimenti per l'ordinamento di posizione**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

### Messaggi degli elementi

#### Category Name

**Sintassi:** obj &lt;&lt; Category Name( state=0|1 )

**Descrizione:** Mostra il nome della colonna della categoria come parte dell&apos;etichetta della categoria. Questa opzione è utilizzata solo quando è mostrato anche il valore della categoria.

#### Category Value

**Sintassi:** obj &lt;&lt; Category Value( state=0|1 )

**Descrizione:** Mostra il valore della categoria come parte dell&apos;etichetta della categoria.

#### Color Label Format

**Sintassi:** obj &lt;&lt; Color Label Format

**JMP Versione aggiunta:** 16

#### Color Name

**Sintassi:** obj &lt;&lt; Color Name( state=0|1 )

**Descrizione:** Mostra il nome della variabile del colore come parte dell&apos;etichetta del colore. Questa opzione viene utilizzata solo quando viene mostrato anche il valore del colore.

**JMP Versione aggiunta:** 16

#### Color Value

**Sintassi:** obj &lt;&lt; Color Value( state=0|1 )

**Descrizione:** Mostra il valore della variabile Colore come parte dell&apos;etichetta della categoria. Questa opzione è utilizzata solo quando è specificata una variabile Colore.

#### Group Labels

**Sintassi:** obj &lt;&lt; Group Labels( "Nessuno"|"Sopra"|"Mobile" )

**Descrizione:** Nasconde o mostra le etichette del gruppo sopra le categorie o come riquadri mobili.

#### Implicit Color

**Sintassi:** obj &lt;&lt; Implicit Color( state=0|1 )

**Descrizione:** Usa colori univoci per la mappa ad albero. Deselezionando questa opzione la mappa ad albero verrà visualizzata con un colore a tinta unita. L&apos;opzione è disabilitata se è stata specificata una variabile colore. Per impostazione predefinita l&apos;opzione è attivata.

#### Label Justification

**Sintassi:** obj &lt;&lt; Label Justification( "Sinistra"|"Centro"|"Destra" )

#### Label Threshold

**Sintassi:** obj &lt;&lt; Label Threshold( number )

**Descrizione:** La dimensione minima (area) per visualizzare l&apos;etichetta nel riquadro.

#### Label Transparency

**Sintassi:** obj &lt;&lt; Label Transparency( number )

**Descrizione:** Imposta la trasparenza per l&apos;etichetta del gruppo quando l&apos;etichetta del gruppo è mobile. I valori validi sono compresi tra 0,0 e 1,0 inclusi.

**JMP Versione aggiunta:** 16

#### Layout

**Sintassi:** obj &lt;&lt; Layout( "Dividi"|"Squadra"|"Misto" )

#### Max Label Size

**Sintassi:** obj &lt;&lt; Max Label Size( number )

**Descrizione:** Definisce l&apos;incremento massimo della dimensione del carattere.

#### Orientation Bias

**Sintassi:** obj &lt;&lt; Orientation Bias( number )

**Descrizione:** Imposta la preferenza relativa della suddivisione orizzontale rispetto a quella verticale dell&apos;area.

**JMP Versione aggiunta:** 17

#### Show Frames

**Sintassi:** obj &lt;&lt; Show Frames( state=0|1 )

**Descrizione:** Per impostazione predefinita l&apos;opzione è attivata.

#### Show Group Name

**Sintassi:** obj &lt;&lt; Show Group Name( state=0|1 )

**Descrizione:** Mostra il nome della colonna del gruppo come parte dell&apos;etichetta del gruppo. Questa opzione è utilizzata solo quando le etichette del gruppo sono sopra i mosaici del gruppo.

#### Size Label Format

**Sintassi:** obj &lt;&lt; Size Label Format

**JMP Versione aggiunta:** 16

#### Size Name

**Sintassi:** obj &lt;&lt; Size Name( state=0|1 )

**Descrizione:** Mostra il nome della variabile di dimensione come parte dell&apos;etichetta della dimensione. Questa opzione viene utilizzata solo quando viene mostrato anche il valore della dimensione.

**JMP Versione aggiunta:** 16

#### Size Value

**Sintassi:** obj &lt;&lt; Size Value( state=0|1 )

**Descrizione:** Mostra il valore della variabile Dimensione come parte dell&apos;etichetta della categoria.

#### Summary Statistic

**Sintassi:** obj &lt;&lt; Summary Statistic( "N"|"Media"|"Mediana"|"Moda"|"Media geometrica"|"Min"|"Max"|"Range"|"Somma"|"Somma cumulativa"|"Percentuale cumulativa"|"% del totale"|"% del fattore"|"% del totale complessivo"|"Dev std"|"Varianza"|"Err std"|"CV"|"Range interquartile"|"Deviazione assoluta mediana"|"Primo quartile"|"Terzo quartile" )

#### Tile Labels

**Sintassi:** obj &lt;&lt; Tile Labels

