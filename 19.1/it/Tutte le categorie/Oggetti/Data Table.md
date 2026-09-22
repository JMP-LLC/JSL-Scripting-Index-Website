# Data Table



## Costruttori associati

### Association Analysis

**Sintassi:** Association Analysis( Item( columns ), ID( columns ) )

**Descrizione:** Identifica connessioni tra gruppi di elementi in un evento o transazione indipendente. L&apos;analisi di associazione è frequentemente utilizzata per analizzare i dati transazionali (detti anche market basket) per identificare elementi che spesso compaiono insieme nelle transazioni.

```jsl

dt = Open( "$SAMPLE_DATA/Grocery Purchases.jmp" );obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );

```

### Attribute Chart

**Sintassi:** Attribute Chart( Y( columns ), X( columns ) )

**Descrizione:** Analizza le misurazioni categoriche per mostrare le misure di accordo tra le risposte, come i valutatori.

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );obj = dt << Attribute Chart( Y( :A, :B, :C ), X( :Part ), Standard( :Standard ) );

```

### Bayesian Optimization

**Sintassi:** Bayesian Optimization( Y( columns ), X( columns ) )

**Descrizione:** Raccomanda le impostazioni dei fattori per ottimizzare le risposte aumentando la tabella di dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Bivariate

**Sintassi:** Bivariate( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua rispetto a un&apos;altra variabile continua. I metodi di analisi comprendono la stima di linee, polinomi, spline e densità bivariate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );

```

### Boosted Tree

**Sintassi:** Boosted Tree (Y( column ), X( columns ))

**Descrizione:** Costruisce un modello predittivo creando un grande albero decisionale additivo che è una sequenza di alberi decisionali più piccoli. Ognuno degli alberi è stimato sui residui dell&apos;albero precedente.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Bootstrap Forest

**Sintassi:** Bootstrap Forest (Y( column ), X( columns ))

**Descrizione:** Costruisce un modello predittivo calcolando una media dei valori previsti da molti alberi decisionali. Ogni albero decisionale è stimato su un campione bootstrap casuale dei dati di training.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Minimum Splits Per Tree( 5 ),	Portion Bootstrap( 1 ),	Number Terms( 3 ),	Number Trees( 25 ),	Go);

```

### Bubble Plot

**Sintassi:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Descrizione:** Produce un grafico a dispersione a bolle bidimensionale che può essere animato attraverso una variabile temporale. Ulteriori variabili possono essere utilizzate per dimensionare e colorare le bolle.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### CUSUM Control Chart

**Sintassi:** CUSUM Control Chart( Y( column ), &lt;X( column )&gt;, &lt;By( column )&gt;, &lt;Data Units( 0|1 )&gt;, &lt;Show Excluded Region( 0|1 )&gt; )

**Descrizione:** Crea un grafico che traccia le somme cumulative delle deviazioni delle medie dei sottogruppi da un target. Questo grafico è anche chiamato grafico CUSUM tabulare.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Oil1 Cusum.jmp" );obj = dt << CUSUM Control Chart(	Y( :weight ),	H( 2 ),	Lower Side( 1 ),	Target( 8.1 ),	K( 0.025 ),	Sigma( 0.05 ),	Head Start( 0.05 ));

```

### Categorical

**Sintassi:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**Descrizione:** Riepiloga e analizza i dati della risposta categorica. I dati possono essere risposte semplici, risposte multiple, misure ripetute, accordo dei valutatori, risposte allineate o testo libero. Include la possibilità di generare tabelle a campi incrociati personalizzate.

#### Accordo dei valutatori

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );Categorical( Rater Agreement( :A, :B, :C ) );

```

#### Misure ripetute

```jsl

dt = Open( "$SAMPLE_DATA/Presidential Elections.jmp" );Categorical(	Repeated Measures(		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n,		:"2000 Winner"n, :"2004 Winner"n, :"2008 Winner"n, :"2012 Winner"n	));

```

#### Nidificato entro fattori individuali

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:Single Status * :Gender + :School Age Children * :Gender,		:I am working on my career + :I want to see the world	));

```

#### Risposta multipla (strutturata)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical( Structured( :Gender, :Brush Delimited + :Floss Delimited ) );

```

#### Risposta multipla con gruppi nidificati

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ) );

```

#### Risposte allineate

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		Empty(),		Empty(),		Aligned Responses(			:I am working on my career, :I want to see the world,			:My home needs some major improvements, :I have vast interests outside of work,			:I want to get my debt under control, :I come from a large family		)	));

```

#### Tre risposte per due fattori individuali (strutturate)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:I am working on my career + :I want to see the world,		:Gender + :Single Status + :Age Group	));

```

#### Una risposta da due fattori nidificati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Cell Plot

**Sintassi:** Cell Plot( Y( column(s) ), &lt;X( column )&gt; )

**Descrizione:** Genera una griglia rettangolare di celle disegnate con corrispondenza uno-a-uno ai valori della tabella di dati. Le celle della griglia sono colorate sulla base dei valori nelle celle.

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );obj = dt << Cell Plot(	Y(		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,		:"1992 Math"n	));

```

### Choice

**Sintassi:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Descrizione:** Modellizza i dati da un esperimento di scelta che studia le preferenze dei clienti. Stima la probabilità che una specifica configurazione sia preferita usando una forma di regressione logistica condizionale.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );obj = dt << Choice(	Response Data Table( Data Table( "Pizza Responses" ) ),	Profile DataTable( Data Table( "Pizza Profiles" ) ),	Response Profile ID Chosen( :Choice ),	Response Subject ID( :Subject ),	Response Profile ID Choices( :Choice1, :Choice2 ),	Profile ID( :ID ),	Profile Effects( :Crust, :Cheese, :Topping ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );obj = Choice(	One Table( 1 ),	Profile DataTable( dt ),	Profile ID( :Indicator ),	Profile Effects( :Crust, :Cheese, :Topping ),	Profile Grouping( :Subject, :Trial ));

```

### Close

**Sintassi:** Close( data table name, &lt;NoSave|Save("path")&gt; )

**Descrizione:** Chiude la tabella di dati referenziata dal primo argomento, che per impostazione predefinita punta alla tabella di dati corrente. Il secondo argomento è utilizzato per salvare la tabella di dati. Utilizzare un&apos;estensione del file appropriata nel percorso per salvare le tabelle di dati in formato non JMP. Specificando NoSave non verrà richiesto di salvare o di ignorare le modifiche.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

### Cluster Variables

**Sintassi:** Cluster Variables( Y( columns ) )

**Descrizione:** Raggruppa le variabili (colonne) in gruppi che possono essere rappresentati da un singolo componente o variabile. Le variabili del cluster possono essere utilizzate come tecnica di riduzione delle dimensioni.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Cluster Variables( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Contingency

**Sintassi:** Contingency( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica in una serie di gruppi categorici. I metodi di analisi comprendono test del chi-quadrato e diagrammi a mosaico.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Contingency( Y( :Age ), X( :sex ) );

```

### Contour Plot

**Sintassi:** Contour Plot( X( column, column ), Y( column ) )

**Descrizione:** Produce un grafico di tre variabili in una vista bidimensionale dove la terza variabile è rappresentata da curve isometriche di valore costante.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Contour Profiler

**Sintassi:** Contour Profiler( Y( column1, column2, ... ) )

**Descrizione:** Produce un grafico isometrico interattivo che consente di esplorare come una o più risposte previste cambiano attraverso coppie di fattori. I valori dei fattori non utilizzati nel grafico possono essere variati per esplorare ulteriormente l&apos;impatto delle impostazioni dei fattori sulle risposte previste.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Contour Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Control Chart Builder

**Sintassi:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Descrizione:** Consente di creare in modo interattivo carte di controllo, utilizzate per determinare se un processo è stabile e prevedibile. La piattaforma Costruttore di carte di controllo può essere utilizzata per creare i seguenti tipi di carte di controllo: IMR, BarraX, Esecuzione breve, Sequenziale, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sulle medie, A tre vie ed Evento raro.

#### Carta P'

```jsl

// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) ),	Show Control Panel( 0 ));

```

#### Carta U'

```jsl

// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico a tre vie (impostare dimensione del sottogruppo)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 3 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Grafico a tre vie (variabile di sottogruppo)

```jsl

// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Average" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico BarraX/R

```jsl

// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Show Control Panel( 0 ));

```

#### Grafico BarraX/S (impostare dimensione del sottogruppo)

```jsl

// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Grafico BarraX/S (variabile di sottogruppo)

```jsl

// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Standard Deviation" ) )	),	Show Control Panel( 0 ));

```

#### Grafico C

```jsl

// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico della differenza esecuzione breve

```jsl

// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Grafico della differenza esecuzione breve per BarraX

```jsl

// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Show Control Panel( 0 ));

```

#### Grafico di esecuzione

```jsl

// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Show Limit Summaries( 0 ),	Variables( Y( :Weight ) ),	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),	Show Control Panel( 0 ));

```

#### Grafico di range mobile mediano

```jsl

// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico G degli eventi rari

```jsl

// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico IMR

```jsl

// Create an IMR chart by adding a continuous Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Show Control Panel( 0 ) );

```

#### Grafico Levey-Jennings

```jsl

// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Show Two Shewhart Charts( 0 ),	Variables( Y( :Weight ) ),	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico NP

```jsl

// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico P

```jsl

// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico standardizzato esecuzione breve

```jsl

// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Class( "Short Run" ),	Variables( Y( :Weight ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico standardizzato esecuzione breve per BarraX

```jsl

// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );obj = dt << Control Chart Builder(	Show Product Separators( 0 ),	Class( "Short Run" ),	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico T degli eventi rari

```jsl

// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );obj = dt << Control Chart Builder(	Class( "Rare Event" ),	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) ),	Show Control Panel( 0 ));

```

#### Grafico U

```jsl

// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );obj = dt << Control Chart Builder(	Class( "Shewhart Attribute" ),	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) ),	Show Control Panel( 0 ));

```

#### IMR sul grafico della deviazione standard del gruppo (impostare dimensione del sottogruppo)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### IMR sul grafico della deviazione standard del gruppo (variabile di sottogruppo)

```jsl

// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### IMR sul grafico delle medie (impostazione dimensione del sottogruppo)

```jsl

// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### IMR sul grafico delle medie (variabile di sottogruppo)

```jsl

// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Range mobile mediano su una carta delle deviazioni standard di gruppo (impostare dimensione del sottogruppo)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Range mobile mediano su una carta delle deviazioni standard di gruppo (variabile di sottogruppo)

```jsl

// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart(		Position( 1 ),		Points( Statistic( "Standard Deviation" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Std Dev" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Range mobile mediano su una carta delle medie di gruppo (impostare dimensione del sottogruppo)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Y( :Weight ) ),	Set Subgroup Size( 4 ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

#### Range mobile mediano su una carta delle medie di gruppo (variabile di sottogruppo)

```jsl

// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Control Chart Builder(	Variables( Subgroup( :Sample ), Y( :Weight ) ),	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),	Chart(		Position( 2 ),		Points( Statistic( "Moving Range on Means" ) ),		Limits( Sigma( "Median Moving Range" ) )	),	Show Control Panel( 0 ));

```

### Cumulative Damage

**Sintassi:** Cumulative Damage

**Descrizione:** Analizza modelli varying stress e step stress.

```jsl

Open( "$SAMPLE_DATA/Reliability/CD Step Stress.jmp" );Open( "$SAMPLE_DATA/Reliability/CD Step Stress Pattern.jmp" );obj = Cumulative Damage(	Model Type( "Step Stress" ),	Time to Event Data Table(		Data Table( "CD Step Stress" ),		Time to Event( :Time ),		Censor( :Censor ),		Pattern ID( :Pattern ID ),		Censor Code( 1 )	),	Step Stress Pattern Data Table(		Data Table( "CD Step Stress Pattern" ),		Stress Duration( :Duration ),		Stress( :Stress ),		Pattern ID( :Pattern ID )	),	Relationship( "Inverse Power" ),	Distribution( "Lognormal" ),	Pattern Continuation( "Terminate" ));

```

### Custom Profiler

**Sintassi:** Custom Profiler( Y( column1, column2, ... ) )

**Descrizione:** Fornisce un&apos;interfaccia che consente di ottimizzare le risposte senza un output grafico. Questo profiler è utile per problemi più grandi.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Custom Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Degradation

**Sintassi:** Degradation( Y( column ), Time( column ), Application( "Repeated Measures Degradation"|"Destructive Degradation"|"Stability Test" ), &lt;X( column )&gt;, &lt;Label( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column )&gt;, &lt;Censor Code( value )&gt;, &lt;Upper Spec Limit( value )&gt;, &lt;Lower Spec Limit( value )&gt;, &lt;Censoring Time( value )&gt; )

**Descrizione:** Modella la degradazione nel tempo usando curve lineari e non lineari. Le opzioni di analisi comprendono l&apos;analisi della stabilità e la generazione di pseudo dati di guasto.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/GaAs Laser.jmp" );obj = dt << Degradation(	Y( :Current ),	Time( :Hours ),	Label( :Unit ),	Application( "Repeated Measures Degradation" ),	Upper Spec Limit( 10 ),	Model Report(		Simple Linear Path(			X Scale( Linear ),			Y Scale( Linear ),			Intercept( Common ),			Slope( Different )		)	));

```

### Destructive Degradation

**Sintassi:** Destructive Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descrizione:** Modella dati di degradazione distruttiva nel tempo.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Adhesive Bond.jmp" );obj = dt << Destructive Degradation(	Y( :Strength ),	Time( :Weeks ),	X( :Degrees ),	Censor( :Censor ),	Censor Code( "Right" ),	Model( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ),	Control( "Log10", "Sqrt", "Normal", "Individual Path with Intercept" ));

```

### Diagram

**Sintassi:** Diagram( Y( column ), X( column ) )

**Descrizione:** Crea un diagramma di causa ed effetto. Detti anche diagrammi di Ishikawa o diagrammi a lisca di pesce, sono diagrammi gerarchici che consentono di esplorare le cause originali.

```jsl

dt = Open( "$SAMPLE_DATA/Ishikawa.jmp" );obj = dt << Diagram( Y( :Child ), X( :Parent ) );

```

### Discriminant

**Sintassi:** Discriminant( Y( columns ), X( columns ) )

**Descrizione:** Stima la distanza da ogni osservazione a ogni media multivariata del gruppo (centroide) mediante la distanza di Mahalanobis. Le osservazioni vengono poi classificate nel gruppo a cui sono più vicine.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Discriminant(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Distance Matrix

**Sintassi:** Distance Matrix( Y( columns ) )

**Descrizione:** Calcola le distanze tra le righe utilizzando diversi metodi.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Distance Matrix( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Distribution

**Sintassi:** Distribution( Column() )

**Descrizione:** Mostra statistiche di distribuzione e di riepilogo univariate per ogni variabile. I risultati e le opzioni dipendono dal tipo di modellizzazione di ogni variabile. Alcune opzioni includono istogrammi, box plot, diagrammi dei quantili, stima di distribuzioni e analisi di capability.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );colref = Column( "age" );// Correct way to use the colrefDistribution( Column( colref ) );// This will not workDistribution( colref );

```

### EMP Measurement Systems Analysis

**Sintassi:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**Descrizione:** Avvia il metodo EMP (Evaluating the Measurement Process – Valutazione del processo di misurazione) per l&apos;analisi dei sistemi di misura. I grafici della media e di dispersione (range o deviazione standard) sono visualizzati per impostazione predefinita.

#### Incrociato con il modello degli effetti di interazione a due fattori, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Incrociato con il modello degli effetti di interazione a due fattori, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati e poi nidificati, grafico del range

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( Range ),	Variance Components( 1 ));

```

#### Modello effetti incrociati e poi nidificati, grafico della deviazione standard

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti incrociati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati e poi incrociati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati poi incrociati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti nidificati, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### Modello effetti principali, grafico del range

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### Modello effetti principali, grafico della deviazione standard

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

### EWMA Control Chart

**Sintassi:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**Descrizione:** Crea un grafico che traccia le medie mobili ponderate esponenzialmente e un diagramma che traccia le singole osservazioni o le medie dei sottogruppi. Un grafico EWMA è noto anche come grafico di controllo di feedback.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );obj = dt << EWMA Control Chart( Y( :Gap ) );

```

### Explore Missing Values

**Sintassi:** Explore Missing Values( Y( columns ) )

**Descrizione:** Trova pattern di valori mancanti ed esegue l&apos;imputazione.

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Explore Outliers

**Sintassi:** Explore Outliers( Y( columns ) )

**Descrizione:** Identifica, esplora e gestisce outlier in dati univariati o multivariati.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Explore Patterns

**Sintassi:** Explore Patterns( Y( columns ) )

**Descrizione:** Ricerca caratteristiche insolite nei dati, incluse lunghe esecuzioni, lunghe sequenze duplicate, valori formattati insoliti ed esecuzioni di relazioni lineari.

```jsl

dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Factor Analysis

**Sintassi:** Factor Analysis( Y( columns ) )

**Descrizione:** Scopre la struttura sottostante dei dati estraendo variabili non osservate, o fattori, che rappresentano la variabilità comune tra le variabili osservate. La rotazione dei fattori è utilizzata per aumentarne l&apos;interpretabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Fatigue Model

**Sintassi:** Fatigue Model( N( column ), X( column ), &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descrizione:** Analizza i dati di fatica, noto anche come modellizzazione di curve S-N.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Metal Wire Z.jmp" );obj = dt << Fatigue Model(	N( :Cycles ),	S( :Stress ),	Censor( :Censoring Indicator ),	Censor Code( "Runout" ));

```

### Fit Curve

**Sintassi:** Fit Curve( Y( column ), X( column ) )

**Descrizione:** Stima vari modelli non lineari incorporati.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Fit Life by X

**Sintassi:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**Descrizione:** Analizza la distribuzione di dati tempo all&apos;evento parametrizzata da un singolo fattore di regressione. Le opzioni di analisi comprendono modelli di guasto accelerati, distribuzioni di sopravvivenza tra gruppi e trasformazioni di fattori di regressione.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Fit Parametric Survival

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**Descrizione:** Stima un modello di regressione lineare sui tempi di sopravvivenza. Questi modelli possono essere usati per tempi di sopravvivenza che non possono essere espressi come una funzione di una o più variabili esplicative. Considera varie distribuzioni della sopravvivenza e la censura.

```jsl

dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );obj = dt << Fit Model(	Y( :Time ),	Effects( :Age, :Diag Time ),	Personality( "Parametric Survival" ),	Distribution( "Weibull" ),	Censor( :censor ),	Run Model);

```

### Fit Proportional Hazards

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**Descrizione:** Stima un modello di regressione semiparametrica (il modello dei rischi proporzionali di Cox) per valutare l&apos;effetto delle variabili esplicative sui tempi di sopravvivenza prendendo in considerazione la censura.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Fit Model(	Y( :days ),	Effects( :Group ),	Personality( "Proportional Hazard" ),	Censor( :Censor ),	Run Model);

```

### Formula Depot

**Sintassi:** Formula Depot

**Descrizione:** Un contenitore per modelli di previsione che supporta confronto di modelli, creazione di profili e generazione di codici di scoring. Il depot delle formule viene avviato dal menu Analizza, dai comandi Pubblica nelle piattaforme di modellizzazione, Ricodifica e Editor delle formule.

```jsl

fd1 = Formula Depot();dt = Open( "$SAMPLE_DATA\Iris.jmp" );model = dt << RunScript( "Nominal Logistic" );model << Publish Probability Formulas;fd_script = fd1 << Get Script;Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );fd1 << Close Window;Open( "$TEMP\fd.jrp" );fd2 = Formula Depot[1];

```

### Functional Data Explorer

**Sintassi:** Functional Data Explorer( Y(column), X(column), ID(column) )

**Descrizione:** Stima modelli funzionali utilizzando un modello base B-Spline, P-Spline, Fourier o Wavelet. È possibile eseguire un&apos;analisi delle componenti principali funzionali sul modello funzionale per estrarre caratteristiche importanti dai dati. Esiste anche un&apos;opzione per eseguire l&apos;analisi delle componenti principali funzionali direttamente sui dati, senza prima stimare un modello di funzione di base.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Gaussian Process

**Sintassi:** Gaussian Process( Y( column ), X( columns ) )

**Descrizione:** Modellizza la relazione tra una risposta continua e uno o più predittori continui come spline con interpolazione.

```jsl

dt = Open( "$SAMPLE_DATA/2D Gaussian Process Example.jmp" );obj = dt << Gaussian Process( Y( :Y ), X( :X1, :X2 ) );

```

### Graph Builder

**Sintassi:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**Descrizione:** Offre un&apos;interfaccia grafica interattiva che consente di esplorare i dati. È possibile trascinare le colonne nelle zone del grafico per creare una varietà di grafici, tra cui grafici a dispersione, grafici dei profili isometrici, grafici a barre, grafici ad area, box plot, istogrammi, heatmap, grafici a torta, mappe ad albero, diagrammi a mosaico e mappe.

#### Assi x multipli

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### Assi y paralleli, linee sovrapposte

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Assi y sinistro e destro

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### Combinazione grafico a barre e linea di tendenza smoothing

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### Curve della funzione di distribuzione cumulativa empirica sovrapposte

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### Diagramma di flusso della marcia di Napoleone

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### Grafici indipendenti con la variabile BY

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### Grafici violino con quartili

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### Grafico a barre in pila al 100%

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Grafico a bolle con curve sovrapposte

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### Grafico a dispersione con box plot marginali

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### Grafico di variabilità

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### Intervallo di confidenza della proporzione binomiale

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Linea con intervallo di banda personalizzato

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### Linee connesse con punti sovrapposti

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### Linee freccia, una per riga

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### Mappa coropletica aree uguali del Mediterraneo

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### Mappa wafer

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### Profiler isometrici densità kernel bivariata sovrapposti

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### Punti del diagramma di contorno  e del grafico a dispersione

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### Punti e smoother

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### Raggruppamento trellis in stile Coplot

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Riquadri con assi y non allineati

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### Riquadri di regressione lineare

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### Tabella di riepilogo degli assi

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### Hierarchical Cluster

**Sintassi:** Hierarchical Cluster( Y( columns ) )

**Descrizione:** Righe di cluster basate su variabili continue o categoriche. La clusterizzazione gerarchica inizia trattando ogni riga come il proprio cluster e successivamente combinando due cluster alla volta.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death Subset.jmp" );obj = dt << Hierarchical Cluster( Y( :birth, :death ), Label( :country ) );

```

### Item Analysis

**Sintassi:** Item Analysis( Y( columns ) )

**Descrizione:** Correla un tratto o capacità alla probabilità di un individuo di sostenere o rispondere correttamente a un elemento.

```jsl

dt = Open( "$SAMPLE_DATA/MathScienceTest.jmp" );obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );

```

### K Means Cluster

**Sintassi:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Clusterizza righe in base alle variabili numeriche in tabelle di dati con milioni di righe. È necessario specificare in anticipo il numero dei cluster.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### K Nearest Neighbors

**Sintassi:** K Nearest Neighbors(Y( column ), X( columns ))

**Descrizione:** Prevede una risposta continua o categorica sulla base delle risposte dei K vicini più prossimi nello spazio delle variabili X.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Nearest Neighbors(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	K( 10 ));

```

### Latent Class Analysis

**Sintassi:** Latent Class Analysis( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Clusterizza righe sulla base di variabili categoriche utilizzando miscele multinomiali. È necessario specificare in anticipo il numero di classi latenti (cluster).

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Latent Class Analysis(	Y( :sex, :marital status, :country, :size, :type ),	Number of Clusters( 3 ));

```

### Life Distribution

**Sintassi:** Life Distribution( Y( column(s) ) )

**Descrizione:** Analizza la distribuzione dati Tempo all&apos;evento. Può essere usato per eseguire la modellizzazione di dati censurati, durata di un prodotto, affidabilità e cause concorrenti.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### Logistic

**Sintassi:** Logistic( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta categorica rispetto a una variabile continua. I metodi di analisi includono la regressione logistica e curve ROC.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ), Freq( :Count ) );

```

### Make Validation Column

**Sintassi:** Make Validation Column( &lt;Colonne di stratificazione(columns)&gt;, &lt;Colonne di raggruppamento(columns)&gt;, &lt;Colonna cutpoint(column)&gt;, &lt;ID batch cutpoint(column)&gt; )

**Descrizione:** Crea una colonna usata per dividere i dati in set di training, validazione e test.

**Esempio di stratificazione**

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Make Validation Column(	Stratification Columns( :Sex ),	Training Set( 0.50 ),	Validation Set( 0.25 ),	Test Set( 0.25 ),	New Column Name( "Valid1" ),	Random Seed( 1234 ),	Go);

```

**Esempio di valore soglia**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );dt << Make Validation Column(	Cutpoint Column( :Week of Year ),	Cutpoint Batch ID( :ID ),	Training Set( 0.60 ),	Validation Set( 0.25 ),	Test Set( 0.15 ),	New Column Name( "Cutpoint Batch Validation" ),	Go);

```

### Manage Limits

**Sintassi:** Manage Limits( Process Variables( columns ) )

**Descrizione:** Avvia l&apos;utilità per la gestione dei limiti di qualità per più colonne contemporaneamente. È possibile aggiungere, modificare e salvare limiti nelle proprietà della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Manage Limits( Process Variables( dt << Get Column Group( "Processes" ) ) );

```

### Marker Admixture

