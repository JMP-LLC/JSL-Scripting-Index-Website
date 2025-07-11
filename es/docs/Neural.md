# Neural



## Neural Fit

### Categorical Profiler

**Sintaxis:** obj << (fit[number] << Categorical Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de predicción con todas las respuestas categóricas combinadas en una única fila del perfilador.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Categorical Profiler( 1 ));

```

### Contour Profiler

**Sintaxis:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de contorno, que representa gráficamente los contornos de las respuestas de dos factores a la vez. Solo está disponible cuando el modelo contiene más de un factor continuo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

### Decision Threshold

**Sintaxis:** obj << fit([number] << Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**Descripción:** Muestra u oculta la distribución de probabilidades ajustadas y tablas observadas frente a predichas para cada modelo. Puede cambiar el umbral de probabilidad para explorar cómo afectan los distintos umbrales a los resultados de clasificación.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 0 );
obj << (Fit[1] << Decision Threshold( 1 ));
Wait( 1 );
obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

### Diagram

**Sintaxis:** obj << (fit[number] << Diagram( state=0|1 ))

**Descripción:** Muestra u oculta un diagrama que representa la estructura de capas ocultas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));

```

### Get Average Absolute Error Test

**Sintaxis:** obj << (fit[number] << Get Average Absolute Error Test)

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Test);
Show( ae );

```

### Get Average Absolute Error Training

**Sintaxis:** obj << (fit[number] << Get Average Absolute Error Training)

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Training);
Show( ae );

```

### Get Average Absolute Error Validation

**Sintaxis:** obj << (fit[number] << Get Average Absolute Error Validation)

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Validation);
Show( ae );

```

### Get Average Log Error Test

**Sintaxis:** obj << (fit[number] << Get Average Log Error Test)

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Test);
Show( avg );

```

### Get Average Log Error Training

**Sintaxis:** obj << (fit[number] << Get Average Log Error Training)

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Training);
Show( avg );

```

### Get Average Log Error Validation

**Sintaxis:** obj << (fit[number] << Get Average Log Error Validation)

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo, para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Validation);
Show( avg );

```

### Get Confusion Matrix Test

**Sintaxis:** obj << (fit[number] << Get Confusion Matrix Test)

**Descripción:** Devuelve la matriz de confusión para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Test);
Show( cm );

```

### Get Confusion Matrix Training

**Sintaxis:** obj << (fit[number] << Get Confusion Matrix Training)

**Descripción:** Devuelve la matriz de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Training);
Show( cm );

```

### Get Confusion Matrix Validation

**Sintaxis:** obj << (fit[number] << Get Confusion Matrix Validation)

**Descripción:** Devuelve la matriz de confusión para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Validation);
Show( cm );

```

### Get Confusion Rates Test

**Sintaxis:** obj << (fit[number] << Get Confusion Rates Test)

**Descripción:** Devuelve las tasas de confusión para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Test);
Show( cr );

```

### Get Confusion Rates Training

**Sintaxis:** obj << (fit[number] << Get Confusion Rates Training)

**Descripción:** Devuelve las tasas de confusión para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Training);
Show( cr );

```

### Get Confusion Rates Validation

**Sintaxis:** obj << (fit[number] << Get Confusion Rates Validation)

**Descripción:** Devuelve las tasas de confusión para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Validation);
Show( cr );

```

### Get Gen RSquare Test

**Sintaxis:** obj << (fit[number] << Get Gen RSquare Test)

**Descripción:** Devuelve el estadístico R cuadrado generalizado para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Test);
Show( rt );

```

### Get Gen RSquare Training

**Sintaxis:** obj << (fit[number] << Get Gen RSquare Training)

**Descripción:** Devuelve el estadístico R cuadrado generalizado para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Training);
Show( rt );

```

### Get Gen RSquare Validation

**Sintaxis:** obj << (fit[number] << Get Gen RSquare Validation)

**Descripción:** Devuelve el estadístico R cuadrado generalizado para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Validation);
Show( rt );

```

### Get MM SAS DATA Step

**Sintaxis:** text = obj << (fit[number] << Get MM SAS Data Step)

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get MM SAS Data Step);

```

