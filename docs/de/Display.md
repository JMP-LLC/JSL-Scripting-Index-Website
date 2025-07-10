# Display



### Alignment Cell Box

**Syntax:** y = Alignment Cell Box( row, col, nRow, nCol, <Sides(left+2*top+4*right+8*bottom=15)> <RowSpan(nRow matrix)> <ColSpan(nCol matrix)>, matrix or list of strings )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das den Zeileninhalt (oder Spalteninhalt) enthält, der sich innerhalb eines Ausrichtungsrasterfelds befindet.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Syntax:** y = Alignment Grid Box( alignment cell boxes )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das Ausrichtungszellenfelder enthalten kann.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Syntax:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Beschreibung:** Gibt einen Verweis auf ein Anzeigefeld zurück, das mehrere Elemente in jeder Zelle enthält, die innerhalb eines Ausrichtungsrasterfelds enthalten ist.

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );

New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### Alpha Shape

**Syntax:** ashape = Alpha Shape(Triangulation)

**Beschreibung:** Gibt die Alpha-Form für die vorgegebene Triangulierung zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### Border Box

**Syntax:** y = Border Box( <Left( pix )>, <Right( pix )>, <Top( pix )>, <Bottom( pix )>, <Sides( 0 )>, displayBoxArg )

**Beschreibung:** Erzeugt ein Anzeigefeld, das Platz um das Anzeigefeld für das Argument herum hinzufügt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Plot Seg

**Syntax:** b = Box Plot Seg(<data>, <frequency>, <weight>, <vertical=0|1>)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das einen auf den übergebenen X- und Y-Werten basierenden Box-Plot darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**Syntax:** y = Busy Light( < <<Automatic(0|1)>, <Size(x, y)>, < <<Disable> )

**Beschreibung:** Erstellt ein sich drehendes Bild, das anzeigt, dass ein Prozess arbeitet.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Syntax:** y = Button Box( title, script )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige einer beschrifteten Schaltfläche. Das Argument script wird ausgeführt, wenn auf die Schaltfläche geklickt wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Syntax:** y = Calendar Box()

**Beschreibung:** Gibt ein Anzeigefeld mit einem Kalenderbedienelement zurück. Der Kalender unterstützt die einzelne Auswahl eines Datums und optional einer Uhrzeit.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**Syntax:** y = Check Box( {item, ...}, <script> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines oder mehrerer Kontrollkästchen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**Syntax:** Clear Global Window Handler()

**Beschreibung:** Löscht einen von „Globalen Fenster-Handler festlegen“ zuvor festgelegten Fenster-Handler.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Col Box

**Syntax:** y = Col Box( title, boxes )

**Beschreibung:** Gibt ein Spaltenfeld aus den angegebenen Anzeigefeldern zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col List Box

**Syntax:** y = Col List Box( <Data Table( name )>, <all>|<character|numeric>, <width( pix )>, <grouped>, <maxSelected( n )>, <nlines( n )>, <MaxItems( n )>, <MinItems( n )>, <onChange( expr )>, < <<Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) >, < << Set Data Type(Any|Numeric|Character)>, <script> )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige eines Listenfelds zur Auswahl von Datentabellenspalten zurück. Verwenden Sie die Meldung <<Modeling Type, um spezielle Modellierungstypen zuzulassen oder um die zulässigen Typen einzuschränken. Der Standardwert von "Any" erlaubt jede Spalte mit einem klassischen Modellierungstyp ("Continuous", "Nominal", "Ordinal").

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

**Beispiel 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Span Box

**Syntax:** y = Col Span Box( title, children )

**Beschreibung:** Gibt eine Spalte mit einer Überschrift zurück, die untergeordnete Spalten umfasst

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Column Dialog

**Syntax:** y = Column Dialog( <var = ColList("Label", <Min Col(min)>, <Max Col(max)>, <Width(w)>, <Data Type("Numeric"|"Character"|"Any")>, <Modeling Type({<"Continuous">, <"Nominal">, <"Ordinal">, <"None">, <"Multiple Response">, <"Unstructured Text">, <"Vector">})> )>, <var=EditText("string")>, <var=EditNumber(num)>, <var=Check Box( "Text", 0|1)>, <var=RadioButtons( "a", "b" )>, <var=Combo Box("choice1", ...)>, <HList(box, ...)>, <VList(box, ...)>, <LineUp(ncol, box, ...)>, <Text Box("string")>, <Window Title("title")>, <Window Icon("icon string")>, <Dialog Description("description")>, <Recall(script)>, <Help Script(script)>)

