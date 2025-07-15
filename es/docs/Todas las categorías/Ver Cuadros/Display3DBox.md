# Display3DBox



## Constructores asociados

### Graph 3D Box

**Sintaxis:** y = Graph 3D Box()

**Descripción:** Envía comandos de visualización al gráfico 3D.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## Mensajes del elemento

### Add Ellipsoid

**Sintaxis:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix )obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means)obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Descripción:** Dibuja una elipsoide en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
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

**Sintaxis:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Descripción:** Dibuja n marcadores en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**Sintaxis:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Descripción:** Dibuja un vector o flecha en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

### Get Axes

**Sintaxis:** obj &lt;&lt; Get Axes

**Descripción:** Devuelve el estado de visualización de los ejes en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Axes );
Show( s );

```

### Get Box

**Sintaxis:** obj &lt;&lt; Get Box

**Descripción:** Devuelve el estado de visualización del marco del cuadro en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Grab Handles

**Sintaxis:** obj &lt;&lt; Get Grab Handles

**Descripción:** Devuelve el estado de visualización de los asideros del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Graph Size

**Sintaxis:** obj &lt;&lt; Get Graph Size

**Descripción:** Devuelve el tamaño del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Graph Size );
Show( s );

```

### Get Grids

**Sintaxis:** obj &lt;&lt; Get Grids

**Descripción:** Devuelve el estado de visualización de las cuadrículas en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Grids );
Show( s );

```

### Get Hide Lights Border

**Sintaxis:** obj &lt;&lt; Get Hide Lights Border

**Descripción:** Devuelve el estado del borde de luces de alrededor del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

### Get Line Scale

**Sintaxis:** obj &lt;&lt; Get Line Scale

**Descripción:** Devuelve el ancho de línea del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
w = obj << Frame3D( Get Line Scale );
Show( w );

```

### Get Marker Quality

**Sintaxis:** obj &lt;&lt; Get Marker Quality

**Descripción:** Devuelve las características de marcador, como la forma y sombra del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

### Get Marker Scale

**Sintaxis:** obj &lt;&lt; Get Marker Scale

**Descripción:** Devuelve el tamaño de marcador del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

### Get Marker Transparency

**Sintaxis:** obj &lt;&lt; Get Marker Transparency

**Descripción:** Devuelve la transparencia de marcador del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

### Get Rotation

**Sintaxis:** obj &lt;&lt; Get Rotation

**Descripción:** Devuelve la rotación actual del marco.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Frame3D( Get Rotation() );
Show( r );

```

### Get Text Scale

**Sintaxis:** obj &lt;&lt; Get Text Scale

**Descripción:** Devuelve el tamaño de texto del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Text Scale );
Show( s );

```

### Get View Ortho

**Sintaxis:** obj &lt;&lt; Get View Ortho

**Descripción:** Devuelve el estado de vista ortográfica del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
o = obj << Frame3D( Get View Ortho );
Show( o );

```

### Get View Perspective

**Sintaxis:** obj &lt;&lt; Get View Perspective

**Descripción:** Devuelve la perspectiva de vista del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Get View Perspective );
Show( p );

```

### Get View Zoom

**Sintaxis:** obj &lt;&lt; Get View Zoom

**Descripción:** Devuelve el zoom actual del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Frame3D( Get View Zoom );
Show( z );

```

### Get Wall Color

**Sintaxis:** obj &lt;&lt; Get Wall Color

**Descripción:** Devuelve el color de pared del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Wall Color );
Show( c );

```

### Get Walls

**Sintaxis:** obj &lt;&lt; Get Walls

**Descripción:** Devuelve el estado de visualización de las paredes del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
s = obj << Frame3D( Get Walls );
Show( s );

