# Model Screening



## Columnas

### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Sintaxis:** obj &lt;&lt; Factor( column(s) )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Freq( :_freqcol ));

```

### Response

**Sintaxis:** obj &lt;&lt; Response( column(s) )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Validation

**Sintaxis:** obj &lt;&lt; Validation( column )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Weight( :_weightcol ));

```

### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

## Constructores asociados

### Model Screening

**Sintaxis:** Model Screening( Y( column ), X( columns ) )

**Descripción:** Ajusta muchos modelos predictivos distintos de modo que pueda seleccionar el mejor.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

## Mensajes del elemento

### Add Quadratics

**Sintaxis:** obj = Model Screening(...Add Quadratics( state=0|1 )...)

**Descripción:** Agrega efectos para los cuadrados de variables continuas a los ajustes de modelización lineal.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :LTG, :BMI, :BP, :Glucose, :HDL ),	Add Quadratics( 1 ));

```

### Add Two Way Interactions

**Sintaxis:** obj = Model Screening(...Add Two Way Interactions( state=0|1 )...)

**Descripción:** Agrega efectos de iteración de dos vías a los ajustes de modelización lineal.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :LTG, :BMI, :BP, :Glucose, :HDL ),	Add Two Way Interactions( 1 ));

```

### Additional Methods

**Sintaxis:** obj = Model Screening(...Additional Methods( state=0|1 )...)

**Descripción:** Llama a varios métodos adicionales en la plataforma Regresión generalizada además de Lazo: Selección ascendente, Selección ascendente podada, Red elástica y Ridge.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Additional Methods( 1 ));

```

### Boosted Tree

**Sintaxis:** obj = Model Screening(...Boosted Tree( state=0|1 )...)

**Descripción:** Crea un árbol de decisión que es una secuencia de árboles más pequeños para predecir una respuesta. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Bootstrap Forest

**Sintaxis:** obj = Model Screening(...Bootstrap Forest( state=0|1 )...)

**Descripción:** Crea una colección de árboles de decisión mediante el muestreo aleatorio y calcula la media de los resultados para predecir una respuesta. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Cardinality of Predictors

**Sintaxis:** obj &lt;&lt; Cardinality of Predictors( state=0|1 )

**Descripción:** Muestra u oculta un informe del número de niveles y de cuántos parámetros se utilizan en el ajuste de modelo lineal para cada predictor categórico.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Neural( 0 ),	Bootstrap Forest( 0 ),	Generalized Regression( 0 ),	Support Vector Machines( 0 ),	Cardinality of Predictors( 1 ));

```

### Decision Threshold

**Sintaxis:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Descripción:** Muestra u oculta la distribución de probabilidades ajustadas y tablas observadas frente a predichas para cada modelo. Puede cambiar el umbral de probabilidad para explorar cómo afectan los distintos umbrales a los resultados de clasificación.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Decision Threshold( 1 ));

```

### Decision Tree

**Sintaxis:** obj = Model Screening(...Decision Tree( state=0|1 )...)

**Descripción:** Crea un árbol de decisión para predecir una respuesta. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 1 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Discriminant

**Sintaxis:** obj = Model Screening(...Discriminant( state=0|1 )...)

**Descripción:** Clasifica la pertenencia a grupos categóricos en función de las variables continuas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Iris.jmp" );Make Validation Column( Validation Set( .3 ), Training Set( .7 ), Go );obj = Model Screening(	Y( :Species ),	Validation( :Validation ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Discriminant( 1 ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));

```

### Elapsed Time

**Sintaxis:** obj &lt;&lt; Elapsed Time( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene el tiempo total que ha transcurrido ajustando cada método.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Elapsed Time( 1 ));

