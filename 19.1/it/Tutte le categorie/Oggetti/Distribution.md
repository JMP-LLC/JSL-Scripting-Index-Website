# Distribution



## Colonne

### By

**Sintassi:** obj = Distribution(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Column

**Sintassi:** obj = Distribution(...&lt;Column( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**Sintassi:** obj = Distribution(...Columns( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne categoriche o continue da analizzare.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**Sintassi:** obj = Distribution(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Distribution( Column( :Age, :Weight ), Freq( :_freqcol ) );

```

### Weight

**Sintassi:** obj = Distribution(...&lt;Weight( column )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Distribution( Column( :Age, :Weight ), Weight( :_weightcol ) );

```

### Y

**Sintassi:** obj = Distribution(...Y( column(s) )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Specifica le colonne categoriche o continue da analizzare.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Y( :Age, :Weight ) );

```

## Costruttori associati

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

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**Sintassi:** obj &lt;&lt; Arrange in Rows( number )

**Descrizione:** Specifica il numero di report di distribuzione da visualizzare nella finestra.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << ArrangeInRows( 3 );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Axes on Left

**Sintassi:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descrizione:** Sposta il conteggio, la probabilità, la densità e gli assi del diagramma dei quantili normali sul lato sinistro di un grafico orizzontale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );obj << Axes on Left( 1 );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### CDF Plot

**Sintassi:** obj &lt;&lt; CDF Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico della funzione di distribuzione cumulativa empirica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << CDF Plot( 1 );

```

### Capability Analysis

**Sintassi:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Descrizione:** Esegue un&apos;analisi di capability dato il limite di specifica inferiore (LSL), il target e il limite di specifica superiore (USL) dichiarati.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Confidence Interval

**Sintassi:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**Descrizione:** Calcola gli intervalli di confidenza specificati intorno alla media e alla deviazione standard. Se si specifica sigma, il valore specificato viene utilizzato per calcolare l&apos;intervallo di confidenza intorno alla media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 ); obj << Confidence Interval( 0.95, Lower ); obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Copy Script;

```

### Count Axis

**Sintassi:** obj &lt;&lt; Count Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse di conteggio per l&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Count Axis( 1 );

```

### Custom Quantiles

**Sintassi:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Descrizione:** Crea un report delle stime dei ranghi dei quantili e un report delle stime dei quantili di verosimiglianza empirica di smoothing per i quantili specificati. Utilizza la frazione come livello di confidenza per gli intervalli di confidenza di entrambi i report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**Sintassi:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descrizione:** Personalizza le statistiche di riepilogo che sono visualizzate nel report Statistiche di riepilogo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Data Table Window;

```

### Density Axis

**Sintassi:** obj &lt;&lt; Density Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di densità per la curva di densità sull&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Density Axis( 1 );

```

### Fit All

**Sintassi:** obj &lt;&lt; Fit All

**Descrizione:** Confronta tutte le possibili distribuzioni.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit All;

```

### Fit Beta

**Sintassi:** obj &lt;&lt; Fit Beta

**Descrizione:** Stima una distribuzione beta a due parametri su dati compresi tra 0 e 1 (non inclusi).

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Beta;

```

### Fit Beta Binomial

**Sintassi:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale beta data una dimensione campionaria costante specificata o una colonna che contiene le dimensioni campionarie. Questa distribuzione è una versione più flessibile della distribuzione binomiale.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**Sintassi:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale data una dimensione campionaria costante specificata o una colonna che contiene le dimensioni campionarie. Questa distribuzione modella il numero totale di successi in n prove indipendenti.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**Sintassi:** obj &lt;&lt; Fit Cauchy

**Descrizione:** Stima una distribuzione di Cauchy sui dati. La distribuzione di Cauchy è robusta rispetto agli outlier ed è equivalente a una distribuzione t con un grado di libertà.

**JMP Versione aggiunta:** 15

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**Sintassi:** obj &lt;&lt; Fit ExGaussian

**Descrizione:** Stima una distribuzione gaussiana modificata esponenzialmente sui dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;obj << Fit Normal;obj << Fit Exponential;

```

### Fit Exponential

**Sintassi:** obj &lt;&lt; Fit Exponential

**Descrizione:** Stima una distribuzione esponenziale su dati non negativi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :POP ) );obj << Fit Exponential;

```

### Fit Gamma

**Sintassi:** obj &lt;&lt; Fit Gamma

**Descrizione:** Stima una distribuzione gamma a due parametri su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :Max deg. F Jan ) );obj << Fit Gamma;

```

### Fit Handle

**Sintassi:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**Descrizione:** Array di handle alle distribuzioni stimate. Consente di inviare comandi a distribuzioni specifiche stimate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;obj << Fit Weibull;obj << (Fit Handle[2] << Goodness of Fit( 1 ));obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**Sintassi:** obj &lt;&lt; Fit Johnson

**Descrizione:** Stima una distribuzione di Johnson sui dati. La più appropriata dei tre tipi di distribuzione di Johnson (Su, Sb e Sl) viene scelta in base ai quantili.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Johnson;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Johnson;

```

### Fit Largest Extreme Value

**Sintassi:** obj &lt;&lt; Fit Largest Extreme Value

**Descrizione:** Stima una distribuzione del valore estremo massimo sui dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**Sintassi:** obj &lt;&lt; Fit Lognormal

**Descrizione:** Stima una distribuzione lognormale su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;

```

### Fit Negative Binomial

**Sintassi:** obj &lt;&lt; Fit Negative Binomial

**Descrizione:** Stima una distribuzione binomiale negativa sui dati. Questa distribuzione è equivalente alla distribuzione Poisson-Gamma.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Negative Binomial;

```

### Fit Normal

**Sintassi:** obj &lt;&lt; Fit Normal

**Descrizione:** Stima una distribuzione normale sui dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Fit Normal;

```

### Fit Normal 2 Mixture

**Sintassi:** obj &lt;&lt; Fit Normal 2 Mixture

**Descrizione:** Stima una miscela di due distribuzioni normali. Questa distribuzione è in grado di stimare dati bimodali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**Sintassi:** obj &lt;&lt; Fit Normal 3 Mixture

**Descrizione:** Stima una miscela di tre distribuzioni normali. Questa distribuzione è in grado di stimare dati multimodali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**Sintassi:** obj &lt;&lt; Fit Poisson

**Descrizione:** Stima una distribuzione di Poisson sui dati. Questa distribuzione è una scelta comune per dati di conteggio. La media stimata della distribuzione di Poisson è uguale alla varianza.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Poisson;

```

### Fit SHASH

**Sintassi:** obj &lt;&lt; Fit Shash

**Descrizione:** Stima una distribuzione sinh-arcsinh (SHASH) sui dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Shash;

```

### Fit Smallest Extreme Value

**Sintassi:** obj &lt;&lt; Fit Smallest Extreme Value

**Descrizione:** Stima una distribuzione del valore estremo minimo sui dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**Sintassi:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**Descrizione:** Stima una curva con smoothing sui dati usando una stima della densità non parametrica. È possibile impostare il livello di smoothing specificando la larghezza di banda.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**Sintassi:** obj &lt;&lt; Fit Student&apos;s t

**Descrizione:** Stima una distribuzione t di Student sui dati. Questa distribuzione è un&apos;opzione robusta che abbraccia lo spazio tra una distribuzione normale e una distribuzione di Cauchy.

**JMP Versione aggiunta:** 16

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**Sintassi:** obj &lt;&lt; Fit Weibull

**Descrizione:** Stima una distribuzione di Weibull a due parametri su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione beta-binomiale con inflazione di zeri data la dimensione campionaria costante specificata o una colonna che contiene la dimensione campionaria. Questa distribuzione modella il numero totale di successi in n prove indipendenti in cui sono stati osservati più zeri di quelli che sarebbero previsti per la distribuzione beta-binomiale.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale con inflazione di zeri data la dimensione campionaria costante specificata o una colonna che contiene la dimensione campionaria. Questa distribuzione modella il numero totale di successi in n prove indipendenti in cui sono osservati più zeri di quelli che sarebbero previsti per la distribuzione binomiale.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Negative Binomial

**Descrizione:** Stima una distribuzione binomiale negativa con inflazione di zeri sui dati che contengono valori di zero.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**Sintassi:** obj &lt;&lt; Fit ZI Poisson

**Descrizione:** Stima una distribuzione di Poisson con inflazione di zeri sui dati che contengono valori di zero.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**Sintassi:** obj &lt;&lt; Fit ZI SHASH

**Descrizione:** Stima una distribuzione SHASH con una massa (di probabilità) puntiforme a zero sui dati.

```jsl

Random Reset( 18 );d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );For( i = 1, i <= 250, i++,	If( Random Uniform() < .2,		d[i] = 0	));As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**Sintassi:** obj &lt;&lt; Frequencies( state=0|1 )

**Descrizione:** Mostra o nasconde il report Frequenze, che elenca i conteggi e le probabilità per ogni livello. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Histogram

**Sintassi:** obj &lt;&lt; Histogram( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Histogram( 0 );

```

### Histogram Color

**Sintassi:** obj &lt;&lt; Histogram Color( color )

**Descrizione:** Cambia il colore delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Histogram Color( "Red" );

```

### Horizontal Layout

**Sintassi:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma e dei report in orizzontale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Horizontal Layout( 1 );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Messaggi degli elementi condivisi

### Mosaic Plot

**Sintassi:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico a barre a mosaico per ogni variabile di risposta nominale o ordinale. Un diagramma a mosaico è un grafico a barre impilate in cui ogni segmento è proporzionale al conteggio della frequenza del suo gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**Sintassi:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma che può essere utilizzato per visualizzare la misura in cui una variabile è distribuita normalmente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Normal Quantile Plot( 1 );

```

### Order By

**Sintassi:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descrizione:** Ordina l&apos;istogramma, il diagramma a mosaico e il report Frequenze in sequenza crescente o decrescente, in base al conteggio. È anche possibile tornare all&apos;ordinamento predefinito.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**Sintassi:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot che permette di vedere la distribuzione e identificare possibili outlier. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**Sintassi:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**Descrizione:** Imposta l&apos;opzione di avvio relativa al numero massimo di righe prima che il box plot degli outlier venga inizialmente disattivato. "100000", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );obj = dt << Distribution( Column( :Flu Cases ) );obj << Outlier Box Plot Row Cutoff( 10000 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### PpK Capability Labeling

**Sintassi:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**Descrizione:** Nell&apos;output della capability del processo, scambia le etichette degli indici di capability generale per utilizzare il prefisso Pp invece di Cp. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << PpK Capability Labeling( 0 );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**Sintassi:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**Descrizione:** Calcola gli intervalli di previsione per una singola osservazione futura e la media di un numero specificato (N campioni) di osservazioni future. È possibile creare intervalli di previsione unilaterali o bilaterali.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**Sintassi:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di probabilità o di proporzione per l&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prob Axis( 1 );

```

### Process Capability

**Sintassi:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**Descrizione:** Calcola l&apos;analisi di capability del processo dati il limite di specifica inferiore (LSL), il target e il limite di specifica superiore (USL). Il report di capability del processo include un istogramma, dettagli di riepilogo, indici di capability e statistiche di non conformità.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**Sintassi:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot con i seguenti quantili: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% e 100%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Outlier Box Plot( 0 );obj << Quantile Box Plot( 1 );

```

### Quantiles

**Sintassi:** obj &lt;&lt; Quantiles( state=0|1 )

**Descrizione:** Mostra o nasconde il report Quantili che elenca i valori dei quantili selezionati. Per impostazione predefinita, i quantili elencati sono 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5% e 100%. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintassi:** obj &lt;&lt; Report; Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Report View( "Summary" );

```

### Save

**Sintassi:** obj &lt;&lt; Save( "Numeri di livello"|"Punti centrali di livello"|"Ranghi"|"Ranghi medi"|"Score di probabilità"|"Quantili normali"|"Standardizzato"|"Centrato"|"Robusto standardizzato"|"Robusto centrato"|"Limiti di specifica"|"Script nel log" )

**Descrizione:** Salva la statistica specifica dell&apos;osservazione specificata in una nuova colonna della tabella di dati. Esiste anche un&apos;opzione per stampare i comandi dello script che generano il report corrente nella finestra di log.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Save( "Ranks" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Script Window;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Separate Bars

**Sintassi:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descrizione:** Aggiunge spazio tra le barre dell&apos;istogramma. Questa opzione è disponibile solo per le variabili categoriche.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

### Set Bin Width

**Sintassi:** obj &lt;&lt; Set Bin Width( number )

**Descrizione:** Imposta la larghezza delle barre dell&apos;istogramma utilizzando l&apos;asse come origine. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**Sintassi:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**Descrizione:** Imposta l&apos;incremento usato nel report Quantili alla frazione specificata o ritorna ai quantili predefiniti. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Quantile Increment( 0.05 );Wait( 1 );obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**Sintassi:** obj &lt;&lt; Shadowgram( state=0|1 )

**Descrizione:** Mostra o nasconde uno shadowgramma con smoothing al posto dell&apos;istogramma. Uno shadowgramma sovrappone gli istogrammi con diverse larghezze delle barre. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Shadowgram( 1 );

```

### Show Counts

**Sintassi:** obj &lt;&lt; Show Counts( state=0|1 )

**Descrizione:** Mostra o nasconde i conteggi delle barre sull&apos;istogramma, che danno la frequenza dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Counts( 1 );

```

### Show Percents

**Sintassi:** obj &lt;&lt; Show Percents( state=0|1 )

**Descrizione:** Mostra o nasconde le percentuali delle barre sull&apos;istogramma, che danno la percentuale dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Percents( 1 );

```

### Stack

**Sintassi:** obj &lt;&lt; Stack( state=0|1 )

**Descrizione:** Cambia l&apos;orientamento dell&apos;istogramma e dei report in orizzontale e impila i singoli report di distribuzione in verticale.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << Stack( 1 );

```

### Std Error Bars

**Sintassi:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde gli errori standard delle barre su ciascuna delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Std Error Bars( 1 );

```

### Stem and Leaf

**Sintassi:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico stelo e foglia.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Stem and Leaf( 1 );

```

### Summary Statistics

**Sintassi:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde il report Statistiche di riepilogo, che elenca la media, la deviazione standard e altre statistiche di riepilogo per variabili continue. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Summary Statistics( 0 );

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Test Equivalence

**Sintassi:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**Descrizione:** Verifica se la media campionaria è equivalente a un valore ipotizzato (Target) utilizzando l&apos;approccio Due test unilaterali (Two One-Sided Tests - TOST).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**Sintassi:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**Descrizione:** Esegue un test a un campione per la media. Se si specifica un valore per la deviazione standard (Sigma), viene eseguito un test z. Altrimenti, la deviazione standard del campione viene utilizzata per eseguire un test t. Esiste anche un&apos;opzione per eseguire un ulteriore test non parametrico dei ranghi con segno di Wilcoxon.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Mean( 60 ); obj << Test Mean( 60, Sigma( 4 ) ); obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**Sintassi:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descrizione:** Esegue il test sulle probabilità stimate dei livelli di una variabile categorica, rispetto alle probabilità ipotizzate specificate (p1, p2, p3, ecc.). Per variabili con due livelli, usare l&apos;opzione Test per specificare il segno dell&apos;ipotesi alternativa del test. Per variabili con più di due livelli, usare l&apos;opzione Fisso per specificare come vengono gestiti i valori ipotizzati mancanti. Si noti che f è un argomento facoltativo che specifica che il livello precedente è trattato come fisso.

**Esempio di due livelli, bilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Esempio di due livelli, unilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Esempio di livelli multipli**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

### Test Std Dev

**Sintassi:** obj &lt;&lt; Test Std Dev( number )

**Descrizione:** Esegue un test del chi-quadrato per la deviazione standard, dato il valore (numero) ipotizzato.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Std Dev( 3 );

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Title( "My Platform" );

```

### Tolerance Interval

**Sintassi:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**Descrizione:** Calcola un intervallo che contiene almeno una parte specificata della popolazione. Si assume una distribuzione normale standard. È possibile specificare anche altre distribuzioni non normali, tra cui lognormale, gamma, esponenziale, Weibull, valore estremo minimo, valore estremo massimo e distribuzioni non parametriche. Sono disponibili anche opzioni per il calcolo di intervalli unilaterali.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Uniform Scaling

**Sintassi:** obj &lt;&lt; Uniform Scaling( state=0|1 )

**Descrizione:** Imposta lo stesso valore per il minimo, il massimo e l&apos;incremento per gli assi di tutti gli istogrammi in modo da poter confrontare facilmente le distribuzioni.

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << Uniform Scaling( 1 );

```

### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma, dei box plot e dei diagrammi dei quantili in verticale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Vertical( 0 );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Capability Analysis

### Messaggi degli elementi

#### Capability Animation

**Sintassi:** obj &lt;&lt; Capability Animation

**Descrizione:** Apre una finestra separata che mostra un&apos;animazione di una distribuzione normale che usa parametri e statistiche di capability dal campione corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**Sintassi:** obj &lt;&lt; Z Bench( state=0|1 )

**Descrizione:** Mostra o nasconde le statistiche Z, che sono descritte da AIAG come il numero di unità di deviazione standard dalla media del processo a una specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Confidence Interval

### Messaggi degli elementi

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Intervallo di confidenza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 );Wait( 2 );scrobj = (Report( obj )["Confidence Intervals"] << get scriptable object);scrobj << Remove;

```

## Continuous Distribution

### Colonne

#### Column

**Sintassi:** obj = Quantiles(...&lt;Column( column(s) )&gt;...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

### Messaggi degli elementi

#### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintassi:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descrizione:** Sposta il conteggio, la probabilità, la densità e gli assi del diagramma dei quantili normali sul lato sinistro di un grafico orizzontale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );obj << Axes on Left( 1 );

```

#### CDF Plot

**Sintassi:** obj &lt;&lt; CDF Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico della funzione di distribuzione cumulativa empirica.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << CDF Plot( 1 );

```

#### Capability Analysis

**Sintassi:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**Descrizione:** Esegue un&apos;analisi di capability dato il limite di specifica inferiore (LSL), il target e il limite di specifica superiore (USL) dichiarati.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**Sintassi:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**Descrizione:** Calcola gli intervalli di confidenza specificati intorno alla media e alla deviazione standard. Se si specifica sigma, il valore specificato viene utilizzato per calcolare l&apos;intervallo di confidenza intorno alla media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 ); obj << Confidence Interval( 0.95, Lower ); obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**Sintassi:** obj &lt;&lt; Count Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse di conteggio per l&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Count Axis( 1 );

```

#### Custom Quantiles

**Sintassi:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**Descrizione:** Crea un report delle stime dei ranghi dei quantili e un report delle stime dei quantili di verosimiglianza empirica di smoothing per i quantili specificati. Utilizza la frazione come livello di confidenza per gli intervalli di confidenza di entrambi i report.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**Sintassi:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descrizione:** Personalizza le statistiche di riepilogo che sono visualizzate nel report Statistiche di riepilogo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**Sintassi:** obj &lt;&lt; Density Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di densità per la curva di densità sull&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Density Axis( 1 );

```

#### Fit All

**Sintassi:** obj &lt;&lt; Fit All

**Descrizione:** Confronta tutte le possibili distribuzioni.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit All;

```

#### Fit Beta

**Sintassi:** obj &lt;&lt; Fit Beta

**Descrizione:** Stima una distribuzione beta a due parametri su dati compresi tra 0 e 1 (non inclusi).

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Beta;

```

#### Fit Beta Binomial

**Sintassi:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale beta data una dimensione campionaria costante specificata o una colonna che contiene le dimensioni campionarie. Questa distribuzione è una versione più flessibile della distribuzione binomiale.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**Sintassi:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale data una dimensione campionaria costante specificata o una colonna che contiene le dimensioni campionarie. Questa distribuzione modella il numero totale di successi in n prove indipendenti.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**Sintassi:** obj &lt;&lt; Fit Cauchy

**Descrizione:** Stima una distribuzione di Cauchy sui dati. La distribuzione di Cauchy è robusta rispetto agli outlier ed è equivalente a una distribuzione t con un grado di libertà.

**JMP Versione aggiunta:** 15

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**Sintassi:** obj &lt;&lt; Fit ExGaussian

**Descrizione:** Stima una distribuzione gaussiana modificata esponenzialmente sui dati.

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;obj << Fit Normal;obj << Fit Exponential;

```

#### Fit Exponential

**Sintassi:** obj &lt;&lt; Fit Exponential

**Descrizione:** Stima una distribuzione esponenziale su dati non negativi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :POP ) );obj << Fit Exponential;

```

#### Fit Gamma

**Sintassi:** obj &lt;&lt; Fit Gamma

**Descrizione:** Stima una distribuzione gamma a due parametri su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :Max deg. F Jan ) );obj << Fit Gamma;

```

#### Fit Handle

**Sintassi:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**Descrizione:** Array di handle alle distribuzioni stimate. Consente di inviare comandi a distribuzioni specifiche stimate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;obj << Fit Weibull;obj << (Fit Handle[2] << Goodness of Fit( 1 ));obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**Sintassi:** obj &lt;&lt; Fit Johnson

**Descrizione:** Stima una distribuzione di Johnson sui dati. La più appropriata dei tre tipi di distribuzione di Johnson (Su, Sb e Sl) viene scelta in base ai quantili.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Johnson;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**Sintassi:** obj &lt;&lt; Fit Largest Extreme Value

**Descrizione:** Stima una distribuzione del valore estremo massimo sui dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**Sintassi:** obj &lt;&lt; Fit Lognormal

**Descrizione:** Stima una distribuzione lognormale su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;

```

#### Fit Negative Binomial

**Sintassi:** obj &lt;&lt; Fit Negative Binomial

**Descrizione:** Stima una distribuzione binomiale negativa sui dati. Questa distribuzione è equivalente alla distribuzione Poisson-Gamma.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Negative Binomial;

```

#### Fit Normal

**Sintassi:** obj &lt;&lt; Fit Normal

**Descrizione:** Stima una distribuzione normale sui dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**Sintassi:** obj &lt;&lt; Fit Normal 2 Mixture

**Descrizione:** Stima una miscela di due distribuzioni normali. Questa distribuzione è in grado di stimare dati bimodali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**Sintassi:** obj &lt;&lt; Fit Normal 3 Mixture

**Descrizione:** Stima una miscela di tre distribuzioni normali. Questa distribuzione è in grado di stimare dati multimodali.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**Sintassi:** obj &lt;&lt; Fit Poisson

**Descrizione:** Stima una distribuzione di Poisson sui dati. Questa distribuzione è una scelta comune per dati di conteggio. La media stimata della distribuzione di Poisson è uguale alla varianza.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Poisson;

```

#### Fit SHASH

**Sintassi:** obj &lt;&lt; Fit Shash

**Descrizione:** Stima una distribuzione sinh-arcsinh (SHASH) sui dati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**Sintassi:** obj &lt;&lt; Fit Smallest Extreme Value

**Descrizione:** Stima una distribuzione del valore estremo minimo sui dati.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**Sintassi:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**Descrizione:** Stima una curva con smoothing sui dati usando una stima della densità non parametrica. È possibile impostare il livello di smoothing specificando la larghezza di banda.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve;

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**Sintassi:** obj &lt;&lt; Fit Student&apos;s t

**Descrizione:** Stima una distribuzione t di Student sui dati. Questa distribuzione è un&apos;opzione robusta che abbraccia lo spazio tra una distribuzione normale e una distribuzione di Cauchy.

**JMP Versione aggiunta:** 16

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**Sintassi:** obj &lt;&lt; Fit Weibull

**Descrizione:** Stima una distribuzione di Weibull a due parametri su dati positivi.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione beta-binomiale con inflazione di zeri data la dimensione campionaria costante specificata o una colonna che contiene la dimensione campionaria. Questa distribuzione modella il numero totale di successi in n prove indipendenti in cui sono stati osservati più zeri di quelli che sarebbero previsti per la distribuzione beta-binomiale.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**Descrizione:** Stima una distribuzione binomiale con inflazione di zeri data la dimensione campionaria costante specificata o una colonna che contiene la dimensione campionaria. Questa distribuzione modella il numero totale di successi in n prove indipendenti in cui sono osservati più zeri di quelli che sarebbero previsti per la distribuzione binomiale.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**Sintassi:** obj &lt;&lt; Fit ZI Negative Binomial

**Descrizione:** Stima una distribuzione binomiale negativa con inflazione di zeri sui dati che contengono valori di zero.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**Sintassi:** obj &lt;&lt; Fit ZI Poisson

**Descrizione:** Stima una distribuzione di Poisson con inflazione di zeri sui dati che contengono valori di zero.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**Sintassi:** obj &lt;&lt; Fit ZI SHASH

**Descrizione:** Stima una distribuzione SHASH con una massa (di probabilità) puntiforme a zero sui dati.

```jsl

Random Reset( 18 );d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );For( i = 1, i <= 250, i++,	If( Random Uniform() < .2,		d[i] = 0	));As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**Sintassi:** obj &lt;&lt; Histogram( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**Sintassi:** obj &lt;&lt; Histogram Color( color )

**Descrizione:** Cambia il colore delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**Sintassi:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma e dei report in orizzontale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Horizontal Layout( 1 );

```

#### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**Sintassi:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un diagramma che può essere utilizzato per visualizzare la misura in cui una variabile è distribuita normalmente.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**Sintassi:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot che permette di vedere la distribuzione e identificare possibili outlier. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**Sintassi:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**Descrizione:** Imposta l&apos;opzione di avvio relativa al numero massimo di righe prima che il box plot degli outlier venga inizialmente disattivato. "100000", per impostazione predefinita.

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );obj = dt << Distribution( Column( :Flu Cases ) );obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**Sintassi:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**Descrizione:** Nell&apos;output della capability del processo, scambia le etichette degli indici di capability generale per utilizzare il prefisso Pp invece di Cp. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << PpK Capability Labeling( 0 );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**Sintassi:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**Descrizione:** Calcola gli intervalli di previsione per una singola osservazione futura e la media di un numero specificato (N campioni) di osservazioni future. È possibile creare intervalli di previsione unilaterali o bilaterali.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**Sintassi:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di probabilità o di proporzione per l&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prob Axis( 1 );

```

#### Process Capability

**Sintassi:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**Descrizione:** Calcola l&apos;analisi di capability del processo dati il limite di specifica inferiore (LSL), il target e il limite di specifica superiore (USL). Il report di capability del processo include un istogramma, dettagli di riepilogo, indici di capability e statistiche di non conformità.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**Sintassi:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un box plot con i seguenti quantili: 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99% e 100%.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Outlier Box Plot( 0 );obj << Quantile Box Plot( 1 );

```

#### Quantiles

**Sintassi:** obj &lt;&lt; Quantiles( state=0|1 )

**Descrizione:** Mostra o nasconde il report Quantili che elenca i valori dei quantili selezionati. Per impostazione predefinita, i quantili elencati sono 0%, 0,5%, 2,5%, 10%, 25%, 50%, 75%, 90%, 97,5%, 99,5% e 100%. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

#### Save

**Sintassi:** obj &lt;&lt; Save( "Numeri di livello"|"Punti centrali di livello"|"Ranghi"|"Ranghi medi"|"Score di probabilità"|"Quantili normali"|"Standardizzato"|"Centrato"|"Robusto standardizzato"|"Robusto centrato"|"Limiti di specifica"|"Script nel log" )

**Descrizione:** Salva la statistica specifica dell&apos;osservazione specificata in una nuova colonna della tabella di dati. Esiste anche un&apos;opzione per stampare i comandi dello script che generano il report corrente nella finestra di log.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Save( "Ranks" );

```

#### Set Bin Width

**Sintassi:** obj &lt;&lt; Set Bin Width( number )

**Descrizione:** Imposta la larghezza delle barre dell&apos;istogramma utilizzando l&apos;asse come origine. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**Sintassi:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**Descrizione:** Imposta l&apos;incremento usato nel report Quantili alla frazione specificata o ritorna ai quantili predefiniti. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Quantile Increment( 0.05 );Wait( 1 );obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**Sintassi:** obj &lt;&lt; Shadowgram( state=0|1 )

**Descrizione:** Mostra o nasconde uno shadowgramma con smoothing al posto dell&apos;istogramma. Uno shadowgramma sovrappone gli istogrammi con diverse larghezze delle barre. Questa opzione è disponibile solo per variabili continue.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Shadowgram( 1 );

```

#### Show Counts

**Sintassi:** obj &lt;&lt; Show Counts( state=0|1 )

**Descrizione:** Mostra o nasconde i conteggi delle barre sull&apos;istogramma, che danno la frequenza dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Counts( 1 );

```

#### Show Percents

**Sintassi:** obj &lt;&lt; Show Percents( state=0|1 )

**Descrizione:** Mostra o nasconde le percentuali delle barre sull&apos;istogramma, che danno la percentuale dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintassi:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde gli errori standard delle barre su ciascuna delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**Sintassi:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico stelo e foglia.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**Sintassi:** obj &lt;&lt; Summary Statistics( state=0|1 )

**Descrizione:** Mostra o nasconde il report Statistiche di riepilogo, che elenca la media, la deviazione standard e altre statistiche di riepilogo per variabili continue. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Summary Statistics( 0 );

```

#### Test Equivalence

**Sintassi:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**Descrizione:** Verifica se la media campionaria è equivalente a un valore ipotizzato (Target) utilizzando l&apos;approccio Due test unilaterali (Two One-Sided Tests - TOST).

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**Sintassi:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**Descrizione:** Esegue un test a un campione per la media. Se si specifica un valore per la deviazione standard (Sigma), viene eseguito un test z. Altrimenti, la deviazione standard del campione viene utilizzata per eseguire un test t. Esiste anche un&apos;opzione per eseguire un ulteriore test non parametrico dei ranghi con segno di Wilcoxon.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Mean( 60 ); obj << Test Mean( 60, Sigma( 4 ) ); obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**Sintassi:** obj &lt;&lt; Test Std Dev( number )

**Descrizione:** Esegue un test del chi-quadrato per la deviazione standard, dato il valore (numero) ipotizzato.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**Sintassi:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**Descrizione:** Calcola un intervallo che contiene almeno una parte specificata della popolazione. Si assume una distribuzione normale standard. È possibile specificare anche altre distribuzioni non normali, tra cui lognormale, gamma, esponenziale, Weibull, valore estremo minimo, valore estremo massimo e distribuzioni non parametriche. Sono disponibili anche opzioni per il calcolo di intervalli unilaterali.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma, dei box plot e dei diagrammi dei quantili in verticale. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Vertical( 0 );

```

## Distribution Fit

### Messaggi degli elementi

#### Density Curve

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Density Curve( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Density Curve( state=0|1 ))

**Descrizione:** Mostra o nasconde una curva di densità sull&apos;istogramma. I parametri stimati dalla stima specificata sono usati per creare la curva di densità. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Distribution Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Distribution Profiler( state=0|1 ) )

