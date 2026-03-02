# Graph Builder



## Area Element

### Constructeurs associés

#### Area Element

**Syntaxe :** Area Element

**Description :** Affiche une réponse résumée par catégories.

**Aire superposée avec configurations à remplir**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Graphique de surface empilé**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Graphique de surface empilé à 100 %**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox,			{Format( "Percent", 13, 0 ), Max( 1 )}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Zone d'intervalle personnalisé autour de la ligne**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

### Messages d'éléments

#### Area Style

**Syntaxe :** obj &lt;&lt; Area Style( "Empilé"|"Superposé"|"Étendue"|"Étendue empilée" )

#### Connection

**Syntaxe :** obj &lt;&lt; Connection( "Ligne"|"Flèche"|"Courbe"|"Pas"|"Pas centré"|"Horizontale"|"Vertical" )

#### Error Interval

**Syntaxe :** obj &lt;&lt; Error Interval( "Auto"|"Aucun"|"Étendue"|"Intervalle interquartile"|"Erreur standard"|"Écart-type"|"Intervalle de confiance"|"Écart absolu médian"|"Intervalle personnalisé"|"Intervalle bilatéral" )

#### Interval Style

**Syntaxe :** obj &lt;&lt; Interval Style( "Barre d&apos;erreur"|"Bande"|"Bande hachurée"|"Flèche" )

#### Missing Factors

**Syntaxe :** obj &lt;&lt; Missing Factors( "Ignorer"|"Considérer comme manquantes"|"Considérer comme nulles" )

**Description :** Comment afficher les connexions qui couvrent les niveaux des facteurs manquants

**JMP Version ajoutée :** 15

#### Missing Values

**Syntaxe :** obj &lt;&lt; Missing Values( "Connecter sans tenir compte des valeurs manquantes"|"Connecter en atténuant les valeurs manquantes"|"Connecter en pointillés"|"Aucune connexion" )

**Description :** Comment afficher les connexions qui couvrent les valeurs manquantes.

#### Ordering

**Syntaxe :** obj &lt;&lt; Ordering( "Auto"|"Ordre des lignes"|"Résumé"|"Dans la ligne" )

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Row order

**Syntaxe :** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Syntaxe :** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Syntaxe :** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**Syntaxe :** obj &lt;&lt; Stack Negative( "Superposer"|"Séparer négatifs"|"Considérer comme nulles" )

**Description :** Contrôle la manière dont les valeurs négatives sont traitées lorsqu&apos;elles sont empilées.

**JMP Version ajoutée :** 17

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Constructeurs associés

### Graph Builder

**Syntaxe :** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Description :** Fournit une interface graphique interactive qui vous permet d&apos;explorer vos données. Vous pouvez faire glisser les colonnes dans des zones de graphiques pour créer différents graphiques. Par exemple, nuages de points, graphiques d&apos;isoréponses, diagrammes en barres, graphiques de surface, boîtes à moustaches, histogrammes, cartes thermiques, diagrammes en secteurs, Tree Maps, graphiques en mosaïque, et cartes.

#### Axes x multiples

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### Axes y gauche et droit

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Axes y parallèles, lignes superposées

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Carte de tranche

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### Choroplèthe méditerranéen à aire égale

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Combinaison de graphique en barres et de courbe de tendance lissée

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### Courbes de fonction de distribution cumulée empirique superposées

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### Diagramme de flux de la marche de Napoléon

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Diagramme en barres empilées à 100 %

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Diagrammes en violon avec quartiles

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### Droite avec bande d'intervalle personnalisée

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### Graphe de variabilité

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### Graphique d'isoréponses et nuage de points

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### Graphique en bulles avec courbes superposées

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### Graphiques indépendants utilisant la variable PAR

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Groupement en treillis de type co-plot

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Intervalle de confiance d’une proportion binomiale

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Isoréponses de densité à noyau bivarié superposées

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### Lignes connectées avec points superposés

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### Nuage de points avec boîtes à moustaches marginales

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### Panneaux avec axes y non alignés

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### Panneaux de régression linéaire

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### Points et lissage

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### Tableau récapitulatif des axes

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

#### Traits de flèche, un par ligne

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

## Messages d'éléments

### Add Element

**Syntaxe :** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**Description :** Ajoute un nouvel élément graphique aux positions données de X et Y. La spécification de l&apos;élément comprend le nom de l&apos;élément, les rôles des données qu&apos;il utilise et les valeurs de ses options.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**Syntaxe :** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**Description :** Ajoute une nouvelle variable au modèle du Constructeur de graphiques, avec un rôle et une position donnés.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**Syntaxe :** obj &lt;&lt; Auto Stretching( state=0|1 )

**Description :** Active ou désactive l’ajustement automatique du graphique à la fenêtre qui le contient. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Back Color

**Syntaxe :** obj &lt;&lt; Back Color( color )

**Description :** Définit la couleur de l’arrière-plan autour du graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**Syntaxe :** obj &lt;&lt; Categorical Color Theme

**Description :** Définit le thème de couleur utilisé pour les variables catégorielles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**Syntaxe :** obj &lt;&lt; Continuous Color Theme

**Description :** Définit le thème de couleur utilisé pour les gradients.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Done

**Syntaxe :** obj &lt;&lt; Done

**Description :** Masque le panneau de contrôle et désactive tout échantillonnage par ligne.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**Syntaxe :** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() )) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Identifie les éléments de la visualisation.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**Syntaxe :** obj &lt;&lt; Error Bar Offset

**Description :** Ouvre une boîte de dialogue permettant de définir l&apos;offset pour les barres d&apos;erreur.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**Syntaxe :** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**Description :** Multiplicateur correspondant à la quantité à laquelle une échelle d&apos;axe doit être étendue pour inclure zéro. "1" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**Syntaxe :** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**Description :** Multiplicateur correspondant à la quantité à laquelle une échelle d&apos;axe doit être étendue pour inclure zéro dans le cas où les axes gauche et droit sont tous deux présents. "2" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**Syntaxe :** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**Description :** Multiplicateur correspondant à la quantité à laquelle une échelle d&apos;axe doit être étendue pour inclure zéro dans le mode Axes Y parallèles. "3" par défaut.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**Syntaxe :** obj &lt;&lt; Fit to Window( "Auto"|"Activé"|"Désactivé(e)"|"Conserver l&apos;aspect ratio" )

**Description :** Définit le mode d&apos;ajustement automatique du rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

```

### Get Element

**Syntaxe :** obj &lt;&lt; Get Element( xposition, yposition, i )

**Description :** Renvoie les spécifications d&apos;un élément graphique en fonction des positions de x et y données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**Syntaxe :** obj &lt;&lt; Get Elements( xposition, yposition )

**Description :** Renvoie une liste de spécifications d&apos;un élément en fonction des positions de x et y données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Legend Display

**Syntaxe :** obj &lt;&lt; Get Legend Display

**Description :** Renvoie la boîte d’affichage de la légende pour le graphique qui peut faire l&apos;objet d&apos;une requête ou être modifié.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**Syntaxe :** obj &lt;&lt; Get Legend Server

**Description :** Renvoie un objet contenant des informations utilisées par l&apos;affichage de la légende et les segs d&apos;affichage correspondant dans le graphique.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**Syntaxe :** obj &lt;&lt; Get N Elements( xposition, yposition )

**Description :** Renvoie le nombre d&apos;éléments graphiques en fonction des positions de x et y données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**Syntaxe :** nrole

**Description :** Renvoie le nombre de positions utilisées en fonction d&apos;un rôle donné.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**Syntaxe :** n = obj &lt;&lt; Get N Variables

**Description :** Renvoie le nombre de variables utilisées.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Variable

**Syntaxe :** obj &lt;&lt; Get Variable( index )

**Description :** Renvoie la spécification d&apos;une variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**Syntaxe :** list = obj &lt;&lt; Get Variables

**Description :** Renvoie une liste des listes de spécifications de variables en fonction des variables utilisées.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

```

### Graph Spacing

**Syntaxe :** obj &lt;&lt; Graph Spacing( gap=1 )

**Description :** Définit la largeur de l&apos;espace entre les panneaux du graphique. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**Syntaxe :** obj &lt;&lt; Grid Color( color )

**Description :** Définit la couleur du quadrillage sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**Syntaxe :** obj &lt;&lt; Grid Transparency( fraction=1 )

**Description :** Définit la transparence du quadrillage. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**Syntaxe :** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Description :** Traite les valeurs manquantes en tant que niveau séparé pour les variables catégorielles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**Syntaxe :** obj &lt;&lt; Launch Analysis

