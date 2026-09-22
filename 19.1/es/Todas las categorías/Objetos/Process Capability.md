# Process Capability



## Columnas

### By

**Sintaxis:** obj = Process Capability(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Grouping

**Sintaxis:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**Descripción:** Especifica columnas como variables de agrupación.

**Ejemplo 1**

```jsl

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );dt << Process Capability(	Process Variables( :pH, :Salt Concentration, :Moisture Content ),	Grouping( :Cheese Type ),	Spec Limits( Use Limits Table( dtLimits ) ),	Moving Range Method( Average of Moving Ranges ),	Goal Plot( 1 ),	Capability Index Plot( 1 ),	Process Performance Plot( 0 ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),	Grouping( :site ));

```

### Process Variables

**Sintaxis:** obj = Process Capability(...Process Variables( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas de datos del proceso que contienen las mediciones que se van a analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Constructores asociados

### Process Capability

**Sintaxis:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Descripción:** Calcula un análisis de capacidad del proceso para cada proceso y crea gráficos útiles para analizar la capacidad de varios procesos a la vez. También se pueden definir límites de especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

## Mensajes del elemento

### AIAG (Ppk) Labeling

**Sintaxis:** obj &lt;&lt; "AIAG (Ppk) Labeling"n( state=0|1 )

**Descripción:** Activa o desactiva el etiquetado de AIAG de los índices de capacidad cambiando la etiqueta "Cp" a "Pp". Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] ));obj << Individual Detail Reports( 1 );Wait( 1 );obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**Sintaxis:** obj &lt;&lt; Capability Box Plots( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja para cada proceso. Para crear diagramas de caja, los valores para cada proceso se centran según su objetivo y se escalan según sus límites de especificación. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ));Wait( 1 );obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**Sintaxis:** obj &lt;&lt; Capability Index Plot( state=0|1, &lt;plot options&gt; )

**Descripción:** Muestra u oculta un gráfico que representa el Ppk general de cada proceso. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7	),	Capability Index Plot( 0 ),	Goal Plot( 0 ));Wait( 1 );obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**Sintaxis:** obj &lt;&lt; Color Out of Spec Values( state=0|1 )

**Descripción:** Colorea las celdas de la tabla de datos correspondientes a valores fuera de la especificación. Las celdas con valores por debajo del límite inferior de especificación (LSL) se muestran en rojo y las celdas con valores por encima del límite superior de especificación (USL) se muestran en azul.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Color Out of Spec Values( 1 );

```

### Get Limits

**Sintaxis:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**Descripción:** Carga los límites de especificación desde una tabla de datos de límites.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Get Limits( dt2 ) ));

```

### Goal Plot

**Sintaxis:** obj &lt;&lt; Goal Plot( state=0|1, &lt;plot options&gt; )

**Descripción:** Muestra u oculta un gráfico con un punto para cada proceso. La media estandarizada a la especificación se encuentra en el eje horizontal y la desviación estándar estandarizada a la especificación en el eje vertical. Los puntos que se muestran por encima del arco de portería representan procesos que están por debajo del umbral Ppk (Cpk) especificado. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Goal Plot( 0 ));Wait( 1 );obj << Goal Plot( 1 );

```

### Individual Detail Reports

**Sintaxis:** obj &lt;&lt; Individual Detail Reports( state=0|1 )

**Descripción:** Muestra u oculta un informe de capacidad de detalles individuales independiente para cada proceso.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**Sintaxis:** obj &lt;&lt; Individual Detail Reports Cutoff( number=1 )

**Descripción:** Muestra los informes de detalles individuales y oculta el gráfico de portería y los diagramas de caja de capacidad si el número de variables del proceso es inferior o igual al valor límite. "1" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**Sintaxis:** obj &lt;&lt; Make Goal Plot Summary Table

**Descripción:** Crea una nueva tabla de datos que contiene las coordenadas de los puntos intra y generales que se representan en el gráfico de portería.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Make Goal Plot Summary Table;

```

### Order By

**Sintaxis:** obj &lt;&lt; Order By( "Orden inicial"|"Invertir orden inicial"|"Cpk de sigma intra ascendente"|"Cpk de sigma intra descendente"|"Ppk de sigma global ascendente"|"Ppk de sigma global descendente" )

