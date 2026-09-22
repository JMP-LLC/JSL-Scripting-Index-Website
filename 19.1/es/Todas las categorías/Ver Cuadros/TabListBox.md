# TabListBox



## Constructores asociados

### Tab Box

**Sintaxis:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Descripción:** Devuelve un cuadro de visualización con páginas que contienen otros cuadros de visualización.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));

```

## Mensajes del elemento

### Add

**Sintaxis:** obj &lt;&lt; Add(&lt;index&gt;,"title",contents); obj &lt;&lt; Add(&lt;index&gt;,tabPageBox)

**Descripción:** Añade una nueva ficha. Si no se especifica ningún index, la ficha se añade después de las fichas actuales. Si el contenido para añadir no es un Tab Page Box, se añadirá un nuevo Tab Page Box para retener el contenido.

**Ejemplo 1**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Add( "Fourth Tab", Button Box( "Press Four" ) );

```

**Ejemplo 2**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Add( Tab Page Box( Title( "Fourth Tab" ), Button Box( "Press Four" ) ) );

```

### Delete

**Sintaxis:** obj &lt;&lt; Delete( &lt;index&gt; )

**Descripción:** Elimina la ficha de index.  Si no se ha especificado index, se elimina la ficha seleccionada.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Delete( 2 );

```

### DockName

**Sintaxis:** obj &lt;&lt; DockName( text )

### Dockable

**Sintaxis:** obj &lt;&lt; Dockable( bool )

**Descripción:** Si un contenedor se puede acoplar, los hijos que sean movibles pueden reorganizarse con la función de arrastrar y colocar.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	H Splitter Box(		Size( 800, 600 ),		Tab Page Box( "Data Table", dt << New Data Box, <<Moveable( 1 ) ),		V Splitter Box(			Tab Page Box(				"Logistic",				log = Logistic(					Y( :age ),					X( :weight ),					SendToReport(						Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),						Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )					)				),				<<Moveable( 1 )			),			Tab Page Box(				"Bivariate",				biv = Bivariate(					Y( :weight ),					X( :height ),					Fit Line( {Line Color( {213, 72, 87} )} ),					SendToReport( Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) )				),				<<Moveable( 1 )			),			<<Dockable( 1 )		),		<<Dockable( 1 )	));(log << Report)[Frame Box( 1 )] << Set Stretch( "Window", "Window" ) <<Set Max Size( 1000, 1000 ) << Set Min Size( 20, 20 );(biv << Report)[Frame Box( 1 )] << Set Stretch( "Window", "Window" ) <<Set Max Size( 1000, 1000 ) << Set Min Size( 20, 20 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	H Splitter Box(		Size( 800, 600 ),		Tab Page Box( "Data Table", dt << New Data Box, <<Moveable( 1 ) ),		Tab Box(			Tab Page Box(				"Logistic",				Moveable( 1 ),				log = Logistic(					Y( :age ),					X( :weight ),					SendToReport(						Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),						Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )					)				)			),			Tab Page Box(				"Bivariate",				Moveable( 1 ),				biv = Bivariate(					Y( :weight ),					X( :height ),					Fit Line( {Line Color( {213, 72, 87} )} ),					SendToReport( Dispatch( {}, "Linear Fit", OutlineBox, {Close( 1 )} ) )				)			),			<<Dockable( 1 )		),		<<Dockable( 1 )	));(log << Report)[Frame Box( 1 )] << Set Stretch( "Window", "Window" ) <<Set Max Size( 1000, 1000 ) << Set Min Size( 20, 20 );(biv << Report)[Frame Box( 1 )] << Set Stretch( "Window", "Window" ) <<Set Max Size( 1000, 1000 ) << Set Min Size( 20, 20 );

```

### Get DockName

**Sintaxis:** obj &lt;&lt; Get DockName

### Get Dockable

**Sintaxis:** bool = obj &lt;&lt; Get Dockable

**Descripción:** Devuelve la configuración acoplable para el cuadro contenedor.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));

```

### Get Min Title Width

**Sintaxis:** obj &lt;&lt; Get Min Title Width

**Descripción:** Obtiene el ancho mínimo de los títulos de pestañas truncados cuando se establece Overflow Enabled. La configuración predeterminada de 0 aplicará un ancho mínimo predeterminado.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 2 );tb << Set Overflow Enabled( 1 );tb << Set Min Title Width( 200 );tb << Get Min Title Width();

```

### Get Overflow Enabled

**Sintaxis:** obj &lt;&lt; Get Overflow Enabled

**Descripción:** Cuando Overflow Enabled es 1, la lista de fichas no se forzará para que tenga el ancho de los títulos de las fichas. Si la lista de fichas no tiene el ancho suficiente para todos los títulos, se mostrará un menú de desbordamiento que permitirá la selección de una nueva ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 2 );tb << Set Overflow Enabled( 1 );Show( tb << Get Overflow Enabled() );

```

### Get Selected

**Sintaxis:** index = obj &lt;&lt; Get Selected

**Descripción:** Devuelve la ficha seleccionada actualmente.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Selected( 2 );Print( tb << Get Selected );

```

### Get Show Tabs

**Sintaxis:** obj &lt;&lt; Get Show Tabs

**Descripción:** Obtiene el estado actual de visibilidad de la ficha

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Print( tb << Get Show Tabs() );

```

### Get Style

**Sintaxis:** style = obj &lt;&lt; Get Style

**Descripción:** Obtiene la apariencia visual actual del control de la ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Print( tb << Get Style() );

```

### Get Tab Changed

**Sintaxis:** obj &lt;&lt; Get Tab Changed

**Descripción:** Devuelve el script que se ejecuta cuando se selecciona una ficha diferente.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << SetTabChanged( Function( {this}, Print( this << Get Title ) ) );tb << GetTabChanged;

```

### Get Tab Close

**Sintaxis:** obj &lt;&lt; Get Tab Close

**Descripción:** Devuelve la secuencia de comandos que se ejecuta al cerrar una ficha desde una secuencia de comandos o mediante el icono de cerrar. La secuencia de comandos debe devolver 1 para permitir el cierre, o 0 para cancelarlo.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << SetTabClose( Function( {this}, 1 ) );tb << Get Tab Close;

```

### Get Tab Close Tip

**Sintaxis:** "string" = obj &lt;&lt; Get Tab Close Tip

**Descripción:** Devuelve el cuadro de información de herramienta del icono Cerrar ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Closeable( 2, 1 );tb << Set Tab Close( Function( {this}, 1 ) );tb << Set Tab Close Tip( "Close Tab" );Print( tb << Get Tab Close Tip() );

```

### Get Tab Count

**Sintaxis:** count = obj &lt;&lt; Get Tab Count

**Descripción:** Devuelve el número de fichas.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Print( tb << Get Tab Count );

```

### Get Tab Margin

**Sintaxis:** all | horizontal,vertical | left,top,right,bottom = obj &lt;&lt; Get Tab Margin

**Descripción:** Devuelve el margen de las fichas.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab Margin( 50, 40 );Print( tb << Get Tab Margin );

```

### Get Tab New

**Sintaxis:** obj &lt;&lt; Get Tab New

**Descripción:** Devuelve la secuencia de comandos que se ejecuta al hacer clic en Nueva ficha. La secuencia de comandos es la encargada de crear la ficha nueva.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );tb << Get Tab New();

```

### Get Tab New Icon

**Sintaxis:** "string" = obj &lt;&lt; Get Tab New Icon

**Descripción:** Devuelve el icono de la ficha nueva.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );tb << Set Tab New Icon( "NewTable" );Print( tb << Get Tab New Icon() );

```

### Get Tab New Tip

**Sintaxis:** "string" = obj &lt;&lt; Get Tab New Tip

