# Profiler



## Columnas

### Noise Factors

**Sintaxis:** obj = Profiler(...&lt;Noise Factors( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica factores de ruido, que deben ser columnas que sean ingredientes de las columnas de fórmulas. Los factores de ruido se utilizan para estudiar la robustez (o planitud) con respecto a la variación transmitida desde estos factores. El perfilador resultante incluye las derivadas de las fórmulas con respecto a los factores de ruido.

**Ejemplo de perfilador**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Ejemplo de perfilador de contorno**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**Ejemplo de perfilador de mezcla**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**Ejemplo de perfilador personalizado**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

### Prediction Formula

**Sintaxis:** obj = Profiler(...Prediction Formula( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas de respuesta que contienen fórmulas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

### Y

**Sintaxis:** obj = Profiler(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas de respuesta que contienen fórmulas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

## Constructores asociados

### Profiler

**Sintaxis:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Descripción:** Crea un gráfico interactivo que le permite explorar cómo cambia una respuesta predicha al cambiar la configuración de los factores. Para cada factor, el perfilador muestra trazados de predicción basados en las fórmulas de predicciones guardadas y restricciones lineales, e ilustra cómo cambia la respuesta con respecto a ese factor. El argumento Expandir corresponde a la opción Expandir fórmulas intermedias en la ventana de inicio.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler(
	Y( predCol, stderrCol ),
	Profiler( 1, Confidence Intervals( 1 ), ),
	Use SE Formula( 1 )
);

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

## Mensajes del elemento

### Adapt Y Axis

**Sintaxis:** obj &lt;&lt; Adapt Y Axis( state=0|1 )

**Descripción:** Vuelve a escalar el eje vertical si la respuesta está fuera del rango del eje, de modo que se incluya el rango de la respuesta.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize Desirability;
Wait( 1 );
obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**Sintaxis:** obj &lt;&lt; Add Shapley graph scripts to data table( state=0|1 )

**Descripción:** Agrega scripts del diagrama de barras del Constructor de gráficos JSL de los valores de Shapley en función de las filas de cada respuesta del modelo.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Add Shapley graph scripts to data table( 1 ),
	Save Shapley Values
));

```

### Animation

**Sintaxis:** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**Descripción:** Inicia o detiene la animación del perfilador. También puede especificar cómo recorre la animación las combinaciones de factores.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**Sintaxis:** obj &lt;&lt; Append Settings to Table

**Descripción:** Guarda la configuración del perfilador actual como una nueva fila al final de la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Append Settings to Table;

```

### Arrange in Rows

**Sintaxis:** obj &lt;&lt; Arrange in Rows( number )

**Descripción:** Especifica el número de gráficos que aparecen en una fila.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**Sintaxis:** obj &lt;&lt; Broadcast Factor Settings

**Descripción:** Envía la configuración de los factores para el perfilador actual a todos los demás perfiladores. Esta opción no vincula los perfiladores.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Colorize

**Sintaxis:** obj &lt;&lt; Colorize( matrix )

**Descripción:** Especifica una matriz de proporciones entre 0 para las no coloreadas y 1 para las de color rojo oscuro. Las filas y columnas de la matriz corresponden a las variables Y y X en el Perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**Sintaxis:** subobj &lt;&lt; Colorize Profiler

**Descripción:** Colorea las celdas en el perfilador según los índices de importancia del Efecto total usando una escala de intensidad de rojo a blanco.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Colorize Profiler;

```

### Combinations

**Sintaxis:** obj &lt;&lt; Combinations( "Mixto"|"Dos vías"|"Múltiples vías" )

**Descripción:** Especifica los tipos de interacciones que se muestran como curvas de interacción superpuestas en el perfilador.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**Sintaxis:** obj &lt;&lt; Compute Shapley values for all rows( state=0|1 )

**Descripción:** Calcula los valores de Shapley para todas las filas de la tabla de datos, excluidas y no excluidas.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Compute Shapley values for all rows( 1 ),
	Save Shapley Values
));

```

### Conditional Predictions

**Sintaxis:** obj &lt;&lt; Conditional Predictions( state=0|1 )

**Descripción:** Incluye efectos aleatorios al formular el valor predicho y los perfiles. Esta opción solo está disponible en la personalidad Ajuste mixto de la plataforma Ajuste del modelo cuando se incluyen los efectos aleatorios en el modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj1 = dt << Run Script( "Repeated Measures Model" );
obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**Sintaxis:** obj &lt;&lt; Confidence Intervals( state=0|1 )

**Descripción:** Muestra u oculta intervalos de confianza el 95% para las medias simuladas en las curvas del gráfico del perfilador. Solo está disponible si se especifica una fórmula de error estándar en la ventana de inicio.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj1 = dt << Run Script( "RSM for 4 Responses" );
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION,
		:Pred SE MODULUS
	)
);
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Contour Profiler

**Sintaxis:** obj &lt;&lt; Contour Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de contorno.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Contour Profiler( 1 );

```

### Converge Limit

**Sintaxis:** obj &lt;&lt; Converge Limit( number )

**Descripción:** Especifica el criterio de convergencia para el algoritmo de optimización. Si el criterio de convergencia es menor que este valor durante dos iteraciones consecutivas, el algoritmo se detiene.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Converge limit( 0.0001 );
obj << Optimize;

```

### Copy Settings Script

**Sintaxis:** obj &lt;&lt; Copy Settings Script

**Descripción:** Copia la configuración actual de los factores en el portapapeles. La configuración se puede pegar posteriormente en otro perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**Sintaxis:** obj &lt;&lt; Custom Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador personalizado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Custom Profiler( 1 );

```

### Data Points

**Sintaxis:** obj &lt;&lt; Data Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos individuales en el gráfico del perfilador de predicción. Los puntos de datos se atenúan en función de la distancia a la que se encuentren del plano de cada perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Points( 1 );

```

### Default N Grid Points

**Sintaxis:** obj &lt;&lt; Default N Grid Points( number )

**Descripción:** Establece el número de niveles para cada factor continuo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Default N Grid Points( 5 );

```

### Default N Levels

**Sintaxis:** obj &lt;&lt; Default N Levels( number )

### Dependent Resampled Inputs

**Sintaxis:** obj &lt;&lt; Dependent Resampled Inputs( state=0|1 )

**Descripción:** Calcula los índices que se utilizan en la opción Evaluar la importancia de la variable volviendo a muestrear la tabla de datos asumiendo que las entradas son dependientes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**Sintaxis:** obj &lt;&lt; Design Space( state=0|1 )

### Design Space Profiler

**Sintaxis:** obj &lt;&lt; Design Space Profiler( state=0|1 )

**Descripción:** Inicia el Perfilador de espacio del diseño, que ayuda a conectar límites de especificación de las variables Y con límites de especificación de las variables X.

```jsl

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Tiretread.jmp" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property(
	"Spec Limits",
	{LSL( 350 ), USL( 500 ), Show Limits( 1 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Spec Limits",
	{LSL( 65 ), USL( 75 ), Show Limits( 1 )}
);
dt:Pred Formula ABRASION << Set Property(
	"Predicting",
	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )}
);
dt:Pred Formula MODULUS << Set Property(
	"Predicting",
	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )}
);
dt:Pred Formula ELONG << Set Property(
	"Predicting",
	{:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )}
);
dt:Pred Formula HARDNESS << Set Property(
	"Predicting",
	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )}
);
Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) )
);