**Descrizione:** Mostra o nasconde un profiler di previsione della funzione di distribuzione cumulativa per la distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Fitted CDF( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted CDF( vector ))

**Descrizione:** Mostra o nasconde le probabilità stimate specificate per la distribuzione stimata.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Fitted Quantiles( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted Quantiles( vector ))

**Descrizione:** Mostra o nasconde i quantili specificati per la distribuzione stimata specificata.

**JMP Versione aggiunta:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Fix Parameters( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fix Parameters( vector ))

**Descrizione:** Fissa i parametri specificati come costanti e stima nuovamente i parametri non fissati.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Goodness of Fit( state=0|1 )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Goodness of Fit( state=0|1 ))

**Descrizione:** Mostra o nasconde un report che contiene un test della bontà di adattamento per la distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**Sintassi:** obj &lt;&lt; Fit Distribution Name( PP Plot( state=0|1 ) ); obj &lt;&lt; (Fit Handle[ number ] &lt;&lt; PP Plot( state=0|1 ) )

**Descrizione:** Mostra o nasconde un diagramma percentile-percentile (PP) che mostra la relazione tra la funzione di distribuzione cumulativa empirica (CDF) e la CDF della distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); obj &lt;&lt; (Fit Handle[number] &lt;&lt; ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**Descrizione:** Calcola l&apos;analisi di capability del processo dati il limite di specifica inferiore (LSL), il target e il limite di specifica superiore (USL). Il report di capability del processo include un istogramma, dettagli di riepilogo, indici di capability e statistiche di non conformità.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**Sintassi:** obj &lt;&lt; Fit Distribution Name( QQ Plot( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; QQ Plot( state=0|1 ) )

**Descrizione:** Mostra o nasconde un diagramma quantile-quantile (QQ) che mostra la relazione tra i dati osservati e i quantili della distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Quantile Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Quantile Profiler( state=0|1 ) )

**Descrizione:** Mostra o nasconde un profiler di previsione della funzione quantile per la distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**Sintassi:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; Remove Fit )

