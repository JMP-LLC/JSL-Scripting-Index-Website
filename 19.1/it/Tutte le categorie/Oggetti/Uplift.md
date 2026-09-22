# Uplift



## Colonne

### By

**Sintassi:** obj &lt;&lt; By( column(s) )

**Descrizione:** Esegue un&apos;analisi separata per ogni livello della colonna specificata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Sintassi:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

### Freq

**Sintassi:** obj &lt;&lt; Freq( column )

**Descrizione:** Specifica una colonna i cui valori assegnano una frequenza a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	Freq( :_freqcol ));

```

### Response

**Sintassi:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

### Treatment

**Sintassi:** obj &lt;&lt; Treatment( column )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

### Validation

**Sintassi:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

### Weight

**Sintassi:** obj &lt;&lt; Weight( column )

**Descrizione:** Specifica una colonna i cui valori assegnano un peso a ogni riga per l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	Weight( :_weightcol ));

```

### X

**Sintassi:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

### Y

**Sintassi:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));

```

## Costruttori associati

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

#### Cerca per nome

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preimpostazione anonima

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### Ricerca all'interno delle cartelle

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Broadcast

**Sintassi:** obj &lt;&lt; Broadcast(message)

**Descrizione:** Diffonde un messaggio a una piattaforma. Se i risultati di restituzione dei singoli oggetti sono tabelle, esse sono concatenate se possibile e il formato finale è identico al risultato dell&apos;opzione Salva tabella combinata in un riquadro della tabella o il risultato dell&apos;opzione Concatena utilizzando una colonna di origine. Oltre a quelli, i risultati sono memorizzati in un elenco e restituiti.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Color Points

**Sintassi:** obj &lt;&lt; Color Points

**Descrizione:** Colora i punti in base alla loro classificazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Color Points;

```

### Column Contributions

**Sintassi:** obj &lt;&lt; Column Contributions( state=0|1 )

**Descrizione:** Mostra o nasconde un report con ciascuna colonna di input e il corrispondente contributo alla stima.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Column Contributions( 1 );

```

### Column Switcher

**Sintassi:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descrizione:** Aggiunge un pannello di controllo per modificare le variabili della piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintassi:** obj &lt;&lt; Copy ByGroup Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintassi:** obj &lt;&lt; Copy Script

**Descrizione:** Crea uno script JSL per generare questa analisi e lo inserisce negli Appunti.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Copy Script;

```

### Data Table Window

**Sintassi:** obj &lt;&lt; Data Table Window

**Descrizione:** Sposta in primo piano la finestra della tabella di dati per questa analisi.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Data Table Window;

```

### Get Average Absolute Error Test

**Sintassi:** obj &lt;&lt; Get Average Absolute Error Test

**Descrizione:** Restituisce la statistica scarto medio ass per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

### Get Average Absolute Error Training

**Sintassi:** obj &lt;&lt; Get Average Absolute Error Training

**Descrizione:** Restituisce la statistica scarto medio ass per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

### Get Average Absolute Error Validation

**Sintassi:** obj &lt;&lt; Get Average Absolute Error Validation

**Descrizione:** Restituisce la statistica scarto medio ass per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

### Get Average Log Error Test

**Sintassi:** obj &lt;&lt; Get Average Log Error Test

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));avg = obj << Get Average Log Error Test;Show( avg );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

### Get Average Log Error Training

**Sintassi:** obj &lt;&lt; Get Average Log Error Training

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));avg = obj << Get Average Log Error Training;Show( avg );

```

### Get Average Log Error Validation

**Sintassi:** obj &lt;&lt; Get Average Log Error Validation

**Descrizione:** Restituisce la media di -log(p), dove p è uguale alla probabilità attribuita dal modello che la risposta si sia effettivamente verificata, per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));avg = obj << Get Average Log Error Validation;Show( avg );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

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

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Confusion Matrix Test

**Sintassi:** obj &lt;&lt; Get Confusion Matrix Test

**Descrizione:** Restituisce la matrice di confusione per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

### Get Confusion Matrix Training

**Sintassi:** obj &lt;&lt; Get Confusion Matrix Training

**Descrizione:** Restituisce la matrice di confusione per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

### Get Confusion Matrix Validation

**Sintassi:** obj &lt;&lt; Get Confusion Matrix Validation

**Descrizione:** Restituisce la matrice di confusione per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

### Get Confusion Rates Test

**Sintassi:** obj &lt;&lt; Get Confusion Rates Test