**Descripción:** Devuelve el cuadro de información de herramienta de Ficha nueva.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );tb << Set Tab New Tip( "Create New" );Print( tb << Get Tab New Tip() );

```

### Get Title Location

**Sintaxis:** style = obj &lt;&lt; Get Title Location

**Descripción:** Obtiene la configuración de ubicación del título actual.

**JMP Versión agregada:** 16

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Print( tb << Get Title Location() );

```

### Index of Tab

**Sintaxis:** index = obj &lt;&lt; Index of Tab( "string" )

**Descripción:** Devuelve el índice de la ficha con el título especificado.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Print( tb << Index of Tab( "Third Tab" ) );

```

### Insert

**Sintaxis:** obj &lt;&lt; Insert(&lt;index&gt;,"title",contents); obj &lt;&lt; Insert(&lt;index&gt;,tabPageBox)

**Descripción:** Inserta una nueva ficha. Si no se especifica ningún index, la nueva ficha se añade después de las fichas actuales. Si el contenido para añadir no es un Tab Page Box, se añadirá un nuevo Tab Page Box para retener el contenido.

**Ejemplo 1**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Insert( "Fourth Tab", Button Box( "Press Four" ) );

```

**Ejemplo 2**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Insert( Tab Page Box( Title( "Fourth Tab" ), Button Box( "Press Four" ) ) );

```

### Move Tab

**Sintaxis:** obj &lt;&lt; Move Tab( fromIndex, toIndex )

**Descripción:** Desplaza la ficha de la posición fromIndex a la posición toIndex.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Move Tab( 1, 2 );

```

### Replace

**Sintaxis:** obj &lt;&lt; Replace(&lt;index&gt;,"title",contents); obj &lt;&lt; Replace(&lt;index&gt;,tabPageBox)

**Descripción:** Reemplaza la ficha. Si no se especifica ningún index, se reemplaza la ficha seleccionada. Si el contenido para añadir no es un Tab Page Box, se añadirá un nuevo Tab Page Box para retener el contenido.

**Ejemplo 1**

```jsl

title = 1;nw = New Window( "Test",	tb = Tab Box(),	Global Box( title ),	titlebox = Text Box( "" ),	Lineup Box( N Col( 4 ),		Button Box( "add 1",			tb << Add( 1, "created " || Char( title++ ), Text Box( "content" ) )		),		Button Box( "add 2",			tb << Add( 2, "created " || Char( title++ ), Text Box( "content" ) )		),		Button Box( "add 3",			tb << Add( 3, "created " || Char( title++ ), Text Box( "content" ) )		),		Button Box( "add 4",			tb << Add( 4, "created " || Char( title++ ), Text Box( "content" ) )		),		Button Box( "remove 1", tb << delete( 1 ) ),		Button Box( "remove 2", tb << delete( 2 ) ),		Button Box( "remove 3", tb << delete( 3 ) ),		Button Box( "remove 4", tb << delete( 4 ) ),		Button Box( "select 1", tb << Set Selected( 1 ) ),		Button Box( "select 2", tb << Set Selected( 2 ) ),		Button Box( "select 3", tb << Set Selected( 3 ) ),		Button Box( "select 4", tb << Set Selected( 4 ) ),		Button Box( "replace 1",			tb << replace( 1, "replaced " || Char( title++ ), Text Box( "replaced" ) )		),		Button Box( "replace 2",			tb << replace( 2, "replaced " || Char( title++ ), Text Box( "replaced" ) )		),		Button Box( "replace 3",			tb << replace( 3, "replaced " || Char( title++ ), Text Box( "replaced" ) )		),		Button Box( "replace 4",			tb << replace( 4, "replaced " || Char( title++ ), Text Box( "replaced" ) )		),		Button Box( "gettitle 1", titlebox << settext( tb << gettitle( 1 ) ) ),		Button Box( "gettitle 2", titlebox << settext( tb << gettitle( 2 ) ) ),		Button Box( "gettitle 3", titlebox << settext( tb << gettitle( 3 ) ) ),		Button Box( "gettitle 4", titlebox << settext( tb << gettitle( 4 ) ) ),		Button Box( "settitle 1", (tb << settitle( 1, "set " || Char( title++ ) )) ),		Button Box( "settitle 2", (tb << settitle( 2, "set " || Char( title++ ) )) ),		Button Box( "settitle 3", (tb << settitle( 3, "set " || Char( title++ ) )) ),		Button Box( "settitle 4", (tb << settitle( 4, "set " || Char( title++ ) )) ),		Button Box( "enable 1", (tb << enable( 1, 1 )) ),		Button Box( "enable 2", (tb << enable( 2, 1 )) ),		Button Box( "enable 3", (tb << enable( 3, 1 )) ),		Button Box( "enable 4", (tb << enable( 4, 1 )) ),		Button Box( "disable 1", (tb << enable( 1, 0 )) ),		Button Box( "disable 2", (tb << enable( 2, 0 )) ),		Button Box( "disable 3", (tb << enable( 3, 0 )) ),		Button Box( "disable 4", (tb << enable( 4, 0 )) ),	));

```

**Ejemplo 2**

```jsl

title = 1;nw = New Window( "Test",	tb = Tab Box(),	Global Box( title ),	titlebox = Text Box( "" ),	Lineup Box( N Col( 4 ),		Button Box( "add 1",			tb << Add(				1,				Tab Page Box( Title( "created " || Char( title++ ) ), Text Box( "content" ) )			)		),		Button Box( "add 2",			tb << Add(				2,				Tab Page Box( Title( "created " || Char( title++ ) ), Text Box( "content" ) )			)		),		Button Box( "add 3",			tb << Add(				3,				Tab Page Box( Title( "created " || Char( title++ ) ), Text Box( "content" ) )			)		),		Button Box( "add 4",			tb << Add(				4,				Tab Page Box( Title( "created " || Char( title++ ) ), Text Box( "content" ) )			)		),		Button Box( "remove 1", tb << delete( 1 ) ),		Button Box( "remove 2", tb << delete( 2 ) ),		Button Box( "remove 3", tb << delete( 3 ) ),		Button Box( "remove 4", tb << delete( 4 ) ),		Button Box( "select 1", tb << Set Selected( 1 ) ),		Button Box( "select 2", tb << Set Selected( 2 ) ),		Button Box( "select 3", tb << Set Selected( 3 ) ),		Button Box( "select 4", tb << Set Selected( 4 ) ),		Button Box( "replace 1",			tb << replace(				1,				Tab Page Box(					Title( "replaced " || Char( title++ ) ),					Text Box( "replaced" )				)			)		),		Button Box( "replace 2",			tb << replace(				2,				Tab Page Box(					Title( "replaced " || Char( title++ ) ),					Text Box( "replaced" )				)			)		),		Button Box( "replace 3",			Tab Page Box(				Title(					tb << replace( 3, "replaced " || Char( title++ ) ),					Text Box( "replaced" )				)			)		),		Button Box( "replace 4",			tb << replace(				4,				Tab Page Box(					Title( "replaced " || Char( title++ ) ),					Text Box( "replaced" )				)			)		),		Button Box( "gettitle 1", titlebox << settext( tb << gettitle( 1 ) ) ),		Button Box( "gettitle 2", titlebox << settext( tb << gettitle( 2 ) ) ),		Button Box( "gettitle 3", titlebox << settext( tb << gettitle( 3 ) ) ),		Button Box( "gettitle 4", titlebox << settext( tb << gettitle( 4 ) ) ),		Button Box( "settitle 1", (tb << settitle( 1, "set " || Char( title++ ) )) ),		Button Box( "settitle 2", (tb << settitle( 2, "set " || Char( title++ ) )) ),		Button Box( "settitle 3", (tb << settitle( 3, "set " || Char( title++ ) )) ),		Button Box( "settitle 4", (tb << settitle( 4, "set " || Char( title++ ) )) ),		Button Box( "enable 1", (tb << enable( 1, 1 )) ),		Button Box( "enable 2", (tb << enable( 2, 1 )) ),		Button Box( "enable 3", (tb << enable( 3, 1 )) ),		Button Box( "enable 4", (tb << enable( 4, 1 )) ),		Button Box( "disable 1", (tb << enable( 1, 0 )) ),		Button Box( "disable 2", (tb << enable( 2, 0 )) ),		Button Box( "disable 3", (tb << enable( 3, 0 )) ),		Button Box( "disable 4", (tb << enable( 4, 0 )) ),	));

```

