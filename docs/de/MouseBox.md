# MouseBox



### Add Line Annotation

**Syntax:** obj << Add Line Annotation

**Beschreibung:** Fügt im Vordergrund des Anzeigefensters eine Linie ein.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**Syntax:** obj << Child

**Beschreibung:** Gibt das untergeordnete Element des Anzeigefelds zurück.

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**Syntax:** obj << Copy Data

**Beschreibung:** Kopiert die mit Tabstopp getrennten Daten aus einer Matrix oder Tabelle in die Zwischenablage.

```js

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**Syntax:** obj << Copy Graph

**Beschreibung:** Legt ein Bild des Graphen und der Achsen in der Zwischenablage ab.

```js

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

```js

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

```js

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

```js

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

```js

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

### Find

**Syntax:** obj << Find

**Beschreibung:** Gibt das Anzeigefeld mit dem vorgegebenen argument zurück

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

### Get HTML

**Syntax:** obj << Get HTML( <format> )

**Beschreibung:** Gibt eine Zeichenkette mit dem HTML-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**Beispiel 2**

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**Syntax:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**Beschreibung:** Erfasst db als ein Bildobjekt. Das optionale Argument Scale stellt das Bild mit einer skalierten Auflösung dar. Für die Skalierung ist es erforderlich, dass das Anzeigefeld streckbar ist. Das Argument Type legt fest, ob das Ergebnis ein skalierbares Vektorbild oder ein Bitmap ist. Standardmäßig wird ein skalierbares Bild zurückgegeben, das sich zum Speichern in Vektorformaten wie PDF eignet. Die Option View ändert das Verhalten einiger Felder. Die Standardoption "Picture" zeichnet den Bericht wie beim Export in ein Bildformat, wobei Bereiche mit Bildlauf vollständig gezeigt werden. Der Ansichtsmodus "Screen" zeichnet den Bericht wie er auf dem Bildschirm gezeigt wird, und "Print" zeichnet den Bericht wie beim Drucken, ohne die Seiteneinrichtungsfunktionen. Die Option SubRect erfasst einen Teil des resultierenden Bildes, statt eines vollständigen Bildes. Die Option Appearance kann von den "Default"-Ausgabefarben zu den "Current" Farben wie auf dem Bildschirm angezeigt wechseln. Die Optionen View, SubRect und Appearance werden nur bei Type "Bitmap" unterstützt.

**Ansicht und Erscheinungsbild**

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

**Standard**

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

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

### Get RTF

**Syntax:** obj << Get RTF( <format> )

**Beschreibung:** Gibt eine Zeichenkette mit dem RTF-Quellcode des Anzeigefelds zurück.

**Beispiel 1**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**Beispiel 2**

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

### Get Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**Syntax:** width = obj << Get Width

**Beschreibung:** Gibt die Breite des Anzeigefelds zurück.

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**Syntax:** obj << Get Window Position

**Beschreibung:** Gibt die Position des Fensters zurück.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**Syntax:** obj << Get Window Size

**Beschreibung:** Gibt die Größe des Fensters zurück.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**Syntax:** obj << Get Window Title

**Beschreibung:** Gibt den Fenstertitel zurück.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**Syntax:** obj << Get Window View

**Beschreibung:** Gibt die aktuelle Fensteransicht zurück. Fenster können „sichtbar“, „unsichtbar“ oder „privat“ sein.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**Syntax:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**Beschreibung:** Ruft den Anzeigebaum im XML-Format ab. Standardmäßig werden Zeichenketten in der Landessprache zurückgegeben, und die XML enthält Datenwerte in einigen Feldern. Verwenden Sie die Option English, um englische Zeichenketten zurückzugeben, sofern verfügbar. Verwenden Sie die Option NoData, um die Datenwerte in den Feldern wegzulassen, die bei einigen Anzeigebäumen sehr groß sein können.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetChildBox

**Syntax:** GetChildBox( { x, y } | [ x y ] | x, y )

**Beschreibung:** Gibt eine Liste von null oder mehr verschachtelten Anzeigefeldern zurück: { untergeordnetes Element, unter-untergeordnetes Element, unter-unter-untergeordnetes Element, ... } an den angegebenen Koordinaten innerhalb dieses Mausfelds.  In vielen Fällen kann es einfacher sein, ein getrenntes Mausfeld um jedes untergeordnete Element herum zu verwenden.

