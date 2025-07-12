# Time Series



## ARIMA

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Columnas

### By

**Sintaxis:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

```

### Input List

**Sintaxis:** obj << Input List( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**Sintaxis:** obj << Time ID( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**Sintaxis:** obj << X( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**Sintaxis:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Constructores asociados

### Time Series

**Sintaxis:** Time Series( Y( column ) )

**Descripción:** Modela una serie de observaciones en puntos temporales igualmente espaciados. Incluye un gráfico de serie de tiempo, autocorrelaciones, variograma, densidad espectral, ARIMA, ARIMA estacional, modelos de alisado y pronósticos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Mensajes del elemento

### AR Coefficients

**Sintaxis:** obj << AR Coefficients( state=0|1 )

**Descripción:** Muestra u oculta el gráfico del coeficiente de autocorrelación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Sintaxis:** obj << ARIMA( p, d, q, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Descripción:** Ajusta un modelo ARIMA. Utiliza el orden p,d y q para un modelo ARIMA(p,d,q). Utiliza level para valores distintos de 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**Sintaxis:** obj << ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Descripción:** Ajusta un conjunto de modelos ARIMA con órdenes dentro de rangos especificados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**Sintaxis:** obj << Autocorrelation( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelación. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Sintaxis:** obj = Time Series(...Autocorrelation Lags( number=25 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Ajusta la opción de iniciar al número máximo de períodos entre puntos usados para calcular las autocorrelaciones. "25" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**Sintaxis:** obj << Combine and Save Forecasts from Models

**Descripción:** Crea una nueva tabla de datos con los resultados combinados de todos los ajustes del modelo en el informe.

**JMP Versión agregada:** 16

### Connecting Lines

**Sintaxis:** obj << Connecting Lines( state=0|1 )

**Descripción:** Muestra u oculta las líneas unidas en el gráfico de series de tiempo de base. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Cross Correlation

**Sintaxis:** obj << Cross Correlation( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de correlación cruzada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Sintaxis:** obj << Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Ajusta un modelo de alisado con tendencia amortiguada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Difference

**Sintaxis:** obj << Difference( d, <D>, <S> )

**Descripción:** Calcula la serie de las diferencias y genera gráficos de las autocorrelaciones y las autocorrelaciones parciales de la serie de las diferencias. La serie de las diferencias viene dada por  (1-B)^d * (1-B^S)^D * y_t , donde y_t es la serie de tiempo, B es el operador de retardo definido por B * y_t = y_(t-1), d es el orden de las diferencias no estacional, D es el orden de las diferencias estacional y S es el número de observaciones por periodo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Sintaxis:** obj << Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Invoca el ajuste de un modelo de alisado exponencial doble.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**Sintaxis:** obj << Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Descripción:** Ajusta todos los modelos de alisado de espacios de estado recomendados.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Sintaxis:** obj = Time Series(...Forecast Periods( number=25 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Ajusta la opción de iniciar con un cierto número de pasos por adelantado en el informe de pronóstico. "25" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Sintaxis:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Descripción:** Determina si los pronósticos se realizan en observaciones futuras o en observaciones de retención. Si se selecciona esta opción, los pronósticos se realizan en el conjunto de retención, determinado por el número especificado en la opción Periodos de pronóstico.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Sintaxis:** obj << Generate Simulation( id, seed, length, n )

**Descripción:** Genera una tabla de datos de múltiples trayectorias futuras de un modelo ajustado. Devuelve la referencia a la tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**Sintaxis:** obj << Get Model Specs

**Descripción:** Devuelve una lista con nombres de los resultados del modelo, cada uno de los cuales está denominado con la especificación del modelo. En la salida se incluyen estimaciones y errores estándar. Disponible para ARIMA, ARIMA estacional, todos los modelos de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Sintaxis:** obj << Get Models

**Descripción:** Devuelve una lista con nombres de los resultados del modelo, cada uno de los cuales está denominado con descripciones del modelo. En la salida se incluyen estimaciones y errores estándar. Disponible para ARIMA, ARIMA estacional, todos los modelos de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Hide All Reports

**Sintaxis:** obj << Hide All Reports

**Descripción:** Oculta todos los modelos que aparecen en la tabla Comparación de modelos de la ventana del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

```

