# Statistical



### ARIMA Forecast

**Sintassi:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Descrizione:** Restituisce un vettore di valori previsti per la colonna dtcol nel range determinato dagli argomenti from e to. L&apos;argomento length specifica una porzione della colonna per la funzione da utilizzare. L&apos;argomento model corrisponde a messaggi che sono inviati alla piattaforma Serie storica per stimare un modello. L&apos;argomento estimates corrisponde al figlio di un messaggio Carica modelli risultato di un modello singolo. Tipicamente, il valore from è tra 1 e il valore to, inclusi. Tuttavia, se from<=0 e from<=to, parte dei risultati sono previsioni filtrate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
ARIMA Forecast(
	:Steel Shipments,
	96,
	ARIMA( 1, 0, 1 ),
	{AR Coefficients( {0.900397691783565} ), MA Coefficients( {0.483316746530245} ),
	Intercept( 6466.03264802329 )},
	1,
	2
);

```

### Arc Finder

**Sintassi:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Descrizione:** Trova gli archi nei punti di dati e crea una nuova colonna che identifica gli archi.

**JMP Versione aggiunta:** 14

```jsl


dt = Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );
Arc Finder(
	Group( :Lot, :Wafer ),
	X( :X_Die ),
	Y( :Y_Die ),
	Min Distance( 12 ), // minimum distance among 3 points to seed an arc
	Min Radius( 15 ), // minimum radius of the acceptable arc
	Max Radius( 2000 ), // maximum radius of acceptable arc
	Max Radius Error( 2 ), // how close a point needs to be added
	Min Arc Points( 5 ), // how many points to define an arc
	Number of Searches( 500 ), // how many random probes of data
	Max Number Arcs( 3 ) // number of arcs searched for
);
dt << Color or Mark by Column( :Arc Number );
dt << Graph Builder(
	Size( 1539, 921 ),
	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Lot_Wafer Label ), Color( :Arc Number ) ),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### Best Partition

**Sintassi:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Descrizione:** Determina il raggruppamento ottimale (funzione sperimentale).

**JMP Versione aggiunta:** prima della versione 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Col At

**Sintassi:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Descrizione:** Restituisce il valore di col nella posizione della riga index all&apos;interno del gruppo byVar. Le righe in cui l&apos;espressione skip missing ha un valore mancante non sono incluse nell&apos;indicizzazione.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**Sintassi:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la somma cumulativa per la riga corrente. Le variabili BY non devono essere preordinate.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Cumulative Sum for each Sex",
	Formula( Col Cumulative Sum( :height, :sex ) )
);
dt << New Column( "Col Cumulative Sum for each Sex grouped by Excluded",
	Formula( Col Cumulative Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Interpolate

**Sintassi:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Descrizione:** Restituisce un valore interpolato all&apos;interno di yCol, corrispondente alla posizione di v con xCol]. Values outside the range of xCol mancanti a meno che extrapolate non sia attivo, nel qual caso verrà restituito il valore yCol più prossimo.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col Max

**Sintassi:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore massimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che le valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Sintassi:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore massimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che le valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Sintassi:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la media campione tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

#### Esempio 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

#### Esempio 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Sintassi:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la mediana specificata tra le righe in una colonna. L&apos;ordinamento è memorizzato internamente nella cache per consentire l&apos;efficacia di valutazioni multiple.

**JMP Versione aggiunta:** 15

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Median Height",
	numeric,
	continuous,
	formula( Col Median( :height ) )
);
dt << New Column( "Col Median Height by Age",
	numeric,
	continuous,
	formula( Col Median( :height, :age ) )
);

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Sintassi:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore minimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Sintassi:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il valore minimo tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Sintassi:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la moda campionaria tra le righe in una colonna selezionando la più piccola nel caso di più mode. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una formula o in una funzione For Each Row() di colonna.

