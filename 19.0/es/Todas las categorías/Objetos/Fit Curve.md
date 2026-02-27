# Fit Curve



## ANOM for Estimates

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

## Columnas

### By

**Sintaxis:** obj = Fit Curve(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;

```

### Freq

**Sintaxis:** obj = Fit Curve(...&lt;Freq( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan una frecuencia a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Freq( _freqcol )
);
obj << Fit Logistic 4P;

```

### Group

**Sintaxis:** obj = Fit Curve(...&lt;Group( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una variable de agrupación. El modelo ajustado tiene parámetros distintos para cada nivel de la variable de agrupación.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Regressor

**Sintaxis:** obj = Fit Curve(...&lt;Regressor( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables predictoras.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Response

**Sintaxis:** obj = Fit Curve(...Response( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables de respuesta.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Supplementary

**Sintaxis:** obj = Fit Curve(...&lt;Supplementary( column(s) )&gt;...)

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

### Weight

**Sintaxis:** obj = Fit Curve(...&lt;Weight( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica una columna cuyos valores asignan un peso a cada fila del análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Weight( _weightcol )
);
obj << Fit Logistic 4P;

```

### X

**Sintaxis:** obj = Fit Curve(...&lt;X( column )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables predictoras.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Y

**Sintaxis:** obj = Fit Curve(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Especifica las variables de respuesta.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Z

**Sintaxis:** obj = Fit Curve(...&lt;Z( column(s) )&gt;...)

**Descripción:** Especifica una o más variables suplementarias. Las variables suplementarias no se utilizan en ninguno de los cálculos de la plataforma e incluirlas no afecta a los resultados. Estas variables pueden mejorar la interpretación de los datos o pueden servir para análisis futuros.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );
obj << Fit Cubic;

```

## Constructores asociados

### Fit Curve

**Sintaxis:** Fit Curve( Y( column ), X( column ) )

**Descripción:** Ajusta una diversidad de modelos no lineales integrados.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

## Mensajes del elemento

### F1 Analysis

**Sintaxis:** obj &lt;&lt; F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Descripción:** Realiza un análisis de la curva de disolución utilizando el factor de diferencia F1, que mide la diferencia porcentual entre las curvas de la tableta de referencia y las curvas de la tableta de prueba en cada punto temporal.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F1 Analysis(
	Alpha( 0.05 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 2000 ),
	Random Seed( 1234 )
);

```

### F2 Analysis

**Sintaxis:** obj &lt;&lt; F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**Descripción:** Realiza un análisis de la curva de disolución utilizando el factor de similitud F2, que mide la similitud del porcentaje de disolución entre las curvas de la tableta de referencia y las curvas de la tableta de prueba.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << F2 Analysis(
	Alpha( 0.1 ),
	Reference Level( "R01" ),
	Bootstrap Samples( 3000 ),
	Random Seed( 4321 )
);

```

### Fit Antoine Equation

**Sintaxis:** obj &lt;&lt; Fit Antoine Equation

**Descripción:** Ajusta el modelo de Antoine a los datos. Este modelo se utiliza a menudo para modelizar la presión de vapor como función de la temperatura.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );
obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**Sintaxis:** obj &lt;&lt; Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**Sintaxis:** obj &lt;&lt; Fit Biexponential 4P

**Descripción:** Ajusta un modelo biexponencial de cuatro parámetros a los datos.

```jsl

Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**Sintaxis:** obj &lt;&lt; Fit Biexponential 5P

**Descripción:** Ajusta modelo biexponencial de cinco parámetros a los datos.

```jsl

Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**Sintaxis:** obj &lt;&lt; Fit Cell Growth 4P

**Descripción:** Ajusta un crecimiento de cuatro parámetros y el modelo de decrecimiento a los datos.

```jsl

Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Cell Growth 4P;

```

### Fit Cubic

**Sintaxis:** obj &lt;&lt; Fit Cubic

**Descripción:** Ajusta un modelo cúbico a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Cubic;

```

### Fit ExGaussian Peak

**Sintaxis:** obj &lt;&lt; Fit ExGaussian Peak

**Descripción:** Ajusta un modelo de pico gaussiano modificado exponencialmente a los datos.

```jsl

Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**Sintaxis:** obj &lt;&lt; Fit Exponential 2P

**Descripción:** Ajusta un modelo exponencial de dos parámetros a los datos. La respuesta ajustada tiene una asíntota a cero.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**Sintaxis:** obj &lt;&lt; Fit Exponential 3P

**Descripción:** Ajusta un modelo exponencial de tres parámetros a los datos. La respuesta ajustada está delimitada por una asíntota estimada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Fit Curve( Y( :pop ), X( :year ) );
obj << Fit Exponential 3P;

```

### Fit First Order Rate

**Sintaxis:** obj &lt;&lt; Fit First Order Rate

**Descripción:** Ajusta un modelo de tasas de primer orden a los datos. Resulta útil para modelizar reacciones químicas y solo está disponible cuando los valores X son no negativos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**Sintaxis:** obj &lt;&lt; Fit First Order with Equilibrium

**Descripción:** Ajusta un modelo de tasas de primer orden con equilibrio a los datos. Resulta útil para modelizar reacciones químicas y solo está disponible cuando los valores X son no negativos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**Sintaxis:** obj &lt;&lt; Fit First Order with Limits

**Descripción:** Ajusta un modelo de tasas de primer orden con límites a los datos. Resulta útil para modelizar reacciones químicas y solo está disponible cuando los valores X son no negativos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**Sintaxis:** obj &lt;&lt; Fit Gaussian Peak

**Descripción:** Ajusta un modelo de pico gaussiano a los datos.

```jsl

Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**Sintaxis:** obj &lt;&lt; Fit Gompertz 3P

**Descripción:** Ajusta una curva Gompertz de tres parámetros a los datos. La respuesta ajustada está delimitada por cero y una asíntota estimada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**Sintaxis:** obj &lt;&lt; Fit Gompertz 4P

**Descripción:** Ajusta una curva Gompertz de cuatro parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Gompertz 4P;

```

### Fit Higuchi

**Sintaxis:** obj &lt;&lt; Fit Higuchi

**Descripción:** Ajusta un modelo de Higuchi a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**Sintaxis:** obj &lt;&lt; Fit Higuchi with Burst

**Descripción:** Ajusta un modelo de Higuchi con un componente de ráfaga a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**Sintaxis:** obj &lt;&lt; Fit Higuchi with Lag

**Descripción:** Ajusta un modelo de Higuchi con un componente de desfase a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**Sintaxis:** obj &lt;&lt; "Fit Hixson-Crowell"n

**Descripción:** Ajusta un modelo de Hixson-Crowell a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**Sintaxis:** obj &lt;&lt; "Fit Hixson-Crowell with Lag"n

**Descripción:** Ajusta un modelo de Hixson-Crowell con un componente de desfase a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**Sintaxis:** obj &lt;&lt; Fit Hybrid Exponential

**Descripción:** Ajusta un modelo exponencial híbrido a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**Sintaxis:** obj &lt;&lt; Fit Inverse Michaelis Menten; obj &lt;&lt; "Fit Inverse Michaelis-Menten"n

**Descripción:** Ajusta el modelo de cinética enzimática inversa de Michaelis-Menten a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**Sintaxis:** obj &lt;&lt; "Fit Korsmeyer-Peppas"n

**Descripción:** Ajusta un modelo de Korsmeyer-Peppas a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**Sintaxis:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Burst"n

**Descripción:** Ajusta un modelo de Korsmeyer-Peppas con un componente de ráfaga a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**Sintaxis:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Lag"n

**Descripción:** Ajusta un modelo de Korsmeyer-Peppas con un componente de desfase a los datos. Se trata de una técnica paramétrica para comparar curvas de disolución.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**Sintaxis:** obj &lt;&lt; Fit Linear

**Descripción:** Ajusta un modelo de regresión por mínimos cuadrados a los datos. Se muestra la línea de ajuste en el gráfico y se genera un informe de ajuste.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Linear;

```

### Fit Logistic 2P

**Sintaxis:** obj &lt;&lt; Fit Logistic 2P

**Descripción:** Ajusta una curva logística de dos parámetros a los datos. La respuesta ajustada está delimitada por asíntotas cero y uno.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**Sintaxis:** obj &lt;&lt; Fit Logistic 3P

**Descripción:** Ajusta una curva logística de tres parámetros a los datos. La respuesta ajustada está delimitada por cero y una asíntota estimada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**Sintaxis:** obj &lt;&lt; Fit Logistic 4P

**Descripción:** Ajusta un modelo logístico de cuatro parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**Sintaxis:** obj &lt;&lt; Fit Logistic 4P Hill

**Descripción:** Ajusta un modelo logístico de cuatro parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**Sintaxis:** obj &lt;&lt; Fit Logistic 4P Rodbard

**Descripción:** Ajusta un modelo logístico de cuatro parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**Sintaxis:** obj &lt;&lt; Fit Logistic 5P

**Descripción:** Ajusta un modelo logístico de cinco parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas. A diferencia de otras curvas logísticas, la logística de cinco parámetros no es simétrica.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**Sintaxis:** obj &lt;&lt; Fit Lorentzian Peak

**Descripción:** Ajusta un modelo de pico de Lorentz a los datos.

```jsl

Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**Sintaxis:** obj &lt;&lt; Fit Mechanistic Growth

**Descripción:** Ajusta el modelo de crecimiento mecanicista a los datos. Se trata de una reparametrización del modelo exponencial de tres parámetros.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );
obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );
obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**Sintaxis:** obj &lt;&lt; Fit Michaelis Menten; obj &lt;&lt; "Fit Michaelis-Menten"n

**Descripción:** Ajusta el modelo de cinética enzimática de Michaelis-Menten a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**Sintaxis:** obj &lt;&lt; Fit One Compartment Oral Dose

**Descripción:** Ajusta un modelo de dosis oral en un compartimento a los datos. Se aconseja este modelo para modelizar la concentración del medicamento en el cuerpo después de una dosis oral.

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**Sintaxis:** obj &lt;&lt; Fit Pearson VII Peak

### Fit Power Model

**Sintaxis:** obj &lt;&lt; Fit Power Model

**Descripción:** Ajusta un modelo de potencia a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Power Model;

```

### Fit Probit 2P

**Sintaxis:** obj &lt;&lt; Fit Probit 2P

**Descripción:** Ajusta una curva probit de dos parámetros a los datos. La respuesta ajustada está delimitada por asíntotas cero y uno.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
miny = Min( dat[0, 3] );
maxy = Max( dat[0, 3] );
newy = (dat[0, 3] - miny) / (maxy - miny);
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 2P;

```

### Fit Probit 3P

**Sintaxis:** obj &lt;&lt; Fit Probit 3P

**Descripción:** Ajusta una curva probit de tres parámetros a los datos. La respuesta ajustada está delimitada por cero y una asíntota estimada.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dat = dt << get as matrix;
maxy = Max( dat[0, 3] );
newy = dat[0, 3] / maxy;
form = Column( 3 ) << get values;
Close( dt, no save );
newtab = As Table( dat[0, 2] || newy );
Column( 1 ) << set name( "log conc" );
Column( 2 ) << set name( "toxicity" );
New Column( "formulation", character, nominal );
Column( 3 ) << set values( form );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 3P;

```

### Fit Probit 4P

**Sintaxis:** obj &lt;&lt; Fit Probit 4P

**Descripción:** Ajusta un modelo probit de cuatro parámetros a los datos. La respuesta ajustada está delimitada por dos asíntotas estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );
obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**Sintaxis:** obj &lt;&lt; Fit Pseudo-Voigt

### Fit Quadratic

**Sintaxis:** obj &lt;&lt; Fit Quadratic

**Descripción:** Ajusta un modelo cuadrático a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quadratic;

```

### Fit Quartic

**Sintaxis:** obj &lt;&lt; Fit Quartic

**Descripción:** Ajusta un polinomio de cuarto orden a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quartic;

```

### Fit Quintic

**Sintaxis:** obj &lt;&lt; Fit Quintic

**Descripción:** Ajusta un polinomio de quinto orden a los datos.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Curve( Y( :height ), X( :weight ) );
obj << Fit Quintic;

```

### Fit Second Order

**Sintaxis:** obj &lt;&lt; Fit Second Order

**Descripción:** Ajusta un modelo de tasas de segundo orden a los datos. Resulta útil para modelizar reacciones químicas y solo está disponible cuando los valores X son no negativos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order;

```

### Fit Second Order with Two Components

**Sintaxis:** obj &lt;&lt; Fit Second Order with Two Components

**Descripción:** Ajusta un modelo de tasas de segundo orden con dos componentes a los datos. Resulta útil para modelizar reacciones químicas y solo está disponible cuando los valores X son no negativos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );
obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );
obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**Sintaxis:** obj &lt;&lt; Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**Sintaxis:** obj &lt;&lt; Fit Two Compartment IV Bolus Dose

**Descripción:** Ajusta un modelo de dosis en bolo intravenoso en dos compartimentos a los datos. Se aconseja este modelo para modelizar la concentración del medicamento en el cuerpo después de una dosis en bolo intravenoso.

```jsl

Random Reset( 7483 );
xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];
yd = J( 11, 1, . );
For( i = 1, i <= 11, i++,
	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal()
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**Sintaxis:** obj &lt;&lt; Fit Weibull Growth

**Descripción:** Ajusta un modelo de crecimiento de Weibull de tres parámetros a los datos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );
obj << Fit Weibull Growth;

```

### Multivariate Distance

**Sintaxis:** obj &lt;&lt; Multivariate Distance( Alpha( number ), Reference Level( level ))

**Descripción:** Realiza un análisis de la curva de disolución utilizando la distancia M de Mahalanobis, que mide la distancia multivariante entre las curvas de la tableta de referencia y las curvas de la tableta de prueba.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

```

### T2EQ

**Sintaxis:** obj &lt;&lt; T2EQ( Alpha( number ), Reference Level( level ))

**Descripción:** Realiza un análisis de curvas de disolución mediante la prueba de equivalencia T2EQ, que mide la distancia multivariante entre las curvas de la tableta de referencia y las curvas de la tableta de prueba.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force )
);
obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

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

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

### New JSL Preset

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

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
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

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ), By( _bycol ) );
obj << Fit Logistic 4P;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
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

**Sintaxis:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

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

## Equivalence with Ratios

### Mensajes del elemento

#### Set Alpha Level

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**Descripción:** Establece el nivel de significación que se utiliza para calcular los intervalos de confianza en el gráfico de equivalencia.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),
		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )
	)
);

```

#### Set Decision Lines

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**Descripción:** Establece las líneas de decisión inferior y superior en el gráfico de equivalencia.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),
		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )
	)
);

