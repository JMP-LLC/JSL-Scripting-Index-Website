# Data Table



## Constructores asociados

### Association Analysis

**Sintaxis:** Association Analysis( Item( columns ), ID( columns ) )

**Descripción:** Identifica conexiones entre grupos de elementos en un evento o transacción independientes. El análisis de asociación se utiliza con frecuencia para analizar datos transaccionales (también denominados cestas de la compra) para identificar elementos que suelen aparecen juntos en las transacciones.

```jsl

dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Sintaxis:** Attribute Chart( Y( columns ), X( columns ) )

**Descripción:** Analiza las mediciones categóricas para mostrarle medidas de concordancia entre respuestas, como evaluadores.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );
obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Sintaxis:** Bayesian Optimization

**Descripción:** Recommends factor settings to optimize responses by augmenting the data table.

**JMP Versión agregada:** 19

### Bivariate

**Sintaxis:** Bivariate( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta continua con respecto a otra variable continua. Algunos métodos de análisis son ajuste de líneas, polinomiales, splines y densidades bivariantes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Sintaxis:** Boosted Tree (Y( column ), X( columns ))

**Descripción:** Construye un modelo predictivo creando un árbol de decisión grande y aditivo que es una secuencia de árboles de decisión más pequeños. Cada uno de los árboles se ajusta en los residuos del árbol anterior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);

```

### Bootstrap Forest

**Sintaxis:** Bootstrap Forest (Y( column ), X( columns ))

**Descripción:** Construye un modelo predictivo calculando la media de los valores predichos de muchos árboles de decisión. Cada árbol de decisión se ajusta a una muestra bootstrap aleatoria de los datos de entrenamiento.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Minimum Splits Per Tree( 5 ),
	Portion Bootstrap( 1 ),
	Number Terms( 3 ),
	Number Trees( 25 ),
	Go
);

```

### Bubble Plot

**Sintaxis:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Descripción:** Crea un gráfico de dispersión bidimensional de burbujas que se puede animar con una variable de tiempo. Se pueden utilizar variables adicionales para definir el tamaño y el color de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country )
);

```

### CUSUM Control Chart

**Sintaxis:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**Descripción:** Crea un gráfico que representa las sumas acumulativas de desviaciones de medias de subgrupo a partir de un objetivo. A este gráfico también se le denomina gráfico CUSUM tabular.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );
obj = dt << CUSUM Control Chart(
	Y( :weight ),
	H( 2 ),
	Lower Side( 1 ),
	Target( 8.1 ),
	K( 0.025 ),
	Sigma( 0.05 ),
	Head Start( 0.05 )
);

```

### Categorical

**Sintaxis:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Descripción:** Resume y analiza los datos de respuesta categórica. Los datos pueden ser respuestas simples, respuestas múltiples, medidas repetidas, concordancia de evaluadores, respuestas alineadas o texto libre. Incluye la posibilidad de generar tabulaciones cruzadas personalizadas de respuestas.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**Sintaxis:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**Descripción:** Crea una cuadrícula de celdas rectangular dibujada de tal manera que guarda una correspondencia de uno a uno con los valores de la tabla de datos. Las celdas de la cuadrícula se colorean en función de los valores de las celdas.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
obj = dt << Cell Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

### Choice

**Sintaxis:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Descripción:** Modela datos de un experimento de elección que estudia las preferencias de los clientes. Estima la probabilidad de que se prefiera una configuración específica mediante un tipo de regresión logística condicional.

#### Ejemplo 1

```jsl

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

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

### Close

**Sintaxis:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**Descripción:** Cierra la tabla de datos a que se hace referencia en el primer argumento, que apunta por defecto a la tabla de datos actual. El segundo argumento se usa para guardar la tabla de datos. Utilice una extensión adecuada de archivo en la ruta para guardar la tabla de datos en un formato ajeno a JMP. Si se especifica NoSave, se omite el mensaje que pide que se guarden o se descarten los cambios.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

### Cluster Variables

**Sintaxis:** Cluster Variables( Y( columns ) )

**Descripción:** Conglomera variables (columnas) en grupos que pueden representarse mediante un único componente o variable. Las variables de conglomerado pueden utilizarse como técnica de reducción de la dimensión.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**Sintaxis:** Contingency( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta categórica de un conjunto de grupos categóricos. Algunos métodos de análisis son las pruebas de ji cuadrado y los gráficos en mosaico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Sintaxis:** Contour Plot( X( column, column ), Y( column ) )

**Descripción:** Crea un gráfico con tres variables en una vista bidimensional en la que la tercera variable está representada mediante curvas de contorno de igual valor.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Sintaxis:** Contour Profiler( Y( column1, column2, ... ) )

**Descripción:** Crea un gráfico de contorno interactivo que le permite explorar cómo cambia una o más de las respuestas predichas en los distintos pares de factores. Los valores de factores que no se utilicen en el gráfico se pueden variar para explorar aún más el impacto de la configuración de los factores en las respuestas predichas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Control Chart Builder

**Sintaxis:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Descripción:** Permite crear interactivamente gráficos de control, que se utilizan para determinar si un proceso es estable y predecible. La plataforma Constructor de gráficos de control se puede utilizar para crear los siguientes tipos de gráficos de control: IMR, X-Barra, de corrida corta, de tiempo, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sobre gráficos de medias, de tres vías y de eventos raros.

#### Gráfico C

```jsl

// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

#### Gráfico de diferencia de corrida corta

```jsl

// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);

```

#### Gráfico de diferencias de corrida corta para X-Barra

```jsl

// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

#### Gráfico de rangos móviles de la mediana

```jsl

// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

#### Gráfico de rangos móviles de la mediana sobre las desviaciones estándar del grupo (establecer tamaño del subgrupo)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### Gráfico de rangos móviles de la mediana sobre las desviaciones estándar del grupo (variable de subgrupo)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### Gráfico de rangos móviles de la mediana sobre medias grupales (establecer tamaño del subgrupo)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### Gráfico de rangos móviles de la mediana sobre medias grupales (variable de subgrupo)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Median Moving Range" ) )
	)
);

```

#### Gráfico de tiempo

```jsl

// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

#### Gráfico de tres vías (establecer tamaño del subgrupo)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 3 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

#### Gráfico de tres vías (variable de subgrupo)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Average" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

#### Gráfico estandarizado de corrida corta

```jsl

// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

#### Gráfico estandarizado de corrida corta para X-Barra

```jsl

// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

#### Gráfico G de eventos raros

```jsl

// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

#### Gráfico IMR

```jsl

// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

#### Gráfico IMR sobre la desviación estándar del grupo (establecer tamaño del subgrupo)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### Gráfico IMR sobre la desviación estándar del grupo (variable de subgrupo)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Moving Range" ) )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Std Dev" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### Gráfico IMR sobre medias (establecer tamaño del subgrupo)

```jsl

// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### Gráfico IMR sobre medias (variable de subgrupo)

```jsl

// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Moving Range on Means" ) ),
		Limits( Sigma( "Moving Range" ) )
	)
);

```

#### Gráfico Levey-Jennings

```jsl

// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

#### Gráfico NP

```jsl

// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

#### Gráfico P

```jsl

// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

#### Gráfico P'

```jsl

// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

#### Gráfico T de eventos raros

```jsl

// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

#### Gráfico U

```jsl

// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

#### Gráfico U'

```jsl

// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

#### Gráfico X- Barra/S (variable de subgrupo)

```jsl

// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

#### Gráfico X-Barra/R

```jsl

// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

#### Gráfico X-Barra/S (Establecer tamaño del subgrupo)

```jsl

// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Cumulative Damage

**Sintaxis:** Cumulative Damage

**Descripción:** Analiza los modelos de estrés variante o estrés por pasos.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );
Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );
obj = Cumulative Damage(
	Model Type( "Step Stress" ),
	Time to Event Data Table(
		Data Table( "CD Step Stress" ),
		Time to Event( :Time ),
		Censor( :Censor ),
		Pattern ID( :Pattern ID ),
		Censor Code( 1 )
	),
	Step Stress Pattern Data Table(
		Data Table( "CD Step Stress Pattern" ),
		Stress Duration( :Duration ),
		Stress( :Stress ),
		Pattern ID( :Pattern ID )
	),
	Relationship( "Inverse Power" ),
	Distribution( "Lognormal" ),
	Pattern Continuation( "Terminate" )
);

```

### Custom Profiler

**Sintaxis:** Custom Profiler( Y( column1, column2, ... ) )

**Descripción:** Proporciona una interfaz que le permite optimizar respuestas sin una salida gráfica. Este perfilador es útil para problemas de mayor envergadura.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Degradation

**Sintaxis:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Descripción:** Modela la degradación con el tiempo usando curvas lineales y no lineales. Algunas de las opciones de análisis son el análisis de la estabilidad y la generación de datos de seudo falla.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );
obj = dt << Degradation(
	Y( :Current ),
	Time( :Hours ),
	Label( :Unit ),
	Application( "Repeated Measures Degradation" ),
	Upper Spec Limit( 10 ),
	Model Report(
		Simple Linear Path(
			X Scale( Linear ),
			Y Scale( Linear ),
			Intercept( Common ),
			Slope( Different )
		)
	)
);

```

### Destructive Degradation

**Sintaxis:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descripción:** Modela los datos de degradación destructiva con el tiempo.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );
obj = dt << Destructive Degradation(
	Y( :Strength ),
	Time( :Weeks ),
	X( :Degrees ),
	Censor( :Censor ),
	Censor Code( "Right" ),
	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),
	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" )
);

```

### Diagram

**Sintaxis:** Diagram( Y( column ), X( column ) )

**Descripción:** Crea un diagrama de causa y efecto. También se denomina diagrama Ishikawa o de espina de pez. Son diagramas jerárquicos que le permiten explorar causas raíz.

```jsl

dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );
obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**Sintaxis:** Discriminant( Y( columns ), X( columns ) )

**Descripción:** Estima la distancia de cada observación a cada media multivariante del grupo (centroide) usando la distancia de Mahalanobis. Las observaciones se clasifican entonces en el grupo que tengan más cerca.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Distance Matrix

**Sintaxis:** Distance Matrix( Y( columns ) )

**Descripción:** Calcula distancias entre filas utilizando diversos métodos.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**Sintaxis:** Distribution( Column() )

**Descripción:** Muestra la distribución y estadísticos de resumen univariantes para cada variable. Los resultados y las opciones dependen del tipo de modelización de cada variable. Algunas de las opciones son histogramas, diagramas de caja, gráficos de cuantiles, distribuciones de ajuste y análisis de capacidad.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

### EMP Measurement Systems Analysis

**Sintaxis:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Descripción:** Inicia el método EMP (evaluación del proceso de medición) para el análisis de sistemas de medición. Los gráficos de medias y de dispersión (rango o desviación estándar) se muestran de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### EWMA Control Chart

**Sintaxis:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Descripción:** Crea un gráfico que representa las medias móviles ponderadas exponencialmente y un gráfico que traza las observaciones individuales o las medias de los subgrupos. Al gráfico EWMA también se le conoce como gráfico de control de retroalimentación.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**Sintaxis:** Explore Missing Values( Y( columns ) )

**Descripción:** Busca patrones de valores faltantes e imputación de conducta.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Sintaxis:** Explore Outliers( Y( columns ) )

**Descripción:** Identifica, explora y gestiona valores atípicos en datos univariantes y multivariantes.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Sintaxis:** Explore Patterns( Y( columns ) )

**Descripción:** Buscar características inusuales en los datos, incluidas las corridas largas, las secuencias largas duplicadas, los valores con formatos inusuales y las corridas de relaciones lineales.

```jsl

dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Sintaxis:** Factor Analysis( Y( columns ) )

**Descripción:** Descubre la estructura subyacente de datos extrayendo las variables no observadas, o factores, que representan la variabilidad común entre variables observadas. La rotación factorial se utiliza para aumentar su interpretabilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Fatigue Model

**Sintaxis:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descripción:** Analiza datos de fatiga, también conocido como modelización de curva S-N.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );
obj = dt << Fatigue Model(
	N( :Cycles ),
	S( :Stress ),
	Censor( :Censoring Indicator ),
	Censor Code( "Runout" )
);

```

### Fit Curve

**Sintaxis:** Fit Curve( Y( column ), X( column ) )

**Descripción:** Ajusta una diversidad de modelos no lineales integrados.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Life by X

**Sintaxis:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**Descripción:** Analiza la distribución de datos de tiempo hasta suceso parametrizados por un único factor de regresión. Algunas de las opciones de análisis son modelos de tiempos de falla acelerados, distribuciones de vida entre grupos y transformaciones de factores de regresión.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Fit Life by X(
	Y( :Hours ),
	X( :Temp ),
	Distribution( Lognormal ),
	Censor( :Censor ),
	Freq( :Weight ),
	Relationship( Arrhenius Celsius )
);

```

### Fit Parametric Survival

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Descripción:** Ajusta un modelo de regresión lineal general a tiempos de supervivencia. Estos modelos pueden utilizarse para los tiempos de supervivencia que puedan expresarse como función de una o más variables explicativas. Tiene en cuenta varias distribuciones de supervivencia y censuras.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### Fit Proportional Hazards

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Descripción:** Ajusta un modelo de regresión semiparamétrica (el modelo de Cox de riesgos proporcionales) para valorar el efecto de las variables explicativas en tiempos de supervivencia mientras se tiene en cuenta la censura.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### Formula Depot

**Sintaxis:** Formula Depot

**Descripción:** Un contenedor de modelos de predicción que admite la comparación de modelos, el perfilado y la generación de códigos de puntuación. El almacén de fórmulas se inicia a través del menú Analizar, los comandos de Publicar en las plataformas de modelización, Recodificar y el Editor de fórmulas.

```jsl


fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Sintaxis:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Descripción:** Ajusta modelos funcionales utilizando un modelo base B-Spline, P-Spline, Fourier u Ondículas. Se puede realizar un análisis funcional de los componentes principales en el modelo funcional para extraer características importantes de los datos. También existe la opción de realizar un análisis funcional de los componentes principales directamente en los datos, sin ajustar primero un modelo de función con base.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Sintaxis:** Gaussian Process( Y( column ), X( columns ) )

**Descripción:** Modela la relación entre una respuesta continua y uno o más predictores continuos como un spline con interpolación.

```jsl

dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );
obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**Sintaxis:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Descripción:** Ofrece una interfaz gráfica interactiva que le permite explorar los datos. Puede arrastrar columnas e introducirlas en zonas gráficas para crear una amplia variedad de gráficos, como gráficos de dispersión, gráficos de contorno, diagrama de barras, gráficos de áreas, diagramas de barras, histogramas, mapas de calor, gráficos circulares, mapas en árbol, gráficos en mosaico y mapas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);

```

### Hierarchical Cluster

**Sintaxis:** Hierarchical Cluster( Y( columns ) )

**Descripción:** Conglomera filas en función de las variables continuas o categóricas. El conglomerado jerárquico comienza tratando cada fila como su propio conglomerado y después combina dos conglomerados a la vez sucesivamente.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );
obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**Sintaxis:** Item Analysis( Y( columns ) )

