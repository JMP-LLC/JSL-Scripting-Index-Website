# Support Vector Machines



## SVM Fit

### Confusion Matrix

**Sintaxis:** obj << (fit[number] << Confusion Matrix( state=0|1 ))

**Descripción:** Muestra u oculta una matriz de tabulación cruzada de las respuestas observadas y predichas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Confusion Matrix( 0 ));

```

### Contour Profiler

**Sintaxis:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de contorno.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

### Get Measures

**Sintaxis:** obj << (fit[number] << Get Measures)

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));
obj << (Fit[1] << Get Measures);

```

### Get Prediction Formula

**Sintaxis:** obj << (fit[number] << Get Prediction Formula)

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Get Prediction Formula);

```

### Lift Curve

**Sintaxis:** obj << (fit[number] << Lift Curve( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos, de entrenamiento, validación y prueba.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Lift Curve( 1 ));

```

### Plot Actual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Actual By Predicted( state=0|1 ))

**Descripción:** Para el ajuste especificado, muestra u oculta un gráfico para el conjunto de entrenamiento con valores observados en el eje Y y valores predichos en el eje X. Si utiliza conjuntos de validación o de prueba, también se muestran gráficos para ellos. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Actual By Predicted( 0 ));

```

### Plot Residual by Predicted

**Sintaxis:** obj << (fit[number] << Plot Residual By Predicted( state=0|1 ))

**Descripción:** Para el ajuste especificado, muestra u oculta un gráfico para el conjunto de entrenamiento con valores del residuo en el eje Y y valores predichos en el eje X. Si utiliza conjuntos de validación o de prueba, también se muestran gráficos para ellos.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Plot Residual By Predicted( 1 ));

```

### Precision Recall Curve

**Sintaxis:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << Precision Recall Curve( 1 ));

```

### Profiler

**Sintaxis:** obj << (fit[number] << Profiler( state=0|1 ))

**Descripción:** Muestra un gráfico Perfilador de predicción para el ajuste especificado.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Profiler( 1 ));

```

### Publish Prediction Formula

**Sintaxis:** obj << (fit[number] << Publish Prediction Formula)

**Descripción:** Crea fórmulas de predicción y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Prediction Formula);

```

### Publish Probability Formula

**Sintaxis:** obj << (fit[number] << Publish Probability Formula)

**Descripción:** Guarda la probabilidad de cada nivel de respuesta como una columna independiente en la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Publish Probability Formula);

```

### ROC Curve

**Sintaxis:** obj << (fit[number] << ROC Curve( state=0|1 ))

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad). Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
Wait( 0 );
obj << (fit[1] << ROC Curve( 1 ));

```

### Remove Fit

**Sintaxis:** obj << (fit[number] << Remove Fit)

**Descripción:** Quita todo el informe relativo al modelo.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) ),
	Fit( Kernel Function( "Linear" ), Cost( 1 ), Validation Method( "None" ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Response Profile Plot

**Sintaxis:** obj << (fit[number] << Response Profile Plot( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico de perfil de respuestas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Response Profile Plot( 0 ));

```

### Save Predicteds

**Sintaxis:** obj << (fit[number] << Save Predicteds)

**Descripción:** Guarda los valores predichos en una nueva columna de la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Predicteds);

```

### Save Prediction Formula

**Sintaxis:** obj << (fit[number] << Save Prediction Formula)

**Descripción:** Crea nuevas columnas en la tabla de datos que contienen las fórmulas de predicción.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Prediction Formula);

```

### Save Probabilities

**Sintaxis:** obj << (fit[number] << Save Probabilities)

**Descripción:** Guarda la probabilidad de cada nivel de respuesta como una columna independiente en la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probabilities);

```

### Save Probability Formula

**Sintaxis:** obj << (fit[number] << Save Probability Formula)

**Descripción:** Guarda la probabilidad de cada nivel de respuesta como una columna independiente en la tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :BMI, :Total Cholesterol, :Glucose ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (fit[1] << Save Probability Formula);

```

### Save Validation

**Sintaxis:** obj << (fit[number] << Save Validation)

