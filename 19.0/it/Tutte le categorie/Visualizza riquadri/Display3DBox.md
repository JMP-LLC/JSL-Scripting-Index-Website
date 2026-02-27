# Display3DBox



## Costruttori associati

### Graph 3D Box

**Sintassi:** y = Graph 3D Box()

**Descrizione:** Invia comandi di visualizzazione al grafico 3D.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Messaggi degli elementi

### Add Ellipsoid

**Sintassi:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Descrizione:** Disegna una ellissoide nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

### Add Markers

**Sintassi:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Descrizione:** Disegna n indicatori nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**Sintassi:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Descrizione:** Disegna un vettore o una freccia nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

### Get Axes

**Sintassi:** obj &lt;&lt; Get Axes

**Descrizione:** Restituisce lo stato di visualizzazione degli assi nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

### Get Box

**Sintassi:** obj &lt;&lt; Get Box

**Descrizione:** Restituisce lo stato di visualizzazione del frame del riquadro nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Grab Handles

**Sintassi:** obj &lt;&lt; Get Grab Handles

**Descrizione:** Restituisce lo stato di visualizzazione delle maniglie di trascinamento nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Graph Size

**Sintassi:** obj &lt;&lt; Get Graph Size

**Descrizione:** Restituisce le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

### Get Grids

**Sintassi:** obj &lt;&lt; Get Grids

**Descrizione:** Restituisce lo stato di visualizzazione delle griglie nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

### Get Hide Lights Border

**Sintassi:** obj &lt;&lt; Get Hide Lights Border

**Descrizione:** Restituisce lo stato del bordo luminoso intorno al grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

### Get Line Scale

**Sintassi:** obj &lt;&lt; Get Line Scale

**Descrizione:** Restituisce la larghezza della linea per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

### Get Marker Quality

**Sintassi:** obj &lt;&lt; Get Marker Quality

**Descrizione:** Restituisce le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

### Get Marker Scale

**Sintassi:** obj &lt;&lt; Get Marker Scale

**Descrizione:** Restituisce le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

### Get Marker Transparency

**Sintassi:** obj &lt;&lt; Get Marker Transparency

**Descrizione:** Restituisce la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

### Get Rotation

**Sintassi:** obj &lt;&lt; Get Rotation

**Descrizione:** Restituisce la rotazione corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

### Get Text Scale

**Sintassi:** obj &lt;&lt; Get Text Scale

**Descrizione:** Restituisce la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

### Get View Ortho

**Sintassi:** obj &lt;&lt; Get View Ortho

**Descrizione:** Restituisce lo stato della visualizzazione ortogonale del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

### Get View Perspective

**Sintassi:** obj &lt;&lt; Get View Perspective

**Descrizione:** Restituisce la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

### Get View Zoom

**Sintassi:** obj &lt;&lt; Get View Zoom

**Descrizione:** Restituisce lo zoom corrente per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

### Get Wall Color

**Sintassi:** obj &lt;&lt; Get Wall Color

**Descrizione:** Restituisce il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

### Get Walls

**Sintassi:** obj &lt;&lt; Get Walls

**Descrizione:** Restituisce lo stato di visualizzazione delle pareti del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

### Get X Axis Color

**Sintassi:** obj &lt;&lt; Get X Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

### Get X Axis Label

**Sintassi:** obj &lt;&lt; Get X Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

### Get Y Axis Color

**Sintassi:** obj &lt;&lt; Get Y Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

### Get Y Axis Label

**Sintassi:** obj &lt;&lt; Get Y Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

### Get Z Axis Color

**Sintassi:** obj &lt;&lt; Get Z Axis Color

**Descrizione:** Restituisce il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

### Get Z Axis Label

**Sintassi:** obj &lt;&lt; Get Z Axis Label

**Descrizione:** Restituisce l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

### Set Axes

**Sintassi:** obj &lt;&lt; Set Axes( state=0|1 )

**Descrizione:** Mostra/Nasconde gli assi X, Y e Z nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**Sintassi:** obj &lt;&lt; Set Box( state=0|1 )

**Descrizione:** Mostra/Nasconde il frame del riquadro nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**Sintassi:** obj &lt;&lt; Set Graph Size( x, y )

**Descrizione:** Imposta le dimensioni del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**Sintassi:** obj &lt;&lt; Set Grids( state=0|1 )

**Descrizione:** Mostra/Nasconde le griglie nel grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**Sintassi:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Descrizione:** Mostra/Nasconde il bordo luminoso intorno al grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**Sintassi:** obj &lt;&lt; Set Line Scale( number )

**Descrizione:** Imposta la larghezza della linea per la griglia del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**Sintassi:** obj &lt;&lt; Set Marker Quality( number )

**Descrizione:** Imposta le caratteristiche degli indicatori (come forma e ombreggiatura) per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**Sintassi:** obj &lt;&lt; Set Marker Scale( number )

**Descrizione:** Imposta le dimensioni degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**Sintassi:** obj &lt;&lt; Set Marker Transparency( fraction )

**Descrizione:** Imposta la trasparenza degli indicatori per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**Sintassi:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Descrizione:** Imposta il tasso di oscillazione nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**Sintassi:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Descrizione:** Ruota il frame fino alle coordinate specificate.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**Sintassi:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Descrizione:** Ruota il grafico su un asse specificato. I valori dx e dy sono un movimento delta del mouse rispetto al punto (sx, sy).

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**Sintassi:** obj &lt;&lt; Set Text Scale( number )

**Descrizione:** Imposta la dimensione del testo per gli assi del grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**Sintassi:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Descrizione:** Visualizza il grafico in proiezione ortogonale o lineare.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**Sintassi:** obj &lt;&lt; Set View Perspective( fraction )

**Descrizione:** Imposta la prospettiva di visualizzazione per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**Sintassi:** obj &lt;&lt; Set View Zoom( number )

**Descrizione:** Imposta lo zoom per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**Sintassi:** obj &lt;&lt; Set Wall Color( number )

**Descrizione:** Imposta il colore delle pareti per il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**Sintassi:** obj &lt;&lt; Set Walls( state=0|1 )

**Descrizione:** Mostra/Nasconde le pareti del grafico. L&apos;impostazione predefinita è &apos;Mostra&apos;.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**Sintassi:** obj &lt;&lt; Set X Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**Sintassi:** obj &lt;&lt; Set X Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**Sintassi:** obj &lt;&lt; Set Y Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**Sintassi:** obj &lt;&lt; Set Y Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**Sintassi:** obj &lt;&lt; Set Z Axis Color( color )

**Descrizione:** Imposta il colore dell&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**Sintassi:** obj &lt;&lt; Set Z Axis Label( string )

**Descrizione:** Imposta l&apos;etichetta per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### XAxis

**Sintassi:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse X nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**Sintassi:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Y nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**Sintassi:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descrizione:** Imposta i valori per l&apos;asse Z nel grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**Sintassi:** obj &lt;&lt; get light active( light number )

**Descrizione:** Restituisce la fonte luminosa specificata attiva che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

### get light color

**Sintassi:** obj &lt;&lt; get light color( light number )

**Descrizione:** Restituisce come elenco {red, green, blue} il colore della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

### get light position

**Sintassi:** obj &lt;&lt; get light position( light number )

**Descrizione:** Restituisce come elenco {x, y, z} la posizione della fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

### set light active

**Sintassi:** obj &lt;&lt; set light active( light number, state=0|1 )

**Descrizione:** Attiva la fonte luminosa specificata che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**Sintassi:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Descrizione:** Imposta il colore della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**Sintassi:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Descrizione:** Imposta la posizione della fonte luminosa che colpisce il grafico.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

