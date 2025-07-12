# Column Switcher



## Mensajes del elemento

### Close Outline

**Sintaxis:** obj << Close Outline( state=0|1 )

**Descripción:** Abre o cierra el cuadro de esquema Cambiador de columnas

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**Sintaxis:** obj << Get Current

**Descripción:** obtiene el nombre de la variable actual

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );
ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**Sintaxis:** obj << Get Layout

**Descripción:** Establece la presentación de varios cambiadores de columnas. Vertical(0) u horizontal(1).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
If( cs2 << Get Layout() == 1,
	Print( "Horizontal" ),
	Print( "Vertical" )
);

```

### Get List

**Sintaxis:** obj << Get List

**Descripción:** obtiene la lista de variables disponibles

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**Sintaxis:** obj << Get Original

**Descripción:** obtiene el nombre de la variable original

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;
ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**Sintaxis:** obj << Get Speed

**Descripción:** fpm = obj<<getSpeed /* in Frames Per Minute */;

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**Sintaxis:** obj << Link Platform( platform )

**Descripción:** Vincula una plataforma a este cambiador de columnas.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
columnSwitcher = dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6,
	:Process 7}
);
gb = Graph Builder(
	Variables( Y( :Process 1 ) ),
	Elements( Histogram( Y, Legend( 3 ) ) )
);
columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**Sintaxis:** handler = cs << Make Column Switch Handler( function(pre), function(post) )

**Descripción:** Crea un controlador para los cambios de columna con funciones de rellamada a las que se llama antes y después de que se cambie la columna. Las funciones de rellamada reciben la columna anterior, la columna siguiente y el cambiador de columnas. La función especificada para antes del cambio debe devolver un valor distinto de cero para permitir el cambio. Si devuelve 0, se impedirá el cambio. La función a la que se llama después del cambio no debería devolver ningún valor.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
gb = Graph Builder(
	Variables( Y( :Process 1 ) ),
	Elements( Histogram( Y, Legend( 3 ) ) )
);
columnSwitcher = gb << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6,
	:Process 7}
);
pre = Function( {currentColumn, nextColumn, switcher},
	Print(
		"Before switch: " || (currentColumn << get name) || " >> " || (
		nextColumn << get name) || " [Column Switcher] current: " || (
		columnSwitcher << Get Current)
	);
	If( nextColumn << get name == "Process 4",
		0,
		1
	);
);
post = Function( {previousColumn, currentColumn, switcher},
	Print(
		"After switch: " || (previousColumn << get name) || " >> " || (
		currentColumn << get name) || " [Column Switcher] current: " || (
		columnSwitcher << Get Current)
	)
);
handler = columnSwitcher << Make Column Switch Handler( pre, post );
columnSwitcher << Run;

```

### Next

**Sintaxis:** obj << Next

**Descripción:** Cambia la selección del cambiador de columna a la siguiente opción disponible

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;

```

### Pause

**Sintaxis:** obj << Pause

**Descripción:** pausa la animación

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );
ColumnSwitcherObject << Pause;

```

### Previous

**Sintaxis:** obj << Previous

**Descripción:** Cambia la selección del cambiador de columna a la anterior opción disponible

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita este cambiador de columna

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 2/*seconds, while it animates*/ );
ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**Sintaxis:** obj << Retain Axis Settings( state=0|1 )

**Descripción:** Algunos gráficos almacenan las personalizaciones de los ejes en función del nombre de la columna. De forma predeterminada, estas personalizaciones se eliminan al cambiar de columna. Si se habilita esta opción, la columna se actualiza al cambiar para aplicar las personalizaciones al gráfico nuevo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
Graph Builder(
	Variables( X( :Process 1 ), Y( :Process 2 ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	Column Switcher(
		:Process 1,
		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7
		},
		Retain Axis Settings( 1 )
	),
	SendToReport(
		Dispatch( {}, "Process 1", ScaleBox,
			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),
			Add Ref Line( 12, "Solid", "Black", "", 1 )}
		)
	)
);

```

### Run

**Sintaxis:** obj << Run

**Descripción:** inicia la animación

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;

```

### Script

**Sintaxis:** obj << Script( script )

**Descripción:** Establece un script que se ejecuta cuando cambia la columna

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**Sintaxis:** obj << Set Current( string )

**Descripción:** establece la variable actual

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**Sintaxis:** obj << Set Layout( 0 = Vertical | 1 = Horizontal )

**Descripción:** Establece la presentación de varios cambiadores de columnas en vertical(0) u horizontal(1).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
cs1 << Set Layout( 1 );

```

### Set N Lines

**Sintaxis:** obj << Set N Lines( number )

**Descripción:** Establece el número de líneas en el cuadro de lista de los nombres de columna

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**Sintaxis:** obj << Set Script( script )

**Descripción:** Establece un script que se ejecuta cuando cambia la columna

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**Sintaxis:** obj << Set Size( number )

**Descripción:** Establece el ancho en píxeles del cuadro de lista de los nombres de columna

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**Sintaxis:** obj << Set Speed( number )

**Descripción:** obj<<setSpeed(60) /* in Frames Per Minute */;

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**Sintaxis:** obj << Title( string )

**Descripción:** Establece el título del cuadro de esquema Cambiador de columnas

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Title( "Switch on X" );

```

