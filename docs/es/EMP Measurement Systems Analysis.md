# EMP Measurement Systems Analysis



## EMP MSA Analysis > EMP AIAG Gauge Results

### AIAG Labels

**Sintaxis:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**Descripción:** Muestra u oculta etiquetas en la tabla Resultados del estudio R&R de sistemas de medición de AIAG. Las etiquetas las define la asociación Automotive Industry Action Group (AIAG). Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

### Discrimination Ratio

**Sintaxis:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**Descripción:** Muestra u oculta la razón de discriminación para el modelo dado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### Show Connected Means

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Connected Means( state=0|1 )))

**Descripción:** Muestra u oculta líneas que conectan los valores de medición medios en el gráfico de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

### Show Control Limits

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits( state=0|1 )))

**Descripción:** Muestra u oculta los límites de control en el gráfico de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

### Show Control Limits Shading

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**Descripción:** Muestra u oculta el sombreado entre los límites de control en el gráfico de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

### Show Data

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Data( state=0|1 )))

**Descripción:** Muestra u oculta los puntos de datos en el gráfico de medias.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

### Show Grand Mean

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Grand Mean( state=0|1 )))

**Descripción:** Muestra u oculta la media general de la variable Y en el gráfico de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

### Show Separators

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Separators( state=0|1 )))

**Descripción:** Muestra u oculta las líneas verticales que separan las variables X en el gráfico de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### Show Average Dispersion

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**Descripción:** Muestra u oculta el rango medio o la desviación estándar en el gráfico de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

### Show Connected Points

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**Descripción:** Muestra u oculta líneas que conectan todos los rangos o desviaciones estándar en el gráfico de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

### Show Control Limits

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**Descripción:** Muestra u oculta los límites de control en el gráfico de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

### Show Control Limits Shading

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**Descripción:** Muestra u oculta el sombreado entre los límites de control en el gráfico de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

### Show Separators

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Separators( state=0|1 )))

**Descripción:** Muestra u oculta las líneas verticales que separan las variables X en el gráfico de dispersión. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### Show Avg Bias Points

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**Descripción:** Muestra u oculta los puntos del sesgo medio en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

### Show Bias Points

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**Descripción:** Muestra u oculta los puntos de sesgo en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

### Show Fit Confidence Curves

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**Descripción:** Muestra u oculta las curvas de confianza de la recta de ajuste en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Fit Confidence Curves( 1 )
));

```

### Show Line of Fit

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**Descripción:** Muestra u oculta la recta de ajuste en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

### Show Overall Avg Bias Line

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**Descripción:** Muestra u oculta la línea del sesgo medio general en el gráfico. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 0 )
));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results(
	1,
	Show Overall Avg Bias Line( 1 )
));

```

## EMP MSA Analysis

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);
dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj2 = dt2 << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
Wait( 1 );
obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

### Average Chart

