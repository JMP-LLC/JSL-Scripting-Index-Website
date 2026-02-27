# Graph Builder



## Area Element

### Elementmeldungen

#### Area Style

**Syntax:** obj &lt;&lt; Area Style( "Übereinander"|"Überlagert"|"Bereich"|"Gestapelter Bereich" )

#### Connection

**Syntax:** obj &lt;&lt; Connection( "Linie"|"Pfeil"|"Kurve"|"Schritt "|"Zentrierter Schritt"|"Horizontal"|"Vertikal" )

#### Error Interval

**Syntax:** obj &lt;&lt; Error Interval( "Automatisch"|"Kein"|"Bereich"|"Interquartilabstand"|"Standardfehler"|"Standardabweichung"|"Konfidenzintervall"|"Median der absoluten Abweichung"|"Benutzerdefiniertes Intervall"|"Zweifaktorielles Intervall" )

#### Interval Style

**Syntax:** obj &lt;&lt; Interval Style( "Fehlerbalken"|"Band"|"Hash-Band"|"Pfeil" )

#### Missing Factors

**Syntax:** obj &lt;&lt; Missing Factors( "Überspringen"|"Als fehlend behandeln"|"Als null behandeln" )

**Beschreibung:** Verbindungen anzeigen, die die Spannweite fehlender Faktorstufen anzeigen.

**JMP Version hinzugefügt:** 15

#### Missing Values

**Syntax:** obj &lt;&lt; Missing Values( "Durchgezogen verbinden"|"Schwächer verbinden"|"Gestrichelt verbinden"|"Nicht verbinden" )

**Beschreibung:** Verbindungen anzeigen, die die Spannweite fehlender Werte anzeigen.

#### Ordering

**Syntax:** obj &lt;&lt; Ordering( "Automatisch"|"Zeilenreihenfolge"|"Zusammengefasst"|"Innerhalb Zeile" )

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Row order

**Syntax:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Syntax:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Syntax:** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**Syntax:** obj &lt;&lt; Stack Negative( "Überlappung"|"Negative trennen"|"Als null behandeln" )

**Beschreibung:** Legt fest, wie negative Datenwerte beim Stapeln verarbeitet werden.

**JMP Version hinzugefügt:** 17

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Area Element

**Syntax:** Area Element

**Beschreibung:** Zeigt eine nach Kategorien zusammengefasste Zielgröße an.

**100% gestapeltes Flächendiagramm**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox,			{Format( "Percent", 13, 0 ), Max( 1 )}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Bereichsfläche als benutzerdefiniertes Intervall um Linie herum**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

**Gestapeltes Flächendiagramm**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**Überlagerte Fläche mit Füllmustern**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

## Elementmeldungen

### Add Element

**Syntax:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**Beschreibung:** Fügt ein neues Graphenelement an den angegebenen X- und Y-Positionen hinzu. Die Elementspezifikation enthält den Elementnamen, die verwendeten Datenrollen und die Optionswerte.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**Syntax:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**Beschreibung:** Fügt dem Modell in der Plattform „Graphik erstellen“ eine neue Variable mit einer vorgegebenen Rolle und Position hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**Syntax:** obj &lt;&lt; Auto Stretching( state=0|1 )

**Beschreibung:** Schaltet die automatische Streckung des Graphen mit dem zugehörigen Fenster ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Back Color

**Syntax:** obj &lt;&lt; Back Color( color )

**Beschreibung:** Legt die Farbe für den gesamten Hintergrund um den Graphen herum fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**Syntax:** obj &lt;&lt; Categorical Color Theme

**Beschreibung:** Legt das Farbschema für Kategorien fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**Syntax:** obj &lt;&lt; Continuous Color Theme

**Beschreibung:** Legt das Farbschema für Gradienten fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Done

**Syntax:** obj &lt;&lt; Done

**Beschreibung:** Blendet das Bedienfeld aus und schaltet das Stichprobenziehen von Zeilen aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**Syntax:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() )) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Identifiziert die Elemente der Visualisierung.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**Syntax:** obj &lt;&lt; Error Bar Offset

**Beschreibung:** Öffnet ein Dialogfeld, um den Offset für Fehlerbalken festzulegen.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**Syntax:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**Beschreibung:** Multiplikator für den Betrag, um den eine Achsenskala auf Null verlängert wird. Standardmäßig „1“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**Syntax:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**Beschreibung:** Multiplikator für den Betrag, um den eine Achsenskala auf Null verlängert wird, wenn es sowohl eine linke als auch eine rechte Achse gibt. Standardmäßig „2“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**Syntax:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**Beschreibung:** Multiplikator für den Betrag, um den eine Achsenskala auf Null verlängert wird, wenn der Modus „Parallele Y-Achsen“ ausgewählt ist. Standardmäßig „3“.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**Syntax:** obj &lt;&lt; Fit to Window( "Automatisch"|"Ein"|"Aus"|"Seitenverhältnis beibehalten" )

**Beschreibung:** Legt das Verhalten für die automatische Streckung des Berichts fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

```

### Get Element

**Syntax:** obj &lt;&lt; Get Element( xposition, yposition, i )

**Beschreibung:** Gibt die Spezifikation eines Elements im Graphen für die vorgegebenen X- und Y-Positionen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**Syntax:** obj &lt;&lt; Get Elements( xposition, yposition )

**Beschreibung:** Gibt eine Liste von Elementspezifikationen für die vorgegebenen X- und Y-Positionen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Legend Display

**Syntax:** obj &lt;&lt; Get Legend Display

**Beschreibung:** Gibt das Anzeigefeld mit der Legende für den Graphen zurück, das abgefragt oder geändert werden kann.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**Syntax:** obj &lt;&lt; Get Legend Server

**Beschreibung:** Gibt ein Objekt mit Informationen zurück, das von der Legendenanzeige und den entsprechenden Anzeigesegmenten im Graphen verwendet wird.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**Syntax:** obj &lt;&lt; Get N Elements( xposition, yposition )

**Beschreibung:** Gibt die Anzahl von Elementen im Graphen für die vorgegebenen X- und Y-Positionen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**Syntax:** nrole

**Beschreibung:** Gibt die für eine vorgegebene Rolle verwendete Anzahl von Positionen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**Syntax:** n = obj &lt;&lt; Get N Variables

**Beschreibung:** Gibt die verwendete Anzahl von Variablen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Variable

**Syntax:** obj &lt;&lt; Get Variable( index )

**Beschreibung:** Gibt eine Variablenspezifikation zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**Syntax:** list = obj &lt;&lt; Get Variables

**Beschreibung:** Gibt eine Liste von Variablenspezifikationen für die verwendeten Variablen zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

```

### Graph Spacing

**Syntax:** obj &lt;&lt; Graph Spacing( gap=1 )

**Beschreibung:** Legt den Abstand zwischen Graphenbereichen fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**Syntax:** obj &lt;&lt; Grid Color( color )

**Beschreibung:** Legt die Farbe für die Rasterlinien im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**Syntax:** obj &lt;&lt; Grid Transparency( fraction=1 )

**Beschreibung:** Legt die Transparenz für die Rasterlinien fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**Syntax:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Beschreibung:** Behandelt fehlende Werte als zusätzliche Kategorie bei kategorialen Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**Syntax:** obj &lt;&lt; Launch Analysis

**Beschreibung:** Startet eine Analyse mit den aktuellen Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**Syntax:** obj &lt;&lt; Legend Floating Offset

**Beschreibung:** Legt den Offset in Pixel für die Legende fest, wenn für die Legendenposition „Verschiebbar“ festgelegt ist.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**Syntax:** obj &lt;&lt; Legend Position( "Rechts"|"Unten"|"Innen links"|"Innen rechts"|"Innerhalb unten links"|"Innerhalb unten rechts"|"Innerhalb verschiebbar" )

**Beschreibung:** Legt die Position der Legende fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**Syntax:** obj &lt;&lt; Legend Settings

**Beschreibung:** Öffnet ein Dialogfeld zum Ändern der Eigenschaften der Legende.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**Syntax:** obj &lt;&lt; Level Fill Color( color )

**Beschreibung:** Legt die Farbe für die Stufennamen im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**Syntax:** obj &lt;&lt; Level Frame Color( color )

**Beschreibung:** Legt die Farbe für die Linien um die Stufennamen herum im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**Syntax:** obj &lt;&lt; Level Spacing Color( color )

