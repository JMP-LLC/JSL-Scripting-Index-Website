# Multiple Correspondence Analysis



## Columnas

### By

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;Factor( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una o más columnas categóricas para utilizarlas como variables factoriales o explicativas.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Freq

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	Freq( :_freqcol ));

```

### Response

**Sintaxis:** obj = Multiple Correspondence Analysis(...Response( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas categóricas que se deben analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Supplementary ID

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;Supplementary ID( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna que identifica las filas que se deben utilizar como suplementarias.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Year ),	X( :Region ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Rows( 0 );

```

### Supplementary Variable

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;Supplementary Variable( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```

### X

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;X( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una o más columnas categóricas para utilizarlas como variables factoriales o explicativas.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Y

**Sintaxis:** obj = Multiple Correspondence Analysis(...Y( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas categóricas que se deben analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

### Z

**Sintaxis:** obj = Multiple Correspondence Analysis(...&lt;Z( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ), Z( :sex ) );

```

## Constructores asociados

### Multiple Correspondence Analysis

**Sintaxis:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Descripción:** Identifica las asociaciones entre los niveles de variables categóricas. El análisis de correspondencias múltiples es análogo al análisis de componentes principales para los datos categóricos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

## Mensajes del elemento

### 3D Correspondence Analysis

**Sintaxis:** obj&lt;&lt;"3D Correspondence Analysis"n(1)

**Descripción:** Muestra u oculta un gráfico de correspondencias 3D. El análisis de correspondencias 3D requiere un mínimo de cuatro niveles por cada una de las variables X e Y.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << "3D Correspondence Analysis"n( 1 );

```

### Cochran's Q Test

**Sintaxis:** obj&lt;&lt;Cochran&apos;s Q Test(1)

**Descripción:** Muestra u oculta la prueba Q de Cochran.

```jsl

dt = New Table( "Drug_Qtest",	Add Rows( 8 ),	New Column( "Subject", Numeric, "Continuous", Set Values( [1, 2, 3, 4, 5, 6, 7, 8] ) ),	New Column( "drug_A",		Character,		"Nominal",		Set Values( {"F", "F", "F", "F", "U", "U", "U", "U"} )	),	New Column( "drug_B",		Character,		"Nominal",		Set Values( {"F", "F", "U", "U", "F", "F", "U", "U"} )	),	New Column( "drug_C",		Character,		"Nominal",		Set Values( {"F", "U", "F", "U", "F", "U", "F", "U"} )	),	New Column( "Count", Numeric, "Continuous", Set Values( [6, 16, 2, 4, 2, 4, 6, 6] ) ));obj = dt << Multiple Correspondence Analysis(	Y( :drug_A, :drug_B, :drug_C ),	X( :Subject ),	Freq( :Count ));obj << Cochran's Q Test( 1 );

```

### Cross Table

**Sintaxis:** obj &lt;&lt; Cross Table( state=0|1 )

**Descripción:** Muestra u oculta una tabla de contingencia o de Burt. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Cross Table( 0 );

```

### Cross Table of Supplementary Columns

**Sintaxis:** obj &lt;&lt; Cross Table of Supplementary Columns( state=0|1 )

**Descripción:** Muestra u oculta una tabla cruzada de columnas suplementarias.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Region ),	X( :Year ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Columns( 0 );

```

### Cross Table of Supplementary Rows

**Sintaxis:** obj &lt;&lt; Cross Table of Supplementary Rows( state=0|1 )

**Descripción:** Muestra u oculta una tabla cruzada de filas suplementarias.

```jsl

dt = Open( "$SAMPLE_DATA/US Regional Population.jmp" );obj = dt << Multiple Correspondence Analysis(	Y( :Year ),	X( :Region ),	Freq( :Population ),	Supplementary ID( :ID ));obj << Cross Table of Supplementary Rows( 0 );

```

### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico en mosaico de los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );obj << Mosaic Plot( 1 );

```

### Proportional marker size

**Sintaxis:** obj&lt;&lt;Proportional Marker Size(1)

**Descripción:** Establece el tamaño de cada marcador en el gráfico de correspondencias para que sean proporcionales a la frecuencia del grupo correspondiente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Proportional Marker Size( 1 );

```

### Save Coordinate Formula

**Sintaxis:** obj&lt;&lt;Save Coordinates

**Descripción:** Guarda la fórmula de coordenadas para cada observación en una nueva columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Save Coordinate Formula( 2 );

```

### Save Coordinates

**Sintaxis:** obj&lt;&lt;Save Coordinates

**Descripción:** Guarda coordenadas de columna o fila.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Save Coordinates;

```

### Select dimension

**Sintaxis:** obj &lt;&lt; Select dimension( &lt;specify dimension to plot&gt; )

**Descripción:** Selecciona las dimensiones que se utilizan como ejes en el gráfico de correspondencia.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Select Dimension( 1, 3 );

```

### Show Adjusted Inertia

**Sintaxis:** obj&lt;&lt;Show Adjusted Inertia(1)

**Descripción:** Muestra u oculta la inercia ajustada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Adjusted Inertia( 1 );

```

### Show Coordinates

**Sintaxis:** obj&lt;&lt;Show Coordinates(1)

**Descripción:** Muestra u oculta las coordenadas de fila y columna.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Coordinates( 1 );

```

### Show Detail

**Sintaxis:** obj&lt;&lt;Show Detail(0)

**Descripción:** Muestra u oculta los detalles de la inercia y la descomposición de ji cuadrado. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Detail( 0 );

```

### Show Partial Contributions to Inertia

**Sintaxis:** obj&lt;&lt;Show Partial Contributions to Inertia(1)

**Descripción:** Muestra u oculta las contribuciones parciales a la inercia.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Partial Contributions to Inertia( 1 );

```

### Show Plot

**Sintaxis:** obj&lt;&lt;Show Plot(0)

**Descripción:** Muestra u oculta un gráfico de correspondencias. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Plot( 0 );

```

### Show Squared Cosines

**Sintaxis:** obj&lt;&lt;Show Squared Cosines(1)

**Descripción:** Muestra u oculta una tabla que contiene los cosenos al cuadrado de las variables.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Squared Cosines( 1 );

```

### Show Summary Statistics

**Sintaxis:** obj&lt;&lt;Show Summary Statistics(1)

**Descripción:** Muestra u oculta los estadísticos de resumen de la calidad, la masa y la inercia.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );obj << Show Summary Statistics( 1 );

```

### Tests for Independence

**Sintaxis:** obj &lt;&lt; Tests for Independence( state=0|1 )

**Descripción:** Muestra u oculta las pruebas de independencia.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country ), X( :size ) );obj << Tests for Independence( 1 );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintaxis:** obj &lt;&lt; Report; Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Multiple Correspondence Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

