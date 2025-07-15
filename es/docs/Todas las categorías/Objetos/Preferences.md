# Preferences



## Mensajes del elemento

### Add Color Theme

**Sintaxis:** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**Descripción:** Crea un nuevo tema de color personalizado y lo registra en el selector de temas.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference(
	Add Color Theme(
		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5,
		0.642857142857143, 1}}
	)
);
Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**Sintaxis:** obj &lt;&lt; Add Rows default number of rows( number )

**Descripción:** Número inicial de filas en la ventana Agregar filas.

**JMP Versión agregada:** 18

### Add Rows recall last value

**Sintaxis:** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**Descripción:** El último valor introducido se utiliza para el número de filas que añadir.

**JMP Versión agregada:** 18

### Add files opened by scripts to the Recent Files list

**Sintaxis:** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para agregar o no los archivos abiertos con la función JSL Open() a la lista de Archivos recientes.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**Sintaxis:** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**Descripción:** Especifica si se utiliza Comprobación de lista para codificar valores cuando hay más de 255 valores distintos en la columna. Si se codifican, JMP 14 y versiones anteriores no pueden leer estas columnas.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**Sintaxis:** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**Descripción:** Comprimir columnas seleccionadas compactará las columnas si, de ese modo, se usa menos espacio en disco.

**JMP Versión agregada:** 18

### Allow Unquoted Strings in JSL

**Sintaxis:** obj &lt;&lt; Allow Unquoted Strings in JSL( "No"|"Sí (con una advertencia)"|"Sí (sin advertencia)" )

### Allow mixed ISO format patterns

**Sintaxis:** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**Descripción:** Permitir fechas de patrón de formato con semanas ISO (<ww>) y años no ISO (<YYYY> o <YY>), y con semanas no ISO (<WW1> o <WW2>) y años ISO (<yyyy> o <yy>). Las semanas y los años ISO no son compatibles con las semanas y los años no ISO. No se deben mezclar. De forma predeterminada, JMP no permitirá la creación de este formato de fecha.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**Sintaxis:** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para permitir el formato corto de datos numéricos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Auto Hide Menus

**Sintaxis:** obj &lt;&lt; Auto Hide Menus( "Siempre"|"Nunca"|"Basado en el tamaño de la ventana" )

**Descripción:** Determina si JMP debe ocultar automáticamente el menú y las barras de herramientas y cuándo debe hacerlo. Nota: esta opción solo está disponible en Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**Sintaxis:** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**Descripción:** Cambia el comportamiento predeterminado para ejecutar los scripts JSL acabados de enviar. Nota: esta opción sólo está disponible en Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**Sintaxis:** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para hacer corresponder automáticamente los pares de corchetes en la ventana de scripts. Nota: esta opción sólo está disponible en Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**Sintaxis:** obj &lt;&lt; Autosave maximum data table columns( number )

**Descripción:** Número máximo de columnas de tabla de datos que se guardarán automáticamente.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**Sintaxis:** obj &lt;&lt; Autosave maximum data table rows( number )

**Descripción:** Número máximo de filas de tabla de datos que se guardarán automáticamente.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**Sintaxis:** obj &lt;&lt; Autosave timeout( number )

**Descripción:** El intervalo del tiempo de espera de Autoguardar se expresa en minutos. Cuando se haya alcanzado el intervalo de tiempo de espera, se guardarán todos los archivos abiertos y modificados. El valor predeterminado es "0", lo que indica que no se llevará a cabo el proceso de autoguardado.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**Sintaxis:** obj &lt;&lt; Axis Title Above( state=0|1 )

**Descripción:** Cambia la posición de la etiqueta del eje Y en los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**Sintaxis:** obj &lt;&lt; Background Color( color )

**Descripción:** Cambia la configuración predeterminada del color de fondo de todas las ventanas. Nota: disponible únicamente para Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**Sintaxis:** obj &lt;&lt; Bad to Good Color Theme( "name" )

**Descripción:** Cambia la configuración predeterminada para el tema de color continuo que aparece en todos los gráficos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Bad to Good Color Theme( "Green to Purple" ) );
Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**Sintaxis:** obj &lt;&lt; Box Plot Line Width( number )

**Descripción:** Cambia el ancho de línea predeterminado para los diagramas de caja.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**Sintaxis:** obj &lt;&lt; Bypass Proxy( text )

**Descripción:** Deshabilita el uso del proxy para hosts específicos

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**Sintaxis:** obj &lt;&lt; Categorical Color Theme( "name" )

**Descripción:** Cambia la configuración predeterminada para el tema de color categórico que aparece en todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Categorical Color Theme ) );
Set Preference( Categorical Color Theme( "Jet" ) );
Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**Sintaxis:** obj &lt;&lt; Categorical graph type( "Automático"|"Histograma"|"Barras"|"Mapa de calor"|"Mosaico"|"Gráfico de tiempo"|"Gráfico de tiempo" )