**Beschreibung:** Legt die Farbe des Abstands zwischen Stufenbeschriftungen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**Syntax:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**Beschreibung:** Legt die Transparenz für den Abstand zwischen Stufenbeschriftungen fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**Syntax:** obj &lt;&lt; Level Text Color( color )

**Beschreibung:** Legt die Farbe für den Text der Stufennamen im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**Syntax:** obj &lt;&lt; Level Transparency( fraction=1 )

**Beschreibung:** Legt die Transparenz für den Rahmen der Stufennamen im Graphen fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**Syntax:** obj &lt;&lt; Level Underline( state=0|1 )

**Beschreibung:** Unterstreicht die Stufennamen oder entfernt die Unterstreichung im Graphen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**Syntax:** obj &lt;&lt; Lighten large fills( state=0|1 )

**Beschreibung:** Farben für Torten-, Tree Map- und Mosaikelemente, die große Bereich füllen, automatisch aufhellen. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**Syntax:** obj &lt;&lt; Link Page Axes( "Keine"|"Nur X"|"Nur Y"|"X und Y" )

**Beschreibung:** Legt fest, welche Achsen über Stufen der Gruppe auf der Seite verknüpft sind.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**Syntax:** obj &lt;&lt; Lock Scales( state=0|1 )

**Beschreibung:** Sperrt Achsen- und Gradientbereiche, damit sich diese in Folge von Daten- oder Filteränderungen nicht verändern.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**Syntax:** obj &lt;&lt; Make into Data Table

**Beschreibung:** Erstellt eine neue Datentabelle mit Bildern von Graphen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Order Statistic

**Syntax:** obj &lt;&lt; Order Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"="Mittelwert" )

**Beschreibung:** Legt die Standardreihenfolge basierend auf einer statistischen Kenngröße fest, die für die Meldung „Sortieren nach“ für eine Variable im Graphen verwendet wird. Standardmäßig „Mittelwert“.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**Syntax:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**Beschreibung:** Begrenzt die Anzahl der Überlagerungsebenen, bei denen die Überlagerungscodierung bei Vorhandensein einer Farbvariablen Linienstile für die automatische Einstellung verwendet. Standardmäßig „6“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**Syntax:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**Beschreibung:** Begrenzt die Anzahl der Überlagerungsebenen, bei denen die Überlagerungscodierung bei Vorhandensein einer Farbvariablen Symbolstile für die automatische Einstellung verwendet. Standardmäßig „62“.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**Syntax:** obj &lt;&lt; Page Count Limit( count=200 )

**Beschreibung:** Legt die maximale Anzahl von für die Seitenvariable erstellten Seiten fest, um eine versehentliche Leistungsherabsetzung zu vermeiden. Standardmäßig „200“.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),	Elements( Points( X, Y ) ));gb << Page Count Limit( 5 );

```

### Page Gap Size

**Syntax:** obj &lt;&lt; Page Gap Size( gap=25 )

**Beschreibung:** Legt den Abstand zwischen Seitengruppen fest. Standardmäßig „25“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**Syntax:** obj &lt;&lt; Page Level Fill Color( color )

**Beschreibung:** Legt die Farbe für die Stufennamen im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**Syntax:** obj &lt;&lt; Page Level Frame Color( color )

**Beschreibung:** Legt die Farbe für die Linien um die Stufennamen herum im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**Syntax:** obj &lt;&lt; Page Level Text Color( color )

**Beschreibung:** Legt die Farbe für den Text der Stufennamen im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**Syntax:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**Beschreibung:** Legt die Transparenz für den Rahmen der Stufennamen im Graphen fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Transparency( .2 );

```

### Page Level Underline

**Syntax:** obj &lt;&lt; Page Level Underline( state=0|1 )

**Beschreibung:** Unterstreicht die Stufennamen oder entfernt die Unterstreichung im Graphen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**Syntax:** obj &lt;&lt; Parallel Axis Merging( "Immer"|"Niedrige Ähnlichkeit"|"Mittlere Ähnlichkeit"|"Hohe Ähnlichkeit"|"Niemals" )

**Beschreibung:** Bestimmt, wann die automatische Einstellung „Skalen verbinden“ statt „Parallel unabhängig“ eher „Parallel zusammengeführt“ wählen soll.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**Syntax:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**Beschreibung:** Alle Y-Achsen teilen sich denselben Graphen. Wie parallele Koordinaten, aber mit einer X-Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Random Seed

**Syntax:** obj &lt;&lt; Random Seed( number )

**Beschreibung:** Legt einen spezifischen Startwert für zufälliges Zittern fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Relative Sizes

**Syntax:** Relative Sizes(axis, matrix of relative size values)

**Beschreibung:** Bestimmt den Anteil des Raums, der jeder von mehreren Achsen in einer Serie zugewiesen wird.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Remove Element

**Syntax:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**Beschreibung:** Entfernt im Graphen ein Element an den vorgegebenen X- und Y-Positionen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**Syntax:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**Beschreibung:** Entfernt eine Variable aus dem Modell der Plattform „Graphik erstellen“, die entweder über den Index oder einen vorgegebenen Spaltennamen, eine vorgegebene Rolle und Position spezifiziert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**Syntax:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**Beschreibung:** Legt fest, ob die Achsen verknüpfter Seiten in einem Raster einmal für jeden Graphen oder einmal für jede Zeile oder Spalte von Graphen angezeigt werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**Syntax:** obj &lt;&lt; Sampling( number )

**Beschreibung:** Wählt eine zufällige Teilmenge der Daten mithilfe eines angegebenen Anteils oder einer angegebenen Anzahl aus. Das ist nützlich, wenn die Daten umfangreich sind und der Graph noch geändert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Set Alpha Level

**Syntax:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**Beschreibung:** Ändert das Alpha-Niveau für die Konfidenzkurven.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**Syntax:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**Beschreibung:** Ändert das Alpha-Niveau für die Konfidenzkurven.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**Syntax:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Beschreibung:** Zeigt das Bedienfeld an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**Syntax:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**Beschreibung:** Zeigt Zeilen in Diagrammen an oder blendet sie aus. Wenn diese Option ausgewählt ist, werden ausgeschlossene Zeilen in die Anzahl der Punkte außerhalb der Grenzen eingeschlossen, doch von den numerischen Berechnungen ausgeschlossen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**Syntax:** obj &lt;&lt; Show Footer( state=0|1 )

**Beschreibung:** Blendet den Fußzeilentext ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**Syntax:** obj &lt;&lt; Show Legend( state=0|1 )

**Beschreibung:** Zeigt die Legende rechts vom Graphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**Syntax:** obj &lt;&lt; Show Subtitle( state=0|1 )

**Beschreibung:** Blendet den Untertitel des Graphen ein oder aus.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**Syntax:** obj &lt;&lt; Show Title( state=0|1 )

**Beschreibung:** Blendet den Titel des Graphen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**Syntax:** obj &lt;&lt; Show X Axis( state=0|1 )

**Beschreibung:** Blendet die X-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**Syntax:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**Beschreibung:** Blendet den Titel der X-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**Syntax:** obj &lt;&lt; Show Y Axis( state=0|1 )

**Beschreibung:** Blendet die Y-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**Syntax:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**Beschreibung:** Blendet den Titel der Y-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**Syntax:** obj &lt;&lt; Size( width, height )

**Beschreibung:** Legt die Größe des Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**Syntax:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**Beschreibung:** Legt die Rahmen für die internen Graphenbereiche fest. Standardmäßig „0“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**Syntax:** obj &lt;&lt; Subtitle Alignment( "Links"|"Mitte"|"Rechts"|"Automatisch" )

**Beschreibung:** Legt die Ausrichtung des Untertitels des Graphen fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**Syntax:** obj &lt;&lt; Subtitle Span( "Vollständig"|"Grapheninhalte" )

**Beschreibung:** Legt die Bezugsspanne für den Untertitel des Graphen fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**Syntax:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**Beschreibung:** Legt die von den verschiedenen Elementen im Graphen verwendete voreingestellte statistische Kenngröße fest. Bei Balken und Linien standardmäßig der Mittelwert. Standardmäßig „Mittelwert“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Title Alignment

**Syntax:** obj &lt;&lt; Title Alignment( "Links"|"Mitte"|"Rechts" )

