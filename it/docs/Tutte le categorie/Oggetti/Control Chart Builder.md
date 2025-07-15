# Control Chart Builder



## Costruttori associati

### Control Chart Builder

**Sintassi:** Control Chart Builder( Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" ), Variables( variables ), &lt;Chart( Position( number ), Points( Statistic( "statistic" ), &lt;points options&gt; ), Limits( Sigma( "sigma" ), &lt;limits options&gt; )&gt; ) ) )

**Descrizione:** Consente di creare in modo interattivo carte di controllo, utilizzate per determinare se un processo è stabile e prevedibile. La piattaforma Costruttore di carte di controllo può essere utilizzata per creare i seguenti tipi di carte di controllo: IMR, BarraX, Esecuzione breve, Sequenziale, P, NP, C, U, Laney P&apos;, Laney U&apos;, Levey-Jennings, IMR sulle medie, A tre vie ed Evento raro.

**Carta P'**

```jsl

Names Default To Here( 1 );
// Create a P' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney P'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney P Prime" ) ) )
);

```

**Carta U'**

```jsl

Names Default To Here( 1 );
// Create a U' chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Laney U'.
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), n Trials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Laney U Prime" ) ) )
);

```

**Grafico a tre vie (impostare dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and setting a subgroup size.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico a tre vie (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Three Way chart by adding a dispersion chart after adding a Y variable and adding a subgroup variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 3 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) )
);

```

**Grafico BarraX/R**

```jsl

Names Default To Here( 1 );
// Create an XBar/R chart by adding a subgroup or setting a subgroup size after adding a Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), Set Subgroup Size( 4 ) );

```

**Grafico BarraX/S (impostare dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and defining a subgroup size, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico BarraX/S (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an XBar/S chart by adding a Y variable and a subgroup variable, changing the Statistic for the dispersion chart to Standard Deviation, and changing the Sigma for the location chart to Standard Deviation.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Standard Deviation" ) ) )
);

```

**Grafico C**

```jsl

Names Default To Here( 1 );
// Create a C chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**Grafico della differenza esecuzione breve**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart by changing the class to Short Run and adding a Product or Part variable. Make sure that the Statistic values for the location chart and dispersion chart are set to Centered and Moving Range Centered, respectively. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Class( "Short Run" ), Variables( Y( :Weight ), Part( :Product ) ) );

```

**Grafico della differenza esecuzione breve per BarraX**

```jsl

Names Default To Here( 1 );
// Create a Short Run Difference chart for summarized data by changing the class to Short Run and adding a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) )
);

```

**Grafico di esecuzione**

```jsl

Names Default To Here( 1 );
// Create a Run chart by adding a Y variable, turning off the limits, and removing the dispersion chart.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Show Limit Summaries( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Limits( Show Lower Limit( 0 ), Show Upper Limit( 0 ) ) ),
	Show Control Panel( 0 )
);

```

**Grafico di range mobile mediano**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range chart by adding a Y variable and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Grafico G degli eventi rari**

```jsl

Names Default To Here( 1 );
// Create a G chart by changing the class to Rare Event and adding a nonnegative discrete Y variable. Make sure that the Sigma is set to Negative Binomial.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Negative Binomial" ) ) )
);

```

**Grafico IMR**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

**Grafico Levey-Jennings**

```jsl

Names Default To Here( 1 );
// Create a Levey-Jennings chart by adding a Y variable, removing the dispersion chart, and changing the Sigma to Levey Jennings. Make sure that the Statistic is set to Individual.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Weight ) ),
	Chart( Points( Statistic( "Individual" ) ), Limits( Sigma( "Levey Jennings" ) ) )
);

```

**Grafico NP**

```jsl

Names Default To Here( 1 );
// Create an NP chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Count, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Grafico P**

```jsl

Names Default To Here( 1 );
// Create a P chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Binomial (P, NP).
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