**Descrizione:** Rimuove la stima e l&apos;oggetto JSL della distribuzione specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Weibull;obj << Fit Lognormal;Wait( 1 );obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Save Density Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Density Formula )

**Descrizione:** Salva una colonna nella tabella di dati che contiene la formula della densità della distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Save Distribution Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Distribution Formula )

**Descrizione:** Salva una colonna nella tabella di dati che contiene la funzione di distribuzione cumulativa della distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Save Simulation Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Simulation Formula )

**Descrizione:** Salva una colonna nella tabella di dati che contiene una formula che genera valori simulati dalla distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Save Transformed ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Transformed )

**Descrizione:** Salva una colonna nella tabella di dati che contiene una formula usata per trasformare la colonna di analisi alla normalità usando la distribuzione stimata specificata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### Messaggi degli elementi

#### Color Out of Spec Values

**Sintassi:** obj &lt;&lt; Color Out of Spec Values

**Descrizione:** Colora le celle della tabella di dati per i valori al di fuori dei limiti specificati. Le celle con valori al di sotto dei limiti di specifica inferiori (LSL) sono colorate in rosso e le celle con valori al di sopra dei limiti di specifica superiori (USL) sono colorate in blu.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.12 ),	Target( 0.18 ),	USL( 0.24 ),	Color Out of Spec Values);

