# Functional Data Explorer



## Functional Data Explorer Data Processing

### Align 0 to 1

**Sintaxis:** obj << Data Processing( Align 0 to 1 )

**Descripción:** Alinea las funciones de salida (Y) en el rango de la entrada (X) para que esté entre 0 y 1.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

### Align Maximum

**Sintaxis:** obj << Data Processing( Align Maximum )

**Descripción:** Alinea las funciones de salida (Y) mediante el valor de entrada máximo observado (X).

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

### Align Minimum

**Sintaxis:** obj << Data Processing( Align Minimum )

**Descripción:** Alinea las funciones de salida (Y) mediante el valor de entrada mínimo observado (X).

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

### Align by Function

**Sintaxis:** obj << Data Processing( Align by Function )

**Descripción:** Alinea las funciones de salida (Y) de modo que el rango de cada función esté por encima del rango de la entrada (X).

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

### Baseline Correction

**Sintaxis:** obj << Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**Descripción:** Ajusta y quita un modelo de referencia de cada función. Puede especificar el modelo de referencia, la región de corrección, las regiones de referencia y los puntos de anclaje.

**JMP Versión agregada:** 17

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

### Center

**Sintaxis:** obj << Data Processing( Center )

**Descripción:** Centra la salida.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

### Dynamic Time Warping

**Sintaxis:** obj << Data Processing( Dynamic Time Warping( Reference( number ) ) )

**Descripción:** Alinea las funciones de salida mediante la deformación temporal dinámica (DTW). La DTW es una técnica de alineación de funciones que encuentra una deformación óptima para alinear dos o más funciones de forma conjunta.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

### Exp

**Sintaxis:** obj << Data Processing( Exp )

**Descripción:** Transforma los datos calculando la función exponencial de la salida.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Exp )
);

```

### Filter X

**Sintaxis:** obj << Data Processing( Filter X( [lower, upper] ) )

**Descripción:** Quita los valores de entrada (X) que estén fuera del intervalo especificado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**Sintaxis:** obj << Data Processing( Filter Y( [lower, upper] ) )

**Descripción:** Quita los valores de salida (Y) fuera del intervalo especificado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

### Load Targets

**Sintaxis:** obj << Data Processing( Load Targets( "level" ) )

**Descripción:** Especifica una función objetivo.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

### Log

**Sintaxis:** obj << Data Processing( Log )

**Descripción:** Transforma los datos calculando el logaritmo natural de la salida.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log )
);

```

### Log X

**Sintaxis:** obj << Data Processing( Log X )

**Descripción:** Transforma los datos calculando el logaritmo natural de la entrada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log X )
);

```

### Logit

**Sintaxis:** obj << Data Processing( Logit )

**Descripción:** Transforma los datos calculando la función logit de la salida. Los valores de salida deben estar comprendidos entre 0 y 1.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

### MSC

**Sintaxis:** obj << Data Processing( MSC )

**Descripción:** Aplica el método Corrección del efecto multiplicativo de la dispersión a los datos. Este método ajusta una regresión lineal simple para cada función individual (nivel de la variable ID) donde la respuesta son los valores de salida de la función y el regresor son los valores de salida de la función de la media.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

### Negation

**Sintaxis:** obj << Data Processing( Negation )

**Descripción:** Transforma los datos negando la salida.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

### Range 0 to 1

**Sintaxis:** obj << Data Processing( Range 0 to 1 )

**Descripción:** Escala la salida para que esté dentro del rango de 0 a 1.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

### Reduce

**Sintaxis:** obj << Data Processing( Reduce( Grid( number ) ) ); 

obj << Data Processing( Reduce( Bin( number ) ) ); 

obj << Data Processing( Reduce( Thin( number ) ) )

**Descripción:** Reduce los datos sobre la entrada (X) con una de varias técnicas.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Remove Selected

**Sintaxis:** obj << Data Processing( Remove Selected )

**Descripción:** Quita los valores seleccionados.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

### Remove Unselected

**Sintaxis:** obj << Data Processing( Remove Unselected )

**Descripción:** Quita los valores no seleccionados.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

### Remove Value

**Sintaxis:** obj << Data Processing( Remove Value( number ) )

**Descripción:** Quita las observaciones que tengan el valor de respuesta especificado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**Sintaxis:** obj << Data Processing( Remove Zeros )

**Descripción:** Quita las observaciones que tengan un valor de respuesta igual a cero.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

### Row Alignment

**Sintaxis:** obj << Data Processing( Row Alignment )

**Descripción:** Reemplaza los valores introducidos por el número de fila.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

### SNV

**Sintaxis:** obj << Data Processing( SNV )

**Descripción:** Aplica el método de variables estándar normales a los datos. Este método estandariza la salida centrando y escalando cada función individual (nivel de la variable ID) para que tenga una media de 0 y una desviación estándar de 1.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

### Savitzky-Golay Filter

**Sintaxis:** obj << Data Processing( "Savitzky-Golay Filter"n )

**Descripción:** Aplica el filtro Savitzky-Golay a cada función. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

### Savitzky-Golay First Derivative

**Sintaxis:** obj << Data Processing( "Savitzky-Golay First Derivative"n )

**Descripción:** Devuelve la primera derivada del filtro Savitzky-Golay. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

### Savitzky-Golay Second Derivative

**Sintaxis:** obj << Data Processing( "Savitzky-Golay Second Derivative"n )

**Descripción:** Devuelve la segunda derivada del filtro Savitzky-Golay. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

### Square

**Sintaxis:** obj << Data Processing( Square )

**Descripción:** Transforma los datos calculando el valor cuadrático de la salida.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square )
);

```

