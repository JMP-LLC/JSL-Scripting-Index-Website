# FrameBox



## Elementmeldungen

### Add Graphics Script

**Syntax:** obj << Add Graphics Script( <"Back" | "Front" | position>, <Description("name")>, <"Selected Layer">, <Scale IDs(XID, YID)>, script )

**Beschreibung:** Geben Sie ein Skript ein, das innerhalb dieses Rahmens zeichnen soll. Ausgewählte Elemente befinden sich immer über nicht ausgewählten Elementen. Wenn Sie eine ausgewählte Schicht angeben, wird dieses Skript beim zweiten Zeichnungsdurchgang aufgerufen, wenn ausgewählte Elemente gezeichnet werden.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );

gbox = Graph Box(
	Frame Size( 300, 300 ),
	X Axis( Scale ID( 1 ), Side( 1 ), Min( 1 ), Max( 100 ), Inc( 5 ) ),
	X Axis( Scale ID( 2 ), Side( 2 ), Min( 4 ), Max( 50 ), Inc( 3 ) ),
	Y Axis( Scale ID( 3 ), Min( -100 ), Max( 200 ) ),
	Y Axis( Scale ID( 4 ), Side( 2 ), Min( 1 ), Max( 10 ), Inc( 1 ) ), 

);

fbox = gbox[frame box( 1 )];

fbox << Add Graphics Script(
	Scale IDs( 1, 4 ), //use scale ID's 1 and 4 for this graphics script
	Pen Color( "Green" );
	Line( [20 50 80], [4 3 6] );
);
New Window( "Example", gbox );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
table = New Table( "test table",
	Add Rows( 150000 ),
	<<New Column( "X", "Numeric", <<Set Each Value( Random Normal() ) ),
	<<New Column( "Y", "Numeric", <<Set Each Value( Random Normal() ) )
);
b = Bivariate( X( :x ), Y( :y ) );
table << select rows( 1 :: 10000 );
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Red Line Above Selected" ),
	"selected layer",
	Pen Color( "Red" );
	Pen Size( 5 );
	Line( [-5, 5], [-5, 5] );
);
Report( b )[Frame Box( 1 )] << Add Graphics Script(
	Description( "Green Line Below Selected Above Unselected" ),
	Pen Color( "Green" );
	Pen Size( 3 );
	Line( [5, -5], [-5, 5] );
);

```

### Add Image

**Syntax:** obj << Add Image( image | open("image filename"), <bounds( left(value), top(value), bottom(value), right(value) ) | move(centerX, centerY)> )

**Beschreibung:** 

Fügt ein Bild in den Rahmen ein.



Sie können ein vorhandenes Bild angeben (das bereits über den Befehl new image() oder open() erstellt wurde) oder Sie können mit dem Parameter open() direkt eine Bilddatei angeben. Das Bild kann mit dem Befehl move(), der anhand der Achseneinheiten angibt, wo die Bildmitte platziert werden soll, im Rahmen positioniert werden.  Oder das Bild kann in der Größe geändert und durch Angabe der bounds() im Rahmen angeordnet werden.

```jsl

Names Default To Here( 1 );
img = Open( "$SAMPLE_IMAGES/windmap.png", "png" );
w = New Window( "View Image",
	Graph Box(
		FrameSize( 500, 500 ),
		X Scale( 0, 100 ),
		Y Scale( 0, 100 ),
		<<Add Image(
			image( img ),
			bounds( top( 90 ), Left( 10 ), bottom( 10 ), Right( 90 ) )
		)
	)
);

```

### Append Seg

**Syntax:** obj << Append Seg( display seg )

**Beschreibung:** Fügt ein Anzeigesegment in das Rahmenfeld ein.

```jsl

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) ),
	Graph Box( Frame Size( 300, 120 ) )
);
gb2 = Current Report()[FrameBox( 2 )];
gb2 << append seg( Current Report()[FrameBox( 1 )] << find seg( Marker Seg( 1 ) ) );

```

### Background Map

**Syntax:** obj << Background Map( <Images("None" | "Simple Earth" | "Detailed Earth" | "Nasa Server" | ("Web Map Service", url, layer) , <Transparency(0-1)> )> | <Boundaries("None" | Shape File)> )

**Beschreibung:** 

Fügt eine Hintergrundkarte in den Rahmen ein.



Bilder sind rasterisierte Karten und unterstützen Transparenz.  Grenzen sind in einer Formendatei definierte Vektorkarten, die von einem Benutzer erstellt werden können.  Sie können entweder ein Bild oder eine Grenze oder beides angeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hurricanes.jmp" );
plot = Bubble Plot(
	X( :Longitude ),
	Y( :Latitude ),
	Sizes( :"Wind (Knots)"n ),
	Time( :Date ),
	Coloring( :Landfall in USA ),
	ID( :Name and ID ),
	Speed( 1 ),
	Time Index( 2117.70195 ),
	Trail Bubbles( 1 ),
	All Labels( 0 ),
	No Labels( 0 ),
	Title Position( -88.679, 59.73 )
);
rplot = plot << report;
framebox = rplot[Frame Box( 1 )];
framebox << Background Map(
	Images( "Simple Earth", Transparency( 0.7 ) ),
	Boundaries( "World" )
);

```

### Bottom

**Syntax:** obj << Bottom( state=0|1 )

**Beschreibung:** Blendet einen Rand unterhalb vom Rahmen ein oder aus.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Bottom( 0 );

```

### Child Seg

**Syntax:** obj << Child Seg

**Beschreibung:** Gibt das untergeordnete Element des Anzeigesegments des Rahmenfelds zurück.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Child Seg();

```

### Copy Customizations

**Syntax:** obj << Copy Customizations

**Beschreibung:** Skript mit benutzerspezifischen Einstellungen für Graph kopieren.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Copy Frame Contents

**Syntax:** obj << Copy Frame Contents

**Beschreibung:** Journaltext mit Einstellungen für diesen Rahmen erstellen und in die Zwischenablage kopieren.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Copy Frame Settings

**Syntax:** obj << Copy Frame Settings

**Beschreibung:** Skript mit Einstellungen für diesen Rahmen erstellen und in die Zwischenablage kopieren.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Copy Polygons

**Syntax:** obj << Copy Polygons

**Beschreibung:** Speichert eine Kopie des Polygons, das sich in diesem Rahmen befindet, in der Zwischenablage.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
framebox << Copy Polygons;

```

### Customize

**Syntax:** obj << Customize

**Beschreibung:** Eigenschaften des Grapheninhalts ändern.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Customize;

```

