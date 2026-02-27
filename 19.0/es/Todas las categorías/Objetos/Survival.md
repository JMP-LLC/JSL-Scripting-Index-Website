# Survival



## Columnas

### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );

```

### Censor

**Sintaxis:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Freq( _freqcol ) );

```

### Grouping

**Sintaxis:** obj &lt;&lt; Grouping( column )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Time to Event

**Sintaxis:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## Constructores asociados

### Survival

**Sintaxis:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**Descripción:** Calcula estimaciones de las funciones de supervivencia mediante el método del producto límite (Kaplan-Meier) para uno o más grupos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

## Mensajes del elemento

### Censor Code

**Sintaxis:** obj = Survival(...Censor Code( value=1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Identifica el valor de la columna Censura que indica las observaciones censuradas a la derecha. "1" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Survival( Y( :Time ), Censor( :Censor ), Censor Code( 0 ) );

```

### Competing Causes

**Sintaxis:** obj &lt;&lt; Competing Causes( column )

**Descripción:** Realiza una estimación del modelo de Weibull utilizando las causas especificadas para indicar un suceso de falla y otras causas para indicar observaciones censuradas. La distribución ajustada aparece como una línea discontinua en el gráfico de supervivencia.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );

```

### Connect Quantile Points

**Sintaxis:** obj &lt;&lt; Connect Quantile Points( state=0|1 )

**Descripción:** Muestra u oculta las líneas en el gráfico exponencial, el gráfico Weibull y el gráfico log-normal. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Connect Quantile Points( 0 );

```

### Estimate Survival Probability

**Sintaxis:** obj &lt;&lt; Estimate Survival Probability( [time1, time2, ...], Alpha( level ) )

**Descripción:** Estima las probabilidades de supervivencia y los intervalos de confianza para los valores de tiempo especificados mediante las distribuciones ajustadas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Survival Probability( [100, 200, 300], Alpha( 0.001 ) );

```

### Estimate Time Quantile

**Sintaxis:** obj &lt;&lt; Estimate Time Quantile( [p1, p2, ...], Alpha( level ) )

**Descripción:** Estima un cuantil de tiempo e intervalos de confianza para cada probabilidad de supervivencia especificada mediante las distribuciones ajustadas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Estimate Time Quantile( [0.5, 0.9, 0.95], Alpha( 0.01 ) );

```

### Exponential Fit

**Sintaxis:** obj &lt;&lt; Exponential Fit( state=0|1 )

**Descripción:** Muestra u oculta la tabla Estimaciones de los parámetros exponenciales. Esta opción también añade un ajuste lineal a la función de distribución acumulativa exponencial en el gráfico exponencial.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
Wait( 1 );
obj << Exponential Fit( 1 );

```

### Exponential Plot

**Sintaxis:** obj &lt;&lt; Exponential Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico exponencial, que muestra la probabilidad de falla exponencial acumulada por tiempo para cada grupo. Las líneas que son aproximadamente lineales empíricamente indican que es apropiado utilizar un modelo exponencial para un análisis posterior.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );

```

### Failure Plot

**Sintaxis:** obj &lt;&lt; Failure Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de fallas, que contiene curvas de fallas superpuestas (proporción que falla a lo largo del tiempo) para cada grupo. Un gráfico de fallas invierte el eje vertical para mostrar el número de fallas en lugar del número de supervivientes. Resulta útil en el análisis de confiabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );

```

### Fitted Distribution Plots

**Sintaxis:** obj &lt;&lt; Fitted Distribution Plots( state=0|1 )

**Descripción:** Muestra u oculta un conjunto de gráficos para cada distribución ajustada. El conjunto de gráficos incluye la función de supervivencia ajustada, la función de densidad ajustada y la función de riesgo ajustada. Si no ha realizado ningún ajuste, no aparecerá ningún gráfico.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Fit( 1 );
obj << Fitted Distribution Plots( 1 );

```

### Fitted Failure CI

**Sintaxis:** obj &lt;&lt; Fitted Failure CI( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza para cada grupo en el gráfico de fallas. Se representa un conjunto de intervalos para cada una de las distribuciones ajustadas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), Failure Plot( 1 ) );
obj << Weibull Fit( 1 );
obj << Fitted Failure CI( 1 );

```

### Fitted Quantile

**Sintaxis:** obj &lt;&lt; Fitted Quantile( state=0|1 )

**Descripción:** Muestra u oculta los ajustes en línea recta para cada grupo en el gráfico exponencial, el gráfico Weibull y el gráfico log-normal.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Plot( 1 );
obj << Exponential Fit( 1 );
Wait( 1 );
obj << Fitted Quantile( 0 );

```

### Fitted Quantile CI Lines

**Sintaxis:** obj &lt;&lt; Fitted Quantile CI Lines( state=0|1 )

**Descripción:** Muestra u oculta las bandas de confianza al 95 % para cada grupo en el gráfico exponencial, el gráfico de Weibull y el gráfico log-normal.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Lognormal Plot( 1 );
obj << Lognormal Fit( 1 );
obj << Fitted Quantile CI Lines( 1 );

```

### Fitted Quantile CI Shaded

**Sintaxis:** obj &lt;&lt; Fitted Quantile CI Shaded( state=0|1 )

**Descripción:** Muestra u oculta las regiones sombreadas de las bandas de confianza al 95 % para cada grupo en el gráfico exponencial, el gráfico de Weibull y el gráfico log-normal.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
obj << Weibull Fit( 1 );
obj << Fitted Quantile CI Shaded( 1 );

```

### Fitted Survival CI

**Sintaxis:** obj &lt;&lt; Fitted Survival CI( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza para cada grupo en el gráfico de supervivencia. Se representa un conjunto de intervalos para cada una de las distribuciones ajustadas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Exponential Fit( 1 );
obj << Fitted Survival CI( 1 );

```

### LogNormal Fit

**Sintaxis:** obj &lt;&lt; LogNormal Fit( state=0|1 )

**Descripción:** Muestra u oculta la tabla Estimaciones de los parámetros log-normales. Esta opción también agrega un ajuste lineal a la función de distribución acumulativa log-normal en el gráfico log-normal.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );
Wait( 1 );
obj << LogNormal Fit( 1 );

