# Bayesian Optimization



## Columnas

### Iteration

**Sintaxis:** obj &lt;&lt; Iteration( column )

**Descripción:** Especifica una columna de etiqueta de lote. Se espera que los lotes estén etiquetados como 0, 1, 2, …, donde el lote 0 señala los datos de entrenamiento originales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_itercol",	Numeric,	Ordinal,	set values( V Concat( (Repeat( 0, N Rows( dt ) - 10 )), Repeat( 1, 10 ) ) ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Iteration( _itercol ));

```

### Run Order

**Sintaxis:** obj &lt;&lt; Run Order( column )

**Descripción:** Especifica una columna de permutación de números de fila que indican el orden de las observaciones.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_runorder", Numeric, Ordinal, set values( 1 :: (N Rows( dt )) ) );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Run Order( _runorder ));

```

### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Constructores asociados

### Bayesian Optimization

**Sintaxis:** Bayesian Optimization( Y( columns ), X( columns ) )

**Descripción:** Recomienda ajustes de factores para optimizar las respuestas ampliando la tabla de datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## Mensajes del elemento

### Automatically Generate a Batch

**Sintaxis:** obj &lt;&lt; Automatically Generate a Batch( state=0|1 )

**Descripción:** Indica si se debe ejecutar la generación automática del conjunto de candidatos y la selección de lotes. También puede especificar qué método se debe utilizar para seleccionar los lotes. Esta opción equivale a especificar a la vez las opciones Generar conjunto de candidatos y Seleccionar lote automáticamente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 1 ));

```

### Autoselect Batch

**Sintaxis:** obj &lt;&lt; Autoselect Batch( state=0|1 )

**Descripción:** Selecciona un lote del conjunto de candidatos cargado actualmente. Si no hay ninguno cargado, se genera un conjunto de relleno de espacio de un tamaño 1000 veces superior al número de variables de entrada. Esta opción también se puede utilizar para desactivar la selección automática de lotes en el inicio.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( Batch Size( 1 ), Minimum RSquare( 0.5 ) ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	),	Autoselect Batch( 0 ));

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 0 ));obj << Autoselect Batch( Batch Size( 5 ), Augmentation Method( Space Filling Exploration ) );

```

### Batch Size

**Sintaxis:** obj &lt;&lt; Batch Size( number )

**Descripción:** Especifica el tamaño del lote que se debe seleccionar automáticamente en el inicio.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Batch Size( 5 ));

```

### Candidate Set Size

**Sintaxis:** obj &lt;&lt; Candidate Set Size( number )

**Descripción:** Especifica el tamaño objetivo del conjunto de candidatos que se debe generar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Candidate Set Size( 10 ));

```

### Continuous Correlation Type

**Sintaxis:** obj &lt;&lt; Continuous Correlation Type( "Gaussiano"|"Matérn 3/2"|"Matérn 5/2"|"Exponencial" )

**Descripción:** Especifica el núcleo objetivo para variables de entrada continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Continuous Correlation Type( "Matern 5/2" ));

```

### Generate Candidate Set

**Sintaxis:** obj &lt;&lt; Generate Candidate Set( Candidate Set Size( number ), &lt;Include Runs that Do Not Conform to Constraints( state = 0|1 )&gt; )

**Descripción:** Genera un conjunto de candidatos. Puede proporcionar el tamaño del conjunto de candidatos y especificar si se permiten puntos que incumplan las restricciones lineales en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set(		Candidate Set Size( 10 ),		Include Runs that Do Not Conform to Constraints( 0 )	));

```

### Include Runs that Do Not Conform to Constraints

**Sintaxis:** obj &lt;&lt; Include Runs that Do Not Conform to Constraints( state=0|1 )