```

#### Remove

**Sintassi:** obj &lt;&lt; Remove( LSL, Target, USL )

**Descrizione:** Rimuove l&apos;analisi di capability del processo.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability( LSL( 0.12 ), Target( 0.18 ), USL( 0.24 ) );Wait( 2 );scrobj = (Report( obj )["Process Capability"] << get scriptable object);scrobj << Remove;

```

#### Save Distribution as a Column Property

**Sintassi:** obj &lt;&lt; Process Capability( Save Distribution as a Column Property )

**Descrizione:** Salva il tipo di distribuzione di capability del processo come proprietà della colonna entro la colonna della tabella di dati originale.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.03 ),	Target( 0.15 ),	USL( 0.27 ),	Dist( Lognormal ),	Save Distribution as a Column Property);

```

#### Save In Spec Indicator Formula

**Sintassi:** obj &lt;&lt; Save In Spec Indicator Formula

**Descrizione:** Crea una nuova colonna della formula nella tabella di dati. La nuova colonna contiene un valore che indica se una riga rientra o meno nei limiti di specifica.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.12 ),	Target( 0.18 ),	USL( 0.24 ),	Save In Spec Indicator Formula);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**Descrizione:** Salva i limiti di specifica calcolati e il tipo di distribuzione per la capability del processo per la distribuzione stimata come proprietà della colonna entro la colonna della tabella di dati originale e non mostra alcun report di capability.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		Set Sigma Multiplier for Quantile Spec Limits( 4 ),		Save Spec Limits and Distribution to Column Properties without Report	));

```