```

### Desirability Functions

**Sintaxis:** obj &lt;&lt; Desirability Functions( state=0|1 )

**Descripción:** Muestra u oculta las funciones de deseabilidad, útiles al optimizar entre varias respuestas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );

```

### Edit Constraints

**Sintaxis:** obj &lt;&lt; Edit Constraints

**Descripción:** Agrega, cambia o eliminar restricciones lineales.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Edit Constraints;

```

### Extrapolation Control Option

**Sintaxis:** obj &lt;&lt; Extrapolation Control Option( "Desactivado"|"Activado"|"Advertencia activada" )

**Descripción:** Especifica si se activa o desactiva el control de extrapolación, o si solo se activan las advertencias de dicho control.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**Sintaxis:** obj &lt;&lt; Extrapolation Details( state=0|1 )

**Descripción:** Muestra u oculta los detalles del control de extrapolación que proporciona la métrica de extrapolación del punto actual y el umbral de extrapolación.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**Sintaxis:** obj &lt;&lt; Extrapolation Type Option( "T2 regularizado"|"K vecinos más cercanos" )

**JMP Versión agregada:** 18

### Formulas for OPTMODEL

**Sintaxis:** obj &lt;&lt; Formulas for OPTMODEL

**Descripción:** Guarda las fórmulas de predicción del modelo en un nuevo archivo como instrucciones SAS para PROC OPTMODEL.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Formulas for OPTMODEL;

```

### Get Constraints

**Sintaxis:** obj &lt;&lt; Get Constraints

**Descripción:** Devuelve una lista de restricciones de factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula Y ),
	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), )
);
obj << Get Constraints;

```

### Get Desirability

**Sintaxis:** obj &lt;&lt; Get Desirability

**Descripción:** Devuelve la configuración de deseabilidad actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
d = obj << Get Desirability;
Show( d );

```

### Get Factor Settings

**Sintaxis:** obj &lt;&lt; Get Factor Settings

**Descripción:** Devuelve la configuración del factor actual en forma de lista.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**Sintaxis:** obj &lt;&lt; Get Factor Settings Script

**Descripción:** Devuelve la configuración actual de los factores como una expresión que se puede utilizar en un script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Get Factor Settings Script;

```

### Get Main Indices

**Sintaxis:** obj &lt;&lt; Get Main Indices

**Descripción:** Guarda los índices principales del análisis Evaluar la importancia de la variable en un nuevo archivo como instrucciones SAS para PROC OPTMODEL.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Main Indices;

```

