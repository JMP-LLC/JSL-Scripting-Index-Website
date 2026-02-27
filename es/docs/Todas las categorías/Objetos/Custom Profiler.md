# Custom Profiler



## Columnas

### Noise Factors

**Sintaxis:** obj = Custom Profiler(...&lt;Noise Factors( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica factores de ruido, que deben ser columnas que sean ingredientes de las columnas de fórmulas. Los factores de ruido se utilizan para estudiar la robustez (o planitud) con respecto a la variación transmitida desde estos factores. El perfilador resultante incluye las derivadas de las fórmulas con respecto a los factores de ruido.

**Ejemplo de perfilador**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Ejemplo de perfilador de contorno**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

**Ejemplo de perfilador de mezcla**

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Ejemplo de perfilador personalizado**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Noise Factors( :SILANE ));

```

### Prediction Formula

**Sintaxis:** obj = Custom Profiler(...Prediction Formula( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas de respuesta que contienen fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Y

**Sintaxis:** obj = Custom Profiler(...Y( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas de respuesta que contienen fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## Constructores asociados

### Custom Profiler

**Sintaxis:** Custom Profiler( Y( column1, column2, ... ) )

**Descripción:** Proporciona una interfaz que le permite optimizar respuestas sin una salida gráfica. Este perfilador es útil para problemas de mayor envergadura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## Mensajes del elemento

### Append Settings to Table

**Sintaxis:** obj &lt;&lt; Append Settings to Table

**Descripción:** Guarda la configuración del perfilador actual como una nueva fila al final de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Append Settings to Table;

```

### Broadcast Factor Settings

**Sintaxis:** obj &lt;&lt; Broadcast Factor Settings

**Descripción:** Envía la configuración de los factores para el perfilador actual a todos los demás perfiladores. Esta opción no vincula los perfiladores.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ),	Term Value(		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )	));obj << Contour Profiler( 1 );Wait( 1 );obj << Broadcast Factor Settings;

```

### Contour Profiler

**Sintaxis:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Contour Profiler( 1 );

```

### Converge Limit

**Sintaxis:** obj &lt;&lt; Converge Limit( number )

**Descripción:** Especifica el criterio de convergencia para el algoritmo de optimización. Si el criterio de convergencia es menor que este valor durante dos iteraciones consecutivas, el algoritmo se detiene.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Converge limit( 0.0001 );obj << Optimize;

```

### Copy Settings Script

**Sintaxis:** obj &lt;&lt; Copy Settings Script

**Descripción:** Copia la configuración actual de los factores en el portapapeles. La configuración se puede pegar posteriormente en otro perfilador.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Edit Constraints

**Sintaxis:** obj &lt;&lt; Edit Constraints

**Descripción:** Agrega, cambia o eliminar restricciones lineales.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Edit Constraints;

```

### Formulas for OPTMODEL

**Sintaxis:** obj &lt;&lt; Formulas for OPTMODEL

**Descripción:** Guarda las fórmulas de predicción del modelo en un nuevo archivo como instrucciones SAS para PROC OPTMODEL.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Formulas for OPTMODEL;

```

### Get Constraints

**Sintaxis:** obj &lt;&lt; Get Constraints

**Descripción:** Devuelve una lista de restricciones de factores.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Profiler(	Y( :Pred Formula Y ),	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), ));obj << Get Constraints;

```

### Get Factor Settings

**Sintaxis:** obj &lt;&lt; Get Factor Settings

**Descripción:** Devuelve la configuración del factor actual en forma de lista.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Get Factor Settings;

```

### Get Factor Settings Script

**Sintaxis:** obj &lt;&lt; Get Factor Settings Script

**Descripción:** Devuelve la configuración actual de los factores como una expresión que se puede utilizar en un script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Get Factor Settings Script;

```

### Get Objective

**Sintaxis:** obj &lt;&lt; Get Objective

**Descripción:** Devuelve el valor actual de la función objetivo en el perfilador personalizado.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Optimize;o = obj << Get Objective;Show( o );

```

### Get Objective Formula

**Sintaxis:** obj &lt;&lt; Get Objective Formula

**Descripción:** Devuelve la fórmula de la función objetivo como expresión en la salida del perfilador personalizado.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Optimize;form = obj << Get Objective Formula;Show( form );

```

### Get Simulator

**Sintaxis:** obj &lt;&lt; Get Simulator

**Descripción:** Devuelve una referencia al simulador.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator(	1,	Factors(		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),		SULFUR << Fixed( 2.25 )	),	Responses(		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,		Pred Formula ELONG << Add Random Noise( 1 ),		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )	));obj2 = obj << Get Simulator;obj2 << Simulation Experiment;

```

### Goal

**Sintaxis:** obj &lt;&lt; Goal( "Maximizar"|"Minimizar" )

### Link Profilers

**Sintaxis:** obj &lt;&lt; Link Profilers( state=0|1 )

**Descripción:** Vincula todos los perfiladores en un único informe, de forma que un cambio en un factor de un perfilador provoca que tal factor cambie a este valor en todos los demás perfiladores.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Prediction Profiler( 1 );obj << Contour Profiler( 1 );obj << Link Profilers( 1 );Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**Sintaxis:** obj &lt;&lt; Load Constraints from Table

**Descripción:** Carga las restricciones lineales desde una tabla de datos.

```jsl

dtlc = New Table( "Linear Constraints",	Add Rows( 2 ),	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) ));dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Load Constraints from Table( dtlc );obj << Profile at Boundary( "Stop at Boundaries" );

