# Boosted Tree



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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Boosted Tree

**Sintaxis:** Boosted Tree (Y( column ), X( columns ))

**Descripción:** Construye un modelo predictivo creando un árbol de decisión grande y aditivo que es una secuencia de árboles de decisión más pequeños. Cada uno de los árboles se ajusta en los residuos del árbol anterior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### By

**Sintaxis:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	By( _bycol ),
	Go
);

```

### Column Contributions

**Sintaxis:** obj << Column Contributions( state=0|1 )

**Descripción:** Muestra u oculta un informe con cada columna de entrada y su correspondiente contribución al ajuste.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Column Contributions( 1 );

```

### Column Sampling Rate

**Sintaxis:** obj << Column Sampling Rate( number )

**Descripción:** Especifica la proporción de columnas del predictor que muestrear para cada capa del árbol.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Column Sampling Rate( 0.95 ),
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

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Data Table Window;

```

### Decision Threshold

**Sintaxis:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Descripción:** Muestra u oculta la distribución de probabilidades ajustadas y tablas observadas frente a predichas para cada modelo. Puede cambiar el umbral de probabilidad para explorar cómo afectan los distintos umbrales a los resultados de clasificación.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Splits per Tree( 4 ),
	Number of Layers( 171 ),
	Learning Rate( 0.08 ),
	Go
);
obj << Decision Threshold( 1 );

```

### Early Stopping

**Sintaxis:** Early Stopping( state=0|1 )

**Descripción:** Detiene la iteración de forma temprana cuando las capas adicionales no mejoran el estadístico de validación. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Early Stopping( 1 ),
	Go
);

```

### Factor

**Sintaxis:** obj << Factor( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol",
	Numeric,
	Continuous,
	Formula( Random Integer( 1, 5 ) )
);
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Freq( _freqcol ),
	Go
);

```

### Get Average Absolute Error Test

**Sintaxis:** obj << Get Average Absolute Error Test

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

### Get Average Absolute Error Training

**Sintaxis:** obj << Get Average Absolute Error Training

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

### Get Average Absolute Error Validation

**Sintaxis:** obj << Get Average Absolute Error Validation

**Descripción:** Devuelve el estadístico Desviación absoluta media para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

### Get Average Log Error Test

**Sintaxis:** obj << Get Average Log Error Test

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

### Get Average Log Error Training

**Sintaxis:** obj << Get Average Log Error Training

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

### Get Average Log Error Validation

**Sintaxis:** obj << Get Average Log Error Validation

**Descripción:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo, para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

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

### Get Confusion Matrix Test

**Sintaxis:** obj << Get Confusion Matrix Test

**Descripción:** Devuelve la matriz de confusión para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

### Get Confusion Matrix Training

**Sintaxis:** obj << Get Confusion Matrix Training

**Descripción:** Devuelve la matriz de confusión para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

### Get Confusion Matrix Validation

**Sintaxis:** obj << Get Confusion Matrix Validation

**Descripción:** Devuelve la matriz de confusión para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

### Get Confusion Rates Test

**Sintaxis:** obj << Get Confusion Rates Test

**Descripción:** Devuelve las tasas de confusión para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

### Get Confusion Rates Training

**Sintaxis:** obj << Get Confusion Rates Training

**Descripción:** Devuelve las tasas de confusión para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

### Get Confusion Rates Validation

**Sintaxis:** obj << Get Confusion Rates Validation

**Descripción:** Devuelve las tasas de confusión para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Gen RSquare Test

**Sintaxis:** obj << Get Gen RSquare Test

**Descripción:** Devuelve el R cuadrado generalizado para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

### Get Gen RSquare Training

**Sintaxis:** obj << Get Gen RSquare Training

**Descripción:** Devuelve el R cuadrado generalizado para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

### Get Gen RSquare Validation

**Sintaxis:** obj << Get Gen RSquare Validation

**Descripción:** Devuelve el R cuadrado generalizado para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

### Get MM SAS DATA Step

**Sintaxis:** obj << Get MM SAS DATA Step

**Descripción:** Crea un código SAS que puede registrar en el Gestor de modelos SAS y lo devuelve a la ventana de registro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
code = obj << Get MM SAS Data Step;

```

### Get MM Tolerant SAS DATA Step

**Sintaxis:** obj << Get MM Tolerant SAS DATA Step

**Descripción:** Crea un código SAS para los datos que incluye los valores faltantes que puede registrar en el Gestor de modelos SAS y lo devuelve a la ventana de registro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
code = obj << Get MM Tolerant SAS Data Step;

```

### Get Measures

**Sintaxis:** obj << Get Measures

**Descripción:** Devuelve medidas de ajuste de resumen del modelo.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Get Measures;

