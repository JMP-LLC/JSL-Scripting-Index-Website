# Statistical



### ARIMA Forecast

**Sintaxis:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Descripción:** Devuelve un vector de valores pronosticados para la columna dtcol dentro del rango definido por los argumentos from y to. El argumento length especifica la parte de la columna que debe usar la función. El argumento model coincide con los mensajes que se envían a la plataforma Serie de tiempo para ajustar un modelo. El argumento estimates coincide con el hijo del resultado de un mensaje Get Models de un modelo único. Por lo general, el valor from se halla entre 1 y el valor to ambos incluidos. No obstante, si from<=0 y from<=to, parte de los resultados son predicciones filtradas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );ARIMA Forecast(	:Steel Shipments,	96,	ARIMA( 1, 0, 1 ),	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),	Intercept( 6466.03264802329 )},	1,	2);

```

### Arc Finder

**Sintaxis:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Descripción:** Busca los arcos en los datos de punto y crea una nueva columna que identifica los arcos.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );Arc Finder(	Group( :Lot, :Wafer ),	X( :X_Die ),	Y( :Y_Die ),	Min Distance( 12 ), // minimum distance among 3 points to seed an arc	Min Radius( 15 ), // minimum radius of the acceptable arc	Max Radius( 2000 ), // maximum radius of acceptable arc	Max Radius Error( 2 ), // how close a point needs to be added	Min Arc Points( 5 ), // how many points to define an arc	Number of Searches( 500 ), // how many random probes of data	Max Number Arcs( 3 ) // number of arcs searched for);dt << Color or Mark by Column( :Arc Number );dt << Graph Builder(	Size( 1539, 921 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),	Elements( Points( X, Y, Legend( 6 ) ) ));

```

### Best Partition

**Sintaxis:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Descripción:** Determina la agrupación óptima (función experimental).

**JMP Versión agregada:** Antes de la versión 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],	<<ContinuousX,	<<ContinuousY);

```

### Col At

**Sintaxis:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Descripción:** Devuelve el valor de col en la posición de fila index dentro de su grupo byVar. Las filas en las que se evalúa la expresión skip missing con respecto a un valor faltante no se incluyen en la indexación.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**Sintaxis:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la suma acumulativa para la fila actual. Para las variables Por no es necesaria una ordenación previa.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 40;Col Cumulative Sum( :height, :sex );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Cumulative Sum for each Sex",	Formula( Col Cumulative Sum( :height, :sex ) ));dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Interpolate

**Sintaxis:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Descripción:** Devuelve un valor interpolado dentro de yCol que corresponde a la posición de v con xCol. Los valores que estén fuera del rango de xCol serán faltantes a menos que extrapolate esté activado, en cuyo caso se devolverá el valor de yCol más cercano.

**JMP Versión agregada:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );dt << New Column( "date30", Formula( :date + 30 ) );dt << New Column( "gnp30",	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) ));

```

### Col Max

**Sintaxis:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor máximo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Maximum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Maximum Value for Each Age and Sex Group",	Formula( Col Maximum( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );dt << New Column( "Col Max for each Sex grouped by Excluded",	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Maximum

**Sintaxis:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor máximo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Maximum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Maximum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Maximum Value for Each Age and Sex Group",	Formula( Col Maximum( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );dt << New Column( "Col Max for each Sex grouped by Excluded",	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Mean