**Sintassi:** Marker Admixture( Marker( columns ) )

**Descrizione:** Stima la mescolanza di popolazione per gli individui in base ai genotipi dei marcatori.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture( Marker( Column Group( "Markers" ) ), Set(), Fit() );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Admixture(	Marker( Column Group( "Markers" ) ),	Set(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	),	Fit(		Missing Marker Imputation Method( "Specified" ),		Estimation Method( "Fixed Parameter" ),		Unthreaded( 1 ),		Imputation Value( 1 ),		Number of Ancestral Populations( 3 )	));

```

### Marker Imputation

**Sintassi:** Marker Imputation( Marker( columns ) )

**Descrizione:** Imputa i genotipi dei marcatori numerici mancanti.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Set missing values for some markersdt = Current Data Table();Random Reset( 1234 );markers = dt << Get Column Group( "Markers" );markers = markers[Random Index( N Items( markers ), 15 )];For Each( {col}, markers, col[Random Index( N Rows( dt ), Random Integer( 1, 20 ) )] = . );//Run platformdt << Marker Imputation(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Missing Marker Imputation Method( "LD-kNN" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Set missing values for some markersdt = Current Data Table();Random Reset( 1234 );markers = dt << Get Column Group( "Markers" );markers = markers[Random Index( N Items( markers ), 15 )];For Each( {col}, markers, col[Random Index( N Rows( dt ), Random Integer( 1, 20 ) )] = . );//Run platformobj = dt << Marker Imputation(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 0 ),	Method( "Specified" ),	Imputation Value( 1 ));

```

### Marker Relatedness

**Sintassi:** Marker Relatedness( Marker( columns ) )

**Descrizione:** Stima diversi tipi di misure di relazione genomica tra coppie di individui sulla base di marcatori genetici in organismi sia diploidi sia poliploidi.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformdt << Marker Relatedness(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 12345 ),	Missing Marker Imputation Method( "HWE Off" ),	Kinship Type( "Identical by State" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Run platformobj = dt << Marker Relatedness(	Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Set Random Seed( 12345 ),	Missing Marker Imputation Method( "HWE On" ),	Kinship Type( "Identical by State" ));

```

### Marker Simulation

**Sintassi:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**Descrizione:** Simula i genotipi dei marcatori dagli incroci dei genitori e calcola le relative misure di prestazione di riproduzione.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Hide and Exclude Rowsdt << Clear Select << Clear Row States;dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );dt << Invert Row Selection << Exclude;dt << Clear Select;//Run platformdt << Marker Simulation(	Marker( Column Group( "Markers" ) ),	Predictor Formula(		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n	),	Cross( :Sex ),	Ploidy( 2 ),	Number of Generations( 2 ),	Number of Individuals per Cross( 10 ),	Set Random Seed( 12345 ),	Threshold to Make Line Plots( 1000 ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );//Hide and Exclude Rowsdt << Clear Select << Clear Row States;dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );dt << Invert Row Selection << Exclude;dt << Clear Select;//Run platformobj = dt << Marker Simulation(	Marker( Column Group( "Markers" ) ),	Predictor Formula(		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n	),	Cross( :Sex ),	Unthreaded( 1 ),	Ploidy( 2 ),	Number of Generations( 2 ),	Number of Individuals per Cross( 10 ),	Set Random Seed( 12345 ),	Threshold to Make Line Plots( 1000 ));

```

### Marker Statistics

**Sintassi:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**Descrizione:** Esegue analisi sui dati dei marcatori genetici per calcolare misure come la minore frequenza allelica, l&apos;equilibrio di Hardy-Weinberg e il Linkage Disequilibrium.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

```

### Matched Pairs

**Sintassi:** Matched Pairs( Y( columns ), X( column ) )

**Descrizione:** Confronta le medie di serie di variabili corrispondenti mediante t test appaiati o semplice analisi delle misurazioni ripetute per rappresentare la correlazione tra risposte.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Matched Pairs( X( :Dose ), Y( :BP 8M, :BP 8W ) );

```

### MaxDiff

**Sintassi:** MaxDiff( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), &lt;Response Data Table( data table )&gt;, &lt;Subject Data Table( data table )&gt;, &lt;Response Profile ID Chosen( column )&gt;, &lt;Response Subject ID( column)&gt;, &lt;Response Grouping( column(s) )&gt;, &lt;Response Profile ID Choices( column(s) )&gt;, &lt;Profile Grouping( column(s) )&gt;, &lt;Subject Subject ID( column )&gt;, &lt;Subject Effects( column(s) )&gt; )

**Descrizione:** Crea un piano per trovare la combinazione di attributi del prodotto che i clienti preferiscono di più e di meno.

```jsl

dt = Open( "$SAMPLE_DATA/Potato Chip Combined.jmp" );obj = dt << MaxDiff(	One Table( 1 ),	Subject ID( :Respondent ),	Choice Set ID( :Choice Set ID ),	Profile ID( :Response ),	Profile Grouping( :Survey ID ),	Profile Effects( :Profile ID ),	Response Value Indicates Best( 1 ),	Response Value Indicates Worst( -1 ));

```

### Mixture Profiler

**Sintassi:** Mixture Profiler( Y( column1, column2, ... ) )

**Descrizione:** Produce un grafico ternario interattivo che consente di esplorare i profiler isometrici delle formule di previsione salvate per i modelli di miscela con tre o più fattori.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Mixture Profiler( Y( :Pred Formula Y ) );

```

### Model Comparison

**Sintassi:** Model Comparison( Predictors( columns ), Group( column ) )

**Descrizione:** Confronta le performance tra modelli mediante colonne con formula di previsione.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Fit Model(	Y( :weight ),	Effects( :height ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));dt << Fit Model(	Y( :weight ),	Effects( :age ),	Personality( "Standard Least Squares" ),	Run( Prediction Formula, Close Window ));obj = Model Comparison();

```

### Model Driven Multivariate Control Chart

**Sintassi:** Model Driven Multivariate Control Chart( Process( columns ) )

**Descrizione:** Crea carte di controllo multivariate sulla base di componenti principali o metodi dei minimi quadrati parziali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Flight Delays.jmp" );obj = dt << Model Driven Multivariate Control Chart(	Process( :AA, :CO, :DL, :F9, :FL, :NW, :UA, :US, :WN ));

```

### Model Screening

**Sintassi:** Model Screening( Y( column ), X( columns ) )

**Descrizione:** Stima molti modelli predittivi diversi, in modo da poter selezionare il migliore.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Multidimensional Scaling

**Sintassi:** Multidimensional Scaling( Y( columns ) )

**Descrizione:** Crea una rappresentazione visiva del pattern di prossimità tra un insieme di oggetti.

```jsl

dt = Open( "$SAMPLE_DATA/Flight Distances.jmp" );obj = dt << Multidimensional Scaling(	Y(		:Birmingham, :Boston, :Buffalo, :Chicago, :Cleveland, :Dallas, :Denver, :Detroit,		:El Paso, :Houston, :Indianapolis, :Kansas City, :Los Angeles, :Louisville, :Memphis,		:Miami, :Minneapolis, :New Orleans, :New York, :Omaha, :Philadelphia, :Phoenix,		:Pittsburgh, :St. Louis, :Salt Lake City, :San Francisco, :Seattle, :Washington DC	));

```

### Multiple Correspondence Analysis

**Sintassi:** Multiple Correspondence Analysis( Y( columns ), X( columns ) )

**Descrizione:** Identifica associazioni tra i livelli di variabili categoriche. L&apos;analisi delle corrispondenze multiple è analoga all&apos;analisi delle componenti principali per dati categorici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );dt << Multiple Correspondence Analysis(	Y( :Mfr, :"Hot/Cold"n, :Fiber Gr ),	X( :Manufacturer ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Multiple Correspondence Analysis( Y( :country, :size, :type ) );

```

### Multiple Factor Analysis

**Sintassi:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**Descrizione:** Analizza l&apos;accordo tra i partecipanti nell&apos;analisi dei dati sensoriali.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );dt << Multiple Factor Analysis(	Product ID( :Vineyard ),	Z( :Region ),	MFA Blocks(		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,		:Florence Savory, :Florence Lightness},		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness		},		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,		:Paula Tannin, :Paula Savory},		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,		:Monica Alcohol, :Monica Savory, :Monica Lightness},		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}	));

```

### Multivariate

**Sintassi:** Multivariate( Y( columns ) )

**Descrizione:** Esplora la correlazione e associazioni tra variabili numeriche mediante una serie di tecniche di analisi multivariata. Queste tecniche includono sia misure di associazione parametriche che non parametriche, matrici del grafico a dispersione, analisi delle componenti principali, analisi degli outlier e affidabilità dell&apos;elemento.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Multivariate Embedding

**Sintassi:** Multivariate Embedding( Y( columns ) )

**Descrizione:** Mappa i dati da spazi ad altissima dimensionalità a spazi a bassa dimensionalità utilizzando il metodo UMAP (Uniform Manifold Approximation and Projection) o il metodo t-Distributed Stochastic Neighbor Embedding (t-SNE). Molte volte si desidera mappare i dati su due o tre dimensioni in modo da poter visualizzare facilmente lo spazio a bassa dimensionalità. Entrambi i metodi tentano di preservare la struttura locale dei dati, ma UMAP è generalmente più veloce di t-SNE per data set di grandi dimensioni.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* Parameters can be changed according to data features */obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Maximum Iterations( 1500 ),	Perplexity( 15 ),	Initial Principal Component Dimensions( 55 ),	Random Seed( 2022 ),	Output Dimensions( 3 ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* by group example */dt << New Column( "_bycol",	Character,	Nominal,	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( _bycol ));

```

### Naive Bayes

**Sintassi:** Naive Bayes( Y( column ), X( columns ), Method( "Naive Bayes" ) )

**Descrizione:** Prevede l&apos;appartenenza a un gruppo per una variabile categorica sulla base della prossimità dei valori del suo predittore ai valori del predittore di ciascun gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Naive Bayes(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Neural

**Sintassi:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**Descrizione:** Stima una o più variabili di risposta mediante una funzione flessibile delle variabili di input. La struttura flessibile comprende funzioni di stratificazione e a S.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### New Table

**Sintassi:** New Table( name, &lt;invisible&gt;, &lt;private&gt;, &lt;actions&gt; )

**Descrizione:** Crea una nuova tabella di dati. "Invisible" nasconde la tabella di dati dalla visualizzazione, ma la elenca nella finestra Home di JMP. "Private" nasconde completamente la tabella. "Visible" è l&apos;impostazione predefinita e crea una normale tabella visibile ed elencata nella finestra Home di JMP. Gli argomenti actions facoltativi sono qualsiasi messaggio supportato dalle tabelle di dati.

```jsl

dt = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),	New Column( "height", Continuous, Set Values( [59, 61, 55] ) ));

```

### Nonlinear

**Sintassi:** Nonlinear( Y( column ), X( column with predictor formula ) )

**Descrizione:** Stima modelli non lineari mediante minimi quadrati o una funzione di perdita personalizzata.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Normal Mixtures

**Sintassi:** Normal Mixtures( Y( column(s) ), Number of Clusters( number ) )

**Descrizione:** Raggruppa le righe in base a variabili numeriche quando i dati provengono da una miscela di distribuzioni normali multivariate sovrapposte. È necessario specificare in anticipo il numero di cluster.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### Normalization

**Sintassi:** Normalization( Y( columns ) )

**Descrizione:** Corregge le distorsioni tecniche e migliora l&apos;idoneità per le analisi successive

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Normalization( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Notebook

**Sintassi:** Notebook

**Descrizione:** Crea un nuovo blocco appunti o restituisce il blocco appunti con il nome o l&apos;indice fornito.

```jsl

nb = Notebook();

```

### Oneway

**Sintassi:** Oneway( Y( columns ), X( columns ) )

**Descrizione:** Modella una risposta continua tra una serie di gruppi categorici. I metodi di analisi comprendono ANOVA, confronti di medie, analisi delle medie e diagrammi dei quantili.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :Height ), X( :Age ) );

```

### Open

**Sintassi:** Open( file path, &lt;invisible&gt;, &lt;private&gt;, &lt;select columns(list)&gt; | &lt;ignore columns(list)&gt;, &lt;column names only&gt;, &lt;Table Info&gt; )

**Descrizione:** Apre un file JMP o importa un altro tipo di file supportato. L&apos;opzione di apertura della tabella di dati &apos;Invisibile&apos; nasconde il file alla visualizzazione ma lo elenca nella finestra Home di JMP, &apos;Privato&apos; nasconde il file completamente. L&apos;opzione del file &apos;Seleziona colonne&apos; legge solo le colonne specificate, &apos;Ignora colonne&apos; è l&apos;inverso di &apos;Seleziona colonne&apos;, non legge le colonne specificate. Le opzioni del file JMP &apos;Solo nomi colonne&apos; e &apos;Info tabella&apos; non leggono i dati, né creano una tabella di dati. &apos;Solo nomi colonne&apos; restituisce l&apos;elenco dei nomi delle colonne della tabella di dati, &apos;Informazioni tabella&apos; restituisce il numero di colonne e righe nella tabella di dati. Le opzioni &apos;PRIMO(n)&apos;/&apos;ULTIMO(n)&apos;/&apos;CASUALE(n)&apos; leggono solo n righe della tabella di dati. Se n è un numero tra 0 e 1, n è interpretato come una frazione del numero totale di righe della tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", ignore columns( "age" ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", "Column Names Only" );

```

**Esempio 4**

```jsl

info = Open( "$SAMPLE_DATA/probe.jmp", "Table Info" );Print( info );

```

**Esempio 5**

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", random( 10 ) );Print( info );

```

**Esempio 6**

```jsl

info = Open( "$SAMPLE_DATA/SATByYear.jmp", First( 10 ) );Print( info );

```

### Parallel Plot

**Sintassi:** Parallel Plot( Y( columns ), &lt;X( column )&gt; )

**Descrizione:** Genera un diagramma di due o più variabili con segmenti di linee di collegamento per ogni riga.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/SAT.jmp" );dt << Parallel Plot(	Y(		:"2004 Verbal"n, :"2004 Math"n, :"2003 Verbal"n, :"2003 Math"n, :"2002 Verbal"n,		:"2002 Math"n, :"2001 Verbal"n, :"2001 Math"n, :"1999 Verbal"n, :"1999 Math"n,		:"1994 Verbal"n, :"1994 Math"n, :"1997 Verbal"n, :"1997 Math"n, :"1992 Verbal"n,		:"1992 Math"n	));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );obj = dt << Parallel Plot( Y( :hist0, :hist1, :hist3, :hist5 ) );

```

### Pareto Plot

**Sintassi:** Pareto Plot( Cause( column ), &lt;X( column )&gt;, &lt;Subcategory( column )&gt;, &lt;Freq( column )&gt;, &lt;Weight( column )&gt; )

**Descrizione:** Visualizza la frequenza relativa degli elementi in un processo correlato alla qualità in ordine decrescente. È possibile definire una o più variabili di classificazione per creare un grafico di Pareto comparativo.

#### Gruppo

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );

```

#### Semplice

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );

```

#### Sottocategoria

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Subcategory( :clean ),	Freq( :N ),	Subcategory Bar Style( Stacked ));

```

### Partial Least Squares

**Sintassi:** Partial Least Squares( Y( columns ), X( columns ) )

**Descrizione:** Stima un modello su una o più variabili di risposta usando fattori latenti. Ciò permette ai modelli di essere stimati quando le variabili esplicative sono altamente correlate o quando sono presenti più variabili esplicative che osservazioni.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Wine Tasting.jmp" );obj = dt << Partial Least Squares(	Y( :Hedonic, :Goes with meat, :Goes with dessert ),	X( :Price, :Sugar, :Alcohol, :Acidity ),	Go);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Partial Least Squares(	Y( :ls, :ha, :dt ),	X(		:v1, :v2, :v3, :v4, :v5, :v6, :v7, :v8, :v9, :v10, :v11, :v12, :v13, :v14, :v15, :v16,		:v17, :v18, :v19, :v20, :v21, :v22, :v23, :v24, :v25, :v26, :v27	),	Go);

```

### Predictor Screening

**Sintassi:** Predictor Screening( Y( columns ), X( columns ) )

**Descrizione:** Identifica predittori significativi da un grande numero di candidati utilizzando la partizione foresta di bootstrap per valutare il contributo dei predittori sulla risposta.

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Principal Components

**Sintassi:** Principal Components( Y( columns ) )

**Descrizione:** Modella la variazione in un set di variabili in termini di un numero più piccolo di combinazioni lineari indipendenti (componenti principali) di tali variabili.

```jsl

dt = Open( "$SAMPLE_DATA/Solubility.jmp" );obj = dt << Principal Components(	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ));

```

### Process Capability

**Sintassi:** Process Capability( Process Variables (columns), &lt; Spec Limits() &gt; )

**Descrizione:** Calcola un&apos;analisi di capability del processo per ciascun processo e crea grafici utili per l&apos;analisi di capability di più processi contemporaneamente. È anche possibile definire i limiti di specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Capability(	Process Variables(		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]	));

```

### Process History Explorer

**Sintassi:** Process History Explorer( Y( columns ),ID( columns), X( columns ), Step( columns ), Timestamp( columns ) )

**Descrizione:** Identifica passi di processi associati a scarso rendimento.

```jsl

dt = Open( "$sample_data\Quality Control\Lot Wafer History.jmp" );dt2 = Open( "$sample_data\Quality Control\Lot Wafer Yield.jmp" );obj = dt << Process History Explorer(	ID( :Lot, :Wafer ),	X( :Tool, :Route ),	Step( :Layer, :Operation ),	Timestamp( :TimeIn, :TimeOut ),	Yield Table( "Lot Wafer Yield" ),	Yield Columns( "Yield" ));

```

### Process Screening

**Sintassi:** Process Screening( Process Variables( columns ) )

**Descrizione:** Esamina molti processi da diversi punti di vista, tra cui stabilità, capability, test delle carte di controllo e shift (drift). Favorisce la capacità di concentrarsi su quali processi hanno bisogno di attenzione.

#### Screening dei processi con grafico del potenziale di processo

```jsl

dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );Column( "Weight" ) << Set Property(	"Process Screening",	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )});Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );obj = dt << Process Screening(	Process Variables( :Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar and R" ),	Out of Spec Count( 0 ),	Out of Spec Rate( 0 ),	Latest Out of Spec( 0 ),	Process Potential Graph( 1 ));

```

#### Screening dei processi con il diagramma dei pali della capability

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Goal Plot( 1 ));

```

#### Screening dei processi con il grafico di performance del processo

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Process Performance Graph( 1 ));

```

#### Screening dei processi con limiti di specifica in una tabella separata

```jsl

dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );obj = dt1 << Process Screening(	Y( :OZONE, :CO, :SO2, :NO ),	Use Limits Table(		1,		dt2,		Process Variables( :Column 1 ),		LSL( :_LSL ),		USL( :_USL ),		Target( :_Target ),		Go	));

```

#### Screening dei processi con rilevazione dello shift

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );obj = dt << Process Screening(	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),	Control Chart Type( "Indiv and MR" ),	Shift Graph( 1 ),	Show Charts as Selected( 1 ),	Select Where( Stability Index > 2 ));

```

#### Screening dei processi di conteggio con grafico degli allarmi per il monitoraggio ambientale

```jsl

dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );obj = dt << Process Screening(	Process Variables( :Count ),	Grouping( :Type, :Grade, :Site ),	Control Chart Type( "Count" ),	Time( :Time ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Alarm Graph( 1 ),	Show Charts as Selected( 1 ),	Select Where( Action >= 1 ));

```

#### Screening dei processi per mostrare le carte di controllo dei processi selezionati

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "Indiv and MR" ),	Show Charts as Selected( 1 ),	Select Where( Alarm Rate > 0.006 ), 	// what selects in the table	Filter Where( Alarm Rate > 0.005 )	// what shows in the table);

```

#### Screening del processo con un grafico a 3 vie (barra X, MR e R)

```jsl

dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );obj = dt << Process Screening(	Process Variables( :Fill Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar MR and R" ),	Moving Range Limit Exceeded( 1 ),	Chart Options as Selected( Dispersion Chart( 1 ) ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening del processo con un grafico a 3 vie (barra X, MR e S)

```jsl

dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );obj = dt << Process Screening(	Process Variables( :Fill Weight ),	Subgroup( :Sample ),	Control Chart Type( "XBar MR and S" ),	Moving Range Limit Exceeded( 1 ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening del processo con un grafico di proporzioni

```jsl

dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );obj = dt << Process Screening(	Process Variables( :N Defective ),	Control Chart Type( "Proportion" ),	n Trials( :N Units ),	Show Charts as Selected( 1 ),	RowStates( [0 1] ));

```

#### Screening di dati continui non negativi per il monitoraggio ambientale

```jsl

dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );obj = dt << Process Screening(	Process Variables( :Count ),	Grouping( :Type, :Grade, :Site ),	Control Chart Type( "Nonnegative Continuous" ),	Time( :Time ),	Set Scrolling( 10 ), // table shows only the first 10 processes	Alarm Graph( 1 ),	Show Charts as Selected( 1 ));

```

#### Screening di molti processi con colonna di raggruppamento

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Grouping( :Site ));

```

#### Screening di molti processi con le metriche delle carte di controllo individuali e a range mobile

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "Indiv and MR" ));

```

#### Screening di molti processi con le metriche delle carte di controllo X-bar e R

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Control Chart Type( "XBar and R" ));

```

#### Screening di molti processi con le metriche delle carte di controllo X-Bar e S

```jsl

dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );obj = dt << Process Screening(	Process Variables( Column Group( "Processes" ) ),	Subgroup( :wafer ),	Control Chart Type( "XBar and S" ));

```

### Profiler

**Sintassi:** Profiler( Y( column1, &lt;column2&gt;, ..., &lt;PredSE column1, PredSE column2&gt;, ... ), &lt;Expand&gt; )

**Descrizione:** Produce un grafico interattivo che consente di esplorare come cambia una risposta prevista al variare delle impostazioni dei fattori. Per ogni fattore, il profiler mostra tracce di previsione che si basano su formule di previsione salvate e vincoli lineari e illustra come la risposta cambia rispetto a quel fattore. L&apos;argomento Espandi corrisponde all&apos;opzione Espandi formule intermedie nella finestra di avvio.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Profiler(	Y(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Desirability Functions( 1 ));

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );colNum = N Items( dt << Get Column Names );obj = dt << Fit Model(	Validation( :Validation ),	Y( :Y ),	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),	Personality( "Standard Least Squares" ),	Emphasis( "Effect Screening" ),	Run());obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );obj << Close Window( 1 );predCol = Column( dt, colNum + 1 );stderrCol = Column( dt, colNum + 2 );dt << Profiler(	Y( predCol, stderrCol ),	Profiler( 1, Confidence Intervals( 1 ), ),	Use SE Formula( 1 ));

```

**Esempio 3**

```jsl

dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

### Recurrence Analysis

**Sintassi:** Recurrence Analysis( Y( column ), Cost( column ), Label( column ), &lt;Grouping( column )&gt; )

**Descrizione:** Analizza come un evento ricorrente è distribuito nel tempo, per sistema o finché il sistema stesso va fuori servizio.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Bladder Cancer.jmp" );obj = dt << Recurrence Analysis(	Y( :Age ),	Cost( :Cost ),	Grouping( :Treatment Group ),	Label( :Patient Number ));

```

### Reliability Forecast

**Sintassi:** Reliability Forecast

**Descrizione:** Prevede i guasti futuri sulla base dei dati osservati e delle future unità a rischio. La piattaforma accetta diversi formati di input. Per ulteriori informazioni vedere ciascun formato.

#### Formato Date

```jsl

