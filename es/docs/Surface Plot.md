# Surface Plot



## Surface Frame3D

### Add Ellipsoid

**Sintaxis:** obj << Add Ellipsoid( 4x4 matrix )

obj << Add Ellipsoid(3x3 cov,3x1 means)

obj << Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**Descripción:** Dibuja una elipsoide en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D(
	Add Ellipsoid(
		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],
		[6.55099 2.96919 5.5066],
		[0.57829 0.29087 0.53668]
	)
);

```

### Add Markers

**Sintaxis:** obj << Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**Descripción:** Dibuja n marcadores en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

### Add Vector

**Sintaxis:** obj << Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**Descripción:** Dibuja un vector o flecha en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

### Get Axes

**Sintaxis:** obj << Get Axes

**Descripción:** Devuelve el estado de visualización de los ejes en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Axes );
Show( s );

```

### Get Box

**Sintaxis:** obj << Get Box

**Descripción:** Devuelve el estado de visualización del marco del cuadro en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Grab Handles

**Sintaxis:** obj << Get Grab Handles

**Descripción:** Devuelve el estado de visualización de los asideros del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Box );
Show( s );

```

### Get Graph Size

**Sintaxis:** obj << Get Graph Size

**Descripción:** Devuelve el tamaño del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Graph Size );
Show( s );

```

### Get Grids

**Sintaxis:** obj << Get Grids

**Descripción:** Devuelve el estado de visualización de las cuadrículas en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Grids );
Show( s );

```

### Get Hide Lights Border

**Sintaxis:** obj << Get Hide Lights Border

**Descripción:** Devuelve el estado del borde de luces de alrededor del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
state = obj << Frame3D( Get Hide Lights Border );
Show( state );

```

### Get Line Scale

**Sintaxis:** obj << Get Line Scale

**Descripción:** Devuelve el ancho de línea del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
w = obj << Frame3D( Get Line Scale );
Show( w );

```

### Get Marker Quality

**Sintaxis:** obj << Get Marker Quality

**Descripción:** Devuelve las características de marcador, como la forma y sombra del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
q = obj << Frame3D( Get Marker Quality );
Show( q );

```

### Get Marker Scale

**Sintaxis:** obj << Get Marker Scale

**Descripción:** Devuelve el tamaño de marcador del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Marker Scale );
Show( s );

```

### Get Marker Transparency

**Sintaxis:** obj << Get Marker Transparency

**Descripción:** Devuelve la transparencia de marcador del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Frame3D( Get Marker Transparency );
Show( t );

```

### Get Rotation

**Sintaxis:** obj << Get Rotation

**Descripción:** Devuelve la rotación actual del marco.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Frame3D( Get Rotation() );
Show( r );

```

### Get Text Scale

**Sintaxis:** obj << Get Text Scale

**Descripción:** Devuelve el tamaño de texto del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Text Scale );
Show( s );

```

### Get View Ortho

**Sintaxis:** obj << Get View Ortho

**Descripción:** Devuelve el estado de vista ortográfica del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
o = obj << Frame3D( Get View Ortho );
Show( o );

```

### Get View Perspective

**Sintaxis:** obj << Get View Perspective

**Descripción:** Devuelve la perspectiva de vista del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Get View Perspective );
Show( p );

```

### Get View Zoom

**Sintaxis:** obj << Get View Zoom

**Descripción:** Devuelve el zoom actual del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
z = obj << Frame3D( Get View Zoom );
Show( z );

```

### Get Wall Color

**Sintaxis:** obj << Get Wall Color

**Descripción:** Devuelve el color de pared del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Wall Color );
Show( c );

```

### Get Walls

**Sintaxis:** obj << Get Walls

**Descripción:** Devuelve el estado de visualización de las paredes del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
s = obj << Frame3D( Get Walls );
Show( s );

```

### Get X Axis Color

**Sintaxis:** obj << Get X Axis Color

**Descripción:** Devuelve el color de eje x del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get X Axis Color );
Show( c );

```

### Get X Axis Label

**Sintaxis:** obj << Get X Axis Label

**Descripción:** Devuelve la etiqueta del eje X del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get X Axis Label );
Show( label );

```

### Get Y Axis Color

**Sintaxis:** obj << Get Y Axis Color

**Descripción:** Devuelve el color de eje y del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Y Axis Color );
Show( c );

```

### Get Y Axis Label

**Sintaxis:** obj << Get Y Axis Label

**Descripción:** Devuelve la etiqueta del eje Y del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Y Axis Label );
Show( label );

```

### Get Z Axis Color

**Sintaxis:** obj << Get Z Axis Color

**Descripción:** Devuelve el color de eje z del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Get Z Axis Color );
Show( c );

```

### Get Z Axis Label

**Sintaxis:** obj << Get Z Axis Label

**Descripción:** Devuelve la etiqueta del eje Z del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
label = obj << Frame3D( Get Z Axis Label );
Show( label );

```

### Legend

**Sintaxis:** obj << Legend( state=0|1 )

**Descripción:** Muestra u oculta la leyenda del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( Both Sides )
);
obj << Frame3D( Legend( 0 ) );
Wait( 2 );
obj << Frame3D( Legend( 1 ) );

```

### Set Axes

**Sintaxis:** obj << Set Axes( state=0|1 )

**Descripción:** Muestra u oculta los ejes x, y y z del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Axes( 1 ) );

```

### Set Box

**Sintaxis:** obj << Set Box( state=0|1 )

**Descripción:** Muestra u oculta el marco del cuadro del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Box( 1 ) );

```

### Set Graph Size

**Sintaxis:** obj << Set Graph Size( x, y )