**Descripción:** Gráfico predeterminado para mostrar en el encabezado de columna para columnas nominales y ordinales.

**JMP Versión agregada:** 18

### Classic Data Table Selection

**Sintaxis:** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**Descripción:** Habilita el comportamiento clásico de selección por clic en la tabla de datos. En este modo, la selección de una columna no tiene efecto en la selección de filas y la selección de una fila no tiene efecto en la selección de columnas.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**Sintaxis:** obj &lt;&lt; Color Mode( "Utilizar la configuración del sistema"|"Claro"|"Oscuro"|"Alto contraste" )

**Descripción:** Cambia si JMP utiliza un tema específico para colorear las ventanas o si respeta la configuración del sistema operativo.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**Sintaxis:** obj &lt;&lt; Columns Manager

**JMP Versión agregada:** 18

### Conditional formatting rules

**Sintaxis:** obj &lt;&lt; Conditional formatting rules

**Descripción:** Crea una regla condicional personalizada que se muestra o no dependiendo de la configuración de las preferencias para Mostrar formateo condicional.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences(
	Conditional Formatting Rules(
		RuleSet(
			RuleName( "My Special Rule" ),
			GreaterThan(
				Value( 0 ),
				Inclusive( 0 ),
				Format(
					Text Color( "Medium Dark Red" ),
					Back Color( "Light Yellow" ),
					Annotation( 1 ),
					FontStyle( Bold )
				)
			)
		)
	)
);