```js

Names Default To Here( 1 );
New Window( "MouseBox",
	Text Box( "Move the mouse around" ),
	MouseBox(
		Lineup Box( N Col( 2 ), 
            /*pre-load the spacer boxes with a color, but make them transparent as well so the color won't show*/
			s1 = Spacer Box( size( 50, 50 ), <<Color( "red" ), <<SetFill( 0 ) ),
			s2 = Spacer Box( size( 50, 50 ), <<Color( "green" ), <<SetFill( 0 ) ),
			s3 = Spacer Box( size( 50, 50 ), <<Color( "blue" ), <<SetFill( 0 ) ),
			Lineup Box( N Col( 2 ), 
                /*demonstrate nested boxes*/
				s4 = Spacer Box( size( 24, 24 ), <<Color( "red" ), <<SetFill( 0 ) ),
				s5 = Spacer Box( size( 24, 24 ), <<Color( "green" ), <<SetFill( 0 ) ),
				s6 = Spacer Box( size( 24, 24 ), <<Color( "blue" ), <<SetFill( 0 ) ),
				s7 = Spacer Box( size( 24, 24 ), <<Color( "yellow" ), <<SetFill( 0 ) )
			)
		), 
        /*set up a callback function to track the mouse movements*/
		<<SetTrackEnable( 1 ),
		<<SetTrack(
			Function( {this, clickpt}, /*clickpt is really the move point*/
/*on each mouse move, make children transparent*/
				s1 << setfill( 0 );
				s2 << setfill( 0 );
				s3 << setfill( 0 );
				s4 << setfill( 0 );
				s5 << setfill( 0 );
				s6 << setfill( 0 );
				s7 << setfill( 0 );
                /*retrieve a list of boxes under the clickpt (which is a mouse coordinate within the mouse box like {10,20})*/
				childBoxList = this << GetChildBox( clickpt );
                /* child 1 is the LineupBox.  child 2, if present, is one of the Spacer Boxes */
				If(
					N Items( childBoxList ) > 0 & (childBoxList[N Items( childBoxList )]) <<
					className == "SpacerBox", 
                    /*if a SpacerBox is under the mouse, make it opaque*/
					childBoxList[N Items( childBoxList )] << SetFill( 1 )
				);
			)
		)
	)
);

```

### GetClick

**Syntax:** obj << GetClick

**Beschreibung:** Gibt die Funktion von <<SetClick zurück.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setClick( Function( {this, clickPt, event}, Print( 42 ) ) );
mb << getClick();

```

### GetClickEnable

**Syntax:** obj << GetClickEnable

**Beschreibung:** Meldet den von SetClickEnable festgelegten Wert.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setClickEnable( 1 );
mb << getClickEnable();

```

### GetDefaultCursor

**Syntax:** obj << GetDefaultCursor

**Beschreibung:** Ruft den von SetDefaultCursor angegebenen Wert ab.

### GetDefaultCursorEnable

**Syntax:** obj << GetDefaultCursorEnable

**Beschreibung:** Ruft den von SetDefaultCursorEnable angegebenen Wert ab.

### GetDestBox

**Syntax:** obj << GetDestBox

### GetDragBegin

**Syntax:** obj << GetDragBegin

**Beschreibung:** Gibt die von <<SetDragBegin angegebene Funktion zurück.

### GetDragEnable

**Syntax:** obj << GetDragEnable

**Beschreibung:** Fragen, ob das Mausfeld gegenwärtig Quelle von Drag-&-Drop-Vorgängen sein darf.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << GetDragEnable;

```

### GetDragEnd

**Syntax:** obj << GetDragEnd

**Beschreibung:** Gibt die von <<SetDragEnd angegebene Funktion zurück.

### GetDragText

**Syntax:** obj << GetDragText

**Beschreibung:** Wird normalerweise nicht benötigt.  Gibt den von SetDragText gelieferten Text zurück, bei dem es sich um einen anderen Text handeln kann, als den, der an den Ablagepunkt gesendet wurde.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );
mb << getDragText;

```

### GetDropCommit

**Syntax:** obj << GetDropCommit

**Beschreibung:** Gibt die von <<SetDropCommit festgelegte Funktion zurück.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropCommit( Function( {this, clickPt, text}, Print( 42 ) ) );
mb << getDropCommit();

```

### GetDropEnable

**Syntax:** obj << GetDropEnable

**Beschreibung:** Meldet den von <<SetDropEnable gespeicherten Wert.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );
mb << getDropEnable();

```

### GetDropTrack

**Syntax:** obj << GetDropTrack

**Beschreibung:** Gibt die von <<SetDropTrack festgelegte Funktion zurück.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropTrack( Function( {this, clickPt}, Print( 42 ) ) );
mb << getDropTrack();

```

### GetEdit

**Syntax:** obj << GetEdit

### GetEditClear

**Syntax:** obj << GetEditClear( state=0|1 )

### GetEditCopy

**Syntax:** obj << GetEditCopy( state=0|1 )

### GetEditCopyLabel

**Syntax:** obj << GetEditCopyLabel( state=0|1 )

### GetEditCopyText

**Syntax:** obj << GetEditCopyText( state=0|1 )

### GetEditCut

**Syntax:** obj << GetEditCut( state=0|1 )

### GetEditEnable

**Syntax:** obj << GetEditEnable

### GetEditJournal

**Syntax:** obj << GetEditJournal( state=0|1 )

### GetEditPaste

**Syntax:** obj << GetEditPaste( state=0|1 )

### GetEditPasteJSL

**Syntax:** obj << GetEditPasteJSL( state=0|1 )

### GetEditPasteLabel

**Syntax:** obj << GetEditPasteLabel( state=0|1 )

### GetEditSaveSelectionAs

**Syntax:** obj << GetEditSaveSelectionAs( state=0|1 )

### GetEditSubmit

**Syntax:** obj << GetEditSubmit( state=0|1 )

### GetEditSubmitDebug

**Syntax:** obj << GetEditSubmitDebug( state=0|1 )

### GetFocus

**Syntax:** obj << GetFocus

### GetKey

**Syntax:** obj << GetKey

**Beschreibung:** Gibt die von Set Key festgelegte Funktion zurück.

```js

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;
Show( mb << GetKey );