**Beschreibung:** Fordert den Benutzer in einem modalen Fenster mit Feldern auf, Spalten einer Datentabelle auszuwählen. Die Spezifikation kann verschiedene Arten von Eingabefeldern sowie Containerfelder zur Organisation des Fensters umfassen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Combo Box

**Syntax:** y = Combo Box( {item <( tipstr )>, ...}, <script> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines Kombinationsfelds mit einem Popup-Menü. Jedes Element in dem Kombinationsfeld kann einen optionalen Tooltipp haben, der als Zeichenkette in Klammern auf die Zeichenkette des Elements folgend angegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Context Box

**Syntax:** y = Context Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen beschränkten Auswertungskontext herstellt. Ermöglicht die voneinander unabhängige Ausführung verschiedener Teile eines Anzeigefensters.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Contour Seg

**Syntax:** me = Contour Seg( Triangulation, [ levels ], < zColor([colors], <Cycle Colors|Interpolate Colors>) >, < Transparency([] | t) >

**Beschreibung:** Gibt ein Anzeigesegment zurück, das die Konturen einer Triangulierung darstellt. Für jede Stufe können optionale Farben als Matrix oder Liste angegeben werden. Die Transparenz kann als Zahl oder Matrix angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Current Report

**Syntax:** y = Current Report( <Project(title|index|box|window)> )

**Beschreibung:** Gibt eine Anzeigefeldreferenz auf den aktuellen Bericht im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Current Report();

```

### Current Window

**Syntax:** y = Current Window( <Project(title|index|box|window)> )

**Beschreibung:** Gibt eine Referenz auf das aktuelle Fenster im aktuellen Projekt zurück (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Data Filter Context Box

**Syntax:** y = Data Filter Context Box( displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das den Umfang der lokalen Datenfilter in einem Anzeigebaum definiert. Datenfilter und Datenfilterkontext-Felder können in einer Hierarchie angeordnet werden und werden von mehreren Plattformen oder Feldern in den Datenfilterkontext-Feldern gemeinsam genutzt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Syntax:** y = Data Filter Source Box( displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die Quelle eines Auswahlfilters definiert. Ausgewählte Zeilen in Berichten, die im Datenfilterquelle-Feld enthalten sind, werden in die Analyse der anderen Berichte einbezogen, die in einem gemeinsamen Datenfilterkontext-Feld enthalten sind.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Syntax:** y = Data Grid Box(  )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das eine Datentabelle enthalten kann.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table Box

**Syntax:** y = Data Table Box( datatable )

**Beschreibung:** Gibt ein Tabellenfeld zurück, das die angegebene Datentabelle darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Syntax:** y = Data Table Col Box( col )

**Beschreibung:** Gibt ein Spaltenfeld zurück, das der angegebenen Spalte in der Datentabelle entspricht.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Syntax:** y = Data Table Plot Col Box( col )

**Beschreibung:** Gibt ein Diagramm-Spaltenfeld zurück, das der vorgegebenen Spalte in der Datentabelle entspricht, und verwendet optional die zweite und dritte Spalte in der Datentabelle, um Eingriffsgrenzen zu erstellen.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Dialog

**Syntax:** y = Dialog( specification )

**Beschreibung:** Zeigt dem Benutzer eine Eingabeaufforderung in einem modalen Fenster an. Diese Funktion ist veraltet. Bitte verwenden Sie stattdessen die Funktion „New Window“ mit dem Argument <<Modal.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Excerpt Box

**Syntax:** y = Excerpt Box( rptnum, lstSubscripts )

**Beschreibung:** Gibt ein Anzeigefeld mit dem Auszug zurück, der vom Bericht an Nummer rptnum und der Liste der Anzeigeindizes lstSubscripts angegeben wird. Die Indizes spiegeln den aktuellen Zustand des Berichts wider, nachdem vorherige Auszüge entfernt wurden.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Expr As Picture

**Syntax:** y = Expr As Picture( expr( ... ), <width in pixels>, <Max Matrix Size( dim )> )

**Beschreibung:** Gibt ein Bild zurück, das den angegebenen Ausdruck als Formelabbildung enthält. Die Standardbreite ist 600 Pixel und die maximale Standardmatrixgröße ist 100.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Filter Col Selector

**Syntax:** y = Filter Col Selector(<Data Table(name)>, <width(pixels)>, <nlines(n)>, <script>, <onchange(expr)>)

**Beschreibung:** Gibt ein Anzeigefeld mit einer Liste von Elementen zurück. Das Bedienelement gestattet den Spaltenfilter.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**Syntax:** project = Get Project( title|index|box|window )

**Beschreibung:** Gibt einen Verweis auf ein spezifisches geöffnetes Projekt nach Titel, Index oder Feld zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Syntax:** projectList = Get Project List()

**Beschreibung:** Gibt eine Liste aller geöffneten Projekte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Window

**Syntax:** window = Get Window( <Project(title|index|box|window)>, <Type(string)>, title|index|box )

**Beschreibung:** Gibt eine Referenz auf ein spezifisches geöffnetes Fenster nach Titel, Index oder Feld zurück.



Die Suche ist auf Fenster im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



Verwenden Sie das optionale Argument Typ() entweder mit „Datentabellen“, „Journalen“, „Berichten“ oder „Dialogfeldern“, um die Suche auf Fenster eines bestimmten Typs zu begrenzen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Syntax:** windowList = Get Window List( <Project(title|index|box|window)>, <Type(string)> )

**Beschreibung:** Gibt eine Liste aller geöffneten Fenster zurück.



Die Liste ist auf Fenster im aktuellen Projekt begrenzt (oder auf kein Projekt, wenn das Skript nicht in einem Projekt ausgeführt wird).



Um ein Projekt anzugeben, verwenden Sie das optionale Argument Projekt() mit einem Titel, Index, Anzeigefeld oder Fensterobjekt. Verwenden Sie Projekt(0), um kein Projekt anzugeben, wenn das Skript in einem Projekt ausgeführt wird.



 Verwenden Sie das optionale Argument Typ() entweder mit „Datentabellen“, „Journalen“, „Berichten“ oder „Dialogfeldern“, um die Liste auf Fenster eines bestimmten Typs zu begrenzen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Print( Get Window List() << Get Window Title() );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**Beispiel 3**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Syntax:** box = Global Box( name )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige des Werts einer globalen Variable zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Graph

**Syntax:** y = Graph Box( props, script )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Graphen mit Achsen zurück. Benannte Argumente können sein: title(„Titel“), XScale(niedrig,hoch), YScale(niedrig,hoch), FrameSize(h,v), XName(„x“), yName(„y“), DoubleBuffer und SuppressAxes.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Syntax:** y = Graph 3D Box()

**Beschreibung:** (Experimentelles Feature) Gibt ein Anzeigefeld mit 3D-Inhalt zurück, das zusammen mit anderen Anzeigefeldern zur Erstellung von benutzerdefinierten Berichten verwendet werden kann.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Syntax:** y = Graph Box( props, script )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Graphen mit Achsen zurück. Benannte Argumente können sein: title(„Titel“), XScale(niedrig,hoch), YScale(niedrig,hoch), FrameSize(h,v), XName(„x“), yName(„y“), DoubleBuffer und SuppressAxes.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### H Center Box

**Syntax:** y = H Center Box( <childbox> )

**Beschreibung:** Gibt ein Anzeigefeld zurück mit dem Argument des untergeordneten Anzeigefelds childbox zentriert in dem horizontalen Raum, der von der maximalen Größe dieses untergeordneten Felds und allen anderen gleichgestellten Feldern des zentralen Felds definiert wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H List Box

**Syntax:** y = H List Box( <Align( center|bottom )>, displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem horizontalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung bottom oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Syntax:** y = H Scroll Box( <Size( x )>, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels horizontaler Bildlaufleiste positioniert.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Syntax:** y = H Sheet Box( <<Hold( rpt ), displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem horizontalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Splitter Box

**Syntax:** y = H Splitter Box( <Size(x,y)>, displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das andere Anzeigefelder mit interaktiver Steuerung der Größen horizontal anordnet. Die Größen untergeordneter Elemente werden als Anteil der Breite oder Höhe des Splitter Box angegeben. Das optionale Argument Size wird nur für das oberste Fensterbereichsfeld verwendet; Felder auf unteren Ebenen erhalten die gleiche Größe wie alle anderen untergeordneten Felder.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**Syntax:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Beschreibung:** Gibt ein Anzeigefeld für Hierarchiebäume zurück. Das Argument text ist der Knotenname und kann ein Text Edit Box sein.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hist Seg

**Syntax:** b = Hist Seg([data], <[freq data]>,<[weight data]>, <vertical=0|1>, <Row States()>)

**Beschreibung:** Gibt ein Histogrammsegment zurück

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Icon Box

**Syntax:** Box = Icon Box( "Name" )

**Beschreibung:** Erzeugt ein Anzeigefeld mit einem Symbol, wobei das Argument name der Name eines JMP-Symbols oder ein Pfad zu einem Bild sein kann.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**Syntax:** box = If Box( 0|1, displayBoxArgs )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das gegebenfalls die angegebenen Argumente des Anzeigefelds anzeigt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Syntax:** seg = If Seg(<state=0|1>)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das untergeordnete Anzeigesegmente ein- oder ausblendet.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### JSS Context Box

**Syntax:** y = JSS Context Box( displayBox )

**JMP Version hinzugefügt:** 19

```js

Names Default To Here( 1 );
New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Background Color( "Blue" );
			)
		)
	)
);