### Set Min Title Width

**Sintaxis:** obj &lt;&lt; Set Min Title Width( number )

**Descripción:** Establece el ancho mínimo de los títulos de pestañas truncadas cuando se establece Overflow Enabled. La configuración predeterminada de 0 aplicará un ancho mínimo predeterminado.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 2 );tb << Set Overflow Enabled( 1 );tb << Set Min Title Width( 200 );

```

### Set Overflow Enabled

**Sintaxis:** obj &lt;&lt; Set Overflow Enabled( state=0|1 )

**Descripción:** Cuando Overflow Enabled es true, no se forzará la lista de pestañas para que tenga el ancho de los títulos de las pestañas. Si la lista de pestañas no tiene el ancho suficiente para todos los títulos, se muestra un menú de desbordamiento que permite seleccionar una nueva pestaña. Esta opción solo es válida si el estilo establecido es Tab.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 2 );tb << Set Overflow Enabled( 1 );

```

### Set Selected

**Sintaxis:** obj &lt;&lt; Set Selected( index )

**Descripción:** Establece el foco en la ficha de index.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Set Selected( 2 );

```

### Set Style

**Sintaxis:** obj &lt;&lt; Set Style( "Ficha"|"Combinado"|"Esquema"|"Extensión vertical"|"Extensión horizontal"|"Minimizar tamaño" )

**Descripción:** Cambia la apariencia visual del control de la ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Style( "combo" );

```

### Set Tab Changed

**Sintaxis:** obj &lt;&lt; Set Tab Changed( script|Function( {this}, &lt;script&gt; ) )

**Descripción:** Después de realizar un cambio (como una selección de nueva ficha), se ejecuta el script o la function especificados.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << SetTabChanged( Function( {this}, Print( this << Get Title ) ) );

```

### Set Tab Close

**Sintaxis:** obj &lt;&lt; Set Tab Close( script|Function )

**Descripción:** Configura script o Function que se ejecuta al cerrar una ficha desde un script o mediante el icono de cerrar. script o Function deben devolver 1 para permitir el cierre, o 0 para cancelarlo.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Closeable( 2, 1 );tb << Set Tab Close( Function( {this}, 1 ) );

```

### Set Tab Close Tip

**Sintaxis:** obj &lt;&lt; Set Tab Close Tip( "string" )

**Descripción:** Establece el cuadro de información de herramienta del icono Cerrar ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Closeable( 2, 1 );tb << Set Tab Close( Function( {this}, 1 ) );tb << Set Tab Close Tip( "Close Tab" );

```

### Set Tab Margin

**Sintaxis:** obj &lt;&lt; Set Tab Margin( all | horizontal,vertical | left,top,right,bottom )

**Descripción:** Establece el margen de las fichas.  Los parámetros introducidos pueden aplicarse a todos los lados, a los tamaños verticales y horizontales o diferentes valores para cada lado.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab Margin( 50, 40 );

```

### Set Tab New

**Sintaxis:** obj &lt;&lt; Set Tab New( script|Function( {this}, &lt;script&gt; ) )

**Descripción:** Configura script o Function para que se ejecute al hacer clic en Ficha nueva. script o function son los encargados de crear la ficha nueva.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );

```

### Set Tab New Icon

**Sintaxis:** obj &lt;&lt; Set Tab New Icon( "string" )

**Descripción:** Establece el icono de la ficha nueva.

**Ejemplo 1**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );tb << Set Tab New Icon( "NewTable" );

```

**Ejemplo 2**

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );pict = New Image( "$SAMPLE_IMAGES/pi.gif" );tb << Set Tab New Icon( pict );

```

### Set Tab New Tip

**Sintaxis:** obj &lt;&lt; Set Tab New Tip( "string" )

**Descripción:** Establece el cuadro de información de herramienta de Nueva ficha.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Tab New( Function( {this}, this << Add( "New Tab", Button Box( "Press" ) ) ) );tb << Set Tab New Tip( "Create New" );

```

### Set Title Location

**Sintaxis:** obj &lt;&lt; Set Title Location( "Automático"|"Arriba"|"Abajo"|"Izquierda"|"Derecha" )

**Descripción:** Establece la ubicación de los títulos de página de pestañas. Si se configura como "Automática", la ubicación se escoge automáticamente en función del tamaño del contenido. Esta opción solo es válida si el estilo establecido es Tabbed.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));tb << Set Title Location( "Bottom" );

```

### Show Tabs

**Sintaxis:** obj &lt;&lt; Show Tabs( state=0|1 )

**Descripción:** Muestra u oculta las fichas.

```jsl

New Window( "Example",	tb = Tab Box(		Tab Page Box( "First Tab", Tip( "First Tab Tooltip" ), Button Box( "Press One" ) ),		Tab Page Box( "Second Tab", Closeable( 1 ), Button Box( "Press Two" ) ),		Tab Page Box( "Third Tab", Icon( "Nominal" ), Button Box( "Press Three" ) )	));Wait( 1 );tb << Show Tabs( 0 );Wait( 1 );tb << Show Tabs( 1 );

```

## Mensajes del elemento compartidos

### Add Line Annotation

**Sintaxis:** obj &lt;&lt; Add Line Annotation

**Descripción:** Agrega una línea encima del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**Sintaxis:** obj &lt;&lt; Add Pin Annotation

**Descripción:** Añade una anotación anclada sobre un cuadro de visualización. La mayoría de los atributos (como Index Row, UniqueID y FoundPt) están diseñados solo para uso interno.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :weight ),	X( :height ),	SendToReport(		Dispatch( {}, "Bivar Plot", FrameBox,			Add Pin Annotation(				Seg( Marker Seg( 1 ) ),				Index( 17 ),				Index Row( 17 ),				UniqueID( -960001792 ),				FoundPt( {238, 219} ),				Origin( {64.9765625, 142} ),				Offset( {-174, -40} ),				Tag Line( 1 ),				Font( "Helvetica", 11, "Plain" )			)		)	));

```

### Add Polygon Annotation

**Sintaxis:** obj &lt;&lt; Add Polygon Annotation

**Descripción:** Agrega un polígono encima del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Polygon Annotation(	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),	Color( "Red" ),	Closed( 1 ));

```

### Add Simple Shape Annotation

**Sintaxis:** obj &lt;&lt; Add Simple Shape Annotation

**Descripción:** Agrega una forma simple encima del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**Sintaxis:** obj &lt;&lt; Add Text Annotation

**Descripción:** Agrega texto encima del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));

```

### Append

**Sintaxis:** obj &lt;&lt; Append( db2 )

**Descripción:** Agrega db2 al árbol de visualización después de db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**Sintaxis:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Descripción:** Si hay un color de fondo definido, el cuadro se rellena con el color de fondo antes de dibujar su contenido. Si no hay un color de fondo definido, el fondo y el contenido de los cuadros contenedores es transparente.

**JMP Versión agregada:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Border