```

#### Show Center Line

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**Descripción:** Muestra u oculta la línea central del gráfico de equivalencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) ),
		Equivalence with Ratios( 1, Show Center Line( 1 ) ),
		Equivalence with Ratios( 1, Show Center Line( 0 ) )
	)
);

```

#### Show Decision Limit Shading

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**Descripción:** Muestra u oculta el sombreado de los límites de decisión en el gráfico de equivalencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )
	)
);

```

#### Show Decision Limits

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**Descripción:** Muestra u oculta las líneas de los límites de decisión en el gráfico de equivalencia. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),
		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )
	)
);

```

#### Show Summary Report

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**Descripción:** Muestra u oculta el informe Resumen de equivalencia que contiene las estimaciones de los parámetros, los límites de decisión y si el parámetro ha superado los límites.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P(
	Equivalence Test(
		Reference Group( "Standard" ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),
		Equivalence with Ratios( 1, Show Summary Report( 1 ) )
	)
);

```

## Fit Curve CDOE

### Mensajes del elemento

#### CDOE Fit Plot

**Sintaxis:** scrobj &lt;&lt; CDOE Fit Plot( state=0|1 )

**Descripción:** Muestra u oculta un gráfico de los valores ajustados. Si se especifica una variable de grupo, también hay una cuadrícula de gráficos de los valores ajustados para cada nivel de la variable de grupo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["CDOE Fit"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Fit Plot( 0 );

```

