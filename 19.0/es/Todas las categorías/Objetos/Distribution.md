# Distribution



## Columnas

### By

**Sintaxis:** obj = Distribution(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### Column

**Sintaxis:** obj = Distribution(...&lt;Column( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**Sintaxis:** obj = Distribution(...Columns( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas categóricas o continuar que se analizarán.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**Sintaxis:** obj = Distribution(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Weight

**Sintaxis:** obj = Distribution(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Y

**Sintaxis:** obj = Distribution(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las columnas categóricas o continuar que se analizarán.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

## Constructores asociados

### Distribution

**Sintaxis:** Distribution( Column() )

**Descripción:** Muestra la distribución y estadísticos de resumen univariantes para cada variable. Los resultados y las opciones dependen del tipo de modelización de cada variable. Algunas de las opciones son histogramas, diagramas de caja, gráficos de cuantiles, distribuciones de ajuste y análisis de capacidad.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

## Mensajes del elemento

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**Sintaxis:** obj &lt;&lt; Arrange in Rows( number )

**Descripción:** Especifica el número de informes de distribución que se muestran en la ventana.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Axes on Left

**Sintaxis:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descripción:** Desplaza los ejes de conteo, probabilidad, densidad y gráfico de cuantiles normales al lado izquierdo de un gráfico horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### CDF Plot

**Sintaxis:** obj &lt;&lt; CDF Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de la función de distribución acumulativa empírica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**Sintaxis:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Descripción:** Realiza un análisis de capacidad según los valores indicados para el límite de especificación inferior (LSL), el objetivo y el límite de especificación superior (USL).

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**Sintaxis:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**Descripción:** Calcula los intervalos de confianza especificados en torno a la media y la desviación estándar. Si especifica sigma, el valor especificado se utiliza para calcular el intervalo de confianza en torno a la media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**Sintaxis:** obj &lt;&lt; Count Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de conteo para el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**Sintaxis:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Descripción:** Crea un informe de las estimaciones de rango de los cuantiles y un informe de las estimaciones de cuantiles de verosimilitud empírica alisada para los cuantiles especificados. Utiliza la fracción como nivel de confianza para los intervalos de confianza en ambos informes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Sintaxis:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descripción:** Personaliza los estadísticos de resumen que se muestran en el informe Estadísticos de resumen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**Sintaxis:** obj &lt;&lt; Density Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de densidad para la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**Sintaxis:** obj &lt;&lt; Fit All

**Descripción:** Compara todas las distribuciones posibles.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**Sintaxis:** obj &lt;&lt; Fit Beta

**Descripción:** Ajusta una distribución beta de dos parámetros a datos entre 0 y 1 (no incluidos).

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**Sintaxis:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución binomial beta dado un tamaño muestral de la constante especificado o una columna que contiene los tamaños muestrales. Esta distribución es una versión más flexible de la distribución binomial.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Sintaxis:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**Descripción:** Ajusta una distribución binomial dado un tamaño muestral de la constante especificado o una columna que contiene los tamaños muestrales. Esta distribución modela el número total de éxitos en n ensayos independientes.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Sintaxis:** obj &lt;&lt; Fit Cauchy

**Descripción:** Ajusta una distribución de Cauchy a los datos. La distribución de Cauchy es robusta con respecto a los valores atípicos y equivale a una distribución t con un grado de libertad.

**JMP Versión agregada:** 15

```jsl

Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Sintaxis:** obj &lt;&lt; Fit ExGaussian

**Descripción:** Ajusta una distribución gaussiana modificada exponencialmente a los datos.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**Sintaxis:** obj &lt;&lt; Fit Exponential

**Descripción:** Ajusta una distribución exponencial a datos no negativos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**Sintaxis:** obj &lt;&lt; Fit Gamma

**Descripción:** Ajusta una distribución gamma de dos parámetros a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**Sintaxis:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**Descripción:** Arreglo de asideros para las distribuciones ajustadas. Esto le permite enviar comandos a las distribuciones específicas que se hayan ajustado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Sintaxis:** obj &lt;&lt; Fit Johnson

**Descripción:** Ajusta una distribución de Johnson a los datos. Se opta por el más apropiado de los tres tipos de distribuciones de Johnson (Su, Sb y Sl) en función de los cuantiles.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Sintaxis:** obj &lt;&lt; Fit Largest Extreme Value

**Descripción:** Ajusta una distribución de valor extremo más alto en función de los datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Sintaxis:** obj &lt;&lt; Fit Lognormal

**Descripción:** Ajusta una distribución log-normal a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**Sintaxis:** obj &lt;&lt; Fit Negative Binomial

**Descripción:** Ajusta una distribución binomial negativa a los datos. Esta distribución equivale a la distribución Gamma Poisson.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**Sintaxis:** obj &lt;&lt; Fit Normal

**Descripción:** Ajusta una distribución normal a los datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Sintaxis:** obj &lt;&lt; Fit Normal 2 Mixture

**Descripción:** Ajusta una mezcla de dos distribuciones normales. Esta distribución es capaz de ajustar los datos bimodales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Sintaxis:** obj &lt;&lt; Fit Normal 3 Mixture

**Descripción:** Ajusta una mezcla de tres distribuciones normales. Esta distribución es capaz de ajustar los datos multimodales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Sintaxis:** obj &lt;&lt; Fit Poisson

**Descripción:** Ajusta una distribución de Poisson a los datos. Esta distribución es una elección muy común para datos de conteo. La media ajustada de la distribución de Poisson es igual que la varianza.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**Sintaxis:** obj &lt;&lt; Fit Shash

**Descripción:** Ajusta una distribución sinh-arcsinh (SHASH) a los datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Sintaxis:** obj &lt;&lt; Fit Smallest Extreme Value

**Descripción:** Ajusta una distribución del valor extremo más bajo en función de los datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Sintaxis:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**Descripción:** Ajusta una curva lisa a los datos utilizando una estimación de densidad no paramétrica. Puede establecer el alisado especificando el ancho de banda.

**JMP Versión agregada:** 15

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Sintaxis:** obj &lt;&lt; Fit Student&apos;s t

**Descripción:** Ajusta una distribución t de Student a los datos. Esta distribución es una opción robusta que abarca el espacio existente entra una distribución normal y una distribución de Cauchy.

**JMP Versión agregada:** 16

```jsl

Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Sintaxis:** obj &lt;&lt; Fit Weibull

**Descripción:** Ajusta una distribución de Weibull de dos parámetros a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución beta binomial con inflación de ceros dado el tamaño muestral de la constante especificado o una columna que contiene el tamaño muestral. Esta distribución modela el número total de éxitos en n ensayos independientes en los que se observan más ceros de los que se esperaría para la distribución beta binomial.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución binomial con inflación de ceros dado el tamaño muestral de la constante especificado o una columna que contiene el tamaño muestral. Esta distribución modela el número total de éxitos en n ensayos independientes en los que se observan más ceros de los que se esperaría para la distribución binomial.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Negative Binomial

**Descripción:** Ajusta una distribución binomial negativa con inflación de cero a datos que contienen valores de cero.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Sintaxis:** obj &lt;&lt; Fit ZI Poisson

**Descripción:** Ajusta una distribución de Poisson con inflación de cero a datos que contienen valores de cero.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Sintaxis:** obj &lt;&lt; Fit ZI SHASH

**Descripción:** Ajusta una distribución SHASH con una masa puntual igual a cero a los datos.

```jsl

Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**Sintaxis:** obj &lt;&lt; Frequencies( state=0|1 )

**Descripción:** Muestra u oculta el informe Frecuencias, que contiene los conteos y las probabilidades para cada nivel. Opción activada de forma predeterminada.

#### Ejemplo de distribución de respuesta múltiple

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Ejemplo de distribución nominal

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**Sintaxis:** obj &lt;&lt; Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**Sintaxis:** obj &lt;&lt; Histogram Color( color )

**Descripción:** Cambia el color de las barras de histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Sintaxis:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descripción:** Cambia la orientación del histograma y los informes a horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de barras en mosaico para cada variable de respuesta nominal u ordinal. Un gráfico en mosaico es un diagrama de barras apiladas en el que cada segmento es proporcional al conteo de frecuencia de su grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Sintaxis:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que puede utilizarse para visualizar la medida en la que normalmente se distribuye una variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**Sintaxis:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descripción:** Ordena el histograma, el gráfico en mosaico y el informe Frecuencias en orden ascendente o descendente, según el conteo. También puede restablecer la ordenación predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**Sintaxis:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja que le permite ver la distribución e identificar posibles valores atípicos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Sintaxis:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**Descripción:** Establece la opción de inicio para el número máximo de filas antes de que el diagrama de caja de valores atípicos se desactive al principio. "100000" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**Sintaxis:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**Descripción:** En la salida de Capacidad del proceso, cambia el etiquetado de los índices de capacidad generales para utilizar el prefijo Pp en lugar de Cp. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Sintaxis:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**Descripción:** Calcula los intervalos de predicción para una observación futura individual y la media para un número especificado (N muestras) de observaciones futuras. Puede crear intervalos de predicción unilaterales y bilaterales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Sintaxis:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de probabilidad o proporción para este histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**Sintaxis:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**Descripción:** Calcula un análisis de capacidad del proceso según los valores indicados para el límite de especificación inferior (LSL), el objetivo y el límite de especificación superior (USL). El informe Capacidad del proceso incluye un histograma, detalles de resumen, índices de capacidad y estadísticos de disconformidad.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Sintaxis:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja con los cuantiles siguientes: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% y 100%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**Sintaxis:** obj &lt;&lt; Quantiles( state=0|1 )

**Descripción:** Muestra u oculta el informe Cuantiles, que contiene los valores de los cuantiles seleccionados. De forma predeterminada, los cuantiles mostrados son 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5% y 100%. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

### Save

**Sintaxis:** obj &lt;&lt; Save( "Números de nivel"|"Puntos medios de nivel"|"Rangos"|"Rangos medios"|"Puntuaciones de probabilidad"|"Cuantiles normales"|"Estandarizado"|"Centrado"|"Estandarizado robusto"|"Centrado robusto"|"Límites de especificación"|"Script en el registro" )

**Descripción:** Guarda el estadístico específico de la observación especificada en una nueva columna de la tabla de datos. También existe la opción de imprimir los comandos de script que generan el informe actual en la ventana de registro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Separate Bars

**Sintaxis:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descripción:** Añade un espacio entre las barras del histograma. Esta opción solo está disponible para las variables categóricas.

#### Ejemplo de distribución de respuesta múltiple

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

#### Ejemplo de distribución nominal

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**Sintaxis:** obj &lt;&lt; Set Bin Width( number )

**Descripción:** Establece el ancho de las clases del histograma, utilizando el eje como origen. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Sintaxis:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**Descripción:** Establece el incremento utilizado en el informe Cuantiles en la fracción especificada o lo restablece a los cuantiles predeterminados. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Sintaxis:** obj &lt;&lt; Shadowgram( state=0|1 )

**Descripción:** Muestra u oculta un shadowgram de alisado en lugar del histograma. Un shadowgram se superpone a los histogramas con distintos anchos de clases. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**Sintaxis:** obj &lt;&lt; Show Counts( state=0|1 )

**Descripción:** Muestra u oculta los conteos de las barras en el histograma, que indica la frecuencia de los valores de columna representados por cada barra del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**Sintaxis:** obj &lt;&lt; Show Percents( state=0|1 )

**Descripción:** Muestra u oculta los porcentajes de las barras en el histograma, que indica el porcentaje de los valores de columna representados por cada barra del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**Sintaxis:** obj &lt;&lt; Stack( state=0|1 )

**Descripción:** Cambia la orientación del histograma y los informes a horizontal y apila los informes de las distribuciones individuales en vertical.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**Sintaxis:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras del error estándar en cada una de las barras del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Sintaxis:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de tallo y hojas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Sintaxis:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Descripción:** Muestra u oculta el informe Estadísticos de resumen, que contiene la media, la desviación estándar y otros estadísticos de resumen para las variables continuas. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**Sintaxis:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**Descripción:** Lleva a cabo pruebas para verificar si la media de la muestra equivale a un valor hipotético (Objetivo) empleando el enfoque Dos pruebas unilaterales (TOST).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**Sintaxis:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**Descripción:** Realiza una prueba de una muestra para la media. Si especifica un valor para la desviación estándar (Sigma), se lleva a cabo una prueba z. De lo contrario, se utiliza la desviación estándar de la muestra para realizar una prueba t. También existe la opción de realizar una prueba adicional de rangos con signo de Wilcoxon no paramétrica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**Sintaxis:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descripción:** Realiza pruebas para comparar las probabilidades estimadas de los niveles de una variable categórica con las probabilidades hipotéticas especificadas (p1, p2, p3, etc.). En el caso de las variables con dos niveles, utilice la opción Prueba para especificar el signo de la hipótesis alternativa de la prueba. En el caso de las variables con más de dos niveles, utilice la opción Fijar para especificar cómo se gestionan los valores hipotéticos faltantes. Tenga en cuenta que f es un argumento opcional que especifica que el nivel anterior se trata como fijo.

#### Ejemplo bilateral de dos niveles

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

#### Ejemplo de múltiples niveles

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

#### Ejemplo unilateral de dos niveles

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

### Test Std Dev

**Sintaxis:** obj &lt;&lt; Test Std Dev( number )

**Descripción:** Realiza una prueba de ji cuadrado para la desviación estándar, dado el valor hipotético (número).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**Sintaxis:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**Descripción:** Calcula un intervalo que contiene al menos una porción especificada de la población. Se asume una distribución normal estándar. También es posible especificar otras distribuciones no normales, como lognormal    , Gamma, exponencial, Weibull, valor extremo más bajo, valor extremo más alto y distribuciones no paramétricas. Además, existen opciones para calcular intervalos unilaterales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**Sintaxis:** obj &lt;&lt; Uniform Scaling( state=0|1 )

**Descripción:** Establece todos los ejes del histograma a los mismos valores mínimo, máximo y de incremento, para poder comparar las distribuciones fácilmente.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**Sintaxis:** obj &lt;&lt; Vertical( state=0|1 )

**Descripción:** Cambia la orientación del histograma, diagramas de caja y gráficos de cuantiles a vertical. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Mensajes del elemento compartidos

### Action

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

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

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

### Column Switcher

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

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

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

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

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

### Local Data Filter

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

### Paste Local Data Filter

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

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

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

### Remove Local Data Filter

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

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Script Window;

```

### SendToByGroup

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

### SendToEmbeddedScriptable

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

### SendToReport

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

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

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

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

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

## Capability Analysis

### Mensajes del elemento

#### Capability Animation

**Sintaxis:** obj &lt;&lt; Capability Animation

**Descripción:** Abre una ventana independiente que muestra una animación de una distribución normal que utiliza parámetros y estadísticos de capacidad de la muestra actual.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**Sintaxis:** obj &lt;&lt; Z Bench( state=0|1 )

**Descripción:** Muestra u oculta estadísticos Z, descritos por AIAG como el número de unidades de desviación estándar entre la media del proceso y una especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### Columnas

#### Column

**Sintaxis:** obj = Quantiles(...&lt;Column( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Mensajes del elemento

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintaxis:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descripción:** Desplaza los ejes de conteo, probabilidad, densidad y gráfico de cuantiles normales al lado izquierdo de un gráfico horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

#### CDF Plot

**Sintaxis:** obj &lt;&lt; CDF Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de la función de distribución acumulativa empírica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

#### Capability Analysis

**Sintaxis:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Descripción:** Realiza un análisis de capacidad según los valores indicados para el límite de especificación inferior (LSL), el objetivo y el límite de especificación superior (USL).

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**Sintaxis:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**Descripción:** Calcula los intervalos de confianza especificados en torno a la media y la desviación estándar. Si especifica sigma, el valor especificado se utiliza para calcular el intervalo de confianza en torno a la media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**Sintaxis:** obj &lt;&lt; Count Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de conteo para el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

#### Custom Quantiles

**Sintaxis:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Descripción:** Crea un informe de las estimaciones de rango de los cuantiles y un informe de las estimaciones de cuantiles de verosimilitud empírica alisada para los cuantiles especificados. Utiliza la fracción como nivel de confianza para los intervalos de confianza en ambos informes.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**Sintaxis:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descripción:** Personaliza los estadísticos de resumen que se muestran en el informe Estadísticos de resumen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**Sintaxis:** obj &lt;&lt; Density Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de densidad para la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

#### Fit All

**Sintaxis:** obj &lt;&lt; Fit All

**Descripción:** Compara todas las distribuciones posibles.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

#### Fit Beta

**Sintaxis:** obj &lt;&lt; Fit Beta

**Descripción:** Ajusta una distribución beta de dos parámetros a datos entre 0 y 1 (no incluidos).

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

#### Fit Beta Binomial

**Sintaxis:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución binomial beta dado un tamaño muestral de la constante especificado o una columna que contiene los tamaños muestrales. Esta distribución es una versión más flexible de la distribución binomial.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**Sintaxis:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**Descripción:** Ajusta una distribución binomial dado un tamaño muestral de la constante especificado o una columna que contiene los tamaños muestrales. Esta distribución modela el número total de éxitos en n ensayos independientes.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**Sintaxis:** obj &lt;&lt; Fit Cauchy

**Descripción:** Ajusta una distribución de Cauchy a los datos. La distribución de Cauchy es robusta con respecto a los valores atípicos y equivale a una distribución t con un grado de libertad.

**JMP Versión agregada:** 15

```jsl

Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**Sintaxis:** obj &lt;&lt; Fit ExGaussian

**Descripción:** Ajusta una distribución gaussiana modificada exponencialmente a los datos.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

#### Fit Exponential

**Sintaxis:** obj &lt;&lt; Fit Exponential

**Descripción:** Ajusta una distribución exponencial a datos no negativos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

#### Fit Gamma

**Sintaxis:** obj &lt;&lt; Fit Gamma

**Descripción:** Ajusta una distribución gamma de dos parámetros a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

#### Fit Handle

**Sintaxis:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**Descripción:** Arreglo de asideros para las distribuciones ajustadas. Esto le permite enviar comandos a las distribuciones específicas que se hayan ajustado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**Sintaxis:** obj &lt;&lt; Fit Johnson

**Descripción:** Ajusta una distribución de Johnson a los datos. Se opta por el más apropiado de los tres tipos de distribuciones de Johnson (Su, Sb y Sl) en función de los cuantiles.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**Sintaxis:** obj &lt;&lt; Fit Largest Extreme Value

**Descripción:** Ajusta una distribución de valor extremo más alto en función de los datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**Sintaxis:** obj &lt;&lt; Fit Lognormal

**Descripción:** Ajusta una distribución log-normal a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

#### Fit Negative Binomial

**Sintaxis:** obj &lt;&lt; Fit Negative Binomial

**Descripción:** Ajusta una distribución binomial negativa a los datos. Esta distribución equivale a la distribución Gamma Poisson.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

#### Fit Normal

**Sintaxis:** obj &lt;&lt; Fit Normal

**Descripción:** Ajusta una distribución normal a los datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**Sintaxis:** obj &lt;&lt; Fit Normal 2 Mixture

**Descripción:** Ajusta una mezcla de dos distribuciones normales. Esta distribución es capaz de ajustar los datos bimodales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**Sintaxis:** obj &lt;&lt; Fit Normal 3 Mixture

**Descripción:** Ajusta una mezcla de tres distribuciones normales. Esta distribución es capaz de ajustar los datos multimodales.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**Sintaxis:** obj &lt;&lt; Fit Poisson

**Descripción:** Ajusta una distribución de Poisson a los datos. Esta distribución es una elección muy común para datos de conteo. La media ajustada de la distribución de Poisson es igual que la varianza.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

#### Fit SHASH

**Sintaxis:** obj &lt;&lt; Fit Shash

**Descripción:** Ajusta una distribución sinh-arcsinh (SHASH) a los datos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**Sintaxis:** obj &lt;&lt; Fit Smallest Extreme Value

**Descripción:** Ajusta una distribución del valor extremo más bajo en función de los datos.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**Sintaxis:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**Descripción:** Ajusta una curva lisa a los datos utilizando una estimación de densidad no paramétrica. Puede establecer el alisado especificando el ancho de banda.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**Sintaxis:** obj &lt;&lt; Fit Student&apos;s t

**Descripción:** Ajusta una distribución t de Student a los datos. Esta distribución es una opción robusta que abarca el espacio existente entra una distribución normal y una distribución de Cauchy.

**JMP Versión agregada:** 16

```jsl

Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**Sintaxis:** obj &lt;&lt; Fit Weibull

**Descripción:** Ajusta una distribución de Weibull de dos parámetros a datos positivos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución beta binomial con inflación de ceros dado el tamaño muestral de la constante especificado o una columna que contiene el tamaño muestral. Esta distribución modela el número total de éxitos en n ensayos independientes en los que se observan más ceros de los que se esperaría para la distribución beta binomial.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**Descripción:** Ajusta una distribución binomial con inflación de ceros dado el tamaño muestral de la constante especificado o una columna que contiene el tamaño muestral. Esta distribución modela el número total de éxitos en n ensayos independientes en los que se observan más ceros de los que se esperaría para la distribución binomial.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**Sintaxis:** obj &lt;&lt; Fit ZI Negative Binomial

**Descripción:** Ajusta una distribución binomial negativa con inflación de cero a datos que contienen valores de cero.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**Sintaxis:** obj &lt;&lt; Fit ZI Poisson

**Descripción:** Ajusta una distribución de Poisson con inflación de cero a datos que contienen valores de cero.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**Sintaxis:** obj &lt;&lt; Fit ZI SHASH

**Descripción:** Ajusta una distribución SHASH con una masa puntual igual a cero a los datos.

```jsl

Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**Sintaxis:** obj &lt;&lt; Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Sintaxis:** obj &lt;&lt; Histogram Color( color )

**Descripción:** Cambia el color de las barras de histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Sintaxis:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descripción:** Cambia la orientación del histograma y los informes a horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**Sintaxis:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico que puede utilizarse para visualizar la medida en la que normalmente se distribuye una variable.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**Sintaxis:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja que le permite ver la distribución e identificar posibles valores atípicos. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**Sintaxis:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**Descripción:** Establece la opción de inicio para el número máximo de filas antes de que el diagrama de caja de valores atípicos se desactive al principio. "100000" de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**Sintaxis:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**Descripción:** En la salida de Capacidad del proceso, cambia el etiquetado de los índices de capacidad generales para utilizar el prefijo Pp en lugar de Cp. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**Sintaxis:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**Descripción:** Calcula los intervalos de predicción para una observación futura individual y la media para un número especificado (N muestras) de observaciones futuras. Puede crear intervalos de predicción unilaterales y bilaterales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**Sintaxis:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de probabilidad o proporción para este histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

#### Process Capability

**Sintaxis:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**Descripción:** Calcula un análisis de capacidad del proceso según los valores indicados para el límite de especificación inferior (LSL), el objetivo y el límite de especificación superior (USL). El informe Capacidad del proceso incluye un histograma, detalles de resumen, índices de capacidad y estadísticos de disconformidad.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**Sintaxis:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de caja con los cuantiles siguientes: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% y 100%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

#### Quantiles

**Sintaxis:** obj &lt;&lt; Quantiles( state=0|1 )

**Descripción:** Muestra u oculta el informe Cuantiles, que contiene los valores de los cuantiles seleccionados. De forma predeterminada, los cuantiles mostrados son 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5% y 100%. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Sintaxis:** obj &lt;&lt; Save( "Números de nivel"|"Puntos medios de nivel"|"Rangos"|"Rangos medios"|"Puntuaciones de probabilidad"|"Cuantiles normales"|"Estandarizado"|"Centrado"|"Estandarizado robusto"|"Centrado robusto"|"Límites de especificación"|"Script en el registro" )

**Descripción:** Guarda el estadístico específico de la observación especificada en una nueva columna de la tabla de datos. También existe la opción de imprimir los comandos de script que generan el informe actual en la ventana de registro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

#### Set Bin Width

**Sintaxis:** obj &lt;&lt; Set Bin Width( number )

**Descripción:** Establece el ancho de las clases del histograma, utilizando el eje como origen. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**Sintaxis:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**Descripción:** Establece el incremento utilizado en el informe Cuantiles en la fracción especificada o lo restablece a los cuantiles predeterminados. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**Sintaxis:** obj &lt;&lt; Shadowgram( state=0|1 )

**Descripción:** Muestra u oculta un shadowgram de alisado en lugar del histograma. Un shadowgram se superpone a los histogramas con distintos anchos de clases. Esta opción solo está disponible para las variables continuas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

#### Show Counts

**Sintaxis:** obj &lt;&lt; Show Counts( state=0|1 )

**Descripción:** Muestra u oculta los conteos de las barras en el histograma, que indica la frecuencia de los valores de columna representados por cada barra del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Sintaxis:** obj &lt;&lt; Show Percents( state=0|1 )

**Descripción:** Muestra u oculta los porcentajes de las barras en el histograma, que indica el porcentaje de los valores de columna representados por cada barra del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintaxis:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras del error estándar en cada una de las barras del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**Sintaxis:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de tallo y hojas.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**Sintaxis:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Descripción:** Muestra u oculta el informe Estadísticos de resumen, que contiene la media, la desviación estándar y otros estadísticos de resumen para las variables continuas. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

#### Test Equivalence

**Sintaxis:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**Descripción:** Lleva a cabo pruebas para verificar si la media de la muestra equivale a un valor hipotético (Objetivo) empleando el enfoque Dos pruebas unilaterales (TOST).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**Sintaxis:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**Descripción:** Realiza una prueba de una muestra para la media. Si especifica un valor para la desviación estándar (Sigma), se lleva a cabo una prueba z. De lo contrario, se utiliza la desviación estándar de la muestra para realizar una prueba t. También existe la opción de realizar una prueba adicional de rangos con signo de Wilcoxon no paramétrica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**Sintaxis:** obj &lt;&lt; Test Std Dev( number )

**Descripción:** Realiza una prueba de ji cuadrado para la desviación estándar, dado el valor hipotético (número).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**Sintaxis:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**Descripción:** Calcula un intervalo que contiene al menos una porción especificada de la población. Se asume una distribución normal estándar. También es posible especificar otras distribuciones no normales, como lognormal    , Gamma, exponencial, Weibull, valor extremo más bajo, valor extremo más alto y distribuciones no paramétricas. Además, existen opciones para calcular intervalos unilaterales.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**Sintaxis:** obj &lt;&lt; Vertical( state=0|1 )

**Descripción:** Cambia la orientación del histograma, diagramas de caja y gráficos de cuantiles a vertical. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Distribution Fit

### Mensajes del elemento

#### Density Curve

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Density Curve( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Density Curve( state=0|1 ))

**Descripción:** Muestra u oculta una curva de densidad en el histograma. Los parámetros estimados del ajuste especificado se utilizan para crear la curva de densidad. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Distribution Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Distribution Profiler( state=0|1 ) )

**Descripción:** Muestra u oculta un perfil de predicción de la función de distribución acumulativa para la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Fitted CDF( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted CDF( vector ))

**Descripción:** Muestra u oculta las probabilidades ajustadas especificadas para la distribución ajustada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Fitted Quantiles( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted Quantiles( vector ))

**Descripción:** Muestra u oculta los cuantiles especificados para la distribución ajustada especificada.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Fix Parameters( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fix Parameters( vector ))

**Descripción:** Fija los parámetros especificados como constantes y vuelve a realizar una estimación de los parámetros que no son fijos.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Goodness of Fit( state=0|1 )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Goodness of Fit( state=0|1 ))

**Descripción:** Muestra u oculta un informe que contiene una prueba de bondad de ajuste para la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( PP Plot( state=0|1 ) ); obj &lt;&lt; (Fit Handle[ number ] &lt;&lt; PP Plot( state=0|1 ) )

**Descripción:** Muestra u oculta un gráfico percentil-percentil (PP) que muestra la relación que guardan la función de distribución acumulativa (CDF) y la CDF de la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); obj &lt;&lt; (Fit Handle[number] &lt;&lt; ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**Descripción:** Calcula un análisis de capacidad del proceso según los valores indicados para el límite de especificación inferior (LSL), el objetivo y el límite de especificación superior (USL). El informe Capacidad del proceso incluye un histograma, detalles de resumen, índices de capacidad y estadísticos de disconformidad.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( QQ Plot( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; QQ Plot( state=0|1 ) )

**Descripción:** Muestra u oculta un gráfico cuantil-cuantil (Q-Q) que muestra la relación que guardan los datos observados y los cuantiles de la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Quantile Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Quantile Profiler( state=0|1 ) )

**Descripción:** Muestra u oculta un perfil de predicción de la función de cuantiles para la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; Remove Fit )

**Descripción:** Quita el ajuste y el objeto JSL de la distribución especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Save Density Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Density Formula )

**Descripción:** Guarda una columna en la tabla de datos que contiene la fórmula de densidad de la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Save Distribution Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Distribution Formula )

**Descripción:** Guarda una columna en la tabla de datos que contiene la función de distribución acumulativa de la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Save Simulation Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Simulation Formula )

**Descripción:** Guarda una columna en la tabla de datos que contiene una fórmula que genera valores simulados de la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Save Transformed ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Transformed )

**Descripción:** Guarda una columna en la tabla de datos que contiene una fórmula que se utiliza para transformar la columna de análisis a la normalidad utilizando la distribución ajustada especificada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### Mensajes del elemento

#### Color Out of Spec Values

**Sintaxis:** obj &lt;&lt; Color Out of Spec Values

**Descripción:** Colorea las celdas de la tabla de datos correspondientes a valores fuera de la especificación. Las celdas con valores por debajo del límite inferior de especificación (LSL) se muestran en rojo y las celdas con valores por encima del límite superior de especificación (USL) se muestran en azul.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Color Out of Spec Values
);

```

#### Save Distribution as a Column Property

**Sintaxis:** obj &lt;&lt; Process Capability( Save Distribution as a Column Property )

**Descripción:** Guarda el tipo Distribución de la capacidad del proceso como propiedad de columna dentro de la columna de la tabla de datos original.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

#### Save In Spec Indicator Formula

**Sintaxis:** obj &lt;&lt; Save In Spec Indicator Formula

**Descripción:** Crea una nueva columna de fórmulas en la tabla de datos. La nueva columna contiene un valor que indica si una fila está o no dentro de los límites de la especificación.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.12 ),
	Target( 0.18 ),
	USL( 0.24 ),
	Save In Spec Indicator Formula
);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**Descripción:** Guarda los límites de especificación calculados y el tipo de distribución de capacidad del proceso para la distribución ajustada como propiedades de columna dentro de la columna de la tabla de datos original y no muestra ningún informe de capacidad.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

#### Save Spec Limits as a Column Property

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); obj &lt;&lt; Process Capability( Save Spec Limits as a Column Property )

**Descripción:** Guarda los límites de especificación como propiedad de columna dentro de la columna de la tabla de datos original.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		LSL( 0.03 ),
		Target( 0.15 ),
		USL( 0.27 ),
		Save Spec Limits as a Column Property
	)
);

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Save Spec Limits as a Column Property
);

```

#### Set Probabilities for Quantile Spec Limits

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); obj &lt;&lt; Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**Descripción:** Establece las probabilidades que se utilizan para calcular los límites de especificación del cuantil para la distribución ajustada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits(
			LSL Prob( .0001 ),
			Target Prob( .5 ),
			USL Prob( .9999 )
		)
	)
);

```

#### Set Sigma Multiplier for Quantile Spec Limits

**Sintaxis:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))); obj &lt;&lt; Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))