**Descripción:** Establece el tamaño del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Graph Size( 700, 800 ) );

```

### Set Grids

**Sintaxis:** obj << Set Grids( state=0|1 )

**Descripción:** Muestra u oculta las cuadrículas del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Grids( 1 ) );

```

### Set Hide Lights Border

**Sintaxis:** obj << Set Hide Lights Border( state=0|1 )

**Descripción:** Oculta o muestra el borde de luces alrededor del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ) );

```

### Set Line Scale

**Sintaxis:** obj << Set Line Scale( number )

**Descripción:** Establece el ancho de línea para la cuadrícula del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Line Scale( 6.5 ) );

```

### Set Marker Quality

**Sintaxis:** obj << Set Marker Quality( number )

**Descripción:** Establece las características de marcador, como la forma y sombra del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

### Set Marker Scale

**Sintaxis:** obj << Set Marker Scale( number )

**Descripción:** Establece el tamaño de marcador del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Scale( 3.5 ) );

```

### Set Marker Transparency

**Sintaxis:** obj << Set Marker Transparency( fraction )

**Descripción:** Establece la transparencia de marcador del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

### Set Oscillation

**Sintaxis:** obj << Set Oscillation( X, Y, Z, duration )

**Descripción:** Establece la tasa de oscilación del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

### Set Rotation

**Sintaxis:** obj << Set Rotation( X, Y, Z )

**Descripción:** Rota el marco a las coordenadas especificadas.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

### Set Spin

**Sintaxis:** obj << Set Spin(  dx, dy, sx, sy  )

**Descripción:** Gira el gráfico sobre un eje especificado. Los valores dx y dy son el movimiento delta del ratón respecto al punto, (sx, sy).

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

### Set Text Scale

**Sintaxis:** obj << Set Text Scale( number )

**Descripción:** Establece el tamaño de texto del texto de eje del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Text Scale( 1.4 ) );

```

### Set View Ortho

**Sintaxis:** obj << Set View Ortho( state=0|1 )

**Descripción:** Muestra el gráfico de manera ortográfica o lineal.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Ortho( 1 ) );

```

### Set View Perspective

**Sintaxis:** obj << Set View Perspective( fraction )

**Descripción:** Establece la perspectiva de vista del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Perspective( 0.275 ) );

```

### Set View Zoom

**Sintaxis:** obj << Set View Zoom( number )

**Descripción:** Establece el zoom del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set View Zoom( 0.5 ) );
Wait( 2 );
obj << Frame3D( Set View Zoom( 2 ) );

```

### Set Wall Color

**Sintaxis:** obj << Set Wall Color( number )

**Descripción:** Establece el color de fondo del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Wall Color( -16775543 ) );

```

### Set Walls

**Sintaxis:** obj << Set Walls( state=0|1 )

**Descripción:** Muestra u oculta las paredes del gráfico. Se muestra como configuración predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Walls( 1 ) );

```

### Set X Axis Color

**Sintaxis:** obj << Set X Axis Color( color )

**Descripción:** Establece el color del eje x del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Color( 5 ) );

```

### Set X Axis Label

**Sintaxis:** obj << Set X Axis Label( string )

**Descripción:** Establece la etiqueta del eje X del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

### Set Y Axis Color

**Sintaxis:** obj << Set Y Axis Color( color )

**Descripción:** Establece el color del eje y del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Color( 11 ) );

```

### Set Y Axis Label

**Sintaxis:** obj << Set Y Axis Label( string )

**Descripción:** Establece la etiqueta del eje Y del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

### Set Z Axis Color

**Sintaxis:** obj << Set Z Axis Color( color )

**Descripción:** Establece el color del eje z del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Color( "Green" ) );

```

### Set Z Axis Label

**Sintaxis:** obj << Set Z Axis Label( string )

**Descripción:** Establece la etiqueta del eje Z del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

### Surface Frame3D

**Sintaxis:** Surface Frame3D( <commands passed to Frame3D> )

**Descripción:** Envía comandos de visualización al gráfico 3D.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### XAxis

**Sintaxis:** obj << XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje X del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

### YAxis

**Sintaxis:** obj << YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje Y del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

### Z Axis

**Sintaxis:** obj << Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**Descripción:** Establece los valores del eje Z del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

### get light active

**Sintaxis:** obj << get light active( light number )

**Descripción:** Devuelve la activación de la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );
Show( p );

```

### get light color

**Sintaxis:** obj << get light color( light number )

**Descripción:** Devuelve como lista {rojo, verde, azul} el color de la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );
Show( c );

```

### get light position

**Sintaxis:** obj << get light position( light number )

**Descripción:** Devuelve como lista {x, y, z} la posición de la luz especificada que brilla en el gráfico

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );
Show( p );

```

### set light active

**Sintaxis:** obj << set light active( light number, state=0|1 )

**Descripción:** Enciende la luz especificada que brilla en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

### set light color

**Sintaxis:** obj << set light color( light number, red value, green value, blue value )

**Descripción:** Establece el color de la luz que brilla del gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

### set light position

**Sintaxis:** obj << set light position( light number, X, Y, Z )

**Descripción:** Establece la posición de la luz que brilla en el gráfico.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Sintaxis:** obj << By( column(s) )

**Descripción:** Genera varios informes, uno para cada nivel de las variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);

```

### Clip Sheet

**Sintaxis:** obj << Clip Sheet( state=0|1 ); 

obj << Clip Sheet1( state=0|1 )

**Descripción:** Recorta la superficie según los rangos de las columnas utilizadas en la fórmula de la primera columna de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet1