dt1 = Open( "$SAMPLE_DATA/Reliability/Small Production part1.jmp" );dt2 = Open( "$SAMPLE_DATA/Reliability/Small Production part2.jmp" );obj = dt1 << Reliability Forecast(	Input Format( Dates ),	Production Data Table(		dt1,		Production Count( :Sold Quantity ),		Timestamp( :Sold Month )	),	Failure Data Table(		dt2,		Failure Time( :Return Month ),		Timestamp( :Sold Month ),		Failure Count( :Return Quantity )	),	Life Time Unit( Month ),	Show Legend( 1 ),	Show Graph Filter( 0 ),	Forecast(		Group( "" ),		Risk Set( [2550, 2600, 2650, 2700, 2750, 2800, 2850] ),		Future Risk Set(			[3082.5, 3052.5, 3367.5, 3952.5, 3667, 3667],			[3347740800, 3350160000, 3352579200, 3355257600, 3357849600, 3360528000]		),		Forecast To( "02/2011" ),		Distribution( Weibull ),		Contract( 6, Month ),		Forecast Type( Sequential ),		Interval Type( Prediction Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 1 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Formato Nevada

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Widgets.jmp" );collist = Transform Each( {i}, 3 :: 38, Output( "List" ), Column( dt, i ) );obj = dt << Reliability Forecast(	Input Format( Nevada ),	Production Count( :Volume ),	Timestamp( :Time ),	Failure Count( Eval List( collist ) ),	Life Time Unit( Month ),	Interval Censored Failure( 1 ),	Show Legend( 0 ),	Show Graph Filter( 0 ),	Forecast(		Group(),		Risk Set(			[1991, 2000, 1999, 2024, 1959, 1958, 2000, 2001, 1986, 1966, 1983, 2011, 2026,			1950, 1989, 1963, 1954, 2030, 1981, 2006, 1991, 1950, 2025, 1996, 1987, 1957,			1988, 1966, 2038, 2014, 1962, 1965, 1952, 2045, 2018, 2036]		),		Forecast To( "01/2004" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( . ),		Monte Carlo Sample Size( 10000 ),		Random Seed( -1 ),		Use Approximate Distribution( 1 )	));

```

#### Formato Tempo all'evento

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Small Production Time to Event.jmp" );obj = dt << Reliability Forecast(	Input Format( Time to Event ),	Time to Event( :"Time (Month)"n, :Time Right ),	Freq( :Freq ),	Life Time Unit( Month ),	Forecast Start( Informat( "03/01/2010", "Locale Date" ) ),	Forecast(		Group( "" ),		Future Risk Set( [33, 33, 33], [3352924800, 3355516800, 3358195200] ),		Forecast To( "09/01/2010" ),		Distribution( Weibull ),		Contract( 5, Month ),		Forecast Type( Incremental ),		Interval Type( No Interval ),		Set Interval Level( 0.9 )	),	Forecast Options(		Animation( 1 ),		Interactive Configuration of Risk Sets( 1 ),		Spreadsheet Configuration of Risk Sets( 0 ),		Show Interval( 0 ),		Forecasting Interval Type( Prediction Interval ),		Use Contract Length( 1 ),		Use Failure Cost( 0 ),		Set Failure Cost( [1] ),		Monte Carlo Sample Size( 10000 ),		Random Seed( 0 ),		Use Approximate Distribution( 1 )	));

```

### Reliability Growth

**Sintassi:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Dates ), Timestamp( column, &lt;column&gt; ), &lt;Event Count( column )&gt;, &lt;Phase( column )&gt; ); obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), &lt;Phase( column )&gt; ) obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), &lt;Event Count( column )&gt;, System ID( column ), &lt;Phase( column )&gt; )

**Descrizione:** Modella la variazione di affidabilità di un singolo sistema riparabile nel tempo in quanto i miglioramenti sono incorporati nel piano. La piattaforma accetta diversi formati di input. Per ulteriori informazioni vedere ciascun formato.

#### Date

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );obj = dt << Reliability Growth(	Input Format( Dates ),	Timestamp( :Date ),	Event Count( :Fixes ));

```

#### Sistemi paralleli

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );obj = dt << Reliability Growth(	Input Format( Parallel Systems ),	Time to Event( :Hours ),	Event Count( :Fixes ),	System ID( :System ID ),	Phase( :Phase ));obj << Piecewise Weibull NHPP with Different Intercepts;

```

#### Sistemi simultanei

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );obj = dt << Reliability Growth(	Input Format( Concurrent Systems ),	Time to Event( :Prototype 1, :Prototype 2 ),	System ID( :Failed System ),);obj << Crow AMSAA;

```

#### Tempo all'evento

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );obj << Crow AMSAA;

```

### Repeated Measures Degradation

**Sintassi:** Repeated Measures Degradation( Y( column ), Time( column ), &lt;X( column )&gt;, &lt;Freq( column )&gt;, &lt;Censor( column ), Censor Code( value )&gt; )

**Descrizione:** Modella i dati di degradazione su misure ripetute nel tempo con parametri casuali.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Device B.jmp" );obj = dt << Repeated Measures Degradation(	Y( :Power Drop ),	Time( :Hours ),	Label( :Device ),	X( :Degrees C ),	Reference Temperature( "Celsius", 195 ),	Control( "Linear", "Linear", "First Order Kinetics Type 2" ));

```

### Response Screening

**Sintassi:** Response Screening( Y( columns ), X( columns ) )

**Descrizione:** Rende automatico il processo di conduzione di test per effetti a modello lineare su un grande numero di risposte. I risultati dei test e le statistiche di riepilogo sono presentati in tabelle di dati e diagrammi. Il false discovery rate (FDR) evita dichiarazioni di significatività errate. Un metodo di stima robusta riduce la sensibilità dei test agli outlier.

#### Screening della risposta con stima robusta

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	Y( Column Group( "Responses" ) ),	X( :Process ),	Robust( 1 ));

```

#### Screening della risposta di 4 risposte e 26 predittori prospettici

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Response Screening( Y( :ls, :ha, :dt ), X( Column Group( "Intensities" ) ) );

```

#### Screening della risposta di molte colonne con diagramma a vulcano delle differenze delle medie

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Father, :Mother, :Sex, :Disease Status ),	Common Y Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox( 1 ), {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

#### Screening della risposta di molte colonne in gruppi

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ),	Grouping( "Sex" ));

```

#### Screening della risposta di molte colonne su ciascuno dei quattro predittori

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ));

```

#### Screening della risposta nei sottogruppi con diagramma a vulcano selezionato

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( :Father, :Mother, :Sex, :Disease Status ),	Subgroup( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

#### Screening della risposta specificato con i numeri di colonna

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Scatterplot 3D

**Sintassi:** Scatterplot 3D( Y( columns ) )

**Descrizione:** Genera un grafico a dispersione tridimensionale rotante per tre o più variabili. Se si specificano più di tre variabili, è possibile scorrere in successione le variabili che vengono mostrate nel grafico.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Scatterplot Matrix

**Sintassi:** Scatterplot Matrix( Y( columns ), &lt;X( columns )&gt;, &lt;Group( column )&gt;, &lt;By( column )&gt; )

**Descrizione:** Produce una griglia di grafici a dispersione che consente di esplorare le relazioni bivariate. Se non sono specificate variabili X, i grafici a dispersione sono per tutte le coppie di variabili Y. Se vengono specificate una o più variabili X, i grafici a dispersione sono per le variabili Y rappresentate rispetto alle variabili X.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot Matrix(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Structural Equation Models

**Sintassi:** Structural Equation Models( Model Variables ( columns ) )

**Descrizione:** Offre un contesto per stimare una serie di modelli, inclusa analisi fattoriale di conferma, modelli di percorso con o senza variabili latenti, modelli di errore di misurazione e modelli di curva di crescita latente.

**JMP Versione aggiunta:** 15

#### Analisi del percorso con variabili latenti

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables(		:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S,		:Growth_S, :Coworker_S, :Supervisor_S	),	Fit(		Model Name( "Path Analysis with Latent Variables" ),		New Latent( "Leadership", "Conflict", "Satisfaction" ),		Means(			{"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C,			:Inter_C, :General_S, :Growth_S, :Coworker_S, :Supervisor_S}}		),		Loadings(			{"Leadership", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}},			{"Conflict", {:Person_C, :Intra_C, :Inter_C}, {1}},			{"Satisfaction", {:General_S, :Growth_S, :Coworker_S, :Supervisor_S}, {1}}		),		Regressions(			{"Leadership", {"Conflict", "Satisfaction"}},			{"Conflict", {"Satisfaction"}}		),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{:Person_C, {:Person_C}},			{:Intra_C, {:Intra_C}},			{:Inter_C, {:Inter_C}},			{:General_S, {:General_S}},			{:Growth_S, {:Growth_S}},			{:Coworker_S, {:Coworker_S}},			{:Supervisor_S, {:Supervisor_S}},			{"Leadership", {"Leadership"}},			{"Conflict", {"Conflict"}},			{"Satisfaction", {"Satisfaction"}}		)	));

```

#### Analisi fattoriale confermativa

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit(		Model Name( "One Factor CFA" ),		New Latent( "Leader" ),		Means( {"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L}} ),		Loadings( {"Leader", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}} ),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{"Leader", {"Leader"}}		),		Standardized Parameter Estimates( 1 ),		Normalized Residuals Heat Map( 1 )	));

```

#### Analisi fattoriale confermativa di ordine superiore

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables(		:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C, :Inter_C, :General_S,		:Growth_S, :Coworker_S, :Supervisor_S	),	Fit(		Model Name( "Higher Order CFA" ),		New Latent( "Leadership", "Conflict", "Satisfaction", "General" ),		Means(			{"Constant", {:Support_L, :Goal_L, :Work_L, :Interact_L, :Person_C, :Intra_C,			:Inter_C, :General_S, :Growth_S, :Coworker_S, :Supervisor_S}}		),		Loadings(			{"Leadership", {:Support_L, :Goal_L, :Work_L, :Interact_L}, {1}},			{"Conflict", {:Person_C, :Intra_C, :Inter_C}, {1}},			{"Satisfaction", {:General_S, :Growth_S, :Coworker_S, :Supervisor_S}, {1}},			{"General", {"Leadership", "Conflict", "Satisfaction"}, {1}}		),		Variances(			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}},			{:Interact_L, {:Interact_L}},			{:Person_C, {:Person_C}},			{:Intra_C, {:Intra_C}},			{:Inter_C, {:Inter_C}},			{:General_S, {:General_S}},			{:Growth_S, {:Growth_S}},			{:Coworker_S, {:Coworker_S}},			{:Supervisor_S, {:Supervisor_S}},			{"Leadership", {"Leadership"}},			{"Conflict", {"Conflict"}},			{"Satisfaction", {"Satisfaction"}},			{"General", {"General"}}		)	));

```

#### Modello curva di crescita latente lineare

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Linear Growth Curve Model" ),		New Latent( "Intercept", "Slope" ),		Means( {"Constant", {"Intercept", "Slope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}, {"b1"}},			{:Multiple Choice Year2, {:Multiple Choice Year2}, {"b1"}},			{:Multiple Choice Year3, {:Multiple Choice Year3}, {"b1"}},			{:Multiple Choice Year4, {:Multiple Choice Year4}, {"b1"}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}}		),		Covariances( {"Intercept", {"Slope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

#### Modello curva di crescita latente quadratica

```jsl

dt = Open( "$SAMPLE_DATA/Academic Achievement.jmp" );obj = dt << Structural Equation Models(	Model Variables(		:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,		:Multiple Choice Year4	),	Fit(		Model Name( "Quadratic Growth Model" ),		New Latent( "Intercept", "Slope", "QuadSlope" ),		Means( {"Constant", {"Intercept", "Slope", "QuadSlope"}} ),		Loadings(			{"Intercept", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {1, 1, 1, 1}},			{"Slope", {:Multiple Choice Year1, :Multiple Choice Year2, :Multiple Choice Year3,			:Multiple Choice Year4}, {0, 1, 2, 3}},			{"QuadSlope", {:Multiple Choice Year1, :Multiple Choice Year2,			:Multiple Choice Year3, :Multiple Choice Year4}, {0, 1, 4, 9}}		),		Variances(			{:Multiple Choice Year1, {:Multiple Choice Year1}},			{:Multiple Choice Year2, {:Multiple Choice Year2}},			{:Multiple Choice Year3, {:Multiple Choice Year3}},			{:Multiple Choice Year4, {:Multiple Choice Year4}},			{"Intercept", {"Intercept"}},			{"Slope", {"Slope"}},			{"QuadSlope", {"QuadSlope"}}		),		Covariances( {"Intercept", {"Slope", "QuadSlope"}}, {"Slope", {"QuadSlope"}} ),		Path Diagram Properties( Show Means( 1 ) )	));

```

#### Modello di analisi del percorso

```jsl

dt = Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );dt << Structural Equation Models(	Model Variables( :Privacy, :Reputation, :Trust, :Purchase Int ),	Fit(		Model Name( "Path Analysis with Observed Variables" ),		Means( {"Constant", {:Privacy, :Reputation, :Trust, :Purchase Int}} ),		Regressions(			{:Privacy, {:Trust}},			{:Reputation, {:Trust, :Purchase Int}},			{:Trust, {:Purchase Int}}		),		Variances(			{:Privacy, {:Privacy}},			{:Reputation, {:Reputation}},			{:Trust, {:Trust}},			{:Purchase Int, {:Purchase Int}}		),		Covariances( {:Privacy, {:Reputation}} )	));

```

#### Modello di mediazione semplice

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg ),	Fit(		Model Name( "Mediation Analysis" ),		Means( {"Constant", {:Leadership_Avg, :Conflict_Avg, :Satisfaction_Avg}} ),		Regressions(			{:Leadership_Avg, {:Conflict_Avg, :Satisfaction_Avg}},			{:Conflict_Avg, {:Satisfaction_Avg}}		),		Variances(			{:Leadership_Avg, {:Leadership_Avg}},			{:Conflict_Avg, {:Conflict_Avg}},			{:Satisfaction_Avg, {:Satisfaction_Avg}}		)	));

```

#### Regressione lineare multipla con SEM

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Satisfaction_Avg, :Support_L, :Goal_L, :Work_L ),	Fit(		Model Name( "Multiple Regression" ),		Means( {"Constant", {:Satisfaction_Avg, :Support_L, :Goal_L, :Work_L}} ),		Regressions(			{:Support_L, {:Satisfaction_Avg}},			{:Goal_L, {:Satisfaction_Avg}},			{:Work_L, {:Satisfaction_Avg}}		),		Variances(			{:Satisfaction_Avg, {:Satisfaction_Avg}},			{:Support_L, {:Support_L}},			{:Goal_L, {:Goal_L}},			{:Work_L, {:Work_L}}		),		Covariances( {:Support_L, {:Goal_L, :Work_L}}, {:Goal_L, {:Work_L}} ),	));

```

#### Regressione lineare semplice con SEM

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );dt << Structural Equation Models(	Model Variables( :Leadership_Avg, :Satisfaction_Avg ),	Fit(		Model Name( "Simple Regression" ),		Means( {"Constant", {:Leadership_Avg, :Satisfaction_Avg}} ),		Regressions( {:Leadership_Avg, {:Satisfaction_Avg}} ),		Variances(			{:Leadership_Avg, {:Leadership_Avg}},			{:Satisfaction_Avg, {:Satisfaction_Avg}}		)	));

```

### Support Vector Machines

**Sintassi:** Support Vector Machines(Y( column ), X( columns ))

**Descrizione:** Prevede una risposta basata sui vettori di supporto nello spazio delle variabili X. Uno degli obiettivi dell&apos;algoritmo delle macchine a vettori di supporto è di utilizzare i dati di training per apprendere come classificare i nuovi dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Support Vector Machines(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Surface Plot

**Sintassi:** Surface Plot( Columns() )

**Descrizione:** Produce un grafico tridimensionale rotante di punti o una superficie definita da una formula salvata.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### Survival

**Sintassi:** Survival( Y( columns ), Censor( column ), &lt;Grouping( column )&gt; )

**Descrizione:** Calcola stime delle funzioni di sopravvivenza tramite il metodo del prodotto-limite (stime di sopravvivenza di Kaplan-Meier) per uno o più gruppi.

```jsl

dt = Open( "$SAMPLE_DATA/Rats.jmp" );obj = dt << Survival( Y( :days ), Censor( :Censor ), Grouping( :Group ) );

```

### Tabulate

**Sintassi:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descrizione:** Crea una tabella personalizzata di statistiche di riepilogo di una o più variabili. Le variabili possono essere raggruppate per una o più colonne di classificazione. Consente di creare la tabella di riepilogo mediante operazioni di trascinamento e rilascio.

#### Categorie e statistiche

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### Categorie nidificate

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Colonna di pagine

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Colonna di pagine delle risposte multiple

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Colonna ID

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Colonne di raggruppamento delle risposte multiple

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### Colonne di raggruppamento impilate

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### Colonne per categorie

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### Colonne riempite

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Frequenza

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### Peso

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### Tabelle a righe e colonne multiple

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

#### Tabelle a righe multiple

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

### Ternary Plot

**Sintassi:** Ternary Plot( Y( columns ) )

**Descrizione:** Produce un diagramma bidimensionale di una miscela di tre componenti che si sommano a una costante.

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );obj = dt << Ternary Plot( Y( :p1, :p2, :p3 ) );

```

### Text Explorer

**Sintassi:** Text Explorer( Text Columns( columns ) )

**Descrizione:** Analizza le parole dal testo in una colonna, le conta, le associa ad altre colonne, salva indicatori e rappresenta relazioni.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Time Series

**Sintassi:** Time Series( Y( column ) )

**Descrizione:** Modella una serie di osservazioni su punti temporali equidistanti. Include un grafico delle serie storiche, autocorrelazioni, variogramma, densità spettrale, ARIMA, ARIMA stagionale, modelli di smoothing e forecast.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Time Series Forecast

**Sintassi:** Time Series Forecast( Y( column ) )

**Descrizione:** Stima e prevede serie temporali multiple utilizzando metodi specifici.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/M3C Quarterly.jmp" );obj = dt << Time Series Forecast( Y( :Y ), Grouping( :Series ), Time( :Time ) );

```

### Uplift

**Sintassi:** Uplift( Y( column ), X( columns ), Treatment( column ) )

**Descrizione:** Stima un albero di partizione ricorsivo che seleziona le suddivisioni in modo da massimizzare le differenze di trattamento. I modelli identificano gruppi di individui che più probabilmente potrebbero rispondere a un trattamento.

**Esempio 1**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 3 ));

```

### Variability Chart

**Sintassi:** Variability Chart( Y( column ), X( columns ) )

**Descrizione:** Analizza le misurazioni continue per determinare come stia funzionando il sistema di misurazione. Si può anche effettuare uno studio gauge per vedere le misurazioni della variazione dei dati.

#### Decide dopo sul modello

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### Modello a effetti incrociati

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << Variability Chart(	Y( :Measurement ),	Model( "Crossed" ),	X( :Operator, :part# ),	Variance Components( 1 ));

```

#### Modello a effetti incrociati e poi nidificati

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << Variability Chart(	Y( :Y ),	X( :Operator, :Instrument, :Part ),	Model( "Crossed then Nested" ),	Variance Components( 1 ));

```

#### Modello a effetti nidificati

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Nested" ),	X( :Operator, :Part ),	Variance Components( 1 ));

```

#### Modello a effetti nidificati e poi incrociati

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Nested then Crossed" ),	X( :Operator, :Instrument, :Part ),	Variance Components( 1 ));

```

#### Modello a effetti principali

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Wafer.jmp" );obj = dt << Variability Chart(	Y( :Y ),	Model( "Main Effect" ),	X( :Operator, :Wafer ),	Variance Components( 1 ));

```

### Virtual Join

**Sintassi:** Virtual Join

**Descrizione:** Collega una tabella di dati principale a una tabella di dati secondaria tramite una colonna ID.

Consente alla tabella principale di accedere a colonne della tabella secondaria senza unire fisicamente le tabelle.



La proprietà Collega colonna ID contrassegna una colonna nella tabella secondaria come la colonna ID.



La proprietà Collega colonna di riferimento mappa una colonna nella tabella principale alla colonna ID della tabella secondaria.

La proprietà Collega riferimento consente di impostare il riferimento alla tabella di dati o il percorso della tabella di dati che se desidera collegare.

L&apos;opzione &apos;Usa nome colonna collegata&apos; creerà le colonne collegate con il nome della colonna di origine invece del nome univoco completo.

**Esempio 1**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Property( "Link ID", 1 ), Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));cID << Save( "$temp\cID.jmp" );Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID",		Numeric,		Set Property( "Link Reference", Reference Table( "$temp\cID.jmp" ) ),		Set Values( [1, 2, 1, 2] )	),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));Favs:"color[colorID]"n << hide( 0 ); // show the color column in the table, it is hidden by defaultWrite( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );Favs:colorID[2] = 1; // change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:"color[colorID]"n[2] );Favs:"color[colorID]"n << hide( 1 ) << hide( 0 );Write( "\!nRalph's color changed." );

```

**Esempio 2**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));cID:ID << Set Property( "Link ID", 1 );Favs:colorID << Set Property(	"Link Reference",	{Reference Table( cID ), options( "use linked column name" )});Favs:color << hide( 0 ); // show the color column in the table, it is hidden by defaultWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // not Favs:"color[colorID]"nFavs:colorID[2] = 1;    // change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] );Write( "\!nRalph's color changed." );

```

**Esempio 3**

```jsl

cID = New Table( "Color IDs",	Add Rows( 2 ),	New Column( "ID", Numeric, Set Values( [1, 2] ) ),	New Column( "color", Character, Set Values( {"magenta", "cyan"} ) ));Favs = New Table( "Favorite Colors",	Add Rows( 4 ),	New Column( "colorID", Numeric, Set Values( [1, 2, 1, 2] ) ),	New Column( "person", Character, Set Values( {"fred", "ralph", "artemus", "neil"} ) ));cID:ID << Set Property( "Link ID", 1 );Favs:colorID << Set Property(	"Link Reference",	{Reference Table( cID ), options( "use linked column name"(1), "auto open" )});Favs2 = New Table( "More Favorites",	Add Rows( 4 ),	New Column( "ID", Numeric, Set Values( [1, 2, 3, 4] ) ),	New Column( " person", Character, Set Values( {"susie", "james", "mark", "ami"} ) ));// A link ID and link reference can be assigned to the same column.  The option "Auto open" will  // automatically open the linked tables for you when you open the main referencing table.Favs2:ID << Set Property( "Link ID", 1 );cID:ID << Set Property(	"Link Reference",	{Reference Table( Favs2 ), Options( "Use Linked Column Name"(1) )});Favs:color << hide( 0 ); // Show the color column in the table, it is hidden by defaultFavs:ID << hide( 0 );  // Show the ID column in the table, from More Favorites tableWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] ); // Not Favs:"color[colorID]"nFavs:colorID[2] = 1;    // Change ralph's color by changing his color idWrite( "\!n", Favs:person[2], " likes ", Favs:color[2] );Write( "\!nRalph's color changed." );cid:person << hide( 0 );Write( "\!n", cID:person[2], " likes ", Favs:color[4] );

```

## Messaggi degli elementi

### Add Properties to Table

**Sintassi:** obj &lt;&lt; Add Properties to Table

**Descrizione:** Aggiungi le proprietà alla tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();dt2 = New Table( "Little Class" );dt2 << Add Properties to Table( proplist );

```

### Add Scripts to Table

**Sintassi:** obj &lt;&lt; Add Scripts to Table

**Descrizione:** Questo comando è un alias di &apos;Aggiungi le proprietà alla tabella&apos;.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();dt2 = New Table( "Little Class" );dt2 << Add scripts to table( proplist );

```

### Anonymize

**Sintassi:** obj &lt;&lt; Anonymize( columns( columns ), &lt;Output Table( name )&gt; )

**Descrizione:** Crea una nuova tabella di dati con gli identificativi univoci rimossi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << anonymize( columns( :name, :age ), output table name( "anonymized" ) );

```

### Apply Columns List Filter To Data Grid

**Sintassi:** obj &lt;&lt; Apply Columns List Filter To Data Grid( state=0|1 )

**Descrizione:** Attivare per applicare i filtri dell&apos;elenco delle colonne della tabella di dati alla griglia dei dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Column Filter( Column Name( "tude" ) );Wait( 1 );dt << Apply Columns List Filter To Data Grid( 0 );Wait( 1 );dt << Apply Columns List Filter To Data Grid( 1 );

```

### Apply Formula

**Sintassi:** dt &lt;&lt; Apply Formula([Columns(&lt;col|{cols}|Group(col, count)|&lt;group name&gt;, [Ref(&lt;name&gt;)], [List Ref(&lt;name&gt;)]]+, [Output(In Place|In Place Formula|New Formula(&lt;prefix&gt;|New Static(&lt;prefix&gt;)], [Group(&lt;name&gt;)])

**Descrizione:** Utilizza una formula per trasformare una o più colonne e inserire i risultati (come formule o dati) in colonne nuove o esistenti.

È necessario definire almeno un gruppo di colonne (una singola colonna, un elenco esplicito di colonne, una sequenza di colonne o il nome di un gruppo di colonne esistente).

Il primo gruppo definito sostituisce i dati correnti delle colonne target con i risultati della formula. Se necessario, nella formula si può specificare un nome che si riferisca alle colonne prese una alla volta (Rif) o come un elenco di colonne (Rif elenco).

Infine, si può specificare il tipo di output, facoltativamente con un nome e il nome del gruppo per le nuove colonne.

**JMP Versione aggiunta:** 18

#### New Data Columns/ListRef

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Data Table( "Big Class" ) << Apply Formula(	Columns(		Group( :height, 2 ),		Ref( "_relative_from_height" ),		ListRef( "height_to_weight" )	),	Formula( _relative_from_height / Sum( height_to_weight ) ),	Output( New Static ));

```

#### New Formula Columns/Grouping

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Apply Formula(	Columns( Group( :height, 2 ), Ref( "_relative_from_height" ) ),	Formula( _relative_from_height * 2 ),	Output( New Formula( "result", Group( "output group" ) ) ));

```

#### Simple New Formula Column

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Data Table( "Big Class" ) << Apply Formula(	Columns( :height ),	Formula( :height / 5 ),	Output( New Formula ));

```

### Begin Data Update

**Sintassi:** obj &lt;&lt; Begin Data Update

**Descrizione:** Sospende tutti i messaggi di aggiornamento fino al raggiungimento del comando Termina aggiornamento dati. Questa opzione è utile per aggiornare numerose celle senza interruzioni e si applica solo alle modifiche nelle celle di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );Wait();dt << Begin Data Update;dt << Add Rows( 2000 );dt << End Data Update;