```

### Journal Box

**Syntax:** y = Journal Box( journalText )

**Beschreibung:** Erstellt ein Anzeigefeld aus Anweisungen, die üblicherweise in einem Journal gespeichert werden.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### Line Seg

**Syntax:** ls = Line Seg(x values, y values, <Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )>)

**Beschreibung:** Gibt ein Anzeigesegment mit Verbindungslinien zwischen allen X- und Y-Werten zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

**Beispiel 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**Syntax:** ls = Lines Seg([x1 y1 x2 y2,...])

**Beschreibung:** Gibt ein Anzeigesegment mit einer Sequenz aus Liniensegmenten für die übergebenen X- und Y-Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Syntax:** y = Lineup Box( <NCol( nc )>, <Spacing( pixels, <vspace> )>, displayBoxArgs, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige von in Spalten ausgerichteten Feldern nc. Das optionale Argument Spacing gibt den horizontalen und vertikalen Abstand um die Anzeigefelder herum an. Wird das Argument vspace verwendet, ist vspace der vertikale Abstand und pixels ist der horizontale Abstand.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Syntax:** y = Lineup Box( <Widths( {width1, width2, ...} )>, displayBoxArgs, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die Spaltenbreiten der darin enthaltenen Ausrichtungsfelder festlegt.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );

New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List Box

**Syntax:** y = List Box( {item, ...}, <width( pixels )>, <maxSelected( 9999 )>, <nlines( 12 )>, <script> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige eines Listenfelds mit Auswahlelementen. Wenn item selbst eine Liste mit zwei Elementen ist, die den Elementnamen und eine Zeichenkette enthält, die einen Modellierungstyp oder eine Sortierreihenfolge angibt, z. B. "Ordinal" oder "Ascending", wird das entsprechende Symbol neben dem jeweiligen Element im Listenfeld angezeigt.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Marker Seg

**Syntax:** me = Marker Seg( x, y, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )

**Beschreibung:** Gibt ein Anzeigesegment mit Symbolen für alle X- und Y-Werte zurück.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

**Beispiel 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

**Beispiel 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

**Beispiel 5**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Matrix Box

**Syntax:** y = Matrix Box( matrix, < <<Column Names( "c1", "c2", ... )>, < <<Row Names( "r1", "r2", ... )> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige einer Zahlenmatrix.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### MouseBox

**Syntax:** box = MouseBox( displayBoxArgs )

**Beschreibung:** Gibt ein Feld zurück, das JSL-Rückrufe für Mausaktionen durchführen kann.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */
			Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If(
					how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox
					 == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

### Move to Project

**Syntax:** Move to Project(<Source(project)>, <Destination(project)>, <Windows({list of windows to move})>)

**Beschreibung:** Verschiebt ein oder mehrere Fenster in ein Projekt hinein, aus einem Projekt heraus oder von einem Projekt in ein anderes. Es darf entweder nur die Quelle oder nur das Ziel angegeben werden, die jeweils andere Angabe ist standardmäßig das aktuelle Projekt. (Geben Sie nur die Quelle an, um Fenster in das aktuelle Projekt zu verschieben, geben Sie nur das Ziel an, um Fenster aus dem aktuellen Projekt heraus zu verschieben.) Ein Datentabellenfenster wird zusammen mit den abhängigen Berichten verschoben, auch wenn nur ein Fenster im Argument angegeben zu werden braucht. Wird das Fensterargument weggelassen, sind standardmäßig alle geöffneten Fenster im Quellprojekt betroffen.

**JMP Version hinzugefügt:** 14

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### New Image

**Syntax:** img = New Image()

img = New Image( width, height )

img = New Image( pathname )

img = New Image( picture )

img = New Image( matrix of JSL color pixels ) 

img = New Image( rgb|r|g|rgba, {i, i, i} )

**Beschreibung:** Gibt ein neues Bild zurück, das dann über JSL-Befehle bearbeitet werden kann. Wenn ein Pfad zu einer vorhandenen Bilddatei angegeben ist, muss es sich um eine Datei vom Typ .JPG, .PNG, .GIF, .BMP oder .TIF handeln.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

**Beispiel 3**

```js

