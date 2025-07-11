# Categorical



### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Agreement Statistic

**Sintaxis:** obj << Agreement Statistic( state=0|1 )

**Descripción:** Prueba el grado de concordancia entre los evaluadores y si la falta de concordancia es simétrica. Solo está disponible para una respuesta de concordancia de evaluadores. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count ),
	Agreement Statistic( 0 )
);
Wait( 1 );
obj << Agreement Statistic( 1 );

```

### Aligned Responses

**Sintaxis:** obj = Categorical(...Aligned Responses( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de varias columnas que tengan los mismos niveles de respuesta en un único informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Aligned Responses( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Arrange in Rows

**Sintaxis:** obj << Arrange in Rows( number )

**Descripción:** Organiza los informes de modo que se extiendan por toda la página. Especifique el número de informes que quiere que aparezcan en cada fila.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Responses( :country ),
	Legend( 0 ),
	Arrange in Rows( 2 )
);
Wait( 1 );
obj << Arrange in Rows( 1 );

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Binomial

**Sintaxis:** obj << Binomial( state=0|1 )

**Descripción:** Realiza una prueba de ji cuadrado de la independencia de los niveles de respuesta asumiendo una distribución binomial para cada categoría. Nota: solo disponible para respuestas múltiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

```

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Sintaxis:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);

```

### Categorical

**Sintaxis:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Descripción:** Resume y analiza los datos de respuesta categórica. Los datos pueden ser respuestas simples, respuestas múltiples, medidas repetidas, concordancia de evaluadores, respuestas alineadas o texto libre. Incluye la posibilidad de generar tabulaciones cruzadas personalizadas de respuestas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Chisq

**Sintaxis:** obj << Cell Chisq( state=0|1 )

**Descripción:** Muestra u oculta los valores p de cada celda en la tabla para una prueba de ji cuadrado de la independencia. Los valores p se colorean y sombrean en función de si el conteo es mayor o menor del esperado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**Sintaxis:** obj << Cell Chisq FDR( state=0|1 )

**Descripción:** Muestra u oculta los valores p ajustados según la tasa de falsos descubrimientos (FDR) de cada celda en la tabla para una prueba de ji cuadrado de la independencia. Los valores p ajustados según la FDR se colorean y sombrean en función de si el conteo es mayor o menor que el esperado.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**Sintaxis:** obj << ChiSquare Test Choices( "Prueba de razón de verosimilitud y de Pearson"|"Solo razón de verosimilitud"|"Solo Pearson" )

**Descripción:** Especifica qué pruebas se muestra en las pruebas de homogeneidad: la razón de verosimilitud de ji cuadrado, el ji cuadrado de Pearson, o ambas. Solo está disponible para una única respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << ChiSquare Test Choices( "Pearson Only" );
obj << Test Response Homogeneity( 1 );

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Compare Each Cell

**Sintaxis:** obj << Compare Each Cell( state=0|1 )

**Descripción:** Compara cada nivel de la respuesta frente a todos los demás niveles combinados en distintos niveles de una variable de agrupación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**Sintaxis:** obj << Compare Each Cell FDR( state=0|1 )

**Descripción:** Compara cada nivel de la respuesta frente a todos los demás niveles combinados en distintos niveles de una variable de agrupación, con el ajuste de la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**Sintaxis:** obj << Compare Each Sample( state=0|1 )

**Descripción:** Compara respuestas de distintos niveles de una variable de agrupación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**Sintaxis:** obj << Compare Each Sample FDR( state=0|1 )

**Descripción:** Compara las respuestas entre los niveles de una variable de agrupación con ajuste según la tasa de falsos descubrimientos (FDR).

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**Sintaxis:** obj << Conditional Association( state=0|1 )

**Descripción:** Muestra u oculta la tasa de tener una respuesta en una columna dada la misma respuesta en una fila. Solo está disponible para modelos delimitados múltiples de respuesta múltiple y de respuesta múltiple por ID con eventos únicos en el ID seleccionado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	ID( :Response ID ),
	Unique Occurrences within ID( 1 ),
	Structured( :Brush, :Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Conditional Association( 1 )
);

```