**Description :** Lance une analyse avec les variables actuelles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**Syntaxe :** obj &lt;&lt; Legend Floating Offset

**Description :** Définir l&apos;offset de la légende en pixels lorsque la position de la légende est définie sur « Floating »

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**Syntaxe :** obj &lt;&lt; Legend Position( "Droite"|"Bas"|"Intérieur gauche"|"Intérieur droit"|"À l&apos;intérieur, en bas à gauche"|"À l&apos;intérieur, en bas à droite"|"À l&apos;intérieur, flottante" )

**Description :** Définit la position de la légende.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**Syntaxe :** obj &lt;&lt; Legend Settings

**Description :** Ouvre une boîte de dialogue permettant de modifier les propriétés de la légende.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**Syntaxe :** obj &lt;&lt; Level Fill Color( color )

**Description :** Définit la couleur des noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**Syntaxe :** obj &lt;&lt; Level Frame Color( color )

**Description :** Définit la couleur du trait entourant les noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**Syntaxe :** obj &lt;&lt; Level Spacing Color( color )

**Description :** Définit la couleur de l&apos;espacement entre les étiquettes de niveau.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**Syntaxe :** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**Description :** Définit la transparence de l&apos;espacement entre les étiquettes de niveau. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**Syntaxe :** obj &lt;&lt; Level Text Color( color )

**Description :** Définit la couleur du texte des noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**Syntaxe :** obj &lt;&lt; Level Transparency( fraction=1 )

**Description :** Définit la transparence du cadre de nom de niveau sur le graphique. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**Syntaxe :** obj &lt;&lt; Level Underline( state=0|1 )

**Description :** Souligne les noms de niveau ou supprime le soulignement sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**Syntaxe :** obj &lt;&lt; Lighten large fills( state=0|1 )

**Description :** Éclaircir automatiquement les couleurs des éléments des diagrammes en secteurs, des Tree Maps et des graphiques en mosaïque avec de grandes surfaces de remplissage. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**Syntaxe :** obj &lt;&lt; Link Page Axes( "Aucun(e)"|"X uniquement"|"Y uniquement"|"X et Y" )

**Description :** Définit les axes qui sont liés sur les niveaux des groupes de page.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**Syntaxe :** obj &lt;&lt; Lock Scales( state=0|1 )

**Description :** Verrouille les étendues des axes et des gradients pour que celles-ci ne changent pas suite à des modifications de données ou de filtrage.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**Syntaxe :** obj &lt;&lt; Make into Data Table

**Description :** Crée une nouvelle table de données contenant des images de graphiques.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Order Statistic

**Syntaxe :** obj &lt;&lt; Order Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"="Moyenne" )

**Description :** Définit l’ordre par défaut en fonction de la statistique de résumé utilisée lors de l’application du message Trier par sur une variable du graphique. "Moyenne" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**Syntaxe :** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**Description :** Limite le nombre de niveaux de superposition où le codage de superposition utilise les styles de lignes pour son paramètre de réglage automatique en présence d&apos;une variable de couleur. "6" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**Syntaxe :** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**Description :** Limite le nombre de niveaux de superposition où le codage de superposition utilise les styles de marqueurs pour son paramètre de réglage automatique en présence d&apos;une variable de couleur. "62" par défaut.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**Syntaxe :** obj &lt;&lt; Page Count Limit( count=200 )

**Description :** Définit le nombre maximum de pages créées pour la variable de page de sorte à éviter une dégradation accidentelle de la performance. "200" par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),	Elements( Points( X, Y ) ));gb << Page Count Limit( 5 );

```

### Page Gap Size

**Syntaxe :** obj &lt;&lt; Page Gap Size( gap=25 )

**Description :** Définit la largeur de l&apos;espace entre groupes de pages. "25" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**Syntaxe :** obj &lt;&lt; Page Level Fill Color( color )

**Description :** Définit la couleur des noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**Syntaxe :** obj &lt;&lt; Page Level Frame Color( color )

**Description :** Définit la couleur du trait entourant les noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**Syntaxe :** obj &lt;&lt; Page Level Text Color( color )

**Description :** Définit la couleur du texte des noms de niveau sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**Syntaxe :** obj &lt;&lt; Page Level Transparency( fraction=1 )

**Description :** Définit la transparence du cadre de nom de niveau sur le graphique. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Transparency( .2 );

```

### Page Level Underline

**Syntaxe :** obj &lt;&lt; Page Level Underline( state=0|1 )

**Description :** Souligne les noms de niveau ou supprime le soulignement sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**Syntaxe :** obj &lt;&lt; Parallel Axis Merging( "Toujours"|"Similitude faible"|"Similitude moyenne"|"Similitude élevée"|"Jamais" )

**Description :** Détermine quand le paramètre automatique Combiner les échelles doit choisir Parallèle fusionné à la place de Parallèle indépendant.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**Syntaxe :** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**Description :** Tous les axes Y partagent le même graphique. Semblable aux coordonnées parallèles, mais prend en charge une variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Random Seed

**Syntaxe :** obj &lt;&lt; Random Seed( number )

**Description :** Définit une graine spécifique pour le jitter aléatoire.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Relative Sizes

**Syntaxe :** Relative Sizes(axis, matrix of relative size values)

**Description :** Détermine la proportion d&apos;espace alloué à chacun des axes multiples d&apos;une série.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Remove Element

**Syntaxe :** obj &lt;&lt; Remove Element( xposition, yposition, i )

**Description :** Supprime un élément graphique aux positions de X et Y données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**Syntaxe :** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**Description :** Supprime une variable du modèle du Constructeur de graphiques, spécifiée soit par l&apos;indice soit par un nom de colonne, un rôle ou une position donnés.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**Syntaxe :** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**Description :** Détermine si les axes de pages liés dans une grille sont affichées une fois pour chaque graphique ou une fois pour chaque ligne ou colonne de graphiques.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**Syntaxe :** obj &lt;&lt; Sampling( number )

**Description :** Sélectionne aléatoirement un sous-ensemble des données en utilisant un dénombrement ou une proportion spécifiée. Cela est utile pour une quantité de données importantes et lorsque le graphique continue de changer.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Set Alpha Level

**Syntaxe :** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**Description :** Change le niveau alpha utilisé pour les courbes de confiance.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**Syntaxe :** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**Description :** Change le niveau alpha utilisé pour les courbes de confiance.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**Syntaxe :** obj &lt;&lt; Show Control Panel( state=0|1 )

**Description :** Affiche ou masque le panneau de configuration. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**Syntaxe :** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**Description :** Affiche ou masque les lignes exclues sur les graphiques. Lorsque cette option est sélectionnée, les lignes exclues sont incluses dans le dénombrement des points hors contrôle, mais exclues des calculs numériques.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**Syntaxe :** obj &lt;&lt; Show Footer( state=0|1 )

**Description :** Affiche ou masque le texte de pied de page. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**Syntaxe :** obj &lt;&lt; Show Legend( state=0|1 )

**Description :** Affiche ou masque la légende à droite du graphique. Actif par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**Syntaxe :** obj &lt;&lt; Show Subtitle( state=0|1 )

**Description :** Affiche ou masque le sous-titre du graphique.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**Syntaxe :** obj &lt;&lt; Show Title( state=0|1 )

**Description :** Affiche ou masque le titre du graphique. Actif par défaut.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**Syntaxe :** obj &lt;&lt; Show X Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe X. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**Syntaxe :** obj &lt;&lt; Show X Axis Title( state=0|1 )

**Description :** Affiche ou masque le titre de l&apos;axe X. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**Syntaxe :** obj &lt;&lt; Show Y Axis( state=0|1 )

**Description :** Affiche ou masque l&apos;axe Y. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**Syntaxe :** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**Description :** Affiche ou masque le titre de l&apos;axe Y. Actif par défaut.

**JMP Version ajoutée :** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**Syntaxe :** obj &lt;&lt; Size( width, height )

**Description :** Définit la taille du graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**Syntaxe :** obj &lt;&lt; Spacing Borders( 0|1=0 )

**Description :** Définit les bordures des panneaux internes du graphique. "0" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**Syntaxe :** obj &lt;&lt; Subtitle Alignment( "Gauche"|"Centre"|"Droite"|"Auto" )

**Description :** Définit l&apos;alignement du sous-titre du graphique.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**Syntaxe :** obj &lt;&lt; Subtitle Span( "Complet"|"Contenu du graphique" )

**Description :** Définit l&apos;étendue du sous-titre du graphique.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**Syntaxe :** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**Description :** Définit les statistiques de résumé par défaut utilisées par les différents éléments dans le graphique. La Moyenne constitue la statistique par défaut pour les éléments Barres et Lignes. "Moyenne" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Title Alignment

