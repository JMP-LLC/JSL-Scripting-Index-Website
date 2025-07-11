# TreeMapSeg



### Child

**Syntax:** seg2 = obj << Child

**Beschreibung:** Gibt das erste untergeordnete Element des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Child; // not many segs support children

```

### Class Name

**Syntax:** classname = obj << Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefeld zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Class Name;

```

### Clip Shape

**Syntax:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Beschreibung:** Stellt die Geometrie in der gewünschten Form dar. Die Form kann mittels einer Formendatei oder einem Pfad angegeben werden. Optional kann mit einer Formendatei eine ID angegeben werden, um eine einzelne Form aus der Datei auszuwählen, ansonsten wird die Verbindung sämtlicher Formen als Beschneidungsbereich verwendet. Ein Beschneidungspfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Syntax:** obj << Color Theme

### Delete

**Syntax:** obj << Delete

**Beschreibung:** Löscht das Anzeigesegment.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Delete;

```

### Density Gradient

**Syntax:** obj << Density Gradient( "Nach Weiß ausblenden"|"Nach Grau ausblenden"|"Vollfarbig"="Nach Weiß ausblenden" )

**Beschreibung:** Legt das Farbverhalten von Dichtegradienten fest. Standardmäßig „Nach Weiß ausblenden“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Error Bar Cap

**Syntax:** obj << Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Syntax:** obj << Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**Syntax:** obj << Fill Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**Syntax:** obj << First Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Frame

**Syntax:** FrameBox = obj << Frame

**Beschreibung:** Gibt das Rahmenfeld zurück, in dem sich das Anzeigesegment befindet.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Frame;

```

### Frame Size

**Syntax:** obj << Frame Size( width,height )

**Beschreibung:** Legt die Rahmengröße des Fensters für das TreeMapBox fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
Show( prefVal );
tmbox = If( prefVal == 1,
	tmr[FrameBox( 1 )],
	tmr[Treemap Box( 1 )]
);
tmbox << Frame Size( 200, 200 );

```

### Get Base Font

**Syntax:** font = obj << Get Base Font

**Beschreibung:** Gibt die Basisschriftart für vom Feld dargestellten Text zurück. Basisschriftarten sind vordefinierte Namen wie Title, Text, Annotation und andere, die in den Voreinstellungen für Schriftarten angegeben sind.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Base Font;

```

### Get Clip Shape

**Syntax:** obj << Get Clip Shape

**Beschreibung:** Gibt die aktuelle Beschneidungsform aus

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Density Gradient

**Syntax:** obj << Get Density Gradient

**Beschreibung:** Ruft das Farbverhalten von Dichtegradienten ab.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Density Gradient;

```

### Get Description

**Syntax:** description = obj << Get Description

**Beschreibung:** Ruft die Beschreibung des Anzeigesegments ab.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << get description();

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Error Bar Cap

**Syntax:** obj << Get Error Bar Cap

**Beschreibung:** Gibt die aktuelle Abschlussart der Fehlerbalken zurück.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Syntax:** { begin, end } = obj << Get Error Bar Cap Shape

**Beschreibung:** Gibt die Form des Abschlusses bei Fehlerbalken zurück.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**Syntax:** color = obj << Get Fill Color

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Syntax:** obj << Get Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Fill Pattern;

```

### Get Font

**Syntax:** obj << Get Font

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font;

```

### Get Font Name

**Syntax:** obj << Get Font Name

**Beschreibung:** Gibt den Namen der Schriftart zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**Syntax:** obj << Get Font Scale

**Beschreibung:** Gibt den aktuellen Skalierungsfaktor für die Schriftart zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**Syntax:** obj << Get Font Size

**Beschreibung:** Gibt die Größe der Schriftart zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Get Font Size;

```

### Get Font Style

**Syntax:** obj << Get Font Style

**Beschreibung:** Gibt den Namen des Schriftschnitts zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**Syntax:** obj << Get Gradient

**Beschreibung:** Ruft den Farbverlauf ab.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Syntax:** obj << Get Gradient Color Theme

**Beschreibung:** Ruft das Farbschema des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Syntax:** obj << Get Gradient Discrete Colors