### Confidence Interval Coverage

**Sintaxis:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece la cobertura de los intervalos de confianza para las tasas y la contribución de respuestas. La cobertura es igual a (1-alfa). "0.95" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);

```

### Confidence Limits Format

**Sintaxis:** obj << Confidence Limits Format( format, <options> )

**Descripción:** Aplica formato a los límites de confianza de Contribución y Tasa en la tabla. El valor predeterminado es "Porcentaje", 6, 2.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);
Wait( 1 );
obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**Sintaxis:** obj << Contents Summary( state=0|1 )

**Descripción:** Recopila todas las pruebas y valores p en un informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Contents Summary( 1 );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Copy Script;

```

### Count Missing Responses

**Sintaxis:** obj = Categorical(...Count Missing Responses( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Incluye los valores faltantes como una categoría de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );
Categorical(
	X( :Trial 1 ),
	Count Missing Responses( 1 ),
	Responses( :Trial 4 )
);

```

### Count Test

**Sintaxis:** obj << Count Test( state=0|1 )

**Descripción:** Realiza una prueba de ji cuadrado de la independencia de las tasas utilizando la regresión de Poisson. Nota: solo disponible para respuestas múltiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Crosstab

**Sintaxis:** obj << Crosstab( state=0|1 )

**Descripción:** Genera una tabulación cruzada de conteos con los niveles de respuesta que definen las columnas y los niveles de variables de agrupación que definen las filas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );
obj << Crosstab( 1 );

```

### Crosstab Transposed

**Sintaxis:** obj << Crosstab Transposed( state=0|1 )

**Descripción:** Genera una tabulación cruzada de conteos con los niveles de respuesta que definen las filas y los niveles de variables de agrupación que definen las columnas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Data Table Window;

```

### Exclude Nonresponses

**Sintaxis:** obj << Exclude Nonresponses( state=0|1 )

**Descripción:** Excluye las no respuestas para las pruebas de conteo y homogeneidad al comparar categorías de respuesta múltiple. Las celdas vacías o faltantes se consideran sin respuesta. Se recomienda el uso de una categoría distinta para ninguna de estas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	Structured(
		:"What is your gender ? "n,
		:"What colors do you like? (with nonresponse)"n
	),
	Share Chart( 0 ),
	Homogeneity Test( 1 )
);
Wait( 1 );
obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**Sintaxis:** obj << FDR Adjusted PValues( state=0|1 )

**Descripción:** Se utilizan valores p ajustados de la tasa de falsos descubrimientos (Benjamini y Hochberg, 1995) cuando hay muchos valores p y es fácil que algunas pruebas en sí mismas resulten significativas por casualidad.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << FDR Adjusted PValues( 1 );

```

### Filter

**Sintaxis:** obj << Filter( state=0|1 )

**Descripción:** Filtra los datos por grupos o rangos específicos de forma local.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Responses( :country ),
	Legend( 0 ),
	Local Data Filter(
		Location( {634, 43} ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
		Add Filter( columns( :sex ), Where( :sex == "Female" ) )
	)
);
Wait( 1.0 );
obj << Filter( 0 );

```

### Force Crosstab Shading

**Sintaxis:** obj << Force Crosstab Shading( state=0|1 )

**Descripción:** Utiliza el sombreado en los informes de referencia cruzada incluso si en las preferencias globales se ha indicado que no se sombreen. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Force Crosstab Shading( 0 );
Wait( 1 );
obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**Sintaxis:** obj << Force Labels Horizontal( state=0|1 )

**Descripción:** Utiliza etiquetas horizontales en la tabla cruzada independientemente de la longitud del texto. El texto de la etiqueta se ajusta en lugar de girarse.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Employee Tenure ),
	Responses( :Job Satisfaction )
);
Wait( 1 );
obj << Force Labels Horizontal( 1 );

```

### Format Elements

**Sintaxis:** obj << Format Elements

**Descripción:** Abre una ventana que permite especificar formatos para distintos elementos del informe.

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Freq( _freqcol )
);