### Get Simulator

**Sintaxis:** obj &lt;&lt; Get Simulator

**Descripción:** Devuelve una referencia al simulador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ),
		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Get Total Indices

**Sintaxis:** obj &lt;&lt; Get Total Indices

**Descripción:** Guarda los índices totales del análisis Evaluar la importancia de la variable en un nuevo archivo como instrucciones SAS para PROC OPTMODEL.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Total Indices;

```

### Graph Spacing

**Sintaxis:** obj &lt;&lt; Graph Spacing( number )

**Descripción:** Establece la cantidad de espacio horizontal entre los paneles del gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Graph Spacing( 20 );

```

### Hide Desirability Row

**Sintaxis:** obj &lt;&lt; Hide Desirability Row( state=0|1 )

**Descripción:** Hides or unhides the row of desirability profiles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Desirability Functions( 1 );
Wait( 1 );
obj << Hide Desirability Row( 1 );

```

### Hide Y Variables

**Sintaxis:** obj &lt;&lt; Hide Y Variables( Y columns )

**Descripción:** Especifica las variables de respuesta que le gustaría mostrar u ocultar en el perfilador.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 0.5 );
obj << Hide Y Variables( :Pred Formula MODULUS );

```

### Independent Resampled Inputs

**Sintaxis:** obj &lt;&lt; Independent Resampled Inputs( state=0|1 )

**Descripción:** Calcula los índices que se utilizan en la opción Evaluar la importancia de la variable volviendo a muestrear la tabla de datos asumiendo que las entradas son independientes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**Sintaxis:** obj &lt;&lt; Independent Uniform Inputs( state=0|1 )

**Descripción:** Calcula los índices que se utilizan en la opción Evaluar la importancia de las variables volviendo a muestrear la tabla de datos suponiendo que las entradas tienen distribuciones uniformes independientes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**Sintaxis:** obj &lt;&lt; Interaction Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de interacciones para cada respuesta.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Interaction Profiler( 1 );

```

### Linearly Constrained Inputs

**Sintaxis:** obj &lt;&lt; Linearly Constrained Inputs( state=0|1 )

**Descripción:** Calcula los índices que se utilizan en la opción Evaluar la importancia de las variables volviendo a muestrear la tabla de datos sobre una distribución uniforme definida por las restricciones lineales.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**Sintaxis:** obj &lt;&lt; Link Profilers( state=0|1 )

**Descripción:** Vincula todos los perfiladores en un único informe, de forma que un cambio en un factor de un perfilador provoca que tal factor cambie a este valor en todos los demás perfiladores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**Sintaxis:** obj &lt;&lt; Load Constraints from Table

**Descripción:** Loads linear constraints from a data table.

```jsl

Names Default To Here( 1 );

dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Profile at Boundary( "Stop at Boundaries" );

```

### Log Iterations

**Sintaxis:** obj &lt;&lt; Log Iterations( state=0|1 )

**Descripción:** Crea una nueva tabla de datos que contiene iteraciones del algoritmo de optimización.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Log Iterations( 1 );
obj << Optimize;

```

### Max Cycles

**Sintaxis:** obj &lt;&lt; Max Cycles( number )

**Descripción:** Especifica el número máximo de ciclos dentro de cada trayecto en el algoritmo de optimización.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Max Cycles( 5 );
obj << Optimize;

```

### MaxIter

**Sintaxis:** obj &lt;&lt; MaxIter( number )

**Descripción:** Especifica el número máximo de iteraciones dentro de cada trayecto en el algoritmo de optimización.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << MaxIter( 10 );
obj << Optimize;

```

### Maximize Desirability

**Sintaxis:** obj &lt;&lt; Maximize Desirability

**Descripción:** Establece los valores de factor actuales para maximizar las funciones de deseabilidad.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Maximize Desirability;

```

### Maximize and Remember

**Sintaxis:** obj &lt;&lt; Maximize and Remember

**Descripción:** Maximiza las funciones de deseabilidad y recuerda la configuración asociada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**Sintaxis:** obj &lt;&lt; Maximize for Each Grid Point

**Descripción:** Maximiza las funciones de deseabilidad para cada punto de la cuadrícula, manteniendo uno o más factores constantes. Esta opción requiere proteger al menos un factor.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**Sintaxis:** obj &lt;&lt; Maximum Number of Curves( number=500 )

**Descripción:** Especifica el número máximo de curvas que se muestran cuando se selecciona la opción Interacciones superpuestas. Si el número total de curvas posible es mayor que el número máximo de curvas especificado, se extrae una muestra arbitraria. "500" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Maximum Number of Curves( 100 );

```

### Optimization Control Panel

**Sintaxis:** obj &lt;&lt; Optimization Control Panel( state=0|1 )

### Output Grid Table

**Sintaxis:** obj &lt;&lt; Output Grid Table

