# Data Filter



## Columnas

### Add Filter Columns

**Sintaxis:** obj &lt;&lt; Add Filter Columns( Add Filter Columns( column ) )

**Descripción:** Agrega una o más columnas de filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Filter Column

**Sintaxis:** obj &lt;&lt; Filter Column( column(s) )

**Descripción:** Agrega una columna de filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**Sintaxis:** obj &lt;&lt; Filter Columns( column(s) )

**Descripción:** Agrega una o más columnas de filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**Sintaxis:** obj &lt;&lt; Filter Group( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Constructores asociados

### Data Filter

**Sintaxis:** Data Filter( &lt;local&gt;, &lt;invisible&gt;, &lt;Add Filter&gt;, &lt;Mode&gt;, &lt;Show Window(0 | 1)&gt;, &lt;no outline box(0 | 1)&gt; )

**Descripción:** Crea o muestra un Filtro de datos, donde selecciona de forma interactiva subconjuntos complejos de datos. La opción Mode determina qué estados de fila se ven afectados por la selección del filtro. El comando Add Filter agregará un nuevo grupo de filtros con las cláusulas Columns y Where especificadas. Cuando haya varios grupos de filtros, el comportamiento combinado lo determina la opción Group By AND. Si se especifica la palabra clave Local, el filtro se puede incrustar en un informe para filtrar una o más plataformas sin que ello afecte a otros informes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## Mensajes del elemento

### Add Favorites

**Sintaxis:** obj &lt;&lt; Add Favorites( name or string )

**Descripción:** Asocia la selección actual del filtro con el nombre dado y lo guarda en la lista de favoritos.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**Sintaxis:** obj &lt;&lt; Add Filter( columns( column, ... ), &lt;Where( clause )&gt; )

**Descripción:** Agrega una o más columnas de filtro en un nuevo grupo OR.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Animation

**Sintaxis:** obj &lt;&lt; Animation( &lt;Animate Column( column )&gt;, &lt;Animate Rate( number )&gt;, &lt;Forward|Backward|Bounce&gt; )

**Descripción:** Recorre los valores ordenados de la columna especificada seleccionando y anulando la selección de filas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**Sintaxis:** obj &lt;&lt; Apply Favorites( name or string )

**Descripción:** Aplica la selección del filtro, tal como está guardado en los favoritos con nombre, al filtro de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**Sintaxis:** obj &lt;&lt; Auto clear( state=0|1 )

**Descripción:** Borra todas las filas seleccionadas actualmente antes de establecer una nueva selección al filtrar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**Sintaxis:** obj &lt;&lt; Clear

**Descripción:** Borra las filas seleccionadas actualmente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**Sintaxis:** obj &lt;&lt; Clear Selection

**Descripción:** Borra la selección para este filtro de columna.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**Sintaxis:** obj &lt;&lt; Close

**Descripción:** Cierra el filtro de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**Sintaxis:** obj &lt;&lt; Conditional( state=0|1 )

**Descripción:** La opción indica si los filtros de las columnas categóricas están ordenados de forma condicional. Al seleccionar una categoría, se limitarán las categorías del siguiente filtro de columna únicamente a aquellas incluidas en la categoría seleccionada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**Sintaxis:** obj &lt;&lt; Copy Local Data Filter

**Descripción:** Copiar el script del filtro de datos locales en el portapapeles.

**JMP Versión agregada:** 16

```jsl

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

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar la ventana del filtro y lo sitúa en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**Sintaxis:** obj &lt;&lt; Count Excluded Rows( state=0|1 )

**Descripción:** Si no se selecciona esta opción, los recuentos y valores de la columna del filtro de datos no incluirán las filas con estados de filas excluidas en la tabla de datos.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Muestra la tabla de datos utilizada para este cuadro de diálogo del filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**Sintaxis:** obj &lt;&lt; Delete( {column(s)} )

**Descripción:** Borra las columnas especificadas con los filtros existentes en el filtro de datos.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**Sintaxis:** obj &lt;&lt; Delete All

**Descripción:** Borra todos los filtros existentes en el filtro de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**Sintaxis:** obj &lt;&lt; Display( column, &lt;Invisible(0 | 1)&gt;, &lt;options&gt; )

**Descripción:** Cambia la forma en la que se muestran los niveles de columnas en el filtro. Las columnas categóricas admiten una opción de tipo de visualización de "Visualización de bloques", "Visualización de lista", "Visualización de una sola categoría", "Visualización de casilla de selección" o "Visualización de botón de radio". La opción NItems(n) establecerá el número de elementos visibles en una vista desplazable. Las columnas continuas admiten opciones de NBins(n) y Height(h).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**Sintaxis:** obj &lt;&lt; Extend Where

**Descripción:** Amplia la selección de acuerdo al criterio indicado para este filtro de columna.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve la tabla de datos asociada al filtro.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**Sintaxis:** obj &lt;&lt; Get Filter Column( column, &lt;index&gt; )

**Descripción:** Devuelve el objeto de columna de filtro para la columna nombrada. Si se utiliza varias veces la misma columna, el argumento index devolverá la repetición especificada

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**Sintaxis:** obj &lt;&lt; Get Filtered Rows

**Descripción:** Devuelve una matriz de números de fila que cumplen las condiciones del filtro actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Obtiene el script de filtro de datos como texto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**Sintaxis:** obj &lt;&lt; Get where clause

**Descripción:** Obtiene el texto de descripción de la selección del filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**Sintaxis:** obj &lt;&lt; Grouped by AND( state=0|1 )

**Descripción:** Los grupos de elementos de filtro se unen mediante AND

### Inverse

**Sintaxis:** obj &lt;&lt; Inverse( state=0|1 )

**Descripción:** Invierte el estado de selección actual de las filas en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**Sintaxis:** obj &lt;&lt; Invert Selection

**Descripción:** Invierte la selección para este filtro de columna.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**Sintaxis:** rs = df &lt;&lt; Make Filter Change Handler(function(a) );

**Descripción:** Crea un controlador de filtros de datos para controlar la notificación de que ha cambiado el filtro. Se devuelve el número de filas filtradas en el argumento para la función.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**Sintaxis:** obj &lt;&lt; Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**Descripción:** Establece las condiciones de filtro para cada grupo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**Sintaxis:** obj &lt;&lt; Mode( Select|Show|Include (state = 0|1) )

**Descripción:** Establece la acción o modo utilizados al seleccionar las filas mediante el filtro de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**Sintaxis:** obj &lt;&lt; On Clear

**Descripción:** Establece un script o función que se ejecutará después de borrar el filtro.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**Sintaxis:** obj &lt;&lt; Remove Favorites( name or string )

**Descripción:** Quita los favoritos con nombre de la lista de favoritos.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**Sintaxis:** obj &lt;&lt; Report

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**Sintaxis:** obj &lt;&lt; Save Script to Data Table

**Descripción:** Crea un script JSL para generar la ventana del filtro y lo guarda como propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar la ventana del filtro y agrega un botón al diario que contiene dicho script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar la ventana de filtro y lo añade a la ventana de texto del script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**Sintaxis:** obj &lt;&lt; Save Where Clause to Clipboard

**Descripción:** Crea la cláusula WHERE a partir de los criterios de filtro y la sitúa en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**Sintaxis:** obj &lt;&lt; Save Where Clause to Data Table

**Descripción:** Crea una cláusula WHERE a partir de los criterios de filtro y la guarda como propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**Sintaxis:** obj &lt;&lt; Save Where Clause to Formula Column

**Descripción:** Crea una columna indicadora que contiene una fórmula equivalente a los criterios de filtro. Las filas que reúnan los criterios del filtro tendrán un valor de 1, y todas las demás filas tendrán un valor de 0.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**Sintaxis:** obj &lt;&lt; Save Where Clause to Journal

**Descripción:** Crea la cláusula WHERE a partir de los criterios de filtro y la añade al diario.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**Sintaxis:** obj &lt;&lt; Save Where Clause to Row State Column

**Descripción:** Crea una columna de estado de fila que contiene una fórmula equivalente a los criterios de filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**Sintaxis:** obj &lt;&lt; Save Where Clause to Script Window

**Descripción:** Crea una cláusula WHERE a partir de los criterios de filtro y la añade a la ventana de texto del script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**Sintaxis:** obj &lt;&lt; Save and restore current row states( state=0|1 )

**Descripción:** Guarda los estados de fila actuales de la tabla de datos y luego restaura dichos estados al cerrar el filtro de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**Sintaxis:** obj &lt;&lt; Select Missing( state=0|1 )

**Descripción:** Agrega a la selección las filas que faltan para este filtro de columna continuo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**Sintaxis:** obj &lt;&lt; Set Include( state=0|1 )

**Descripción:** Selecciona o deselecciona el modo de inclusión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**Sintaxis:** obj &lt;&lt; Set Select( state=0|1 )

**Descripción:** Selecciona o deselecciona el modo de selección.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**Sintaxis:** obj &lt;&lt; Set Show( state=0|1 )

**Descripción:** Selecciona o deselecciona el modo de visualización.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**Sintaxis:** obj &lt;&lt; Show Controls( state=0|1 )

**Descripción:** Muestra u oculta los controles para modificar las opciones del filtro de datos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**Sintaxis:** obj &lt;&lt; Show Counts( state=0|1 )

**JMP Versión agregada:** 16

### Show Histograms and Bars

**Sintaxis:** obj &lt;&lt; Show Histograms and Bars( state=0|1 )

**Descripción:** Show Histograms and Bars for filter columns where available

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**Sintaxis:** obj &lt;&lt; Show Modes( state=0|1 )

**Descripción:** Muestra u oculta los controles para cambiar el modo del filtro de datos, que controla el comportamiento de las acciones seleccionar/mostrar/incluir del filtro de datos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**Sintaxis:** obj &lt;&lt; Show Subset

**Descripción:** Muestra los datos filtrados en una ventana de tabla de datos separada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**Sintaxis:** obj &lt;&lt; Stretch Width( "Manual" | "Window" )

**Descripción:** Establece el comportamiento de estiramiento horizontal del filtro. De forma predeterminada, se puede modificar manualmente el ancho del filtro. Si se establece en "Ventana", el ancho aumenta o disminuye con el tamaño de la ventana.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
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

				),

			)
		)
	)
);

```

### Title

**Sintaxis:** obj &lt;&lt; Title

### Unstructured Text

**Sintaxis:** obj &lt;&lt; Unstructured Text

**JMP Versión agregada:** 16

### Use Floating Window

**Sintaxis:** obj &lt;&lt; Use Floating Window( state=0|1 )

**Descripción:** Alterna entre la opción de que el filtro de datos utilice una ventana flotante sobre la tabla de datos y ventanas asociadas y la opción de que utilice una ventana dispuesta con las demás ventanas como es habitual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**Sintaxis:** obj &lt;&lt; Where

**Descripción:** Selecciona las filas de acuerdo al criterio indicado para este filtro de columna.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**Sintaxis:** obj &lt;&lt; columns( columns )

**Descripción:** Agrega columnas de filtro. Es un comando alternativo a agregar columnas de filtro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

## Categorical Filter

### Mensajes del elemento

#### Blocks Display

**Sintaxis:** obj &lt;&lt; Blocks Display( state=0|1 )

**Descripción:** Mostrar cada nivel como un bloque seleccionable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Sintaxis:** obj &lt;&lt; Check Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con una casilla de selección, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Sintaxis:** obj &lt;&lt; Clear Find

**JMP Versión agregada:** 15

#### Clear Selection

**Sintaxis:** obj &lt;&lt; Clear Selection

**Descripción:** Borra cualquier selección en vigor para la columna seleccionada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Sintaxis:** obj &lt;&lt; Continuous( state=0|1 )

**JMP Versión agregada:** 16

#### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Quita la variable del panel de control Filtro de datos.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Sintaxis:** obj &lt;&lt; Extend Where

**Descripción:** Seleccione filas usando una expresión, añadiéndolas a la selección actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Sintaxis:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**Descripción:** Proporciona un cuadro de texto donde puede introducir una cadena de búsqueda para la columna seleccionada.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Sintaxis:** obj &lt;&lt; Get Selected Items

**JMP Versión agregada:** 15

#### Get Visible Items

**Sintaxis:** obj &lt;&lt; Get Visible Items

**JMP Versión agregada:** 19

#### Invert Selection

**Sintaxis:** obj &lt;&lt; Invert Selection

**Descripción:** Deselecciona cualquier valor seleccionado, y selecciona todos los valores que no se hayan seleccionado previamente para la columna en cuestión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Sintaxis:** obj &lt;&lt; List Display( state=0|1 )

**Descripción:** Mostrar cada nivel de una lista, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Multiple Response

**Sintaxis:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Versión agregada:** 16

#### Nominal/Ordinal

**Sintaxis:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Versión agregada:** 16

#### Order By Count

**Sintaxis:** obj &lt;&lt; Order By Count( state=0|1 )

**Descripción:** Dispone los valores en orden decreciente según el conteo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Sintaxis:** obj &lt;&lt; Radio Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con un botón de radio, junto con las barras y el conteo de frecuencia.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Sintaxis:** obj &lt;&lt; Select Filter Item

**Descripción:** Seleccione el elemento de filtro especificado. El filtro seleccionado se utiliza como objeto de animación actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Sintaxis:** obj &lt;&lt; Single Category Display( state=0|1 )

**Descripción:** Mostrar cada nivel y el conteo de frecuencia en un menú de cuadro combinado.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Sintaxis:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Versión agregada:** 16

#### Where

**Sintaxis:** obj &lt;&lt; Where

**Descripción:** Seleccione filas usando una expresión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### Mensajes del elemento

#### Clear Selection

**Sintaxis:** obj &lt;&lt; Clear Selection

**Descripción:** Borra cualquier selección en vigor para la columna seleccionada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Sintaxis:** obj &lt;&lt; Continuous( state=0|1 )

**JMP Versión agregada:** 16

#### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Quita la variable del panel de control Filtro de datos.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Sintaxis:** obj &lt;&lt; Extend Where

**Descripción:** Seleccione filas usando una expresión, añadiéndolas a la selección actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Invert Selection

**Sintaxis:** obj &lt;&lt; Invert Selection

**Descripción:** Deselecciona cualquier valor seleccionado, y selecciona todos los valores que no se hayan seleccionado previamente para la columna en cuestión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### Multiple Response

**Sintaxis:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Versión agregada:** 16

#### Nominal/Ordinal

**Sintaxis:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Versión agregada:** 16

#### Reset Zoom

**Sintaxis:** obj &lt;&lt; Reset Zoom

**Descripción:** Restablezca el mínimo y el máximo de la visualización del filtro a los valores predeterminados.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

#### Select Filter Item

**Sintaxis:** obj &lt;&lt; Select Filter Item

**Descripción:** Seleccione el elemento de filtro especificado. El filtro seleccionado se utiliza como objeto de animación actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Select Missing

**Sintaxis:** obj &lt;&lt; Select Missing

**Descripción:** Selecciona las filas que contengan valores faltantes.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

#### Unstructured Text

**Sintaxis:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Versión agregada:** 16

#### Where

**Sintaxis:** obj &lt;&lt; Where

**Descripción:** Seleccione filas usando una expresión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

#### Zoom to Selection

**Sintaxis:** obj &lt;&lt; Zoom to Selection

**Descripción:** Establezca el mínimo y el máximo de la visualización del filtro en función del intervalo seleccionado actualmente.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### Mensajes del elemento

#### Blocks Display

**Sintaxis:** obj &lt;&lt; Blocks Display( state=0|1 )

**Descripción:** Mostrar cada nivel como un bloque seleccionable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Sintaxis:** obj &lt;&lt; Check Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con una casilla de selección, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**Sintaxis:** obj &lt;&lt; Clear Find

**JMP Versión agregada:** 15

#### Clear Selection

**Sintaxis:** obj &lt;&lt; Clear Selection

**Descripción:** Borra cualquier selección en vigor para la columna seleccionada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Sintaxis:** obj &lt;&lt; Continuous( state=0|1 )

**JMP Versión agregada:** 16

#### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Quita la variable del panel de control Filtro de datos.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Sintaxis:** obj &lt;&lt; Extend Where

**Descripción:** Seleccione filas usando una expresión, añadiéndolas a la selección actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**Sintaxis:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**Descripción:** Proporciona un cuadro de texto donde puede introducir una cadena de búsqueda para la columna seleccionada.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**Sintaxis:** obj &lt;&lt; Get Selected Items

**JMP Versión agregada:** 15

#### Get Visible Items

**Sintaxis:** obj &lt;&lt; Get Visible Items

**JMP Versión agregada:** 19

#### Invert Selection

**Sintaxis:** obj &lt;&lt; Invert Selection

**Descripción:** Deselecciona cualquier valor seleccionado, y selecciona todos los valores que no se hayan seleccionado previamente para la columna en cuestión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Sintaxis:** obj &lt;&lt; List Display( state=0|1 )

**Descripción:** Mostrar cada nivel de una lista, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Sintaxis:** obj &lt;&lt; Match All

**Descripción:** Selecciona las filas con valores que coincidan con todos los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Sintaxis:** obj &lt;&lt; Match Any

**Descripción:** Selecciona las filas con valores que coincidan con cualquiera de los valores marcados. Esta opción está seleccionada de forma predeterminada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Sintaxis:** dfitem &lt;&lt; Match At Least(n);

**Descripción:** Selecciona las filas con valores que coincidan al menos con n de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Sintaxis:** dfitem &lt;&lt; Match At Most(n);

**Descripción:** Selecciona las filas con valores que coincidan con n como máximo de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Sintaxis:** dfitem &lt;&lt; Match Between(n, m);

**Descripción:** Selecciona las filas con valores que coincidan con entre n y m de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Sintaxis:** obj &lt;&lt; Match Exactly

**Descripción:** Selecciona las filas con valores que coincidan exactamente con los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Sintaxis:** obj &lt;&lt; Match None

**Descripción:** Selecciona las filas con valores que no coincidan con ninguno de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Sintaxis:** obj &lt;&lt; Match Only

**Descripción:** Selecciona las filas con valores que coincidan únicamente con el valore marcado.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Sintaxis:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Versión agregada:** 16

#### Nominal/Ordinal

**Sintaxis:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Versión agregada:** 16

#### Order By Count

**Sintaxis:** obj &lt;&lt; Order By Count( state=0|1 )

**Descripción:** Dispone los valores en orden decreciente según el conteo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Sintaxis:** obj &lt;&lt; Radio Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con un botón de radio, junto con las barras y el conteo de frecuencia.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Sintaxis:** obj &lt;&lt; Select Filter Item

**Descripción:** Seleccione el elemento de filtro especificado. El filtro seleccionado se utiliza como objeto de animación actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**Sintaxis:** obj &lt;&lt; Single Category Display( state=0|1 )

**Descripción:** Mostrar cada nivel y el conteo de frecuencia en un menú de cuadro combinado.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Sintaxis:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Versión agregada:** 16

#### Where

**Sintaxis:** obj &lt;&lt; Where

**Descripción:** Seleccione filas usando una expresión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### Mensajes del elemento

#### Add Missing

**Sintaxis:** obj &lt;&lt; Add Missing

**Descripción:** Agrega un valor faltante como opción seleccionable para los textos sin estructura.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

#### Blocks Display

**Sintaxis:** obj &lt;&lt; Blocks Display( state=0|1 )

**Descripción:** Mostrar cada nivel como un bloque seleccionable.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**Sintaxis:** obj &lt;&lt; Check Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con una casilla de selección, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Filter Texts List

**Sintaxis:** obj &lt;&lt; Clear Filter Texts List

**Descripción:** Borra la lista de filtros para un elemento de filtro del texto sin estructura.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

#### Clear Selection

**Sintaxis:** obj &lt;&lt; Clear Selection

**Descripción:** Borra cualquier selección en vigor para la columna seleccionada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**Sintaxis:** obj &lt;&lt; Continuous( state=0|1 )

**JMP Versión agregada:** 16

#### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Quita la variable del panel de control Filtro de datos.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**Sintaxis:** obj &lt;&lt; Extend Where

**Descripción:** Seleccione filas usando una expresión, añadiéndolas a la selección actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Get Selected Items

**Sintaxis:** obj &lt;&lt; Get Selected Items

**JMP Versión agregada:** 15

#### Get Visible Items

**Sintaxis:** obj &lt;&lt; Get Visible Items

**JMP Versión agregada:** 19

#### Invert Selection

**Sintaxis:** obj &lt;&lt; Invert Selection

**Descripción:** Deselecciona cualquier valor seleccionado, y selecciona todos los valores que no se hayan seleccionado previamente para la columna en cuestión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**Sintaxis:** obj &lt;&lt; List Display( state=0|1 )

**Descripción:** Mostrar cada nivel de una lista, junto con las barras y el conteo de frecuencia.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**Sintaxis:** obj &lt;&lt; Match All

**Descripción:** Selecciona las filas con valores que coincidan con todos los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**Sintaxis:** obj &lt;&lt; Match Any

**Descripción:** Selecciona las filas con valores que coincidan con cualquiera de los valores marcados. Esta opción está seleccionada de forma predeterminada.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**Sintaxis:** dfitem &lt;&lt; Match At Least(n);

**Descripción:** Selecciona las filas con valores que coincidan al menos con n de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**Sintaxis:** dfitem &lt;&lt; Match At Most(n);

**Descripción:** Selecciona las filas con valores que coincidan con n como máximo de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**Sintaxis:** dfitem &lt;&lt; Match Between(n, m);

**Descripción:** Selecciona las filas con valores que coincidan con entre n y m de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**Sintaxis:** obj &lt;&lt; Match Exactly

**Descripción:** Selecciona las filas con valores que coincidan exactamente con los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**Sintaxis:** obj &lt;&lt; Match None

**Descripción:** Selecciona las filas con valores que no coincidan con ninguno de los valores marcados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**Sintaxis:** obj &lt;&lt; Match Only

**Descripción:** Selecciona las filas con valores que coincidan únicamente con el valore marcado.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**Sintaxis:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP Versión agregada:** 16

#### Nominal/Ordinal

**Sintaxis:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP Versión agregada:** 16

#### Order By Count

**Sintaxis:** obj &lt;&lt; Order By Count( state=0|1 )

**Descripción:** Dispone los valores en orden decreciente según el conteo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**Sintaxis:** obj &lt;&lt; Radio Box Display( state=0|1 )

**Descripción:** Mostrar cada nivel con un botón de radio, junto con las barras y el conteo de frecuencia.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**Sintaxis:** obj &lt;&lt; Select Filter Item

**Descripción:** Seleccione el elemento de filtro especificado. El filtro seleccionado se utiliza como objeto de animación actual.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Show Filter Text Edit Box

**Sintaxis:** obj &lt;&lt; Show Filter Text Edit Box( state=0|1 )

**Descripción:** Muestra u oculta el cuadro de edición de texto para que defina las condiciones del filtro de texto.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

#### Single Category Display

**Sintaxis:** obj &lt;&lt; Single Category Display( state=0|1 )

**Descripción:** Mostrar cada nivel y el conteo de frecuencia en un menú de cuadro combinado.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**Sintaxis:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP Versión agregada:** 16

#### Where

**Sintaxis:** obj &lt;&lt; Where

**Descripción:** Seleccione filas usando una expresión.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

