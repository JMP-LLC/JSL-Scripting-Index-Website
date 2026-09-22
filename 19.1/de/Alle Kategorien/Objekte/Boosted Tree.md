# Boosted Tree



## Elementmeldungen

### Column Contributions

**Syntax:** obj &lt;&lt; Column Contributions( state=0|1 )

**Beschreibung:** Blendet einen Bericht mit jeder Eingabespalte und ihrem Beitrag zur Anpassung ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Column Contributions( 1 );

```

### Column Sampling Rate

**Syntax:** obj &lt;&lt; Column Sampling Rate( number )

**Beschreibung:** Gibt den Anteil von Vorhersagespalten für das Ziehen einer Stichprobe für jede Schicht im Baum an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Column Sampling Rate( 0.95 ),	Go);

```

### Decision Threshold

**Syntax:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Beschreibung:** Blendet die Verteilung der angepassten Wahrscheinlichkeiten und die Tabellen der beobachteten gegenüber den vorhergesagten Werten für jedes Modell ein oder aus. Sie können die Wahrscheinlichkeitsschwelle ändern, um zu untersuchen, wie sich unterschiedliche Schwellenwerte auf die Klassifikationsergebnisse auswirken.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Splits per Tree( 4 ),	Number of Layers( 171 ),	Learning Rate( 0.08 ),	Go);obj << Decision Threshold( 1 );

```

### Early Stopping

**Syntax:** Early Stopping( state=0|1 )

**Beschreibung:** Stoppt die Iteration vorzeitig, wenn zusätzliche Schichten die Validierungskenngrößen nicht verbessern. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Early Stopping( 1 ),	Go);

```

### Get Average Absolute Error Test

**Syntax:** obj &lt;&lt; Get Average Absolute Error Test

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

### Get Average Absolute Error Training

**Syntax:** obj &lt;&lt; Get Average Absolute Error Training

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

### Get Average Absolute Error Validation

**Syntax:** obj &lt;&lt; Get Average Absolute Error Validation

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

### Get Average Log Error Test

**Syntax:** obj &lt;&lt; Get Average Log Error Test

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Testdatensatz. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));avg = obj << Get Average Log Error Test;Show( avg );

```

### Get Average Log Error Training

**Syntax:** obj &lt;&lt; Get Average Log Error Training

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Trainingsdatensatz.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));avg = obj << Get Average Log Error Training;Show( avg );

```

### Get Average Log Error Validation

**Syntax:** obj &lt;&lt; Get Average Log Error Validation

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Validierungsdatensatz. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));avg = obj << Get Average Log Error Validation;Show( avg );

```

### Get Confusion Matrix Test

**Syntax:** obj &lt;&lt; Get Confusion Matrix Test

**Beschreibung:** Gibt die Konfusionsmatrix für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

### Get Confusion Matrix Training

**Syntax:** obj &lt;&lt; Get Confusion Matrix Training

**Beschreibung:** Gibt die Konfusionsmatrix für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

### Get Confusion Matrix Validation

**Syntax:** obj &lt;&lt; Get Confusion Matrix Validation

**Beschreibung:** Gibt die Konfusionsmatrix für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

### Get Confusion Rates Test

**Syntax:** obj &lt;&lt; Get Confusion Rates Test

**Beschreibung:** Gibt die Konfusionsraten für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

### Get Confusion Rates Training

**Syntax:** obj &lt;&lt; Get Confusion Rates Training

**Beschreibung:** Gibt die Konfusionsraten für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

### Get Confusion Rates Validation

**Syntax:** obj &lt;&lt; Get Confusion Rates Validation

**Beschreibung:** Gibt die Konfusionsraten für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

### Get Gen RSquare Test

**Syntax:** obj &lt;&lt; Get Gen RSquare Test

**Beschreibung:** Gibt das verallgemeinerte r² für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

### Get Gen RSquare Training

**Syntax:** obj &lt;&lt; Get Gen RSquare Training

**Beschreibung:** Gibt das verallgemeinerte r² für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

### Get Gen RSquare Validation

**Syntax:** obj &lt;&lt; Get Gen RSquare Validation

**Beschreibung:** Gibt das verallgemeinerte r² für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

### Get MM SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können, und gibt ihn im Logfenster zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get MM SAS Data Step;

```

### Get MM Tolerant SAS DATA Step

**Syntax:** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**Beschreibung:** Erstellt SAS-Code für Daten mit fehlenden Werten, den Sie im SAS Model Manager registrieren können, und gibt ihn im Logfenster zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get MM Tolerant SAS Data Step;