**Syntaxe :** obj &lt;&lt; Title Alignment( "Gauche"|"Centre"|"Droite" )

**Description :** Définit l&apos;alignement du titre du graphique.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**Syntaxe :** obj &lt;&lt; Title Fill Color( color )

**Description :** Définit la couleur du remplissage de l’arrière-plan du titre sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**Syntaxe :** obj &lt;&lt; Title Frame Color( color )

**Description :** Définit la couleur de trait du cadre de titre sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**Syntaxe :** obj &lt;&lt; Title Span( "Complet"|"Contenu du graphique" )

**Description :** Définit l&apos;étendue du titre du graphique.

**JMP Version ajoutée :** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**Syntaxe :** obj &lt;&lt; Title Text Color( color )

**Description :** Définit la couleur du texte du titre sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**Syntaxe :** obj &lt;&lt; Title Transparency( fraction=1 )

**Description :** Définit la transparence du cadre de titre sur le graphique. "1" par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**Syntaxe :** obj &lt;&lt; Title Underline( state=0|1 )

**Description :** Souligne le titre ou supprime le soulignement sur le graphique.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Update Element

**Syntaxe :** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**Description :** Modifie les propriétés d&apos;un élément existant.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**Syntaxe :** obj &lt;&lt; Use row colors for levels( state=0|1 )

**Description :** Initialiser les niveaux de légende avec des couleurs de ligne lorsque chaque niveau a une couleur unique. Actif par défaut.

**JMP Version ajoutée :** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**Syntaxe :** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définit les variables utilisées dans la visualisation.

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**Syntaxe :** obj &lt;&lt; X Group Edge( "Haut"|"Bas" )

**Description :** Déplace l’axe du groupe X vers le haut ou vers le bas. « Haut » est le choix par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**Syntaxe :** obj &lt;&lt; Y Group Edge( "Gauche"|"Droite" )

**Description :** Déplace l’axe du groupe Y vers la gauche ou vers la droite. « Droite » est le choix par défaut.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**Syntaxe :** obj &lt;&lt; Y Group Level Orientation( "Horizontal"|"Vertical" )

**Description :** Détermine si le texte de l&apos;étiquette de niveau du groupe Y est horizontal ou vertical (pivoté).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**Syntaxe :** obj &lt;&lt; Y Group Title Orientation( "Horizontal"|"Vertical" )

**Description :** Détermine si le texte de l&apos;étiquette de titre du groupe Y est horizontal ou vertical (pivoté).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntaxe :** obj &lt;&lt; Broadcast(message)

**Description :** Diffuse un message sur une plate-forme. Si les résultats de renvoi des objets individuels sont des tables, elles sont concaténées si possible, et le format final est identique au résultat de l&apos;option Enregistrer la table de données combinée dans une boîte de tableau ou au résultat de l&apos;option Concaténer avec une colonne Source. Sinon, les résultats sont stockés dans une liste et renvoyés.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntaxe :** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Description :** Ajoute un panneau de contrôle pour changer les variables de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntaxe :** obj &lt;&lt; Copy ByGroup Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntaxe :** obj &lt;&lt; Copy Script

**Description :** Crée un script JSL pour réaliser cette analyse, puis le place dans le presse-papiers.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**Syntaxe :** obj &lt;&lt; Data Table Window

**Description :** Déplace en premier plan la fenêtre de la table de données utilisée dans cette analyse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

```

### Get By Levels

**Syntaxe :** obj &lt;&lt; Get By Levels

**Description :** Renvoie un tableau associatif de mappage des colonnes par groupe à leurs valeurs.

**JMP Version ajoutée :** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntaxe :** obj &lt;&lt; Get ByGroup Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntaxe :** obj &lt;&lt; Get Container

**Description :** Renvoie une référence à la zone conteneur où se trouve le contenu de l&apos;objet.

#### Général

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plate-forme avec filtre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntaxe :** obj &lt;&lt; Get Data Table

**Description :** Renvoie une référence à la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntaxe :** obj &lt;&lt; Get Group Platform

**Description :** Renvoie l&apos;objet de Plate-forme de groupe si cette plate-forme fait partie d&apos;un groupe. Sinon, renvoie Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntaxe :** obj &lt;&lt; Get Script

**Description :** Crée un script (JSL) pour produire cette analyse et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntaxe :** obj &lt;&lt; Get Script With Data Table

**Description :** Crée un script (JSL) pour produire cette analyse faisant spécifiquement référence à cette table de données et la renvoyer sous forme d’une expression.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntaxe :** obj &lt;&lt; Get Timing

**Description :** Détermine une heure de lancement de la plate-forme.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntaxe :** obj &lt;&lt; Relaunch Analysis

**Description :** Ouvre la fenêtre de lancement de la plate-forme et rappelle les paramètres utilisés pour créer le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntaxe :** obj &lt;&lt; Report View( "Complet"|"Résumé" )

**Description :** L&apos;affichage du rapport détermine le niveau de détail visible dans un rapport de plate-forme. Full affiche tous les détails, alors que Summary affiche uniquement le contenu sélectionné, selon la plate-forme. Pour un comportement personnalisé, les boîtes d&apos;affichage prennent en charge un message <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntaxe :** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de table dans la table de données. Vous pouvez spécifier un nom pour le script. L&apos;option Append Suffix ajoute un suffixe numérique au nom du script, ce qui différentie le script d&apos;un script existant portant le même nom. L&apos;option Prompt invite l&apos;utilisateur à spécifier un nom de script. L&apos;option Replace remplace un script existant avec le même nom.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntaxe :** obj &lt;&lt; Save ByGroup Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntaxe :** obj &lt;&lt; Save Script for All Objects

**Description :** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntaxe :** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Description :** Enregistre un script pour tous les objets de rapport dans la table de données active. Cette option est utile lorsque vous avez plusieurs rapports dans la fenêtre. Le script est nommé d&apos;après la première plate-forme, sauf si vous spécifiez le nom du script entre guillemets.

**Exemple 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntaxe :** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;enregistre sous forme de propriété de tableau dans la table de données.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntaxe :** obj &lt;&lt; Save Script to Journal

**Description :** Crée un script JSL pour réaliser cette analyse, puis ajoute un bouton dans le journal qui contient ce script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntaxe :** obj &lt;&lt; Save Script to Report

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;affiche dans le rapport lui-même. Utile pour conserver une trace écrite de ce qui a été effectué.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntaxe :** obj &lt;&lt; Save Script to Script Window

**Description :** Crée un script JSL pour réaliser cette analyse, puis l&apos;ajoute à la fenêtre de script active.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Top Report

**Syntaxe :** obj &lt;&lt; Top Report

**Description :** Renvoie une référence au nœud racine dans le rapport.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntaxe :** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Description :** Créez une colonne de transformation dans le contexte local d&apos;un objet, généralement une plate-forme. La colonne de transformation est active uniquement pendant la durée de vie de la plateforme.

**JMP Version ajoutée :** 16

<b>Élément lanceur : Oui</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntaxe :** obj &lt;&lt; View Web XML

**Description :** Renvoie le code XML utilisé pour créer le rapport au format HTML interactif.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntaxe :** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Élément lanceur : Oui&lt;/b&gt;

**Description :** Définir le type de fenêtre à créer pour le rapport. Par défaut, une fenêtre de rapport Visible sera créée. Une fenêtre Invisible ne s&apos;affichera pas à l&apos;écran, mais sera visible par les fonctions comme Window(). Une fenêtre Private répond à la plupart des messages de fenêtre mais n&apos;est pas visible et doit être adressée au moyen de l&apos;objet rapport

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Bar Element

### Constructeurs associés

#### Bar Element

**Syntaxe :** Bar Element

**Description :** Affiche une réponse résumée par catégories.

**Barres avec lignes superposées**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**Barres avec petites valeurs empilées en « Autre »**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**Barres de largeur variable, classées par valeur**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**Barres empilées divergentes avec échelle de Likert**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements(		Bar(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			Y,			Legend( 4 ),			Bar Style( "Stacked" )		)	),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**Barres groupées mettant en évidence les dix premières catégories**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements(		Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) )	),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) ||						"B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ),			Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )			}		)	));

```

**Couleurs des barres en fonction des données**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula(			If(				:diff == Col Minimum( :diff ), "min",				:diff == Col Maximum( :diff ), "max",				"other"			)		)	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [0, 1, -1]} )}		)	));

