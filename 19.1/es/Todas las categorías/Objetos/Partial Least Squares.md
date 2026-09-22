# Partial Least Squares



## Columnas

### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Sintaxis:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Freq( :_freqcol ),	Go);

```

### Response

**Sintaxis:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Validation

**Sintaxis:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

## Constructores asociados

### Partial Least Squares

**Sintaxis:** Partial Least Squares( Y( columns ), X( columns ) )

**Descripción:** Ajusta un modelo a una o más variables de respuesta usando factores latentes. Esto permite que se ajusten los modelos cuando las variables explicativas están altamente correlacionadas o cuando hay más variables explicativas que observaciones.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Go);

```

## Mensajes del elemento

### Centering

**Sintaxis:** obj = Partial Least Squares(...Centering( state=0|1)...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Centra todas las variables Y y los efectos del modelo restando la media a cada columna. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Centering( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Fit

**Sintaxis:** obj &lt;&lt; Fit( SVD( Fast|Classical ), Method( NIPALS|SIMPLS ), Number of Factors( number ) )

**Descripción:** Ajusta un modelo de mínimos cuadrados parciales con un número de factores y un método especificados.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 7 ) ),	Go);

```

### Go

**Sintaxis:** obj &lt;&lt; Go

**Descripción:** Inicia el ajuste del modelo de mínimos cuadrados parciales.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	));obj << Go;

```

### Imputation Method

**Sintaxis:** obj = Partial Least Squares(...Imputation Method( "Media"|"EM" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el método de imputación. El método Media reemplaza los valores faltantes por la media de los valores no faltantes en la misma columna. El método EM utiliza un enfoque de maximización de expectativas (EM) iterativo para imputar los valores faltantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Impute Missing Data

**Sintaxis:** obj = Partial Least Squares(...Impute Missing Data( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Reemplaza los valores de datos faltantes en las respuestas y regresores por valores no faltantes. De lo contrario, se excluyen del análisis las filas con valores faltantes.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Go);

```

### Initial Number of Factors

**Sintaxis:** obj &lt;&lt; Partial Least Squares( Validation Method(...Initial Number of Factors( number )...) )

**Descripción:** Especifica el número inicial de factores para la validación cruzada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 10 ) ), );obj << Go;

```

### Max Iterations

**Sintaxis:** obj = Partial Least Squares(...Max Iterations( number=1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número máximo de iteraciones que se llevarán a cabo en el bucle de imputación EM. "1" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));

```

### Method

**Sintaxis:** obj = Partial Least Squares(...Fit( Method( NIPALS|SIMPLS)... )

**Descripción:** Especifica el método utilizado para ajustar el modelo de mínimos cuadrados parciales.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Method( NIPALS ), Number of Factors( 11 ) ),	Go);

```

### Model Dialog

**Sintaxis:** obj &lt;&lt; Model Dialog

**Descripción:** Abre la ventana de inicio Ajuste del modelo. Puede ajustar el modelo Mínimos cuadrados parciales desde esta ventana de inicio seleccionando la personalidad Mínimos cuadrados parciales.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Model Dialog;

```

### SVD

**Sintaxis:** obj &lt;&lt; SVD( Fast|Classical )

**Descripción:** Establece la implementación del algoritmo SVD para calcular el modelo de mínimos cuadrados parciales como Rápido o Clásico. La opción Rápido implementa la rutina SVD de Lanczos y la opción Clásico implementa la rutina de Golub-Kahan.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ) ),	Go);obj << Fit( SVD( Classical ), Method( SIMPLS ) );

```

### Scaling

**Sintaxis:** obj = Partial Least Squares(...Scaling( state=0|1)...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Escala todas las variables Y y los efectos del modelo dividiendo cada columna entre su desviación estándar. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Scaling( 0 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Set Random Seed

**Sintaxis:** obj &lt;&lt; Set Random Seed( number )

**Descripción:** Especifica la semilla aleatoria para la corrida de un modelo de mínimos cuadrados parciales con validación cruzada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Set Random Seed( 12345 ),	Validation Method( KFold( 7 ) ),	Go);

```

### Validation Method

**Sintaxis:** obj &lt;&lt; Validation Method( KFold( number )|Holdback( fraction )|"Leave-One-Out"|None, Initial Number of Factors( number ) )

**Descripción:** Establece el método utilizado para la validación del modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Validation Method( KFold( 7 ), Initial Number of Factors( 15 ) ),	Go);

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = Partial Least Squares(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Partial Least Squares Fit

### Mensajes del elemento

#### Coefficient Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Coefficient Plots( state=0|1 ))

**Descripción:** Muestra u oculta gráficos de los coeficientes del modelo para cada respuesta de las variables X. Hay un gráfico para los datos centrados y escalados y un gráfico para los datos originales.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Coefficient Plots( 1 ));

```

#### Correlation Loading Plot

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Correlation Loading Plot( state=0|1 ))

**Descripción:** Muestra u oculta un único gráfico de dispersión o una matriz del gráfico de dispersión de las cargas de X e Y superpuestas en el mismo gráfico. La matriz del gráfico de dispersión se muestra si el número de factores especificado es mayor que 2.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 2 ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Correlation Loading Plot( 4 ));

```

#### Diagnostics Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Diagnostics Plots( state=0|1 ))

**Descripción:** Muestra u oculta los gráficos de diagnóstico.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Diagnostics Plots( 1 ));

```

#### Distance Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Distance Plots( state=0|1 ))

**Descripción:** Muestra u oculta los gráficos de distancia. Hay un gráfico de la distancia existente entre cada observación y el modelo X, un gráfico de la distancia existente entre cada observación y el modelo Y y un gráfico de dispersión de las distancias existentes entre los modelos X e Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Distance Plots( 1 ));

```

#### Fit Line

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Fit Line( state=0|1 ))

**Descripción:** Muestra u oculta una línea ajustada a través de los puntos en los Gráficos de puntuaciones X-Y. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 2 );obj << (Fit[1] << Fit Line( 0 ));

```

#### Get Measures

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Get Measures)

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Get Measures);