```

### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Measures;

```

### Get Microseconds

**Syntax:** obj &lt;&lt; Get Microseconds

**Beschreibung:** Gibt die Anzahl der Mikrosekunden zurück, die für die Durchführung der Analyse benötigt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);time = obj << Get Microseconds;Show( time );

```

### Get Misclassification Rate Test

**Syntax:** obj &lt;&lt; Get Misclassification Rate Test

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

### Get Misclassification Rate Training

**Syntax:** obj &lt;&lt; Get Misclassification Rate Training

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Method( "Decision Tree" ));obj << Split Best( 2 );rate = obj << Get Misclassification Rate Training;Show( rate );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Training;Show( rate );

```

### Get Misclassification Rate Validation

**Syntax:** obj &lt;&lt; Get Misclassification Rate Validation

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Method( "Decision Tree" ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Validation;Show( rate );

```

### Get Precision Recall Area Test

**Syntax:** obj &lt;&lt; Get Precision Recall Area Test

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Testsatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

### Get Precision Recall Area Training

**Syntax:** obj &lt;&lt; Get Precision Recall Area Training

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Trainingssatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

### Get Precision Recall Area Validation

**Syntax:** obj &lt;&lt; Get Precision Recall Area Validation

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Validierungssatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

### Get Prediction Formula

**Syntax:** obj &lt;&lt; Get Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer Vorhersageformelspalte und gibt sie zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Prediction Formula;

```

### Get RMS Error Test

**Syntax:** obj &lt;&lt; Get RMS Error Test

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung (RMSE) des Testsatzes zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Test;Show( rms );

```

### Get RMS Error Training

**Syntax:** obj &lt;&lt; Get RMS Error Training

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung  (RMSE) des Trainingssatzes zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Training;Show( rms );

```

### Get RMS Error Validation

**Syntax:** obj &lt;&lt; Get RMS Error Validation

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung (RMSE) des Validierungssatzes zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Validation;Show( rms );

```

### Get ROC Area Test

**Syntax:** obj &lt;&lt; Get ROC Area Test

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für die Testdaten zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

### Get ROC Area Training

**Syntax:** obj &lt;&lt; Get ROC Area Training

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für den Trainingsdatensatz zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

### Get ROC Area Validation

**Syntax:** obj &lt;&lt; Get ROC Area Validation

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für den Validierungsdatensatz zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

### Get RSquare Test

**Syntax:** obj &lt;&lt; Get RSquare Test

**Beschreibung:** Gibt r² für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Test;Show( r );

```

### Get RSquare Training

**Syntax:** obj &lt;&lt; Get RSquare Training

**Beschreibung:** Gibt r² für den Trainingssatz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Training;Show( r );

```

### Get RSquare Validation

**Syntax:** obj &lt;&lt; Get RSquare Validation

**Beschreibung:** Gibt r² für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Validation;Show( r );

```

### Get SAS DATA Step

**Syntax:** obj &lt;&lt; Get SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für die Daten zu erzeugen und gibt ihn im Logfenster zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get SAS Data Step;

```

### Get Seconds

**Syntax:** obj &lt;&lt; Get Seconds

**Beschreibung:** Gibt die Anzahl der Sekunden zurück, die für die Durchführung der Analyse benötigt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);time = obj << Get Seconds;Show( time );

```

### Get Tolerant Prediction Formula

**Syntax:** obj &lt;&lt; Get Tolerant Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer toleranten Vorhersageformelspalte und gibt es zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Tolerant Prediction Formula;

```

### Get Tolerant SAS DATA Step

**Syntax:** obj &lt;&lt; Get Tolerant SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für Daten zu erzeugen, die fehlende Werte enthalten, und gibt ihn im Logfenster zurück. Fehlenden Werten wird zufällig ein Zweig im Baum zugewiesen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get Tolerant SAS Data Step;

```

### Go

**Syntax:** obj &lt;&lt; Go

**Beschreibung:** Beginnt die Iterationen, nachdem alle Parameter festgelegt wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Informative Missing

**Syntax:** obj = Boosted Tree(...Informative Missing( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Bei kategorialen Variablen werden fehlende Werte als Kategorie behandelt. Bei stetigen Variablen werden fehlende Werte entweder als untere oder obere Werte behandelt, je nachdem, was besser angepasst werden kann. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );obj << Split Best( 1 );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt:Age[3] = .;obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Informative Missing( 0 ),	Split Best( 3 ));

```

### Learning Rate

**Syntax:** Learning Rate( fraction )

**Beschreibung:** Legt die Lernrate für den Schätzwert fest. Standardwert ist 0,1. Standardmäßig „.1“.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Learning Rate( 0.2 ),	Go);

```

### Lift Curve

**Syntax:** obj &lt;&lt; Lift Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Lift Curve( 1 );

```

### Make SAS DATA Step

**Syntax:** obj &lt;&lt; Make SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für die Daten zu erzeugen und gibt ihn im Skriptfenster zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Make SAS Data Step;

```

### Make Tolerant SAS DATA Step

**Syntax:** obj &lt;&lt; Make Tolerant SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für Daten zu erzeugen, die fehlende Werte enthalten, und gibt ihn im Skriptfenster zurück. Fehlenden Werten wird zufällig ein Zweig im Baum zugewiesen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Make Tolerant SAS Data Step;

```

### Maximum Depth

**Syntax:** obj &lt;&lt; Maximum Depth( number )

**Beschreibung:** Schränkt die Baumgröße nach Tiefe anstatt Anzahl von Knoten ein.

### Method

**Syntax:** Method( "Boosted Tree" ) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Methode zum Partitionieren der Daten fest. Standard ist Entscheidungsbaum.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Minimum Size Split

**Syntax:** Minimum Size Split( number )

**Beschreibung:** Legt die minimale Anzahl von Beobachtungen für Teilungen für den Schätzwert fest. Standardwert ist 5.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Minimum Size Split( 10 ),	Go);

```

### Multithreading

**Syntax:** Multithreading( state=0|1 )

**Beschreibung:** Teilt die Berechnungen auf die verfügbaren Threads auf dem Rechner auf. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Split Best( 2 ));