```

### Continuous Color Theme

**Sintaxis:** obj &lt;&lt; Continuous Color Theme( "name" )

**Descripción:** Cambia la configuración predeterminada para el tema de color continuo que aparece en todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Continuous Color Theme( "Green to Purple" ) );
Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**Sintaxis:** obj &lt;&lt; Continuous graph type( "Automático"|"Histograma"|"Barras"|"Mapa de calor"|"Mosaico"|"Gráfico de tiempo"|"Gráfico de tiempo" )

**Descripción:** Gráfico predeterminado para mostrar en el encabezado de columna para columnas continuas.

**JMP Versión agregada:** 18

### Custom Locale Settings

**Sintaxis:** obj &lt;&lt; Custom Locale Settings

**Descripción:** Reemplaza la configuración regional como el separador decimal y el separador de millares

**JMP Versión agregada:** 16

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );
Print( Format( 1.25, "Best" ) );
Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

// Clear all locale overrides...
Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**Sintaxis:** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**Sintaxis:** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**Descripción:** La visualización predeterminada de la columna de filtro categórico es la visualización con casillas de selección.

### Data Filter Conditional

**Sintaxis:** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**Sintaxis:** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**Sintaxis:** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**Descripción:** Mostrar histogramas y barras para las columnas de filtro cuando estén disponibles

**JMP Versión agregada:** 15

### Data Filter Include Check

**Sintaxis:** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**Sintaxis:** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**Sintaxis:** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**Sintaxis:** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**Sintaxis:** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar los nombres de las tablas de datos en la parte superior de la salida del informe.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**Sintaxis:** obj &lt;&lt; Date Title on Output( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar la fecha en el título de la salida.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**Sintaxis:** obj &lt;&lt; Default Field Width( number )

**Descripción:** Cambia el ancho de campo predeterminado que se utiliza para las columnas numéricas nuevas.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**Sintaxis:** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**Descripción:** Muestra el panel Proyecto en proyectos nuevos

**JMP Versión agregada:** 16

### Default Project Show Contents

**Sintaxis:** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**Descripción:** Muestra el panel Contenido en proyectos nuevos

**JMP Versión agregada:** 16

### Default Project Show Log

**Sintaxis:** obj &lt;&lt; Default Project Show Log( state=0|1 )

**Descripción:** Muestra el panel Registro en proyectos nuevos

**JMP Versión agregada:** 16

### Default Project Show Recent Files

**Sintaxis:** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**Descripción:** Muestra el panel Archivos recientes en proyectos nuevos

**JMP Versión agregada:** 16

### Default Project Show Workspace

**Sintaxis:** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**Descripción:** Muestra el panel Área de trabajo en proyectos nuevos

**JMP Versión agregada:** 16

### Display JSL SAS results as HTML

**Sintaxis:** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**Sintaxis:** obj &lt;&lt; Display indexes in English( state=0|1 )

**Descripción:** Muestra el Índice de scripts de objetos, el Índice de funciones JSL y el Índice de cuadros de visualización en inglés.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**Sintaxis:** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**Descripción:** Al hacer doble clic en el encabezado de una columna, se abre el cuadro de diálogo de información de la columna en lugar de permitir editar el nombre de la columna.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**Sintaxis:** obj &lt;&lt; Empty Project at Startup( "Siempre"|"Si no hay otro proyecto abierto"|"Nunca" )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**Sintaxis:** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**Descripción:** Determina si JMP debe incluir la lista de ventanas en ventanas maximizadas.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**Sintaxis:** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**Descripción:** Cambia las rutinas de cálculo de álgebra lineal que se utilizan en varias plataformas y funciones JSL. Cuando está seleccionada, esta preferencia habilita las rutinas de álgebra lineal avanzadas que se basan en las librerías BLAS y LAPACK. La documentación de JMP contiene más información sobre las plataformas y funciones de JSL a las que afecta esta preferencia.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**Sintaxis:** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**Sintaxis:** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**Sintaxis:** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**Descripción:** Se dejarán de marcar los elementos del menú una vez alcanzado el límite de tiempo

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**Sintaxis:** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**Sintaxis:** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**Sintaxis:** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Enhanced Log Color By Window Color Theme ) );
Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );
Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**Sintaxis:** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**Sintaxis:** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**Sintaxis:** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**Sintaxis:** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**Sintaxis:** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**Sintaxis:** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**Sintaxis:** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**Sintaxis:** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**Sintaxis:** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**Sintaxis:** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**Sintaxis:** obj &lt;&lt; Enter Key moves down( state=0|1 )

**Descripción:** Cambia la configuración predeterminada asociada al movimiento de la tecla Entrar.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**Sintaxis:** obj &lt;&lt; Evaluate OnOpen Scripts( "Preguntar"|"Nunca"|"Siempre" )

**Descripción:** Establezca esta opción en "Nunca" para no permitir nunca que se ejecuten scripts de OnOpen.  Los scripts procedentes de fuentes desconocidas no deben ejecutarse.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**Sintaxis:** obj &lt;&lt; Excel Open Method( "Abrir todas las hojas"|"Seleccionar hojas de trabajo individuales"|"Usar el asistente de Excel" )

### Fast Marker Threshold

**Sintaxis:** obj &lt;&lt; Fast Marker Threshold( number )

**Descripción:** Cambia la configuración predeterminada para actualizar los marcadores de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**Sintaxis:** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**Descripción:** Los marcadores huecos se rellenarán con el color de fondo del gráfico

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**Sintaxis:** obj &lt;&lt; Fill Selection Color( color )

**Descripción:** El color de las selecciones rellenas cuando el Modo de selección de relleno es Mismo color seleccionado.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**Sintaxis:** obj &lt;&lt; Fill Selection Fade( number )

**Descripción:** Cambia la configuración predeterminada de atenuación para rellenos no seleccionados.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**Sintaxis:** obj &lt;&lt; Fill Selection Mode( "Con patrón seleccionado"|"Más oscuro seleccionado"|"Seleccionados con contorno"|"Seleccionado del mismo color"|"No seleccionados atenuados" )

**Descripción:** Cambia la forma de indicar la selección en zonas rellenas. El valor predeterminado es con un patrón.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**Sintaxis:** obj &lt;&lt; Formula Evaluation( "Cuando está inactivo"|"Inmediato" )

**Descripción:** Determina si la evaluación de fórmulas tiene lugar durante el tiempo de inactividad o si se ejecuta inmediatamente en primer plano

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**Sintaxis:** obj &lt;&lt; Frame Border( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar el borde del marco en los lados de los gráficos que no sean ejes.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**Sintaxis:** obj &lt;&lt; Frame Color( color )

**Descripción:** Cambia la configuración predeterminada para mostrar el borde del marco de todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**Sintaxis:** obj &lt;&lt; Get

**Descripción:** Restituye el script para establecer una preferencia específica.

```jsl

Names Default To Here( 1 );
a = Preferences[1] << Get( Show the Tip of the Day at startup );
Show( a );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Restituye el script para establecer las preferencias.

```jsl

Names Default To Here( 1 );
a = Preferences[1] << Get Script;
Show( a );

```

### Graph Background Color

**Sintaxis:** obj &lt;&lt; Graph Background Color( color )