```

### GetKeyEnable

**Syntax:** obj << GetKeyEnable

### GetMark

**Syntax:** obj << GetMark

**Beschreibung:** Ruft den von <<SetMark angegebenen Wert ab.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );
mb << GetMark;

```

### GetMarkEnable

**Syntax:** obj << GetMarkEnable

**Beschreibung:** Ruft den von <<SetMarkEnable festgelegten Wert ab.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();

```

### GetMarked

**Syntax:** obj << GetMarked

**Beschreibung:** Gibt das aktuelle Markierungsflag zurück.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();
mb << getMarked();

```

### GetOffset

**Syntax:** x,y = obj << GetOffset

**Beschreibung:** Gibt den Offset dieses Anzeigefelds relativ zum übergeordneten Feld zurück. Sie müssen möglicherweise die <<übergeordnete Meldung in einer Schleife verwenden, um mehrere Offsets zu akkumulieren.

```js

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

### GetSourceBox

**Syntax:** obj << GetSourceBox

### GetToolTip

**Syntax:** obj << GetToolTip

**Beschreibung:** Wird normalerweise nicht benötigt.  Gibt den Text zurück, der von SetTooltip bereitgestellt wird.  Tooltipps sind automatisch und brauchen diese Meldung nicht.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );
mb << getTooltip;

```

### GetTrack

**Syntax:** obj << GetTrack

**Beschreibung:** Ruft den von <<SetTrack angegebenen Wert ab.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrack(/*track the button-up mouse movement*/Function( {this, clickPt},
		Print( 42 )
	)
);
mb << getTrack();

```

### GetTrackEnable

**Syntax:** obj << GetTrackEnable

**Beschreibung:** Ruft den von <<SetTrackEnable festgelegten Wert ab.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setTrackEnable( 1 );
mb << getTrackEnable();

```

### GetUserData

**Syntax:** obj << GetUserData

**Beschreibung:** Ruft den von <<SetUserData gespeicherten Wert ab.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setUserData( [1 2, 3 4] );
(mb << getUserData())[2, 1];

```

### Horizontal Alignment

**Syntax:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**Beschreibung:** Die horizontale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```js

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

```js

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

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**Syntax:** obj << Is Modal Dialog

**Beschreibung:** Gibt „wahr“ zurück, wenn das Fenster ein modales Dialogfeld ist. Nur nützlich bei Aufruf aus einem Fenster-Handler-Rückruf.

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**Syntax:** obj << Launch

**Beschreibung:** Wertet das vorgegebene argument im Kontext des Anzeigefelds aus.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Mouse Box

**Syntax:** box = MouseBox( displayBoxArgs )

**Beschreibung:** Gibt ein Feld zurück, das JSL-Rückrufe für Mausaktionen durchführen kann.

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

### Move Window

**Syntax:** obj << Move Window( x,y )

**Beschreibung:** Verschiebt das Fenster an die angegebene Position.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**Syntax:** obj << Next

**Beschreibung:** Gibt das Anzeigefeld nach diesem Anzeigefeld zurück.

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**Syntax:** obj << Pad Window( bool )

**Beschreibung:** Schaltet die Fensteranpassung ein oder aus.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### RemoveFocus

**Syntax:** obj << RemoveFocus

### Reshow

**Syntax:** obj << Reshow

**Beschreibung:** Das Anzeigefeld ungültig machen und das Fenster mit dem neuen Inhalt aktualisieren. Wenn eine bessere Zeitsteuerung der Aktualisierung erforderlich ist, sehen Sie die Meldungen <<Inval und <<UpdateWindow.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Syntax:** obj << Save Window Report( pathname, <embed data(0|1)> )

**Beschreibung:** Speichert das aktuelle Berichtsfenster in einer JMP-Berichtsdatei (*.jrp).

**JMP Version hinzugefügt:** 16

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**Syntax:** obj << Set Content Size( x,y )

**Beschreibung:** Legt die Inhaltsgröße innerhalb des Fensters fest.

```js

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

```js

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**Syntax:** obj << Set Height( width )

**Beschreibung:** Legt die Höhe des Anzeigefelds fest.

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**Syntax:** obj << Set Max Size( width,height )

**Beschreibung:** Legt die maximale Größe dieses Anzeigefelds zum Zweck der automatischen Streckung fest.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Syntax:** obj << Set Report Title( "string" )

**Beschreibung:** Ändert den Berichtstitel.

```js

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

