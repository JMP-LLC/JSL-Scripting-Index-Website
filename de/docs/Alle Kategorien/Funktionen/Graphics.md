# Graphics



### Add Color Theme

**Beschreibung:** Erstellt ein neues benutzerdefiniertes Farbschema und registriert es in der Schemaauswahl.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

#### Beispiel 2

```jsl

Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**Syntax:** Arc( left, top, right, bottom, startAngle, endAngle )

**Beschreibung:** Zeichnet einen Bogen eines Kreises.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**Syntax:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Beschreibung:** Zeichnet eine Linie mit einem Pfeil oder einer Folge solcher Linien.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**Syntax:** Back Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Hintergrundfarbe für den Modus „Hintergrund überschreiben“ in der Funktion Text() fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**Syntax:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**Beschreibung:** Vermischt zwei Farben mit einem konfigurierbaren Prozentsatz und Farbraum.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

Blend Colors( "black", "white", 0.25 );

```

#### Beispiel 2

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

#### Beispiel 3

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

#### Beispiel 4

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

#### Beispiel 5

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

#### Beispiel 6

```jsl

c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

#### Beispiel 7

```jsl

c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Char To Path

**Syntax:** m = Char To Path( pathText )

**Beschreibung:** Wandelt eine Pfadspezifikation vom Zeichenformat in Matrixformat um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**Syntax:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**Beschreibung:** Zeichnet einen Kreis mit dem Mittelpunkt {x, y}. Der Radius kann als ganze Zahl auf der Basis der vertikalen Achse oder als Anzahl von Pixeln angegeben werden. Ein pixelbasierter Radius erstellt einen Kreis, dessen Größe sich nicht ändert, wenn sich die vertikale Achse ändert. Die Argumente können in beliebiger Reihenfolge wiederholt werden, um mehrere Kreise zu zeichnen. "FILL" muss, sofern verwendet, zuletzt folgen. Es füllt die Kreise mit der Füllfarbe, statt sie mit der Stiftfarbe zu zeichnen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Color Difference

**Syntax:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**Beschreibung:** Gibt die Differenz zwischen zwei Farben unter einer angegebenen Farbdifferenzmetrik zurück.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

Color Difference( "red", "blue" );

```

#### Beispiel 2

```jsl

Color Difference( "red", "blue", "sRGB" );

```

#### Beispiel 3

```jsl

Color Difference( "red", "blue", "redmean" );

```

#### Beispiel 4

```jsl

Color Difference( "red", "blue", "CIE76" );

```

#### Beispiel 5

```jsl

Color Difference( "red", "blue", "CIE94" );

```

#### Beispiel 6

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

#### Beispiel 7

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**Syntax:** {h, l, s} = Color To HLS( color )

**Beschreibung:** Gibt eine Liste aus den Komponenten Farbton, Helligkeit und Sättigung zurück.  Das Argument color kann jede gültige JSL-Farbe oder eine Matrix von Farbzahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntax:** {r, g, b} = Color To RGB( color )

**Beschreibung:** Gibt eine Liste aus den Komponenten Rot, Grün und Blau, zwischen 0 und 1 zurück. Das Farbargument kann jede gültige JSL-Farbe oder eine Matrix von Farbzahlen sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**Syntax:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**Beschreibung:** Zeichnet Konturen mit Hilfe eines Rasters von Werten. Wenn weniger Farben angegeben sind als es Konturen gibt, bestimmen die Optionen „Farben interpolieren“ und „Farben zyklisch verwenden“, wie die Farben angewendet werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Syntax:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Beschreibung:** Wertet den Ausdruck auf einem Raster aus den Werten xName und yName aus und zeichnet die Konturlinien. Das Argument color kann als Zahl, als Matrix, als Liste von RGB-Werten, als Liste von Farbnamen oder als Farbschema angegeben werden.  Die Transparenz t kann als Zahl oder als Matrix angegeben werden.  Wenn die Option Ternary angegeben ist, sind die Konturen an ein ternäres Koordinatensystem gebunden.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

#### Beispiel 2

```jsl

New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Drag Line