**Descripción:** Establece un multiplicador sigma, K, que se utiliza para calcular los límites de especificación del cuantil para la distribución ajustada. El argumento de número de lados opcional equivale a 1 solo para LSL y 2 solo para USL.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) )
);

```

## Distribution Summary Statistics

### Mensajes del elemento

#### Customize Summary Statistics

**Sintaxis:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descripción:** Personaliza los estadísticos de resumen que se muestran en el informe Estadísticos de resumen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**Sintaxis:** obj &lt;&lt; Customize Summary Statistics( Show all Modes( state=0|1 ))

**Descripción:** Muestra u oculta todas las modas en el informe de estadísticos de resumen.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### Mensajes del elemento

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintaxis:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descripción:** Desplaza los ejes de conteo, probabilidad, densidad y gráfico de cuantiles normales al lado izquierdo de un gráfico horizontal.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Sintaxis:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"Otro…" )

**Descripción:** Calcula intervalo de confianza de las puntuaciones en relación a las probabilidades.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Sintaxis:** obj &lt;&lt; Count Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de conteo para el histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Sintaxis:** obj &lt;&lt; Density Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de densidad para la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Sintaxis:** obj &lt;&lt; Frequencies( state=0|1 )

**Descripción:** Muestra u oculta el informe Frecuencias, que contiene los conteos y las probabilidades para cada nivel. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Sintaxis:** obj &lt;&lt; Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Sintaxis:** obj &lt;&lt; Histogram Color( color )

**Descripción:** Cambia el color de las barras de histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Sintaxis:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descripción:** Cambia la orientación del histograma y los informes a horizontal.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de barras en mosaico para cada variable de respuesta nominal u ordinal. Un gráfico en mosaico es un diagrama de barras apiladas en el que cada segmento es proporcional al conteo de frecuencia de su grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Sintaxis:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descripción:** Ordena el histograma, el gráfico en mosaico y el informe Frecuencias en orden ascendente o descendente, según el conteo. También puede restablecer la ordenación predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Sintaxis:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de probabilidad o proporción para este histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Sintaxis:** obj &lt;&lt; Save( "Números de nivel"|"Ordenación de valores"|"Script en el registro" )

**Descripción:** Guardar los números de niveles en una nueva columna de la tabla de datos o el script en el registro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Sintaxis:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descripción:** Añade un espacio entre las barras del histograma. Esta opción solo está disponible para las variables categóricas.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Sintaxis:** obj &lt;&lt; Show Counts( state=0|1 )

**Descripción:** Muestra u oculta los conteos de las barras en el histograma, que indica la frecuencia de los valores de columna representados por cada barra del histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Sintaxis:** obj &lt;&lt; Show Percents( state=0|1 )

**Descripción:** Muestra u oculta los porcentajes de las barras en el histograma, que indica el porcentaje de los valores de columna representados por cada barra del histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintaxis:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras del error estándar en cada una de las barras del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Sintaxis:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descripción:** Realiza pruebas para comparar las probabilidades estimadas de los niveles de una variable categórica con las probabilidades hipotéticas especificadas (p1, p2, p3, etc.). En el caso de las variables con dos niveles, utilice la opción Prueba para especificar el signo de la hipótesis alternativa de la prueba. En el caso de las variables con más de dos niveles, utilice la opción Fijar para especificar cómo se gestionan los valores hipotéticos faltantes. Tenga en cuenta que f es un argumento opcional que especifica que el nivel anterior se trata como fijo.

**Ejemplo bilateral de dos niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Ejemplo de múltiples niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Ejemplo unilateral de dos niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

#### Vertical

**Sintaxis:** obj &lt;&lt; Vertical( state=0|1 )

**Descripción:** Cambia la orientación del histograma, diagramas de caja y gráficos de cuantiles a vertical. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### Mensajes del elemento

#### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintaxis:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descripción:** Desplaza los ejes de conteo, probabilidad, densidad y gráfico de cuantiles normales al lado izquierdo de un gráfico horizontal.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution(
		Column( :Brush Delimited ),
		Horizontal Layout( 1 ),
		Count Axis( 1 )
	)
);
obj << Axes on Left( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

#### Confidence Interval

**Sintaxis:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"Otro…" )

**Descripción:** Calcula intervalo de confianza de las puntuaciones en relación a las probabilidades.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Sintaxis:** obj &lt;&lt; Count Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de conteo para el histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**Sintaxis:** obj &lt;&lt; Density Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de densidad para la curva de densidad en el histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**Sintaxis:** obj &lt;&lt; Frequencies( state=0|1 )

**Descripción:** Muestra u oculta el informe Frecuencias, que contiene los conteos y las probabilidades para cada nivel. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**Sintaxis:** obj &lt;&lt; Histogram( state=0|1 )

**Descripción:** Muestra u oculta el histograma. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**Sintaxis:** obj &lt;&lt; Histogram Color( color )

**Descripción:** Cambia el color de las barras de histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Sintaxis:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descripción:** Cambia la orientación del histograma y los informes a horizontal.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Sintaxis:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de barras en mosaico para cada variable de respuesta nominal u ordinal. Un gráfico en mosaico es un diagrama de barras apiladas en el que cada segmento es proporcional al conteo de frecuencia de su grupo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset(
	Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
);
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**Sintaxis:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descripción:** Ordena el histograma, el gráfico en mosaico y el informe Frecuencias en orden ascendente o descendente, según el conteo. También puede restablecer la ordenación predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**Sintaxis:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de probabilidad o proporción para este histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset(
	Expr(
		Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) )
	)
);

```