```js

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

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Syntax:** obj << Set Window Size( x,y )

**Beschreibung:** Legt die Größe des Fensters fest.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Syntax:** obj << Set Window Title( "string" )

**Beschreibung:** Ändert den Fenstertitel.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### SetClick

**Syntax:** obj << SetClick( Function( {this, clickpt, event}, <script> ) )

**Beschreibung:** Liefert eine Funktion, um Mausereignisse zu verarbeiten, wenn die Maustaste gedrückt ist (oder zuerst gedrückt und dann losgelassen wird). Für die Handhabung bei nicht gedrückter Maustaste siehe <<SetTrack(). clickpt ist eine {x,y}-Position innerhalb dieses Mausfelds, die angeklickt wurde. event ist das Klickereignis. Werte sind (in der Reihenfolge, in der sie auftreten): „Gedrückt“, „Angeklickt“ oder „Losgelassen“.

```js

Names Default To Here( 1 );
xsize = 300; /* size of the bitmap */
ysize = 200;
backred = .8; /* background color is light gray-green */
backgrn = .9;
backblu = .8;
RED = J( ysize, xsize, backred ); /* matrix where the bitmap is composed */
GRN = J( ysize, xsize, backgrn );
BLU = J( ysize, xsize, backblu );
BITMAP = New Image( xsize, ysize ); /* displaybox that holds the bitmap */
BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* initialize bitmap */
drawline = Function( {x0, y0, x1, y1}, /* utility function to draw a line in an array using matrix operations */
	{dx = x1 - x0, dy = y1 - y0, adx = Abs( dx ), ady = Abs( dy ), m, b},
	If( adx > ady,
		xx = Round( x0 ) :: Round( x1 );
		m = dy / dx;
		b = y0 - m * x0;
		yy = Round( xx * m + b );
	,
		yy = Round( y0 ) :: Round( y1 );
		m = dx / dy;
		b = x0 - m * y0;
		xx = Round( yy * m + b );
	);
	singleindex = (yy - 1) * N Col( GRN ) + xx;
	Try( GRN[singleindex] = .6, 0 ); /* catch indexing errors and ignore the problems */
	Try( RED[singleindex] = .1, 0 ); /* the line is dark green; you could add other */
	Try( BLU[singleindex] = .1, 0 ); /* controls to change the color. */
);
w = New Window( "paint",
	MouseBox( /* <<<<<<<< handler for mouse events */
		BITMAP, /* <<<<<< child box does not receive the mouse events */
		<<setTrackEnable( 1 ),
		<<setTrack(
			Function( {this, clickpt},
				this << setCursor( "Hand" ) /* button-up tracking - use the hand */
			)
		),
		<<setClickEnable( 1 ),
		<<setClick( /* button-down, move, button-release handler */
			Function( {this, clickpt, event}, /*Is Alt Key(),Is Control Key(),Is Shift Key() should be captured on "Pressed" */
				If( event == "Released" | event == "Canceled",
					this << setCursor( "Hand" ) /* switch back to hand immediately */
				,
					this << setCursor( "Finger" ) /* change cursor during drawing */
				);
				If(
					event == "Pressed",
						origin = clickpt; /* capture starting point */
						Show( event, origin );,
					event == "Moved", /* else */
						{x0, y0} = origin;
						{x1, y1} = clickpt; /* draw to new point */
						drawline( x0, y0, x1, y1 );
						drawline( x0 + 1, y0, x1 + 1, y1 ); /* make a thick line */
						drawline( x0 - 1, y0, x1 - 1, y1 );
						drawline( x0, y0 + 1, x1, y1 + 1 );
						drawline( x0, y0 - 1, x1, y1 - 1 );
						origin = clickpt;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* apply changes to bitmap */
						w << reshow; /* force screen update */
				,
					event == "Ticked", /* else ... while the button is pressed but not moving, the tick event will let you do something...here we fade the drawing... */
						GRN = (49 * GRN + backgrn) / 50;
						RED = (49 * RED + backred) / 50;
						BLU = (49 * BLU + backblu) / 50;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} );
						w << reshow;
				);
			)
		)
	)
);

```

### SetClickEnable

**Syntax:** obj << SetClickEnable( state=0|1 )

**Beschreibung:** Aktiviert das Mausfeld für die Handhabung der Vorgänge „Maustaste gedrückt“, „Maus bewegt“, „Maustaste losgelassen“ über die Funktion <<SetClick.

### SetCursor

**Syntax:** obj << SetCursor( "Pfeil"|"NS"|"OW"|"NWSO"|"NOSW"|"Finger"|"Hand" )

**Beschreibung:** <<SetCursor("Hand") (oder Finger oder Pfeil oder NS OW NWSO NOSW) legt den Mauszeiger fest. Zu verwenden bei einer Funktion <<SetTrack oder <<SetClick.

```js

