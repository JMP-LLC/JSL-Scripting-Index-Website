# Display



### Alignment Cell Box

**Sintaxis:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**Descripción:** Devuelve una referencia a un cuadro de visualización que incluye el contenido de la fila (o columna) que se encuentra en un cuadro de la cuadrícula de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Grid Box

**Sintaxis:** y = Alignment Grid Box( alignment cell boxes )

**Descripción:** Devuelve una referencia a un cuadro de visualización que puede contener cuadros de celdas de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Crosstab",
	Alignment Grid Box(
		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),
		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),
		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),
		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),
		Alignment Cell Box(
			4,
			1,
			6,
			3,
			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)",
			"7 (32%)", "12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)",
			"3 (8%)", "1 (6%)", "2 (9%)", "3 (8%)"}
		)
	)
);

```

### Alignment Multi Box

**Sintaxis:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**Descripción:** Devuelve una referencia a un cuadro de visualización que contiene múltiples elementos dentro de cada celda de una cuadrícula de alineación.

**JMP Versión agregada:** 19

```jsl


New Window( "Alignment MultiBox",
	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),
		Alignment Grid Box(
			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),
			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),
			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),
			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),
			Alignment Cell Box(
				2,
				1,
				7,
				1,
				{"12", "13", "14", "15", "16", "17", "Total Responses"}
			),
			Alignment Multi Box(
				2,
				2,
				6,
				2,
				2,
				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055,
				0.136 0.181, 0.318 0.227, 0.045 0.090]},
				{Empty(), Empty()}
			),
			Alignment Cell Box( 8, 2, 1, 2, [18 22] )
		)
	)
);

```

### Alpha Shape

**Sintaxis:** ashape = Alpha Shape(Triangulation)

**Descripción:** Devuelve la forma alfa de la triangulación indicada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
triang = Triangulation( X( :X, :Y ), Y( :POP ) );
ashape = Alpha Shape( triang );

```

### Border Box

**Sintaxis:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**Descripción:** Devuelve un cuadro de visualización para añadir espacio alrededor del cuadro de visualización indicado en el argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Box Plot Seg

**Sintaxis:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**Descripción:** Devuelve un segmento de visualización que representa un diagrama de caja basado en los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**Sintaxis:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**Descripción:** Crea una imagen rotatoria que indica un proceso en curso.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**Sintaxis:** y = Button Box( title, script )

**Descripción:** Devuelve un cuadro de visualización para mostrar un botón con título. El argumento script se ejecuta al hacer clic en el botón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**Sintaxis:** y = Calendar Box()

**Descripción:** Devuelve un cuadro de visualización que contiene un control de calendario. El calendario admite la selección única de una fecha y, de forma opcional, de una hora.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**Sintaxis:** y = Check Box( {item, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar una o más casillas de selección.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**Sintaxis:** Clear Global Window Handler()

**Descripción:** Borra un controlador de ventanas establecido previamente por Establecer controlador de ventanas global.

**JMP Versión agregada:** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Col Box

**Sintaxis:** y = Col Box( title, boxes )

**Descripción:** Devuelve un cuadro de columna constituido por los cuadros de visualización indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = New Window( "Example",
	exx = 1;
	exy = 4;
	exz = 8;
	Table Box(
		String Col Box( "strings", {"x", "y", "z"} ),
		Col Box(
			"boxes",
			Slider Box( 0, 10, exx, Show( exx ) ),
			Slider Box( 0, 10, exy, Show( exy ) ),
			Slider Box( 0, 10, exz, Show( exz ) )
		)
	);
);

```

### Col List Box

**Sintaxis:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un cuadro de lista en el que seleccionar columnas de la tabla de datos. Use el mensaje <<Modeling Type para permitir tipos de modelización especiales o restringir los tipos permitidos. El valor predeterminado de "Any" permitirá cualquier columna con un tipo de modelización clásico ("Continuous", "Nominal", "Ordinal").

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 2",
	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) )
);

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example 3",
	H List Box(
		ll1 = Col List Box( all ),
		Button Box( "Add", ll2 << append( ll1 << get selected ) ),
		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),
		Button Box( "Remove", ll2 << remove selected )
	)
);

```

### Col Span Box

**Sintaxis:** y = Col Span Box( title, children )

**Descripción:** Devuelve una columna con un encabezado que abarca columnas hijas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	Table Box(
		Col Span Box(
			"Col Span",
			String Col Box( "col 1", {"A", "B", "C"} ),
			Number Col Box( "col2", {1, 2, 3} )
		)
	)
);

```

### Column Dialog

**Sintaxis:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**Descripción:** Muestra al usuario una ventana modal con campos para seleccionar columnas de una tabla de datos. La especificación puede incluir varios tipos de cuadros de entrada, así como cuadros contenedores para organizar la ventana.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
Column Dialog(
	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),
	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),
	Line Up( 2,
		Text Box( "Alpha" ), ex = EditNumber( .05 ),
		Text Box( "Beta" ), ey = EditText( "xyz" )
	),
	HList( cb = Check Box( "check", 1 ) ),
	HList( combo = Combo Box( "option1", "option2" ) ),
	HList( rb = RadioButtons( "a", "b" ) ),
	Window Title( "Custom Launch Dialog" ),
	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.
	Dialog Description( "The dialog before a groundbreaking discovery!" ),
	Recall Script(
		Function( {dlgBox},
			dlgBox[list box box( 2 )] << remove all;
			dlgBox[list box box( 1 )] << clear selection;
			dlgBox[list box box( 1 )] << set selected( 3 );
			dlgBox[Button Box( 2 )] << click;
		)
	),
	Help Script( Web( "http://www.jmp.com/" ) )
);

```

### Combo Box

**Sintaxis:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un cuadro combinado con un menú desplegable. Cada elemento del cuadro combinado puede contener información sobre la herramienta que se especifique en forma de cadena de caracteres entre paréntesis, a continuación de la cadena de texto que corresponde al elemento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) )
);