**Beschreibung:** Legt die Ausrichtung des Graphentitels fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**Syntax:** obj &lt;&lt; Title Fill Color( color )

**Beschreibung:** Legt die Farbe für den Hintergrund des Titels im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**Syntax:** obj &lt;&lt; Title Frame Color( color )

**Beschreibung:** Legt die Farbe für die Linie um den Titelrahmen im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**Syntax:** obj &lt;&lt; Title Span( "Vollständig"|"Grapheninhalte" )

**Beschreibung:** Legt die Bezugsspanne für den Graphentitel fest.

**JMP Version hinzugefügt:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**Syntax:** obj &lt;&lt; Title Text Color( color )

**Beschreibung:** Legt die Farbe für den Titeltext im Graphen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**Syntax:** obj &lt;&lt; Title Transparency( fraction=1 )

**Beschreibung:** Legt die Transparenz für den Titelrahmen im Graphen fest. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**Syntax:** obj &lt;&lt; Title Underline( state=0|1 )

**Beschreibung:** Unterstreicht den Titel oder entfernt die Unterstreichung im Graphen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Update Element

**Syntax:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**Beschreibung:** Ändert die Eigenschaften eines vorhandenen Elements.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**Syntax:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**Beschreibung:** Legendenstufen mit Zeilenfarben initialisieren, wenn jede Stufe eine eindeutige Farbe hat. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**Syntax:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Definiert die in der Visualisierung verwendeten Variablen.

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**Syntax:** obj &lt;&lt; X Group Edge( "Oben"|"Unten" )

**Beschreibung:** Verschiebt die Achse der X-Gruppe entweder nach oben oder nach unten. Standardmäßig nach oben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**Syntax:** obj &lt;&lt; Y Group Edge( "Links"|"Rechts" )

**Beschreibung:** Verschiebt die Achse der Y-Gruppe entweder nach links oder nach rechts. Standardmäßig nach rechts.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**Syntax:** obj &lt;&lt; Y Group Level Orientation( "Horizontal"|"Vertikal" )

**Beschreibung:** Legt fest, ob der Beschriftungstext der Y-Gruppenstufe horizontal oder vertikal (gedreht) angezeigt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**Syntax:** obj &lt;&lt; Y Group Title Orientation( "Horizontal"|"Vertikal" )

**Beschreibung:** Legt fest, ob der Beschriftungstext des Y-Gruppentitels horizontal oder vertikal (gedreht) angezeigt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Zugehörige Konstruktoren

### Graph Builder

**Syntax:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Beschreibung:** Bietet eine interaktive graphische Schnittstelle, mit der Sie Ihre Daten untersuchen können. Sie können Spalten in Graphenbereiche ziehen, um eine Vielfalt von Graphen zu erstellen einschließlich Streudiagramme, Konturdiagramme, Balkendiagramme, Bereichsdiagramme, Box-Plots, Histogramme, Heatmaps, Tortendiagramme, Tree Maps, Mosaikdiagramme und Karten.

#### 100% gestapeltes Balkendiagramm

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Blasendiagramm mit überlagerten Kurven

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### Flussdiagramm Napoleons Marsch

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Kombination aus Balkendiagramm und geglätteten Trendlinien

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### Konfidenzintervall des binomialen Anteils

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Konturdiagramm- und Streudiagrammpunkte

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### Linie mit benutzerdefiniertem Bandintervall

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### Linke und rechte Y-Achsen

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Mehrere X-Achsen

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### Mittelmeer-Choroplethenkarte mit gleicher Fläche

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Parallele Y-Achsen, überlagerte Linien

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Pfeillinien, eine pro Zeile

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### Punkte und Glättung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### Seiten mit linearer Regression

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### Seiten mit nicht ausgerichteten Y-Achsen

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### Streudiagramm mit marginalen Box-Plots

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### Trellis-Gruppierung im Codiagramm-Stil

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Überlagerte bivariate Kerndichtekonturen

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### Überlagerte Kurven der empirischen kumulierten Verteilungsfunktion

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### Unabhängige Diagramme mit NACH-Variable

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Variabilitätsdiagramm

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### Verbundene Linien mit überlagerten Punkten

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### Violindiagramm mit Quartilen

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### Wafer-Map

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### Zusammenfassungstabelle an der Achse

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

## Bar Element

### Elementmeldungen

#### Bar Style

**Syntax:** obj &lt;&lt; Bar Style( "Nebeneinander"|"Gestapelt"|"Gestapelt sortiert"|"Aufzählungspunkt"|"Geschachtelt"|"Bereich"|"Bereiche nebeneinander"|"Intervall"|"Intervalle nebeneinander"|"Zweifaches Intervall"|"Pfeil"|"Einzeln"|"Aktie"|"Box-Plot"|"Nadel"|"Gleitend"|"Tree Map"|"Gepackt" )

#### Error Interval

**Syntax:** obj &lt;&lt; Error Interval( "Automatisch"|"Kein"|"Bereich"|"Interquartilabstand"|"Standardfehler"|"Standardabweichung"|"Konfidenzintervall"|"Median der absoluten Abweichung"|"Benutzerdefiniertes Intervall"|"Zweifaktorielles Intervall" )

#### Interval Style

**Syntax:** obj &lt;&lt; Interval Style( "Fehlerbalken"|"Band"|"Hash-Band"|"Pfeil" )

#### Label

**Syntax:** obj &lt;&lt; Label( "Keine Beschriftungen"|"Nach Wert beschriften"|"Nach Prozent der Gesamtsumme beschriften"|"Nach Zeilen beschriften" )

#### Label Format

**Syntax:** obj &lt;&lt; Label Format

**JMP Version hinzugefügt:** 16

#### Overlap

**Syntax:** obj &lt;&lt; Overlap( "Automatisch"|"Keine"|"Halb"|"Vollständig" )

**JMP Version hinzugefügt:** 16

#### Packed Coloring

**Syntax:** obj &lt;&lt; Packed Coloring( "Balkenfarbe"|"Schwächere Balkenfarbe"|"Grautöne" )

**JMP Version hinzugefügt:** 14

#### Packed Labeling

**Syntax:** obj &lt;&lt; Packed Labeling( number )

**JMP Version hinzugefügt:** 14

#### Packed Ordering

**Syntax:** obj &lt;&lt; Packed Ordering( "Nach Größe"|"Nach Beschriftung" )

**JMP Version hinzugefügt:** 14

#### Packed Placement

**Syntax:** obj &lt;&lt; Packed Placement( "Separater Stapel"|"Kleinster Stapel"|"Erster Stapel" )

**JMP Version hinzugefügt:** 14

#### Packed Primaries

**Syntax:** obj &lt;&lt; Packed Primaries( number )

**JMP Version hinzugefügt:** 14

#### Packed Primary Labels

**Syntax:** obj &lt;&lt; Packed Primary Labels( "Auf Achse"|"Innerhalb Balken" )

**JMP Version hinzugefügt:** 14

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Save Summary Formula

**Syntax:** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Bar Element

**Syntax:** Bar Element

**Beschreibung:** Zeigt eine nach Kategorien zusammengefasste Zielgröße an.

**100% gestapeltes Balkendiagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**Balken mit kleinen Werten, gestapelt als „Sonstige“**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**Balken mit überlagerten Linien**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**Balken mit variabler Breite, nach Wert sortiert**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**Balken- und Pfeildiagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**Balkendiagramm mit beschrifteten Balken**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**Balkendiagramm mit Konfidenzintervallen**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**Balkendiagramm nach Häufigkeit sortiert**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**Bullet-Diagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )}		)	));

```

**Datengestützte Balkenfarben**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula(			If(				:diff == Col Minimum( :diff ), "min",				:diff == Col Maximum( :diff ), "max",				"other"			)		)	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [0, 1, -1]} )}		)	));

```

**Divergierende gestapelte Balken mit Likert-Skala**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements(		Bar(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			Y,			Legend( 4 ),			Bar Style( "Stacked" )		)	),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**Gepackte Balken, die die Top zehn Kategorien hervorheben**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements(		Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) )	),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) ||						"B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ),			Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )			}		)	));