**Descripción:** Especifica si se deben incluir los puntos que infrinjan las restricciones lineales en la tabla de datos al generar o cargar un conjunto de candidatos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dtCand = New Table( "Tiretread Candidate Set",	Add Rows( 15 ),	New Column( "SILICA",		Continuous,		Set Values(			[1.2, 1.60825, 0.79175, 0.995875, 1.812375, 1.404125, 0.587625, 0.6896875,			1.5061875, 1.9144375, 1.0979375, 0.8938125, 1.7103125, 1.3020625, 0.4855625]		)	),	New Column( "SILANE",		Continuous,		Set Values(			[50, 41.835, 58.165, 45.9175, 62.2475, 37.7525, 54.0825, 43.87625, 60.20625,			35.71125, 52.04125, 39.79375, 56.12375, 47.95875, 64.28875]		)	),	New Column( "SULFUR",		Continuous,		Set Values(			[2.3, 1.89175, 2.70825, 2.504125, 1.687625, 2.912375, 2.095875, 3.0144375,			2.1979375, 2.6061875, 1.7896875, 1.9938125, 2.8103125, 1.5855625, 2.4020625]		)	));dt << New Script( "Constraint", {:SILICA + :SULFUR <= 3} );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ),	Load Candidate Set from Data Table( dtCand ));

```

### Minimum RSquare

**Sintaxis:** obj &lt;&lt; Minimum RSquare( number )

**Descripción:** Especifica la métrica R cuadrado mínima requerida para el algoritmo de selección automática por lotes. En la ventana de inicio de la plataforma de optimización bayesiana, esta opción se llama Umbral de R cuadrado del aumento basado en modelos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Minimum RSquare( 0.25 ));

```

### Nominal Correlation Type

**Sintaxis:** obj &lt;&lt; Nominal Correlation Type( "Correlaciones iguales"|"Correlaciones desiguales" )

**Descripción:** Especifica el núcleo objetivo para variables de entrada nominales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Nominal Correlation Type( "Equal Correlations" ));

```

### Ordinal Correlation Type

**Sintaxis:** obj &lt;&lt; Ordinal Correlation Type( "Correlaciones iguales"|"Correlaciones desiguales"|"Variable latente" )

**Descripción:** Especifica el núcleo objetivo para variables de entrada ordinales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Ordinal Correlation Type( "Equal Correlations" ));

```

### Save Prediction Formula

**Sintaxis:** obj &lt;&lt; Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una columna nueva de la tabla de datos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula( Elong );

```

### Set Tab

**Sintaxis:** obj &lt;&lt; Set Tab( number )

**Descripción:** Especifica la pestaña actual. El argumento interpreta 0 como la pestaña Resumen del modelo, 1 como Selección de lotes, y así sucesivamente, en el orden en que aparezcan las pestañas en la ventana del informe.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( "ABRASION" );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Bayesian Optimization Batch Customizer > Candidate Set View

### Mensajes del elemento

#### Export Candidate Set to Data Table

**Sintaxis:** obj &lt;&lt; Export Candidate Set to Data Table

**Descripción:** Exporta el conjunto de candidatos cargado actualmente en una tabla de datos nueva. Es posible especificar los grupos de columnas objetivo como argumentos. Esta opción exporta la configuración de factores de forma predeterminada si no se proporcionan grupos de columnas. Si no se especifican argumentos, aparecerá una ventana en la que podrá especificar las opciones.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table( Go );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table();

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table(	Order Added, Factor Settings, Bayesian Desirability, Bayesian Desirability Std Dev,	Multimodel Prediction Std Dev, MaxPro Space Filling Criterion,	Bayesian Desirability Expected Improvement, Bayesian Desirability Upper Confidence Bound,	Training Response Predictions, Augmented Response Prediction Std Dev,	Augmented Response Prediction Confidence Intervals);

```

#### Select Runs

**Sintaxis:** obj &lt;&lt; Select Runs( Row Index( [ numbers ] ), &lt;Order Added( [ numbers ]&gt;, &lt;Reason Added( { text } )&gt;, &lt;Replace( 0|1 )&gt; )

**Descripción:** Selecciona filas de la tabla de conjuntos candidatos para añadirlas al lote actual.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Select Runs(		Row Index( [3 5] ),		Order Added( [1 2] ),		Reason Added( {"Custom Reason", "Custom Reason"} ),		Replace( 1 )	));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	autoselect batch( 0 ));obj << Select Runs(	Row Index( [3 5] ),	Order Added( [1 2] ),	Reason Added( {"Custom Reason", "Custom Reason"} ),	Replace( 0 ));