Names Default To Here( 1 );
New Window( "roll over demo",
	MouseBox(
		Text Box( "hello" ),
		<<setTrackEnable( 1 ),
		<<settrack(
			Function( {this, pos},
				(this << child) << FontColor( If( pos[1] >= 0, "red", "black" ) )
			)
		),
		<<setDefaultCursor( "Finger" )
	),
	MouseBox(
		Text Box( "there" ),
		<<setToolTip( "Special!" ),
		<<setTrackEnable( 1 ),
		<<settrack( Function( {this, pos}, this << setCursor( "Hand" ) ) )
	)
);

```

### SetDefaultCursor

**Syntax:** obj << SetDefaultCursor( "Pfeil"|"NS"|"OW"|"NWSO"|"NOSW"|"Finger"|"Hand" )

**Beschreibung:** Gibt den standardmäßig anzuzeigenden Mauszeiger an, wenn SetDefaultCursorEnable(1) auch angegeben ist; mögliche Werte: Pfeil, NS, OW, NWSO, NOSW, Finger oder Hand.  Im Gegensatz zu SetCursor, das über ein SetTrack-Skript verwendet wird, funktioniert SetDefaultCursor ohne Skript.

```js

Names Default To Here( 1 );
clickFunction = Function( {this, pos, action},
	If(
		action == "Pressed", oldPos = pos,
		action == "Moved",
			dx = pos[1] - oldPos[1];
			dy = pos[2] - oldPos[2];
			oldPos = pos;
			{tops, lefts, rights, bottoms} = this << getUserData();
			If(
				N Items( tops ) > 0 & 0 < ((border << getTop()) + dy) & (((boxes[tops[1]] <<
				child) << getTop) - dy) > 0,
				border << top( (border << getTop()) + dy );
				For( i = 1, i <= N Items( tops ), i++,
					(boxes[tops[i]] << child) << top(
						((boxes[tops[i]] << child) << getTop) - dy
					)
				);
			);
			If(
				N Items( bottoms ) > 0 & 0 < ((border << getBottom()) - dy) & (((boxes[
				bottoms[1]] << child) << getBottom) + dy) > 0,
				border << bottom( (border << getBottom()) - dy );
				For( i = 1, i <= N Items( bottoms ), i++,
					(boxes[bottoms[i]] << child) << bottom(
						((boxes[bottoms[i]] << child) << getBottom) + dy
					)
				);
			);
			If(
				N Items( lefts ) > 0 & 0 < ((border << getLeft()) + dx) & (((boxes[lefts[1]]
				 << child) << getLeft) - dx) > 0,
				border << Left( (border << getLeft()) + dx );
				For( i = 1, i <= N Items( lefts ), i++,
					(boxes[lefts[i]] << child) << Left(
						((boxes[lefts[i]] << child) << getLeft) - dx
					)
				);
			);
			If(
				N Items( rights ) > 0 & 0 < ((border << getRight()) - dx) & (((boxes[rights[1
				]] << child) << getRight) + dx) > 0,
				border << Right( (border << getRight()) - dx );
				For( i = 1, i <= N Items( rights ), i++,
					(boxes[rights[i]] << child) << Right(
						((boxes[rights[i]] << child) << getRight) + dx
					)
				);
			);,
		action == "Released", 0,
		action == "Ticked",
			((this << child) << child) << settext(
				Char( Num( ((this << child) << child) << gettext() ) + 1 )
			)
	)
);
mb = Function( {boxNumber, cursor, TopLeftRightBottom},
	MouseBox(
		Border Box( sides( 15 ), Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ),
			Text Box( boxNumber )
		),
		<<setDefaultCursor( Eval( cursor ) ),
		<<setClickEnable( 1 ),
		<<SetClick( clickFunction ),
		<<SetUserData( TopLeftRightBottom )
	)
);
boxes = {};
bigBorder = 50;
New Window( "corner demo",
	border = Border Box( sides( 15 ), Left( bigBorder ), Right( bigBorder ), top( bigBorder ),
		bottom( bigBorder ),
		Lineup Box( N Col( 3 ), spacing( 10, 10 ),
			boxes[1] = mb( "1000", "NWSE", {{1, 2, 3}, {1, 4, 7}, {}, {}} ),
			boxes[2] = mb( "2000", "NS", {{1, 2, 3}, {}, {}, {}} ),
			boxes[3] = mb( "3000", "NESW", {{1, 2, 3}, {}, {3, 6, 9}, {}} ),
			boxes[4] = mb( "4000", "EW", {{}, {1, 4, 7}, {}, {}} ),
			boxes[5] = mb( "5000", "HAND", {{}, {}, {}, {}} ),
			boxes[6] = mb( "6000", "EW", {{}, {}, {3, 6, 9}, {}} ),
			boxes[7] = mb( "7000", "NESW", {{}, {1, 4, 7}, {}, {7, 8, 9}} ),
			boxes[8] = mb( "8000", "NS", {{}, {}, {}, {7, 8, 9}} ),
			boxes[9] = mb( "9000", "NWSE", {{}, {}, {3, 6, 9}, {7, 8, 9}} )
		)
	)
);