**Descrizione:** Restituisce i tassi di confusione per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

### Get Confusion Rates Training

**Sintassi:** obj &lt;&lt; Get Confusion Rates Training

**Descrizione:** Restituisce i tassi di confusione per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

### Get Confusion Rates Validation

**Sintassi:** obj &lt;&lt; Get Confusion Rates Validation

**Descrizione:** Restituisce i tassi di confusione per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

### Get Container

**Sintassi:** obj &lt;&lt; Get Container

**Descrizione:** Restituisce un riferimento al riquadro contenitore che racchiude il contenuto dell&apos;oggetto.

#### Generale

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Piattaforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintassi:** obj &lt;&lt; Get Data Table

**Descrizione:** Restituisce un riferimento alla tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Difference Formula

**Sintassi:** obj &lt;&lt; Get Difference Formula

**Descrizione:** Costruisce uno script per creare una formula della differenza e la restituisce.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Get Difference Formula;

```

### Get Gen RSquare Test

**Sintassi:** obj &lt;&lt; Get Gen RSquare Test

**Descrizione:** Restituisce l&apos;R-quadro generalizzato per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

### Get Gen RSquare Training

**Sintassi:** obj &lt;&lt; Get Gen RSquare Training

**Descrizione:** Restituisce l&apos;R-quadro generalizzato per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

### Get Gen RSquare Validation

**Sintassi:** obj &lt;&lt; Get Gen RSquare Validation

**Descrizione:** Restituisce l&apos;R-quadro generalizzato per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

### Get Group Platform

**Sintassi:** obj &lt;&lt; Get Group Platform

**Descrizione:** Restituisce l&apos;oggetto Raggruppa piattaforma se la piattaforma fa parte di un gruppo. In caso contrario, restituisce Vuoto().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Measures

**Sintassi:** obj &lt;&lt; Get Measures

**Descrizione:** Restituisce misure di stima sintetiche del modello.

**JMP Versione aggiunta:** 16

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Get Measures;

```

### Get Microseconds

**Sintassi:** obj &lt;&lt; Get Microseconds

**Descrizione:** Restituisce il numero di microsecondi impiegati per completare l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));time = obj << Get Microseconds;Show( time );

```

### Get Misclassification Rate Test

**Sintassi:** obj &lt;&lt; Get Misclassification Rate Test

**Descrizione:** Restituisce gli errori di classificazione per il set di test. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

### Get Misclassification Rate Training

**Sintassi:** obj &lt;&lt; Get Misclassification Rate Training

**Descrizione:** Restituisce gli errori di classificazione per il set di training.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Training;Show( rate );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Method( "Decision Tree" ));obj << Split Best( 2 );rate = obj << Get Misclassification Rate Training;Show( rate );

```

### Get Misclassification Rate Validation

**Sintassi:** obj &lt;&lt; Get Misclassification Rate Validation

**Descrizione:** Restituisce gli errori di classificazione per il set di validazione. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Method( "Decision Tree" ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

### Get Precision Recall Area Test

**Sintassi:** obj &lt;&lt; Get Precision Recall Area Test

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di test. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

### Get Precision Recall Area Training

**Sintassi:** obj &lt;&lt; Get Precision Recall Area Training

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di training. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

### Get Precision Recall Area Validation

**Sintassi:** obj &lt;&lt; Get Precision Recall Area Validation

**Descrizione:** Restituisce l&apos;area sotto la curva di precisione-richiamo per il set di validazione. La curva di precisione-richiamo deve essere visualizzata prima di calcolare l&apos;area. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

### Get Prediction Formula

**Sintassi:** obj &lt;&lt; Get Prediction Formula

**Descrizione:** Costruisce uno script per creare una colonna con la formula di previsione e la restituisce.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Get Prediction Formula;

```

### Get RMS Error Test

**Sintassi:** obj &lt;&lt; Get RMS Error Test

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di test. Disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));rms = obj << Get RMS Error Test;Show( rms );

```

### Get RMS Error Training

**Sintassi:** obj &lt;&lt; Get RMS Error Training

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di training.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));rms = obj << Get RMS Error Training;Show( rms );

```

### Get RMS Error Validation

**Sintassi:** obj &lt;&lt; Get RMS Error Validation

**Descrizione:** Restituisce la radice quadrata della media quadratica degli errori di validazione. Disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));rms = obj << Get RMS Error Validation;Show( rms );

```

### Get ROC Area Test

