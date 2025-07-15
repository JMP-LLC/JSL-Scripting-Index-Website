# Row State



### As Row State

**Sintaxis:** rs = As Row State( x )

**Descripción:** Convierte un número en un valor de estado de fila.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row(
	Row State() = As Row State(
		(:sex == "F") * 2 + (:sex == "M") * 4 + ((:sex == "F") * 2 + (:sex == "M") * 6) * 16
		 + (:age - 11) * 256
	)
);

```

### Color Of

**Sintaxis:** y = Color Of( &lt;rs&gt; ); Color Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve la componente de color del valor de estado de la fila indicado, ya sea en forma de índice positivo de la paleta de colores de JMP o un valor negativo codificado RGB. Si se usa Color Of como L-value, sirve para cambiar el color de la fila actual (o la fila r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" ) << Color By Column( :height );
Color To RGB( Color Of( Row State( 3 ) ) );
Row() = 3;
Color To RGB( Color Of() );

```

### Color State

**Sintaxis:** rs = Color State( color )

**Descripción:** Devuelve un valor de estado de fila con la componente de color ajustada al valor especificado. El argumento color puede ser cualquier color JSL válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, 0.5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Combine States

**Sintaxis:** rs = Combine States( rs1, ... )

**Descripción:** Combina los valores de estado de varias filas en uno solo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Excluded

**Sintaxis:** y = Excluded( &lt;rs&gt; ); Excluded( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de exclusión del valor de estado de fila especificado, 0 o 1. Si la función Excluded() se usa como L-value, cambia el estado de exclusión de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );
Row() = 3;
Excluded();

```

### Excluded State

**Sintaxis:** rs = Excluded State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de exclusión ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Excluded State( 1 );
Excluded( Row State( 3 ) );

```

### Hidden

**Sintaxis:** y = Hidden( &lt;rs&gt; ); Hidden( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de ocultación del valor de estado fila especificado, 0 o 1. Si la función Hidden se usa como L-value, cambia el estado de ocultación de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );
Row() = 3;
Hidden();

```

### Hidden State

**Sintaxis:** rs = Hidden State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de ocultación ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Hidden State( 1 );
Hidden( Row State( 3 ) );

```

### Hue State

**Sintaxis:** rs = Hue State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de tono de color ajustada al valor especificado. Para generar un color válido, se debe combinar con un valor de Shade State().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

### Labeled

**Sintaxis:** y = Labeled( &lt;rs&gt; ); Labeled( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de etiquetado del valor de estado de fila especificado, 0 o 1. Si la función Labeled se usa como L-value, cambia el estado de la etiqueta de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );
Row() = 3;
Labeled();

```

### Labeled State

**Sintaxis:** rs = Labeled State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de etiquetado ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Labeled State( 1 );
Labeled( Row State( 3 ) );

```

### Marker Of

**Sintaxis:** y = Marker Of( &lt;rs&gt; ); Marker Of( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente de marcación del valor de estado de fila especificado. Si la función Marker Of se usa como L-value, cambia el estado de marcación de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );
Row() = 3;
Marker Of();

```

### Marker State

**Sintaxis:** rs = Marker State( marker )

**Descripción:** Devuelve un valor de estado de fila con la componente de marcador ajustada al valor especificado. El argumento marker especifica un marcador y puede ser un entero positivo, un carácter, un entero positivo correspondiente a un carácter Unicode, o un carácter hexadecimal correspondiente a un carácter Unicode.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Marker State( 5 );
Marker Of( Row State( 3 ) );

```

### Row State

**Sintaxis:** y = Row State( &lt;dt&gt;, &lt;r&gt; ); Row State( &lt;dt&gt;, &lt;r&gt; ) = y

**Descripción:** Devuelve el estado de la fila actual o de la fila r-ésima de la tabla de datos actual. Si la función Row State() se usa como L-value, cambia el estado de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Color State( {1, .5, 1} );
Color To RGB( Color Of( Row State( 3 ) ) );

```

### Selected

**Sintaxis:** y = Selected( &lt;rs&gt; );Selected( &lt;Row State( &lt;r&gt; )&gt; ) = y

**Descripción:** Devuelve el componente seleccionado del valor de estado de fila especificado, 0 o 1. Si se usa Selected como L-value, cambia el estado de selección de la fila actual (o la r-ésima) de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );
Row() = 3;
Selected();

```

### Selected State

**Sintaxis:** rs = Selected State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de selección ajustada al valor especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Selected State( 1 );
Selected( Row State( 3 ) );

```

### Shade State

**Sintaxis:** rs = Shade State( x )

**Descripción:** Devuelve un valor de estado de fila con la componente de sombreado de color ajustada al valor especificado. Para generar un color válido, se debe combinar con un valor de Hue State().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( 3 ) = Combine States( Hue State( 5 ), Shade State( 1 ) );

```