**Sintaxis:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Descripción:** Los bordes son líneas sólidas trazadas alrededor de la parte externa de un cuadro de visualización. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los bordes horizontales y verticales.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Border Color

**Sintaxis:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Descripción:** Color opcional para sustituir el color predeterminado de los bordes de los cuadros.

**JMP Versión agregada:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Bring Window To Front

**Sintaxis:** obj &lt;&lt; Bring Window To Front

**Descripción:** Lleva la ventana al frente.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Run Script( "Bivariate" );w << Bring Window To Front;

```

### Child

**Sintaxis:** obj &lt;&lt; Child

**Descripción:** Devuelve el hijo del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();axisChild = axisParent << child();Print( axisChild << Class Name() );

```

### Class Name

**Sintaxis:** obj &lt;&lt; Class Name

**Descripción:** Devuelve el nombre de la clase de visualización del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Class Name();

```

### Clone Box

**Sintaxis:** obj &lt;&lt; Clone Box

**Descripción:** Crea una nueva copia del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << append( Text Box( "=== below ===" ) );clonedBox = rbiv << Clone Box();rbiv << append( clonedBox );

```

### Close Window

**Sintaxis:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**Descripción:** Cierra la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Close Window;

```

### Copy Data

**Sintaxis:** obj &lt;&lt; Copy Data

**Descripción:** Copia los datos delimitados por tabuladores desde una matriz o una tabla al portapapeles.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );mat << CopyData;

```

### Copy Graph

**Sintaxis:** obj &lt;&lt; Copy Graph

**Descripción:** Copia al portapapeles una imagen del gráfico y los ejes.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;(rbiv[FrameBox( 1 )]) << Copy Graph();"paste into a paint program";

```

### Copy Picture

**Sintaxis:** obj &lt;&lt; Copy Picture

**Descripción:** Copia al portapapeles una imagen del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Copy Picture();

```

### Delete Box

**Sintaxis:** obj &lt;&lt; Delete Box

**Descripción:** Borra el cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisbox << Delete Box();

```

### Deselect

**Sintaxis:** obj &lt;&lt; Deselect

**Descripción:** Anula la selección de este objeto para su utilización por parte de los comandos del menú Editar.

```jsl

//This message applies to all display box objectsselected = 0;New Window( "Example",	ex = Button Box( "Press Me",		selected = !selected;		refresh;	));refresh = Function( {},	If( selected,		ex << Select,		ex << Deselect	));

```

### Dispatch

**Sintaxis:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**Descripción:** Envía command a una parte específica del árbol de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

### Enabled

**Sintaxis:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Find

**Sintaxis:** obj &lt;&lt; Find

**Descripción:** Devuelve el cuadro de visualización con el argument indicado.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv << Find( axis box( 1 ) );axisbox << Delete();

```

### Get Annotation

**Sintaxis:** obj &lt;&lt; Get Annotation

**Descripción:** Devuelve la primera anotación anclada a este cuadro de visualización. Se puede acceder a otras anotaciones utilizando Sib() en el resultado.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Add Text Annotation(	Text( "We need to discuss this at the next meeting." ),	Text Box( {65, 35, 200, 77} ));annotation = rbiv << Get Annotation;annotation << delete;

```

### Get Background Color

**Sintaxis:** obj &lt;&lt; Background Color( color ); color = obj &lt;&lt; Get Background Color

**Descripción:** Si hay un color de fondo definido, el cuadro se rellena con el color de fondo antes de dibujar su contenido. Si no hay un color de fondo definido, el fondo y el contenido de los cuadros contenedores es transparente.

**JMP Versión agregada:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Background Color );Wait( 2 );tb << Background Color( "Yellow" );

```

### Get Border

**Sintaxis:** obj &lt;&lt; Border( sides ); sides = obj &lt;&lt; Get Border

**Descripción:** Los bordes son líneas sólidas trazadas alrededor de la parte externa de un cuadro de visualización. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los bordes horizontales y verticales.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Border );Wait( 1 );tb << Border( 1 );

```

### Get Border Color

**Sintaxis:** obj &lt;&lt; Border Color( color ); color = obj &lt;&lt; Get Border Color

**Descripción:** Color opcional para sustituir el color predeterminado de los bordes de los cuadros.

**JMP Versión agregada:** 19

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Wait( 2 );tb << Border( 1 );tb << Border Color( "Light Red" );

```

### Get Content Size

**Sintaxis:** obj &lt;&lt; Get Content Size

**Descripción:** Devuelve el tamaño del contenido de dentro de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Content Size();Show( c );

```

### Get Display Path

**Sintaxis:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**Descripción:** Obtiene una expresión relativamente robusta para navegar entre parent box y obj. No está garantizado que esta ruta sea estable en todas las versiones de JMP. receiver expr se incorpora en la expresión de salida si se proporciona. De lo contrario, se utiliza la expresión proporcionada para parent box. Como se muestra en el ejemplo, este mensaje es especialmente útil para aumentar la robustez de una ruta que ya tenga disponible. El modo predeterminado es XPath.

#### Básico

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robustShow( xpath expr );xpath expr << Select;

```

#### Modo de subíndice

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );rpt = Report( biv );subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robustShow( subscript expr );subscript expr << Select;

```

### Get Enabled

**Sintaxis:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get HTML

**Sintaxis:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**Descripción:** Devuelve una cadena con el código fuente HTML para el cuadro de visualización.

**Ejemplo 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get HTML );

```

**Ejemplo 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTMLWeb( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**Sintaxis:** width = obj &lt;&lt; Get Height

**Descripción:** Devuelve la altura del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Height;

```

### Get Horizontal Alignment

**Sintaxis:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Descripción:** La alineación horizontal controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Get Journal

**Sintaxis:** obj &lt;&lt; Get Journal

**Descripción:** Devuelve una cadena con el código fuente del diario para el cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Print( rbiv << Get Journal );

```

### Get Margin

**Sintaxis:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Descripción:** El margen añade espacio entre el borde del cuadro y los cuadros adyacentes. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los márgenes horizontal y vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**Sintaxis:** width,height = obj &lt;&lt; Get Max Size

**Descripción:** Devuelve el tamaño máximo de este cuadro de visualización para la autoexpansión.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Max Size;

```

### Get Min Size

**Sintaxis:** width,height = obj &lt;&lt; Get Min Size

**Descripción:** Devuelve el tamaño mínimo de este cuadro de visualización para la autoexpansión.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Min Size;

```

### Get Namespace

**Sintaxis:** obj &lt;&lt; Get Namespace

**Descripción:** Devuelve el espacio de nombres asociado a este objeto de visualización.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get On Close

**Sintaxis:** obj &lt;&lt; Get On Close

**Descripción:** Devuelve el script o función que se ejecutará cuando se cierre la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);Show( w << Get On Close );

```

### Get Padding

**Sintaxis:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Descripción:** El espaciado interno añade espacio entre el contenido y el borde del cuadro. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán al espaciado interno horizontal y vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**Sintaxis:** obj &lt;&lt; Get Page Setup

**Descripción:** Obtiene la información de configuración de página para PDF

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Page Setup Test" ) );w << get page setup();

```

### Get Picture

**Sintaxis:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Descripción:** Captura db como un objeto de imagen. El argumento Scale opcional representará la imagen con una resolución a escala. El escalado requiere que el cuadro de visualización sea ajustable. El argumento Type determina si el resultado será una imagen vectorial escalable o un mapa de bits. De forma predeterminada, se devuelve una imagen escalable, adecuada para guardarla en formatos vectoriales como PDF. La opción View cambia el comportamiento de algunos cuadros. La opción predeterminada de "Picture" dibuja el informe como sería al exportarlo a un formato de imagen, mostrando completamente las áreas desplazadas. El modo de visualización de "Screen" dibuja el informe como se ve en pantalla, y "Print" dibuja el informe como se ve al imprimirse, sin ninguna de las funciones de configuración de páginas. La opción SubRect capturará una porción de la imagen resultante en lugar de una imagen completa. La opción Appearance puede cambiar de los colores de salida "Default" a los colores "Current" como se ven en pantalla. Las opciones View, SubRect y Appearance solo son compatibles para Type "Bitmap".