**Sintassi:** obj &lt;&lt; Get ROC Area Test

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per i dati del test. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

### Get ROC Area Training

**Sintassi:** obj &lt;&lt; Get ROC Area Training

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per il data set di training. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

### Get ROC Area Validation

**Sintassi:** obj &lt;&lt; Get ROC Area Validation

**Descrizione:** Restituisce l&apos;area sotto la curva caratteristica operativa del ricevitore (ROC) per il data set di validazione. È necessario che la curva ROC venga visualizzata prima di calcolare l&apos;area. Disponibile solo se si utilizza un set di validazione.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

### Get RSquare Test

**Sintassi:** obj &lt;&lt; Get RSquare Test

**Descrizione:** Restituisce l&apos;R-quadro per il set di test. Disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));r = obj << Get RSquare Test;Show( r );

```

### Get RSquare Training

**Sintassi:** obj &lt;&lt; Get RSquare Training

**Descrizione:** Restituisce l&apos;R-quadro per il set di training.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));r = obj << Get RSquare Training;Show( r );

```

### Get RSquare Validation

**Sintassi:** obj &lt;&lt; Get RSquare Validation

**Descrizione:** Restituisce l&apos;R-quadro per il set di validazione. Disponibile solo se si utilizza un set di validazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));r = obj << Get RSquare Validation;Show( r );

```

### Get Script

**Sintassi:** obj &lt;&lt; Get Script

**Descrizione:** Crea uno script (JSL) per generare questa analisi e la restituisce come espressione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintassi:** obj &lt;&lt; Get Script With Data Table

**Descrizione:** Crea uno script (JSL) per generare questa analisi facendo specifico riferimento a questa tabella di dati e la restituisce come espressione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));t = obj << Get Script With Data Table;Show( t );

```

### Get Seconds

**Sintassi:** obj &lt;&lt; Get Seconds

**Descrizione:** Restituisce il numero di secondi impiegati per completare l&apos;analisi.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));time = obj << Get Seconds;Show( time );

```

### Get Timing

**Sintassi:** obj &lt;&lt; Get Timing

**Descrizione:** Determina il tempo di avvio della piattaforma.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));t = obj << Get Timing;Show( t );

```

### Get Tolerant Prediction Formula

**Sintassi:** obj &lt;&lt; Get Tolerant Prediction Formula

**Descrizione:** Costruisce uno script per creare una colonna con la formula di previsione tollerante e la restituisce nella finestra Log.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Get Tolerant Prediction Formula;

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

### Go

**Sintassi:** obj &lt;&lt; Go

**Descrizione:** Inizia le iterazioni dopo che è stata selezionata l&apos;opzione k partizioni di crossvalidation. Se si utilizza JMP Professional Edition, Go inizia le iterazioni dopo che è stata specificata una colonna di validazione.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << K Fold Crossvalidation( 5 );obj << Go;

```

### Ignore Platform Preferences

**Sintassi:** Ignore Platform Preferences( state=0|1 )

**Descrizione:** Ignora le impostazioni correnti delle preferenze della piattaforma. Il messaggio viene ignorato quando viene inviato alla piattaforma dopo la creazione.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Informative Missing

**Sintassi:** obj = Uplift(...Informative Missing( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Per variabili categoriche, tratta mancante come una categoria. Per variabili continue, tratta mancante come basso o alto, a seconda della stima migliore. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt:Age[3] = .;obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Informative Missing( 0 ),	Split Best( 3 ));

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );obj << Split Best( 1 );

```

### Leaf Report

**Sintassi:** obj &lt;&lt; Leaf Report( state=0|1 )

**Descrizione:** Mostra o nasconde un report con la media e il conteggio (risposta continua) o con il tasso di risposta e il conteggio (risposta categorica) dei nodi foglia.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Show Tree( 0 );obj << Leaf Report( 1 );

```

### Local Data Filter

**Sintassi:** obj &lt;&lt; Local Data Filter

**Descrizione:** Filtra dati in specifici gruppi o range, ma localmente in questa piattaforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### Lock Columns

**Sintassi:** obj &lt;&lt; Lock Columns( state=0|1, columns )

**Descrizione:** Esclude le colonne specificate dall&apos;utilizzo per le partizioni.

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Lock Columns( 1, :Age, :Hair Color );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Lock Columns( 1, :age, :size );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

### Messaggi degli elementi condivisi

### Minimum Size Split

**Sintassi:** obj &lt;&lt; Minimum Size Split( number )

**Descrizione:** Imposta la dimensione minima del gruppo quando si decide se dividere un gruppo o no.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Minimum Size Split( 15 );obj << Split Best( 4 );

```