**Sintaxis:** obj << Clip Sheet( state=0|1 ); 

obj << Clip Sheet1( state=0|1 )

**Descripción:** Recorta la superficie según los rangos de las columnas utilizadas en la fórmula de la primera columna de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
Wait( 1 );
obj << Clip Sheet( 1 );

```

### Clip Sheet2

**Sintaxis:** obj << Clip Sheet2( state=0|1 )

**Descripción:** Recorta la superficie según los rangos de las columnas utilizadas en la fórmula de la segunda columna de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Show Surface2( "Both Sides" );
Wait( 1 );
obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**Sintaxis:** obj << Clip Sheet3( state=0|1 )

**Descripción:** Recorta la superficie según los rangos de las columnas utilizadas en la fórmula de la tercera columna de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**Sintaxis:** obj << Clip Sheet4( state=0|1 )

**Descripción:** Recorta la superficie según los rangos de las columnas utilizadas en la fórmula de la cuarta columna de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Clip Sheet4( 1 );

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Columns

**Sintaxis:** obj << Columns( column(s) )

**Descripción:** Las variables estarán disponibles para las coordenadas X, Y y Z en el gráfico 3D.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Contour Color

**Sintaxis:** obj << Contour Color( color ); 

obj << Contour Color1( color )

**Descripción:** Especifica el color del contorno en la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**Sintaxis:** obj << Contour Color( color ); 

obj << Contour Color1( color )

**Descripción:** Especifica el color del contorno en la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**Sintaxis:** obj << Contour Color2( color )

**Descripción:** Especifica el color del contorno en la superficie para la segunda respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Show Contour2( "On Surface" );
Wait( 1 );
obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**Sintaxis:** obj << Contour Color3( color )

**Descripción:** Especifica el color del contorno en la superficie para la tercera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Show Contour3( "On Surface" );
Wait( 1 );
obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**Sintaxis:** obj << Contour Color4( color )

**Descripción:** Especifica el color del contorno en la superficie para la cuarta respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" ),
	Show Surface1( "Off" )
);
obj << Show Contour4( "On Surface" );
Wait( 1 );
obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**Sintaxis:** obj << Control Panel( state=0|1 )

**Descripción:** Muestra u oculta el Panel de control, que incluye los controles de apariencia, variables independientes y variables dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Control Panel( 0 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Table Window;

```

### Data points Color

**Sintaxis:** obj << Data Points Color( color ); 

obj << Data Points Color1( color )

**Descripción:** Cambia el color de los puntos de datos de la primera variable dependiente dibujada sobre la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**Sintaxis:** obj << Data Points Color( color ); 

obj << Data Points Color1( color )

**Descripción:** Cambia el color de los puntos de datos de la primera variable dependiente dibujada sobre la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Mesh" );
obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**Sintaxis:** obj << Data points Color2( color )

**Descripción:** Cambia el color de los puntos de datos de la segunda variable dependiente dibujada sobre la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );
obj << Datapoints Choice2( "Mesh" );
obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**Sintaxis:** obj << Data points Color3( color )

**Descripción:** Cambia el color de los puntos de datos de la tercera variable dependiente dibujada sobre la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Needles" );
obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**Sintaxis:** obj << Data points Color4( color )

**Descripción:** Cambia el color de los puntos de datos de la cuarta variable dependiente dibujada sobre la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Datapoints Choice4( "Surface" );
obj << Data points Color4( 100, 0, 200 );
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**Sintaxis:** obj << Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); 

obj << Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Descripción:** Especifica cómo se muestran los puntos en la superficie para la primera respuesta. El estilo predeterminado es la opción Puntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**Sintaxis:** obj << Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); 

obj << Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**Descripción:** Especifica cómo se muestran los puntos en la superficie para la primera respuesta. El estilo predeterminado es la opción Puntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( :Pred Formula ABRASION );
obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**Sintaxis:** obj << Datapoints Choice2( "Desactivado"|"Puntos"|"Agujas"|"Malla"|"Superficie" )

**Descripción:** Especifica cómo se muestran los puntos en la superficie para la segunda respuesta. El estilo predeterminado es la opción Puntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );
Wait( 1 );
obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**Sintaxis:** obj << Datapoints Choice3( "Desactivado"|"Puntos"|"Agujas"|"Malla"|"Superficie" )

**Descripción:** Especifica cómo se muestran los puntos en la superficie para la tercera respuesta. El estilo predeterminado es la opción Puntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );
obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**Sintaxis:** obj << Datapoints Choice4( "Desactivado"|"Puntos"|"Agujas"|"Malla"|"Superficie" )

**Descripción:** Especifica cómo se muestran los puntos en la superficie para la cuarta respuesta. El estilo predeterminado es la opción Puntos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
obj << Response(
	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
	:Pred Formula HARDNESS
);
obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**Sintaxis:** obj << Dependent Variables Points( state=0|1 )

**Descripción:** Muestra u oculta las opciones de puntos en los controles de las variables dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**Sintaxis:** obj << Dependent Variables Response Grid( state=0|1 )

**Descripción:** Muestra u oculta las opciones de cuadrícula en los controles de las variables dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Dependent Variables Response Grid( 0 );

```

### Equation

**Sintaxis:** obj << Equation( equation1, <equation2>, <equation3>, <equation4>  )

**Descripción:** Asigna ecuaciones a las hojas en un orden especificado en la sección Variables dependientes. Para omitir una respuesta, especifique un valor faltante utilizando un punto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Show Surface2( "Both sides" );
obj << Equation( ., ".7*:Silane+5*:Silica" );
obj << Show Formula( 1 );

```