```

#### Show Table Columns

**Sintaxis:** obj &lt;&lt; Show Table Columns( &lt;"Column Group Name"&gt;,... )

**Descripción:** Especifica qué grupos de columnas están visibles en la tabla del conjunto de candidatos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Show Table Columns( Order Added, Factor Settings, Bayesian Desirability ));

```

## Bayesian Optimization Batch Customizer

### Mensajes del elemento

#### Add Current Profiler Settings to Batch

**Sintaxis:** obj &lt;&lt; Add Current Profiler Settings to Batch

**Descripción:** Agrega la configuración actual del perfilador al conjunto de candidatos y la selecciona para incluirla como corrida en el siguiente lote de aumento.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Add Current Profiler Settings to Batch;

```

#### Augmented Acquisition Functions Profiler

**Sintaxis:** obj &lt;&lt; Augmented Acquisition Functions Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador que permite explorar cómo cambia cada función de adquisición con respecto a los cambios de cada valor de factor. Las funciones dependen del supuesto de que se muestrearán los puntos del lote actual. Este perfilador refleja los cambios en los niveles de factor y las funciones de deseabilidad realizados en el perfilador de predicción aumentado.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Acquisition Functions Profiler( 0 );

```

#### Augmented Prediction Profiler

**Sintaxis:** obj &lt;&lt; Augmented Prediction Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador que permite explorar cómo cambia cada columna con respecto a los cambios de cada valor de factor en todos los modelos. Las predicciones dependen del supuesto de que se muestrearán los puntos del lote actual.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Prediction Profiler( 0 );

```

#### Deselect All

**Sintaxis:** obj &lt;&lt; Deselect All

**Descripción:** Deselect all points in current batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Deselect All;

```

#### Load Candidate Set from Data Table

**Sintaxis:** obj &lt;&lt; Load Candidate Set from Data Table

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Load Candidate Set from Data Table());

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Borehole Latin Hypercube.jmp" );:log y << Set Property( "Response Limits", {Goal( maximize ), Importance( 1 )} );obj = dt << Bayesian Optimization(	Y( :log y ),	X( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ));dt_candidate = Open( "$SAMPLE_DATA/Design Experiment/Borehole Uniform.jmp" );obj << Load Candidate Set from Data Table( dt_candidate );

```

#### Make Table

**Sintaxis:** obj &lt;&lt; Make Table

**Descripción:** Export currently selected batch points to data table based on current settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Make Table;

```

#### Make Table Options

**Sintaxis:** obj &lt;&lt; Make Table Options( &lt;Location( state = 0|1 )&gt;, &lt;Randomize Runs( state = 0|1 )&gt;, &lt; "Include Option Name"( state = 0|1 ) &gt; , ... )

**Descripción:** Permite seleccionar la configuración de las opciones que se utilizan al exportar el lote seleccionado en una tabla de datos. Tenga en cuenta que la entrada sintáctica "Incluir nombre de opción" hace referencia a cualquiera de las opciones del menú Incluir opciones.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Make Table Options(		Location( 1 ),		Randomize Runs( 0 ),		Save desirability function values to columns( 1 ),		Save startup script for next batch selection to data table( 1 ),		Include observed desirabilities( 1 ),		Include original candidate set row indices( 1 ),		Include reason added column( 1 ),		Include predicted response values( 1 ),		Include prediction standard deviations( 1 ),		Include Bayesian desirability expected improvement column( 1 )	));

```

#### Maximize Bayesian Desirability

**Sintaxis:** obj &lt;&lt; Maximize Bayesian Desirability

**Descripción:** Busca la configuración de factores que maximiza la media posterior de la distribución de deseabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;

```

#### Maximize Bayesian Desirability Std Dev

**Sintaxis:** obj &lt;&lt; Maximize Bayesian Desirability Std Dev

**Descripción:** Busca la configuración de factores que maximiza la desviación posterior de la distribución de deseabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability Std Dev;