### Dispatch Segs

**Syntax:** obj << Dispatch Segs( command )

**Beschreibung:** Sendet einen Befehl an alle visuellen Elemente („Segmente“) im Anzeigefeld.

**JMP Version hinzugefügt:** 15

### DispatchSeg

**Syntax:** obj << DispatchSeg( command )

**Beschreibung:** Sendet einen Befehl an das Anzeigefeld.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Distribution(
	Continuous Distribution( Column( :weight ), Fit Distribution( Normal ) ),
	Nominal Distribution( Column( :age ) ),
	SendToReport(
		Dispatch( {"weight"}, "Distrib Histogram", FrameBox,
			{DispatchSeg(
				Hist Seg( 1 ),
				{Line Style( "Dotted" ), Fill Color( {0, 128, 0} ), Histogram Color( -32768 )
				}
			), DispatchSeg( Line Seg( 1 ), {Line Color( {0, 0, 255} ), Line Width( 5 )} )}
		)
	)
);

```

### Edit Graphics Script

**Syntax:** obj << Edit Graphics Script

**Beschreibung:** Skripte bearbeiten, die bereits diesem Rahmen zugeordnet sind.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Edit Graphics Script;

```

### Fill Selection Mode

**Syntax:** obj << Fill Selection Mode( "Bevorzugter Modus"|"Gemustert ausgewählt"|"Dunkler ausgewählt"|"Ausgewählte umrandet"|"Ausgewählte gleiche Farbe"|"Nicht ausgewählte schwächer" )

**Beschreibung:** Legt den Auswahlstil für Füllungen fest.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );

```

### Find Seg

**Syntax:** obj << Find Seg( display seg )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
ms = rbiv[Frame Box( 1 )] << Find Seg( Marker Seg( 1 ) );
ms << delete;

```

### Find Segs

**Syntax:** obj << Find Segs

**JMP Version hinzugefügt:** 15

### Frame Size

**Syntax:** obj << Frame Size

**Beschreibung:** Rahmengröße ändern

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Frame Size( 300, 300 );

```

### Get Background Fill

**Syntax:** obj << Get Background Fill

**Beschreibung:** Gibt den Zustand (0|1) der Hintergrundfarbe des Graphen zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );
val1 = framebox << Get Background Fill;

```

### Get Fill Selection Mode

**Syntax:** obj << Get Fill Selection Mode

**Beschreibung:** Gibt den Auswahlstil für Füllungen zurück.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dist = Distribution( Continuous Distribution( Column( :height ) ), Histograms Only );
rdist = dist << report;
dt << Select Where( dt:age == 12 );
framebox = rdist[Frame Box( 1 )];
framebox << Fill Selection Mode( "Selected Darker" );
framebox << Get Fill Selection Mode;

```

### Get Image

**Syntax:** image = obj << Get Image

**Beschreibung:** Gibt eine Referenz auf das Hintergrundbild zurück.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr = op << report;
fb = opr[Frame Box( 1 )];
fb << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb << Marker Size( 8 );
Print( fb << Get Image );

```

### Get Marker Selection Mode

**Syntax:** obj << Get Marker Selection Mode

**Beschreibung:** Gibt den Symbolauswahlstil zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );
framebox << Get Marker Selection Mode;

```

### Get Marker Size

**Syntax:** obj << Get Marker Size

**Beschreibung:** Gibt die Größe der Graphensymbole zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );
Print( framebox << Get Marker Size() );

```

### Get Polygons

**Syntax:** obj << Get Polygons

**Beschreibung:** Gibt eine Liste von Polygonen zurück, die sich in diesem Rahmen befinden.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
pa = framebox << Add Polygon Annotation(
	Points( {144, 53}, {182, 30}, {213, 80}, {181, 95} )
);
pa << Closed( 1 );
Print( framebox << Get Polygons );

```

### Grid Line Order

**Syntax:** obj << Grid Line Order( position )

**Beschreibung:** Zeichnet die Rasterlinien im Vordergrund oder im Hintergrund von anderen Objekten im Graphen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Grid Line Order( 1 );

```

### Hover Label Editor

**Syntax:** obj << Hover Label Editor

**Beschreibung:** Zeigt das Fenster des Editors für Hover-Beschriftungen an.

**JMP Version hinzugefügt:** 15

### Left

**Syntax:** obj << Left( state=0|1 )

**Beschreibung:** Blendet einen Rand links vom Rahmen ein oder aus.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Left( 0 );

```

### Line Width Scale

**Syntax:** obj << Line Width Scale( 0|scale )

**Beschreibung:** Legt für die Breite der Linie den eingegebenen Wert fest. Der Wert 0 bedeutet, dass die Skala der Linienbreite durch die Skala der Schriftgröße festgelegt wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Line Width Scale( 2.0 );

```

### Make table of graphs like this

**Syntax:** obj << Make table of graphs like this

**Beschreibung:** Datentabelle mit Graphen erstellen

### Marker Drawing Mode

**Syntax:** obj << Marker Drawing Mode( "Normal"|"Schnell"|"Umrandet" )

**Beschreibung:** Legt den Stil des Symbols fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Drawing Mode( "outlined" );

```

### Marker Label Color Style

**Syntax:** obj << Marker Label Color Style( "Bevorzugter Modus"|"Symbolfarbe"|"Symbolfarbe verblasst"|"Fixierte Farbe" )

**Beschreibung:** Ändert die Farbe von Symbolbeschriftungen

### Marker Selection Mode

**Syntax:** obj << Marker Selection Mode( "Bevorzugter Modus"|"Nicht ausgewählte schwächer"|"Ausgewählte größer"|"Ausgewählte lichtumrandet"|"Ausgewählte umrandet"|"Ausgewählte gleiche Farbe" )

**Beschreibung:** Legt den Auswahlstil des Symbols fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Selection Mode( "Selected Haloed" );

```

### Marker Size

**Syntax:** obj << Marker Size( 0=dot/1=small/2=medium/... )

**Beschreibung:** Legt die Größe des Symbols fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Marker Size( 4 );

```

### Name Selection in Column

**Syntax:** obj << Name Selection in Column

**Beschreibung:** Aktuell ausgewählte Zeilen beschriften und den Wert (Beschriftung) in einer Spalte speichern.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;
framebox << Name Selection in Column;

```

### Paste Background Image

**Syntax:** obj << Paste Background Image