**Grafico standardizzato esecuzione breve**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart by changing the class to Short Run and adding a Subgroup and a Product or Part variable, changing the Statistic for the location chart type to Standardized, and changing the Statistic for the dispersion chart to Moving Range Standardized. Short Run Standardized charts are sometimes referred to as Z-MR charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range Standardized" ) ) )
);

```

**Grafico standardizzato esecuzione breve per BarraX**

```jsl

Names Default To Here( 1 );
// Create a Short Run Standardized chart for summarized data by changing the class to Short Run and adding a Subgroup and a Product or Part variable,  Short Run Standardized charts are sometimes referred to as Z-MR charts. Centered Short Run control charts are sometimes referred to as Deviation from Nominal (DNOM) charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Fancy Chocolate Factory.jmp" );
obj = dt << Control Chart Builder(
	Show Product Separators( 0 ),
	Class( "Short Run" ),
	Variables( Subgroup( :Box ), Y( :"%Cocoa"n ), Part( :Product ) ),
	Chart( Position( 1 ), Points( Statistic( "Standardized" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range Standardized" ) ) )
);

```

**Grafico T degli eventi rari**

```jsl

Names Default To Here( 1 );
// Create a T chart by changing the class to Rare Event, changing the Sigma to Weibull, and adding a nonnegative discrete Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Fan Burnout.jmp" );
obj = dt << Control Chart Builder(
	Class( "Rare Event" ),
	Variables( Subgroup( :Burnout ), Y( :Hours between Burnouts ) ),
	Chart( Points( Statistic( "Count" ) ), Limits( Sigma( "Weibull" ) ) )
);

```

**Grafico U**

```jsl

Names Default To Here( 1 );
// Create a U chart by adding a Y variable, changing the Class to Shewhart Attribute, changing the Statistic to Proportion, and changing the Sigma to Poisson.
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Poisson" ) ) )
);

```

**IMR sul grafico della deviazione standard del gruppo (impostare dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico della deviazione standard del gruppo (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Group Standard Deviation chart by adding a Y variable and a subgroup variable, and changing the Statistic on the location chart to Standard Deviation, on the dispersion chart to Moving Range on Std Dev and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico delle medie (impostazione dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and defining a subgroup size, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**IMR sul grafico delle medie (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create an IMR on Means chart by adding a Y variable and a subgroup variable, and changing the Statistic on the dispersion chart to Moving Range on Means and the Sigma on both charts to Moving Range.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle deviazioni standard di gruppo (impostare dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and defining a subgroup size, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle deviazioni standard di gruppo (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Standard Deviations chart by adding a Y variable and a subgroup variable, changing the Statistic on the location chart to Standard deviation, on the dispersion chart to Moving Range on Std Dev, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Standard Deviation" ) ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Std Dev" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle medie di gruppo (impostare dimensione del sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and defining a subgroup size, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Set Subgroup Size( 4 ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

**Range mobile mediano su una carta delle medie di gruppo (variabile di sottogruppo)**

```jsl

Names Default To Here( 1 );
// Create a Median Moving Range on Group Means chart by adding a Y variable and a subgroup variable, changing the Statistic on the dispersion chart to Moving Range on Means, and changing the Sigma to Median Moving Range on both the location and dispersion charts.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Median Moving Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Moving Range on Means" ) ), Limits( Sigma( "Median Moving Range" ) ) )
);

```

## Messaggi degli elementi

### Action

**Sintassi:** obj &lt;&lt; Action

**Descrizione:** Trapdoor generica all&apos;interno di una piattaforma per inserire espressioni da valutare. Imposta temporaneamente i contesti del riquadro di visualizzazione e della tabella di dati per la piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Add Limits

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Add Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Descrizione:** Aggiunge una serie supplementare di limiti per il grafico specificato, in cui i limiti aggiunti compaiono come linee tratteggiate.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Limits( {LCL( 17.5 ), Avg( 20.25 ), UCL( 23 )} ) );

```

### Add Spec Limits

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Add Spec Limits( {LSL( number ), Target( number ), USL( number )} ) )