```

#### Loading Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Plots( state=0|1 ))

**Descripción:** Muestra u oculta gráficos de las cargas X e Y para cada factor extraído. Hay gráficos independientes para las variables X e Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Plots( 1 ));

```

#### Loading Scatterplot Matrices

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Loading Scatterplot Matrices( state=0|1 ))

**Descripción:** Muestra u oculta matrices del gráfico de dispersión de las cargas X e Y. Hay matrices del gráfico de dispersión independientes para las variables X e Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Loading Scatterplot Matrices( 1 ));

```

#### Make Model Using VIP

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Make Model Using VIP)

**Descripción:** Abre y rellena una ventana de inicio en la que las respuestas adecuadas se introducen como valores Y, y las variables cuyas VIP superen el umbral establecido se introducen como valores X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Make Model Using VIP);

```

#### Model Driven Multivariate Control Chart for Saved X Scores

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Descripción:** Guarda las fórmulas para cada puntuación X y abre la ventana de inicio Gráfico de control multivariante controlado por el modelo (MDMCC).

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Model Driven Multivariate Control Chart for Saved X Scores);

```

#### Percent Variation Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Percent Variation Plots( state=0|1 ))

**Descripción:** Muestra u oculta gráficos del porcentaje de la variación explicada para los efectos X y para las respuestas Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Percent variation plots( 1 ));

```

#### Profiler

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador para cada respuesta.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Profiler for Predicteds

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Model Driven Multivariate Control Chart for Saved X Scores)

**Descripción:** Guardar las fórmulas para cada Y como una función de la puntuación X y abre la ventana de inicio del perfilador.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Profiler for Predicteds);