### Get Measures

**Sintaxis:** obj << (fit[number] << Get Measures)

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));
obj << (Fit[1] << Get Measures);

```

### Get Misclassification Rate Test

**Sintaxis:** obj << (fit[number] << Get Misclassification Rate Test)

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mr = obj << (Fit[1] << Get Misclassification Rate Test);
Show( mr );

```

### Get Misclassification Rate Training

**Sintaxis:** obj << (fit[number] << Get Misclassification Rate Training)

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Training);
Show( mrt );

```

### Get Misclassification Rate Validation

**Sintaxis:** obj << (fit[number] << Get Misclassification Rate Validation)

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Validation);
Show( mrt );

```

### Get NBoost

**Sintaxis:** obj << (fit[number] << Get NBoost)

**Descripción:** Devuelve el número de modelos utilizados para el impulso.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 ),
	Go
);
n = obj << (fit[1] << Get NBoost);
Show( n );

```

### Get Precision Recall Area Test

**Sintaxis:** obj << (fit[number] << Get Precision Recall Area Test)

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de pruebas. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Test);
Show( ra );

```

### Get Precision Recall Area Training

**Sintaxis:** obj << (fit[number] << Get Precision Recall Area Training)

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de entrenamiento. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Training);
Show( ra );

```

### Get Precision Recall Area Validation

**Sintaxis:** obj << (fit[number] << Get Precision Recall Area Validation)

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de validación. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Validation);
Show( ra );

```

### Get Prediction Formula

**Sintaxis:** obj << (fit[number] << Get Prediction Formula)

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Get Prediction Formula);

```

### Get RMS Error Test

**Sintaxis:** obj << (fit[number] << Get RMS Error Test)

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Test);
Show( re );

```

### Get RMS Error Training

**Sintaxis:** obj << (fit[number] << Get RMS Error Training)

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados test de los errores de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Training);
Show( re );

```

### Get RMS Error Validation

**Sintaxis:** obj << (fit[number] << Get RMS Error Validation)

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Validation);
Show( re );

```

### Get ROC Area Test

**Sintaxis:** obj << (fit[number] << Get ROC Area Test)

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente a los datos de la prueba. Es necesario mostrar la curva ROC antes de calcular el área. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Test);
Show( ra );

```

### Get ROC Area Training

**Sintaxis:** obj << (fit[number] << Get ROC Area Training)

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de entrenamiento. Es necesario mostrar la curva ROC antes de calcular el área.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Training);
Show( ra );

```

### Get ROC Area Validation

**Sintaxis:** obj << (fit[number] << Get ROC Area Validation)

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de validación. Es necesario mostrar la curva ROC antes de calcular el área. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Validation);
Show( ra );

```

### Get RSquare Test

**Sintaxis:** obj << (fit[number] << Get RSquare Test)

**Descripción:** Devuelve el estadístico R cuadrado de entropía para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Test);
Show( rt );

```

### Get RSquare Training

**Sintaxis:** obj << (fit[number] << Get RSquare Training)

**Descripción:** Devuelve el estadístico R cuadrado de entropía para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Training);
Show( rt );

```

### Get RSquare Validation

**Sintaxis:** obj << (fit[number] << Get RSquare Validation)

**Descripción:** Devuelve el estadístico R cuadrado de entropía para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Validation);
Show( rt );

```

### Get SAS DATA Step

**Sintaxis:** text = obj << (fit[number] << Get SAS Data Step)

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get SAS Data Step);

```

### Get Seconds

**Sintaxis:** obj << (fit[number] << Get Seconds)

**Descripción:** Devuelve el número de segundos utilizados para realizar el análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
s = obj << (Fit[1] << Get Seconds);
Show( s );

```

### Lift Curve

