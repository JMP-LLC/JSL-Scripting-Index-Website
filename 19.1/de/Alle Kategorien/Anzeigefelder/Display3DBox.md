# Display3DBox



## Elementmeldungen

### Add Ellipsoid

**Syntax:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Beschreibung:** Zeichnet ein Ellipsoid im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

### Add Markers

**Syntax:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Beschreibung:** Zeichnet n Symbole im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**Syntax:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Beschreibung:** Zeichnet einen Vektor bzw. Pfeil im Diagramm.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

### Get Axes

**Syntax:** obj &lt;&lt; Get Axes

**Beschreibung:** Gibt den Zustand der Anzeige der Achsen des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Axes );Show( s );

```

### Get Box

**Syntax:** obj &lt;&lt; Get Box

**Beschreibung:** Gibt den Zustand der Anzeige des Feldrahmens im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

### Get Grab Handles

**Syntax:** obj &lt;&lt; Get Grab Handles

**Beschreibung:** Gibt den Zustand der Anzeige der Ziehpunkte im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

### Get Graph Size

**Syntax:** obj &lt;&lt; Get Graph Size

**Beschreibung:** Gibt die Größe des Graphen zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Graph Size );Show( s );

```

### Get Grids

**Syntax:** obj &lt;&lt; Get Grids

**Beschreibung:** Gibt den Zustand der Anzeige des Rasters im Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Grids );Show( s );

```

### Get Hide Lights Border

**Syntax:** obj &lt;&lt; Get Hide Lights Border

**Beschreibung:** Gibt den Zustand der Beleuchtungsränder des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

### Get Line Scale

**Syntax:** obj &lt;&lt; Get Line Scale

**Beschreibung:** Gibt die Linienbreite des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );w = obj << Frame3D( Get Line Scale );Show( w );

```

### Get Marker Quality

**Syntax:** obj &lt;&lt; Get Marker Quality

**Beschreibung:** Gibt die Symboleigenschaften wie Form und Schattierung für das Diagramm zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );q = obj << Frame3D( Get Marker Quality );Show( q );

```

### Get Marker Scale

**Syntax:** obj &lt;&lt; Get Marker Scale

**Beschreibung:** Gibt die Symbolgröße des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Marker Scale );Show( s );

```

### Get Marker Transparency

**Syntax:** obj &lt;&lt; Get Marker Transparency

**Beschreibung:** Gibt die Symboltransparenz des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Frame3D( Get Marker Transparency );Show( t );

```

### Get Rotation

**Syntax:** obj &lt;&lt; Get Rotation

**Beschreibung:** Gibt die aktuelle Drehung des Rahmens zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Frame3D( Get Rotation() );Show( r );

```

### Get Text Scale

**Syntax:** obj &lt;&lt; Get Text Scale

**Beschreibung:** Gibt die Textgröße des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Text Scale );Show( s );

```

### Get View Ortho

**Syntax:** obj &lt;&lt; Get View Ortho

**Beschreibung:** Gibt den Zustand der orthografischen Ansicht des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );o = obj << Frame3D( Get View Ortho );Show( o );

```

### Get View Perspective

**Syntax:** obj &lt;&lt; Get View Perspective

**Beschreibung:** Gibt die Perspektive für die Ansicht des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Get View Perspective );Show( p );

```

### Get View Zoom

**Syntax:** obj &lt;&lt; Get View Zoom

**Beschreibung:** Gibt den aktuellen Zoom des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );z = obj << Frame3D( Get View Zoom );Show( z );

```

### Get Wall Color

**Syntax:** obj &lt;&lt; Get Wall Color

**Beschreibung:** Gibt die Wandfarbe des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Wall Color );Show( c );

```

### Get Walls

**Syntax:** obj &lt;&lt; Get Walls

**Beschreibung:** Gibt den Zustand der Anzeige der Wände des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Walls );Show( s );

```

### Get X Axis Color

**Syntax:** obj &lt;&lt; Get X Axis Color

**Beschreibung:** Gibt die Farbe der X-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get X Axis Color );Show( c );

```

### Get X Axis Label

**Syntax:** obj &lt;&lt; Get X Axis Label

**Beschreibung:** Gibt die Beschriftung für die X-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get X Axis Label );Show( label );

```

### Get Y Axis Color

**Syntax:** obj &lt;&lt; Get Y Axis Color

**Beschreibung:** Gibt die Farbe der Y-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Y Axis Color );Show( c );

```

### Get Y Axis Label

**Syntax:** obj &lt;&lt; Get Y Axis Label

**Beschreibung:** Gibt die Beschriftung für die Y-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Y Axis Label );Show( label );

```

### Get Z Axis Color

**Syntax:** obj &lt;&lt; Get Z Axis Color