**Descripción:** Relaciona un rasgo o habilidad con la probabilidad de que un individuo apruebe o responda correctamente a un elemento.

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**Sintaxis:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Descripción:** Conglomera las filas en función de las variables numéricas de las tablas de datos con hasta millones de filas. Debe especificar el número de conglomerados de antemano.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << K Means Cluster(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### K Nearest Neighbors

**Sintaxis:** K Nearest Neighbors(Y( column ), X( columns ))

**Descripción:** Predice una respuesta continua o categórica basada en las respuestas de los k vecinos más cercanos en el espacio de las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Latent Class Analysis

**Sintaxis:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Descripción:** Conglomera filas en función de variables categóricas usando mezclas multinomiales. Debe especificar el número de clases latentes (conglomerados) de antemano.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Latent Class Analysis(
	Y( :sex, :marital status, :country, :size, :type ),
	Number of Clusters( 3 )
);

```

### Life Distribution

**Sintaxis:** Life Distribution( Y( column(s) ) )

**Descripción:** Analiza la distribución de los datos de tiempo hasta suceso. Se puede utilizar para modelar datos censurados, la duración del producto, la confiabilidad y las causas competitivas.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**Sintaxis:** Logistic( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta categórica con respecto a una variable continua. Algunos de los métodos de análisis son regresión logística y curvas ROC.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**Sintaxis:** Make Validation Column( &lt;Columnas de estratificación(columns)&gt;, &lt;Columnas de agrupación(columns)&gt;, &lt;Columna de punto de corte(column)&gt;, &lt;ID de lote de punto de corte(column)&gt; )

**Descripción:** Crea una columna utilizada para dividir los datos en conjuntos de entrenamiento, validación y pruebas.

#### Ejemplo de estratificación

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Make Validation Column(
	Stratification Columns( :Gender ),
	Training Set( 0.50 ),
	Validation Set( 0.25 ),
	Test Set( 0.25 ),
	New Column Name( "Valid1" ),
	Random Seed( 1234 ),
	Go
);

```

#### Ejemplo de punto de corte

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << Make Validation Column(
	Cutpoint Column( :Week of Year ),
	Cutpoint Batch ID( :ID ),
	Training Set( 0.60 ),
	Validation Set( 0.25 ),
	Test Set( 0.15 ),
	New Column Name( "Cutpoint Batch Validation" ),
	Go
);

```

### Manage Limits

**Sintaxis:** Manage Limits( Process Variables( columns ) )

**Descripción:** Inicia la utilidad para gestionar límites de calidad para varias columnas a la vez. Puede agregar, editar y guardar límites en las propiedades de columna.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**Sintaxis:** Marker Admixture( Marker( columns ) )

**Descripción:** Estima la mezcla poblacional de los individuos a partir de los genotipos de los marcadores.

**JMP Versión agregada:** 19

#### Ejemplo 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

#### Ejemplo 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Admixture(
	Marker( Column Group( "Markers" ) ),
	Set(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	),
	Fit(
		Missing Marker Imputation Method( "Specified" ),
		Estimation Method( "Fixed Parameter" ),
		Unthreaded( 1 ),
		Imputation Value( 1 ),
		Number of Ancestral Populations( 3 )
	)
);

```

### Marker Imputation

**Sintaxis:** Marker Imputation( Marker( columns ) )

**Descripción:** Imputes numeric missing marker genotypes.

**JMP Versión agregada:** 19

#### Ejemplo 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

#### Ejemplo 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set missing values for some markers
dt = Current Data Table();
nMarkers = 60; //number of markers in the data table
Random Reset( 0 ); //set seed for reproducibility
SelectedMarkers = As List( Random Index( nMarkers, 15 ) + 10 ); //random select 15 markers and return their column indexes
dt << Clear Select; //clear row selection
dt << Clear Column Selection; //clear column selection
For( i = 1, i <= N Items( SelectedMarkers ), i++, //loop over selected markers
	dt << Select Columns( SelectedMarkers[i] ); //select column in the data table
	Random Reset( i ); //set seed for reproducibility
	dt << Select Randomly( 20 ); //random select 20 rows
	sRows = dt << Get Selected Rows; //get indexes of selected rows
	Column( SelectedMarkers[i] )[sRows] = .;//set selected rows to missing values
	dt << Clear Select; //clear row selection
	dt << Clear Column Selection; //clear column selection
);

//Run platform
obj = dt << Marker Imputation(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Missing Marker Imputation Method( "LD-kNN" )
);

```

### Marker Relatedness

**Sintaxis:** Marker Relatedness( Marker( columns ) )

**Descripción:** Estima varios tipos de medidas de relaciones genómicas entre pares de marcadores genéticos individuales basados en organismos diploides y poliploides.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE Off" ),
	Kinship Type( "Identical by State" )
);

```

#### Ejemplo 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Run platform
obj = dt << Marker Relatedness(
	Marker( Column Group( "Markers" ) ),
	Ploidy( 2 ),
	Set Random Seed( 12345 ),
	Missing Marker Imputation Method( "HWE On" ),
	Kinship Type( "Identical by State" )
);

```

### Marker Simulation

**Sintaxis:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Descripción:** Simula los genotipos del marcador de los cruces parentales y calcula las medidas relacionadas del rendimiento reproductivo.

**JMP Versión agregada:** 17

#### Ejemplo 1

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

#### Ejemplo 2

```jsl


dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker Statistics

**Sintaxis:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Descripción:** Realiza un análisis de los datos de marcadores genéticos para calcular medidas como la frecuencia del alelo menos común, equilibrio de Hardy-Weinberg y desequilibrio de ligamiento.

**JMP Versión agregada:** 17

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Marker Statistics(
	Marker( Column Group( "Markers" ) ),
	With Marker( Column Group( "Markers" ) ),
	Ploidy( 2 )
);

```

### Matched Pairs

**Sintaxis:** Matched Pairs( Y( columns ), X( column ) )

**Descripción:** Compara las medias de conjuntos de variables coincidentes usando las pruebas t por pares o análisis de medidas repetidas simples para tener en cuenta la correlación entre respuestas.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Sintaxis:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Descripción:** Crea un diseño para buscar la combinación de los atributos de producto que los clientes prefieren en primer lugar y en último lugar.

```jsl

dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );
obj = dt << MaxDiff(
	One Table( 1 ),
	Subject ID( :Respondent ),
	Choice Set ID( :Choice Set ID ),
	Profile ID( :Response ),
	Profile Grouping( :Survey ID ),
	Profile Effects( :Profile ID ),
	Response Value Indicates Best( 1 ),
	Response Value Indicates Worst( -1 )
);

```

### Mixture Profiler

**Sintaxis:** Mixture Profiler( Y( column1, column2, ... ) )

**Descripción:** Crea un gráfico ternario interactivo que le permite explorar los contornos de las fórmulas de predicción guardadas para modelos de mezcla con tres o más factores.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Sintaxis:** Model Comparison( Predictors( columns ), Group( column ) )

**Descripción:** Compara el rendimiento de los modelos mediante columnas de fórmula de predicción.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Sintaxis:** Model Driven Multivariate Control Chart( Process( columns ) )

**Descripción:** Crea gráficos de control multivariante basados en los componentes principales o los métodos de mínimos cuadrados parciales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );
obj = dt << Model Driven Multivariate Control Chart(
	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN )
);

```

### Model Screening

**Sintaxis:** Model Screening( Y( column ), X( columns ) )

**Descripción:** Ajusta muchos modelos predictivos distintos de modo que pueda seleccionar el mejor.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Multidimensional Scaling

**Sintaxis:** Multidimensional Scaling( Y( columns ) )

**Descripción:** Crea una representación visual del patrón de proximidades entre un conjunto de objetos.

```jsl

dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );
obj = dt << Multidimensional Scaling(
	Y(
		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,
		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,
		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,
		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC
	)
);

```

### Multiple Correspondence Analysis

**Sintaxis:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Descripción:** Identifica las asociaciones entre los niveles de variables categóricas. El análisis de correspondencias múltiples es análogo al análisis de componentes principales para los datos categóricos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
dt << Multiple Correspondence Analysis(
	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),
	X( :Manufacturer )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Sintaxis:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Descripción:** Analiza la concordancia entre panelistas en análisis de datos sensoriales.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

### Multivariate

**Sintaxis:** Multivariate( Y( columns ) )

**Descripción:** Explora la correlación y las asociaciones entre variables numéricas empleando una variedad de técnicas de análisis multivariantes. Algunas de estas técnicas son las medidas de asociación paramétrica y no paramétrica, matrices de gráfico de dispersión, análisis de componentes principales, análisis de valores atípicos y confiabilidad del elemento.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**Sintaxis:** Multivariate Embedding( Y( columns ) )

**Descripción:** Asigna datos de espacios de muy alta dimensionalidad a un espacio de baja dimensionalidad mediante el método Aproximación y proyección de colector uniforme (UMAP) o el método Incorporación de vecinos estocásticos distribuidos en t (t-SNE). Muchas veces, quiere asignar los datos a dos o tres dimensiones para que el espacio de baja dimensionalidad se pueda visualizar fácilmente. Ambos métodos intentan conservar la estructura local de los datos, pero UMAP suele ser más rápido que t-SNE para conjuntos de datos grandes.

**JMP Versión agregada:** 17

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* Parameters can be changed according to data features */
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Method( "t-SNE" ),
	Maximum Iterations( 1500 ),
	Perplexity( 15 ),
	Initial Principal Component Dimensions( 55 ),
	Random Seed( 2022 ),
	Output Dimensions( 3 )
);

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
/* by group example */
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Multivariate Embedding(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Naive Bayes

**Sintaxis:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Descripción:** Predice la pertenencia a los grupos para una variable categórica en función de la proximidad de sus valores predictores a los valores predictores para cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Naive Bayes(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Neural

**Sintaxis:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Descripción:** Predice una o más variables de respuesta mediante una función flexible de las variables de entrada. El marco de trabajo flexible incorpora poner capas y funciones en forma de S.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### New Table

**Sintaxis:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**Descripción:** Crea una nueva tabla de datos. "Invisible" oculta la tabla de datos de la vista pero la muestra en la Ventana principal de JMP. "Private" oculta la tabla por completo. "Visible" es la opción predeterminada y crea una tabla normal que está visible y aparece en la Ventana principal de JMP. Los argumentos actions opcionales son cualquier mensaje que sean compatibles con las tablas de datos.

```jsl

dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "height", Continuous, Set Values( [59, 61, 55] ) )
);

```

### Nonlinear

**Sintaxis:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Descripción:** Ajusta modelos no lineales mediante mínimos cuadrados o una función de pérdida personalizada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Sintaxis:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Descripción:** Conglomera filas en función de las variables numéricas cuando sus datos provengan de una mezcla de distribuciones normales multivariantes solapadas. Debe especificar el número de conglomerados de antemano.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normal Mixtures(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Number of Clusters( 3 )
);
obj << Go;

```

### Normalization

**Sintaxis:** Normalization( Y( columns ) )

**Descripción:** Adjusts for technical biases and improves suitability for subsequent analysis

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**Sintaxis:** Notebook

**Descripción:** Crea un nuevo cuaderno o devuelve el cuaderno con el nombre o índice proporcionado.

```jsl


nb = Notebook();

```

### Oneway

**Sintaxis:** Oneway( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta continua en un conjunto de grupos categóricos. Algunos de los métodos de análisis son ANOVA, comparaciones de medias, análisis de medias y gráficos de cuantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Sintaxis:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**Descripción:** Abre un archivo JMP o importa otro tipo de archivo compatible. La opción de las tablas de datos abiertas "Invisible" oculta el archivo de la vista pero lo muestra en la Ventana principal de JMP, mientras que "Privado" oculta el archivo completamente. La opción de archivo "Seleccionar columnas" lee solo en las columnas especificadas, "Ignorar columnas" es la acción inversa de "Seleccionar columnas", no lee las columnas especificadas. Las opciones de archivo JMP "Solo nombres de columna" e "Información de la tabla" no leen los datos ni crean una tabla de datos. "Solo nombres de columna" devuelve la lista de los nombres de columna de la tabla de datos, mientras que "Información de la tabla" devuelve el número de columnas y filas de la tabla de datos. Las opciones "FIRST(n)&apos;/&apos;LAST(n)&apos;/&apos;RANDOM(n)" leen solamente N filas de la tabla de datos. Si N es un número entre 0 y 1, N es una fracción del número total de filas de la tabla de datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

#### Ejemplo 4

```jsl

info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );
Print( info );

```

#### Ejemplo 5

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );
Print( info );

```

#### Ejemplo 6

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );
Print( info );

```

### Parallel Plot

**Sintaxis:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**Descripción:** Crea un gráfico de dos o más variables con segmentos de líneas de unión para cada fila.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );
dt << Parallel Plot(
	Y(
		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,
		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,
		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,
		:"1992 Math"n
	)
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Sintaxis:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**Descripción:** Muestra la frecuencia relativa de los elementos en un proceso relacionado con la calidad en orden descendente. Puede definir una o más variables de clasificación para crear un gráfico de Pareto comparativo.

#### Agrupar

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

#### Simple

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );

```

#### Subcategoría

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Partial Least Squares

**Sintaxis:** Partial Least Squares( Y( columns ), X( columns ) )

**Descripción:** Ajusta un modelo a una o más variables de respuesta usando factores latentes. Esto permite que se ajusten los modelos cuando las variables explicativas están altamente correlacionadas o cuando hay más variables explicativas que observaciones.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );
obj = dt << Partial Least Squares(
	Y( :Hedonic, :Goes with meat, :Goes with dessert ),
	X( :Price, :Sugar, :Alcohol, :Acidity ),
	Go
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
obj = dt << Partial Least Squares(
	Y( :ls, :ha, :dt ),
	X(
		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,
		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27
	),
	Go
);

```

### Predictor Screening

**Sintaxis:** Predictor Screening( Y( columns ), X( columns ) )

**Descripción:** Identifica predictores significativos de un gran número de candidatos usando la partición de bosque bootstrap para evaluar la contribución de los predictores a la respuesta.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Sintaxis:** Principal Components( Y( columns ) )

**Descripción:** Modela la variación en un conjunto de variables en términos de un número menor de combinaciones lineales independientes (componentes principales) de esas variables.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = dt << Principal Components(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane )
);

```

### Process Capability

**Sintaxis:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Descripción:** Calcula un análisis de capacidad del proceso para cada proceso y crea gráficos útiles para analizar la capacidad de varios procesos a la vez. También se pueden definir límites de especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

### Process History Explorer

**Sintaxis:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Descripción:** Identifica los pasos del proceso asociados a un rendimiento deficiente.

```jsl

dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );
dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );
obj = dt << Process History Explorer(
	ID( :Lot, :Wafer ),
	X( :Tool, :Route ),
	Step( :Layer, :Operation ),
	Timestamp( :TimeIn, :TimeOut ),
	Yield Table( "Lot Wafer Yield" ),
	Yield Columns( "Yield" )
);

```

### Process Screening

**Sintaxis:** Process Screening( Process Variables( columns ) )

**Descripción:** Examina numerosos procesos desde varias perspectivas, incluida la pruebas estabilidad, capacidad, pruebas de gráfico de control y desplazamiento (desfase). Es útil porque ofrece la posibilidad de centrarse en los procesos que requieren atención.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Profiler

**Sintaxis:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Descripción:** Crea un gráfico interactivo que le permite explorar cómo cambia una respuesta predicha al cambiar la configuración de los factores. Para cada factor, el perfilador muestra trazados de predicción basados en las fórmulas de predicciones guardadas y restricciones lineales, e ilustra cómo cambia la respuesta con respecto a ese factor. El argumento Expandir corresponde a la opción Expandir fórmulas intermedias en la ventana de inicio.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 )
);

```

#### Ejemplo 2

```jsl

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

#### Ejemplo 3

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**Sintaxis:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**Descripción:** Analiza сómo está distribuido un suceso recurrente en el tiempo, por sistema, o hasta que el sistema queda fuera de servicio.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );
obj = dt << Recurrence Analysis(
	Y( :Age ),
	Cost( :Cost ),
	Grouping( :Treatment Group ),
	Label( :Patient Number )
);

```

### Reliability Forecast

**Sintaxis:** Reliability Forecast

**Descripción:** Predice fallas futuras a partir de los datos observados y futuras unidades en riesgo. La plataforma acepta varios formatos de entrada. Consulte cada formato para detalles de especificación.

#### Formato de fechas

```jsl


dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );

obj = dt1 << Reliability Forecast(
	Input Format( Dates ),
	Production Data Table(
		dt1,
		Production Count( :Sold Quantity ),
		Timestamp( :Sold Month )
	),
	Failure Data Table(
		dt2,
		Failure Time( :Return Month ),
		Timestamp( :Sold Month ),
		Failure Count( :Return Quantity )
	),
	Life Time Unit( Month ),
	Show Legend( 1 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group( "" ),
		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),
		Future Risk Set(
			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],
			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]
		),
		Forecast To( "02/2011" ),
		Distribution( Weibull ),
		Contract( 6, Month ),
		Forecast Type( Sequential ),
		Interval Type( Prediction Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 1 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

#### Formato de tiempo hasta suceso

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );
obj = dt << Reliability Forecast(
	Input Format( Time to Event ),
	Time to Event( :"Time (Month)"n, :Time Right ),
	Freq( :Freq ),
	Life Time Unit( Month ),
	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),
	Forecast(
		Group( "" ),
		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),
		Forecast To( "09/01/2010" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( [1] ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( 0 ),
		Use Approximate Distribution( 1 )
	)
);