**Beschreibung:** Ruft ab, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Syntax:** obj << Get Gradient Fill

**Beschreibung:** Ruft das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Syntax:** obj << Get Gradient Label Count

**Beschreibung:** Ruft die Anzahl der Beschriftungen in der Legende eines Verlaufs ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Syntax:** obj << Get Gradient Legend Horizontal

**Beschreibung:** Ruft ab, ob die Legende des Verlaufs horizontal gezeichnet wird.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Syntax:** obj << Get Gradient Legend Label Format

**Beschreibung:** Ruft das Format der Beschriftungen der Verlaufslegende ab

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Syntax:** obj << Get Gradient Legend Label Width

**Beschreibung:** Ruft die maximale Zeichenlänge von Beschriftungen der Verlaufslegende ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Syntax:** obj << Get Gradient Legend Show Labels

**Beschreibung:** Ruft ab, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Syntax:** obj << Get Gradient Level Count

**Beschreibung:** Ruft die Anzahl der Stufen in einem Verlauf ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Syntax:** obj << Get Gradient Lightness Range

**Beschreibung:** Ruft die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf ab. Fehlende Werte weisen darauf hin, dass der ursprüngliche Wert des Farbschemas verwendet wird.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Syntax:** obj << Get Gradient Range

**Beschreibung:** Ruft den Bereich ab, über den nicht benutzerdefinierte Verlaufsskalen generiert werden.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Syntax:** obj << Get Gradient Reverse Color Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Farben in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Syntax:** obj << Get Gradient Reverse Label Order

**Beschreibung:** Ruft ab, ob die Reihenfolge der Beschriftungen in einem Verlauf umgekehrt ist.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Syntax:** obj << Get Gradient Scale

**Beschreibung:** Ruft den Skalentyp des Verlaufs ab.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Syntax:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Beschreibung:** Ruft den Satz von Werten für Beschriftungen in der Verlaufsskala ab.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Syntax:** obj << Get Gradient Show Missing

**Beschreibung:** Ruft ab, wann der Legendeneintrag für fehlende Werte angezeigt wird.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Syntax:** obj << Get Gradient Transparency

**Beschreibung:** Ruft das Transparenzverhalten von Verläufen ab.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Gradient Transparency;

```

### Get Group Label Border Color

**Syntax:** color = obj << Get Group Label Border Color

**Beschreibung:** Ruft die Rahmenfarbe für verschiebbare Gruppenbeschriftungen ab.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Border Color();

```

### Get Group Label Color

**Syntax:** color = obj << Get Group Label Color

**Beschreibung:** Ruft die Füllfarbe für verschiebbare Gruppenbeschriftungen ab.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Color();

```

### Get Group Label Font

**Syntax:** font = obj << Get Group Label Font

**Beschreibung:** Ruft die Schriftart für Gruppenbeschriftungen ab.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font();

```

### Get Group Label Font Color

**Syntax:** color = obj << Get Group Label Font Color

**Beschreibung:** Ruft die Schriftfarbe für Gruppenbeschriftungen ab.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Label Font Color();

```

### Get Group Spacing

**Syntax:** obj << Get Group Spacing

**Beschreibung:** Gibt die Größe des Raums um Gruppenrechtecke herum zurück.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Group Spacing();

```

### Get Interval Draw Directions

**Syntax:** obj << Get Interval Draw Directions

**Beschreibung:** Ruft die Richtungen ab, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**Syntax:** color = obj << Get Line Color

**Beschreibung:** Gibt die Farbe der Linien zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Color;

```

### Get Line Style

**Syntax:** pen style = obj << Get Line Style

**Beschreibung:** Gibt den Stil der Linien zurück.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Style;

```

### Get Line Width

**Syntax:** number = obj << Get Line Width

**Beschreibung:** Gibt die Breite der Linien zurück.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Line Width;

```

### Get Marker

**Syntax:** marker = obj << Get Marker

**Beschreibung:** Gibt den Symbolstil zurück.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker;

```

### Get Marker Size

**Syntax:** size = obj << Get Marker Size

**Beschreibung:** Gibt die Größe der Symbole zurück.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Marker Size;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Orientation Bias