**Descripción:** Crea una nueva tabla de datos que contiene columnas para los factores que incluyen valores de cuadrícula, columnas para cada una de las respuestas con valores calculados en cada punto de la cuadrícula y el cálculo de la deseabilidad en cada punto de la cuadrícula.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Grid Table;

```

### Output Random Table

**Sintaxis:** obj &lt;&lt; Output Random Table( number of runs,&lt;Add Random Noise&gt; )

**Descripción:** Crea una nueva tabla de datos de la configuración de los factores aleatorios y de los valores predichos sobre la configuración de esos factores para el número de ejecuciones especificado. También hay una opción para agregar ruido aleatorio a las respuestas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**Sintaxis:** obj &lt;&lt; Overlaid Interactions( state=0|1 )

**Descripción:** Muestra u oculta las curvas atenuadas en los gráficos del Perfilador de predicción. Las curvas atenuadas representan los perfiles de diferentes tipos de interacciones entre los rangos de los factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );

```

### Paste Settings Script

**Sintaxis:** obj &lt;&lt; Paste Settings Script

**Descripción:** Pega la configuración del perfilador del portapapeles en un perfilador de otro informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**Sintaxis:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**Descripción:** Agrega columnas de predicción a una tabla de datos especificada, utilizando los factores de dicha tabla. Esta opción solo está disponible para respuestas continuas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
dt2 = dt << Subset(
	All rows,
	columns( :SILICA, :SILANE, :SULFUR ),
	Output Table( "Subset" )
);
obj << Predict For Another Table( dt2 );

```

### Prediction Intervals

**Sintaxis:** obj &lt;&lt; Prediction Intervals( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción al 95 % que incluyen tanto la variación en la estimación del modelo como la variación en el error residual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ELONG ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Prediction Intervals( 1 ),
			Desirability Functions( 0 )
		),
		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Effect Summary( 0 )}
	)
);

```

### Prediction Profiler

**Sintaxis:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**Sintaxis:** obj &lt;&lt; Profile at Boundary( "Girar en los límites"|"Detener en los límites" )

**Descripción:** Identifica el método de gestión de la delimitación para los factores que tengan restricciones. Esta opción solo está disponible para los modelos de predicción que contengan variables de mezcla, cuando haya una restricción lineal o cuando se especifique la opción Modificar restricciones lineales.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );
obj1 = Fit Model(
	Y( :Damping ),
	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),
	Personality( "Standard Least Squares" ),
	Run Model( 1 )
);
obj1 << Prediction Formula;
obj2 = Profiler( Y( :Pred Formula Damping ) );
Wait( 1 );
obj2 << Profile at Boundary( "Stop at Boundaries" );

```

### Prop of Error Bars

**Sintaxis:** obj &lt;&lt; Prop of Error Bars( state=0|1 )

**Descripción:** Muestra u oculta barras de error en el gráfico del perfilador. Esta opción solo está disponible cuando la columna contiene una propiedad de columna Sigma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( Sigma, 5 );
:Pred Formula MODULUS << Set Property( Sigma, 100 );
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Prop of Error Bars( 1 );

```

### Remember Settings

**Sintaxis:** obj &lt;&lt; Remember Settings

**Descripción:** Agrega un nodo de esquema al informe con los valores de la configuración de factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Remember Settings;

```

### Remove Profiler

**Sintaxis:** scobj &lt;&lt; Remove Profiler

**Descripción:** Quita el perfilador del informe de la plataforma. Esta opción solo está disponible en un número limitado de plataformas.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
rpt = obj << Report();
rpt["Model Specification"] << Close( 1 );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);
scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();
scobj << Remove Profiler;

```

### Reorder X Variables

**Sintaxis:** obj &lt;&lt; Reorder X Variables( columns )

**Descripción:** Reordena los efectos principales del modelo en el perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**Sintaxis:** obj &lt;&lt; Reorder Y Variables( columns )

**Descripción:** Reordena las variables de respuesta.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Reorder Y Variables(
	:Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG
);

```

### Reorder factors by main effect importance

**Sintaxis:** subobj &lt;&lt; Reorder factors by main effect importance

**Descripción:** Reordena las celdas en el Perfilador de predicción de acuerdo con los índices de importancia de los efectos principales.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**Sintaxis:** subobj &lt;&lt; Reorder factors by total importance

**Descripción:** Reordena las celdas en el Perfilador de predicción de acuerdo con los índices de importancia total de los factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] <<
get scriptable object);
subobj << Reorder factors by main effect importance;
Wait( 1 );
subobj << Reorder factors by total importance;

```

### Reset

**Sintaxis:** obj &lt;&lt; Reset

**Descripción:** Restablece las funciones de deseabilidad.

### Reset Factor Grid

**Sintaxis:** obj &lt;&lt; Reset Factor Grid

### Reset Factors

**Sintaxis:** obj &lt;&lt; Reset Factors

**Descripción:** Abre una ventana para cambiar la cuadrícula de factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Reset Factor Grid;