**Descrizione:** Imposta i limiti di specifica per ciascuna variabile Y.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );

```

### Alarm Script

**Sintassi:** obj &lt;&lt; Alarm Script( Write( "..." )|Speak( "..." )|Mail( address, subject,"..." ) )

**Descrizione:** Invia un messaggio ogni volta che un punto su una carta di controllo non supera un determinato test. Il messaggio può essere inviato al log, può essere pronunciato o inviato via e-mail.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
obj << Alarm Script(
	Write(
		"Out of Control for test ",
		qc_test,
		" in column ",
		qc_col,
		" in sample ",
		qc_sample,
		" in phase ",
		qc_phase
	)
);

```

### Apply Preset

**Sintassi:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descrizione:** Applica all’oggetto una preimpostazione precedentemente creata, aggiornando le opzioni e le personalizzazioni in base alle impostazioni salvate.

**JMP Versione aggiunta:** 18

**Cerca per nome**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preimpostazione anonima**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**Ricerca all'interno delle cartelle**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**Sintassi:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descrizione:** Ripete l&apos;analisi automaticamente per l&apos;esclusione e le modifiche ai dati. Se l&apos;opzione Ricalcolo automatico è attivata, si consiglia di usare i comandi Attendi(0) per garantire che le modifiche di esclusione e di dati abbiano effetto prima del ricalcolo.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Chart

**Sintassi:** obj &lt;&lt; Chart( Position( number ), &lt;Points( Statistic(),... )&gt;, &lt;Set Control Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Limits( { LCL(), UCL(), Avg() } )&gt;, &lt;Add Spec Limits( { LSL(), USL(), Target() } )&gt;, &lt;Limits( Sigma(), ... )&gt;, &lt;Warnings( Test number( state=0|1 ) )&gt; )

**Descrizione:** Imposta gli attributi di avvertimento, limite e punto per la carta che è specificata dall’argomento Position.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Warnings( Test 1( 1 ) ),
		Add Limits( {LCL( 18 ), UCL( 22.4 ), Avg( 20.2 )} )
	),
	Chart(
		Position( 2 ),
		Points( Statistic( "Standard Deviation" ) ),
		Limits( Sigma( "Standard Deviation" ) )
	)
);

```

### Class

**Sintassi:** obj &lt;&lt; Class( "Shewhart Variables"|"Shewhart Attribute"|"Short Run"|"Rare Event" )

**Descrizione:** Specifica la classe o famiglia di combinazioni statistiche punto e sigma.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Orange Juice.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Sample ), Y( :Status ), Phase( :Phase ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma ) )
);

```

### Color By Product

**Sintassi:** obj &lt;&lt; Color By Product( state=0|1 )

**Descrizione:** Colora i punti rappresentati in base al livello della variabile Prodotto. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Color By Product( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Connect Thru Missing

**Sintassi:** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**Descrizione:** Determina se i punti e le linee sono connessi quando alcuni campioni hanno valori mancanti o righe escluse.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = Control Chart Builder( Variables( Y( :Gap ) ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Copy Script;

```

### Customize Tests

**Sintassi:** obj &lt;&lt; Customize Tests( Test 1 | Test 2 | Test 3 | Test 4 | Test 5 | Test 6 | Test 7 | Test 8 (n, label) )

**Descrizione:** Consente di selezionare, personalizzare etichette e impostare i parametri di distanza su base sigma per i test Western Electric.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Customize Tests( Test 1( 2, "A" ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Data Table Window;

```

### Fit to Window

**Sintassi:** obj &lt;&lt; Fit to Window( "Automatica"|"Attivato"|"Disattivato"|"Mantieni proporzioni"="Disattivato" )

**Descrizione:** Imposta il comportamento di espansione automatica del report. "Disattivato", per impostazione predefinita.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Fit to Window( "On" );

```

### Get By Levels

**Sintassi:** obj &lt;&lt; Get By Levels

**Descrizione:** Restituisce un array associativo che mappa le colonne del gruppo di By ai rispettivi valori.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Piattaforma con filtro**

```jsl

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

### Get Control Limits

**Sintassi:** obj &lt;&lt; Get Control Limits( filename )

**Descrizione:** Importa i limiti di controllo da una tabella di dati selezionata e sostituisce i limiti calcolati sul grafico.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Statistic( "Average" ) ), Limits( Sigma( "Range" ) ) ),
	Chart( Position( 2 ), Points( Statistic( "Range" ) ), Limits( Sigma( "Range" ) ) ),

);
obj << Get Control Limits( "$SAMPLE_DATA/Quality Control/CoatingLimits.jmp" );

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Product Statistics