**Syntax:** bias = obj << Get Orientation Bias

**Beschreibung:** Ruft die relative Voreinstellung von horizontaler vs. vertikaler Bereichsteilung ab.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder( Variables( X( :State ), Size( :Population ) ), Elements( Treemap( X ) ) );
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Orientation Bias();

```

### Get Properties

**Syntax:** obj << Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get Text Color

**Syntax:** obj << Get Text Color

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Text Color;

```

### Get Text Style

**Syntax:** obj << Get Text Style

**Beschreibung:** Ruft ab, wie der Text in Bezug auf den Mauszeiger-Stift gezeichnet wird.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**Syntax:** obj << Get Transparency

**Beschreibung:** Gibt einen numerischen Wert zurück, der die Transparenz zwischen 0 (durchsichtig) und 1 (undurchsichtig) darstellt.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Get Transparency;

```

### Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Beschreibung:** Legt den Farbverlauf fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Syntax:** obj << Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Syntax:** obj << Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Syntax:** obj << Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Syntax:** obj << Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Syntax:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Syntax:** obj << Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Syntax:** obj << Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Syntax:** obj << Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Syntax:** obj << Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Syntax:** obj << Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Syntax:** obj << Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Syntax:** obj << Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Syntax:** obj << Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Syntax:** obj << Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Syntax:** obj << Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Syntax:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Syntax:** obj << Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Syntax:** obj << Gradient Transparency( "Keine"|"Linear"="Linear" )

**Beschreibung:** Legt das Transparenzverhalten von Verläufen fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Gradient Transparency( "None" );

```

### Group Label Background

**Syntax:** obj << Group Label Background( transparency )