**Descripción:** Reorganiza todos los diagramas de caja, informes de resumen e informes de detalles individuales en el orden especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Within Sigma Summary Report( 1 );Wait( 1 );obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**Sintaxis:** obj &lt;&lt; Overall Sigma Normalized Box Plots( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja para cada proceso. Los valores de los diagramas de caja están centrados por la media general y escalados según la estimación general de la desviación estándar.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**Sintaxis:** obj &lt;&lt; Overall Sigma Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe de resumen de los índices de capacidad. Los índices de capacidad se calculan utilizando la estimación general de la desviación estándar.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**Sintaxis:** obj &lt;&lt; Process Performance Plot( state=0|1, &lt;plot options&gt; )

**Descripción:** Muestra u oculta un gráfico de cuatro cuadrantes de la Ppk de capacidad general frente a la estabilidad.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ),);obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**Sintaxis:** obj &lt;&lt; Save Distributions as Column Properties

**Descripción:** Guarda la distribución que se utiliza para calcular la capacidad como propiedad de columna Distribución de la capacidad de proceso. Se guarda una propiedad de columna para cada variable de proceso en el análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**Sintaxis:** obj &lt;&lt; Save In Spec Indicator Formulas

**Descripción:** Crea una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene un valor que indica si una fila está o no dentro de los límites de especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**Sintaxis:** obj &lt;&lt; Save Spec Limits as Column Properties

**Descripción:** Guarda los límites de especificación en una propiedad de columna para cada variable de proceso en el análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**Sintaxis:** obj &lt;&lt; Save Spec Limits to New Table

**Descripción:** Crea una nueva tabla de datos que contiene los límites de especificación, la importancia de proceso y las distribuciones para cada variable del proceso. La tabla está en un formato alto y contiene una fila para cada variable del proceso. La importancia del proceso y el tipo de distribución solo se guardan cuando procede.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**Sintaxis:** obj &lt;&lt; Select Out of Spec Values( state=0|1 )

**Descripción:** Selecciona todas las filas y columnas de la tabla de datos que contienen al menos un valor fuera de los límites de especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) ));obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**Sintaxis:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**Descripción:** Carga los límites de especificación desde una tabla de datos de límites.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE, :CO, :SO2, :NO ),	Spec Limits( Use Limits Table( dt2 ) ));

```

### Within Sigma Normalized Box Plots

**Sintaxis:** obj &lt;&lt; Within Sigma Normalized Box Plots( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que contiene un diagrama de caja para cada proceso. Los valores de los diagramas de caja están centrados por la media y se dividen por la estimación de subgrupo intra de la desviación estándar.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**Sintaxis:** obj &lt;&lt; Within Sigma Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe de resumen de los índices de capacidad. Los índices de capacidad se calculan utilizando la estimación de subgrupo intra de la desviación estándar. Solo se muestran resultados para las variables que tengan distribuciones normales.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**Sintaxis:** obj &lt;&lt; "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que contiene un diagrama de caja para cada proceso. Los valores de los diagramas de caja están centrados en la media y divididos según la estimación grupo intra de la desviación estándar o, si se especifica, según la estimación inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**Sintaxis:** obj &lt;&lt; "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**Descripción:** Muestra u oculta un informe de resumen de los índices de capacidad. Los índices de capacidad se calculan utilizando la estimación de subgrupo intra de la desviación estándar o, si se especifica, la estimación de grupo inter e intra. Esta opción solo está disponible cuando se selecciona la opción Calcular capacidad inter e intra para al menos un proceso en la ventana de inicio.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 0 );obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### Mensajes del elemento

#### Parametric Fit Confidence Limits Shading

**Sintaxis:** scrobj &lt;&lt; Parametric Fit Confidence Limits Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de confianza del ajuste paramétrico.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**Sintaxis:** scrobj &lt;&lt; Parametric Fit Line( state=0|1 )

**Descripción:** Muestra u oculta la línea del ajuste paramétrico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Sintaxis:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Descripción:** Muestra u oculta los límites de confianza empíricos simultáneos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Sintaxis:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de confianza empíricos simultáneos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Lognormal,			Probability Plots(				1,				Lognormal Probability Plot(					Simultaneous Empirical Confidence Limits Shading( 0 )				)			)		)	)});Wait( 1 );scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### Mensajes del elemento

#### Comparison Details

**Sintaxis:** scrobj &lt;&lt; Comparison Details( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene los valores AICc, BIC y -2 Log-verosimilitud para cada distribución. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Details( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**Sintaxis:** scrobj &lt;&lt; Comparison Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma de la comparación de distribuciones. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1,			<<Fit Normal,			<<Fit Gamma,			<<Fit Johnson,			<<Fit Lognormal,			<<Fit Weibull,			Comparison Histogram( 0 )		)	)});Wait( 1 );scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Beta )

**Descripción:** Muestra los estadísticos de ajuste de la distribución beta en el informe de detalles de la comparación y la curva de densidad en el histograma.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/cities.jmp" );obj = dt << Process Capability(	Process Variables( :OZONE ),	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),	Individual Detail Reports( 1 ),	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Exponential )

**Descripción:** Muestra los estadísticos de ajuste de la distribución exponencial en el informe de detalles de la comparación y la curva de densidad en el histograma.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Gamma )

**Descripción:** Muestra los estadísticos de ajuste de la distribución gamma en el informe de detalles de la comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Johnson )

**Descripción:** Muestra los estadísticos de ajuste de la distribución de Johnson en el informe de detalles de la comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Largest Extreme Value )

**Descripción:** Muestra los estadísticos de ajuste de distribución del valor extremo más alto en el informe de detalles de comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Lognormal )

**Descripción:** Muestra los estadísticos de ajuste de la distribución log-normal en el informe de detalles de la comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Nonparametric )

**Descripción:** Muestra el control deslizante del ancho de banda kernel de la distribución no paramétrica y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Normal )

**Descripción:** Muestra los estadísticos de ajuste de la distribución normal en el informe de detalles de la comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});

```