**Syntax:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet eine Polylinie an den angegebenen Punkten. Im Gegensatz zu „Line“ können die Punkte jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Syntax:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet verschiebbare Symbole an den angegebenen Punkten. Die Matrixwerte werden aktualisiert, wenn die Symbole verschoben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Syntax:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet ein ausgefülltes Polygon an den angegebenen Punkten. Die Punkte können über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Syntax:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet ein Rechteck an den angegebenen Punkten. Im Gegensatz zu „Rect“ können diese Ecken jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten (L-Wert) aktualisiert werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Syntax:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**Beschreibung:** Zeichnet den Text an den angegebenen Punkten. Im Gegensatz zur Funktion Text() können die Punkte jedoch über den Bildschirm gezogen werden, wobei die Werte in den Matrixargumenten xMatrixName und yMatrixName aktualisiert werden. Das Argument text kann ein Zeichenkettenargument oder eine Liste mit Zeichenketten sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Fill Color

**Syntax:** Fill Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen ausgefüllter Bereiche fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntax:** Fill Pattern( name|mask|image )

**Beschreibung:** Legt das Muster zum Zeichnen ausgefüllter Bereiche fest. Eine Maske ist eine Matrix von Werten zwischen 0 und 1, die auf die aktuelle Füllfarbe angewendet werden soll.

**JMP Version hinzugefügt:** Vor Version 14

#### Bild

```jsl


image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

#### Maskieren

```jsl

New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**Syntax:** script = Get Color Theme Detail(name)

**Beschreibung:** Gibt das Skript für ein vorgegebenes Farbschema zurück

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntax:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**Beschreibung:** Gibt eine Liste von Zeichenketten für Farbschemata zurück, die dem optionalen Parameter kind entsprechen. Für kind gibt es folgende Optionen: „stetig“, „kategorial“, „sequentiell“, „divergierend“, „qualitativ“ oder „chromatisch“.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Get Color Theme Names();

```

#### Beispiel 2

```jsl

Get Color Theme Names( "sequential" );

```

### Gradient Function

**Syntax:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**Beschreibung:** Füllt den Graphen mit einem Farbverlauf zwischen zwei Farben aus. Das Argument zExpr ist eine Funktion der beiden von xName und yName angegebenen Variablen. Der Vektor zLimits gibt den Wertebereich für zExpr an. Das Argument zColor ist ein Vektor oder eine Liste, der/die die beiden Farben angibt, die vermischt werden, um den Farbverlauf zu erstellen. Transparency ist ein einzelner Wert, der auf das gesamte Raster angewendet wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### H Line

**Syntax:** H Line( y ); H Line( x1, x2, y )

**Beschreibung:** Zeichnet eine horizontale Linie bei y, von x1 bis x2 oder über den gesamten Rahmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**Syntax:** h = H Size()

**Beschreibung:** Gibt die horizontale Größe des Grafikrahmens in Pixel zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**Syntax:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Beschreibung:** Gibt eine Farbzahl aus den Komponenten Farbton, Helligkeit und Sättigung zurück, alle zwischen 0 und 1.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Handle

**Syntax:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**Beschreibung:** Zeichnet ein quadratisches Symbol an den von xPos und yPos angegebenen Koordinaten und wiederholt die Auswertung des Ausdrucks dragScript, wenn die Maustaste auf dem Symbol gedrückt wird. Vor der Ausführung des Skripts werden die globalen Variablen x und y auf den Mauswert gesetzt und anschließend auf den ursprünglichen Wert zurückgesetzt. Der Ausdruck mouseUpScript wird nach dem Loslassen der Maustaste ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Heat Color

**Syntax:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**Beschreibung:** Gibt eine Farbe zurück, die einem Wert zwischen 0 und 1 entspricht. Standardschema ist „Blau nach Grau nach Rot“. Jedes vom Zellendiagramm unterstützte Farbschema wird hier unterstützt. Matrixargumente werden unterstützt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### In Path

**Syntax:** b = In Path( x, y, pathMatrix|pathText )

**Beschreibung:** Gibt 1 zurück, wenn der Punkt (x,y) im vorgegebenen Pfad liegt, ansonsten wird 0 zurückgegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Syntax:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**Beschreibung:** Gibt 1 zurück, wenn der Punkt (x,y) im Polygon liegt, das von den Vektorargumenten definiert ist, andernfalls 0.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**Syntax:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**Beschreibung:** Gibt eine Kategoriefarbe zurück, wobei i das Kategorieniveau, n die Anzahl der Kategorien (optional) und theme die Farbschemata im Kombinationsfeld „Wertfarbe“ im Dialogfeld „Spalteninfo“ sind. (Dabei ist „JMP-Standard“ das Standardschema.) Der Kategorieindex muss >= 1 und <= der Anzahl der im Aufruf angegebenen oder vom Farbschema festgelegten Kategorien sein. Wenn das zweite Argument ein Zeichen ist, ist es das Farbschema und n ist nicht angegeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Line

**Syntax:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**Beschreibung:** Zeichnet eine Linie oder verbundene Linien. Im Standardfall wird die Linie linear zwischen den Endpunkten gezeichnet. Wenn die Option Value Space festgelegt ist, folgt die Linie der von der zugrunde liegenden Achsenskala angegebenen Projektion. Wenn die Option Smooth festgelegt ist, werden die Verbindungen geglättet, eingeschränkt durch tension, domain dimension, min response und max response.

**JMP Version hinzugefügt:** Vor Version 14

#### Constrained smoothing

```jsl