```

### Context Box

**Sintaxis:** y = Context Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que establece un contexto de evaluación limitada. Permite que distintas partes de una ventana de visualización funcionen de forma independiente entre sí.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Context Box(
		Outline Box( "Picker",
			V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
		)
	)
);

```

### Contour Seg

**Sintaxis:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**Descripción:** Devuelve un segmento de visualización que representa los contornos de una triangulación. Se pueden especificar colores opcionales para cada nivel en forma de matriz o lista. La transparencia puede indicarse en forma de número o matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg(
			tri,
			[0, 400, 1000, 2000, 9000],
			zColor( 5 + [64 32 0 16 48] ),
			Transparency( [1, 1, 1, 1, 1] )
		)
	)
);

```

### Current Report

**Sintaxis:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia de cuadro de visualización al informe actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Current Report();

```

### Current Window

**Sintaxis:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**Descripción:** Devuelve una referencia a la ventana actual del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Example Outline",
		Text Box( "Example Text" ),
		Button Box( "Close", Current Window() << Close Window )
	)
);

```

### Data Filter Context Box

**Sintaxis:** y = Data Filter Context Box( displayBox )

**Descripción:** Devuelve un cuadro de visualización que define la extensión de los filtros de datos locales contenidos en un árbol de visualización. Los filtros de datos y los cuadros de contexto de filtro de datos se pueden organizar en una jerarquía y se pueden compartir en distintas plataformas o cuadros dentro de cuadros de contexto de filtro de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),
			dt << Bubble Plot(
				X( :weight ),
				Y( :height ),
				Fit To Window( "On" ),
				Sizes( :age ),
				Title Position( 0, 0 )
			),
			dt << Graph Builder(
				Size( 525, 456 ),
				Show Control Panel( 0 ),
				Fit To Window( "On" ),
				Variables( X( :weight ), Y( :age ) ),
				Elements( Box Plot( X, Y, Legend( 4 ) ) ),

			)
		)
	)
);

```

### Data Filter Source Box

**Sintaxis:** y = Data Filter Source Box( displayBox )

**Descripción:** Devuelve un cuadro de visualización que define el origen de un filtro de selección. Las filas seleccionadas en los informes que contiene el cuadro de origen del filtro de datos se incluirá para el análisis en otros informes contenidos en un cuadro de contexto del filtro de datos común.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Selection Filter",
	Data Filter Context Box(
		H List Box(
			Data Filter Source Box(
				Graph Builder(
					Size( 208, 207 ),
					Show Control Panel( 0 ),
					Show Legend( 0 ),
					Variables( X( :age ) ),
					Elements( Bar( X, Legend( 3 ) ) ),
					SendToReport(
						Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} )
					)
				)
			),
			Platform(
				Current Data Table(),
				Bubble Plot(
					X( :weight ),
					Y( :height ),
					Sizes( :age ),
					Title Position( 0, 0 )
				)
			)
		)
	)
);

```

### Data Grid Box

**Sintaxis:** y = Data Grid Box( )

**Descripción:** Devuelve un cuadro de visualización que puede contener una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", x = Data Grid Box() );
x << Set Data Table( dt );

```

### Data Table Box

**Sintaxis:** y = Data Table Box( datatable )

**Descripción:** Devuelve un cuadro de tabla que representa la tabla de datos indicada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**Sintaxis:** y = Data Table Col Box( col )

**Descripción:** Devuelve un cuadro de columna correspondiente a la columna de la tabla de datos especificada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) )
);

```

### Data Table Plot Col Box

**Sintaxis:** y = Data Table Plot Col Box( col )

**Descripción:** Devuelve un Plot Col Box que corresponde a la columna de datos dada y, opcionalmente, utiliza la segunda y tercera columnas de la tabla de datos para crear límites de control.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) )
);

```

### Dialog

**Sintaxis:** y = Dialog( specification )

**Descripción:** Muestra al usuario una ventana modal. Esta función está en desuso. Utilice la función Nueva ventana con el argumento <<Modal.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