```

#### Formato Nevada

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );
collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );
obj = dt << Reliability Forecast(
	Input Format( Nevada ),
	Production Count( :Volume ),
	Timestamp( :Time ),
	Failure Count( Eval List( collist ) ),
	Life Time Unit( Month ),
	Interval Censored Failure( 1 ),
	Show Legend( 0 ),
	Show Graph Filter( 0 ),
	Forecast(
		Group(),
		Risk Set(
			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,
			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,
			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]
		),
		Forecast To( "01/2004" ),
		Distribution( Weibull ),
		Contract( 5, Month ),
		Forecast Type( Incremental ),
		Interval Type( No Interval ),
		Set Interval Level( 0.9 )
	),
	Forecast Options(
		Animation( 1 ),
		Interactive Configuration of Risk Sets( 1 ),
		Spreadsheet Configuration of Risk Sets( 0 ),
		Show Interval( 0 ),
		Forecasting Interval Type( Prediction Interval ),
		Use Contract Length( 1 ),
		Use Failure Cost( 0 ),
		Set Failure Cost( . ),
		Monte Carlo Sample Size( 10000 ),
		Random Seed( -1 ),
		Use Approximate Distribution( 1 )
	)
);

```

### Reliability Growth

**Sintaxis:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; );obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; )obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**Descripción:** Modela el cambio de confiabilidad de un único sistema reparable con el tiempo a medida que se incorporan mejoras a su diseño. La plataforma acepta varios formatos de entrada. Consulte cada formato para detalles de especificación.

#### Fechas

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

#### Sistemas concurrentes

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

#### Sistemas paralelos

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

#### Tiempo hasta suceso

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Repeated Measures Degradation

**Sintaxis:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descripción:** Modela datos de degradación de mediciones repetidas con el paso del tiempo con parámetros aleatorios.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );
obj = dt << Repeated Measures Degradation(
	Y( :Power Drop ),
	Time( :Hours ),
	Label( :Device ),
	X( :Degrees C ),
	Reference Temperature( "Celsius", 195 ),
	Control( "Linear", "Linear", "First Order Kinetics Type 2" )
);

```

### Response Screening

**Sintaxis:** Response Screening( Y( columns ), X( columns ) )

**Descripción:** Automatiza el proceso de realizar pruebas para los efectos del modelo lineal en un gran número de respuestas. Los resultados de las pruebas y los estadísticos de resumen se presentan en tablas de datos y gráficos. La tasa de falsos descubrimientos (FDR) evita las declaraciones de significación incorrectas. Un método de estimación robusto reduce la sensibilidad de las pruebas a los valores atípicos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**Sintaxis:** Scatterplot 3D( Y( columns ) )

**Descripción:** Crea un gráfico de dispersión tridimensional giratorio para tres o más variables. Si especifica más de tres variables, puede ir cambiando y seleccionar qué variables se muestran el gráfico de dispersión.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**Sintaxis:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**Descripción:** Genera una cuadrícula de gráficos de dispersión que le permite explorar relaciones bivariantes. Si no se especifica ninguna variable X, los gráficos de dispersión son para todos los pares de variables Y. Si se especifica una o más variables X, los gráficos de dispersión son para las variables Y representadas frente a las variables X.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Scatterplot Matrix(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Structural Equation Models

**Sintaxis:** Structural Equation Models( Model Variables ( columns ) )

**Descripción:** Proporciona un marco de trabajo para ajustar una variedad de modelos, incluido el análisis factorial confirmatorio, los modelos de senderos con o sin variables latentes, los modelos de errores de medición y los modelos de curva de crecimiento latente.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Structural Equation Models(
	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit(
		Model Name( "One Factor CFA" ),
		New Latent( "Leader" ),
		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),
		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),
		Variances(
			{:Support_L, {:Support_L}},
			{:Goal_L, {:Goal_L}},
			{:Work_L, {:Work_L}},
			{:Interact_L, {:Interact_L}},
			{"Leader", {"Leader"}}
		),
		Standardized Parameter Estimates( 1 ),
		Normalized Residuals Heat Map( 1 )
	)
);

```

### Support Vector Machines

**Sintaxis:** Support Vector Machines(Y( column ), X( columns ))

**Descripción:** Predice una respuesta basada en los vectores de soporte en el espacio de las variables X. Uno de los objetivos del algoritmo Máquinas de vectores de soporte es utilizar los datos de entrenamiento para aprender a clasificar nuevos datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Surface Plot

**Sintaxis:** Surface Plot( Columns() )

**Descripción:** Crea un gráfico de puntos tridimensional giratorio o una superficie definida por una fórmula guardada.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Surface Plot(
	Columns(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Survival

**Sintaxis:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**Descripción:** Calcula estimaciones de las funciones de supervivencia mediante el método del producto límite (Kaplan-Meier) para uno o más grupos.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Sintaxis:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descripción:** Crea una tabla personalizada de estadísticos de resumen de una o más variables. Las variables se pueden agrupar en una o más columnas de clasificación. Le permite construir la tabla de resumen mediante operaciones de arrastrar y colocar.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

### Ternary Plot

**Sintaxis:** Ternary Plot( Y( columns ) )

**Descripción:** Crea un gráfico bidimensional de tres componentes de mezcla que suman una constante.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Sintaxis:** Text Explorer( Text Columns( columns ) )

**Descripción:** Analiza palabras de un texto en una columna, las cuenta y las asocia con otras columnas, guarda los indicadores y representa las relaciones en gráficos.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**Sintaxis:** Time Series( Y( column ) )

**Descripción:** Modela una serie de observaciones en puntos temporales igualmente espaciados. Incluye un gráfico de serie de tiempo, autocorrelaciones, variograma, densidad espectral, ARIMA, ARIMA estacional, modelos de alisado y pronósticos.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Sintaxis:** Time Series Forecast( Y( column ) )

**Descripción:** Ajusta y predice varias series de tiempo mediante métodos especificados.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );
obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**Sintaxis:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**Descripción:** Ajusta un árbol de particiones recursivas que selecciona divisiones para maximizar las diferencias de tratamiento. Los modelos identifican grupos de individuos que con mayor probabilidad responderán a un tratamiento.

#### Ejemplo 1

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 3 )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 3 )
);

```

### Variability Chart

**Sintaxis:** Variability Chart( Y( column ), X( columns ) )

**Descripción:** Analiza mediciones continuas para determinar el rendimiento de su sistema de medición. También puede realizar un estudio de medición para ver medidas de variación en sus datos.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Virtual Join

**Sintaxis:** Virtual Join

**Descripción:** Vincula una tabla de datos principal con una tabla de datos auxiliar a través de una columna ID.

Habilita la tabla principal para acceder a columnas desde la tabla auxiliar sin la combinación física de las tablas.



La propiedad de columna ID de enlace marca una columna de la tabla auxiliar como la columna ID.



La propiedad de columna Referencia de enlace establece una correspondencia entre una columna de la tabla principal y la columna ID de la tabla auxiliar.

La propiedad Referencia de enlace le permite establecer la referencia de la tabla de datos o la ruta de la tabla de datos que quiere vincular.

La opción "Utilizar nombre de columna vinculada" creará las columnas vinculadas con el nombre de columna de origen en lugar del nombre único completo.

#### Ejemplo 1

```jsl

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);
cID << Save( "$temp\cID.jmp" );

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID",
		Numeric,
		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),
		Set Values( [1, 2, 1, 2] )
	),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);

Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );

Favs:colorID[2] = 1; // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );
Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );

Write( "\!nRalph's color changed." );

```

#### Ejemplo 2

```jsl

cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name" )}
);


Favs:color << hide( 0 ); // show the color column in the table, it is hidden by default

Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );

```

#### Ejemplo 3

```jsl


cID = New Table( "Color IDs",
	Add Rows( 2 ),
	New Column( "ID", Numeric, Set Values( [1, 2] ) ),
	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) )
);

Favs = New Table( "Favorite Colors",
	Add Rows( 4 ),
	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),
	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) )
);
cID:ID << Set Property( "Link ID", 1 );
Favs:colorID << Set Property(
	"Link Reference",
	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )}
);

Favs2 = New Table( "More Favorites",
	Add Rows( 4 ),
	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),
	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) )
);

// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  
// automatically open the linked tables for you when you open the main referencing table.
Favs2:ID << Set Property( "Link ID", 1 );
cID:ID << Set Property(
	"Link Reference",
	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )}
);

Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by default
Favs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites table
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"n

Favs:colorID[2] = 1;    // Change ralph's color by changing his color id
Write( "\!n", Favs:person[2], " likes ", Favs:color[2] );

Write( "\!nRalph's color changed." );
cid:person << hide( 0 );

Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

## Mensajes del elemento

### Add Properties to Table

**Sintaxis:** obj &lt;&lt; Add Properties to Table

**Descripción:** Agrega propiedades a la tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Sintaxis:** obj &lt;&lt; Add Scripts to Table

**Descripción:** Este comando es un alias de &apos;Agregar propiedades a la tabla&apos;.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();
dt2 = New Table( "Little Class" );
dt2 << Add scripts to table( proplist );

```

### Anonymize

**Sintaxis:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**Descripción:** Crea una nueva tabla de datos con los identificadores únicos eliminados.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Sintaxis:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**Descripción:** Active esta opción para aplicar los filtros de la lista Columnas de la tabla de datos en la cuadrícula de datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Column Filter( Column Name( "tude" ) );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 0 );
Wait( 1 );
dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Sintaxis:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**Descripción:** Utiliza una fórmula para transformar una o más columnas y coloca los resultados (como fórmulas o datos) en columnas nuevas o existentes.

Debe haber definido al menos un grupo de columnas (una única columna, una lista explícita de columnas, una corrida de columnas o un nombre de grupo de columnas existente).

El primer grupo definido sirve como objetivo si la salida es "En su ubicación". Si la fórmula lo requiere, puede especificar un nombre que haga referencia a las columnas tomadas de una en una (Ref) o como una lista de columnas (ListRef).

Por último, se puede especificar el tipo de salida, opcionalmente con un nombre y nombre de grupo para las columnas nuevas.

**JMP Versión agregada:** 18

#### New Data Columns/ListRef

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns(
		Group( :height, 2 ),
		Ref( "_relative_from_height" ),
		ListRef( "height_to_weight" )
	),
	Formula( _relative_from_height / Sum( height_to_weight ) ),
	Output( New Static )
);

```

#### New Formula Columns/Grouping

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Apply Formula(
	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),
	Formula( _relative_from_height * 2 ),
	Output( New Formula( "result", Group( "output group" ) ) )
);

```

#### Simple New Formula Column

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Data Table( "Big Class" ) << Apply Formula(
	Columns( :height ),
	Formula( :height / 5 ),
	Output( New Formula )
);

```

### Begin Data Update

**Sintaxis:** obj &lt;&lt; Begin Data Update

**Descripción:** Retiene todos los mensajes de actualización hasta que se llega al comando de fin de actualización de los datos. Esto es útil para actualizar muchas celdas sin interrupción. Solo se aplica a los cambios de las celdas de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Checksum

**Sintaxis:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**Descripción:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum();

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Exclude( "ColData" ) );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

#### Ejemplo 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
flags = {"ColData", "ColAttributes"};
dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**Sintaxis:** obj &lt;&lt; Clear Cell Colors

**Descripción:** Borra el color de celda de las columnas seleccionadas. Si no hay ninguna columna seleccionada, se borran los colores de celda de todas las columnas.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors( {:height, :age} );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:age << Color Cells( "Red" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );
:weight << color cells( {{"blue", a}} );
Wait( 2 );
dt << Clear cell colors();

```

### Clear Column Selection

**Sintaxis:** obj &lt;&lt; Clear Column Selection

**Descripción:** Borra la selección de columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

### Clear Edit Lock

**Sintaxis:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Descripción:** Permitir las operaciones especificadas en la tabla de datos que se prohibieron anteriormente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );
:age << set selected( 1 );
:height << set selected( 1 );
Wait( 2 );
dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Sintaxis:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**Descripción:** Anula la selección de las propiedades especificadas de la tabla, donde la lista puede ser una lista de nombres de las propiedades o índices de las propiedades. Si no se indica ninguna lista, anula la selección de todas las propiedades seleccionadas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selection( list );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
proplist = dt << Select Properties();
Wait( 1 );
dt << clear properties selecction();

```

### Clone

**Sintaxis:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**Descripción:** Crea una copia de la tabla de datos.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dtClone = dt << Clone;

```

### Close Data Grid

**Sintaxis:** obj &lt;&lt; Close Data Grid

**Descripción:** Cierra o abre la cuadrícula de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Data Grid( 1 );

```

### Close Side Panels

**Sintaxis:** obj &lt;&lt; Close Side Panels

**Descripción:** Cierra o abre los paneles laterales de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Side Panels( 1 );

```

### Close summary panels

**Sintaxis:** obj &lt;&lt; Close summary panels

**Descripción:** Cerrar o abrir los paneles de resumen de la tabla de datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Close Summary Panels( 1 );

```

### Cluster

**Sintaxis:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**Sintaxis:** obj &lt;&lt; Collapse All Column Groups

**Descripción:** Contrae todos los grupos de columnas.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Expand All Column Groups;
Wait( 2 );
dt << Collapse All Column Groups;

```

### Column Filter

**Sintaxis:** obj &lt;&lt; Column Filter

**Descripción:** Retrieves object to manipulate active column filter for the table.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Expand All Column Groups;
dt:sex << Hide( 1 );

// Use immediately
dt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );
dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );
dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );
dt << Column Filter( Clear );

// Return an object and send messages later
cf = dt << Column Filter;
cf << Column Name( "3yr" );
cf << Get Script;

// Related to (can also send to object)
dt << Show Hidden Columns in Columns List( 0 );
dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Crea un cambiador de columnas independiente

**JMP Versión agregada:** 16

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		V List Box(
			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),
			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )
		)
	)
);
cs << Link Platform( female );
cs << Link Platform( male );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Bivariate",
	H List Box(
		cs = dt << Column Switcher( :age, {:age, :weight} ),
		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )
	)
);
cs << Link Platform( b[1] );
cs << Link Platform( b[2] );

```

### Combine Columns

**Sintaxis:** obj &lt;&lt; Combine Columns

**Descripción:** Combina varias columnas en una sola, con los valores de cada columna de origen separados por el delimitador indicado.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

### Compare Data Tables

**Sintaxis:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**Descripción:** Compara dos tablas de datos abiertas e informa de las diferencias entre los datos, así como los metadatos.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Sintaxis:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**Descripción:** Comprime el archivo al guardar la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Sintaxis:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**Descripción:** Comprime cada columna de la forma más compacta posible. 

Los datos de caracteres serán de 1 byte si hay menos de 255 niveles.