```

### Response Limits

**Sintaxis:** Pred Y &lt;&lt; Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**Descripción:** Establece los parámetros de la función de deseabilidad para una respuesta individual, así como los valores de deseabilidad asociados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Pred Formula ABRASION << Response Limits(
		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ),
		Importance( 1 )}
	)
);
obj << Desirability Functions( 1 );

```

### Samples per Factor

**Sintaxis:** obj &lt;&lt; Samples per Factor( number=6 )

**Descripción:** Especifica el número de valores de muestreo tomados para cada factor continuo en las interacciones de dos variables. Este valor se reduce para las interacciones de múltiples variables y está condicionado al número máximo de curvas. "6" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**Sintaxis:** obj &lt;&lt; Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**Descripción:** Utiliza agregación de bootstrap (bagging) para realizar predicciones y guarda los errores estándar y las medias de predicción de los bootstraps agregados en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Crossvalidation( No Crossvalidation ),
	Go
);
obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Constraints to Script

**Sintaxis:** obj &lt;&lt; Save Constraints to Script

**Descripción:** Guarda las restricciones lineales existentes en un script de tabla llamado Restricción.

```jsl

Names Default To Here( 1 );
dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Load Constraints from Table( dtlc );
obj << Save Constraints to Script;

```

### Save Constraints to Table

**Sintaxis:** obj &lt;&lt; Save Constraints to Table

**Descripción:** Saves existing linear constraints to a new data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Script(
	"Constraint",
	{1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6}
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Constraints to Table;

```

### Save Desirabilities

**Sintaxis:** obj &lt;&lt; Save Desirabilities

**Descripción:** Guarda los tres parámetros de la función de deseabilidad para cada respuesta, así como los valores de deseabilidad asociados como propiedad de la columna Límites de respuesta en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirabilities;

```

### Save Desirability Formula

**Sintaxis:** obj &lt;&lt; Save Desirability Formula

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene una fórmula para la deseabilidad combinada entre las respuestas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Save Desirability Formula;

```

### Save Expanded Formulas

**Sintaxis:** obj &lt;&lt; Save Expanded Formulas

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene referencias de fórmulas resueltas dentro de las fórmulas utilizadas como variables Y para ver las variables subyacentes. Esta opción solo está disponible después de seleccionar la opción Expandir fórmulas intermedias en la ventana de inicio o de especificar el mensaje Expandir en el script del perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Save Shapley Values

**Sintaxis:** obj &lt;&lt; Save Shapley Values

**Descripción:** Calcula los valores de Shapley para cada fila de la tabla de datos que no esté excluida.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

```

### Sensitivity Indicator

**Sintaxis:** obj &lt;&lt; Sensitivity Indicator( state=0|1 )

**Descripción:** Muestra u oculta un triángulo morado que puede ayudar a detectar rápidamente las celdas sensibles en perfiles grandes. La altura y la dirección del triángulo se corresponden con el valor de la derivada parcial de la función del perfil en su valor actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**Sintaxis:** obj &lt;&lt; Set Desirabilities

**Descripción:** Abre la ventana Objetivo de la respuesta, en la que puede establecer valores de deseabilidad específicos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Set Desirabilities;

```

### Set Script

**Sintaxis:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**Descripción:** Establece un script que se ejecuta cada vez que cambia un factor.

```jsl

Names Default To Here( 1 );
ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**Sintaxis:** obj &lt;&lt; Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), &lt;multiplier&gt; )

**Descripción:** Se puede utilizar para especificar el multiplicador del umbral de extrapolación general. También puede utilizar esta función para abrir una ventana en la que ajustar el multiplicador del umbral de extrapolación.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Extrapolation Details( 1 ),
	Extrapolation Control Option( "Warning On" ),
	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )
));

```

### Set to Data in Row

**Sintaxis:** obj &lt;&lt; Set to Data in Row( row number )

**Descripción:** Asigna los valores de una fila de la tabla de datos a las variables X en el perfilador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**Sintaxis:** obj &lt;&lt; Shapley Background Data Choice( "Porcentaje del conjunto de datos de entrenamiento"|"Número de filas del conjunto de datos de entrenamiento" )

**Descripción:** Especifica los datos en segundo plano de los cálculos de Shapley como un porcentaje de los datos de entrenamiento o un número de filas de los datos de entrenamiento.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 150 ),
	Save Shapley Values
));

```

### Shapley Number of Permutations

**Sintaxis:** obj &lt;&lt; Shapley Number of Permutations( number=10 )

**Descripción:** Establece el número de permutaciones que se utilizan para calcular los valores de Shapley. "10" de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values ));

```

### Shapley Number of Rows of Training Data

**Sintaxis:** obj &lt;&lt; Shapley Number of Rows of Training Data( number=100 )

**Descripción:** Establece el número de filas de los datos de entrenamiento que se han utilizado con el fin de ajustar el modelo para usarlo como datos en segundo plano en los cálculos de Shapley. "100" de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 125 ),
	Save Shapley Values
));

```