```

### Checksum

**Sintassi:** obj &lt;&lt; Checksum( &lt; Version(version) &gt;, &lt; Include(flags) &gt;, &lt; Exclude(flags) &gt; )

**Descrizione:** Compute the table&apos;s checksum. Available flags include: "ColData", "ColName", "ColDataType", "ColModelingType", "ColFormat", "ColInFormat", "ColFormatWidth", "ColAttributes", "ColProperties", "ColListCheck", "ColRangeCheck", "ColCompact", "ColLabel", "ColHidden", "ColExclude", "ColSelection", "ColState", "ColDisplayWidth", "TableVariables", "TableScripts", "RowExclude", "RowHidden", "RowLabel", "RowColor", "RowMarker", "RowSelection", "RowState"

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum();

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum( Exclude( "ColData" ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Checksum( Include( "ColData", "ColAttributes" ) );

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );flags = {"ColData", "ColAttributes"};dt << Checksum( Include( flags ) );

```

### Clear Cell Colors

**Sintassi:** obj &lt;&lt; Clear Cell Colors

**Descrizione:** Cancella il colore delle celle delle colonne selezionate. Se non è selezionata alcuna colonna, vengono cancellati i colori delle celle di tutte le colonne.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:age << Color Cells( "Red" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );:weight << color cells( {{"blue", a}} );Wait( 2 );dt << Clear cell colors( {:height, :age} );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:age << Color Cells( "Red" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );:weight << color cells( {{"blue", a}} );Wait( 2 );dt << Clear cell colors();

```

### Clear Column Selection

**Sintassi:** obj &lt;&lt; Clear Column Selection

**Descrizione:** Deseleziona le colonne selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go To( :BP 12F );Wait( 2 );dt << Clear Column Selection();

```

### Clear Edit Lock

**Sintassi:** obj &lt;&lt; Clear Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Descrizione:** Consente le operazioni specificate sulla tabella di dati non consentite in precedenza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Modify Cells", "Add Rows", "Delete Columns" );:age << set selected( 1 );:height << set selected( 1 );Wait( 2 );dt << Clear Edit Lock( "Delete Columns" );

```

### Clear Properties Selection

**Sintassi:** obj &lt;&lt; Clear Properties Selection( { property1, property2, ... )

**Descrizione:** Deseleziona le proprietà della tabella specificata dove l&apos;elenco può essere un elenco di nomi di proprietà o indici di proprietà. Se non compare alcun elenco, deselezionare tutte le proprietà selezionate.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};proplist = dt << Select Properties();Wait( 1 );dt << clear properties selection( list );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};proplist = dt << Select Properties();Wait( 1 );dt << clear properties selecction();

```

### Clone

**Sintassi:** dt &lt;&lt; Clone( &lt; Table Name(name) &gt;, &lt; Copy Formulas(1|0) &gt;, &lt; Eval Formulas(1|0) &gt; )

**Descrizione:** Crea una copia della tabella di dati

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dtClone = dt << Clone;

```

### Close Data Grid

**Sintassi:** obj &lt;&lt; Close Data Grid

**Descrizione:** Chiude o apre la griglia di dati

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Data Grid( 1 );

```

### Close Side Panels

**Sintassi:** obj &lt;&lt; Close Side Panels

**Descrizione:** Chiude o apre i riquadri laterali della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Side Panels( 1 );

```

### Close summary panels

**Sintassi:** obj &lt;&lt; Close summary panels

**Descrizione:** Chiude o apre i riquadri di riepilogo della tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Close Summary Panels( 1 );

```

### Cluster

**Sintassi:** obj &lt;&lt; Cluster

### Collapse All Column Groups

**Sintassi:** obj &lt;&lt; Collapse All Column Groups

**Descrizione:** Comprime tutti i gruppi di colonne

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );dt << Expand All Column Groups;Wait( 2 );dt << Collapse All Column Groups;

```

### Column Filter

**Sintassi:** obj &lt;&lt; Column Filter

**Descrizione:** Recupera l&apos;oggetto per manipolare il filtro della colonna attivo per la tabella.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Expand All Column Groups;dt:sex << Hide( 1 );// Use immediatelydt << Column Filter( Column Name( "Weight|Wt", Regular Expression( 1 ) ) );dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"} ) );dt << Column Filter( Tags( {"Blood Measurements", "Good Measure"}, Intersection( 1 ) ) );dt << Column Filter( Column Name( "3" ), Tags( {"Blood Measurements"} ) );dt << Column Filter( Clear );// Return an object and send messages latercf = dt << Column Filter;cf << Column Name( "3yr" );cf << Get Script;// Related to (can also send to object)dt << Show Hidden Columns in Columns List( 0 );dt << Apply Columns List Filter to Data Grid( 0 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Crea uno scambiatore di colonne standalone

**JMP Versione aggiunta:** 16

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );dt << Column Switcher(	:Process 1,	{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Bivariate",	H List Box(		cs = dt << Column Switcher( :age, {:age, :weight} ),		V List Box(			female = Bivariate( Y( :age ), X( :height ), Where( :sex == "F" ) ),			male = Bivariate( Y( :age ), X( :height ), Where( :sex == "M" ) )		)	));cs << Link Platform( female );cs << Link Platform( male );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Bivariate",	H List Box(		cs = dt << Column Switcher( :age, {:age, :weight} ),		b = Bivariate( Y( :age ), X( :height ), by( :sex ) )	));cs << Link Platform( b[1] );cs << Link Platform( b[2] );

```

### Combine Columns

**Sintassi:** obj &lt;&lt; Combine Columns

**Descrizione:** Combina diverse colonne in un&apos;unica colonna con i valori di ciascuna colonna di origine separati dal delimitatore specificato.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Selected Columns are Indicator Columns( 1 ),	Column Name( "When to Brush" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Column Name( "When to Brush" ));

```

### Compare Data Tables

**Sintassi:** obj &lt;&lt; Compare Data Tables( Compare with( Data Table( name )), &lt;Compare table variables and scripts( 0|1)&gt;, &lt;show window&gt;,&lt;Compare columns attributes and properties( 0|1)&gt;, &lt;Compare data( 0|1 )&gt;, &lt;Show difference summary(0|1)&gt;, &lt;Show difference plot(0|1)&gt; )

**Descrizione:** Confronta due tabelle di dati aperte e riporta le differenze tra i dati e tra i metadati.

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );dt << compare data tables( compare With( Data Table( "Students2" ) ) );

```

### Compress File When Saved

**Sintassi:** obj &lt;&lt; Compress File When Saved( state=0|1 )

**Descrizione:** Comprime il file durante il salvataggio della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress File When Saved( 1 );

```

### Compress Selected Columns

**Sintassi:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ...} )

**Descrizione:** Comprime ciascuna colonna nella forma più compatta.

I dati alfanumerici saranno di 1 byte se vi sono meno di 255 livelli.

I dati numerici saranno di 1 byte se i dati sono compresi tra -127 e 127.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

### Concatenate

**Sintassi:** obj &lt;&lt; Concatenate( &lt;Private&gt;, &lt;Invisible&gt;, Data Table( name ), &lt;Data Table(name), ...&gt; &lt;Label( column )&gt;, &lt;Output Table( name ) | Append to first table&gt;, &lt;Keep Formulas&gt;, &lt;Create Source Column&gt; )

**Descrizione:** Combina le righe di diverse tabelle di dati e crea una nuova tabella di dati o aggiunge le righe alla prima tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Trial2.jmp" );dt << Concatenate( Data Table( "Trial2" ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Students.jmp" );dt1 = Open( "$SAMPLE_DATA/Students1.jmp" );dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );dt << Concatenate(	Data Table( dt1 ),	Data Table( dt2 ),	"Append to first table",	"Create source column");

```

### Copy Column Properties

**Sintassi:** obj &lt;&lt; Copy Column Properties( &lt;column 1 column 2, ...&gt; )

**Descrizione:** Copia negli Appunti le proprietà delle colonne selezionate in un elenco di elenchi di proprietà separati. Facoltativamente è possibile specificare un elenco di colonne di origine invece di preselezionarle nella tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Select Columns( :MODULUS, :ELONG );dt << Copy Column Properties;New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Copy Selected Properties

**Sintassi:** obj &lt;&lt; Copy Selected Properties

**Descrizione:** Copia le proprietà della tabella selezionata negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << select properties( {"Distribution", "Oneway"} );proplist = dt << Copy Selected Properties();New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Copy Table Script

**Sintassi:** obj &lt;&lt; Copy Table Script( &lt;"No data"&gt; )

**Descrizione:** Copia uno script per ricreare la tabella di dati. Lo script risultante comprende tutti gli script della tabella memorizzati nella tabella di dati. Facoltativamente, aggiungere la parola chiave "Nessun dato" per omettere i dati dallo script.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Copy Table Script();New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Copy Table Script( "No Data" );New Window( "Script", Script Box( "//Try Paste here                     " ) );

```

### Debug Script

**Sintassi:** obj &lt;&lt; Debug Script( name )

**Descrizione:** Esegue il debugging di uno script con nome memorizzato come proprietà nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Debug Script( "Distribution" );

```

### Decision Tree

**Sintassi:** obj &lt;&lt; Decision Tree

### Define Tag

**Sintassi:** Define Tag(&lt;name&gt;, [Color(&lt;color&gt;)], [Symbol(&lt;symbol char&gt;)], [Description(&lt;text&gt;)], [Replace(&lt;existing tag name&gt;)])

**Descrizione:** Crea o aggiorna la definizione di un tag di colonna sulla tabella. Se il tag non esiste, crearlo. Assegnare facoltativamente colore, simbolo e altri attributi.

**JMP Versione aggiunta:** 19

#### Color, Symbol, or None

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID1", Color( Red ) );dt << Define Tag( "ID2", Symbol( "\!UD83D\!UDCCB" ) );dt << Define Tag( "ID3" );

```

#### New Tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID", Color( Blue ) );

```

#### Replace

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID", Color( Red ) );:height << Set Property( "Tags", {"ID"} );dt << Define Tag( "Identifier", Replace( "ID" ), Color( Blue ) );:height << Get Property( "Tags" );

```

### Delete Columns

**Sintassi:** obj &lt;&lt; Delete Columns( &lt;column&gt;, &lt;column&gt;, ... )

**Descrizione:** Elimina le colonne specificate. Se non è specificato alcun argomento elimina le colonne selezionate nella tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:height << Set Selected;Wait( 2 );dt << Delete Columns();

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Delete Columns( :Height );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );cols = {"height", "weight"};Wait( 2 );dt << Delete Columns( cols );

```

### Delete Filter View

**Sintassi:** obj &lt;&lt; Delete Filter View( name | obj )

**Descrizione:** Elimina la vista filtro specificata.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv dream = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv male = dt << New Filter View(	"Male",	Active( 0 ),	Data Filter( Add Filter( Columns( :Sex ), Where( :Sex == "MALE" ) ) ));Wait( 1 );dt << Delete Filter View( fv dream );dt << Delete Filter View( "Male" );

```

### Delete Scripts

**Sintassi:** obj &lt;&lt; Delete Scripts( &lt;script| {script 1, script 2, script 3, ...} &gt; )

**Descrizione:** Elimina gli script specificati dalla tabella di dati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Script(	"New Script",	Distribution( Column( :Height, :Weight ), By( :sex ) ));Wait( 2 );dt << Delete Scripts( "New Script" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );list = {"Bivariate", "Logistic"};Wait( 2 );dt << Delete Scripts( list );

```

### Delete Table Property

**Sintassi:** obj &lt;&lt; Delete Table Property

**Descrizione:** Alias per Elimina Script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Script(	"New Script",	Distribution( Column( :Height, :Weight ), By( :sex ) ));Wait( 2 );dt << Delete Table Property( "New Script" );

```

### Delete Table Variable

**Sintassi:** obj &lt;&lt; Delete Table Variable( name )

**Descrizione:** Elimina una variabile della tabella memorizzata nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );Wait( 2 );dt << Delete Table Variable( "Days" );

```

### Delete Tag

**Sintassi:** Delete Tag(&lt;tag&gt;|{&lt;tag&gt;, &lt;tag&gt;, ...}, [force(0|1)

**Descrizione:** Elimina un tag dalla tabella. I tag non vengono eliminati se una qualsiasi colonna li utilizza ancora, a meno che non venga fornito il flag Force(1).

**JMP Versione aggiunta:** 19

#### Delete tag

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID" );Wait( 3 );dt << Delete Tag( "ID" );

```

#### Force delete

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Define Tag( "ID" );:height << Set Property( "Tags", {"ID"} );Wait( 3 );dt << Delete Tag( "ID", Force( 1 ) );

```

### Deselect Column Group

**Sintassi:** obj &lt;&lt; Deselect Column Group( name of group | list of names )

**Descrizione:** Deseleziona i gruppi di colonne. Se è omesso il gruppo di colonne, saranno deselezionati tutti i gruppi di colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << select column group();Wait( 2 );dt << deselect column group( "pollutants" );

```

### Disable Undo

**Sintassi:** obj &lt;&lt; Disable Undo( state=0|1 )

**Descrizione:** Quando l&apos;opzione è impostata, è impossibile annullare qualsiasi operazione sulla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << disable undo( 1 );

```

### End Data Update

**Sintassi:** obj &lt;&lt; End Data Update

**Descrizione:** Invia tutti i messaggi di aggiornamento sospesi dall&apos;esecuzione del comando Inizia aggiornamento dati. Questa opzione è utile per aggiornare numerose celle senza interruzioni e si applica solo alle modifiche nelle celle di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );Wait();dt << Begin Data Update;dt << Add Rows( 2000 );dt << End Data Update;

```

### Exclude Columns

**Sintassi:** obj &lt;&lt; Exclude Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Descrizione:** Esclude le colonne dall&apos;esecuzione di qualsiasi analisi

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Exclude Columns( 1, {:Age, :Name} );

```

### Exit Filter View

**Sintassi:** obj &lt;&lt; Exit Filter View

**Descrizione:** Torna alla vista non filtrata. Se si è già nella vista non filtrata, l&apos;operazione non ha alcun effetto.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Wait( 1 );dt << Exit Filter View;

```

### Expand All Column Groups

**Sintassi:** obj &lt;&lt; Expand All Column Groups

**Descrizione:** Espande tutti i gruppi di colonne

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );dt << Collapse All Column Groups;Wait( 2 );dt << Expand All Column Groups;

```

### Fit Model

**Sintassi:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ) )

**Descrizione:** Stima modelli di regressione lineare, inclusi analisi della varianza, regressione logistica, componenti della varianza, regressione penalizzata, regressione stepwise, MANOVA e modelli di sopravvivenza.

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );dt << Fit Model(	Y( :y ),	Effects( :Drug, :x ),	Personality( "Standard Least Squares" ),	Run Model());

```

### Get Active Filter View

**Sintassi:** fv = obj &lt;&lt; Get Active Filter View

**Descrizione:** Ottiene la vista filtro attiva. Restituisce un oggetto VistaFiltro.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv active = dt << Get Active Filter View;Show( fv active << Get Name );

```

### Get All Columns As Matrix

**Sintassi:** obj &lt;&lt; Get All Columns As Matrix

**Descrizione:** Restituisce la tabella di dati come una matrice. Le colonne alfanumeriche sono numerate secondo i livelli di ordinamento, a partire da 1.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );m = dt << Get All Columns As Matrix();Show( m );

```

### Get As Report

**Sintassi:** obj &lt;&lt; Get As Report

**Descrizione:** Restituisce un report della tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );jmp_report = New Window( "Big Class",	Text Box( "Big Class" ),	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );dt << Select Columns( :name, :age, :height );jmp_report = New Window( "Big Class",	Text Box( "Big Class" ),	H List Box( Outline Box( "Big Class", dt << Get As Report ) ), );

```

### Get Cell Height

**Sintassi:** obj &lt;&lt; Get Cell Height

**Descrizione:** Ottieni l&apos;altezza di visualizzazione di una riga.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Cell Height;

```

### Get Column Group

**Sintassi:** obj &lt;&lt; Get Column Group( name of column group | list of names )

**Descrizione:** Restituisce l&apos;elenco delle colonne nel gruppo di colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << get column group( "xy" );

```

### Get Column Groups Names

**Sintassi:** obj &lt;&lt; Get Column Groups Names

**Descrizione:** Restituisce i nomi dei gruppi di colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << get column groups names;

```

### Get Column Names

**Sintassi:** obj &lt;&lt; Get Column Names( &lt;Numeric|Character|RowState&gt;, &lt;Continuous|Ordinal|Nominal&gt;,&lt;String&gt; )

**Descrizione:** Restituisce i nomi delle colonne nella tabella di dati. Se si utilizza come parola chiave una stringa, vengono restituite stringhe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Column Names();Show( n );CNames = dt << Get Column Names( Continuous );Show( CNames );SNames = dt << Get Column Names( String );Show( SNames );

```

### Get Column Reference

**Sintassi:** obj &lt;&lt; Get Column Reference( list of column names )

**Descrizione:** Restituisce il riferimento della colonna delle stringhe nell&apos;elenco

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );refList = dt << Get Column Reference( {"sex", "age"} );Show( refList );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 4};refList = dt << Get Column Reference( a );Show( refList );

```

### Get Edit Lock

**Sintassi:** obj &lt;&lt; Get Edit Lock

**Descrizione:** Ottieni l&apos;elenco delle operazioni non consentite nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Add Rows", "Delete Columns" );Wait( 2 );dt << Get Edit Lock();

```

### Get Excluded Columns

**Sintassi:** obj &lt;&lt; Get Excluded Columns

**Descrizione:** Restituisce le colonne attualmente escluse nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Exclude;exCols = dt << Get Excluded Columns;Show( exCols );

```

### Get Excluded Rows

**Sintassi:** obj &lt;&lt; Get Excluded Rows

**Descrizione:** Restituisce le righe al momento escluse nella tabella di dati. Preferire Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Exclude();r1 = dt << Get Excluded Rows();r2 = Where( Excluded() );Show( r1, r2 );

```

### Get Filter View

**Sintassi:** fv = obj &lt;&lt; Get Filter View( name | &lt;&lt;Temporary | &lt;&lt;Unfiltered )

**Descrizione:** Ottiene una vista filtro per nome od ottiene una delle viste filtro speciali utilizzando <<Temporaneo o <<Non filtrato. Se non esiste una vista filtro per il nome specificato, restituisce Vuoto().

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv dream = dt << Get Filter View( "Dream" );Show( fv dream << Get Name );Show( (dt << Get Filter View( <<Unfiltered )) << Get Name );

```

### Get Filter Views

**Sintassi:** { fv, ... } = obj &lt;&lt; Get Filter Views( &lt; Temporary(0|1) &gt;, &lt; Unfiltered(0|1) &gt; )

**Descrizione:** Ottiene un elenco di tutte le viste filtro. Di default, le viste temporanee e non filtrate non sono incluse.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv dream = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fvs = dt << Get Filter Views( Unfiltered( 1 ), Temporary( 1 ) );Show( fvs << Get Name );

```

### Get Header Height

**Sintassi:** obj &lt;&lt; Get Header Height

**Descrizione:** Ottiene l&apos;altezza di visualizzazione dell&apos;intestazione colonna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Header Height;

```

### Get Hidden Columns

**Sintassi:** obj &lt;&lt; Get Hidden Columns

**Descrizione:** Restituisce le colonne attualmente nascoste nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Weight << Hide;hidCols = dt << Get Hidden Columns;Show( hidCols );

```

### Get Hidden Rows

**Sintassi:** obj &lt;&lt; Get Hidden Rows

**Descrizione:** Restituisce le righe al momento nascoste nella tabella di dati. Preferire Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Hide();r1 = dt << Get Hidden Rows();r2 = Where( Hidden() );Show( r1, r2 );

```

### Get Label Columns

**Sintassi:** obj &lt;&lt; Get Label Columns

**Descrizione:** Restituisce le colonne utilizzate per etichettare le righe.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );labelCols = dt << Get Label Columns;Show( labelCols );

```

### Get Labeled Rows

**Sintassi:** obj &lt;&lt; Get Labeled Rows

**Descrizione:** Restituisce le righe al momento etichettate nella tabella di dati. Preferire Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Label();r1 = dt << Get Labeled Rows();r2 = Where( Labeled() );Show( r1, r2 );

```

### Get Lock

**Sintassi:** obj &lt;&lt; Get Lock( state=0|1 )

**Descrizione:** Controlla se la tabella di dati è bloccata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = dt << get lock();Show( a );Wait( 1 );dt << Lock Data Table( 1 );a = dt << get lock();Show( a );

```

### Get MM SAS DATA Step for Formula Columns

**Sintassi:** obj &lt;&lt; Get MM SAS DATA Step for Formula Columns

**Descrizione:** Crea il codice di un passo di DATA SAS Model Manager che corrisponde alle colonne della formula in una tabella di dati JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Ratio", Formula( :height / :weight ) );dt << Get MM SAS Data Step for Formula Columns;

```

### Get Name

**Sintassi:** obj &lt;&lt; Get Name( &lt;"Ignore Extension"&gt; )

**Descrizione:** Restituisce il nome visualizzato della tabella di dati. Con l&apos;argomento facoltativo &apos;Ignora estensione&apos;, il comando restituisce il nome della tabella di dati senza l&apos;estensione

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Name();Show( n );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );n = dt << Get Name( "Ignore Extension" );Show( n );

```

### Get Path

**Sintassi:** obj &lt;&lt; Get Path

**Descrizione:** Restituisce il percorso completo della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );path = dt << Get Path();Show( path );

```

### Get Property

**Sintassi:** obj &lt;&lt; Get Property( name )

**Descrizione:** Restituisce la proprietà con nome nella tabella di dati come uno script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Property( "Distribution" );Show( s );

```

### Get Row ID Width

**Sintassi:** obj &lt;&lt; Get Row ID Width

**Descrizione:** Ottiene la larghezza di visualizzazione dell&apos;area ID della riga

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );ht = dt << Get Row ID Width;

```

### Get Row States

**Sintassi:** obj &lt;&lt; Get Row States

**Descrizione:** Restituisce un vettore contenente valori di stato della riga codificati per ciascuna riga nella tabella di dati. Si noti che i valori di stato della riga codificati non possono essere usati come struttura di stato della riga nelle funzioni di stato della riga quali Colore di. L&apos;esempio 2 illustra una modalità in cui usare il vettore direttamente.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );rs = dt << Get Row States;Show( rs );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cereal.jmp" );rs = dt << GetRowStates;w = Marker Of( As Row State( rs[3] ) );dt2 = Open( "$SAMPLE_DATA/Big Class.jmp" );Row State( dt2, 5 ) = Marker State( w );

```

### Get Rows Where

**Sintassi:** obj &lt;&lt; Get Rows Where

**Descrizione:** Restituisce le righe nella tabella di dati che corrispondono ai criteri della clausola Where. Preferire invece Where.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r1 = dt << Get Rows Where( :sex == "M" );r2 = Where( :sex == "M" );Show( r1, r2 );

```

### Get SAS DATA Step for Formula Columns

**Sintassi:** obj &lt;&lt; Get SAS DATA Step for Formula Columns

**Descrizione:** Crea il codice di un passo di DATA SAS che corrisponde alle colonne della formula in una tabella di dati JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Ratio", Formula( :height / :weight ) );dt << Get SAS Data Step for Formula Columns;

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script( &lt;script name&gt; )

**Descrizione:** Restituisce lo script richiesto. Se è omesso il nome dello script, restituisce una rappresentazione del testo della tabella di dati insieme a tutti gli script memorizzati nei dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Script;New Window( "Script", Script Box( Char( Name Expr( s ) ) ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = dt << Get Script( "Distribution" );

```

### Get Script Group

**Sintassi:** obj &lt;&lt; Get Script Group( name of script group )

**Descrizione:** Restituisce l&apos;elenco degli script nel gruppo.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );gb = dt << get script group( "GB" );Wait( 1 );dt << run script( gb[2] );

```

### Get Script Groups Names

**Sintassi:** obj &lt;&lt; Get Script Groups Names

**Descrizione:** Restituisce l&apos;elenco dei nomi di gruppi di script.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );gb = dt << get script groups names;

```

### Get Scroll Locked Columns

**Sintassi:** obj &lt;&lt; Get Scroll Locked Columns

**Descrizione:** Restituisce le colonne attualmente con blocco dello scorrimento nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Scroll Lock;lockCols = dt << Get Scroll Locked Columns;Show( lockCols );

```

### Get Selected Columns

**Sintassi:** obj &lt;&lt; Get Selected Columns

**Descrizione:** Restituisce i nomi delle colonne selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :weight );names = dt << Get Selected Columns;Show( names );

```

### Get Selected Properties

**Sintassi:** obj &lt;&lt; Get Selected Properties( &lt;{list of properties}&gt; )

**Descrizione:** Ottiene le proprietà della tabella selezionata (variabile e script) in un elenco. Invece di selezionare è possibile usare un elenco facoltativo per specificare le proprietà da ottenere.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Properties( {2, 4} );proplist = dt << Get Selected Properties();

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Get Selected Properties( {2, 4} );

```

### Get Selected Rows

**Sintassi:** obj &lt;&lt; Get Selected Rows

**Descrizione:** Restituisce le righe attualmente selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( 1 );dt << Select Rows( 5 );r = dt << Get Selected Rows();Show( r );

```

### Get Table Script Names

**Sintassi:** obj &lt;&lt; Get Table Script Names

**Descrizione:** Restituisce i nomi di tutte le proprietà nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );names = dt << Get Table Script Names;Show( names );

```

### Get Table Variable

**Sintassi:** obj &lt;&lt; Get Table Variable( name )

**Descrizione:** Restituisce il valore di una variabile specificata nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Table Variable( "Days", 42 );var = dt << Get Table Variable( "Days" );Show( var );

```