### Multithreading

**Sintassi:** Multithreading( state=0|1 )

**Descrizione:** Suddivide i calcoli fra i thread disponibili del computer. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Split Best( 2 ));

```

### New Preset

**Sintassi:** obj = New Preset()

**Descrizione:** Crea una preimpostazione anonima che rappresenta le opzioni e le personalizzazioni applicate all&apos;oggetto. Questo oggetto può essere passato a Apply Preset per copiare le impostazioni in un altro oggetto dello stesso tipo.

**JMP Versione aggiunta:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Ordinal Restricts Order

**Sintassi:** obj = Uplift(...Ordinal Restricts Order( state=0|1 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Per le colonne ordinali, considera solo le partizioni che mantengono l&apos;ordine. Per impostazione predefinita l&apos;opzione è attivata.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Ordinal Restricts Order( 1 ),	Split Best( 2 ));

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );obj << Split Best( 3 );

```

### Paste Local Data Filter

**Sintassi:** obj &lt;&lt; Paste Local Data Filter

**Descrizione:** Applicare il filtro sui dati locali dagli Appunti al report corrente.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Plot Actual by Predicted

**Sintassi:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico che utilizza i dati di training, con i valori previsti sull&apos;asse X e i valori effettivi sull&apos;asse Y.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));obj << Plot Actual By Predicted;

```

### Profiler

**Sintassi:** obj &lt;&lt; Profiler( state=0|1 )

**Descrizione:** Mostra o nasconde il profiler di previsione, che viene utilizzato per esplorare graficamente l&apos;equazione di previsione sezionandola fattore per fattore. Il profiler di previsione contiene funzioni di ottimizzazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Profiler( 1 );

```

### Prune Worst

**Sintassi:** obj &lt;&lt; Prune Worst

**Descrizione:** Rimuove la partizione terminale che ha la minore capacità di discriminazione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Prune Worst;Wait( .5 );obj << Prune Worst;

```

### Publish Difference Formula

**Sintassi:** obj &lt;&lt; Publish Difference Formula

**Descrizione:** Crea una formula della differenza e la pubblica come script di colonna della formula nel depot delle formule

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Publish Difference Formula;

```

### Publish Prediction Formula

**Sintassi:** obj &lt;&lt; Publish Prediction Formula

**Descrizione:** Crea formule di previsione e le salva come script di colonne della formula nella piattaforma Depot delle formule.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Sintassi:** obj &lt;&lt; Publish Tolerant Prediction Formula

**Descrizione:** Crea una formula di previsione in grado di prevedere anche in presenza di valori mancanti e la pubblica come script di colonna della formula nel depot delle formule.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Publish Tolerant Prediction Formula;

```

### Redo Analysis

**Sintassi:** obj &lt;&lt; Redo Analysis

**Descrizione:** Ripete questa stessa analisi in una nuova finestra. L&apos;analisi sarà differente se i dati sono stati modificati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintassi:** obj &lt;&lt; Relaunch Analysis

**Descrizione:** Apre la finestra di avvio della piattaforma e richiama le impostazioni utilizzate per creare il report.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintassi:** obj &lt;&lt; Report View( "Completo"|"Riepilogo" )

**Descrizione:** La visualizzazione Report determina il livello di dettaglio visibile in un report della piattaforma. Full mostra tutti i dettagli mentre Summary mostra solo contenuti selezionati, in base alla piattaforma. Per un comportamento personalizzato, i riquadri di visualizzazione supportano un messaggio <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintassi:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e salvarla come proprietà della tabella nella tabella di dati. È possibile specificare un nome per lo script. L&apos;opzione Append Suffix aggiunge un suffisso numerico al nome dello script, che differenzia lo script da uno script esistente con lo stesso nome. L&apos;opzione Prompt richiede all&apos;utente di specificare un nome di script. L&apos;opzione Replace sostituisce uno script esistente con lo stesso nome.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintassi:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Difference

**Sintassi:** obj &lt;&lt; Save Difference

**Descrizione:** Salva la differenza di trattamento prevista.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Difference;

```

### Save Difference Formula

**Sintassi:** obj &lt;&lt; Save Difference Formula

**Descrizione:** Salva una colonna con formula con la differenza di trattamento prevista.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Difference Formula;