```

**Gestapeltes Balkendiagramm mit 3 Variablen und benutzerdefinierten Farben**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements(		Bar(			X,			Y( 1 ),			Y( 2 ),			Y( 3 ),			Bar Style( "Stacked" ),			Summary Statistic( "Mean" ),			Legend( 5 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Gleitende Linien mit überlagerten Punkten**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

**Gruppiertes Balkendiagramm nebeneinander mit Median**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Intervall mit Punkt unter Verwendung von Transformationen**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**Sortiertes gestapeltes Balkendiagramm**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer",				"Defective sanding", "Loose veneer", "Sand throughs", "Scratched veneer",				"Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**Spannweitendiagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**Stabdiagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

## Box Plot Element

### Elementmeldungen

#### 5 Number Summary

**Syntax:** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP Version hinzugefügt:** 14

#### Box Placement

**Syntax:** obj &lt;&lt; Box Placement( "Offset"|"Ausrichten" )

**JMP Version hinzugefügt:** 16

#### Box Style

**Syntax:** obj &lt;&lt; Box Style( "Normal"|"Durchgezogen"|"Dünn" )

#### Box Type

**Syntax:** obj &lt;&lt; Box Type( "Quantil"|"Ausreißer" )

#### Confidence Diamond

**Syntax:** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Fences

**Syntax:** obj &lt;&lt; Fences( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Jitter

**Syntax:** obj &lt;&lt; Jitter( "Keine"|"Automatisch"|"Zufällig gleichverteilt"|"Zufällig normalverteilt"|"Dichte zufällig"|"Gepackt"|"Raster"|"Hex.-Raster"|"Bienenschwarm" )

#### Notched

**Syntax:** obj &lt;&lt; Notched( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Outliers

**Syntax:** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Shortest Half

**Syntax:** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Shortest Half Color

**Syntax:** obj &lt;&lt; Shortest Half Color( color )

**JMP Version hinzugefügt:** 16

#### Width Proportion

**Syntax:** obj &lt;&lt; Width Proportion( number=0 )

**Beschreibung:** Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

### Zugehörige Konstruktoren

#### Box Plot Element

**Syntax:** Box Plot Element

**Beschreibung:** Zeigt eine kompakte Ansicht der Verteilung einer Variablen mit Quartilen und Ausreißern an.

**Gefüllte Box-Plots mit datengestützter Farbe**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

**Horizontale Ausreißer-Boxplots**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**Überlagerte Box-Plots**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

## Caption Element

### Elementmeldungen

#### Location

**Syntax:** obj &lt;&lt; Location( "Graph"|"Graph pro Faktor"|"Achsentabelle"|"Achsenreferenzlinie" )

#### Number Format

**Syntax:** obj &lt;&lt; Number Format

**JMP Version hinzugefügt:** 16

#### Per Factor

**Syntax:** obj &lt;&lt; Per Factor( state=0|1 )

**JMP Version hinzugefügt:** 14

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"|"Fünfzahlige Zusammenfassung" )

#### Summary Statistic 2

**Syntax:** obj &lt;&lt; Summary Statistic 2( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"|"Fünfzahlige Zusammenfassung" )

#### Summary Statistic 3

**Syntax:** obj &lt;&lt; Summary Statistic 3( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"|"Fünfzahlige Zusammenfassung" )

#### Summary Statistic 4

**Syntax:** obj &lt;&lt; Summary Statistic 4( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"|"Fünfzahlige Zusammenfassung" )

#### Summary Statistic 5

**Syntax:** obj &lt;&lt; Summary Statistic 5( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil"|"Fünfzahlige Zusammenfassung" )

#### X Position

**Syntax:** obj &lt;&lt; X Position( "Links"|"Mitte"|"Rechts" )

#### Y Position

**Syntax:** obj &lt;&lt; Y Position( "Oben"|"Mitte"|"Unten" )

### Zugehörige Konstruktoren

#### Caption Element

**Syntax:** Caption Element

**Beschreibung:** Zeigt eine statistische Kenngröße für die Daten an.

**Datengestützte Referenzlinie**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**Statistische Kenngröße als Bildtext auf Graphenebene**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**Statistische Kenngrößen der Achsentabelle**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

**Zwei Titel-Statistiken, pro Faktor**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

## Contour Element

### Elementmeldungen

#### Adapt to Axis Scale

**Syntax:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Beschreibung:** Bei Log- und anderen Achsentransformationen Berechnungen auf die transformierten Koordinaten anwenden.

#### Alpha

**Syntax:** obj &lt;&lt; Alpha( number )

**Beschreibung:** Steuert die Form des Randes. Der Wert 0 führt zur konvexen Hülle des festgelegten Punktesatzes. Größere Werte entfernen Dreiecke mit langen Kanten.

**JMP Version hinzugefügt:** 15

#### Boundary

**Syntax:** obj &lt;&lt; Boundary( state=0|1 )

**Beschreibung:** An der Grenze der definierten Datenregion eine Linie ziehen. Diese Grenze ist abhängig von der Eigenschaft Alpha möglicherweise nicht konvex.

**JMP Version hinzugefügt:** 15

#### Contour Placement

**Syntax:** obj &lt;&lt; Contour Placement( "Offset"|"Ausrichten" )

**JMP Version hinzugefügt:** 16

#### Contour Type

**Syntax:** obj &lt;&lt; Contour Type( "Violine"|"HDR" )

**JMP Version hinzugefügt:** 15

#### Contour Type 1D

**Syntax:** obj &lt;&lt; Contour Type 1D( "Violine"|"HDR" )

**JMP Version hinzugefügt:** 15

#### Contour Type 2D

**Syntax:** obj &lt;&lt; Contour Type 2D( "Nichtparametrische Dichte"|"Bagplot"|"HDR" )

**JMP Version hinzugefügt:** 15

#### Fill

**Syntax:** obj &lt;&lt; Fill( state=0|1 )

**Beschreibung:** Die Regionen zwischen den Konturen mit Farben aus dem Gradienten füllen.

**JMP Version hinzugefügt:** 15

#### Jitter

**Syntax:** obj &lt;&lt; Jitter( "Keine"|"Automatisch"|"Zufällig gleichverteilt"|"Zufällig normalverteilt"|"Dichte zufällig"|"Gepackt"|"Raster"|"Hex.-Raster"|"Bienenschwarm" )

#### Line

**Syntax:** obj &lt;&lt; Line( state=0|1 )

**Beschreibung:** Auf jedem Konturniveau eine Linie in der Farbe des Gradienten oder einer eigenen Linienfarbe ziehen.

**JMP Version hinzugefügt:** 15

#### Number of Levels

**Syntax:** obj &lt;&lt; Number of Levels( number )

**Beschreibung:** Die Anzahl der zu zeichnenden gefüllten Konturregionen festlegen.

#### Outliers

**Syntax:** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**Syntax:** obj &lt;&lt; Smoothness( number )

**Beschreibung:** Glättet die zugrundeliegenden Daten und die Konturen.

**JMP Version hinzugefügt:** 14

#### Transform

**Syntax:** obj &lt;&lt; Transform( "Keine"|"Normalisierte Spannweite" )

**Beschreibung:** Optional die Punkte vor der Berechnung der Triangulierung, die für die Interpolation verwendet wird, transformieren.

#### Violin Scaling

**Syntax:** obj &lt;&lt; Violin Scaling( "Gleiche Fläche"|"Gleiche Breite"|"Gewichteter Bereich" )

**JMP Version hinzugefügt:** 14

### Zugehörige Konstruktoren

#### Contour Element

**Syntax:** Contour Element

**Beschreibung:** Zeigt die Datendichte an (oder Wertekonturen mit einer Farbvariablen). Erzeugt Violindiagramme, wenn X kategorial ist.

**Bivariate Kerndichtekontur**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**Geografische Kontur**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour(			X,			Y,			Legend( 5 ),			Boundary( 0 ),			Number of Levels( 5 ),			Alpha( 0.04 ),			Smoothness( 0.02 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {gradient( {Color Theme( "White to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ),			Reference Line Order( 4 ), Reorder Segs( {1, 3} ),			DispatchSeg( Contour Seg( 1 ), {Clip Shape( Boundaries( "US States" ) )} )}		)	));

```

**Glatte Konturen**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements(		Contour(			X,			Y,			Legend( 7 ),			Number of Levels( 5 ),			Alpha( 0.1 ),			Smoothness( 0.065 )		)	));

```

**HDR, Bereiche höchster Dichte**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

**Kontur-Heatmap aufgeteilt**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

**Violindiagramm mit Quartilen**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**Violindiagramme mit Medianlinie und Mittelwertdiamant**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )}		)	));

```