```

### Frequencies

**Sintaxis:** obj << Frequencies( state=0|1 )

**Descripción:** Muestra u oculta la tabla Frecuencia en el informe. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Frequencies( 0 )
);
Wait( 1 );
obj << Frequencies( 1 );

```

### Frequencies Format

**Sintaxis:** obj << Frequencies Format( format, <options> )

**Descripción:** Aplica formato a los valores de frecuencia en la tabla. El valor predeterminado es "Decimal fijo", 7, 0.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**Sintaxis:** obj << Frequency Chart( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de frecuencias en el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Frequency Chart( 1 );

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```js

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

```js

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

### Grouping Category

**Sintaxis:** obj << Grouping Category( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Grouping Option

**Sintaxis:** obj = Categorical(...Grouping Option( "Combinaciones"|"Cada una individualmente"|"Ambos" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el método de agrupación para las variables X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Aligned Responses( :country, :size ),
	Grouping Option( Each Individually )
);

```

### Hide Nonsignificant

**Sintaxis:** obj << Hide Nonsignificant( state=0|1 )

**Descripción:** Suprime los informes que no son significativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**Sintaxis:** obj << Highlight Cells

**Descripción:** Resalta las celdas que cumplen las condiciones especificadas.

### Homogeneity Test

**Sintaxis:** obj << Homogeneity Test( state=0|1 )

**Descripción:** Realiza una prueba de ji cuadrado de la independencia de los niveles de respuesta asumiendo una distribución binomial para cada categoría. Nota: solo disponible para respuestas múltiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Homogeneity Test( 1 );

```

### ID

**Sintaxis:** obj << ID( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Response Categories in Excluded Rows

**Sintaxis:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**Descripción:** Especifica que el informe incluye categorías de respuesta que solo aparecen en las filas excluidas. Los conteos de estas categorías son cero.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Select Where( :size == "Small" );
dt << Exclude;
obj = Categorical(
	Include Response Categories in Excluded Rows( 1 ),
	X( :marital status ),
	Responses( :size )
);

```

### Include Responses Not in Data

**Sintaxis:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Muestra las categorías de las respuestas que tienen etiquetas de valor, incluso si no aparecen en los datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:type << Set Property(
	Value Labels,
	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" =
	"Work"}
);
obj = Categorical( X( :marital status ), Responses( :type ) );
obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**Sintaxis:** obj = Categorical(...Indicator Group( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de una variable de respuesta múltiple en el caso de que las respuestas estén en columnas de indicador múltiple.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous,
		:oxide defect, :silicon defect
	)
);

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```js

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

### Mean Confidence Interval

**Sintaxis:** obj << Mean Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta el intervalo de confianza de las medias.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Confidence Interval( 1 );

```

### Mean Score

**Sintaxis:** obj << Mean Score( state=0|1 )

**Descripción:** Muestra la puntuación de la media, basada en puntuaciones de valores o códigos numéricos sin procesar, en la tabla de referencia cruzada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );

```

### Mean Score Comparisons

**Sintaxis:** obj << Mean Score Comparisons( state=0|1 )

**Descripción:** Compara las puntuaciones de la media de las distintas categorías de agrupación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**Sintaxis:** obj << Mean Score Comparisons FDR( state=0|1 )

**Descripción:** Compara las puntuaciones de la media de las distintas categorías de agrupación.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**Sintaxis:** obj << Mean Score Comparisons as Suffix( state=0|1 )

**Descripción:** Compara las puntuaciones de la media de las distintas categorías de agrupación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**Sintaxis:** obj << Mean Std Error( state=0|1 )

**Descripción:** Muestra u oculta el error estándar de las medias.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Std Error( 1 );

```

### Means Format

**Sintaxis:** obj << Means Format( format, <options> )

**Descripción:** Da formato a las puntuaciones medias de la tabla. El valor predeterminado es "Fijo", 6, 2.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );
Wait( 1 );
obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**Sintaxis:** obj = Categorical(...Multiple Delimited( column )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de una variable de respuesta múltiple en el caso de que las respuestas estén en una única columna y cada respuesta esté separada por una coma, punto y coma o tabulación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );
obj = dt << Categorical(
	Multiple Delimited( :failureS ),
	ID( :ID ),
	X( :clean, :date )
);

```

### Multiple Response

**Sintaxis:** obj = Categorical(...Multiple Response( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de una variable de respuesta múltiple en el caso de que cada respuesta posible esté registrada en su propia columna individual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Multiple Response( :Failure1, :Failure2, :Failure3 ),
	Frequency Chart( 0 )
);

```

### Multiple Response by ID

**Sintaxis:** obj = Categorical(...Multiple Response by ID( column )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de una variable de respuesta múltiple en el caso de que haya una única columna de respuestas y una segunda columna que contenga un ID para el sujeto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Order Response Levels High to Low

**Sintaxis:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Reordena el informe de modo que las categorías que tengan el valor más alto estén situadas al principio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Order Response Levels High to Low( 1 ),
	Responses( :country )
);

```

### Order by Significance

**Sintaxis:** obj << Order by Significance( state=0|1 )

**Descripción:** Reordena los informes de manera que los informes más significativos se encuentren al principio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Order by Significance( 1 );

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```js

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

### Poisson

**Sintaxis:** obj << Poisson( state=0|1 )

**Descripción:** Realiza una prueba de ji cuadrado de la independencia de las tasas utilizando la regresión de Poisson. Nota: solo disponible para respuestas múltiples.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Multiple Response( :country, :size ),
	X( :sex, :marital status )
);
obj << Count Test( 1 );

```

### Rate Confidence Interval

**Sintaxis:** obj << Rate Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta el intervalo de confianza para la probabilidad de tasa. El intervalo de confianza es un intervalo normal que utiliza los errores estándar del modelo lineal de Poisson.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );
obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**Sintaxis:** obj << Rate Per Case( state=0|1 )

**Descripción:** Muestra u oculta la tabla Tasa por caso en el informe. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Rate Per Case( 0 )
);
Wait( 1 );
obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**Sintaxis:** obj << Rate per Case Responding( state=0|1 )

**Descripción:** Muestra u oculta la razón de respuesta por caso que responde (excluidos los faltantes).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**Sintaxis:** obj = Categorical(...Rater Agreement( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de varias columnas en el caso de que cada columna sea una evaluación de la misma pregunta o elemento, pero la haya proporcionado un individuo (evaluador) distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relative Risk

**Sintaxis:** obj << Relative Risk( state=0|1, {}, {level of interest} )

**Descripción:** Muestra u oculta los riesgos relativos de una variable de agrupación de dos niveles para cada nivel de la respuesta. Está disponible cuando la variable de agrupación tiene dos niveles y, o bien la respuesta tiene dos niveles, o es una respuesta múltiple y se ha seleccionado la opción Eventos únicos en el ID.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous,
		:oxide defect, :silicon defect,
	),
	Sample Size( :SampleSize ),
	X( :clean )
);
obj << Relative Risk( 1, {}, {"after"} );

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Repeated Measures

**Sintaxis:** obj = Categorical(...Repeated Measures( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume los datos de varias columnas en el caso de que cada columna contenga respuestas a la misma pregunta realizada en distintos puntos temporales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Report View( "Summary" );

```

### Response Frequencies

**Sintaxis:** obj = Categorical(...Response Frequencies( columns )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume una variable de respuesta múltiple en el caso de que la frecuencia de cada respuesta posible esté registrada en su propia columna.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous,
		:oxide defect, :silicon defect
	),
	X( :clean, :date ),
	Sample Size( :SampleSize )
);

```

### Response Levels

**Sintaxis:** obj << Response Levels( state=0|1 )

**Descripción:** Muestra u oculta niveles de datos para cada respuesta. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Response Levels( 0 );
Wait( 1 );
obj << Response Levels( 1 );

```

### Responses

**Sintaxis:** obj = Categorical(...Responses( column )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Resume las respuestas de una única columna. Si se seleccionan varias columnas, el informe categórico contiene un informe independiente para cada columna individual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**Sintaxis:** obj << Sample Size( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Contingency Table

**Sintaxis:** obj << Save Contingency Table

**Descripción:** Guarda los valores de la tabla cruzada en una nueva tabla de datos. La nueva tabla utiliza los nombres de columna originales.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Contingency Table;

```

### Save DocX File

**Sintaxis:** obj << Save DocX File

**Descripción:** Undocumented and Experimental Feature

### Save Excel File

**Sintaxis:** obj << Save Excel File

**Descripción:** Guarda las tablas en un archivo de hoja de cálculo de Excel.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Excel File(
	"$DOCUMENTS\ExcelCarSize.xlsx",
	Separate Rows for Each Cell Statistic( 1 )
);

```

### Save Frequencies

**Sintaxis:** obj << Save Frequencies

**Descripción:** Guarda las frecuencias en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Frequencies;

```

### Save Mean Scores

**Sintaxis:** obj << Save Mean Scores

**Descripción:** Guarda las puntuaciones de la media para cada grupo muestral en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Mean Scores;

```

### Save Rate Per Case

**Sintaxis:** obj << Save Rate Per Case

**Descripción:** Guarda la tasa por caso en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Rate Per Case;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Script Window;

```

### Save Share of Responses

**Sintaxis:** obj << Save Share of Responses

**Descripción:** Guarda la contribución de respuestas en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Share of Responses;

```

### Save Stacked Table

**Sintaxis:** obj << Save Stacked Table

**Descripción:** Guarda los valores de la tabla cruzada en una nueva tabla de datos. La nueva tabla utiliza nombres de columna generales.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Stacked Table;

```

### Save Test Homogeneity

**Sintaxis:** obj << Save Test Homogeneity

**Descripción:** Guarda los resultados de las pruebas de homogeneidad en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Test Homogeneity;

```

### Save Test Rates

**Sintaxis:** obj << Save Test Rates

**Descripción:** Guarda los resultados de la opción Probar respuesta múltiple en una nueva tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Test Rates;

```

### Save Transposed Frequencies

**Sintaxis:** obj << Save Transposed Frequencies

**Descripción:** Guarda las frecuencias transpuestas en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**Sintaxis:** obj << Save Transposed Rate Per Case

**Descripción:** Guarda la tasa transformada por caso en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**Sintaxis:** obj << Save Transposed Share of Responses

**Descripción:** Guarda la contribución de respuestas transpuesta en una nueva tabla.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**Sintaxis:** obj << Save tTests and pValues

**Descripción:** Guarda las pruebas t y los valores p de las pruebas Comparar medias en una nueva tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save ttests and pvalues;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```js

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

```js

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

```js

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

### Share Chart

**Sintaxis:** obj << Share Chart( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de contribuciones en el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share Chart( 0 )
);
Wait( 1 );
obj << Share Chart( 1 );

```

### Share Confidence Interval

**Sintaxis:** obj << Share Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta el intervalo de confianza para la probabilidad de respuesta de contribución. El intervalo de confianza se construye utilizando el método de la prueba de puntuación de Wilson.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career )
);
obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**Sintaxis:** obj << Share Of Responses( state=0|1 )

**Descripción:** Muestra u oculta la tabla Contribución de respuestas en el informe. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share of Responses( 0 )
);
Wait( 1 );
obj << Share of Responses( 1 );

```

### Shares and Rates Format

**Sintaxis:** obj << Shares and Rates Format( format, <options> )

**Descripción:** Aplica formato a los valores de Contribución, Tasa y Tasa por respuesta en la tabla. El valor predeterminado es "Porcentaje", 6, 1.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**Sintaxis:** obj = Categorical(...Shorten Labels( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Acorta las etiquetas quitando los prefijos y sufijos comunes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Age Range",
	Numeric,
	"Continuous",
	Formula( :age > 12 ),
	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} )
);
obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );
Wait( 2 );
obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**Sintaxis:** obj << Show Columns Used in Report( state=0|1 )

**Descripción:** Muestra u oculta la información de Columnas utilizadas en el informe. Esta opción solo afecta a las columnas que tengan un nombre SPSS o SAS o la propiedad de columna Etiqueta SPSS o SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:country << Set Property( "SAS Label", "Country of Manufacture Origin" );
obj = Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**Sintaxis:** obj << Show Highlight Legend( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

### Show Supercategories

**Sintaxis:** obj << Show Supercategories( state=0|1 )

**Descripción:** Muestra u oculta supercategorías. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group(
				"Positive Response",
				{"Neutral", "Agree", "Strongly agree"}
			)}
		)
	),
	Legend( 0 )
);
obj << Show Supercategories( 0 );
Wait( 1 );
obj << Show Supercategories( 1 );

```

### Show Warnings

**Sintaxis:** obj << Show Warnings( state=0|1 )

**Descripción:** Muestra las advertencias de las pruebas de ji cuadrado referentes a un tamaño muestral pequeño.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << Show Warnings( 1 );

```

### Std Dev Format

**Sintaxis:** obj << Std Dev Format( format, <options> )

**Descripción:** Da formato a las puntuaciones de la desviación estándar de la tabla. El valor predeterminado es "Fijo", 6, 2.

**JMP Versión agregada:** 19

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );
Wait( 1 );
obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**Sintaxis:** obj << Std Dev Score( state=0|1 )

**Descripción:** Muestra la puntuación de la desviación estándar, basada en puntuaciones de valores o códigos numéricos sin procesar, en la tabla de referencia cruzada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );

```

### Structured

**Sintaxis:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns...  )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Genera una tabulación cruzada estructurada de dos o más variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured(
		:Gender * :Age Group + :Position Tenure,
		:Job Satisfaction + :Salary Group
	)
);