**Sintassi:** obj &lt;&lt; Get Product Statistics( filename )

**Descrizione:** Importa da una tabella di dati specificata i valori target e Sigma di prodotto di esecuzione breve.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Get Product Statistics( "$SAMPLE_DATA/Quality Control/CoatingProductInfo.jmp" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Spec Limits

**Sintassi:** obj &lt;&lt; Get Spec Limits( filename )

**Descrizione:** Importa i limiti di specifica da un file.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :OZONE, :CO ) ), Set Subgroup Size( 5 ) );
obj << Get Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintassi:** obj &lt;&lt; Get Web Support

**Descrizione:** Restituisce un numero indicante il livello di supporto HTML interattivo per l&apos;oggetto visualizzato. 1 significa che alcuni o tutti gli elementi sono supportati. 0 significa nessun supporto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintassi:** obj &lt;&lt; Get Where Expr

**Descrizione:** Restituisce l&apos;espressione Where per il sottoinsieme di dati, se la piattaforma è stata avviata con By() o Where(). Altrimenti, restituisce Vuoto()

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Graph Borders

**Sintassi:** obj &lt;&lt; Graph Borders( state=0|1 )

**Descrizione:** Mostra/Nasconde i bordi interni del riquadro del grafico.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing( 5 );
obj << Graph Transparency( 0 );
obj << Graph Borders( 1 );

```

### Graph Spacing

**Sintassi:** obj &lt;&lt; Graph Spacing( gap=2 )

**Descrizione:** Specifica la quantità di spazio tra i riquadri del grafico. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Graph Spacing( 5 );

```

### Graph Spacing Color

**Sintassi:** obj &lt;&lt; Graph Spacing Color( color )

**Descrizione:** Specifica il colore dello spazio tra i riquadri del grafico.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Color( "Red" );

```

### Graph Spacing Transparency

**Sintassi:** obj &lt;&lt; Graph Spacing Transparency( number )

**Descrizione:** Specifica il livello di trasparenza dello spazio tra i riquadri del grafico. Deve essere tra 0 e 1.

**JMP Versione aggiunta:** 17

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 0.5 );
obj << Graph Spacing Transparency( 0.3 );

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Missing Categories

**Sintassi:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**Descrizione:** Include un livello extra per le variabili nominali e ordinali quando i dati contengono valori mancanti. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Diameter ), Subgroup( :Day ) ) );
:Day[{8, 9, 10, 11, 12}] = .;
Wait( 1 );
obj << Include Missing Categories( 0 );

```

### K Sigma

**Sintassi:** obj &lt;&lt; K Sigma( value=3 )

**Descrizione:** Imposta il valore K da moltiplicare per sigma per formare i limiti di controllo sulla media. "3", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	K Sigma( 2.5 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) )
);
Wait( 1 );
obj << K Sigma( 3 );