### Get Table Variable Names

**Sintassi:** obj &lt;&lt; Get Table Variable Names

**Descrizione:** Restituisce i nomi di tutte le variabili nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Lung Cancer.jmp" );names = dt << Get Table Variable Names;Show( names );

```

### Get Tagged Columns

**Sintassi:** obj &lt;&lt; Get Tagged Columns( tag|{tag1, tag2, ...}, [Intersection] )

**Descrizione:** Restituisce l&apos;elenco delle colonne che corrispondono ai tag forniti. Se viene richiesta l&apos;intersezione, vengono restituite solo le colonne che contengono tutti i tag elencati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt:Ozone << setProperty( "Tags", {"Air Pollution Levels"} );dt:CO << setProperty( "Tags", {"Air Pollution Levels"} );dt:SO2 << setProperty( "Tags", {"Air Pollution Levels"} );dt:NO << setProperty( "Tags", {"Air Pollution Levels"} );dt:PM10 << setProperty( "Tags", {"Air Pollution Levels"} );dt:Lead << setProperty( "Tags", {"Air Pollution Levels"} );dt << Get Tagged Columns( "Air Pollution Levels" );

```

### Get Transforms

**Sintassi:** dt &lt;&lt; Get Transforms()

**Descrizione:** Recupera l&apos;elenco delle colonne di trasformazione associate a questa tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :B + 1 ) );dt << Transform Column( "B", Formula( :height + 1 ) );Show( dt << Get Transforms() );dt << Delete Columns( {:A, :B} );

```

### Get as Matrix

**Sintassi:** obj &lt;&lt; Get as Matrix( &lt;list of columns by name&gt;, &lt;list of columns by number&gt;, &lt;column range&gt; )

**Descrizione:** Restituisce le colonne specificate nella tabella di dati come una matrice. Il valore predefinito è tutte le colonne numeriche.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );m = dt << Get As Matrix();Show( m );x = dt << GetAsMatrix( {4, 5} );Show( x );

```

### Group Columns

**Sintassi:** obj &lt;&lt; Group Columns( first column, number ) obj &lt;&lt; Group Columns( {column1, column2, ...}) obj &lt;&lt; Group Columns(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {column1, column2, ...}) obj &lt;&lt; Group Columns( group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), first column, number )

**Descrizione:** Raggruppa un elenco di colonne.

#### Add to group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );theGroup = dt << Group Columns( "BP", :BP 8M :: :BP 8W );Wait( 2 );// add to theGrouptheGroup = dt << Group Columns( theGroup, {:BP 12W} );

```

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );dt << Group Columns( Path( {"Groups", "BP8"} ), :BP 8M :: :BP 8W );

```

#### Using count

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );Wait( 1 );group = dt << Group Columns( BP 8M, 9 );

```

### Group Scripts

**Sintassi:** obj &lt;&lt; Group Scripts({ script1, script2, ...}) obj &lt;&lt; Group Scripts(group name | Path({&lt;a&gt;, &lt;b&gt;, ...}), {script1, script1, ...})

**Descrizione:** Raggruppa un elenco di script.

**JMP Versione aggiunta:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Sample Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});

```

### Has Column

**Sintassi:** dt &lt;&lt; Has Column( name, &lt; Exact Match(1|0) &gt; )

**Descrizione:** Chiede se la tabella di dati ha una colonna con il nome specificato.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Has Column( "weight" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show(	dt << Has Column( "Weight" ),	dt << Has Column( "Weight", Exact Match( 1 ) ),	dt << Has Column( "a g e" ),	dt << Has Column( "a g e", Exact Match( 1 ) ));

```

### Has data view

**Sintassi:** obj &lt;&lt; Has data view

**Descrizione:** Restituisce vero se la tabella di dati ha una finestra visibile aperta.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Has Data View();

```

### Hide Columns

**Sintassi:** obj &lt;&lt; Hide Columns( &lt; 0|1 &gt; | &lt; { column1, column2, ... } &gt; )

**Descrizione:** Nasconde le colonne nella griglia dei dati

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Hide Columns( 1, {:Age, :Name} );

```

### Is Dirty

**Sintassi:** obj &lt;&lt; Is Dirty

**Descrizione:** Richiede se la tabella di dati è stata modificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = dt << is Dirty;Show( a );dt << add rows( 5 );b = dt << is dirty;Show( b );

```

### Is Linked Subset

**Sintassi:** obj &lt;&lt; Is Linked Subset

**Descrizione:** Chiede se la tabella di dati è un sottoinsieme collegato

**JMP Versione aggiunta:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );linkedSubset = dt << Subset( All Rows, Link To Original Data Table( 1 ) );subset = dt << Subset( All Rows );Show( dt << Is Linked Subset, linkedSubset << Is Linked Subset, subset << Is Linked Subset );

```

### JMP Query Builder

**Sintassi:** obj &lt;&lt; JMP Query Builder

**Descrizione:** Crea una query per una o più tabelle di dati JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << JMP Query Builder();

```

### Join

**Sintassi:** obj &lt;&lt; Join( &lt;Private&gt;, &lt;Invisible&gt;,With( Data Table( name )), By Matching Columns( column1 = column2, ...), Selected( columns ), SelectedWith( columns ), &lt;Drop Multiples( 0|1, 0|1 )&gt;, &lt;Include nonmatches( 0|1, 0|1 )&gt;,&lt;Copy formula( 0|1 )&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Update&gt;, &lt;Merge Same Name Columns&gt;, &lt;Preserve Main Table Order&gt; )

**Descrizione:** Combina più tabelle di dati in una nuova tabella di dati. I dati possono essere combinati assegnando le righe, associando valori di colonne o in modo cartesiano.

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Little.jmp" );dt << Join(	With( Data Table( "Little" ) ),	Select( :popcorn, :oil amt, :batch, :yield ),	SelectWith( :yield ),	By Matching Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil ));

```

### Journal

**Sintassi:** obj &lt;&lt; Journal

**Descrizione:** Crea un journal dalla tabella di dati. Viene inclusa solo la griglia dei dati, senza note, variabili né script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Journal();

```

### Journal Link

**Sintassi:** dt &lt;&lt; Journal Link( &lt; Save( &lt;filepath&gt; ) | Embed( ) &gt;, &lt; Button Name( "Ben") &gt; )

**Descrizione:** Aggiunge un tasto di collegamento alla tabella di dati a un journal. Usare embed() o save(), ma non entrambi. Embed() non ha opzioni. L’opzione save() è simile a dt<<save(). Usare ButtonName() per ignorare l’etichetta del pulsante. Restituisce un nuovo pulsante di collegamento.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Journal Link(); // assumes the table can be saved at its current location; button gets name from tabledt << Journal Link( Embed() ); // embed JSL script to re-create table; button gets name from tabledt << Journal Link(	Save( "$temp/DeleteMe1.jmp" ),	ButtonName( "Fancy Name for Temporary File" ));// even more fancy...button = dt << Journal Link( Save( "$temp/DeleteMe2.jmp" ), ButtonName( "" ) ); // no text namebutton << UnderlineStyle( 0 ); // not using the link-style appearancebutton << SetIcon( "DataTableFile" ); // add an iconbutton << SibAppend( Text Box( "Pick Me!" ), "Horizontal" ); // append a label// save it with a prompt...you can change the name in the save-as dialog...or canceldt << Journal Link( Save( "" ) ); // prompt for path and save table; button gets name from promptClose( dt, "NoSave" );

```

### Last Modified

**Sintassi:** obj &lt;&lt; Last Modified

**Descrizione:** Restituisce la data dell&apos;ultima modifica salvata alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );date = dt << Last Modified();Show( date );

```

### Lock Data Table

**Sintassi:** obj &lt;&lt; Lock Data Table( state=0|1 )

**Descrizione:** Blocca le tabelle di dati in modo che non sia possibile modificare o aggiungere valori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Lock Data Table( 1 );// Now try changing a value in the data table.

```

### MSA Variability Chart

**Sintassi:** obj &lt;&lt; MSA Variability Chart( Y( column ), X( columns ) )

**Descrizione:** Visualizza un grafico di variabilità che mostra come una misura vari tra categorie ed effettua un&apos;analisi che esamina come la media e la varianza cambino tra le categorie.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

### Make Indicator Columns

**Sintassi:** obj &lt;&lt; Make Indicator Columns

**Descrizione:** Converte una colonna nominale o ordinale nel numero di colonne corrispondente al numero di categorie. I nomi delle colonne risultanti sono le categorie della colonna di origine. I valori delle colonne risultanti sono zero o uno.

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << Make Indicator Columns( columns( {:species, :season} ) );

```

### Make RowState Handler

**Sintassi:** rs = dt &lt;&lt; Make RowState Handler( function(a) )

**Descrizione:** Crea un gestore dello stato della riga per la tabella di dati. L&apos;argomento della funzione contiene le righe i cui stati vengono cambiati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = Function( {a}, Print( a ) );rs = dt << make row state handler( f );dt << Select Rows( 1 );dt << Select Rows( 5 );

```

### Make SAS DATA Step

**Sintassi:** sd = dt &lt;&lt; Make SAS Data Step( ) sd = dt &lt;&lt; Make SAS Data Step( SaveJMPMetadata(true) )

**Descrizione:** Restituisce la tabella di dati come passo di DATA SAS.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sd = dt << Make SAS Data Step();Show( sd );

```

### Make SAS DATA Step Window

**Sintassi:** sd = dt &lt;&lt; Make SAS Data Step Window( ) sd = dt &lt;&lt; Make SAS Data Step Window( SaveJMPMetadata(true) )

**Descrizione:** Apre una nuova finestra di tipo SAS e crea un passo di DATA SAS a partire dalla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sd = dt << Make SAS Data Step Window();

```

### Merge Referenced Data

**Sintassi:** obj &lt;&lt; Merge Referenced Data

**Descrizione:** Rende la tabella standalone unendo i dati della tabella di origine con le colonne referenziate ed eliminando i collegamenti. Anche la proprietà Collega riferimento delle colonne di riferimento sarà rimossa.

```jsl

dt1 = Open( "$SAMPLE_DATA\Pizza Profiles.jmp" );dt2 = Open( "$SAMPLE_DATA\Pizza Responses.jmp" );dt1:ID << Set Property( "Link ID", 1 );dt2:Choice << Set Property( "Link Reference", Reference Table( dt1 ) );dt2:Choice1 << Set Property( "Link Reference", Reference Table( dt1 ) );dt2:Choice2 << Set Property( "Link Reference", Reference Table( dt1 ) );dt2 << Merge Referenced Data();

```

### Missing Data Pattern

**Sintassi:** obj &lt;&lt; Missing Data Pattern( columns( columns ), &lt;Output Table( name )&gt; )

**Descrizione:** Trova i pattern dei valori mancanti nella tabella di dati e crea una tabella di ogni pattern e della relativa frequenza.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Missing Data Pattern(	columns( :POP, :Max deg. F Jan, :OZONE, :CO, :SO2, :NO, :PM10, :Lead ));

```

### Move Column Group

**Sintassi:** obj &lt;&lt; Move Column Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(column) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descrizione:** Sposta il gruppo di colonne nel percorso specificato. Se è omesso il nome del gruppo di colonne, saranno spostati tutti i gruppi.

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( "Pollutants", after( "xy" ) );

```

#### Move all

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( to first );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << move column group( "xy", to first );

```

### Move Script Group

**Sintassi:** obj &lt;&lt; Move Script Group( name of group | Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descrizione:** Sposta il gruppo di script nel percorso specificato. Se è omesso il nome del gruppo di script, vengono spostati tutti i gruppi.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << move script group( "VL", after( "Oneway" ) );Wait( 1 );dt << move script group( "GB", after( "VL" ) );Wait( 1 );dt << move script group( "VL", after( Path( {"GB"} ) ) );Wait( 1 );dt << move script group( to first );

```

### Move Selected Scripts

**Sintassi:** obj &lt;&lt; Move Selected Scripts( script|list of scripts|group|Path({&lt;a&gt;, &lt;b&gt;, ...}), to first | to last | after(script) | after(group) | after(Path({&lt;a&gt;, &lt;b&gt;, ...})) )

**Descrizione:** Sposta gli script nel percorso specificato.

**JMP Versione aggiunta:** 14

#### After group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << Move Selected scripts( {"Logistic"}, after( "GB" ) );

```

#### Move Group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << Move Selected scripts( Path( {"GB", "Graphs"} ), after( "Contingency" ) );

```

#### To first

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move Selected scripts(	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"},	to first);

```

### Move down

**Sintassi:** obj &lt;&lt; Move down

**Descrizione:** Sostituisce i valori presenti nella prima riga della tabella di dati con i nomi delle colonne e sostituisce i nomi delle colonne con nomi di sequenziazione predefiniti.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move down;

```

### Move up

**Sintassi:** obj &lt;&lt; Move up

**Descrizione:** Sostituisce i nomi delle colonne con i valori nella prima riga della tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move up;

```

### Move up and append

**Sintassi:** obj &lt;&lt; Move up and append

**Descrizione:** Sostituisce i nomi delle colonne aggiungendo i valori presenti nella prima riga della tabella di dati ai nomi delle colonne corrispondenti.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move up and append;

```

### New Data Box

**Sintassi:** obj &lt;&lt; New Data Box( &lt; &lt;&lt;Enable Filter Views(0|1) &gt; )

**Descrizione:** Crea una vista tabella di dati in un albero del riquadro di visualizzazione. Modifica la tabella di dati corrente nella tabella di dati indicata. L&apos;argomento opzionale Enable Filter Views controlla se la vista consente o meno le viste filtri; l&apos;impostazione di default le consente.

```jsl

dtA = Open( "$SAMPLE_DATA/Big Class.jmp", invisible );New Window( "school",	H List Box(		dtA << New Data Box(),		Text Box(),		dtA << Distribution(			ContinuousDistribution( Column( :weight ) ),			NominalDistribution( Column( :age ) )		)	));dtA = 0;

```

### New Data View

**Sintassi:** obj &lt;&lt; New Data View

**Descrizione:** Crea una nuova visualizzazione della tabella di dati. Questa visualizzazione è collegata all&apos;originale nel senso che qualsiasi elemento evidenziato o modificato ha effetto sull&apos;originale. Questa opzione è utile quando è necessario spostarsi su parti differenti di una medesima tabella.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << New Data View();

```

### New Filter View

**Sintassi:** fv = dt &lt;&lt; New Filter View( &lt; name &gt;, &lt; Copy From(name|obj) &gt;, &lt; Temporary(0|1) &gt;, &lt; Active(0|1) &gt;, &lt; DataFilter(expr) &gt;)

**Descrizione:** Crea una nuova vista filtro. Viene restituito l&apos;oggetto VistaFiltro creato. La nuova vista filtro sarà attiva di default. Se non si assegna un nome alla vista filtro, questa è temporanea, a meno che non si imposti Temporaneo a zero.

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream Inverse",	Data Filter(		Data Filter(			Inverse( 1 ),			Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )		)	));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	Data Filter( Add Filter( Columns( :Sex ), Where( Is Missing( :Sex ) ) ) ));dt << New Filter View( "Unknown Sex", CopyFrom( fv ), Active( 0 ) );

```

### New Script

**Sintassi:** New Property( name, script ) New Script( name, script )

**Descrizione:** Crea e imposta una nuova proprietà nella tabella di dati come script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### New Table Variable

**Sintassi:** obj &lt;&lt; New Table Variable( name, number )

**Descrizione:** Crea e imposta una nuova variabile nella tabella di dati come valore costante. Se esiste una variabile con lo stesso nome, al nome della nuova variabile viene aggiunto un numero per renderlo univoco. Il comando simile Imposta variabile della tabella è consigliato nella maggior parte dei casi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );

```

### OC Curves

**Sintassi:** obj &lt;&lt; OC Curves

**Descrizione:** Crea un grafico che traccia la probabilità di non rilevare uno spostamento nel processo come funzione della dimensione dello spostamento.

**JMP Versione aggiunta:** 16

### Partition

**Sintassi:** obj &lt;&lt; Partition( Y( column ), X( column(s) ) )

**Descrizione:** Costruisce un albero decisionale suddividendo ricorsivamente i dati in base a una relazione tra il predittore e i valori di risposta. Sia la risposta che i predittori possono essere o continui o categorici.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));

```

### Paste Column Properties

**Sintassi:** obj &lt;&lt; Paste Column Properties

**Descrizione:** Incolla dagli Appunti elenchi multipli di proprietà delle colonne in colonne multiple. Facoltativamente è possibile specificare un elenco di colonne target invece di selezionarle nella tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );dt2 = New Table( "test it",	New Column( "T1", numeric, continuous ),	New Column( "T2", numeric, continuous ),	New Column( "T3", numeric, continuous ),	Add Rows( 10 ));dt2 << Paste Column Properties( {:T1, :T3} );

```

### Recode

**Sintassi:** obj &lt;&lt; Recode

**Descrizione:** Ricodifica i valori precedenti delle colonne selezionate in nuovi valori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :weight );dt << Recode;

```

### Recode Column

**Sintassi:** obj &lt;&lt; Recode Column(&lt;source column reference&gt;, {&lt;transform&gt;, ...}, &lt;Update Properties(0|1)&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;, Target Column(&lt;column reference&gt; | &lt;column name&gt;))

**Descrizione:** Applica le trasformazioni elencate a ciascun valore della colonna di origine e memorizza il risultato nella colonna originale o nella colonna target specificata. L&apos;opzione Per parola divide i dati alfanumerici forniti in valori di input più piccoli. Una volta determinati i valori di input, le trasformazioni vengono applicate a tali valori separatamente.

Speciali variabili JSL vengono popolate durante l&apos;esecuzione del comando:

	_rcNow è il valore corrente dell&apos;input dopo le trasformazioni precedenti.

	_rcOrig è il valore originale dell&apos;input.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( :age );col << Data Type( "Character" );dt << Recode Column(	:age,	{If( _rcNow >= 17, "Older", _rcNow >= 15, "Middle", "Younger" )},	Target Column( col ));

```

### Rename Column Group

**Sintassi:** obj &lt;&lt; Rename Column Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Descrizione:** Rinomina il gruppo di colonne.

#### Gruppo nidificato

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( Path( {"xy", "Cols"} ), {:X, :y} );Wait( 1 );dt << rename column group( Path( {"xy"} ), "XY" );dt << rename column group( Path( {"XY", "Cols"} ), "Columns" );

```

#### Gruppo semplice

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );Wait( 1 );dt << rename column group( "xy", "coordinates" );

```

### Rename Script Group

**Sintassi:** obj &lt;&lt; Rename Script Group( oldname | Path({&lt;a&gt;, &lt;b&gt;, ...}), newname )

**Descrizione:** Rinomina il gruppo di script

**JMP Versione aggiunta:** 14

#### Nested group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	Path( {"GB", "Graphs"} ),	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << rename script group( Path( {"GB", "Graphs"} ), "My Graphs" );

```

#### Simple group

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << rename script group( "GB", "GraphBuilders" );

```

### Rename Table Property

**Sintassi:** obj &lt;&lt; Rename Table Property( old name, new name )

**Descrizione:** Rinomina la Proprietà di tabella specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );Wait( 1 );dt << Rename Table Property( "New Script", "Great Script" );

```

### Rename Table Script

**Sintassi:** obj &lt;&lt; Rename Table Script( old name, new name )

**Descrizione:** Rinomina lo Script di tabella specificato.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Script( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );Wait( 1 );dt << Rename Table Script( "New Script", "Great Script" );

```

### Rename Table Variable

**Sintassi:** obj &lt;&lt; Rename Table Variable( old name, new name )

**Descrizione:** Rinomina una Variabile di tabella specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Table Variable( "Days", 42 );Wait( 2 );dt << Rename Table Variable( "Days", "Hours" );

```

### Rerun Formulas

**Sintassi:** obj &lt;&lt; Rerun Formulas

**Descrizione:** Rivaluta tutte le formule delle colonne nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 100 );dt << Rerun Formulas;

```

### Reset Transforms

**Sintassi:** dt &gt;&gt; Reset Transforms()

**Descrizione:** Quando si accede alle colonne di trasformazione, i loro dati vengono memorizzati nella cache per chiamate future. Questa funzione rimuove tali dati. I dati vengono ricreati se si accede nuovamente alla colonna.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Reset Transforms();

```

### Revert

**Sintassi:** obj &lt;&lt; Revert

**Descrizione:** Annulla qualsiasi modifica alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row States(	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]);Wait( 2 );dt << revert();

```

### Run Formulas

**Sintassi:** obj &lt;&lt; Run Formulas

**Descrizione:** Esegue tutte le valutazioni delle formule in sospeso. Non saranno valutate tutte le formule.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 10000 );dt << Run Formulas();Distribution( Column( :"N=1"n, :"N=5"n, :"N=10"n ) );

```

### Run Script

**Sintassi:** obj &lt;&lt; Run Script( name )

**Descrizione:** Esegue uno script con nome memorizzato come proprietà nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Run Script( "Distribution" );

```

### Save

**Sintassi:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Descrizione:** Salva la tabella di dati in qualsiasi formato supportato. I formati supportati includono .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt, .stx, .sqlite, .db, .sqlite3 e .db3. Alcuni formati sono supportati solo in Windows. Per maggiori dettagli vedere Using JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit locationIf( dt << Save( "" ),	Write( "\!nsaved to " || (dt << GetPath) ),	Write( "\!nsave canceled" )); // promptdt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV formatClose( dt, "NoSave" );

```

### Save As

**Sintassi:** obj &lt;&lt; Save( &lt;filepath&gt;, &lt;file type&gt; ) obj &lt;&lt; Save As( filepath, &lt;file type&gt; )

**Descrizione:** Salva la tabella di dati in qualsiasi formato supportato. I formati supportati includono .jmp, .xls, .xlsx, .txt, .csv, .tsv, .xpt, .v8xpt, .stx, .sqlite, .db, .sqlite3 e .db3. Alcuni formati sono supportati solo in Windows. Per maggiori dettagli vedere Using JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save( "$temp\deleteme Big Class.jmp" ); // explicit locationIf( dt << Save( "" ),	Write( "\!nsaved to " || (dt << GetPath) ),	Write( "\!nsave canceled" )); // promptdt << Save( "$temp\deleteme Big Class.csv" ); // convert to CSV formatClose( dt, "NoSave" );

```

### Save Database

**Sintassi:** obj &lt;&lt; Save Database( connectInfo, TableName )

**Descrizione:** Salva di nuovo la tabella di dati in un database.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Save Database( "Connect Dialog", "My_Class" );

```

### Screen Predictors

**Sintassi:** obj &lt;&lt; Screen Predictors

**Descrizione:** Questo è un alias e un vecchio nome dello Screening dei predittori

```jsl

dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );obj = dt << Predictor Screening( Y( :Banding? ), X( Column Group( "Predictors" ) ) );

```

### Select Column Group

**Sintassi:** obj &lt;&lt; Select Column Group( name of group | list of names )

**Descrizione:** Seleziona i gruppi di colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << group columns( "xy", {:X, :y} );dt << group columns( "pollutants", :Ozone :: :Lead );dt << select column group( "xy", "pollutants" );

```

### Select Properties

**Sintassi:** obj &lt;&lt; Select Properties( { property1, property2, ... )

**Descrizione:** Seleziona le proprietà della tabella specificata dove l&apos;elenco può essere un elenco di nomi di proprietà o indici di proprietà.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Select Properties( {2, 4} );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );proplist = dt << Select Properties( {"Bivariate", "Logistic"} );

```

### Select Script Group

**Sintassi:** obj &lt;&lt; Select Script Group( &lt;name of group | { group1, group2, ...} &gt; )

**Descrizione:** Seleziona i gruppi di script. Se non è specificato alcun gruppo di script, tutti i gruppi sono selezionati.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select script group( "VL" );

```

### Select Scripts

**Sintassi:** obj &lt;&lt; Select Scripts( &lt;name of script | { script1, script2, ...} &gt; )

**Descrizione:** Seleziona gli script nominati.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select scripts( {"Distribution", "Graph Builder Heat Map"} );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );a = dt << get script group( "GB" );dt << select scripts( a );

```

### Select columns

**Sintassi:** obj &lt;&lt; Select columns( &lt;column&gt;, &lt;column&gt;, ... )

**Descrizione:** Seleziona le colonne specificate. Per selezionare tutte le colonne, usare la parola chiave &apos;Tutte&apos;.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Select Columns( :Height );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << Select Columns( "All" );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );clist = {:Height, :Weight};dt << Select Columns( clist );

```

### Sequencing Variants Toolset

**Sintassi:** obj &lt;&lt; Sequencing Variants Toolset

**Descrizione:** Interfaccia per la piattaforma dell&apos;add-in Set di strumenti varianti di sequenziamento

### Set Active Filter View

**Sintassi:** obj &lt;&lt; Set Active Filter View( name | obj )

**Descrizione:** Imposta la vista filtro attiva

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Wait( 1 );dt << Set Active Filter View( "Dream" );

```

### Set Cell Height

**Sintassi:** obj &lt;&lt; Set Cell Height( number )

**Descrizione:** Imposta l’altezza di visualizzazione di ogni cella della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Cell Height( 20 );

```

### Set Dirty

**Sintassi:** obj &lt;&lt; Set Dirty( state=0|1 )

**Descrizione:** Contrassegna come modificata la tabella di dati, anche se non vi è stata alcuna modifica. Questa opzione è utile perché venga richiesto il salvataggio alla chiusura.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Dirty();