```

### Number of Layers

**Syntax:** Number of Layers( number )

**Beschreibung:** Legt die Anzahl der Schichten für den Schätzwert fest. Standardwert ist 50. Standardmäßig „100“.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Number of Layers( 20 ),	Go);

```

### Ordinal Restricts Order

**Syntax:** obj = Boosted Tree(...Ordinal Restricts Order( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Für ordinale Spalten werden nur Teilungen berücksichtigt, die die Reihenfolge beibehalten. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );obj << Split Best( 3 );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Ordinal Restricts Order( 1 ),	Split Best( 2 ));

```

### Overfit Penalty

**Syntax:** Overfit Penalty( fraction )

**Beschreibung:** Legt die Strafe für Overfitting fest, die eine systematischen Abweichung einführt, um die Wahrscheinlichkeiten für Modelle mit einer kategorialen Zielgröße größer als 0 werden zu lassen. Standardwert ist 0,0001.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Overfit Penalty( 0.0005 ),	Go);

```

### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Trainingsdaten mit den Vorhersagewerten auf der X-Achse und den beobachteten Daten auf der Y-Achse ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Plot Actual by Predicted( 1 );

```

### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Precision Recall Curve( 1 );

```

### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Profiler( 1 );

```

### Publish Prediction Formula

**Syntax:** obj &lt;&lt; Publish Prediction Formula

**Beschreibung:** Erstellt Vorhersageformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Syntax:** obj &lt;&lt; Publish Tolerant Prediction Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die selbst bei fehlenden Werten eine Vorhersage liefert, und veröffentlicht sie als Formelspaltenskript im Formeldepot.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Publish Tolerant Prediction Formula;

```

### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität). Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << ROC Curve( 1 );

```

### Row Sampling Rate

**Syntax:** obj &lt;&lt; Row Sampling Rate( number )

**Beschreibung:** Gibt den Anteil von Trainingszeilen für das Ziehen einer Stichprobe für jede Schicht im Baum an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Row Sampling Rate( 0.95 ),	Go);

```

### Save Cumulative Details

**Syntax:** obj &lt;&lt; Save Cumulative Details

**Beschreibung:** Speichert Validierungs-r² zusammen mit der Baumnummer in einer neuen Datentabelle. Nur verfügbar bei Verwendung eines Validierungssatzes.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Cumulative Details;

```

### Save Offset Estimates

**Syntax:** obj &lt;&lt; Save Offset Estimates

**Beschreibung:** Speichert die Offset-Schätzer in einer neuen Spalte in der Datentabelle. Nur verfügbar bei kategorialen Zielgrößen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Offset Estimates;

```

### Save Predicteds