```

### Get Microseconds

**Sintaxis:** obj << Get Microseconds

**Descripción:** Devuelve el número de microsegundos utilizados para realizar el análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
time = obj << Get Microseconds;
Show( time );

```

### Get Misclassification Rate Test

**Sintaxis:** obj << Get Misclassification Rate Test

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
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
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

### Get Misclassification Rate Training

**Sintaxis:** obj << Get Misclassification Rate Training

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de entrenamiento.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

### Get Misclassification Rate Validation

**Sintaxis:** obj << Get Misclassification Rate Validation

**Descripción:** Devuelve la tasa de clasificación errónea para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

### Get Precision Recall Area Test

**Sintaxis:** obj << Get Precision Recall Area Test

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de pruebas. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

### Get Precision Recall Area Training

**Sintaxis:** obj << Get Precision Recall Area Training

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de entrenamiento. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

### Get Precision Recall Area Validation

**Sintaxis:** obj << Get Precision Recall Area Validation

**Descripción:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de validación. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

### Get Prediction Formula

**Sintaxis:** obj << Get Prediction Formula

**Descripción:** Construye un script para crear una columna de fórmula de predicción y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Get Prediction Formula;

```

### Get RMS Error Test

**Sintaxis:** obj << Get RMS Error Test

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de prueba. Solo disponible al utilizar un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
rms = obj << Get RMS Error Test;
Show( rms );

```

### Get RMS Error Training

**Sintaxis:** obj << Get RMS Error Training

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados test de los errores de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
rms = obj << Get RMS Error Training;
Show( rms );

```

### Get RMS Error Validation

**Sintaxis:** obj << Get RMS Error Validation

**Descripción:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de validación. Solo disponible al utilizar un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
rms = obj << Get RMS Error Validation;
Show( rms );

```

### Get ROC Area Test

**Sintaxis:** obj << Get ROC Area Test

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente a los datos de la prueba. Es necesario mostrar la curva ROC antes de calcular el área. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	Go
);
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

### Get ROC Area Training

**Sintaxis:** obj << Get ROC Area Training

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de entrenamiento. Es necesario mostrar la curva ROC antes de calcular el área.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

### Get ROC Area Validation

**Sintaxis:** obj << Get ROC Area Validation

**Descripción:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de validación. Es necesario mostrar la curva ROC antes de calcular el área. Solo disponible al utilizar un conjunto de validación.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

### Get RSquare Test

**Sintaxis:** obj << Get RSquare Test

**Descripción:** Devuelve el R cuadrado para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
r = obj << Get RSquare Test;
Show( r );

```

### Get RSquare Training

**Sintaxis:** obj << Get RSquare Training

**Descripción:** Devuelve el R cuadrado para el conjunto de entrenamiento.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
r = obj << Get RSquare Training;
Show( r );

```

### Get RSquare Validation

**Sintaxis:** obj << Get RSquare Validation

**Descripción:** Devuelve el R cuadrado para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
r = obj << Get RSquare Validation;
Show( r );

```

### Get SAS DATA Step

**Sintaxis:** obj << Get SAS DATA Step

**Descripción:** Crea un paso DATA de SAS para asignar una puntuación a los datos y devolverlo a la ventana de registro.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
code = obj << Get SAS Data Step;

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Seconds

**Sintaxis:** obj << Get Seconds

**Descripción:** Devuelve el número de segundos utilizados para realizar el análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
time = obj << Get Seconds;
Show( time );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
t = obj << Get Timing;
Show( t );

```

### Get Tolerant Prediction Formula

**Sintaxis:** obj << Get Tolerant Prediction Formula

**Descripción:** Construye un script para crear una columna de fórmula de predicción tolerante y la devuelve.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Get Tolerant Prediction Formula;

```

### Get Tolerant SAS DATA Step

**Sintaxis:** obj << Get Tolerant SAS DATA Step

**Descripción:** Crea un paso DATA de SAS para asignar una puntuación a los datos que incluye los valores faltantes y lo devuelve a la ventana de registro. Los valores faltantes se asignan aleatoriamente a una rama del árbol.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
code = obj << Get Tolerant SAS Data Step;

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

### Go

**Sintaxis:** obj << Go

**Descripción:** Comienza la iteración después de que se hayan establecido todos los parámetros.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

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

**Sintaxis:** obj = Boosted Tree(...Informative Missing( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Para las variables categóricas, trata los valores faltantes como una categoría. Para las variables continuas, trata los valores faltantes como bajos o altos, lo que encaje mejor. Opción activada de forma predeterminada.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree(
	Y( :height ),
	X( :age ),
	Informative Missing( 0 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );
obj << Split Best( 1 );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt:Age[3] = .;
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Informative Missing( 0 ),
	Split Best( 3 )
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest(
	Y( :height ),
	X( :age ),
	Informative Missing( 0 ),
	Go
);

```