#### Fit SHASH

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit SHASH )

**Descripción:** Muestra los estadísticos de ajuste de la distribución SHASH en el informe de detalles de la comparación y la curva de densidad en el histograma.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Smallest Extreme Value )

**Descripción:** Muestra los estadísticos de ajuste de distribución del valor extremo más bajo en el informe de detalles de comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Fit Weibull )

**Descripción:** Muestra los estadísticos de ajuste de la distribución de Weibull en el informe de detalles de la comparación y la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 2 Normals )

**Descripción:** Muestra los estadísticos de ajuste de la mezcla de 2 distribuciones normales en el informe de detalles de la comparación y la curva de densidad en el histograma.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( 1, &lt;&lt;Mixture of 3 Normals )

**Descripción:** Muestra los estadísticos de ajuste de la mezcla de 3 distribuciones normales en el informe de detalles de la comparación y la curva de densidad en el histograma.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**Sintaxis:** scrobj &lt;&lt; Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**Descripción:** Reordena el informe de detalles de la comparación. Se puede reordenar por AICc, BIC o -2 log-verosimilitud.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis(		Compare Distributions(			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,		)	)});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**Sintaxis:** scrobj &lt;&lt; Probability Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de probabilidad de la comparación de distribuciones.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )});Wait( 1 );scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### Mensajes del elemento

#### Show Between-and-Within Sigma Density

**Sintaxis:** scrobj &lt;&lt; "Show Between-and-Within Sigma Density"n( state=0|1 )