**Violindiagramme überlagert mit dünnen Box-Plots**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

## Ellipse Element

### Elementmeldungen

#### Adapt to Axis Scale

**Syntax:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Beschreibung:** Bei Log- und anderen Achsentransformationen Berechnungen auf die transformierten Koordinaten anwenden.

#### Correlation

**Syntax:** obj &lt;&lt; Correlation( state=0|1 )

**Beschreibung:** Koeffizient der Korrelation für die X- und Y-Variablen.

#### Coverage

**Syntax:** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**Syntax:** obj &lt;&lt; Mean Point( state=0|1 )

**Beschreibung:** Zeigt den Mittelwertpunkt der Ellipse an.

### Zugehörige Konstruktoren

#### Ellipse Element

**Syntax:** Ellipse Element

**Beschreibung:** Zeigt eine bivariate Dichteellipse der Normalverteilung an.

**Dichteellipse in Bereichen**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species ),		Group Y( :Sex )	),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model(				10,				Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} )			)}		)	));

```

**Dichteellipse mit Korrelationskoeffizient**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**Dichteellipse mit zentralem Mittelwertsymbol**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) )	));

```

**Überlagerte Dichteellipsen**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

## Formula Element

### Elementmeldungen

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

### Zugehörige Konstruktoren

#### Formula Element

**Syntax:** Formula Element

**Beschreibung:** Zeigt eine von einer Spaltenformel definierte Funktion an.

**Modellvergleich**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :linear ),		"Newton",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :quad ),		"QuasiNewton SR1",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

**Parametrische Gleichungen**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

## Heatmap Element

### Elementmeldungen

#### Bin Shape

**Syntax:** obj &lt;&lt; Bin Shape( "Rechteckig"|"Hexagonal" )

**JMP Version hinzugefügt:** 16

#### Cell Outline

**Syntax:** obj &lt;&lt; Cell Outline( state=0|1 )

**Beschreibung:** Definiert die maximale Erhöhung der Schriftgröße.

**JMP Version hinzugefügt:** 16

#### Hex Bin Radius

**Syntax:** obj &lt;&lt; Hex Bin Radius( number )

**JMP Version hinzugefügt:** 16

#### Label

**Syntax:** obj &lt;&lt; Label( "Keine Beschriftungen"|"Nach Wert beschriften"|"Nach Prozent der Gesamtsumme beschriften"|"Nach Zeilen beschriften" )

**JMP Version hinzugefügt:** 14

#### Label Format

**Syntax:** obj &lt;&lt; Label Format

**JMP Version hinzugefügt:** 16

#### Max Label Size

**Syntax:** obj &lt;&lt; Max Label Size( number )

### Zugehörige Konstruktoren

#### Heatmap Element

**Syntax:** Heatmap Element

**Beschreibung:** Zeigt Häufigkeiten an und verwendet Farbe für X- und Y-Kategorien.

**Beschriftete Heatmap**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**Datengestützte Hintergrundfarbe**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State )			-Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap(			:State,			Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) )		),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox,			{Format( "Engineering SI", 13 ), Minor Ticks( 0 )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient(						{Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )}					)}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

**Heatmap mit kategorialer Farbe**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**Hexagonale Heatmap der Häufigkeiten**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements(		Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} )			)}		)	));

```

**Kategoriale Heatmap mit benutzerdefiniertem Gradienten**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter(		Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) )	),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical",							"Diverging"}, {{42, 63, 255}, {166, 170, 203}, {192, 192, 192},							{201, 165, 165}, {252, 11, 11}, Missing( "Black" )}, {0, 0.33,							0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**Wafer-Map**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

## Histogram Element

### Elementmeldungen

#### Confid Percent

**Syntax:** obj &lt;&lt; Confid Percent( number=. )

**Beschreibung:** Konfidenzintervall für den Mittelwert mit vorgegebener Abdeckung in Prozent. Standardmäßig „.“.

**JMP Version hinzugefügt:** 14

#### Counts

**Syntax:** obj &lt;&lt; Counts( state=0|1 )

**JMP Version hinzugefügt:** 15

#### Histogram Style

**Syntax:** obj &lt;&lt; Histogram Style( "Balken"|"Polygon"|"Kern-Dichte"|"Schattendiagramm" )

**JMP Version hinzugefügt:** 15

#### Horizontal

**Syntax:** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**Syntax:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP Version hinzugefügt:** 14

#### Overlap

**Syntax:** obj &lt;&lt; Overlap( number )

**JMP Version hinzugefügt:** 15

#### Percents

**Syntax:** obj &lt;&lt; Percents( state=0|1 )

**JMP Version hinzugefügt:** 15

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Response Scale

**Syntax:** obj &lt;&lt; Response Scale( "Anzahl"|"Prozent"|"Füllen" )

**JMP Version hinzugefügt:** 15

#### Smoothness

**Syntax:** obj &lt;&lt; Smoothness( number )

**Beschreibung:** Die Bandbreite steuert die Stärke der Glättung der Dichtekurve. Durch Verringern der Bandbreite wird die Kurve weniger glatt mit mehr Spitzen. Durch Erhöhen der Bandbreite wird die Kurve geglättet, doch möglicherweise einige Details verdeckt.

**JMP Version hinzugefügt:** 15

#### Vertical

**Syntax:** obj &lt;&lt; Vertical( state=0|1 )

**Beschreibung:** Standardmäßig ein.

#### t Test for Mean At

**Syntax:** obj &lt;&lt; t Test for Mean At( number=. )

**Beschreibung:** Test, ob der Mittelwert ein angegebener Wert ist. Standardmäßig „.“.

**JMP Version hinzugefügt:** 14

### Zugehörige Konstruktoren

#### Histogram Element

**Syntax:** Histogram Element

**Beschreibung:** Zeigt die Verteilung einer Variablen durch Klassenbildung an.

**Glatter Kerndichtebereich**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements(		Histogram(			X,			Y,			Legend( 8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.08 )		)	));

```

**Histogramm mit Häufigkeitenachse**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox,			{Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )}		),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Flight Distance by Airline" )}		)	));

```

**Histogramme nach Faktorstufe**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**Ridgeline-Diagramm**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

**Überlagerte Histogramme, Prozent-Beschriftungen**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

## Line Element

### Elementmeldungen

#### Connection

**Syntax:** obj &lt;&lt; Connection( "Linie"|"Pfeil"|"Kurve"|"Schritt "|"Zentrierter Schritt"|"Horizontal"|"Vertikal" )

#### Error Interval

**Syntax:** obj &lt;&lt; Error Interval( "Automatisch"|"Kein"|"Bereich"|"Interquartilabstand"|"Standardfehler"|"Standardabweichung"|"Konfidenzintervall"|"Median der absoluten Abweichung"|"Benutzerdefiniertes Intervall"|"Zweifaktorielles Intervall" )

#### Fill

**Syntax:** obj &lt;&lt; Fill( "Keine"|"Darunter füllen"|"Füllen zwischen" )

**JMP Version hinzugefügt:** 15

#### Interval Style

**Syntax:** obj &lt;&lt; Interval Style( "Fehlerbalken"|"Band"|"Hash-Band"|"Pfeil" )

#### Missing Factors

**Syntax:** obj &lt;&lt; Missing Factors( "Überspringen"|"Als fehlend behandeln"|"Als null behandeln" )

**Beschreibung:** Verbindungen anzeigen, die die Spannweite fehlender Faktorstufen anzeigen.

**JMP Version hinzugefügt:** 15

#### Missing Values

**Syntax:** obj &lt;&lt; Missing Values( "Durchgezogen verbinden"|"Schwächer verbinden"|"Gestrichelt verbinden"|"Nicht verbinden" )

**Beschreibung:** Verbindungen anzeigen, die die Spannweite fehlender Werte anzeigen.

#### Ordering

**Syntax:** obj &lt;&lt; Ordering( "Automatisch"|"Zeilenreihenfolge"|"Zusammengefasst"|"Innerhalb Zeile" )

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Row order

**Syntax:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**Syntax:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**Syntax:** obj &lt;&lt; Smoothness( number )

#### Stack

**Syntax:** obj &lt;&lt; Stack( state=0|1 )

**JMP Version hinzugefügt:** 15

#### Stack Negative

**Syntax:** obj &lt;&lt; Stack Negative( "Überlappung"|"Negative trennen"|"Als null behandeln" )

**Beschreibung:** Legt fest, wie negative Datenwerte beim Stapeln verarbeitet werden.

**JMP Version hinzugefügt:** 17

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Line Element

**Syntax:** Line Element

**Beschreibung:** Zeigt eine nach Kategorien zusammengefasste Zielgröße an.

**Beschriftete Linien**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**Bump-Diagramm, verbundene Ränge**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific",				"Plains", "South", "Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**Ereignisspannen**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox,			{Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties(					1,					{Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )}				),				Properties(					2,					{Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )}				)			)}		)	));

```