```

### SetDefaultCursorEnable

**Syntax:** obj << SetDefaultCursorEnable( state=0|1 )

**Beschreibung:** Aktiviert das Mausfeld, dass es den von SetDefaultCursor angegebenen Mauszeiger anzeigt.

### SetDragBegin

**Syntax:** obj << SetDragBegin( Function( {this, clickpt}, <script> ) )

**Beschreibung:** Liefert eine Funktion, die zu Beginn eines Drag-&-Drop-Vorgangs aufgerufen wird. Die Funktion kann den Ziehvorgang verhindern, indem sie 0.0 zurückgibt, oder sie kann die Ziehfunktion gestatten, indem sie entweder eine Zeichenkette zurückgibt (statt <<SetDragText zu verwenden) oder indem sie 1.0 zurückgibt (um <<SetDragText zu verwenden). clickpt ist eine {x,y}-Position innerhalb des Mausfelds, wo der Ziehvorgang begann.

```js

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragBegin( Function( {this, clickpt}, 1.0 /*always allow*/ ) );

```

### SetDragEnable

**Syntax:** obj << SetDragEnable( state=0|1 )

**Beschreibung:** Das Mausfeld kann Quelle eines Drag-&-Drop-Vorgangs sein.

```js

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Text Box( "drag me to a text editor" ),
		<<SetDragEnable( 1 ),
		<<SetDragText( "hello" )
	)
);

```

### SetDragEnd

**Syntax:** obj << SetDragEnd( Function( {this, clickpt, how}, <script> ) )

**Beschreibung:** Liefert eine Funktion, die am Ende eines Drag-&-Drop-Vorgangs aufgerufen wird. how meldet, wie der Vorgang endete, entweder „Verschieben“ oder „Ignorieren“. Wenn der Vorgang als „Verschieben“ endete, können Sie mit dieser Funktion den Startpunkt für den Ziehvorgang löschen. clickpt ist eine {x,y}-Position innerhalb des Mausfelds, wo der Ziehvorgang begann.

```js

Names Default To Here( 1 );
/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragEnd(
	Function( {this, clickpt, how},
		If( how == "move",
			(this << child) << delete/* example; probably not what you want */
		)
	)
);

```

### SetDragText

**Syntax:** obj << SetDragText

**Beschreibung:** Text angeben, den das Mausfeld an den Ablagepunkt sendet.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDragText( "1000 words" );

```

### SetDropCommit

**Syntax:** obj << SetDropCommit( Function( {this, clickpt, text}, <script> ) )

**Beschreibung:** Liefert eine Funktion, die zum Ende einer Drag-&-Drop-Abfolge hin aufgerufen wird, wenn das Ereignis „Maustaste loslassen“ auftritt. Die Festschreibefunktion empfängt den von der Quelle für den Ziehvorgang gelieferten text und kann ihn nach Bedarf verwenden, z. B. zum Festlegen des Inhalts eines Textfelds. clickpt ist eine {x,y}-Position innerhalb des Mausfelds, wo der Ziehvorgang endete.

```js

Names Default To Here( 1 );
/* See full example for <<SetDropTrack() */
mb = MouseBox();
mb << setDropCommit(
	Function( {this, clickPt, text},
		((this << child) << child) << setText( text );
		1;/* return code is ignored */
	)
);

```

### SetDropEnable

**Syntax:** obj << SetDropEnable( state=0|1 )

**Beschreibung:** Aktiviert, dass das Mausfeld Ablagevorgänge akzeptiert.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setDropEnable( 1 );

```

### SetDropTrack

**Syntax:** obj << SetDropTrack( Function( {this, clickpt}, <script> ) )

**Beschreibung:** Liefert eine Funktion, die aufgerufen wird, wenn ein Drag-&-Drop-Vorgang über das Mausfeld gezogen wird. Die gelieferte Funktion gibt 0.0 zurück, um die Ablage zu verhindern, bzw. 1.0, um die Ablage zu genehmigen. Die eigentliche Ablage geschieht erst mit Freigabe der Maustaste. Zu diesem Zeitpunkt wird die Funktion SetDropCommit aufgerufen, um einen Vorgang mit dem abgelegten Text durchzuführen, dies jedoch nur, wenn SetDropTrack 1.0 zurückgegeben hat. clickpt ist eine {x,y}-Position innerhalb des Mausfelds, wohin ein anderes Mausfeld gezogen wird. Es ist {-1, -1}, wenn der Ziehvorgang nicht im Mausfeld this stattfindet.

```js