New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

#### Polyline

```jsl

New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

#### Smoothing

```jsl

New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

#### Value space interpolation

```jsl

New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Style

**Syntax:** Line Style( x )

**Beschreibung:** Legt den aktuellen Linienstil fest, zur Auswahl stehen: 0 (durchgezogen), 1 (gepunktet), 2 (gestrichelt), 3 (Strich-Punkt) oder 4 (Strich-Punkt-Punkt).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Mandelbrot

**Syntax:** v = Mandelbrot( n, radius, x, y )

**Beschreibung:** Berechnet den Wert der Mandelbrot-Funktion für x,y, stoppt nach n Iterationen oder wenn der Radius überschritten ist

**JMP Version hinzugefügt:** Vor Version 14

```jsl

grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Marker

**Syntax:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**Beschreibung:** Zeichnet Symbole an den angegebenen Koordinaten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**Syntax:** Marker Size( n )

**Beschreibung:** Legt die Größe für die Symbole im Grafikrahmen fest. 0 = Punkt, 1 = klein, …

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**Syntax:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**Beschreibung:** Wertet den Ausdruck dragScript wiederholt aus, während die Maustaste im Graphen gedrückt wird und nicht von einem anderen Graphenobjekt bearbeitet wird. Vor der Ausführung des Skripts werden die globalen Variablen x und y auf den Mauswert gesetzt und anschließend auf den ursprünglichen Wert zurückgesetzt. Der Ausdruck mouseUpScript wird nach dem Loslassen der Maustaste ausgeführt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### New Heat Image

**Syntax:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**Beschreibung:** Erstellt ein Heatmap-Bild basierend auf einer Matrix und einem Farbschema oder Gradient.

**JMP Version hinzugefügt:** 16

```jsl


nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### Normal Contour

**Syntax:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet normalverteilte Wahrscheinlichkeitskonturlinien für k Populationen und zwei Variablen. Das Argument prob kann eine skalare Wahrscheinlichkeit oder eine Matrix mit Wahrscheinlichkeiten sein. Die Argumente meanMatrix und stdsMatrix sind k x 2 Matrizen, und das Argument corrMatrix ist ein k x 1 Vektor. Das Argument colorsMatrix gibt die Farben für die k Konturlinien an. Die Farben müssen als JSL-Farben angegeben werden (entweder ganzzahlige JSL-Farbwerte oder Rückgabewerte von JSL-Farbfunktionen wie RGB Color() oder HLS Color()). Das Argument fill gibt die Transparenz für die Füllfarbe der Konturlinien an.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Oval

**Syntax:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet ein Oval innerhalb des angegebenen Rechtecks, ausgefüllt, wenn „fill“ ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### Path

**Syntax:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**Beschreibung:** Zeichnet Linien entlang des angegebenen Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Syntax:** s = Path To Char( pathMatrix )

**Beschreibung:** Wandelt eine Pfadspezifikation vom Matrixformat in Zeichenformat um.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**Syntax:** Pen Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen von Linien fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntax:** Pen Size( &lt;x&gt; )

**Beschreibung:** Legt die Stiftgröße in Pixel zum Zeichnen von Linien fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**Syntax:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**Beschreibung:** Gibt eine Farbe zurück, die mit der Standardfarbauswahl ausgewählt wurde.

**JMP Version hinzugefügt:** 14

```jsl

pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Syntax:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**Beschreibung:** Gibt ein Farbschema zurück, das mit der Standardfarbauswahl ausgewählt wurde. Das erste Schema kann explizit angegeben werden oder indem ein Type angegeben wird, um die Schemen aus den Voreinstellungen zu verwenden.

**JMP Version hinzugefügt:** 17

#### Graphik erstellen

```jsl


theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

#### Legende für Zeilen

```jsl


pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**Syntax:** Pie( left, top, right, bottom, startAngle, endAngle )

**Beschreibung:** Zeichnet ein Stück im Tortendiagramm.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**Syntax:** Pixel Line To( h, v )

**Beschreibung:** Zeichnet eine Linie von den aktuellen pixelbasierten Stiftkoordinaten zu den vorgegebenen horizontalen und vertikalen Koordinaten.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Syntax:** Pixel Move To( h, v )

**Beschreibung:** Bewegt den pixeladressierten Stift zu den horizontalen und vertikalen Koordinaten relativ zum Ursprung.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Syntax:** Pixel Origin( x, y )

**Beschreibung:** Legt den Ursprung fest, auf dem Pixel-Zeichenbefehle basieren.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Syntax:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**Beschreibung:** Zeichnet Linien entlang des angegebenen pixelbasierten Pfads, wenn „Füllen“ gleich 0 ist, oder färbt das Innere des angegebenen Pfads, wenn „Füllen“ ungleich 0 ist. Der Pfad kann mit einer Nx3-Matrix oder mit einer Textdarstellung angegeben werden. Eine Pfadmatrix hat drei Spalten für x, y und Flags für jeden Punkt im Pfad. Die Flag-Werte sind 0 für Steuern, 1 für Verschieben, 2 für Liniensegment, 3 für kubisches Bézier-Segment und sie sind negativ, wenn der Punkt den Pfad auch schließt. Der Pfadtext unterstützt die SVG-Syntax. Der Pfad wird gemäß der optionalen Parameter skaliert und um den Ursprung verschoben, unter Berücksichtigung der im Achsenraum angegebenen Orientierung.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Syntax:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**Beschreibung:** Verschiebt an die Pixelposition {h, v} und zeichnet Text, der vom Argument text angegeben wird. Benannte Eigenschaftsargumente sind u.a.: Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Die Positionsargumente, benannten Argumente und Zeichenketten können in beliebiger Reihenfolge angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl


New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Polygon

**Syntax:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**Beschreibung:** Zeichnet das Polygon, das von den Punkten festgelegt wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Syntax:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**Beschreibung:** Berechnet die Fläche des angegebenen Polygons.

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

#### Beispiel 2

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntax:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**Beschreibung:** Berechnet das Zentroid des angegebenen Polygons.

**JMP Version hinzugefügt:** 14

#### Beispiel 1

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

#### Beispiel 2

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntax:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**Beschreibung:** Entfernt Punkte aus einem Polygon, die einen geringen Detailgrad aufweisen, und gibt die Indizes der verbleibenden Punkte zurück. detail factor ist umgekehrt proportional zur Detailfehlertoleranz. multiple(ids) zeigt an, dass viele Polygone gemeinsam vereinfacht werden sollten, damit gemeinsame Kanten einheitlich behandelt werden. ids ist eine Matrix mit einer Zeile pro Punkt. geodesic(1) gibt an, dass es sich bei den Koordinaten um Breiten- und Längengrade für die Entfernungsmessung handelt.

**JMP Version hinzugefügt:** 19

#### Beispiel 1

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

#### Mehrere Polygone