### Input Series

**Sintaxis:** obj << Input Series( Column, <ARIMA( )>| <Prewhitening( )> ... )

**Descripción:** Agrupa los mensajes enviados a la serie de entrada. Nota: es necesario especificar una variable de lista de entrada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Sintaxis:** obj << Keep Best Models( "AIC"|"SBC" )

**Descripción:** Retiene los mejores modelos entre las clases de modelos individuales y quita los modelos restantes.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**Sintaxis:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**Descripción:** Especifica el parámetro lambda utilizado para la transformación de Box-Cox de los datos originales. "0" de forma predeterminada.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**Sintaxis:** obj << Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Ajusta un modelo de alisado exponencial lineal.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),
	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) )
);

```

### Maximum Iterations

**Sintaxis:** obj << Maximum Iterations( maxIter=250 )

**Descripción:** Restablece el número máximo de iteraciones para las optimizaciones futuras que se utilicen en el ajuste de modelos ARIMA. "250" de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Sintaxis:** obj << Mean Line( state=0|1 )

**Descripción:** Muestra u oculta la línea de la media en el gráfico de series de tiempo de base. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**Sintaxis:** obj << Model Comparison Report

**Descripción:** Establece la configuración del informe Comparación de modelos.

### Number of Forecast Periods

**Sintaxis:** obj << Number of Forecast Periods( number )

**Descripción:** Restablece el número de períodos de pronóstico y actualiza el informe del pronóstico.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Sintaxis:** obj << Partial Autocorrelation( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelación parcial. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**Sintaxis:** obj << Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Descripción:** Establece el orden de preblanqueo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Remove All Simulation

**Sintaxis:** obj << Remove All Simulation

**Descripción:** Elimina todas las trayectorias futuras simuladas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

```

### Remove Cycle

**Sintaxis:** obj << Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Descripción:** Estima el componente cíclico con una función de coseno y, a continuación, lo quita de los datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

### Remove Linear Trend

**Sintaxis:** obj << Remove Linear Trend

**Descripción:** Estima la tendencia lineal y, a continuación, la quita de los datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

```

### Remove Model Simulation

**Sintaxis:** obj << Remove Model Simulation( id )

**Descripción:** Elimina todas las trayectorias futuras simuladas de un modelo ajustado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**Sintaxis:** obj << Save Spectral Density

**Descripción:** Guarda la densidad espectral en una tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Sintaxis:** obj << Seasonal ARIMA( p, d, q, P, D, Q, S, <No Intercept( 0|1 )>, <No Constrain( 0|1 )>, <Confidence Intervals( level )> )

**Descripción:** Ajusta un modelo ARIMA estacional. Utiliza el orden p,d,q,P,D,Q y S para un modelo ARIMA(p,d,q)(P,D,Q)S.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**Sintaxis:** obj << Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Ajusta un modelo de alisado exponencial estacional.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

```

### Set Seed

**Sintaxis:** obj << Set Seed( seed )

**Descripción:** Establece la semilla aleatoria.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Sintaxis:** obj << Show Box-Cox Transformation Plot( state=0|1 )

**JMP Versión agregada:** 16

### Show Lag Plot

**Sintaxis:** obj << Show Lag Plot( state=0|1 )

### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de series de tiempo de base. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Sintaxis:** obj << Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Ajusta un modelo de alisado exponencial simple.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**Sintaxis:** obj << Simple Moving Average

**Descripción:** Abre un cuadro de diálogo de especificación de la media móvil simple y ajusta un modelo si no hay más argumentos. Pasa argumentos al script del modelo de la media móvil simple. El valor devuelto es el asidero que admite scripts del modelo de media móvil simple. Consulte los detalles de los argumentos en el script de media móvil simple.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Sintaxis:** obj << Simple Moving Average Centering Method( "Sin centrado"|"Centrado"|"Centrado y alisado doblemente para número de términos par" )