#### Save Spec Limits as a Column Property

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); obj &lt;&lt; Process Capability( Save Spec Limits as a Column Property )

**Descrizione:** Salva i limiti di specifica come proprietà della colonna entro la colonna della tabella di dati originale.

**JMP Versione aggiunta:** 15

**Esempio 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		LSL( 0.03 ),		Target( 0.15 ),		USL( 0.27 ),		Save Spec Limits as a Column Property	));

```

**Esempio 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.03 ),	Target( 0.15 ),	USL( 0.27 ),	Save Spec Limits as a Column Property);

```

#### Set Probabilities for Quantile Spec Limits

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); obj &lt;&lt; Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**Descrizione:** Imposta le probabilità che sono usate per calcolare i limiti di specifica dei quantili per la distribuzione stimata.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		Set Probabilities for Quantile Spec Limits(			LSL Prob( .0001 ),			Target Prob( .5 ),			USL Prob( .9999 )		)	));

```

#### Set Sigma Multiplier for Quantile Spec Limits

**Sintassi:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))); obj &lt;&lt; Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))

**Descrizione:** Imposta un moltiplicatore sigma, K, che è usato per calcolare i limiti di specifica dei quantili per la distribuzione stimata. L&apos;argomento opzionale su un lato è uguale a 1 solo per LSL o 2 solo per USL.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) ));

```