**Sintaxis:** obj << (EMP MSA Analysis[number] << Average Chart( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de los valores de medición medios para cada combinación de la parte y las variables X. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

### Bias Comparison

**Sintaxis:** obj << (EMP MSA Analysis[number] << Bias Comparison( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico de Análisis de medias para probar si las variables X tienen medias distintas.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Dispersion Chart

**Sintaxis:** obj << (EMP MSA Analysis[number] << Dispersion Chart( state=0|1 ))

**Descripción:** Muestra u oculta el gráfico de dispersión especificado. El gráfico de dispersión predeterminado es el gráfico de rangos. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

### EMP Results

**Sintaxis:** obj << (EMP MSA Analysis[number] << EMP Results( state=0|1 ))

**Descripción:** Muestra u oculta un informe que calcula varios estadísticos para ayudarle a evaluar y clasificar su sistema de medición.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

### Edit MSA Metadata

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**Descripción:** Abre una ventana que le permite agregar o editar el rango de tolerancia, los límites de tolerancia, la media histórica y el valor sigma histórico del proceso para todos los análisis. Los informes se actualizan automáticamente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (EMP MSA Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( 120 ),
	Upper Tolerance( 240 )
));

```

### Effective Resolution

**Sintaxis:** obj << (EMP MSA Analysis[number] << Effective Resolution( state=0|1 ))

**Descripción:** Muestra u oculta una tabla que contiene resultados para la resolución de un sistema de medición, lo que le ayuda a determinar el rendimiento de los incrementos de medición.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

### Linearity and Bias Results

**Sintaxis:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico y un resumen de un análisis de regresión utilizando la columna estándar como variable X y el sesgo como variable Y.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

### Misclassification Probabilities

**Sintaxis:** obj << (EMP MSA Analysis[number] << Misclassification Probabilties( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene las probabilidades de clasificación errónea para el modelo dado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);

```

### Parallelism Plots

**Sintaxis:** obj << (EMP MSA Analysis[number] << Parallelism Plots( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico superpuesto que refleja los valores de medición medios para cada parte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

### Resultados del estudio R&R de sistemas de medición basado en el método EMP

**Sintaxis:** obj << (EMP MSA Analysis[number] << "EMP Gauge R&R Results"n( state=0|1 ))

**Descripción:** Muestra u oculta un informe que divide la variabilidad de las mediciones en variación parcial y variación del sistema de medición. Los cálculos de este informe se basan en varianzas, no en rangos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Resultados del estudio R&R de sistemas de medición de AIAG

**Sintaxis:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n( state=0|1 ))

**Descripción:** Muestra u oculta un informe que divide la variabilidad de las mediciones en variación parcial y variación del sistema de medición. El cálculo de Reproducibilidad incluye interacciones.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	MSA Metadata(
		:Y(
			Lower Tolerance( 120 ),
			Upper Tolerance( 240 ),
			Tolerance Range( 120 ),
			Historical Process Sigma( 25 )
		)
	),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

### Shift Detection Profiler

**Sintaxis:** obj << (EMP MSA Analysis[number] << Shift Detection Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un conjunto interactivo de gráficos que puede ajustar para ver las probabilidades de obtener advertencias en el gráfico de comportamiento del proceso.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

### Show Monitor Classification Legend

**Sintaxis:** obj << (EMP MSA Analysis[number] << Show Monitor Classification Legend( state=0|1 ))

**Descripción:** Muestra u oculta la leyenda de clasificación del monitor en el informe de resultados EMP. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

### Show Part Legend

**Sintaxis:** obj << (EMP MSA Analysis[number] << Show Part Legend( state=0|1 ))

**Descripción:** Muestra u oculta la leyenda parcial de los gráficos de dispersión y de medias. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

### Show Shift Detection Profiler Legend

**Sintaxis:** obj << (EMP MSA Analysis[number] << Show Shift Detection Profiler Legend( state=0|1 ))

**Descripción:** Muestra u oculta la leyenda en el perfilador de detección del desplazamiento. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

### Test-Retest Error Comparison

**Sintaxis:** obj << (EMP MSA Analysis[number] << "Test-Retest Error Comparison"n( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico del Análisis de medias para varianzas o del Análisis de medias para rangos para comprobar si alguno de los grupos tiene niveles de error de medir y remedir distintos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Variance Components

**Sintaxis:** obj << (EMP MSA Analysis[number] << Variance Components( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene las estimaciones de los componentes de varianza para el modelo dado.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

**Sintaxis:** obj = EMP Measurement Systems Analysis(...<By( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Genera varios informes, uno para cada nivel de las variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
EMP Measurement Systems Analysis(
	Y( :new Y ),
	X( :Operator ),
	Part( :Part ),
	Model( Crossed ),
	Dispersion Chart Type( Range ),
	By( :Instrument )
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

### Conv Limit

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**Descripción:** Establece el límite de convergencia que se utiliza para calcular los componentes de varianza. Esta opción solo afecta a los análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Conv Limit( 1e-7 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Data Table Window;

```

### EMP MSA Analysis

**Sintaxis:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**Descripción:** Especifica las opciones del informe Análisis MSA de EMP para cada respuesta de medición.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis(
		"Y",
		EMP Results( 1 ),
		Variance Components( 1 ),
		"EMP Gauge R&R Results"n( 1 )
	)
);

```

### EMP Measurement Systems Analysis

**Sintaxis:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Descripción:** Inicia el método EMP (evaluación del proceso de medición) para el análisis de sistemas de medición. Los gráficos de medias y de dispersión (rango o desviación estándar) se muestran de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Edit MSA Metadata

**Sintaxis:** obj << Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), <Historical Mean( number ), Historical Process Sigma( number )> ) )

**Descripción:** Abre una ventana que le permite agregar o editar el rango de tolerancia, los límites de tolerancia, la media histórica y el valor sigma histórico del proceso para todos los análisis. Los informes se actualizan automáticamente.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

### Grouping

**Sintaxis:** obj = EMP Measurement Systems Analysis(...<Grouping( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las columnas categóricas como variables de agrupación.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

### Include Interactions in Reproducibility

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**Descripción:** Incluye interacciones en el cálculo del estadístico Reproducibilidad.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Include Interactions in Reproducibility( 1 )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

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

### Max Iter

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**Descripción:** Establece el número máximo de iteraciones que se utilizan para calcular los componentes de varianza. Esta opción solo afecta a los análisis de REML.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Max Iter( 200 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Measurement

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las columnas continuas de las mediciones.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

### Part

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Part( column )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la columna categórica que determina la parte o unidad.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Report View( "Summary" );

```

### Sample ID

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica la columna categórica que determina la parte o unidad.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Save All Metadata to Table

**Sintaxis:** obj << Save All Metadata to Table( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**Descripción:** Crea una nueva tabla de datos que contiene los metadatos MSA y sigma de medición para cada columna de datos de medición. La tabla está en formato alto y contiene una fila para cada variable de medición. Hay una opción para guardar los valores de tolerancia inferior y superior como columnas adicionales en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save All Metadata to Table;

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Metadata as Column Properties

**Sintaxis:** obj << Save Metadata as Column Properties( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**Descripción:** Para cada columna de datos de medición, guarda los metadatos MSA y la sigma de medición como propiedades de columna dentro de la columna de la tabla de datos original. Existe una opción para guardar los valores de tolerancia inferior y superior como propiedades de columna Límites de especificación.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Metadata as Column Properties;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

### Set Alpha Level

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica el nivel de significación que se utiliza para los informes de comparación de sesgo y de comparación del error de medir y remedir. "0.05" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Set Alpha Level( .01 )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece un valor específico para la semilla aleatoria, lo cual garantiza que todas las corridas subsiguientes que utilizan la misma semilla sean reproducibles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Set Random Seed( 12345 )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica un valor constante que se multiplica por sigma. "6" de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Sigma Multiplier( 5.15 ),
	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) )
);

```

### Standard

**Sintaxis:** obj = EMP Measurement Systems Analysis(...<Standard( column )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica una columna estándar o de referencia que contiene los valores conocidos de la parte medida.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Response ),
	Part( :Part ),
	Standard( :Standard ),
	Model( "Main" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

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

**Sintaxis:** obj = EMP Measurement Systems Analysis(...<X( column(s) )>...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las columnas categóricas como variables de agrupación.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Y

**Sintaxis:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Especifica las columnas continuas de las mediciones.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