Names Default To Here( 1 );
nextToBlank = Function( {x, y}, /* helper function */
	If( /* child is border, grandchild is text */
		(x > 1 & (((puzzle[x - 1][y] << child) << child) << gettext) == " ") | (x < 4 & (((
		puzzle[x + 1][y] << child) << child) << gettext) == " ") | (y > 1 & (((puzzle[x][y
		-1] << child) << child) << gettext) == " ") | (y < 4 & (((puzzle[x][y + 1] << child)
		 << child) << gettext) == " ")
	,
		1,
		0
	)
);/* only allow drag begin if next door to empty cell */
dragBegin = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		((this << child) << child) << getText/* the message is the textbox content */
	, /* else */
		0 /* suppress the drag */
	);
);/* function to remove the character from the source cell, but only if the drop was successful */
dragEnd = Function( {this, clickPt, how}, /* how is copy/move/ignore */
	destbox = this << getDestBox;
	If( Is Empty( destBox ),
		Show( "unknown destination" );
		0 /* don't know where the dest was, force ignore */
		;
	,
		Try(
			{x, y} = destbox << GetUserData,
			x = -1;
			y = -1;
		); /* the destbox might not have a list in userdata */
		If(
			Try(
				puzzle[x][y] != destbox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not dropped in this puzzle" );
			0 /* not this puzzle instance, force ignore */
			;
		, /* else */
			If( how == "ignore",
				Show( "drop not completed" );
				0 /* the drop was not completed */
				;
			, /* else */
				((this << child) << child) << setText( " " )
			)
		);
	);
	0 /* the return code is ignored */
	;
);/* function to decide if a drop is allowed.  return codes (0,1) are critical. */
dropTrack = Function( {this, clickPt},
	sourcebox = this << getSourceBox;
	If( Is Empty( sourcebox ),
		Show( "unknown source" );
		0 /* no drop from unknown source box */
		;
	, /* else */
		Try(
			{x, y} = sourcebox << getUserData,
			x = -1;
			y = -1;
		); /* the sourcebox mightnot have a list in userdata */
		If(
			Try(
				puzzle[x][y] != sourcebox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not from this puzzle" );
			0 /* not sourced from this puzzle instance, ignore */
			;
		, /* else */
			If( ((this << child) << child) << getText != " ",
				0 /* no drop on occupied cell */
			, /* else */
				1 /* allow drop on the blank cell */
			)
		);
	);
);/* function to implement the drop */
dropCommit = Function( {this, clickPt, text},
	((this << child) << child) << setText( text );
	1; /* ignored */
);/* cursor changer for cells that can source a drag */
track = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		this << setCursor( "Hand" ),
		this << setCursor( "Arrow" )
	);
	1; /* ignored */
);/* helper function to construct the displaybox tree */
mb = Function( {letter, x, y},
	MouseBox(
		Border Box( Left( 9 ), Right( 9 ), top( 3 ), bottom( 3 ), sides( 15 ),
			Text Box(
				letter,
				<<setFont( "Courier New" ),
				<<set font size( 15 ),
				<<set font style( "bold" )
			)
		),
		<<setUserData( Eval List( {x, y} ) ), /* remember my location.  I don't move, but my content changes. */
		<<setDragEnable( 1 ),
		<<setDragBegin( dragBegin ), /* dragFunctions defined below */
		<<setDragEnd( dragEnd ),
		<<setDropEnable( 1 ),
		<<setDropTrack( dropTrack ),
		<<setDropCommit( dropCommit ),
		<<setTrackEnable( 1 ),
		<<setTrack( track )
	)
);
puzzle = Eval List(
	{Eval List( {mb( "b", 1, 1 ), mb( "u", 1, 2 ), mb( "y", 1, 3 ), mb( " ", 1, 4 )} ),
	Eval List( {mb( "t", 2, 1 ), mb( "h", 2, 2 ), mb( "i", 2, 3 ), mb( "s", 2, 4 )} ),
	Eval List( {mb( "w", 3, 1 ), mb( "o", 3, 2 ), mb( "r", 3, 3 ), mb( "d", 3, 4 )} ),
	Eval List( {mb( "g", 4, 1 ), mb( "a", 4, 2 ), mb( "m", 4, 3 ), mb( "e", 4, 4 )} )}
);
New Window( "puzzle",
	Border Box( Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ), sides( 15 ),
		Lineup Box( N Col( 4 ), spacing( 3, 3 ),
			puzzle[1][1],
			puzzle[1][2],
			puzzle[1][3],
			puzzle[1][4],
			puzzle[2][1],
			puzzle[2][2],
			puzzle[2][3],
			puzzle[2][4],
			puzzle[3][1],
			puzzle[3][2],
			puzzle[3][3],
			puzzle[3][4],
			puzzle[4][1],
			puzzle[4][2],
			puzzle[4][3],
			puzzle[4][4]
		)
	)
);