```

### Supercategories

**Sintaxis:** obj << Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**Descripción:** Especifica supercategorías para agregar localmente categorías de respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group(
				"Positive Response",
				{"Neutral", "Agree", "Strongly agree"}
			)}
		)
	),
	Legend( 0 )
);

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Test Response Homogeneity

**Sintaxis:** obj << Test Response Homogeneity( state=0|1 )

**Descripción:** Prueba la homogeneidad de la columna de respuesta: proporciona las pruebas razón de verosimilitud de ji cuadrado y ji cuadrado de Pearson. Solo está disponible para una única respuesta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Test Response Homogeneity( 1 );

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Total Cases

**Sintaxis:** obj << Total Cases( state=0|1 )

**Descripción:** Para variables de respuesta múltiple, muestra el número total de casos en la tabla de referencia cruzada. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red.,
		:I like the color orange.
	)
);
obj << Total Cases( 0 );
Wait( 1 );
obj << Total Cases( 1 );

```

### Total Cases Responding

**Sintaxis:** obj << Total Cases Responding( state=0|1 )

**Descripción:** Para variables de respuesta múltiple, muestra el número total de casos que hayan respondido al menos una vez en la tabla de referencia cruzada. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red.,
		:I like the color orange.
	)
);
obj << Total Cases Responding( 0 );
Wait( 1 );
obj << Total Cases Responding( 1 );