```

### Limits

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Limits( Sigma( "sigma" ), &lt;Zones( state=0|1 )&gt;, &lt;Shade Zones( state=0|1 )&gt;, &lt;Set Control Limits( state=0|1 )&gt;, &lt;Show Upper Limit( state=0|1 )&gt;, &lt;Show Lower Limit( state=0|1 )&gt;, &lt;Show Center Line( state=0|1 )&gt; ) )

**Descrizione:** Offre opzioni per modificare le caratteristiche dei limiti del grafico. A seconda del tipo di grafico, è possibile assegnare uno dei seguenti valori come argomento sigma: Range, Deviazione standard, Range mobile, Range mobile mediano, Levey-Jennings, Poisson, Binomiale, Binomiale negativo, Weibull, Laney P Prime o Laney U Prime.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Sigma( "Standard Deviation" ), Shade Zones( 1 ) ) )
);
obj << Chart(
	Position( 2 ),
	Points( Statistic( "Standard Deviation" ) ),
	Limits( Sigma( "Standard Deviation" ) )
);

```

### Limits Label Precision

**Sintassi:** obj &lt;&lt; Limits Label Precision( number )

**Descrizione:** Specifica la precisione che viene visualizzata nei limiti relativi ai dati.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );
Wait( 1 );
obj << Limits Label Precision( 5 );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

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

### Messaggi degli elementi condivisi

### New JSL Preset

**Sintassi:** New JSL Preset( preset )

**Descrizione:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### OC Curve

**Sintassi:** obj &lt;&lt; OC Curve

**Descrizione:** Mostra in una nuova finestra una curva caratteristica operativa utilizzando i limiti di controllo e sigma dalla carta di controllo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
Wait( 1 );
obj << OC Curve;

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

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

### Points

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Points( Statistic( "statistic" ), &lt;Individual Points( state=0|1 )&gt;, &lt;Box Plots( state=0|1 )&gt;, &lt;Show Connect Line( state=0|1 )&gt;, &lt;Show Points( state=0|1 )&gt; ) )

**Descrizione:** Offre opzioni per modificare le caratteristiche dei punti del grafico. A seconda del tipo di grafico, è possibile assegnare uno dei seguenti valori per l’argomento statistic: Media, Range, Deviazione standard, Range mobile sulle medie, Range mobile sulla deviazione standard, Individuale, Range mobile, Conteggio, Proporzione, Centrato, Standardizzato, Range su Centrato o Range su standardizzato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Points( Box Plots( 1 ) ) ),

);
Wait( 1 );
obj << Chart( Position( 2 ), Points( Statistic( "Standard Deviation" ) ) );

```

### Product Statistics

**Sintassi:** obj &lt;&lt; Product Statistics( ( column ) ( Product Level( l1 ( Target( number ), Sigma ( number ) ), &lt;l2 ( Target( number ), Sigma ( number ) )) ), &lt; (column ( Product Level( ... ) ) ) &gt; )

**Descrizione:** Imposta i valori per Sigma e Target di prodotto per esecuzione breve.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Product Statistics(
	:Weight( ProductLevel( A( Target( 20 ), Sigma( 1 ) ), B( Target( 22 ), Sigma( .7 ) ) ) )
);

```

### Range Span

**Sintassi:** obj &lt;&lt; Range Span( value=2 )