#### Escala

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

#### Predeterminado

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;New Window( "Example", rbiv << Get Picture );

```

#### Vista y aspecto

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );New Window( "Example",	H List Box(		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )	));

```

### Get Project

**Sintaxis:** project = obj &lt;&lt; Get Project()

**Descripción:** Devuelve el proyecto principal de la ventana, o Empty() si no está en un proyecto.

**JMP Versión agregada:** 14

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );c = w << Get Project();Show( c );

```

### Get Properties

**Sintaxis:** obj &lt;&lt; Get Properties

**Descripción:** Devuelve un arreglo asociativo que contiene las propiedades del cuadro de visualización y sus valores.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Sintaxis:** obj &lt;&lt; Get Property( "property" )

**Descripción:** Devuelve la configuración actual de la property con nombre.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Sintaxis:** obj &lt;&lt; Get Property List

**Descripción:** Devuelve una lista de propiedades que tiene el cuadro de visualización.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Get RTF

**Sintaxis:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**Descripción:** Devuelve una cadena con el código fuente RTF para el cuadro de visualización.

**Ejemplo 1**

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get RTF );

```

**Ejemplo 2**

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTFOpen( "$TEMP/Oneway.rtf" );

```

### Get Row States

**Sintaxis:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**Descripción:** Devuelve un vector que contiene el estado de fila de cada fila de la tabla de datos indicada o de la tabla de datos actual. Los estados de fila pueden proceder de la tabla o del contexto de filtro del cuadro.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Get Show Window

**Sintaxis:** obj &lt;&lt; Get Show Window

**Descripción:** Devuelve la visibilidad de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );Print( w << Get Show Window() );

```

### Get Size

**Sintaxis:** width,height = obj &lt;&lt; Get Size

**Descripción:** Devuelve el tamaño del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];Print( fb << Get Size );

```

### Get Stretch

**Sintaxis:** x,y = obj &lt;&lt; Get Stretch

**Descripción:** Devuelve las marcas de ajuste para este cuadro de visualización en las direcciones horizontales y verticales.

**JMP Versión agregada:** 16

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		spacer = Spacer Box(			Size( 20, 20 ),			Color( "Light Red" ),			<<Set Stretch( "Fill", "Off" )		)	));spacer << Get Stretch();

```

### Get Text

**Sintaxis:** obj &lt;&lt; Get Text

**Descripción:** Devuelve una cadena con el texto del cuadro de visualización.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << Set Text( win << Get Text );

```

### Get Text Color

**Sintaxis:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Descripción:** El texto se dibujará con el color del texto si se ha establecido. Si no se ha establecido la propiedad, el cuadro heredará el color de texto del cuadro contenedor.

**JMP Versión agregada:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Get UI Only

**Sintaxis:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**Sintaxis:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Descripción:** La alineación vertical controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**Sintaxis:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Descripción:** La visibilidad determina si se muestra un cuadro y si ocupa espacio. El valor predeterminado de "Visible" significa que se mostrará el objeto.  Un cuadro "Hidden" no se muestra pero ocupa espacio, mientras que un cuadro "Collapsed" no ocupa espacio en la presentación.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Width

**Sintaxis:** width = obj &lt;&lt; Get Width

**Descripción:** Devuelve el ancho del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Get Width;

```

### Get Window Icon

**Sintaxis:** obj &lt;&lt; Get Window Icon

**Descripción:** Devuelve el icono de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Icon;Show( t );

```

### Get Window Position

**Sintaxis:** obj &lt;&lt; Get Window Position

**Descripción:** Devuelve la posición de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );p = w << Get Window Position();Show( p );

```

### Get Window Size

**Sintaxis:** obj &lt;&lt; Get Window Size

**Descripción:** Devuelve el tamaño de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );s = w << Get Window Size();Show( s );

```

### Get Window Title

**Sintaxis:** obj &lt;&lt; Get Window Title

**Descripción:** Devuelve el título de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );t = w << Get Window Title;Show( t );

```

### Get Window View

**Sintaxis:** obj &lt;&lt; Get Window View

**Descripción:** Devuelve la vista de la ventana actual. La ventana puede ser "Visible", "Invisible" o "Privado".

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Print( w << Get Window View() );

```

### Get XML

**Sintaxis:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Descripción:** Recupera el árbol de visualización formateado como XML. De forma predeterminada, las cadenas de caracteres se devuelven en el idioma local, y el XML incluye valores de datos en algunas casillas. Utilice la opción English para devolver cadenas de caracteres en inglés cuando estén disponibles. Utilice la opción NoData para omitir los valores de los datos en los cuadros, que pueden ser muy grandes para algunos árboles de visualización.

```jsl

//This message applies to all display box objectswin = New Window( "test", a = Text Box( "my test" ) );a << set text( win << get xml );

```

### GetOffset

**Sintaxis:** x,y = obj &lt;&lt; GetOffset

**Descripción:** Devuelve el desplazamiento de este cuadro de visualización en relación con el cuadro progenitor. Puede utilizar el mensaje <<progenitor en un bucle para acumular varios desplazamientos.

```jsl

New Window( "example",	MouseBox(		Graph Box(			title( "title" ),			Pen Size( 3 );			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );		),		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"	,		<<settrack( // events from the mouse (movement, with button up or down)			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y				{fb, offset, t, off, size}, // local variables				// recalulate offset and size each time, the values can change				fb = this[framebox( 1 )]; // the framebox in the graph 				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox				t = fb; // a temporary box that starts at the frame 				While( t != this, // and walks up to the mousebox					off = t << getOffset; // ask each box for its offset to the immediate parent					offset += Matrix( off ); // convert list answer to matrix so + will work					t = t << parent; // crawl up to the mousebox, one box at a time				);				size = Matrix( fb << getSize ); // the frame knows its size				If( // over the frame box					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2]					 + size[2]				,					fb << setbackgroundcolor( "red" ),					fb << setbackgroundcolor( "blue" )				);			)		)	));

```

### Horizontal Alignment

**Sintaxis:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" ); "Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**Descripción:** La alineación horizontal controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Border( 1 );Wait( 2 );lb << Horizontal Alignment( "Right" );

```

### Inval

**Sintaxis:** obj &lt;&lt; Inval

**Descripción:** Invalida el cuadro de visualización. La ventana se actualizará cuando se envíe el mensaje <<Actualizar o llegue el momento de la actualización por parte del sistema operativo.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Inval example",	Button Box( "red",		color = "red";		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	),	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                       but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	),	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Is Dirty

**Sintaxis:** obj &lt;&lt; Is Dirty

**Descripción:** Obtiene el estado modificado del documento. 1 significa que se ha modificado el documento y preguntará si quiere guardar; 0 significa que no se ha modificado el documento.

**JMP Versión agregada:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Is Modal Dialog

**Sintaxis:** obj &lt;&lt; Is Modal Dialog

**Descripción:** Devuelve verdadero si la ventana es un cuadro de diálogo modal. Solo es útil cuando se llama desde una rellamada del controlador de ventanas.

```jsl

With Window Handler(	New Window( "Modal Window", <<Modal ),	Function( {win},		Print( win << Is Modal Dialog() );		win << close window();	));

```

### Journal

**Sintaxis:** obj &lt;&lt; Journal

**Descripción:** Crea un diario desde el cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << journal;

```

### Journal Window

**Sintaxis:** obj &lt;&lt; Journal Window

**Descripción:** Abre una ventana diario de la ventana.

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Journal Window;

```

### Launch

**Sintaxis:** obj &lt;&lt; Launch

**Descripción:** Evalúa el argument indicado en el contexto del cuadro de visualización.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );New Window( "example",	ob1 = Outline Box( "treemap launcher" ),	ob2 = Outline Box( "bivariate partial" ),	ob3 = Outline Box( "bivariate launched" ));ob1 << launch( Treemap() );ob2 << launch( Bivariate( Y( :height ) ) );ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**Sintaxis:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**Descripción:** Crea un controlador de estado de fila para la tabla de datos indicada o la tabla de datos actual. Se llama a la función cuando cambian los estados de fila en el contexto de filtro del cuadro. El argumento de la función contiene los números de filas que han cambiado, o -1 si ha cambiado el filtro de estado de fila.