**Liniendiagramm der gleitenden Durchschnitte**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Liniendiagramm der nachfolgenden gleitenden Durchschnitte**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**Liniendiagramm mit Fehlerband**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements(		Line(			X,			Y,			Legend( 4 ),			Error Interval( "Confidence Interval" ),			Interval Style( "Band" )		)	));

```

**Pfeillinien, eine pro Zeile**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

**Spaghetti-Plot**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**Verbundene Pfeile**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

**Verbundenes Streudiagramm**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**Verlaufsdiagramm, nach Zeilenreihenfolge**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

## Line of Fit Element

### Elementmeldungen

#### Adapt to Axis Scale

**Syntax:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Beschreibung:** Bei Log- und anderen Achsentransformationen Berechnungen auf die transformierten Koordinaten anwenden.

#### Confidence of Fit

**Syntax:** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**Syntax:** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**Syntax:** obj &lt;&lt; Constrain Parameters( state=0|1 )

**Beschreibung:** ETS-Parameter beschränken

**JMP Version hinzugefügt:** 17

#### Degree

**Syntax:** obj &lt;&lt; Degree( "Linear"|"Quadratisch"|"Kubisch" )

#### Equation

**Syntax:** obj &lt;&lt; Equation( state=0|1 )

**Beschreibung:** Gleichung der Anpassung.

#### F Test

**Syntax:** obj &lt;&lt; F Test( state=0|1 )

**Beschreibung:** Signifikanzniveau für den Gesamtmodelltest.

**JMP Version hinzugefügt:** 14

#### Fit

**Syntax:** obj &lt;&lt; Fit( "Polynomial"|"Robust Cauchy"|"Zeitreihe" )

**JMP Version hinzugefügt:** 15

#### Forecast Model

**Syntax:** obj &lt;&lt; Forecast Model( state=0|1 )

**Beschreibung:** Zeigen, welches Modell für die Vorhersage verwendet wird, mit Parameterschätzern.

**JMP Version hinzugefügt:** 15

#### Forecast Periods

**Syntax:** obj &lt;&lt; Forecast Periods( number )

**Beschreibung:** Anzahl künftiger Perioden für Vorhersage.

**JMP Version hinzugefügt:** 15

#### Means and Std Devs

**Syntax:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**Beschreibung:** Zeigt die Mittelwerte und Standardabweichungen jeder Gruppe neben der Mittelwertgeraden an.

**JMP Version hinzugefügt:** 14

#### Prediction

**Syntax:** obj &lt;&lt; Prediction( state=0|1 )

**Beschreibung:** Der Vorhersagebereich für einzelne Vorhersagewerte

#### RMSE

**Syntax:** obj &lt;&lt; RMSE( state=0|1 )

**Beschreibung:** Wurzel der mittleren quadratischen Abweichung, ein Fehlermaß in Einheiten der Zielgröße.

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Root Mean Square Error

**Syntax:** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**Syntax:** obj &lt;&lt; R²( state=0|1 )

**Beschreibung:** Bestimmtheitsmaß, ein Maß dafür, wie gut die Anpassung die Daten vorhersagt.

#### Save Formula

**Syntax:** obj &lt;&lt; Save Formula

#### Seasonal Period

**Syntax:** obj &lt;&lt; Seasonal Period( number )

**Beschreibung:** Anzahl Perioden in einer Saison. Beispiel: Bei monatlichen Daten gibt es 12 Perioden für eine Saison über ein Jahr.

**JMP Version hinzugefügt:** 15

#### Unequal Variances

**Syntax:** obj &lt;&lt; Unequal Variances( state=0|1 )

**Beschreibung:** Berechnung von Tests und Konfidenzgrenzen basierend auf der Annahme, dass verschiedene Gruppen verschiedene Varianzen haben.

### Zugehörige Konstruktoren

#### Line of Fit Element

**Syntax:** Line of Fit Element

**Beschreibung:** Zeigt eine lineare Regression mit Konfidenzintervallen für stetige X und Y. Passt Mittelwerte für kategoriales X an.

**ANOVA-Anpassung, einfaktoriell, Vergleich der Mittelwerte**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**Quadratische Anpassungen**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 9 ) ),		Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) )	));

```

**Überlagerte lineare Regressionen**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

**Zeitreihenregression**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

## Mosaic Element

### Elementmeldungen

#### Cell Labeling

**Syntax:** obj &lt;&lt; Cell Labeling( "Keine Beschriftungen"|"Nach Anzahl beschriften"|"Nach Prozent beschriften"|"Nach Wert beschriften"|"Nach Zeilen beschriften" )

**JMP Version hinzugefügt:** 14

#### Chi-square Test

**Syntax:** obj &lt;&lt; Chi-square Test( state=0|1 )

**Beschreibung:** Chi-Quadrat-Test, ob die Zielgrößenanteile über die Gruppen gleich sind oder ob zwei Zielgrößen unabhängig sind

**JMP Version hinzugefügt:** 14

#### Confid Percent

**Syntax:** obj &lt;&lt; Confid Percent( number=. )

**Beschreibung:** Konfidenzintervallabdeckung auf dem Anteil im oberen Niveau in Prozent. Standardmäßig „.“.

**JMP Version hinzugefügt:** 14

#### Horizontal

**Syntax:** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**Syntax:** obj &lt;&lt; Label Format

**JMP Version hinzugefügt:** 16

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Test Proportion At

**Syntax:** obj &lt;&lt; Test Proportion At( number=. )

**Beschreibung:** Testen, ob der Anteil im oberen Niveau ein angegebener Wert ist. Standardmäßig „.“.

**JMP Version hinzugefügt:** 14

#### Vertical

**Syntax:** obj &lt;&lt; Vertical( state=0|1 )

**Beschreibung:** Standardmäßig ein.

### Zugehörige Konstruktoren

#### Mosaic Element

**Syntax:** Mosaic Element

**Beschreibung:** Zeigt Häufigkeiten an und verwendet Größe für X- und Y-Kategorien.

**Horizontales Mosaik**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

**Mosaikdiagramm**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

## Parallel Element

### Elementmeldungen

#### Axes Labels

**Syntax:** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**Syntax:** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**Syntax:** obj &lt;&lt; Smoothness( number )

**JMP Version hinzugefügt:** 16

### Zugehörige Konstruktoren

#### Parallel Element

**Syntax:** Parallel Element

**Beschreibung:** Zeigt viele Variablen entlang paralleler Achsen mit einer verbundenen Linie für jede Zeile.

**Parallele Box-Plots**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements(		Box Plot(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 11 )		)	));

```

**Parallele Koordinaten mit ausgerichteter Skala.**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**Parallele Punktdiagramme**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Parallele Sets**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

**Parallelkoordinatendiagramm**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**Sankey-Parallelsets**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X(			:"What is your favorite color? (select one)"n,			Position( 1 ),			Combine( "Parallel Independent" )		),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark(					Label( "What is your favorite color?" ),					Label( "Specific favorite color" )				), Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

## Pie Element

### Elementmeldungen

#### Label

**Syntax:** obj &lt;&lt; Label( "Keine Beschriftungen"|"Nach Wert beschriften"|"Nach Prozent der Gesamtsumme beschriften"|"Nach Zeilen beschriften" )

#### Label Format

**Syntax:** obj &lt;&lt; Label Format

**JMP Version hinzugefügt:** 16

#### Pie Style

**Syntax:** obj &lt;&lt; Pie Style( "Torte"|"Ring"|"Coxcomb" )

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Pie Element

**Syntax:** Pie Element

**Beschreibung:** Zeigt Anteile eines Ganzen an.

**Donut-Diagramm nach Häufigkeit**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**Tortenbereich**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "SmartPhone OS Market Share" )}		)	));

```