### Learning Rate

**Sintaxis:** Learning Rate( fraction )

**Descripción:** Establece la tasa de aprendizaje utilizada en la estimación. El valor predeterminado es de 0,1. ".1" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Learning Rate( 0.2 ),
	Go
);

```

### Lift Curve

**Sintaxis:** obj << Lift Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo. Si ha utilizado la validación, se muestra un gráfico para cada uno de los conjuntos, de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);
obj << Lift Curve( 1 );

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

### Make SAS DATA Step

**Sintaxis:** obj << Make SAS DATA Step

**Descripción:** Crea un paso DATA de SAS para asignar una puntuación a los datos y devolverlo a una ventana de scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Make SAS Data Step;

```

### Make Tolerant SAS DATA Step

**Sintaxis:** obj << Make Tolerant SAS DATA Step

**Descripción:** Crea un paso DATA de SAS para asignar una puntuación a los datos que incluye los valores faltantes y lo devuelve a una ventana de scripts. Los valores faltantes se asignan aleatoriamente a una rama del árbol.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Make Tolerant SAS Data Step;

```

### Maximum Depth

**Sintaxis:** obj << Maximum Depth( number )

**Descripción:** Restringe el tamaño del árbol en función de la profundidad, en lugar del número de nodos.

### Method

**Sintaxis:** Method( "Boosted Tree" )

<b>Elemento de inicio: Sí</b>

**Descripción:** Determina el método utilizado para la partición de los datos. El método predeterminado es el árbol de decisión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Minimum Size Split

**Sintaxis:** Minimum Size Split( number )

**Descripción:** Establece el número mínimo de observaciones para tener en cuenta las divisiones utilizadas en la estimación. El valor predeterminado es de 5.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Minimum Size Split( 10 ),
	Go
);

```

### Multithreading

**Sintaxis:** Multithreading( state=0|1 )

**Descripción:** Divide los cálculos entre los subprocesos disponibles en el equipo. Opción activada de forma predeterminada.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
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

### Number of Layers

**Sintaxis:** Number of Layers( number )

**Descripción:** Establece el número de capas utilizadas en la estimación. El valor predeterminado es de 50. "100" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Number of Layers( 20 ),
	Go
);

```

### Ordinal Restricts Order

**Sintaxis:** obj = Boosted Tree(...Ordinal Restricts Order( state=0|1 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** En el caso de columnas ordinales, solo considera las divisiones que conserven el orden. Opción activada de forma predeterminada.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree(
	Y( :height ),
	X( :age ),
	Ordinal Restricts Order( 1 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );
obj << Split Best( 3 );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Ordinal Restricts Order( 1 ),
	Split Best( 2 )
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bootstrap Forest(
	Y( :height ),
	X( :age ),
	Ordinal Restricts Order( 1 ),
	Go
);

```

### Overfit Penalty

**Sintaxis:** Overfit Penalty( fraction )

**Descripción:** Establece la penalización de sobreajuste, que introduce sesgo con el fin de alejar las probabilidades del cero para los modelos con una respuesta categórica. El valor predeterminado es de 0,0001.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Overfit Penalty( 0.0005 ),
	Go
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

### Plot Actual by Predicted

**Sintaxis:** obj << Plot Actual by Predicted( state=0|1 )

**Descripción:** Muestra u oculta un gráfico utilizando los datos de entrenamiento con los valores predichos en el eje X y los valores observados en el eje Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Plot Actual by Predicted( 1 );

```

### Precision Recall Curve

**Sintaxis:** obj << Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales. Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Precision Recall Curve( 1 );

```

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de predicción, que se utiliza para explorar gráficamente la ecuación de predicción seccionándola factor por factor. El perfilador de predicción contiene funciones de optimización.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Profiler( 1 );

```

### Publish Prediction Formula

**Sintaxis:** obj << Publish Prediction Formula

**Descripción:** Crea fórmulas de predicción y las guarda como scripts de columna de fórmula en la plataforma Almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Sintaxis:** obj << Publish Tolerant Prediction Formula

**Descripción:** Construye una fórmula de predicción que realiza la predicción incluso en caso de haber valores faltantes y la publica como script de columna de fórmula en el almacén de fórmulas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Publish Tolerant Prediction Formula;

```

### ROC Curve