### Square Root

**Sintaxis:** obj << Data Processing( Square Root )

**Descripción:** Transforma los datos calculando la raíz cuadrada de la salida. Los valores de salida deben ser no negativos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Standardize

**Sintaxis:** obj << Data Processing( Standardize )

**Descripción:** Estandariza la salida mediante centrado y escalado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

## Functional Data Explorer FDOE

### Diagnostic Plots

**Sintaxis:** obj<< Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos observados frente a predichos y residuales en el informe Análisis DOE funcional. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) )
);
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

### FDOE Profiler

**Sintaxis:** obj << Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador FDOE, que le permite explorar cómo cambia la respuesta en función de los valores de las variables suplementarias. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) )
);
Report( obj )["Functional PCA"] << Close( 1 );
Report( obj )["Model Selection"] << Close( 1 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << FDOE Profiler( 1 );

```

### Generalized Regression FPC Model

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**Descripción:** Especifica la configuración del modelo de regresión generalizada que se crea con la opción Análisis DOE funcional. Utilice este comando para especificar una configuración distinta de la predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional DOE Analysis(
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( "Best Subset" ),
				Validation Method( "BIC" )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( "Elastic Net" ),
				Validation Method( "AICc" )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	)
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

### Generalized Regression for FPC Scores

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); 

scrobj << Generalized Regression for FPC Scores( state=0|1 )

**Descripción:** Muestra u oculta los informes de regresión generalizada para cada puntuación FPC. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Generalized Regression for FPC Scores( 0 );

```

### Save Prediction Formula

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una columna nueva de la tabla de datos actual. Si el formato de los datos originales es Filas como funciones o Columnas como funciones, esta opción crea una tabla de datos nueva que contiene los datos originales en formato apilado y una columna para la fórmula de predicción.

**JMP Versión agregada:** 16

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

### Save Residual Formula

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**Descripción:** Guarda la fórmula del residuo en una columna nueva de la tabla de datos actual. Si el formato de los datos originales es Filas como funciones o Columnas como funciones, esta opción crea una tabla de datos nueva que contiene los datos originales en formato apilado y una columna para la fórmula residual.

**JMP Versión agregada:** 16

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### Customize Number of FPCs

**Sintaxis:** obj << Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); 

scrobj << Customize Number of FPCs( number )

**Descripción:** Especifica el número de puntuaciones FPC que mostrar en el PCA funcional. Al especificar el número de puntuaciones FPC, también se actualiza el informe Resúmenes de la función.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Customize Number of FPCs( 2 );

```

### Diagnostic Plots

**Sintaxis:** obj << Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de diagnóstico FPCA en el informe PCA funcional. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

### FPC Profiler

**Sintaxis:** obj << Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); 

scrobj << FPC Profiler( state=0|1 )

**Descripción:** Muestra u oculta un perfilador de las puntuaciones FPC. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << FPC Profiler( 1 );

```

### Score Plot

**Sintaxis:** obj << Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); 

scrobj << Score Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de las puntuaciones FPC. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### AICc

**Sintaxis:** obj << Model Name( AICc ); 

scrobj << AICc

**Descripción:** Especifica el AICc como criterio de selección del modelo para los modelos B-Spline, P-Spline y Base de Fourier.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( AICc )
);

```

### BIC

**Sintaxis:** obj << Model Name( BIC ); 

scrobj << BIC

**Descripción:** Especifica el BIC como criterio de selección del modelo para los modelos B-Spline, P-Spline y Base de Fourier.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines( BIC )
);

```