```

### Set Edit Lock

**Sintassi:** obj &lt;&lt; Set Edit Lock( [ &lt;"Modify Cells"&gt;, &lt;"Add rows"&gt;, &lt;"Add Columns"&gt;, &lt;"Delete Rows"&gt;, &lt;"Delete Columns"&gt;] )

**Descrizione:** Non consente le operazioni specificate sulla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Edit Lock( "Add Rows", "Delete Columns" );

```

### Set Header Height

**Sintassi:** obj &lt;&lt; Set Header Height( number )

**Descrizione:** Imposta l&apos;altezza di visualizzazione dell&apos;intestazione della colonna

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Header Height( 20 );

```

### Set Label Columns

**Sintassi:** obj &lt;&lt; Set Label Columns( column(s) )

**Descrizione:** Assegna un ruolo dell&apos;etichetta a colonne selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Set Label Columns( :City, :State );

```

### Set Matrix

**Sintassi:** obj &lt;&lt; Set Matrix( [ matrix with rows separated by commas ] )

**Descrizione:** Crea una tabella di dati a partire da una matrice.

```jsl

dt = New Table( "B" );dt << Set Matrix( [12 59 95, 12 61 123, 12 55 74, 12 66 145] );

```

### Set Name

**Sintassi:** obj &lt;&lt; Set Name( new TableName )

**Descrizione:** Cambia il nome della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Name( "New Class" );

```

### Set Property

**Sintassi:** obj &lt;&lt; Set Property( name, script )

**Descrizione:** Crea e imposta una nuova proprietà nella tabella di dati come script.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Property( "New Script", Distribution( Column( :Height, :Weight ), By( :sex ) ) );

```

### Set Row ID Width

**Sintassi:** obj &lt;&lt; Set Row ID Width( number )

**Descrizione:** Imposta la larghezza di visualizzazione dell&apos;area ID della riga

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row ID Width( 80 );

```

### Set Row States

**Sintassi:** obj &lt;&lt; Set Row States( [state1, state2, ... stateN] )

**Descrizione:** Imposta gli stati delle righe per tutte le righe nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Row States(	[33, 33, 33, 33, 33, 97, 97, 97, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 768]);

```

### Set Scroll Lock Columns

**Sintassi:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Descrizione:** Blocca colonne selezionate della tabella di dati per impedirne lo scorrimento.  Per indicare che una colonna è bloccata, il colore di sfondo cambia.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Set Scroll Lock Columns( :City );

```

### Set Table Variable

**Sintassi:** obj &lt;&lt; Set Table Variable( name, number )

**Descrizione:** Crea e imposta una nuova variabile nella tabella di dati come valore costante. Una variabile esistente con lo stesso nome sarà sovrascritta.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Set Table Variable( "Days", 42 );

```

### Show Header Filter Icons

**Sintassi:** obj &lt;&lt; Show Header Filter Icons( state=0|1 )

**Descrizione:** Mostra o nasconde le icone dei filtri sulle colonne della vista filtro corrente.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Filter Icons( 0 );

```

### Show Header Graphs

**Sintassi:** obj &lt;&lt; Show Header Graphs( state=0|1 )

**Descrizione:** Mostra o nasconde i grafici di intestazione nella visualizzazione della tabella di dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Graphs( 0 );

```

### Show Header Groups

**Sintassi:** obj &lt;&lt; Show Header Groups( state=0|1 )

**Descrizione:** Mostra o nasconde i gruppi di colonne nella visualizzazione della tabella di dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Groups( 0 );

```

### Show Header Statistics

**Sintassi:** obj &lt;&lt; Show Header Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde le statistiche di intestazione nella visualizzazione della tabella di dati.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Statistics( 0 );

```

### Show Header Tags

**Sintassi:** obj &lt;&lt; Show Header Tags( state=0|1 )

**Descrizione:** Mostra o nasconde i tag delle colonne nella visualizzazione della tabella di dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Lipid Data.jmp" );dt << Show Header Tags( 0 );

```

### Show Hidden Columns In Columns List

**Sintassi:** obj &lt;&lt; Show Hidden Columns In Columns List( state=0|1 )

**Descrizione:** Disattivare per omettere le colonne nascoste dall&apos;elenco delle colonne della tabella di dati. Queste colonne non vengono mai visualizzate nella griglia dei dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Hide Columns( 1, {:"pop- m"n, :Max deg. F Jan, :X, :Y} );Wait( 1 );dt << Show Hidden Columns In Columns List( 0 );

```

### Show Transforms

**Sintassi:** dt &lt;&lt; Show Transforms()

**Descrizione:** Scrive informazioni nel log sulle colonne di trasformazione associate a questa tabella di dati e alle sue piattaforme. Si tratta di informazioni e il formato potrebbe cambiare. Non deve essere analizzato.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :height + 1 ) );dt << Show Transforms();dt << Delete Columns( :A );

```

### Sort

**Sintassi:** obj &lt;&lt; Sort( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Replace table&gt;, By( column ), Order( ascending|descending ) )

**Descrizione:** Crea una nuova tabella di dati che viene ordinata rispetto a colonne specificate in ordine crescente o decrescente.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Sort( By( :name ), Order( Ascending ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Sort( replace table, By( :name ), Order( Ascending ) );

```

### Split

**Sintassi:** obj &lt;&lt; Split( Split( columns ), Split by( column ), &lt;Group(column)&gt;, &lt;Private&gt;|&lt;Invisible&gt;, &lt;Remaining Columns( Keep All | Drop All | Drop( columns ) | Keep( columns ) )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Suppress formula evaluation( 0|1 )&gt;, &lt;Sort by Column Property&gt;, &lt;Output Table( "name" )&gt; )

**Descrizione:** Crea una nuova tabella di dati che mappa diverse righe di una colonna in una riga in diverse colonne.

```jsl

dt = Open( "$SAMPLE_DATA/Restaurant Tips.jmp" );:Day of Week << set property( "Row Order Levels", 1 );dt << Split(	Split By( :Day of Week ),	Split( :Bill Amount ),	Sort by Column Property,	remaining columns( drop all ));

```

### Stack

**Sintassi:** obj &lt;&lt; Stack( &lt;Private&gt;, &lt;Invisible&gt;, columns( columns ), &lt;Source Label Column( string )&gt;, &lt;Stacked Data Column( string )&gt;, &lt;Copy formula( 0|1 )&gt;, &lt;Number of Series(n)&gt;, &lt;Contiguous&gt;, &lt;Drop All Other Columns(1) | Name("Non-stacked columns")(Keep( col1, ... )) | Name("Non-stacked columns")(Drop( col1, ... ))&gt;, &lt;Output Table( "name" )&gt;) )

**Descrizione:** Crea una nuova tabella di dati con valori di più colonne impilate in un&apos;unica colonna.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dogs.jmp" );dt << Stack(	columns( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),	Source Label Column( "Time" ),	Stacked Data Column( "Log Hist" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Stack(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	,	Number of Series( 3 ),	Contiguous,	Source Label Column( "Day" ),	Stacked Data Column( "BP" ));

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Stack(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	,	Number of Series( 3 ),	Source Label Column( "Time" ),	Stacked Data Column( "BP" ));

```

### Subscribe

**Sintassi:** obj &lt;&lt; Subscribe( Key( &lt;"client"&gt; ), OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnRenameColumn | OnClose | OnSave | OnRename (function) )

**Descrizione:** Sottoscrive per ricevere messaggi relativi a modifiche nella tabella di dati. La chiave è il nome di sottoscrizione per consentirne il riferimento. Il parametro facoltativo, client, attiva una conferma di chiusura quando si tenta di chiudere la tabella di dati. La funzione può essere il nome di una funzione definita in precedenza o la funzione stessa. On Close richiede un solo argomento per la funzione, la tabella di dati. Gli altri messaggi richiedono un ulteriore argomento: un elenco di colonne o un numero di righe interessate. Ogni sottoscrizione rimane attiva fino all&apos;annullamento della sottoscrizione stessa.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subscribe( "name1"("client"), On Close( Print( "Closing Data Table" ) ) );f = Function( {dtab, oldname},	Print( "oldname", oldname );	Print( "new name", dtab << getname() ););fsave = Function( {dtab, newpathname},	Print( "new path name", newpathname );	Print( "new name", dtab << getname() ););dt << Subscribe( "name1", On Rename( f ) );dt << Subscribe( "name1", On Save( fsave ) );fcols = Function( {dtab, b},	n = N Items( b );	dtname = (dtab << getname());	Print( dtname );	Print( n );	For( i = 1, i <= n, i++,		colname = (b[i] << getname());		Print( colname );	););dt << Subscribe( "name2", On Delete Columns( fcols ) ); //Try deleting a column, then close the data table.

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = Function( {dtab, col, oldname},	Print( dtab << getname() );	Print( "new column name", (col << getname()) );	Print( "old name", oldname ););sub = dt << Subscribe( "", OnRenameColumn( f ) );Column( dt, 1 ) << set name( "test" );Wait( 1 );dt << unsubscribe( sub, on rename column );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );delRowsFn = Function( {a, b, rows},	dtname = (a << Get Name());	Print( dtname );	Print( b );	Print Matrix( rows ););addRowsFn = Function( {a, b, insert},	dtname = (a << Get Name());	Print( dtname );	Print( b );	Print( insert ););dt << subscribe( "Test Delete", onDeleteRows( delRowsFn, 3 ) );dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );// Try deleting some rows and adding new ones.

```

### Subset

**Sintassi:** obj &lt;&lt; Subset( &lt;Private&gt;, &lt;Invisible&gt;, &lt;Selected columns&gt;, &lt;Columns(column list)&gt;, &lt;All rows | Selected Rows | Filtered Rows(where clause) | Rows([number, number, ...])&gt;, &lt;By(column list)&gt;, &lt;Sampling Rate(fraction)&gt;, &lt;Sample Size(integer)&gt;, &lt;Stratify(column list)&gt;, &lt;Link to original data table(0|1)&gt;, &lt;Copy formula(0|1)&gt;, &lt;Suppress Formula Evaluation&gt;, &lt;Keep by columns&gt; )

**Descrizione:** Crea una nuova tabella di dati partendo dalle righe e colonne selezionate nella tabella di origine. È anche possibile selezionare in modo casuale le righe da inserire nel sottoinsieme.

#### By

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( By( :sex ), Keep by columns );

```

#### Campione stratificato

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Sample Size( 10 ), Stratify( :sex ) );

```

#### Righe

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Rows( [28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40] ) );

```

#### Righe filtrate

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subset( Filtered Rows( :age == 14 & Contains( :name, "E" ) ) );

```

### Summary

**Sintassi:** obj &lt;&lt; Summary( &lt;Private&gt;, &lt;Invisible&gt;, FREQ(column | "none"), WEIGHT(column | "none"),Group( columns ),Subgroup(columns), &lt;N (column)&gt;, &lt;Mean( column )&gt;, &lt;Std Dev( column )&gt;, &lt;Min( column )&gt;, &lt;Max( column )&gt;, &lt;Range( column )&gt;, &lt;Sum( column )&gt;, &lt;CV( column )&gt;...,Include marginal statistics, Link to original data table (0|1),statistics column name format( "stat(column)" | "column" | "stat of column" | "column stat" | "stat") )

**Descrizione:** Crea una nuova tabella dati di statistiche di riepilogo. Se sono specificate variabili di raggruppamento, è presente una riga per ogni livello di una variabile di raggruppamento o per ogni combinazione di livelli di più variabili di raggruppamento.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Summary(	Group( :Age ),	subgroup( :sex ),	Mean( :Height ),	Include marginal statistics);

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Summary(	Group( :Age ),	Mean( :Height ),	statistics column name format( "stat of column" ));

```

### Suppress Formula Eval

**Sintassi:** obj &lt;&lt; Suppress Formula Eval( state=0|1 )

**Descrizione:** Elimina o attiva la valutazione della formula. Questa opzione è utile per aggiungere più velocemente righe e per eseguire analisi multiple e ordinamenti.

```jsl

dt = Open( "$SAMPLE_DATA/Central Limit Theorem.jmp" );dt << Add Rows( 2000 );dt << Suppress Formula Eval( 1 );dt << Add Rows( 2000 );dt << Suppress Formula Eval( 0 );

```

### Text to Columns

**Sintassi:** obj &lt;&lt; Text to Columns( delimiters(&lt;"separator"&gt;, &lt;TAB&gt;, &lt;NEWLINE&gt;), columns(column1, column2, ...) )

**Descrizione:** Converte una colonna di stringhe con delimitatore incorporato in colonne separate. Le colonne risultanti possono essere colonne di indicatori. I delimitatori possono essere qualsiasi carattere, la parola chiave TAB o la parola chiave NEWLINE.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns(	delimiter( "," ),	columns( :Brush Delimited ),	Make Indicator Columns( 1 ));

```

### Torch Deep Learning

**Sintassi:** obj &lt;&lt; Torch Deep Learning

**Descrizione:** Interfaccia per la piattaforma dell&apos;add-in Torch Deep Learning

### Transform Column

**Sintassi:** dt &lt;&lt; Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Replace(0|1)], [Private(0|1)], [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]

**Descrizione:** Crea una colonna di trasformazione associata alla tabella target. La colonna di trasformazione è accessibile come una normale colonna. 

	Nome: nome della colonna

	Formula: la formula che definisce i dati nella colonna di trasformazione

	Sostituisci: con questo flag, una trasformazione definita con lo stesso nome di una trasformazione esistente sostituirà la trasformazione esistente. Senza questo flag, la trasformazione esistente verrà restituita se è equivalente; altrimenti il nome della nuova colonna verrà cambiato per essere diverso.

	Privato: con questo flag, la colonna non comparirà negli elenchi di selezione delle colonne

	Tipo di dato: specificare facoltativamente il tipo di dato. Se non specificato, verrà dedotto dalla prima riga.

	Tipo di modellizzazione: specificare facoltativamente il tipo di modellizzazione. Se non specificato, verrà utilizzato il valore predefinito per il tipo di dato

	Proprietà della colonna: sono tutte le proprietà standard delle colonne che si desidera impostare. È possibile impostarle sulla colonna anche dopo la sua creazione.

**JMP Versione aggiunta:** 16

#### Nested

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :B + 1 ) );dt << Transform Column( "B", Formula( :height + 1 ) );Show( :A[1] );dt << Delete Columns( {:A, :B} );

```

#### Random

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "Predictable", Formula( Random Uniform() ), Random Seed( 314 ) );dt << Transform Column( "Random", Formula( Random Uniform() ) );Show( :Predictable[1], :Random[1] );dt << Delete Columns( {:Predictable, :Random} );

```

#### Simple

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "A", Formula( :height + 1 ) );Show( :A[1] );dt << Delete Columns( :A );

```

### Transpose

**Sintassi:** obj &lt;&lt; Transpose( &lt;Private&gt;, &lt;Invisible&gt;,columns( columns ), By( column ), &lt;Label( column )&gt;, &lt;Output Table( name )&gt; )

**Descrizione:** Crea una nuova tabella di dati dalla tabella di origine dove le righe e le colonne sono scambiate.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Transpose(	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),	By( :Dose ),	Label( :Subject ));

```

### Type 1 Gauge

**Sintassi:** obj &lt;&lt; Type 1 Gauge( Y( column ) )

**Descrizione:** Analizza i sistemi di misurazione su dati continui utilizzando il metodo Gauge tipo 1 per valutare la capability di un processo di misurazione su una parte.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Type 1 Gauge MSA.jmp" );dt << Type 1 Gauge(	Y( :Y1, :Y2, :Y3 ),	Type 1 Gauge Metadata(		:Y1( Tolerance Range( 2 ), Reference( 50.014 ), Resolution( .001 ) ),		:Y2( Tolerance Range( 6 ), Reference( 24.9 ), Resolution( .01 ) ),		:Y3( Tolerance Range( 5 ), Reference( 10 ), Resolution( .0005 ) )	));

```

### Ungroup Columns

**Sintassi:** obj &lt;&lt; Ungroup Columns( {column1, column2, ...} | Column Group( group name ) )

**Descrizione:** Separa un elenco di colonne.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );Wait( 2 );dt << Ungroup Columns();

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Group Columns( "Monday", BP 8M, 3 );dt << Group Columns( "Wednesday", BP 8W, 3 );dt << Group Columns( "Friday", BP 8F, 3 );Wait( 2 );dt << Ungroup Columns( Column Group( "Monday" ) );

```

### Ungroup Scripts

**Sintassi:** obj &lt;&lt; Ungroup Scripts( name of script group | list of scripts )

**Descrizione:** Separa un elenco di script. Se gli script non sono specificati, gli script selezionati verranno separati dal rispettivo gruppo. Tutti i gruppi verranno rimossi dal raggruppamento se non è specificato né selezionato alcuno script.

**JMP Versione aggiunta:** 14

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << ungroup scripts( "VL" );Wait( 1 );dt << ungroup scripts( {"Graph Builder Line and Bar Charts", "Graph Builder Heat Map"} );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group scripts(	"GB",	{"Graph Builder Smoother Line", "Graph Builder Line and Bar Charts",	"Graph Builder Line Chart", "Graph Builder Heat Map"});dt << group scripts( "VL", {"Set Sex Value Labels", "Set Age Value Labels"} );Wait( 1 );dt << select scripts( {"Graph Builder Smoother Line", "Graph Builder Line Chart"} );Wait( 1 );dt << ungroup scripts();

```

### Unsubscribe

**Sintassi:** obj &lt;&lt; Unsubscribe( Key, OnDeleteColumns| OnAddColumns| OnAddRows| OnDeleteRows| OnClose | OnColRename | All )

**Descrizione:** Annulla le precedenti sottoscrizioni alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Subscribe( "myname", On Close( Print( "Closing Data table" ) ) );dt << Unsubscribe( "myname", On Close );

```

### Update

**Sintassi:** obj &lt;&lt; Update( With( Data Table( name )), Match Columns( column1 = column2, ...), Selected( columns ), Add columns from Update table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), Replace columns in main table(&lt;ALL&gt;, &lt;NONE&gt;, &lt;{column1, column2, ...}&gt;), &lt;Ignore missing&gt; )

**Descrizione:** Unisce una tabella di dati aggiornati nella tabella di dati originale aggiungendo o sostituendo le colonne selezionate.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Trial1.jmp" );dt2 = Open( "$SAMPLE_DATA/Little.jmp" );dt << Update(	With( Data Table( "Little" ) ),	Match Columns( :popcorn = :popcorn, :batch = :batch, :oil amt = :oil ));

```

**Esempio 2**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) ));dt1 << Update(	With( Data Table( "Little Class" ) ),	Match Columns( :name = :name ),	Add columns from Update table( {:RANK} ),	Replace columns in Main Table( {:height} ));

```

**Esempio 3**

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "ALFRED", "HENRY"} ) ),	New Column( "height", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "weight", Continuous, Set Values( [999, 999, 999] ) ),	New Column( "RANK", Continuous, Set Values( [3, 1, 2] ) ),	New Column( "CODE", Continuous, Set Values( [0, 1, 1] ) ));dt1 << Update(	With( Data Table( "Little Class" ) ),	Match Columns( :name = :name ),	Add columns from Update table( {:RANK} ));

```

### Update From Database

**Sintassi:** obj &lt;&lt; Update From Database( connectInfo )

**Descrizione:** Aggiorna i dati nella tabella di dati con dati reimportati dal database.

```jsl

dt = Open Database( "DSN=somedb; UID=userid;pwd=PW", "SELECT * FROM DB.TABLE" );dt << Update From Database( "Connect Dialog" );

```

### XGBoost

**Sintassi:** obj &lt;&lt; XGBoost

**Descrizione:** Interfaccia sperimentale per XGBoost per la modellizzazione predittiva con boosting del gradiente stocastico

### set private

**Sintassi:** obj &lt;&lt; set private( &lt;1|0&gt; )

**Descrizione:** Rende la tabella privata. Una tabella privata viene omessa dall&apos;elenco delle tabelle di dati e dalle sottoscrizioni.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show( Get Data Table List() );Wait( 1 );dt << Set Private;Show( Get Data Table List() );Wait( 1 );dt << Set Private( 0 );Show( Get Data Table List() );Wait( 1 );Close( dt, No Save );

```

## Column Scripting

### Messaggi degli elementi

#### Add Column Properties

**Sintassi:** obj &lt;&lt; Add Column Properties

**Descrizione:** Aggiunge proprietà alla colonna selezionata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Add Column Properties( List Check( {17, 16, 15, 14, 13, 12} ) );

```

#### Add From Row States

**Sintassi:** obj &lt;&lt; Add From Row States

**Descrizione:** Aggiorna una colonna di stato delle righe con le modifiche di stato utilizzate attualmente che non corrispondono allo stato predefinito.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );dt << New Column( "Row State Col", Row State, Copy from Row States );dt << Select Rows( 1 );dt << Select Rows( 5 );dt << Exclude();col = Column( "Row State Col" );col << Add From Row States();

```

#### Add To Row States

**Sintassi:** obj &lt;&lt; Add To Row States

**Descrizione:** Copia tutti i valori di stato della riga presenti in una colonna e che non corrispondono allo stato predefinito nello stato di riga utilizzato attualmente nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );col = Column( "Time Marker" );col << Copy To Row States();col[5] = Color State( "Red" );Wait( 2 );col << Add To Row States();

```

#### Codes to Labels

**Sintassi:** :col &lt;&lt; Codes To Labels(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Descrizione:** Crea una colonna di valori alfanumerici utilizzando etichette di valori corrispondenti ai codici originali.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:age << Value Labels(	{12 = "12!", 13 = "13!", 14 = "14!", 15 = "15!", 16 = "16!", 17 = "17!"});:age << Codes to Labels;

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 1, "M" => 2] );:sex << Codes To Labels( [1 => "Female", 2 => "Male"] );

```

**Esempio 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 1.5, "M" => 2.5] );:sex << Codes To Labels( {1.5 = "Female", 2.5 = "Male"} );

```

#### Color Cell by Value

**Sintassi:** obj &lt;&lt; Color Cell by Value( state=0|1 )

**Descrizione:** Cambia il colore per la visualizzazione di celle nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Property(	"Value Colors",	{12 = -13977430, 13 = -3780930, 14 = -4157407, 15 = -13596965, 16 = -2210961, 17 =	-10562523});Wait( 1 );:Age << Color Cell by Value( 1 );

```

#### Color Cells

**Sintassi:** obj &lt;&lt; Color Cells( color, &lt;row | { row1, row2, ...} &gt; )

**Descrizione:** Colora le celle della colonna con il colore specificato. Se non sono indicate le righe, viene applicato lo stesso colore all&apos;intera colonna.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Color Cells( "Red" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 5};:Age << Color Cells( "Red", a );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {1, 3, 5};b = {2, 4, 6};:height << color cells( {{"Red", a}, {"blue", b}} );

```

#### Compact

**Sintassi:** :col &lt;&lt; Compact( &lt;1|0&gt; )

**Descrizione:** Cambia gli elementi interni di una colonna alfanumerica in modo da memorizzare una sola copia di ogni valore, risparmiando potenzialmente memoria e accelerando alcune operazioni. L&apos;opzione Salva formato controlla il formato in cui viene salvata la colonna. Il formato ridotto è più piccolo e veloce da caricare, ma la tabella non può essere aperta in JMP 17 e versioni precedenti. Il formato predefinito utilizza la preferenza del formato di salvataggio.

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();:Airline << Get Compact;

```

#### Convert to Table Column

**Sintassi:** obj &lt;&lt; Convert to Table Column

**Descrizione:** Aggiunge la colonna di trasformazione alla tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Transform Column( "New Col", Formula( 1 ) );:NewCol << Convert to Table Column();

```

#### Copy from Row States

**Sintassi:** obj &lt;&lt; Copy from Row States

**Descrizione:** Copia in una colonna tutti i valori di stato della riga utilizzati attualmente nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Birth Death.jmp" );dt << New Column( "Row State Col", Row State, Copy from Row States );

```

#### Copy to Row States

**Sintassi:** obj &lt;&lt; Copy to Row States

**Descrizione:** Copia tutti i valori di stato della riga presenti in una colonna nello stato di riga utilizzato attualmente nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Pickles.jmp" );col = Column( "Time Marker" );Wait( 2 );col << Copy To Row States();

```

#### Data Type

**Sintassi:** obj &lt;&lt; Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Descrizione:** Imposta il tipo di dati per la colonna. Utilizzando gli argomenti facoltativi, è anche possibile impostare il formato, il formato di input e la larghezza in byte se la colonna è numerica. Se i valori non vengono convertiti, annulla la modifica del tipo di dati. Ciò è particolarmente utile quando si converte una colonna alfanumerica in una colonna numerica. Restituisci righe non riuscite restituisce un elenco contenente gli indici delle righe la cui conversione non è riuscita.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Time",	"Character",	"Nominal",	Set Values( {"13:32", "20:10", "20:12", "14:56"} ));Wait( 2 );dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );dt:Time << Set Modeling Type( "Continuous" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt:Age << Set Data Type( "Character" );dt:Height << Set Data Type( "Numeric", 2 );

```

**Esempio 3**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );Show( r );

```

**Esempio 4**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );Show( r );

```

#### Delete Formula

**Sintassi:** obj &lt;&lt; Delete Formula

**Descrizione:** Elimina qualsiasi formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );:Time << Delete Formula;