Los datos numéricos serán de 1 byte si los datos se encuentran entre -127 y 127.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Sintaxis:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**Descripción:** Combina filas de varias tablas de datos y crea una nueva tabla de datos o añade las filas a la primera tabla de datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );
dt << Concatenate( Data Table( "Trial2" ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Students.jmp" );
dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
dt << Concatenate(
	Data Table( dt1 ),
	Data Table( dt2 ),
	"Append to first table",
	"Create source column"
);

```

### Copy Column Properties

**Sintaxis:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**Descripción:** Copia en el portapapeles las propiedades de columna de las columnas seleccionadas en una lista de listas independientes de propiedades. También puede especificar una lista de columnas de origen en lugar de preseleccionarlas en la tabla de datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Select Columns( :MODULUS, :ELONG );
dt << Copy Column Properties;
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Selected Properties

**Sintaxis:** obj &lt;&lt; Copy Selected Properties

**Descripción:** Copia al portapapeles las propiedades seleccionadas de la tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << select properties( {"Distribution", "Oneway"} );
proplist = dt << Copy Selected Properties();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Copy Table Script

**Sintaxis:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**Descripción:** Copia un script para volver a crear la tabla de datos. El script resultante incluye todos los scripts de la tabla guardados en la tabla de datos. También puede añadir la palabra clave "Sin datos" para omitir datos del script.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script();
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Copy Table Script( "No Data" );
New Window( "Script", Script Box( "//Try Paste here
                     " ) );

```

### Debug Script

**Sintaxis:** obj &lt;&lt; Debug Script( name )

**Descripción:** Depura un script con nombre asignado guardado como propiedad de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Debug Script( "Distribution" );

```

### Decision Tree

**Sintaxis:** obj &lt;&lt; Decision Tree

### Define Tag

**Sintaxis:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**Descripción:** Crea o actualiza una definición de etiquetas de columna en la tabla. Si la etiqueta no existe, créela. También puede asignarle color, un símbolo y otros atributos.

**JMP Versión agregada:** 19

#### Color, Symbol, or None

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID1", Color( Red ) );
dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );
dt << Define Tag( "ID3" );

```

#### New Tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Blue ) );

```

#### Replace

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID", Color( Red ) );
:height << Set Property( "Tags", {"ID"} );
dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );
:height << Get Property( "Tags" );

```

### Delete Columns

**Sintaxis:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**Descripción:** Eliminar las columnas especificadas. Si no se especifica ningún argumento, elimina las columnas seleccionadas de la tabla de datos.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height << Set Selected;
Wait( 2 );
dt << Delete Columns();

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Delete Columns( :Height );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
cols = {"height", "weight"};
Wait( 2 );
dt << Delete Columns( cols );

```

### Delete Filter View

**Sintaxis:** obj &lt;&lt; Delete Filter View( name | obj )

**Descripción:** Elimina la vista de filtro en cuestión.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv male = dt << New Filter View(
	"Male",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) )
);
Wait( 1 );
dt << Delete Filter View( fv dream );
dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Sintaxis:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**Descripción:** Elimina los scripts especificados desde la tabla de datos.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Scripts( "New Script" );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
list = {"Bivariate", "Logistic"};
Wait( 2 );
dt << Delete Scripts( list );

```

### Delete Table Property

**Sintaxis:** obj &lt;&lt; Delete Table Property

**Descripción:** Alias para eliminar scripts.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Script(
	"New Script",
	Distribution( Column( :Height, :Weight ), By( :sex ) )
);
Wait( 2 );
dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Sintaxis:** obj &lt;&lt; Delete Table Variable( name )

**Descripción:** Borra una variable de tabla guardada de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Sintaxis:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**Descripción:** Elimina una etiqueta de la tabla. Las etiquetas no se eliminarán si alguna columna aún las utiliza, a menos que se proporcione la marca Force(1).

**JMP Versión agregada:** 19

#### Delete tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
Wait( 3 );
dt << Delete Tag( "ID" );

```

#### Force delete

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Define Tag( "ID" );
:height << Set Property( "Tags", {"ID"} );
Wait( 3 );
dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Sintaxis:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**Descripción:** Deselecciona los grupos de columnas. Si se omite el grupo de columnas, se anulará la selección de todos los grupos de columnas.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group();
Wait( 2 );
dt << deselect column group( "pollutants" );

```

### Disable Undo

**Sintaxis:** obj &lt;&lt; Disable Undo( state=0|1 )

**Descripción:** Cuando se establece esta opción, no se puede deshacer ninguna operación realizada en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << disable undo( 1 );

```

### End Data Update

**Sintaxis:** obj &lt;&lt; End Data Update

**Descripción:** Envía todos los mensajes de actualización retenidos desde que se emitió el comando de inicio de actualización de los datos. Esto es útil para actualizar muchas celdas sin interrupción. Solo se aplica a los cambios de las celdas de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );
Wait();
dt << Begin Data Update;
dt << Add Rows( 2000 );
dt << End Data Update;

```

### Exclude Columns

**Sintaxis:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Descripción:** Excluye las columnas de cualquier corrida de análisis.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Sintaxis:** obj &lt;&lt; Exit Filter View

**Descripción:** Le devuelve a la vista sin filtrar. Si ya está en la vista sin filtrar, esta acción no tiene ningún efecto.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Exit Filter View;

```

### Expand All Column Groups

**Sintaxis:** obj &lt;&lt; Expand All Column Groups

**Descripción:** Expande todos los grupos de columnas.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
dt << Collapse All Column Groups;
Wait( 2 );
dt << Expand All Column Groups;

```

### Fit Model

**Sintaxis:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Descripción:** Ajusta modelos de regresión lineal, incluido el análisis de varianza, regresión logística, componentes de varianza, regresión penalizada, regresión paso a paso, MANOVA y modelos de supervivencia.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run Model()
);

```

### Get Active Filter View

**Sintaxis:** fv = obj &lt;&lt; Get Active Filter View

**Descripción:** Obtiene la vista de filtro activa. Devuelve un objeto FilterView.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv active = dt << Get Active Filter View;
Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Sintaxis:** obj &lt;&lt; Get All Columns As Matrix

**Descripción:** Devuelve la tabla de datos como matriz. Las columnas de caracteres se enumeran de acuerdo a los niveles de ordenación, empezando por el 1.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get All Columns As Matrix();
Show( m );

```

### Get As Report

**Sintaxis:** obj &lt;&lt; Get As Report

**Descripción:** Devuelve un informe de la tabla de datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Select Columns( :name, :age, :height );
jmp_report = New Window( "Big Class",
	Text Box( "Big Class" ),
	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), 

);

```

### Get Cell Height

**Sintaxis:** obj &lt;&lt; Get Cell Height

**Descripción:** Obtiene la altura de visualización de una fila.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Cell Height;

```

### Get Column Group

**Sintaxis:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**Descripción:** Devuelve la lista de columnas del grupo de columnas.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column group( "xy" );

```

### Get Column Groups Names

**Sintaxis:** obj &lt;&lt; Get Column Groups Names

**Descripción:** Devuelve los nombres de los grupos de columnas.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << get column groups names;

```

### Get Column Names

**Sintaxis:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**Descripción:** Devuelve los nombres de columnas de la tabla de datos. Si se utiliza la cadena como palabra clave, se devuelven cadenas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Column Names();
Show( n );
CNames = dt << Get Column Names( Continuous );
Show( CNames );
SNames = dt << Get Column Names( String );
Show( SNames );

```

### Get Column Reference

**Sintaxis:** obj &lt;&lt; Get Column Reference( list of column names )

**Descripción:** Devuelve la referencia de la columna de las cadenas de caracteres en la lista.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
refList = dt << Get Column Reference( {"sex", "age"} );
Show( refList );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 4};
refList = dt << Get Column Reference( a );
Show( refList );

```

### Get Edit Lock

**Sintaxis:** obj &lt;&lt; Get Edit Lock

**Descripción:** Obtener la lista de operaciones prohibidas en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );
Wait( 2 );
dt << Get Edit Lock();

```

### Get Excluded Columns

**Sintaxis:** obj &lt;&lt; Get Excluded Columns

**Descripción:** Devuelve las columnas actualmente excluidas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude;
exCols = dt << Get Excluded Columns;
Show( exCols );

```

### Get Excluded Rows

**Sintaxis:** obj &lt;&lt; Get Excluded Rows

**Descripción:** Devuelve las filas actualmente excluidas de la tabla de datos. Se prefiere Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
r1 = dt << Get Excluded Rows();
r2 = Where( Excluded() );
Show( r1, r2 );

```

### Get Filter View

**Sintaxis:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**Descripción:** Get a filter view by name, or get one of the special filter views by using <<Temporary or <<Unfiltered. If a filter view by the given name does not exist, returns Empty().

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv dream = dt << Get Filter View( "Dream" );
Show( fv dream << Get Name );
Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Sintaxis:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**Descripción:** Obtiene una lista de todas las vistas de filtro. De forma predeterminada, no se incluyen las vistas temporales y sin filtrar.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv dream = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );
Show( fvs << Get Name );

```

### Get Header Height

**Sintaxis:** obj &lt;&lt; Get Header Height

**Descripción:** Obtiene la altura de visualización del encabezado de columna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Header Height;

```

### Get Hidden Columns

**Sintaxis:** obj &lt;&lt; Get Hidden Columns

**Descripción:** Devuelve las columnas actualmente ocultas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Hide;
hidCols = dt << Get Hidden Columns;
Show( hidCols );

```

### Get Hidden Rows

**Sintaxis:** obj &lt;&lt; Get Hidden Rows

**Descripción:** Devuelve las filas actualmente ocultas de la tabla de datos. Se prefiere Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Hide();
r1 = dt << Get Hidden Rows();
r2 = Where( Hidden() );
Show( r1, r2 );

```

### Get Label Columns

**Sintaxis:** obj &lt;&lt; Get Label Columns

**Descripción:** Devuelve las columnas utilizadas para etiquetar filas.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
labelCols = dt << Get Label Columns;
Show( labelCols );

```

### Get Labeled Rows

**Sintaxis:** obj &lt;&lt; Get Labeled Rows

**Descripción:** Devuelve las filas etiquetadas actualmente de la tabla de datos. Se prefiere Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Label();
r1 = dt << Get Labeled Rows();
r2 = Where( Labeled() );
Show( r1, r2 );

```

### Get Lock

**Sintaxis:** obj &lt;&lt; Get Lock( state=0|1 )

**Descripción:** Comprueba si la tabla de datos está protegida.

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << get lock();
Show( a );
Wait( 1 );
dt << Lock Data Table( 1 );
a = dt << get lock();
Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Sintaxis:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**Descripción:** Crea un código de paso DATA de SAS Model Manager que se corresponde con las columnas de fórmulas de una tabla de datos JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Sintaxis:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**Descripción:** Devuelve el nombre de visualización de la tabla de datos. Con el argumento opcional "Ignorar extensión", el comando devuelve el nombre de la tabla de datos de datos sin la extensión.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name();
Show( n );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
n = dt << Get Name( "Ignore Extension" );
Show( n );

```

### Get Path

**Sintaxis:** obj &lt;&lt; Get Path

**Descripción:** Devuelve la ruta de acceso completa de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
path = dt << Get Path();
Show( path );

```

### Get Property

**Sintaxis:** obj &lt;&lt; Get Property( name )

**Descripción:** Devuelve como script la propiedad con nombre asignado de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Property( "Distribution" );
Show( s );

```

### Get Row ID Width

**Sintaxis:** obj &lt;&lt; Get Row ID Width

**Descripción:** Obtiene el ancho de visualización del área de ID de filas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
ht = dt << Get Row ID Width;

```

### Get Row States

**Sintaxis:** obj &lt;&lt; Get Row States

**Descripción:** Devuelve un vector que contiene valores de estado de fila codificados para cada fila de la tabla de datos. Tenga en cuenta que los valores de estado de fila codificados no se pueden usar como estructura de estados de fila en funciones de estado de fila como Color De. Consulte la forma de usar el vector directamente en el Ejemplo 2.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << Get Row States;
Show( rs );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
rs = dt << GetRowStates;
w = Marker Of( As Row State( rs[3] ) );
dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Sintaxis:** obj &lt;&lt; Get Rows Where

**Descripción:** Devuelve las filas de la tabla de datos que cumplen los criterios Where. Se prefiere Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r1 = dt << Get Rows Where( :sex == "M" );
r2 = Where( :sex == "M" );
Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Sintaxis:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**Descripción:** Crea un código de paso DATA de SAS que se corresponde con las columnas de fórmulas de una tabla de datos JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Ratio", Formula( :height / :weight ) );
dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**Descripción:** Devuelve el script solicitado. Si se omite el nombre del script, devuelve una representación textual de la tabla de datos junto con todos los scripts guardados en los datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script;
New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Sintaxis:** obj &lt;&lt; Get Script Group( name of script group )

**Descripción:** Devuelve la lista de scripts del grupo.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script group( "GB" );
Wait( 1 );
dt << run script( gb[2] );

```

### Get Script Groups Names

**Sintaxis:** obj &lt;&lt; Get Script Groups Names

**Descripción:** Devuelve la lista de nombres de grupos de scripts.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Sintaxis:** obj &lt;&lt; Get Scroll Locked Columns

**Descripción:** Devuelve las columnas actualmente protegidas frente a desplazamiento de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Scroll Lock;
lockCols = dt << Get Scroll Locked Columns;
Show( lockCols );

```

### Get Selected Columns

**Sintaxis:** obj &lt;&lt; Get Selected Columns

**Descripción:** Devuelve los nombres de las columnas seleccionadas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
names = dt << Get Selected Columns;
Show( names );

```

### Get Selected Properties

**Sintaxis:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**Descripción:** Obtenga las propiedades de la tabla seleccionada (variable y scripts) en una lista. En lugar de seleccionarlas, puede usar una lista opcional para especificar las propiedades que quiere obtener.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Properties( {2, 4} );
proplist = dt << Get Selected Properties();

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Sintaxis:** obj &lt;&lt; Get Selected Rows

**Descripción:** Devuelve las filas actualmente seleccionadas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
r = dt << Get Selected Rows();
Show( r );

```

### Get Table Script Names

**Sintaxis:** obj &lt;&lt; Get Table Script Names

**Descripción:** Devuelve los nombres de todas las propiedades de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
names = dt << Get Table Script Names;
Show( names );

```

### Get Table Variable

**Sintaxis:** obj &lt;&lt; Get Table Variable( name )

**Descripción:** Devuelve el valor de una variable de tabla especificada de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );
var = dt << Get Table Variable( "Days" );
Show( var );

```

### Get Table Variable Names

**Sintaxis:** obj &lt;&lt; Get Table Variable Names

**Descripción:** Devuelve los nombres de todas las variables de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
names = dt << Get Table Variable Names;
Show( names );

```

### Get Tagged Columns

**Sintaxis:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Descripción:** Devuelve la lista de las columnas que coinciden con las etiquetas suministradas. Si se solicita la intersección, solo se devuelven las columnas que contienen todas las etiquetas enumeradas.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );
dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );
dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );
dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );
dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Sintaxis:** dt &lt;&lt; Get Transforms()

**Descripción:** Recupera la lista de las columnas de transformación asociadas a esta tabla de datos.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( dt << Get Transforms() );
dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Sintaxis:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**Descripción:** Devuelve como matriz las columnas especificadas de la tabla de datos. La opción predeterminada es todas las columnas numéricas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
m = dt << Get As Matrix();
Show( m );
x = dt << GetAsMatrix( {4, 5} );
Show( x );

```

### Group Columns

**Sintaxis:** obj &lt;&lt; Group Columns( first column, number )obj &lt;&lt; Group Columns( {column1, column2, ...})obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...})obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**Descripción:** Agrupa una lista de columnas.

#### Add to group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );
Wait( 2 );
// add to theGroup
theGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

#### Using count

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
Wait( 1 );
group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Sintaxis:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**Descripción:** Agrupar una lista de scripts.

**JMP Versión agregada:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Sample Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);

```

### Has Column

**Sintaxis:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**Descripción:** Pregunta si la tabla de datos tiene una columna con el nombre indicado.

**JMP Versión agregada:** 18

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Has Column( "weight" );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show(
	dt << Has Column( "Weight" ),
	dt << Has Column( "Weight", Exact Match( 1 ) ),
	dt << Has Column( "a g e" ),
	dt << Has Column( "a g e", Exact Match( 1 ) )
);

```

### Has data view

**Sintaxis:** obj &lt;&lt; Has data view

**Descripción:** Devuelve verdadero si la tabla de datos tiene abierta una ventana visible.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Has Data View();

```

### Hide Columns

**Sintaxis:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Descripción:** Oculta las columnas de la cuadrícula de datos.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**Sintaxis:** obj &lt;&lt; Is Dirty

**Descripción:** Pregunta si se ha modificado la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = dt << is Dirty;
Show( a );
dt << add rows( 5 );
b = dt << is dirty;
Show( b );

```

### Is Linked Subset

**Sintaxis:** obj &lt;&lt; Is Linked Subset

**Descripción:** Preguntar si la tabla de datos es un subconjunto vinculado

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );
subset = dt << Subset( All Rows );
Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**Sintaxis:** obj &lt;&lt; JMP Query Builder

**Descripción:** Construye una consulta para una o más tablas de datos JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << JMP Query Builder();

```

### Join