**Tortendiagramm nach Häufigkeit**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ) ) ));

```

## Points Element

### Elementmeldungen

#### Error Interval

**Syntax:** obj &lt;&lt; Error Interval( "Automatisch"|"Kein"|"Bereich"|"Interquartilabstand"|"Standardfehler"|"Standardabweichung"|"Konfidenzintervall"|"Median der absoluten Abweichung"|"Benutzerdefiniertes Intervall"|"Zweifaktorielles Intervall" )

#### Interval Style

**Syntax:** obj &lt;&lt; Interval Style( "Fehlerbalken"|"Band"|"Hash-Band"|"Pfeil" )

#### Jitter

**Syntax:** obj &lt;&lt; Jitter( "Keine"|"Automatisch"|"Zufällig gleichverteilt"|"Zufällig normalverteilt"|"Dichte zufällig"|"Gepackt"|"Raster"|"Hex.-Raster"|"Bienenschwarm" )

#### Jitter Limit

**Syntax:** obj &lt;&lt; Jitter Limit( number )

**JMP Version hinzugefügt:** 14

#### Jitter Overlap

**Syntax:** obj &lt;&lt; Jitter Overlap( number )

**JMP Version hinzugefügt:** 19

#### Jitter Side

**Syntax:** obj &lt;&lt; Jitter Side( "Zentriert"|"Positiv"|"Negativ"|"Ordinal" )

#### Jitter Smooth

**Syntax:** obj &lt;&lt; Jitter Smooth( number )

**JMP Version hinzugefügt:** 19

#### Label

**Syntax:** obj &lt;&lt; Label( "Keine Beschriftungen"|"Nach Wert beschriften"|"Nach Zeilen beschriften"|"Nach Zeile und Wert beschriften" )

#### Label Format

**Syntax:** obj &lt;&lt; Label Format

**JMP Version hinzugefügt:** 18

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Save Summary Formula

**Syntax:** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**Syntax:** obj &lt;&lt; Set Shape Column

**JMP Version hinzugefügt:** 16

#### Set Shape Expression

**Syntax:** obj &lt;&lt; Set Shape Expression

**JMP Version hinzugefügt:** 16

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Points Element

**Syntax:** Points Element

**Beschreibung:** Zeigt ein Streudiagramm von Datenwerten an.

**Breitengrad und Längengrad**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) )}		)	));

```

**Dichte-Punktdiagramm**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Jitter( "Hex Grid" ),			Jitter Side( "Positive" ),			Jitter Smooth( 1 )		)	),	SendToReport(		Dispatch( {}, "Female", ScaleBox,			{Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )}		)	));

```

**Geglättete zentrierte nebeneinander liegende Punktdiagramme**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Geglättetes Punktdiagramm**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox,			{Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties(					0,					{Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )}				),				Properties(					1,					{Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )}				),				Properties(					2,					{Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )}				),				Properties(					3,					{Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

**Hexagonale Punktdiagramme mit gegenüberliegenden Seiten**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points(			X,			Y,			Legend( 9 ),			Jitter( "Hex Grid" ),			Jitter Side( "Ordinal" ),			Jitter Smooth( 1 )		)	),	Local Data Filter(		Add Filter(			columns( :type of space ),			Where( :type of space == {"exterior", "interior"} )		)	),	SendToReport(		Dispatch( {}, "Y", ScaleBox,			{Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )}		),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**Punktdiagramme mit hexagonalem Gitter**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Streudiagramm unter Verwendung von Größe und Farbe**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

**Streudiagramm-Matrix**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements(		Position( 1, 2 ),		Points( X, Y, Legend( 57 ) ),		Smoother( X, Y, Legend( 58 ) )	),	Elements(		Position( 1, 3 ),		Points( X, Y, Legend( 59 ) ),		Smoother( X, Y, Legend( 60 ) )	),	Elements(		Position( 1, 4 ),		Points( X, Y, Legend( 61 ) ),		Smoother( X, Y, Legend( 62 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 63 ) ),		Smoother( X, Y, Legend( 64 ) )	),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements(		Position( 2, 3 ),		Points( X, Y, Legend( 67 ) ),		Smoother( X, Y, Legend( 68 ) )	),	Elements(		Position( 2, 4 ),		Points( X, Y, Legend( 69 ) ),		Smoother( X, Y, Legend( 70 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 71 ) ),		Smoother( X, Y, Legend( 72 ) )	),	Elements(		Position( 3, 2 ),		Points( X, Y, Legend( 73 ) ),		Smoother( X, Y, Legend( 74 ) )	),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements(		Position( 3, 4 ),		Points( X, Y, Legend( 77 ) ),		Smoother( X, Y, Legend( 78 ) )	),	Elements(		Position( 4, 1 ),		Points( X, Y, Legend( 79 ) ),		Smoother( X, Y, Legend( 80 ) )	),	Elements(		Position( 4, 2 ),		Points( X, Y, Legend( 81 ) ),		Smoother( X, Y, Legend( 82 ) )	),	Elements(		Position( 4, 3 ),		Points( X, Y, Legend( 83 ) ),		Smoother( X, Y, Legend( 84 ) )	),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

**Variabilitätsdiagramm**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

**Zentrierte nebeneinander liegende Punktdiagramme**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**Zittern in Kreisform**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )}		)	));

```

## Shapes Element

### Elementmeldungen

#### Aspect Ratio

**Syntax:** obj &lt;&lt; Aspect Ratio( number )

**Beschreibung:** Anpassungsfaktor für Skalierungsverhältnis X:Y.

#### Show Missing Shapes

**Syntax:** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP Version hinzugefügt:** 16

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

### Zugehörige Konstruktoren

#### Map Shapes Element

**Syntax:** Map Shapes Element

**Beschreibung:** Zeigt von einer Kartenformvariablen definierte Bereiche üblicherweise mit einer Farbvariablen an.

**Asien/Pazifik-zentrierte Weltkarte**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**Benutzerdefinierte Formdatei mit Farbverlauf**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**Benutzerdefinierte Formdatei mit kategorialer Farbe**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**Mittelmeer-Choroplethenkarte mit gleicher Fläche**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

**Weltkarte als Choroplethenkarte**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

## Smoother Element

### Elementmeldungen

#### Adapt to Axis Scale

**Syntax:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**Beschreibung:** Bei Log- und anderen Achsentransformationen Berechnungen auf die transformierten Koordinaten anwenden.

#### Confidence Bootstrap

**Syntax:** obj &lt;&lt; Confidence Bootstrap( number )

**JMP Version hinzugefügt:** 14

#### Confidence of Fit

**Syntax:** obj &lt;&lt; Confidence of Fit( state=0|1 )

**Beschreibung:** Bootstrap-Konfidenzbereich für die Anpassung.

**JMP Version hinzugefügt:** 14

#### Constrain Confidence Region

**Syntax:** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**Beschreibung:** Gibt an, ob die Formbeschränkung auch für die Bootstrap-Anpassungen gilt, die zur Berechnung des Konfidenzbereichs der Anpassung verwendet werden.

**JMP Version hinzugefügt:** 19

#### Degree

**Syntax:** obj &lt;&lt; Degree( "Median"|"Mittelwert"|"Linear"|"Quadratisch"|"Kubisch" )

**JMP Version hinzugefügt:** 16

#### Lambda

**Syntax:** obj &lt;&lt; Lambda( number )

#### Local Constraint

**Syntax:** obj &lt;&lt; Local Constraint( state=0|1 )

**Beschreibung:** Beschränkt die Kurve auf den Bereich der nahegelegenen Werte.

**JMP Version hinzugefügt:** 19

#### Local Region

**Syntax:** obj &lt;&lt; Local Region( "Potenz"|"Anteil"|"Fest"|"Nachfolgend" )

**JMP Version hinzugefügt:** 16

#### Local Robustness

**Syntax:** obj &lt;&lt; Local Robustness( number )

**JMP Version hinzugefügt:** 16

#### Local Weighting

**Syntax:** obj &lt;&lt; Local Weighting( "Tricube"|"Cosinus"|"Epanechnikov"|"Gauß&apos;sch"|"Cauchy"|"Laplace"|"Dreieckig"|"Rechteckig" )

**JMP Version hinzugefügt:** 16

#### Local Width