#### Single table

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )			),			V List Box(				t = Text Box( "0 Rows Excluded" ),				Distribution(					Continuous Distribution( Column( :weight ) ),					Nominal Distribution( Column( :age ) )				)			)		)	));updatetext = Function( {},	rs = t << Get Row States( dt );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = t << Make Row State Handler( dt, rsupdate );updatetext();

```

#### Where subset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "filter test",	t = Text Box( "0 Rows Excluded" ),	dist = Distribution(		Continuous Distribution( Column( :weight ) ),		Nominal Distribution( Column( :age ) ),		Local Data Filter(			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )		),		Where( :sex == "F" )	));subset = dist << Get Data Table();updatetext = Function( {},	rs = Report( dist ) << Get Row States( subset );	n = 0;	For( ii = 1, ii <= N Rows( rs ), ii++,		If( Excluded( As Row State( rs[ii] ) ),			n			++)	);	t << Set Text( Char( n ) || " Rows Excluded" ););rsupdate = Function( {a},	If( Is Matrix( a ),		updatetext()	));rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );updatetext();

```

### Margin

**Sintaxis:** obj &lt;&lt; Margin( sides ); sides = obj &lt;&lt; Get Margin

**Descripción:** El margen añade espacio entre el borde del cuadro y los cuadros adyacentes. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán a los márgenes horizontal y vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Margin );tb << Border( 1 );Wait( 2 );tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**Sintaxis:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**Descripción:** Maximiza la ventana. El argumento predeterminado es 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Maximize Window( 1 );Wait( 1 );w << Maximize Window( 0 );

```

### Minimize Window

**Sintaxis:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**Descripción:** Minimiza la ventana. El argumento predeterminado es 1.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Minimize Window( 1 );Wait( 1 );w << Minimize Window( 0 );

```

### Move Window

**Sintaxis:** obj &lt;&lt; Move Window( x,y )

**Descripción:** Desplaza la ventana a la posición especificada.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );w << Move Window( 500, 500 );

```

### Next

**Sintaxis:** obj &lt;&lt; Next

**Descripción:** Devuelve el cuadro de visualización después de este cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;next = rbiv << Next();Print( next << Class Name() );

```

### On Close

**Sintaxis:** obj &lt;&lt; On Close( script )

**Descripción:** Establece un script o función para que se ejecuten al cerrar la ventana. Este script debe devolver 1 para permitir el cierre o 0 para evitar que la ventana se cierre.

#### Cerrar función

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(	Function( {this},         // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled		New Window( "Are you sure?",			<<modal,			V List Box(				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )			)		)["button"] == 1	));

```

#### Cerrar script

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << On Close(    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled	New Window( "Are you sure?",		<<modal,		V List Box(			Text Box( "Press OK to allow the window to close" ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	)["button"] == 1);

```

### Optimize Display

**Sintaxis:** obj &lt;&lt; Optimize Display

**Descripción:** Establece la ventana y los anchos de columna de una tabla de datos en un tamaño óptimo.

**JMP Versión agregada:** 14

```jsl

//This message applies to Data Table objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Optimize Display;

```

### Pad Window

**Sintaxis:** obj &lt;&lt; Pad Window( bool )

**Descripción:** Activa o desactiva los márgenes de ventana.

```jsl

//This message applies to all display box objectsOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );r = d << report;r << Pad Window( 0 );

```

### Padding

**Sintaxis:** obj &lt;&lt; Padding( sides ); sides = obj &lt;&lt; Get Padding

**Descripción:** El espaciado interno añade espacio entre el contenido y el borde del cuadro. Use argumentos con nombre o proporcione una lista de valores. Si se proporciona un único valor, se aplicará a todos los lados. Si se especifican dos valores, se aplicarán al espaciado interno horizontal y vertical.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Padding );tb << Border( 1 );Wait( 1 );tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**Sintaxis:** obj &lt;&lt; Page Break

**Descripción:** Inserta un salto de página antes del cuadro de visualización.

```jsl

//This message applies to all display box objectsNew Window( "Example",	ob = Outline Box( "Outline Box",		V List Box(			ob2 = Outline Box( "Outline Box 2",				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )			),			ob3 = Outline Box( "Outline Box",				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )			)		)	));ob3 << Page Break;

```

### Parent

**Sintaxis:** obj &lt;&lt; Parent

**Descripción:** Devuelve el progenitor de este cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisParent = axisbox << parent();Print( axisParent << Class Name() );

```

### Prepend

**Sintaxis:** obj &lt;&lt; Prepend( db2 )

**Descripción:** Agrega db2 al árbol de visualización antes de db.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**Sintaxis:** obj &lt;&lt; Prev Sib

**Descripción:** Devuelve el hermano anterior del cuadro de visualización.

**JMP Versión agregada:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 2 )];axisSibling = axisbox << Prev Sib();Print( axisSibling << Class Name() );

```

### Print Window

**Sintaxis:** obj &lt;&lt; Print Window

**Descripción:** Imprime la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Print Window;

```

### Reshow

**Sintaxis:** obj &lt;&lt; Reshow

**Descripción:** Invalida el cuadro de visualización y actualiza la ventana con el contenido nuevo. Consulte los mensajes <<Inval y <<Actualizar ventana si desea más control sobre los tiempos de actualización.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "Reshow example",	Button Box( "red",		color = "red";		g << reshow/* tell the graph that something changed */;	),	Button Box( "blue",		color = "blue";		g << reshow/* tell the graph that something changed */;	),	g = Graph Box(/* the graph does NOT watch for the color variable to change                     but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));

```

### Save Capture

**Sintaxis:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**Descripción:** Guarda una captura de pantalla del cuadro de visualización en la path especificada. Si no se indica path, se abrirá la ventana Guardar como.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**Sintaxis:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**Descripción:** Guarda el código fuente HTML y las carpetas de los gráficos en el format especificado.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**Sintaxis:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**Descripción:** Guarda el HTML interactivo con datos en un archivo. El argumento Boolean representa el informe que es estático.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**Sintaxis:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**Descripción:** Guarda el código fuente del diario para el cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**Sintaxis:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**Descripción:** Guarda el cuadro de visualización como documento de Microsoft Word. (Solo para Windows)

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**Sintaxis:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**Descripción:** Guarda un PDF del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**Sintaxis:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**Descripción:** Guarda una imagen del cuadro de visualización. Los formatos compatibles con EMF (Windows), PICT (Macintosh), JPEG o JPG, GIF o PNG. El argumento Scale opcional representará la imagen con una resolución a escala. El escalado requiere que el cuadro de visualización sea ajustable. El argumento Type determina si el resultado será una imagen vectorial escalable o un mapa de bits. De forma predeterminada, se devuelve una imagen escalable, adecuada para guardarla en formatos vectoriales como PDF. La opción View cambia el comportamiento de algunos cuadros. La opción predeterminada de "Picture" dibuja el informe como sería al exportarlo a un formato de imagen, mostrando completamente las áreas desplazadas. El modo de visualización de "Screen" dibuja el informe como se ve en pantalla, y "Print" dibuja el informe como se ve al imprimirse, sin ninguna de las funciones de configuración de páginas. La opción SubRect capturará una porción de la imagen resultante en lugar de una imagen completa. La opción Appearance puede cambiar de los colores de salida "Default" a los colores "Current" como se ven en pantalla. Las opciones View, SubRect y Appearance solo son compatibles con Type"Bitmap".

#### Escala

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

#### Predeterminado

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

#### Vista y aspecto

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate(	Y( :weight ),	X( :height ),	Fit Line( {Line Color( {212, 73, 88} )} ),	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),	Kernel Smoother( 1, 1, 0.5, 0 ));rbiv = biv << report;rbiv << Save Picture(	"$TEMP/jmp_example_screen.png",	"png",	View( "Screen" ),	Appearance( "Current" ));rbiv << Save Picture(	"$TEMP/jmp_example_print.png",	"png",	View( "Print" ),	Appearance( "Default" ));New Window( "Example",	H List Box(		New Image( "$TEMP/jmp_example_screen.png" ),		New Image( "$TEMP/jmp_example_print.png" )	));