```

**Diagramme en barres avec barres étiquetées**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**Diagramme en barres avec intervalles de confiance**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**Diagramme en barres empilées à 100 %**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**Diagramme en barres empilées de 3 variables avec couleurs personnalisées**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements(		Bar(			X,			Y( 1 ),			Y( 2 ),			Y( 3 ),			Bar Style( "Stacked" ),			Summary Statistic( "Mean" ),			Legend( 5 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Diagramme en barres empilées trié**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer",				"Defective sanding", "Loose veneer", "Sand throughs", "Scratched veneer",				"Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**Diagramme en barres groupées côte à côte utilisant la médiane**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Diagramme en barres trié par dénombrement**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**Diagramme en bâtons**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

**Graphique à puces**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )}		)	));

```

**Graphique d'étendue à barres**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**Graphique en barres et flèches**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**Intervalle avec point utilisant des transformations**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**Lignes flottantes avec points superposés**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

### Messages d'éléments

#### Bar Style

**Syntaxe :** obj &lt;&lt; Bar Style( "Côte à côte"|"Empilé"|"Trié empilé"|"Puce"|"Imbriqué"|"Étendue"|"Étendues côte à côte"|"Intervalle"|"Intervalles côte à côte"|"Intervalle bilatéral"|"Flèche"|"Unique"|"Stock"|"Boîte à moustaches"|"Bâton"|"Flottant"|"Treemap"|"Groupé" )

#### Error Interval

**Syntaxe :** obj &lt;&lt; Error Interval( "Auto"|"Aucun"|"Étendue"|"Intervalle interquartile"|"Erreur standard"|"Écart-type"|"Intervalle de confiance"|"Écart absolu médian"|"Intervalle personnalisé"|"Intervalle bilatéral" )

#### Interval Style

**Syntaxe :** obj &lt;&lt; Interval Style( "Barre d&apos;erreur"|"Bande"|"Bande hachurée"|"Flèche" )

#### Label

**Syntaxe :** obj &lt;&lt; Label( "Aucune étiquette"|"Étiquette par valeur"|"Étiquette par pourcentage des valeurs totales"|"Étiquette par ligne" )

#### Label Format

**Syntaxe :** obj &lt;&lt; Label Format

**JMP Version ajoutée :** 16

#### Overlap

**Syntaxe :** obj &lt;&lt; Overlap( "Auto"|"Aucun(e)"|"Semi"|"Complet" )

**JMP Version ajoutée :** 16

#### Packed Coloring

**Syntaxe :** obj &lt;&lt; Packed Coloring( "Couleur des barres"|"Couleur des barres estompée"|"Gris" )

**JMP Version ajoutée :** 14

#### Packed Labeling

**Syntaxe :** obj &lt;&lt; Packed Labeling( number )

**JMP Version ajoutée :** 14

#### Packed Ordering

**Syntaxe :** obj &lt;&lt; Packed Ordering( "Par taille"|"Par étiquette" )

**JMP Version ajoutée :** 14

#### Packed Placement

**Syntaxe :** obj &lt;&lt; Packed Placement( "Pile séparée"|"Pile la plus petite"|"Première pile" )

**JMP Version ajoutée :** 14

#### Packed Primaries

**Syntaxe :** obj &lt;&lt; Packed Primaries( number )

**JMP Version ajoutée :** 14

#### Packed Primary Labels

**Syntaxe :** obj &lt;&lt; Packed Primary Labels( "Sur axe"|"À l&apos;intérieur des barres" )

**JMP Version ajoutée :** 14

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Save Summary Formula

**Syntaxe :** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Box Plot Element

### Constructeurs associés

#### Box Plot Element

**Syntaxe :** Box Plot Element

**Description :** Affiche une vue compacte d’une distribution de variable avec les quartiles et les valeurs aberrantes.

**Boîtes à moustaches horizontales des valeurs aberrantes**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**Boîtes à moustaches pleines avec couleur déterminée par les données**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

**Boîtes à moustaches superposées**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

### Messages d'éléments

#### 5 Number Summary

**Syntaxe :** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP Version ajoutée :** 14

#### Box Placement

**Syntaxe :** obj &lt;&lt; Box Placement( "Offset"|"Aligner" )

**JMP Version ajoutée :** 16

#### Box Style

**Syntaxe :** obj &lt;&lt; Box Style( "Normal"|"Plein"|"Fin" )

#### Box Type

**Syntaxe :** obj &lt;&lt; Box Type( "Quantile"|"Valeur aberrante" )

#### Confidence Diamond

**Syntaxe :** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP Version ajoutée :** 16

#### Fences

**Syntaxe :** obj &lt;&lt; Fences( state=0|1 )

**JMP Version ajoutée :** 16

#### Jitter

**Syntaxe :** obj &lt;&lt; Jitter( "Aucun(e)"|"Auto"|"Aléatoire uniforme"|"Aléatoire normal"|"Densité aléatoire"|"Groupé"|"Grille"|"Grille hexagonale"|"Essaim d&apos;abeilles" )

#### Notched

**Syntaxe :** obj &lt;&lt; Notched( state=0|1 )

**JMP Version ajoutée :** 16

#### Outliers

**Syntaxe :** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Shortest Half

**Syntaxe :** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP Version ajoutée :** 16

#### Shortest Half Color

**Syntaxe :** obj &lt;&lt; Shortest Half Color( color )

**JMP Version ajoutée :** 16

#### Width Proportion

**Syntaxe :** obj &lt;&lt; Width Proportion( number=0 )

**Description :** "0" par défaut.

**JMP Version ajoutée :** 15

## Caption Element

### Constructeurs associés

#### Caption Element

**Syntaxe :** Caption Element

**Description :** Affiche une valeur de statistiques de résumé pour les données.

**Deux statistiques de légende, par facteur**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

**Droite de référence en fonction des données**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**Statistique de résumé de légende au niveau du graphique**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**Statistiques de résumé de table d'axe**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### Messages d'éléments

#### Location

**Syntaxe :** obj &lt;&lt; Location( "Graphique"|"Graphique par facteur"|"Table d&apos;axe"|"Droite de référence d&apos;axe" )

#### Number Format

**Syntaxe :** obj &lt;&lt; Number Format

**JMP Version ajoutée :** 16

#### Per Factor

**Syntaxe :** obj &lt;&lt; Per Factor( state=0|1 )

**JMP Version ajoutée :** 14

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"|"Résumé à 5 nombres" )

#### Summary Statistic 2

**Syntaxe :** obj &lt;&lt; Summary Statistic 2( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"|"Résumé à 5 nombres" )

#### Summary Statistic 3

**Syntaxe :** obj &lt;&lt; Summary Statistic 3( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"|"Résumé à 5 nombres" )

#### Summary Statistic 4

**Syntaxe :** obj &lt;&lt; Summary Statistic 4( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"|"Résumé à 5 nombres" )

#### Summary Statistic 5

**Syntaxe :** obj &lt;&lt; Summary Statistic 5( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile"|"Résumé à 5 nombres" )

#### X Position

**Syntaxe :** obj &lt;&lt; X Position( "À gauche"|"Moyen"|"À droite" )

#### Y Position

**Syntaxe :** obj &lt;&lt; Y Position( "Haut"|"Moyen"|"Bas" )

## Contour Element

### Constructeurs associés

#### Contour Element

**Syntaxe :** Contour Element

**Description :** Affiche les régions de densité des données (ou les courbes d&apos;isoréponses avec une variable de couleur). Produit des graphiques en violon lorsque X est une variable catégorielle.

**Carte thermique d'isoréponses en panneaux**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

**Courbe d'isoréponses géographique**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour(			X,			Y,			Legend( 5 ),			Boundary( 0 ),			Number of Levels( 5 ),			Alpha( 0.04 ),			Smoothness( 0.02 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {gradient( {Color Theme( "White to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ),			Reference Line Order( 4 ), Reorder Segs( {1, 3} ),			DispatchSeg( Contour Seg( 1 ), {Clip Shape( Boundaries( "US States" ) )} )}		)	));

```

**Courbes d'isoréponses lissées**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements(		Contour(			X,			Y,			Legend( 7 ),			Number of Levels( 5 ),			Alpha( 0.1 ),			Smoothness( 0.065 )		)	));

```

**Diagrammes en violon avec boîtes à moustaches fines superposées**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

**Diagrammes en violon avec droite médiane et losange de moyenne**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )}		)	));