**Sintaxis:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**Descripción:** Combina varias tablas de datos en una nueva tabla de datos. Los datos se pueden combinar por asignación de fila, valores de columna coincidentes o de forma cartesiana.

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Join(
	With( Data Table( "Little" ) ),
	Select( :popcorn, :oil amt, :batch, :yield ),
	SelectWith( :yield ),
	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

### Journal

**Sintaxis:** obj &lt;&lt; Journal

**Descripción:** Crea un diario a partir de la tabla de datos. Solo se incluye la cuadrícula de datos, no las notas, ni variables ni scripts.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal();

```

### Journal Link

**Sintaxis:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**Descripción:** Añade a un diario un botón de enlace a la tabla de datos. Utilice embed() o save(), pero no ambos. Embed() no tiene opciones. La opción Save() es similar a dt<<save(). Utilice ButtonName() para reemplazar la etiqueta del botón. Devuelve un nuevo botón de enlace.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from table
dt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from table
dt << Journal Link(
	Save( "$temp/DeleteMe1.jmp" ),
	ButtonName( "Fancy Name for Temporary File" )
);
// even more fancy...
button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text name
button << UnderlineStyle( 0 ); // not using the link-style appearance
button << SetIcon( "DataTableFile" ); // add an icon
button << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label
// save it with a prompt...you can change the name in the save-as dialog...or cancel
dt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from prompt
Close( dt, "NoSave" );

```

### Last Modified

**Sintaxis:** obj &lt;&lt; Last Modified

**Descripción:** Devuelve la fecha de la última modificación guardada de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
date = dt << Last Modified();
Show( date );

```

### Lock Data Table

**Sintaxis:** obj &lt;&lt; Lock Data Table( state=0|1 )

**Descripción:** Protege la tabla de datos de manera que no se pueden editar ni añadir valores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Lock Data Table( 1 );
// Now try changing a value in the data table.

```

### MSA Variability Chart

**Sintaxis:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**Descripción:** Muestra un gráfico de variabilidad que expone la forma en la que varía una medición en las distintas categorías y realiza un análisis para examinar cómo cambian la media y la varianza según la categoría.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Sintaxis:** obj &lt;&lt; Make Indicator Columns

**Descripción:** Convierte una columna nominal u ordinal en tantas columnas como número de categorías. Los nombres de columna de las columnas resultantes son las categorías de la columna de origen. Los valores de las columnas resultantes son ceros o unos.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Sintaxis:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**Descripción:** Crea un controlador de estado de fila para la tabla de datos. El argumento de la función retiene las líneas cuyos estados de fila se cambian.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {a}, Print( a ) );
rs = dt << make row state handler( f );
dt << Select Rows( 1 );
dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Sintaxis:** sd = dt &lt;&lt; Make SAS Data Step( )sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**Descripción:** Devuelve la tabla de datos como paso DATA de SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step();
Show( sd );

```

### Make SAS DATA Step Window

**Sintaxis:** sd = dt &lt;&lt; Make SAS Data Step Window( )sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**Descripción:** Abre una nueva ventana de tipo SAS y crea un paso DATA de SAS a partir de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**Sintaxis:** obj &lt;&lt; Merge Referenced Data

**Descripción:** Hace que la tabla sea independiente combinando los datos de la tabla de origen en las columnas a las que se hace referencia y desvinculándolas. Se elimina también la propiedad Vincular referencia de las columnas a las que se hace referencia.

```jsl

dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );
dt1:ID << Set Property( "Link ID", 1 );
dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );
dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Sintaxis:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**Descripción:** Busca en la tabla de datos los patrones de los valores faltantes y crea una tabla de cada patrón y su frecuencia.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Missing Data Pattern(
	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead )
);

```

### Move Column Group

**Sintaxis:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descripción:** Mover el grupo de columnas a una ubicación especificada. Si se omite el nombre del grupo de columnas, se mueven todos los grupos.

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "Pollutants", after( "xy" ) );

```

#### Move all

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( to first );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << move column group( "xy", to first );

```

### Move Script Group

**Sintaxis:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descripción:** Mover el grupo de scripts a la ubicación especificada. Si se omite el nombre del grupo de scripts, se mueven todos los grupos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << move script group( "VL", after( "Oneway" ) );
Wait( 1 );
dt << move script group( "GB", after( "VL" ) );
Wait( 1 );
dt << move script group( "VL", after( Path( {"GB"} ) ) );
Wait( 1 );
dt << move script group( to first );

```

### Move Selected Scripts

**Sintaxis:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descripción:** Mover los scripts a la ubicación especificada.

**JMP Versión agregada:** 14

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

#### Move Group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected scripts(
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"},
	to first
);

```

### Move down

**Sintaxis:** obj &lt;&lt; Move down

**Descripción:** Reemplaza los valores de la primera fila de la tabla de datos por los nombres de columna y reemplaza los nombres de columna por los nombres de secuencia predeterminados.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move down;

```

### Move up

**Sintaxis:** obj &lt;&lt; Move up

**Descripción:** Reemplaza los nombres de columna por el valor de la primera fila de la tabla de datos.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up;

```

### Move up and append

**Sintaxis:** obj &lt;&lt; Move up and append

**Descripción:** Reemplaza los nombres de columna añadiendo los valores de la primera fila de la tabla de datos a los nombres de columna correspondientes.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move up and append;

```

### New Data Box

**Sintaxis:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**Descripción:** Crea una vista de tabla de datos en un árbol de caja de visualización. Cambia la tabla de datos actual por la tabla de datos proporcionada. El argumento opcional Enable Filter Views controla si la vista permite vistas de filtro (se permiten de forma predeterminada).

```jsl

dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );
New Window( "school",
	H List Box(
		dtA << New Data Box(),
		Text Box(),
		dtA << Distribution(
			ContinuousDistribution( Column( :weight ) ),
			NominalDistribution( Column( :age ) )
		)
	)
);
dtA = 0;

```

### New Data View

**Sintaxis:** obj &lt;&lt; New Data View

**Descripción:** Crea una nueva vista de la tabla de datos. Esta vista está vinculada al original de modo que cualquier cosa que se resalte o modifique afectará el original. Esto es útil cuando es necesario desplazarse a partes diferentes dentro de una misma tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << New Data View();

```

### New Filter View

**Sintaxis:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**Descripción:** Crea una nueva vista de filtro. Se devuelve el objeto FilterView creado. La nueva vista de filtro estará activa de forma predeterminada. Si no le asigna un nombre a la vista de filtro, será temporal, a menos que establezca el valor Temporal en cero.

**JMP Versión agregada:** 19

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream Inverse",
	Data Filter(
		Data Filter(
			Inverse( 1 ),
			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
		)
	)
);

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) )
);
dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Sintaxis:** New Property( name, script ) New Script( name, script )

**Descripción:** Crea y establece como script una nueva propiedad de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**Sintaxis:** obj &lt;&lt; New Table Variable( name, number )

**Descripción:** Crea y establece una nueva variable en la tabla de datos como valor constante. Si ya existe una variable con el mismo nombre, se añade un número al nombre de la variable nueva para que sea única. Se recomienda utilizar el comando similar Establecer variable de tabla en la mayoría de los casos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );

```

### OC Curves

**Sintaxis:** obj &lt;&lt; OC Curves

**Descripción:** Crea un gráfico que representa la probabilidad de no detectar un desplazamiento en el proceso en función del tamaño del desplazamiento.

**JMP Versión agregada:** 16

### Partition

**Sintaxis:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**Descripción:** Construye un árbol de decisión dividiendo los datos de forma recursiva según una relación entre los valores de respuesta y predictor. Tanto la respuesta como los predictores pueden ser continuos o categóricos.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

### Paste Column Properties

**Sintaxis:** obj &lt;&lt; Paste Column Properties

**Descripción:** Pega desde el portapapeles varias listas de propiedades de columna en varias columnas. También puede especificar una lista de columnas de destino en lugar de seleccionarlas en la tabla de datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

### Recode

**Sintaxis:** obj &lt;&lt; Recode

**Descripción:** Recodificar los valores antiguos de las columnas seleccionadas con valores nuevos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :weight );
dt << Recode;

```

### Recode Column

**Sintaxis:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**Descripción:** Aplica las transformaciones especificadas para cada valor de la columna de origen y almacena el resultado en la columna original o en la columna de destino especificada. La opción Por palabra divide los datos de caracteres proporcionados en valores de entrada más pequeños. Una vez determinados los valores de entrada, las transformaciones se aplican a esos valores por separado.

Las variables JSL especiales se pueblan durante la ejecución del comando:

	_rcNow es el valor actual de la entrada después de las transformaciones anteriores.

	_rcOrig es el valor original de la entrada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( :age );
col << Data Type( "Character" );
dt << Recode Column(
	:age,
	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},
	Target Column( col )
);

```

### Rename Column Group

**Sintaxis:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Descripción:** Renombra el grupo de columnas.

#### Nested Group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );
Wait( 1 );
dt << rename column group( Path( {"xy"} ), "XY" );
dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

#### Simple Group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
Wait( 1 );
dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**Sintaxis:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Descripción:** Renombrar el grupo de scripts

**JMP Versión agregada:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	Path( {"GB", "Graphs"} ),
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Sintaxis:** obj &lt;&lt; Rename Table Property( old name, new name )

**Descripción:** Cambia el nombre de la propiedad de tabla especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Sintaxis:** obj &lt;&lt; Rename Table Script( old name, new name )

**Descripción:** Cambia el nombre del script de tabla especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );
Wait( 1 );
dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Sintaxis:** obj &lt;&lt; Rename Table Variable( old name, new name )

**Descripción:** Cambia el nombre de la variable de tabla especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Table Variable( "Days", 42 );
Wait( 2 );
dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**Sintaxis:** obj &lt;&lt; Rerun Formulas

**Descripción:** Reevalúa todas las fórmulas de columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 100 );
dt << Rerun Formulas;

```

### Reset Transforms

**Sintaxis:** dt &gt;&gt; Reset Transforms()

**Descripción:** Cuando se accede a las columnas de transformación, estas almacenan en caché sus datos para llamadas futuras. Esta función quita los datos, pero se volverán a crear si se vuelve a acceder a la columna.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Reset Transforms();

```

### Revert

**Sintaxis:** obj &lt;&lt; Revert

**Descripción:** Revierte cualquier cambio realizado a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);
Wait( 2 );
dt << revert();

```

### Run Formulas

**Sintaxis:** obj &lt;&lt; Run Formulas

**Descripción:** Realiza todas las evaluaciones de fórmula pendientes. No se evaluarán todas las fórmulas.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 10000 );
dt << Run Formulas();
Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Sintaxis:** obj &lt;&lt; Run Script( name )

**Descripción:** Ejecuta un script con nombre asignado guardado como propiedad de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Distribution" );

```

### Save

**Sintaxis:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Descripción:** Guarda la tabla de datos en cualquier formato compatible. Los formatos compatibles son .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt y .stx. Algunos formatos solo son compatibles con Windows. Consulte Uso de JMP para obtener más detalles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save As

**Sintaxis:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Descripción:** Guarda la tabla de datos en cualquier formato compatible. Los formatos compatibles son .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt y .stx. Algunos formatos solo son compatibles con Windows. Consulte Uso de JMP para obtener más detalles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit location
If( dt << Save( "" ),
	Write( "\!nsaved to " || (dt << GetPath) ),
	Write( "\!nsave canceled" )
); // prompt
dt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV format
Close( dt, "NoSave" );

```

### Save Database

**Sintaxis:** obj &lt;&lt; Save Database( connectInfo, TableName )

**Descripción:** Vuelve a guardar la tabla de datos en una base de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**Sintaxis:** obj &lt;&lt; Screen Predictors

**Descripción:** Se trata de un alias y un nombre antiguo para el cribado del predictor

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Sintaxis:** obj &lt;&lt; Select Column Group( name of group | list of names )

**Descripción:** Selecciona los grupos de columnas.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << group columns( "xy", {:X, :y} );
dt << group columns( "pollutants", :Ozone :: :Lead );
dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Sintaxis:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**Descripción:** Selecciona las propiedades de tabla especificadas, donde la lista puede ser una lista de nombres de propiedades o índices de las propiedades.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {2, 4} );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Sintaxis:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**Descripción:** Seleccionar los grupos de scripts. Si no se especifica ningún grupo de scripts, se seleccionan todos los grupos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select script group( "VL" );

```

### Select Scripts

**Sintaxis:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**Descripción:** Seleccionar los scripts con nombre.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
a = dt << get script group( "GB" );
dt << select scripts( a );

```

### Select columns

**Sintaxis:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**Descripción:** Seleccione las columnas especificadas. Para seleccionar todas las columnas, utilice la palabra clave "Todo".

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( :Height );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << Select Columns( "All" );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
clist = {:Height, :Weight};
dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Sintaxis:** obj &lt;&lt; Sequencing Variants Toolset

**Descripción:** Interfaz para la plataforma del complemento del conjunto de herramientas de secuenciación de variantes

### Set Active Filter View

**Sintaxis:** obj &lt;&lt; Set Active Filter View( name | obj )

**Descripción:** Establece la vista de filtro activa

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Wait( 1 );
dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Sintaxis:** obj &lt;&lt; Set Cell Height( number )

**Descripción:** Establece la altura de visualización de cada celda de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Cell Height( 20 );

```

### Set Dirty

**Sintaxis:** obj &lt;&lt; Set Dirty( state=0|1 )

**Descripción:** Marca la tabla de datos como modificada aunque no haya tenido lugar ningún cambio. Esto es útil para que al cerrar el archivo se le pregunte si desea guardar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Dirty();

```

### Set Edit Lock

**Sintaxis:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Descripción:** Prohibir las operaciones especificadas en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Sintaxis:** obj &lt;&lt; Set Header Height( number )

**Descripción:** Establece la altura de visualización del encabezado de columna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Header Height( 20 );

```

### Set Label Columns

**Sintaxis:** obj &lt;&lt; Set Label Columns( column(s) )

**Descripción:** Asigna un papel de etiqueta a las columnas seleccionadas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Sintaxis:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**Descripción:** Crea una tabla de datos desde una matriz.

```jsl

dt = New Table( "B" );
dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Sintaxis:** obj &lt;&lt; Set Name( new TableName )

**Descripción:** Cambia el nombre de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Name( "New Class" );

```

### Set Property

**Sintaxis:** obj &lt;&lt; Set Property( name, script )

**Descripción:** Crea y establece como script una nueva propiedad de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**Sintaxis:** obj &lt;&lt; Set Row ID Width( number )

**Descripción:** Establece el ancho de visualización del área de ID de filas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row ID Width( 80 );

```

### Set Row States

**Sintaxis:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**Descripción:** Establece los estados de fila de todas las filas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Row States(
	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]
);

```

### Set Scroll Lock Columns

**Sintaxis:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Descripción:** Protege las columnas seleccionadas frente a desplazamiento.  El color de fondo cambia para indicar que una columna está protegida.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Sintaxis:** obj &lt;&lt; Set Table Variable( name, number )

**Descripción:** Crea y establece una nueva variable en la tabla de datos como valor constante. Se sobrescribirá una variable existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Sintaxis:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**Descripción:** Show or hide the filter icons on columns in the current filter view.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Sintaxis:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**Descripción:** Show or hide the header graphs in the data table display.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Sintaxis:** obj &lt;&lt; Show Header Groups( state=0|1 )

**Descripción:** Show or hide the column groups in the data table display.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Sintaxis:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**Descripción:** Show or hide the header statistics in the data table display.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Sintaxis:** obj &lt;&lt; Show Header Tags( state=0|1 )

**Descripción:** Show or hide the column tags in the data table display.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );
dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Sintaxis:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**Descripción:** Desactive esta opción para omitir las columnas ocultas de la lista Columnas de la tabla de datos. Estas columnas nunca se muestran en la cuadrícula de datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );
Wait( 1 );
dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Sintaxis:** dt &lt;&lt; Show Transforms()

**Descripción:** Imprime información en el registro acerca de las columnas de transformación asociadas a esta tabla de datos y sus plataformas. Tiene carácter informativo y el formato puede cambiar. No se debe analizar.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
dt << Show Transforms();
dt << Delete Columns( :A );

```

### Sort

**Sintaxis:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**Descripción:** Crea una nueva tabla de datos que se ordena por columnas especificadas en orden ascendente o descendente.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( By( :name ), Order( Ascending ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Sintaxis:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**Descripción:** Crea una nueva tabla de datos que asigna varias filas de una columna a una fila de varias columnas.

```jsl

dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );
:Day of Week << set property( "Row Order Levels", 1 );
dt << Split(
	Split By( :Day of Week ),
	Split( :Bill Amount ),
	Sort by Column Property,
	remaining columns( drop all )
);

```

### Stack

**Sintaxis:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**Descripción:** Crea una nueva tabla de datos con valores de varias columnas apiladas en una única columna.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << Stack(
	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "Log Hist" )
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Contiguous,
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" )
);

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	,
	Number of Series( 3 ),
	Source Label Column( "Time" ),
	Stacked Data Column( "BP" )
);

```

### Subscribe