### Factors

**Sintaxis:** obj << Factors( column(s) )

**Descripción:** Las variables estarán disponibles para las coordenadas X, Y y Z en el gráfico 3D.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

### Fit to Window

**Sintaxis:** obj << Fit to Window( "Automático"|"Activo"|"Desactivado" )

**Descripción:** Establece el comportamiento del ajuste automático de tamaño del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Fit to Window( "Off" );

```

### Formula

**Sintaxis:** obj << Formula( column, <column>, <column>, <column>  )

**Descripción:** Asigna fórmulas de columnas a la hojas en el orden especificado en la sección Variables dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice2( "Surface" )
);
obj << Show Surface2( "Both sides" );
obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**Sintaxis:** obj << Frame3D( Scatterplot 3D options )

**Descripción:** Cambia las opciones de visualización de la superficie. Esta opción utiliza mensajes de la plataforma Gráfico de dispersión 3D. Consulte la descripción completa en Gráfico de dispersión 3D para obtener más detalles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Frame3D(
	Set Graph Size( 692, 671 ),
	Set Rotation( -54, 0, 38 ),
	Background Color( 255, 177, 125 )
);

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj << Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Hide Lights Border

**Sintaxis:** obj << Hide Lights Border( state=0|1 )

**Descripción:** Muestra u oculta los controles de iluminación.

```js

Names Default To Here( 1 );
obj = Surface Plot();
Wait( 1 );
obj << Hide Lights Border( 1 );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Iso Value

**Sintaxis:** obj << Iso Value( id, value )

**Descripción:** Cambia el valor del control deslizante de la isosuperficie para una variable dependiente concreta. El argumento id identifica la variable dependiente utilizando un índice que empieza en el cero.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Iso Value( 0, 100 );
obj << Iso Value( 1, 1500 );

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### Lock Z Scale

**Sintaxis:** obj << Lock Z Scale( state=0|1 )

**Descripción:** Bloquea el eje Z en sus valores actuales.

```js

Names Default To Here( 1 );
obj = Surface Plot();
obj << Lock Z Scale( 1 );

```

### Mesh Color

**Sintaxis:** obj << Mesh Color( color ); 

obj << Mesh Color1( color )

**Descripción:** Especifica el color de la malla de superficie para la primera variable dependiente. Esta opción solo está disponible cuando se selecciona un valor de Malla distinto de Desactivado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**Sintaxis:** obj << Mesh Color( color ); 

obj << Mesh Color1( color )

**Descripción:** Especifica el color de la malla de superficie para la primera variable dependiente. Esta opción solo está disponible cuando se selecciona un valor de Malla distinto de Desactivado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Show Mesh( "X and Y" );
Wait( 1 );
obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**Sintaxis:** obj << Mesh Color2( color )

**Descripción:** Especifica el color de la malla de superficie para la segunda variable dependiente. Esta opción solo está disponible cuando se selecciona un valor de Malla distinto de Desactivado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Mode( "Isosurface" );
obj << Show Mesh2( "X and Y" );
Wait( 1 );
obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**Sintaxis:** obj << Mesh Color3( color )

**Descripción:** Especifica el color de la malla de superficie para la tercera variable dependiente. Esta opción solo está disponible cuando se selecciona un valor de Malla distinto de Desactivado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG )
);
obj << Mode( "Isosurface" );
obj << Show Mesh3( "X and Y" );
Wait( 1 );
obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**Sintaxis:** obj << Mesh Color4( color )

**Descripción:** Especifica el color de la malla de superficie para la cuarta variable dependiente. Esta opción solo está disponible cuando se selecciona un valor de Malla distinto de Desactivado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Mesh4( "X and Y" );
Wait( 1 );
obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**Sintaxis:** obj << Mode( "Hoja, puntos"|"Isosuperficie"|"Cuadrícula de densidad" )

**Descripción:** Especifica cómo se muestran las superficies en el gráfico. La opción Hojas, puntos muestra hojas, puntos y líneas en la superficie. Las opciones de Isosuperficie utilizan una fórmula con tres variables independientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface 2( "Both Sides" );
obj << Show Surface 4( "Both Sides" );
obj << Mode( "Isosurface" );

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj << Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Resolution

**Sintaxis:** obj << Resolution( number )

obj << X Resolution( number )

obj << Y Resolution( number )

**Descripción:** Cambia la resolución utilizada para dibujar el gráfico de superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### Response

**Sintaxis:** obj << Response( column, <column>, <column>, <column>  )

**Descripción:** Identifica hasta cuatro columnas de respuesta para representar puntos superpuestos. Para omitir una respuesta, utilice cualquier cadena de caracteres entre comillas como marcador de posición.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Datapoints Choice3( "Surface" )
);
obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**Sintaxis:** obj << Response Column Color Theme( color theme ); 

obj << Response Column Color Theme1( color theme )

**Descripción:** Cambia el tema de color de la superficie para la primera respuesta. Esta opción solo está disponible para las columnas de respuesta de puntos que utilizan un gradiente continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**Sintaxis:** obj << Response Column Color Theme( color theme ); 

obj << Response Column Color Theme1( color theme )

**Descripción:** Cambia el tema de color de la superficie para la primera respuesta. Esta opción solo está disponible para las columnas de respuesta de puntos que utilizan un gradiente continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Continuous Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**Sintaxis:** obj << Response Column Color Theme2( color theme )

**Descripción:** Cambia el tema de color de la superficie para la segunda respuesta. Esta opción solo está disponible para las columnas de respuesta de puntos que utilizan un gradiente continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Continuous Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**Sintaxis:** obj << Response Column Color Theme3( color theme )