### Basis Function Coefficients

**Sintaxis:** obj << Model Name( Basis Function Coefficients( state=0|1 ) ); 

scrobj << Basis Function Coefficients( state=0|1 )

**Descripción:** Muestra u oculta el informe Coeficientes de la función base para el ajuste del modelo correspondiente. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Basis Function Coefficients( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Basis Function Coefficients( 1 );
Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

### Diagnostic Plots

**Sintaxis:** obj << Model Name( Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Descripción:** Muestra u oculta el informe Gráficos de diagnóstico. Esta opción no está disponible para los modelos PCA de ondículas o funcional de la dirección. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Diagnostic Plots( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

### Function Summaries

**Sintaxis:** obj << Model Name( Function Summaries( state=0|1 ) ); 

scrobj << Function Summaries( state=0|1 )

**Descripción:** Muestra u oculta el informe Resúmenes de funciones. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Function Summaries( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Function Summaries( 1 );
Report( obj )["Function Summaries"] << Close( 0 );

```

### Functional DOE Analysis

**Sintaxis:** obj << Model Name( Functional DOE Analysis( ... ) ); 

scrobj << Functional DOE Analysis( ... )

**Descripción:** Inicia un informe de regresión generalizada dentro de la plataforma FDE. Se ajusta un modelo de regresión generalizada a cada una de las funciones de puntuación FPC utilizando las variables suplementarias como efectos del modelo.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines( Functional DOE Analysis )
);

```

### Functional PCA

**Sintaxis:** obj << Model Name( Functional PCA( state= 0|1 ) ); 

scrobj << Functional PCA( state=0|1 )

**Descripción:** Muestra u oculta el informe PCA funcional. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Fourier Basis( Functional PCA( 0 ) );
obj << Send to Report(
	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
		{Close( 1 )}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Functional PCA( 1 );

```

### GCV

**Sintaxis:** obj << Model Name( GCV ); 

scrobj << GCV

**Descripción:** Especifica la validación cruzada generalizada (GCV) como criterio de selección del modelo para los modelos B-Spline, P-Spline y Base de Fourier.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( GCV )
);

```

### Plot Basis

**Sintaxis:** obj << Model Name( Plot Basis( state=0|1 ) ); 

scrobj << Plot Basis( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de todas las funciones base en un gráfico. Esta opción no está disponible para los modelos PCA funcional directo o de ondículas.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Plot Basis( 1 ) )
);

```

### Random Coefficients

**Sintaxis:** obj << Model Name( Random Coefficients( state=0|1 ) ); 

scrobj << Random Coefficients( state=0|1 )

**Descripción:** Muestra u oculta el informe Coeficientes aleatorios por función. El informe contiene una tabla de los coeficientes aleatorios estimados para cada combinación de función base y proceso funcional. Esta opción no está disponible para los modelos PCA de ondículas o funcional de la dirección. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Random Coefficients( 1 ) )
);
Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

### Remove Fit

**Sintaxis:** obj << (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] << Remove Fit)

**Descripción:** Quita el ajuste especificado del informe.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis,
	B Splines
);
Wait( 2 );
obj << (Model["Fourier Basis"] << Remove Fit);

```

### Save Data

**Sintaxis:** obj << Model Name( Save Data ); 

scrobj << Save Data

**Descripción:** Guarda los datos procesados en una tabla de datos nueva. Los datos procesados se guardan en el formato de datos apilados.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) ),
	B Splines( Save Data )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets
);
scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);
scrobj << Save Data;

```

### Save Script Options

**Sintaxis:** obj << Save Script Options( "Save Script Saves Steps"|"Save Script Saves State"="Save Script Saves Steps" )

**Descripción:** Specifies the type of script that is saved for reproducing the peak finding results. "Save Script Saves Steps" de forma predeterminada.

### Wavelets DOE Analysis

**Sintaxis:** obj << Wavelets( Wavelets DOE Analysis( state=0|1 ) ); 

scrobj << Wavelets DOE Analysis( state=0|1 )

**Descripción:** Inicia un informe de regresión generalizada dentro de la plataforma FDE. Los modelos de regresión generalizada se ajustan a los coeficientes de ondículas utilizando las variables suplementarias como efectos del modelo.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) )
);

```

## Functional Data Explorer Peak Summaries

### Customize Peak Summaries

**Sintaxis:** obj << Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**Descripción:** Personaliza los estadísticos de resumen mostrados en el informe Resúmenes de la función.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Customize Peak Summaries() )
);