**Beschreibung:** Legt die Transparenz des Hintergrunds für Gruppenbeschriftungen fest.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Group Label Background( 0.4 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Group Label Background( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Group Label Background( 1 );
);

```

### Ignore Group Hierarchy

**Syntax:** obj << Ignore Group Hierarchy( state=0|1 )

**Beschreibung:** Sind mehrere Kategorien angegeben, werden diese gruppiert.  Ist diese Meldung aktiviert, wird die Gruppenhierarchie ignoriert.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Ignore Group Hierarchy( 1 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Ignore Group Hierarchy( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Ignore Group Hierarchy( 1 );
);

```

### Last Value

**Syntax:** obj << Last Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Line Color

**Syntax:** obj << Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**Syntax:** obj << Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Syntax:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Marker

**Syntax:** obj << Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**Syntax:** obj << Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**Syntax:** obj << Max Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Min Value

**Syntax:** obj << Min Value( state=0|1 )

**JMP Version hinzugefügt:** 16

### Name

**Syntax:** obj << Name( state=0|1 )

**JMP Version hinzugefügt:** 16

### Parent

**Syntax:** seg2 = obj << Parent

**Beschreibung:** Gibt das übergeordnete Element des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Parent;

```

### Revert

**Syntax:** obj << Revert

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Revert;

```

### Set Base Font

**Syntax:** obj << Set Base Font( "Text"|"Überschrift"|"Titel"|"Klein"|"Mono"|"Formeleditor"|"Anmerkung"|"Achse"|"Symbol"|"Achsentitel"|"Graphenbeschriftung"|"Legende"|"Graphentitel"|"Titel"|"Datentabelle"|"Hover-Beschriftung" )

**Beschreibung:** Legt die Basisschriftart für vom Feld dargestellten Text fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**Syntax:** obj << Set Description( description )

**Beschreibung:** Legt die Beschreibung des Anzeigesegments fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**Syntax:** obj << Set Error Bar Cap( "Keine"|"Sehr klein"|"Klein"|"Mittel"|"Groß" )

**Beschreibung:** Gibt an, welche Art von Abschluss für Fehlerbalken verwendet werden soll.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Syntax:** obj << Set Error Bar Cap Shape( begin, end )

**Beschreibung:** Gibt die Form des Abschlusses an, die in Fehlerbalken angezeigt werden soll. Ein einzelnes Argument legt die Form für beide Enden des Balkens fest, oder es können separate Argumente für Anfang und Ende des Balkens angegeben werden. Die Standardform ist "Line". Die Form "Arrow" zeichnet einen nach außen zeigenden Pfeil und "None" lässt den Abschluss aus.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**Syntax:** obj << Set Fill Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Syntax:** obj << Set Fill Pattern

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Syntax:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black" );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Syntax:** obj << Set Font Name( fontname )

**Beschreibung:** Legt die Schriftart für den Text fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Syntax:** obj << Set Font Scale( f )

**Beschreibung:** Legt einen Skalierungsfaktor für die aktuelle Schriftart fest. Der Skalierungsfaktor wird auf die Größe angewendet, die anhand der Basisschriftart und der Punktgröße ermittelt wird.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Syntax:** obj << Set Font Size( n )

**Beschreibung:** Legt die Schriftgröße in Punkten für den Text fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**Syntax:** obj << Set Font Style( style )

**Beschreibung:** Legt den Schriftstil für Textzeichenketten fest. Um mehrere Stile gleichzeitig festzulegen, platzieren Sie sie getrennt durch Leerzeichen in der gleichen Zeichenkette (siehe Beispiel 2 unten).

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic" );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Syntax:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Beschreibung:** Legt den Farbverlauf fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Syntax:** obj << Set Gradient Color Theme

**Beschreibung:** Legt das Farbschema für den Verlauf fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Syntax:** obj << Set Gradient Custom Scale

**Beschreibung:** Legt für den Verlauf fest, dass eine Liste von Werten für eine benutzerdefinierte Skala verwendet wird.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Syntax:** obj << Set Gradient Discrete Colors

**Beschreibung:** Legt fest, ob jede Stufe in einem Verlauf eine einzelne Farbe sein soll oder ob die Farben glatte Übergänge haben sollen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Syntax:** obj << Set Gradient Fill( "Zwischen"|"Darüber"|"Darunter"|"Darüber Darunter"="Darüber Darunter" )

**Beschreibung:** Legt das Farbverhalten für Werte außerhalb des Bereichs der Verlaufsskala fest. Standardmäßig „Darüber Darunter“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Syntax:** obj << Set Gradient Label Count

**Beschreibung:** Legt die Anzahl der Beschriftungen in der Legende eines Verlaufs fest. Diese Anzahl ist um eins kleiner als die Anzahl der Konturstufen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Syntax:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Syntax:** obj << Set Gradient Legend Horizontal

**Beschreibung:** Legt fest, ob die Legende des Verlaufs horizontal gezeichnet werden soll.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Syntax:** obj << Set Gradient Legend Label Format

**Beschreibung:** Legt das Format für die Beschriftungen der Verlaufslegende fest

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Syntax:** obj << Set Gradient Legend Label Width

**Beschreibung:** Legt die maximale Zeichenlänge von Beschriftungen der Verlaufslegende fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Syntax:** obj << Set Gradient Legend Show Labels

**Beschreibung:** Legt fest, ob die Stufenbeschriftungen in der Legende des Verlaufs angezeigt werden sollen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Syntax:** obj << Set Gradient Level Count

**Beschreibung:** Legt die Anzahl der Stufen in einem Verlauf fest. Diese Anzahl ist um eins kleiner als die Anzahl der Beschriftungen.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Syntax:** obj << Set Gradient Lightness Range

**Beschreibung:** Legt die minimale und maximale Helligkeit für Stufenfarben in einem Verlauf fest. Die Farben werden skaliert, um den Bereich abzudecken. Ein fehlender Wert wird behandelt wie keine Änderung.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Beispiel 3**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Syntax:** obj << Set Gradient Range( "Standard"|"Exakter Datenbereich"|"Mittlere 90 %"="Standard" )

**Beschreibung:** Legt den Bereich fest, über den nicht benutzerspezifische Verlaufsskalen generiert werden. Standardmäßig „Standard“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Syntax:** obj << Set Gradient Reverse Color Order

**Beschreibung:** Kehrt die Reihenfolge der Farben in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Syntax:** obj << Set Gradient Reverse Label Order

**Beschreibung:** Kehrt die Reihenfolge der Beschriftungen in einem Verlauf um.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Syntax:** obj << Set Gradient Scale( "Linear"|"Quantil"|"Standardabweichung"|"Log"|"Log-Offset"|"Benutzerdefiniert"="Linear" )

**Beschreibung:** Legt den Skalentyp des Verlaufs fest. Standardmäßig „Linear“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Syntax:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Beschreibung:** Legt einen benutzerdefinierten Satz von Werten für die Verwendung in der Verlaufsskala fest.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Syntax:** obj << Set Gradient Show Missing( "Automatisch"|"Ein"|"Aus"="Automatisch" )

**Beschreibung:** Legt fest, wann der Legendeneintrag für fehlende Werte angezeigt werden soll. Standardmäßig „Automatisch“.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Group Label Border Color

**Syntax:** obj << Set Group Label Border Color( color )

**Beschreibung:** Legt die Rahmenfarbe für verschiebbare Gruppenbeschriftungen fest.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Border Color( "Blue" );

```

### Set Group Label Color

**Syntax:** obj << Set Group Label Color( color )

**Beschreibung:** Legt die Füllfarbe für verschiebbare Gruppenbeschriftungen fest.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Color( "Blue" );

```

### Set Group Label Font

**Syntax:** obj << Set Group Label Font( <label position> fontName, <size>, <"bold italic underline strikeout">, <angle>; <label position>, <Font(fontName)>, <Size(size)>, <Style("bold italic underline strikeout")>, <Angle(angle)> )

**Beschreibung:** Legt die Schriftart für Gruppenbeschriftungen fest. Wird eine Beschriftungsposition angegeben, wird die Schriftart nur angewendet, wenn Gruppenbeschriftungen diese Position verwenden.

**JMP Version hinzugefügt:** 17

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Arial Black", 16 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font( "Floating", Size( 24 ) );

```

### Set Group Label Font Color

**Syntax:** obj << Set Group Label Font Color( color )

**Beschreibung:** Legt die Schriftfarbe für Gruppenbeschriftungen fest.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :State ), X( :city, Position( 1 ) ), ),
	Elements( Treemap( X( 1 ), X( 2 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Label Font Color( "Blue" );

```

### Set Group Spacing

**Syntax:** obj << Set Group Spacing( spacing=1 )

**Beschreibung:** Legt die Größe des Raums um Gruppenrechtecke herum fest. Standardmäßig „1“.

**JMP Version hinzugefügt:** 16

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Group Spacing( 5 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg( TreeMapSeg( 1 ), Set Group Spacing( 4 ) )}
		)
	)
);