**Descripción:** Cambia el tema de color de la superficie para la tercera respuesta. Esta opción solo está disponible para las columnas de respuesta de puntos que utilizan un gradiente continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Continuous Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**Sintaxis:** obj << Response Column Color Theme4( color theme )

**Descripción:** Cambia el tema de color de la superficie para la cuarta respuesta. Esta opción solo está disponible para las columnas de respuesta de puntos que utilizan un gradiente continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Continuous Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**Sintaxis:** obj << Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); 

obj << Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descripción:** Especifica si la primera superficie se debe colorear con un color sólido, gradientes continuos o gradientes discretos. Esta opción solo está disponible si la superficie se genera utilizando una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**Sintaxis:** obj << Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); 

obj << Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descripción:** Especifica si la primera superficie se debe colorear con un color sólido, gradientes continuos o gradientes discretos. Esta opción solo está disponible si la superficie se genera utilizando una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**Sintaxis:** obj << Response Column Fill2( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica si la segunda superficie se debe colorear con un color sólido, gradientes continuos o gradientes discretos. Esta opción solo está disponible si la superficie se genera utilizando una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**Sintaxis:** obj << Response Column Fill3( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica si la tercera superficie se debe colorear con un color sólido, gradientes continuos o gradientes discretos. Esta opción solo está disponible si la superficie se genera utilizando una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**Sintaxis:** obj << Response Column Fill4( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica si la cuarta superficie se debe colorear con un color sólido, gradientes continuos o gradientes discretos. Esta opción solo está disponible si la superficie se genera utilizando una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**Sintaxis:** obj << Response Column Gradient Lines( state=0|1 ); 

obj << Response Column Gradient Lines1( state=0|1 )

**Descripción:** Muestra u oculta las líneas entre los niveles de gradiente en la superficie para la primera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una respuesta de columna de puntos dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**Sintaxis:** obj << Response Column Gradient Lines( state=0|1 ); 

obj << Response Column Gradient Lines1( state=0|1 )

**Descripción:** Muestra u oculta las líneas entre los niveles de gradiente en la superficie para la primera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una respuesta de columna de puntos dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**Sintaxis:** obj << Response Column Gradient Lines2( state=0|1 )

**Descripción:** Muestra u oculta las líneas entre los niveles de gradiente en la superficie para la segunda respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una respuesta de columna de puntos dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**Sintaxis:** obj << Response Column Gradient Lines3( state=0|1 )

**Descripción:** Muestra u oculta las líneas entre los niveles de gradiente en la superficie para la tercera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una respuesta de columna de puntos dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
obj << Response Column Gradient Lines3( 0 );
Wait( 1 );
obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**Sintaxis:** obj << Response Column Gradient Lines4( state=0|1 )

**Descripción:** Muestra u oculta las líneas entre los niveles de gradiente en la superficie para la cuarta respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una respuesta de columna de puntos dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	),
	Response Column Gradient Lines4( 0 )
);
Wait( 1 );
obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**Sintaxis:** obj << Response Column Gradients( number ); 

obj << Response Column Gradients1( number )

**Descripción:** Especifica el número de gradientes en la superficie para la primera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**Sintaxis:** obj << Response Column Gradients( number ); 

obj << Response Column Gradients1( number )

**Descripción:** Especifica el número de gradientes en la superficie para la primera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Equation( ., ., ., . ),
	Datapoints Choice( "Surface" ),
	Response Column Fill( "Discrete Gradients" ),
	Response( :Pred Formula ABRASION )
);
Wait( 1 );
obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**Sintaxis:** obj << Response Column Gradients2( number )

**Descripción:** Especifica el número de gradientes en la superficie para la segunda respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Equation( ., ., ., . ),
	Datapoints Choice2( "Surface" ),
	Response Column Fill2( "Discrete Gradients" ),
	Response( "Pred Formula MODULUS", :Pred Formula MODULUS )
);
Wait( 1 );
obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**Sintaxis:** obj << Response Column Gradients3( number )

**Descripción:** Especifica el número de gradientes en la superficie para la tercera respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Equation( ., ., ., . ),
	Datapoints Choice3( "Surface" ),
	Response Column Fill3( "Discrete Gradients" ),
	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG )
);
Wait( 1 );
obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**Sintaxis:** obj << Response Column Gradients4( number )

**Descripción:** Especifica el número de gradientes en la superficie para la cuarta respuesta. Esta opción solo está disponible si la superficie se genera utilizando gradientes discretos con una columna de respuesta de puntos dependientes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Equation( ., ., ., . ),
	Datapoints Choice4( "Surface" ),
	Response Column Fill4( "Discrete Gradients" ),
	Response(
		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Response Column Gradients4( 10 );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Script Window;

```

### Scale response axes independently

**Sintaxis:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); 

obj << Scale response axes independently( state=0|1 )

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica si hay una escala independiente para cada respuesta o si la escala del eje para todas las respuestas coincide con la escala de la primera respuesta introducida en la ventana de inicio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Scale response axes independently( 1 )
);
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Scale response axes independently( 0 );

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```js

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Z Variable

**Sintaxis:** obj << Set Z Variable( column )

**Descripción:** Establece la columna especificada como variable Z en el gráfico de superficie. Esta opción solo está disponible para las isosuperficies.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Mode( "Isosurface" )
);
obj << Set Y Variable( :SULFUR );
Wait( 1 );
obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**Sintaxis:** obj << SetVariableAxis( column, <Current Value( number )>, <Axis Data( axis options )> )