### Shapley Percent Training Data

**Sintaxis:** obj &lt;&lt; Shapley Percent Training Data( number=100 )

**Descripción:** Establece el porcentaje de los datos de entrenamiento que se han utilizado con el fin de ajustar el modelo para usarlo como datos en segundo plano en los cálculos de Shapley. "100" de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 50 ),
	Save Shapley Values
));

```

### Shapley Set Random Seed

**Sintaxis:** obj &lt;&lt; Shapley Set Random Seed( number )

**Descripción:** Establece una semilla aleatoria para calcular los valores de Shapley.

**JMP Versión agregada:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n,
		:"Hip circumference (cm)"n, :"Thigh circumference (cm)"n, :"Knee circumference (cm)"n,
		:"Ankle circumference (cm)"n, :"Biceps (extended) circumference (cm)"n,
		:"Forearm circumference (cm)"n, :"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**Sintaxis:** obj &lt;&lt; Show Creator( state=0|1 )

**Descripción:** Muestra u oculta el nombre de la plataforma que creó la fórmula en la columna de respuesta. El nombre de la plataforma aparece en el eje vertical. Solo está disponible si la columna de respuesta contiene un creador denominado argumento en la propiedad de columna Predicción.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
fm = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ),
		Plot Actual by Predicted( 0 ), Plot Regression( 0 ), Plot Residual by Predicted( 0 ),
		Plot Studentized Residuals( 0 ), Plot Effect Leverage( 0 ),
		Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	)
);

predForm = fm << Save Columns( "Prediction Formula" );

Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**Sintaxis:** obj &lt;&lt; Show Formulas

**Descripción:** Abre una ventana de scripts que contiene JSL para todas las fórmulas que se estén perfilando.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Show Formulas;

```

### Simulator

**Sintaxis:** obj &lt;&lt; Simulator( state=0|1 )

**Descripción:** Muestra u oculta el Simulador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Simulator( 1 );

```

### Spanning Range

**Sintaxis:** obj &lt;&lt; Spanning Range( "Rango del eje interior"|"Rango del eje completo"|"Una desviación estándar"|"Dos desviaciones estándar"|"Rango de datos" )

**Descripción:** Especifica cómo se determina el rango de muestreo de cada factor continuo. El rango de muestreo de cada factor define los valores más altos y más bajos para los que se crean las curvas de interacción.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**Sintaxis:** obj &lt;&lt; Surface Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de superficie.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Surface Profiler( 1 );

```

### Term Value

**Sintaxis:** obj &lt;&lt; Term Value( factor( current value, &lt;Lock( 0|1 )&gt;, &lt;Min( number )&gt;, &lt;Max( number)&gt; ) )

**Descripción:** Especifica la configuración de los factores individuales, incluido el valor actual, el estado de protección y el rango.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Trips

**Sintaxis:** obj &lt;&lt; Trips( number )

**Descripción:** Especifica el número de inicios aleatorios en el algoritmo de optimización. Cada trayecto reinicia el algoritmo en un punto de partida diferente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Trips( 10 );
obj << Optimize;

```

### Unthreaded

**Sintaxis:** obj &lt;&lt; Unthreaded( state=0|1 )

**Descripción:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

Names Default To Here( 1 );
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

**Buscar en las carpetas**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

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

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );

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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## Design Space Profiler

### Constructores asociados

#### Design Space Profiler

**Sintaxis:** Design Space Profiler

**Descripción:** Inicia el Perfilador de espacio del diseño, que ayuda a conectar límites de especificación de las variables Y con límites de especificación de las variables X.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );

```

### Mensajes del elemento

#### Connect Hide Mode

**Sintaxis:** obj &lt;&lt; Connect Hide Mode( state=0|1 )