**JMP Versione aggiunta:** 17

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Sintassi:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce la media mobile su un dato intervallo in base alla riga corrente. Per il moltiplicatore del peso, 1 significa ponderazione uguale, 0 significa ponderazione lineare e altri valori agiscono da moltiplicatore di ponderazione esponenziale. Le variabili BY non devono essere preordinate.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Moving Average for each Sex",
	Formula( Col Moving Average( :height, :sex ) )
);
dt << New Column( "Col Moving Average for each Sex grouped by Excluded",
	Formula( Col Moving Average( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Missing

**Sintassi:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce il numero di valori mancanti tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti opzionali byVar specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex", Formula( Col N Missing( :height, :sex ) ) );
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**Sintassi:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descrizione:** Restituisce il numero di valori univoci in una colonna. Se vengono richiesti valori mancanti, tutti i codici dei valori mancanti vengono contati come un unico valore.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Sintassi:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce il numero di valori non mancanti tra le righe in una colonna. Il risultato viene memorizzato nella cache internamente in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Number for each Sex", Formula( Col Number( :height, :sex ) ) );
dt << New Column( "Col Number for each Sex grouped by Excluded",
	Formula( Col Number( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Quantile

**Sintassi:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce il quantile specificato tra le righe in una colonna. L&apos;ordinamento è memorizzato internamente nella cache per consentire l&apos;efficacia di valutazioni multiple.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Col Quantile Height",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5 ) )
);
dt << New Column( "Col Quantile Height by Age",
	numeric,
	continuous,
	formula( Col Quantile( :height, 0.5, :age ) )
);

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Quantile for each Sex",
	Formula( Col Quantile( :height, 0.5, :sex ) )
);
dt << New Column( "Col Quantile for each Sex grouped by Excluded",
	Formula( Col Quantile( :height, 0.5, :sex, Excluded( Row State() ) ) )
);

```

### Col Rank

**Sintassi:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Descrizione:** Restituisce il rango, che va da 1 come il più basso, con tie-break ("ridistribuzione" di valori uguali) dato dall&apos;ordine delle righe, a meno che non sia specificato dall&apos;argomento <<Tie. "media" produce la media per i ranghi pari e "minimo" produce il più basso dei ranghi pari. Con "riga" e "arbitrario" ogni riga ha un rango univoco.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Sintassi:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Descrizione:** Restituisce uno score intero per ogni valore univoco, ordinato in base alle proprietà delle colonne rilevanti.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Sintassi:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Descrizione:** Restituisce la posizione di questa riga all&apos;interno del suo gruppo byVar, corretta da skip missing e dai parametri sequence.

**JMP Versione aggiunta:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Simple Exponential Smoothing

**Sintassi:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Descrizione:** Restituisce la previsione di smoothing esponenziale semplice per la riga corrente, usando il peso di smoothing alfa. Le variabili By non necessitano di essere preordinate. La formula è Valore previsto[t]=alfa * Valore osservato[t-1] + (1-alfa) * Valore previsto[t-1], con Valore previsto[1] = Valore osservato[1].

**JMP Versione aggiunta:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**Sintassi:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Descrizione:** Restituisce i valori meno la media di colonna divisi per la deviazione standard delle righe di una colonna. Se sono specificate colonne per gruppo, i valori sono standardizzati rispetto alla media e alla deviazione standard dei gruppi.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

#### Esempio 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standardize for each Sex",
	Formula( Col Standardize( :height, :sex ) )
);
dt << New Column( "Col Standardize for each Sex grouped by Excluded",
	Formula( Col Standardize( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Std Dev

**Sintassi:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la deviazione standard campionaria tra le righe in una colonna. Il risultato viene memorizzato nella cache interna in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati un una colonna formula o in una funzione For Each Row() .

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

#### Esempio 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

#### Esempio 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Standard Deviation for each Sex",
	Formula( Col Std Dev( :height, :sex ) )
);
dt << New Column( "Col Standard Deviation for each Sex grouped by Excluded",
	Formula( Col Std Dev( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Sum

**Sintassi:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Descrizione:** Restituisce la somma tra le righe in una colonna. Il risultato viene memorizzato nella cache intera in modo che valutazioni multiple siano efficienti. Gli argomenti byVar opzionali specificano i gruppi di By per il calcolo. Tenere presente che gli argomenti byVar devono essere usati in una colonna formula o in una funzione For Each Row().

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

#### Esempio 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

#### Esempio 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

#### Esempio 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

#### Esempio 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Cumulative Sum

**Sintassi:** y = Cumulative Sum( x )

**Descrizione:** Restituisce una matrice di somme parziali per la matrice di input.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**Sintassi:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Descrizione:** Stima una distribuzione utilizzando dati con censura. Gli argomenti richiesti sono Distribution e o YLow o Y. La funzione restituisce un elenco che contiene stime dei parametri, matrice di covarianza, log-verosimiglianza, AICc, BIC e un messaggio di convergenza. Gli argomenti X e Z specificano matrici di regressione del piano rispettivamente per la posizione e la scala. Quando il vettore dei dati è grande, è possibile utilizzare due argomenti facoltativi per specificare un campione per calcolare i valori iniziali. Puoi specificare un percent delle osservazioni o le prime nobs osservazioni, ma la dimensione campionaria totale deve essere maggiore di 100.

**JMP Versione aggiunta:** prima della versione 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Sintassi:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Descrizione:** Stima la circonferenza che meglio attraversa tre o più punti che sono definiti da due vettori di coordinate. Il risultato è un elenco che contiene le coordinate X e Y del punto centrale della circonferenza, la lunghezza del raggio e la somma degli errori quadratici.

**JMP Versione aggiunta:** 14

```jsl

x = [68, 77, 85, 88, 93, 93, 95, 98];
y = [1, 9, 18, 94, 35, 82, 40, 59];
result = Fit Circle( x, y );
New Window( "Fit Circle",
	Graph Box(
		X Scale( -50, 100 ),
		Y Scale( -20, 130 ),
		FrameSize( 300, 300 ),
		Marker( x, y );
		Circle( {result[1], result[2]}, result[3] );
	)
);

```

### Hier Clust

**Sintassi:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Descrizione:** Restituisce la cronologia di clusterizzazione per una clusterizzazione gerarchica con metodo di Ward (senza standardizzazione dei dati), dove x è una matrice di dati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

exdt = Open( "$SAMPLE_DATA/Body Measurements.jmp" );
ex = exdt << get as matrix();
exhc = Hierarchical Cluster(
	Y( Eval( exdt << Get Column Names ) ),
	Method( Ward ),
	Standardize( 0 ),
	Dendrogram Scale( Even Spacing ),
	Number of Clusters( 3 )
);
Report( exhc )["Dendrogram"] << Close( 1 );
Report( exhc )["Clustering History"] << Close( 0 );
exhistory = Hier Clust( ex );
exhistory[3, 1];

```

### IRT Ability

**Sintassi:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Descrizione:** Produce score per la variabile latente in un modello di teoria della risposta dell&apos;elemento con elementi binari n e una matrice dei parametri noti, specificata da parmMatrix. La matrice dei parametri deve contenere tante righe quanti parametri nel modello e tante colonne quanti elementi nell&apos;analisi.

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

#### Esempio 2

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
mth = (dt << get as matrix)[0, Index( 2, 6 )];
mthlst = {};
i = Floor( Random Uniform( 1, N Rows( mth ) ) );
mthlst[1] = mth[i, 1] |/ mth[i, 2] |/ mth[i, 3] |/ mth[i, 4] |/ mth[i, 5];
mthlst[2] = IRT Ability(
	mth[i, 1],
	mth[i, 2],
	mth[i, 3],
	mth[i, 4],
	mth[i, 5],
	[0.28 1.93 1.9 1.67 1, -0.06 -0.55 0.5 -1.89 0.04]
);
mthlst;

```

### KDE

**Sintassi:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Descrizione:** Restituisce uno stimatore kernel della densità con selezione automatica della bandwidth. L&apos;argomento facoltativo weights deve essere un vettore della stessa lunghezza dell&apos;argomento Vector. L&apos;argomento facoltativo bandwidth deve essere un numero reale non negativo o zero, obbligando a utilizzare il valore dell&apos;argomento bandwidth selection. L&apos;argomento facoltativo bandwidth scale deve essere un numero reale positivo. L&apos;argomento facoltativo bandwidth selection deve essere 0, 1, 2, o 3, in corrispondenza rispettivamente di Sheather e Jones, Riferimento normale, regola del pollice di Sliverman o Oversmoother. L&apos;argomento facoltativo kernel accetta i valori 0, 1, 2, 3, o 4, corrispondenti rispettivamente a Gaussiano, Epanechnikov, Bipeso, Triangolare o Rettangolare.

**JMP Versione aggiunta:** prima della versione 14

```jsl

// generate sample dataset from a mixture of 3 normal distributions
ndata3 = 25;
Random Reset( 113 );
channel = J( 1, ndata3 * 3, 0 );
For( i = 1, i <= ndata3, i++,
	channel[1, i] = Random Normal() - 3;
	channel[1, ndata3 + i] = Random Normal() / 2;
	channel[1, ndata3 + ndata3 + i] = Random Normal() + 3;
);

// use kernel density estimator to estimate the underlying distribution
bw = .; // automatic bandwidth
bscl = 1; // bandwidth multiplier
bsel = 0; // Sheather and Jones bandwith selection

// Create data table with estimates from all smoothing KDEs and Bins
dt = New Table( "KDE Smoothing",
	New Column( "Kernel", "Character" ),
	New Column( "Bin" ),
	New Column( "Density Estimate" ),
	New Column( "Counts" )
);

kernels = {"Gaussian", "Epanechnikov", "Biweight", "Triangular", "Rectangular"};
For( kernel = 0, kernel < N Items( kernels ), kernel++,
	res = KDE(
		channel,
		<<bandwidth( bw ),
		<<bandwidth scale( bscl ),
		<<bandwidth selection( bsel ),
		<<kernel( kernel )
	);
	nbin = N Items( res["Bins"] );
	rows = (N Rows( dt ) + 1) :: (N Rows( dt ) + nbin);
	dt << Add Rows( nbin );
	dt[rows, "Kernel"] = kernels[kernel + 1];
	dt[rows, "Bin"] = res["Bins"]`;
	dt[rows, "Density Estimate"] = res["Estimates"]`;
	dt[rows, "Counts"] = res["Counts"]`;
);

dt << Graph Builder(
	Size( 1000, 376 ),
	Show Control Panel( 0 ),
	Legend Position( "Bottom" ),
	Variables(
		X( :Bin ),
		Y( :Density Estimate, Side( "Right" ) ),
		Y( :Counts, Position( 1 ) ),
		Overlay( :Kernel )
	),
	Elements(
		Bar( X, Y( 2 ), Overlay( 0 ), Legend( 2 ), Bar Style( "Needle" ) ),
		Line( X, Y( 1 ), Legend( 3 ) )
	)
);

```

### LenthPSE

**Sintassi:** y = LenthPSE( x )

**Descrizione:** Restituisce l&apos;errore pseudo-standard di Lenth dei valori entro un unico vettore x.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**Sintassi:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descrizione:** Restituisce il valore massimo degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**Sintassi:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Descrizione:** Restituisce il valore massimo degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Sintassi:** y = Mean( x1, ... )

**Descrizione:** Restituisce la media aritmetica degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Sintassi:** y = Median( x1, ... )

**Descrizione:** Restituisce la mediana degli argomenti combinati, che possono essere argomenti scalari, matrici o elenchi.

**JMP Versione aggiunta:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**Sintassi:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descrizione:** Restituisce il valore minimo degli argomenti o dei valori all&apos;interno di una matrice singola o di un argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**Sintassi:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Descrizione:** Restituisce il valore minimo degli argomenti o dei valori all&apos;interno di una matrice singola o di un argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**Sintassi:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Descrizione:** Restituisce una matrice di medie mobili per la matrice di input. before e after determinano il range ("finestra") di elementi alla media, dove before può essere -1 per indicare tutti gli elementi a priori. Se weighting è 1, tutti gli elementi hanno uguale peso. Se weighting è 0, gli elementi hanno pesi linearmente incrementali. Altrimenti weighting è il parametro per la ponderazione esponenziale (EWMA). partial window is missing indica se le medie vengono riportate quando non tutti i vicini sono presenti, fatto che può verificarsi alle estremità o vicino a valori mancanti. Se partial window is missing non è zero, vengono riportati i valori mancanti per tali finestre parziali.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### N Missing

**Sintassi:** y = N Missing( x1, x2, ... )

**Descrizione:** Restituisce il numero di valori mancanti tra gli argomenti.

**JMP Versione aggiunta:** prima della versione 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**Sintassi:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Descrizione:** Calcola il fattore di tolleranza per costruire un intervallo di confidenza 1-alfa per contenere la proporzione p delle medie con dimensione campionaria n dalla distribuzione normale. È possibile richiedere il fattore per un intervallo di tolleranza unilaterale.

**JMP Versione aggiunta:** 19

```jsl

n = 15;
New Window( "Example: Tolerance Factor()",
	tdig = Graph Box(
		Y Scale( 0, 5 ),
		X Scale( 0.05, 0.95 ),
		Yname( "Tolerance Factor" ),
		Xname( "p" ),
		Pen Color( "red" );
		Y Function( Normal Tolerance Factor( 0.95, p, n ), p );
		Text( {0.1, 4}, "n=", Round( n ) );
	),
	H List Box( Text Box( "n" ), Slider Box( 5, 25, n, tdig << reshow ) )
);

```

### Number

**Sintassi:** y = Number( x1, ... )

**Descrizione:** Restituisce il numero di argomenti non mancanti o dei valori all&apos;interno di una matrice singola o argomento di elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**Sintassi:** y = Product( assignExpr, limit, bodyExpr )

**Descrizione:** Restituisce il prodotto delle valutazioni degli argomenti bodyExpr, incrementando ogni volta la variabile dall&apos;argomento assignExpr fino a quando è superiore o uguale all&apos;argomento limit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**Sintassi:** y = Quantile( p, x1, ... )

**Descrizione:** Restituisce il quantile specificato p degli argomenti x. L&apos;argomento del quantile può essere scalare o una matrice. I valori x possono anche essere specificati come valori entro una singola matrice o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**Sintassi:** y = Range( x1, ... )

**Descrizione:** Restituisce i valori minimo e massimo tra gli argomenti combinati, che possono essere argomenti scalari, matrici o elenchi.

**JMP Versione aggiunta:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**Sintassi:** y = SSQ( x1, ... )

**Descrizione:** Restituisce la somma dei quadrati di tutti gli elementi

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**Sintassi:** y = Std Dev( x1, ... )

**Descrizione:** Restituisce la deviazione standard degli argomenti o dei valori all&apos;interno di una matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**Sintassi:** y = Sum( x1, ... )

**Descrizione:** Restituisce la somma degli argomenti o dei valori all&apos;interno di un matrice singola o argomento elenco.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**Sintassi:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Descrizione:** Calcola diverse statistiche di riepilogo per una colonna &apos;By&apos;. I nomi delle statistiche sono Count, Sum, Mean, Max o Maximum, Min o Minimum, StdDev, Corr, Quantile, First. Le statistiche possono essere calcolate solo per colonne numeriche. I risultati sono memorizzati come matrici in variabili con i nomi specificati.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Sintassi:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Descrizione:** Calcola tutte le combinazioni Adatta Y su X

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Sintassi:** y = Summation( assignExpr, limit, bodyExpr )

**Descrizione:** Restituisce la somma di valutazioni degli argomenti bodyExpr, incrementando ogni volta la variabile dall&apos;argomento assignExpr fino a quando è superiore o uguale all&apos;argomento limit.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