**Descripción:** Especifica atributos para el eje de la variable independiente especificada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );
Wait( 1 );
obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**Sintaxis:** obj << SetXVariable( column )

**Descripción:** Establece la columna especificada como variable X en el gráfico de superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set X Variable( :SULFUR );

```

### SetYVariable

**Sintaxis:** obj << SetYVariable( column )

**Descripción:** Establece la columna especificada como variable Y en el gráfico de superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**Sintaxis:** obj << SetZAxis( column, Current Value( number ), <Axis Data( axis options )> )

**Descripción:** Especifica atributos para el eje Z.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**Sintaxis:** obj << Show Contour( "Off"|"Below"|"Above"|"On Surface" ); 

obj << Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Descripción:** Especifica la colocación de las líneas de contorno en el gráfico en relación con la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour1

**Sintaxis:** obj << Show Contour( "Off"|"Below"|"Above"|"On Surface" ); 

obj << Show Contour1( "Off"|"Below|Above"|"On Surface" )

**Descripción:** Especifica la colocación de las líneas de contorno en el gráfico en relación con la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour( "On Surface" );

```

### Show Contour2

**Sintaxis:** obj << Show Contour2( "Desactivado"|"Debajo"|"Encima"|"En la superficie" )

**Descripción:** Especifica la colocación de las líneas de contorno en el gráfico en relación con la superficie para la segunda respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Contour2( "Above" );

```

### Show Contour3

**Sintaxis:** obj << Show Contour3( "Desactivado"|"Debajo"|"Encima"|"En la superficie" )

**Descripción:** Especifica la colocación de las líneas de contorno en el gráfico en relación con la superficie para la tercera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
Wait( 1 );
obj << Show Contour3( "Below" );

```

### Show Contour4

**Sintaxis:** obj << Show Contour4( "Desactivado"|"Debajo"|"Encima"|"En la superficie" )

**Descripción:** Especifica la colocación de las líneas de contorno en el gráfico en relación con la superficie para la cuarta respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
Wait( 1 );
obj << Show Contour4( "On Surface" );

```

### Show Mesh

**Sintaxis:** obj << Show Mesh( "Off"|"X"|"Y"|"X and Y" ); 

obj << Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Descripción:** Especifica el estilo de la malla de superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**Sintaxis:** obj << Show Mesh( "Off"|"X"|"Y"|"X and Y" ); 

obj << Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**Descripción:** Especifica el estilo de la malla de superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**Sintaxis:** obj << Show Mesh2( "Desactivado"|"X e Y"|"X"|"Y" )

**Descripción:** Especifica el estilo de la malla de superficie para la segunda respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh2( "X" );

```

### Show Mesh3

**Sintaxis:** obj << Show Mesh3( "Desactivado"|"X e Y"|"X"|"Y" )

**Descripción:** Especifica el estilo de la malla de superficie para la tercera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh3( "Y" );

```

### Show Mesh4

**Sintaxis:** obj << Show Mesh4( "Desactivado"|"X e Y"|"X"|"Y" )

**Descripción:** Especifica el estilo de la malla de superficie para la cuarta respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Mesh4( "X and Y" );

```

### Show Surface

**Sintaxis:** obj << Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); 

obj << Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Descripción:** Especifica cómo se muestra la superficie de la primera respuesta. Esta opción solo está disponible para las superficies generadas por una respuesta de columna de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface1

**Sintaxis:** obj << Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); 

obj << Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**Descripción:** Especifica cómo se muestra la superficie de la primera respuesta. Esta opción solo está disponible para las superficies generadas por una respuesta de columna de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface( "Below Only" );

```

### Show Surface2

**Sintaxis:** obj << Show Surface2( "Desactivado"|"Ambos lados"|"Sólo encima"|"Sólo debajo" )

**Descripción:** Especifica cómo se muestra la superficie de la segunda respuesta. Esta opción solo está disponible para las superficies generadas por una respuesta de columna de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**Sintaxis:** obj << Show Surface3( "Desactivado"|"Ambos lados"|"Sólo encima"|"Sólo debajo" )

**Descripción:** Especifica cómo se muestra la superficie de la tercera respuesta. Esta opción solo está disponible para las superficies generadas por una respuesta de columna de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface3( "Above Only" );

```

### Show Surface4

**Sintaxis:** obj << Show Surface4( "Desactivado"|"Ambos lados"|"Sólo encima"|"Sólo debajo" )

**Descripción:** Especifica cómo se muestra la superficie de la cuarta respuesta. Esta opción solo está disponible para las superficies generadas por una respuesta de columna de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Show Surface4( "Both Sides" );

```

### Show formula

**Sintaxis:** obj << Show formula( state=0|1 )

**Descripción:** Muestra u oculta la fórmula de todas las variables dependientes que aparecen actualmente en el gráfico de superficie.

```js

Names Default To Here( 1 );
obj = Surface Plot();
obj << Show Formula( 1 );

```

### Surface Alpha

**Sintaxis:** obj << Surface Alpha( number ); 

obj << Surface Alpha1( number )

**Descripción:** Especifica la opacidad de la isosuperficie para la primera variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**Sintaxis:** obj << Surface Alpha( number ); 

obj << Surface Alpha1( number )

**Descripción:** Especifica la opacidad de la isosuperficie para la primera variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**Sintaxis:** obj << Surface Alpha2( number )

**Descripción:** Especifica la opacidad de la isosuperficie para la segunda variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface2( "Both sides" );
Wait( 1 );
obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**Sintaxis:** obj << Surface Alpha3( number )

**Descripción:** Especifica la opacidad de la isosuperficie para la tercera variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface3( "Both sides" );
Wait( 1 );
obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**Sintaxis:** obj << Surface Alpha4( number )

**Descripción:** Especifica la opacidad de la isosuperficie para la cuarta variable de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Mode( "Isosurface" );
obj << Show Surface4( "Both sides" );
Wait( 1 );
obj << Surface Alpha4( 0.90 );

```