**Descripción:** Para la tabla conectada, en lugar de seleccionar puntos que estén dentro de los límites, esta opción oculta los puntos que estén fuera de dichos límites.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Connect Hide Mode( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Connect to Table

**Sintaxis:** obj &lt;&lt; Connect to Table( data table )

**Descripción:** Conecta el informe Perfilador de espacio del diseño con la tabla de datos especificada. Las filas que contengan factores que estén dentro de los límites inferior y superior actuales se seleccionan en la tabla conectada.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj << Output Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Connect to Table( dt2 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Get Midpoints from Profiler

**Sintaxis:** obj &lt;&lt; Get Midpoints from Profiler( fraction )

**Descripción:** Obtiene la configuración actual de los factores del Perfilador de predicción y establece los puntos medios de cada factor en el Perfilador de espacio del diseño en esos valores. Los límites se construyen alrededor de cada valor de punto medio utilizando una fracción especificada del rango de factores.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Get Midpoints from Profiler( 0.5 );

```

#### Lock

**Sintaxis:** obj &lt;&lt; Lock( Lock(colume name(lock_value),...) )

**Descripción:** Locks the continuous factor at the specified value. This lock is temporary.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Lock( Ethanol( 5 ) );

```

#### Make and Connect Random Table

**Sintaxis:** obj &lt;&lt; Make and Connect Random Table( number, &lt;Add Random Noise( state=0|1 )&gt;, &lt;Embed Factor Space Scatterplots&gt;, &lt;Embed Response Space Scatterplots&gt; )

**Descripción:** Crea una nueva tabla de datos que contiene la configuración de los factores con distribución uniforme y sus respuestas simuladas correspondientes. Hay opciones para especificar cómo se simulan las respuestas y si se incrustan los gráficos de dispersión de factores y respuestas en el informe. La selección de filas en la tabla de datos está conectada a los perfiladores en el informe.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj2 << Make and Connect Random Table(
	10000,
	Add Random Noise( 1 ),
	Embed Factor Space Scatterplots
);
Wait( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Move Corner Inward

**Sintaxis:** obj &lt;&lt; Move Corner Inward

#### Move Corner Outward

**Sintaxis:** obj &lt;&lt; Move Corner Outward

#### Move Inward

**Sintaxis:** obj &lt;&lt; Move Inward( &lt;number=1&gt; )

**Descripción:** Busca el límite de especificación con la ruta ascendente más pronunciada y mueve ese límite de especificación hacia dentro. Utilice el argumento opcional number para especificar el número de veces que quiere que se lleve a cabo este proceso.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Move Inward( 4 );
Wait( 2 );
obj2 << Move Outward;

```

#### Move Outward

**Sintaxis:** obj &lt;&lt; Move Outward( &lt;number=1&gt; )

**Descripción:** Busca el límite de especificación con la ruta descendente menos pronunciada y mueve ese límite de especificación hacia fuera. Utilice el argumento opcional number para especificar el número de veces que quiere que se lleve a cabo este proceso.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Move Outward( 2 );
Wait( 2 );
obj2 << Move Outward;

```

#### Reset Factor Space

**Sintaxis:** obj &lt;&lt; Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**Descripción:** Cambia el espacio factorial para estrechar, ampliar o desplazar el rango de uno o más factores. Si los intervalos de los límites son demasiado estrechos, se puede producir un volumen de límites pequeño y crear estimaciones imprecisas basadas en la simulación.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
Wait( 1 );
obj2 << Reset Factor Space(
	Butanol( -0.275, 11 ),
	Ethanol( -0.25, 10.25 ),
	Methanol( -0.25, 10.25 ),
	Propanol( -0.25, 10.25 ),
	Time( 0.95, 3 )
);

```

#### Save Simulation Table

**Sintaxis:** obj &lt;&lt; Save Simulation Table( state=0|1 )

#### Save X Spec Limits

**Sintaxis:** obj &lt;&lt; Save X Spec Limits

**Descripción:** Guarda los límites de especificación X actuales como propiedades de columna.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Save X Spec Limits;

```

#### Send Limits to Profiler as Constraints

**Sintaxis:** obj &lt;&lt; Send Limits to Profiler as Constraints

**Descripción:** Envía los límites de X actuales al Perfilador como restricciones de límites.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Profiler as Constraints;

```

#### Send Limits to Simulator

**Sintaxis:** obj &lt;&lt; Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**Descripción:** Envía los límites X actuales al Simulador como parámetros de una distribución especificada. También envía los valores de la desviación estándar del error para cada respuesta como la desviación estándar para el ruido aleatorio añadido.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

#### Send Midpoints to Profiler

**Sintaxis:** obj &lt;&lt; Send Midpoints to Profiler

**Descripción:** Envía los puntos medios de los límites X actuales al perfilador.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Midpoints to Profiler;

```

#### Set Limits

**Sintaxis:** obj &lt;&lt; Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**Descripción:** Establece los límites factoriales utilizando un script.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Show Corners

**Sintaxis:** obj &lt;&lt; Show Corners( state=0|1 )

**Descripción:** Muestra u oculta el informe Esquinas. Este informe contiene una tabla con las probabilidades dentro de la especificación en los extremos del espacio factorial. Las probabilidades se calculan utilizando una distribución normal centrada en los valores predichos y cortada en los límites de especificación.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Corners;

```

#### Show Current Profiler Values

**Sintaxis:** obj &lt;&lt; Show Current Profiler Values( state=0|1 )

**Descripción:** Muestra el valor actual del perfilador como una línea vertical gris de puntos dispersos.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Current Profiler Values( 1 );

```

#### Show Impact Ratios

**Sintaxis:** obj &lt;&lt; Show Impact Ratios( state=0|1 )

**Descripción:** Shows or hides the impact ratios. These ratios show how sensitive changes in each factor, from midpoint to each limit, affect how far the predictions are from their specification limits.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Impact Ratios;

```

#### Show Portion for Each Response

**Sintaxis:** obj &lt;&lt; Show Portion for Each Response( state=0|1 )

**Descripción:** Agrega una columna que contiene la porción en la especificación para cada respuesta en los límites X actuales.

```jsl

Names Default To Here( 1 );

Names Default To Here( 1 );
Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol
		 - 10.380 * :Time + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 *
		:Ethanol * :Propanol + 4.313 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} )
);
New Column( "Pred Formula Impurities",
	Numeric,
	Continuous,
	Formula(
		0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time
	),
	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} )
);
obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Portion for Each Response( 1 );
obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