#### Save

**Sintaxis:** obj &lt;&lt; Save( "Números de nivel"|"Ordenación de valores"|"Script en el registro" )

**Descripción:** Guardar los números de niveles en una nueva columna de la tabla de datos o el script en el registro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**Sintaxis:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descripción:** Añade un espacio entre las barras del histograma. Esta opción solo está disponible para las variables categóricas.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**Sintaxis:** obj &lt;&lt; Show Counts( state=0|1 )

**Descripción:** Muestra u oculta los conteos de las barras en el histograma, que indica la frecuencia de los valores de columna representados por cada barra del histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**Sintaxis:** obj &lt;&lt; Show Percents( state=0|1 )

**Descripción:** Muestra u oculta los porcentajes de las barras en el histograma, que indica el porcentaje de los valores de columna representados por cada barra del histograma.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintaxis:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras del error estándar en cada una de las barras del histograma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Sintaxis:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descripción:** Realiza pruebas para comparar las probabilidades estimadas de los niveles de una variable categórica con las probabilidades hipotéticas especificadas (p1, p2, p3, etc.). En el caso de las variables con dos niveles, utilice la opción Prueba para especificar el signo de la hipótesis alternativa de la prueba. En el caso de las variables con más de dos niveles, utilice la opción Fijar para especificar cómo se gestionan los valores hipotéticos faltantes. Tenga en cuenta que f es un argumento opcional que especifica que el nivel anterior se trata como fijo.