```

### Save Summaries

**Sintaxis:** obj << Peak Finding( Save Summaries )

**Descripción:** Guarda los estadísticos de resumen del modelo para cada función, incluidas las puntuaciones de los componentes principales funcionales.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Save Summaries )
);

```

## Functional Data Explorer Summaries

### Control Chart Builder

**Sintaxis:** obj << B Splines( Control Chart Builder )

obj << P Splines( Control Chart Builder )

obj << Fourier Basis( Control Chart Builder )

**Descripción:** Analiza los componentes principales funcionales mediante el Constructor de gráficos de control.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Control Chart Builder )
);

```

### Customize Function Summaries

**Sintaxis:** obj << B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**Descripción:** Personaliza los estadísticos de resumen mostrados en el informe Resúmenes de la función.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 2 ),
			Mean( 0 ),
			Std Dev( 1 ),
			Integrated Difference( 0 ),
			Median( 1 ),
			Minimum( 1 ),
			Maximum( 1 )
		)
	)
);

```

### Save Summaries

**Sintaxis:** obj << B Splines( Save Summaries )

obj << P Splines( Save Summaries )

obj << Fourier Basis( Save Summaries )

**Descripción:** Guarda los estadísticos de resumen del modelo para cada función, incluidas las puntuaciones de los componentes principales funcionales.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Save Summaries )
);

```

## Functional Data Explorer WDOE

### Diagnostic Plots

**Sintaxis:** obj << Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos observados frente a predichos y residuales en el informe Análisis DOE de ondículas. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

### FDOE Profiler

**Sintaxis:** obj << Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador FDOE, que le permite explorar cómo cambia la respuesta en función de los valores de las variables suplementarias. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << FDOE Profiler( 1 );

```

### Generalized Regression for Wavelets Coefficients

**Sintaxis:** obj << Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); 

scrobj << Generalized Regression for Wavelets Coefficients( state=0|1 )

**Descripción:** Muestra u oculta los informes de regresión generalizada para cada coeficiente de ondícula. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets(
		Functional PCA( 0 ),
		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Wavelets Coefficients( 1 );
Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

### Save Prediction Formula

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una columna nueva de la tabla de datos actual. Si el formato de los datos originales es Filas como funciones o Columnas como funciones, esta opción crea una tabla de datos nueva que contiene los datos originales en formato apilado y una columna para la fórmula de predicción.

**JMP Versión agregada:** 16

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

### Save Residual Formula

**Sintaxis:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**Descripción:** Guarda la fórmula del residuo en una columna nueva de la tabla de datos actual. Si el formato de los datos originales es Filas como funciones o Columnas como funciones, esta opción crea una tabla de datos nueva que contiene los datos originales en formato apilado y una columna para la fórmula residual.

**JMP Versión agregada:** 16

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### B Splines

**Sintaxis:** obj << B Splines

**Descripción:** Ajusta un modelo B-Spline a los datos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines
);

```

### B Splines Model Controls

**Sintaxis:** obj << B Splines Model Controls

**Descripción:** Abre el panel Controles del modelo antes de ajustar un modelo B-Spline. Puede especificar el número de nodos y el grado de Spline.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines Model Controls
);

```

### Baseline Correction

**Sintaxis:** obj << Baseline Correction

**Descripción:** Subtracts a baseline function from each individual function. You can perform automated baseline correction using either the statistics-sensitive nonlinear iterative peak-clipping (SNIP) or the alternating reweighted least squares solution technique. There is also an option to load a known baseline function from a data table.

**JMP Versión agregada:** 19

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

**Sintaxis:** obj = Functional Data Explorer(...<By( column(s) )>...)

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Copy Script;

```

### Data Processing

**Sintaxis:** obj << Data Processing( <options> )

**Descripción:** Especifica las opciones de Procesamiento de datos que le permiten realizar pasos previos al procesamiento en los datos. Entre las opciones se incluyen las operaciones de limpieza, transformación, alineación, espectral y función objetivo.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Table Window;

```

### Direct Functional PCA

**Sintaxis:** obj << Direct Functional PCA

**Descripción:** Realiza el PCA funcional directamente sin ajustar un modelo de función base. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Fourier Basis

**Sintaxis:** obj << Fourier Basis

**Descripción:** Ajusta un modelo B-Spline penalizado con respecto a los datos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis
);

```

### Fourier Basis Model Controls

**Sintaxis:** obj << Fourier Basis Model Controls

**Descripción:** Abre el panel Controles del modelo antes de ajustar un modelo de base de Fourier. Puede especificar el número de pares de Fourier y el periodo.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### Freq

**Sintaxis:** obj = Functional Data Explorer(...<Freq( column )>...)

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Freq( _freqcol )
);

```

