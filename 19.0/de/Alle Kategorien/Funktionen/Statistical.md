# Statistical



### ARIMA Forecast

**Syntax:** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Beschreibung:** Gibt einen Vektor von Vorhersagewerten für die Spalte dtcol in dem Bereich zurück, der von den Argumenten from und to“ angegeben wird. Das Argument length gibt einen Anteil der Spalte an, den die Funktion verwenden soll. Das Argument model stimmt mit Meldungen überein, die an die Zeitreihenplattform gesendet werden, um ein Modell anzupassen. Das Argument estimates stimmt mit dem untergeordneten Element des Ergebnisses einer Meldung „Modelle abrufen“ eines einzelnen Modells überein. Typischerweise liegt der Wert from zwischen 1 und dem Wert to, jeweils inklusive. Wenn jedoch from<=0 und from<=to sind, handelt es sich bei einem Teil der Ergebnisse um gefilterte Vorhersagen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Beschreibung:** Findet die Bögen in den Punktdaten und erstellt eine neue Spalte, in der die Bögen identifiziert werden.

**JMP Version hinzugefügt:** 14

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

**Syntax:** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Beschreibung:** Ermittelt die optimale Gruppierung (Versuchsfunktion).

**JMP Version hinzugefügt:** Vor Version 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Col At

**Syntax:** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Beschreibung:** Gibt den Wert von col an der Zeilenposition index innerhalb seiner byVar-Gruppe zurück. Zeilen, in denen der skip missing-Ausdruck einen fehlenden Wert ergibt, werden bei der Indizierung nicht berücksichtigt.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex", Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) ) );
New Column( "Relative to First Height", Formula( :height / Col At( :height, 1, :sex ) ) );
New Column( "Relative to Last Height", Formula( :height / Col At( :height, -1, :sex ) ) );

```

### Col Cumulative Sum

**Syntax:** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die kumulierte Summe für die aktuelle Zeile an. Nach-Variablen brauchen nicht vorsortiert zu werden.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

#### Beispiel 2

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

**Syntax:** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Beschreibung:** Gibt einen interpolierten Wert innerhalb von yCol zurück, der der Position von v entspricht, wobei xCol]. Values outside the range of xCol fehlt, es sei denn, extrapolate ist eingeschaltet; in diesem Fall wird der nächste yCol-Wert zurückgegeben.

**JMP Version hinzugefügt:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula( Col Interpolate( :date30, :date, :"gross national product ($billions)"n ) )
);

```

### Col Max

**Syntax:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den maximalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Syntax:** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den maximalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Syntax:** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den Mittelwert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

#### Beispiel 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

#### Beispiel 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Syntax:** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den angegebenen Median über Zeilen in einer Spalte zurück. Die Reihenfolge wird intern gespeichert, so dass mehrfache Auswertungen effizient sind.

**JMP Version hinzugefügt:** 15

#### Beispiel 1

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

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Syntax:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den minimalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Syntax:** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den minimalen Wert der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Syntax:** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt den Stichprobenmodus über die Zeilen in einer Spalte zurück, wobei bei mehreren Modi der kleinste ausgewählt wird. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** 17

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Syntax:** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den gleitenden Mittelwert über ein vorgegebenes Intervall basierend auf der aktuellen Zeile zurück. Beim Gewichtungsmultiplikator bedeutet 1 gleiche Gewichtung, 0 bedeutet lineare Gewichtung und andere Werte fungieren als ein exponentieller Gewichtungsmultiplikator. Nach-Variablen brauchen nicht vorsortiert zu werden.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

#### Beispiel 2

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

**Syntax:** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt die Anzahl fehlender Werte über Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

#### Beispiel 4

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

**Syntax:** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Beschreibung:** Gibt die Anzahl der eindeutigen Werte in einer Spalte zurück. Wenn fehlende Werte angefordert werden, werden alle Fehlende-Werte-Codes als ein einzelner Wert gezählt.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Syntax:** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Anzahl nicht-fehlender Werte über Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

#### Beispiel 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

#### Beispiel 4

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

**Syntax:** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt das angegebene Quantil über Zeilen in einer Spalte zurück. Die Reihenfolge wird intern gespeichert, so dass mehrfache Auswertungen effizient sind.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

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

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

#### Beispiel 3

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

**Syntax:** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Beschreibung:** Gibt den Rang zurück, dabei ist 1 der niedrigste Rang, mit zeilenweisem Gleichstand, sofern nicht vom Argument <<Tie angegeben. Die Option „Mittelwert“ erzeugt den Mittelwert für gebundene Ränge und „Minimum“ erzeugt den niedrigsten der gebundenen Ränge. Für „Zeile“ und „beliebig“ hat jede Zeile einen eindeutigen Rang.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Syntax:** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Beschreibung:** Gibt einen ganzzahlige Score für jeden eindeutigen Wert zurück, wobei die Reihenfolge nach den jeweiligen Spalteneigenschaften festgelegt wird.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Syntax:** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Beschreibung:** Gibt die Position dieser Zeile innerhalb ihrer byVar-Gruppe zurück, adjustiert durch skip missing und etwaige sequence-Parameter.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex", Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) ) );
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Simple Exponential Smoothing

