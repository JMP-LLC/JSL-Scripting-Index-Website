# Choice



## Columnas

### Choice Set ID

**Sintaxis:** Choice( Choice Set ID( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que identifica el conjunto de elecciones que se presentaron al sujeto para una determinación de preferencia dada en la situación de una tabla de datos.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Effects

**Sintaxis:** obj = Choice(...<Profile Effects( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Una o más columnas que contienen los valores de efecto o factor en la tabla de datos del perfil.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Grouping

**Sintaxis:** Choice( Profile Grouping( column(s) ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que, cuando se utiliza con la columna ID de perfil, únicamente designa cada conjunto de elecciones.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile ID

**Sintaxis:** Choice( Profile ID( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que contiene el ID en la tabla de datos del perfil.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Freq

**Sintaxis:** Choice( Response Freq( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Grouping

**Sintaxis:** Choice( Response Grouping( column(s) ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que, cuando se utiliza con la columna ID de perfil seleccionado, únicamente designa cada conjunto de elecciones.

```jsl

Names Default To Here( 1 );
Open( "$Sample_Data/Laptop Profile.jmp" );
Open( "$Sample_Data/Laptop Runs.jmp" );
Choice(
	Response Data Table( Data Table( "Laptop Runs" ) ),
	Profile DataTable( Data Table( "Laptop Profile" ) ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

### Response Profile ID Choices

**Sintaxis:** Choice( Response Profile ID Choice( columns ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Al menos dos columnas que contienen las elecciones posibles disponibles como respuestas.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Profile ID Chosen

**Sintaxis:** Choice( Response Profile ID Chosen( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que contiene el ID del perfil que representa el perfil seleccionado del sujeto.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Subject ID

**Sintaxis:** Choice( Response Subject ID( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que identifica al participante del estudio en la tabla de datos de respuestas.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Weight

**Sintaxis:** Choice( Response Weight( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Effects

**Sintaxis:** obj = Choice(...<Subject Effects( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Una o más columnas que contienen los valores de efecto o factor en la tabla de datos de sujetos.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Subject ID

**Sintaxis:** Choice( Subject ID( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que identifica al participante del estudio en la tabla de datos de sujetos o en la situación de una tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Subject ID

**Sintaxis:** Choice( Subject Subject ID( column ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Una columna que identifica al participante del estudio en la tabla de datos de sujetos.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

## Constructores asociados

### Choice

**Sintaxis:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**Descripción:** Modela datos de un experimento de elección que estudia las preferencias de los clientes. Estima la probabilidad de que se prefiera una configuración específica mediante un tipo de regresión logística condicional.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

## Mensajes del elemento

### Comparisons

**Sintaxis:** obj << Comparisons( {term1(value1a),term2(value2a),...},{term1(value1b),term2(value2b),...} )

**Descripción:** Realiza comparaciones entre perfiles de elección alternativos específicos. Le permite especificar los factores y los valores que quiere comparar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Comparisons(
	{Crust( "Thick" ), Cheese( "Jack" ), Topping( "Pepperoni" )},
	{Crust( "Thin" ), Cheese( "Mozzarella" ), Topping( "None" )}
);

```

### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( state=0|1, <alpha> )

**Descripción:** Muestra u oculta intervalos de confianza al (1-alfa) % para cada parámetro en el informe Estimaciones de los parámetros.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Confidence Intervals( 1, 0.01 );

```

### Confidence Limits

**Sintaxis:** obj << Confidence Limits( state=0|1, <alpha> )

**Descripción:** Muestra u oculta los límites de confianza para cada parámetro en el informe Estimación de los parámetros bayesianos. Los límites se construyen en función de los cuantiles 2,5 y 97,5 de la distribución posterior.

**JMP Versión agregada:** 14

### Convergence Criterion

**Sintaxis:** obj = Choice(...Convergence Criterion( number )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el criterio aceptable de convergencia al realizar la estimación de los parámetros.

### Correlation of Estimates

**Sintaxis:** obj << Correlation of Estimates( state=0|1 )

**Descripción:** Muestra u oculta la matriz de correlación de las estimaciones de los parámetros.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Correlation of Estimates( 1 );

```

### Effect Marginals

**Sintaxis:** obj << Effect Marginals( state=0|1 )

**Descripción:** Muestra u oculta las probabilidades marginales y las utilidades marginales de cada efecto principal en el modelo. La probabilidad marginal es la probabilidad de que un individuo seleccione el atributo A en lugar del B con todos los demás atributos establecidos en sus niveles medios o predeterminados.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Effect Marginals( 1 );

```

### Firth Bias-Adjusted Estimates

**Sintaxis:** obj = Choice(...Firth Bias-Adjusted Estimates( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Calcula las estimaciones de la máxima verosimilitud (MLE) corregidas por sesgo que producen mejores estimaciones y pruebas que las MLE sin corrección por sesgo. Estas estimaciones también mejoran los problemas de separación que suelen ocurrir en los modelos logísticos. Opción activada de forma predeterminada.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
Report( obj )["Parameter Estimates"] << Close( 0 );

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Hierarchical Bayes

**Sintaxis:** obj = Choice(...Hierarchical Bayes( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Utiliza un enfoque bayesiano para estimar los parámetros específicos del sujeto.

### Joint Factor Tests

**Sintaxis:** obj << Joint Factor Tests( state=0|1 )

**Descripción:** Somete a prueba cada factor del modelo mediante la creación de una prueba de razón de verosimilitud para todos los efectos que incluyan dicho factor. La tabla de datos del individuo es necesaria para esta opción cuando una interacción no está presente en el modelo.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
obj << Joint Factor Tests( 1 );

```

### Likelihood Ratio Tests

**Sintaxis:** obj << Likelihood Ratio Tests( state=0|1 )

**Descripción:** Realiza pruebas de razón de verosimilitud para cada efecto del modelo. Esta opción se encuentra activada de forma predeterminada para modelos que converjan en menos de cinco segundos.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Likelihood Ratio Tests( 1 );

```

### Model Dialog

**Sintaxis:** obj << Model Dialog

**Descripción:** Abre la ventana del cuadro de diálogo del modelo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Model Dialog;

```

### Multiple Choice Profiler

**Sintaxis:** obj << Multiple Choice Profiler( state=0|1, N Choices( number ) )

**Descripción:** Muestra u oculta un número especificado de perfiladores de predicción. Esto le permite comparar las probabilidades de predicción en conjuntos de elecciones alternativos.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Multiple Choice Profiler( 1, N Choices( 3 ) );

```

### Number of Bayesian Iterations

**Sintaxis:** obj = Choice(...Number of Bayesian Iterations( number )...)

<b>Elemento de inicio: Sí</b>

### Number of Burn In Iterations

**Sintaxis:** obj << Number of Burn In Iterations( number )

### One Table

**Sintaxis:** obj = Choice(...One Table...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que los datos están en formato apilado en una tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Probability Profiler

**Sintaxis:** obj << Probability Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de predicción de la probabilidad de la elección actual en comparación con un conjunto de referencia.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Probability Profiler( 1 );

```

### Profile DataTable

**Sintaxis:** Choice( Profile Data Table( table ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica la tabla de datos del perfil.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Remove Subject Effects

**Sintaxis:** obj = Choice(...Remove Subject Effects...)

<b>Elemento de inicio: Sí</b>

### Respondents Are Allowed to Choose None

**Sintaxis:** Choice( Respondents Are Allowed to Choose None( state=0|1 ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica que se incluye un indicador de no elección en el modelo para las filas de respuesta que contengan valores faltantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined No Choice.jmp" );
obj = Choice(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Respondents Are Allowed to Choose None( 1 ),
	Likelihood Ratio Tests( 1 )
);

```

### Response Data Table

**Sintaxis:** Choice( Response Data Table( table ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica la tabla de datos de respuesta.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Save Bayes Chain

**Sintaxis:** obj << Save Bayes Chain

### Save Gradients by Subject

**Sintaxis:** obj << Save Gradients by Subject

**Descripción:** Crea una tabla nueva con una fila para cada individuo que contiene los pasos medios en cada parámetro.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Gradients by Subject;

```

### Save Subject Estimates

**Sintaxis:** obj << Save Subject Estimates

### Save Utility Formula

**Sintaxis:** obj << Save Utility Formula

**Descripción:** Crea una columna nueva en la tabla de datos del perfil con una fórmula para el modelo lineal estimado.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Utility Formula;

```

### Show MLE Parameter Estimates

**Sintaxis:** obj << Show MLE Parameter Estimates( state=0|1 )

**Descripción:** Muestra la estimación máxima de verosimilitud con estimación de los parámetros bayesianos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Hierarchical Bayes( 1 )
);
obj << Show MLE Parameter Estimates( 1 );

```

### Subject DataTable

**Sintaxis:** Choice( Subject Data Table( table ), ... )

<b>Elemento de inicio: Sí</b>

**Descripción:** Identifica la tabla de datos del individuo.

**Ejemplo de diferencia máxima**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**Ejemplo de elección**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Use Adaptive Bayes

**Sintaxis:** obj << Use Adaptive Bayes( state=0|1 )

### Utility Profiler

**Sintaxis:** obj << Utility Profiler( state=0|1 )

**Descripción:** Muestra u oculta la utilidad predicha para distintas configuraciones de factores. La utilidad es el valor predicho por el modelo lineal.

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Utility Profiler( 1 );

```

### Willingness to Pay

**Sintaxis:** obj << Willingness to Pay

**Descripción:** Requiere que su modelo incluya una columna de precio continuo. Calcula el aumento (disminución) de precio máximo que un cliente está dispuesto a pagar por una nueva función sobre el coste de referencia de la función. El resultado se calcula utilizando la configuración Referencia para cada ajuste de fondo.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Laptop Profile.jmp" );
dt2 = Open( "$SAMPLE_DATA/Laptop Runs.jmp" );
Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj << Action

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

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

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

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj << Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
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

**Sintaxis:** obj << Local Data Filter

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

**Sintaxis:** obj << Paste Local Data Filter

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

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

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

**Sintaxis:** obj << Remove Local Data Filter

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

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
	SendToByGroup(
		{:sex == "M"},
		Continuous Distribution( Column( :weight ) )
	)
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
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ),
			Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
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
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox,
			{Frame Size( 178, 318 )}
		)
	)
);

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

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

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column(
		"age^2",
		Format( "Fixed Dec", 5, 0 ),
		Formula( :age * :age )
	),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Choice(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