**Descripción:** Muestra u oculta la curva de densidad que utiliza el valor sigma intra en el histograma. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Within Subgroup Variation( Average of Unbiased Standard Deviations ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**Sintaxis:** scrobj &lt;&lt; Show Count Axis( state=0|1 )

**Descripción:** Muestra u oculta un eje de conteo a la derecha del marco del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**Sintaxis:** scrobj &lt;&lt; Show Density Axis( state=0|1 )

**Descripción:** Muestra u oculta un eje de densidad a la derecha del marco del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**Sintaxis:** scrobj &lt;&lt; Show Overall Sigma Density( state=0|1 )

**Descripción:** Muestra u oculta la curva de densidad que utiliza el valor sigma global en el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Overall Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**Sintaxis:** scrobj &lt;&lt; Show Spec Limits( state=0|1 )

**Descripción:** Muestra u oculta los límites de especificación superior e inferior en el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Spec Limits( 1 );

```

#### Show Target

**Sintaxis:** scrobj &lt;&lt; Show Target( state=0|1 )

**Descripción:** Muestra u oculta la línea objetivo en el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**Sintaxis:** scrobj &lt;&lt; Show Within Sigma Density( state=0|1 )

**Descripción:** Muestra u oculta la curva de densidad que utiliza el valor sigma intra en el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{(:Gap[:Date]) << Process Capability Analysis(		Histogram( 1, Show Within Sigma Density( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Histogram"] << get scriptable object);scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### Mensajes del elemento

#### Capability

**Sintaxis:** scrobj &lt;&lt; Capability( state=0|1 )

**Descripción:** Muestra u oculta los índices de capacidad. Los índices de capacidad originales están basados en el valor sigma global. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Capability( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Capability( 1 );

```

#### Nonconformance

**Sintaxis:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Descripción:** Muestra u oculta la disconformidad. Los valores originales de disconformidad se basan en el valor de sigma global. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, Nonconformance( 0 ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**Sintaxis:** scrobj &lt;&lt; Revert to Original Values

**Descripción:** Revierte el gráfico de capacidad interactivo a sus valores originales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**Sintaxis:** scrobj &lt;&lt; Save New Spec Limits as a Column Property

**Descripción:** Guarda los nuevos límites de especificación en una propiedad de columna en la tabla de datos originales.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis(		Process Summary( 0 ),		Overall Sigma Capability( 0 ),		Nonconformance( 0 ),		Within Sigma Capability( 0 ),		Histogram( 0 ),		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )	)});Wait( 1 );scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### Mensajes del elemento

#### Normal Fit Confidence Limits Shading

**Sintaxis:** scrobj &lt;&lt; Normal Fit Confidence Limits Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de confianza del ajuste normal en el gráfico de probabilidad normal. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**Sintaxis:** scrobj &lt;&lt; Normal Fit Line( state=0|1 )

**Descripción:** Muestra u oculta la línea de ajuste normal en el gráfico de probabilidad normal. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Normal Fit Line( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**Sintaxis:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits( state=0|1 )

**Descripción:** Muestra u oculta los límites de confianza empíricos simultáneos en el gráfico de probabilidad del informe Capacidad del proceso. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**Sintaxis:** scrobj &lt;&lt; Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de confianza empíricos simultáneos en el gráfico de probabilidad del informe Capacidad del proceso. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis(		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )	)});Wait( 2 );scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### Mensajes del elemento

#### Between-and-Within Sigma Capability

**Sintaxis:** scrobj &lt;&lt; "Between-and-Within Sigma Capability"n( state=0|1 )

**Descripción:** Muestra u oculta los índices de capacidad que utilizan el valor sigma inter e intra. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Capability"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**Sintaxis:** scrobj &lt;&lt; "Between-and-Within Sigma Target Index"n( state=0|1 )

**Descripción:** Muestra u oculta una estimación del índice objetivo que se basa en el valor de sigma inter e intra.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Target Index"n( 1 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**Sintaxis:** scrobj &lt;&lt; "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**Descripción:** Muestra u oculta los índices de benchmark Z que utilizan el valor sigma inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] & Between ),	Individual Detail Reports( 1 ),	{(:Gap[:Date] & Between) << Process Capability Analysis(		"Between-and-Within Sigma Z Benchmark"n( 0 )	)});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**Sintaxis:** scrobj &lt;&lt; Compare Distributions( state=0|1, &lt; &lt;&lt;distribution options &gt; )

**Descripción:** Muestra u oculta el panel de control para comparar distribuciones del proceso.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 0 ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Lognormal ) ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	Capability Box Plots( 1 ),	Capability Index Plot( 1 ),	{(:Process 1 & Dist( Lognormal )) <<	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;scrobj << Compare Distributions(	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull);

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 ),	Moving Range Method( Average of Moving Ranges ),	Individual Detail Reports( 1 ),	{:Process 1 << Process Capability Analysis(		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )	)});Wait( 1 );scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**Sintaxis:** scrobj &lt;&lt; Fix Parameters( vector )