```

### Log Iterations

**Sintaxis:** obj &lt;&lt; Log Iterations( state=0|1 )

**Descripción:** Crea una nueva tabla de datos que contiene iteraciones del algoritmo de optimización.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );obj << Log Iterations( 1 );obj << Optimize;

```

### Max Cycles

**Sintaxis:** obj &lt;&lt; Max Cycles( number )

**Descripción:** Especifica el número máximo de ciclos dentro de cada trayecto en el algoritmo de optimización.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Max Cycles( 5 );obj << Optimize;

```

### MaxIter

**Sintaxis:** obj &lt;&lt; MaxIter( number )

**Descripción:** Especifica el número máximo de iteraciones dentro de cada trayecto en el algoritmo de optimización.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << MaxIter( 10 );obj << Optimize;

```

### Objective Formula

**Sintaxis:** obj &lt;&lt; Objective Formula

**Descripción:** Especifica la fórmula que se debe optimizar.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Objective Formula( :Pred Formula ABRASION + .5 * :Pred Formula MODULUS );Wait( 1 );obj << Optimize;obj << Get Objective Formula;

```

### Optimize

**Sintaxis:** obj &lt;&lt; Optimize

**Descripción:** Optimiza la configuración actual en el perfilador personalizado.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );Wait( 1 );obj << Optimize;

```

### Paste Settings Script

**Sintaxis:** obj &lt;&lt; Paste Settings Script

**Descripción:** Pega la configuración del perfilador del portapapeles en un perfilador de otro informe.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set to Data in Row( 4 );obj << Copy Settings Script;obj2 = Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj2 << Paste Settings Script;

```

### Predict for Another Table

**Sintaxis:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Descripción:** Agrega columnas de predicción a una tabla de datos especificada, utilizando los factores de dicha tabla. Esta opción solo está disponible para respuestas continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));dt2 = dt << Subset(	All rows,	columns( :SILICA, :SILANE, :SULFUR ),	Output Table( "Subset" ));obj << Predict For Another Table( dt2 );

```

### Prediction Profiler

**Sintaxis:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Prediction Profiler( 1 );

```

### Remember Settings

**Sintaxis:** obj &lt;&lt; Remember Settings

**Descripción:** Agrega un nodo de esquema al informe con los valores de la configuración de factores.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Remember Settings;

```

### Reset

**Sintaxis:** obj &lt;&lt; Reset

**Descripción:** Restablece cualquier cambio realizado a las variables de respuesta. Esta opción se encuentra activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );obj << Reset;

```

### Save Constraints to New Table

**Sintaxis:** obj &lt;&lt; Save Constraints to New Table

**Descripción:** Guarda las restricciones lineales existentes en una nueva tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Script(	"Constraint",	{1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6});obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Constraints to New Table;

```

### Save Constraints to Table Script

**Sintaxis:** obj &lt;&lt; Save Constraints to Table Script

**Descripción:** Guarda las restricciones lineales existentes en un script de tabla llamado Restricción.

```jsl

dtlc = New Table( "Linear Constraints",	Add Rows( 2 ),	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) ));dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Load Constraints from Table( dtlc );obj << Save Constraints to Table Script;

```

### Save Expanded Formulas

**Sintaxis:** obj &lt;&lt; Save Expanded Formulas

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene referencias de fórmulas resueltas dentro de las fórmulas utilizadas como variables Y para ver las variables subyacentes. Esta opción solo está disponible después de seleccionar la opción Expandir fórmulas intermedias en la ventana de inicio o de especificar el mensaje Expandir en el script del perfilador.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );obj << Save Expanded Formulas;

```

### Set Script

**Sintaxis:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Descripción:** Establece un script que se ejecuta cada vez que cambia un factor.

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Set Script( ProfileCallbackLog );obj << Term Value( :Silica( 1 ) );

```

### Set to Data in Row

**Sintaxis:** obj &lt;&lt; Set to Data in Row( row number )

**Descripción:** Asigna los valores de una fila de la tabla de datos a las variables X en el perfilador.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 2 );obj << Set to Data in Row( 4 );

```

### Show Formulas

**Sintaxis:** obj &lt;&lt; Show Formulas

**Descripción:** Abre una ventana de scripts que contiene JSL para todas las fórmulas que se estén perfilando.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Formulas;

```

### Simulator

**Sintaxis:** obj &lt;&lt; Simulator( state=0|1 )

**Descripción:** Muestra u oculta el Simulador.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Simulator( 1 );

```

### Surface Profiler

**Sintaxis:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de superficie.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Surface Profiler( 1 );

```

### Term Value

**Sintaxis:** obj &lt;&lt; Term Value( x1( number ),x2( number ), ... )

**Descripción:** Establece valores de términos específicos para factores en el perfilador personalizado.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Trips

**Sintaxis:** obj &lt;&lt; Trips( number )

**Descripción:** Especifica el número de inicios aleatorios en el algoritmo de optimización. Cada trayecto reinicia el algoritmo en un punto de partida diferente.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Trips( 10 );obj << Optimize;

```

### Unthreaded

**Sintaxis:** obj &lt;&lt; Unthreaded( state=0|1 )

**Descripción:** Para suprimir los múltiples subprocesos a la hora de evaluar los trazos del perfil, la cuadrícula de contorno y los trayectos del optimizador.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Desirability Functions( 1 );obj << Unthreaded( 1 );obj << Maximize Desirability;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

