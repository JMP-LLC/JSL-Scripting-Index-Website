# Reliability Growth



## Crow AMSAA

### Achieved MTBF

**Sintaxis:** scrobj << Achieved MTBF( state=0|1 )

**Descripción:** Muestra u oculta el informe MTBF obtenido. Utilice el argumento opcional alpha para especificar el valor alfa.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Achieved MTBF( .01 );

```

### Goodness of Fit

**Sintaxis:** scrobj << Goodness of Fit( state=0|1 )

**Descripción:** Muestra u oculta el informe Bondad de ajuste que contiene una prueba de la hipótesis nula de que los datos siguen un modelo Crow-AMSAA.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Goodness of Fit( 1 );

```

### Show Cumulative Events Plot

**Sintaxis:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de sucesos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Sintaxis:** scrobj << Show Intensity Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de intensidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Sintaxis:** scrobj << Show MTBF Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de tiempo medio entre fallas (MTBF). Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Sintaxis:** scrobj << Show Profilers( state=0|1 )

**Descripción:** Muestra u oculta los perfiladores para el tiempo medio entre fallas (MTBF), la intensidad de falla y los eventos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

## Cumulative Events Plot

### Crow AMSAA

**Sintaxis:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

### Crow AMSAA with Modified MLE

**Sintaxis:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA con corrección de sesgo para beta en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

### Cumulative Events Plot

**Sintaxis:** obj << Cumulative Events Plot( ... );

scrobj = obj << Cumulative Events Plot

**Descripción:** Le permite mostrar u ocultar modelos en el gráfico de sucesos acumulativos. Si se especifica sin ningún argumento, esta opción devuelve una referencia al gráfico que admite scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
plot = obj << Cumulative Events Plot;
plot << Crow AMSAA( 0 );

```

### Fixed Parameter Crow AMSAA

**Sintaxis:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA de parámetro fijo en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

### Piecewise Weibull NHPP

**Sintaxis:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP por tramos en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

### Piecewise Weibull NHPP Change Point Detection

**Sintaxis:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP reinicializado en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

### Reinitialized Weibull NHPP

**Sintaxis:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP reinicializado en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

## Fixed Parameter Crow AMSAA

### Show Cumulative Events Plot

**Sintaxis:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de sucesos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Sintaxis:** scrobj << Show Intensity Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de intensidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Sintaxis:** scrobj << Show MTBF Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de tiempo medio entre fallas (MTBF). Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Sintaxis:** scrobj << Show Profilers( state=0|1 )

**Descripción:** Muestra u oculta los perfiladores para el tiempo medio entre fallas (MTBF), la intensidad de falla y los eventos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

### beta

**Sintaxis:** obj << Fixed Parameter Crow AMSAA( beta( number ) )

**Descripción:** Especifica el valor del parámetro beta fijo. Si el argumento es un valor faltante, el parámetro no es fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( Beta( 0.8 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

### lambda

**Sintaxis:** obj << Fixed Parameter Crow AMSAA( lambda( number ) )

**Descripción:** Especifica el valor del parámetro lambda fijo. Si el argumento es un valor faltante, el parámetro no es fijo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( lambda( 0.02 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

## Mean Time Between Failures Plot

### Crow AMSAA

**Sintaxis:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

### Crow AMSAA with Modified MLE

**Sintaxis:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA con corrección de sesgo para beta en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

### Customize Average MTBF

**Sintaxis:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) ) );

scrobj << Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) )

**Descripción:** Especifica un conjunto de intervalos disjuntos que se utilizan para calcular el tiempo medio entre fallas (MTBF).

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Mean Time Between Failures Plot(
	Options(
		Sample MTBF Type( "Customized Average MTBF" ),
		Customize Average MTBF( [2500, 5000, 7500, 11000] )
	)
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
plot = obj << Mean Time Between Failures Plot;
plot << Options(
	Sample MTBF Type( "Customized Average MTBF" ),
	Customize Average MTBF( [2500, 5000, 7500, 11000] )
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

### Fixed Parameter Crow AMSAA

**Sintaxis:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Crow AMSAA de parámetro fijo en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

### Interval Size

**Sintaxis:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) )

**Descripción:** Especifica el tamaño del intervalo que se utiliza para calcular el tiempo medio entre fallas (MTBF).

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) );

```

### Mean Time Between Failures Plot

**Sintaxis:** obj << Mean Time Between Failures Plot( ... );

scrobj = obj << Mean Time Between Failures Plot

**Descripción:** Le permite mostrar u ocultar modelos en el gráfico de tiempo medio entre fallas. Si se especifica sin ningún argumento, esta opción devuelve una referencia al gráfico que admite scripts.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Crow AMSAA( 0 );