Names Default To Here( 1 );
image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New Project

**Syntax:** project = new Project( <project messages> )

**Beschreibung:** Erstellt ein neues leeres Projektfenster. Eine oder mehrere Projektmeldungen können als Argumente eingeschlossen werden, um ein Projekt in einem Schritt zu erstellen.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
project = New Project();

```

**Beispiel 2**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

**Beispiel 3**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Beispiel 4**

```js

Names Default To Here( 1 );
project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

**Beispiel 5**

```js

Names Default To Here( 1 );
project = New Project(
	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New Window

**Syntax:** w = New Window( title, < <<Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")>, < << Return Result>, < << On Open(expr | function | method)>, < << On Close(expr | function | method)>, < <<On Validate(expr | function | method)>, < <<Show Menu(0 | 1)>, < <<Show Toolbars(0 | 1)>, < <<Suppress AutoHide(0 | 1)>, < <<Window View("Visible" | "Invisible")>, < <<Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS"  | "SQL" | "Text" | "XML")>, < <<Size(x, y)>, displayBox | script)

**Beschreibung:** Erstellt ein Fenster mit dem angegebenen Anzeigefeld oder Skript. Standardmäßig wird ein Berichtsfenster erstellt, es sei denn, die Option Type ist angegeben. Im Fenster von Type("Modal Dialog") wird die Ausführung angehalten, bis im Dialogfeld eine Reaktion erfolgt. On Open, On Validate und Return Result sind nur bei modalen Fenstern verfügbar. On Open() wertet den zugehörigen Ausdruck, die Funktion oder Klassenmethode aus, wenn das Fenster erstellt wird. Wenn On Close() falsch zurückgibt, wird das Fenster am Schließen gehindert. On Validate() führt seinen Ausdruck, die Funktion oder Klassenmethode aus, wenn auf die Schaltfläche „OK“ geklickt wird. Wenn der Ausdruck wahr zurückgibt, wird das Fenster geschlossen. Ansonsten bleibt das Fenster geöffnet. Return Result ändert den Rückgabewert des Fensters beim Schließen so, dass es dem der veralteten Funktion Dialog() entspricht. Bei Fenstertypen, die Symbolleisten unterstützen, verwenden Sie Show Toolbars, um Änderungen am Standardverhalten anzugeben. Die Optionen Show Menu und Suppress AutoHide sind nur für Windows verfügbar. Die Option Window View("Invisible") kann für jedes Fenster außer Modal Dialog verwendet werden. Ein Fenster mit Type("Script") erstellt ein JSL-Dokument, es sei denn, die Option <<Language ist angegeben.

**JMP Version hinzugefügt:** Vor Version 14

**[Win] Symbolleisten und Menüs**

```js