**Sintaxis:** obj << (fit[number] << Lift Curve( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos, de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Lift Curve( 1 ));

```

### Make SAS DATA Step

**Sintaxis:** obj << (fit[number] << Make SAS Data Step)

**Descripción:** Crea un código SAS que puede utilizar para asignar una puntuación un nuevo conjunto de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Make SAS Data Step);

```

### Plot Actual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Actual by Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de los valores reales en el eje vertical y los valores predichos en el eje horizontal. Esta opción solo está disponible para las respuestas continuas. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

### Plot Residual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Residual by Predicted( state= 0|1 ))

**Descripción:** Muestra u oculta un gráfico de los residuos en el eje vertical y los valores predichos en el eje horizontal. Esta opción solo está disponible para las respuestas continuas. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos de entrenamiento, validación y pruebas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

### Precision Recall Curve

**Sintaxis:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));

```

### Profiler

**Sintaxis:** obj << (fit[number] << Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

### Publish Prediction Formula

**Sintaxis:** obj << (fit[number] << Publish Prediction Formula)

**Descripción:** Crea fórmulas de predicción y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

### ROC Curve

**Sintaxis:** obj << (fit[number] << ROC Curve( state=0|1 ))

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad). Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));

```

### Remove Fit

**Sintaxis:** obj << (fit[number] << Remove Fit)

**Descripción:** Quita todo el informe relativo al modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Save Fast Formulas

**Sintaxis:** obj << (fit[number] << Save Fast Formulas)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna contiene una fórmula para la respuesta predicha que incluye fórmulas incrustadas para los nodos de la capa oculta. Esta opción genera fórmulas que se evalúan rápido, pero que no se pueden utilizar en la versión interactiva del perfilador.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Fast Formulas);

```

### Save Formulas

**Sintaxis:** obj << (fit[number] << Save Formulas)

**Descripción:** Guarda nuevas columnas de fórmulas en la tabla de datos. Hay columnas de fórmulas independientes para la respuesta predicha y los nodos de la capa oculta.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Formulas);

```

### Save Profile Formulas

**Sintaxis:** obj << (fit[number] << Save Profile Formulas)

**Descripción:** Guarda una nueva columna de fórmulas en la tabla de datos. La columna contiene una fórmula para la respuesta predicha que incluye fórmulas incrustadas para los nodos de la capa oculta. Esta opción genera fórmulas que se pueden utilizar en la versión interactiva del perfilador.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Profile Formulas);

```

### Save Transformed Covariates

**Sintaxis:** obj << (fit[number] << Save Transformed Covariates)

**Descripción:** Guarda nuevas columnas de fórmulas en la tabla de datos. Las columnas nuevas contienen las fórmulas que se utilizan para transformar las covariables. Esta opción solo está disponible en JMP Pro y cuando se especifica la opción Transformar las covariables al inicio.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Transform Covariates( 1 ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Transformed Covariates);

```

### Save Validation

**Sintaxis:** obj << (fit[number] << Save Validation)

**Descripción:** Guarda una nueva columna en la tabla de datos. La columna identifica qué filas se han utilizado en los conjuntos de entrenamiento y validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Validation);

```

### Show Estimates

**Sintaxis:** obj << (fit[number] << Show Estimates( state=0|1 ))

**Descripción:** Muestra u oculta un informe de las estimaciones de los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Show Estimates( 1 ));

```

### Surface Profiler

**Sintaxis:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de superficie tridimensional. Esta opción solo está disponible para modelos con dos o más variables X.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```

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

**Sintaxis:** obj = Neural(...<By( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);

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

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Data Table Window;

```

### Factor