```

### Fit Least Squares

**Sintaxis:** obj = Model Screening(...Fit Least Squares( state=0|1 )...)

**Descripción:** Ajusta una regresión lineal para una respuesta continua. Algunas de las técnicas son regresión, análisis de varianza, análisis de covarianza, modelos mixtos y análisis de experimentos diseñados. La opción Énfasis le permite especificar el diseño del informe. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 1 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Fit Stepwise

**Sintaxis:** obj = Model Screening(...Fit Stepwise( state=0|1 )...)

**Descripción:** Ajusta modelos de regresión por pasos, lo que facilita la selección de variables para los mínimos cuadrados estándar y los modelos logísticos ordinales, así como los modelos logísticos nominales con una respuesta binaria. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 1 ),	Generalized Regression( 0 ));

```

### Generalized Regression

**Sintaxis:** obj = Model Screening(...Generalized Regression( state=0|1 )...)

**Descripción:** Ajusta modelos lineales generalizados usando técnicas de regresión penalizada, que ayudan a automatizar la selección de variables de forma que se evite el sobreajuste. Algunas de las técnicas de regresión penalizada son el lasso, el lasso adaptativo, la red elástica, la red elástica adaptativa y la regresión ridge. Las distribuciones de respuesta pueden alojar datos continuos, categóricos, de conteo y de respuesta tiempo hasta suceso. Esta es la personalidad recomendada para la mayoría de configuraciones de regresión. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ));

```

### Informative Missing

**Sintaxis:** obj = Model Screening(...Informative Missing( state=0|1 )...)

**Descripción:** Habilita la opción valor faltante informativo para todas las plataformas.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Neural( 0 ),	Informative Missing( 1 ));

```

### K Fold Crossvalidation

**Sintaxis:** obj = Model Screening(...K Fold Crossvalidation( state=0|1 )...)

**Descripción:** Divide los datos de forma aleatoria en K partes o veces. Se ajusta un modelo a los datos K veces, cada vez con un fold distinto presentado como conjunto de validación cruzada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### K Nearest Neighbors

**Sintaxis:** obj = Model Screening(...K Nearest Neighbors( state=0|1 )...)

**Descripción:** Predice una respuesta basada en las respuestas de los k vecinos más cercanos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### K for K Fold

**Sintaxis:** obj = Model Screening(...K for K Fold( number=5 )...)

**Descripción:** Especifica el número de veces para la Validación cruzada de K veces. El valor predeterminado es 5 y K debe ser mayor que 1. "5" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	K for K Fold( 6 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### K for Nested

**Sintaxis:** obj = Model Screening(...K for Nested( number=5 )...)

**Descripción:** Especifica el número de veces de la validación cruzada anidada. El valor predeterminado es 5 y K debe ser mayor que 1. "5" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	K for Nested( 3 ),	L for Nested( 4 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### L for Nested

**Sintaxis:** obj = Model Screening(...L for Nested( number=4 )...)

**Descripción:** Especifica el número de veces interiores de la validación cruzada anidada. El valor predeterminado es 4 y L debe ser mayor que 1. "4" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	K for Nested( 5 ),	L for Nested( 4 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Log Methods

**Sintaxis:** obj = Model Screening(...Log Methods( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

### Logistic Regression

**Sintaxis:** obj = Model Screening(...Logistic Regression( state=0|1 )...)

**Descripción:** Ajusta un modelo de regresión logística de categorías de respuesta nominales para los predictores continuos y categóricos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 0 ));

```

### Model NParm Limit

**Sintaxis:** obj &lt;&lt; Model NParm Limit( number=450 )

**Descripción:** Especifica el número de parámetros por encima del cual no se ejecutan las plataformas de modelización. "450" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Add Two Way Interactions( 1 ),	Add Quadratics( 1 ),	Model NParm Limit( 40 ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Fit Least Squares( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));

```

### Naive Bayes

**Sintaxis:** obj = Model Screening(...Naive Bayes( state=0|1 )...)

**Descripción:** Predice la pertenencia a un grupo para una variable categórica.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ), );

```

### Nested Crossvalidation

**Sintaxis:** obj = Model Screening(...Nested Crossvalidation( state=0|1 )...)

**Descripción:** Divide los datos de forma aleatoria en K partes iguales y, a continuación, vuelve a dividirlos todos menos una de esas partes en L partes iguales.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Neural

**Sintaxis:** obj = Model Screening(...Neural( state=0|1 )...)

**Descripción:** Predice una o más variables de respuesta mediante una función flexible de las variables de entrada. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Partial Least Squares

**Sintaxis:** obj = Model Screening(...Partial Least Squares( state=0|1 )...)

**Descripción:** Ajusta un modelo a una o más variables de respuesta usando factores latentes. Esto permite que se ajusten los modelos cuando las variables explicativas están altamente correlacionadas o cuando hay más variables explicativas que observaciones.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	Partial Least Squares( 1 ));

```

### Plot Actual by Predicted

**Sintaxis:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Descripción:** Superpone puntos Observados frente a predichos de varios ajustes del modelo.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 1 ),	Generalized Regression( 1 ),	Plot Actual by Predicted( 1 ));

