# Statistical



### ARIMA Forecast

**Syntaxe :** x = ARIMA Forecast( dtcol, length, model, estimates, from, to )

**Description :** Renvoie un vecteur de valeurs de prévision de la colonne dtcol dans l’intervalle déterminée par les arguments from et to. L’argument length spécifie une portion de colonne à utiliser pour la fonction. L’argument model correspond aux messages qui sont envoyés à la plate-forme Série chronologique pour l’ajustement du modèle. L’argument estimates correspond à l’enfant du résultat du message Obtenir les modèles d’un seul modèle. Typiquement, la valeur from est comprise entre 1 et to, bornes comprises. Cependant, si from<=0 et from<=to, une partie des résultats sont des prévisions filtrées.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** Arc Finder( Group( lot, wafer ), X( col ), Y( col ), &lt;optional arguments&gt; )

**Description :** Trouve les arcs dans les données de points et crée une nouvelle colonne identifiant les arcs.

**JMP Version ajoutée :** 14

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
	Variables(
		X( :X_Die ),
		Y( :Y_Die ),
		Wrap( :Lot_Wafer Label ),
		Color( :Arc Number )
	),
	Elements( Points( X, Y, Legend( 6 ) ) )
);

```

### Best Partition

**Syntaxe :** {c1, c2, g2} = Best Partition( xIndices, yIndices, &lt;&lt;Ordered, &lt;&lt;ContinuousY, &lt;&lt;ContinuousX )

**Description :** Détermine le groupement optimal (fonction expérimentale).

**JMP Version ajoutée :** Avant la version 14

```jsl

/*Example for Continuous X and Continuous Y*/Best Partition(
	[1.2, 2.2, 3.5, 4.4, 5.6, 7.8],
	[11.2, 11.5, 11.8, 100.5, 100.7, 100.8],
	<<ContinuousX,
	<<ContinuousY
);

```

### Col At

**Syntaxe :** y = Col At( col, index, &lt;byVar, ...&gt;, &lt; &lt;&lt;relative(bool)&gt;, &lt; &lt;&lt;skip missing(expr)&gt; )

**Description :** Renvoie la valeur de col à la position de ligne index dans son groupe byVar. Les lignes dont l&apos;expression skip missing est évaluée comme une valeur manquante ne sont pas incluses dans l&apos;index.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Lag Height by Sex",
	Formula( Col At( :height, -1, :sex, <<relative( 1 ) ) )
);
New Column( "Relative to First Height",
	Formula( :height / Col At( :height, 1, :sex ) )
);
New Column( "Relative to Last Height",
	Formula( :height / Col At( :height, -1, :sex ) )
);

```

### Col Cumulative Sum

**Syntaxe :** y = Col Cumulative Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la somme cumulée pour la ligne en cours. Il n&apos;est pas nécessaire d&apos;effectuer un tri préalable des variables Par.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Cumulative Sum( :height, :sex );

```

#### Exemple 2

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

**Syntaxe :** y = Col Interpolate( v, xCol, yCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;method(linear|nearest|previous|next)&gt;, &lt; &lt;&lt;extrapolate(bool)&gt; )

**Description :** Renvoie une valeur interpolée dans yCol, correspondant à la position de v, où xCol]. Values outside the range of xCol seront manquantes, sauf si extrapolate est activé, et dans ce cas la valeur yCol la plus proche sera renvoyée.

**JMP Version ajoutée :** 19

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/GNP.jmp" );
dt << New Column( "date30", Formula( :date + 30 ) );
dt << New Column( "gnp30",
	Formula(
		Col Interpolate( :date30, :date, :"gross national product ($billions)"n )
	)
);

```

### Col Max

**Syntaxe :** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur maximale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Maximum