```

### Get X Axis Color

**Sintaxis:** obj &lt;&lt; Get X Axis Color

**Descripción:** Devuelve el color de eje x del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

### Get X Axis Label

**Sintaxis:** obj &lt;&lt; Get X Axis Label

**Descripción:** Devuelve la etiqueta del eje X del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

### Get Y Axis Color

**Sintaxis:** obj &lt;&lt; Get Y Axis Color

**Descripción:** Devuelve el color de eje y del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

### Get Y Axis Label

**Sintaxis:** obj &lt;&lt; Get Y Axis Label

**Descripción:** Devuelve la etiqueta del eje Y del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

### Get Z Axis Color

**Sintaxis:** obj &lt;&lt; Get Z Axis Color

**Descripción:** Devuelve el color de eje z del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

### Get Z Axis Label

**Sintaxis:** obj &lt;&lt; Get Z Axis Label

**Descripción:** Devuelve la etiqueta del eje Z del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

### Set Axes

**Sintaxis:** obj &lt;&lt; Set Axes( state=0|1 )

**Descripción:** Muestra u oculta los ejes x, y y z del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**Sintaxis:** obj &lt;&lt; Set Box( state=0|1 )

**Descripción:** Muestra u oculta el marco del cuadro del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**Sintaxis:** obj &lt;&lt; Set Graph Size( x, y )

**Descripción:** Establece el tamaño del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**Sintaxis:** obj &lt;&lt; Set Grids( state=0|1 )

**Descripción:** Muestra u oculta las cuadrículas del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**Sintaxis:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**Descripción:** Oculta o muestra el borde de luces alrededor del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**Sintaxis:** obj &lt;&lt; Set Line Scale( number )

**Descripción:** Establece el ancho de línea para la cuadrícula del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**Sintaxis:** obj &lt;&lt; Set Marker Quality( number )

**Descripción:** Establece las características de marcador, como la forma y sombra del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**Sintaxis:** obj &lt;&lt; Set Marker Scale( number )

**Descripción:** Establece el tamaño de marcador del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**Sintaxis:** obj &lt;&lt; Set Marker Transparency( fraction )

**Descripción:** Establece la transparencia de marcador del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**Sintaxis:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**Descripción:** Establece la tasa de oscilación del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**Sintaxis:** obj &lt;&lt; Set Rotation( X, Y, Z )

**Descripción:** Rota el marco a las coordenadas especificadas.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**Sintaxis:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**Descripción:** Gira el gráfico sobre un eje especificado. Los valores dx y dy son el movimiento delta del ratón respecto al punto, (sx, sy).

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**Sintaxis:** obj &lt;&lt; Set Text Scale( number )

**Descripción:** Establece el tamaño de texto del texto de eje del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**Sintaxis:** obj &lt;&lt; Set View Ortho( state=0|1 )

**Descripción:** Muestra el gráfico de manera ortográfica o lineal.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**Sintaxis:** obj &lt;&lt; Set View Perspective( fraction )

**Descripción:** Establece la perspectiva de vista del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**Sintaxis:** obj &lt;&lt; Set View Zoom( number )

**Descripción:** Establece el zoom del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**Sintaxis:** obj &lt;&lt; Set Wall Color( number )

**Descripción:** Establece el color de fondo del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**Sintaxis:** obj &lt;&lt; Set Walls( state=0|1 )

**Descripción:** Muestra u oculta las paredes del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**Sintaxis:** obj &lt;&lt; Set X Axis Color( color )

**Descripción:** Establece el color del eje x del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**Sintaxis:** obj &lt;&lt; Set X Axis Label( string )

**Descripción:** Establece la etiqueta del eje X del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**Sintaxis:** obj &lt;&lt; Set Y Axis Color( color )

**Descripción:** Establece el color del eje y del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**Sintaxis:** obj &lt;&lt; Set Y Axis Label( string )

**Descripción:** Establece la etiqueta del eje Y del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**Sintaxis:** obj &lt;&lt; Set Z Axis Color( color )

**Descripción:** Establece el color del eje z del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**Sintaxis:** obj &lt;&lt; Set Z Axis Label( string )

**Descripción:** Establece la etiqueta del eje Z del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### XAxis

**Sintaxis:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje X del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**Sintaxis:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje Y del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**Sintaxis:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje Z del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**Sintaxis:** obj &lt;&lt; get light active( light number )

**Descripción:** Devuelve la activación de la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

### get light color

**Sintaxis:** obj &lt;&lt; get light color( light number )

**Descripción:** Devuelve como lista {rojo, verde, azul} el color de la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

### get light position

**Sintaxis:** obj &lt;&lt; get light position( light number )

**Descripción:** Devuelve como lista {x, y, z} la posición de la luz especificada que brilla en el gráfico

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

### set light active

**Sintaxis:** obj &lt;&lt; set light active( light number, state=0|1 )

**Descripción:** Enciende la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**Sintaxis:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**Descripción:** Establece el color de la luz que brilla del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**Sintaxis:** obj &lt;&lt; set light position( light number, X, Y, Z )

**Descripción:** Establece la posición de la luz que brilla en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