```

### Save Presentation

**Sintaxis:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**Descripción:** Guarda las tablas del cuadro de visualización y las diapositivas de los gráficos en una presentación. La presentación puede abrirse con Microsoft PowerPoint u otro software de presentaciones.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );biv = bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**Sintaxis:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**Descripción:** Guarda el código fuente RTF con los gráficos en el format especificado.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**Sintaxis:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**Descripción:** Guarda un archivo con el texto del cuadro de visualización.

```jsl

//This message applies to all display box objectswin = New Window( "Example", a = Text Box( "Example Text" ) );a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**Sintaxis:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**Descripción:** Guarda la ventana de informes actual en un archivo de informes JMP (.jrp).

**JMP Versión agregada:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report windowOpen( "$SAMPLE_DATA/Big Class.jmp" );d = distribution( Column( :height ) );d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**Sintaxis:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**Descripción:** Ajusta la barra de desplazamiento de la ventana para mostrar el DisplayBox indicado, o bien desplaza un número relativo de píxeles o desplaza hasta una ubicación de píxeles absoluta. En lugar de un número de píxeles, se pueden utilizar las palabras clave "Start" o "End".

#### Absolute

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Absolute( "End", "End" ) );Wait( 1 );fm << scroll window( Absolute( 0, 300 ) );Wait( 1 );

```

#### Box

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowFor( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second	fm << scroll window( Report( fm )[framebox( 2 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 3 )] );	Wait( .5 );	fm << scroll window( Report( fm )[framebox( 1 )] );	Wait( .5 ););

```

#### Relative

```jsl

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );fm = Fit Model(	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	Effects( :Subject, :Dose ),	Personality( "Manova" ),	Run);fm << setwindowsize( 600, 600 ); // shrink the windowfm << scroll window( Relative( 300 ) );Wait( 1 );fm << scroll window( Relative( -50 ) );Wait( 1 );fm << scroll window( Relative( "Start" ) );Wait( 1 );

```

### Select

**Sintaxis:** obj &lt;&lt; Select

**Descripción:** Selecciona este objeto para que lo utilicen los comandos del menú Editar.

```jsl

//This message applies to all display box objectsNew Window( "Example", ex = Button Box( "Press Me" ) );ex << Select;

```

### Set Content Size

**Sintaxis:** obj &lt;&lt; Set Content Size( x,y )

**Descripción:** Establece el tamaño del contenido de dentro de la ventana.

```jsl

//This message applies to all display box objectsw = New Window( "Test",	lb = List Box( {"a", "b", "c", "d"} ),	Button Box( "Enable 2nd item",		lb << enable item( 2, 1 );		Show( lb << item enabled( 2 ) );	),	Button Box( "Disable 2nd item",		lb << enable item( 2, 0 );		Show( lb << item enabled( 2 ) );	));Wait( 2 );w << Set Content Size( 400, 300 );

```

### Set Dirty

**Sintaxis:** obj &lt;&lt; Set Dirty

**Descripción:** Establece el estado modificado del documento. 0 no preguntará si quiere guardar; 1 sí.

**JMP Versión agregada:** 14

```jsl

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );Show( ww << Is Dirty );ww << Set Dirty( 0 );Show( ww << Is Dirty );

```

### Set Height

**Sintaxis:** obj &lt;&lt; Set Height( width )

**Descripción:** Establece la altura del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Height( 150 );

```

### Set Main Window

**Sintaxis:** obj &lt;&lt; Set Main Window

**Descripción:** Establece la ventana como la ventana principal de JMP y la ventana principal anterior como una ventana normal

```jsl

//This message applies to all display box objectsw = New Window( "Main Window", Text Box( "Main JMP Window" ) );w << Set Main Window;

```

### Set Max Size

**Sintaxis:** obj &lt;&lt; Set Max Size( width,height )

**Descripción:** Establece el tamaño máximo de este cuadro de visualización para la autoexpansión.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Max Size( 500, 500 );fb << Get Max Size;

```

### Set Min Size

**Sintaxis:** obj &lt;&lt; Set Min Size( width,height )

**Descripción:** Establece el tamaño mínimo de este cuadro de visualización para la autoexpansión.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Min Size( 30, 30 );fb << Get Min Size;

```

### Set Page Setup

**Sintaxis:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**Descripción:** Establece la información de configuración de página que se utiliza durante la impresión o al guardar como PDF. Opcionalmente, se puede generar un índice a partir de los cuadros de esquema.

```jsl

//This message applies to all display box objectsw = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );w << Set page setup(	margins( 1, 1, 1, 1 ),	scale( 1 ),	portrait( 1 ),	paper size( "Letter" ),	Table of Contents( "always" ));w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**Sintaxis:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**Descripción:** Establece los pies de página de la izquierda, el centro y la derecha para la salida impresa

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Footer Test" ) );w << Set Print Footers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Print Headers

**Sintaxis:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**Descripción:** Establece los encabezados de página de la izquierda, el centro y la derecha para la salida impresa

```jsl

//This message applies to all display box objectsw = New Window( "Window", Text Box( "Header Test" ) );w << Set Print Headers(	"Today is: &d;"/*left*/, "&wt;"/*center*/,	"Page &pn; of &pc;"/*right*/);w << Print Window;

```

### Set Property

**Sintaxis:** obj &lt;&lt; Set Property( "property", value )

**Descripción:** Establece el valor de la property con nombre para el cuadro de visualización.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**Sintaxis:** obj &lt;&lt; Set Report Title( "string" )

**Descripción:** Cambia el título del informe.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**Sintaxis:** obj &lt;&lt; Set Stretch( x,y )

**Descripción:** Establece el comportamiento de ajuste horizontal y vertical del cuadro. Los cuadros que se ajustan con Window cambiarán de tamaño en función del tamaño de la ventana o el divisor. Los cuadros que se ajustan a Fill se ajustarán hasta llenar el espacio disponible en su contenedor. Los cuadros con el ajuste establecido en Off no se ajustarán por lo general. La mayoría de los cuadros tienen Neutral como valor predeterminado, lo que significa que se determinará su compartimiento en función de sus cuadros hijo.

**JMP Versión agregada:** 16

#### Ajustar con ventana