Names Default To Here( 1 );
// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

**Bericht**

```js

Names Default To Here( 1 );
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

**Dialogfeld**

```js

Names Default To Here( 1 );

ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

**Invisible**

```js

Names Default To Here( 1 );

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

**Modales Dialogfeld**

```js

Names Default To Here( 1 );

ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

**Python-Skript**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

**Skript**

```js

Names Default To Here( 1 );
script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

### Number Col Box

**Syntax:** y = Number Col Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument numbers angegebenen Zahlen zurück. Dabei kann es sich um eine Liste oder eine Matrix handeln.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Syntax:** y = Number Col Edit Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument numbers angegebenen Zahlen zurück. Dabei kann es sich um eine Liste oder eine Matrix handeln.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Syntax:** y = Number Edit Box( initValue, <width> )

**Beschreibung:** Gibt ein Bearbeitungsfeld zurück, das nur numerische Eingaben annimmt. Geben Sie das optionale Argument width an, um die Breite des Felds in Zeichen festzulegen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Outline Box

**Syntax:** y = Outline Box( title, <command script pairs list>, displayBox, ... )

**Beschreibung:** Erstellt ein Gliederungselement im Bericht und gibt die Referenz auf das Anzeigefeld zurück. Um ein Menü in den Gliederungsknoten aufzunehmen, geben Sie die command script pairs list an. Hierbei handelt es sich um eine Liste, die Menübefehle und zugehörige Skripte aufführt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Page Break Box

**Syntax:** Page Break Box()

**Beschreibung:** Erstellt ein Anzeigefeld, das einen Seitenumbruch erzwingt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Syntax:** y = Panel Box( title, displayBoxArgs )

**Beschreibung:** Gibt ein Anzeigefeld zum Beschriften und Einkreisen des Anzeigefelds für das Argument zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Picture Box

**Syntax:** pict = Picture Box( Picture Object )

**Beschreibung:** Erstellt ein Anzeigefeld, das ein Grafikbildobjekt enthält. Sie können entweder ein Bild öffnen und es dann referenzieren oder Sie können den Befehl zum Öffnen mit dem Pfad des Bilds anstelle des Arguments Picture Object verwenden.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**Syntax:** ps = Pie Seg(<{ xorigin, yorigin }>, <radius>, <style("pie", "ring", "coxcomb")>, values)

**Beschreibung:** Erstellt ein Tortensegment am angegebenen origin, mit dem angegebenen radius, basierend auf im Matrixformat angegebenen Werten.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Platform

**Syntax:** y = Platform( dataTable, script )

**Beschreibung:** Wertet das vorgegebene Skript im Kontext der angegebenen Datentabelle aus. Gibt das resultierende Anzeigefeld zum Einbetten in einem Anzeigebaum zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )
		),
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )
		)
	)
);

```