**Beschreibung:** Hintergrundbild, das in der Zwischenablage gespeichert ist, einfügen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Animals.jmp" );
op = Overlay Plot( X( :subject ), Y( :miles ), Separate Axes( 1 ) );
opr1 = op << report;
opr2 = opr1 << Clone Box;
opr1 << append( opr2 );
fb1 = opr1[Frame Box( 1 )];
fb1 << Add Image(
	Open( Convert File Path( "$SAMPLE_IMAGES/black rhino footprint.jpg" ) ),
	Transparency( 0.9 ),
	Rotate( 90 ),
	Bounds(
		Left( 0.135416666666667 ),
		Right( 3.26041666666667 ),
		Top( 11.8333333333333 ),
		Bottom( -1 )
	),
	SetSize( {300, 210} )
);
fb1 << Copy Picture;
fb2 = opr2[Frame Box( 1 )];
fb2 << Paste Background Image;

```

### Paste Customizations

**Syntax:** obj << Paste Customizations

**Beschreibung:** Skript mit benutzerspezifischen Einstellungen für Graph einfügen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Marker Drawing Mode( outlined );
framebox1 << Copy Customizations;
framebox2 << Paste Customizations;

```

### Paste Frame Contents

**Syntax:** obj << Paste Frame Contents

**Beschreibung:** Die Zwischenablage enthält Journaltext für Rahmeninhalte. Analysieren und in diesem Rahmen zuordnen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
biv << Fit Line;
framebox1 << Copy Frame Contents;
framebox2 << Paste Frame Contents;

```

### Paste Frame Settings

**Syntax:** obj << Paste Frame Settings

**Beschreibung:** Inhalt der Zwischenablage in diesen Rahmen einfügen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv1 = biv << report;
rbiv2 = rbiv1 << Clone Box;
rbiv1 << append( rbiv2 );
framebox1 = rbiv1[Frame Box( 1 )];
framebox2 = rbiv2[Frame Box( 1 )];
framebox1 << Background Color( "Green" );
framebox1 << Copy Frame Settings;
framebox2 << Paste Frame Settings;

```

### Paste Graphlet

**Syntax:** obj << Paste Graphlet

**Beschreibung:** Fügt eine benutzerspezifische Graphlet-Anpassung basierend auf dem Inhalt der Zwischenablage hinzu.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
Set Clipboard(JSLQuote(Bivariate(
                             Y( :height ),
                             X( :weight ),
                             Histogram Borders( 1 ),
                             Fit Robust( {Line Color( {212, 73, 88} )} ),
                             Fit Cauchy( {Line Color( {61, 174, 70} )} ),
                             SendToReport(
                                 Dispatch(
                                     {},
                                     "Bivar Plot",
                                     FrameBox,
                                     {Grid Line Order( 1 ), Reference Line Order( 2 )}
                                 )
                             )
                         )));
frame = (gb << report)[FrameBox( 1 )];
frame << Paste Graphlet();
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Reference Line Order

**Syntax:** obj << Reference Line Order( position )

**Beschreibung:** Zeichnet die Referenzlinien im Vordergrund oder im Hintergrund von anderen Objekten im Graphen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[axis box( 1 )] << Add Ref Line( 90, "Solid", blue );
rbiv[axis box( 2 )] << Show Major Grid( 1 );
framebox = rbiv[frame box( 1 )];
framebox << Reference Line Order( 1 );

```

### Remove Graphics Script

**Syntax:** obj << Remove Graphics Script( position )

**Beschreibung:** Entfernt das Grafikskript des Rahmens an der angegebenen position.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
framebox = rbiv[frame box( 1 )];
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {1.0, 0.5, 0.0} );
	Polygon( [60, 72, 57], [75, 120, 120] );
);
framebox << Add Graphics Script(
	Transparency( 0.5 );
	Fill Color( {0.0, 0.5, 1.0} );
	Polygon( [60, 72, 57], [150, 120, 120] );
);
Wait( 2 );
framebox << Remove Graphics Script( 2 );

```

### Reorder Segs

**Syntax:** obj << Reorder Segs( List of integers representing the current segs in the new order. )

**Beschreibung:** Ordnet Segmente in einem Graphen neu.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
Open( "$sample_data\big class.jmp" );
gb = Graph Builder(
	Size( 534, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 6 ) ), Bar( X, Y, Legend( 7 ) ) ),
	SendToReport(
		Dispatch( {}, "weight", ScaleBox,
			{Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}
		)
	)
);
For( blink = 1, blink < 4, blink++,
	Wait( .5 );
	(gb << report)[FrameBox( 1 )] << reorder segs( {4, 3, 2, 1} );
);

```

### Right

**Syntax:** obj << Right( state=0|1 )

**Beschreibung:** Blendet einen Rand rechts vom Rahmen ein oder aus.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Right( 0 );

```

### Right Y Axis

**Syntax:** obj << Right Y Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Beschreibung:** Wendet eine oder mehrere Änderungen an der rechten Y-Achse in einer einzelnen Meldung an. Öffnet das Fenster für die Einstellungen der rechten Y-Achse, wenn keine Argumente angegeben sind.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Right Y Axis;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Right Y Axis(
	Rotated Labels( "Angled" ),
	Scale( "Log" ),
	Add Ref Line( 125, dashed, "red" )
);

```

### Row Colors

**Syntax:** obj << Row Colors( Farbe )

**Beschreibung:** Legt die Farbe für die ausgewählten Zeilen fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Colors( "Red" );

```

### Row Editor

**Syntax:** obj << Row Editor

**Beschreibung:** Zeileneditor aufrufen und beim ersten ausgewählten Punkt beginnen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Editor;

```

### Row Exclude

**Syntax:** obj << Row Exclude

**Beschreibung:** Schließt die entsprechenden Zeilen der Datentabelle aus oder ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Exclude( 1 );

```

### Row Hide

**Syntax:** obj << Row Hide

**Beschreibung:** Blendet die entsprechenden Zeilen in der Datentabelle aus oder ein.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide( 1 );

```

### Row Hide and Exclude

**Syntax:** obj << Row Hide and Exclude

**Beschreibung:** Blendet die entsprechenden Zeilen der Datentabelle aus und schließt sie aus (oder blendet sie ein und schließt sie ein).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Hide and Exclude( 1 );

```

### Row Label

**Syntax:** obj << Row Label

**Beschreibung:** Schaltet die Beschriftungen der entsprechenden Zeilen in der Datentabelle ein oder aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Label( 1 );

