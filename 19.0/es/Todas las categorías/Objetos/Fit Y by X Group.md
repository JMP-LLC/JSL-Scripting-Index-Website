# Fit Y by X Group



## Bivariate > Bivariate Curve

### Constructores asociados

#### Curve

**Sintaxis:** obj &lt;&lt; ( Curve[number] )

**Descripción:** Accede a una curva individual para distribuir más mensajes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), Fit Line );
obj << (curve[1] << Line of Fit( 1 ));
Wait( 1 );
obj << (curve[1] << Line of Fit( 0 ));

```

### Mensajes del elemento

#### Confid Curves Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**Descripción:** Muestra u oculta las curvas de confianza para la línea ajustada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Descripción:** Muestra u oculta las curvas de confianza para un valor predicho individual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Confid Shaded Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Fit( state=0|1 )} )

**Descripción:** Sombrea el área que se encuentra entre las curvas de confianza y la línea ajustada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Confid Shaded Fit( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Fit( 0 ));

```

#### Confid Shaded Indiv

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Shaded Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Shaded Indiv( state=0|1 )} )

**Descripción:** Sombrea el área que se encuentra entre las curvas de confianza para un valor predicho individual y la línea ajustada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv( 1 ), Confid Shaded Indiv( 1 )} );
Wait( 1 );
obj << (curve[1] << Confid Shaded Indiv( 0 ));

```

#### Indiv Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de una predicción individual que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**Descripción:** Cambia el color de línea de la línea ajustada, curvas de confianza y regiones de confianza sombreadas.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**Descripción:** Cambia el estilo de línea de la línea ajustada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**Descripción:** Cambia el ancho de línea de la línea ajustada y de cualquier curva de confianza.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**Descripción:** Muestra u oculta la línea de ajuste. Opción activada de forma predeterminada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de la respuesta media que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Plot Residuals

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Plot Residuals( state=0|1 ) ); obj &lt;&lt; Fit Name( {Plot Residuals( state=0|1 )} )

**Descripción:** Muestra u oculta cinco gráficos de diagnóstico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1, {Plot Residuals( 1 )} );
Wait( 1 );
obj << (curve[1] << Plot Residuals( 0 ));

```

#### Profiler

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Profiler( state=0|1 ) ); obj &lt;&lt; Fit Name( {Profiler( state=0|1 )} )

**Descripción:** Muestra u oculta un perfilador de predicción para el resultado seleccionado dado el predictor seleccionado y el modelo especificado.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Profiler( 1 )} );
Wait( 1 );
obj << (Curve[1] << Profiler( 0 ));

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Descripción:** Elimina la curva ajustada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**Descripción:** Muestra u oculta los informes para el resumen del ajuste, falta de ajuste y estimaciones de los parámetros. Opción activada de forma predeterminada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los valores predichos para la curva ajustada especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los valores residuales para la curva ajustada especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los residuos estudentizados para la curva ajustada especificada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**Descripción:** Cambia el nivel de significación utilizado para las curvas de confianza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

#### Set α Level

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Alpha Level( alpha ) ); obj &lt;&lt; Fit Name( {Set Alpha Level( alpha )} )

**Descripción:** Cambia el nivel de significación utilizado para las curvas de confianza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 ), Set Alpha Level( 0.001 )} );
obj << Fit Polynomial( 2, {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << (curve[2] << Set Alpha Level( 0.01 ));

```

## Bivariate > Bivariate Nonpar Density

### Mensajes del elemento

#### 5% Contours

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; "5% Contours"n( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {"5% Contours"n( state=0|1 )} )

**Descripción:** Muestra u oculta las líneas de contorno al 5%. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {"5% Contours"n( 0 )} );
Wait( 1 );
obj << (curve[1] << "5% Contours"n( 1 ));

```

#### Color By Density Quantile

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color By Density Quantile ); obj &lt;&lt; Nonpar Density( {Color by Density Quantile} )

**Descripción:** Colorea los puntos y las filas en función de la densidad.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
Wait( 1 );
obj << (curve[1] << Color By Density Quantile);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color By Density Quantile} );

```

#### Color Theme

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Color Theme( "theme"(state=0|1 ) ) ); obj &lt;&lt; Nonpar Density( {Color Theme( "theme"( state=0|1 ) )} )

**Descripción:** Establece el tema de color para las líneas de contorno de la densidad de cuantil.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Color Theme( "Jet"(1) ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Color Theme( "White to Black"(1) )} );

```

#### Contour Fill

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Fill( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Fill( state=0|1 )} )

**Descripción:** Muestra u oculta los contornos rellenos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density( {Contour Lines( 0 )} ) );
obj << (curve[1] << Contour Fill( 1 ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Fill( 1 )} );

```

#### Contour Lines

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Contour Lines( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Contour Lines( state=0|1 )} )

**Descripción:** Muestra u oculta las líneas de contorno. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Contour Lines( 0 )} );
Wait( 1 );
obj << (curve[1] << Contour Lines( 1 ));

```

#### Kernel Control

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Kernel Control( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Kernel Control( state=0|1 )} )

**Descripción:** Muestra u oculta un control deslizante para controlar la desviación estándar de cada variable. La desviación estándar define el rango de los valores X e Y para determinar la densidad de las líneas de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 )} );
Wait( 1 );
obj << (curve[1] << Kernel Control( 0 ));

```

#### Mesh Plot

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mesh Plot( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Mesh Plot( state=0|1 )} )

**Descripción:** Muestra u oculta un gráfico tridimensional de la densidad sobre una cuadrícula de las dos variables de análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Mesh Plot( 1 )} );
Wait( 1 );
obj << (curve[1] << Mesh Plot( 0 ));

```

#### Modal Clustering

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Modal Clustering( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Modal Clustering( state=0|1 )} )

**Descripción:** Muestra u oculta los resultados de una conglomeración modal de los datos, que identifica las asignaciones de conglomerados en función de los contornos actuales. Esta opción también guarda los números de conglomerados en una nueva columna de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Modal Clustering( 1 )} );
Wait( 1 );
obj << (curve[1] << Modal Clustering( 0 ));

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Descripción:** Elimina la densidad no paramétrica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density();
Wait( 1 );
obj << (curve[1] << Remove Fit);

```

#### Report

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Nonpar Density( {Report( state=0|1 )} )

**Descripción:** Muestra u oculta el informe Contornos de densidad de cuantil. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Report( 0 )} );
Wait( 1 );
obj << (curve[1] << Report( 1 ));

```

#### Save Density Grid

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Grid ); obj &lt;&lt; Nonpar Density( {Save Density Grid} )

**Descripción:** Guarda las columnas en una nueva tabla de datos. Las columnas contienen las estimaciones de densidad y los cuantiles correspondientes.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Grid} );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Grid);

```

#### Save Density Quantile

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Density Quantile ); obj &lt;&lt; Nonpar( {Save Density Quantile} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene un valor que representa el cuantil de densidad que contiene cada punto.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Nonpar Density );
obj << (curve[1] << Save Density Quantile);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Save Density Quantile} );

```

#### Select Points by Density

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points by Density( lower probability, upper probability ) ); obj &lt;&lt; Nonpar Density( {Select Points by Density( lower probability, upper probability )} )

**Descripción:** Selecciona puntos entre las probabilidades inferior y superior especificadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Select Points by Density( 0.2, 0.5 )} );
Wait( 1 );
obj << (curve[1] << Select Points by Density( 0.8, 1 ));

```

#### Set Kernel

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Set Kernel( xStdDev, yStdDev )); obj &lt;&lt; Nonpar Density( {Set Kernel( xStdDev, yStdDev )} )

**Descripción:** Establece las desviaciones estándar del kernel para los valores X e Y.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density( {Kernel Control( 1 ), Set Kernel( 8.537, 1.7333 )} );
Wait( 1 );
obj << (curve[1] << Set Kernel( 8, 1 ));

```

## Bivariate > Bivariate Normal Ellipse

### Mensajes del elemento

#### Confid Curves Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Fit( state=0|1 )} )

**Descripción:** Muestra u oculta las curvas de confianza para la línea ajustada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Fit( 1 )} );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Confid Curves Indiv

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Confid Curves Indiv( state=0|1 ) ); obj &lt;&lt; Fit Name( {Confid Curves Indiv( state=0|1 )} )

**Descripción:** Muestra u oculta las curvas de confianza para un valor predicho individual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Indiv( 1 )} ) );
Wait( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Indiv( 1 ));

```

#### Indiv Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Indiv Confidence Limit Formula( &lt;alpha&gt; ) )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de una predicción individual que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Indiv Confidence Limit Formula( .001 ));
Wait( 1 );
obj << Fit Line( {Indiv Confidence Limit Formula( 0.01 )} );

```

#### Line Color

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Color( "color" ) ); obj &lt;&lt; Fit Name( {Line Color( "color" )} ) obj &lt;&lt; Density Ellipse( {Line Color( "color" )} )

**Descripción:** Cambia el color de línea de la línea ajustada, curvas de confianza y regiones de confianza sombreadas.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Confid Curves Indiv, Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Line Color( "Medium Dark BlueGreen" )} );
Wait( 1 );
obj << (curve[1] << Line Color( "black" ));

```

#### Line Style

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Style( "pen style" ) ); obj &lt;&lt; Fit Name( {Line Styel( "pen style" )} ) obj &lt;&lt; Density Ellipse( {Line Style( "pen style" )} )

**Descripción:** Cambia el estilo de línea de la línea ajustada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line( {Confid Curves Fit} ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Fit Polynomial( 3, {Line Style( "Dense Dash" )} );

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line Style( "DashDot" ));
obj << Density Ellipse( 0.90, {Line Style( "Dense Dash" )} );

```

#### Line Width

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line Width( number ) ); obj &lt;&lt; Fit Name( {Line Width( number )} ) obj &lt;&lt; Density Ellipse( {Line Width( number )} )

**Descripción:** Cambia el ancho de línea de la línea ajustada y de cualquier curva de confianza.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.99, {Line Width( 3 )} );
Wait( 1 );
obj << (curve[1] << Line Width( 1 ));