```

### Save Leaf Label Formula

**Sintassi:** obj &lt;&lt; Save Leaf Label Formula

**Descrizione:** Salva la formula delle etichette di foglia in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Leaf Label Formula;

```

### Save Leaf Labels

**Sintassi:** obj &lt;&lt; Save Leaf Labels

**Descrizione:** Salva le etichette di foglia in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Leaf Labels;

```

### Save Leaf Number Formula

**Sintassi:** obj &lt;&lt; Save Leaf Number Formula

**Descrizione:** Salva la formula dei numeri di foglia in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Leaf Number Formula;

```

### Save Leaf Numbers

**Sintassi:** obj &lt;&lt; Save Leaf Numbers

**Descrizione:** Salva i numeri di foglia in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Leaf Numbers;

```

### Save Predicteds

**Sintassi:** obj &lt;&lt; Save Predicteds

**Descrizione:** Salva i valori previsti in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Predicteds;

```

### Save Prediction Formula

**Sintassi:** obj &lt;&lt; Save Prediction Formula

**Descrizione:** Salva la formula di previsione in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Prediction Formula;

```

### Save Residuals

**Sintassi:** obj &lt;&lt; Save Residuals

**Descrizione:** Salva i residui in una nuova colonna nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Residuals;

```

### Save Script for All Objects

**Sintassi:** obj &lt;&lt; Save Script for All Objects

**Descrizione:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintassi:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descrizione:** Salva uno script per tutti gli oggetti del report nella tabella di dati corrente. Questa opzione è utile quando sono presenti più report nella finestra. Lo script prende il nome dalla prima piattaforma, a meno che non si specifichi il nome dello script tra apici.

**Esempio 1**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Esempio 2**

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintassi:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descrizione:** Crea uno script JSL per generare questa analisi e lo salva come una proprietà di tabella nella tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintassi:** obj &lt;&lt; Save Script to Journal

**Descrizione:** Crea uno script JSL per generare questa analisi e aggiunge un pulsante con lo script al journal.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintassi:** obj &lt;&lt; Save Script to Report

**Descrizione:** Crea uno script JSL per generare questa analisi e lo mostra nel report. Utile per avere una copia stampata di quanto è stato fatto.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintassi:** obj &lt;&lt; Save Script to Script Window

**Descrizione:** Crea uno script JSL per generare questa analisi e lo aggiunge alla finestra di testo dello script corrente.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Script to Script Window;

```

### Save Tolerant Prediction Formula

**Sintassi:** obj &lt;&lt; Save Tolerant Prediction Formula

**Descrizione:** Salva una formula di previsione valida anche in presenza di valori mancanti in una nuova colonna della tabella di dati.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Save Tolerant Prediction Formula;

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

### Set Random Seed

**Sintassi:** obj &lt;&lt; Set Random Seed( number )

**Descrizione:** Specifica un seme casuale per riprodurre i risultati per i futuri avvii della piattaforma.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

### Show Fit Details

**Sintassi:** obj &lt;&lt; Show Fit Details( state=0|1 )

**Descrizione:** Mostra/Nasconde un report con la definizione di tutte le misure, i tassi di errori di classificazione e le matrici di confusione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Show Tree( 0 );obj << Show Fit Details( 1 );

```

### Show Graph

**Sintassi:** obj &lt;&lt; Show Graph( state=0|1 )

**Descrizione:** Mostra o nasconde il grafico di partizione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << ShowGraph( 0 );Wait( .5 );obj << ShowGraph( 1 );

```

### Show Points

**Sintassi:** obj &lt;&lt; Show Points( state=0|1 )

**Descrizione:** Mostra i punti (1 o attivo) oppure mostra riquadri a colori (0 o inattivo) nel grafico di partizione. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << ShowPoints( 0 );Wait( .5 );obj << ShowPoints( 1 );

```

### Show Split Candidates

**Sintassi:** obj &lt;&lt; Show Split Candidates( state=0|1 )

**Descrizione:** Mostra o nasconde il report dei candidati nelle partizioni terminali. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Show Split Candidates( 1 );(obj << Report)["Candidates"] << Close( 0 ) << select;

```

### Show Split Stats

**Sintassi:** obj &lt;&lt; Show Split Stats( state=0|1 )

**Descrizione:** Mostra o nasconde il conteggio e le statistiche di partizione. Le statistiche mostrate comprendono il G² o la media e la deviazione standard. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Show Split Stats( 0 );Wait( .5 );obj << Show Split Stats( 1 );

```