## Distribution Summary Statistics

### Messaggi degli elementi

#### Customize Summary Statistics

**Sintassi:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**Descrizione:** Personalizza le statistiche di riepilogo che sono visualizzate nel report Statistiche di riepilogo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**Sintassi:** obj &lt;&lt; Customize Summary Statistics( Show all Modes( state=0|1 ))

**Descrizione:** Mostra/Nasconde tutte le modalità nel report Statistiche di riepilogo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### Messaggi degli elementi

#### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintassi:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descrizione:** Sposta il conteggio, la probabilità, la densità e gli assi del diagramma dei quantili normali sul lato sinistro di un grafico orizzontale.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ));obj << Axes on Left( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution(	Multiple Response Distribution(		Column( :Brush Delimited ),		Horizontal Layout( 1 ),		Count Axis( 1 )	));obj << Axes on Left( 1 );

```

#### Confidence Interval

**Sintassi:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"Altro…" )

**Descrizione:** Calcola intervalli di confidenza di score relativi alle probabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Sintassi:** obj &lt;&lt; Count Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse di conteggio per l&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Count Axis( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Count Axis( 1 );

```

#### Density Axis

**Sintassi:** obj &lt;&lt; Density Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di densità per la curva di densità sull&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Density Axis( 1 );

```

#### Frequencies

**Sintassi:** obj &lt;&lt; Frequencies( state=0|1 )

**Descrizione:** Mostra o nasconde il report Frequenze, che elenca i conteggi e le probabilità per ogni livello. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

#### Histogram

**Sintassi:** obj &lt;&lt; Histogram( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Histogram( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**Sintassi:** obj &lt;&lt; Histogram Color( color )

**Descrizione:** Cambia il colore delle barre dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Histogram Color( "Red" );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**Sintassi:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma e dei report in orizzontale.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Horizontal Layout( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Sintassi:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico a barre a mosaico per ogni variabile di risposta nominale o ordinale. Un diagramma a mosaico è un grafico a barre impilate in cui ogni segmento è proporzionale al conteggio della frequenza del suo gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

#### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Order By

**Sintassi:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descrizione:** Ordina l&apos;istogramma, il diagramma a mosaico e il report Frequenze in sequenza crescente o decrescente, in base al conteggio. È anche possibile tornare all&apos;ordinamento predefinito.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

#### Prob Axis

**Sintassi:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di probabilità o di proporzione per l&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Prob Axis( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Prob Axis( 1 );

```