```

### Row Legend

**Syntax:** obj << Row Legend( Color( 0|1), Marker( 0|1 ), <Color theme( string )>, <Marker theme( string )>, < Continuous scale(0|1)>, <Reverse scale(0|1)>, <Excluded Row( 0|1 ), <Make window with legend> )

**Beschreibung:** Zeilen entsprechend einer Datenspalte farblich markieren und rechts vom Rahmen eine Legende einfügen.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Row Legend( "age", color( 1 ), Marker( 1 ) );

```

### Row Markers

**Syntax:** obj << Row Markers( marker )

**Beschreibung:** Legt das Symbol für die ausgewählten Zeilen fest.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Where( dt:age == 12 );
framebox = rbiv[Frame Box( 1 )];
framebox << Row Markers( 3 );

```

### Scale with Font

**Syntax:** obj << Scale with Font

**Beschreibung:** Legt die Skala der Linienbreite mit der Skala der Schriftgröße fest. Entspricht <<Skala der Linienbreite(0).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ), FitLine );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Scale with Font;

```

### Seg Count

**Syntax:** obj << Seg Count( <seg type> )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = Bivariate( Y( :weight ), X( :height ), FitLine );
rbiv = biv << report;
rbiv[Frame Box( 1 )] << Seg Count( MarkerSeg );

```

### Select Matching Cells

**Syntax:** obj << Select Matching Cells

**Beschreibung:** Punkte auswählen, die ähnliche Beschriftungen wie die ausgewählten Zeilen haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 2 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Matching Cells;

```

### Select Similar

**Syntax:** obj << Select Similar

**Beschreibung:** Wählt die Zeilen mit ähnlichen Datenwerten wie die ausgewählte Spalte aus.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
dt << Select Rows( 1 );
dt:(Column( 3 )) << Set Selected( 1 );
framebox = rbiv[Frame Box( 1 )];
framebox << Select Similar;

```

### Set Background Fill

**Syntax:** obj << Set Background Fill( state=0|1 )

**Beschreibung:** Aktiviert oder deaktiviert das Ausfüllen des Hintergrunds des Graphen mit der Hintergrundfarbe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( weight ), x( height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
//Set background color
framebox << Background Color( "red" );
//Wait to see the color change
Wait( 1 );
//Turn off background fill color
framebox << Set Background Fill( 0 );

```

### Set Graphlet

**Syntax:** obj << Set Graphlet

**Beschreibung:** Definiert die eingebettete Visualisierung der Hover-Beschriftung (Graphlet) für diesen Graphen.

**JMP Version hinzugefügt:** 15

**Externes Bild**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		local:img_url = "https://upload.wikimedia.org/wikipedia/commons/thumb/" ||
		Match( local:_Species,
			"versicolor", "2/27/Blue_Flag%2C_Ottawa.jpg/240px-Blue_Flag%2C_Ottawa.jpg",
			"virginica", "f/f8/Iris_virginica_2.jpg/240px-Iris_virginica_2.jpg",
			"setosa",
				"5/56/Kosaciec_szczecinkowaty_Iris_setosa.jpg/180px-Kosaciec_szczecinkowaty_Iris_setosa.jpg"
		);
		Open( local:img_url );
	),
	Click( Web( "https://en.wikipedia.org/wiki/Iris_" || local:_Species ) ),
	Title( "External Image" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 18 ),
	Index Row( 18 ),
	UniqueID( 1441114818 ),
	FoundPt( {123, 293} ),
	Origin( {1.70752129817444, 5.66359183673469} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

**Voreinstellung**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 7 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Graphlet(
	Picture(
		loader = Include( "$BUILTIN_SCRIPTS/hllib.jsl" );
		hlp = loader:lazyLoad( "hllPresets" );
		hlp:launchPie();
	),
	Title( "Pie Preset" ),
	Reapply( 1 )
);
gpin = frame << Add Pin Annotation(
	Seg( BarSeg( 1 ) ),
	Index( {0, 0} ),
	Index Row( {0, 0} ),
	UniqueID( 1513503376 ),
	FoundPt( {107, 211} ),
	Origin( {0.00867052023121384, 96.6870397553517} ),
	Tag Line( 1 )
);
gpin << Launch Graphlet;

```

### Set Gridlet

**Syntax:** obj << Set Gridlet

**Beschreibung:** Definiert das Inhaltsraster der Hover-Beschriftung (Gridlet) für diesen Graphen.

**JMP Version hinzugefügt:** 15

**Anhängen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Expunge( {{Matcher( "Species" )}} ),
	Annex(
		{{Matcher( "Species@Wikipedia" ), value( local:_Species ),
		click( Web( "https://wikipedia.com/wiki/Iris_" || local:_Species ) )}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Löschen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Expunge( {{Matcher( "Row" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Neu formatieren**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Reformat(
		{{Matcher( "Petal length" ), Format( "Scientific", 80 ), 80},
		{Matcher( "Sepal length" ), Format( "Scientific", 80 ), 80}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Stil**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet(
	Style(
		{{Matcher( "Species" ), Text Color( "Red" ), Background Color( "Light Yellow" ),
		Justification( "Center" ), "Font"("Times New Roman", 14, "Italic")}}
	)
);
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

**Umbenennen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Gridlet( Rename( {{Matcher( "Row" ), value( "Observation" )}} ) );
frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Set Textlet

**Syntax:** obj << Set Textlet

**Beschreibung:** Definiert den Rich-Text-Inhalt der Hover-Beschriftung (Textlet) für diesen Graphen.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This example uses hardcoded content from Wikipedia
// For a complete example that uses dynamic, data-driven content, please see
// https://community.jmp.com/t5/JMP-Scripts/WikiReader-Augmenting-Hover-Labels-with-web-data-and-images/ta-p/237488
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
gb = dt << Graph Builder(
	Size( 531, 456 ),
	Show Control Panel( 0 ),
	Variables( X( :Petal length ), Y( :Sepal length ), Color( :Species ) ),
	Elements( Points( X, Y, Legend( 2 ) ) )
);
frame = (gb << report)[FrameBox( 1 )];
frame << Set Textlet(
	Setup(
		local:description =
		"Iris virginica, with the common name Virginia iris, is a perennial species of flowering plant, native to eastern North America.";
		local:text = Substr( local:description, 1, 140 ) || "...";
	),
	Markup(
		"<background color='white'><i><font family='Arial' size='12'>{local:text}</font></i></background>"
	),
	Width( 320 )
);
gpin = frame << Add Pin Annotation(
	Seg( Marker Seg( 1 ) ),
	Index( 133 ),
	Index Row( 133 ),
	UniqueID( 1441114933 ),
	FoundPt( {384, 228} ),
	Origin( {5.08093306288033, 6.30828571428571} ),
	Tag Line( 1 )
);

```

### Size to Isometric

**Syntax:** obj << Size to Isometric

**Beschreibung:** Die Größe des Rahmens wird so geändert, dass die Anzahl der tatsächlichen Einheiten pro Pixel in X- und in Y-Richtung die gleiche ist.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Size To Isometric;

```

### Ternary X Title

**Syntax:** obj << Ternary X Title( text )

**Beschreibung:** Legt den Titel der X-Achse für einen ternären Rahmen fest.

**JMP Version hinzugefügt:** 15

### Ternary Y Title

**Syntax:** obj << Ternary Y Title( text )

**Beschreibung:** Legt den Titel der Y-Achse für einen ternären Rahmen fest.

**JMP Version hinzugefügt:** 15

### Ternary Y1 Title

**Syntax:** obj << Ternary Y1 Title( text )

**Beschreibung:** Legt den Titel der Y1-Achse für einen ternären Rahmen fest.

**JMP Version hinzugefügt:** 15

### Top

**Syntax:** obj << Top( state=0|1 )

**Beschreibung:** Blendet einen Rand oberhalb vom Rahmen ein oder aus.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Top( 0 );

```

### Transparency

**Syntax:** obj << Transparency

**Beschreibung:** Legt die Transparenz des Rahmens fest.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
framebox = rbiv[Frame Box( 1 )];
framebox << Transparency( 0.5 );

```

### X Axis

**Syntax:** obj << X Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Beschreibung:** Wendet eine oder mehrere Änderungen an der X-Achse in einer einzelnen Meldung an. Öffnet das Fenster für die Einstellungen der X-Achse, wenn keine Argumente angegeben sind.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << X Axis;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << X Axis(
	Min( -2 ),
	Max( 7 ),
	Inc( 1 ),
	Add Ref Line( 5, "Solid", "Blue" ),
	Rotated Labels( "Vertical" )
);

```

### Y Axis

**Syntax:** obj << Y Axis( < Min( min ) >, < Max( max ) >, < Inc( n ) >, ... )

**Beschreibung:** Wendet eine oder mehrere Änderungen an der Y-Achse in einer einzelnen Meldung an. Öffnet das Fenster für die Einstellungen der Y-Achse, wenn keine Argumente angegeben sind.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight, Position( 1 ), Side( "Right" ) ) ),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
gbr = gb << report;
fb = gbr[Frame Box( 1 )];
fb << Y Axis;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables(
		X( :age, Size( 23 ) ),
		Y( :height, Size( 37 ) ),
		Y( :weight, Position( 1 ), Size( 37 ), Side( "Right" ) )
	),
	Elements(
		Points( X, Y( 1 ), Legend( 1 ), Jitter( 1 ) ),
		Points( X, Y( 2 ), Legend( 3 ), Jitter( 1 ) )
	)
);
framebox = Report( gb )[framebox( 1 )];
framebox << Y Axis(
	Add Ref Line( 61.25, "Solid", "Medium Dark Green" ),
	Show Major Grid( 1 ),
	Show Minor Grid( 1 ),
	Format( "Fixed Dec", 5, 2 ),
	Rotated Labels( "Perpendicular" )
);