// See Example 2 for the deprecated Dialog equivalent
If(
	ex = New Window( "Dialog() example",
		<<Modal,
		<<Return Result,
		V List Box(
			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

#### Ejemplo 2

```jsl

// Deprecated
If(
	ex = Dialog(
		Title( " Dialog() example" ),
		vlist(
			hlist( "Set this value", variable = EditNumber( 42 ) ),
			hlist( Button( "OK" ), Button( "Cancel" ) )
		)
	);
	ex["button"] == 1;
,
	ex["variable"],
	"CANCEL"
);

```

### Excerpt Box

**Sintaxis:** y = Excerpt Box( rptnum, lstSubscripts )

**Descripción:** Devuelve un cuadro de visualización que contiene el extracto designado por el informe número rptnum y la lista de índices de visualización lstSubscripts. Estos índices reflejan el estado actual del informe después de eliminar los extractos anteriores.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Expr As Picture

**Sintaxis:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**Descripción:** Devuelve una imagen que contiene la expresión especificada como imagen de la fórmula. El ancho predeterminado es 600 píxeles y el tamaño de matriz máximo predeterminado es 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Filter Col Selector

**Sintaxis:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**Descripción:** Devuelve un cuadro de visualización que contiene una lista de elementos. El control permite el filtrado de columnas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**Sintaxis:** project = Get Project( title|index|box|window )

**Descripción:** Devuelve una referencia a un proyecto abierto específico por título, índice o cuadro.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
Print( Get Project( 2 ) << Get Window Title() );

```

#### Ejemplo 2

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
                             
project = Get Project( "Big Class" );

```

### Get Project List

**Sintaxis:** projectList = Get Project List()

**Descripción:** Devuelve una lista de todos los proyectos abiertos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Project();
Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );
                              
Print( Get Project List() << Get Window Title() );

```

### Get Window

**Sintaxis:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**Descripción:** Devuelve una referencia a una ventana abierta específica por título, índice o cuadro.



La búsqueda está limitada a las ventanas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Utilice el argumento opcional Type() con "Tablas de datos", "Diarios", "Informes" o "Cuadros de diálogo" para limitar la búsqueda a ventanas de un tipo en concreto.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );
                                        
window = Get Window( "Big Class" );

```

#### Ejemplo 2

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**Sintaxis:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**Descripción:** Devuelve una lista de todas las ventanas abiertas.



La lista está limitada a las ventanas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.



Utilice el argumento opcional Type() y seleccione "Tablas de datos", "Diarios", "Informes" o "Cuadros de diálogo" para limitar la búsqueda a ventanas de un tipo en concreto.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

Print( Get Window List() << Get Window Title() );

```

#### Ejemplo 2

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ) ) << Get Window Title() );

```

#### Ejemplo 3

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );
                             
Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**Sintaxis:** box = Global Box( name )

**Descripción:** Crea un cuadro de visualización que muestra el valor de una variable global.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = .6;
New Window( "Example", Global Box( ex ) );

```

### Graph

**Sintaxis:** y = Graph Box( props, script )

**Descripción:** Devuelve un cuadro de visualización que contiene un gráfico con ejes. Los argumentos de propiedades con nombre pueden ser title("título"), XScale(mínimo, máximo), YScale(mínimo, máximo), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer y SuppressAxes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Graph 3D Box

**Sintaxis:** y = Graph 3D Box()

**Descripción:** (Experimental) Devuelve un cuadro de visualización con contenido en 3D que se puede usar en otros cuadros de visualización para crear informes personalizados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x3d = Graph 3D Box(
	framesize( 300, 300 ),
	Xname( "X Axis" ),
	Yname( "Y Axis" ),
	Zname( "Z Axis" )
);
New Window( "Graph3DBox Example", x3d );
x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );
x3d << AddVector(
	[60 60 60]/*from*/,
	[90 60 60, 60 90 60, 60 60 90]/*to*/,
	ShaftThickness( [.1] ),
	FromThickness( [.2] ),
	ToThickness( [.3] ),
	ShaftColor( [-255] ),
	FromColor( [-16711680] ),
	ToColor( [-65280] ),
	Facets( Round ),
	FromCap( Sphere ),
	toCap( Point )
);

```

### Graph Box

**Sintaxis:** y = Graph Box( props, script )

**Descripción:** Devuelve un cuadro de visualización que contiene un gráfico con ejes. Los argumentos de propiedades con nombre pueden ser title("título"), XScale(mínimo, máximo), YScale(mínimo, máximo), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer y SuppressAxes.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### H Center Box

**Sintaxis:** y = H Center Box( &lt;childbox&gt; )

**Descripción:** Devuelve un cuadro de visualización con el argumento del cuadro de visualización childbox centrado horizontalmente según el tamaño máximo de este hijo y de todos los demás hermanos del recuadro central.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### H List Box

**Sintaxis:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición horizontal. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (bottom) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### H Scroll Box

**Sintaxis:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando una barra de desplazamiento horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		H Scroll Box(
			Size( 200 ),
			H List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### H Sheet Box

**Sintaxis:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición horizontal. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### H Splitter Box

**Sintaxis:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza otros cuadros de visualización horizontalmente, con un control interactivo de los tamaños. Los tamaños de los hijos se especifican como proporciones del ancho o el alto de Splitter Box. El argumento Size opcional solo se utiliza para el cuadro divisor superior. A los cuadros de nivel inferior se les asignan tamaños como los de cualquier otro cuadro hijo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**Sintaxis:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**Descripción:** Devuelve un cuadro de visualización para árboles jerárquicos. El argumento text es el nombre del nodo y puede ser un Text Edit Box.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Hier Box(
		Text Edit Box( "Cause 1" ),
		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),
		Hier Box( Text Box( "Subcause 1.2" ) ),
		<<Change Type( Fishbone ),
		<<direction( 1 )
	)
);

```

### Hist Seg

**Sintaxis:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**Descripción:** Devuelve un segmento de histograma

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
rows = N Row( xx );
New Window( "Hist Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, .2 ),
		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )
	)
);

```

### Icon Box

**Sintaxis:** Box = Icon Box( "Name" )

**Descripción:** Construye un cuadro de visualización que contiene un icono, donde el argumento name puede ser el nombre de un icono de o una ruta a una imagen.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

New Window( "Example",
	ex1 = Icon Box( "Popup" ),
	ex2 = Icon Box( "Locked" ),
	ex3 = Icon Box( "Labeled" ),
	ex4 = Icon Box( "Sub" ),
	ex5 = Icon Box( "Excluded" ),
	ex6 = Icon Box( "Hidden" ),
	ex7 = Icon Box( "Continuous" ),
	ex8 = Icon Box( "Nominal" ),
	ex9 = Icon Box( "Ordinal" )
);

```

#### Ejemplo 2

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**Sintaxis:** box = If Box( 0|1, displayBoxArgs )

**Descripción:** Devuelve un cuadro de visualización que muestra de forma condicional los argumentos de cuadro de visualización especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	H List Box(
		englishBox = If Box( 1, Text Box( "Good day" ) ),
		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )
	)
);
Wait( 5 );
englishBox << Set( 0 );
frenchBox << Set( 1 );

```

### If Seg

**Sintaxis:** seg = If Seg(&lt;state=0|1&gt;)