### Show Tree

**Sintassi:** obj &lt;&lt; Show Tree( state=0|1 )

**Descrizione:** Mostra o nasconde la struttura ad albero con le informazioni sulle partizioni. Per impostazione predefinita l&apos;opzione è attivata.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << ShowTree( 1 );

```

### Small Tree View

**Sintassi:** obj &lt;&lt; Small Tree View( state=0|1 )

**Descrizione:** Mostra o nasconde una versione ridotta dell&apos;albero delle partizioni a destra del grafico di partizione.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Small Tree View( 1 );

```

### Sort Split Candidates

**Sintassi:** obj &lt;&lt; Sort Split Candidates( state=0|1 )

**Descrizione:** Ordina i candidati in base alla significatività.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));(obj << Report)["Candidates"] << Close( 0 ) << select;Wait( 1 );obj << Sort Split Candidates;

```

### Split Best

**Sintassi:** obj &lt;&lt; Split Best( &lt;number of splits&gt; )

**Descrizione:** Divide l&apos;albero nel punto di partizione ottimale.

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best;Wait( 1 );obj << Split Best( 2 );

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best;Wait( .5 );obj << Split Best( 2 );

```

### Split History

**Sintassi:** obj &lt;&lt; Split History( state=0|1 )

**Descrizione:** Mostra o nasconde un grafico che visualizza ciascuna partizione sull&apos;asse X e il corrispondente valore R² per il modello sull&apos;asse Y.

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Split History;

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Split History;

```

### Sync to Data Table Changes

**Sintassi:** obj &lt;&lt; Sync to Data Table Changes

**Descrizione:** Sincronizza con l&apos;esclusione e le modifiche ai dati effettuate.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintassi:** obj &lt;&lt; Title( "new title" )

**Descrizione:** Imposta il titolo della piattaforma.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));obj << Title( "My Platform" );

```

### Top Report

**Sintassi:** obj &lt;&lt; Top Report

**Descrizione:** Restituisce un riferimento al nodo principale nel report.

```jsl

dt = Open( "$Sample_Data/Hair Care Product.jmp" );obj = Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 3 ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintassi:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descrizione:** Crea una colonna di trasformazione nel contesto locale di un oggetto, di solito una piattaforma. La colonna di trasformazione è attiva solo per la durata della piattaforma.

**JMP Versione aggiunta:** 16

<b>Elemento Finestra di dialogo di avvio: Sì</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### Uplift Graph

**Sintassi:** obj &lt;&lt; Uplift Graph( state=0|1 )

**Descrizione:** Mostra incremento (uplift) tra foglie terminali ordinate.

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best( 2 );obj << Uplift Graph;

```

### Use Excluded Rows for Validation

**Sintassi:** obj = Uplift(...Use Excluded Rows for Validation( state=0|1 )...)

**Descrizione:** Utilizza le righe escluse nella tabella di dati per creare un set di validazione. Questa opzione compare nella finestra di avvio solo se si utilizza JMP standard e sono presenti righe escluse.

**JMP Versione aggiunta:** 15

<b>Elemento Finestra di dialogo di avvio: Sì</b>

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Use Excluded Rows for Validation( 1 ),	Split Best( 2 ));

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));obj << Split Best( 5 );

```

### Validation Portion

**Sintassi:** obj = Uplift(...Validation Portion( fraction=0 )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Crea un set di validazione selezionando righe in modo casuale, ove ciascuna riga ha probabilità p (frazione) di essere selezionata. "0", per impostazione predefinita.

**Esempio di albero boosted**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :country, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**Esempio di foresta di bootstrap**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**Esempio di incremento (uplift)**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation Portion( 0.2 ),	Go);

```

**Esempio di partizione**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));obj << Split Best( 2 );

```

### View Web XML

**Sintassi:** obj &lt;&lt; View Web XML

**Descrizione:** Restituisce il codice XML utilizzato per creare il report HTML interattivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintassi:** obj = Uplift(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento Finestra di dialogo di avvio: Sì&lt;/b&gt;

**Descrizione:** Impostare il tipo di finestra da creare per il report. Per impostazione predefinita verrà creata una finestra di report Visible. Una finestra Invisible non comparirà sullo schermo, ma è individuabile da funzioni come Window(). Una finestra Private risponde alla maggior parte dei messaggi della finestra, ma non è individuabile e deve essere indirizzata attraverso l&apos;oggetto report

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