```

## Freigegebene Elementmeldungen

### Add Line Annotation

**Syntax:** obj << Add Line Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine Linie ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Syntax:** obj << Add Pin Annotation

**Beschreibung:** Fügt im Vordergrund eines Anzeigefensters eine angeheftete Anmerkung ein. Die meisten Attribute (wie Index Row, UniqueID and FoundPt) sind nur für interne Zwecke ausgelegt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**Syntax:** obj << Add Polygon Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters ein Polygon ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**Syntax:** obj << Add Simple Shape Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine einfache Form ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Syntax:** obj << Add Text Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters Text ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**Syntax:** obj << Append( db2 )

**Beschreibung:** Fügt db2 nach db in den Anzeigebaum ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Syntax:** obj << Background Color( color );

color = obj << Get Background Color

**Beschreibung:** Ist die Hintergrundfarbe festgelegt, wird das Feld vor dem Darstellen des Inhalts mit der Hintergrundfarbe ausgefüllt. Ist die Hintergrundfarbe nicht festgelegt, sind Hintergrund und Inhalt der beinhaltenden Boxen sichtbar.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Syntax:** obj << Bring Window To Front

**Beschreibung:** Zeigt das Fenster im Vordergrund an.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj << Child

**Beschreibung:** Gibt das untergeordnete Element des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**Syntax:** obj << Class Name

**Beschreibung:** Gibt den Namen der Anzeigeklasse für das Anzeigefenster zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**Syntax:** obj << Clone Box

**Beschreibung:** Erstellt eine neue Kopie des Anzeigefelds.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**Syntax:** obj << Close Window( <"NoSave"> )

**Beschreibung:** Schließt das Fenster.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj << Copy Data

**Beschreibung:** Kopiert die mit Tabstopp getrennten Daten aus einer Matrix oder Tabelle in die Zwischenablage.

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj << Copy Graph

**Beschreibung:** Legt ein Bild des Graphen und der Achsen in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**Syntax:** obj << Copy Picture

**Beschreibung:** Legt ein Bild des Anzeigefelds in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**Syntax:** obj << Delete Box

**Beschreibung:** Löscht das Anzeigefeld.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**Syntax:** obj << Deselect

**Beschreibung:** Wählt dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ ab.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**Syntax:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**Beschreibung:** Sendet command an einen spezifischen Teil eines Anzeigebaums.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

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

### Find

**Syntax:** obj << Find

**Beschreibung:** Gibt das Anzeigefeld mit dem vorgegebenen argument zurück

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**Syntax:** obj << Get Annotation

**Beschreibung:** Gibt die erste Anmerkung zurück, die in diesem Anzeigefeld verankert ist. Auf andere Anmerkungen kann mit Sib() über das Ergebnis zugegriffen werden.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Background Color

**Syntax:** obj << Background Color( color );

color = obj << Get Background Color

**Beschreibung:** Ist die Hintergrundfarbe festgelegt, wird das Feld vor dem Darstellen des Inhalts mit der Hintergrundfarbe ausgefüllt. Ist die Hintergrundfarbe nicht festgelegt, sind Hintergrund und Inhalt der beinhaltenden Boxen sichtbar.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**Syntax:** obj << Border( sides );

sides = obj << Get Border

**Beschreibung:** Rahmen sind durchgezogene Linien um das Äußere eines Anzeigefelds. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für horizontale und vertikale Rahmen.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**Syntax:** obj << Border Color( color );

color = obj << Get Border Color

**Beschreibung:** Optionale Farbe zum Überschreiben der Standardfarbe für Feldrahmen.

**JMP Version hinzugefügt:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**Syntax:** obj << Get Content Size

**Beschreibung:** Gibt die Inhaltsgröße innerhalb des Fensters zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**Syntax:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**Beschreibung:** Ruft einen relativ robusten Ausdruck für die Navigation zwischen parent box und obj ab. Dieser Pfad ist nicht in allen JMP-Versionen garantiert stabil. Der receiver expr wird, sofern angegeben, in den Ausgabeausdruck integriert. Wenn nicht, wird stattdessen der für parent box angegebene Ausdruck verwendet. Wie im Beispiel gezeigt, ist diese Meldung hauptsächlich nützlich, um die Robustheit eines bereits verfügbaren Pfads zu erhöhen. Standard ist der XPath-Modus.

**Basis**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**Indexmodus**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

```