**Sintaxis:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Descripción:** Se suscribe para recibir mensajes relacionados con cambios en la tabla de datos. La clave es el nombre de la suscripción, de modo que se pueda hacer referencia a ella. El parámetro opcional, client, iniciará una confirmación de cierre si se trata de cerrar la tabla de datos. El parámetro Function puede ser el nombre de una función definida anteriormente, o la propia función. On Close solo necesita unas un argumento de la función, la tabla de datos. Los demás mensajes requieren un argumento adicional, ya sea una lista de columnas o el número de filas afectadas. Todas las suscripciones siguen vigentes hasta que se anulan.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );
f = Function( {dtab, oldname},
	Print( "oldname", oldname );
	Print( "new name", dtab << getname() );
);
fsave = Function( {dtab, newpathname},
	Print( "new path name", newpathname );
	Print( "new name", dtab << getname() );
);
dt << Subscribe( "name1", On Rename( f ) );
dt << Subscribe( "name1", On Save( fsave ) );
fcols = Function( {dtab, b},
	n = N Items( b );
	dtname = (dtab << getname());
	Print( dtname );
	Print( n );
	For( i = 1, i <= n, i++,
		colname = (b[i] << getname());
		Print( colname );
	);
);
dt << Subscribe( "name2", On Delete Columns( fcols ) ); 
//Try deleting a column, then close the data table.

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = Function( {dtab, col, oldname},
	Print( dtab << getname() );
	Print( "new column name", (col << getname()) );
	Print( "old name", oldname );
);
sub = dt << Subscribe( "", OnRenameColumn( f ) );
Column( dt, 1 ) << set name( "test" );
Wait( 1 );
dt << unsubscribe( sub, on rename column );

```

#### Ejemplo 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
delRowsFn = Function( {a, b, rows},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print Matrix( rows );
);
addRowsFn = Function( {a, b, insert},
	dtname = (a << Get Name());
	Print( dtname );
	Print( b );
	Print( insert );
);
dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
// Try deleting some rows and adding new ones.

```

### Subset

**Sintaxis:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**Descripción:** Crea una nueva tabla de datos a partir de las filas y columnas seleccionadas de la tabla de datos de origen. También puede seleccionar filas aleatoriamente para el subconjunto.

#### Filas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

#### Filas filtradas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

#### Muestra estratificada

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

#### Por

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subset( By( :sex ), Keep by columns );

```

### Summary

**Sintaxis:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Descripción:** Crear una nueva tabla de datos de estadísticos de resumen. Si se especifica, hay una fila para cada nivel de una variable de agrupación o cada combinación de niveles de varias variables de agrupación.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	subgroup( :sex ),
	Mean( :Height ),
	Include marginal statistics
);

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Summary(
	Group( :Age ),
	Mean( :Height ),
	statistics column name format( "stat of column" )
);

```

### Suppress Formula Eval

**Sintaxis:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**Descripción:** Suprime o permite la evaluación de fórmulas. Esto es útil para acelerar la agregación de filas, la corrida de análisis múltiples y la realización de ordenaciones.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 1 );
dt << Add Rows( 2000 );
dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**Sintaxis:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**Descripción:** Convierte una columna de cadenas con un delimitador incrustado en columnas independientes. Las columnas resultantes pueden ser columnas indicadoras. Los delimitadores pueden ser cualquier carácter, la palabra clave TABULACIÓN o la palabra clave NUEVA LÍNEA.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

### Torch Deep Learning

**Sintaxis:** obj &lt;&lt; Torch Deep Learning

**Descripción:** Interfaz para la plataforma del complemento Torch Deep Learning

### Transform Column

**Sintaxis:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Descripción:** Crea una columna de transformación asociada a la tabla de destino. Se puede acceder a la columna de transformación del mismo modo que a una columna real. 

	Nombre: el nombre de la columna

	Fórmula: la fórmula que define los datos en la columna de transformación

	Reemplazar: con esta marca, si define una transformación con el mismo nombre que una transformación existente, se reemplazará la transformación existente. Sin esta marca, se devolverá la transformación existente si es equivalente; de lo contrario, se cambiará el nombre de la nueva columna para que sea distinto.

	Privada: con esta marca, la columna no aparecerá en las listas del selector de columnas

	Tipo de datos: especifique opcionalmente el tipo de datos. Si no lo especifica, se deducirá de la primera fila.

	Tipo de modelización: especifique opcionalmente el tipo de modelización. Si no lo especifica, se utilizará el predeterminado para el tipo de datos en cuestión

	Propiedades de columna: se trata de cualquier propiedad de columna estándar que quiera establecer. Puede también establecerlas en la columna después de crearlas.

**JMP Versión agregada:** 16

#### Nested

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :B + 1 ) );
dt << Transform Column( "B", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( {:A, :B} );

```

#### Random

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );
dt << Transform Column( "Random", Formula( Random Uniform() ) );
Show( :Predictable[1], :Random[1] );
dt << Delete Columns( {:Predictable, :Random} );

```

#### Simple

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "A", Formula( :height + 1 ) );
Show( :A[1] );
dt << Delete Columns( :A );

```

### Transpose

**Sintaxis:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**Descripción:** Crea una nueva tabla de datos a partir de la tabla de origen donde las filas y las columnas se intercambian.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Transpose(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	By( :Dose ),
	Label( :Subject )
);

```

### Type 1 Gauge

**Sintaxis:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**Descripción:** Analiza los sistemas de medición en datos continuos utilizando el método Sistema de medición tipo 1 para evaluar la capacidad de un proceso de medición en una parte.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );
dt << Type 1 Gauge(
	Y( :Y1, :Y2, :Y3 ),
	Type 1 Gauge Metadata(
		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),
		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),
		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )
	)
);

```

### Ungroup Columns

**Sintaxis:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Descripción:** Desagrupa una lista de columnas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns();

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Group Columns( "Monday", BP 8M, 3 );
dt << Group Columns( "Wednesday", BP 8W, 3 );
dt << Group Columns( "Friday", BP 8F, 3 );
Wait( 2 );
dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Sintaxis:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**Descripción:** Desagrupar una lista de scripts. Si no se especifican scripts, los scripts seleccionados se desasociarán de su grupo. Todos los grupos se eliminarán de su agrupación si no se especifica ni selecciona ningún script.

**JMP Versión agregada:** 14

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << ungroup scripts( "VL" );
Wait( 1 );
dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group scripts(
	"GB",
	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",
	"Graph Builder Line Chart", "Graph Builder Heat Map"}
);
dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );
Wait( 1 );
dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );
Wait( 1 );
dt << ungroup scripts();

```

### Unsubscribe

**Sintaxis:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Descripción:** Cancela la suscripción previa a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );
dt << Unsubscribe( "myname", On Close );

```

### Update

**Sintaxis:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**Descripción:** Fusiona una tabla con datos actualizados en la tabla de datos original agregando o reemplazando las columnas seleccionadas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Little.jmp" );
dt << Update(
	With( Data Table( "Little" ) ),
	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil )
);

```

#### Ejemplo 2

```jsl


dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} ),
	Replace columns in Main Table( {:height} )
);

```

#### Ejemplo 3

```jsl


dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),
	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),
	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),
	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) )
);
dt1 << Update(
	With( Data Table( "Little Class" ) ),
	Match Columns( :name = :name ),
	Add columns from Update table( {:RANK} )
);

```

### Update From Database

**Sintaxis:** obj &lt;&lt; Update From Database( connectInfo )

**Descripción:** Actualiza los datos en la tabla con datos reimportados desde la base de datos.

```jsl

dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );
dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**Sintaxis:** obj &lt;&lt; XGBoost

**Descripción:** Interfaz experimental de XGBoost para la modelización predictiva de impulso de gradiente estocástico

### set private

**Sintaxis:** obj &lt;&lt; set private( &lt;1|0&gt; )

**Descripción:** Convierte la tabla en privada. Se omite una tabla privada de la lista de tablas de datos y las suscripciones.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private;
Show( Get Data Table List() );
Wait( 1 );

dt << Set Private( 0 );
Show( Get Data Table List() );
Wait( 1 );

Close( dt, No Save );

```

## Column Scripting

### Mensajes del elemento

#### Add Column Properties

**Sintaxis:** obj &lt;&lt; Add Column Properties

**Descripción:** Agrega propiedades a la columna seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**Sintaxis:** obj &lt;&lt; Add From Row States

**Descripción:** Actualiza una columna de estado de fila con cualquier cambio de estado de fila usado actualmente que no sea el estado predeterminado.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );
dt << Select Rows( 1 );
dt << Select Rows( 5 );
dt << Exclude();
col = Column( "Row State Col" );
col << Add From Row States();

```

#### Add To Row States

**Sintaxis:** obj &lt;&lt; Add To Row States

**Descripción:** Copia todos los valores de estado de fila de una columna que no son el estado predeterminado al estado de fila actualmente en uso de tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
col << Copy To Row States();
col[5] = Color State( "Red" );
Wait( 2 );
col << Add To Row States();

```

#### Codes to Labels

**Sintaxis:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Descripción:** Crea una columna de valores de caracteres con etiquetas de valor que corresponden a los códigos originales.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:age << Value Labels(
	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"}
);
:age << Codes to Labels;

```

**Ejemplo 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1, "M" => 2] );
:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Ejemplo 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );
:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**Sintaxis:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**Descripción:** Cambia el color de visualización de las celdas de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Property(
	"Value Colors",
	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =
	-10562523}
);
Wait( 1 );
:Age << Color Cell by Value( 1 );

```

#### Color Cells

**Sintaxis:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**Descripción:** Colorea las celdas de la columna con el color especificado. Si no se indican las filas, el mismo color se aplica a toda la columna.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Color Cells( "Red" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
:Age << Color Cells( "Red", a );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {1, 3, 5};
b = {2, 4, 6};
:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**Sintaxis:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**Descripción:** Cambia los elementos internos de una columna de caracteres para que solo almacene una copia de cada valor, lo que podría suponer un ahorro de memoria y acelerar algunas operaciones. El formato de guardado opcional controla el formato en el que se guarda la columna. El formato condensado es más pequeño y más rápido de cargar, pero la tabla no se puede abrir en JMP 17 y versiones anteriores. El formato predeterminado utiliza la preferencia de guardar formato.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
:Airline << Get Compact;

```

#### Convert to Table Column

**Sintaxis:** obj &lt;&lt; Convert to Table Column

**Descripción:** Agrega la columna de transformación a la tabla de datos.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Transform Column( "New Col", Formula( 1 ) );
:NewCol << Convert to Table Column();

```

#### Copy from Row States

**Sintaxis:** obj &lt;&lt; Copy from Row States

**Descripción:** Copia a una columna todos los valores de estado de fila actualmente en uso en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );
dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**Sintaxis:** obj &lt;&lt; Copy to Row States

**Descripción:** Copia todos los valores de estado de fila de una columna al estado de fila actualmente en uso de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );
col = Column( "Time Marker" );
Wait( 2 );
col << Copy To Row States();

```

#### Data Type

**Sintaxis:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Descripción:** Establece el tipo de datos para la columna. Con los argumentos opcionales, también puede establecer el formato, el formato de entrada y el ancho en bytes si la columna es numérica. Fail On Conversion Error anula el cambio de tipo de datos si algún valor no se convierte. Esto es especialmente útil al convertir una columna de caracteres en una columna numérica. Return Failed Rows devuelve una lista que contiene los índices de las filas que no se pudieron convertir.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Ejemplo 3**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Ejemplo 4**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Delete Formula

**Sintaxis:** obj &lt;&lt; Delete Formula

**Descripción:** Borra toda fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Formula;

```

#### Delete Property

**Sintaxis:** obj &lt;&lt; Delete Property( property name )

**Descripción:** Borra la propiedad con nombre asignado de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**Sintaxis:** obj &lt;&lt; Eval Formula

**Descripción:** Evalúa la fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;

```

#### Format

**Sintaxis:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; )obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width )obj &lt;&lt; Format( "Format Pattern", pattern )obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**Descripción:** Establece el formato utilizado para visualizar los datos de la columna. Los formatos disponibles son todos los elementos bajo el campo formato del cuadro de diálogo de información de la columna.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Format( "Fixed Dec", 6, 3 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );
:Date << Format( "ddMonyyyy", 9 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Ejemplo 3**

```jsl

dt = New Table( "hour24_times",
	Add Rows( 3 ),
	New Column( "time",
		Continuous,
		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),
		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )
	)
);

```

#### Formula

**Sintaxis:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Descripción:** Establece la fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**Sintaxis:** obj &lt;&lt; Get Column Properties

**Descripción:** Copia todas las propiedades definidas de las columnas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Column Properties();

```

#### Get Compact

**Sintaxis:** obj &lt;&lt; Get Compact

**Descripción:** Se ha establecido la opción Compacta en la columna.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
Show( :Airline << Get Compact );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );
:Airline << Compact();
Show( :Airline << Get Compact );

```

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Obtiene la tabla de datos de la columna.

**JMP Versión agregada:** 14

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = Column( dt1, "Age" );
Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**Sintaxis:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**Descripción:** Devuelve el tipo de datos de la columna. Si se omite la palabra clave "español", el tipo de datos se devuelve en la lengua en que se esté ejecutando JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type;
Show( which );

```

#### Get Data Type Length

**Sintaxis:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**Descripción:** Devuelve el tipo de datos y la longitud de los datos de la columna. Solo se devuelve el tipo de datos si la longitud de los datos no es fija, como la mayoría de las columnas de caracteres.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = dt:Age << Get Data Type Length;
Show( which );

```

**Ejemplo 2**

```jsl

dt = New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),
	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) )
);
nameTypeLength = dt:Name << Get Data Type Length;
ageTypeLength = dt:Age << Get Data Type Length;
Show( nameTypeLength, ageTypeLength );

```

#### Get Display Width

**Sintaxis:** obj &lt;&lt; Get Display Width

**Descripción:** Obtiene el ancho de visualización de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;

```

#### Get Excluded

**Sintaxis:** obj &lt;&lt; Get Excluded

**Descripción:** Devuelve 1 si la columna está excluida.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get excluded;
Show( s );

```

#### Get Field Width

**Sintaxis:** obj &lt;&lt; Get Field Width

**Descripción:** Devuelve la longitud de campo utilizada para visualizar los datos de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
width = :Height << Get Field Width;
Show( width );

```

#### Get Format

**Sintaxis:** obj &lt;&lt; Get Format

**Descripción:** Devuelve el formato de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
f = :Height << Get Format;
Show( f );

```

#### Get Formula

**Sintaxis:** obj &lt;&lt; Get Formula

**Descripción:** Devuelve la fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << Eval Formula;
result = col << Get Formula;
Show( result );

```

#### Get Group Name

**Sintaxis:** obj &lt;&lt; Get Group Name

**Descripción:** Devuelve el nombre del grupo o la ruta del grupo que contiene esta columna, si existe.

**JMP Versión agregada:** 19

**Grupo anidado**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( "XYZ", :sex, 3 );
dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );
Show( :height << Get Group Name );

```

**Grupo simple**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Group Columns( :height, 2 );
Show( :height << Get Group Name );

```

#### Get Header Background Color

**Sintaxis:** obj &lt;&lt; Get Header Background Color

**Descripción:** Obtiene el color del encabezado.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );
Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**Sintaxis:** obj &lt;&lt; Get Header Chart Type

**Descripción:** Obtiene el tipo de gráfico que se muestra en el encabezado de columna de la tabla de datos.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**Sintaxis:** obj &lt;&lt; Get Header Text Color

**Descripción:** Obtiene el color del texto del encabezado.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );
Show( :height << Get Header Text Color );

```

#### Get Hidden

**Sintaxis:** obj &lt;&lt; Get Hidden

**Descripción:** Devuelve 1 si la columna está oculta.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get hidden;
Show( s );

```

#### Get Initial Data

**Sintaxis:** obj &lt;&lt; Get Initial Data

**Descripción:** Obtiene el valor o la expresión utilizados para inicializar los datos de la columna.

```jsl

dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );
Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**Sintaxis:** obj &lt;&lt; Get Input Format

**Descripción:** Devuelve el formato utilizado para introducir y guardar los datos de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
f = :Date << Get Input Format;
Show( f );

```

#### Get Labeled

**Sintaxis:** obj &lt;&lt; Get Labeled

**Descripción:**  Devuelve 1 si la columna está etiquetada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get labeled;
Show( s );

```

#### Get List Check

**Sintaxis:** obj &lt;&lt; Get List Check

**Descripción:** Devuelve la comprobación de lista si se ha definido en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Movies.jmp" );
prop = :Type << Get List Check;
Show( prop );

```

#### Get Lock

**Sintaxis:** obj &lt;&lt; Get Lock

**Descripción:** Devuelve verdadero si hay una columna protegida..

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
lock = :Prin1 << Get Lock;
Show( lock );

```

#### Get Modeling Type

**Sintaxis:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**Descripción:** Devuelve el tipo de modelización de la columna. Si se omite la palabra clave "español", el tipo de modelización se devuelve en la lengua en que se esté ejecutando JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
which = :Age << Get Modeling Type;
Show( which );

```