### Surface Color

**Sintaxis:** obj << Surface Color( color ); 

obj << Surface Color1( color )

**Descripción:** Especifica el color de la superficie para la primera respuesta cuando el tipo de relleno es sólido.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**Sintaxis:** obj << Surface Color Method( "Solid"|formula, <"Solid"|formula>, <"Solid"|formula>, <"Solid"|formula> )

**Descripción:** Especifica el método que se utiliza para colorear cada una de las cuatro superficies posibles. La fórmula puede ser distinta de la que se utiliza para dibujar la superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**Sintaxis:** obj << Surface Color Range( "Data"|"Axis" ); 

obj << Surface Color Range1( "Data"|"Axis" )

**Descripción:** Especifica los puntos finales del gradiente de color en la superficie para la primera respuesta. Esta opción solo está disponible cuando se utiliza un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**Sintaxis:** obj << Surface Color Range( "Data"|"Axis" ); 

obj << Surface Color Range1( "Data"|"Axis" )

**Descripción:** Especifica los puntos finales del gradiente de color en la superficie para la primera respuesta. Esta opción solo está disponible cuando se utiliza un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface( "Both Sides" )
);
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**Sintaxis:** obj << Surface Color Range2( "Datos"|"Eje" )

**Descripción:** Especifica los puntos finales del gradiente de color en la superficie para la segunda respuesta. Esta opción solo está disponible cuando se utiliza un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface2( "Both Sides" )
);
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**Sintaxis:** obj << Surface Color Range3( "Datos"|"Eje" )

**Descripción:** Especifica los puntos finales del gradiente de color en la superficie para la tercera respuesta. Esta opción solo está disponible cuando se utiliza un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface3( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**Sintaxis:** obj << Surface Color Range4( "Datos"|"Eje" )

**Descripción:** Especifica los puntos finales del gradiente de color en la superficie para la cuarta respuesta. Esta opción solo está disponible cuando se utiliza un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**Sintaxis:** obj << Surface Color Theme( color theme ); 

obj << Surface Color Theme1( color theme )

**Descripción:** Especifica el tema de color de la superficie para la primera respuesta. Esta opción solo está disponible para las columnas de respuesta de fórmulas que utilizan un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**Sintaxis:** obj << Surface Color Theme( color theme ); 

obj << Surface Color Theme1( color theme )

**Descripción:** Especifica el tema de color de la superficie para la primera respuesta. Esta opción solo está disponible para las columnas de respuesta de fórmulas que utilizan un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**Sintaxis:** obj << Surface Color Theme2( color theme )

**Descripción:** Especifica el tema de color de la superficie para la segunda respuesta. Esta opción solo está disponible para las columnas de respuesta de fórmulas que utilizan un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
obj << Surface Gradient Type2( "Continuous Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**Sintaxis:** obj << Surface Color Theme3( color theme )

**Descripción:** Especifica el tema de color de la superficie para la tercera respuesta. Esta opción solo está disponible para las columnas de respuesta de fórmulas que utilizan un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Gradient Type3( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**Sintaxis:** obj << Surface Color Theme4( color theme )

**Descripción:** Especifica el tema de color de la superficie para la cuarta respuesta. Esta opción solo está disponible para las columnas de respuesta de fórmulas que utilizan un gradiente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Gradient Type4( "Continuous Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**Sintaxis:** obj << Surface Color( color ); 

obj << Surface Color1( color )

**Descripción:** Especifica el color de la superficie para la primera respuesta cuando el tipo de relleno es sólido.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );
Wait( 1 );
obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**Sintaxis:** obj << Surface Color2( color )

**Descripción:** Especifica el color de la superficie para la segunda respuesta cuando el tipo de relleno es sólido.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both Sides" )
);
obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**Sintaxis:** obj << Surface Color3( color )

**Descripción:** Especifica el color de la superficie para la tercera respuesta cuando el tipo de relleno es sólido.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**Sintaxis:** obj << Surface Color4( color )

**Descripción:** Especifica el color de la superficie para la cuarta respuesta cuando el tipo de relleno es sólido.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**Sintaxis:** obj << Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); 

obj << Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descripción:** Especifica el tipo de relleno de la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**Sintaxis:** obj << Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); 