```

**Diagrammes en violon avec quartiles**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**Isoréponses de densité à noyau bivarié**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**Région avec la densité la plus élevée**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

### Messages d'éléments

#### Adapt to Axis Scale

**Syntaxe :** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Description :** Pour la transformation des logs et autres axes, appliquer les calculs sur les coordonnées transformées.

#### Alpha

**Syntaxe :** obj &lt;&lt; Alpha( number )

**Description :** Contrôle la forme de la frontière. La valeur 0 donne l&apos;enveloppe convexe de l&apos;ensemble de points. Les valeurs supérieures éliminent les triangles avec de longs côtés.

**JMP Version ajoutée :** 15

#### Boundary

**Syntaxe :** obj &lt;&lt; Boundary( state=0|1 )

**Description :** Dessinez une courbe à la frontière de la région de données définie. Selon la propriété Alpha, il est possible que cette frontière soit non convexe.

**JMP Version ajoutée :** 15

#### Contour Placement

**Syntaxe :** obj &lt;&lt; Contour Placement( "Offset"|"Aligner" )

**JMP Version ajoutée :** 16

#### Contour Type

**Syntaxe :** obj &lt;&lt; Contour Type( "Violon"|"Région avec la densité la plus élevée" )

**JMP Version ajoutée :** 15

#### Contour Type 1D

**Syntaxe :** obj &lt;&lt; Contour Type 1D( "Violon"|"Région avec la densité la plus élevée" )

**JMP Version ajoutée :** 15

#### Contour Type 2D

**Syntaxe :** obj &lt;&lt; Contour Type 2D( "Densité non paramétrique"|"Bagplot"|"Région avec la densité la plus élevée" )

**JMP Version ajoutée :** 15

#### Fill

**Syntaxe :** obj &lt;&lt; Fill( state=0|1 )

**Description :** Remplir les régions entre les isoréponses en utilisant les couleurs du gradient.

**JMP Version ajoutée :** 15

#### Jitter

**Syntaxe :** obj &lt;&lt; Jitter( "Aucun(e)"|"Auto"|"Aléatoire uniforme"|"Aléatoire normal"|"Densité aléatoire"|"Groupé"|"Grille"|"Grille hexagonale"|"Essaim d&apos;abeilles" )

#### Line

**Syntaxe :** obj &lt;&lt; Line( state=0|1 )

**Description :** Dessiner une courbe à chaque niveau d&apos;isoréponses et la colorier à l&apos;aide du gradient ou d&apos;une autre couleur spécifique.

**JMP Version ajoutée :** 15

#### Number of Levels

**Syntaxe :** obj &lt;&lt; Number of Levels( number )

**Description :** Définir le nombre de régions d&apos;isoréponses remplies à dessiner.

#### Outliers

**Syntaxe :** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**Syntaxe :** obj &lt;&lt; Smoothness( number )

**Description :** Lisse les données sous-jacentes et les isoréponses.

**JMP Version ajoutée :** 14

#### Transform

**Syntaxe :** obj &lt;&lt; Transform( "Aucun(e)"|"Étendue normalisée" )

**Description :** Transformer les points avant de calculer la triangulation. Cette option facultative est utilisée pour l&apos;interpolation.

#### Violin Scaling

**Syntaxe :** obj &lt;&lt; Violin Scaling( "Zone égale"|"Largeur égale"|"Zone pondérée" )

**JMP Version ajoutée :** 14

## Ellipse Element

### Constructeurs associés

#### Ellipse Element

**Syntaxe :** Ellipse Element

**Description :** Affiche une ellipse de densité normale bivariée.

**Ellipse de densité avec coefficient de corrélation**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**Ellipse de densité avec marqueur de moyenne centrale**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) )	));

```

**Ellipse de densité en panneaux**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species ),		Group Y( :Sex )	),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model(				10,				Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} )			)}		)	));

```

**Ellipses de densité superposées**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

### Messages d'éléments

#### Adapt to Axis Scale

**Syntaxe :** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Description :** Pour la transformation des logs et autres axes, appliquer les calculs sur les coordonnées transformées.

#### Correlation

**Syntaxe :** obj &lt;&lt; Correlation( state=0|1 )

**Description :** Coefficient de corrélation pour les variables X et Y.

#### Coverage

**Syntaxe :** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**Syntaxe :** obj &lt;&lt; Mean Point( state=0|1 )

**Description :** Affiche le point moyen de l&apos;ellipse.

## Formula Element

### Constructeurs associés

#### Formula Element

**Syntaxe :** Formula Element

**Description :** Affiche une fonction définie par une formule de colonne.

**Comparaison de modèles**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :linear ),		"Newton",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :quad ),		"QuasiNewton SR1",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

**Équations paramétriques**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

### Messages d'éléments

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

## Heatmap Element

### Constructeurs associés

#### Heatmap Element

**Syntaxe :** Heatmap Element

**Description :** Affiche les dénombrements des catégories de X et Y, en utilisant la couleur.

**Carte de tranche**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

**Carte thermique avec couleur catégorielle**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**Carte thermique avec étiquettes**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**Carte thermique catégorielle avec gradient personnalisé**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter(		Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) )	),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical",							"Diverging"}, {{42, 63, 255}, {166, 170, 203}, {192, 192, 192},							{201, 165, 165}, {252, 11, 11}, Missing( "Black" )}, {0, 0.33,							0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**Carte thermique hexagonale des dénombrements**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements(		Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} )			)}		)	));

```

**Couleur de fond en fonction des données**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State )			-Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap(			:State,			Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) )		),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox,			{Format( "Engineering SI", 13 ), Minor Ticks( 0 )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient(						{Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )}					)}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

### Messages d'éléments

#### Bin Shape

**Syntaxe :** obj &lt;&lt; Bin Shape( "Rectangulaire"|"Hexagonal" )

**JMP Version ajoutée :** 16

#### Cell Outline

**Syntaxe :** obj &lt;&lt; Cell Outline( state=0|1 )

**Description :** Définit l&apos;augmentation maximum de la taille de la police.

**JMP Version ajoutée :** 16

#### Hex Bin Radius

**Syntaxe :** obj &lt;&lt; Hex Bin Radius( number )

**JMP Version ajoutée :** 16

#### Label

**Syntaxe :** obj &lt;&lt; Label( "Aucune étiquette"|"Étiquette par valeur"|"Étiquette par pourcentage des valeurs totales"|"Étiquette par ligne" )

**JMP Version ajoutée :** 14

#### Label Format

**Syntaxe :** obj &lt;&lt; Label Format

**JMP Version ajoutée :** 16

#### Max Label Size

**Syntaxe :** obj &lt;&lt; Max Label Size( number )

## Histogram Element

### Constructeurs associés

#### Histogram Element

**Syntaxe :** Histogram Element

**Description :** Affiche une distribution de variable en utilisant des conteneurs.

**Graphique ridgeline**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

**Histogramme avec axe de dénombrement**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox,			{Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )}		),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Flight Distance by Airline" )}		)	));

```

**Histogrammes par niveau de facteur**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**Histogrammes superposés, étiquettes en pourcentage**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

**Zone de densité à noyau lissée**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements(		Histogram(			X,			Y,			Legend( 8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.08 )		)	));

```

### Messages d'éléments

#### Confid Percent

**Syntaxe :** obj &lt;&lt; Confid Percent( number=. )

**Description :** Intervalle de confiance de la moyenne, compte tenu de la couverture en pourcent. "." par défaut.

**JMP Version ajoutée :** 14

#### Counts

**Syntaxe :** obj &lt;&lt; Counts( state=0|1 )

**JMP Version ajoutée :** 15

#### Histogram Style

**Syntaxe :** obj &lt;&lt; Histogram Style( "Barre"|"Polygone"|"Densité à noyau"|"Shadowgramme" )

**JMP Version ajoutée :** 15

#### Horizontal

**Syntaxe :** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**Syntaxe :** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP Version ajoutée :** 14

#### Overlap

**Syntaxe :** obj &lt;&lt; Overlap( number )

**JMP Version ajoutée :** 15

#### Percents

**Syntaxe :** obj &lt;&lt; Percents( state=0|1 )

**JMP Version ajoutée :** 15

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Response Scale

**Syntaxe :** obj &lt;&lt; Response Scale( "Nombre"|"Pourcentage"|"Remplir" )

**JMP Version ajoutée :** 15

#### Smoothness

**Syntaxe :** obj &lt;&lt; Smoothness( number )

**Description :** La largeur de bande contrôle le lissage de la courbe de densité. Une réduction de la largeur de bande rendra la courbe moins lisse, avec plus de pics. Une augmentation de la largeur de bande lissera la courbe mais pourrait masquer certains détails.

**JMP Version ajoutée :** 15

#### Vertical

**Syntaxe :** obj &lt;&lt; Vertical( state=0|1 )

**Description :** Actif par défaut.

#### t Test for Mean At

**Syntaxe :** obj &lt;&lt; t Test for Mean At( number=. )

**Description :** Vérifier que la moyenne est une valeur spécifiée. "." par défaut.