#### Get Name

**Sintaxis:** obj &lt;&lt; Get Name

**Descripción:** Devuelve el nombre de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col name = Column( 4 ) << Get Name;
Show( col name );

```

#### Get Properties List

**Sintaxis:** obj &lt;&lt; Get Properties List

**Descripción:** Obtiene la lista de nombres de todas las propiedades para esta columna

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:HARDNESS << Get Properties List();

```

#### Get Property

**Sintaxis:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Descripción:** Devuelve propiedades específicas si se han definido en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );
prop = :Credit Check << Get Property( "Axis" );
Show( prop );

```

#### Get Range Check

**Sintaxis:** obj &lt;&lt; Get Range Check

**Descripción:** Devuelve la verificación de rango si se ha definido en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Range Check( LE LT( 48, 75 ) );
check = :Height << Get Range Check;
Show( check );

```

#### Get Role

**Sintaxis:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**Descripción:** Devuelve el papel de la columna. Si se omite la palabra clave "español", el papel se devuelve en la lengua en que se esté ejecutando JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
which = :Count << Get Role();
Show( which );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Devuelve el script para recrear la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Age << Get Script;
Show( s );

```

#### Get Scroll Locked

**Sintaxis:** obj &lt;&lt; Get Scroll Locked

**Descripción:**  Devuelve 1 si la columna está bloqueada para desplazamiento.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Scroll locked;
Show( s );

```

#### Get Selected

**Sintaxis:** obj &lt;&lt; Get Selected

**Descripción:** Devuelve 1 si se ha seleccionado la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = :Weight << Get Selected;
Show( s );

```

#### Get Stored Values

**Sintaxis:** obj &lt;&lt; Get Stored Values

**Descripción:** Devuelve los valores de las columnas sin la conversión de códigos de valores faltantes

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Stored Values;
Show( valuesMatrix );
valuesList = :Height << GetStoredValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Get Use Value Labels

**Sintaxis:** obj &lt;&lt; Get Use Value Labels

**Descripción:** Devuelve el estado de la marca Utilizar etiquetas de valores.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
flag = :Color << Get Use Value Labels;
Show( flag );

```

#### Get Value Labels

**Sintaxis:** obj &lt;&lt; Get Value Labels

**Descripción:** Devuelve las etiquetas de valores si se han definido en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
values = :Color << Get Value Labels;
Show( values );

```

#### Get Values

**Sintaxis:** obj &lt;&lt; Get Values

**Descripción:** Devuelve los valores de la columna.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Property( "Missing Value Codes", 65 );
valuesMatrix = :Height << Get Values;
Show( valuesMatrix );
valuesList = :Height << GetValues(
	Format(/* a numeric column will be list of character items if a format is supplied, see format function */
		"Currency",
		"EUR",
		2,
		<<use locale(
			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */
		)
	)
);
Show( valuesList );

```

#### Ignore Errors

**Sintaxis:** obj &lt;&lt; Ignore Errors( state=0|1 )

**Descripción:** Establecer la marca para ignorar errores cuando se esté evaluando una fórmula de columna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << ignore errors( true );

```

#### Input Format

**Sintaxis:** obj &lt;&lt; Input Format( format )obj &lt;&lt; Input Format( "Format Pattern", pattern )

**Descripción:** Establece el formato utilizado para introducir y guardar los datos de la columna. A menudo esto se utiliza con los formatos de fecha y hora.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
:Date << Input Format( "ddmmyyyy" );

```

**Ejemplo 2**

```jsl

dt = New Table( "duration_table",
	Add Rows( 3 ),
	New Column( "durations",
		Continuous,
		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),
		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),
		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )
	)
);

```

#### Is Transform Column

**Sintaxis:** obj &lt;&lt; Is Transform Column

**Descripción:** Devuelve 1 si la columna es una columna de transformación; de lo contrario, devuelve 0.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**Sintaxis:** obj &lt;&lt; IsTransformedOnSASExport

**Descripción:** Devuelve verdadero si los datos del conjunto de datos SAS resultante para esta columna se modificarán en la exportación a SAS. Nota: esto es válido sólo para las columnas de fechas, porque las fechas se guardan de manera distinta en SAS y en JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
flag = :Date << Is Transformed On SAS Export;
Show( flag );

```

#### Labels to Codes

**Sintaxis:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Descripción:** Crea una columna de códigos numéricos con etiquetas de valor que corresponden a los valores de caracteres originales.

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes;

```

**Ejemplo 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Ejemplo 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**Sintaxis:** obj &lt;&lt; Lock

**Descripción:** Protege la columna frente a futuros cambios.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Preselect Role

**Sintaxis:** obj &lt;&lt; Preselect Role( "Sin papel"|"X"|"Y"|"Peso"|"Frecuencia"|"Validación" )

**Descripción:** Asigna un papel preseleccionado a la columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**Sintaxis:** obj &lt;&lt; Remove Value Labels

**Descripción:** Elimina cualquier etiqueta de valores definida en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Remove Value Labels;

```

#### Reset Transform

**Sintaxis:** obj &lt;&lt; Reset Transform

**Descripción:** Quita los datos almacenados en caché para la columna de transformación. Si accede a los datos de la columna, se restaurará la caché. Utilice este comando para reducir memoria o permitir que se vuelva a realizar el cálculo si la fórmula depende de información externa.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
global:a = 2;
dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );
Show( :"sqrt[height]"n[1] );
global:a = 3;
:"sqrt[height]"n << Reset Transform();
Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**Sintaxis:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Descripción:** Establece el tipo de datos para la columna. Con los argumentos opcionales, también puede establecer el formato, el formato de entrada y el ancho en bytes si la columna es numérica. Fail On Conversion Error anula el cambio de tipo de datos si algún valor no se convierte. Esto es especialmente útil al convertir una columna de caracteres en una columna numérica. Return Failed Rows devuelve una lista que contiene los índices de las filas que no se pudieron convertir.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Time",
	"Character",
	"Nominal",
	Set Values( {"13:32", "20:10", "20:12", "14:56"} )
);
Wait( 2 );
dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );
dt:Time << Set Modeling Type( "Continuous" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt:Age << Set Data Type( "Character" );
dt:Height << Set Data Type( "Numeric", 2 );

```

**Ejemplo 3**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );
Show( r );

```

**Ejemplo 4**

```jsl

dt = New Table( "My Table",
	New Column( "col1",
		Character,
		"Nominal",
		Set Values( {"123", "456", "abc", "789", "", "def"} )
	)
);
r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );
Show( r );

```

#### Set Display Width

**Sintaxis:** obj &lt;&lt; Set Display Width( number )

**Descripción:** Cambia el ancho de visualización de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 0 );
w = :Height << Get Display Width;
:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**Sintaxis:** obj &lt;&lt; Set Each Value( number )

**Descripción:** Establece como constante todos los valores de una columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X" );
dt:X << Set Each Value( 5 );

```

#### Set Excluded

**Sintaxis:** obj &lt;&lt; Set Excluded

**Descripción:** Excluye la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set excluded;

```

#### Set Field Width

**Sintaxis:** obj &lt;&lt; Set Field Width( number )

**Descripción:** Establece la longitud de campo utilizada para visualizar los datos de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Field Width( 20 );

```

#### Set Formula

**Sintaxis:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Descripción:** Establece la fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**Sintaxis:** obj &lt;&lt; Set Header Background Color

**Descripción:** Establece el color del encabezado. Establézcalo en "Ninguno" para usar el color predeterminado.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( "Light Red" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**Sintaxis:** obj &lt;&lt; Set Header Chart Type

**Descripción:** Establece el tipo de gráfico que se muestra en el encabezado de columna de la tabla de datos.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**Sintaxis:** obj &lt;&lt; Set Header Text Color

**Descripción:** Establece el color del texto del encabezado. Establézcalo en "Ninguno" para usar el color predeterminado.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( "Dark Purple" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**Sintaxis:** obj &lt;&lt; Set Hidden

**Descripción:** Oculta la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set hidden;

```

#### Set Initial Data

**Sintaxis:** obj &lt;&lt; Set Initial Data

**Descripción:** Inicializa los datos de la columna con cualquier constante o una expresión sencilla.

**Ejemplo 1**

```jsl

dt = New Table( "MyDt", New Column(), New Column() );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Today() );
Column( dt, 2 ) << set initial data( 99 );

```

**Ejemplo 2**

```jsl

dt = New Table( "MyDt" );
dt << Add Rows( 5 );
Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**Sintaxis:** obj &lt;&lt; Set Labeled

**Descripción:** Utiliza los valores de datos de la columna como etiqueta.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set labeled;

```

#### Set Modeling Type

**Sintaxis:** obj &lt;&lt; Set Modeling Type( "Ninguno"|"Continuo"|"Ordinal"|"Nominal"|"Estado de fila"|"Respuesta múltiple"|"Texto sin formato"|"Vector" )

**Descripción:** Establece el tipo de modelización para la columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**Sintaxis:** obj &lt;&lt; Set Name( name )

**Descripción:** Establece el nombre de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Name( "Time" );

```

#### Set Property

**Sintaxis:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Descripción:** Establece las propiedades de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**Sintaxis:** obj &lt;&lt; Set Scroll Locked

**Descripción:** Bloquea el desplazamiento en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Set Scroll locked;

```

#### Set Selected

**Sintaxis:** obj &lt;&lt; Set Selected( state=0|1 )

**Descripción:** Selecciona la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Height << Set Selected( 1 );

```

#### Set Use for Marker

**Sintaxis:** obj &lt;&lt; Set Use for Marker

**Descripción:** Utilice los valores de esta columna como los marcadores de un gráfico. Las columnas Expresión con imágenes o columnas de caracteres con ID podrían funcionar correctamente.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Name << Set Use for Marker;

```

#### Set Values

**Sintaxis:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**Descripción:** Establece los valores en una columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "X" );
:X << Set Values(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,
	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
);

```

#### SetLock

**Sintaxis:** obj &lt;&lt; SetLock

**Descripción:** Protege la columna frente a futuros cambios.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Lock( 1 );

```

#### Suppress Eval

**Sintaxis:** obj &lt;&lt; Suppress Eval( state=0|1 )

**Descripción:** Establece la marca para suprimir la evaluación de la fórmula de la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = New Column( "Ratio" );
col << Set Formula( :Height / :Weight );
col << suppress eval( true );

```

#### Use Value Labels

**Sintaxis:** obj &lt;&lt; Use Value Labels( state=0|1 )

**Descripción:** Sustituye las etiquetas de valor definidas en la columna en toda la salida.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
:Color << Use Value Labels( 1 );
Distribution( Column( :Color ) );

```

#### Value Labels

**Sintaxis:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Descripción:** Establece las etiquetas de valor

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Constructores asociados

#### Column

**Sintaxis:** Column( &lt;data table&gt;, "column name"|column number )

**Descripción:** Devuelve una referencia a la columna de tabla de datos especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "height" );

```

### Mensajes del elemento

#### Add Multiple Columns

**Sintaxis:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**Descripción:** Crea múltiples columnas nuevas en la tabla de datos actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**Sintaxis:** obj &lt;&lt; Clear Column Selection

**Descripción:** Borra la selección de columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go To( :BP 12F );
Wait( 2 );
dt << Clear Column Selection();

```

#### Clone Formula Column

**Sintaxis:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**Descripción:** Crea n nuevas columnas de fórmula basadas en la column proporcionada. Las referencias de columna a column1 de la fórmula original se reemplazarán por cada columna en list para todas las columnas n. Utilice varios argumentos Substitute Column Reference cuando reemplace más de una referencia de columna de la fórmula original.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );
list1 = {:BP 8W, :BP 8F};
list2 = {:BP 12W, :BP 12F};
list3 = {:BP 6W, :BP 6F};
dt << Clone Formula Column(
	"Day 1",
	2,
	Substitute Column Reference( :BP 8M, list1 ),
	Substitute Column Reference( :BP 12M, list2 ),
	Substitute Column Reference( :BP 6M, list3 )
);

```

#### Columns Manager

**Sintaxis:** obj &lt;&lt; Columns Manager

**Descripción:** Invoca el Administrador de columnas en la tabla actual y muestra las propiedades y estadísticos de las columnas.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << Columns Manager;

```

#### Combine Columns

**Sintaxis:** obj &lt;&lt; Combine Columns

**Descripción:** Combina un grupo de columnas en una columna (de respuesta múltiple) delimitada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Selected Columns are Indicator Columns( 1 ),
	Column Name( "When to Brush" )
);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Combine Columns(
	delimiter( "," ),
	Columns(
		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time
	),
	Column Name( "When to Brush" )
);

```

#### Compress Selected Columns

**Sintaxis:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**Descripción:** Comprime cada columna de la forma más compacta posible. 

Los datos de caracteres serán de 1 byte si hay menos de 255 niveles.

Los datos numéricos serán de 1 byte si los datos se encuentran entre -127 y 127.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**Sintaxis:** obj &lt;&lt; Exclude( 0|1 )

**Descripción:** Excluye la columna de toda corrida de análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << Exclude( 1 );

```

#### Formula

**Sintaxis:** obj &lt;&lt; Formula

**Descripción:** Establece una fórmula en la columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col1 = dt << New Column( "Ratio", Numeric, Continuous );
col1 << Formula( :height / :weight );

```

#### Freq

**Sintaxis:** obj &lt;&lt; Preselect Role( Freq )

**Descripción:** Asigna el papel Frecuencia a la columna de la tabla de datos

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "freq" );

```

#### Go to

**Sintaxis:** obj &lt;&lt; Go to( column name|column number )

**Descripción:** Selecciona y va a la columna especificada de la tabla de datos actual.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
dt << Go to( :BP 12F );

```

#### Hide/Unhide

**Sintaxis:** obj &lt;&lt; Hide( 0|1 )

**Descripción:** Oculta la columna que hay en la cuadrícula de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Hide( 1 );

```

#### Invert Column Selection

**Sintaxis:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**Descripción:** Invierte la selección de columnas actual. Si se especifica una lista de columnas, se seleccionarán las columnas que no estén en la lista.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
b = dt << Invert Column Selection;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
a = {:height, :weight};
b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**Sintaxis:** obj &lt;&lt; Label( 0|1 )

**Descripción:** Establece la columna como etiqueta para la identificación. Los valores de la columna aparecerán en el gráfico cuando se seleccione un punto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Age << Label( 1 );

```

#### Make Indicator Columns

**Sintaxis:** obj &lt;&lt; Make Indicator Columns

**Descripción:** Crea un conjunto de columnas indicadoras a partir de la columna seleccionada

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**Sintaxis:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**Descripción:** Mueve las columnas seleccionadas de la tabla de datos.

**After column**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << group Columns( "Measures", {:height, :weight} );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
Wait( 2 );
dt << Move Selected Columns( To last );

```

#### New Column

**Sintaxis:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**Descripción:** Crea una nueva columna en la tabla de datos actual.

**Like**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "like name", Like( :name ) );

```

**Nueva tabla**

```jsl

New Table( "test",
	Add Rows( 5 ),
	New Column( "name",
		Character( 8 ),
		Nominal,
		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )
	),
	New Column( "age",
		Numeric,
		Ordinal,
		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),
		Set Values( [12, 12, 12, 12, 12] )
	),
	New Column( "code",
		Character( 2 ),
		Nominal,
		Set Values( {"AA", "AA", "BB", "BB", "AA"} )
	)
);

```

**Simple**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "X", Formula( Random Uniform() ) );

```

#### New Formula Column

**Sintaxis:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**Descripción:** Crea una columna de fórmulas en la tabla, utilizando las columnas especificadas y aplicando la operación y las columnas de agrupación opcionales. La categoría de la operación se puede especificar si es necesario para eliminar la ambigüedad del nombre de la operación. Devuelve una lista de referencias de columna a las columnas creadas.

**JMP Versión agregada:** 17

**Agrupar por**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column(
	Operation( "Mean" ),
	Columns( :height, :weight ),
	Group By( :age )
);

```

**Logaritmo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

#### Next Selected Column

**Sintaxis:** obj &lt;&lt; Next Selected Column

**Descripción:** Salta a la siguiente columna seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
Wait( 2 );
dt << Next Selected Column;

```

#### No Role

**Sintaxis:** obj &lt;&lt; Preselect Role( No Role )

**Descripción:** Quita el papel asignado de la columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "No Role" );

```

#### Original Order

**Sintaxis:** obj &lt;&lt; Original Order