#### CDOE Profiler

**Sintaxis:** scrobj &lt;&lt; CDOE Profiler( state=0|1 )

**Descripción:** Muestra u oculta el perfilador de CDOE, que le permite explorar cómo cambia la respuesta en función de las variables suplementarias. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << CDOE Profiler( 0 );

```

#### Diagnostic Plots

**Sintaxis:** scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**Descripción:** Muestra u oculta los gráficos observados frente a predichos y residuales para la variable de respuesta. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Diagnostic Plots"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 0 );

```

#### Generalized Regression for Model Parameters

**Sintaxis:** scrobj &lt;&lt; Generalized Regression for Model Parameters( state=0|1 )

**Descripción:** Muestra u oculta los informes de regresión generalizada para cada parámetro del modelo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );
Wait( 2 );
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Model Parameters( 0 );

```

#### Save Prediction Formula

**Sintaxis:** scrobj &lt;&lt; Save Prediction Formula

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula de predicción para la respuesta.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));
scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);
scrobj << Save Prediction Formula;

```

## Fit

### Mensajes del elemento

#### Area Under Curve

**Sintaxis:** obj &lt;&lt; Fit Command( Area Under Curve( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Area Under Curve( state=0|1 ))

**Descripción:** Calcula el área bajo la función de predicción ajustada.

```jsl

Random Reset( 7483 );
xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
yd = J( 12, 1, . );
For( i = 1, i <= 12, i++,
	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1
);
dt = As Table( xd || yd );
Column( dt, 1 ) << set name( "x" );
Column( dt, 2 ) << set name( "y" );
obj = dt << Fit Curve( Y( :Y ), X( :X ) );
obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

#### Compare Parameter Estimates

**Sintaxis:** obj &lt;&lt; Fit Command( Compare Parameter Estimates( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Compare Parameter Estimates( state=0|1 ))

**Descripción:** Compara la estimación de los parámetros de cada grupo con la media general. Esta comparación se realiza para cada parámetro.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

#### Curve DOE Analysis

**Sintaxis:** obj &lt;&lt; (Fit[number|name] &lt;&lt; Curve DOE Analysis( state=0|1 ))

**Descripción:** Inicia un informe de regresión generalizada dentro de la plataforma Curva de ajuste. Se ajusta un modelo de regresión generalizada a cada parámetro del modelo utilizando las variables suplementarias como efectos del modelo.

**JMP Versión agregada:** 16

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,
			{Close( 1 )}
		)
	)
);
obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = Fit Curve(
	Y( :"Size/nm"n ),
	X( :Time ),
	Group( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	Fit Biexponential 5P,
	SendToReport(
		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,
			{Close( 1 )}
		),
		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )
	)
);
obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

#### Custom Inverse Prediction

**Sintaxis:** obj &lt;&lt; Fit Command( Custom Inverse Prediction( Response( value ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Custom Inverse Prediction( Response( value )))

**Descripción:** Predice un valor X para el valor de respuesta especificado.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

#### Equivalence Test

**Sintaxis:** obj &lt;&lt; Fit Command( Equivalence Test( Reference Group( column ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Equivalence Test( Reference Group( column )))

**Descripción:** Lleva a cabo pruebas para verificar si la curva ajustada de cada grupo es prácticamente equivalente a la curva ajustada de un grupo de referencia.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

#### Inflection Point

**Sintaxis:** obj &lt;&lt; Fit Command( Inflection Point( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Inflection Point( state=0|1 ))

**Descripción:** Muestra u oculta un informe de las estimaciones del punto de inflexión para el modelo. Esta opción solo está disponible para los modelos Crecimiento de Weibull, Logístico de 4 parámetros Rodbard y Logístico de 5 parámetros.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

#### Make Parameter Table

**Sintaxis:** obj &lt;&lt; Fit Command( Make Parameter Table ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Make Parameter Table)

**Descripción:** Crea una tabla resumen de las estimaciones de los parámetros.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Make Parameter Table );

```

#### Peak Response

**Sintaxis:** obj &lt;&lt; Fit Command( Peak Response( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Peak Response( state=0|1 ))

**Descripción:** Calcula la estimación de la variable Y en el pico de la curva ajustada. Esta opción está disponible para los modelos Crecimiento de celda de 4 parámetros y Un compartimento.

**JMP Versión agregada:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

#### Plot Actual by Predicted

**Sintaxis:** obj &lt;&lt; Fit Command( Plot Actual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico con los valores de respuesta reales en el eje vertical y los valores predichos en el eje horizontal. Si el ajuste es bueno, los puntos se encuentran cerca de la diagonal. Puede ver qué puntos están lejos de la diagonal, buscar patrones y visualizar la prueba.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**Sintaxis:** obj &lt;&lt; Fit Command( Plot Residual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Residual by Predicted( state=0|1 ))

**Descripción:** Muestra u oculta un gráfico con los residuos en el eje vertical y el número de fila en el eje horizontal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );
fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Profiler

**Sintaxis:** obj &lt;&lt; Fit Command( Profiler( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Profiler( state=0|1 ))

**Descripción:** Muestra u oculta un perfilador de la función de predicción ajustada y sus derivadas primera y segunda.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

#### Remove Fit

**Sintaxis:** obj &lt;&lt; (Fit[number|name]&lt;&lt;Remove Fit)

**Descripción:** Quita el ajuste especificado del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P;
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Bootstrap Results

**Sintaxis:** obj &lt;&lt; Fit Command( Save Bootstrap Results ); obj &lt;&lt; (Fit[number] &lt;&lt; Save Bootstrap Results)

**Descripción:** Guarda las columnas en una tabla de datos nueva. La tabla de datos contiene los resultados de bootstrap de un análisis F1 o F2.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),
	Group( :Batch ),
	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),
	F2 Analysis(
		Alpha( 0.1 ),
		Reference Level( "R01" ),
		Bootstrap Samples( 2500 ),
		Random Seed( 1234 )
	),
	SendToReport(
		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )
	)
);
obj << (fit[1] << Save Bootstrap Results);