**Sintaxis:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la media de muestra de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mean( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mean( :height, <<Freq( :weight ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Mean( :height, :age ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Mean for Each Age and Sex Group",	Formula( Col Mean( :height, :age, :sex ) ));

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );dt << New Column( "Col Mean for each Sex grouped by Excluded",	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Median

**Sintaxis:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la mediana especificada en las filas de una columna. El orden queda almacenado internamente para que se puedan realizar múltiples evaluaciones de forma eficiente.

**JMP Versión agregada:** 15

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Col Median Height",	numeric,	continuous,	formula( Col Median( :height ) ));dt << New Column( "Col Median Height by Age",	numeric,	continuous,	formula( Col Median( :height, :age ) ));

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Show( Col Median( :height ) );Row() = 1;Show( Col Median( :height, :age ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );dt << New Column( "Col Median for each Sex grouped by Excluded",	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Min

**Sintaxis:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor mínimo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Minimum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Minimum Value for Each Age and Sex Group",	Formula( Col Minimum( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );dt << New Column( "Col Min for each Sex grouped by Excluded",	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Minimum

**Sintaxis:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor mínimo de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Minimum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Minimum( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Minimum Value for Each Age and Sex Group",	Formula( Col Minimum( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );dt << New Column( "Col Min for each Sex grouped by Excluded",	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Mode

**Sintaxis:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la moda de muestra de las filas de una columna, seleccionando la más pequeña en el caso de que haya varias modas. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** 17

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Mode( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Mode( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Mode for Each Age and Sex Group",	Formula( Col Mode( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );dt << New Column( "Col Mode for each Sex grouped by Excluded",	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Moving Average

**Sintaxis:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve la media móvil de un intervalo dado en función de la fila actual. Para el multiplicador de peso, 1 significa que la ponderación es la misma, 0 significa que la ponderación es lineal y otros valores actúan como multiplicador de ponderación exponencial. Para las variables Por no es necesaria una ordenación previa.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 40;Col Moving Average( :height, 1, 5, 0, :sex );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Moving Average for each Sex",	Formula( Col Moving Average( :height, :sex ) ));dt << New Column( "Col Moving Average for each Sex grouped by Excluded",	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) ));

```

### Col N Missing

**Sintaxis:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el número de valores faltantes de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col N Missing( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col N Missing( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Number of Missing Values for Each Age and Sex Group",	Formula( Col N Missing( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[10] = .;dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );dt << New Column( "Col N Missing for each Sex grouped by Excluded",	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) ));

```

### Col N Unique

**Sintaxis:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descripción:** Devuelve el número de valores únicos de una columna. Si se solicitan los valores faltantes, todos los códigos de valores faltantes se contabilizan como un único valor.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Sintaxis:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve el número de valores no faltantes de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Number( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Number( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",	Formula( Col Number( :height, :age, :sex ) ));

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height[10] = .;dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );dt << New Column( "Col Number for each Sex grouped by Excluded",	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Quantile

**Sintaxis:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve el cuantil especificado en las filas de una columna. El orden queda almacenado internamente para que se puedan realizar múltiples evaluaciones de forma eficiente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Col Quantile Height",	numeric,	continuous,	formula( Col Quantile( :height, 0.5 ) ));dt << New Column( "Col Quantile Height by Age",	numeric,	continuous,	formula( Col Quantile( :height, 0.5, :age ) ));

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Show( Col Quantile( :height, 0.5 ) );Row() = 1;Show( Col Quantile( :height, 0.5, :age ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Quantile for each Sex",	Formula( Col Quantile( :height, 0.5, :sex ) ));dt << New Column( "Col Quantile for each Sex grouped by Excluded",	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) ));

```

### Col Rank

**Sintaxis:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descripción:** Devuelve el rango, que parte desde 1, el valor más bajo, con desempate por orden de fila a menos que se especifique con el argumento <<Tie. "media" genera la media de los rangos empatados, y "mínimo" genera el menor de los rangos empatados. Para "fila" y "arbitrario" cada fila tiene un rango único.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );dt << New Column( "Col Rank for each Sex grouped by Excluded",	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Score

**Sintaxis:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descripción:** Devuelve una puntuación entera para cada valor único, ordenada según cualquier propiedad de columna pertinente.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Score Height", Formula( Col Score( :height ) ) );New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Sintaxis:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Descripción:** Devuelve la posición de esta fila dentro de su grupo byVar, ajustada en función de skip missing y cualquier parámetro sequence.

**JMP Versión agregada:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );New Column( "Row within sex, 60+",	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) ));

```

### Col Simple Exponential Smoothing

**Sintaxis:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Descripción:** Devuelve la predicción de alisado exponencial simple para la fila actual, usando el valor alfa de peso de alisado. Para las variables Por no es necesaria una ordenación previa. La fórmula es Valor predicho[t]=alfa \* Valor observado[t-1] + (1-alfa) \* Valor predicho[t-1], con Valor predicho[1] = Valor observado[1].

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );Row() = 40;Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**Sintaxis:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descripción:** Devuelve el valor menos la media de la columna dividida entre la desviación estándar de la columna en las distintas filas de una columna. Si se especifican columnas Por grupo, el valor se estandariza en función de la media y la desviación estándar de Por grupo.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 1;Col Standardize( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Standardize( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Standardize for each Sex",	Formula( Col Standardize( :height, :sex ) ));dt << New Column( "Col Standardize for each Sex grouped by Excluded",	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Std Dev

**Sintaxis:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la desviación estándar muestral de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Std Dev( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Standard Deviation for Each Age and Sex Group",	Formula( Col Std Dev( :height, :age, :sex ) ));

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Standard Deviation for each Sex",	Formula( Col Std Dev( :height, :sex ) ));dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) ));

```

### Col Sum

**Sintaxis:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descripción:** Devuelve la suma de las filas de una columna. El resultado se guarda en caché internamente para que las evaluaciones múltiples sean más eficientes. Los argumentos opcionales byVar especifican los grupos para realizar el cálculo. Nótese que los argumentos byVar se deben usar en una fórmula de columna o una función For Each Row().

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Sum( :height );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Col Sum( :height, <<Freq( :weight ) );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );For Each Row( Show( Col Sum( :height, :age ) ) );

```

**Ejemplo 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Sum for Each Age and Sex Group",	Formula( Col Sum( :height, :age, :sex ) ));

```

**Ejemplo 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );dt << New Column( "Col Sum for each Sex grouped by Excluded",	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) ));

```

### Cumulative Sum

**Sintaxis:** y = Cumulative Sum( x )

**Descripción:** Devuelve una matriz de sumas parciales para la matriz de entrada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**Sintaxis:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Descripción:** Ajusta una distribución de datos censurados. Los argumentos necesarios son Distribution y YLow o Y. La función devuelve una lista que contiene las estimaciones de los parámetros, matriz de covarianza, log-verosimilitud, AICc, BIC y un mensaje de convergencia. Los argumentos X y Z especifican las matrices de diseño de regresión para la localización y la escala, respectivamente. Cuando el vector de datos tiene un gran tamaño, pueden utilizarse dos argumentos opcionales para especificar una muestra para calcular los valores iniciales. Puede especificar un percent de las observaciones o las primeras nobs observaciones, pero el tamaño muestral total debe ser superior a 100.

**JMP Versión agregada:** Antes de la versión 14

```jsl

result = Fit Censored(	Distribution( "Weibull" ),	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] ));Show( result );

```

### Fit Circle

**Sintaxis:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Descripción:** Ajusta el círculo que mejor pasa por tres o más puntos definidos por dos vectores de coordinadas. El resultado es una lista que contiene las coordenadas X e Y del punto central del círculo, la longitud del radio y la suma de cuadrados de los errores.

**JMP Versión agregada:** 14

```jsl

x = [68, 77, 85, 88, 93, 93, 95, 98];y = [1, 9, 18, 94, 35, 82, 40, 59];result = Fit Circle( x, y );New Window( "Fit Circle",	Graph Box(		X Scale( -50, 100 ),		Y Scale( -20, 130 ),		FrameSize( 300, 300 ),		Marker( x, y );		Circle( {result[1], result[2]}, result[3] );	));

```

### Hier Clust

**Sintaxis:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Descripción:** Devuelve la historia de conglomeración de una conglomeración jerárquica determinada mediante el método de Ward (sin estandarización de datos), donde x es una matriz de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );ex = exdt << get as matrix();exhc = Hierarchical Cluster(	Y( Eval( exdt << Get Column Names ) ),	Method( Ward ),	Standardize( 0 ),	Dendrogram Scale( Even Spacing ),	Number of Clusters( 3 ));Report( exhc )["Dendrogram"] << Close( 1 );Report( exhc )["Clustering History"] << Close( 0 );exhistory = Hier Clust( ex );exhistory[3, 1];

```

### IRT Ability

**Sintaxis:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Descripción:** Genera puntuaciones para la variable latente en un modelo de la teoría de respuesta al ítem con n ítems binarios y una matriz de parámetros desconocidos, especificada por parmMatrix. La matriz de parámetros debe contener tantas filas como parámetros haya en el modelo y tantas columnas como ítems en el análisis.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );obj << Save Ability Formula;Column( dt, N Cols( dt ) ) << Get Formula;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );mth = (dt << get as matrix)[0, Index( 2, 6 )];mthlst = {};i = Floor( Random Uniform( 1, N Rows( mth ) ) );mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];mthlst[2] = IRT Ability(	mth[i, 1],	mth[i, 2],	mth[i, 3],	mth[i, 4],	mth[i, 5],	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]);mthlst;

```

### KDE

**Sintaxis:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Descripción:** Devuelve un estimador de densidad de kernel con selección automática de ancho de banda. El argumento opcional weights debe ser un vector de la misma longitud que el argumento Vector. El argumento opcional bandwidth debe ser un número real positivo o cero, y obliga a usar el valor del argumento bandwidth selection. El argumento opcional bandwidth scale debe ser un número real positivo. El argumento opcional bandwidth selection debe ser 0, 1, 2 o 3, correspondientes a Sheather y Jones, Referencia normal, Regla del pulgar de Silverman o Método de sobrealisado, respectivamente. El argumento opcional kernel acepta los valores 0, 1, 2, 3 o 4, correspondientes a gaussiano, Epanechnikov, bipeso, triangular o rectangular, respectivamente.

**JMP Versión agregada:** Antes de la versión 14

```jsl

// generate sample dataset from a mixture of 3 normal distributionsndata3 = 25;Random Reset( 113 );channel = J( 1, ndata3 * 3, 0 );For( i = 1, i <= ndata3, i++,	channel[1, i] = Random Normal() - 3;	channel[1, ndata3 + i] = Random Normal() / 2;	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;);// use kernel density estimator to estimate the underlying distributionbw = .; // automatic bandwidthbscl = 1; // bandwidth multiplierbsel = 0; // Sheather and Jones bandwith selection// Create data table with estimates from all smoothing KDEs and Binsdt = New Table( "KDE Smoothing",	New Column( "Kernel", "Character" ),	New Column( "Bin" ),	New Column( "Density Estimate" ),	New Column( "Counts" ));kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};For( kernel = 0, kernel < N Items( kernels ), kernel++,	res = KDE(		channel,		<<bandwidth( bw ),		<<bandwidth scale( bscl ),		<<bandwidth selection( bsel ),		<<kernel( kernel )	);	nbin = N Items( res["Bins"] );	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);	dt << Add Rows( nbin );	dt[rows, "Kernel"] = kernels[kernel + 1];	dt[rows, "Bin"] = res["Bins"]`;	dt[rows, "Density Estimate"] = res["Estimates"]`;	dt[rows, "Counts"] = res["Counts"]`;);dt << Graph Builder(	Size( 1000, 376 ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Variables(		X( :Bin ),		Y( :Density Estimate, Side( "Right" ) ),		Y( :Counts, Position( 1 ) ),		Overlay( :Kernel )	),	Elements(		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),		Line( X, Y( 1 ), Legend( 3 ) )	));

```

### LenthPSE

**Sintaxis:** y = LenthPSE( x )

**Descripción:** Devuelve el error seudoestándar de Lenth de los valores de un único vector x.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**Sintaxis:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descripción:** Devuelve el valor máximo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**Sintaxis:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descripción:** Devuelve el valor máximo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Sintaxis:** y = Mean( x1, ... )

**Descripción:** Devuelve la media aritmética de los argumentos o de los valores dentro de una única matriz o lista indicadas como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Sintaxis:** y = Median( x1, ... )

**Descripción:** Devuelve la mediana de los argumentos combinados, que pueden ser argumentos escalares, matriz o lista.

**JMP Versión agregada:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**Sintaxis:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descripción:** Devuelve el valor mínimo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**Sintaxis:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descripción:** Devuelve el valor mínimo entre los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**Sintaxis:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Descripción:** Devuelve una matriz de las medias móviles para la matriz de entrada. before y after determinan el rango ("ventana") de elementos de los que calcular la media, donde before puede ser -1 para indicar todos los elementos anteriores. Si weighting es 1, todos los elementos tienen el mismo peso. Si weighting es 0, los elementos tienen pesos linealmente incrementales. De lo contrario, weighting es el parámetro para la ponderación exponencial (EWMA). partial window is missing indica si las medias se notifican cuando no todos los vecinos están presentes, lo que puede producirse en los extremos o cerca de los valores faltantes. Si partial window is missing no es cero, se notifican los valores faltantes para tales ventanas parciales.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List(	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )});

```

### N Missing

**Sintaxis:** y = N Missing( x1, x2, ... )

**Descripción:** Devuelve el número de valores faltantes entre los argumentos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**Sintaxis:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Descripción:** Calcula el factor de tolerancia para construir un intervalo de confianza de 1 alfa para contener la proporción p de las medias con tamaño muestral n de la distribución normal. Existe una opción para solicitar el factor para un intervalo de tolerancia unilateral.

**JMP Versión agregada:** 19

```jsl

n = 15;New Window( "Example: Tolerance Factor()",	tdig = Graph Box(		Y Scale( 0, 5 ),		X Scale( 0.05, 0.95 ),		Yname( "Tolerance Factor" ),		Xname( "p" ),		Pen Color( "red" );		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );		Text( {0.1, 4}, "n=", Round( n ) );	),	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) ));

```

### Number

**Sintaxis:** y = Number( x1, ... )

**Descripción:** Devuelve el número de argumentos o valores no faltantes dentro de una matriz única o un argumento de lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**Sintaxis:** y = Product( assignExpr, limit, bodyExpr )

**Descripción:** Devuelve el producto de los resultados de evaluar los argumentos bodyExpr, aumentando cada vez la variable del argumento assignExpr hasta que sea mayor o igual que el argumento limit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**Sintaxis:** y = Quantile( p, x1, ... )

**Descripción:** Devuelve el cuantil especificado p de los argumentos x. El argumento del cuantil puede ser un escalar o una matriz. También se pueden especificar los valores x como valores dentro de una única matriz o argumento de lista.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List(	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )});

```

### Range

**Sintaxis:** y = Range( x1, ... )

**Descripción:** Devuelve los valores mínimo y máximo entre los argumentos combinados, que pueden ser argumentos escalares, matriz o lista.

**JMP Versión agregada:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**Sintaxis:** y = SSQ( x1, ... )

**Descripción:** Devuelve la suma de cuadrados de todos los elementos

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**Sintaxis:** y = Std Dev( x1, ... )

**Descripción:** Devuelve la desviación estándar de los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**Sintaxis:** y = Sum( x1, ... )

**Descripción:** Devuelve la suma de los argumentos o de los valores dentro de una única matriz o lista indicada como argumento.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**Sintaxis:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Descripción:** Calcula diversos estadísticos de resumen en una columna By. Los nombres de los estadísticos son Conteo, Suma, Media, Máx. o Máximo, Mín. o Mínimo, Desviación estándar, Correlación, Cuantil, Primero. Los estadísticos solo se calculan para columnas numéricas. Los resultados se almacenan en forma de matrices en variables con los nombres especificados.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( exg = By( :sex ), exm = Mean( :height ) );Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Sintaxis:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Descripción:** Calcula todas las combinaciones de Ajustar Y en función de X

**JMP Versión agregada:** Antes de la versión 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Sintaxis:** y = Summation( assignExpr, limit, bodyExpr )

**Descripción:** Devuelve la suma de los resultados de evaluar los argumentos bodyExpr, aumentando cada vez la variable del argumento assignExpr hasta que sea mayor o igual que el argumento limit.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