**Descripción:** Cambia la configuración predeterminada para el color de fondo de todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**Sintaxis:** obj &lt;&lt; Graph Border( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar el borde de gráfico de todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**Sintaxis:** obj &lt;&lt; Graph Height( number )

**Descripción:** Cambia la configuración predeterminada para la altura de gráfico de todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**Sintaxis:** obj &lt;&lt; Graph Marker( marker )

**Descripción:** Cambia la configuración predeterminada para la forma de marcador que aparece en todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**Sintaxis:** obj &lt;&lt; Graph Marker Theme( "Estándar"|"Hueco"|"Sólido"|"Por pares"|"Clásico"|"Alfanumérico" )

**Descripción:** Cambia la configuración predeterminada para el tema de marcador que aparece en todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**Sintaxis:** obj &lt;&lt; Graph Marker Unselected Fade( number )

**Descripción:** Cambia la configuración predeterminada de atenuación para los marcadores no seleccionados.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**Sintaxis:** obj &lt;&lt; Graph Marker size( "Punto"|"Pequeño"|"Medio"|"Grande"|"XL"|"XXL"|"XXXL" )

**Descripción:** Cambia la configuración predeterminada para el tamaño de marcador que aparece en todos los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**Sintaxis:** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP Versión agregada:** 17

### Header summary heat map color theme

**Sintaxis:** obj &lt;&lt; Header summary heat map color theme( "name" )

**Descripción:** Cambia la configuración predeterminada para el tema de color continuo que aparece en todos los gráficos.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
Show( Get Preference( Header summary heat map color theme ) );
Set Preference( Header summary heat map color theme( "Green to Purple" ) );
Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**Sintaxis:** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mantener abierta la ventana "Buscar y reemplazar" después de buscar y reemplazar.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**Sintaxis:** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**Sintaxis:** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**Descripción:** Oculta las etiquetas del gráfico que se solapan.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**Sintaxis:** obj &lt;&lt; Histogram Color( color )

**Descripción:** Cambia el color predeterminado de los histogramas.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**Sintaxis:** obj &lt;&lt; Histogram Line Color( color )

**Descripción:** Cambia el color de línea predeterminado de los histogramas.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
 
Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**Sintaxis:** obj &lt;&lt; Hover Help( state=0|1 )

**Descripción:** Ayuda en forma de información sobre herramienta que aparece al mover circularmente el ratón

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**Sintaxis:** obj &lt;&lt; Image Format for PowerPoint( "Formato predeterminado del SO"|"PNG"|"JPEG" )

### Include Responses Not in Data

**Sintaxis:** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**Descripción:** Muestra las etiquetas de las respuestas que no tienen frecuencia en la tabla de datos.

### Initial JMP Window

**Sintaxis:** obj &lt;&lt; Initial JMP Window( "Ventana de inicio"|"JMP Starter"|"Lista de ventanas" )

**Descripción:** Determina la ventana de JMP que se crea al iniciar JMP

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**Sintaxis:** obj &lt;&lt; Initial Log Window( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar la ventana de registro inicial.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**Sintaxis:** obj &lt;&lt; Initial Splash Window( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar la ventana de información de inicio.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**Sintaxis:** obj &lt;&lt; Inside Ticks( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar las marcas de graduación del eje en el interior los marcos de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**Sintaxis:** obj &lt;&lt; Interactive HTML Color( "Fondo claro"|"Fondo oscuro"|"Fondo gris" )

**Descripción:** Cambia la configuración predeterminada del tema de color del HTML interactivo.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**Sintaxis:** obj &lt;&lt; Internet Open Timeout( number )

**Descripción:** Abrir Internet esperará este número de segundos antes de desistir.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**Sintaxis:** obj &lt;&lt; JMP Live Timeout( number )

**Descripción:** Establece el valor de tiempo de espera para la publicación en JMP Live. El predeterminado es 180 segundos.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**Sintaxis:** obj &lt;&lt; JMP Theme( "Tradicional"|"Cómodo"|"JMP Live"|"JMP Clinical" )

**Descripción:** Cambia el tema en todo JMP.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

restore theme = Get Preference( JMP Theme );
Set Preference( JMP Theme( "Traditional" ) );
Wait( 2 );
Set Preference( JMP Theme( "Comfortable" ) );
Wait( 2 );
Set Preference( JMP Theme( "JMP Live" ) );
Wait( 2 );
restore theme;

```

### JSL save column groups with group name

**Sintaxis:** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**Descripción:** Al guardar el script con la lista de columnas, utilice la sintaxis "columna de grupo" si la lista de columnas es un grupo de columnas

**JMP Versión agregada:** 16

### JSS Dir

**Sintaxis:** obj &lt;&lt; JSS Dir( text )

**Descripción:** Changes the JSS directory for development use.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**Sintaxis:** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**Sintaxis:** obj &lt;&lt; Language Switch Warning( state=0|1 )

**Descripción:** Cambia la configuración predeterminada de la advertencia que aparece al detectar un cambio de idioma. Nota: disponible únicamente para Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**Sintaxis:** obj &lt;&lt; Laser pointer( "Desactivado"|"Violeta"|"Azul"|"Verde"|"Amarillo"|"Naranja"|"Rojo" )

**Descripción:** Cambia la configuración predeterminada para mostrar el puntero láser para enfatizar partes de un informe.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**Sintaxis:** obj &lt;&lt; Line Width( number )

**Descripción:** Cambia en ancho de línea predeterminado para el contenido del gráfico.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**Sintaxis:** obj &lt;&lt; Log Mode( "Mejorado"|"Texto" )

**Descripción:** Cambia la configuración predeterminada para la visualización de los registros. Incluye a los registros principales y de proyectos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**Sintaxis:** obj &lt;&lt; Log Window Height( number )

**Descripción:** Cambia la configuración predeterminada del tamaño de la ventana Registro. Nota: esta opción sólo está disponible en Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**Sintaxis:** obj &lt;&lt; Major Grid Line Color( color )

**Descripción:** Cambia el color predeterminado de las líneas de la cuadrícula principal de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**Sintaxis:** obj &lt;&lt; Major Grid Lines( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar las líneas de la cuadrícula principal de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**Sintaxis:** obj &lt;&lt; Mark Menu Items Added Since( "Ninguno"|"Versión actual"|"18"|"17"|"16"|"15"|"14" )

**Descripción:** Marca los elementos del menú que sean más recientes que una versión de JMP concreta.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**Sintaxis:** obj &lt;&lt; Marker Label Color( color )

**Descripción:** El color de las etiquetas del marcador si la opción "Estilo de color de las etiquetas del marcador" está establecida en "Fijo"

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**Sintaxis:** obj &lt;&lt; Marker Label Color Style( "Color del marcador"|"Color del marcador atenuado"|"Color fijo" )

**Descripción:** Cambia el estilo de color predeterminado para las etiquetas del marcador

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**Sintaxis:** obj &lt;&lt; Marker Selection Mode( "No seleccionados atenuados"|"Seleccionados más grandes"|"Seleccionados con halo"|"Seleccionados con contorno"|"Seleccionado del mismo color" )

**Descripción:** Cambia la configuración predeterminada para el modo de selección de marcador. La configuración por defecto es Difuminado para no seleccionado.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**Sintaxis:** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP Versión agregada:** 18

### Maximum JMP Call Depth

**Sintaxis:** obj &lt;&lt; Maximum JMP Call Depth( number )

**Descripción:** Cambia la configuración predeterminada para la Profundidad máxima de llamada de JMP.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**Sintaxis:** obj &lt;&lt; Maximum Parse Depth( number )

**Descripción:** Cambia la configuración predeterminada de la profundidad de análisis máxima. El valor predeterminado es 512.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**Sintaxis:** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**Descripción:** Cambia el ajuste predeterminado para la Profundidad máxima de la recursión de evaluación del símbolo. El valor predeterminado es 25.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**Sintaxis:** obj &lt;&lt; Minor Grid Line Color( color )

**Descripción:** Cambia el color predeterminado de las líneas de la cuadrícula secundaria de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**Sintaxis:** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar las líneas de la cuadrícula secundaria de los gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**Sintaxis:** obj &lt;&lt; New Project Template( text )

**Descripción:** Archivo que se utilizará para los proyectos nuevos y vacíos.

**JMP Versión agregada:** 16

### New character columns default to compact

**Sintaxis:** obj &lt;&lt; New character columns default to compact( state=0|1 )

**Descripción:** Las nuevas columnas de caracteres o las columnas cambiadas al tipo de datos de caracteres se convierten automáticamente en columnas compactas.

**JMP Versión agregada:** 18

### OAuth2 Authentication Browser

**Sintaxis:** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**Descripción:** Inicia sesión en los servidores OAuth2 con el tipo de navegador especificado. Los valores válidos son "Predeterminado", "Incrustado" y "Externo". "Default" de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set(
	Sign in to OAuth2 servers with the specified browser type( "Embedded" )
);

```

### ODBC Allow Table Replace

**Sintaxis:** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**Descripción:** Seleccione esta opción para permitir el reemplazo de tablas ODBC. Esta opción está seleccionada de forma predeterminada. El reemplazo de una tabla ODBC elimina la tabla existente de la base de datos y la reemplaza por una tabla nueva.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.
     
Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**Sintaxis:** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**Sintaxis:** obj &lt;&lt; Open Text File Charset( "Mejor aproximación"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**Descripción:** Especifica la codificación a utilizar si no se encuentra una marca de orden de bytes Unicode; la opción predeterminada es averiguar la codificación a partir del contenido del archivo.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**Sintaxis:** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**Descripción:** Abre automáticamente las columnas de caracteres como columnas compactas cuando JMP determine que es ventajoso.

**JMP Versión agregada:** 18

### Open files from outside projects in

**Sintaxis:** obj &lt;&lt; Open files from outside projects in( "Ningún proyecto"|"Abrir proyecto o ningún proyecto"|"Abrir proyecto o proyecto nuevo"|"Nuevo proyecto" )

**JMP Versión agregada:** 16

### Outline Close Orientation

**Sintaxis:** obj &lt;&lt; Outline Close Orientation( "Automático"|"Horizontal"|"Vertical" )

**Descripción:** Opción para que los cuadros con marco se contraigan verticalmente para ahorrar espacio horizontal.

### Parallel Data Table Column Decompression

**Sintaxis:** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para la descomprensión de columnas en paralelo. El valor predeterminado es habilitado. Desactivar la opción podría permitir la carga de tablas de gran tamaño.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**Sintaxis:** obj &lt;&lt; Partial Selection Indicator( "Ninguna"|"Barra"|"Gráfico circular"|"Waffle" )

**Descripción:** Cómo se indica una selección parcial de un grupo.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**Sintaxis:** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**Sintaxis:** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
     
Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**Sintaxis:** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para conservar los formatos de SAS al exportar a SAS.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**Sintaxis:** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para conservar los nombres de las variables de SAS al exportar a SAS.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**Sintaxis:** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para imprimir la cuadrícula de datos tal y como aparece en pantalla.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**Sintaxis:** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**Descripción:** Se solicita confirmación al cerrar la tabla de resumen.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**Sintaxis:** obj &lt;&lt; Proxy Port( number )

**Descripción:** Utiliza el puerto proxy especificado.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**Sintaxis:** obj &lt;&lt; Proxy Server( text )

**Descripción:** Utiliza el proxy especificado.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

//Caution: Changing a preference will 
//affect the default behavior of JMP.

url = "http:://myproxy.com:80";
Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**Sintaxis:** obj &lt;&lt; Proxy User( text )

**Descripción:** El nombre de usuario y la contraseña para la autenticación proxy. [nombre de usuario]:[contraseña]

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**Sintaxis:** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**Descripción:** Determina si se vuelve a abrir automáticamente la ventana inicial de JMP al cerrar la última ventana de JMP

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**Sintaxis:** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para la salida de errores sobre los mensajes no válidos de los cuadros de visualización.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**Sintaxis:** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**Descripción:** Las advertencias y errores que se produzcan al enviar JSL se registrarán y mostrarán de forma interactiva. Cuando se deshabilita, las advertencias y errores únicamente se registrarán

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**Sintaxis:** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**Sintaxis:** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**Sintaxis:** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**Descripción:** Si selecciona esta opción, el editor de filas mostrará todas las columnas en la tabla de datos, haya o no columnas seleccionadas.

**JMP Versión agregada:** 16

### Ruler Tool Units

**Sintaxis:** obj &lt;&lt; Ruler Tool Units( "Kilómetros"|"Millas" )

**Descripción:** Cambia las unidades mostradas por la regla de herramientas del gráfico en un mapa del Constructor de gráficos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**Sintaxis:** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**Sintaxis:** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
          
Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**Sintaxis:** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**Sintaxis:** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**Sintaxis:** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**Sintaxis:** obj &lt;&lt; SAS ODS Results Format( "HTML"|"TEXTO" )

### SAS ODS Style

**Sintaxis:** obj &lt;&lt; SAS ODS Style( text=Statistical )

**Descripción:** "Statistical" de forma predeterminada.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**Sintaxis:** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**Sintaxis:** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**Descripción:** Cambie la codificación predeterminada de caracteres para los archivos de Transporte a UTF-8

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**Sintaxis:** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**Descripción:** "|" de forma predeterminada.

**JMP Versión agregada:** 16

### Save Data Table Columns GZ Compressed

**Sintaxis:** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para guardar tablas de datos en formato comprimido GZip.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**Sintaxis:** obj &lt;&lt; Save Image DPI( number )

**Descripción:** Especifica la configuración de DPI que se debe emplear al guardar imágenes. Si no se especifica, se utiliza un valor predeterminado.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
            
Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**Sintaxis:** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para guardar diarios en formato de compresión GZip.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**Sintaxis:** obj &lt;&lt; Save Scripts in English( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para guardar scripts en inglés en lugar de en el idioma de visualización.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**Sintaxis:** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para guardar los archivos de texto en formato Unicode.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**Sintaxis:** obj &lt;&lt; Save table with report( "Incrustar"|"Separar"|"Preguntar" )

**Descripción:** Cambia el modo en que se guardan los datos con los informes guardados

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**Sintaxis:** obj &lt;&lt; Save the session when exiting( "Siempre"|"Nunca"|"Preguntar" )

**Descripción:** Cambia la configuración predeterminada para guardar la sesión al salir de JMP.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**Sintaxis:** obj &lt;&lt; Selected Marker Color( color )

**Descripción:** Cambia el color de los marcadores seleccionados cuando se utiliza Seleccionar del mismo color en el Modo de selección de marcadores.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**Sintaxis:** obj &lt;&lt; Semantic formatting

**Descripción:** Crea un formato semántico que se utiliza cuando sus criterios coinciden con el contexto del informe actual.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );

Preferences(
	Semantic formatting(
		Add Semantic Format(
			Format Name( "My Format 1" ),
			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" )
			)
		),
		Add Semantic Format(
			Format Name( "My Format 2" ),
			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),
			Criteria(
				Object Name( "*mean*" ),
				Outline Path( "** :: Means for Oneway Anova" ),
				Row Name( "M" )
			)
		)
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**Sintaxis:** obj &lt;&lt; Sequential Color Theme( "name" )

**Descripción:** Cambia la configuración predeterminada para el tema de color continuo que aparece en todos los gráficos.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Show( Get Preference( Continuous Color Theme ) );
Set Preference( Sequential Color Theme( "Green to Purple" ) );
Show( Get Preference( Sequential Color Theme ) );

```

### Set

**Sintaxis:** obj &lt;&lt; Set

**Descripción:** Establece una preferencia específica.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 
Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Shade Alternate Table Rows

**Sintaxis:** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**Sintaxis:** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**Sintaxis:** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**Sintaxis:** obj &lt;&lt; Shape Boundary Color( color )

**Descripción:** Cambia la configuración predeterminada del color de los límites de forma trazados en todos los gráficos, como los mapas de fondo.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**Sintaxis:** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar el nombre alternativo en el diálogo y en el panel de columnas de tabla de datos.

### Show Personalization at startup

**Sintaxis:** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**Descripción:** El Diálogo de personalización aparecerá la próxima vez que se inicie JMP.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**Sintaxis:** obj &lt;&lt; Show SAS Log( "Never"|"Always"|"On Error" )

### Show Search box on Columns Panel

**Sintaxis:** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**Descripción:** Muestra el cuadro de edición de búsqueda en el panel de columnas de forma predeterminada

**JMP Versión agregada:** 16

### Show Status Bar

**Sintaxis:** obj &lt;&lt; Show Status Bar( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar la Barra de estado.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**Sintaxis:** obj &lt;&lt; Show conditional formatting( "Siempre"|"Sólo pantalla"|"Nunca" )

**Descripción:** Cambia la configuración predeterminada para mostrar el formateo condicional de los informes.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**Sintaxis:** obj &lt;&lt; Show menu tips( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar las informaciones sobre herramientas de menú que aparecen al desplazar el ratón por encima del triángulo rojo de un elemento de menú.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**Sintaxis:** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**Descripción:** Si las barras o clases de datos faltantes se muestran inicialmente en gráficos de resumen. Sea cual sea el valor que aparezca, se puede cambiar para gráficos de resumen individuales haciendo clic con el botón derecho en el gráfico de resumen y seleccionado "Barra con valores faltantes" o "Clase con valores faltantes".

**JMP Versión agregada:** 16

### Show semantic formatting

**Sintaxis:** obj &lt;&lt; Show semantic formatting( "Siempre"|"No Row Matching"|"Nunca" )

**Descripción:** Cambia la configuración predeterminada para el uso del formato semántico en los informes. Los valores posibles son: "Siempre", "Ninguna fila coincidente" y "Nunca". Utilice "Ninguna fila coincidente" para deshabilitar los formatos semánticos específicos de filas.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**Sintaxis:** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**Descripción:** Si los gráficos de resumen se muestran inicialmente en la tabla de datos entre los nombres de columna y las celdas de datos, si el número de filas se encuentra por debajo de algún umbral de rendimiento (3 millones de filas). Con independencia de cuál sea el estado inicial, se puede alternar la opción de visualización para que se muestre una tabla de datos individual con el icono junto a los nombres de columna.

**JMP Versión agregada:** 15

### Show the Quick Start at startup

**Sintaxis:** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para mostrar la ventana Inicio rápido.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**Sintaxis:** obj &lt;&lt; Summary Graph Continuous Color( color )

**Descripción:** Establece el color de los datos continuos en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**Sintaxis:** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**Descripción:** Establece el color de resaltado de los datos continuos en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**Sintaxis:** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**Descripción:** Establece el color de los datos continuos faltantes en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**Sintaxis:** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**Descripción:** Establece el color de resaltado de los datos continuos faltantes en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**Sintaxis:** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**Descripción:** Establece el color de los datos ordenados por nombre en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**Sintaxis:** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**Descripción:** Establece el color de resaltado de los datos ordenados por nombre en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**Sintaxis:** obj &lt;&lt; Summary Graph Other Color( color )

**Descripción:** Establece el color de la otra barra en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**Sintaxis:** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**Descripción:** Establece el color de resaltado de la otra barra en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**Sintaxis:** obj &lt;&lt; Summary Graph Run Chart Color( color )

**Descripción:** Establece el color de la otra barra en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will
//affect the default behavior of JMP.

Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**Sintaxis:** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**Descripción:** Establece el color de los datos ordenados por tamaño en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**Sintaxis:** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**Descripción:** Establece el color de resaltado de los datos ordenados por tamaño en gráficos de resumen y filtros de datos

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**Sintaxis:** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para suprimir las evaluaciones de fórmulas al abrir una tabla de datos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**Sintaxis:** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**Sintaxis:** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**Sintaxis:** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**Sintaxis:** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**Sintaxis:** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**Descripción:** Determina qué ventanas de JMP deben aparecer en la barra de tareas de Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**Sintaxis:** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**Descripción:** Cuando los informes o parte de los informes se guardan como imágenes PNG, el fondo será transparente.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**Sintaxis:** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**Sintaxis:** obj &lt;&lt; Use Excel Labels as Headings( "Utilizar la mejor aproximación"|"Siempre"|"Nunca" )

**Descripción:** Cambia la configuración predeterminada para importar las etiquetas de Excel como Nombres de columnas de JMP al abrir archivos de Excel.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**Sintaxis:** obj &lt;&lt; Use Greek letters( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para habilitar las letras griegas en los informes de JMP.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**Sintaxis:** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**Descripción:** Cambia el comportamiento predeterminado para mostrar los formatos de números, fechas y monedas. Nota: esta opción sólo está disponible en Windows.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will affect 
//the default behavior of JMP. 

Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**Sintaxis:** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**Descripción:** Configura la ordenación de columnas para las nuevas columnas de modo que el texto que contenga números se muestre en orden numérico. Esto también afectará a las columnas convertidas a tipo carácter si no contienen ya una propiedad Orden de valores.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**Sintaxis:** obj &lt;&lt; Use Project Log( "Siempre"|"Si está abierto"|"Nunca" )

**Descripción:** Si se envían los mensajes de registro generados por scripts y ventanas en un proyecto a la ventana de registro del proyecto (en lugar de a la ventana de registro principal)

**JMP Versión agregada:** 16

### Use SPSS labels for column names during import

**Sintaxis:** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para importar las etiquetas SPSS como Nombres de columnas de JMP al abrir archivos SPSS.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**Sintaxis:** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para utilizar el separador de millares en los resultados numéricos.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**Sintaxis:** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para utilizar las etiquetas como nombres de columnas para las variables Triple-S

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**Sintaxis:** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**Descripción:** Una vez establecidos, los filtros de datos utilizan una ventana flotante sobre las respectivas tablas de datos y ventanas asociadas. Si no, los filtros de datos utilizan una ventana que puede organizarse normalmente junto a las demás ventanas.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**Sintaxis:** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**Descripción:** El formato de valor p añadirá un asterisco en las columnas numéricas

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**Sintaxis:** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**Descripción:** Al guardar personalizaciones de informes, utilice referencias de columna en lugar de cadenas de caracteres al referirse a elementos personalizados. De este modo, se generarán scripts más robustos frente a los cambios de nombre de las columnas. Tenga en cuenta que es posible que las personalizaciones que se guarden mediante esta preferencia solo funcionen en JMP 18.0 y versiones posteriores.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**Sintaxis:** obj &lt;&lt; Use math symbols( state=0|1 )

**Descripción:** Cambia la configuración predeterminada para habilitar los símbolos matemáticos en los informes de JMP.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**Sintaxis:** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**Descripción:** Abre automáticamente la tabla de datos a la que hace referencia esta columna.

**JMP Versión agregada:** 16

### Virtual Join Use Linked Column Name

**Sintaxis:** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**Descripción:** Utiliza el nombre de la columna vinculada como nombre de la columna virtual.

**JMP Versión agregada:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**Sintaxis:** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**Descripción:** El formato de archivo compacto no se puede abrir en JMP 17 y versiones anteriores.

**JMP Versión agregada:** 18

### Warn when referenced table name has changed

**Sintaxis:** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**Descripción:** Muestra un mensaje de advertencia cuando haya cambiado el nombre de una tabla vinculada virtualmente (a la que se hace referencia).

**JMP Versión agregada:** 15

## Platform Preferences

### Mensajes del elemento

#### Get

**Sintaxis:** obj &lt;&lt; Get

**Descripción:** Restituye el script para establecer una preferencia específica.

```jsl

Names Default To Here( 1 );
a = Platform Preferences[1] << Get( Distribution );
Show( a );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Restituye el script para establecer las preferencias.

```jsl

Names Default To Here( 1 );
a = Platform Preferences[1] << Get Script;
Show( a );

```

#### Set

**Sintaxis:** obj &lt;&lt; Set

**Descripción:** Establece una preferencia específica.

```jsl

Names Default To Here( 1 );
//Caution: Changing a preference will 
//affect the default behavior of JMP. 

Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