### Function

**Sintaxis:** obj = Functional Data Explorer(...<Function( column )>...)

**Descripción:** Especifica la variable ID, que identifica cada función individual.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Functional Data Explorer

**Sintaxis:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Descripción:** Ajusta modelos funcionales utilizando un modelo base B-Spline, P-Spline, Fourier u Ondículas. Se puede realizar un análisis funcional de los componentes principales en el modelo funcional para extraer características importantes de los datos. También existe la opción de realizar un análisis funcional de los componentes principales directamente en los datos, sin ajustar primero un modelo de función con base.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

### ID

**Sintaxis:** obj = Functional Data Explorer(...<ID( column )>...)

**Descripción:** Especifica la variable ID, que identifica cada función individual.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

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

### Input

**Sintaxis:** obj = Functional Data Explorer(...<Input( column )>...)

**Descripción:** Especifica la variable de entrada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

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

### Multivariate Curve Resolution

**Sintaxis:** obj << Multivariate Curve Resolution

**Descripción:** Realiza la resolución de curva multivariante (MCR). Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 18

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

### Nonnegative SVD

**Sintaxis:** obj << Nonnegative SVD

**Descripción:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP Versión agregada:** 18

### Output

**Sintaxis:** obj = Functional Data Explorer(...Output( column(s) )...)

**Descripción:** Especifica la variable funcional del proceso. Debe haber al menos dos valores de salida observados para cada nivel de la variable ID.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### P Splines

**Sintaxis:** obj << P Splines

**Descripción:** Ajusta un modelo B-Spline penalizado con respecto a los datos.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines
);

```

### P Splines Model Controls

**Sintaxis:** obj << P Splines Model Controls

**Descripción:** Abre el panel Controles del modelo antes de ajustar un modelo de P-Spline. Puede especificar el número de nodos y el grado de Spline.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines Model Controls
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

### Peak Finding

**Sintaxis:** obj << Peak Finding

**Descripción:** Busca y resume los picos directamente o mediante un modelo paramétrico especificado.

**JMP Versión agregada:** 17

### Penalized Nonnegative SVD

**Sintaxis:** obj << Penalized Nonnegative SVD

**Descripción:** Realiza la SVD no negativa penalizada para construir un PCA funcional. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 18

### Penalized SVD

**Sintaxis:** obj << Penalized SVD

**Descripción:** Realiza la SVD penalizada para construir un PCA funcional. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 18

### Plot Mean Function

**Sintaxis:** obj << Plot Mean Function( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de la función de la media en el informe Resúmenes. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**Sintaxis:** obj << Plot Median Function( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de la función de la mediana en el informe Resúmenes.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**Sintaxis:** obj << Plot Standard Deviation Function( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de la función de la desviación estándar en el informe Resúmenes. Opción activada de forma predeterminada.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Data

**Sintaxis:** obj << Save Data

**Descripción:** Guarda los datos procesados en una tabla de datos independiente, en formato Apilado.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) )
);
obj << Save Data;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

### Supplementary

**Sintaxis:** obj = Functional Data Explorer(...<Supplementary( column(s) )>...)

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

### Unconstrained MCR

**Sintaxis:** obj << Unconstrained MCR

**Descripción:** Realiza la resolución de la curva multivariante (MCR) sin restricciones. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme.

**JMP Versión agregada:** 18

### Validation

**Sintaxis:** obj = Functional Data Explorer(...<Validation( column )>...)

**Descripción:** Especifica una columna numérica que define los conjuntos de validación. Esta columna debe contener tres valores distintos como máximo.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	B Splines
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

### Wavelets

**Sintaxis:** obj << Wavelets

**Descripción:** Ajusta varios modelos de ondículas a los datos. Esta opción requiere que los datos de entrada estén en una cuadrícula con un espaciado uniforme. Si los datos no están espaciados de forma uniforme, se crea automáticamente una cuadrícula antes de que comience la rutina de ondículas.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

### Window View

**Sintaxis:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintaxis:** obj = Functional Data Explorer(...<X( column )>...)

**Descripción:** Especifica la variable de entrada.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**Sintaxis:** obj = Functional Data Explorer(...Y( column(s) )...)

**Descripción:** Especifica la variable funcional del proceso. Debe haber al menos dos valores de salida observados para cada nivel de la variable ID.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**Sintaxis:** obj = Functional Data Explorer(...<Z( column(s) )>...)

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

**JMP Versión agregada:** 14

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