```

### LogNormal Plot

**Sintaxis:** obj &lt;&lt; LogNormal Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico log-normal, que muestra la probabilidad de falla log-normal acumulada por log(tiempo) para cada grupo. Las líneas que son aproximadamente lineales empíricamente indican que es apropiado utilizar un modelo log-normal para un análisis posterior.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << LogNormal Plot( 1 );

```

### Midstep Quantile Points

**Sintaxis:** obj &lt;&lt; Midstep Quantile Points( state=0|1 )

**Descripción:** Especifica que las posiciones de representación de Kaplan-Meier modificadas se utilizan en el gráfico exponencial, el gráfico de Weibull y el gráfico log-normal. Estas posiciones de trazado equivalen a tomar posiciones de escalón medio de la curva Kaplan-Meier, en lugar de posiciones de fondo de escalón. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Midstep Quantile Points( 0 );

```

### Plot Failure Instead of Survival

**Sintaxis:** obj = Survival(...Plot Failure instead of Surivival( state=0|1 )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Muestra un gráfico de probabilidad de falla en lugar de su gráfico inverso (un gráfico de probabilidad de supervivencia).

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Plot Failure instead of Survival( 1 )
);

```

### Save Estimates

**Sintaxis:** obj &lt;&lt; Save Estimates

**Descripción:** Crea una tabla de datos nueva que contiene estimaciones de supervivencia y fallas, intervalos de confianza y otros estadísticos de distribución para cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Estimates;

```

### Show Combined

**Sintaxis:** obj &lt;&lt; Show Combined( state=0|1 )

**Descripción:** Muestra u oculta las funciones de supervivencia combinadas Kaplan-Meier sobre los gráficos de supervivencia y de fallas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Confid Interval

**Sintaxis:** obj &lt;&lt; Show Confid Interval( state=0|1 )

**Descripción:** Muestra u oculta las bandas de confianza puntuales al 95 % para las funciones de supervivencia de Kaplan-Meier en el gráfico de supervivencia y el gráfico de fallas. Esta opción también muestra bandas de confianza para las funciones de supervivencia combinadas cuando se selecciona la opción Mostrar grupos combinados.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Confid Interval( 1 );
Wait( 1 );
obj << Show Combined( 1 );

```

### Show Kaplan Meier

**Sintaxis:** obj &lt;&lt; Show Kaplan Meier( state=0|1 )

**Descripción:** Muestra u oculta las funciones de supervivencia Kaplan-Meier para cada grupo sobre los gráficos de supervivencia y de fallas. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival(
	Y( :days ),
	Censor( :Censor ),
	Grouping( :Group ),
	Show Kaplan Meier( 0 )
);
Wait( 1 );
obj << Show Kaplan Meier( 1 );

