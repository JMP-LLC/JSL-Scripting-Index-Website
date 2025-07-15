# Model Screening



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);

```

### Factor

**Sintassi:** obj &lt;&lt; Factor( column(s) )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol )
);

```

### Response

**Sintassi:** obj &lt;&lt; Response( column(s) )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Validation

**Sintassi:** obj &lt;&lt; Validation( column )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Weight( _weightcol )
);

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

## Costruttori associati

### Model Screening

**Sintassi:** Model Screening( Y( column ), X( columns ) )

**Descrizione:** Stima molti modelli predittivi diversi, in modo da poter selezionare il migliore.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
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

### Add Quadratics

**Sintassi:** obj = Model Screening(...Add Quadratics( state=0|1 )...)

**Descrizione:** Aggiunge effetti per i quadrati delle variabili continue alle stime di modellizzazione lineare.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Quadratics( 1 )
);

```

### Add Two Way Interactions

**Sintassi:** obj = Model Screening(...Add Two Way Interactions( state=0|1 )...)

**Descrizione:** Aggiunge tutti gli effetti di interazione a due vie alle stime di modellizzazione lineare.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Two Way Interactions( 1 )
);

```

### Additional Methods

**Sintassi:** obj = Model Screening(...Additional Methods( state=0|1 )...)

**Descrizione:** Richiama diversi metodi aggiuntivi nella piattaforma Regressione generalizzata oltre a Lasso: selezione in avanti, selezione in avanti con pruning, elastic net e ridge.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Additional Methods( 1 )
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Boosted Tree

**Sintassi:** obj = Model Screening(...Boosted Tree( state=0|1 )...)

**Descrizione:** Crea un albero decisionale che è una sequenza di alberi più piccoli per prevedere una risposta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Bootstrap Forest

**Sintassi:** obj = Model Screening(...Bootstrap Forest( state=0|1 )...)

**Descrizione:** Crea una raccolta di alberi decisionali mediante campionamento causale e fa una media dei risultati per prevedere una risposta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Cardinality of Predictors

**Sintassi:** obj &lt;&lt; Cardinality of Predictors( state=0|1 )

**Descrizione:** Mostra o nasconde un report del numero di livelli e di quanti parametri sono utilizzati nella stima del modello lineare per ogni predittore categorico.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Neural( 0 ),
	Bootstrap Forest( 0 ),
	Generalized Regression( 0 ),
	Support Vector Machines( 0 ),
	Cardinality of Predictors( 1 )
);

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

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Data Table Window;

```

### Decision Threshold

**Sintassi:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Descrizione:** Mostra o nasconde la distribuzione delle probabilità stimate e le tabelle effettive rispetto a quelle previste per ogni modello. È possibile modificare la soglia di probabilità per esplorare come le diverse soglie influenzano i risultati della classificazione.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 )
);

```

### Decision Tree

**Sintassi:** obj = Model Screening(...Decision Tree( state=0|1 )...)

**Descrizione:** Crea un albero decisionale per prevedere una risposta. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Discriminant

**Sintassi:** obj = Model Screening(...Discriminant( state=0|1 )...)