```

#### Save First Derivative

**Sintaxis:** obj &lt;&lt; Fit Command( Save First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save First Derivative)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula para la primera derivada de la predicción.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative );

```

#### Save Inverse Prediction Formula

**Sintaxis:** obj &lt;&lt; Fit Command( Save Inverse Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Inverse Prediction Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula para la función inversa del modelo ajustado.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

#### Save Parametric Prediction Formula

**Sintaxis:** obj &lt;&lt; Fit Command( Save Parametric Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Parametric Prediction Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula de predicción expresada de forma que pueda ser utilizada por la plataforma No lineal.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

#### Save Prediction Formula

**Sintaxis:** obj &lt;&lt; Fit Command( Save Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Prediction Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula de predicción para las estimaciones de los parámetros actuales.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve(
	Y( :Toxicity ),
	X( :log Conc ),
	Group( :formulation ),
	Fit Logistic 4P
);
obj << (Fit[1] << Save Prediction Formula);

```

#### Save Residual Formula

**Sintaxis:** obj &lt;&lt; Fit Command( Save Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Residual Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene una fórmula para los residuos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Residual Formula );

```

#### Save Stacked Data

**Sintaxis:** obj &lt;&lt; Fit Command( Save Stacked Data ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Stacked Data)

**Descripción:** Guarda las columnas en una tabla de datos nueva. La tabla de datos contiene los datos originales en formato apilado, así como una columna para los valores predichos de la respuesta y una columna para los residuos.

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );
obj = dt << Fit Curve(
	Data Format( Row ),
	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),
	Group( :Batch )
);
obj << Fit Higuchi( Save Stacked Data );

```

#### Save Std Error of First Derivative

**Sintaxis:** obj &lt;&lt; Fit Command( Save Std Error of First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of First Derivative)

**Descripción:** Guarda una columna nueva en la tabla de datos original. La columna nueva contiene la fórmula para el error estándar de la primera derivada de la predicción.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

#### Save Std Error of Predicted

**Sintaxis:** obj &lt;&lt; Fit Command( Save Std Error of Predicted ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of Predicted)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula para calcular los errores estándar de las predicciones.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

#### Save Studentized Residual Formula

**Sintaxis:** obj &lt;&lt; Fit Command( Save Studentized Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Studentized Residual Formula)

**Descripción:** Guarda una columna de fórmulas nueva en la tabla de datos original. La columna nueva contiene la fórmula para los residuos estudentizados, que son residuos estándar divididos por sus desviaciones estándar estimadas.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

#### Test Parallelism

**Sintaxis:** obj &lt;&lt; Fit Command( Test Parallelism( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Test Parallelism( state=0|1 ))

**Descripción:** Prueba si las curvas ajustadas tienen una forma similar en todos los grupos.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );
obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

#### Time to Peak Response

**Sintaxis:** obj &lt;&lt; Fit Command( Time to Peak Response( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Time to Peak Response( state=0|1 ))

**Descripción:** Calcula la estimación de la variable X en el pico de la curva ajustada. Esta opción solo está disponible para los modelos Crecimiento de celda de 4 parámetros y Un compartimento.

**JMP Versión agregada:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 12
3.01, 24.3 .9];
dt = As Table( dat );
Column( dt, 1 ) << set name( "time" );
Column( dt, 2 ) << set name( "concentration" );
obj = dt << Fit Curve( Y( :concentration ), X( :time ) );
obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