```jsl

dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### RGB Color

**Syntax:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Beschreibung:** Gibt eine Farbzahl aus den Komponenten Rot, Grün und Blau zurück, alle zwischen 0 und 1. RGB Color(1, 1, 1) ist weiß.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Rect

**Syntax:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**Beschreibung:** Zeichnet ein Rechteck, ausgefüllt, wenn „fill“ ungleich 0 ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Remove Color Theme

**Syntax:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**Beschreibung:** Entfernt ein benutzerdefiniertes Farbschema aus der globalen Liste, entweder nach Name oder nach dem vollständigen Farbschema-Objekt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Text

**Syntax:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**Beschreibung:** Geht zur Position {x, y} und zeichnet den vom Argument text angegebenen Text. Benannte Eigenschaftsargumente sind u.a.: Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Die Positionsargumente, benannten Argumente und Zeichenketten können in beliebiger Reihenfolge angegeben werden. Sie können auch mithilfe von vier x/y-Koordinaten ein Feld beschreiben, in dem der Text gezeichnet wird. In diesem Fall werden keine Eigenschaften verwendet.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

#### Beispiel 2

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**Syntax:** Text Color( &lt;name|index|rgbList&gt; )

**Beschreibung:** Legt die Farbe zum Zeichnen von Text fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**Syntax:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**Beschreibung:** Legt die Schriftart für den nachfolgenden graphischen Text() fest. Verwenden Sie dies ohne Argumente, um die aktuellen Einstellungen der Schriftart abzurufen. Der Winkel ist in Grad im Uhrzeigersinn.

**JMP Version hinzugefügt:** 15

```jsl

New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Size

**Syntax:** Text Size( n )

**Beschreibung:** Legt die Schriftgröße zum Zeichnen von Text fest.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**Syntax:** color = To Color Space( color, colorSpace )

**Beschreibung:** Übersetzt eine Farbe in einen anderen Farbraum. Farben außerhalb der Farbskala werden beim Konvertieren in kleinere Farbräume passend zugeordnet.

**JMP Version hinzugefügt:** 18

#### Beispiel 1

```jsl

To Color Space( "red", "LMS" );

```

#### Beispiel 2

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

#### Beispiel 3

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**Syntax:** Transparency( &lt;alpha&gt; )

**Beschreibung:** Legt die Transparenz für die Zeichenbefehle fest. Alpha liegt zwischen 0 (durchsichtig) und 1 (undurchsichtig, Standardeinstellung). Einige Betriebssysteme unterstützen diese Funktion nicht.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### V Line

**Syntax:** V Line( x ); V Line( x, y1, y2 )

**Beschreibung:** Zeichnet eine vertikale Linie bei x, von y1 bis y2 oder über den gesamten Rahmen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**Syntax:** v = V Size()

**Beschreibung:** Gibt die vertikale Größe des Grafikrahmens in Pixel zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**Syntax:** X Function( xExpr, yName, &lt;properties&gt; )

**Beschreibung:** Zeichnet die Funktion xExpr in der X-Dimension, wobei die Variable yName über den Bereich der Y-Achse des Graphen variiert. Zusätzliche benannte Eigenschaftsargumente sind u.a.: Min(unteres Y), Max(oberes Y), Fill(Muster, Wert), Inc(obere Grenze des Inkrements).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntax:** x = X Origin()

**Beschreibung:** Gibt den x-Wert für die linke Kante des Grafikrahmens zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Syntax:** x = X Range()

**Beschreibung:** Gibt den x-Abstand von links nach rechts zurück. X Origin() + X Range() ist die rechte Kante.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Syntax:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**Beschreibung:** Setzt eine neue Y-Skala innerhalb des Grafikrahmens.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XY Function

**Syntax:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Beschreibung:** Diese Grafikskriptfunktion verbindet einen Ausdruck x(t) und einen Ausdruck y(t), um eine Kurve x-y für den angegebenen Parameterbereich t zu zeichnen. Inc() ist das maximale Inkrement für t bzw. steps() ist die minimale Anzahl von Schritten für t. Verwenden Sie steps() oder inc(), wenn der Standardwert keine Details anzeigt.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Syntax:** Y Function( yExpr, xName, &lt;properties&gt; )

**Beschreibung:** Zeichnet die Funktion yExpr in der Y-Dimension, wobei die Variable xName über den Bereich der X-Achse des Graphen variiert. Zusätzliche benannte Eigenschaftsargumente sind u.a.: Min(unteres X), Max(oberes X), Fill(Muster, Wert), Inc(obere Grenze des Inkrements).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntax:** y = Y Origin()

**Beschreibung:** Gibt den y-Wert für die untere Kante des Grafikrahmens zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Syntax:** y = Y Range()

**Beschreibung:** Gibt den y-Abstand von unten nach oben zurück. Y Origin() + Y Range() ist die obere Kante.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Syntax:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**Beschreibung:** Setzt eine neue Y-Skala innerhalb des Grafikrahmens.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