**Descrizione:** Imposta il valore dell&apos;opzione di estensione del range utilizzato nei grafici di range mobile. "2", per impostazione predefinita.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( K Sigma( 2.5 ), Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Range Span( 3 );

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintassi:** obj &lt;&lt; Remove Column Switcher

**Descrizione:** Rimuove l&apos;ultimo Scambia colonne che è stato aggiunto alla piattaforma.

```jsl

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

**Sintassi:** obj &lt;&lt; Remove Local Data Filter

**Descrizione:** Se è stato creato un filtro di dati locali viene rimosso per ripristinare la piattaforma e utilizzare direttamente tutti i dati nella tabella di dati

```jsl

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

**Sintassi:** Render Preset( preset )

**Descrizione:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Report View( "Summary" );

```

### Rerun All Tests

**Sintassi:** obj &lt;&lt; Rerun All Tests

**Descrizione:** Esegue di nuovo tutti i test al momento selezionati ed eventuali script di allarme associati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			" in phase ",
			qc_phase
		)
	),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
obj << K Sigma( 2.5 );
obj << Rerun All Tests;

```

### Save Control Limits

**Sintassi:** obj &lt;&lt; Save Control Limits( "nella colonna "|"nella nuova tabella"|"in nuova tabella verticale" )

**Descrizione:** Salva i limiti di controllo in una proprietà della colonna o in una nuova tabella di dati.



Se è specificato in Column e i limiti sono costanti, i valori LCL, Media e UCL per ogni tipo di grafico nel report sono salvati in una proprietà della colonna dei limiti di controllo. Se i limiti non sono costanti non viene salvata alcuna proprietà della colonna.



Se è specificato in New Table, la deviazione standard e la media di ogni grafico sono salvate in una nuova tabella di dati. Se i limiti sono costanti, vengono salvati anche LCL, media e UCL per ogni grafico. Se sono presenti fasi, viene salvato un nuovo insieme di valori per ogni fase.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Control Limits( "in Column" );
obj << Save Control Limits( "in New Table" );

```

### Save Product Statistics

**Sintassi:** obj &lt;&lt; Save Product Statistics

**Descrizione:** Salva le colonne in una nuova tabella di dati. La nuova tabella di dati contiene le statistiche del prodotto (target e sigma) per ciascun livello della variabile Parte/Prodotto.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Save Product Statistics;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Script to Script Window;

```

### Save Spec Limits

**Sintassi:** obj &lt;&lt; Save Spec Limits

**Descrizione:** Salva i limiti di specifica in una nuova tabella di dati. Questa opzione è disponibile solo se i limiti di specifica sono stati impostati, con una proprietà della colonna Limiti di specifica, tramite JSL, Ottieni importazione file limiti di specifica o l&apos;opzione Imposta limiti di specifica.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Add Spec Limits( {LSL( 18 ), Target( 20.1 ), USL( 22.2 )} ) );
obj << Save Spec Limits;

```

### Save Summaries

**Sintassi:** obj &lt;&lt; Save Summaries

**Descrizione:** Salva una nuova tabella di dati per ogni grafico. La tabella di dati include una riga per ogni campione e colonne per l’etichetta del campione, la dimensione campionaria e il livello di prodotto, se è specificata una variabile Prodotto/Parte. Per ogni grafico, esistono anche colonne per il singolo punto rappresentato, il tipo di carta, UCL, Media, LCL e tutti i test selezionati che hanno esito negativo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Save Summaries;

```

### SendToByGroup

**Sintassi:** SendToByGroup( {":Column == level"}, command );

**Descrizione:** Invia comandi della piattaforma o visualizza comandi di personalizzazione a ciascun livello di un gruppo di By.

```jsl

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

**Sintassi:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descrizione:** Invia a oggetto che supporta script incorporato ripristina le impostazioni degli oggetti incorporati che supportano script.

```jsl

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

**Sintassi:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descrizione:** La funzione Invia al report è utilizzata in combinazione con il comando Invia per personalizzare l&apos;aspetto di un report.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Control Limits

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Set Control Limits( {LCL( number ), Avg( number ), UCL( number )} ) )

**Descrizione:** Imposta i limiti di controllo per la carta specificata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ) );
obj << Chart( Position( 1 ), Set Control Limits( {LCL( 19 ), Avg( 20 ), UCL( 21 )} ) );

```

### Set Last N Subgroups

**Sintassi:** obj &lt;&lt; Set Last N Subgroups( number )

**Descrizione:** Modifica l&apos;asse orizzontale per mostrare solo gli ultimi N sottogruppi del grafico. Il numero di sottogruppi specificati non tiene conto delle osservazioni escluse o nascoste. Questa opzione non è disponibile quando è presente una variabile Fase con più di un livello.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Last n Subgroups( 5 );

```