**Descripción:** Devuelve un segmento de visualización que muestra u oculta los segmentos de visualización hijos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example",
	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) )
);

```

### JSS Context Box

**Sintaxis:** y = JSS Context Box( displayBox )

**JMP Versión agregada:** 19

```jsl

New Window( "JSS Context",
	JSS Context Box(
		V List Box(
			Panel Box( "Panel", Text Box( "Hi" ), Button Box( "Press Me" ), ),
			Button Box( "Outside" ),

		),
		<<Set JSS(
			Expr(
				Type( TextBox ) << Background Color( "Red" );
				Type( ButtonBox ) << Background Color( "Green" );
				Descend( Type( PanelBox ), Type( ButtonBox ) ) << Background Color( "Blue" );
			)
		)
	)
);

```

### Journal Box

**Sintaxis:** y = Journal Box( journalText )

**Descripción:** Construye un cuadro de visualización a partir de las instrucciones que se almacenarían en un diario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sample = Distribution( Y( :height ) );
sampjourn = sample << Get Journal;
New Window( "Distribution of Height",
	Text Box( "Here is the result of the distribution platform for Height." ),
	Journal Box( sampjourn )
);

```

### Line Seg

**Sintaxis:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**Descripción:** Devuelve un segmento de visualización que contiene líneas que conectan todos los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Line Seg Example",
	g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) )
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**Sintaxis:** ls = Lines Seg([x1 y1 x2 y2,...])

**Descripción:** Devuelve un segmento de visualización que contiene una secuencia de segmentos de línea correspondientes a los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**Sintaxis:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización para mostrar la alineación de cuadros en nc columnas. El argumento opcional Spacing especifica el espaciado horizontal y vertical alrededor de los cuadros de visualización. Cuando se utiliza el argumento vspace, vspace es el espaciado vertical y pixels el horizontal.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 1 ), spacing( 10 ),
		Text Box( "Quadratic Formula" ),
		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),
			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )
		)
	)
);

```

### Lineup Ruler Box

**Sintaxis:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización que establece el ancho de las columnas de los cuadros de alineación que contiene.

**JMP Versión agregada:** 16

```jsl


New Window( "Lineup Ruler",
	lrb = Lineup Ruler Box(
		Widths( {120, 200} ),
		Outline Box( "Customer 1",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		),
		Outline Box( "Customer 2",
			Lineup Box( N Col( 2 ),
				Text Box( "First Name:" ),
				Text Edit Box(),
				Text Box( "Last Name:" ),
				Text Edit Box(), 

			)
		)
	)
);

```

### List Box

**Sintaxis:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización que muestra un cuadro de lista de elementos de selección. Si el propio item es una lista de dos elementos que contiene el nombre del elemento y una cadena de caracteres que especifica un tipo de modelización o criterio de ordenación, como "Ordinal" o "Ascending", el icono correspondiente se mostrará junto a ese elemento en el cuadro de lista.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

#### Ejemplo 2

```jsl

New Window( "Example",
	lb = List Box(
		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},
		width( 200 ),
		max selected( 2 ),
		nlines( 6 )
	)
);

```

### Marker Seg

**Sintaxis:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Descripción:** Devuelve un segmento de visualización que contiene marcadores en todos los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = Column( "height" ) << Get Values;
sz = Column( "age" ) << get values;
aa = [=> 0];
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )
	)
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )
	)
);

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )
	)
);

```

#### Ejemplo 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} )
		)
	)
);

```

#### Ejemplo 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
xx = [1 2 3 4 5];
yy = [2 3 4 5 6];
New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg(
			xx,
			yy,
			Row States(
				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),
				Color State( "Purple" ), Color State( "Red" )}
			)
		)
	)
);

```

### Matrix Box

**Sintaxis:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar una matriz de números.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### MouseBox

**Sintaxis:** box = MouseBox( displayBoxArgs )

**Descripción:** Devuelve un cuadro que permite realizar rellamadas a JSL para seguir las acciones del ratón.

**JMP Versión agregada:** Antes de la versión 14

```jsl

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

### Move to Project

**Sintaxis:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**Descripción:** Mueve una o más ventanas a un proyecto, fuera de un proyecto o entre proyectos. Solo se debe especificar un origen y un destino; el resto serán los valores predeterminados del proyecto actual. (Utilice solo el origen para mover ventanas al proyecto actual, y solo destino para mover ventanas fuera de él). Se moverá una ventana de tabla de datos junto con sus informes dependientes, aunque solo es necesario especificar uno en el argumento Ventanas. Si se omite, el argumento Ventanas será el predeterminado para todas las ventanas abiertas en el proyecto de origen.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
report = dt << Run Script( "Bivariate" );
                              
project = New Project();
                              
Move to Project( destination( project ), windows( {report} ) );

```

#### Ejemplo 2

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Move to Project( Source( project ) );
project << Close Window();

```

### New Image

**Sintaxis:** img = New Image()img = New Image( width, height )img = New Image( pathname )img = New Image( picture )img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**Descripción:** Devuelve una nueva imagen editable mediante comandos de JSL. Si se especifica una ruta hasta un archivo de imagen existente, el archivo debe estar en formato .JPG, .PNG, .GIF, .BMP o .TIF.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );
New Window( "new image", image );

```

#### Ejemplo 2

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );
image2 = New Image( pic );
New Window( "new image", image2 );

```

#### Ejemplo 3

```jsl

image3 = New Image();
mat = J( 256, 256 );
For( y = 0, y < 256, y++,
	For( x = 0, x < 256, x++,
		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )
	)
);
image3 << Set Pixels( mat );
New Window( "image", image3 );

```

### New Project

**Sintaxis:** project = new Project( &lt;project messages&gt; )

**Descripción:** Crea una nueva ventana de proyecto vacía. Pueden incluirse uno o más mensajes de proyecto como argumentos para crear un proyecto en un paso.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

project = New Project();

```