### Get Enabled

**Syntax:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Beschreibung:** Ein Objekt, das nicht aktiviert ist, reagiert nicht auf Tastatur- oder Mauseingabe. Diese Eigenschaft wird von untergeordneten Objekten geerbt, deshalb verursacht ein Containerobjekt, das deaktiviert ist, die Deaktivierung aller untergeordneten Objekte.

```jsl

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

### Get HTML

**Syntax:** obj << Get HTML( <format> )

**Beschreibung:** Gibt eine Zeichenkette mit dem HTML-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Syntax:** width = obj << Get Height

**Beschreibung:** Gibt die Höhe des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Syntax:** obj << Get Journal

**Beschreibung:** Gibt eine Zeichenkette mit dem Journal-Quellcode des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Syntax:** width,height = obj << Get Max Size

**Beschreibung:** Gibt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**Syntax:** width,height = obj << Get Min Size

**Beschreibung:** Gibt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

```

### Get Namespace

**Syntax:** obj << Get Namespace

**Beschreibung:** Gibt den zu diesem Anzeigeobjekt zugehörigen Namensraum zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get On Close

**Syntax:** obj << Get On Close

**Beschreibung:** Gibt das Skript oder die Funktion zurück, das/die beim Schließen des Fensters ausgeführt wird.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Syntax:** obj << Get Page Setup

**Beschreibung:** Informationen für die Seiteneinrichtung für PDFs abrufen

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Beschreibung:** Erfasst db als ein Bildobjekt. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

**Ansicht und Erscheinungsbild**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

**Skalieren**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**Standard**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

### Get Project

**Syntax:** project = obj << Get Project()

**Beschreibung:** Gibt das übergeordnete Projekt des Fensters zurück, oder Leer(), wenn sich das Fenster nicht in einem Projekt befindet.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Properties

**Syntax:** obj << Get Properties

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Eigenschaften und deren Werte des Anzeigefelds enthält.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Syntax:** obj << Get Property( "property" )

**Beschreibung:** Gibt die aktuelle Einstellung für die benannte property zurück.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Syntax:** obj << Get Property List

**Beschreibung:** Gibt eine Liste von Eigenschaften des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get RTF

**Syntax:** obj << Get RTF( <format> )

**Beschreibung:** Gibt eine Zeichenkette mit dem RTF-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Syntax:** rs = obj << Get Row States( <dt> )

**Beschreibung:** Gibt einen Vektor mit der Zeileneigenschaft für jede Zeile in der vorgegebenen Datentabelle oder der aktuellen Datentabelle zurück. Die Zeileneigenschaften können aus der Tabelle oder aus dem Filterkontext des Felds kommen.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**Syntax:** obj << Get Show Window

**Beschreibung:** Gibt die Sichtbarkeit des Fensters zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**Syntax:** width,height = obj << Get Size

**Beschreibung:** Gibt die Größe des Anzeigefensters zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**Syntax:** x,y = obj << Get Stretch

**Beschreibung:** Gibt die Streckungs-Flags für dieses Anzeigefeld in horizontaler und vertikaler Richtung zurück.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box(
			Size( 20, 20 ),
			Color( "Light Red" ),
			<<Set Stretch( "Fill", "Off" )
		)
	)
);
spacer << Get Stretch();

```

### Get Text

**Syntax:** obj << Get Text

**Beschreibung:** Gibt eine Zeichenkette mit dem Text des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get User Resizable

**Syntax:** obj << User Resizable;

obj << Get User Resizable

**Beschreibung:** Wenn die Feldgröße vom Benutzer geändert werden kann, ändert sich der Cursor am unteren und rechten Rand, um die Größenänderung per Drag & Drop zuzulassen.

```jsl

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
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Get Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** width = obj << Get Width

**Beschreibung:** Gibt die Breite des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**Syntax:** obj << Get Window Icon

**Beschreibung:** Gibt das Fenstersymbol zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj << Get Window Position

**Beschreibung:** Gibt die Position des Fensters zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj << Get Window Size

**Beschreibung:** Gibt die Größe des Fensters zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj << Get Window Title

**Beschreibung:** Gibt den Fenstertitel zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj << Get Window View

**Beschreibung:** Gibt die aktuelle Fensteransicht zurück. Fenster können „sichtbar“, „unsichtbar“ oder „privat“ sein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Beschreibung:** Ruft den Anzeigebaum im XML-Format ab. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, die bei einigen Anzeigebäumen sehr groß sein können.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**Syntax:** x,y = obj << GetOffset

**Beschreibung:** Gibt den Offset dieses Anzeigefelds relativ zum übergeordneten Feld zurück. Sie müssen möglicherweise die <<übergeordnete Meldung in einer Schleife verwenden, um mehrere Offsets zu akkumulieren.