### Simulate More

**Sintaxis:** obj << Simulate More( id, n )

**Descripción:** Simula múltiples trayectorias futuras de un modelo ajustado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Sintaxis:** obj << Simulate Once( id )

**Descripción:** Simula una trayectoria futura de un modelo ajustado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Sintaxis:** obj << Spectral Density( state=0|1 )

**Descripción:** Muestra u oculta los gráficos de densidad espectral.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Sintaxis:** obj << State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Descripción:** Ajusta un modelo de alisado de espacios de estado.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);

```

### Time Series Graph

**Sintaxis:** obj << Time Series Graph( state=0|1 )

**Descripción:** Activa o desactiva el gráfico de serie de tiempo de base. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Transfer Function

**Sintaxis:** obj << Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), <input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))>, ..., <No Intercept(flag1)>, <No Constrain(flag2)>, <Alternative Parameterization( flag3 )>, <Confidence Intervals( level )>, <Number of Forecast Periods( nAhead )> )

**Descripción:** Ajusta un modelo de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

```

### Use Box-Cox Transformation

**Sintaxis:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Descripción:** Transforma los datos originales usando una transformación de Box-Cox con la lambda que se haya especificado en la opción Lambda para Box-Cox. Si selecciona esta opción, se realizan todos los análisis del informe Serie de tiempo con los datos transformados.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el gráfico del variograma en el informe de diagnósticos básicos de series de tiempo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