## Simulator

### Constructores asociados

#### Simulator

**Sintaxis:** obj &lt;&lt; Simulator( state=0|1, &lt;Factors( column &lt;&lt; Random( )|Fixed( constant )| Expression( )| Multivariate( ) )&gt;, &lt;Responses( column &lt;&lt; No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )&gt;

**Descripción:** Inicia el simulador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);

```

### Mensajes del elemento

#### Automatic Histogram Update

**Sintaxis:** simuobj &lt;&lt; Automatic Historgram Update( state=0|1 )

**Descripción:** Actualiza el histograma con nuevos valores simulados cuando cambian las distribuciones de los factores.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Simulate
);
simobj = obj << Get Simulator;
simobj << Automatic Histogram Update( 1 );
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

#### Defect Parametric Profile

**Sintaxis:** simobj &lt;&lt; Defect Parametric Profile( state=0|1 )

**Descripción:** Representa la tasa de defecto media en función de los parámetros distribucionales. Esta opción solo está disponible una vez seleccionado el Perfilador de defecto.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

simobj = obj << Get Simulator;
simobj << Defect Parametric Profile( 1 );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Defect Parametric Profile( 1 ),
		Simulate
	)
);

```

#### Defect Profiler

**Sintaxis:** simobj &lt;&lt; Defect Profiler( state=0|1 )

**Descripción:** Muestra la tasa de defecto como una función aislada de cada factor. Esta opción solo está disponible si se definen límites de especificación.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Simulate
	)
);
simobj = obj << Get Simulator;
simobj << Defect Profiler( 1 );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ),
			SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

```

#### N Runs

**Sintaxis:** obj &lt;&lt; Simulator( N Runs(number=1000) )

**Descripción:** Establece el número de corridas de la simulación. "10000" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( N Runs( 2500 ), Simulate );

```

#### Resimulate

**Sintaxis:** simobj &lt;&lt; Resimulate

**Descripción:** Vuelve a ejecutar la simulación. Esta opción es útil después de realizar cualquier cambio en las distribuciones de los factores.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
simobj = obj << Get Simulator;
simobj << Resimulate;

```

#### Set Random Seed

**Sintaxis:** obj &lt;&lt; Simulator( Set Random Seed( number ) )

**Descripción:** Establece un valor específico para la semilla aleatoria, lo cual garantiza que todas las corridas subsiguientes que utilizan la misma semilla sean reproducibles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

#### Simulate to table

**Sintaxis:** simobj &lt;&lt; Simulate To Table(N Runs(n),factorName&lt;&lt;Sequence Location(low,high,nSteps),factorName2&lt;&lt;Sequence Spread(low,high,nSteps),factorName3&lt;&lt;Not Sequenced)

**Descripción:** Crea una tabla de resultados de la simulación, secuenciada en distintas medias o dispersiones.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
simobj = obj << Get Simulator;
simobj << Simulate to table(
	N Runs( 20 ),
	SILICA << Sequence Location( .5, 2, 4 ),
	SILANE << Sequence Location( 35, 65, 4 ),
	SULFUR << Sequence Location( 1.5, 3, 4 )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	)
);
obj << Simulator(
	Simulate to table(
		N Runs( 20 ),
		SILICA << Sequence Location( .5, 2, 4 ),
		SILANE << Sequence Location( 35, 65, 4 ),
		SULFUR << Sequence Location( 1.5, 3, 4 )
	)
);

```

#### Simulation Experiment

**Sintaxis:** simobj &lt;&lt; Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),&lt;Run&gt;,&lt;Selected Factors(factor1,..)&gt; )

**Descripción:** Ejecuta un experimento de simulación diseñado basándose en las localizaciones de las distribuciones de factores dentro del modelo.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
simobj = obj << Get Simulator;
simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	)
);
obj << Simulator( Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run ) );

```

#### X Correlations

**Sintaxis:** obj &lt;&lt; Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**Descripción:** Establece las correlaciones en los factores X cuando la configuración de la simulación para los factores se establece en Multivariante.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),
	Simulate
);

```

#### Y Correlations

**Sintaxis:** obj &lt;&lt; Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**Descripción:** Establece las correlaciones en las respuestas Y cuando se agrega ruido multivariante a las respuestas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ),
		SILANE << Random( Normal weighted( 50, 6.532 ) ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << Add Multivariate Noise( 1 ),
		Pred Formula MODULUS << No Noise, Pred Formula ELONG << Add Multivariate Noise( 1 ),
		Pred Formula HARDNESS << No Noise
	),
	Y Correlations(
		1,
		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG,
		Pred Formula HARDNESS},
		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]
	),
	Simulate
);

```