```

### Total Responses

**Sintaxis:** obj << Total Responses( state=0|1 )

**Descripción:** Muestra el número total de respuestas en la tabla de referencia cruzada. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Total Responses( 0 );
Wait( 1 );
obj << Total Responses( 1 );

```

### Totals First

**Sintaxis:** obj << Totals First( state=0|1 )

**Descripción:** Muestra los totales de respuesta cerca de la parte superior o izquierda de la tabla cruzada, pero solo si los totales son los mismos en varias tablas de cada columna.

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```js

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

### Transition Report

**Sintaxis:** obj << Transition Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que muestra cómo han cambiado las categorías a lo largo del tiempo. Solo está disponible para un modelo de Medidas repetidas. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Repeated Measures( :First Survey, :Second Survey ),
	Freq( :Count )
);
obj << Transition Report( 1 );

```

### Transposed Freq Chart

**Sintaxis:** obj << Transposed Freq Chart( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de frecuencias transpuesto que contiene una columna para cada nivel de respuesta y filas horizontales para los distintos niveles de muestra.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :marital status ), Responses( :country ) );
obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**Sintaxis:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Alinea respuestas múltiples de distintas filas que tengan el mismo ID.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Unique occurrences within ID( 1 ),
	Multiple Response by ID( :failure )
);

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

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

### X

**Sintaxis:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