obj << Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**Descripción:** Especifica el tipo de relleno de la superficie para la primera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << Surface Gradient Type( "Continuous Gradients" );
obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**Sintaxis:** obj << Surface Gradient Type2( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica el tipo de relleno de la superficie para la segunda respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" )
);
Wait( 1 );
obj << Surface Gradient Type2( "Discrete Gradients" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**Sintaxis:** obj << Surface Gradient Type3( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica el tipo de relleno de la superficie para la tercera respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type3( "Solid" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**Sintaxis:** obj << Surface Gradient Type4( "Sólido"|"Gradientes continuos"|"Gradientes discretos" )

**Descripción:** Especifica el tipo de relleno de la superficie para la cuarta respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both Sides" )
);
Wait( 1 );
obj << Surface Gradient Type4( "Discrete Gradients" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**Sintaxis:** obj << Surface Gradients( number ); 

obj << Surface Gradients1( number )

**Descripción:** Especifica el número de líneas de gradiente en la superficie de la primera respuesta. Esta opción solo está disponible si se utilizan gradientes discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients1

**Sintaxis:** obj << Surface Gradients( number ); 

obj << Surface Gradients1( number )

**Descripción:** Especifica el número de líneas de gradiente en la superficie de la primera respuesta. Esta opción solo está disponible si se utilizan gradientes discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION ),
	Surface Color Method( ":Pred Formula ABRASION" )
);
obj << Surface Gradient Type( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients( 9 );

```

### Surface Gradients2

**Sintaxis:** obj << Surface Gradients2( number )

**Descripción:** Especifica el número de líneas de gradiente en la superficie de la segunda respuesta. Esta opción solo está disponible si se utilizan gradientes discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),
	Show Surface2( "Both sides" ),
	Surface Color Method( "Solid", ":Pred Formula MODULUS" )
);
obj << Surface Gradient Type2( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**Sintaxis:** obj << Surface Gradients3( number )

**Descripción:** Especifica el número de líneas de gradiente en la superficie de la tercera respuesta. Esta opción solo está disponible si se utilizan gradientes discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),
	Show Surface3( "Both sides" ),
	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" )
);
obj << Surface Gradient Type3( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**Sintaxis:** obj << Surface Gradients4( number )

**Descripción:** Especifica el número de líneas de gradiente en la superficie de la cuarta respuesta. Esta opción solo está disponible si se utilizan gradientes discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Show Surface4( "Both sides" ),
	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" )
);
obj << Surface Gradient Type4( "Discrete Gradients" );
Wait( 1 );
obj << Surface Gradients4( 9 );

```

### Surface Lighting

**Sintaxis:** obj << Surface Lighting( "None"|"Low Reflection"|"Normal" ); 

obj << Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Descripción:** Especifica la iluminación de la superficie para la primera respuesta. Esta opción solo está disponible con gradientes continuos y discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**Sintaxis:** obj << Surface Lighting( "None"|"Low Reflection"|"Normal" ); 

obj << Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**Descripción:** Especifica la iluminación de la superficie para la primera respuesta. Esta opción solo está disponible con gradientes continuos y discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Surface Color Method( ":Pred Formula ABRASION" );
Wait( 1 );
obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**Sintaxis:** obj << Surface Lighting2( "Ninguno"|"Reflejo bajo"|"Normal" )

**Descripción:** Especifica la iluminación de la superficie para la segunda respuesta. Esta opción solo está disponible con gradientes continuos y discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Show Surface2( "Both Sides" );
obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );
Wait( 1 );
obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**Sintaxis:** obj << Surface Lighting3( "Ninguno"|"Reflejo bajo"|"Normal" )

**Descripción:** Especifica la iluminación de la superficie para la tercera respuesta. Esta opción solo está disponible con gradientes continuos y discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface3( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );
Wait( 1 );
obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**Sintaxis:** obj << Surface Lighting4( "Ninguno"|"Reflejo bajo"|"Normal" )

**Descripción:** Especifica la iluminación de la superficie para la cuarta respuesta. Esta opción solo está disponible con gradientes continuos y discretos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Surface4( "Both Sides" );
obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );
Wait( 1 );
obj << Surface Lighting4( "Normal" );

```

### Surface Plot

**Sintaxis:** Surface Plot( Columns() )

**Descripción:** Crea un gráfico de puntos tridimensional giratorio o una superficie definida por una fórmula guardada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Surface Selector

**Sintaxis:** obj << Surface Selector( state=0|1 )

**Descripción:** Muestra u oculta las opciones de superficie en los controles de las variables dependientes. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Surface Selector( 0 );

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X Grid

**Sintaxis:** obj << X Grid( state=0|1 )

**Descripción:** Muestra u oculta una cuadrícula perpendicular al eje X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << X Grid( 1 );

```

### X Resolution

**Sintaxis:** obj << Resolution( number )

obj << X Resolution( number )

obj << Y Resolution( number )

**Descripción:** Cambia la resolución utilizada para dibujar el gráfico de superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### XRotate

**Sintaxis:** obj << XRotate( degrees )

**Descripción:** Rota el gráfico de superficie sobre el eje X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << XRotate( 30 );

```

### Y Grid

**Sintaxis:** obj << Y Grid( state=0|1 )

**Descripción:** Muestra u oculta una cuadrícula perpendicular al eje Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Y Grid( 1 );

```

### Y Resolution

**Sintaxis:** obj << Resolution( number )

obj << X Resolution( number )

obj << Y Resolution( number )

**Descripción:** Cambia la resolución utilizada para dibujar el gráfico de superficie.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Mode( "Isosurface" );
Wait( 1 );
obj << Resolution( 4 );
Wait( 1 );
obj << Resolution( 12 );

```

### YRotate

**Sintaxis:** obj << YRotate( degrees )

**Descripción:** Rota el gráfico de superficie sobre el eje Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << YRotate( 20 );

```

### Z Grid

**Sintaxis:** obj << Z Grid( state=0|1 )

**Descripción:** Muestra u oculta una cuadrícula perpendicular al eje Z.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Z Grid( 1 );

```

### Z Grid Position

**Sintaxis:** obj << Z Grid Position( fraction )

**Descripción:** Mueve la cuadrícula Z al porcentaje especificado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
obj << Z Grid( 1 );
Wait( 1 );
obj << Z Grid Position( 0.733 );

```

### ZRotate

**Sintaxis:** obj << ZRotate( degrees )

**Descripción:** Rota el gráfico de superficie sobre el eje Z.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );
Wait( 1 );
obj << ZRotate( 45 );

```

