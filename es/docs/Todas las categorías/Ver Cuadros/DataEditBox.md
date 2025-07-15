# DataEditBox



## Mensajes del elemento

### Blink

**Sintaxis:** obj &lt;&lt; Blink

**Descripción:** Establece como intermitente la fila visualizada en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Blink;

```

### Find

**Sintaxis:** obj &lt;&lt; Find( search term )

**Descripción:** Muestra la fila encontrada por el término de búsqueda introducido.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Find( Contains( :State, "North Carolina" ) );

```

### Go to row

**Sintaxis:** obj &lt;&lt; Go to row( row )

**Descripción:** Muestra la fila introducida en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );

```

### New Row

**Sintaxis:** obj &lt;&lt; New Row

**Descripción:** Crea una nueva fila en la tabla de datos y muestra dicha fila en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;

```

### Next

**Sintaxis:** obj &lt;&lt; Next

**Descripción:** Muestra la siguiente fila seleccionada en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next;

```

### Next Selected

**Sintaxis:** obj &lt;&lt; Next Selected

**Descripción:** De las filas seleccionadas, muestra la siguiente fila seleccionada en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Next Selected;

```

### Prev

**Sintaxis:** obj &lt;&lt; Prev

**Descripción:** Muestra la fila previa seleccionada en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << Go To Row( 23 );
dataedit << Prev;

```

### Prev Selected

**Sintaxis:** obj &lt;&lt; Prev Selected

**Descripción:** De las filas seleccionadas, muestra la fila previa seleccionada en el cuadro de edición de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SAT.jmp" );
New Window( "Example",
	cp = Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dt << Select Where( dt:population > 10000000 );
dataedit = win[Data Edit Box( 1 )];
dataedit << Prev Selected;

```

### Save

**Sintaxis:** obj &lt;&lt; Save

**Descripción:** Guarda los valores de fila del cuadro de edición de datos en la tabla de datos.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Save( "$TEMP/SAT.jmp" );
New Window( "Example",
	cp = dt << Cell Plot(
		Scale Uniformly( 0 ),
		Center at zero( 0 ),
		Y( :"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n )
	)
);
cpr = cp << report;
cpb = cpr[Cell Plot Box( 1 )];
cpb << Row Editor;
win = Window( "Row Editor for SAT" );
dataedit = win[Data Edit Box( 1 )];
dataedit << New Row;
dataedit << Save;

```