```jsl

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]
					 + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**Syntax:** obj << Inval

**Beschreibung:** Das Anzeigefeld ungültig machen. Das Fenster wird aktualisiert, wenn die Meldung <<UpdateWindow gesendet wird oder das Betriebssystem Zeit für die Aktualisierung hat.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**Syntax:** obj << Is Dirty

**Beschreibung:** Ruft den Dokumentstatus „modifiziert“ ab. 1 bedeutet, das Dokument wurde geändert und eine Aufforderung zum Speichern wird angezeigt, 0 bedeutet, das Dokument wurde nicht geändert.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj << Is Modal Dialog

**Beschreibung:** Gibt „wahr“ zurück, wenn das Fenster ein modales Dialogfeld ist. Nur nützlich bei Aufruf aus einem Fenster-Handler-Rückruf.

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**Syntax:** obj << Journal

**Beschreibung:** Wandelt ein Anzeigefeld in ein Journal um.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**Syntax:** obj << Journal Window

**Beschreibung:** Öffnet ein Journalfenster des Fensters.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj << Launch

**Beschreibung:** Wertet das vorgegebene argument im Kontext des Anzeigefelds aus.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Syntax:** rs = obj << Make RowState Handler( <dt>, function(a) )

**Beschreibung:** Erstellt einen Zeileneigenschafts-Handler für die vorgegebene Datentabelle oder die aktuelle Datentabelle. Die Funktion wird aufgerufen, wenn sich die Zeileneigenschaften im Filterkontext des Felds ändern. Das Argument der Funktion enthält die geänderten Zeilennummern oder -1, wenn sich der Zeileneigenschaftsfilter geändert hat.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**Syntax:** obj << Margin( sides );

sides = obj << Get Margin

**Beschreibung:** Der Rand fügt Platz zwischen dem Rahmen des Felds und benachbarten Feldern hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Rand.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Syntax:** obj << Maximize Window( <state=0|1> )

**Beschreibung:** Maximiert das Fenster. Das Standardargument ist 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**Syntax:** obj << Minimize Window( <state=0|1> )

**Beschreibung:** Minimiert das Fenster. Das Standardargument ist 1.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**Syntax:** obj << Move Window( x,y )

**Beschreibung:** Verschiebt das Fenster an die angegebene Position.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj << Next

**Beschreibung:** Gibt das Anzeigefeld nach diesem Anzeigefeld zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**Syntax:** obj << On Close( script )

**Beschreibung:** Legt ein Skript oder eine Funktion fest, das bzw. die beim Schließen des Fensters ausgeführt wird. Dieses Skript muss 1 zurückgeben, um das Schließen zu gestatten, oder 0, um zu verhindern, dass das Fenster geschlossen wird.

**Funktion beim Schließen**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

**Skript beim Schließen**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

### Optimize Display

**Syntax:** obj << Optimize Display

**Beschreibung:** Legt für die Spaltenbreiten und das Fenster der Datentabelle eine optimale Größe fest.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj << Pad Window( bool )

**Beschreibung:** Schaltet die Fensteranpassung ein oder aus.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**Syntax:** obj << Padding( sides );

sides = obj << Get Padding

**Beschreibung:** Der Innenabstand fügt Platz zwischen dem Inhalt und dem Rahmen des Felds hinzu. Verwenden Sie benannte Argumente oder geben Sie eine Liste mit Werten an. Wird ein einziger Wert angegeben, gilt dieser für alle Seiten. Werden zwei Werte angegeben, gelten diese für den horizontalen und vertikalen Innenabstand.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Syntax:** obj << Page Break

**Beschreibung:** Fügt einen Seitenumbruch vor dem Anzeigefeld ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**Syntax:** obj << Parent

**Beschreibung:** Gibt das übergeordnete Element dieses Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**Syntax:** obj << Prepend( db2 )

**Beschreibung:** Fügt db2 vor db in den Anzeigebaum ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Syntax:** obj << Prev Sib

**Beschreibung:** Gibt das vorherige Geschwisterelement des Anzeigefelds zurück.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**Syntax:** obj << Print Window

**Beschreibung:** Druckt das Fenster.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**Syntax:** obj << Reshow

**Beschreibung:** Das Anzeigefeld ungültig machen und das Fenster mit dem neuen Inhalt aktualisieren. Wenn eine bessere Zeitsteuerung der Aktualisierung erforderlich ist, sehen Sie die Meldungen <<Inval und <<UpdateWindow.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**Syntax:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**Beschreibung:** Speichert einen Screenshot des Anzeigefelds im angegebenen path. Ist kein path vorgegeben, wird das Fenster „Speichern unter“ angezeigt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Syntax:** obj << Save HTML( <pathname>, <format> )

**Beschreibung:** Speichert HTML-Quellcode und Ordner der Grafiken im angegebenen format.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Syntax:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**Beschreibung:** Speichert das interaktive HTML-Format mit Daten in einer Datei. Das Argument Boolean stellt den Bericht als statisch dar.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Syntax:** obj << Save Journal( <pathname> )

**Beschreibung:** Speichert den Journal-Quellcode des Anzeigefelds.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Syntax:** obj << Save MSWord( <pathname>, <format> )

**Beschreibung:** Speichert das Anzeigefeld als Microsoft Word-Dokcument. (Nur Windows)

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Syntax:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**Beschreibung:** Speichert eine PDF des Anzeigefelds.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Syntax:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Beschreibung:** Speichert ein Bild des Anzeigefelds. Unterstützte Formate sind EMF (Windows), PICT (Macintosh), JPEG oder JPG, GIF oder PNB. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

**Ansicht und Erscheinungsbild**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture(
	"$TEMP/jmp_example_screen.png",
	"png",
	View( "Screen" ),
	Appearance( "Current" )
);
rbiv << Save Picture(
	"$TEMP/jmp_example_print.png",
	"png",
	View( "Print" ),
	Appearance( "Default" )
);
New Window( "Example",
	H List Box(
		New Image( "$TEMP/jmp_example_screen.png" ),
		New Image( "$TEMP/jmp_example_print.png" )
	)
);

```

**Skalieren**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

**Standard**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

### Save Presentation

**Syntax:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**Beschreibung:** Speichert die Tabellen und Graphen des Anzeigefelds in einer Präsentation. Die Präsentation kann mit Microsoft PowerPoint oder anderer Präsentationssoftware geöffnet werden.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Syntax:** obj << Save RTF( <pathname>, <format> )

**Beschreibung:** Speichert den RTF-Quellcode mit Grafiken im angegebenen format.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Syntax:** obj << Save Text( <pathname>, <format> )

**Beschreibung:** Gibt eine Datei mit dem Text des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Beschreibung:** Speichert das aktuelle Berichtsfenster in einer JMP-Berichtsdatei (*.jrp).

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Syntax:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**Beschreibung:** Passt die Bildlaufleiste des Fensters an, um das vorgegebene Anzeigefeld in die Ansicht zu bringen, oder führt einen Bildlauf über eine relative Anzahl von Pixeln durch oder blättert zu einer absoluten Pixelposition. Anstelle einer Anzahl von Pixeln können die Schlüsselwörter "Start" oder "End" verwendet werden.