```

#### Delete Property

**Sintassi:** obj &lt;&lt; Delete Property( property name )

**Descrizione:** Elimina la proprietà con nome dalla colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );:Time << Delete Property( "Spec Limits" );

```

#### Eval Formula

**Sintassi:** obj &lt;&lt; Eval Formula

**Descrizione:** Valuta la formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << Eval Formula;

```

#### Format

**Sintassi:** obj &lt;&lt; Format( "Best|Fixed Dec...", &lt;width&gt;, &lt;dec&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format( "mdy|ddmmyy|Long Date...", width ) obj &lt;&lt; Format( "Format Pattern", pattern ) obj &lt;&lt; Format("Currency", &lt;Country symbol&gt;, &lt;width&gt;, &lt;"Use Thousands Separator"&gt; ) obj &lt;&lt; Format("Use Thousands Separator" )

**Descrizione:** Imposta il formato utilizzato per visualizzare i dati nella colonna. I formati disponibili sono tutti quelli elencati sotto la voce Formato nella finestra di dialogo Informazioni sulla colonna.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Format( "Fixed Dec", 6, 3 );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/XYZ Stock Averages (plots).jmp" );:Date << Format( "ddMonyyyy", 9 );:DJI High << Format( "Currency" );:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );

```

**Esempio 3**

```jsl

dt = New Table( "hour24_times",	Add Rows( 3 ),	New Column( "time",		Continuous,		Format( "Format Pattern", "<hh24><:><mm><:><ss>" ),		Set Values( {"01:23:45", "18:19:20", "23:45:01"} )	));

```

#### Formula

**Sintassi:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Descrizione:** Imposta la formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );

```

#### Get Column Properties

**Sintassi:** obj &lt;&lt; Get Column Properties

**Descrizione:** Copia tutte le proprietà definite nelle colonne selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:HARDNESS << Get Column Properties();

```

#### Get Compact

**Sintassi:** obj &lt;&lt; Get Compact

**Descrizione:** È un insieme compatto sulla colonna

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );Show( :Airline << Get Compact );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Air Traffic.jmp" );:Airline << Compact();Show( :Airline << Get Compact );

```

#### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Ottiene la tabella di dati della colonna.

**JMP Versione aggiunta:** 14

```jsl

dt1 = Open( "$SAMPLE_DATA/Big Class.jmp" );c = Column( dt1, "Age" );Show( c << Get Name, c << Get Data Table );

```

#### Get Data Type

**Sintassi:** obj &lt;&lt; Get Data Type( &lt;"English"&gt; )

**Descrizione:** Restituisce il tipo di dati per la colonna. Se si omette la parola chiave "English", il tipo di dati viene restituito nella lingua in cui è eseguito JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = dt:Age << Get Data Type;Show( which );

```

#### Get Data Type Length

**Sintassi:** obj &lt;&lt; Get Data Type Length( &lt;English&gt; )

**Descrizione:** Restituisce il tipo di dati e la lunghezza dei dati della colonna. È restituito solo il tipo di dati se la lunghezza dei dati non è fissa, come la maggior parte delle colonne alfanumeriche.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = dt:Age << Get Data Type Length;Show( which );

```

**Esempio 2**

```jsl

dt = New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character( 8 ), Nominal, Set Values( {"KATIE", "CAROL", "MARTHA"} ) ),	New Column( "Age", Numeric( 2 ), Set Values( [12, 14, 16] ) ));nameTypeLength = dt:Name << Get Data Type Length;ageTypeLength = dt:Age << Get Data Type Length;Show( nameTypeLength, ageTypeLength );

```

#### Get Display Width

**Sintassi:** obj &lt;&lt; Get Display Width

**Descrizione:** Ottiene la larghezza di visualizzazione della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 0 );w = :Height << Get Display Width;

```

#### Get Excluded

**Sintassi:** obj &lt;&lt; Get Excluded

**Descrizione:** Restituisce 1 se la colonna è esclusa.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get excluded;Show( s );

```

#### Get Field Width

**Sintassi:** obj &lt;&lt; Get Field Width

**Descrizione:** Restituisce la larghezza del campo utilizzato per visualizzare i dati nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );width = :Height << Get Field Width;Show( width );

```

#### Get Format

**Sintassi:** obj &lt;&lt; Get Format

**Descrizione:** Restituisce il formato per la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );f = :Height << Get Format;Show( f );

```

#### Get Formula

**Sintassi:** obj &lt;&lt; Get Formula

**Descrizione:** Restituisce la formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << Eval Formula;result = col << Get Formula;Show( result );

```

#### Get Group Name

**Sintassi:** obj &lt;&lt; Get Group Name

**Descrizione:** Restituisce il nome del gruppo o il percorso del gruppo che contiene questa colonna, se esistente.

**JMP Versione aggiunta:** 19

**Gruppo nidificato**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Group Columns( "XYZ", :sex, 3 );dt << Group Columns( Path( "XYZ", "Measures" ), :height, 2 );Show( :height << Get Group Name );

```

**Gruppo semplice**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Group Columns( :height, 2 );Show( :height << Get Group Name );

```

#### Get Header Background Color

**Sintassi:** obj &lt;&lt; Get Header Background Color

**Descrizione:** Ottiene il colore dell&apos;intestazione

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( "Light Red" );Show( :height << Get Header Background Color );

```

#### Get Header Chart Type

**Sintassi:** obj &lt;&lt; Get Header Chart Type

**Descrizione:** Ottiene il tipo di grafico visualizzato nell&apos;intestazione della colonna della tabella di dati.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Show( :height << Get Header Chart Type );

```

#### Get Header Text Color

**Sintassi:** obj &lt;&lt; Get Header Text Color

**Descrizione:** Ottiene il colore del testo dell&apos;intestazione

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( "Dark Purple" );Show( :height << Get Header Text Color );

```

#### Get Hidden

**Sintassi:** obj &lt;&lt; Get Hidden

**Descrizione:** Restituisce 1 se la colonna è nascosta

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get hidden;Show( s );

```

#### Get Initial Data

**Sintassi:** obj &lt;&lt; Get Initial Data

**Descrizione:** Ottiene il valore dell&apos;espressione utilizzata per inizializzare i dati della colonna.

```jsl

dt = New Table( "MyDt" );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Log( 1 ) );Column( dt, 1 ) << get initial data;

```

#### Get Input Format

**Sintassi:** obj &lt;&lt; Get Input Format

**Descrizione:** Restituisce il formato utilizzato per l&apos;input e la memorizzazione dei dati per la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );f = :Date << Get Input Format;Show( f );

```

#### Get Labeled

**Sintassi:** obj &lt;&lt; Get Labeled

**Descrizione:** Restituisce 1 se la colonna è etichettata

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get labeled;Show( s );

```

#### Get List Check

**Sintassi:** obj &lt;&lt; Get List Check

**Descrizione:** Restituisce la verifica elenco, se definita nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Movies.jmp" );prop = :Type << Get List Check;Show( prop );

```

#### Get Lock

**Sintassi:** obj &lt;&lt; Get Lock

**Descrizione:** Restituisce il valore vero (true) se una colonna è bloccata.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );lock = :Prin1 << Get Lock;Show( lock );

```

#### Get Modeling Type

**Sintassi:** obj &lt;&lt; Get Modeling Type( &lt;"English"&gt; )

**Descrizione:** Restituisce il tipo di modellizzazione per la colonna. Se si omette la parola chiave "English", il tipo di modellizzazione viene restituito nella lingua in cui è eseguito JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );which = :Age << Get Modeling Type;Show( which );

```

#### Get Name

**Sintassi:** obj &lt;&lt; Get Name

**Descrizione:** Restituisce il nome della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col name = Column( 4 ) << Get Name;Show( col name );

```

#### Get Properties List

**Sintassi:** obj &lt;&lt; Get Properties List

**Descrizione:** Ottiene l&apos;elenco dei nomi di tutte le proprietà per questa colonna

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );:HARDNESS << Get Properties List();

```

#### Get Property

**Sintassi:** obj &lt;&lt; Get Property( Notes| Range Check| List Check| Missing Value Codes| Value Labels| Value Scores | Value Order | Value Colors| Color Gradient| Axis| Units| Response Limits| Design Role| Coding| Mixture| Factor Changes | Spec Limits| Control Limits| Process Screening | Sigma| Process Capability Distribution| MSA | Distribution | Time Frequency| Map Role| Super Categories | Multiple Response | Target Level | Control Level| Profit Matrix | Expression Role | Event Handler | Link ID | Link Reference | Next In Hierarchy )

**Descrizione:** Restituisce proprietà specifiche, se definite nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Bank Loan.jmp" );prop = :Credit Check << Get Property( "Axis" );Show( prop );

```

#### Get Range Check

**Sintassi:** obj &lt;&lt; Get Range Check

**Descrizione:** Restituisce la verifica range, se definita nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Range Check( LE LT( 48, 75 ) );check = :Height << Get Range Check;Show( check );

```

#### Get Role

**Sintassi:** obj &lt;&lt; Get Role( &lt;"English"&gt; )

**Descrizione:** Restituisce il ruolo per la colonna. Se si omette la parola chiave "English", il ruolo viene restituito nella lingua in cui è eseguito JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );which = :Count << Get Role();Show( which );

```

#### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Restituisce lo script per ricreare la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Age << Get Script;Show( s );

```

#### Get Scroll Locked

**Sintassi:** obj &lt;&lt; Get Scroll Locked

**Descrizione:** Restituisce 1 se la colonna ha lo scorrimento bloccato

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get Scroll locked;Show( s );

```

#### Get Selected

**Sintassi:** obj &lt;&lt; Get Selected

**Descrizione:** Restituisce 1 se la colonna è selezionata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );s = :Weight << Get Selected;Show( s );

```

#### Get Stored Values

**Sintassi:** obj &lt;&lt; Get Stored Values

**Descrizione:** Restituisce i valori nelle colonne senza conversione dei codici dei valori mancanti

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Property( "Missing Value Codes", 65 );valuesMatrix = :Height << Get Stored Values;Show( valuesMatrix );valuesList = :Height << GetStoredValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

#### Get Use Value Labels

**Sintassi:** obj &lt;&lt; Get Use Value Labels

**Descrizione:** Restituisce lo stato del flag Utilizza etichette dei valori.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );flag = :Color << Get Use Value Labels;Show( flag );

```

#### Get Value Labels

**Sintassi:** obj &lt;&lt; Get Value Labels

**Descrizione:** Restituisce le etichette dei valori, se definite nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );values = :Color << Get Value Labels;Show( values );

```

#### Get Values

**Sintassi:** obj &lt;&lt; Get Values

**Descrizione:** Restituisce i valori nella colonna.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );valuesMatrix = :Height << Get Values;Show( valuesMatrix );valuesList = :Height << GetValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Property( "Missing Value Codes", 65 );valuesMatrix = :Height << Get Values;Show( valuesMatrix );valuesList = :Height << GetValues(	Format(/* a numeric column will be list of character items if a format is supplied, see format function */		"Currency",		"EUR",		2,		<<use locale(			0 /* ignore locale and use period for decimal.  the default is 1: use the locale. */		)	));Show( valuesList );

```

#### Ignore Errors

**Sintassi:** obj &lt;&lt; Ignore Errors( state=0|1 )

**Descrizione:** Imposta il flag per ignorare gli errori quando la formula della colonna viene valutata

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << ignore errors( true );

```

#### Input Format

**Sintassi:** obj &lt;&lt; Input Format( format ) obj &lt;&lt; Input Format( "Format Pattern", pattern )

**Descrizione:** Imposta il formato utilizzato per l&apos;input e la memorizzazione dei dati per la colonna. Questa opzione è utilizzata spesso per i formati di data e ora.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );:Date << Input Format( "ddmmyyyy" );

```

**Esempio 2**

```jsl

dt = New Table( "duration_table",	Add Rows( 3 ),	New Column( "durations",		Continuous,		Format( "Format Pattern", "<Hour><:><mm><:><ss>" ),		Input Format( "Format Pattern", "<Hour>h <mm>m <ss>s" ),		Set Values( {"65h 43m 21s", "12h 34m 56s", "4h 32m 10s"} )	));

```

#### Is Transform Column

**Sintassi:** obj &lt;&lt; Is Transform Column

**Descrizione:** Restituisce 1 se la colonna è una colonna di trasformazione, 0 in caso contrario.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Is Transform Column();

```

#### IsTransformedOnSASExport

**Sintassi:** obj &lt;&lt; IsTransformedOnSASExport

**Descrizione:** Restituisce un valore vero (true) se i dati nel data set SAS risultante per questa colonna saranno modificati al momento dell&apos;esportazione in SAS. Nota: l&apos;opzione si applica solo alle colonne delle date, poiché le date sono memorizzate in modo diverso in SAS e in JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );flag = :Date << Is Transformed On SAS Export;Show( flag );

```

#### Labels to Codes

**Sintassi:** :col &lt;&lt; Labels to Codes(&lt;AssociativeArray&gt;|&lt;ListOfAssignments&gt;)

**Descrizione:** Crea una colonna di codici numerici con etichette di valori corrispondenti ai valori alfanumerici originali.

**JMP Versione aggiunta:** 17

**Esempio 1**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes;

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( ["F" => 10, "M" => 20] );

```

**Esempio 3**

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );:sex << Labels to Codes( {"F" = 10, "M" = 20} );

```

#### Lock

**Sintassi:** obj &lt;&lt; Lock

**Descrizione:** Blocca la colonna impedendo qualsiasi ulteriore modifica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Lock( 1 );

```

#### Preselect Role

**Sintassi:** obj &lt;&lt; Preselect Role( "Nessun ruolo"|"X"|"Y"|"Peso"|"Freq"|"Validazione" )

**Descrizione:** Assegna un ruolo preselezionato alla colonna nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "Y" );

```

#### Remove Value Labels

**Sintassi:** obj &lt;&lt; Remove Value Labels

**Descrizione:** Rimuove qualsiasi etichetta dei valori definita nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );:Color << Remove Value Labels;

```

#### Reset Transform

**Sintassi:** obj &lt;&lt; Reset Transform

**Descrizione:** Rimuove i dati memorizzati nella cache per la colonna di trasformazione. Effettuando l&apos;accesso ai dati della colonna la cache verrà ricostruita. Utilizzare questa opzione per ridurre la memoria o per consentire un ricalcolo se la formula dipende da informazioni esterne.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );global:a = 2;dt << Transform Column( "sqrt[height]", Formula( global:a * Sqrt( :height ) ) );Show( :"sqrt[height]"n[1] );global:a = 3;:"sqrt[height]"n << Reset Transform();Show( :"sqrt[height]"n[1] );

```

#### Set Data Type

**Sintassi:** obj &lt;&lt; Set Data Type( "Numeric"|"Character"|"Expression"|"Row State", &lt;Format("format string")&gt;, &lt;Input Format("format string")&gt;, &lt;1|2|4&gt;, &lt; &lt;&lt;Fail On Conversion Error &gt;, &lt; &lt;&lt;Return Failed Rows &gt; )

**Descrizione:** Imposta il tipo di dati per la colonna. Utilizzando gli argomenti facoltativi, è anche possibile impostare il formato, il formato di input e la larghezza in byte se la colonna è numerica. Se i valori non vengono convertiti, annulla la modifica del tipo di dati. Ciò è particolarmente utile quando si converte una colonna alfanumerica in una colonna numerica. Restituisci righe non riuscite restituisce un elenco contenente gli indici delle righe la cui conversione non è riuscita.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Time",	"Character",	"Nominal",	Set Values( {"13:32", "20:10", "20:12", "14:56"} ));Wait( 2 );dt:Time << Set Data Type( "Numeric", Format( "h:m", 12 ), Input Format( "h:m" ) );dt:Time << Set Modeling Type( "Continuous" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt:Age << Set Data Type( "Character" );dt:Height << Set Data Type( "Numeric", 2 );

```

**Esempio 3**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Fail On Conversion Error, <<Return Failed Rows );Show( r );

```

**Esempio 4**

```jsl

dt = New Table( "My Table",	New Column( "col1",		Character,		"Nominal",		Set Values( {"123", "456", "abc", "789", "", "def"} )	));r = dt:col1 << Set Data Type( "Numeric", <<Return Failed Rows );Show( r );

```

#### Set Display Width

**Sintassi:** obj &lt;&lt; Set Display Width( number )

**Descrizione:** Modifica la larghezza di visualizzazione della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 0 );w = :Height << Get Display Width;:Height << Set Display Width( 2 * w );

```

#### Set Each Value

**Sintassi:** obj &lt;&lt; Set Each Value( number )

**Descrizione:** Imposta tutti i valori in una colonna a una costante.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "X" );dt:X << Set Each Value( 5 );

```

#### Set Excluded

**Sintassi:** obj &lt;&lt; Set Excluded

**Descrizione:** Esclude la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set excluded;

```

#### Set Field Width

**Sintassi:** obj &lt;&lt; Set Field Width( number )

**Descrizione:** Imposta la larghezza del campo utilizzato per visualizzare i dati nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Field Width( 20 );

```

#### Set Formula

**Sintassi:** obj &lt;&lt; Set Formula( formula ) obj &lt;&lt; Formula( formula )

**Descrizione:** Imposta la formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );

```

#### Set Header Background Color

**Sintassi:** obj &lt;&lt; Set Header Background Color

**Descrizione:** Imposta il colore dell&apos;intestazione. Impostare a "Nessuno" per usare il colore predefinito

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( "Light Red" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Background Color( {250, 200, 150} );

```

#### Set Header Chart Type

**Sintassi:** obj &lt;&lt; Set Header Chart Type

**Descrizione:** Imposta il tipo di grafico da visualizzare nell&apos;intestazione della colonna della tabella di dati.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Chart Type( "Run Chart" );

```

#### Set Header Text Color

**Sintassi:** obj &lt;&lt; Set Header Text Color

**Descrizione:** Imposta il colore del testo dell&apos;intestazione. Impostare a "Nessuno" per usare il colore predefinito

**JMP Versione aggiunta:** 18

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( "Dark Purple" );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:height << Set Header Text Color( {100, 50, 100} );

```

#### Set Hidden

**Sintassi:** obj &lt;&lt; Set Hidden

**Descrizione:** Nasconde la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set hidden;

```

#### Set Initial Data

**Sintassi:** obj &lt;&lt; Set Initial Data

**Descrizione:** Inizializza i dati della colonna con qualsiasi costante o una semplice espressione.

**Esempio 1**

```jsl

dt = New Table( "MyDt", New Column(), New Column() );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Today() );Column( dt, 2 ) << set initial data( 99 );

```

**Esempio 2**

```jsl

dt = New Table( "MyDt" );dt << Add Rows( 5 );Column( dt, 1 ) << set initial data( Log( 1 ) );

```

#### Set Labeled

**Sintassi:** obj &lt;&lt; Set Labeled

**Descrizione:** Usa il valore dei dati della colonna per l&apos;etichetta.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set labeled;

```

#### Set Modeling Type

**Sintassi:** obj &lt;&lt; Set Modeling Type( "Nessuno"|"Continuo"|"Ordinale"|"Nominale"|"Stato della riga"|"Risposta multipla"|"Testo non strutturato"|"Vettore" )

**Descrizione:** Imposta il tipo di modellizzazione per la colonna nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );

```

#### Set Name

**Sintassi:** obj &lt;&lt; Set Name( name )

**Descrizione:** Imposta il nome della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Name( "Time" );

```

#### Set Property

**Sintassi:** obj &lt;&lt; Set Property( Notes | List Check | Range Check | Axis | Spec Limits | Control Limits | Sigma | Process Capability Distribution | Coding | Mixture | Design Role | Response Limits | Units | Value Order | Value Labels | Value Scores | Row Order Levels | Distribution | Time Frequency | Value Colors | Color Gradient | Missing Value Codes | Factor Change | Map Role | Supercategories | Multiple Response | Profit Matrix | Informative Missing | Expression Role | Link ID | Link Reference | Event Handler | Custom Property, {argument list} )

**Descrizione:** Imposta le proprietà nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set Property( "Units", lbs );

```

#### Set Scroll Locked

**Sintassi:** obj &lt;&lt; Set Scroll Locked

**Descrizione:** Blocca lo scorrimento della colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Set Scroll locked;

```

#### Set Selected

**Sintassi:** obj &lt;&lt; Set Selected( state=0|1 )

**Descrizione:** Seleziona la colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Height << Set Selected( 1 );

```

#### Set Use for Marker

**Sintassi:** obj &lt;&lt; Set Use for Marker

**Descrizione:** Usa i valori in questa colonna come indicatori in un grafico. Possono essere idonee colonne dell&apos;espressione con immagini o colonne alfanumeriche con ID.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Name << Set Use for Marker;

```

#### Set Values

**Sintassi:** obj &lt;&lt; Set Values( [ value1, value2, value3, ... ] )

**Descrizione:** Imposta i valori in una colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "X" );:X << Set Values(	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9,	10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

```

#### SetLock

**Sintassi:** obj &lt;&lt; SetLock

**Descrizione:** Blocca la colonna impedendo qualsiasi ulteriore modifica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Lock( 1 );

```

#### Suppress Eval

**Sintassi:** obj &lt;&lt; Suppress Eval( state=0|1 )

**Descrizione:** Imposta il flag per eliminare la valutazione della formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = New Column( "Ratio" );col << Set Formula( :Height / :Weight );col << suppress eval( true );

```

#### Use Value Labels

**Sintassi:** obj &lt;&lt; Use Value Labels( state=0|1 )

**Descrizione:** Sostituisce le etichette dei valori definite nella colonna in tutto l&apos;output.

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );:Color << Use Value Labels( 1 );Distribution( Column( :Color ) );

```

#### Value Labels

**Sintassi:** obj &lt;&lt; Value Labels( { value1 = "label1", value2 = "label2", ... } )

**Descrizione:** Imposta le etichette dei valori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:sex << Value Labels( {"F" = "Female", "M" = "Male"} );

```

## Data Table Cols

### Costruttori associati

#### Column

**Sintassi:** Column( &lt;data table&gt;, "column name"|column number )

**Descrizione:** Restituisce un riferimento alla colonna della tabella di dati specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "height" );

```

### Messaggi degli elementi

#### Add Multiple Columns

**Sintassi:** obj &lt;&lt; Add Multiple Columns( Column prefix, number of columns, &lt;before first|after last|after(column)&gt;, Character|Numeric|Row State, &lt;fieldwidth(number)&gt; )

**Descrizione:** Crea nuove colonne nella tabella di dati corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Multiple Columns( "Date", 5, Character );

```

#### Clear Column Selection

**Sintassi:** obj &lt;&lt; Clear Column Selection

**Descrizione:** Deseleziona le colonne selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go To( :BP 12F );Wait( 2 );dt << Clear Column Selection();

```

#### Clone Formula Column

**Sintassi:** obj &lt;&lt; Clone Formula Column( column, n, &lt;Substitute Column Reference( column1, list )&gt; )

**Descrizione:** Crea n nuove colonne con formula sulla base della column specificata. I riferimenti della colonna a column1 dalla formula originale saranno sostituiti da ogni colonna in list per tutte le colonne n. Usare argomenti multipli Substitute Column Reference quando si sostituisce più di un riferimento di colonna dalla formula originale.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << New Column( "Day 1", Formula( (:BP 8M + :BP 12M + :BP 6M) / 3 ) );list1 = {:BP 8W, :BP 8F};list2 = {:BP 12W, :BP 12F};list3 = {:BP 6W, :BP 6F};dt << Clone Formula Column(	"Day 1",	2,	Substitute Column Reference( :BP 8M, list1 ),	Substitute Column Reference( :BP 12M, list2 ),	Substitute Column Reference( :BP 6M, list3 ));

```

#### Columns Manager

**Sintassi:** obj &lt;&lt; Columns Manager

**Descrizione:** Richiama Gestione colonne nella tabella corrente, che mostra le proprietà e le statistiche delle colonne.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col1 = dt << Columns Manager;

```

#### Combine Columns

**Sintassi:** obj &lt;&lt; Combine Columns

**Descrizione:** Combina una serie di colonne in una colonna delimitata (a risposta multipla).

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Selected Columns are Indicator Columns( 1 ),	Column Name( "When to Brush" ));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Combine Columns(	delimiter( "," ),	Columns(		:Brush After Waking Up, :Brush After Meal, :Brush Before Sleep, :Brush Another Time	),	Column Name( "When to Brush" ));

```

#### Compress Selected Columns

**Sintassi:** obj &lt;&lt; Compress Selected Columns( { column1, column2, ... )

**Descrizione:** Comprime ciascuna colonna nella forma più compatta.

I dati alfanumerici saranno di 1 byte se vi sono meno di 255 livelli.

I dati numerici saranno di 1 byte se i dati sono compresi tra -127 e 127.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Compress Selected Columns( {:Age, :sex, :Height, :Weight} );

```

#### Exclude/Unexclude

**Sintassi:** obj &lt;&lt; Exclude( 0|1 )

**Descrizione:** Esclude la colonna dall&apos;esecuzione di qualsiasi analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << Exclude( 1 );

```

#### Formula

**Sintassi:** obj &lt;&lt; Formula

**Descrizione:** Imposta una formula nella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col1 = dt << New Column( "Ratio", Numeric, Continuous );col1 << Formula( :height / :weight );

```

#### Freq

**Sintassi:** obj &lt;&lt; Preselect Role( Freq )

**Descrizione:** Assegna il ruolo Freq alla colonna della tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "weight" );col << Preselect Role( "freq" );