**Beschreibung:** Gibt die Farbe der Z-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Z Axis Color );Show( c );

```

### Get Z Axis Label

**Syntax:** obj &lt;&lt; Get Z Axis Label

**Beschreibung:** Gibt die Beschriftung für die Z-Achse des Diagramms zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Z Axis Label );Show( label );

```

### Set Axes

**Syntax:** obj &lt;&lt; Set Axes( state=0|1 )

**Beschreibung:** Zeigt die X-, Y- und Z-Achse des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**Syntax:** obj &lt;&lt; Set Box( state=0|1 )

**Beschreibung:** Zeigt den Feldrahmen im Diagramm an oder blendet ihn aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**Syntax:** obj &lt;&lt; Set Graph Size( x, y )

**Beschreibung:** Legt die Größe des Graphen fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**Syntax:** obj &lt;&lt; Set Grids( state=0|1 )

**Beschreibung:** Zeigt das Raster im Diagramm an oder blendet es aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**Syntax:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Beschreibung:** Zeigt die Beleuchtungsränder des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**Syntax:** obj &lt;&lt; Set Line Scale( number )

**Beschreibung:** Legt die Linienbreite für das Raster im Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**Syntax:** obj &lt;&lt; Set Marker Quality( number )

**Beschreibung:** Legt die Symboleigenschaften wie Form und Schattierung für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**Syntax:** obj &lt;&lt; Set Marker Scale( number )

**Beschreibung:** Legt die Symbolgröße für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**Syntax:** obj &lt;&lt; Set Marker Transparency( fraction )

**Beschreibung:** Legt die Symboltransparenz für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**Syntax:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Beschreibung:** Legt die Oszillationsrate des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**Syntax:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Beschreibung:** Dreht den Rahmen zu den angegebenen Koordinaten.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**Syntax:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Beschreibung:** Dreht den Graphen um eine angegebene Achse. Die Werte dx und dy sind eine Deltabewegung der Maus ab dem Punkt (sx, sy).

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**Syntax:** obj &lt;&lt; Set Text Scale( number )

**Beschreibung:** Legt die Textgröße für den Achsentext im Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**Syntax:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Beschreibung:** Zeigt das Diagramm orthografisch oder linear an.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**Syntax:** obj &lt;&lt; Set View Perspective( fraction )

**Beschreibung:** Legt die Perspektive für die Ansicht des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**Syntax:** obj &lt;&lt; Set View Zoom( number )

**Beschreibung:** Legt den Zoom für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**Syntax:** obj &lt;&lt; Set Wall Color( number )

**Beschreibung:** Legt die Wandfarbe für das Diagramm fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**Syntax:** obj &lt;&lt; Set Walls( state=0|1 )

**Beschreibung:** Zeigt die Wände des Diagramms an oder blendet sie aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**Syntax:** obj &lt;&lt; Set X Axis Color( color )

**Beschreibung:** Legt die Farbe der X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**Syntax:** obj &lt;&lt; Set X Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**Syntax:** obj &lt;&lt; Set Y Axis Color( color )

**Beschreibung:** Legt die Farbe der Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**Syntax:** obj &lt;&lt; Set Y Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**Syntax:** obj &lt;&lt; Set Z Axis Color( color )

**Beschreibung:** Legt die Farbe der Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**Syntax:** obj &lt;&lt; Set Z Axis Label( string )

**Beschreibung:** Legt die Beschriftung für die Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### XAxis

**Syntax:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die X-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**Syntax:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die Y-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**Syntax:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Beschreibung:** Legt die Werte für die Z-Achse des Diagramms fest.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**Syntax:** obj &lt;&lt; get light active( light number )

**Beschreibung:** Gibt die Aktivierung des angegebenen Lichts, das das Diagramm beleuchtet, zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

### get light color

**Syntax:** obj &lt;&lt; get light color( light number )

**Beschreibung:** Gibt die angegebene Farbe des Lichts, das das Diagramm beleuchtet, als Liste zurück {red, green, blue}.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

### get light position

**Syntax:** obj &lt;&lt; get light position( light number )

**Beschreibung:** Gibt die angegebene Position des Lichts, das das Diagramm beleuchtet, als Liste zurück {x, y, z}.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

### set light active

**Syntax:** obj &lt;&lt; set light active( light number, state=0|1 )

**Beschreibung:** Schaltet das angegebene Licht ein, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**Syntax:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Beschreibung:** Legt die Farbe des Lichts fest, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**Syntax:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Beschreibung:** Legt die Position des Lichts fest, das das Diagramm beleuchtet.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

## Zugehörige Konstruktoren

### Graph 3D Box

**Syntax:** y = Graph 3D Box()

**Beschreibung:** Sendet Anzeigebefehle an das 3D-Diagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