**Absolute**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

**Box**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

**Relative**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**Syntax:** obj << Select

**Beschreibung:** Dieses Objekt für die Verwendung mit Befehlen aus dem Menü „Bearbeiten“ auswählen.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj << Set Content Size( x,y )

**Beschreibung:** Legt die Inhaltsgröße innerhalb des Fensters fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**Syntax:** obj << Set Dirty

**Beschreibung:** Legt den Dokumentstatus „modifiziert“ fest. Bei 0 wird keine Aufforderung zum Speichern angezeigt, bei 1 wird die Aufforderung angezeigt.

**JMP Version hinzugefügt:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj << Set Height( width )

**Beschreibung:** Legt die Höhe des Anzeigefelds fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**Syntax:** obj << Set Main Window

**Beschreibung:** Fenster als Hauptfenster in JMP festlegen und bisheriges Hauptfenster als normales Fenster festlegen.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj << Set Max Size( width,height )

**Beschreibung:** Legt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**Syntax:** obj << Set Min Size( width,height )

**Beschreibung:** Legt die Mindestgröße dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**Syntax:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**Beschreibung:** Legt die Informationen für die Seiteneinrichtung fest, die beim Drucken oder Speichern als PDF verwendet werden. Ein Inhaltsverzeichnis kann optional aus Gliederungsfeldern erstellt werden.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Syntax:** obj << Set Print Footers( left footer, center footer, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Fußzeile für den Ausdruck fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**Syntax:** obj << Set Print Headers( left header, center header, right header )

**Beschreibung:** Legt die linke, mittlere und rechte Kopfzeile für den Ausdruck fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**Syntax:** obj << Set Property( "property", value )

**Beschreibung:** Legt den Wert für die benannte property für das Anzeigefeld fest.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj << Set Report Title( "string" )

**Beschreibung:** Ändert den Berichtstitel.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Syntax:** obj << Set Stretch( x,y )

**Beschreibung:** Legt das horizontale und vertikale Streckverhalten des Felds fest. Felder, die mit Window gestreckt werden, werden in der Größe geändert, wenn sich die Größe des Fensters oder Fensterbereichs ändert. Felder, die mit Fill gestreckt werden, werden so gestreckt, dass sie den verfügbaren Raum in ihrem Container füllen. Felder, bei denen für das Strecken Off ausgewählt ist, werden im Allgemeinen nicht gestreckt. Für die meisten Felder ist standardmäßig Neutral festgelegt, was bedeutet, dass sie ihr Verhalten anhand ihrer untergeordneten Felder bestimmen.

**JMP Version hinzugefügt:** 16

**Mit Fenster strecken**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

**Strecken zum Füllen**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

### Set Summary Behavior

**Syntax:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Beschreibung:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Syntax:** obj << Set Width( width )

**Beschreibung:** Legt die Breite des Anzeigefelds fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**Syntax:** obj << Set Window Icon( icon name )

**Beschreibung:** Legt das Fenstersymbol fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj << Set Window Size( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj << Set Window Title( "string" )

**Beschreibung:** Ändert den Fenstertitel.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Syntax:** obj << Show Properties

**Beschreibung:** Zeigt einen Eigenschaftseditor für Anzeigefelder an

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**Syntax:** obj << Show Tree Structure

**Beschreibung:** Zeigt eine hierarchische Baumstruktur des Anzeigefelds und der zugehörigen Knoten an.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**Syntax:** obj << Show Window( state=0|1 )

**Beschreibung:** Blendet das Fenster ein oder aus. Dies ist nützlich, um Fenster kurzzeitig auszublenden. Standardmäßig ein.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**Syntax:** obj << Sib

**Beschreibung:** Gibt das Geschwisterelement des Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**Syntax:** obj << Sib Append( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt nach diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append(
	Text Box( "============ after ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Syntax:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**Beschreibung:** Fügt direkt vor diesem Anzeigefeld ein Anzeigefeld hinzu.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Syntax:** obj << Size Window( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**Syntax:** obj << Text Color( color );

color = obj << Get Text Color

**Beschreibung:** Der Text wird in der Textfarbe dargestellt, sofern eine festgelegt ist. Ist die Eigenschaft nicht festgelegt, erbt das Feld die Textfarbe des Containerfelds.

**JMP Version hinzugefügt:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**Syntax:** obj << Top Parent

**Beschreibung:** Gibt das übergeordnete Stammelement dieses Anzeigefelds zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**Syntax:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**Syntax:** obj << Update Window

**Beschreibung:** Aktualisieren Sie das Fenster mit dem Anzeigefenster, falls dieses ungültig gemachte Bereiche enthält. Die Meldung <<Inval erzeugt ungültig gemachte Bereiche.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### User Resizable

**Syntax:** obj << User Resizable;

obj << Get User Resizable

**Beschreibung:** Wenn die Feldgröße vom Benutzer geändert werden kann, ändert sich der Cursor am unteren und rechten Rand, um die Größenänderung per Drag & Drop zuzulassen.

```jsl

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
New Window( "resize",
	H Splitter Box(
		Size( 600, 200 ),
		tree = Tree Box( {root1, root2} ),
		scroll = Scroll Box(
			Size( 300, 200 ),
			Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) )
		)
	)
);
tree << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
scroll << Set Stretch( "Window", "Window" ) << Set Max Size( 10000, 10000 );
Wait( 2 );
tree << User Resizable( {0, 0} );
scroll << User Resizable( {0, 0} );

```

### Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Syntax:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**Beschreibung:** Die Sichtbarkeit legt fest, ob ein Feld angezeigt wird und ob es Platz benötigt. Der Standardwert "Visible" bedeutet, dass das Objekt angezeigt wird. Ein Objekt vom Typ "Hidden" wird nicht angezeigt, benötigt jedoch trotzdem Platz, während ein Feld vom Typ "Collapsed" keinen Platz im Layout benötigt.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**Syntax:** obj << Window Class Name

**Beschreibung:** Gibt den Namen der Fensterklasse für das Anzeigefenster zurück.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**Syntax:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**Beschreibung:** Wendet einen XPath-Ausdruck auf die XML-Darstellung des Anzeigebaums an und gibt die Ergebnisse zurück. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, was für die Leistung sinnvoll ist, wenn Ihre Abfrage nur auf Feldattributen basiert.

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj << Zoom Window

**Beschreibung:** Ändert die Größe des Fensters, so dass es groß genug ist, um seinen gesamten Inhalt anzuzeigen.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