**Ejemplo bilateral de dos niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Ejemplo de múltiples niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities(
	Test( Hypothesized ),
	0.8,
	0.04375,
	0.075,
	0.04375,
	0.01875,
	0.01875
);

```

**Ejemplo unilateral de dos niveles**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

#### Vertical

**Sintaxis:** obj &lt;&lt; Vertical( state=0|1 )

**Descripción:** Cambia la orientación del histograma, diagramas de caja y gráficos de cuantiles a vertical. Opción activada de forma predeterminada.

**Ejemplo de distribución de respuesta múltiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**Ejemplo de distribución nominal**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Test Mean

### Mensajes del elemento

#### PValue animation

**Sintaxis:** obj &lt;&lt; Test Mean( PValue Animation )

**Descripción:** Abre una ventana independiente que muestra una animación de cómo cambian los valores p a medida que cambia la media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**Sintaxis:** obj &lt;&lt; Test Mean( Power Animation )

**Descripción:** Abre una ventana independiente que muestra una animación de cómo cambia la potencia a medida que cambia la media y si la prueba es unilateral o bilateral.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### Mensajes del elemento

#### Save Distribution as a Column Property

**Sintaxis:** obj &lt;&lt; Tolerance Interval( Save Distribution as a Column Property )

**Descripción:** Guarda el tipo de Distribución del intervalo de tolerancia como una propiedad de columna dentro de la columna de la tabla de datos original.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

#### Save to Spec Limits Column Property

**Sintaxis:** obj &lt;&lt; Save to Spec Limits Column Property( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Nonparametric&gt;, &lt;Save to Spec Limits Column Property&gt; )

**Descripción:** Guarda el intervalo de tolerancia como límites de especificación en la propiedad de columna Límites de especificación de la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.85 ),
	Save to Spec Limits Column Property
);

```