```

#### Line of Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Line of Fit( state=0|1 ) ); obj &lt;&lt; Fit Name( {Line of Fit( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Line of Fit( state=0|1 )} )

**Descripción:** Muestra u oculta la línea de ajuste. Opción activada de forma predeterminada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Line );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Fit Polynomial( 3, {Line of Fit( 0 )} );

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Density Ellipse( 0.95 ) );
Wait( 1 );
obj << (Curve[1] << Line of Fit( 0 ));
obj << Density Ellipse( 0.90, {Line of Fit( 0 )} );

```

#### Mean Confidence Limit Formula

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Mean Confidence Limit Formula( &lt;alpha&gt; ) ); obj &lt;&lt; Fit Name( {Mean Confidence Limit Formula( &lt;alpha&gt; ) )

**Descripción:** Guarda las columnas de la nueva fórmula en la tabla de datos original. Hay columnas para los límites de confianza inferior y superior de la respuesta media que son funciones de los regresores. El nivel predeterminado para alfa es 0,05, que genera límites de confianza al 95%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Mean Confidence Limit Formula( .01 ));
Wait( 1 );
obj << Fit Line( {Mean Confidence Limit Formula( 0.05 )} );

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Remove Fit )

**Descripción:** Elimina la curva ajustada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );
obj << Density Ellipse( 0.90 );
Wait( 1 );
obj << (Curve[2] << Remove Fit);

```

#### Report

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Report( state=0|1 ) ); obj &lt;&lt; Fit Name( {Report( state=0|1 )} ) obj &lt;&lt; Density Ellipse( {Report( state=0|1 )} )

**Descripción:** Muestra u oculta los informes para el resumen del ajuste, falta de ajuste y estimaciones de los parámetros. Opción activada de forma predeterminada.

**Ejemplo de curva**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

**Ejemplo de elipse normal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95, {Report( 0 )} );
Wait( 1 );
obj << (Curve[1] << Report( 1 ));

```

#### Save Predicteds

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Predicteds ); obj &lt;&lt; Fit Name( {Save Predicteds} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los valores predichos para la curva ajustada especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3, {Save Predicteds} );
Wait( 1 );
obj << Fit Line( 1 );
obj << (curve[2] << Save Predicteds);

```

#### Save Residuals

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Residuals ); obj &lt;&lt; Fit Name( {Save Residuals} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los valores residuales para la curva ajustada especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Residuals);
Wait( 1 );
obj << Fit Line( {Save Residuals} );

```

#### Save Studentized Residuals

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Save Studentized Residuals ); obj &lt;&lt; Fit Name( {Save Studentized Residuals} )

**Descripción:** Guarda una nueva columna en la tabla de datos original. La columna contiene los residuos estudentizados para la curva ajustada especificada.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Fit Polynomial( 3 ) );
obj << (Curve[1] << Save Studentized Residuals);
Wait( 1 );
obj << Fit Line( {Save Studentized Residuals} );

```

#### Select Points Inside

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Inside ); obj &lt;&lt; Density Ellipse( {Select Points Inside} )

**Descripción:** Selecciona puntos dentro de la elipse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.95, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Inside);
Wait( 1 );
obj << Density Ellipse( 0.8, {Select Points Inside} );

```

#### Select Points Outside

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Select Points Outside ); obj &lt;&lt; Density Ellipse( {Select Points Outside} )

**Descripción:** Selecciona puntos fuera de la elipse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate(
	Y( :Weight ),
	X( :Height ),
	Density Ellipse( 0.8, {Line Color( {213, 72, 87} )} ),

);
obj << (curve[1] << Select Points Outside);
Wait( 1 );
obj << Density Ellipse( 0.95, {Select Points Outside} );

```

#### Shaded Contour

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; Shaded Contour( state=0|1 ) ); obj &lt;&lt; Density Ellipse( {Shaded Contour( state=0|1 )} )

**Descripción:** Muestra u oculta el contorno sombreado.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ), );
obj << Density Ellipse( 0.95, {Shaded Contour( 1 )} );
Wait( 1 );
obj << (Curve[1] << Shaded Contour( 0 ));

```

## Bivariate

### Columnas

#### By

**Sintaxis:** obj = Bivariate(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );

```

#### Freq

**Sintaxis:** obj = Bivariate(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Freq( _freqcol ) );

```

#### Regressor