```

#### Maximize Expected Improvement

**Sintaxis:** obj &lt;&lt; Maximize Expected Improvement

**Descripción:** Busca la configuración de factores con la mayor mejora esperada según la medición de la deseabilidad bayesiana.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Expected Improvement;

```

#### Maximize MaxPro Criterion

**Sintaxis:** obj &lt;&lt; Maximize MaxPro Criterion

**Descripción:** Busca la configuración de factores que ocupa más espacio utilizando el criterio MaxPro.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize MaxPro Criterion;

```

#### Maximize Multimodel Std Dev

**Sintaxis:** obj &lt;&lt; Maximize Multimodel Std Dev

**Descripción:** Busca la configuración de factores que maximiza la desviación estándar de la predicción de respuestas múltiples.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Multimodel Std Dev;

```

#### Maximize Upper Confidence Bound

**Sintaxis:** obj &lt;&lt; Maximize Upper Confidence Bound

**Descripción:** Busca la configuración de factores para la predicción de deseabilidad bayesiana con el límite de confianza superior más alto. A menudo, esto se conoce como criterio UCB.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Upper Confidence Bound;

```

#### Restore Best Training Point

**Sintaxis:** obj &lt;&lt; Restore Best Training Point

**Descripción:** Devuelve la configuración de los factores a la de la fila de entrenamiento con la deseabilidad más alta observada.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;obj << Add Current Profiler Settings to Batch;obj << Restore Best Training Point;

```

## Bayesian Optimization Model Summary

### Mensajes del elemento

#### All Responses Profiler

**Sintaxis:** obj &lt;&lt; All Responses Profiler( state=0|1 )

**Descripción:** Explora el modo en que cambia cada columna con respecto a los cambios del valor de cada factor entre modelos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	All Responses Profiler( 1 ));

```

## Gaussian Process Model

### Mensajes del elemento

#### Intercept

**Sintaxis:** obj &lt;&lt; Intercept( number )

**Descripción:** Especifica el valor que se utilizará como parámetro de constante del modelo para ajustar un modelo del proceso gaussiano. Si se proporcionan todos los valores theta, pepita, residual y constante, dichos valores se tratarán como fijos. Si se proporciona un conjunto parcial de valores, los valores dados se tratarán como valores iniciales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Nugget

**Sintaxis:** obj &lt;&lt; Nugget( number )

**Descripción:** Especifica el valor que se utilizará como pepita para ajustar un modelo del proceso gaussiano. Si se proporcionan todos los valores theta, pepita, residual y constante, dichos valores se tratarán como fijos. Si se proporciona un conjunto parcial de valores, los valores dados se tratarán como valores iniciales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Profiler

**Sintaxis:** obj &lt;&lt; Profiler( state=0|1 )

**Descripción:** Explora el modo en que cambia cada columna con respecto a los cambios del valor de cada factor entre modelos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab( Y( :MODULUS ), Profiler( 0 ) ));

```

#### Residual

**Sintaxis:** obj &lt;&lt; Residual( number )

**Descripción:** Especifica el valor que se utilizará como parámetro de residuo para ajustar un modelo del proceso gaussiano. Si se proporcionan todos los valores theta, pepita, residual y constante, dichos valores se tratarán como fijos. Si se proporciona un conjunto parcial de valores, los valores dados se tratarán como valores iniciales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Starting Values

**Sintaxis:** obj &lt;&lt; Starting Values( number )

**Descripción:** Especifica los valores iniciales que se utilizarán para ajustar un modelo del proceso gaussiano.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Starting Values(			Theta Values( {0.5, 0.5, 0.5} ),			Nugget( 0.05 ),			Residual( 500 ),			Intercept( 100 )		)	));

```

#### Theta Values

**Sintaxis:** obj &lt;&lt; Theta Values( number )

**Descripción:** Especifica los valores que se utilizarán como parámetros theta para ajustar un modelo del proceso gaussiano. Si se proporcionan todos los valores theta, pepita, residual y constante del modelo, dichos valores se tratarán como fijos. Si se proporciona un conjunto parcial de valores, los valores dados se tratarán como valores iniciales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

