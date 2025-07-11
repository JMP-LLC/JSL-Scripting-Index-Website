# Gaussian Process Model



### Bayesian Optimization

**Sintaxis:** Bayesian Optimization( Y( column ), X( columns ) )

**Descripción:** Modela la relación entre una respuesta continua y uno o más predictores continuos como un spline con interpolación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/2D PUT EXAMPLE FILE HERE" );
obj = dt << Bayesian Optimization( Y( :Y ), X( :X1, :X2 ) );

```

### Copy Model Fit Script

**Sintaxis:** obj << Copy Model Fit Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

### Intercept

**Sintaxis:** obj << Intercept( number )

### Nugget

**Sintaxis:** obj << Nugget( number )

### Profiler

**Sintaxis:** obj << Profiler( state=0|1 )

**Descripción:** Explora el modo en que cambia cada columna con respecto a los cambios del valor de cada factor entre modelos.

### Residual

**Sintaxis:** obj << Residual( number )

### Save Model Fit Script to Data Table

**Sintaxis:** obj << Save Model Fit Script to Data Table

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

### Save Model Fit Script to Journal

**Sintaxis:** obj << Save Model Fit Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

### Save Model Fit Script to Report

**Sintaxis:** obj << Save Model Fit Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

### Save Model Fit Script to Script Window

**Sintaxis:** obj << Save Model Fit Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

### Starting Values

**Sintaxis:** obj << Starting Values( number )

### Theta Values

**Sintaxis:** obj << Theta Values( number )

