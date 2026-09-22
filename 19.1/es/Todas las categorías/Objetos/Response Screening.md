# Response Screening



## Columnas

### By

**Sintaxis:** obj = Response Screening(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**Sintaxis:** obj = Response Screening(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ), Freq( :_freqcol ) );

```

### Grouping

**Sintaxis:** obj = Response Screening(...&lt;Grouping( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica columnas categóricas como variables de agrupación. Las filas asignadas a cada nivel de la columna especificada se analizan por separado.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Grouping( :Site ));

```

### Response

**Sintaxis:** obj = Response Screening(...Response( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables de respuesta que contienen las mediciones que se desea analizar.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Subgroup

**Sintaxis:** obj = Response Screening(...&lt;Subgroup( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una o más variables de subgrupo. Cuando se define una variable de subgrupo, se realizan ajustes adicionales para cada categoría de la variable de subgrupo.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Subgroup( :Site ));

```

### Weight

**Sintaxis:** obj = Response Screening(...&lt;Weight( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ), Weight( :_weightcol ) );

```

### X

**Sintaxis:** obj = Response Screening(...X( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables predictoras.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Y

**Sintaxis:** obj = Response Screening(...Y( column(s) )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables de respuesta que contienen las mediciones que se desea analizar.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

## Constructores asociados

### Response Screening

**Sintaxis:** Response Screening( Y( columns ), X( columns ) )

**Descripción:** Automatiza el proceso de realizar pruebas para los efectos del modelo lineal en un gran número de respuestas. Los resultados de las pruebas y los estadísticos de resumen se presentan en tablas de datos y gráficos. La tasa de falsos descubrimientos (FDR) evita las declaraciones de significación incorrectas. Un método de estimación robusto reduce la sensibilidad de las pruebas a los valores atípicos.

#### Cribado de respuestas con ajuste robusto

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	Y( Column Group( "Responses" ) ),	X( :Process ),	Robust( 1 ));

```

#### Cribado de respuestas de 4 respuestas y 26 predictores potenciales

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Response Screening( Y( :ls, :ha, :dt ), X( Column Group( "Intensities" ) ) );

```

#### Cribado de respuestas de muchas columnas con gráfico de volcán de diferencias de medias

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Father, :Mother, :Sex, :Disease Status ),	Common Y Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox( 1 ), {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

#### Cribado de respuestas de muchas columnas en cada uno de los 4 predictores

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ));

```

#### Cribado de respuestas de muchas columnas en grupos

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ),	Grouping( "Sex" ));

```

#### Cribado de respuestas en subgrupos con gráfico de volcán seleccionado

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( :Father, :Mother, :Sex, :Disease Status ),	Subgroup( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

#### Cribado de respuestas especificado con números de columna

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

## Mensajes del elemento

### Cauchy

**Sintaxis:** obj = Response Screening(...Cauchy( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Estima los parámetros utilizando la máxima verosimilitud y una función de enlace de Cauchy. Este método de estimación asume que los errores tienen una distribución Cauchy, que tiene colas más gruesas que la distribución normal. Este método reduce el énfasis en los valores atípicos.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Eval( 8 :: 48 ) ), Cauchy( 1 ) );

```

### Common X Scale

**Sintaxis:** obj = Response Screening(...Common X Scale( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Notifica a la plataforma que todas las variables X continuas están en la misma escala. Esto es necesario para comparar las pendientes de las distintas variables X.

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );dt << Response Screening(	Y( :Sepal length, :Sepal width ),	X( :Petal length, :Petal width ),	Common X Scale);

```

### Common Y Scale

**Sintaxis:** obj = Response Screening(...Common Y Scale( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Notifica a la plataforma que todas las respuestas continuas están en la misma escala. Esto es necesario para comparar las pendientes o diferencias de las medias.

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );dt << Response Screening(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Common Y Scale);

```

### Comparisons

**Sintaxis:** obj = Response Screening(...Comparisons( "Cada una con control"|"Todas las combinaciones" )...)

**Descripción:** Especifica el método para comparar medias o tasas. Puede comparar cada nivel con un nivel del grupo de control o comparar todas las combinaciones de niveles posibles.

**JMP Versión agregada:** 19

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ),	Comparisons( "All combinations" ),	Name( "2 by M Table" )(1));

```

### Corr

**Sintaxis:** obj = Response Screening(...Corr( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Calcula la correlación producto-momento de Pearson en términos de los índices definidos por la ordenación de valores.

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );dt << Response Screening(	X( :Employee Tenure, :Position Tenure, :Age Group ),	Y( :Job Satisfaction ),	Corr( 1 ));

```

### Empirical Bayes Shrinkage

**Sintaxis:** obj = Response Screening(...Empirical Bayes Shrinkage( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Encoge los valores estimados de la varianza hacia un modo estimado a priori, que toma prestada la fuerza en todas las estimaciones. Resulta útil cuando se criban muchas variables Y continuas en una escala común.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 88 ) ),	Common Y Scale,	Empirical Bayes Shrinkage( 1 ));

```

### Fit Selected Items

**Sintaxis:** obj &lt;&lt; Fit Selected Items

**Descripción:** Agrega informes de Ajustar Y en función de X al informe de Cribado de respuestas. Los informes agregados corresponden a los puntos seleccionados en los gráficos o a las filas seleccionadas en la Tabla de resultados.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );obj << Fit Selected Items;

```

### Force X Categorical

**Sintaxis:** obj = Response Screening(...Force X Categorical( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ignora el tipo de modelización y trata todas las columnas X como categóricas.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :height, :sex ), Y( :age, :weight ), Force X Categorical( 1 ) );

```

### Force X Continuous

**Sintaxis:** obj = Response Screening(...Force X Continuous( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ignora el tipo de modelización y trata todas las columnas X como continuas.

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );dt << Response Screening(	X( :Age Group, :Job Satisfaction ),	Y( :Gender, :Single Status ),	Force X Continuous( 1 ));

```

### Force Y Categorical

**Sintaxis:** obj = Response Screening(...Force Y Categorical( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ignora el tipo de modelización y trata todas las columnas Y como categóricas.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( Y( :height, :sex ), X( :age, :weight ), Force Y Categorical( 1 ) );

```

### Force Y Continuous

**Sintaxis:** obj = Response Screening(...Force Y Continuous( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ignora el tipo de modelización y trata todas las columnas Y como continuas.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( Y( :age ), X( :height, :weight ), Force Y Continuous( 1 ) );

```

### Get Crosstab RTF

**Sintaxis:** obj &lt;&lt; Get Crosstab RTF( state=0|1 )

**Descripción:** Get an RTF source for a crosstab table.

**JMP Versión agregada:** 19

### Get Crosstab Script

**Sintaxis:** obj &lt;&lt; Get Crosstab Script( state=0|1 )

**Descripción:** Get a JSL display script for a crosstab table.

**JMP Versión agregada:** 19

### Get PValues

**Sintaxis:** obj &lt;&lt; Get PValues

**Descripción:** Devuelve una referencia a la tabla de valores p.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Outlier Indicator);pvals = obj << Get PValues;Show( pvals );

```

### Kappa

**Sintaxis:** obj = Response Screening(...Kappa( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Agrega una nueva columna llamada Kappa a la Tabla de resultados. Kappa es una medida de la concordancia entre Y y X.

```jsl

dt = Open( "$Sample_Data/Mail Messages.jmp" );dt << Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );

```

### Kruskal Wallis Test

**Sintaxis:** obj = Response Screening(...Kruskal Wallis Test( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Calcula la prueba de Kruskal-Wallis, una prueba no paramétrica (Wilcoxon) basada en rangos para Y continua por X categórica.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :sex ), Y( :height, :weight ), Kruskal Wallis Test( 1 ) );

```

### Max Comparison Levels

**Sintaxis:** obj = Response Screening(...Max Comparison Levels( number=100 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica el número de niveles que se admiten en las comparaciones. "100" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Wafer Number ),	Y( Column Group( "Responses" ) ),	Max Comparison Levels( 24 ));

```

### Max Logworth

**Sintaxis:** obj = Response Screening(...Max Logworth( number )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Controla la escala de los gráficos que implican valores de Log utilidad. Los valores de Log utilidad que superan el valor especificado se representan como el valor especificado para evitar escalas extremas en los gráficos de Log utilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Max Logworth( 1000 ));

```

### Missing is Category

**Sintaxis:** obj = Response Screening(...Missing is Category( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Trata los valores faltantes de una variable categórica como una categoría independiente.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );Row() = 1;:age = .;Row() = 8;:age = .;dt << Response Screening( X( :age ), Y( :sex ), Missing is Category( 1 ) );

```

### Negative Binomial Y

**Sintaxis:** obj = Response Screening(...Negative Binomial Y( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ajusta cada respuesta Y como un conteo que tiene una distribución binomial negativa.

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );dt << Response Screening(	X( :clean ),	Grouping( :failure ),	Y( :N ),	Negative Binomial Y( 1 ));

```

### No Report

**Sintaxis:** obj = Response Screening(...No Report( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Suprime la ventana del informe. Utilice esta opción para ejecutar los comandos Guardar y obtener resultados sin que aparezca la ventana del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save PValues,	No Report( 1 ));

```

### PValues Table on Launch

**Sintaxis:** obj = Response Screening(...PValues Table on Launch( state=0|1 )...)

**Descripción:** Crea una tabla de datos para los valores p y los estadísticos de ajuste de los modelos individuales. "0" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 88 ) ),	Robust,	PValues Table on Launch( 1 ));

```

### Paired X and Y

**Sintaxis:** obj = Response Screening(...Paired X and Y( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza pruebas solo para las columnas Y emparejadas con las columnas X según su orden en la ventana de inicio. Por ejemplo, Y1 está emparejado con X1 e Y2 está emparejado con X2.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :age, :sex ), Y( :height, :weight ), Paired X and Y( 1 ) );

```

### Poisson Y

**Sintaxis:** obj = Response Screening(...Poisson Y( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ajusta cada respuesta Y como un conteo que tiene una distribución de Poisson.

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Poisson Y( 1 ) );

```

### Practical Difference Portion

**Sintaxis:** obj &lt;&lt; Practical Difference Portion( number=0.10 )

**Descripción:** Especifica la fracción del rango de especificación que representa una diferencia que usted considere prácticamente significativa. "0.10" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 48 ) ),	Practical Difference Portion( .2 ),	Save Compare Means);

```

### Practical Differences and Equivalences

**Sintaxis:** obj &lt;&lt; Practical Differences and Equivalences( Practical Portion(fraction) | Specific Difference(number) )

**Descripción:** Si se especifica una diferencia a detectar, comprueba si la diferencia real es significativamente mayor o significativamente menor que la diferencia a detectar en valor absoluto.

### Quartiles per Group

**Sintaxis:** obj = Response Screening(...Quartiles per Group( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Calcula los cuartiles y el rango de cada grupo para Y continuo por X categórico.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :sex ), Y( :height, :weight ), Quartiles per Group( 1 ) );

```

### Ratio Adjustment

**Sintaxis:** obj = Response Screening(...Ratio Adjustment( "Sin ajuste"|"Agregar 0,5 si hay algún cero"|"Agregar 0,5 siempre" )...)

**Descripción:** Ofrece opciones para agregar 0,5 a los conteos de celdas al calcular las razones de riesgo, las razones de posibilidades y las diferencias de riesgo. Este ajuste evita los problemas que surgen al dividir entre cero.

**JMP Versión agregada:** 17

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ),	Ratio Adjustment( "Add 0.5 Always" ),	Name( "2 by M Table" )(1));

```

### Robust

**Sintaxis:** obj = Response Screening(...Robust( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ajusta modelos de regresión y ANOVA utilizando el método de estimación M de Huber, que es resistente a los valores atípicos.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust( 1 ) );

```

### Save 2 by M

**Sintaxis:** obj &lt;&lt; Name( "Save 2 by M table" )

**Descripción:** Guarda la información del informe Resultados 2 por M, así como otros estadísticos de la prueba, en una nueva tabla de datos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ));obj << Name( "2 by M Table" )(1);obj << Name( "Save 2 by M Table" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ));obj << "2 by M Table"n( 1 );obj << "Save 2 by M Table"n;

```

### Save Compare Means

**Sintaxis:** obj &lt;&lt; Save Compare Means

**Descripción:** Crea una tabla de datos que contiene los resultados de probar todas las comparaciones por pares de todos los niveles de la variable categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Compare Means);

```

### Save Means

**Sintaxis:** obj &lt;&lt; Save Means

**Descripción:** Crea una tabla de datos que contiene los conteos, medias y desviaciones estándar para cada nivel de la variable categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means );

```

### Save Means Differences

**Sintaxis:** obj &lt;&lt; Save Means Differences

**Descripción:** Crea una tabla de datos que contiene los resultados de probar todas las comparaciones por pares de todos los niveles de la variable categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Means Differences);

```

### Save Outlier Indicator

**Sintaxis:** obj &lt;&lt; Save Outlier Indicator

**Descripción:** Guarda un grupo de columnas indicadoras en la tabla de datos original para identificar los valores atípicos.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Outlier Indicator);

```

### Save PValues

**Sintaxis:** obj &lt;&lt; Save PValues

**Descripción:** Crea una tabla de datos que contiene la información en la Tabla de resultados.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues );

```

### Save Std Residuals

**Sintaxis:** obj &lt;&lt; Save Std Residuals

**Descripción:** Para cada ajuste, agrega una columna a la tabla de datos original que contiene los residuos divididos por su desviación estándar estimada.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Std Residuals);

```

### Select Columns

**Sintaxis:** obj &lt;&lt; Select Columns( condition )

**Descripción:** Selecciona columnas en la tabla de datos original que corresponden a las filas seleccionadas en la Tabla de resultados.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );obj << Select Columns;

```

### Select Where

**Sintaxis:** obj &lt;&lt; Select Where

**Descripción:** Selecciona elementos en la tabla de informes que correspondan a una condición concreta.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );

```

### Show Crosstab Report

**Sintaxis:** obj &lt;&lt; Show Crosstab Report( state=0|1 )

**Descripción:** Experimental Hidden Feature: Show the details for each X and Y combination in a crosstab cell

**JMP Versión agregada:** 19

### Show Means Differences

**Sintaxis:** obj &lt;&lt; Show Means Differences

**Descripción:** Muestra el gráfico de Log Utilidad por diferencia y el informe Diferencias de medias en la ventana del informe Cribado de respuestas. Esta opción asume que las variables Y están en una escala común.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( Column Group( "Markers" ) ),	X( :Sex, :Disease Status ),	Common Y Scale( 1 ),	Show Means Differences( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

### Show Plots

**Sintaxis:** obj &lt;&lt; Show Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos en la ventana de informes. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Show Result Tables( 0 );

```

### Show Report Tables

**Sintaxis:** obj &lt;&lt; Show Report Tables( state=0|1 )

**Descripción:** Muestra u oculta las tablas de resultados en la ventana de informes. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Show Result Tables( 0 );

```

### Show Slopes

**Sintaxis:** obj &lt;&lt; Show Slopes

**Descripción:** Muestra el gráfico de Log Utilidad por pendiente en la ventana del informe Cribado de respuestas. Esta opción asume que las variables Y están en una escala común y que las variables X están en una escala común.

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( Column Group( "Markers" ) ),	Show Slopes( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

### Specific Difference to Detect

**Sintaxis:** obj &lt;&lt; Specific Difference to Detect( number )

**Descripción:** Especifica una diferencia que detectar en lugar de una porción de un rango de especificación o sigma. Esta opción asume que todas las variables Y están en la misma escala.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 48 ) ),	Practical Difference Portion( .2 ),	Save Compare Means);

```

### Subgroup Twoway

**Sintaxis:** obj = Response Screening(...Subgroup Twoway( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Ajusta todas las combinaciones de subgrupos bidireccionales. Esta opción solo está disponible cuando se define al menos una variable de subgrupo.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening(	X( :height ),	Y( :weight ),	Subgroup( :age, :sex ),	Subgroup Twoway( 1 ));

```

### Tabbed Report Layout

**Sintaxis:** obj &lt;&lt; Tabbed Report Layout( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

### Unthreaded

**Sintaxis:** obj = Response Screening(...Unthreaded( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Suprime los múltiples subprocesos.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),	X( :Process ),	Unthreaded( 1 ));

```

### Volcano Plots Use FDR Axis

**Sintaxis:** obj = Response Screening(...Volcano Plots Use FDR Axis( state=0 )...)

**Descripción:** Utiliza la Log Utilidad ajustada de FDR en lugar de la Log Utilidad sin ajustar en el eje vertical para los gráficos de volcán. "0" de forma predeterminada.

**JMP Versión agregada:** 18

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	Common X Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Data Table Window;

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

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