#### Ejemplo 2

```jsl

project = New Project(
	Run Script(
		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
		dt << Run Script( "Bivariate" );
	)
);

```

#### Ejemplo 3

```jsl

project = New Project(
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

#### Ejemplo 4

```jsl

project = New Project(
	Set Bookmarks(
		{File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )}
	),
	Run Script(
		Open( "$SAMPLE_DATA/Big Class.jmp" );
		New Window( "Big Class - Bivariate of weight by height",
			Bivariate( Y( :weight ), X( :height ) )
		);
	)
);

```

#### Ejemplo 5

```jsl

project = New Project(
	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),
	Set Layout(
		H Splitter Box(
			<<Set Sizes( {0.15, 0.85} ),
			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),
			V Splitter Box(
				<<Set Sizes( {0.7, 0.3} ),
				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),
				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )
			)
		)
	)
);

```

### New Window

**Sintaxis:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**Descripción:** Crea una ventana que contiene el cuadro de visualización o script especificados. De forma predeterminada, se crea una ventana de resultados, a menos que se especifique la opción Type. Una ventana de Type("Modal Dialog") detiene la ejecución hasta que se responda al cuadro de diálogo. On Open, On Validate y Return Result solo están disponibles para las ventanas modales. On Open() evalúa su expresión, función o método de clase cuando se crea la ventana. Si On Close() devuelve falso, se impide que la ventana se cierre. On Validate() ejecuta su expresión, función o método de clase cuando se hace clic en el botón Aceptar. Si la expresión devuelve verdadero, la ventana se cierra. De lo contrario, la ventana permanece abierta. Return Result cambia el valor devuelto por la ventana cuando se cierra para que coincida con el de la función Dialog() en desuso. Para los tipos de ventanas que admiten barras de herramientas, utilice Show Toolbars para especificar los cambios con respecto al comportamiento predeterminado. Las opciones Show Menu y Suppress AutoHide son solo para Windows. La opción Window View("Invisible") se puede utilizar para cualquier ventana que no sea Modal Dialog. Una ventana de Type("Script") crea un documento de JSL a menos que se especifique la opción <<Language.

**JMP Versión agregada:** Antes de la versión 14

#### [Win] Barras de herramientas y menús

```jsl

// Compare settings for toolbars and menus
// Suppress AutoHide is Windows only
g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "Default - menu and toolbars", g );
New Window( "Menu, no toolbars, suppress autohide",
	Suppress AutoHide( 1 ),
	Show Toolbars( 0 ),
	g
);
New Window( "Toolbars, no menu", Show Menu( 0 ), g );
New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

#### Cuadro de diálogo

```jsl


ex = New Window( "Dialog example",
	<<Type( "Dialog" ),
	V List Box(
		Panel Box( "Sample data dialog",
			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )
		),
		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )
	)
);

```

#### Diálogo modal

```jsl


ex = New Window( "Modal Dialog example",
	<<Type( "Modal Dialog" ),
	<<Return Result,
	<<On Validate(
		num = myEditBox << Get;
		If( num >= 1 & num <= 100, // in range
			myEditBox << Background Color( "Background" ); // this field does not need attention
			1; //the number is good, validate
		, // else out of range
			myEditBox << Background Color( "Light Yellow" ); // this field needs attention
			0; // the number is bad, do not validate
		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1
		;
	),
	V List Box(
		Text Box( "Enter a value between [1,100]:" ),
		H List Box( myEditBox = Number Edit Box( 42 ) ),
		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
	)
);

//  the Modal window must be closed before the following code runs

If(
	ex["button"] == 1 // not canceled
, // then show the value
	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box
, // else report no selection
	Write( "CANCEL" ); // cancel button or red X was pressed
);

```

#### Informe

```jsl

g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
New Window( "My Window's Title", g );

```

#### Invisible

```jsl


g = Graph Box(
	Frame Size( 300, 300 ),
	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	Pen Color( "Blue" );
	Line( [10 30 70], [88 22 44] );
);
w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );
p = w << Get Picture();
w << Close Window;
psize = p << Size;
New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

#### Script

```jsl

script = JSL Quote(Names Default To Here(1);
dt=Open("$SAMPLE_DATA/Big Class.jmp");
dt << Run Script("Bivariate");
);
ex = New Window( "Script example", <<Type( "Script" ), script );

```

#### Script Python

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

### Number Col Box

**Sintaxis:** y = Number Col Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para mostrar los números especificados en el argumento numbers, que puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Number Col Edit Box

**Sintaxis:** y = Number Col Edit Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para mostrar los números especificados en el argumento numbers, que puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = y = z = 0;
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) )
);

```

### Number Edit Box

**Sintaxis:** y = Number Edit Box( initValue, &lt;width&gt; )

**Descripción:** Devuelve un cuadro de edición que solo acepta entradas numéricas. Especifique el argumento width opcional para establecer el ancho del cuadro en caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );
x = neb << get;

```

### Outline Box

**Sintaxis:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**Descripción:** Crea un cuadro de esquema en el informe y devuelve la referencia al cuadro de visualización. Para incluir un menú en el nodo de esquema, especifique la lista command script pairs list con los comandos de menú y los scripts asociados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		{"Show label value", Show( teb << get text )},
		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )
	)
);

```

### Page Break Box

**Sintaxis:** Page Break Box()

**Descripción:** Crea un cuadro de visualización que fuerza un salto de página.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( "Blue" );
		Line( [10 30 70], [88 22 44] );
	),
	Page Break Box(),
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );
		Pen Color( "Red" );
		Line( [70 30 10], [88 22 44] );
	)
);