**JMP Version ajoutée :** 14

## Line Element

### Constructeurs associés

#### Line Element

**Syntaxe :** Line Element

**Description :** Affiche une réponse résumée par catégories.

**Carte de suivi, par ordre des lignes**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**Diagramme de courbes avec bande d'erreur**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements(		Line(			X,			Y,			Legend( 4 ),			Error Interval( "Confidence Interval" ),			Interval Style( "Band" )		)	));

```

**Diagramme de courbes de la moyenne mobile**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Diagramme de courbes de la moyenne mobile arrière**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Flèches connectées**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

**Graphique de classement évolutif avec classements connectés**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific",				"Plains", "South", "Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**Graphique spaghetti**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**Lignes étiquetées**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**Nuage de points connecté**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**Plages d'événements**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox,			{Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties(					1,					{Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )}				),				Properties(					2,					{Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )}				)			)}		)	));

```

**Traits de flèche, un par ligne**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

### Messages d'éléments

#### Connection

**Syntaxe :** obj &lt;&lt; Connection( "Ligne"|"Flèche"|"Courbe"|"Pas"|"Pas centré"|"Horizontale"|"Vertical" )

#### Error Interval

**Syntaxe :** obj &lt;&lt; Error Interval( "Auto"|"Aucun"|"Étendue"|"Intervalle interquartile"|"Erreur standard"|"Écart-type"|"Intervalle de confiance"|"Écart absolu médian"|"Intervalle personnalisé"|"Intervalle bilatéral" )

#### Fill

**Syntaxe :** obj &lt;&lt; Fill( "Aucun(e)"|"Remplir en descendant"|"Remplir entre" )

**JMP Version ajoutée :** 15

#### Interval Style

**Syntaxe :** obj &lt;&lt; Interval Style( "Barre d&apos;erreur"|"Bande"|"Bande hachurée"|"Flèche" )

#### Missing Factors

**Syntaxe :** obj &lt;&lt; Missing Factors( "Ignorer"|"Considérer comme manquantes"|"Considérer comme nulles" )

**Description :** Comment afficher les connexions qui couvrent les niveaux des facteurs manquants

**JMP Version ajoutée :** 15

#### Missing Values

**Syntaxe :** obj &lt;&lt; Missing Values( "Connecter sans tenir compte des valeurs manquantes"|"Connecter en atténuant les valeurs manquantes"|"Connecter en pointillés"|"Aucune connexion" )

**Description :** Comment afficher les connexions qui couvrent les valeurs manquantes.

#### Ordering

**Syntaxe :** obj &lt;&lt; Ordering( "Auto"|"Ordre des lignes"|"Résumé"|"Dans la ligne" )

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Row order

**Syntaxe :** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Syntaxe :** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Syntaxe :** obj &lt;&lt; Smoothness( number )

#### Stack

**Syntaxe :** obj &lt;&lt; Stack( state=0|1 )

**JMP Version ajoutée :** 15

#### Stack Negative

**Syntaxe :** obj &lt;&lt; Stack Negative( "Superposer"|"Séparer négatifs"|"Considérer comme nulles" )

**Description :** Contrôle la manière dont les valeurs négatives sont traitées lorsqu&apos;elles sont empilées.

**JMP Version ajoutée :** 17

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Line of Fit Element

### Constructeurs associés

#### Line of Fit Element

**Syntaxe :** Line of Fit Element

**Description :** Affiche une régression linéaire avec intervalles de confiance pour X et Y continus. Ajuste les moyennes pour X catégoriel.

**Ajustement ANOVA à un facteur, comparaison des moyennes**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**Ajustements quadratiques**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 9 ) ),		Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) )	));

```

**Régression de séries chronologiques**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

**Régressions linéaires superposées**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

### Messages d'éléments

#### Adapt to Axis Scale

**Syntaxe :** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Description :** Pour la transformation des logs et autres axes, appliquer les calculs sur les coordonnées transformées.

#### Confidence of Fit

**Syntaxe :** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**Syntaxe :** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**Syntaxe :** obj &lt;&lt; Constrain Parameters( state=0|1 )

**Description :** Paramètres ETS de contrainte.

**JMP Version ajoutée :** 17

#### Degree

**Syntaxe :** obj &lt;&lt; Degree( "Linéaire"|"Quadratique"|"Cubique" )

#### Equation

**Syntaxe :** obj &lt;&lt; Equation( state=0|1 )

**Description :** Équation de l&apos;ajustement.

#### F Test

**Syntaxe :** obj &lt;&lt; F Test( state=0|1 )

**Description :** Niveau de signification du test basé sur l&apos;ensemble du modèle.

**JMP Version ajoutée :** 14

#### Fit

**Syntaxe :** obj &lt;&lt; Fit( "Polynomial"|"Cauchy robuste"|"Série chronologique" )

**JMP Version ajoutée :** 15

#### Forecast Model

**Syntaxe :** obj &lt;&lt; Forecast Model( state=0|1 )

**Description :** Afficher le modèle utilisé pour prévoir, avec les estimations des paramètres.

**JMP Version ajoutée :** 15

#### Forecast Periods

**Syntaxe :** obj &lt;&lt; Forecast Periods( number )

**Description :** Nombre de périodes à venir à prévoir.

**JMP Version ajoutée :** 15

#### Means and Std Devs

**Syntaxe :** obj &lt;&lt; Means and Std Devs( state=0|1 )

**Description :** Afficher les moyennes et écarts-types de chaque groupe à côté de la droite de la moyenne.

**JMP Version ajoutée :** 14

#### Prediction

**Syntaxe :** obj &lt;&lt; Prediction( state=0|1 )

**Description :** La région de confiance des valeurs prévues individuelles

#### RMSE

**Syntaxe :** obj &lt;&lt; RMSE( state=0|1 )

**Description :** Racine de l&apos;erreur quadratique moyenne, une mesure de l&apos;erreur en unités de la réponse.

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Root Mean Square Error

**Syntaxe :** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**Syntaxe :** obj &lt;&lt; R²( state=0|1 )

**Description :** Coefficient de détermination, une mesure de la qualité de l&apos;ajustement à prévoir les données.

#### Save Formula

**Syntaxe :** obj &lt;&lt; Save Formula

#### Seasonal Period

**Syntaxe :** obj &lt;&lt; Seasonal Period( number )

**Description :** Nombre de périodes dans une saison. Par exemple, avec des données mensuelles, il y a 12 périodes pour une saison d&apos;un an.

**JMP Version ajoutée :** 15

#### Unequal Variances

**Syntaxe :** obj &lt;&lt; Unequal Variances( state=0|1 )

**Description :** Calculer ou non les tests et limites de confiance en supposant que les différents groupes ont des variances différentes.

## Mosaic Element

### Constructeurs associés

#### Mosaic Element

**Syntaxe :** Mosaic Element

**Description :** Affiche les dénombrements des catégories de X et Y, en utilisant la taille.

**Graphique mosaïque**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

**Mosaïque horizontale**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

### Messages d'éléments

#### Cell Labeling

**Syntaxe :** obj &lt;&lt; Cell Labeling( "Aucune étiquette"|"Étiquette par nombre"|"Étiquette par pourcentage"|"Étiquette par valeur"|"Étiquette par ligne" )

**JMP Version ajoutée :** 14

#### Chi-square Test

**Syntaxe :** obj &lt;&lt; Chi-square Test( state=0|1 )

**Description :** Test du khi-deux avec des taux de réponse identiques dans tous les groupes, ou avec deux réponses indépendantes

**JMP Version ajoutée :** 14

#### Confid Percent

**Syntaxe :** obj &lt;&lt; Confid Percent( number=. )

**Description :** Couverture de l&apos;intervalle de confiance sur la proportion du niveau supérieur, en pourcent. "." par défaut.

**JMP Version ajoutée :** 14

#### Horizontal

**Syntaxe :** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**Syntaxe :** obj &lt;&lt; Label Format

**JMP Version ajoutée :** 16

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Test Proportion At

**Syntaxe :** obj &lt;&lt; Test Proportion At( number=. )

**Description :** Vérifier que la proportion du niveau supérieur est une valeur spécifiée. "." par défaut.

**JMP Version ajoutée :** 14

#### Vertical

**Syntaxe :** obj &lt;&lt; Vertical( state=0|1 )

**Description :** Actif par défaut.

## Parallel Element

### Constructeurs associés

#### Parallel Element

**Syntaxe :** Parallel Element

**Description :** Affiche plusieurs variables le long des axes parallèles avec une droite connectée pour chaque ligne.

**Coordonnées parallèles avec échelle alignée**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**Diagramme des boîtes parallèles**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements(		Box Plot(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 11 )		)	));

```