**Sintaxis:** obj = Neural(...Factor( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las variables predictoras.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Fit

**Sintaxis:** obj << Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**Descripción:** Especifica y ajusta la estructura de capas ocultas de la red neuronal a los datos. Las capas múltiples y las funciones de activación distintas de TanH solo están disponibles en JMP Pro. Si desea especificar capas múltiples y funciones de activación, separe los argumentos con comas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Fit( NTanH( 4 ) );

```

### Freq

**Sintaxis:** obj = Neural(...<Freq( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol ),
	Go
);

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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
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
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
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
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Sintaxis:** obj << Go

**Descripción:** Comienza a resolver el modelo de red neuronal.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
Wait( 1 );
obj << Go;

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

### Informative Missing

**Sintaxis:** obj = Neural(...Informative Missing( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Habilita la codificación e imputación de valores faltantes. Cuando no se selecciona esta opción, se ignoran las filas con valores faltantes.



En el caso de las variables continuas, los valores faltantes se sustituyen por la media de la variable. Además, se crea una variable indicadora de valores faltantes y se incluye en el modelo.



En el caso de las variables categóricas, no se imputan los valores faltantes, pero se tratan como si fueran otro nivel de la variable en el modelo. Esta opción solo está disponible en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**Sintaxis:** obj << Learning Rate( fraction )

**Descripción:** Especifica el factor de escala para el impulso. Una tasa de aprendizaje cercana a 1 da como resultado una convergencia más rápida en un modelo final, pero también tiene una mayor tendencia a sobreajustar los datos. Esta opción solo está disponible en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 )
);
obj << Learning Rate( 0.2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

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

### Multithreading

**Sintaxis:** obj = Neural(...Multithreading( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Divide los cálculos entre los subprocesos disponibles en el equipo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 0 )
);
obj << Go;

```

### N Boost

**Sintaxis:** obj << N Boost( number )

**Descripción:** Especifica el número máximo de modelos que se utilizan para el impulso. Esta opción solo está disponible en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << N Boost( 2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Neural

**Sintaxis:** Neural( Y( column ), X( columns ), <Validation( column )> )

**Descripción:** Predice una o más variables de respuesta mediante una función flexible de las variables de entrada. El marco de trabajo flexible incorpora poner capas y funciones en forma de S.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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

### Penalty Method

**Sintaxis:** obj << Penalty Method( "Al cuadrado"|"Absoluto"|"Decrecimiento ponderado"|"Sin penalización" )

**Descripción:** Especifica un método de penalización para imponer una penalización en la verosimilitud durante el proceso de ajuste. Un parámetro de penalización mitiga la tendencia de las redes neuronales a sobreajustar los datos. La opción Al cuadrado funciona bien si cree que la mayoría de las variables X contribuyen a la capacidad predictiva del modelo. Las opciones Absoluto y Decrecimiento ponderado funcionan bien si hay un gran número de variables X y cree que algunas contribuyen más que el resto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Penalty Method( "Absolute" );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
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

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Report View( "Summary" );

```

### Response

**Sintaxis:** obj = Neural(...Response( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la variable o las variables de respuesta que desea analizar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Robust Fit

**Sintaxis:** obj << Robust Fit( state=0|1 )

**Descripción:** Entrena el modelo utilizando desviaciones mínimas absolutas en lugar de mínimos cuadrados. Esta opción es útil para minimizar el impacto de los valores atípicos de la respuesta. Esta opción solo está disponible para respuestas continuas en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Robust Fit( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Script to Script Window;

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
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
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
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
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
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Random Seed

**Sintaxis:** obj = Neural(...Set Random Seed( number )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una semilla aleatoria que se utiliza para reproducir los valores iniciales y la asignación de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 )
);
Wait( 1 );
obj << Go;

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

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Transform Covariates

**Sintaxis:** obj << Transform Covariates( state=0|1 )

**Descripción:** Transforma todas las variables continuas hasta la casi normalidad mediante la distribución de Johnson Su o de Johnson Sb. Transformar las variables continuas contribuye a mitigar los efectos negativos de los valores atípicos o de las distribuciones muy asimétricas. Esta opción solo está disponible en JMP Pro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Transform Covariates( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation

**Sintaxis:** obj = Neural(...<Validation( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna numérica que define los conjuntos de validación. Esta columna debe contener tres valores distintos como máximo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);
obj << Go;

```

### Validation Method

**Sintaxis:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", <fraction = 0.3333>|"KFold", <number = 5> )...);

**Descripción:** Especifica el método utilizado para la validación del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Method( "Holdback", 0.4 ),
	Go
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

**Sintaxis:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Sintaxis:** obj = Neural(...X( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las variables predictoras.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

### Y

**Sintaxis:** obj = Neural(...Y( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la variable o las variables de respuesta que desea analizar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);

```