```

### Set Interval Draw Directions

**Syntax:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**Beschreibung:** Legt die Richtungen fest, in die Intervalle gezeichnet werden sollen.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points(
			X,
			Y,
			Legend( 3 ),
			Summary Statistic( "Mean" ),
			Error Interval( "Standard Deviation" )
		)
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg(
				BarSeg( 1 ),
				{Set Interval Draw Directions( "Upper" )}
			)}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**Syntax:** obj << Set Line Color( color )

**Beschreibung:** Legt die Farbe für alle Linien im Anzeigesegment fest.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**Syntax:** obj << Set Line Style( pen style )

**Beschreibung:** Legt den Stil der Linien fest. Mögliche Optionen sind Durchgezogen, Gepunktet, Gestrichelt, Strich-Punkt oder Strich-Punkt-Punkt.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Syntax:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Sonstige…" )

**Beschreibung:** Legt die Breite der Linien fest.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**Syntax:** obj << Set Marker( marker )

**Beschreibung:** Legt den Symbolstil für alle Symbole fest.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**Syntax:** obj << Set Marker Size( size )

**Beschreibung:** Legt die Größe der Symbole fest. Mögliche Größen sind Punkt, Klein, Mittel, Groß, XL, XXL und XXXL.

**JMP Version hinzugefügt:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Orientation Bias

**Syntax:** obj << Set Orientation Bias( bias )

**Beschreibung:** Legt die relative Voreinstellung von horizontaler vs. vertikaler Bereichsteilung fest. Das Argument muss eine Zahl zwischen -1 und 1 sein.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = Graph Builder( Variables( X( :State ), Size( :Population ) ), Elements( Treemap( X ) ) );
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Orientation Bias( 0.5 );

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Text Color

**Syntax:** obj << Set Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**Syntax:** obj << Set Text Style( [Links|Mitte|Rechts], [Oben|VMitte|Baseline|Unten], [Hintergrund überschreiben], [Boxen] )

**Beschreibung:** Legt fest, wie der Text in Bezug auf den Mauszeiger-Stift gezeichnet wird. Wenn unterstützt, füllt „Hintergrund überschreiben“ das Rahmenfeld des Texts und „Hintergrund überschreiben“ umrandet es. Wenn nicht angegeben, ist die standardmäßige horizontale Ausrichtung „Links“ und vertikal ist „Baseline“.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Syntax:** obj << Set Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Show Category Name

**Syntax:** obj << Show Category Name( state=0|1 )

### Show Group Labels

**Syntax:** obj << Show Group Labels( state=0|1 )

**Beschreibung:** Wenn deaktiviert, werden Gruppenbeschriftungen nicht angezeigt. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Group Labels( 0 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Group Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Group Labels( 0 );
);

```