### Set Sigma

**Sintassi:** obj &lt;&lt; Set Sigma( value )

**Descrizione:** Imposta il valore sigma utilizzato nella carta di controllo.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Set Sigma( 1.8 );

```

### Set Subgroup Size

**Sintassi:** obj &lt;&lt; Set Subgroup Size( integer )

**Descrizione:** Specifica il numero di righe per sottogruppo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Set Subgroup Size( 4 );

```

### Show Alarm Report

**Sintassi:** obj &lt;&lt; Show Alarm Report( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella delle frequenze di allarmi e campioni fuori controllo.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Alarm Report( 1 );

```

### Show Capability

**Sintassi:** obj &lt;&lt; Show Capability( state=0|1 )

**Descrizione:** Mostra o nasconde il report dell’analisi di capability del processo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Y( :Weight ) ),
	Chart(
		Position( 1 ),
		Limits( Sigma( "Moving Range" ) ),
		Add Spec Limits( {LSL( 17 ), USL( 23 ), Target( 20 )} )
	)
);
Wait( 1 );
obj << Show Capability( 0 );

```

### Show Center Line

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Limits( Show Center Line( state=0|1 ) ) )

**Descrizione:** Mostra o nasconde la linea centrale. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Subgroup( :Sample ), Y( :Weight ) ), );
obj << Chart( Position( 1 ), Limits( Show Center Line( 0 ) ) );

```

### Show Control Panel

**Sintassi:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descrizione:** Mostra/Nasconde il pannello di controllo. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Control Panel( 0 );

```

### Show Excluded Region

**Sintassi:** obj &lt;&lt; Show Excluded Region( state=0|1 )

**Descrizione:** Mostra o nasconde le regioni del grafico in cui sono stati esclusi i campioni. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = dt << Select Where( :Sample < 4 );
r << Exclude;
Wait( 1 );
obj << Show Excluded Region( 0 );

```

### Show Limit Labels

**Sintassi:** obj &lt;&lt; Show Limit Labels( state=0|1 )

**Descrizione:** Mostra o nasconde le etichette dei limiti sul grafico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Limit Labels( 1 );

```

### Show Limit Summaries

**Sintassi:** obj &lt;&lt; Show Limit Summaries( state=0|1 )

**Descrizione:** Mostra o nasconde il report Riepiloghi dei limiti. Questo report contiene i limiti di controllo (LCL e UCL), la linea centrale (Media), i punti e limiti rappresentati e la dimensione campionaria del grafico. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
Wait( 1 );
obj << Show Limit Summaries( 0 );

```

### Show Lower Limit

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Limits( Show Lower Limit( state=0|1 ) ) )

**Descrizione:** Mostra o nasconde il limite di controllo inferiore. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Lower Limit( 0 ) ) )
);

```

### Show Product Separators

**Sintassi:** obj &lt;&lt; Show Product Separators( state=0|1 )

**Descrizione:** Mostra o nasconde linee verticali tratteggiate sul grafico che indicano il cambio del prodotto. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Class( "Short Run" ),
	Variables( Y( :Weight ), Part( :Product ) )
);
Wait( 1 );
obj << Show Product Separators( 0 );

```

### Show Sigma Report

**Sintassi:** obj &lt;&lt; Show Sigma Report( state=0|1 )

**Descrizione:** Mostra o nasconde la tabella di Sigma generale, Entro Sigma, Indice di stabilità e Media. Per le carte a tre vie, vengono mostrate anche Tra Sigma e Tra ed entro Sigma.

**JMP Versione aggiunta:** 15

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Show Sigma Report( 1 );

```

### Show Two Shewhart or Short Run Charts

**Sintassi:** obj &lt;&lt; Show Two Shewhart or Short Run Charts( state=0|1 )

