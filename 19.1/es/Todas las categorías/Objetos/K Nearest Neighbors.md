# K Nearest Neighbors



## Columnas

### By

**Sintaxis:** obj = K Nearest Neighbors(...&lt;By( column(s) )&gt;...)

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Sintaxis:** obj = K Nearest Neighbors(...Factor( column(s) )...)

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

### Validation

**Sintaxis:** obj = K Nearest Neighbors(...&lt;Validation( column )&gt;...)

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));

```

### X

**Sintaxis:** obj = K Nearest Neighbors(...X( column(s) )...)

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

### Y

**Sintaxis:** obj = K Nearest Neighbors(...&lt;Y( column(s) )&gt;...)

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

## Constructores asociados

### K Nearest Neighbors

**Sintaxis:** K Nearest Neighbors(Y( column ), X( columns ))

**Descripción:** Predice una respuesta continua o categórica basada en las respuestas de los k vecinos más cercanos en el espacio de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

## Mensajes del elemento

### Category Bias

**Sintaxis:** obj = K Nearest Neighbors(...Category Bias( number=0.5 )...)

**Descripción:** Especifica un parámetro de ajuste que garantiza que las probabilidades ajustadas para las respuestas categóricas sean siempre positivas. "0.5" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = K Nearest Neighbors(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	K( 10 ),	Category Bias( 0.2 ));

```

### Get Measures

**Sintaxis:** obj &lt;&lt; Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Get Measures;

```

### K

**Sintaxis:** obj = K Nearest Neighbors(...K( number=10 )...)

**Descripción:** Establece el número máximo de vecinos más cercanos que se analizarán. "10" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = K Nearest Neighbors(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	K( 8 ));

```

### Response

**Sintaxis:** obj &lt;&lt; Response( "&lt;Response Variable Name&gt;", &lt;Set K( number )&gt;, &lt;Mosaic Plot ( state=0|1 ) &gt;, &lt;Plot Actual by Predicted( state=0|1 )&gt;, &lt;Plot Residual by Predicted( state=0|1 )&gt; )

**Descripción:** Especifica las opciones de informe disponibles para la respuesta del modelo. Las opciones disponibles dependen del tipo de respuesta.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ),	Response(		"Y",		Set K( 6 ),		Plot Actual by Predicted( 1 ),		Plot Residual by Predicted( 1 )	));

```

### Save Near Neighbor Distances

**Sintaxis:** obj &lt;&lt; Save Near Neighbor Distances

**Descripción:** Guarda la distancia al k.º punto de datos más cercano.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << Save Near Neighbor Distances;

```

### Save Near Neighbor Rows

**Sintaxis:** obj &lt;&lt; Save Near Neighbor Rows

**Descripción:** Guarda los números de filas de los k vecinos más cercanos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << Save Near Neighbor Rows;

```

### Set Random Seed

**Sintaxis:** obj = K Nearest Neighbors(...Set Random Seed( number )...)

**Descripción:** Establece un valor específico para la semilla aleatoria, lo cual garantiza que todas las corridas subsiguientes que utilizan la misma semilla sean reproducibles.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = K Nearest Neighbors(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Set Random Seed( 123456 ),	K( 8 ));

```

### Use Excluded Rows for Validation

**Sintaxis:** obj &lt;&lt; Use Excluded Rows for Validation( state=0|1 )

**Descripción:** Utiliza las filas excluidas de la tabla de datos para crear un conjunto de validación. Esta opción aparece en la ventana de inicio solo si se utiliza JMP estándar y hay filas excluidas.

**JMP Versión agregada:** 15

### Validation Portion

**Sintaxis:** obj = K Nearest Neighbors(...Validation Portion( fraction=0 )...)

**Descripción:** Formula un conjunto de validación mediante la selección aleatoria de filas y cada fila tiene probabilidad p (fracción) de ser seleccionada. "0" de forma predeterminada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = K Nearest Neighbors(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	K( 10 ));

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = K Nearest Neighbors(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## KNN Fit

### Mensajes del elemento

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Plot Actual by Predicted( 1 ));obj << (Response[1] << Plot Residual by Predicted( 1 ));preset = obj << (Response[1] << New Preset);obj2 = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 5 ));Wait( 1 );obj2 << (Response[1] << Apply Preset( preset ));

```

#### Get Best K

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Get Best K)

**Descripción:** Devuelve el valor de los K mejores vecinos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Get Best K);

```

#### Get Prediction Formula

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Get Prediction Formula( k ))

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Get Prediction Formula( 9 ));

```

#### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico en mosaico de los datos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Mosaic Plot( 0 ));

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Plot Actual by Predicted( 1 ));obj << (Response[1] << Plot Residual by Predicted( 1 ));preset = obj << (Response[1] << New Preset);

```

#### Plot Actual by Predicted

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico con los valores de respuesta reales en el eje vertical y los valores predichos en el eje horizontal. Si el ajuste es bueno, los puntos se encuentran cerca de la diagonal. Puede ver qué puntos están lejos de la diagonal, buscar patrones y visualizar la prueba.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**Sintaxis:** obj &lt;&lt; ( Response[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ) )

**Descripción:** Representa los residuos en el eje Y y los valores predichos en el eje X. Utilice el gráfico de dispersión para detectar patrones en el ajuste o en la variación.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Plot Residual by Predicted( 1 ));

```

#### Publish Prediction Formula

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Publish Prediction Formula( k ))

**Descripción:** Crea fórmulas de predicción y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Publish Prediction Formula( 9 ));

```

#### Save Predicteds

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Save Predicteds)

**Descripción:** Guarda los valores predichos en una nueva columna de la tabla de datos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Save Predicteds);

```

#### Save Prediction Formula

**Sintaxis:** obj &lt;&lt; (Response[number] &lt;&lt; Save Prediction Formula( k ))

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ));obj << (Response[1] << Save Prediction Formula( 9 ));

```

#### Set K

**Sintaxis:** obj &lt;&lt; ( Response[number] &lt;&lt; Set K( number ) )

**Descripción:** Cambia el modelo especificado a un modelo distinto en la trayectoria de solución.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = K Nearest Neighbors(	Y( :Y ),	X( :Age, :Gender, :BMI ),	Validation( :Validation ),	K( 10 ),	Plot Actual by Predicted( 1 ));Wait( 3 );obj << (Response[1] << Set K( 6 ));

```