### Show Group Name

**Syntax:** obj << Show Group Name( state=0|1 )

### Show Labels

**Syntax:** obj << Show Labels( state=0|1 )

**Beschreibung:** Wenn deaktiviert, werden Beschriftungen nicht angezeigt. Standardmäßig ein.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Show Labels( 0 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city, :State ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Show Labels( 0 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Show Labels( 0 );
);

```

### Sib

**Syntax:** seg2 = obj << Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigesegments zurück.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Sib;

```

### Sib Append

**Syntax:** obj << Sib Append( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt nach dem Anzeigesegment ein.

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Syntax:** obj << Sib Prepend( seg2 )

**Beschreibung:** Fügt ein Anzeigesegment direkt vor dem Anzeigesegment ein.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Suppress Box Frames

**Syntax:** obj << Suppress Box Frames( state=0|1 )

**Beschreibung:** Wenn aktiviert, werden die Feldrahmen nicht angezeigt.

**Beispiel 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
gb = Graph Builder(
	Variables( X( :season ), X( :species, Position( 1 ) ), Color( :miles ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 8 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
seg = (frame << Find Seg( Treemap Seg( 1 ) ));
seg << Suppress Box Frames( 1 );

```

**Beispiel 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
tm = Treemap( Categories( :city ), Sizes( :POP ) );
tmr = tm << report;
treemapGBPref = Get Platform Preference( treemap( "Use Graph Builder" ) );
prefVal = Arg( Arg( Arg( treemapGBPref, 1 ) ) );
If( prefVal == 1,
	tmr << Dispatch( {}, "Graph Builder", FrameBox,
		{DispatchSeg( Treemap Seg( 1 ), {Suppress Box Frames( 1 )} )}
	),
	tmbox = tmr[Treemap Box( 1 )];
	tmbox << Suppress Box Frames( 1 );
);

```

### Text Color

**Syntax:** obj << Text Color( color )

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**Syntax:** obj << Text Style( [Links|Mitte|Rechts], [Oben|VMitte|Baseline|Unten], [Hintergrund überschreiben], [Boxen] )

**Beschreibung:** Legt fest, wie der Text in Bezug auf den Mauszeiger-Stift gezeichnet wird. Wenn unterstützt, füllt „Hintergrund überschreiben“ das Rahmenfeld des Texts und „Hintergrund überschreiben“ umrandet es. Wenn nicht angegeben, ist die standardmäßige horizontale Ausrichtung „Links“ und vertikal ist „Baseline“.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Syntax:** obj << Transparency( number )

**Beschreibung:** Legt die Formentransparenz fest. Das Argument muss ein numerischer Wert zwischen 0 und 1 sein.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));
seg << Set Transparency( .3 );

```

### Treemap

**Syntax:** Treemap

**Beschreibung:** Zeigt eine nach vielen Kategorien zusammengefasste Zielgröße an.

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :Region ), X( :State, Position( 1 ) ) ),
	Elements( Treemap( X( 1 ), X( 2 ), Legend( 3 ) ) )
);
frame = Report( gb )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "TreeMapSeg" ));

```