```

#### Go to

**Sintassi:** obj &lt;&lt; Go to( column name|column number )

**Descrizione:** Seleziona la colonna specificata nella tabella di dati corrente e si posiziona su di essa.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );dt << Go to( :BP 12F );

```

#### Hide/Unhide

**Sintassi:** obj &lt;&lt; Hide( 0|1 )

**Descrizione:** Nasconde la colonna nella griglia dei dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Age << Hide( 1 );

```

#### Invert Column Selection

**Sintassi:** obj &lt;&lt; Invert Column Selection( &lt;list of columns&gt; )

**Descrizione:** Inverte la selezione delle colonne corrente. Se è specificato un elenco di colonne, saranno selezionate le colonne non nell’elenco.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );b = dt << Invert Column Selection;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );a = {:height, :weight};b = dt << Invert Column Selection( a );

```

#### Label/Unlabel

**Sintassi:** obj &lt;&lt; Label( 0|1 )

**Descrizione:** Imposta questa colonna come etichetta per l&apos;identificazione. I valori nella colonna compariranno in un grafico quando si seleziona un punto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Age << Label( 1 );

```

#### Make Indicator Columns

**Sintassi:** obj &lt;&lt; Make Indicator Columns

**Descrizione:** Crea un set di colonne di indicatori dalla colonna selezionata

```jsl

dt = Open( "$SAMPLE_DATA/Animals.jmp" );dt << Make Indicator Columns( columns( {:species, :season} ) );

```

#### Move Selected Columns

**Sintassi:** obj &lt;&lt; Move Selected Columns( column|column list, To first|To last|After(column)|after(group)|after(Path({&lt;a&gt;, &lt;b&gt;, ...}) )

**Descrizione:** Sposta le colonne selezionate nella tabella di dati.

**After column**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( After( :sex ) );

```

**After group**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << group Columns( "Measures", {:height, :weight} );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( After( "Measures" ) );

```

**Input list**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Move Selected Columns( {:height, :weight}, After( :name ) );

```

**To last**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );Wait( 2 );dt << Move Selected Columns( To last );

```

#### New Column

**Sintassi:** obj &lt;&lt; New Column( &lt;name&gt;, &lt;data type&gt;, &lt;modeling type&gt;, &lt;Format()&gt;, &lt;Formula()&gt;, &lt;Set Property()&gt;, &lt;Set Values()&gt;, &lt;Like()&gt; )

**Descrizione:** Crea una nuova colonna nella tabella di dati corrente.

**Like**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "like name", Like( :name ) );

```

**Nuova tabella**

```jsl

New Table( "test",	Add Rows( 5 ),	New Column( "name",		Character( 8 ),		Nominal,		Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE"} )	),	New Column( "age",		Numeric,		Ordinal,		Format( "Fixed Dec", Use thousands separator( 0 ), 5, 0 ),		Set Values( [12, 12, 12, 12, 12] )	),	New Column( "code",		Character( 2 ),		Nominal,		Set Values( {"AA", "AA", "BB", "BB", "AA"} )	));

```

**Semplici**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "X", Formula( Random Uniform() ) );

```

#### New Formula Column

**Sintassi:** dt &lt;&lt; New Formula Column(Operation(name, &lt;Category(name)&gt;), Columns(columns), &lt;Group By(columns)&gt;)

**Descrizione:** Crea una colonna della formula nella tabella utilizzando le colonne specificate e applicando le colonne delle operazioni e di raggruppamento facoltativo. La categoria dell&apos;operazione può essere specificata, se necessario, per chiarire il nome dell&apos;operazione. Restituisce un elenco di riferimenti di colonna alle colonne create.

**JMP Versione aggiunta:** 17

**Log 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Formula Column( Operation( "Log 2" ), Columns( :height, :weight ) );

```

**Raggruppa per**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Formula Column(	Operation( "Mean" ),	Columns( :height, :weight ),	Group By( :age ));

```

#### Next Selected Column

**Sintassi:** obj &lt;&lt; Next Selected Column

**Descrizione:** Va alla colonna selezionata successiva.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );dt << Next Selected Column;Wait( 2 );dt << Next Selected Column;

```

#### No Role

**Sintassi:** obj &lt;&lt; Preselect Role( No Role )

**Descrizione:** Rimuove il ruolo assegnato dalla colonna della tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "No Role" );

```

#### Original Order

**Sintassi:** obj &lt;&lt; Original Order

**Descrizione:** Riporta le colonne al loro ordine originale nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :Age );dt << Move Selected Columns( To last );Wait( 2 );dt << Original Order();

```

#### Paste Column Properties

**Sintassi:** obj &lt;&lt; Paste Column Properties

**Descrizione:** Incolla dagli Appunti elenchi multipli di proprietà delle colonne in colonne multiple. Facoltativamente è possibile specificare un elenco di colonne target invece di selezionarle nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << Copy Column Properties( {:MODULUS, :ELONG} );dt2 = New Table( "test it",	New Column( "T1", numeric, continuous ),	New Column( "T2", numeric, continuous ),	New Column( "T3", numeric, continuous ),	Add Rows( 10 ));dt2 << Paste Column Properties( {:T1, :T3} );

```

#### Previous Selected Column

**Sintassi:** obj &lt;&lt; Previous Selected Column

**Descrizione:** Va alla colonna selezionata precedente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age << Set Selected( 1 );dt:height << Set Selected( 1 );Wait( 1 );dt << Next Selected Column;dt << Next Selected Column;Wait( 2 );dt << Previous Selected Column;

```

#### Reorder by Data Type

**Sintassi:** obj &lt;&lt; Reorder by Data Type

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per tipo di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Data Type();

```

#### Reorder by Modeling Type

**Sintassi:** obj &lt;&lt; Reorder by Modeling Type

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per tipo di modellizzazione.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Modeling Type();

```

#### Reorder by Name

**Sintassi:** obj &lt;&lt; Reorder by Name

**Descrizione:** Riordina le colonne nella tabella di dati ordinandole per nome di colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reorder By Name();

```

#### Reverse Order

**Sintassi:** obj &lt;&lt; Reverse Order

**Descrizione:** Inverte l&apos;ordine delle colonne nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Reverse Order();

```

#### Set Label Columns

**Sintassi:** obj &lt;&lt; Set Label Columns( column(s) )

**Descrizione:** Assegna un ruolo dell&apos;etichetta a colonne selezionate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );Wait( 1 );dt << Set Label Columns( :City, :State );

```

#### Set Scroll Lock Columns

**Sintassi:** obj &lt;&lt; Set Scroll Lock Columns( column(s) )

**Descrizione:** Blocca colonne selezionate della tabella di dati per impedirne lo scorrimento.  Per indicare che una colonna è bloccata, il colore di sfondo cambia.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dt << Set Scroll Lock Columns( :City );

```

#### Text to Columns

**Sintassi:** obj &lt;&lt; Text to Columns

**Descrizione:** Crea un set di colonne di testo o di colonne di indicatori da una colonna con testo delimitato

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns( delimiter( "," ), columns( :Brush Delimited ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << Text To Columns(	delimiter( "," ),	columns( :Brush Delimited ),	Make Indicator Columns( 1 ));

```

#### Use for Marker

**Sintassi:** obj &lt;&lt; UseForMarker( 0|1 )

**Descrizione:** Usa i valori in questa colonna come indicatori in un grafico. Possono essere idonee colonne dell&apos;espressione con immagini o colonne alfanumeriche con ID.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Name << UseForMarker( 1 );

```

#### Validation

**Sintassi:** obj &lt;&lt; Preselect Role( Validation)

**Descrizione:** Assegna il ruolo Validazione alla colonna della tabella di dati

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "age" );col << Preselect Role( "Validation" );

```

#### Weight

**Sintassi:** obj &lt;&lt; Preselect Role( Weight )

**Descrizione:** Assegna il ruolo Peso alla colonna della tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:Weight << Preselect Role( "weight" );

```

#### X

**Sintassi:** obj &lt;&lt; Preselect Role( X )

**Descrizione:** Assegna il ruolo X alla colonna della tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );col = Column( "weight" );col << Preselect Role( "X" );

```

#### Y

**Sintassi:** obj &lt;&lt; Preselect Role( Y )

**Descrizione:** Assegna il ruolo Y alla colonna della tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Weight << Preselect Role( "Y" );

```

## Data Table Rows

### Messaggi degli elementi

#### Add Rows

**Sintassi:** obj &lt;&lt; Add Rows( &lt;n&gt;, &lt;At Start|At End|After(m)&gt; | {list of (column name = value) pairs}) )

**Descrizione:** Aggiunge n righe, all&apos;inizio, alla fine o dopo la riga m alla tabella di dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( 3, after( 5 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( {name = "David", age = 15} );

```

#### Clear Row States

**Sintassi:** obj &lt;&lt; Clear Row States

**Descrizione:** Cancella da tutte le righe gli stati, compresi selezionato, escluso, nascosto, indicatori, etichette e colori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 12, 15] );Wait( 2 );dt << Clear Row States;

```

#### Clear Select

**Sintassi:** obj &lt;&lt; Clear Select

**Descrizione:** Cancella o deseleziona le righe selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );dt << Clear Select();

```

#### Clear Selected Row States

**Sintassi:** obj &lt;&lt; Clear Selected Row States

**Descrizione:** Cancella dalle righe selezionate gli stati, compresi selezionato, escluso, nascosto, indicatori, etichette e colori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 6, 7, 8, 9, 10] );r << Exclude;r << clear select;r << Select Rows( [5, 6] );Wait( 1 );dt << Clear Selected Row States;

```

#### Color Rows by Row State

**Sintassi:** obj &lt;&lt; Color Rows by Row State

**Descrizione:** Mostra/Nasconde, nelle celle della tabella di dati, il colore assegnato nello stato della riga.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color by Column( :Age );Wait( 2 );dt << Color Rows by Row State;

```

#### Color by Column

**Sintassi:** obj &lt;&lt; Color by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Descrizione:** Assegna un colore a ciascuna riga nella tabella di dati in base al valore della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color by Column( :Age );

```

#### Color or Mark by Column

**Sintassi:** obj &lt;&lt; Color or Mark by Column( column, &lt;Color( number )&gt;, &lt;Color Theme( color theme )&gt;, &lt;Marker Theme( standard|hollow|solid|paired|classic|alphanumeric )&gt; )

**Descrizione:** Associa colori o indicatori ai valori di una colonna specifica

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Color or Mark by Column( :Age );

```

#### Colors

**Sintassi:** obj &lt;&lt; Colors( color )

**Descrizione:** Colora le righe selezionate in tutti gli output grafici contenenti indicatori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Run Script( "Bivariate" );Wait( 1 );dt << Select Where( :sex == "F" );Wait( 1 );dt << Colors( "Red" );

```

#### Data Filter

**Sintassi:** obj &lt;&lt; Data Filter( &lt;Location(x,y)&gt;, &lt;"Close Outline"&gt;, &lt;"Local"&gt;, &lt;Inverse(0|1)&gt;, &lt;Show Columns Selector(0|1)&gt;, &lt;Title(string)&gt;, &lt;Save And Restore Current Row States(0|1)&gt;, &lt;Conditional(0|1)&gt;, &lt;Auto Clear(0|1)&gt;, &lt;Group By AND(0|1)&gt;, &lt;Show Histograms And Bars(0|1)&gt;, &lt;Count Excluded Rows(0|1)&gt;, &lt;Mode(...)&gt;, &lt;Add Filter(Columns(...), Where(...), Display(...), &lt;Select Missing(cols)&gt;, &lt;Order By Count(cols)&gt;)&gt;, &lt;Favorites(...)&gt;, &lt;Animation(...)&gt; )

**Descrizione:** Crea o mostra un filtro sui dati dove si selezionano interattivamente sottoinsiemi complessi di dati. L&apos;opzione Mode determina quali stati della riga sono interessati dalla selezione nel filtro. Il comando Add Filter aggiungerà un gruppo di filtri con le clausole Columns e Where specificate. Se sono presenti più gruppi di filtri, il comportamento combinato è determinato dall&apos;opzione Group By AND. Se è specificata la parola chiave Local, il filtro può essere incorporato in un report per filtrare una o più piattaforme senza interessare altri report.

**Filtro sui dati globale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Data Filter(	Location( {218, 114} ),	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),	Add Filter(		columns( :age, :height ),		Where( :age == {13, 14, 15} ),		Where( :height >= 65 & :height <= 70 )	),	Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) ));

```

**Filtro sui dati locali**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Local Data Filter",	Data Filter Context Box(		H List Box(			dt << Data Filter(				Local,				Mode( Show( 1 ), Include( 1 ) ),				Add Filter(					columns( :age, :height ),					Where( :age == {13, 14, 15} ),					Where( :height >= 65 & :height <= 70 )				),				Add Filter( columns( :weight ), Where( :weight >= 64 & :weight <= 100 ) )			),			dt << Run Script( "Bivariate" ),			dt << Run Script( "Distribution" )		)	));

```

#### Data View

**Sintassi:** obj &lt;&lt; Data View

**Descrizione:** Crea una nuova visualizzazione dati delle righe al momento selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :age < 14 );dt << Data View;

```

#### Delete Rows

**Sintassi:** obj &lt;&lt; Delete Rows

**Descrizione:** Elimina le righe selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r = dt << Delete Rows;Show( r );

```

#### Exclude/Unexclude

**Sintassi:** obj &lt;&lt; Exclude/Unexclude

**Descrizione:** Esclude le righe selezionate in modo che non contribuiscano ai calcoli.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Exclude;

```

#### Get Rows

**Sintassi:** obj &lt;&lt; Get Rows( number )

**Descrizione:** Restituisce un elenco di valori delle colonne per le righe specificate

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Get Rows( 3 );dt << Get Rows( {1, 2, 3} );

```

#### Go to Row

**Sintassi:** obj &lt;&lt; Go to Row( row number )

**Descrizione:** Restituisce un oggetto di riga, va alla riga specificata, seleziona la riga e la evidenzia.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To Row( 5 );

```

#### Hide and Exclude

**Sintassi:** obj &lt;&lt; Hide and Exclude

**Descrizione:** Nasconde le righe selezionate non facendole comparire sui grafici e le esclude dai calcoli.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Hide and Exclude;

```

#### Hide/Unhide

**Sintassi:** obj &lt;&lt; Hide/Unhide

**Descrizione:** Nasconde le righe selezionate in modo che non compaiano nei grafici.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Go To Row( 12 );r << Hide;

```

#### Insert Rows

**Sintassi:** obj &lt;&lt; Insert Rows

**Descrizione:** Inserisce le righe prima delle righe selezionate. Non ha effetto se non è selezionata alcuna riga.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [3, 4, 5] );dt << Insert Rows;

```

#### Invert Row Selection

**Sintassi:** obj &lt;&lt; Invert Row Selection

**Descrizione:** Inverte la selezione di righe corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Where( :Age < 14 );Wait( 2 );r << Invert Row Selection;

```

#### Label/Unlabel

**Sintassi:** obj &lt;&lt; Label/Unlabel

**Descrizione:** Assegna un&apos;etichetta alle righe selezionate in tutti gli output grafici contenenti indicatori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Go To Row( 5 );r << Label;

```

#### Marker by Column

**Sintassi:** obj &lt;&lt; Marker by Column( column, &lt;Marker( number )&gt;, &lt;Marker Theme( standard | hollow | solid | paired | classic | alphanumeric )&gt;, &lt;Color theme( string )&gt;, &lt; Continuous scale(0|1)&gt;, &lt;Reverse scale(0|1)&gt;, &lt;Excluded Row( 0|1 ), &lt;Make window with legend&gt; )

**Descrizione:** Assegna un indicatore a ciascuna riga nella tabella di dati in base al valore della colonna specificata.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Marker by Column( :sex );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/big class.jmp" );dt << Marker By Column(	:age,	Marker( 1 ),	Color theme( "White to Red" ),	Marker Theme( "alphanumeric" ),	Reverse Scale( 1 ),	Make Window With Legend);

```

#### Markers

**Sintassi:** obj &lt;&lt; Markers( marker )

**Descrizione:** Cambia gli indicatori delle righe selezionate in tutti gli output grafici contenenti indicatori.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Where( :sex == "M" );r << Markers( "+" );

```

#### Move Rows

**Sintassi:** obj &lt;&lt; Move Rows( At Start|At End|After(n) )

**Descrizione:** Sposta le righe selezionate in alto o in basso nella tabella di dati, fino alla nuova posizione specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Move Rows( At Start );

```

#### Name Selection in Column

**Sintassi:** obj &lt;&lt; Name Selection in Column( Column Name( name ), Selected( string ), Unselected( string ) )

**Descrizione:** Crea una nuova colonna categorica con due valori, ciascuno di essi per gli insiemi di righe selezionate e non selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );dt << Name Selection in Column(	Column Name( "Younger" ),	Selected( "Yes" ),	Unselected( "No" ));

```

#### Next Selected

**Sintassi:** obj &lt;&lt; Next Selected

**Descrizione:** Evidenzia la riga successiva nel gruppo di righe selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Next Selected;

```

#### Previous Selected

**Sintassi:** obj &lt;&lt; Previous Selected

**Descrizione:** Evidenzia la riga precedente nel gruppo di righe selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );Wait( 2 );r << Previous Selected;

```

#### Row Editor

**Sintassi:** obj &lt;&lt; Row Editor

**Descrizione:** Apre la finestra di dialogo Editor delle righe per le righe selezionate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );r = dt << Select Rows( [5, 7, 8, 10] );r << Row Editor();

```

#### Row Selection

**Sintassi:** obj &lt;&lt; Row Selection( Select Where(condition), &lt; current selection("extend" | "restrict" | "clear")&gt;, &lt;Dialog("Keep Dialog Open")&gt;, &lt;Match Case(0|1)&gt; )

**Descrizione:** Seleziona tutte le righe che soddisfano la condizione definita, con la possibilità di estendere o limitare le selezioni esistenti, di eseguire la selezione o solo di mostrare la finestra di dialogo. Quando si omette l&apos;opzione Maiuscole/minuscole, l&apos;impostazione di default è una corrispondenza con distinzione tra maiuscole e minuscole.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );Wait( 2 );dt << Row Selection( Select where( :age == 15 ), current selection( "extend" ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :age < 15 ) );dt << Row Selection(	Select where( :sex == "M" ),	current selection( "restrict" ),	Dialog( "keep dialog open" ));

```

**Esempio 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Row Selection( Select where( :name == "jane" ), Match Case( 0 ) );

```

#### Select All Matching Cells

**Sintassi:** obj &lt;&lt; Select All Matching Cells

**Descrizione:** Seleziona in tutte le tabelle di dati aperte tutte le righe in cui i valori nella colonna selezionata corrispondono a uno dei valori delle righe selezionate in quella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt2 = Open( "$SAMPLE_DATA/Students.jmp" );dt << Select Rows( [1, 2, 3, 4] );dt << Go To( :Height );Wait( 2 );dt << Select All Matching Cells();

```

#### Select All Rows

**Sintassi:** obj &lt;&lt; Select All Rows

**Descrizione:** Seleziona tutte le righe nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select All Rows;

```

#### Select Dominant

**Sintassi:** obj &lt;&lt; Select Dominant( {column1, column2, ...},{0|1, 0|1, ...} )

**Descrizione:** Seleziona tutte le righe in base ai valori alto (1) o basso (0) dei limiti nel grafico di Pareto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Go To( :height );dt << Select Dominant( {:height, :weight}, {0, 0} );

```

#### Select Duplicate Rows

**Sintassi:** obj &lt;&lt; Select Duplicate Rows( &lt;match(column1, column2, ...)&gt; )

**Descrizione:** Seleziona righe duplicate e corrispondenze nelle colonne selezionate. Se non sono specificate colonne di corrispondenza, le righe sono corrispondenti su tutte le colonne della tabella. Restituisce il numero di righe duplicate.

**JMP Versione aggiunta:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select duplicate rows( Match( :age, :height ) );

```

#### Select Excluded

**Sintassi:** obj &lt;&lt; Select Excluded

**Descrizione:** Seleziona tutte le righe escluse nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Exclude( 1 );dt << Clear Select;Wait( 2 );dt << Select Excluded;

```

#### Select Hidden

**Sintassi:** obj &lt;&lt; Select Hidden

**Descrizione:** Seleziona tutte le righe nascoste nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Hide( 1 );dt << Clear Select;Wait( 2 );dt << Select Hidden;

```

#### Select Labeled

**Sintassi:** obj &lt;&lt; Select Labeled

**Descrizione:** Seleziona tutte le righe etichettate nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10, 15] );dt << Label( 1 );dt << Clear Select;Wait( 2 );dt << Select Labeled;

```

#### Select Matching Cells

**Sintassi:** obj &lt;&lt; Select Matching Cells

**Descrizione:** Seleziona tutte le righe in cui i valori nella colonna selezionata corrispondono a uno dei valori delle righe selezionate in quella colonna.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [1, 2, 3, 4] );dt << Go To( :Height );Wait( 2 );dt << Select Matching Cells();

```

#### Select Randomly

**Sintassi:** obj &lt;&lt; Select Randomly( number | probability | Sample Size( number ) | Sampling Rate( probability ) )

**Descrizione:** Seleziona in modo casuale un gruppo specificato di righe.

**Dimensione campionaria**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( Sample Size( 12 ) );

```

**Probability**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( 0.3 );

```

**Tasso di campionamento**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Randomly( Sampling Rate( 0.3 ) );

```

#### Select Rows

**Sintassi:** obj &lt;&lt; Select Rows( [row1, row2, ...] )

**Descrizione:** Seleziona le righe specificate.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [5, 7, 8, 10] );

```

#### Select Where

**Sintassi:** obj &lt;&lt; Select Where( condition, &lt; current selection("extend" | "restrict" | "clear")&gt; )

**Descrizione:** Le opzioni sono estendere o limitare le selezioni, eseguire la selezione o mostrare solo la finestra di dialogo.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age < 14 );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( :Age == 14 );Wait( 0 );dt << Select Where( :sex == "M", current selection( "extend" ) );

```

**Esempio 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Where( Contains( :name, "AR" ) );

```

## Filter Views

### Messaggi degli elementi

#### Get Data Filter

**Sintassi:** expr = obj &lt;&lt; Get Data Filter

**Descrizione:** Restituisce la definizione del filtro della vista filtro

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Data Filter );

```

#### Get Data Table

**Sintassi:** data table = obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce la tabella che possiede la vista filtro

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Data Table );

```

#### Get Name

**Sintassi:** string = obj &lt;&lt; Get Name

**Descrizione:** Ottiene il nome della vista filtro

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Name );

```

#### Get Show Hidden Rows

**Sintassi:** 0|1 = obj &lt;&lt; Get Show Hidden Rows

**Descrizione:** Restituisce l&apos;impostazione per mostrare le righe nascoste per questa vista filtro

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Show Hidden Rows( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Show Hidden Rows );

```

#### Get Type

**Sintassi:** obj &lt;&lt; Get Type

**Descrizione:** Ottiene il tipo di vista filtro; uno dei seguenti: "Non filtrata", "Filtrata" o "TemporaneaFiltrata".

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Locked

**Sintassi:** 0|1 = obj &lt;&lt; Is Locked

**Descrizione:** Restituisce l&apos;impostazione del blocco per questa vista filtro

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Lock( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Is Locked );

```

#### Is Temporary

**Sintassi:** 0|1 = obj &lt;&lt; Is Temporary

**Descrizione:** Restituisce 1 se la vista filtrata è una vista filtro temporanea

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Is Unfiltered

**Sintassi:** 0|1 = obj &lt;&lt; Is Unfiltered

**Descrizione:** Restituisce 1 se la vista filtrata è la vista filtro non filtrata

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Get Type, fv << Is Temporary, fv << Is Unfiltered );

```

#### Lock

**Sintassi:** obj &lt;&lt; Lock( 0|1 )

**Descrizione:** Impedisce la modifica di questa vista filtro.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv << Lock( 1 );Show( fv << Is Locked );

```

#### Set Data Filter

**Sintassi:** obj &lt;&lt; Set Data Filter( expr )

**Descrizione:** Modifica la definizione del filtro della vista filtro. La definizione del filtro della vista non filtrata non può essere modificata

**JMP Versione aggiunta:** 19

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View( "Dream", Active( 0 ) );fv << Set Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) );Show( fv << Get Data Filter );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View( "Dream", Active( 0 ) );fv << Set Data Filter(	Data Filter(		Inverse( 1 ),		Add Filter( Columns( :Island ), Where( :Island == "Dream" ) )	));Show( fv << Get Data Filter );

```

#### Set Name

**Sintassi:** string = obj &lt;&lt; Set Name( name )

**Descrizione:** Modifica il nome della vista filtro. I nomi della vista non filtrata e della vista filtrata temporanea non possono essere modificati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));Show( fv << Set Name( "Dream Penguins" ) );Show( fv << Get Name );

```

#### Show Hidden Rows

**Sintassi:** obj &lt;&lt; Show Hidden Rows( 0|1 )

**Descrizione:** Modifica l&apos;impostazione per mostrare le righe nascoste per questa vista filtro.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Penguins.jmp" );fv = dt << New Filter View(	"Dream",	Active( 0 ),	Show Hidden Rows( 1 ),	Data Filter( Add Filter( Columns( :Island ), Where( :Island == "Dream" ) ) ));fv << Show Hidden Rows( 0 );Show( fv << Get Show Hidden Rows );

```