```

### Precision Recall Curve

**Sintaxis:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta las curvas de precisión-recuerdo superpuestas para todos los ajustes del modelo. Hay gráficos distintos para los conjuntos de entrenamiento, validación y prueba.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),);obj << Precision Recall Curve( 1 );

```

### Predictor Properties

**Sintaxis:** obj &lt;&lt; Predictor Properties( state=0|1 )

**Descripción:** Available if you hold down the shift button, for each platform called, shows information about supported interfaces.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ),	Predictor Properties( 1 ));

```

### Profiler

**Sintaxis:** obj &lt;&lt; Profiler( state=0|1 )

**Descripción:** Muestra u oculta los perfiladores de predicción para cada tipo de ajuste del modelo. Esta opción solo está disponible para las respuestas continuas.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ),	Profiler( 1 ));

```

### ROC Curve

**Sintaxis:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta las curvas Característica operativa del receptor (ROC) superpuestas para todos los ajustes del modelo. Hay gráficos distintos para los conjuntos de entrenamiento, validación y prueba.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	ROC Curve( 1 ));

```

### Remove Live Reports

**Sintaxis:** obj = Model Screening(...Remove Live Reports( state=0|1 )...)

**Descripción:** Quita los informes de la plataforma del modelo individual de la ventana del informe Cribado del modelo. Puede utilizar esta opción para liberar memoria y continuar trabajando.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	Remove Live Reports( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Repeated K Fold

**Sintaxis:** obj = Model Screening(...Repeated K Fold( number=0 )...)

**Descripción:** Especifica el número de veces que se repiten los procesos Validación cruzada de K veces o Validación cruzada anidada. "0" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Repeated K Fold( 2 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### SVM NRow Limit

**Sintaxis:** obj &lt;&lt; SVM NRow Limit( number=10000 )

**Descripción:** Especifica el número de filas por encima del cual no se ejecutan máquinas de vectores de soporte. "10000" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Decision Tree( 1 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 1 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	SVM NRow Limit( 6000 ));

```

### Save Folded Prediction Formula

**Sintaxis:** obj &lt;&lt; Save Folded Prediction Formula

**Descripción:** Guarda las columnas nuevas en la tabla de datos original. Las columnas nuevas contienen una fórmula de predicción sin fugas para la validación cruzada de K veces. Para cada fila, la fórmula evita usar ajustes del modelo que se hayan entrenado con esa fila.

### Save KFold Results Table

**Sintaxis:** obj &lt;&lt; Save KFold Results Table

**Descripción:** Guarda la información del informe Resumen de todas las veces en una nueva tabla de datos.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	K Fold Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ),	Save KFold Results Table);

```

### Save Prediction Formulas

**Sintaxis:** obj &lt;&lt; Save Prediction Formulas

**Descripción:** Guarda las fórmulas de predicción en la tabla de datos.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Fit Least Squares( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));obj << Select Fit( "Training", "Best" );obj << Save Prediction Formulas;

```

### Save Results Table

**Sintaxis:** obj &lt;&lt; Save Results Table