```jsl

//This message applies to all display box objectsNew Window( "Example",	H List Box(		tv = Text Box( "V+V", <<rotate text( left ) ),		V List Box(			Text Box( "resize the containing window" ),			th = Text Box( "H+H" ),			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )		)	));tv << Vertical Alignment( "Center" );th << Horizontal Alignment( "Center" );th << Set Stretch( "Window", "Off" );ts << Set Min Size( 5, 20 );ts << Set Max Size( 100000, 100 );ts << Set Stretch( "Window", "Window" );

```

#### Ajustar hasta llenar

```jsl

//This message applies to all display box objectsNew Window( "Stretch",	V List Box(		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )	));

```

### Set Summary Behavior

**Sintaxis:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**Descripción:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );d << Report View( "Summary" );r = d << Report;tb = r[Table Box( 1 )];tb << Set Summary Behavior( "Visible" );

```

### Set Width

**Sintaxis:** obj &lt;&lt; Set Width( width )

**Descripción:** Establece el ancho del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << Set Width( 400 );

```

### Set Window Icon

**Sintaxis:** obj &lt;&lt; Set Window Icon( icon name )

**Descripción:** Establece el icono de la ventana.

```jsl

//This message applies to all display box objectsw = New Window( "Example", ex = Button Box( "New Analysis" ) );w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**Sintaxis:** obj &lt;&lt; Set Window Size( x,y )

**Descripción:** Establece el tamaño de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 800, 1200 );

```

### Set Window Title

**Sintaxis:** obj &lt;&lt; Set Window Title( "string" )

**Descripción:** Cambia el título de la ventana.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Set Window Title( "New Title" );

```

### Show Properties

**Sintaxis:** obj &lt;&lt; Show Properties

**Descripción:** Muestra un editor de propiedades para los cuadros de visualización

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Properties();

```

### Show Tree Structure

**Sintaxis:** obj &lt;&lt; Show Tree Structure

**Descripción:** Muestra una estructura de árbol jerárquica del cuadro de visualización y sus nodos relacionados.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rbiv << Show Tree Structure();

```

### Show Window

**Sintaxis:** obj &lt;&lt; Show Window( state=0|1 )

**Descripción:** Muestra u oculta la ventana. Esto es útil para ocultar temporalmente las ventanas. Opción activada de forma predeterminada.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 1 );w << Show Window( 0 );Wait( 2 );w << Show Window( 1 );

```

### Sib

**Sintaxis:** obj &lt;&lt; Sib

**Descripción:** Devuelve el hermano del cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;axisbox = rbiv[axis box( 1 )];axisSibling = axisbox << sib();Print( axisSibling << Class Name() );

```

### Sib Append

**Sintaxis:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**Descripción:** Agrega un cuadro de visualización justo después de este cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r()[framebox( 1 )];fb << sib append(	Text Box( "============ after ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**Sintaxis:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**Descripción:** Agrega un cuadro de visualización justo antes de este cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/big class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;fb = r[framebox( 1 )];fb << sib prepend(	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),	"Horizontal");fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**Sintaxis:** obj &lt;&lt; Size Window( x,y )

**Descripción:** Establece el tamaño de la ventana.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Size Window( 500, 500 );

```

### Text Color

**Sintaxis:** obj &lt;&lt; Text Color( color ); color = obj &lt;&lt; Get Text Color

**Descripción:** El texto se dibujará con el color del texto si se ha establecido. Si no se ha establecido la propiedad, el cuadro heredará el color de texto del cuadro contenedor.

**JMP Versión agregada:** 15

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Text Color );Wait( 2 );tb << Text Color( "Red" );

```

### Top Parent

**Sintaxis:** obj &lt;&lt; Top Parent

**Descripción:** Devuelve el progenitor raíz de este cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;rootParent = rbiv << Top Parent();Print( rootParent << Class Name() );

```

### UI Only

**Sintaxis:** obj &lt;&lt; UI Only( state=0|1 ); state = obj &lt;&lt; Get UI Only

### Update Window

**Sintaxis:** obj &lt;&lt; Update Window

**Descripción:** Actualiza la ventana manteniendo el cuadro de visualización si hay regiones invalidadas. El mensaje <<Invalidar crea regiones invalidadas.

```jsl

//This message applies to all display box objectscolor = "green"; /* initial color in a variable */New Window( "UpdateWindow example",	Button Box( "red",		color = "red";        // try commenting out each of the 4 lines that follow, run the script,		// click the buttons, and resize the windows (for example) to force a		// redraw.  All 4 lines are important, though the last two may be		// slightly different on Windows and Mac OSs.		g1 << inval; /* tell the oval to redraw */		g2 << inval; /* tell the rectangle to redraw */		g1 << updateWindow; /* tell the oval window to update immediately */		g2 << updateWindow; /* tell the rect window to update immediately */		// this is a busy-wait to help demonstrate the various behaviors...		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );	),	Button Box( "blue",		color = "blue";		g1 << inval; /* same comments */		g2 << inval;		g1 << updateWindow;		g2 << updateWindow;		x = Tick Seconds();		While( Tick Seconds() - x < .5, 0 );	));New Window( "oval",	g1 = Graph Box(/* the graph does NOT watch for the color variable to change                      but will use the current value of color when it reshows */		Fill Color( color );		Oval( 10, 80, 70, 50, 1 );	));New Window( "rect",	g2 = Graph Box(		Fill Color( color );		Rect( 10, 80, 70, 50, 1 );	));

```

### Vertical Alignment

**Sintaxis:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" ); "Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**Descripción:** La alineación vertical controla el posicionamiento del cuadro dentro de un contenedor si el cuadro no ocupa todo el espacio.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;lb = r[List Box( 6 )];lb << Set Horizontal( 1 );lb = r[List Box( 7 )];lb << Border( 1 );Wait( 2 );lb << Vertical Alignment( "Bottom" );

```

### Visibility

**Sintaxis:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" ); "Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**Descripción:** La visibilidad determina si se muestra un cuadro y si ocupa espacio. El valor predeterminado de "Visible" significa que se mostrará el objeto.  Un cuadro "Hidden" no se muestra pero ocupa espacio, mientras que un cuadro "Collapsed" no ocupa espacio en la presentación.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );d = dt << Distribution( Column( :height ) );r = d << report;tb = r[Table Box( 1 )];Show( tb << Get Visibility );Wait( 1 );tb << Visibility( "Collapse" );Show( tb << Get Visibility );

```

### Window Class Name

**Sintaxis:** obj &lt;&lt; Window Class Name

**Descripción:** Devuelve el nombre de la clase de la ventana correspondiente al cuadro de visualización.

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( y( :weight ), x( :height ) );rbiv = biv << report;Show( biv << Window Class Name() );Show( rbiv << Window Class Name() );

```

### XPath

**Sintaxis:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**Descripción:** Aplica una expresión XPath a la representación XML del árbol de visualización y devuelve los resultados. De forma predeterminada, las cadenas de caracteres se devuelven en el idioma local y el XML incluye valores de datos en algunas casillas. Utilice la opción English para devolver cadenas de caracteres en inglés cuando estén disponibles. Utilice la opción NoData para omitir los valores de datos en los cuadros, lo que resulta útil para el rendimiento cuando la consulta se basa únicamente en los atributos de los cuadros.

#### Attributes

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) <<Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) <<Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objectsdt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Run Script( "Bivariate" );(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**Sintaxis:** obj &lt;&lt; Zoom Window

**Descripción:** Aumenta el tamaño de la ventana hasta que pueda mostrar todo su contenido.

```jsl

//This message applies to all display box objectsw = Open( "$SAMPLE_DATA/Big Class.jmp" );w << Set Window Size( 80, 120 );Wait( 2 );w << Zoom Window;

```