```

#### Publish Prediction Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Prediction Formula)

**Descripción:** Crea una fórmula de predicción y la publica como script de columna de fórmula en la plataforma Almacén de fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### Publish Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Publish Score Formula)

**Descripción:** Crea fórmulas de puntuaciones X e Y y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Publish Score Formula);

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**Descripción:** Quita el informe del modelo del informe de la plataforma principal.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));Wait( 3 );obj << (Fit[1] << Remove Fit);

```

#### Save Distance

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Las nuevas columnas contienen los valores Distancia al modelo X (DModX) y Distancia al modelo Y (DModY).

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance);

```

#### Save Distance as X Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Distance as X Score Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Las nuevas columnas contienen las fórmulas Distancia al modelo X (DModX) y Distancia al modelo Y (DModY) que son funciones de las fórmulas de puntuaciones X.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Distance as X Score Formula);

```

#### Save Imputation

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Imputation)

**Descripción:** Guarda las columnas en una nueva tabla de datos. Para cada variable X e Y, hay una columna que contiene la columna de datos original con los valores faltantes reemplazados por sus valores imputados.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Partial Least Squares(	Y( :Y ),	X( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),	Impute Missing Data( 1 ),	Imputation Method( "EM" ),	Max Iterations( 2 ),	Validation Method( None, Initial Number of Factors( 6 ) ),	Fit( Method( NIPALS ), Number of Factors( 6 ) ));obj << (Fit[1] << Save Imputation);

```

#### Save Indiv Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Indiv Confidence Limit Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable Y, hay columnas para los límites de confianza inferior y superior para una predicción individual que son funciones de las fórmulas de puntuaciones X. El nivel predeterminado para alfa es 0,05, lo que crea límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Indiv Confidence Limit Formula);

```

#### Save Loadings

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Loadings)

**Descripción:** Guarda las columnas en dos nuevas tablas de datos. Hay una tabla de datos que contiene las cargas de las variables X y una tabla de datos que contiene las cargas de las variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Loadings);

```

#### Save Mean Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Mean Confidence Limit Formula( &lt;alpha=0.05&gt; ))

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable Y, hay columnas para los límites de confianza inferior y superior para la respuesta media que son funciones de las fórmulas de puntuaciones X. El nivel predeterminado para alfa es 0,05, lo que crea límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Mean Confidence Limit Formula);

```

#### Save Percent Variation Explained For X Effects

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For X Effects)

**Descripción:** Guarda las columnas en una nueva tabla de datos. Para cada variable X, hay una columna que contiene el porcentaje de variación explicado en todos los factores extraídos.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For X Effects);

```

#### Save Percent Variation Explained For Y Responses

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Percent Variation Explained For Y Responses)

**Descripción:** Guarda las columnas en una nueva tabla de datos. Para cada variable Y, hay una columna que contiene el porcentaje de variación explicado en todos los factores extraídos.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Percent Variation Explained For Y Responses);

```

#### Save Prediction As X Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction as X Score Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable Y, hay una columna que contiene una fórmula de predicción que es una función de las fórmulas de puntuaciones X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction as X Score Formula);

```

#### Save Prediction Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Prediction Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable Y, hay una columna que contiene una fórmula de predicción que es una función de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Prediction Formula);

```

#### Save Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Score Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada factor extraído, hay una columna que contiene una fórmula de puntuaciones X y una columna que contiene una fórmula de puntuaciones Y. Las fórmulas de puntuaciones X son funciones de las variables X y las fórmulas de puntuaciones Y son funciones de las fórmulas de puntuaciones X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Score Formula);

```

#### Save Scores

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Scores)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Para cada factor extraído, hay una columna que contiene las puntuaciones X y una columna que contiene las puntuaciones Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Scores);

```

#### Save Standard Errors of Prediction Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standard Errors of Prediction Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable Y, hay una columna que contiene la fórmula para el error estándar de la media predicha que es una función de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standard Errors of Prediction Formula);