**Descrizione:** Classifica l&apos;appartenenza categorica a un gruppo sulla base di variabili continue. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Iris.jmp" );
Make Validation Column( Validation Set( .3 ), Training Set( .7 ), Go );
obj = Model Screening(
	Y( :Species ),
	Validation( :Validation ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Discriminant( 1 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Elapsed Time

**Sintassi:** obj &lt;&lt; Elapsed Time( state=0|1 )

**Descrizione:** Mostra o nasconde un report che contiene il tempo totale trascorso per la stima di ogni metodo.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Elapsed Time( 1 )
);

```

### Fit Least Squares

**Sintassi:** obj = Model Screening(...Fit Least Squares( state=0|1 )...)

**Descrizione:** Stima un modello di regressione lineare per una risposta continua. Le tecniche comprendono regressione, analisi della varianza, analisi della covarianza, modelli misti e analisi di esperimenti pianificati. L&apos;opzione Enfasi consente di specificare il layout del report. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 1 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Fit Stepwise

**Sintassi:** obj = Model Screening(...Fit Stepwise( state=0|1 )...)

**Descrizione:** Stima modelli di regressione stepwise che facilitano la scelta della variabile per minimi quadrati standard e modelli logistici ordinali, oltre a modelli logistici nominali con risposta binaria. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 0 )
);

```

### Generalized Regression

**Sintassi:** obj = Model Screening(...Generalized Regression( state=0|1 )...)

**Descrizione:** Stima modelli lineari generalizzati usando tecniche di regressione penalizzata che facilitano l&apos;automatizzazione della scelta della variabile in modo da evitare la sovrastima. Le tecniche di regressione penalizzata includono lazo, lazo adattivo, rete elastica, rete elastica adattiva e regressione ridge. Le distribuzioni della risposta possono supportare dati di risposta continui, categorici, conteggio e tempo all&apos;evento. Questa è la personalità consigliata per la maggior parte delle impostazioni della regressione. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 )
);

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

### Get ByGroup Script

**Sintassi:** obj &lt;&lt; Get ByGroup Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

**Generale**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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

### Informative Missing

**Sintassi:** obj = Model Screening(...Informative Missing( state=0|1 )...)

**Descrizione:** Attiva l&apos;opzione mancante esplicativa per tutte le piattaforme.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Neural( 0 ),
	Informative Missing( 1 )
);

```

### K Fold Crossvalidation

**Sintassi:** obj = Model Screening(...K Fold Crossvalidation( state=0|1 )...)

**Descrizione:** Partiziona i dati in modo casuale in K parti o partizioni. Un modello è stimato K volte sui dati, ogni volta con una diversa partizione tenuta come insieme (set) di crossvalidation.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K Nearest Neighbors

**Sintassi:** obj = Model Screening(...K Nearest Neighbors( state=0|1 )...)

**Descrizione:** Prevede una risposta sulla base delle risposte dei K vicini più prossimi. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### K for K Fold

**Sintassi:** obj = Model Screening(...K for K Fold( number=5 )...)

**Descrizione:** Specifica il numero di partizioni per la crossvalidation con k partizioni. Il valore predefinito è 5 e K deve essere maggiore di 1. "5", per impostazione predefinita.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	K for K Fold( 6 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K for Nested

**Sintassi:** obj = Model Screening(...K for Nested( number=5 )...)

**Descrizione:** Specifica il numero di partizioni per la crossvalidation nidificata. Il valore di default è 5 e K deve essere maggiore di 1. "5", per impostazione predefinita.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 3 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### L for Nested

**Sintassi:** obj = Model Screening(...L for Nested( number=4 )...)

**Descrizione:** Specifica il numero di partizioni interne per la crossvalidation nidificata. Il valore di default è 4 e L deve essere maggiore di 1. "4", per impostazione predefinita.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 5 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

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

### Log Methods

**Sintassi:** obj = Model Screening(...Log Methods( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

### Logistic Regression

**Sintassi:** obj = Model Screening(...Logistic Regression( state=0|1 )...)

**Descrizione:** Stima un modello di regressione logistica delle categorie di risposta nominali per predittori sia continui sia categorici. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 0 )
);

```

### Messaggi degli elementi condivisi

### Model NParm Limit

**Sintassi:** obj &lt;&lt; Model NParm Limit( number=450 )

**Descrizione:** Specifica il numero di parametri al di sopra del quale le piattaforme di modellizzazione non vengono eseguite. "450", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Add Two Way Interactions( 1 ),
	Add Quadratics( 1 ),
	Model NParm Limit( 40 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Naive Bayes

**Sintassi:** obj = Model Screening(...Naive Bayes( state=0|1 )...)

**Descrizione:** Prevede l&apos;appartenenza a un gruppo per una variabile categorica.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 ), 

);