**Descrizione:** Mostra sia il grafico di posizione sia il grafico di dispersione. Quando il valore di questa opzione è 0, il grafico di dispersione non viene mostrato. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Control Chart Builder(
	Show Two Shewhart Charts( 0 ),
	Variables( Y( :Diameter ), Subgroup( :Day ) )
);

```

### Show Upper Limit

**Sintassi:** obj &lt;&lt; Chart( Position( number ), Limits( Show Upper Limit( state=0|1 ) ) )

**Descrizione:** Mostra o nasconde il limite di controllo superiore. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Limits( Show Upper Limit( 0 ) ) )
);

```

### Size

**Sintassi:** obj &lt;&lt; Size( width, height )

**Descrizione:** Imposta le dimensioni del grafico.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Size( 808, 586 );

```

### Sort by Subgroup

**Sintassi:** obj &lt;&lt; Sort by Subgroup( state=0|1 )

**Descrizione:** Ordina i dati del processo in base alla variabile di sottogruppo o alla combinazione di variabili di sottogruppo nidificate, prima di eseguire i calcoli. Questa opzione è disponibile solo se è specificata una variabile di sottogruppo.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Airline Delays.jmp" );
obj = dt << Control Chart Builder(
	Variables( Subgroup( :Day of Week ), Y( :Arrival Delay ) )
);
Wait( 1 );
obj << Sort by Subgroup( 1 );

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Test Excluded Subgroups

**Sintassi:** obj &lt;&lt; Test Excluded Subgroups( state=0|1 )

**Descrizione:** Include o esclude nel calcolo dei test i sottogruppi completamente esclusi. Questa opzione è disponibile solo quando è selezionata l’opzione Mostra regione esclusa. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder(
	Test Excluded Subgroups( 0 ),
	Show Control Panel( 0 ),
	Show Alarm Report( 1 ),
	Variables( Subgroup( :Sample ), Y( :Weight ) ),
	Chart( Position( 1 ), Warnings( Test 1( 1 ) ) )
);
Wait( 1 );
dt << Select Rows( Index( 21, 24 ) ) << Exclude;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Use Event Chooser

**Sintassi:** obj &lt;&lt; Use Event Chooser( state=0|1 )

**Descrizione:** Classifica dati numerici ordinali e offre selezioni di modellizzazione individuali a livello numerico. L’opzione Usa Selettore di eventi è disponibile solo per grafici degli attributi che includono variabili Y numeriche non continue.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Control Chart Builder( Class( "Shewhart Attribute" ), Variables( Y( :Age ) ) );
obj << Use Event Chooser( 1 );

```

### Use Excluded Points on MR

**Sintassi:** Platform preferences( Control Chart Builder (Use Excluded Points on MR(1)) )

**Descrizione:** Preferenza per l&apos;inclusione dei punti esclusi nei calcoli di range mobile.

**JMP Versione aggiunta:** 19

```jsl

Names Default To Here( 1 );
Platform Preferences( Control Chart Builder( Use Excluded Points on MR( 1 ) ) );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
dt << Select Rows( 4 :: 6 ) << Exclude( 1 );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### Variables

**Sintassi:** obj &lt;&lt; Variables( Y( column ), &lt;Subgroup( column)&gt;, &lt;Phase( column )&gt;, &lt;Part( column )&gt; )

**Descrizione:** Assegna le variabili indicate ai ruoli.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
// Create an IMR chart by adding a continuous Y variable.
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Control Chart Builder( Variables( Y( :Weight ) ) );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### n Trials

**Sintassi:** obj &lt;&lt; n Trials( column | integer )

**Descrizione:** Assegna una dimensione di lotto a una carta di controllo degli attributi.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Washers.jmp" );
obj = dt << Control Chart Builder(
	Class( "Shewhart Attribute" ),
	Variables( Subgroup( :Lot ), Y( :"# defective"n ), nTrials( :Lot Size ) ),
	Chart( Points( Statistic( "Proportion" ) ), Limits( Sigma( "Binomial" ) ) )
);

```