```

### Panel Box

**Sintaxis:** y = Panel Box( title, displayBoxArgs )

**Descripción:** Devuelve un cuadro de visualización que contiene el cuadro de visualización indicado en el argumento y sirve para etiquetarlo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Picture Box

**Sintaxis:** pict = Picture Box( Picture Object )

**Descripción:** Crea un cuadro de visualización que contiene un objeto de imagen gráfica. Es posible abrir una imagen y hacer referencia a ella o bien usar el comando Abrir con la ruta correspondiente a la imagen en lugar del argumento Picture Object.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

New Window( "Example",
	Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) )
);

```

#### Ejemplo 2

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );
New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**Sintaxis:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**Descripción:** Crea un segmento de gráfico circular en el origin especificado, con el radius especificado, basado en los valores especificados en el formato de matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );
New Window( "Pie Seg",
	Graph Box(
		Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ),
		Pie Seg( {75, 50}, .25, sumWt )
	)
);

```

### Platform

**Sintaxis:** y = Platform( dataTable, script )

**Descripción:** Evalúa el resultado del script en el contexto de la tabla de datos indicada. Devuelve el cuadro de visualización resultante para incluir en un árbol de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Platform example",
	H List Box(
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )
		),
		Platform(
			dt,
			Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) )
		)
	)
);

```

### Plot Col Box

**Sintaxis:** y = Plot Col Box( title, numbers )

**Descripción:** Devuelve un cuadro de visualización para representar gráficamente los números. El argumento numbers puede ser una lista o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Poly Seg

**Sintaxis:** ps = Poly Seg(x values, y values)

**Descripción:** Devuelve un segmento de visualización que representa un polígono con vértices en los valores x e y indicados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

x = [10, 50, 90];
y = [10, 90, 10];
New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**Sintaxis:** y = Popup Box( {label1, script1, ...} )

**Descripción:** Devuelve un cuadro de visualización con un menú desplegable definido por los pares etiqueta/script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Popup Box( {"x", ex = 1, "y", ex = 2} ),
		"beta",
		Panel Box( "panel", Text Box( "text" ) )
	)
);

```

### Radio Box

**Sintaxis:** y = Radio Box( {item, ...}, &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización para mostrar un conjunto de botones de opción.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) )
);

```

### Range Slider Box

**Sintaxis:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**Descripción:** Devuelve un cuadro de visualización que muestra un control deslizante de rango que va de minValue a maxValue. A medida que la posición de los dos selectores deslizantes varía, sus valores se coloca en lowVariable y highVariable y se ejecuta la secuencia de comandos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

sliderLowerValue = .5;
sliderUpperValue = .7;
New Window( "Example",
	Panel Box( "Range Slider",
		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),
		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),
		sb = Range Slider Box(
			0,
			1,
			sliderLowerValue,
			sliderUpperValue,
			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );
			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );
		)
	)
);

```

### Report

**Sintaxis:** y = Report( platform object )

**Descripción:** Devuelve una referencia al árbol de visualización correspondiente al informe de una plataforma.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**Sintaxis:** box = Scene Box( xsize, ysize )

**Descripción:** Devuelve un cuadro de visualización para gráficos en 3D.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Scene = Scene Box( 600, 600 );
Scene << backgroundcolor( 0 );
Scene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", Scene );
Scene << perspective( 45, .2, 20 );
Scene << Translate( 0.0, 0.0, -4.5 );
ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
Scene << arcball( ex, 1.5 );
Scene << update;

```

### Scene Display List

**Sintaxis:** list = Scene Display List()

**Descripción:** Devuelve una lista de visualización para gráficos en 3D.

**JMP Versión agregada:** Antes de la versión 14

```jsl

ex = Scene Display List();
ex << color( .9, .9, .9 );
ex << Text( center, middle, .3, "Hello World" );
exScene = Scene Box( 600, 600 );
exScene << backgroundcolor( 0 );
exScene << showarcball( always );
New Window( "See HelloWorld.jsl in sample scripts", exScene );
exScene << perspective( 45, .2, 20 );
exScene << Translate( 0.0, 0.0, -4.5 );
exScene << arcball( ex, 1.5 );
exScene << update;

```

### Script Box

**Sintaxis:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**Descripción:** Devuelve un cuadro de visualización para editar un script. De forma predeterminada, el editor tiene el resaltado de sintaxis y el comportamiento JSL.

**JMP Versión agregada:** Antes de la versión 14

#### JSL

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );
New Window( "This is a script box", Script );

```

#### Script Python

```jsl

pyscript = "\[import numpy as np
a = np.arange(15).reshape(3, 5)]\";
Script = Script Box( pyscript, "Python", 300, 100 );
New Window( "This is a python script box", Script );

```

### Scroll Box

**Sintaxis:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando barras de desplazamiento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		Scroll Box(
			Size( 200, 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### Set Global Window Handler

**Sintaxis:** Set Global Window Handler( Handler Function )

**Descripción:** Establece una función a la que se llama cada vez que se crea una nueva ventana.

**JMP Versión agregada:** 17

```jsl

Set Global Window Handler(
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);
New Window( "My Window" );
Clear Global Window Handler();

```

### Shape Seg

**Sintaxis:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**Descripción:** Devuelve un segmento de visualización con una colección de formas. Cada forma dibuja un trazo a lo largo de una trayectoria determinada si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto de la trayectoria es compatible con la sintaxis SVG.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Shape Seg Example",
	Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);

```

### Sheet Part

**Sintaxis:** y = Sheet Part( title, childbox )

**Descripción:** Devuelve un cuadro de visualización que contiene el cuadro de visualización childbox indicado como argumento con el título especificado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### Slider Box

**Sintaxis:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**Descripción:** Devuelve un cuadro de visualización que muestra un control deslizante que va de minValue a maxValue. A medida que la posición del selector deslizante varía, el valor se coloca en variable y se ejecuta la secuencia de comandos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