**Syntax:** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Beschreibung:** Gibt die einfache exponentielle Glättungsvorhersage für die aktuelle Zeile mittels Glättungsgewichtung Alpha zurück. Nach-Variablen brauchen nicht vorsortiert zu werden. Die Formel ist Vorhersagewert[t] = Alpha * beobachteter Wert[t-1] + (1-Alpha) * Vorhersagewert[t-1], mit Vorhersagewert[1] = beobachteter Wert[1].

**JMP Version hinzugefügt:** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**Syntax:** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Beschreibung:** Gibt den Wert minus dem Spaltenmittelwert dividiert durch die Standardabweichung der Spalte über die Zeilen in einer Spalte zurück. Wenn Nach-Gruppen-Spalten angegeben werden, wird der Wert gegen den Mittelwert und die Standardabweichung der Nach-Gruppe standardisiert.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

#### Beispiel 3

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

**Syntax:** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Stichproben-Standardabweichung der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

#### Beispiel 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

#### Beispiel 5

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

**Syntax:** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Beschreibung:** Gibt die Summe der Zeilen in einer Spalte zurück. Das Ergebnis wird intern gespeichert, so dass mehrfache Auswertungen effizient sind. Die optionalen Argumente byVar geben Nach-Gruppen für die Berechnung an. Beachten Sie, dass die byVar-Argumente in einer Spaltenformel oder in einer Funktion For Each Row() verwendet werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

#### Beispiel 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

#### Beispiel 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

#### Beispiel 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

#### Beispiel 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Cumulative Sum

**Syntax:** y = Cumulative Sum( x )

**Beschreibung:** Gibt eine Matrix partieller Summen für die Eingabematrix zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**Syntax:** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Beschreibung:** Passt eine Verteilung an zensierte Daten an. Die erforderlichen Argumente sind Distribution und entweder YLow oder Y. Die Funktion gibt eine Liste zurück, die Parameterschätzwerte, Kovarianzmatrix, Log-Likelihood, AICc, BIC und eine Konvergenzmitteilung enthält. Die Argumente X und Z geben Regressions-Designmatrizen für Lage und Skala an. Wenn der Datenvektor groß ist, kann mithilfe von zwei optionalen Argumenten eine Stichprobe zum Berechnen der Startwerte angegeben werden. Sie können einen percent der Beobachtungen oder die ersten nobs Beobachtungen angeben, doch die Gesamtstichprobengröße muss größer als 100 sein.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Syntax:** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Beschreibung:** Passt den Kreis an, der am besten durch drei oder mehr Punkte verläuft, die von zwei Koordinatenvektoren definiert sind. Das Ergebnis ist eine Liste mit den X- und Y-Koordinaten des Mittelpunkts des Kreises, die Länge des Radius und die Summe der quadrierten Abweichungen.

**JMP Version hinzugefügt:** 14

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

**Syntax:** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Beschreibung:** Gibt den Verlauf des Clusterns für ein hierarchisches Clustern mittels Ward-Methode (ohne Standardisierung der Daten) zurück, dabei ist x eine Datenmatrix.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Beschreibung:** Produziert Scores für die latente Variable in einem Modell der probabilistischen Testtheorie mit n binären Items und einer Matrix bekannter Parameter, angegeben von parmMatrix. Die Parametermatrix muss so viele Zeilen enthalten, wie das Modell Parameter enthält, und so viele Spalten, wie es Items in der Analyse gibt.

**JMP Version hinzugefügt:** Vor Version 14

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

#### Beispiel 2

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

**Syntax:** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Beschreibung:** Gibt einen Schätzwert der Kerndichte mit automatischer Bandbreitenauswahl zurück. Das optionale Argument weights muss ein Vektor mit derselben Länge wie das Argument Vector sein. Das optionale Argument bandwidth muss eine nicht negative reelle Zahl oder Null sein, wodurch die Verwendung des für die Bandbreite ausgewählten Werts bandwidth selection eingestellt wird. Das optionale Argument bandwidth scale muss eine positive reelle Zahl sein. Das optionale Argument bandwidth selection muss 0, 1, 2 oder 3 sein, für die jeweilige Auswahl von Sheather und Jones, normale Referenz, Faustregel nach Silverman oder Oversmoother. Das optionale Argument kernel akzeptiert die Werte 0, 1, 2, 3 oder 4, für die jeweilige Auswahl von Gauß, Epanechnikov, Biweight, Dreieck oder Rechteck.