```

### Nested Crossvalidation

**Sintassi:** obj = Model Screening(...Nested Crossvalidation( state=0|1 )...)

**Descrizione:** Partiziona i dati in modo casuale in K parti uguali e poi partiziona ulteriormente tutte le parti, tranne una, in L parti uguali.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Neural

**Sintassi:** obj = Model Screening(...Neural( state=0|1 )...)

**Descrizione:** Stima una o più variabili di risposta mediante una funzione flessibile delle variabili di input. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

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

### Partial Least Squares

**Sintassi:** obj = Model Screening(...Partial Least Squares( state=0|1 )...)

**Descrizione:** Stima un modello su una o più variabili di risposta usando fattori latenti. Ciò permette ai modelli di essere stimati quando le variabili esplicative sono altamente correlate o quando sono presenti più variabili esplicative che osservazioni.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	Partial Least Squares( 1 )
);

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

### Plot Actual by Predicted

**Sintassi:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Descrizione:** Sovrappone punti effettivi rispetto ai punti previsti di diverse stime di modelli.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 1 ),
	Plot Actual by Predicted( 1 )
);

```

### Precision Recall Curve

**Sintassi:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Descrizione:** Mostra o nasconde le curve di precisione-richiamo sovrapposte per tutte le stime del modello. Ci sono diagrammi separati per i set di training, validazione e test.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),

);
obj << Precision Recall Curve( 1 );

```

### Predictor Properties

**Sintassi:** obj &lt;&lt; Predictor Properties( state=0|1 )

**Descrizione:** Available if you hold down the shift button, for each platform called, shows information about supported interfaces.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Predictor Properties( 1 )
);

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde i profiler di previsione per ogni tipo di stima del modello. Questa opzione è disponibile solo per risposte continue.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Profiler( 1 )
);

```

### ROC Curve

**Sintassi:** obj &lt;&lt; ROC Curve( state=0|1 )

**Descrizione:** Mostra o nasconde le curve caratteristica operativa del ricevitore (ROC) per tutte le stime del modello. Ci sono diagrammi separati per i set di training, validazione e test.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	ROC Curve( 1 )
);

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintassi:** obj &lt;&lt; Redo ByGroup Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintassi:** obj &lt;&lt; Relaunch ByGroup

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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

### Remove Live Reports

**Sintassi:** obj = Model Screening(...Remove Live Reports( state=0|1 )...)

**Descrizione:** Rimuove i report delle singole piattaforme di modellizzazione dalla finestra dei report Screening del modello. È possibile utilizzare questa opzione per liberare memoria per ulteriori elaborazioni.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Remove Live Reports( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

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

### Repeated K Fold

**Sintassi:** obj = Model Screening(...Repeated K Fold( number=0 )...)

**Descrizione:** Specifica il numero di volte in cui viene ripetuto il processo di crossvalidation a K partizioni o crossvalidation nidificata. "0", per impostazione predefinita.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Repeated K Fold( 2 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Report

**Sintassi:** obj &lt;&lt; Report;Report( obj )

**Descrizione:** Restituisce un riferimento all&apos;oggetto del report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Report View( "Summary" );

```

### SVM NRow Limit

**Sintassi:** obj &lt;&lt; SVM NRow Limit( number=10000 )

**Descrizione:** Specifica il numero di righe al di sopra del quale le Support Vector Machines non vengono eseguite. "10000", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	SVM NRow Limit( 6000 )
);

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Folded Prediction Formula

**Sintassi:** obj &lt;&lt; Save Folded Prediction Formula

**Descrizione:** Salva nuove colonne nella tabella di dati originale. Le nuove colonne contengono una formula di previsione senza perdite (leak-free) per crossvalidation su k partizioni (k-fold). Per ogni riga, la formula evita di usare stime del modello che sono state sottoposte a training utilizzando quella riga.

### Save KFold Results Table

**Sintassi:** obj &lt;&lt; Save KFold Results Table

**Descrizione:** Salva le informazioni del report del riepilogo tra le partizioni in una nuova tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Save KFold Results Table
);

```

### Save Prediction Formulas

**Sintassi:** obj &lt;&lt; Save Prediction Formulas

**Descrizione:** Salva le formule di previsione nella tabella di dati.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);
obj << Select Fit( "Training", "Best" );
obj << Save Prediction Formulas;

```

### Save Results Table

**Sintassi:** obj &lt;&lt; Save Results Table

**Descrizione:** Salva le informazioni del report di validazione in una nuova tabella di dati. Se è presente un set di test, anche le informazioni del report dei test vengono salvate in una nuova tabella di dati.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Save Results Table
);

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Script Window;

```

### Select Fit

**Sintassi:** &lt;&lt;Select Fit( Training | Validation | Test | Summary | Clear All, Clear | Dominant | Best(&lt;number&gt;), | Largest(name,&lt;number&gt;) | Smallest(name,&lt;number&gt;) | Where(expression) )

**Descrizione:** Seleziona le stime in vari report in base a criteri specificati. Questa opzione è disponibile solo in JSL.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Select Fit( Validation, Largest( "RSquare", 2 ) );

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

### Set Probability Threshold

**Sintassi:** obj &lt;&lt; Set Probability Threshold( number=0.5 )

**Descrizione:** Specifica il numero di parametri al di sopra del quale le piattaforme di modellizzazione non vengono eseguite. "0.5", per impostazione predefinita.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 ),
	Set Probability Threshold( .2 )
);