**Descripción:** Crea una nueva columna en la tabla de datos que identifica las filas que se utilizaron en los conjuntos de datos de entrenamiento, validación y prueba.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 ), 

	)
);
obj << (Fit[1] << Save Validation);

```

### Support Vector Coefficients

**Sintaxis:** obj << (fit[number] << Support Vector Coefficients( state=0|1 ))

**Descripción:** Muestra u oculta la tabla de coeficientes de vectores de soporte.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);
obj << (Fit[1] << Support Vector Coefficients( 1 ));

```

### Surface Profiler

**Sintaxis:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**Descripción:** Muestra u oculta el perfilador de superficie.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
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

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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

**Sintaxis:** obj = Support Vector Machines(...<By( column(s) )>...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Cost

**Sintaxis:** obj << Cost( number )

**Descripción:** Establece el parámetro de coste para el ajuste SVM.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Cost Max

**Sintaxis:** obj << Cost Max( number )

**Descripción:** Establece el coste máximo para un diseño de ajuste.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Cost Min

**Sintaxis:** obj << Cost Min( number )

**Descripción:** Establece el coste mínimo para un diseño de ajuste.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Data Table Window;

```

### Factor

**Sintaxis:** obj = Support Vector Machines(...Factor( column(s) )...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Fit

**Sintaxis:** obj << Fit

**Descripción:** Especifica y ajusta la estructura kernel para la máquina de vectores de soporte a los datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.25 ), Cost( 1 ) )
);

```

### Freq

**Sintaxis:** obj = Support Vector Machines(...<Freq( column )>...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = Support Vector Machines(
	Y( :clean ),
	X(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	Freq( :SampleSize )
);

```

### Gamma

**Sintaxis:** obj << Gamma( number )

**Descripción:** Establece el parámetro gamma para el kernel de base radial.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "None" )
	)
);

```

### Gamma Max

**Sintaxis:** obj << Gamma Max( number )

**Descripción:** Establece el gamma máximo para un diseño de ajuste.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Gamma Min

**Sintaxis:** obj << Gamma Min( number )

**Descripción:** Establece el gamma mínimo para un diseño de ajuste.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

**Descripción:** Comienza resolviendo la máquina de vectores de soporte.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
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

### Number of Runs

**Sintaxis:** obj << Number of Runs( number )

**Descripción:** Establece el número de corridas para un diseño de ajuste.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Cost Min( .1 ),
	Cost Max( 4 ),
	Gamma Min( 0.01 ),
	Gamma Max( 0.4 ),
	Number of Runs( 15 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

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

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Response

**Sintaxis:** obj = Support Vector Machines(...Response( column )...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

**Sintaxis:** Set Random Seed( number )

**Descripción:** Establece la semilla aleatoria para el proceso de selección aleatoria empleado para la validación KFold y Retención. Resulta útil si quiere reproducir un análisis.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit(
		Set Random Seed( 1234 ),
		Kernel Function( "Radial Basis Function" ),
		Gamma( 0.25 ),
		Cost( 1 ),
		Validation Method( "Holdback", 0.3333 )
	)
);

```

### Support Vector Machines

**Sintaxis:** Support Vector Machines(Y( column ), X( columns ))

**Descripción:** Predice una respuesta basada en los vectores de soporte en el espacio de las variables X. Uno de los objetivos del algoritmo Máquinas de vectores de soporte es utilizar los datos de entrenamiento para aprender a clasificar nuevos datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
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

### Tuning Design

**Sintaxis:** obj << Tuning Design( state=0|1 )

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
Random Reset( 1234 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Tuning Design( 1 ),
	Fit( Kernel Function( "Radial Basis Function" ), Validation Method( "None" ) )
);

```

### Validation

**Sintaxis:** obj = Support Vector Machines(...<Validation( column )>...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = Support Vector Machines(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
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

**Sintaxis:** obj = Support Vector Machines(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintaxis:** obj = Support Vector Machines(...X( column(s) )...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Y

**Sintaxis:** obj = Support Vector Machines(...Y( column )...)

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