**Descripción:** Guarda la información del informe Validación en una nueva tabla de datos. Si hay un conjunto de prueba, la información del informe Prueba también se guarda en una nueva tabla de datos.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Save Results Table);

```

### Select Fit

**Sintaxis:** &lt;&lt;Select Fit( Training | Validation | Test | Summary | Clear All, Clear | Dominant | Best(&lt;number&gt;), | Largest(name,&lt;number&gt;) | Smallest(name,&lt;number&gt;) | Where(expression) )

**Descripción:** Selecciona ajustes en distintos informes en función de los criterios especificados. Esta opción solo está disponible en JSL.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Select Fit( Validation, Largest( "RSquare", 2 ) );

```

### Set Probability Threshold

**Sintaxis:** obj &lt;&lt; Set Probability Threshold( number=0.5 )

**Descripción:** Especifica el número de parámetros por encima del cual no se ejecutan las plataformas de modelización. "0.5" de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Decision Threshold( 1 ),	Set Probability Threshold( .2 ));

```

### Set Random Seed

**Sintaxis:** obj = Model Screening(...Set Random Seed( number )...)

**Descripción:** Especifica una semilla aleatoria para reproducir los resultados de inicios futuros de la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 123454321 ));

```

### Show Methods in Log

**Sintaxis:** obj = Model Screening(...Show Methods in Log( state=0|1 )...)

**Descripción:** Escribe un mensaje de progreso en el registro cada vez que se llama a una plataforma de ajuste.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Log Methods( 1 ));

```

### Show Profit

**Sintaxis:** obj &lt;&lt; Show Profit( state=0|1 )

**Descripción:** Muestra u oculta el beneficio esperado de cada modelo usando la matriz de beneficio para los niveles de respuesta.

**JMP Versión agregada:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );Column( "Y Binary" ) << Set Property(	"Profit Matrix", {[1 - 1, -0.3333333 1, . .], {"Low", "High", "Undecided"}});obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Show Profit( 1 ));

```

### Show Scripts

**Sintaxis:** obj &lt;&lt; Show Scripts( state=0|1 )

**Descripción:** For each platform called, shows options added to launch script.

**JMP Versión agregada:** 19

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Bootstrap Forest( 1, {Number Trees( 80 ), Number Terms( 5 )} ),	Neural( 0 ),	Support Vector Machines( 0 ),	Show Scripts( 1 ));

```

### Specify Profit Matrix

**Sintaxis:** obj &lt;&lt; Specify Profit Matrix

**Descripción:** Le permite especificar los beneficios o costes asociados a decisiones de clasificación correctas o incorrectas.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Model Screening(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Specify Profit Matrix( [0 -1, -0.6 0, . .], "Married", "Single", "Undecided" ),	Show Profit( 1 ));

```

### Support Vector Machines

**Sintaxis:** obj = Model Screening(...Support Vector Machines( state=0|1 )...)

**Descripción:** Predice una respuesta basada en los vectores de soporte en el espacio de las variables X. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 1 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Time Limit Each

**Sintaxis:** obj = Model Screening(...Time Limit Each( number )...)

**Descripción:** Especifica un límite de tiempo en segundos para cada ajuste. En el caso de las plataformas que admiten la detención temprana, se proporcionan las mejores estimaciones hasta ese punto.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Time Limit Each( 1 ));

```

### Use Two Way Splits for K Fold

**Sintaxis:** obj = Model Screening(...Use Two Way Splits for K Fold( state=0|1 )...)

**Descripción:** Utiliza solo divisiones de entrenamiento y validación en lugar de divisiones de entrenamiento, validación y prueba.

**JMP Versión agregada:** 19

<b>Elemento de inicio: Sí</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	Use Two Way Splits for K Fold( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### XGBoost

**Sintaxis:** obj = Model Screening(...XGBoost( state=0|1 )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Invoca XGBoost para el impulso de gradiente si tiene el complemento XGBoost. Esta opción solo aparece si está instalado el complemento.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	XGBoost( 1 ));

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Data Table Window;

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

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = Model Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