**Sintaxis:** obj = Bivariate(...Regressor( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización continua.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Response

**Sintaxis:** obj = Bivariate(...Response( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o las variables de respuesta continua que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Weight

**Sintaxis:** obj = Bivariate(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Bivariate( Y( :Weight ), X( :Height ), Weight( _weightcol ) );

```

#### X

**Sintaxis:** obj = Bivariate(...X( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización continua.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

#### Y

**Sintaxis:** obj = Bivariate(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o las variables de respuesta continua que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Constructores asociados

#### Bivariate

**Sintaxis:** Bivariate( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta continua con respecto a otra variable continua. Algunos métodos de análisis son ajuste de líneas, polinomiales, splines y densidades bivariantes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Mensajes del elemento

#### Curve

**Sintaxis:** obj &lt;&lt; ( Curve[number] &lt;&lt; option )

**Descripción:** Arreglo de asideros para las líneas ajustadas. Esto le permite enviar mensajes de Curva bivariante a las curvas específicas que se hayan ajustado.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
obj << Fit Polynomial( 3 );
obj << (curve[2] << Confid Curves Fit( 1 ));

```

#### Density Ellipse

**Sintaxis:** obj &lt;&lt; Density Ellipse( percent )

**Descripción:** Ajusta un contorno bivariante normal. El contorno contiene el porcentaje de puntos de datos totales especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Density Ellipse( 0.95 );

```

#### Fit Cauchy

**Sintaxis:** obj &lt;&lt; Fit Cauchy

**Descripción:** Ajusta un modelo de regresión robusto en el que los parámetros se estiman mediante la máxima verosimilitud con una función de enlace de Cauchy.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Cauchy;

```

#### Fit Each Value

**Sintaxis:** obj &lt;&lt; Fit Each Value

**Descripción:** Ajusta una línea que pasa por el valor Y medio de cada conjunto de valores X unívocos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Each Value;

```

#### Fit Line

**Sintaxis:** obj &lt;&lt; Fit Line

**Descripción:** Ajusta un modelo de regresión por mínimos cuadrados a los datos. Se muestra la línea de ajuste en el gráfico y se genera un informe de ajuste.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line;

```

#### Fit Mean

**Sintaxis:** obj &lt;&lt; Fit Mean

**Descripción:** Ajusta la media de la variable de respuesta Y. En el gráfico se muestra una línea plana con una pendiente igual a cero.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Mean;

```

#### Fit Orthogonal

**Sintaxis:** obj &lt;&lt; Fit Orthogonal( Univariate Variances|Equal Variances|Fit X to Y|Specified Variance Ratio(number) )

**Descripción:** Ajusta el modelo de regresión ortogonal especificado. Los modelos de regresión ortogonales son útiles cuando tanto la variable X como la Y se miden con error. El argumento Razón de varianza especificada le permite especificar la razón de la varianza del error en la variable X con respecto al error de la variable Y.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Orthogonal( Fit X to Y );

```

#### Fit Passing Bablok

**Sintaxis:** obj &lt;&lt; Fit Passing Bablok

**Descripción:** Ajusta un modelo de regresión utilizando el procedimiento Passing-Bablok, que resulta útil cuando tanto la variable X como la Y se miden con error.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Passing Bablok;

```

#### Fit Polynomial

**Sintaxis:** obj &lt;&lt; Fit Polynomial( degree of model )

**Descripción:** Ajusta una curva polinomial del grado especificado utilizando la regresión por mínimos cuadrados.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Polynomial( 3 );

```

#### Fit Robust

**Sintaxis:** obj &lt;&lt; Fit Robust

**Descripción:** Ajusta un modelo de regresión utilizando el método de estimación M de Huber, que es robusto con respecto a los valores atípicos. La función de pérdida de Huber penaliza los valores atípicos y aumenta como función cuadrática para los errores pequeños y como función lineal para los errores grandes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Robust;

```

#### Fit Special

**Sintaxis:** obj &lt;&lt; Fit Special( xTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), yTran( "Log"|"Square Root"|"Square"|"Reciprocal"|"Exponential" ), &lt;Intercept( number )&gt;, &lt;Slope( number )&gt;, &lt;Degree( degree )&gt;, Centered Polynomial&gt; )

**Descripción:** Ajusta un modelo de regresión que contiene transformaciones para las variables X e Y. También puede especificar restricciones en la pendiente y la constante, así como ajustar modelos polinomiales utilizando el argumento de grado.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Special( xTran( "Log" ) );
obj << Fit Special( xTran( "Square" ), yTran( "Reciprocal" ), Intercept( 0 ) );

```

#### Fit Spline

**Sintaxis:** obj &lt;&lt; Fit Spline( lambda, &lt;Standardized&gt; )

**Descripción:** Ajusta un modelo de mínimos cuadrados penalizado a los datos, en el que el parámetro de alisado, lambda, determina el grado de alisado para el ajuste del modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Spline( 341.1929, Standardized );
obj << Fit Spline( 341.1929 );

```

#### Fit Where

**Sintaxis:** obj &lt;&lt; Fit Where( column == level, command )

**Descripción:** Ajusta una curva a un único nivel de una variable categórica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :weight ), X( :height ) );
obj << Fit Where( :sex == "F", Fit Line( 1 ) );

```

#### Group By

**Sintaxis:** obj &lt;&lt; Group By( column )

**Descripción:** Especifica una variable de agrupación. Una vez especificada dicha variable, todos los análisis se llevan a cabo de forma independiente para cada nivel de la variable de agrupación.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Group By( :drug );
obj << Fit Line;

```

#### Histogram Borders

**Sintaxis:** obj &lt;&lt; Histogram Borders( state=0|1 )

**Descripción:** Muestra u oculta los histogramas en los ejes vertical y horizontal del gráfico de dispersión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Histogram Borders( 1 );

```

#### Kernel Smoother

**Sintaxis:** obj &lt;&lt; Kernel Smoother( lambda = 0|1|2, weight = 1|2|3|4|5, alpha, robust passes = 0|1|2|3|4, delta proportion )

**Descripción:** Aplica un ajuste local en los subconjuntos repetidos de los datos en los que el rango de los subconjuntos viene determinado por alfa, el alisado del ajuste por lambda y el peso por la función de ponderación. Los valores atípicos se ponderan a la baja a medida que aumenta la robustez. Este método también se conoce como método de alisado LOESS.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Bivariate( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Kernel Smoother( 1, 1, 0.84615, 0 );

```

#### Nonpar Density

**Sintaxis:** obj &lt;&lt; Nonpar Density

**Descripción:** Ajusta contornos de densidad bivariante no paramétrica y dibuja los contornos correspondientes en el gráfico. Los contornos se encuentran a intervalos del 5%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Nonpar Density;

```

#### Paired t test

**Sintaxis:** obj &lt;&lt; Paired t test

**Descripción:** Ejecuta una prueba t pareada, genera el informe y muestra una línea gris de 45 grados en el gráfico de dispersión para representar el lugar en el que las dos columnas son iguales.



Esta opción se ha promovido a la plataforma Pares pareados. También se puede acceder a esta opción desde el menú Bivariante si se mantiene pulsada la tecla Mayús.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Bivariate( Y( :LogHist1 ), X( :LogHist0 ) );
obj << Paired t test;

```

#### Points Jittered

**Sintaxis:** obj &lt;&lt; Points Jittered( "Ninguno"|"Automático"|"Uniforme aleatoria"|"Normal aleatoria"|"Densidad aleatoria"|"Empaquetado"|"Cuadrícula"|"Cuadrícula hexagonal"|"Enjambre"="Automático" )

**Descripción:** Especifica la extensión de los puntos de datos. Cuando se selecciona, los puntos de datos se esparcen para evitar que los marcadores se solapen. "Automático" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Sepal width ) );
obj << Points Jittered( "Random Normal" );

```

#### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos en el gráfico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Fit Line( 1 );
Wait( 1 );
obj << Show Points( 0 );

```

#### Summary Statistics

**Sintaxis:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Descripción:** Muestra u oculta tablas de estadísticos de resumen.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Summary Statistics( 1 );

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bivariate( Y( :Weight ), X( :Height ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Bivariate(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Contingency > Analysis of Means for Proportions

### Mensajes del elemento

#### Point Options

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico Análisis de medias para proporciones. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con unas agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central para el Análisis de medias en el gráfico Proporciones. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico Análisis de medias para proporciones. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico Análisis de medias para proporciones. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las proporciones de respuesta y los límites de decisión para cada nivel de la variable X. El informe también indica si se ha superado un límite.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

#### Switch Response Level for Proportion

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( 1, Switch Response Level for Proportion( state=0|1 ) );scrobj &lt;&lt; Switch Response Level for Proportion( state=0|1 )

**Descripción:** Cambia la categoría de respuesta utilizada en el análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = Contingency( Y( :marital status ), X( :type ) );
obj << Analysis of Means for Proportions( 1, Switch Response Level for Proportion( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Proportions"] << Get Scriptable Object;
scrobj << Switch Response Level for Proportion( 0 );

```

## Contingency > Contingency Equivalence Tests

### Mensajes del elemento

#### Forest Plot

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de bosque Pruebas de equivalencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Remove

**Sintaxis:** scobj &lt;&lt; Remove

**Descripción:** Quita todo el informe Pruebas de equivalencia.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Test Report

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que resume las pruebas de equivalencia, pruebas de superioridad o pruebas de no inferioridad para las diferencias de riesgo o razones de riesgo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests for the Risk Difference"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Contingency > Contingency Table

### Mensajes del elemento

#### Cell Chi Square

**Sintaxis:** obj &lt;&lt; Contingency Table( Cell Chi Square( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta la contribución individual de las celdas al estadístico ji cuadrado en la tabla de contingencia.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Cell Chi Square( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Cell Chi Square( 1, Format( "Fixed Dec", 8, 5 ) ) );

```

#### Col %

**Sintaxis:** obj &lt;&lt; Contingency Table( Col %( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta la contribución porcentual de cada celda a la columna en la tabla de contingencia. Opción activada de forma predeterminada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 0 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Col %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Col Cum

**Sintaxis:** obj &lt;&lt; Contingency Table( Col Cum( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el total acumulado por columnas en la tabla de contingencia.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Col Cum %

**Sintaxis:** obj &lt;&lt; Contingency Table( Col Cum %( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el porcentaje acumulado por columnas en la tabla de contingencia.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Col Cum %( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Col Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Count

**Sintaxis:** obj &lt;&lt; Contingency Table( Count( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el conteo de celdas en la tabla de contingencia. Opción activada de forma predeterminada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 0 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Count( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Deviation

**Sintaxis:** obj &lt;&lt; Contingency Table( Deviation( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta la desviación individual de la celda en la tabla de contingencia. La desviación individual de la celda esperada es el conteo de celdas real menos el conteo de celdas esperado.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Deviation( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Deviation( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Expected

**Sintaxis:** obj &lt;&lt; Contingency Table( Expected( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el conteo de celdas esperado en la tabla de contingencia. El conteo de celdas esperado es el producto del total de filas y el total de columnas correspondientes dividido por el total global.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Expected( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Expected( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Make Into Data Table

**Sintaxis:** obj &lt;&lt; Contingency Table( Make Into Data Table )

**Descripción:** Crea una tabla de datos que contiene los datos de las tablas cruzadas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Contingency( Y( :Age ), X( :sex ), Contingency Table( Make into Data Table ) );

```

#### Row %

**Sintaxis:** obj &lt;&lt; Contingency Table( Row %( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta la contribución porcentual de cada celda a la fila en la tabla de contingencia. Opción activada de forma predeterminada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 0 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Row %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

#### Row Cum

**Sintaxis:** obj &lt;&lt; Contingency Table( Row Cum( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el total acumulado por filas en la tabla de contingencia.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Row Cum %

**Sintaxis:** obj &lt;&lt; Contingency Table( Row Cum %( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el porcentaje acumulado por filas en la tabla de contingencia.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Contingency Table( Total %( 0 ), Col %( 0 ), Row %( 0 ), Row Cum %( 1 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table(
	Total %( 0 ),
	Col %( 0 ),
	Row %( 0 ),
	Row Cum %( 1, Format( "Fixed Dec", 7, 1 ) )
);

```

#### Total %

**Sintaxis:** obj &lt;&lt; Contingency Table( Total %( state=0|1, &lt;Format(...)&gt; ) )

**Descripción:** Muestra u oculta el porcentaje total de celdas en la tabla de contingencia. Opción activada de forma predeterminada.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 0 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( Total %( 1, Format( "Fixed Dec", 7, 1 ) ) );

```

## Contingency > Correspondence Analysis

### Mensajes del elemento

#### 3D Correspondence Analysis

**Sintaxis:** obj &lt;&lt; Correspondence Analysis( "3D Correspondence Analysis"( state=0|1 ) )

**Descripción:** Muestra u oculta un gráfico de dispersión tridimensional.

```jsl

dt = Open( "$SAMPLE_DATA/Cars 1993.jmp" );
obj = Contingency(
	Y( :Vehicle Category ),
	X( :Manufacturer ),
	Contingency Table( 0 ),
	Tests( 0 )
);
Wait( 1 );
obj << Correspondence Analysis( "3D Correspondence Analysis"(1) );

```

#### Make Table

**Sintaxis:** obj &lt;&lt; Correspondence Analysis( "Make Table" )

**Descripción:** Crea una tabla de datos que contiene la salida del análisis de correspondencias.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Make Table" );

```

#### Save Value Order

**Sintaxis:** obj &lt;&lt; Correspondence Analysis( "Save Value Order" )

**Descripción:** Guarda una propiedad de la columna Ordenación de valores en las columnas de las variables X e Y de la tabla de datos. La propiedad de columna especifica el orden de los niveles en función del primer coeficiente de puntuación de la correspondencia.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( "Save Value Order" );

```

## Contingency

### Columnas

#### Block

**Sintaxis:** obj = Contingency(...&lt;Block( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una variable de bloques. Esto identifica un segundo factor y realiza una prueba de Cochran-Mantel-Haenszel.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :marital status ), X( :type ), Block( :sex ) );

```

#### By

**Sintaxis:** obj = Contingency(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );

```

#### Freq

**Sintaxis:** obj = Contingency(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Freq( _freqcol ) );

```

#### Grouping Category

**Sintaxis:** obj = Contingency(...Grouping Category( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización ordinal o nominal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Response Category

**Sintaxis:** obj = Contingency(...Response Category( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o variables de respuesta categórica que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Weight

**Sintaxis:** obj = Contingency(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Contingency( Y( :Age ), X( :sex ), Weight( _weightcol ) );

```

#### X

**Sintaxis:** obj = Contingency(...X( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización ordinal o nominal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

#### Y

**Sintaxis:** obj = Contingency(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o variables de respuesta categórica que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Constructores asociados

#### Contingency

**Sintaxis:** Contingency( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta categórica de un conjunto de grupos categóricos. Algunos métodos de análisis son las pruebas de ji cuadrado y los gráficos en mosaico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Mensajes del elemento

#### Agreement Statistic

**Sintaxis:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene estadísticos para medir la concordancia entre niveles. El informe incluye el estadístico Kappa, así como el error estándar, el intervalo de confianza y la prueba de hipótesis para el estadístico. El informe también incluye la prueba de simetría de Bowker, también conocida como prueba de McNemar. Esta opción solo está disponible cuando las variables X e Y tienen los mismos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 ),
	Agreement Statistic( 1 )
);

```

#### Analysis of Means for Proportions

**Sintaxis:** obj &lt;&lt; Analysis of Means for Proportions( state=0|1, &lt;chart options&gt; )

**Descripción:** Muestra u oculta un gráfico de decisión del análisis de medias para proporciones (ANOMP) que compara proporciones grupales. ANOMP es un procedimiento de comparación múltiple que compara las proporciones de respuesta para los niveles de la variable X con la proporción de respuesta general. Esta opción solo está disponible cuando la variable Y tiene dos niveles exactamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency(
	Y( :marital status ),
	X( :type ),
	Analysis of Means for Proportions( 1 )
);

```

#### Cochran Armitage Trend Test

**Sintaxis:** obj &lt;&lt; Cochran Armitage Trend Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba para tendencias en proporciones binomiales entre niveles de una única variable. Esta opción solo está disponible cuando una variable tiene dos niveles exactamente y la otra variable es ordinal.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :size ), X( :sex ), Mosaic Plot( 0 ) );
obj << Cochran Armitage Trend Test( 1 );

```

#### Cochran Mantel Haenszel

**Sintaxis:** obj &lt;&lt; Cochran Mantel Haenszel( column );obj &lt;&lt; Cochran Mantel Haenszel( state=0|1 )

**Descripción:** Muestra u oculta una prueba que determina si hay una relación entre dos variables categóricas después de bloquear una tercera variable de clasificación.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.JMP" );
obj = dt << Contingency( Y( :type ), X( :marital status ) );
obj << Cochran Mantel Haenszel( :country );
Wait( 2 );
obj << Cochran Mantel Haenszel( 0 );

```

#### Contingency Table

**Sintaxis:** obj &lt;&lt; Contingency Table( state=0|1 )

**Descripción:** Muestra u oculta una tabla de frecuencia de dos vías. La tabla contiene una fila para cada nivel de la variable X y una columna para cada nivel de la variable Y. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Contingency Table( 0 );

```

#### Correspondence Analysis

**Sintaxis:** obj &lt;&lt; Correspondence Analysis( state=0|1 );obj &lt;&lt; Correspondence Analysis( correspondence chart options )

**Descripción:** Muestra u oculta un análisis de correspondencia que identifica las filas o columnas de una tabla de frecuencia que tengan patrones de conteo similares. En el gráfico Análisis de correspondencias, aparece un punto para cada fila y para cada columna de la tabla de contingencia.

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Contingency( Y( :Fiber Gr ), X( :Manufacturer ) );
obj << Correspondence Analysis( 1 );

```

#### Equivalence Tests of Relative Risk

**Sintaxis:** obj &lt;&lt; Equivalence Tests of Relative Risk( ratio, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**Descripción:** Prueba que los riesgos relativos no difieran más de una razón definida como prácticamente equivalente. Es lo contrario de la prueba de significación habitual. Alfa, el tipo de prueba y los niveles de grupo son argumentos opcionales. El argumento del tipo de prueba es "Equivalencia" de forma predeterminada, pero también puede utilizarse para especificar pruebas de superioridad o no inferioridad.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Relative Risk(
		0.8,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Equivalence Tests of Risk Difference

**Sintaxis:** obj &lt;&lt; Equivalence Tests of Risk Difference( difference, &lt;alpha=.05&gt;, &lt;test type&gt;, &lt;Response Group( level )&gt;, &lt;Factor Group( level )&gt; )

**Descripción:** Prueba que las diferencias de riesgo no difieran más de una cantidad (diferencia) definida como prácticamente equivalente. Es lo contrario de la prueba de significación habitual. Alfa, el tipo de prueba y los niveles de grupo son argumentos opcionales. El argumento del tipo de prueba es "Equivalencia" de forma predeterminada, pero también puede utilizarse para especificar pruebas de superioridad o no inferioridad.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( Count( 1 ), Total %( 0 ), Col %( 0 ), Row %( 1 ) ),
	Equivalence Tests of Risk Difference(
		0.1,
		0.05,
		"Equivalence",
		Response Group( "Cancer" ),
		Factor Group( "NonSmoker" )
	)
);

```

#### Exact Agreement Statistic

**Sintaxis:** obj &lt;&lt; Exact Agreement Statistic( state=0|1 )

**Descripción:** Muestra u oculta la versión exacta del estadístico de concordancia Kappa.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Agreement Statistic( 1 );

```

#### Exact Cochran Armitage Trend Test

**Sintaxis:** obj &lt;&lt; Exact Cochran Armitage Trend Test( state=0|1 )

**Descripción:** Muestra u oculta la versión exacta de la prueba de tendencia de Cochran-Armitage.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Contingency(
	Y( :Second Survey ),
	X( :First Survey ),
	Freq( :Count ),
	Tests( 0 )
);
obj << Exact Cochran Armitage Trend Test( 1 );

```

#### Fisher's Exact Test

**Sintaxis:** obj &lt;&lt; Fisher&apos;s Exact Test( state=0|1 )

**Descripción:** Muestra u oculta la prueba exacta de Fisher para comprobar la asociación entre dos variables categóricas. Esta prueba no depende de ninguna suposición de distribución de muestras grandes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Fisher's Exact Test( 1 );

```

#### Horizontal Mosaic

**Sintaxis:** obj &lt;&lt; Horizontal Mosaic( state=0|1 )

**Descripción:** Gira el gráfico en mosaico de forma horizontal (1) o vertical (0).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
Wait( 2 );
obj << Horizontal Mosaic( 1 );

```

#### Jonckheere Terpstra Test

**Sintaxis:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de la prueba de Jonckheere-Terpstra, que es una prueba no paramétrica para las diferencias ordenadas entre clases. Prueba la hipótesis nula de que la distribución de la variable respuesta no difiere entre clases.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
:height << Nominal( 1 );
obj = dt << Contingency(
	Y( :height ),
	X( :age ),
	Contingency Table(
		Count( 1 ),
		Total %( 0 ),
		Col %( 0 ),
		Row %( 0 ),
		Expected( 0 ),
		Deviation( 0 ),
		Cell Chi Square( 0 ),
		Col Cum( 0 ),
		Col Cum %( 0 ),
		Row Cum( 0 ),
		Row Cum %( 0 )
	)
);
obj << Jonckheere Terpstra Test( 1 );

```

#### Measures of Association

**Sintaxis:** obj &lt;&lt; Measures of Association( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene mediciones de la asociación entre las variables en la tabla de contingencia.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Measures of Association( 1 )
);

```

#### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta una representación gráfica de la tabla de contingencia. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Mosaic Plot( 0 );

```

#### Odds Ratio

**Sintaxis:** obj &lt;&lt; Odds Ratio( state=0|1 )

**Descripción:** Muestra u oculta un informe de la razón de posibilidades. Esta opción solo está disponible cuando las variables X e Y tienen dos niveles exactamente.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ), Odds Ratio( 1 ) );

```

#### Relative Risk

**Sintaxis:** obj &lt;&lt; Relative Risk( state=0|1, &lt;Y variable level, X variable level&gt; ); obj &lt;&lt; Relative Risk( state=0|1, &lt;"All"&gt; )

**Descripción:** Muestra u oculta el riesgo relativo entre los niveles de la respuesta. Esta opción solo está disponible cuando las variables X e Y tienen dos niveles exactamente.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "Cancer", "Smoker" );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Contingency Table( 0 )
);
obj << Relative Risk( 1, "All" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión. "0.05" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Set α Level

**Sintaxis:** obj &lt;&lt; Set α Level( alpha=0.05 )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión. "0.05" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
obj << Set Alpha Level( 0.1 );
obj << Measures of Association( 1 );

```

#### Tests

**Sintaxis:** obj &lt;&lt; Tests( state=0|1 )

**Descripción:** Muestra u oculta las pruebas que miden si las razones de nivel de respuesta son las mismas en todos los niveles de la variable X. Estas pruebas son análogas a la tabla Análisis de varianza para datos continuos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency( Y( :Lung Cancer ), X( :Smoker ), Freq( :Count ) );
Wait( 2 );
obj << Tests( 0 );

```

#### Two Sample Test for Proportions

**Sintaxis:** obj &lt;&lt; Two Sample Test for Proportions( state=0|1 )

**Descripción:** Muestra u oculta una prueba de dos muestras para las proporciones. Esta prueba compara las proporciones de la variable Y entre los dos niveles de la variable X. Esta opción solo está disponible cuando las variables X e Y tienen dos niveles exactamente.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );
obj = dt << Contingency(
	Y( :Lung Cancer ),
	X( :Smoker ),
	Freq( :Count ),
	Two Sample Test for Proportions( 1 )
);

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contingency( Y( :Age ), X( :sex ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Contingency( Y( :Age ), X( :sex ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Contingency(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Logistic

### Columnas

#### By

**Sintaxis:** obj = Logistic(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );

```

#### Categorical Response

**Sintaxis:** obj = Logistic(...Categorical Response( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o variables de respuesta categórica que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Continuous Regressor

**Sintaxis:** obj = Logistic(...Continuous Regressor( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización continua.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Freq

**Sintaxis:** obj = Logistic(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Weight

**Sintaxis:** obj = Logistic(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Weight( _weightcol )
);

```

#### X

**Sintaxis:** obj = Logistic(...X( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización continua.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

#### Y

**Sintaxis:** obj = Logistic(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica la variable o variables de respuesta categórica que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Constructores asociados

#### Logistic

**Sintaxis:** Logistic( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta categórica con respecto a una variable continua. Algunos de los métodos de análisis son regresión logística y curvas ROC.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Mensajes del elemento

#### Confidence Intervals

**Sintaxis:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**Descripción:** Muestra u oculta los intervalos de confianza en la tabla de estimaciones de los parámetros a la derecha de cada efecto.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Freq( :Count ), Y( :Response ), X( :"ln(dose)"n ) );
obj << Confidence Intervals( 0.01 );

```

#### Inverse Prediction

**Sintaxis:** obj &lt;&lt; Inverse Prediction( Response( prob1, prob2, ... ), &lt;Confidence Level( percent=0.95 )&gt;, &lt;Two sided|Lower One Sided|Upper One Sided&gt; )

**Descripción:** Le permite predecir valores de la variable predictora para uno o más valores de la variable de respuesta. De forma predeterminada, los límites de confianza al 95% bilaterales se calculan para cada predicción inversa.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Inverse Prediction( Response( 0.5, 0.9 ) );

```

#### Lift Curve

**Sintaxis:** obj &lt;&lt; Lift Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva Lift. Una curva lift representa la elevación frente a la porción de las observaciones y proporciona otra visión de la capacidad de predicción de un modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Lift Curve( 1 );

```

#### Line Color

**Sintaxis:** obj &lt;&lt; Line Color( color )

**Descripción:** Le permite seleccionar el color de las curvas del gráfico.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**Sintaxis:** obj &lt;&lt; Logistic Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico logístico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Logistic Plot( 0 );

```

#### Odds Ratios

**Sintaxis:** obj &lt;&lt; Odds Ratios( state=0|1 )

**Descripción:** Agrega o quita columnas que contienen razones de posibilidades en el informe Estimaciones de los parámetros.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**Sintaxis:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descripción:** Muestra u oculta el gráfico Curva de Precisión-Recuperación, que contiene una curva para cada nivel de la variable de respuesta. Una curva de precisión-recuperación representa los valores de precisión frente a los valores de recuperación a distintos umbrales.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << Precision Recall Curve( 1 );

```

#### ROC Curve

**Sintaxis:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva Característica operativa del receptor (ROC) de cada nivel de la variable de respuesta. La curva ROC es un gráfico de sensibilidad frente a (1 - especificidad).

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
Wait( 1 );
obj << ROC Curve( 1 );

```

#### Save Probability Formula

**Sintaxis:** obj &lt;&lt; Save Probability Formula

**Descripción:** Guarda nuevas columnas en la tabla de datos. Las nuevas columnas contienen la fórmula para la probabilidad que predice el modelo.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Save Probability Formula;

```

#### Show Points

**Sintaxis:** obj &lt;&lt; Show Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos del gráfico logístico. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**Sintaxis:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva de tasa en el gráfico logístico. La curva de tasa solo es útil si tiene varios puntos para cada valor de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Target Level

**Sintaxis:** obj = Logistic(...Target Level( level )...)

**Descripción:** Especifica el nivel de la respuesta cuya probabilidad quiera modelar.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic(
	Y( :Response ),
	X( :"ln(dose)"n ),
	Freq( :Count ),
	Target Level( "Cured" )
);
obj << ROC Curve( 1 );

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Oneway > ANOM for Ranges

### Mensajes del elemento

#### Point Options

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con las agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Point Options( "Show Connected Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Point Options( "Show Only Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (rango medio global). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico Análisis de las medias para los rangos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico Análisis de las medias para los rangos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene los rangos de grupo y los límites de decisión correspondientes.

```jsl

dt = Open( "$SAMPLE_DATA/Michelson.jmp" );
obj = dt << Oneway( Y( :Velocity ), X( :Trial# ) );
obj << ANOM for Ranges( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Ranges"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances with Levene(ADM)

### Mensajes del elemento

#### Point Options

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con unas agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (ADM de la media general). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico ANOMV-Levene (ADM). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico ANOMV-Levene (ADM). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las ADM de la media grupal y los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances-Levene(ADM)"] <<
Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM for Variances

### Mensajes del elemento

#### Graph in Variance Scale

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Graph in Variance Scale( state=0|1 ) );scrobj &lt;&lt; Graph in Variance Scale( state=0|1 )

**Descripción:** Especifica la escala del eje vertical. Puede elegir entre desviaciones estándar y varianzas.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Graph in Variance Scale( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Graph in Variance Scale( 0 );

```

#### Point Options

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con las agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (RMSE o MSE según la escala Y). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico ANOMV. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico ANOMV. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; ANOM for Variances( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene los límites de decisión y las desviaciones estándar (o varianzas) del grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means for Variances"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM with Transformed Ranks

### Mensajes del elemento

#### Point Options

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con las agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (media general). Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico ANOM-TR. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico ANOM-TR. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene los límites de decisión y los rangos transformados de la media grupal.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means-Transformed Ranks"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > ANOM

### Mensajes del elemento

#### Point Options

**Sintaxis:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) );scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**Descripción:** Especifica el estilo de dibujo de los puntos del gráfico. Puede escoger entre agujas verticales, puntos conectados y solo puntos. De forma predeterminada, el gráfico se dibuja con las agujas que conectan los puntos con la línea horizontal que se traza en la media.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Point Options( "Show Only Points" ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) );scrobj &lt;&lt; Set Alpha Level( alpha )

**Descripción:** Cambia el nivel de significación utilizado para calcular los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Set Alpha Level( 0.1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) );scrobj &lt;&lt; Show Center Line( state=0|1 )

**Descripción:** Muestra u oculta la línea central (media general) en el gráfico ANOM. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Center Line( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) );scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico ANOM. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limit Shading( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) );scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico ANOM. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Decision Limits( 0 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) );scrobj &lt;&lt; Show Summary Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene las medias grupales y los límites de decisión.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1, Show Summary Report( 1 ) );
Wait( 2 );
scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;
scrobj << Show Summary Report( 0 );

```

## Oneway > Oneway Equivalence Tests

### Mensajes del elemento

#### Forest Plot

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Forest Plot( state=0|1 ) );scobj &lt;&lt; Forest Plot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de bosque Pruebas de equivalencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Forest Plot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Forest Plot( 0 );

```

#### Pairwise Comparisons

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Equivalence Tests Pairwise Comparisons( state=0|1 ) );scobj &lt;&lt; Equivalence Tests Pairwise Comparisons( state=0|1 )

**Descripción:** Muestra u oculta el informe Comparaciones por pares de las pruebas de equivalencia para todas las comparaciones por pares.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Pairwise Comparisons( 0 );

```

#### Remove

**Sintaxis:** scobj &lt;&lt; Remove

**Descripción:** Quita todo el informe Pruebas de equivalencia.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests(
	4,
	0.05,
	"Pooled Variance",
	"Equivalence",
	Equivalence Tests Pairwise Comparisons( 1 )
);
Wait( 1 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
Wait( 1 );
scobj << Remove;

```

#### Scatterplot

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Scatterplot( state=0|1 ) );scobj &lt;&lt; Scatterplot( state=0|1 )

**Descripción:** Muestra u oculta el gráfico de dispersión de las pruebas de equivalencia. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Scatterplot( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Scatterplot( 0 );

```

#### Test Report

**Sintaxis:** obj &lt;&lt; Equivalence Tests( ..., Test Report( state=0|1 ) );scobj &lt;&lt; Test Report( state=0|1 )

**Descripción:** Muestra u oculta un informe que resume las pruebas de equivalencia, pruebas de superioridad o pruebas de no inferioridad para medias o desviaciones estándar. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.05, "Pooled Variance", "Equivalence", Test Report( 1 ) );
Wait( 2 );
scobj = (Report( obj )["Equivalence Tests with Pooled Variance"] << Get Scriptable Object);
scobj << Test Report( 0 );

```

## Oneway > Oneway Means Comparisons

### Mensajes del elemento

#### Confidence Quantile

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Best( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; With Control( 1, Confidence Quantile( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Confidence Quantile( state=0|1 ) )

**Descripción:** Muestra u oculta los valores críticos y el nivel de significación utilizado para la comparación de medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Confidence Quantile( 1 ) );

```

#### Connecting Letters Report

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Connecting Letters Report( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Connecting Letters Report( state=0|1 ) )

**Descripción:** Muestra u oculta el informe tradicional codificado por letras en el que las medias que no compartan una letra son significativamente distintas. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Connecting Letters Report( 1 ) );

```

#### Detailed Comparisons Report

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Detailed Comparisons Report( state=0|1 ) )

**Descripción:** Muestra u oculta un informe detallado para cada comparación. Cada sección muestra la diferencia entre los niveles, el error estándar y los intervalos de confianza, las razones t, los valores p y los grados de libertad. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Detailed Comparisons Report( 1 ) );

```

#### Difference Matrix

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, Difference Matrix( state=0|1 ) );obj &lt;&lt; Each Pair Stepwise( 1, Difference Matrix( state=0|1 ) )

**Descripción:** Muestra u oculta una tabla de todas las diferencias de las medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Difference Matrix( 1 ) );

```

#### Dunnett's Lower

**Sintaxis:** obj &lt;&lt; Dunnett&apos;s Lower( state=0|1 )

**Descripción:** Muestra u oculta una prueba t de Dunnett del extremo inferior de una cola, que analiza si las medias son inferiores a la media de un grupo de control.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Lower( 1 ) );

```

#### Dunnett's Upper

**Sintaxis:** obj &lt;&lt; Dunnett&apos;s Upper( state=0|1 )

**Descripción:** Muestra u oculta una prueba t de Dunnett del extremo superior de una cola, que analiza si las medias son superiores a la media de un grupo de control.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15}, Dunnett's Upper( 1 ) );

```

#### LSD Threshold Matrix

**Sintaxis:** obj &lt;&lt; Each Pair( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; All Pairs( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Best( 1, LSD Threshold Matrix( state=0|1 ) );obj &lt;&lt; With Control( 1, LSD Threshold Matrix( state=0|1 ) )

**Descripción:** Muestra u oculta una matriz de diferencias por pares de las medias menos la diferencia menos significativa de esas medias. Un valor positivo indica un par de medias que son significativamente distintas. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, LSD Threshold Matrix( 1 ) );

```

#### Ordered Differences Report

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; All Pairs( 1, Ordered Differences Report( state=0|1 ) )

**Descripción:** Muestra u oculta todas las diferencias del lado positivo por pares, el error estándar de la diferencia, los intervalos de confianza, los valores p y un gráfico de la magnitud de la diferencia con intervalos de confianza superpuestos. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1, Ordered Differences Report( 1 ) );

```

#### Ordered Ratio Report

**Sintaxis:** obj &lt;&lt; Each Pair( 1, Ordered Differences Report( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( state=0|1 ) )

**Descripción:** Muestra u oculta todas las diferencias del lado positivo por pares, el error estándar de la diferencia, los intervalos de confianza, los valores p y un gráfico de la magnitud de la diferencia con intervalos de confianza superpuestos. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

 Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratio Comparison for Pooled Variance( 1, Ordered Differences Report( 1 ) );

```

#### Ratio Matrix

**Sintaxis:** obj &lt;&lt; Ratios with Pooled Variance( 1, Ratio Matrix( state=0|1 ) );obj &lt;&lt; Ratio Comparison for Pooled Variance( 1, Ratio Matrix( state=0|1 ) )

**Descripción:** Muestra u oculta una tabla de todas las diferencias de las medias. 



Each Pair equivale a Student&apos;s t. All Pairs equivale a Tukey HSD. With Best equivale a Hsu MCB. With Control equivale a Dunnett&apos;s. Each Pair Stepwise equivale a Newman-Keuls.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1, Ratio Matrix( 1 ) );

```

## Oneway > Post Hoc Analysis for Friedman's Test

### Mensajes del elemento

#### Nemenyi Test

**Sintaxis:** obj &lt;&lt; Nemenyi Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de la prueba de Nemenyi. La prueba de Nemenyi es una prueba post hoc por pares para realizar comparaciones múltiples de sumas de rangos medios para datos bloqueados sin replicar. Esta prueba se suele realizar a posteriori después de obtener resultados significativos en la prueba de Friedman.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1, Nemenyi Test( 1 ) );

```

## Oneway

### Columnas

#### Block

**Sintaxis:** obj &lt;&lt; Block( column )

**Descripción:** Especifica una variable de bloques. Cuando se especifica esta columna, los valores de la variable de respuesta se centran en función de la variable de bloques.

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );

```

#### Freq

**Sintaxis:** obj &lt;&lt; Freq( column )

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Freq( _freqcol ) );

```

#### Grouping

**Sintaxis:** obj &lt;&lt; Grouping( column(s) )

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización ordinal o nominal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Response

**Sintaxis:** obj &lt;&lt; Response( column(s) )

**Descripción:** Especifica la variable o las variables de respuesta continua que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Weight

**Sintaxis:** obj &lt;&lt; Weight( column )

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Oneway( Y( :Height ), X( :Age ), Weight( _weightcol ) );

```

#### X

**Sintaxis:** obj &lt;&lt; X( column(s) )

**Descripción:** Especifica las variables del predictor. Estas variables deben tener un tipo de modelización ordinal o nominal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

#### Y

**Sintaxis:** obj &lt;&lt; Y( column(s) )

**Descripción:** Especifica la variable o las variables de respuesta continua que desea analizar.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Constructores asociados

#### Oneway

**Sintaxis:** Oneway( Y( columns ), X( columns ) )

**Descripción:** Modela una respuesta continua en un conjunto de grupos categóricos. Algunos de los métodos de análisis son ANOVA, comparaciones de medias, análisis de medias y gráficos de cuantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Mensajes del elemento

#### ANOM

**Sintaxis:** obj &lt;&lt; ANOM( state=0|1, &lt;chart options&gt; )

**Descripción:** Compara cada media grupal con la media general.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM( 1 );

```

#### ANOM for Ranges

**Sintaxis:** obj &lt;&lt; ANOM for Ranges( state=0|1, &lt;chart options&gt; )

**Descripción:** Prueba la varianza desigual comparando rangos de grupos con el rango medio global.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Ranges( 1 );

```

#### ANOM for Variances

**Sintaxis:** obj &lt;&lt; ANOM for Variances( state=0|1, &lt;chart options&gt; )

**Descripción:** Prueba la varianza desigual mediante la comparación de las desviaciones estándar grupales con la raíz del error cuadrático medio.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM for Variances( 1 );

```

#### ANOM for Variances with Levene(ADM)

**Sintaxis:** obj &lt;&lt; "ANOM for Variances with Levene(ADM)"n( state=0|1, &lt;chart options&gt; )

**Descripción:** Prueba la varianza desigual mediante la comparación de medias grupales de las desviaciones absolutas de la mediana (ADM) con la media ADM general.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << "ANOM for Variances with Levene(ADM)"n( 1 );

```

#### ANOM with Transformed Ranks

**Sintaxis:** obj &lt;&lt; ANOM with Transformed Ranks( state=0|1, &lt;chart options&gt; )

**Descripción:** Compara cada media grupal de rango transformado con la media general de rango transformado.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Oneway( Y( :y ), X( :Drug ) );
obj << ANOM with Transformed Ranks( 1 );

```

#### All Graphs

**Sintaxis:** obj &lt;&lt; All Graphs( state=0|1 )

**Descripción:** Muestra u oculta el gráfico univariante. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << All Graphs( 0 );

```

#### All Pairs

**Sintaxis:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**Descripción:** Calcula la prueba de Tukey de diferencias honestamente significativas (HSD); cuya función consiste en preservar la tasa de error general. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Box Plots

**Sintaxis:** obj &lt;&lt; Box Plots( state=0|1 )

**Descripción:** Muestra u oculta diagramas de caja de valores atípicos para cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Box Plots( 1 );

```

#### CDF Plot

**Sintaxis:** obj &lt;&lt; CDF Plot( state=0|1 )

**Descripción:** Muestra u oculta la función de distribución acumulativa para todos los grupos en el informe del gráfico univariante.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << CDF Plot( 1 );

```

#### Cauchy Fit

**Sintaxis:** obj &lt;&lt; Cauchy Fit( state=0|1 )

**Descripción:** Asume que los errores tienen una distribución de Cauchy. El ajuste de Cauchy es un método robusto que puede gestionar valores atípicos extremos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Cauchy Fit( 1 );

```

#### Compare Densities

**Sintaxis:** obj &lt;&lt; Compare Densities( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de las funciones de densidad de probabilidad superpuestas para cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Compare Densities( 1 );

```

#### Comparison Circles

**Sintaxis:** obj &lt;&lt; Comparison Circles( state=0|1 )

**Descripción:** Muestra u oculta círculos de comparación. Esta opción solo está disponible cuando hay abierto un informe de comparación múltiple. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );
Wait( 2 );
obj << Comparison Circles( 0 );

```

#### Composition of Densities

**Sintaxis:** obj &lt;&lt; Composition of Densities( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de las densidades sumadas, ponderadas según el conteo de cada grupo. En el rango de la variable X, el gráfico Composición de densidades muestra cómo contribuye cada grupo a la densidad total.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Composition of Densities( 1 );

```

#### Connect Means

**Sintaxis:** obj &lt;&lt; Connect Means( state=0|1 )

**Descripción:** Muestra u oculta líneas rectas que conectan las medias grupales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Connect Means( 1 );

```

#### Dunn All Pairs for Joint Ranks

**Sintaxis:** obj &lt;&lt; Dunn All Pairs for Joint Ranks( state=0|1 )

**Descripción:** Muestra u oculta la prueba de Dunn para todos los pares mediante el método de rangos conjuntos. Esta prueba utiliza el ajuste de Bonferroni, pero es posible que no preserve la tasa de error general.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn All Pairs for Joint Ranks( 1 );

```

#### Dunn With Control for Joint Ranks

**Sintaxis:** obj &lt;&lt; Dunn With Control for Joint Ranks( state = 0|1, {control level} )

**Descripción:** Muestra u oculta la prueba de Dunn con un grupo de control mediante el método de rangos conjuntos. Esta prueba utiliza el ajuste de Bonferroni, pero es posible que no preserve la tasa de error general.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Dunn With Control for Joint Ranks( 1, {12} );

```

#### Dunnett's

**Sintaxis:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Descripción:** Calcula la prueba de Dunnett; cuya función consiste en determinar si las medias son distintas de la media de un grupo control. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### Each Pair

**Sintaxis:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**Descripción:** Calcula comparaciones individuales por pares mediante pruebas t de Student sin realizar ningún ajuste para las pruebas múltiples. Consulte los mensajes de comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Each Pair Stepwise

**Sintaxis:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Descripción:** Calcula la prueba de Newman-Keuls, por la que se analiza si existen diferencias entre las medias utilizando la prueba de Rango estudentizado en un procedimiento paso a paso. También se conoce como el método de Student-Newman-Keuls; esta prueba es menos conservadora y más potente que una prueba HSD de Tukey. Consulte los mensajes de Comparaciones de medias univariantes para ver más opciones de visualización.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Equivalence Tests

**Sintaxis:** obj &lt;&lt; Equivalence Tests( difference, &lt;alpha=.05&gt;, &lt;"Pooled Variance"|"Unequal Variances"&gt;, &lt;test type&gt; )

**Descripción:** Prueba que las medias no difieran más de una cantidad (diferencia) definida como prácticamente equivalente. Es lo contrario de la prueba de significación habitual. Alfa, la suposición de la varianza y el tipo de prueba son argumentos opcionales. De forma predeterminada, se utiliza la suposición "Varianza combinada". El argumento del tipo de prueba es "Equivalencia" de forma predeterminada, pero también puede utilizarse para especificar pruebas de superioridad o no inferioridad.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests( 4, 0.1, "Unequal Variances" );

```

#### Equivalence Tests of Std Dev

**Sintaxis:** obj &lt;&lt; Equivalence Tests of Std Dev( ratio, &lt;alpha=.05&gt;, &lt;test type&gt; )

**Descripción:** Prueba que las desviaciones estándar no difieran más de una razón definida como prácticamente equivalente. Es lo contrario de la prueba de significación habitual. Alfa y el tipo de prueba son argumentos opcionales. El argumento del tipo de prueba es "Equivalencia" de forma predeterminada, pero también se puede utilizar para especificar pruebas de superioridad o no inferioridad.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Equivalence Tests of Std Dev( 0.8, 0.05, "Equivalence" );

```

#### Friedman Rank Test

**Sintaxis:** obj &lt;&lt; Friedman Rank Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba basada en las puntuaciones de rangos de Friedman. Las puntuaciones de rango de Friedman son los rangos de los datos en cada nivel de la variable de bloque. La versión paramétrica de esta prueba es un ANOVA de medidas repetidas. Esta opción solo está disponible cuando en el inicio de la plataforma se especifica una variable de bloque con el mismo número de observaciones en cada bloque.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Snapdragon.jmp" );
obj = dt << Oneway( Y( :Y ), X( :Soil ), Block( :Block ) );
obj << Friedman Rank Test( 1 );

```

#### Games-Howell

**Sintaxis:** obj &lt;&lt; "Games-Howell"n( state=0|1 );

**Descripción:** Muestra u oculta un informe de comparación múltiple Games-Howell de todos los pares de medias. Esta prueba se puede aplicar en contextos en los que no se puede suponer que las varianzas de los grupos individuales sean iguales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Games-Howell"n( 1 );

```

#### Grand Mean

**Sintaxis:** obj &lt;&lt; Grand Mean( state=0|1 )

**Descripción:** Muestra u oculta la media general de la variable Y. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Grand Mean( 0 ) );
Wait( 2 );
obj << Grand Mean( 1 );

```

#### Histograms

**Sintaxis:** obj &lt;&lt; Histograms( state=0|1 )

**Descripción:** Muestra u oculta histogramas en paralelo a la derecha del gráfico original.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Histograms( 1 );

```

#### Hsu MCB

**Sintaxis:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**Descripción:** Calcula la prueba de Hsu de comparaciones múltiples con el mejor (MCB); cuya función consiste en determinar si las medias están por debajo del máximo desconocido. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### Jonckheere Terpstra Test

**Sintaxis:** obj &lt;&lt; Jonckheere Terpstra Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de la prueba de Jonckheere-Terpstra, que es una prueba no paramétrica para las diferencias ordenadas entre clases. Prueba la hipótesis nula de que la distribución de la variable respuesta no difiere entre clases.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.JMP" );
obj = dt << Oneway( Y( :Height ), X( :age ) );
obj << Jonckheere Terpstra Test( 1 );

```

#### Kolmogorov Smirnov Exact Test

**Sintaxis:** obj &lt;&lt; Kolmogorov Smirnov Exact Test( state=0|1 )

**Descripción:** Muestra u oculta la prueba exacta de Kolmogorov-Smirnov, basada en la función de distribución empírica. Esta prueba determina si la distribución de la respuesta es la misma en todos los grupos. Esta opción solo está disponible cuando la variable X tiene exactamente dos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Exact Test( 1 );

```

#### Kolmogorov Smirnov Test

**Sintaxis:** obj &lt;&lt; Kolmogorov Smirnov Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba basada en la función de distribución empírica, que analiza si la distribución de la respuesta es la misma en todos los grupos. Esta opción solo está disponible cuando la variable X tiene exactamente dos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Kolmogorov Smirnov Test( 1 );

```

#### Legend

**Sintaxis:** obj &lt;&lt; Legend( state=0|1 )

**Descripción:** Muestra u oculta una leyenda para el cuantil normal, la función de distribución acumulativa (CDF) y los gráficos de densidad. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), Plot Quantile by Actual( 1 ), Legend( 0 ) );
Wait( 2 );
obj << Legend( 1 );

```

#### Line of Fit

**Sintaxis:** obj &lt;&lt; Line of Fit( state=0|1 )

**Descripción:** Muestra u oculta un ajuste de la línea de referencia en función de los datos para cada nivel de la variable X en cada gráfico de cuantiles abierto. Esta opción solo está disponible cuando hay un gráfico de cuantiles abierto. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Line of Fit( 0 );

```

#### Matching Column

**Sintaxis:** obj &lt;&lt; Matching Column( column )

**Descripción:** Muestra u oculta una línea de ajuste asociada y una línea de ajuste correspondiente en el gráfico univariante basadas en un variable asociada especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age, :sex ) );
Wait( 2 );
obj[1] << Matching Column( :sex );
obj[2] << Matching Column( :Age );

```

#### Matching Dotted Lines

**Sintaxis:** obj &lt;&lt; Matching Dotted Lines( state=0|1 )

**Descripción:** Muestra u oculta líneas de puntos que conectan las medias a través de los niveles faltantes de la variable asociada. Los valores utilizados en lugar de las medias de celdas faltantes se obtienen mediante un modelo ANOVA de dos factores. Esta opción solo está disponible cuando se selecciona la opción Columna asociada y todos los valores de la variable asociada son faltantes para un nivel de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:sex[6 :: 8] = "";
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Matching Column( :sex );
Wait( 2 );
obj << Matching Dotted Lines( 1 );

```

#### Matching Lines

**Sintaxis:** obj &lt;&lt; Matching Lines( state=0|1 )

**Descripción:** Muestra u oculta líneas que conectan las medias de cada nivel de la variable asociada. Esta opción solo está disponible cuando se selecciona la opción Columna asociada.

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Oneway( Y( :LogHist0 ), X( :drug ) );
obj << Matching Column( :LogHist1 );
Wait( 2 );
obj << Matching Lines( 0 );

```

#### Mean CI Lines

**Sintaxis:** obj &lt;&lt; Mean CI Lines( state=0|1 )

**Descripción:** Muestra u oculta líneas en los niveles de confianza superior e inferior al 95% para cada grupo. Los niveles de confianza al 95% se calculan utilizando la desviación estándar combinada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean CI Lines( 1 );

```

#### Mean Diamonds

**Sintaxis:** obj &lt;&lt; Mean Diamonds( state=0|1 )

**Descripción:** Muestra u oculta rombos de medias en el gráfico univariante. Cada rombo de media abarca un intervalo de confianza al 95% para la media grupal correspondiente, con una línea horizontal en la media. Los intervalos de confianza al 95% se calculan mediante la desviación estándar combinada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Diamonds( 1 );

```

#### Mean Error Bars

**Sintaxis:** obj &lt;&lt; Mean Error Bars( state=0|1 )

**Descripción:** Muestra u oculta la media de cada grupo con barras de error que se encuentran un error estándar por encima y por debajo de la media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Error Bars( 1 );

```

#### Mean Lines

**Sintaxis:** obj &lt;&lt; Mean Lines( state=0|1 )

**Descripción:** Muestra u oculta una línea en la media de cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean Lines( 1 );

```

#### Mean of Means

**Sintaxis:** obj &lt;&lt; Mean of Means( state=0|1 )

**Descripción:** Muestra u oculta la media de las medias grupales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Mean of Means( 1 );

```

#### Means and Std Dev

**Sintaxis:** obj &lt;&lt; Means and Std Dev( state=0|1 )

**Descripción:** Muestra u oculta líneas de la media, barras de error y líneas de la desviación estándar en el gráfico univariante y muestra u oculta una tabla de estadísticos de resumen. Los errores estándar para las medias utilizan desviaciones estándar grupales individuales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means and Std Dev( 1 );

```

#### Means/Anova

**Sintaxis:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova"n( state=0|1)

**Descripción:** Muestra u oculta rombos de medias en el gráfico univariante y muestra u oculta un informe de ANOVA. Esta opción solo está disponible cuando la variable X tiene más de dos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );

```

#### Means/Anova/Pooled t

**Sintaxis:** obj &lt;&lt; Means( state=0|1 ); obj &lt;&lt; "Means/Anova/Pooled t"n( state=0|1)

**Descripción:** Muestra u oculta rombos de medias en el gráfico univariante y muestra u oculta un informe de ANOVA. El informe de ANOVA incluye un informe de la prueba t combinada que asume que los dos grupos tienen varianzas iguales. Esta opción solo está disponible cuando la variable X tiene exactamente dos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Means( 1 );

```

#### Median Exact Test

**Sintaxis:** obj &lt;&lt; Median Exact Test( state=0|1 )

**Descripción:** Muestra u oculta un análisis de las puntuaciones de la mediana.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Median Exact Test( 1 );

```

#### Median Test

**Sintaxis:** obj &lt;&lt; Median Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba basada en las puntuaciones del rango mediano. Las puntuaciones del rango mediano son 1 o 0, dependiendo de si un rango está por encima o por debajo del rango mediano. La prueba de la mediana es la prueba de rangos más eficaz para detectar errores con distribuciones exponenciales dobles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Median Test( 1 );

```

#### Newman-Keuls

**Sintaxis:** obj &lt;&lt; Each Pair Stepwise( state=0|1 ); obj &lt;&lt; "Newman-Keuls"n( state=0|1 ); obj &lt;&lt; "Each Pair Stepwise, Newman-Keuls"n( state=0|1 )

**Descripción:** Calcula la prueba de Newman-Keuls, por la que se analiza si existen diferencias entre las medias utilizando la prueba de Rango estudentizado en un procedimiento paso a paso. También se conoce como el método de Student-Newman-Keuls; esta prueba es menos conservadora y más potente que una prueba HSD de Tukey. Consulte los mensajes de Comparaciones de medias univariantes para ver más opciones de visualización.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair Stepwise( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Newman-Keuls"n( 1 );

```

#### Normal Quantile Label

**Sintaxis:** obj &lt;&lt; Normal Quantile Label( state=0|1 )

**Descripción:** Muestra u oculta la escala de cuantiles normales en cada gráfico de cuantiles abierto. Esta opción solo está disponible cuando hay un gráfico de cuantiles abierto. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );
Wait( 2 );
obj << Normal Quantile Label( 0 );

```

#### Plot Actual by Quantile

**Sintaxis:** obj &lt;&lt; Plot Actual by Quantile( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de cuantiles a la derecha del gráfico Análisis univariante.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Actual by Quantile( 1 );

```

#### Plot Quantile by Actual

**Sintaxis:** obj &lt;&lt; Plot Quantile by Actual( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de cuantiles con la variable Y en el eje horizontal y probabilidades acumulativas en el eje vertical.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Plot Quantile by Actual( 1 );

```

#### Points

**Sintaxis:** obj &lt;&lt; Points( state=0|1 )

**Descripción:** Muestra u oculta puntos de datos en el gráfico univariante. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
Wait( 2 );
obj << Points( 0 );

```

#### Points Jittered

**Sintaxis:** obj &lt;&lt; Points Jittered( "Ninguno"|"Automático"|"Uniforme aleatoria"|"Normal aleatoria"|"Densidad aleatoria"|"Empaquetado"|"Cuadrícula"|"Cuadrícula hexagonal"|"Enjambre"="Automático" )

**Descripción:** Especifica la extensión de los puntos de datos. Cuando se selecciona, los puntos de datos se esparcen para evitar que los marcadores se solapen. "Automático" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Oneway( Y( :Sepal length ), X( :Species ) );
obj << Points Jittered( "Binned" );

```

#### Points Spread

**Sintaxis:** obj &lt;&lt; Points Spread( state=0|1 )

**Descripción:** Especifica la extensión de los puntos de datos. Cuando se selecciona, los puntos de datos se extienden a lo ancho del intervalo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Points Spread( 1 );

```

#### Pooled Variance

**Sintaxis:** obj &lt;&lt; Ratios with Pooled Variance( state=0|1 );

**Descripción:** Muestra u oculta una comparación de razones de cada informe de pares de medias. En el supuesto de varianzas iguales, el intervalo de confianza combinado para la razón media es el intervalo de confianza de Fieller.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Pooled Variance( 1 );

```

#### Power

**Sintaxis:** obj &lt;&lt; Power( Alpha( from, &lt;to&gt;, &lt;by&gt; ), Sigma( from, &lt;to&gt;, &lt;by&gt; ), Delta( from, &lt;to&gt;, &lt;by&gt; ), Number( from, &lt;to&gt;, &lt;by&gt; ), Solve for Power|Solve for Least Significant Number|Solve for Least Significant Value|Adjusted Power and Confidence Interval, Power Plot, Done )

**Descripción:** Elabora un informe sobre los cálculos de potencia estadística. Los argumentos permiten que se especifiquen rangos para alfa, sigma, delta y el tamaño muestral total (número). El quinto argumento especifica los resultados del informe. El sexto argumento solicita un gráfico de potencia y el argumento Listo descarta el cuadro de diálogo Potencia.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), All Graphs( 0 ) );
obj << Power(
	Alpha( 0.05 ),
	Sigma( 3.382, 3.73 ),
	Delta( 2.79679 ),
	Number( 10, 90, 5 ),
	Solve for Power,
	Power Plot,
	Done
);

```

#### Proportion of Densities

**Sintaxis:** obj &lt;&lt; Proportion of Densities( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de la contribución a la densidad realizada por cada nivel de la variable X. La contribución se muestra como una proporción de la densidad total en el rango de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Proportion of Densities( 1 );

```

#### Quantiles

**Sintaxis:** obj &lt;&lt; Quantiles( state=0|1 )

**Descripción:** Muestra u oculta diagramas de caja en el gráfico univariante y muestra u oculta un informe de cuantiles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Quantiles( 1 );

```

#### Robust Fit

**Sintaxis:** obj &lt;&lt; Robust Fit( state=0|1 )

**Descripción:** Genera estimaciones de Huber que equivalen a los residuos de mínimos cuadrados para los residuos pequeños y a los valores mínimos absolutos para los residuos grandes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );

```

#### Robust Means Lines

**Sintaxis:** obj &lt;&lt; Robust Means Lines( state=0|1 )

**Descripción:** Muestra u oculta una línea en la media robusta de cada grupo. Esta opción solo está disponible cuando se selecciona una opción robusta.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Robust Fit( 1 );
obj << Robust Means Lines( 1 );

```

#### Save Normal Quantiles

**Sintaxis:** obj &lt;&lt; Save Normal Quantiles

**Descripción:** Guarda valores de cuantiles normales para cada nivel de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Normal Quantiles;

```

#### Save Predicted

**Sintaxis:** obj &lt;&lt; Save Predicted

**Descripción:** Guarda la media predicha de la variable Y para cada nivel de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Predicted;

```

#### Save Residuals

**Sintaxis:** obj &lt;&lt; Save Residuals

**Descripción:** Guarda los valores calculados como la variable Y menos la media de la variable Y en cada nivel de la variable X.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Residuals;

```

#### Save Standardized

**Sintaxis:** obj &lt;&lt; Save Standardized

**Descripción:** Guarda los valores estandarizados de la variable Y para cada nivel de la variable X. El valor estandarizado es la respuesta centrada dividida entre la desviación estándar en cada nivel.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Standardized;

```

#### Select Group

**Sintaxis:** obj &lt;&lt; Select Group( X value )

**Descripción:** Selecciona un grupo y el círculo se resalta.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Weight ), X( :Age ), Each Pair );
Wait( 2 );
obj << Select Group( 14 );

```

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; Set Alpha Level( alpha=0.05 )

**Descripción:** Cambia el nivel de significación utilizado para los límites de confianza, las medias de los rombos y los valores de nivel de confianza en los informes. "0.05" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Set α Level

**Sintaxis:** obj &lt;&lt; Set α Level( alpha=0.05 )

**Descripción:** Cambia el nivel de significación utilizado para los límites de confianza, las medias de los rombos y los valores de nivel de confianza en los informes. "0.05" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Means( 1 );
Wait( 2 );
obj << Set Alpha Level( 0.01 );

```

#### Standard Deviations

**Sintaxis:** obj &lt;&lt; Standard Deviations

**Descripción:** Abre una ventana con opciones para las pruebas de equivalencia, superioridad o no inferioridad de las desviaciones estándar. Especifique la razón crítica.

#### Std Dev Lines

**Sintaxis:** obj &lt;&lt; Std Dev Lines( state=0|1 )

**Descripción:** Muestra u oculta líneas que se encuentran una desviación estándar por encima y por debajo de la media de cada grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Std Dev Lines( 1 );

```

#### Steel With Control

**Sintaxis:** obj &lt;&lt; Steel With Control( state = 0|1, {control level} )

**Descripción:** Muestra u oculta la prueba de Steel, que preserva la tasa de error general para comparar todos los demás grupos con un grupo control. Se trata de la versión no paramétrica del método de Dunnett.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Steel With Control( 1, {12} );

```

#### Steel-Dwass All Pairs

**Sintaxis:** obj &lt;&lt; "Steel-Dwass All Pairs"n( state=0|1 )

**Descripción:** Muestra u oculta la prueba de Steel-Dwass, que preserva la tasa de error general. Se trata de la versión no paramétrica del método de Tukey.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Steel-Dwass All Pairs"n( 1 );

```

#### Student's t

**Sintaxis:** obj &lt;&lt; Each Pair( state=0|1 ); obj &lt;&lt; "Student&apos;s t"n( state=0|1 ); obj &lt;&lt; "Each Pair, Student&apos;s t"n( state=0|1 )

**Descripción:** Calcula comparaciones individuales por pares mediante pruebas t de Student sin realizar ningún ajuste para las pruebas múltiples. Consulte los mensajes de comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Each Pair( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Student's t"n( 1 );

```

#### Tukey HSD

**Sintaxis:** obj &lt;&lt; All Pairs( state=0|1 ); obj &lt;&lt; Tukey HSD( state=0|1 ); obj &lt;&lt; "All Pairs, Tukey HSD"n( state=0|1 )

**Descripción:** Calcula la prueba de Tukey de diferencias honestamente significativas (HSD); cuya función consiste en preservar la tasa de error general. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << All Pairs( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Tukey HSD( 1 );

```

#### Unequal Variances

**Sintaxis:** obj &lt;&lt; Unequal Variances( state=0|1 )

**Descripción:** Muestra u oculta cuatro pruebas que analizan la igualdad de las varianzas grupales. Esta opción también genera la prueba de Welch, que es una prueba de ANOVA para comparar medias cuando las varianzas de los grupos no son iguales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Unequal Variances( 1 );

```

#### Unpooled Variance

**Sintaxis:** obj &lt;&lt; Ratios with Unpooled Variance( state=0|1 );

**Descripción:** Muestra u oculta una comparación de razones de cada informe de pares de medias. En el supuesto de varianzas desiguales, se calcula el intervalo de confianza basado en Satterthwaite no combinado para la razón media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Ratios with Unequal Variance( 1 );

```

#### Van Der Waerden Exact Test

**Sintaxis:** obj &lt;&lt; Van Der Waerden Exact Test( state=0|1 )

**Descripción:** Muestra u oculta un análisis de Van der Waerden o puntuaciones normales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Van Der Waerden Exact Test( 1 );

```

#### Wilcoxon Each Pair

**Sintaxis:** obj &lt;&lt; Wilcoxon Each Pair( state=0|1 )

**Descripción:** Muestra u oculta la prueba de Wilcoxon para todas las comparaciones individuales posibles, sin ajuste para las pruebas múltiples. Se trata de la versión no paramétrica del método t de Student para cada par.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Each Pair( 1 );

```

#### Wilcoxon Exact Test

**Sintaxis:** obj &lt;&lt; Wilcoxon Exact Test( state=0|1 )

**Descripción:** Muestra u oculta un análisis de las puntuaciones de Wilcoxon utilizando métodos exactos para cada par de niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << Wilcoxon Exact Test( 1 );

```

#### Wilcoxon Test

**Sintaxis:** obj &lt;&lt; Wilcoxon Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba basada en las puntuaciones de rangos de Wilcoxon. Las puntuaciones de rangos de Wilcoxon son los rangos simples de los datos. La prueba de Wilcoxon es la prueba de rangos más eficaz para detectar errores con distribuciones logísticas. Si la variable X tiene exactamente dos niveles, la prueba de Wilcoxon equivale a la prueba de Mann-Whitney. Si la variable X tiene más de dos niveles, se lleva a cabo la prueba de Kruskal-Wallis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Wilcoxon Test( 1 );

```

#### With Best

**Sintaxis:** obj &lt;&lt; With Best( state=0|1 ); obj &lt;&lt; Hsu MCB( state=0|1 ); obj &lt;&lt; "With Best, Hsu MCB"n( state=0|1 )

**Descripción:** Calcula la prueba de Hsu de comparaciones múltiples con el mejor (MCB); cuya función consiste en determinar si las medias están por debajo del máximo desconocido. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Best( 1 );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Hsu MCB( 1 );

```

#### With Control

**Sintaxis:** obj &lt;&lt; With Control( state=0|1, {control ID} ); obj &lt;&lt; "Dunnett&apos;s"n( state=0|1, {control ID} ); obj &lt;&lt; "With Control, Dunnett&apos;s"n( state=0|1, {control ID} )

**Descripción:** Calcula la prueba de Dunnett; cuya función consiste en determinar si las medias son distintas de la media de un grupo control. Consulte los mensajes de las comparaciones de medias univariantes para obtener más opciones de visualización.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << With Control( 1, {15} );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << "Dunnett's"n( 1, {15} );

```

#### X Axis Proportional

**Sintaxis:** obj &lt;&lt; X Axis Proportional( state=0|1 )

**Descripción:** Especifica el espaciado del eje horizontal. Cuando se selecciona, el espaciado es proporcional al número de observaciones de cada nivel. Esta opción no está disponible cuando se selecciona la opción Columna asociada. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ), X Axis Proportional( 0 ) );
Wait( 2 );
obj << X Axis Proportional( 1 );

```

#### t Test

**Sintaxis:** obj &lt;&lt; t Test( state=0|1 )

**Descripción:** Muestra u oculta un informe de la prueba t que asume que las varianzas no son iguales. Esta opción solo está disponible cuando la variable X tiene exactamente dos niveles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :sex ) );
obj << t Test( 1 );

```

#### van der Waerden Test

**Sintaxis:** obj &lt;&lt; van der Waerden Test( state=0|1 )

**Descripción:** Muestra u oculta una prueba basada en las puntuaciones de rangos de Van der Waerden. Las puntuaciones de rango de Van der Waerden son los rangos de los datos divididos entre uno más un valor de puntuación. El valor de puntuación es el número de observaciones transformadas a una puntuación normal aplicando la inversa de la función de distribución normal. La prueba de Van der Waerden es la prueba de rangos más eficaz para detectar errores con distribuciones normales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << van der Waerden Test( 1 );

```

### Mensajes del elemento compartidos

#### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

#### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Copy Script;

```

#### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Data Table Window;

```

#### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

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

#### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

#### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Oneway( Y( :Height ), X( :Age ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

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

#### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


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

#### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Title( "My Platform" );

```

#### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**Sintaxis:** obj = Oneway(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