**Diagramme des coordonnées parallèles**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Diagramme des points parallèles**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Ensembles parallèles**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

**Ensembles parallèles de Sankey**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X(			:"What is your favorite color? (select one)"n,			Position( 1 ),			Combine( "Parallel Independent" )		),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark(					Label( "What is your favorite color?" ),					Label( "Specific favorite color" )				), Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

### Messages d'éléments

#### Axes Labels

**Syntaxe :** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**Syntaxe :** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**Syntaxe :** obj &lt;&lt; Smoothness( number )

**JMP Version ajoutée :** 16

## Pie Element

### Constructeurs associés

#### Pie Element

**Syntaxe :** Pie Element

**Description :** Affiche les portions d’un tout.

**Diagramme en anneau par dénombrement**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**Diagramme en secteurs par dénombrement**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ) ) ));

```

**Panneau de diagramme en secteur**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "SmartPhone OS Market Share" )}		)	));

```

### Messages d'éléments

#### Label

**Syntaxe :** obj &lt;&lt; Label( "Aucune étiquette"|"Étiquette par valeur"|"Étiquette par pourcentage des valeurs totales"|"Étiquette par ligne" )

#### Label Format

**Syntaxe :** obj &lt;&lt; Label Format

**JMP Version ajoutée :** 16

#### Pie Style

**Syntaxe :** obj &lt;&lt; Pie Style( "Secteur"|"Anneau"|"Coxcomb" )

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Points Element

### Constructeurs associés

#### Points Element

**Syntaxe :** Points Element

**Description :** Affiche un nuage de points des valeurs de données.

**Diagramme de points de densité**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Jitter( "Hex Grid" ),			Jitter Side( "Positive" ),			Jitter Smooth( 1 )		)	),	SendToReport(		Dispatch( {}, "Female", ScaleBox,			{Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )}		)	));

```

**Diagramme de points lissé**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox,			{Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties(					0,					{Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )}				),				Properties(					1,					{Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )}				),				Properties(					2,					{Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )}				),				Properties(					3,					{Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

**Diagrammes en points à côtés opposés hexagonaux**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points(			X,			Y,			Legend( 9 ),			Jitter( "Hex Grid" ),			Jitter Side( "Ordinal" ),			Jitter Smooth( 1 )		)	),	Local Data Filter(		Add Filter(			columns( :type of space ),			Where( :type of space == {"exterior", "interior"} )		)	),	SendToReport(		Dispatch( {}, "Y", ScaleBox,			{Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )}		),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**Diagrammes en points côte à côte centrés**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Diagrammes en points côte à côte centrés et lissés**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Diagrammes en points sur grille hexagonale**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Graphe de variabilité**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

**Jitter par groupement circulaire**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )}		)	));

```

**Latitude et longitude**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) )}		)	));

```

**Matrice de nuages de points**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements(		Position( 1, 2 ),		Points( X, Y, Legend( 57 ) ),		Smoother( X, Y, Legend( 58 ) )	),	Elements(		Position( 1, 3 ),		Points( X, Y, Legend( 59 ) ),		Smoother( X, Y, Legend( 60 ) )	),	Elements(		Position( 1, 4 ),		Points( X, Y, Legend( 61 ) ),		Smoother( X, Y, Legend( 62 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 63 ) ),		Smoother( X, Y, Legend( 64 ) )	),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements(		Position( 2, 3 ),		Points( X, Y, Legend( 67 ) ),		Smoother( X, Y, Legend( 68 ) )	),	Elements(		Position( 2, 4 ),		Points( X, Y, Legend( 69 ) ),		Smoother( X, Y, Legend( 70 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 71 ) ),		Smoother( X, Y, Legend( 72 ) )	),	Elements(		Position( 3, 2 ),		Points( X, Y, Legend( 73 ) ),		Smoother( X, Y, Legend( 74 ) )	),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements(		Position( 3, 4 ),		Points( X, Y, Legend( 77 ) ),		Smoother( X, Y, Legend( 78 ) )	),	Elements(		Position( 4, 1 ),		Points( X, Y, Legend( 79 ) ),		Smoother( X, Y, Legend( 80 ) )	),	Elements(		Position( 4, 2 ),		Points( X, Y, Legend( 81 ) ),		Smoother( X, Y, Legend( 82 ) )	),	Elements(		Position( 4, 3 ),		Points( X, Y, Legend( 83 ) ),		Smoother( X, Y, Legend( 84 ) )	),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

**Nuage de points utilisant la taille et la couleur**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

### Messages d'éléments

#### Error Interval

**Syntaxe :** obj &lt;&lt; Error Interval( "Auto"|"Aucun"|"Étendue"|"Intervalle interquartile"|"Erreur standard"|"Écart-type"|"Intervalle de confiance"|"Écart absolu médian"|"Intervalle personnalisé"|"Intervalle bilatéral" )

#### Interval Style

**Syntaxe :** obj &lt;&lt; Interval Style( "Barre d&apos;erreur"|"Bande"|"Bande hachurée"|"Flèche" )

#### Jitter

**Syntaxe :** obj &lt;&lt; Jitter( "Aucun(e)"|"Auto"|"Aléatoire uniforme"|"Aléatoire normal"|"Densité aléatoire"|"Groupé"|"Grille"|"Grille hexagonale"|"Essaim d&apos;abeilles" )

#### Jitter Limit

**Syntaxe :** obj &lt;&lt; Jitter Limit( number )

**JMP Version ajoutée :** 14

#### Jitter Overlap

**Syntaxe :** obj &lt;&lt; Jitter Overlap( number )

**JMP Version ajoutée :** 19

#### Jitter Side

**Syntaxe :** obj &lt;&lt; Jitter Side( "Centré"|"Positif"|"Négatif"|"Ordinal" )

#### Jitter Smooth

**Syntaxe :** obj &lt;&lt; Jitter Smooth( number )

**JMP Version ajoutée :** 19

#### Label

**Syntaxe :** obj &lt;&lt; Label( "Aucune étiquette"|"Étiquette par valeur"|"Étiquette par ligne"|"Étiquette par ligne et valeur" )

#### Label Format

**Syntaxe :** obj &lt;&lt; Label Format

**JMP Version ajoutée :** 18

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Save Summary Formula

**Syntaxe :** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**Syntaxe :** obj &lt;&lt; Set Shape Column

**JMP Version ajoutée :** 16

#### Set Shape Expression

**Syntaxe :** obj &lt;&lt; Set Shape Expression

**JMP Version ajoutée :** 16

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Shapes Element

### Constructeurs associés

#### Map Shapes Element

**Syntaxe :** Map Shapes Element

**Description :** Affiche les zones définies par une variable de forme de la carte, généralement une variable de couleur.

**Carte du monde centrée sur l'Asie/Pacifique**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**Choroplèthe de la carte du monde**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**Choroplèthe méditerranéen à aire égale**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

**Fichier de formes personnalisé avec couleur catégorielle**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**Fichier de formes personnalisé avec couleur en dégradé**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

### Messages d'éléments

#### Aspect Ratio

**Syntaxe :** obj &lt;&lt; Aspect Ratio( number )

**Description :** Facteur d&apos;ajustement pour le ratio de mise à l&apos;échelle X:Y.

#### Show Missing Shapes

**Syntaxe :** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP Version ajoutée :** 16

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

## Smoother Element

### Constructeurs associés

#### Smoother Element

**Syntaxe :** Smoother Element

**Description :** Affiche une courbe lissée passant par les données. Idéal quand la relation entre des valeurs continues de X et Y est inconnue.

**Comparaison de lissage : Loess, Spline, P-spline**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ),			Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

**Courbe de tendance lissée monotonique**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother(			X,			Y,			Method( "P-Spline" ),			Lambda( 0.3 ),			Shape Constraint( "Non-descending" )		)	));

```

**Courbes de tendance lissées en panneaux**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Courbes de tendance lissées en panneaux et superposées**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State ),		Overlay( :Commodity )	),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	));

```

**Courbes de tendance lissées superposées**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Courbes de tendance lissées sur nuage de points**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

**Fonction monotone sur le logarithme x**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Legend( 12 ),			Method( "P-Spline" ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} )	));

```

**Lissage cyclique**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

**Tendance lissée de série chronologique avec division**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :date ),		Y( :Ozone Concentration ),		Overlay( :Intervention for post 1960 period )	),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**Tendance lissée et intervalle de confiance**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) )	));