**Syntax:** obj &lt;&lt; Save Predicteds

**Beschreibung:** Speichert die Vorhersagewerte in einer neuen Spalte in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Predicteds;

```

### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Prediction Formula;

```

### Save Residuals

**Syntax:** obj &lt;&lt; Save Residuals

**Beschreibung:** Speichert die Residuen in einer neuen Spalte in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Residuals;

```

### Save Tolerant Prediction Formula

**Syntax:** obj &lt;&lt; Save Tolerant Prediction Formula

**Beschreibung:** Formel speichern, die auch bei fehlenden Werten in einer neuen Spalte in der Datentabelle eine Vorhersage liefert.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Tolerant Prediction Formula;

```

### Save Tree Details

**Syntax:** obj &lt;&lt; Save Tree Details

**Beschreibung:** Speichert Schicht, Teilung, Beschriftung und Schätzwert für jede Schicht/Teilungs-Kombination in einer neuen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Tree Details;

```

### Set Random Seed

**Syntax:** obj &lt;&lt; Set Random Seed( number )

**Beschreibung:** Gibt einen zufälligen Startwert an, um die Ergebnisse für künftige Aufrufe der Plattform zu reproduzieren.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

### Show Trees

**Syntax:** obj &lt;&lt; Show Trees( "Keine"|"Namen anzeigen"|"Namen und Kategorien anzeigen"|"Namen, Kategorien und Schätzer anzeigen" )

**Beschreibung:** Zeigt eine Liste der Bäume in jeder Schicht an, entweder nur mit Namen, mit Namen und Kategorien oder mit Namen, Kategorien und Schätzwerten an jedem Knoten.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Show Trees( Show names categories );(obj << Report)["Tree Views"] << Close( 0 );(obj << Report)["Layer4"] << Close( 0 );

```

### Specify Profit Matrix

**Syntax:** obj &lt;&lt; Specify Profit Matrix

**Beschreibung:** Ermöglicht Ihnen, Gewinne oder Kosten in Zusammenhang mit korrekten oder inkorrekten Klassifikationsentscheidungen anzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Specify Profit Matrix( [1 -1, -1 1, . .], "0", "1", "Undecided" ),	Go);

```

### Splits per Tree

**Syntax:** Splits Per Tree( number )

**Beschreibung:** Legt die Anzahl von Teilungen pro Baum für den Schätzwert fest. Standardwert ist 3. Standardmäßig „3“.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Splits Per Tree( 2 ),	Go);

```

### Tuning Design Table

**Syntax:** Tuning Design Table( "table name" )

**Beschreibung:** Eine Tabelle mit Tuning-Parametern für die Ausführung. Unterstützt werden: Teilungen je Baum, Lernrate, Anteil gezogener Zeilen, Anteil gezogener Spalten, Anzahl der Schichten, minimale Anzahl für Teilung

### Use Excluded Rows for Validation

**Syntax:** obj = Boosted Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**Beschreibung:** Verwendet die ausgeschlossenen Zeilen in der Datentabelle, um einen Validierungssatz zu erstellen. Diese Option erscheint im Startfenster nur, wenn Sie das Standard-JMP verwenden und es ausgeschlossene Zeilen gibt.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));obj << Split Best( 5 );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Use Excluded Rows for Validation( 1 ),	Split Best( 2 ));

```

### Validation Portion

**Syntax:** obj = Boosted Tree(...Validation Portion( fraction=0 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Bildet einen Validierungssatz durch zufällige Auswahl von Zeilen, wobei jede Zeile die Wahrscheinlichkeit p (Anteil) hat, ausgewählt zu werden. Standardmäßig „0“.

**Boosted-Tree-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :country, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**Bootstrap-Forest-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

#### Partitionsbeispiel

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));obj << Split Best( 2 );

```

**Uplift-Beispiel**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation Portion( 0.2 ),	Go);

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Timing;Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Relaunch Analysis;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Syntax:** obj &lt;&lt; Report; Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Report View( "Summary" );

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Freq( :_freqcol ),	Go);

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Weight( :_weightcol ),	Go);

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

## Zugehörige Konstruktoren

### Boosted Tree

**Syntax:** Boosted Tree (Y( column ), X( columns ))

**Beschreibung:** Erzeugt ein Vorhersagemodell durch Erstellung eines großen, additiven Entscheidungsbaums, der eine Folge von kleineren Entscheidungsbäumen ist. Jeder der Bäume wird auf die Residuen des vorherigen Baums angepasst.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