#### Save

**Sintassi:** obj &lt;&lt; Save( "Numeri di livello"|"Ordinamento dei valori"|"Script nel log" )

**Descrizione:** Salva i numeri di livello in una nuova colonna nella tabella di dati o lo script nel log.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Save( "Level Numbers" );

```

#### Separate Bars

**Sintassi:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descrizione:** Aggiunge spazio tra le barre dell&apos;istogramma. Questa opzione è disponibile solo per le variabili categoriche.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

#### Show Counts

**Sintassi:** obj &lt;&lt; Show Counts( state=0|1 )

**Descrizione:** Mostra o nasconde i conteggi delle barre sull&apos;istogramma, che danno la frequenza dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Counts( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Counts( 1 );

```

#### Show Percents

**Sintassi:** obj &lt;&lt; Show Percents( state=0|1 )

**Descrizione:** Mostra o nasconde le percentuali delle barre sull&apos;istogramma, che danno la percentuale dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Percents( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintassi:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde gli errori standard delle barre su ciascuna delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Sintassi:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descrizione:** Esegue il test sulle probabilità stimate dei livelli di una variabile categorica, rispetto alle probabilità ipotizzate specificate (p1, p2, p3, ecc.). Per variabili con due livelli, usare l&apos;opzione Test per specificare il segno dell&apos;ipotesi alternativa del test. Per variabili con più di due livelli, usare l&apos;opzione Fisso per specificare come vengono gestiti i valori ipotizzati mancanti. Si noti che f è un argomento facoltativo che specifica che il livello precedente è trattato come fisso.

**Esempio di due livelli, bilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Esempio di due livelli, unilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Esempio di livelli multipli**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

#### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma, dei box plot e dei diagrammi dei quantili in verticale. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Vertical( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Vertical( 0 );

```

## Nominal Distribution

### Messaggi degli elementi

#### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**Sintassi:** obj &lt;&lt; Axes on Left( state=0|1 )

**Descrizione:** Sposta il conteggio, la probabilità, la densità e gli assi del diagramma dei quantili normali sul lato sinistro di un grafico orizzontale.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ));obj << Axes on Left( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution(	Multiple Response Distribution(		Column( :Brush Delimited ),		Horizontal Layout( 1 ),		Count Axis( 1 )	));obj << Axes on Left( 1 );

```

#### Confidence Interval

**Sintassi:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"Altro…" )

**Descrizione:** Calcola intervalli di confidenza di score relativi alle probabilità.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Confidence Interval( 0.95 );

```

#### Count Axis

**Sintassi:** obj &lt;&lt; Count Axis( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;asse di conteggio per l&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Count Axis( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Count Axis( 1 );

```

#### Density Axis

**Sintassi:** obj &lt;&lt; Density Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di densità per la curva di densità sull&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Density Axis( 1 );