```

#### Save Standardized Loadings

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Loadings)

**Descripción:** Guarda las columnas en dos nuevas tablas de datos. Hay una tabla de datos que contiene las cargas estandarizadas de las variables X y una tabla de datos que contiene las cargas estandarizadas de las variables Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Loadings);

```

#### Save Standardized Scores

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Standardized Scores)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Las nuevas columnas contienen las puntuaciones X e Y estandarizadas para cada factor extraído.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Standardized Scores);

```

#### Save T Square

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos original. La nueva columna contiene la fórmula T al cuadrado como función de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square);

```

#### Save T Square as X Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save T Square as X Score Formula)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos original. La nueva columna contiene la fórmula T al cuadrado como función de las fórmulas de puntuaciones X.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save T Square as X Score Formula);

```

#### Save Validation

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Validation)

**Descripción:** Guarda una nueva columna en la tabla de datos original. La nueva columna contiene números que indican cómo se utiliza cada observación en la validación.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Validation);

```

#### Save X Predicted Values

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Predicted Values)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Para cada variable X, hay una columna que contiene los valores X predichos.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Predicted Values);

```

#### Save X Prediction as X Score Formula

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Prediction as X Score Formula)

**Descripción:** Guarda las nuevas columnas de fórmulas en la tabla de datos original. Para cada variable X, hay una columna que contiene una fórmula de predicción que es una función de las fórmulas de puntuaciones X.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Prediction as X Score Formula);

```

#### Save X Residuals

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Residuals)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Para cada variable X, hay una columna que contiene los valores X residuales.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Residuals);

```

#### Save X Score Formula

**Sintaxis:** obj &lt;&lt; Save X Score Formula

#### Save X Weights

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save X Weights)

**Descripción:** Guarda las columnas en una nueva tabla de datos. Para cada factor extraído, hay una columna que contiene los pesos de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save X Weights);

```

#### Save Y Predicted Values

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Predicted Values)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Para cada variable Y, hay una columna que contiene los valores Y predichos.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Predicted Values);

```

#### Save Y Residuals

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Y Residuals)

**Descripción:** Guarda las nuevas columnas en la tabla de datos original. Para cada variable Y, hay una columna que contiene los valores Y residuales.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Save Y Residuals);

```

#### Score Scatterplot Matrices

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Scatterplot Matrices( state=0|1 ))

**Descripción:** Muestra u oculta una matriz del gráfico de dispersión en las puntuaciones X y una matriz del gráfico de dispersión en las puntuaciones Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Score Scatterplot Matrices( 1 ));

```

#### Set VIP Threshold

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Set VIP Threshold( number=0.8 ))

**Descripción:** Establece el nivel del umbral para el Gráfico de importancia de las variables, la Tabla de importancia de las variables y los Gráficos de VIP frente a Coeficientes. "0.8" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));Wait( 3 );obj << (Fit[1] << Set VIP Threshold( 0.5 ));

```

#### Show Confidence Band

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Show Confidence Band( state=0|1 ))

**Descripción:** Muestra u oculta bandas de confianza al 95% para las líneas ajustadas en los Gráficos de puntuaciones X-Y.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Show Confidence Band( 1 ));

```

#### Spectral Profiler

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Spectral Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un único perfilador en el que todas las variables de respuesta aparecen en la primera celda del gráfico.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Spectral Profiler( 1 ));

```

#### T Square Plot

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; T Square Plot( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de estadísticos de T cuadrado para cada observación, junto con un límite de control.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << T Square Plot( 1 ));

```

#### VIP vs Coefficients Plots

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; VIP vs Coefficients Plots( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de los estadísticos VIP comparados con los coeficientes del modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << VIP vs Coefficients Plots( 1 ));

```

#### Variable Importance Plot

**Sintaxis:** obj &lt;&lt; (Fit[number] &lt;&lt; Variable Importance Plot( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico en el que se resume la contribución que realiza cada variable al modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Fit( Number of Factors( 5 ) ));obj << (Fit[1] << Variable Importance Plot( 1 ));

```