```

### Options

**Sintaxis:** obj << Mean Time Between Failures( Options( ... ) );

scrobj << Options( ... )

**Descripción:** Le permite configurar el gráfico de tiempo medio entre fallas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

### Piecewise Weibull NHPP

**Sintaxis:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP por tramos en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

### Piecewise Weibull NHPP Change Point Detection

**Sintaxis:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP reinicializado en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

### Reinitialized Weibull NHPP

**Sintaxis:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**Descripción:** Muestra u oculta el modelo Weibull NHPP reinicializado en el gráfico Sucesos acumulativos o Tiempo medio entre fallas. Opción activada de forma predeterminada.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

### Sample MTBF Type

**Sintaxis:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) )

**Descripción:** Especifica el método de cálculo para el gráfico de tiempo medio entre fallas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

## Reliability Growth Report

### Show Cumulative Events Plot

**Sintaxis:** scrobj << Show Cumulative Events Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de sucesos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

### Show Intensity Plot

**Sintaxis:** scrobj << Show Intensity Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de intensidad.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

### Show MTBF Plot

**Sintaxis:** scrobj << Show MTBF Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de tiempo medio entre fallas (MTBF). Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

### Show Profilers

**Sintaxis:** scrobj << Show Profilers( state=0|1 )

**Descripción:** Muestra u oculta los perfiladores para el tiempo medio entre fallas (MTBF), la intensidad de falla y los eventos acumulativos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Copy Script;

```

### Crow AMSAA

**Sintaxis:** obj << Crow AMSAA

**Descripción:** Ajusta un modelo Crow AMSAA. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Crow AMSAA with Modified MLE

**Sintaxis:** obj << Crow AMSAA with Modified MLE

**Descripción:** Ajusta un modelo Crow AMSAA con corrección de sesgo para beta. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA with Modified MLE;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Data Table Window;

```

### Distinct Phase Weibull NHPP

**Sintaxis:** obj << Distinct Phase Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP de fase distinta, en el que cada sistema de un estudio multifásico sigue el mismo modelo Crow AMSAA en cada fase. Este modelo contiene un parámetro beta y un parámetro lambda para cada fase. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Phase Weibull NHPP;

```

### Distinct System Weibull NHPP

**Sintaxis:** obj << Distinct System Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP de sistema distinto, en el que cada sistema del estudio sigue un modelo Crow AMSAA independiente con parámetros distintos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Distinct System Weibull NHPP;

```

### Distinct Weibull NHPP

**Sintaxis:** obj << Distinct Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP distinto, en el que cada sistema de un estudio multifásico sigue un modelo Crow AMSAA independiente en cada fase. Este modelo contiene un parámetro beta y un parámetro lambda para cada combinación de sistema y fase del estudio. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Weibull NHPP;

```

### Fixed Parameter Crow AMSAA

**Sintaxis:** obj << Fixed Parameter Crow AMSAA( <lambda ( number )>, <beta ( number )> )

**Descripción:** Ajusta un modelo Crow AMSAA de parámetro fijo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Fixed Parameter Crow AMSAA( lambda( .02 ) );

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

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Results

**Sintaxis:** obj << Get Results

**Descripción:** Devuelve una lista con nombre que contiene los resultados de la estimación del modelo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Show( obj << Get Results );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Identical System Weibull NHPP

**Sintaxis:** obj << Identical System Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP para sistemas idénticos, en el que cada sistema del estudio sigue un único modelo Crow AMSAA. Se asume que las diferencias entre los sistemas se deben a la aleatoriedad de las realizaciones individuales del mismo modelo. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Identical System Weibull NHPP;

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

### Piecewise Weibull NHPP

**Sintaxis:** obj << Piecewise Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP por tramos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
obj << Piecewise Weibull NHPP;

```

### Piecewise Weibull NHPP Change Point Detection

**Sintaxis:** obj << Piecewise Weibull NHPP Change Point Detection

**Descripción:** Estima un punto de cambio en los datos y ajusta un modelo Weibull NHPP por tramos. Esta opción no está disponible cuando se especifica una variable de fase. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
obj << Piecewise Weibull NHPP Change Point Detection;

```

### Piecewise Weibull NHPP with Different Intercepts

**Sintaxis:** obj << Piecewise Weibull NHPP with Different Intercepts

**Descripción:** Ajusta un modelo Weibull NHPP por tramos con distintas constantes, en el que cada sistema de un estudio multifásico sigue un modelo Weibull NHPP por tramos independiente. Este modelo contiene un parámetro beta para cada fase y un parámetro lambda para cada sistema. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
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

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Redo Analysis;

```

### Reinitialized Weibull NHPP

**Sintaxis:** obj << Reinitialized Weibull NHPP

**Descripción:** Ajusta un modelo Weibull NHPP reinicializado. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
obj << Reinitialized Weibull NHPP;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Relaunch Analysis;

```

### Reliability Growth

**Sintaxis:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**Descripción:** Modela el cambio de confiabilidad de un único sistema reparable con el tiempo a medida que se incorporan mejoras a su diseño. La plataforma acepta varios formatos de entrada. Consulte cada formato para detalles de especificación.

**Fechas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

**Sistemas concurrentes**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**Sistemas paralelos**

```js

Names Default To Here( 1 );
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

**Tiempo hasta suceso**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