**Descripción:** Fija determinados parámetros a los valores especificados y vuelve a estimar el resto.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Process 1 & Dist( Weibull ) ),	Individual Detail Reports( 1 ),	{(:Process 1 & Dist( Weibull )) <<	Process Capability Analysis( Fix Parameters( [11, .] ) )});Wait( 1 );scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;scrobj << Fix Parameters( [., .] );

```

#### Histogram

**Sintaxis:** scrobj &lt;&lt; Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma de los datos del proceso en el Informe de detalles individuales. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**Sintaxis:** scrobj &lt;&lt; Interactive Capability Plot( state=0|1 )

**Descripción:** Muestra u oculta un informe de capacidad interactivo que permite explorar cómo afectan a la capacidad los cambios del proceso o de los límites de especificación.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables( :PNP1 ),	Individual Detail Reports( 1 ),	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )});Wait( 1 );scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**Sintaxis:** scrobj &lt;&lt; Nonconformance( state=0|1 )

**Descripción:** Muestra u oculta un informe del porcentaje observado y esperado de observaciones que quedan fuera de los límites de especificación. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**Sintaxis:** scrobj &lt;&lt; Nonparametric Density( state=0|1 )

**Descripción:** Muestra u oculta el informe Densidad no paramétrica, que proporciona el ancho de banda de kernel que se utiliza para ajustar la distribución no paramétrica. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Purity & Dist( Nonparametric ) ),	Individual Detail Reports( 1 ),	{(:Purity & Dist( Nonparametric )) <<	Process Capability Analysis( Nonparametric Density( 0 ) )});Wait( 1 );scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**Sintaxis:** scrobj &lt;&lt; Normal Probability Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de probabilidad normal.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),);Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**Sintaxis:** scrobj &lt;&lt; Overall Sigma Capability( state=0|1 )

**Descripción:** Muestra u oculta los índices de capacidad que están basados en el valor sigma global. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**Sintaxis:** scrobj &lt;&lt; Overall Sigma Z Benchmark( state=0|1 )

**Descripción:** Muestra u oculta los índices benchmark Z que están basados en el valor sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**Sintaxis:** scrobj &lt;&lt; Parameter Estimates( state=0|1 )

**Descripción:** Muestra u oculta el informe de estimaciones de los parámetros para las distribuciones paramétricas no normales. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );obj = dt << Process Capability(	Process Variables( :Thickness & Dist( Johnson ) ),	Individual Detail Reports( 1 ),	{(:Thickness & Dist( Johnson )) <<	Process Capability Analysis( Parameter Estimates( 0 ) )});Wait( 1 );scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**Sintaxis:** scrobj &lt;&lt; Process Summary( state=0|1 )

**Descripción:** Muestra u oculta los estadísticos de resumen del proceso. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**Sintaxis:** scrobj &lt;&lt; Within Sigma Capability( state=0|1 )

**Descripción:** Muestra u oculta los índices de capacidad y sus intervalos de confianza que están basados en el valor de sigma intra. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**Sintaxis:** scrobj &lt;&lt; Within Sigma Target Index( state=0|1 )

**Descripción:** Muestra u oculta una estimación del índice objetivo que se basa en el valor de sigma intra.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**Sintaxis:** scrobj &lt;&lt; Within Sigma Z Benchmark( state=0|1 )

**Descripción:** Muestra u oculta los índices benchmark Z que están basados en el valor sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );obj = dt << Process Capability(	Process Variables( :Gap[:Date] ),	Individual Detail Reports( 1 ),	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )});Wait( 1 );scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### Mensajes del elemento

#### Capability Lines

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Descripción:** Establece el valor Ppk (Cpk) que controla las líneas del triángulo de portería en el Gráfico de portería. Este valor también aparece en el cuadro de edición de Ppk (Cpk). "1.0" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Capability Lines( 1.5 ) );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); scrobj &lt;&lt; Defect Rate Contour( number=0.0001 )

**Descripción:** Muestra u oculta el contorno de la tasa de defecto especificada. "0.0001" de forma predeterminada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas de los puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta etiquetas para los puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas de los puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma intra o, si se especifica, la estimación de sigma inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);obj << Goal Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	Show Overall Sigma Points( 0 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Descripción:** Muestra u oculta el sombreado del nivel Ppk (Cpk) en el gráfico de portería. Si p representa el objetivo de Ppk (Cpk) introducido en el cuadro de edición, los procesos con un valor de Ppk (Cpk) superior a 2\*p se muestran sombreados en verde, los procesos con un valor de Ppk (Cpk) inferior a p se muestran sombreados en rojo y los procesos con un valor de Ppk (Cpk) superior a p e inferior a 2\*p se muestran sombreados en amarillo.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));obj << Goal Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma global. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),);Wait( 1 );obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Sintaxis:** obj &lt;&lt; Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de portería. Los puntos se calculan utilizando la estimación de sigma intra o, si se especifica, la estimación de sigma inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));Wait( 1 );obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Goal Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### Mensajes del elemento

#### Capability Lines

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Capability Lines( number=1.0 ) ); scrobj &lt;&lt; Capability Lines( number=1.0 )

**Descripción:** Establece el valor Ppk (Cpk) que controla la línea de referencia Ppk (Cpk) en el gráfico de índices de capacidad. Este valor también aparece en el cuadro de edición de Ppk (Cpk). "1.0" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal )	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Overall Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta etiquetas para los puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma global.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Label Within Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta etiquetas para los puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Label Within Sigma Points( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas de los puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma intra o, si se especifica, la estimación de sigma inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	"Show Within or Between-and-Within Sigma Points"n( 1 ),	"Label Within or Between-and-Within Sigma Points"n( 1 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Shade Levels( state=0|1 ) ); scrobj &lt;&lt; Shade Levels( state=0|1 )

**Descripción:** Muestra u oculta el sombreado del nivel Ppk (Cpk) en el gráfico de índices de capacidad. Si p representa el valor Ppk (Cpk) introducido en el cuadro de edición, los procesos con un valor de Ppk (Cpk) superior a 2\*p se sombrean en verde, los procesos con un valor de Ppk (Cpk) inferior a p se sombrean en rojo y los procesos con un valor de Ppk (Cpk) superior a p e inferior a 2\*p se sombrean en amarillo.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Shade Levels( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Overall Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma global. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot(	1,	Show Within Sigma Points( 1 ),	Show Overall Sigma Points( 0 ));Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); scrobj &lt;&lt; Show Within Sigma Points( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma intra.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );obj = dt << Process Capability(	Process Variables(		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7	),	Moving Range Method( Average of Moving Ranges ),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**Sintaxis:** obj &lt;&lt; Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); scrobj &lt;&lt; "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**Descripción:** Muestra u oculta puntos en el gráfico de índices de capacidad. Los puntos se calculan utilizando la estimación de sigma intra o, si se especifica, la estimación de sigma inter e intra.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Goal Plot( 0 ),	Process Performance Plot( 0 ));obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );Wait( 1 );scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### Mensajes del elemento

#### Capability Boundary

**Sintaxis:** obj &lt;&lt; Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); scrobj &lt;&lt; Capability Boundary( number=1.0 )

**Descripción:** Establece el valor Ppk de capacidad global que controla los límites del gráfico de rendimiento de procesos para determinar si es capaz o no es capaz. Este valor también aparece en el cuadro de edición de Ppk global. "1.0" de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Capability Boundary( 1 );

```

#### Label Points

**Sintaxis:** obj &lt;&lt; Process Performance Plot( 1, Label Points( state=0|1 ) ); scrobj &lt;&lt; Label Points( state=0|1 )

**Descripción:** Muestra u oculta los nombres de proceso en forma de etiquetas para los puntos en el gráfico de rendimiento de procesos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Label Points( 1 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**Sintaxis:** obj &lt;&lt; Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); scrobj &lt;&lt; Show Within Cpk Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Cpk intra en el gráfico de rendimiento de procesos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );Wait( 1 );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**Sintaxis:** obj &lt;&lt; Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); scrobj &lt;&lt; Stability Boundary( number=1.25 )

**Descripción:** Establece el valor de la razón de estabilidad que controla los límites del gráfico de rendimiento del proceso para determinar si es estable o inestable. "1.25" de forma predeterminada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	),	Capability Box Plots( 0 ),	Process Performance Plot( 1 ),	Goal Plot( 0 ),	Capability Index Plot( 0 ));Wait( 1 );obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);Wait( 1 );scrobj << Stability Boundary( 1.25 );

```