```

### Set Random Seed

**Sintassi:** obj = Model Screening(...Set Random Seed( number )...)

**Descrizione:** Specifica un seme casuale per riprodurre i risultati per i futuri avvii della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 123454321 )
);

```

### Show Methods in Log

**Sintassi:** obj = Model Screening(...Show Methods in Log( state=0|1 )...)

**Descrizione:** Scrive un messaggio di avanzamento nel log ogni volta che si richiama una piattaforma di stima.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Log Methods( 1 )
);

```

### Show Profit

**Sintassi:** obj &lt;&lt; Show Profit( state=0|1 )

**Descrizione:** Mostra o nasconde il profitto atteso per ogni modello utilizzando la matrice del profitto specificata per i livelli di risposta.

**JMP Versione aggiunta:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
Column( "Y Binary" ) << Set Property(
	"Profit Matrix", {[1 - 1, -0.3333333 1, . .], {"Low", "High", "Undecided"}}
);
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Show Profit( 1 )
);

```

### Specify Profit Matrix

**Sintassi:** obj &lt;&lt; Specify Profit Matrix

**Descrizione:** Consente di specificare i profitti o i costi associati a decisioni di classificazione corrette o errate.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Model Screening(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Specify Profit Matrix( [0 -1, -0.6 0, . .], "Married", "Single", "Undecided" ),
	Show Profit( 1 )
);

```

### Support Vector Machines

**Sintassi:** obj = Model Screening(...Support Vector Machines( state=0|1 )...)

**Descrizione:** Prevede una risposta basata sui vettori di supporto nello spazio delle variabili X. Per impostazione predefinita l&apos;opzione è attivata.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

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

### Time Limit Each

**Sintassi:** obj = Model Screening(...Time Limit Each( number )...)

**Descrizione:** Specifica un limite di tempo in secondi per ogni stima. Per le piattaforme che supportano l&apos;arresto precoce, sono fornite le migliori stime fino a quel punto.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Time Limit Each( 1 )
);

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Use Two Way Splits for K Fold

**Sintassi:** obj = Model Screening(...Use Two Way Splits for K Fold( state=0|1 )...)

**Descrizione:** Uses only training and validation splits instead of training, validation, and test splits.

**JMP Versione aggiunta:** 19

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

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

### Window View

**Sintassi:** obj = Model Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### XGBoost

**Sintassi:** obj = Model Screening(...XGBoost( state=0|1 )...)&lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Richiama XGBoost per il boosting del gradiente se si dispone del relativo componente aggiuntivo. Questa opzione compare solo se è installato il componente aggiuntivo.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	XGBoost( 1 )
);

```