```

### SetEdit

**Syntax:** obj << SetEdit

### SetEditClear

**Syntax:** obj << SetEditClear( state=0|1 )

### SetEditCopy

**Syntax:** obj << SetEditCopy( state=0|1 )

### SetEditCopyLabel

**Syntax:** obj << SetEditCopyLabel( state=0|1 )

### SetEditCopyText

**Syntax:** obj << SetEditCopyText( state=0|1 )

### SetEditCut

**Syntax:** obj << SetEditCut( state=0|1 )

### SetEditEnable

**Syntax:** obj << SetEditEnable

### SetEditJournal

**Syntax:** obj << SetEditJournal( state=0|1 )

### SetEditPaste

**Syntax:** obj << SetEditPaste( state=0|1 )

### SetEditPasteJSL

**Syntax:** obj << SetEditPasteJSL( state=0|1 )

### SetEditPasteLabel

**Syntax:** obj << SetEditPasteLabel( state=0|1 )

### SetEditSaveSelectionAs

**Syntax:** obj << SetEditSaveSelectionAs( state=0|1 )

### SetEditSubmit

**Syntax:** obj << SetEditSubmit( state=0|1 )

### SetEditSubmitDebug

**Syntax:** obj << SetEditSubmitDebug( state=0|1 )

### SetFocus

**Syntax:** obj << SetFocus

### SetKey

**Syntax:** obj << SetKey( Function( {this, key}, <script> ) )

**Beschreibung:** Legt die Funktion fest, die aufgerufen werden soll, wenn eine Taste gedrückt wird, während das Mausfeld im Fokus ist. Die Funktion muss 1 zurückgeben, wenn die Taste verarbeitet wurde, und 0, wenn dies nicht der Fall war.

```js

Names Default To Here( 1 );
New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;

```

### SetKeyEnable

**Syntax:** obj << SetKeyEnable

### SetMark

**Syntax:** obj << SetMark( Function( {this}, <script> ) )

**Beschreibung:** SetMark gibt eine Funktion an, die aufgerufen wird, wenn sich das Feld im Fokus befindet und mit der Maus geklickt oder die Eingabetaste gedrückt wird. Mit der Markierung kann ein Auswahlzustand eines Mouse Box implementiert werden. Um Klickaktionen zu implementieren, verwenden Sie <<SetClick.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );

```

### SetMarkEnable

**Syntax:** obj << SetMarkEnable( state=0|1 )

**Beschreibung:** Aktiviert MouseBox, die Funktion <<SetMark aufzurufen, wenn sich das Feld im Fokus befindet und mit der Maus geklickt oder die Eingabetaste gedrückt wird.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );

```

### SetMarked

**Syntax:** obj << SetMarked( state=0|1 )

**Beschreibung:** Legt das Markierungsflag für das Mouse Box fest. Ein markiertes Feld wird mit einem hervorgehobenen Hintergrund angezeigt.

```js

Names Default To Here( 1 );
New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();

```

### SetToolTip

**Syntax:** obj << SetToolTip

**Beschreibung:** Text angeben, den das Mausfeld als Tooltipp verwendet.

```js

Names Default To Here( 1 );
mb = MouseBox();
mb << setTooltip( "this is your best choice" );

```

### SetTrack

**Syntax:** obj << SetTrack( Function( {this, clickpt}, <script> ) )

**Beschreibung:** Gibt eine Funktion an, die aufgerufen wird, wenn die Maus mit nicht gedrückter Maustaste über das Mausfeld bewegt wird. Für die Handhabung bei gedrückter Maustaste, siehe <<SetClick. clickpt ist eine {x,y}-Position innerhalb dieses Mausfelds, bei der es sich um die aktuelle Position des Mauszeigers handelt.

```js

Names Default To Here( 1 );
/* See full example for <<SetClick() */
mb = MouseBox();
mb << setTrack(
	Function( {this, clickpt},
		this << setCursor( "Hand" ) /* button-up tracking - use the hand */
	)
);

```

### SetTrackEnable

**Syntax:** obj << SetTrackEnable( state=0|1 )

**Beschreibung:** Aktiviert das Mausfeld, die Funktion <<SetTrack aufzurufen, wenn die Maus mit nicht gedrückter Maustaste bewegt wird.

### SetUserData

**Syntax:** obj << SetUserData

**Beschreibung:** Speichert einen JSL-Wert im Mausfeld. Bei dem Wert kann es sich um eine Zahl, Zeichenkette, Liste, ein assoziatives Array oder einen anderen JSL-Typ handeln.

### Show Properties

**Syntax:** obj << Show Properties

**Beschreibung:** Zeigt einen Eigenschaftseditor für Anzeigefelder an

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

```js

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

### Vertical Alignment

**Syntax:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**Beschreibung:** Die vertikale Ausrichtung steuert die Position des Felds innerhalb eines Containers, sofern das Feld nicht den gesamten Raum ausfüllt.

```js

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

```js

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

```js

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

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<
Make Into Data Table;

```

**Data**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<
Text Color( "Green" );

```

**Display Seg**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```js

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Syntax:** obj << Zoom Window

**Beschreibung:** Ändert die Größe des Fensters, so dass es groß genug ist, um seinen gesamten Inhalt anzuzeigen.

```js

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