**Syntaxe :** y = Col Maximum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur maximale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Maximum( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Maximum( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Maximum Value for Each Age and Sex Group",
	Formula( Col Maximum( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Max for each Sex", Formula( Col Maximum( :height, :sex ) ) );
dt << New Column( "Col Max for each Sex grouped by Excluded",
	Formula( Col Maximum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mean

**Syntaxe :** y = Col Mean( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la moyenne d&apos;un échantillon pour les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mean( :height, <<Freq( :weight ) );

```

#### Exemple 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mean( :height, :age ) ) );

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mean for Each Age and Sex Group",
	Formula( Col Mean( :height, :age, :sex ) )
);

```

#### Exemple 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mean for each Sex", Formula( Col Mean( :height, :sex ) ) );
dt << New Column( "Col Mean for each Sex grouped by Excluded",
	Formula( Col Mean( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Median

**Syntaxe :** y = Col Median( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la médiane spécifiée pour toutes les lignes d&apos;une colonne. L&apos;ordre est mis en cache de façon interne afin que les évaluations multiples soient efficaces.

**JMP Version ajoutée :** 15

#### Exemple 1

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

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Median( :height ) );
Row() = 1;
Show( Col Median( :height, :age ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Median for each Sex", Formula( Col Median( :height, :sex ) ) );
dt << New Column( "Col Median for each Sex grouped by Excluded",
	Formula( Col Median( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Min

**Syntaxe :** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur minimale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Minimum

**Syntaxe :** y = Col Minimum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur minimale entre les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Minimum( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Minimum( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Minimum Value for Each Age and Sex Group",
	Formula( Col Minimum( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Min for each Sex", Formula( Col Minimum( :height, :sex ) ) );
dt << New Column( "Col Min for each Sex grouped by Excluded",
	Formula( Col Minimum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Mode

**Syntaxe :** y = Col Mode( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le mode d&apos;un échantillon pour les lignes d&apos;une colonne, en sélectionnant le plus petit dans le cas de plusieurs modes. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row().

**JMP Version ajoutée :** 17

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Mode( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Mode( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Mode for Each Age and Sex Group",
	Formula( Col Mode( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Mode for each Sex", Formula( Col Mode( :height, :sex ) ) );
dt << New Column( "Col Mode for each Sex grouped by Excluded",
	Formula( Col Mode( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Moving Average

**Syntaxe :** y = Col Moving Average( xCol, &lt;weighting=0.25&gt;, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=1&gt;, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la moyenne mobile sur un intervalle donné basé sur la ligne en cours. Pour le multiplicateur de pondération, 1 correspond à une pondération égale, 0 à une pondération linéaire, et les autres valeurs agissent comme un multiplicateur de pondération exponentielle.  Il n&apos;est pas nécessaire d&apos;effectuer un tri préalable des variables Par.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 40;
Col Moving Average( :height, 1, 5, 0, :sex );

```

#### Exemple 2

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

**Syntaxe :** y = Col N Missing( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie le nombre de valeurs manquantes parmi les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col N Missing( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col N Missing( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Missing Values for Each Age and Sex Group",
	Formula( Col N Missing( :height, :age, :sex ) )
);

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[10] = .;
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col N Missing for each Sex",
	Formula( Col N Missing( :height, :sex ) )
);
dt << New Column( "Col N Missing for each Sex grouped by Excluded",
	Formula( Col N Missing( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col N Unique

**Syntaxe :** y = Col N Unique( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Description :** Renvoie le nombre de valeurs uniques dans une colonne. Si les valeurs manquantes sont demandées, tous les codes d&apos;une valeur manquante sont comptés comme une seule valeur.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "N unique age by sex", Formula( Col N Unique( :age, :sex ) ) );
New Column( "N unique height by age", Formula( Col N Unique( :height, :age ) ) );

```

### Col Number

**Syntaxe :** y = Col Number( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le nombre de valeurs non manquantes parmi les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Number( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Number( :height, :age ) ) );

```

#### Exemple 3

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Number of Nonmissing Values for Each Age and Sex Group",
	Formula( Col Number( :height, :age, :sex ) )
);

```

#### Exemple 4

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

**Syntaxe :** y = Col Quantile( xCol, p, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie le quantile spécifié pour toutes les lignes d&apos;une colonne. L&apos;ordre est mis en cache de façon interne afin que les évaluations multiples soient efficaces.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

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

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Show( Col Quantile( :height, 0.5 ) );
Row() = 1;
Show( Col Quantile( :height, 0.5, :age ) );

```

#### Exemple 3

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

**Syntaxe :** y = Col Rank( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt;tie("average"|"row"|"minimum"|"maximum"|"arbitrary")&gt; )

**Description :** Renvoie le rang, 1 étant le plus faible, avec un départage par ordre de ligne sauf si spécifié par l&apos;argument <<Tie. « Moyenne » renvoie la moyenne des rangs ex-æquo et « Minimum » renvoie le plus faible des rangs ex-æquo. Pour « Ligne » et « Arbitraire », chaque ligne a un rang unique.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Rank Height", Formula( Col Rank( :height, <<tie( "average" ) ) ) );
New Column( "Rank Height by age", Formula( Col Rank( :height, :age ) ) );

```

#### Exemple 2

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Rank for each Sex", Formula( Col Rank( :height, :sex ) ) );
dt << New Column( "Col Rank for each Sex grouped by Excluded",
	Formula( Col Rank( :height, :sex, Excluded( Row State() ) ) )
);

```

### Col Score

**Syntaxe :** y = Col Score( xCol, &lt;byVar, ...&gt;, &lt; &lt;&lt;score missing(bool)&gt; )

**Description :** Renvoie un score entier pour chaque valeur unique, en respectant l&apos;ordre des propriétés de colonne pertinentes éventuelles.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Score Height", Formula( Col Score( :height ) ) );
New Column( "Score Height by age", Formula( Col Score( :height, :age ) ) );

```

### Col Sequence

**Syntaxe :** y = Col Sequence( &lt;byVar, ...&gt;, &lt; &lt;&lt;skip missing(expr)&gt;, &lt; &lt;&lt;sequence(start=1, end=unbounded, incr=1, repeat=1)&gt;)

**Description :** Renvoie la position de cette ligne dans son groupe byVar, ajustée selon skip missing et les paramètres sequence éventuels.

**JMP Version ajoutée :** 19

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "Row within sex", Formula( Col Sequence( :sex ) ) );
New Column( "Alternate within sex",
	Formula( Col Sequence( :sex, <<Sequence( 1, 2 ) ) )
);
New Column( "Row within sex, 60+",
	Formula( Col Sequence( :sex, <<skip missing( Sqrt( :height - 60 ) ) ) )
);

```

### Col Simple Exponential Smoothing

**Syntaxe :** y = Col Simple Exponential Smoothing( xCol, alpha, &lt;byVar, ...&gt; )

**Description :** Renvoie la prévision du lissage exponentiel simple pour la ligne active, en utilisant la pondération de lissage alpha. Les variables Par n&apos;ont pas besoin d&apos;être préalablement triées. La formule est : Valeur prévue[t]=alpha * Valeur observée[t-1] + (1-alpha) * Valeur prévue[t-1], avec Valeur prévue[1] = Valeur observée[1].

**JMP Version ajoutée :** 15

```jsl

Open( "$SAMPLE_DATA/Time Series/Seriesa.jmp" );
Row() = 40;
Col Simple Exponential Smoothing( :Column1, .7 );

```

### Col Standardize

**Syntaxe :** y = Col Standardize( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt; )

**Description :** Renvoie la valeur moins la moyenne de la colonne, divisé par l&apos;écart-type de la colonne calculé sur l&apos;ensemble des lignes d&apos;une colonne. Si des colonnes groupées sont spécifiées, la valeur est standardisée par rapport à la moyenne et à l&apos;écart-type du groupe.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 1;
Col Standardize( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Standardize( :height, :age ) ) );

```

#### Exemple 3

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

**Syntaxe :** y = Col Std Dev( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie l&apos;écart-type d&apos;un échantillon pour les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Std Dev( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age ) ) );

```

#### Exemple 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Std Dev( :height, :age, <<Freq( :weight ) ) ) );

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Standard Deviation for Each Age and Sex Group",
	Formula( Col Std Dev( :height, :age, :sex ) )
);

```

#### Exemple 5

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

**Syntaxe :** y = Col Sum( xCol, &lt;byVar, &lt;Excluded( Row State() )&gt;, ...&gt;, &lt; &lt;&lt; Freq( freqCol ) &gt; )

**Description :** Renvoie la somme de toutes les lignes d&apos;une colonne. Le résultat est mis en cache en interne afin que les évaluations multiples soient efficaces. Les arguments facultatifs byVar spécifient des groupes pour le calcul. Notez que les arguments byVar doivent être utilisés dans une formule de colonne ou dans une fonction For Each Row() .

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height );

```

#### Exemple 2

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Col Sum( :height, <<Freq( :weight ) );

```

#### Exemple 3

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
For Each Row( Show( Col Sum( :height, :age ) ) );

```

#### Exemple 4

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Sum for Each Age and Sex Group",
	Formula( Col Sum( :height, :age, :sex ) )
);

```

#### Exemple 5

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Clear Row States << Select Rows( Index( 1, 10 ) ) << Exclude;
dt << New Column( "Col Sum for each Sex", Formula( Col Sum( :height, :sex ) ) );
dt << New Column( "Col Sum for each Sex grouped by Excluded",
	Formula( Col Sum( :height, :sex, Excluded( Row State() ) ) )
);

```

### Cumulative Sum

**Syntaxe :** y = Cumulative Sum( x )

**Description :** Renvoie une matrice des sommes partielles pour la matrice des entrées.

**JMP Version ajoutée :** Avant la version 14

```jsl

Cumulative Sum( [1 1 1 1 . 10 20] );

```

### Fit Censored

**Syntaxe :** result = FitCensored( Distribution(name), YLow(vector) | Y(vector), &lt;YHigh(vector)&gt;, &lt;Weight(vector)&gt;, &lt;X(matrix)&gt;, &lt;Z(matrix)&gt;, &lt;HoldParm(vector)&gt;, &lt;Use random sample to compute initial values(percent)&gt;, &lt;Use first N observations to compute initial values(nobs)&gt; )

**Description :** Ajuste une distribution en utilisant des données censurées. Les arguments requis sont Distribution et soit YLow ou Y. La fonction renvoie une liste contenant l&apos;estimation des paramètres, la matrice de covariance, la log-vraisemblance, l&apos;AICc, le BIC et un message de convergence. Les arguments X et Z spécifient les matrices de plans de la régression, pour la position et l&apos;échelle, respectivement. Lorsque le vecteur de données est important, deux arguments facultatifs peuvent être utilisés afin de  spécifier un échantillon pour calculer les valeurs initiales. Vous pouvez spécifier un percent des observations ou les nobs premières observations, mais la taille totale de l&apos;échantillon doit être supérieure à 100.

**JMP Version ajoutée :** Avant la version 14

```jsl

result = Fit Censored(
	Distribution( "Weibull" ),
	Y( [142, 156, 163, 198, 204, 205, 232, 239, 240, 261, 280, 296, 323, 344] )
);
Show( result );

```

### Fit Circle

**Syntaxe :** {xCenter, yCenter, radius, sse} = Fit Circle( Xvec, Yvec )

**Description :** Ajuste le cercle qui passe par trois points ou plus définis par deux vecteurs de coordonnées. Le résultat est une liste qui contient les coordonnées X et Y du point central du cercle, la longueur du rayon et la somme des carrés des erreurs.

**JMP Version ajoutée :** 14

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

**Syntaxe :** {c1, c2, c3, c4, c5} = Hier Clust( x )

**Description :** Renvoie l&apos;historique de classification d’une classification hiérarchique en utilisant la méthode de Ward (sans standardiser les données), où x est une matrice de données.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = IRT Ability( Q1, ..., Qn, parmMatrix )

**Description :** Produit des scores pour la variable latente d&apos;un modèle de théorie des réponses aux items avec n items binaires et une matrice des paramètres connus, spécifiés selon parmMatrix. La matrice des paramètres devrait contenir autant de lignes qu&apos;il y a de paramètres dans le modèle, et autant de colonnes qu&apos;il y a d&apos;items dans l&apos;analyse.

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );
obj = dt << Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5 ), Model( "Logistic 2PL" ) );
obj << Save Ability Formula;
Column( dt, N Cols( dt ) ) << Get Formula;

```

#### Exemple 2

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

**Syntaxe :** {Estimates, Bins, Counts, ActualBandwidth, Error} = KDE( Vector, &lt;&lt;weights, &lt;&lt;bandwidth( 0 ), &lt;&lt;bandwidth scale( 1 ), &lt;&lt;bandwidth selection( 0 ), &lt;&lt;kernel )

**Description :** Renvoie un estimateur de densité à noyau avec sélection automatique de la largeur de bande. L’argument facultatif weights doit être un vecteur de la même longueur que Vector. L&apos;argument facultatif bandwidthdoit être un nombre réel positif ou nul, qui force l&apos;utilisation de la valeur de l’argument bandwidth selection. L&apos;argument facultatif bandwidth scale doit être un nombre réel positif. L&apos;argument facultatif bandwidth selection doit être 0, 1, 2 ou 3, correspondant à Sheather et Jones, Référence normale, méthode empirique de Silverman, ou surlissage, respectivement. L&apos;argument facultatif kernel accepte les valeurs 0, 1, 2, 3 ou 4, correspondant à Gaussien, Epanechnikov, Bipoids, Triangulaire, ou Rectangulaire, respectivement.

**JMP Version ajoutée :** Avant la version 14

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

**Syntaxe :** y = LenthPSE( x )

**Description :** Renvoie l&apos;erreur pseudo-standard de Lenth des valeurs d’un vecteur x unique x.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {LenthPSE( [1, 2, 3, 4, 5] ), Std Dev( [1, 2, 3, 4, 5] )} );

```

### Max

**Syntaxe :** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description :** Renvoie la valeur maximum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Maximum

**Syntaxe :** y = Max( x1, ... ); y = Maximum( x1, ... )

**Description :** Renvoie la valeur maximum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Max( Pi(), e() ), Max( [33 44 22] )} );

```

### Mean

**Syntaxe :** y = Mean( x1, ... )

**Description :** Renvoie la moyenne arithmétique des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Mean( Pi(), e() ), Mean( [33 44 22 20 30] )} );

```

### Median

**Syntaxe :** y = Median( x1, ... )

**Description :** Renvoie la médiane des arguments combinés, lesquels peuvent être des arguments scalaires, de matrice ou de liste.

**JMP Version ajoutée :** 15

```jsl

Median( [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] );

```

### Min

**Syntaxe :** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description :** Renvoie la valeur minimum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Minimum

**Syntaxe :** y = Min( x1, ... ); y = Minimum( x1, ... )

**Description :** Renvoie la valeur minimum parmi les arguments ou les valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Min( Pi(), e() ), Min( [33 44 22] )} );

```

### Moving Average

**Syntaxe :** y = Moving Average( x, weighting, &lt;before=-1&gt;, &lt;after=0&gt;, &lt;partial window is missing=0&gt; )

**Description :** Renvoie une matrice des moyennes mobiles pour la matrice des entrées. before et after déterminent l&apos;étendue (« fenêtre ») des éléments dont la moyenne est à calculer, où before peut être -1 pour indiquer tous les éléments a priori. Si weighting est égal à 1, tous les éléments ont une pondération égale. Si weighting est égal à 0, les éléments ont des pondérations linéairement incrémentielles. Sinon, weighting est le paramètre pour la pondération exponentielle (EWMA). partial window is missing indique si les moyennes sont rapportées lorsque certains voisins ne sont pas présents, ce qui peut se produire aux extrémités ou à proximité des valeurs manquantes. Si partial window is missing est non nul, les valeurs manquantes sont rapportées pour les fenêtres partielles.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 1, 3 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0, 2, 2 ),
	Moving Average( [1 2 1 2 . 4 9 9 9 9 9], 1, 1, 1, 1 ),
	Moving Average( [1 2 1 2 3 4 9 9 9 9 9], 0.5 )}
);

```

### N Missing

**Syntaxe :** y = N Missing( x1, x2, ... )

**Description :** Renvoie le nombre de valeurs manquantes parmi les arguments.

**JMP Version ajoutée :** Avant la version 14

```jsl

N Missing( 1, 2, ., 3, [11 22 . .], 4 );

```

### Normal Tolerance Factor

**Syntaxe :** q = Normal Tolerance Factor( 1-alpha, p, n, &lt;One Sided&gt; )

**Description :** Calcule le facteur de tolérance pour construire un intervalle de confiance à 1-alpha qui contient la proportion p des moyennes avec une taille d&apos;échantillon de n de la distribution normale. Une option permet de demander le facteur pour un intervalle de tolérance unilatéral.

**JMP Version ajoutée :** 19

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

**Syntaxe :** y = Number( x1, ... )

**Description :** Renvoie le nombre d&apos;arguments non manquants ou les valeurs non manquantes dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Number( 12, ., 11, 0, -42 ), Number( [33 . -42 . 0 . -30] )} );

```

### Product

**Syntaxe :** y = Product( assignExpr, limit, bodyExpr )

**Description :** Renvoie le produit des évaluations de bodyExpr, en incrémentant à chaque fois la variable de assignExpr jusqu&apos;à ce quelle soit supérieure ou égale à la limite limit.

**JMP Version ajoutée :** Avant la version 14

```jsl

2 * Product( i = 1, 10000, 4 * i * i / (2 * i - 1) / (2 * i + 1) );

```

### Quantile

**Syntaxe :** y = Quantile( p, x1, ... )

**Description :** Renvoie le quantile spécifié p des arguments x. L&apos;argument de quantile peut être un scalaire ou une matrice. Les valeurs x peuvent également être spécifiées en tant que valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List(
	{Quantile( 0.75, 0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000 ),
	Quantile( 0.5, [1.2, 1.5, 10, 25, 31, 40, 50, 99, 1000, 5000, 25000, 100000] )}
);

```

### Range

**Syntaxe :** y = Range( x1, ... )

**Description :** Renvoie les valeurs minimum et maximum parmi les arguments combinés, lesquels peuvent être des arguments scalaires, de matrice ou de liste.

**JMP Version ajoutée :** 15

```jsl

Eval List( {Range( Pi(), e() ), Range( [33 44 22] )} );

```

### SSQ

**Syntaxe :** y = SSQ( x1, ... )

**Description :** Renvoie la somme des carrés de tous les éléments

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {SSQ( Pi(), e() ), SSQ( [33 44 22 20 30] )} );

```

### Std Dev

**Syntaxe :** y = Std Dev( x1, ... )

**Description :** Renvoie l&apos;écart-type des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Std Dev( Pi(), e() ), Std Dev( [33 44 22 20 30] )} );

```

### Sum

**Syntaxe :** y = Sum( x1, ... )

**Description :** Renvoie la somme des arguments ou des valeurs dans un argument unique de matrice ou de liste.

**JMP Version ajoutée :** Avant la version 14

```jsl

Eval List( {Sum( Pi(), e() ), Sum( [33 44 22 20 30] )} );

```

### Summarize

**Syntaxe :** Summarize( &lt;dt&gt;, nameBy=By( colBy ), name1=statName1( col1 ), ... )

**Description :** Calcule différentes statistiques de résumé sur une colonne Par groupe. Les noms des statistiques sont Dénombrement, Somme, Moyenne, Max ou Maximum, Min ou Minimum, Écart-type, Corrélation, Quantile, Première. Les statistiques peuvent uniquement être calculées pour les colonnes numériques. Les résultats sont stockés sous forme de matrices dans des variables avec les noms spécifiés.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize( exg = By( :sex ), exm = Mean( :height ) );
Eval List( {exg, Round( exm, 1 )} );

```

### Summarize YByX

**Syntaxe :** Summarize YByX( X(x columns),Y(y columns), Group(grouping columns), Freq(freq column), Weight(Weight column))

**Description :** Calcule toutes les combinaisons de la fonction Ajuster Y en fonction de X

**JMP Version ajoutée :** Avant la version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Summarize YByX( X( :age, :height ), Y( :sex, :weight ) );

```

### Summation

**Syntaxe :** y = Summation( assignExpr, limit, bodyExpr )

**Description :** Renvoie la somme des évaluations de bodyExpr, en incrémentant à chaque fois la variable de assignExpr jusqu&apos;à ce quelle soit supérieure ou égale à la limite limit.

**JMP Version ajoutée :** Avant la version 14

```jsl

Summation( i = 0, 10, 1 / Factorial( i ) );

```