sliderValue = .6;
New Window( "Example",
	Panel Box( "Slider Box",
		tb = Text Box( "Value: " || Char( sliderValue ) ),
		sb = Slider Box(
			0,
			1,
			sliderValue,
			tb << Set Text( "Value: " || Char( sliderValue ) )
		)
	)
);

```

### Spacer Box

**Sintaxis:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**Descripción:** Devuelve un cuadro de visualización que se puede usar para mantener un espacio entre otros cuadros de visualización o para rellenar una celda en un Lineup Box. Los argumentos Size se especifican en píxeles, y el argumento Color es cualquier color de JSL válido.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box( N Col( 3 ),
		Text Box( "a" ),
		Spacer Box(),
		Text Box( "b" ),
		Spacer Box(),
		Text Edit Box( "Under Spacer Box" )
	)
);

```

### Spin Box

**Sintaxis:** y = Spin Box( &lt;script&gt; )

**Descripción:** Devuelve un cuadro de visualización que sirve para mostrar un botón con controles hacia arriba/abajo. Se llama al argumento script con un argumento que indica la dirección de la flecha en la que se ha hecho clic (negativo es hacia abajo, positivo es hacia arriba). Una magnitud de 1 indica un solo clic y se pueden usar valores mayores para indicar una acción repetida.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Lineup Box(
		2,
		nb = Number Edit Box( 3 ),
		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )
	)
);
nb << Set Increment( 1 );

```

### String Col Box

**Sintaxis:** y = String Col Box( title, {strings} )

**Descripción:** Devuelve un cuadro de visualización para mostrar las cadenas de caracteres especificadas en el argumento strings, que es una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### String Col Edit Box

**Sintaxis:** y = String Col Edit Box( title, {strings} )

**Descripción:** Devuelve un cuadro de visualización para mostrar las cadenas de caracteres especificadas en el argumento strings, que es una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```jsl

a = b = c = "";
New Window( "Example",
	Modal,
	<<Return Result,
	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) )
);

```

### Tab Box

**Sintaxis:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**Descripción:** Crea un panel con pestañas en una ventana con un cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		"alpha",
		Panel Box( "panel", Text Box( "text" ) ),
		"beta",
		Popup Box( {"x", ex = 1, "y", ex = 2} )
	)
);

```

### Tab Page Box

**Sintaxis:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**Descripción:** Devuelve un cuadro de visualización que se puede utilizar en un Tab Box o en un contenedor independiente con título. Algunas de las opciones reconocidas son Title(cadena) para especificar un título, Tip(cadena) para especificar una instancia de información sobre herramienta, Closeable(0|1) para especificar si la página puede cerrarse, Icon(cadena) para especificar el icono y Moveable(0|1) para especificar si la página puede moverse.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Tab Box(
		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),
		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )
	)
);

```

### Table Box

**Sintaxis:** y = Table Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que contiene una tabla con los cuadros de visualización de columnas String Col Box, Number Col Box y Plot Col Box indicados por los argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Table",
		Table Box(
			String Col Box( "names", {"x", "y", "z"} ),
			Number Col Box( "values", {11, 22, 33} ),
			Plot Col Box( "values", {11, 22, 33} )
		)
	)
);

```

### Text Box

**Sintaxis:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**Descripción:** Construye un cuadro de visualización que contiene el texto indicado en el argumento de cadena de caracteres text. Los argumentos opcionales sirven para controlar la justificación del texto o la sangría. El argumento Justify Text debe ser una cadena de caracteres con uno de los valores left, right o center.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Justification Example",
	Outline Box( "text",
		V List Box(
			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),
			Text Box( " " ),
			Text Box(
				"Text left justified over multiple lines:",
				<<Justify Text( "left" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text center justified over multiple lines:",
				<<Justify Text( "center" ),
				<<Set Wrap( 100 )
			),
			Text Box( " " ),
			Text Box(
				"Text right justified over multiple lines:",
				<<Justify Text( "right" ),
				<<Set Wrap( 100 )
			)
		)
	)
);

```

### Text Edit Box

**Sintaxis:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**Descripción:** Construye un cuadro editable que contiene la cadena de caracteres entrecomillada text y devuelve una referencia al cuadro de visualización. Los argumentos opcionales sirven para controlar la visualización del texto, para asignar un script al cuadro de texto y para establecer el ancho del cuadro en píxeles. Al especificar Set Width(-1) se configura un cuadro que se ajusta al tamaño del texto. Tenga en cuenta que se puede añadir un script al cuadro de texto añadiéndolo como argumento opcional o enviándole el mensaje Set Script.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example: Text Edit Box",
	Outline Box( "Picker Example",
		H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
	),
	Outline Box( "Text Edit Box with password style Example",
		H List Box(
			Text Box( "Enter password:    " ),
			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )
		),
		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),
		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),
		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )
	)
); // "look in the log window"

```

### Text Seg

**Sintaxis:** seg = Text Seg("text")

**JMP Versión agregada:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );
w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**Sintaxis:** project = this project()

**Descripción:** Desde dentro de un proyecto, devuelve el objeto de proyecto correspondiente. Fuera de un proyecto, no devuelve nada.

**JMP Versión agregada:** 14

```jsl

If(
	Is Empty( This Project() ), Print( "Project: (none)" ),
	Print( "Project: " || (This Project() << Get Window Title()) ),
);

```

### Tree Box

**Sintaxis:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**Descripción:** Genera un cuadro de visualización para mostrar información jerárquica.

**JMP Versión agregada:** Antes de la versión 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**Sintaxis:** node = Tree Node( &lt;label&gt; )

**Descripción:** Genera un nodo de un árbol para visualizarlo dentro de un cuadro de árbol.