**Descripción:** Devuelve las columnas al orden original de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :Age );
dt << Move Selected Columns( To last );
Wait( 2 );
dt << Original Order();

```

#### Paste Column Properties

**Sintaxis:** obj &lt;&lt; Paste Column Properties

**Descripción:** Pega desde el portapapeles varias listas de propiedades de columna en varias columnas. También puede especificar una lista de columnas de destino en lugar de seleccionarlas en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Copy Column Properties( {:MODULUS, :ELONG} );
dt2 = New Table( "test it",
	New Column( "T1", numeric, continuous ),
	New Column( "T2", numeric, continuous ),
	New Column( "T3", numeric, continuous ),
	Add Rows( 10 )
);
dt2 << Paste Column Properties( {:T1, :T3} );

```

#### Previous Selected Column

**Sintaxis:** obj &lt;&lt; Previous Selected Column

**Descripción:** Salta a la columna seleccionada anteriormente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
Wait( 1 );
dt << Next Selected Column;
dt << Next Selected Column;
Wait( 2 );
dt << Previous Selected Column;

```

#### Reorder by Data Type

**Sintaxis:** obj &lt;&lt; Reorder by Data Type

**Descripción:** Reordena las columnas de la tabla de datos por tipo de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**Sintaxis:** obj &lt;&lt; Reorder by Modeling Type

**Descripción:** Reordena las columnas de la tabla de datos por tipo de modelización.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Modeling Type();

```

#### Reorder by Name

**Sintaxis:** obj &lt;&lt; Reorder by Name

**Descripción:** Reordena las columnas de la tabla de datos por nombre de columna.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reorder By Name();

```

#### Reverse Order

**Sintaxis:** obj &lt;&lt; Reverse Order

**Descripción:** Invierte el orden de las columnas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Reverse Order();

```

#### Set Label Columns

**Sintaxis:** obj &lt;&lt; Set Label Columns( column(s) )

**Descripción:** Asigna un papel de etiqueta a las columnas seleccionadas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
Wait( 1 );
dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**Sintaxis:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Descripción:** Protege las columnas seleccionadas frente a desplazamiento.  El color de fondo cambia para indicar que una columna está protegida.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**Sintaxis:** obj &lt;&lt; Text to Columns

**Descripción:** Crea un conjunto de columnas de texto o columnas indicadoras a partir de una columna de texto delimitada

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << Text To Columns(
	delimiter( "," ),
	columns( :Brush Delimited ),
	Make Indicator Columns( 1 )
);

```

#### Use for Marker

**Sintaxis:** obj &lt;&lt; UseForMarker( 0|1 )

**Descripción:** Utilice los valores de esta columna como los marcadores de un gráfico. Las columnas Expresión con imágenes o columnas de caracteres con ID podrían funcionar correctamente.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Name << UseForMarker( 1 );

```

#### Validation

**Sintaxis:** obj &lt;&lt; Preselect Role( Validation)

**Descripción:** Asigna el papel Validación a la columna de la tabla de datos

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "age" );
col << Preselect Role( "Validation" );

```

#### Weight

**Sintaxis:** obj &lt;&lt; Preselect Role( Weight )

**Descripción:** Asigna el papel Peso a la columna de la tabla de datos

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:Weight << Preselect Role( "weight" );

```

#### X

**Sintaxis:** obj &lt;&lt; Preselect Role( X )

**Descripción:** Asigna el papel X a la columna de la tabla de datos

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
col = Column( "weight" );
col << Preselect Role( "X" );

```

#### Y

**Sintaxis:** obj &lt;&lt; Preselect Role( Y )

**Descripción:** Asigna el papel Y a la columna de la tabla de datos

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### Mensajes del elemento

#### Add Rows

**Sintaxis:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**Descripción:** Añade n filas, al principio, al final o después de la fila m a la tabla de datos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 3, after( 5 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**Sintaxis:** obj &lt;&lt; Clear Row States

**Descripción:** Borra los estados de todas las filas, incluyendo seleccionadas, excluidas, ocultas, marcadores, etiquetas y colores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 12, 15] );
Wait( 2 );
dt << Clear Row States;

```

#### Clear Select

**Sintaxis:** obj &lt;&lt; Clear Select

**Descripción:** Borra o anula la selección de las filas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
dt << Clear Select();

```

#### Clear Selected Row States

**Sintaxis:** obj &lt;&lt; Clear Selected Row States

**Descripción:** Borra los estados de las filas seleccionadas, incluyendo seleccionadas, excluidas, ocultas, marcadores, etiquetas y colores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );
r << Exclude;
r << clear select;
r << Select Rows( [5, 6] );
Wait( 1 );
dt << Clear Selected Row States;

```

#### Color Rows by Row State

**Sintaxis:** obj &lt;&lt; Color Rows by Row State

**Descripción:** Muestra u oculta en las celdas de la tabla de datos el color asignado al estado de fila.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );
Wait( 2 );
dt << Color Rows by Row State;

```

#### Color by Column

**Sintaxis:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Descripción:** Asigna un color cada para una de las filas de la tabla de datos a partir del valor de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color by Column( :Age );

```

#### Color or Mark by Column

**Sintaxis:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**Descripción:** Asocia colores o marcadores a los valores de una columna especificada

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Color or Mark by Column( :Age );

```

#### Colors

**Sintaxis:** obj &lt;&lt; Colors( color )

**Descripción:** Colorea las filas seleccionadas en todas las salidas gráficas con marcadores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Run Script( "Bivariate" );
Wait( 1 );
dt << Select Where( :sex == "F" );
Wait( 1 );
dt << Colors( "Red" );

```

#### Data Filter

**Sintaxis:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**Descripción:** Crea o muestra un Filtro de datos, donde selecciona de forma interactiva subconjuntos complejos de datos. La opción Mode determina qué estados de fila se ven afectados por la selección del filtro. El comando Add Filter agregará un nuevo grupo de filtros con las cláusulas Columns y Where especificadas. Cuando haya varios grupos de filtros, el comportamiento combinado lo determina la opción Group By AND. Si se especifica la palabra clave Local, el filtro se puede incrustar en un informe para filtrar una o más plataformas sin que ello afecte a otros informes.

**Filtro de datos global**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Location( {218, 114} ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter(
		columns( :age, :height ),
		Where( :age == {13, 14, 15} ),
		Where( :height >= 65 & :height <= 70 )
	),
	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
);

```

**Filtro de datos locales**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Local Data Filter",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Mode( Show( 1 ), Include( 1 ) ),
				Add Filter(
					columns( :age, :height ),
					Where( :age == {13, 14, 15} ),
					Where( :height >= 65 & :height <= 70 )
				),
				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )
			),
			dt << Run Script( "Bivariate" ),
			dt << Run Script( "Distribution" )
		)
	)
);

```

#### Data View

**Sintaxis:** obj &lt;&lt; Data View

**Descripción:** Crea una nueva vista de datos de las filas actualmente seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :age < 14 );
dt << Data View;

```

#### Delete Rows

**Sintaxis:** obj &lt;&lt; Delete Rows

**Descripción:** Borra la(s) fila(s) seleccionada(s).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r = dt << Delete Rows;
Show( r );

```

#### Exclude/Unexclude

**Sintaxis:** obj &lt;&lt; Exclude/Unexclude

**Descripción:** Excluye las filas seleccionadas para que no contribuyan a los cálculos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;

```

#### Get Rows

**Sintaxis:** obj &lt;&lt; Get Rows( number )

**Descripción:** devuelve una lista de valores de columna para las filas especificadas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Get Rows( 3 );
dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**Sintaxis:** obj &lt;&lt; Go to Row( row number )

**Descripción:** Devuelve un objeto de fila, va hasta la fila especificada, selecciona la fila y la resalta.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To Row( 5 );

```

#### Hide and Exclude

**Sintaxis:** obj &lt;&lt; Hide and Exclude

**Descripción:** Oculta las filas seleccionadas para que no aparezcan en los gráficos y las excluye de los cálculos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Hide and Exclude;

```

#### Hide/Unhide

**Sintaxis:** obj &lt;&lt; Hide/Unhide

**Descripción:** Evita la aparición en gráficos de las filas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 12 );
r << Hide;

```

#### Insert Rows

**Sintaxis:** obj &lt;&lt; Insert Rows

**Descripción:** Inserta filas delante de las filas seleccionadas. No tiene ningún efecto si no hay ninguna seleccionada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [3, 4, 5] );
dt << Insert Rows;

```

#### Invert Row Selection

**Sintaxis:** obj &lt;&lt; Invert Row Selection

**Descripción:** Invierte la selección de filas actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :Age < 14 );
Wait( 2 );
r << Invert Row Selection;

```

#### Label/Unlabel

**Sintaxis:** obj &lt;&lt; Label/Unlabel

**Descripción:** Etiqueta las filas seleccionadas en todas las salidas gráficas con marcadores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Go To Row( 5 );
r << Label;

```

#### Marker by Column

**Sintaxis:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Descripción:** Asigna un marcador para cada una de las filas de la tabla de datos a partir del valor de la columna especificada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Marker by Column( :sex );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/big class.jmp" );
dt << Marker By Column(
	:age,
	Marker( 1 ),
	Color theme( "White to Red" ),
	Marker Theme( "alphanumeric" ),
	Reverse Scale( 1 ),
	Make Window With Legend
);

```

#### Markers

**Sintaxis:** obj &lt;&lt; Markers( marker )

**Descripción:** Cambia los marcadores de las filas seleccionadas para todas las salidas gráficas con marcadores.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Where( :sex == "M" );
r << Markers( "+" );

```

#### Move Rows

**Sintaxis:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**Descripción:** Mueve las filas seleccionadas hacia arriba o abajo en la tabla de datos hasta la nueva ubicación especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Move Rows( At Start );

```

#### Name Selection in Column

**Sintaxis:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Descripción:** Crea una nueva columna categórica con dos valores, uno para las filas seleccionadas y otro para las filas no seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );
dt << Name Selection in Column(
	Column Name( "Younger" ),
	Selected( "Yes" ),
	Unselected( "No" )
);

```

#### Next Selected

**Sintaxis:** obj &lt;&lt; Next Selected

**Descripción:** Resalta la siguiente fila del grupo de filas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Next Selected;

```

#### Previous Selected

**Sintaxis:** obj &lt;&lt; Previous Selected

**Descripción:** Resalta la fila previa del grupo de filas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
Wait( 2 );
r << Previous Selected;

```

#### Row Editor

**Sintaxis:** obj &lt;&lt; Row Editor

**Descripción:** Abre el cuadro de diálogo del editor de filas para las filas seleccionadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Row Editor();

```

#### Row Selection

**Sintaxis:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**Descripción:** Selecciona todas las filas que cumplen la condición definida, con la opción de ampliar o restringir las selecciones existentes, la opción de ejecutar la selección o simplemente mostrar el cuadro de diálogo. Cuando se omite la opción Coincidir mayúsculas y minúsculas, el valor predeterminado es una coincidencia que distingue entre mayúsculas y minúsculas.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );

```

**Ejemplo 2**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
Wait( 2 );
dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Ejemplo 3**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :age < 15 ) );
dt << Row Selection(
	Select where( :sex == "M" ),
	current selection( "restrict" ),
	Dialog( "keep dialog open" )
);

```

**Ejemplo 4**

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**Sintaxis:** obj &lt;&lt; Select All Matching Cells

**Descripción:** Selecciona en todas las tablas de datos abiertas todas las filas en que los valores de la columna seleccionada se corresponden con uno de los valores de las filas seleccionadas en esa columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select All Matching Cells();

```

#### Select All Rows

**Sintaxis:** obj &lt;&lt; Select All Rows

**Descripción:** Selecciona todas las filas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select All Rows;

```

#### Select Dominant

**Sintaxis:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Descripción:** Selecciona todas las filas a partir del valor elevado (1) o bajo (0) de la frontera de Pareto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Go To( :height );
dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**Sintaxis:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**Descripción:** Selecciona las filas duplicadas y las asocia en las columnas seleccionadas. Si no se especifican columnas asociadas, las filas se asocian en todas las columnas de la tabla. Devuelve el número de filas duplicadas.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**Sintaxis:** obj &lt;&lt; Select Excluded

**Descripción:** Selecciona todas las filas excluidas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Exclude( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Excluded;

```

#### Select Hidden

**Sintaxis:** obj &lt;&lt; Select Hidden

**Descripción:** Selecciona todas las filas ocultas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Hide( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Hidden;

```

#### Select Labeled

**Sintaxis:** obj &lt;&lt; Select Labeled

**Descripción:** Selecciona todas las filas etiquetadas de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10, 15] );
dt << Label( 1 );
dt << Clear Select;
Wait( 2 );
dt << Select Labeled;

```

#### Select Matching Cells

**Sintaxis:** obj &lt;&lt; Select Matching Cells

**Descripción:** Selecciona todas aquellas filas en que los valores de la columna seleccionada se corresponden con uno de los valores de las filas seleccionadas de esa columna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [1, 2, 3, 4] );
dt << Go To( :Height );
Wait( 2 );
dt << Select Matching Cells();

```

#### Select Randomly

**Sintaxis:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Descripción:** Selecciona aleatoriamente una fracción especificada de filas.

**Probability**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( 0.3 );

```

**Tamaño muestral**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sample Size( 12 ) );

```

**Tasa muestral**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Randomly( Sampling Rate( 0.3 ) );

```

#### Select Rows

**Sintaxis:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**Descripción:** Selecciona las filas especificadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**Sintaxis:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**Descripción:** Las opciones son ampliar o restringir selecciones, ejecutar la selección o mostrar solo el cuadro de diálogo.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age < 14 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( :Age == 14 );
Wait( 0 );
dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Mensajes del elemento

#### Get Data Filter

**Sintaxis:** expr = obj &lt;&lt; Get Data Filter

**Descripción:** Devuelve la definición del filtro de la vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Filter );

```

#### Get Data Table

**Sintaxis:** data table = obj &lt;&lt; Get Data Table

**Descripción:** Devuelve la tabla a la que pertenece la vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Data Table );

```

#### Get Name

**Sintaxis:** string = obj &lt;&lt; Get Name

**Descripción:** Obtiene el nombre de la vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Name );

```

#### Get Show Hidden Rows

**Sintaxis:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**Descripción:** Devuelve la configuración de mostrar filas ocultas para esta vista del¡ filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Show Hidden Rows );

```

#### Get Type

**Sintaxis:** obj &lt;&lt; Get Type

**Descripción:** Obtiene el tipo de vista de filtro; que puede ser: "Sin filtrar", "Filtrada" o "Temporalmente filtrada".

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**Sintaxis:** 0|1 = obj &lt;&lt; Is Locked

**Descripción:** Devuelve la configuración de bloqueo de esta vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Lock( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Is Locked );

```

#### Is Temporary

**Sintaxis:** 0|1 = obj &lt;&lt; Is Temporary

**Descripción:** Devuelve 1 si la vista filtrada es una vista de filtro temporal.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**Sintaxis:** 0|1 = obj &lt;&lt; Is Unfiltered

**Descripción:** Devuelve 1 si la vista filtrada es la vista de filtro sin filtrar.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**Sintaxis:** obj &lt;&lt; Lock( 0|1 )

**Descripción:** Impide la edición de esta vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Lock( 1 );
Show( fv << Is Locked );

```

#### Set Data Filter

**Sintaxis:** obj &lt;&lt; Set Data Filter( expr )

**Descripción:** Cambia la definición del filtro de la vista de filtro. La definición del filtro de la vista sin filtrar no se puede modificar.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );
Show( fv << Get Data Filter );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View( "Dream", Active( 0 ) );
fv << Set Data Filter(
	Data Filter(
		Inverse( 1 ),
		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )
	)
);
Show( fv << Get Data Filter );

```

#### Set Name

**Sintaxis:** string = obj &lt;&lt; Set Name( name )

**Descripción:** Cambia el nombre de la vista de filtro. Los nombres de la vista no filtrada y de la vista temporalmente filtrada no se pueden modificar.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
Show( fv << Set Name( "Dream Penguins" ) );
Show( fv << Get Name );

```

#### Show Hidden Rows

**Sintaxis:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**Descripción:** Cambia la configuración de mostrar filas ocultas para esta vista de filtro.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );
fv = dt << New Filter View(
	"Dream",
	Active( 0 ),
	Show Hidden Rows( 1 ),
	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) )
);
fv << Show Hidden Rows( 0 );
Show( fv << Get Show Hidden Rows );

```