```

#### Frequencies

**Sintassi:** obj &lt;&lt; Frequencies( state=0|1 )

**Descrizione:** Mostra o nasconde il report Frequenze, che elenca i conteggi e le probabilità per ogni livello. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

#### Histogram

**Sintassi:** obj &lt;&lt; Histogram( state=0|1 )

**Descrizione:** Mostra o nasconde l&apos;istogramma. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Histogram( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**Sintassi:** obj &lt;&lt; Histogram Color( color )

**Descrizione:** Cambia il colore delle barre dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Histogram Color( "Red" );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**Sintassi:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma e dei report in orizzontale.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Horizontal Layout( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**Sintassi:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico a barre a mosaico per ogni variabile di risposta nominale o ordinale. Un diagramma a mosaico è un grafico a barre impilate in cui ogni segmento è proporzionale al conteggio della frequenza del suo gruppo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

#### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Order By

**Sintassi:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**Descrizione:** Ordina l&apos;istogramma, il diagramma a mosaico e il report Frequenze in sequenza crescente o decrescente, in base al conteggio. È anche possibile tornare all&apos;ordinamento predefinito.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

#### Prob Axis

**Sintassi:** obj &lt;&lt; Prob Axis( state=0|1 )

**Descrizione:** Mostra/Nasconde l&apos;asse di probabilità o di proporzione per l&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Prob Axis( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Prob Axis( 1 );

```

#### Save

**Sintassi:** obj &lt;&lt; Save( "Numeri di livello"|"Ordinamento dei valori"|"Script nel log" )

**Descrizione:** Salva i numeri di livello in una nuova colonna nella tabella di dati o lo script nel log.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Save( "Level Numbers" );

```

#### Separate Bars

**Sintassi:** obj &lt;&lt; Separate Bars( state=0|1 )

**Descrizione:** Aggiunge spazio tra le barre dell&apos;istogramma. Questa opzione è disponibile solo per le variabili categoriche.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

#### Show Counts

**Sintassi:** obj &lt;&lt; Show Counts( state=0|1 )

**Descrizione:** Mostra o nasconde i conteggi delle barre sull&apos;istogramma, che danno la frequenza dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Counts( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Counts( 1 );

```

#### Show Percents

**Sintassi:** obj &lt;&lt; Show Percents( state=0|1 )

**Descrizione:** Mostra o nasconde le percentuali delle barre sull&apos;istogramma, che danno la percentuale dei valori della colonna rappresentati da ogni barra dell&apos;istogramma.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Percents( 1 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**Sintassi:** obj &lt;&lt; Std Error Bars( state=0|1 )

**Descrizione:** Mostra o nasconde gli errori standard delle barre su ciascuna delle barre dell&apos;istogramma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Std Error Bars( 1 );

```

#### Test Probabilities

**Sintassi:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**Descrizione:** Esegue il test sulle probabilità stimate dei livelli di una variabile categorica, rispetto alle probabilità ipotizzate specificate (p1, p2, p3, ecc.). Per variabili con due livelli, usare l&apos;opzione Test per specificare il segno dell&apos;ipotesi alternativa del test. Per variabili con più di due livelli, usare l&apos;opzione Fisso per specificare come vengono gestiti i valori ipotizzati mancanti. Si noti che f è un argomento facoltativo che specifica che il livello precedente è trattato come fisso.

**Esempio di due livelli, bilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**Esempio di due livelli, unilaterale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**Esempio di livelli multipli**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

#### Vertical

**Sintassi:** obj &lt;&lt; Vertical( state=0|1 )

**Descrizione:** Modifica l&apos;orientamento dell&apos;istogramma, dei box plot e dei diagrammi dei quantili in verticale. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di distribuzione nominale**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Vertical( 0 );

```

**Esempio di distribuzione risposte multiple**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Vertical( 0 );

```

## Prediction Interval

### Messaggi degli elementi

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Intervallo di previsione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );Wait( 2 );scrobj = (Report( obj )["Prediction Interval"] << get scriptable object);scrobj << Remove;

```

## Test Equivalence

### Messaggi degli elementi

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Testa equivalenza.

**JMP Versione aggiunta:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );Wait( 2 );scrobj = (Report( obj )["Test Equivalence"] << get scriptable object);scrobj << Remove;

```

## Test Mean

### Messaggi degli elementi

#### PValue animation

**Sintassi:** obj &lt;&lt; Test Mean( PValue Animation )

**Descrizione:** Apre una finestra separata che mostra un&apos;animazione di come i p-value cambiano al variare della media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**Sintassi:** obj &lt;&lt; Test Mean( Power Animation )

**Descrizione:** Apre una finestra separata che mostra un&apos;animazione di come la potenza cambia al variare della media e se il test è unilaterale o bilaterale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60, Power Animation );

```

#### Remove Test

**Sintassi:** obj &lt;&lt; Remove Test

**Descrizione:** Rimuove il report Test sulla media.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60 );Wait( 2 );scrobj = (Report( obj )["Test Mean"] << get scriptable object);scrobj << Remove Test;

```

## Tolerance Interval

### Messaggi degli elementi

#### Remove

**Sintassi:** obj &lt;&lt; Remove

**Descrizione:** Rimuove il report Intervallo di tolleranza.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );Wait( 2 );scrobj = (Report( obj )["Normal Distribution Tolerance Intervals"] << get scriptable object);scrobj << Remove;

```

#### Save Distribution as a Column Property

**Sintassi:** obj &lt;&lt; Tolerance Interval( Save Distribution as a Column Property )

**Descrizione:** Salva il tipo di distribuzione di intervallo di tolleranza come proprietà della colonna entro la colonna della tabella di dati originale.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Tolerance Interval(	Alpha( 0.95 ),	Proportion( 0.90 ),	Lognormal,	Save Distribution as a Column Property);

```

#### Save to Spec Limits Column Property

**Sintassi:** obj &lt;&lt; Save to Spec Limits Column Property( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Nonparametric&gt;, &lt;Save to Spec Limits Column Property&gt; )

**Descrizione:** Salva l&apos;intervallo di tolleranza come limiti di specifica nella proprietà Limiti di specifica della colonna nella tabella di dati.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval(	Alpha( 0.95 ),	Proportion( 0.85 ),	Save to Spec Limits Column Property);

```