### Plot Col Box

**Syntax:** y = Plot Col Box( title, numbers )

**Beschreibung:** Gibt ein Anzeigefeld für die grafische Darstellung der Zahlen zurück Das Argument numbers kann eine Liste oder eine Matrix sein.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poly Seg

**Syntax:** ps = Poly Seg(x values, y values)

**Beschreibung:** Gibt ein Anzeigesegment zurück, das ein Polygon mit auf den übergebenen X- und Y-Werten basierenden Eckpunkten darstellt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**Syntax:** y = Popup Box( {label1, script1, ...} )

**Beschreibung:** Gibt ein Anzeigefeld mit einem Popup-Menü mit Paaren aus Beschriftung und Skript zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### Radio Box

**Syntax:** y = Radio Box( {item, ...}, <script> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige mehrerer runder Optionsfelder.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Range Slider Box

**Syntax:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen Bereichsschieberegler mit einem Bereich von minValue bis maxValue anzeigt. Werden die Positionen der beiden Schieberegler verändert, werden ihre Werte in lowVariable und highVariable abgelegt und das Skript ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Report

**Syntax:** y = Report( platform object )

**Beschreibung:** Gibt einen Verweis auf den Anzeigebaum eines Berichts einer Plattform zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**Syntax:** box = Scene Box( xsize, ysize )

**Beschreibung:** Gibt ein Anzeigefeld für 3D-Grafiken zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Syntax:** list = Scene Display List()

**Beschreibung:** Gibt eine Anzeigeliste für 3D-Grafiken zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Script Box

**Syntax:** y = Script Box( <s>, <"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML">, <width>, <height> )

**Beschreibung:** Gibt ein Anzeigefeld für die Bearbeitung eines Skripts zurück. Standardmäßig verfügt der Editor über JSL-Syntaxhervorhebung und -Verhalten.

**JMP Version hinzugefügt:** Vor Version 14

**JSL**

```js

Names Default To Here( 1 );
Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

**Python-Skript**

```js

Names Default To Here( 1 );
pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Syntax:** y = Scroll Box( <Size( x, y )>, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels Bildlaufleisten positioniert.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Set Global Window Handler

**Syntax:** Set Global Window Handler( Handler Function )

**Beschreibung:** Legt eine Funktion fest, die bei jeder Erstellung eines neuen Fensters aufgerufen werden soll.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Shape Seg

**Syntax:** me = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**Beschreibung:** Gibt ein Anzeigesegment mit einer Sammlung von Formen zurück. Jede Form zeichnet eine Linie entlang des angegebenen Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder in der Form einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuerpunkt, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Syntax:** y = Sheet Part( title, childbox )

**Beschreibung:** Gibt ein Anzeigefeld mit dem Argument des untergeordneten Anzeigefelds childbox mit dem angegebenen Titel zurück.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Slider Box

**Syntax:** box = Slider Box(minValue, maxValue, variable, script, <set width(n)>, <rescale slider(minValue, maxValue)>)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das einen Schieberegler mit einem Bereich von minValue bis maxValue anzeigt. Wird die Position des Schiebereglers verändert, wird der zugehörige Wert in variable abgelegt und das Skript ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Spacer Box

**Syntax:** y = Spacer Box( <Size( x, y )>, <Color( c )>)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das verwendet werden kann, um Platz zwischen anderen Anzeigefeldern zu schaffen oder um eine Zelle in einem Lineup Box zu füllen. Die Argumente Size werden in Pixel angegeben, und das Argument Color ist eine beliebige gültige JSL-Farbe.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Spin Box

**Syntax:** y = Spin Box( <script> )

**Beschreibung:** Gibt ein Anzeigefeld zurück, um eine Schaltfläche mit Bedienelementen für Aufwärts/Abwärts anzuzeigen. Das Argument script wird mit einem Argument aufgerufen, das die Richtung des angeklickten Pfeils angibt (negativ ist abwärts, positiv ist aufwärts). Die Größe 1 kennzeichnet einen einzelnen Klick, während größere Werte verwendet werden können, um eine wiederholte Aktion kenntlich zu machen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### String Col Box

**Syntax:** y = String Col Box( title, {strings} )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument strings angegebenen Zeichenketten zurück. Dabei handelt es sich um eine Liste von Zeichenketten.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Syntax:** y = String Col Edit Box( title, {strings} )

**Beschreibung:** Gibt ein Anzeigefeld für die Anzeige der vom Argument strings angegebenen Zeichenketten zurück. Dabei handelt es sich um eine Liste von Zeichenketten.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Tab Box

**Syntax:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Beschreibung:** Erstellt in einem Fenster ein Anzeigefeld mit verschiedenen Registerkarten.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Syntax:** y = Tab Page Box( <Title("string")>, <Tip(0|1)>,  <Closeable(0|1)>, <Icon("string")>, <Moveable(0|1)>, contents)

**Beschreibung:** Gibt ein Anzeigefeld zurück, das in einem Tab Box oder als unabhängiger Container mit Titel verwendet werden kann. Erkannte Optionen sind: Title(Zeichenkette), um einen Titel anzugeben, Tip (Zeichenkette), um einen Tooltipp anzugeben, Closeable(0|1), um anzugeben, ob die Seite geschlossen werden kann, Icon(Zeichenkette), um das Symbol anzugeben, und Moveable(0|1), um anzugeben, ob die Seite verschoben werden kann.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Syntax:** y = Table Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das aus den Spaltenanzeigefeldern Zeichenketten-Spaltenfeld, Zahl-Spaltenfeld und Diagramm-Spaltenfeld der Argumente eine Tabelle erstellt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Text Box

**Syntax:** y = Text Box( text, <<Justify Text( strPos ), <<Set Wrap( width ) )

**Beschreibung:** Erstellt ein Anzeigefeld, das den Text des Zeichenkettenarguments text enthält. Die optionalen Argumente sind verfügbar, um die Textausrichtung zu steuern oder um die Breite für den Textumbruch festzulegen. Das Argument für Justify Text muss eine Zeichenkette sein, die left, right oder center angibt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Edit Box

**Syntax:** y = Text Edit Box( text, <<Password Style( bool ), <<Set Script( script ), <<Set Width( value ) )

**Beschreibung:** Erzeugt ein editierbares Feld, das den in Anführungszeichen angegebenen Text text enthält, und gibt die Referenz auf das Anzeigefeld zurück. Die optionalen Argumente sind verfügbar, um die Textanzeige zu steuern, um ein Skript an das Textfeld anzuhängen und um die Breite des Textfelds in Pixel festzulegen. Durch Angabe von Set Width(-1) wird die Größenanpassung an den Inhalt erzwungen. Beachten Sie, dass Sie ein Skript an das Textbearbeitungsfeld anhängen können, indem Sie das Skript als optionales Argument hinzufügen oder indem Sie die Meldung Set Script senden.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Seg

**Syntax:** seg = Text Seg("text")

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**Syntax:** project = this project()

**Beschreibung:** Gibt aus einem Projekt heraus das entsprechende Projektobjekt zurück. Wenn außerhalb eines Projekts, wird nichts zurückgegeben.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Tree Box

**Syntax:** tree = Tree Box( <{rootnodes}>, <Size( x, y )>, <Multiselect( 0|1 )> )

**Beschreibung:** Erzeugt ein Anzeigefeld für die Anzeige hierarchischer Informationen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Syntax:** node = Tree Node( <label> )

**Beschreibung:** Erzeugt einen Baumknoten für die Anzeige in einem Feld im Baum.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Syntax:** triangulation = Triangulation( X(Column1, Column2), < Y(Column) > )

**Beschreibung:** Gibt ein Objekt mit der Delaunay-Triangulierung des vorgegebenen Punktesatzes zurück. Die optionale Y-Variable wird für doppelte Punkte gemittelt, und alle Punkte in der Ausgabe sind eindeutig.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**Syntax:** y = UnLineup Box(displayBoxArgs, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das das Spaltenlayout eines Ausrichtungsfelds kurzzeitig aufhebt. Das untergeordnete Element des Ausrichtungsaufhebungsfelds wird über alle Spalten des Ausrichtungsfelds gestreckt.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### V Center Box

**Syntax:** y = V Center Box( <childbox> )

**Beschreibung:** Gibt ein Anzeigefeld zurück mit dem Argument des untergeordneten Anzeigefelds childbox zentriert in dem vertikalen Raum, der von der maximalen Größe dieses untergeordneten Felds und allen anderen gleichgestellten Feldern des zentralen Felds definiert wird.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V List Box

**Syntax:** y = V List Box( <Align( center|right )>, displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem vertikalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Scroll Box

**Syntax:** y = V Scroll Box( <Size( y )>, displayBox )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das ein größeres untergeordnetes Feld mittels vertikaler Bildlaufleiste positioniert.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Syntax:** y = V Sheet Box( <<Hold( rpt ), displayBox, ... )

**Beschreibung:** Erzeugt ein Anzeigefeld, das die Anzeigefelder der Argumente in einem vertikalen Layout anordnet. Die Meldung „<<Halten“ teilt dem Blatt mit, dass ihm die Berichte gehören müssen, aus denen Auszüge erstellt werden. Das optionale Argument Align ermöglicht die Ausrichtung right oder center des Inhalts im Anzeigefeld.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Splitter Box

**Syntax:** y = V Splitter Box( <Size(x,y)>, displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das andere Anzeigefelder mit interaktiver Steuerung der Größen vertikal anordnet. Die Größen untergeordneter Elemente werden als Anteil der Breite oder Höhe des Splitter Box angegeben. Das optionale Argument Size wird nur für das oberste Fensterbereichsfeld verwendet; Felder auf unteren Ebenen erhalten die gleiche Größe wie alle anderen untergeordneten Felder.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**Syntax:** wb = Web Browser Box( url )

**Beschreibung:** Gibt ein Anzeigefeld zurück, um eine Webseite anzuzeigen, angegeben vom Zeichenkettenargument url.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Window

**Syntax:** y = Window( <string|int> )

**Beschreibung:** Diese Funktion ist veraltet und wird nur für die Rückwärtskompatibilität mit vorhandenen Skripten beibehalten. Verwenden Sie bei neuen Skripten Fenster abrufen() oder Fensterliste abrufen().

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Window( "Big Class" );

```

### With Window Handler

**Syntax:** With Window Handler( JSL Code, Handler Function )

**Beschreibung:** Führt einen Codeblock mit einer Funktion aus, die bei jeder Erstellung eines neuen Fensters aufgerufen werden soll.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Wrap List Box

**Syntax:** y = Wrap List Box( displayBox, ... )

**Beschreibung:** Gibt ein Anzeigefeld zurück, das die von den Argumenten gelieferten Anzeigefelder in einem horizontalen Layout anordnet, die Liste jedoch beim Drucken mit Zeilenumbrüchen versieht.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