```

### Messages d'éléments

#### Adapt to Axis Scale

**Syntaxe :** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Description :** Pour la transformation des logs et autres axes, appliquer les calculs sur les coordonnées transformées.

#### Confidence Bootstrap

**Syntaxe :** obj &lt;&lt; Confidence Bootstrap( number )

**JMP Version ajoutée :** 14

#### Confidence of Fit

**Syntaxe :** obj &lt;&lt; Confidence of Fit( state=0|1 )

**Description :** Région de confiance du bootstrap pour l&apos;ajustement.

**JMP Version ajoutée :** 14

#### Constrain Confidence Region

**Syntaxe :** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**Description :** Si la contrainte de forme s&apos;applique également aux ajustements de bootstrap utilisés pour calculer la région de la confiance de l&apos;ajustement.

**JMP Version ajoutée :** 19

#### Degree

**Syntaxe :** obj &lt;&lt; Degree( "Médiane"|"Moyenne"|"Linéaire"|"Quadratique"|"Cubique" )

**JMP Version ajoutée :** 16

#### Lambda

**Syntaxe :** obj &lt;&lt; Lambda( number )

#### Local Constraint

**Syntaxe :** obj &lt;&lt; Local Constraint( state=0|1 )

**Description :** Contraint la courbe à l&apos;étendue de valeurs proches.

**JMP Version ajoutée :** 19

#### Local Region

**Syntaxe :** obj &lt;&lt; Local Region( "Puissance du test"|"Fraction"|"Fixe"|"De fin" )

**JMP Version ajoutée :** 16

#### Local Robustness

**Syntaxe :** obj &lt;&lt; Local Robustness( number )

**JMP Version ajoutée :** 16

#### Local Weighting

**Syntaxe :** obj &lt;&lt; Local Weighting( "Tricubique"|"Cosinus"|"Epanechnikov"|"Gaussien"|"Cauchy"|"Laplace"|"Triangulaire"|"Rectangulaire" )

**JMP Version ajoutée :** 16

#### Local Width

**Syntaxe :** obj &lt;&lt; Local Width( number )

**JMP Version ajoutée :** 16

#### Maximum Constraint

**Syntaxe :** obj &lt;&lt; Maximum Constraint( number )

#### Method

**Syntaxe :** obj &lt;&lt; Method( "Spline"|"P-spline"|"Noyau local"|"Savitzky-Golay"|"Moyenne mobile"|"Boîte mobile" )

**JMP Version ajoutée :** 15

#### Minimum Constraint

**Syntaxe :** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**Syntaxe :** obj &lt;&lt; Response Axis( "Auto"|"X"|"Y" )

#### Save Formula

**Syntaxe :** obj &lt;&lt; Save Formula

#### Scale lambda for count

**Syntaxe :** obj &lt;&lt; Scale lambda for count( state=0|1 )

**Description :** Ajustez lambda, le paramètre de lissage spline, pour tenir compte de la taille des données. Utile pour un lissage cohérent entre les groupes de différentes tailles.

#### Shape Constraint

**Syntaxe :** obj &lt;&lt; Shape Constraint( "Aucun(e)"|"Non-décroissant"|"Non-croissant"|"Pic"|"Vallée"|"Pic et vallée"|"Démarrage plat"|"Fin plate"|"Démarrage et fin plats"|"Cycle" )

**JMP Version ajoutée :** 19

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Aucun"|"Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

#### Trim

**Syntaxe :** obj &lt;&lt; Trim( number )

**JMP Version ajoutée :** 16

## Treemap Element

### Constructeurs associés

#### Treemap Element

**Syntaxe :** Treemap Element

**Description :** Affiche une réponse sommée par plusieurs catégories.

**Dégradé de couleur continu**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

**Indications d'ordre positionnel**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

**Treemap imbriqué, arranger en carrés**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements(		Treemap(			X( 1 ),			X( 2 ),			X( 3 ),			Legend( 6 ),			Layout( "Squarify" ),			Group Labels( "Above" )		)	));

```

### Messages d'éléments

#### Category Name

**Syntaxe :** obj &lt;&lt; Category Name( state=0|1 )

**Description :** Affiche le nom de colonne de la catégorie dans le cadre de l&apos;étiquette de la catégorie. Cette option est utilisée uniquement lorsque la valeur de la catégorie est également affichée.

#### Category Value

**Syntaxe :** obj &lt;&lt; Category Value( state=0|1 )

**Description :** Affiche la valeur de la catégorie dans le cadre de l&apos;étiquette de la catégorie.

#### Color Label Format

**Syntaxe :** obj &lt;&lt; Color Label Format

**JMP Version ajoutée :** 16

#### Color Name

**Syntaxe :** obj &lt;&lt; Color Name( state=0|1 )

**Description :** Affiche le nom de la variable de couleur comme partie de l&apos;étiquette de couleur. Cette option est utilisée uniquement lorsque la valeur de la couleur est également connue.

**JMP Version ajoutée :** 16

#### Color Value

**Syntaxe :** obj &lt;&lt; Color Value( state=0|1 )

**Description :** Affiche la valeur de la variable de couleur dans le cadre de l&apos;étiquette de la catégorie. Cette option est utilisée uniquement lorsqu&apos;une variable de couleur est spécifiée.

#### Group Labels

**Syntaxe :** obj &lt;&lt; Group Labels( "Aucun(e)"|"Au-dessus"|"Flottante" )

**Description :** Désactiver les étiquettes de groupe ou afficher les étiquettes de groupe au-dessus des catégories ou sous la forme de zones flottantes.

#### Implicit Color

**Syntaxe :** obj &lt;&lt; Implicit Color( state=0|1 )

**Description :** Utiliser des couleurs uniques pour le treemap. Lorsque cette option est désélectionnée, le treemap s&apos;affiche dans une seule couleur pleine. Cette option est désactivée si une variable de couleur a été spécifiée. Actif par défaut.

#### Label Justification

**Syntaxe :** obj &lt;&lt; Label Justification( "Gauche"|"Centre"|"Droite" )

#### Label Threshold

**Syntaxe :** obj &lt;&lt; Label Threshold( number )

**Description :** La taille minimum (zone) pour afficher l&apos;étiquette dans la boîte.

#### Label Transparency

**Syntaxe :** obj &lt;&lt; Label Transparency( number )

**Description :** Définissez la transparence de l&apos;étiquette de groupe lorsque celle-ci est flottante. Les valeurs valides sont comprises entre 0,0 et 1,0 inclus.

**JMP Version ajoutée :** 16

#### Layout

**Syntaxe :** obj &lt;&lt; Layout( "Divisions"|"Arranger en carrés"|"Mixte" )

#### Max Label Size

**Syntaxe :** obj &lt;&lt; Max Label Size( number )

**Description :** Définit l&apos;augmentation maximum de la taille de la police.

#### Orientation Bias

**Syntaxe :** obj &lt;&lt; Orientation Bias( number )

**Description :** Définir la préférence relative de la découpe de zone horizontale par rapport à verticale.

**JMP Version ajoutée :** 17

#### Show Frames

**Syntaxe :** obj &lt;&lt; Show Frames( state=0|1 )

**Description :** Actif par défaut.

#### Show Group Name

**Syntaxe :** obj &lt;&lt; Show Group Name( state=0|1 )

**Description :** Affiche le nom de colonne du groupe dans le cadre de l&apos;étiquette du groupe. L&apos;option est utilisée uniquement lorsque les étiquettes de groupe se trouvent au-dessus des mosaïques de groupes.

#### Size Label Format

**Syntaxe :** obj &lt;&lt; Size Label Format

**JMP Version ajoutée :** 16

#### Size Name

**Syntaxe :** obj &lt;&lt; Size Name( state=0|1 )

**Description :** Affiche le nom de la variable de taille comme partie de l&apos;étiquette de taille. Cette option est utilisée uniquement lorsque la valeur de la taille est également connue.

**JMP Version ajoutée :** 16

#### Size Value

**Syntaxe :** obj &lt;&lt; Size Value( state=0|1 )

**Description :** Affiche la valeur de la variable de taille dans le cadre de l&apos;étiquette de la catégorie.

#### Summary Statistic

**Syntaxe :** obj &lt;&lt; Summary Statistic( "Nombre d&apos;observations"|"Moyenne"|"Médiane"|"Mode"|"Moyenne géométrique"|"Minimum "|"Maximum"|"Étendue"|"Somme"|"Somme cumulée"|"Pourcentage cumulé"|"% du total"|"% du facteur"|"% du total général"|"Écart-type"|"Variance"|"Erreur standard"|"Coefficient de variation"|"Intervalle interquartile"|"Écart absolu médian"|"Premier quartile"|"Troisième quartile" )

#### Tile Labels

**Syntaxe :** obj &lt;&lt; Tile Labels