**JMP Version hinzugefügt:** Vor Version 14

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

**Syntax:** y = LenthPSE( x )

**Beschreibung:** Gibt Lenths Pseudo-Standardfehler der Werte innerhalb eines einzelnen Vektors x zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Beschreibung:** Gibt den Maximalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**Syntax:** y = Max( x1, ... ); y = Maximum( x1, ... )

**Beschreibung:** Gibt den Maximalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Syntax:** y = Mean( x1, ... )

**Beschreibung:** Gibt den arithmetischen Mittelwert aller Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntax:** y = Median( x1, ... )

**Beschreibung:** Gibt den Median der kombinierten Argumente zurück, die Skalar-, Matrix- oder Listenargumente sein können.

**JMP Version hinzugefügt:** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Beschreibung:** Gibt den Minimalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**Syntax:** y = Min( x1, ... ); y = Minimum( x1, ... )

**Beschreibung:** Gibt den Minimalwert unter den Argumenten oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**Syntax:** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Beschreibung:** Gibt eine Matrix der gleitenden Mittelwerte für die Eingabematrix zurück. before und after bestimmen den Bereich („Fenster“) der zu mittelnden Elemente, wobei before -1 sein kann, um alle vorherigen Elemente anzuzeigen. Wenn weighting 1 ist, haben alle Elemente die gleiche Gewichtung. Wenn weighting 0 ist, haben die Elemente linear inkrementelle Gewichtungen. Andernfalls ist weighting der Parameter für die exponentielle Gewichtung (EWMA). partial window is missing zeigt an, ob Mittelwerte berichtet werden, wenn nicht alle Nachbarn vorhanden sind, was an den Enden oder nahe fehlender Werte auftreten kann. Wenn partial window is missing ungleich Null ist, werden stattdessen für solche partiellen Fenster fehlende Werte berichtet.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### N Missing

**Syntax:** y = N Missing( x1, x2, ... )

**Beschreibung:** Gibt die Anzahl fehlender Werte unter den Argumenten aus.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**Syntax:** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Beschreibung:** Berechnet den Toleranzfaktor für die Konstruktion eines 1-Alpha-Konfidenzintervalls, das den Anteil p der Mittelwerte mit der Stichprobengröße n aus der Normalverteilung enthält. Es gibt eine Option, um den Faktor für ein einseitiges Toleranzintervall anzufordern.

**JMP Version hinzugefügt:** 19

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

**Syntax:** y = Number( x1, ... )

**Beschreibung:** Gibt die Anzahl nicht fehlender Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**Syntax:** y = Product( assignExpr, limit, bodyExpr )

**Beschreibung:** Gibt das Produkt der Auswertungen der Argumente bodyExpr zurück, wobei die Variable des Arguments assignExpr jedes Mal erhöht wird, bis sie größer oder gleich dem Argument limit ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**Syntax:** y = Quantile( p, x1, ... )

**Beschreibung:** Gibt das angegebene Quantil p der Argumente x zurück. Das Quantilargument kann skalar oder eine Matrix sein. Die Werte x können auch als Werte innerhalb einer einzelnen Matrix oder eines Listenarguments angegeben werden.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**Syntax:** y = Range( x1, ... )

**Beschreibung:** Gibt die Minimum- und Maximumwerte unter den kombinierten Argumenten zurück, die Skalar-, Matrix- oder Listenargumente sein können.

**JMP Version hinzugefügt:** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**Syntax:** y = SSQ( x1, ... )

**Beschreibung:** Gibt die Summe der Quadrate aller Elemente zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**Syntax:** y = Std Dev( x1, ... )

**Beschreibung:** Gibt die Standardabweichung der Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**Syntax:** y = Sum( x1, ... )

**Beschreibung:** Gibt die Summe der Argumente oder der Werte innerhalb eines einzelnen Matrix- oder Listenarguments zurück.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**Syntax:** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Beschreibung:** Berechnet verschiedene statistische Kenngrößen über eine „Nach“-Spalte. Die Namen der statistischen Kenngrößen sind Count, Sum, Mean, Max oder Maximum, Min oder Minimum, StdDev, Corr, Quantile, First. Die statistischen Kenngrößen können nur für numerische Spalten berechnet werden. Die Ergebnisse werden als Matrizen in Variablen mit den vorgegebenen Namen gespeichert.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntax:** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Beschreibung:** Berechnet alle Kombinationen für „Y nach X anpassen“

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntax:** y = Summation( assignExpr, limit, bodyExpr )

**Beschreibung:** Gibt die Summe der Auswertungen der Argumente bodyExpr zurück, wobei die Variable des Arguments assignExpr jedes Mal erhöht wird, bis sie größer oder gleich dem Argument limit ist.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