**Syntax:** obj &lt;&lt; Local Width( number )

**JMP Version hinzugefügt:** 16

#### Maximum Constraint

**Syntax:** obj &lt;&lt; Maximum Constraint( number )

#### Method

**Syntax:** obj &lt;&lt; Method( "Spline"|"P-Spline"|"Lokaler Kernel"|"Savitzky-Golay"|"Gleitender Durchschnitt"|"Gleitendes Fenster" )

**JMP Version hinzugefügt:** 15

#### Minimum Constraint

**Syntax:** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**Syntax:** obj &lt;&lt; Response Axis( "Automatisch"|"X"|"y" )

#### Save Formula

**Syntax:** obj &lt;&lt; Save Formula

#### Scale lambda for count

**Syntax:** obj &lt;&lt; Scale lambda for count( state=0|1 )

**Beschreibung:** Spline-Glättungsparameter Lambda anpassen, um die Datengröße zu berücksichtigen. Nützlich für konsistentes Glätten über Gruppen unterschiedlicher Größe.

#### Shape Constraint

**Syntax:** obj &lt;&lt; Shape Constraint( "Keine"|"Nicht absteigend"|"Nicht aufsteigend"|"Spitze"|"Tal"|"Spitze und Tal"|"Flacher Anfang"|"Flaches Ende"|"Flacher Anfang und flaches Ende"|"Zyklus" )

**JMP Version hinzugefügt:** 19

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "Kein"|"N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

#### Trim

**Syntax:** obj &lt;&lt; Trim( number )

**JMP Version hinzugefügt:** 16

### Zugehörige Konstruktoren

#### Smoother Element

**Syntax:** Smoother Element

**Beschreibung:** Zeigt eine glatte Kurve durch die Daten an. Am besten geeignet für stetige X- und Y-Variablen mit unbekannter Beziehung.

**Geglättete Trendkurven, mit Gruppen**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Geglättete Trendkurven, mit Gruppen und überlagert**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State ),		Overlay( :Commodity )	),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	));

```

**Geglättete Trendkurven, überlagert**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**Geglättete Trendlinien über Streudiagrammen**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

**Geglätteter Trend mit Konfidenzintervall**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) )	));

```

**Geglätteter Zeitreihentrend mit Teilung**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :date ),		Y( :Ozone Concentration ),		Overlay( :Intervention for post 1960 period )	),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**Monoton auf der Log x-Achse**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Legend( 12 ),			Method( "P-Spline" ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} )	));

```

**Monotone geglättete Trendlinie**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother(			X,			Y,			Method( "P-Spline" ),			Lambda( 0.3 ),			Shape Constraint( "Non-descending" )		)	));

```

**Vergleich von Glättungen: Loess, Spline, P-Spline**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ),			Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

**Zyklisch glätten**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

## Treemap Element

### Elementmeldungen

#### Category Name

**Syntax:** obj &lt;&lt; Category Name( state=0|1 )

**Beschreibung:** Zeigt den Spaltennamen der Kategorie als Bestandteil der Kategoriebeschriftung an. Diese Option wird nur verwendet, wenn auch der Kategoriewert angezeigt wird.

#### Category Value

**Syntax:** obj &lt;&lt; Category Value( state=0|1 )

**Beschreibung:** Zeigt den Wert der Kategorie als Bestandteil der Kategoriebeschriftung an.

#### Color Label Format

**Syntax:** obj &lt;&lt; Color Label Format

**JMP Version hinzugefügt:** 16

#### Color Name

**Syntax:** obj &lt;&lt; Color Name( state=0|1 )

**Beschreibung:** Zeigt den Namen der Farbvariablen als Teil der Farbbeschriftung an. Diese Option wird nur verwendet, wenn der Farbwert auch angezeigt wird.

**JMP Version hinzugefügt:** 16

#### Color Value

**Syntax:** obj &lt;&lt; Color Value( state=0|1 )

**Beschreibung:** Zeigt den Wert der Farbvariablen als Bestandteil der Kategoriebeschriftung an. Diese Option wird nur verwendet, wenn eine Farbvariable angegeben ist.

#### Group Labels

**Syntax:** obj &lt;&lt; Group Labels( "Keine"|"Darüber"|"Verschiebbar" )

**Beschreibung:** Die Gruppenbeschriftungen ausschalten oder die Gruppenbeschriftungen über den Kategorien oder als verschiebbare Felder anzeigen.

#### Implicit Color

**Syntax:** obj &lt;&lt; Implicit Color( state=0|1 )

**Beschreibung:** Eindeutige Farben für das Tree Map verwenden. Wenn Sie diese Option abwählen, wird das Tree Map in einer einzigen Farbe angezeigt. Diese Option ist deaktiviert, wenn eine Farbvariable angegeben wurde. Standardmäßig ein.

#### Label Justification

**Syntax:** obj &lt;&lt; Label Justification( "Links"|"Mitte"|"Rechts" )

#### Label Threshold

**Syntax:** obj &lt;&lt; Label Threshold( number )

**Beschreibung:** Die Mindestgröße (Bereich), um die Beschriftung im Feld anzuzeigen.

#### Label Transparency

**Syntax:** obj &lt;&lt; Label Transparency( number )

**Beschreibung:** Legt die Transparenz für die Gruppenbeschriftung fest, wenn die Gruppenbeschriftung verschiebbar ist. Gültige Werte liegen zwischen 0,0 und 1,0 einschließlich.

**JMP Version hinzugefügt:** 16

#### Layout

**Syntax:** obj &lt;&lt; Layout( "Teilen"|"Quadrifizieren"|"Gemischt" )

#### Max Label Size

**Syntax:** obj &lt;&lt; Max Label Size( number )

**Beschreibung:** Definiert die maximale Erhöhung der Schriftgröße.

#### Orientation Bias

**Syntax:** obj &lt;&lt; Orientation Bias( number )

**Beschreibung:** Relative Voreinstellung von horizontaler vs. vertikaler Bereichsteilung festlegen.

**JMP Version hinzugefügt:** 17

#### Show Frames

**Syntax:** obj &lt;&lt; Show Frames( state=0|1 )

**Beschreibung:** Standardmäßig ein.

#### Show Group Name

**Syntax:** obj &lt;&lt; Show Group Name( state=0|1 )

**Beschreibung:** Zeigt den Spaltennamen der Gruppe als Bestandteil der Gruppenbeschriftung an. Diese Option wird nur verwendet, wenn die Gruppenbeschriftungen über den Gruppenkacheln sind.

#### Size Label Format

**Syntax:** obj &lt;&lt; Size Label Format

**JMP Version hinzugefügt:** 16

#### Size Name

**Syntax:** obj &lt;&lt; Size Name( state=0|1 )

**Beschreibung:** Zeigt den Namen der Größenvariablen als Teil der Größenbeschriftung an. Diese Option wird nur verwendet, wenn der Größenwert auch angezeigt wird.

**JMP Version hinzugefügt:** 16

#### Size Value

**Syntax:** obj &lt;&lt; Size Value( state=0|1 )

**Beschreibung:** Zeigt den Wert der Größenvariablen als Bestandteil der Kategoriebeschriftung an.

#### Summary Statistic

**Syntax:** obj &lt;&lt; Summary Statistic( "N"|"Mittelwert"|"Median"|"Modus"|"Geometrischer Mittelwert"|"Min."|"Max."|"Spannweite"|"Summe"|"Kumulierte Summe"|"Kumulierte Prozent"|"% von Gesamt"|"% von Faktor"|"% von Endsumme"|"Std.-Abw."|"Varianz"|"Std.-Fehler"|"CV"|"Interquartilabstand"|"Median der absoluten Abweichung"|"Erstes Quartil"|"Drittes Quartil" )

#### Tile Labels

**Syntax:** obj &lt;&lt; Tile Labels

### Zugehörige Konstruktoren

#### Treemap Element

**Syntax:** Treemap Element

**Beschreibung:** Zeigt eine nach vielen Kategorien zusammengefasste Zielgröße an.

**Geschachtelte Tree Map, quadrifizieren**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements(		Treemap(			X( 1 ),			X( 2 ),			X( 3 ),			Legend( 6 ),			Layout( "Squarify" ),			Group Labels( "Above" )		)	));

```

**Hinweise zur Positionsreihenfolge**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

**Stetiger Farbverlauf**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