```

### Winters Method

**Sintaxis:** obj << Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), <Confidence Intervals(level)> )

**Descripción:** Ajusta un modelo de alisado mediante el método de Winter.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X11

**Sintaxis:** obj << X11( Additive|Multiplicative )

**Descripción:** Quita la tendencia y los efectos estacionales con el método X-11 desarrollado por la Oficina del Censo de los Estados Unidos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

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

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
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

**Sintaxis:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Damped-Trend Linear Exponential Smoothing

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### Mensajes del elemento

#### Autocorrelation

**Sintaxis:** obj << Autocorrelation( state=0|1 )

**Descripción:** Muestra u oculta la autocorrelación en el informe Diferencias. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**Sintaxis:** obj << Connecting Lines( state=0|1 )

**Descripción:** Muestra u oculta las líneas que unen los puntos del gráfico Diferencias. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**Sintaxis:** obj << Difference Graph( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Diferencias. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**Sintaxis:** obj << Mean Line( state=0|1 )

**Descripción:** Muestra u oculta la línea de la media en el gráfico Diferencias.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**Sintaxis:** obj << Partial Autocorrelation( state=0|1 )

**Descripción:** Muestra u oculta la autocorrelación parcial en el informe Diferencias. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Save

**Sintaxis:** obj << Save

**Descripción:** Guarda los valores de las diferencias en una columna nueva de la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico Diferencias. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma en el informe Diferencias.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### Mensajes del elemento

#### Add Model

**Sintaxis:** obj << Add Model( Window Width, <Centered> )

**Descripción:** Añade un modelo de media móvil simple. El modelo se identifica al mover el ancho de la ventana. El argumento opcional indica si la media está centrada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

#### Connecting Lines

**Sintaxis:** obj << Connecting Lines( <1|0> )

**Descripción:** Opción de gráfico para mostrar las líneas unidas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**Sintaxis:** obj << Get Results

**Descripción:** Devuelve todos los modelos de media móvil simple como un objeto JSL.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**Sintaxis:** obj << Remove Model( Window Width, <Centered> )

**Descripción:** Elimina un modelo de media móvil simple. El modelo se identifica al mover el ancho de la ventana.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**Sintaxis:** obj << Remove Report

**JMP Versión agregada:** 16

#### Save to Data Table

**Sintaxis:** obj << Save to Data Table

**Descripción:** Guarda todos modelos de media móvil simple en una tabla de datos y devuelve el asidero de la tabla de datos

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**Sintaxis:** obj << Show Points( <1|0> )

**Descripción:** Opción de gráfico para mostrar los puntos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Mensajes del elemento

#### Alternative Parameterization

**Sintaxis:** obj << Alternative Parameterization( state=0|1 )

**Descripción:** Especifica si el coeficiente de regresión general se saca de factor común en los polinomios del numerador.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**Sintaxis:** obj << Compute Objective

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

#### Import New Inputs

**Sintaxis:** obj << Import New Inputs

**JMP Versión agregada:** 16

#### Maximum Iterations

**Sintaxis:** obj << Maximum Iterations( number )

**Descripción:** Especifica el número máximo de iteraciones.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Elimina las restricciones de los coeficientes AR y MA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

#### Number of Forecast Periods

**Sintaxis:** obj << Number of Forecast Periods( number )

**Descripción:** Especifica el número de periodos que pronosticar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( number )

**Descripción:** Establece el nivel de los intervalos de confianza mostrados.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### Mensajes del elemento

#### Actual

**Sintaxis:** obj << Actual( state=0|1 )

**Descripción:** Selecciona la columna de datos Real para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Sintaxis:** obj << Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Sintaxis:** obj << Confidence Intervals( number )

#### Create SAS Job

**Sintaxis:** obj << Create SAS Job

**Descripción:** Crea una tarea SAS para iniciar SAS y ejecutar el análisis en PROC ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Sintaxis:** obj << Innovations( state=0|1 )

**Descripción:** Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

#### Lower Confidence Limit

**Sintaxis:** obj << Lower Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza inferior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Sintaxis:** obj << No Constrain( state=0|1 )

**Descripción:** Eleva la restricción a los parámetros autorregresivos para que siempre se encuentren dentro de la región estable y los parámetros de la media móvil dentro de la región invertible al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Sintaxis:** obj << No Intercept( state=0|1 )

**Descripción:** Fija la constante del modelo en cero al iniciar un modelo ARIMA.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Sintaxis:** obj << Partial Autocorrelations( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de autocorrelaciones parciales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Sintaxis:** obj << Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de estadísticas residuales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Sintaxis:** obj << Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Sintaxis:** obj << Prediction Interval( level )

**Descripción:** Establece el tamaño del intervalo de confianza sobre la predicción para el modelo ARIMA. El tamaño predeterminado es 0,95.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Sintaxis:** obj << Remove Fit

**JMP Versión agregada:** 16

#### Residuals

**Sintaxis:** obj << Residuals( state=0|1 )

**Descripción:** Selecciona la columna de datos Valores residuales para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Sintaxis:** obj << Save Columns

**Descripción:** Crea una nueva tabla de datos que contiene los valores reales y los predichos junto con los errores estándar, los residuos y los intervalos de predicción al 95% de la respuesta. Esta opción está disponible para todos los modelos ARIMA, de alisado y de función de transferencia.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Sintaxis:** obj << Save Prediction Formula

**Descripción:** Guarda la fórmula de predicción en una nueva columna de la tabla de datos. Esta opción está disponible para todos los modelos ARIMA y de alisado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Sintaxis:** obj << Show Confidence Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Sintaxis:** obj << Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Sintaxis:** obj << Show Prediction Interval( state=0|1 )

**Descripción:** Muestra u oculta los intervalos de predicción en el gráfico de pronóstico de series de tiempo. Esta opción está disponible para todos los modelos ARIMA y de alisado. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Sintaxis:** obj << Std Error of Predicted( state=0|1 )

**Descripción:** Selecciona la columna de datos Error estándar de los valores predichos para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Sintaxis:** obj << Time( state=0|1 )

**Descripción:** Selecciona la columna de datos Tiempo para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Sintaxis:** obj << Upper Confidence Limit( state=0|1 )

**Descripción:** Selecciona la columna de valores Límite de confianza superior al 95% para guardarla mediante el comando Guardar columnas. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Sintaxis:** obj << Variogram( state=0|1 )

**Descripción:** Muestra u oculta el variograma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