```

### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de supervivencia y el gráfico de fallas. Las fallas aparecen al final de los pasos y las observaciones censuradas se indican mediante puntos encima de los pasos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Failure Plot( 1 );
Wait( 1 );
obj << Show Points( 1 );

```

### Show Shaded Pointwise CI

**Sintaxis:** obj &lt;&lt; Show Shaded Pointwise CI( state=0|1 )

**Descripción:** Muestra u oculta las regiones sombreadas de las bandas de confianza puntuales al 95 % para las funciones de supervivencia de Kaplan-Meier en el gráfico de supervivencia y el gráfico de fallas. Esta opción también muestra regiones de confianza sombreadas para las funciones de supervivencia combinadas cuando se selecciona la opción Mostrar grupos combinados.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Pointwise CI( 1 );

```

### Show Shaded Simultaneous CI

**Sintaxis:** obj &lt;&lt; Show Shaded Simultaneous CI( state=0|1 )

**Descripción:** Muestra u oculta las regiones sombreadas de las bandas de confianza al 95 % simultáneas para las funciones de supervivencia de Kaplan-Meier en el gráfico de supervivencia y el gráfico de fallas. Esta opción también muestra bandas de confianza para las funciones de supervivencia combinadas cuando se selecciona la opción Mostrar grupos combinados.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Shaded Simultaneous CI( 1 );

```

### Show Simultaneous CI

**Sintaxis:** obj &lt;&lt; Show Simultaneous CI( state=0|1 )

**Descripción:** Muestra u oculta las bandas de confianza al 95 % simultáneas para las funciones de supervivencia de Kaplan-Meier en el gráfico de supervivencia y el gráfico de fallas. Esta opción también muestra bandas de confianza para las funciones de supervivencia combinadas cuando se selecciona la opción Mostrar grupos combinados.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Show Simultaneous CI( 1 );

```

### Survival Plot

**Sintaxis:** obj &lt;&lt; Survival Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de supervivencia, que contiene curvas de supervivencia superpuestas para cada grupo. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Survival Plot( 0 );
Wait( 1 );
obj << Survival Plot( 1 );

```

### Weibull Fit

**Sintaxis:** obj &lt;&lt; Weibull Fit( state=0|1 )

**Descripción:** Muestra u oculta las tablas Estimaciones de los parámetros de valores extremos y Estimaciones de parámetros de Weibull. Esta opción también agrega un ajuste lineal a la función de distribución acumulativa de Weibull en el gráfico de Weibull.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );
Wait( 1 );
obj << Weibull Fit( 1 );

```

### Weibull Plot

**Sintaxis:** obj &lt;&lt; Weibull Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de Weibull, que muestra la probabilidad de falla de Weibull acumulada por log(tiempo) para cada grupo. Las líneas que son aproximadamente lineales empíricamente indican que es apropiado utilizar un modelo de Weibull para un análisis más detallado.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Weibull Plot( 1 );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Survival(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Competing Causes

### Mensajes del elemento

#### Hazard Plot

**Sintaxis:** obj &lt;&lt; Hazard Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de las funciones de riesgo para los datos en función del análisis de causas competitivas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Hazard Plot( 1 );

```

#### Omit Causes

**Sintaxis:** obj &lt;&lt; Omit Causes( cause1, &lt;cause2&gt;, ... )

**Descripción:** Le permite quitar valores de causa específicos del análisis. Las estimaciones de supervivencia se vuelven a calcular automáticamente. Esta opción se puede utilizar para ilustrar la alternativa en la que las causas específicas ya no son peligrosas.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Omit Causes( "accident" );

```

#### Save Cause Coordinates

**Sintaxis:** obj &lt;&lt; Save Cause Coordinates

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva se calcula como log(-log(Surv)). Este valor a menudo se representa frente a la variable de tiempo para los distintos valores de una variable de agrupación, como el código del tipo de falla.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Save Cause Coordinates;

```

#### Simulate

**Sintaxis:** obj &lt;&lt; Simulate( number )

**Descripción:** Crea una tabla de datos nueva que contiene información sobre el tiempo simulado y la causa. La distribución de Weibull ajustada se utiliza para simular los nuevos datos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Simulate( 1000 );

```

#### Weibull Lines

**Sintaxis:** obj &lt;&lt; Weibull Lines( state=0|1 )

**Descripción:** Muestra u oculta líneas de Weibull en el gráfico de supervivencia.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );
obj << Competing Causes( :Failure Cause );
obj << Weibull Lines( 1 );

```