**JMP Versión agregada:** Antes de la versión 14

```jsl

root1 = Tree Node( "Parent 1" );
root2 = Tree Node( "Parent 2" );
                                        
c1 = Tree Node( "Child 1" );
c2 = Tree Node( "Child 2" );
c3 = Tree Node( "Child 3" );
c4 = Tree Node( "Child 4" );
                                        
root1 << Append( c1 );
root1 << Append( c2 );
root2 << Append( c3 );
root2 << Append( c4 );
                                        
New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**Sintaxis:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**Descripción:** Devuelve un objeto que contiene la triangulación de Delaunay del conjunto de puntos indicado. De la Y opcional se calcula la media de los puntos duplicados y todos los puntos de salida son únicos.

**JMP Versión agregada:** Antes de la versión 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

#### Ejemplo 2

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**Sintaxis:** y = UnLineup Box(displayBoxArgs, ... )

**Descripción:** Devuelve un cuadro de visualización que suspende de forma temporal el diseño de columnas de un cuadro de alineación. El hijo del cuadro de desalineación se expandirá para abarcar todas las columnas del cuadro de alineación.

**JMP Versión agregada:** 16

```jsl

New Window( "unlineup",
	Lineup Box( N Col( 2 ),
		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),
		Button Box( "First Section 1" ),
		Button Box( "First Section 2" ),
		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),
		Button Box( "Second Section 1" ),
		Button Box( "Second Section 2" )
	)
);

```

### V Center Box

**Sintaxis:** y = V Center Box( &lt;childbox&gt; )

**Descripción:** Devuelve un cuadro de visualización con el argumento del cuadro de visualización childbox centrado verticalmente según el tamaño máximo de este hijo y de todos los demás hermanos del recuadro central.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "test",
	H List Box(
		V Center Box( Text Box( "V+V" ) ),
		V List Box(
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			H Center Box( Text Box( "H+H" ) ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),
			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )
		)
	)
);

```

### V List Box

**Sintaxis:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición vertical. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) )
);

```

### V Scroll Box

**Sintaxis:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**Descripción:** Devuelve un cuadro de visualización que sirve para posicionar un cuadro hijo mayor usando una barra de desplazamiento vertical.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example",
	Outline Box( "Picker",
		V Scroll Box(
			Size( 100 ),
			V List Box(
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),
				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )
			),
			<<Set Stretch( "Window", "Window" )
		)
	)
);

```

### V Sheet Box

**Sintaxis:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización indicados por los argumentos en disposición vertical. El mensaje <<Hold indica a la hoja que se convierta en propietaria de los informes extraídos. El argumento opcional Align permite alinear los contenidos a la derecha (right) o en el centro (center) dentro del cuadro de visualización.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Example",
	V Sheet Box(
		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),
		<<Hold(
			Distribution(
				Automatic Recalc( 1 ),
				Continuous Distribution(
					Column( :height ),
					Horizontal Layout( 1 ),
					Vertical( 0 ),
					Outlier Box Plot( 0 )
				)
			)
		),
		<<Hold( Treemap( Categories( :age ) ) ),
		<<Hold(
			Bubble Plot(
				X( :height ),
				Y( :weight ),
				Sizes( :age ),
				Coloring( :sex ),
				Circle Size( 6.226 ),
				All Labels( 0 )
			)
		),
		H Sheet Box(
			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),
			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )
		),
		H Sheet Box(
			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),
			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )
		)
	)
);

```

### V Splitter Box

**Sintaxis:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza otros cuadros de visualización verticalmente, con un control interactivo de los tamaños. Los tamaños de los hijos se especifican como proporciones del ancho o el alto de Splitter Box. El argumento Size opcional solo se utiliza para el cuadro divisor superior. A los cuadros de nivel inferior se les asignan tamaños como los de cualquier otro cuadro hijo.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Splitter",
	V Splitter Box(
		Size( 800, 600 ),
		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),
		H Splitter Box(
			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),
			spacer = Spacer Box(),
			<<Sizes( {0.4, 0.6} )
		)
	)
);
graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
pict << Set Min Size( 100, 100 );
pict << Set Max Size( 500, 500 );
pict << Set Stretch( "Window", "Window" );
spacer << Set Fill( 1 );
spacer << Color( "Red" );
spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**Sintaxis:** wb = Web Browser Box( url )

**Descripción:** Devuelve un cuadro de visualización que sirve para visualizar una página web especificada por el argumento de cadena de caracteres url.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "Example", wb = Web Browser Box() );
wb << Navigate( "http://www.jmp.com" );
wb << Set Stretch( "Window", "Window" );
wb << Set Max Size( 10000, 10000 );

```

### Window

**Sintaxis:** y = Window( &lt;string|int&gt; )

**Descripción:** Esta función está en desuso y solo se conserva para la compatibilidad retroactiva con scripts existentes. Para los nuevos scripts, utilice Get Window() o Get Window List().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Window( "Big Class" );

```

### With Window Handler

**Sintaxis:** With Window Handler( JSL Code, Handler Function )

**Descripción:** Ejecuta un bloque de código con una función a la que se llama cada vez que se crea una nueva ventana.

**JMP Versión agregada:** 17

```jsl

With Window Handler(
	New Window( "My Window" ),
	Function( {window},
		Print( window << get window title() );
		window << close window();
	)
);

```

### Wrap List Box

**Sintaxis:** y = Wrap List Box( displayBox, ... )

**Descripción:** Devuelve un cuadro de visualización que organiza los cuadros de visualización proporcionados por los argumentos en una presentación horizontal, pero ajustará esa lista al imprimir.

**JMP Versión agregada:** Antes de la versión 14

```jsl

New Window( "WrapListBox",
	Wrap List Box(
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),
		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )
	)
);

```