**Sintaxis:** obj << ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad). Si ha utilizado la validación, se muestra un gráfico para cada conjunto de entrenamiento, validación y prueba.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Go
);
obj << ROC Curve( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Relaunch Analysis;

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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Report View( "Summary" );

```

### Response

**Sintaxis:** obj << Response( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Row Sampling Rate

**Sintaxis:** obj << Row Sampling Rate( number )

**Descripción:** Especifica la proporción de filas de entrenamiento que muestrear para cada capa del árbol.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation Portion( 0.2 ),
	Row Sampling Rate( 0.95 ),
	Go
);

```

### Save Cumulative Details

**Sintaxis:** obj << Save Cumulative Details

**Descripción:** Guarda el R cuadrado de validación junto con el número de árbol en una nueva tabla de datos. Solo disponible al utilizar un conjunto de validación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Cumulative Details;

```

### Save Offset Estimates

**Sintaxis:** obj << Save Offset Estimates

**Descripción:** Guarda las estimaciones offset en una nueva columna de la tabla de datos. Solo está disponible para respuestas categóricas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Save Offset Estimates;

```

### Save Predicteds

**Sintaxis:** obj << Save Predicteds

**Descripción:** Guarda los valores predichos en una nueva columna de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Predicteds;

```

### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Prediction Formula;

```

### Save Residuals

**Sintaxis:** obj << Save Residuals

**Descripción:** Guarda los residuos en una nueva columna de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Residuals;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Script to Script Window;

```

### Save Tolerant Prediction Formula

**Sintaxis:** obj << Save Tolerant Prediction Formula

**Descripción:** Guarda una fórmula que realiza la predicción incluso en caso de haber valores faltantes en una nueva columna de la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Tolerant Prediction Formula;

```

### Save Tree Details

**Sintaxis:** obj << Save Tree Details

**Descripción:** Guarda en una nueva tabla de datos la capa, la división, la etiqueta y la estimación para cada combinación de capa-división.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Save Tree Details;

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

### Set Random Seed

**Sintaxis:** obj << Set Random Seed( number )

**Descripción:** Especifica una semilla aleatoria para reproducir los resultados de inicios futuros de la plataforma.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

### Show Trees

**Sintaxis:** obj << Show Trees( "Ninguno"|"Mostrar nombres"|"Mostrar nombres  categorías"|"Mostrar nombres  categorías  estimaciones" )

**Descripción:** Muestra una lista de árboles en cada capa, solo con nombres, con nombres y categorías, o con nombres, categorías y estimaciones en cada nodo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
obj << Show Trees( Show names categories );
(obj << Report)["Tree Views"] << Close( 0 );
(obj << Report)["Layer4"] << Close( 0 );

```

### Specify Profit Matrix

**Sintaxis:** obj << Specify Profit Matrix

**Descripción:** Le permite especificar los beneficios o costes asociados a decisiones de clasificación correctas o incorrectas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Specify Profit Matrix( [1 -1, -1 1, . .], "0", "1", "Undecided" ),
	Go
);

```

### Splits per Tree

**Sintaxis:** Splits Per Tree( number )

**Descripción:** Establece el número de divisiones por árbol utilizadas en la estimación. El valor predeterminado es de 3. "3" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Splits Per Tree( 2 ),
	Go
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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
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
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Tuning Design Table

**Sintaxis:** Tuning Design Table( "table name" )

**Descripción:** Una tabla de parámetros de sintonización con los que realizar la corrida, que admiten: Divisiones por árbol, Tasa de aprendizaje, Tasa muestral de filas, Tasa muestral de columnas, Número de capas, Tamaño mínimo de división

### Use Excluded Rows for Validation

**Sintaxis:** obj = Boosted Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**Descripción:** Utiliza las filas excluidas de la tabla de datos para crear un conjunto de validación. Esta opción aparece en la ventana de inicio solo si se utiliza JMP estándar y hay filas excluidas.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Partition(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Use Excluded Rows for Validation( 1 ),
	Split Best( 2 )
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

### Validation

**Sintaxis:** obj << Validation( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Validation Portion

**Sintaxis:** obj = Boosted Tree(...Validation Portion( fraction=0 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Formula un conjunto de validación mediante la selección aleatoria de filas y cada fila tiene probabilidad p (fracción) de ser seleccionada. "0" de forma predeterminada.

**Ejemplo de árbol impulsado**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :country, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Ejemplo de partición**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 )
);
obj << Split Best( 2 );

```

**Ejemplo de uplift**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation Portion( 0.2 ),
	Go
);

```

**Ejemplo del bosque bootstrap**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
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

### Weight

**Sintaxis:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_weightcol",
	Numeric,
	Continuous,
	Formula( Random Beta( 1, 1 ) )
);
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Weight( _weightcol ),
	Go
);

```

### X

**Sintaxis:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

### Y

**Sintaxis:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y ),
	X(
		:Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG,
		:Glucose
	),
	Validation( :Validation ),
	Go
);

```

