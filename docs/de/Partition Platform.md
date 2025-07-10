# Partition Platform



## Decision Tree

### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

**Anonyme Voreinstellung**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**In Ordner(n) suchen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Syntax:** obj << By( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );

```

### Color Points

**Syntax:** obj << Color Points

**Beschreibung:** Markiert die Punkte farblich entsprechend ihrer Klassifikation.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Color Points;

```

### Column Contributions

**Syntax:** obj << Column Contributions( state=0|1 )

**Beschreibung:** Blendet einen Bericht mit jeder Eingabespalte und ihrem Beitrag zur Anpassung ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Column Contributions( 1 );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Data Table Window;

```

### Decision Threshold

**Syntax:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Beschreibung:** Blendet die Verteilung der angepassten Wahrscheinlichkeiten und die Tabellen der beobachteten gegenüber den vorhergesagten Werten für jedes Modell ein oder aus. Sie können die Wahrscheinlichkeitsschwelle ändern, um zu untersuchen, wie sich unterschiedliche Schwellenwerte auf die Klassifikationsergebnisse auswirken.

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Decision Threshold( 1 );

```

### Decision Tree

**Syntax:** Partition(Y( column ), X( columns ), Method( "Decision Tree" ))

**Beschreibung:** Rekursive Partitionierung der Daten zur Vorhersage einer Zielgröße. Wird auch Klassifikations- und Regressionsbaum (CART) genannt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Factor

**Syntax:** obj << Factor( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Freq

**Syntax:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Freq( _freqcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Freq( _freqcol )
);
obj << Split Best( 2 );

```

### Get Average Absolute Error Test

**Syntax:** obj << Get Average Absolute Error Test

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

### Get Average Absolute Error Training

**Syntax:** obj << Get Average Absolute Error Training

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

### Get Average Absolute Error Validation

**Syntax:** obj << Get Average Absolute Error Validation

**Beschreibung:** Gibt die statistische Kenngröße Mittelwert Abs. Abw. für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

### Get Average Log Error Test

**Syntax:** obj << Get Average Log Error Test

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Testdatensatz. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

### Get Average Log Error Training

**Syntax:** obj << Get Average Log Error Training

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Trainingsdatensatz.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

### Get Average Log Error Validation

**Syntax:** obj << Get Average Log Error Validation

**Beschreibung:** Gibt den Durchschnitt von -log(p) zurück. Dabei entspricht p der vom Modell zugeordneten Wahrscheinlichkeit für die tatsächlich aufgetretene Zielgröße im Validierungsdatensatz. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Confusion Matrix Test

**Syntax:** obj << Get Confusion Matrix Test

**Beschreibung:** Gibt die Konfusionsmatrix für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

### Get Confusion Matrix Training

**Syntax:** obj << Get Confusion Matrix Training

**Beschreibung:** Gibt die Konfusionsmatrix für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

### Get Confusion Matrix Validation

**Syntax:** obj << Get Confusion Matrix Validation

**Beschreibung:** Gibt die Konfusionsmatrix für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

### Get Confusion Rates Test

**Syntax:** obj << Get Confusion Rates Test

**Beschreibung:** Gibt die Konfusionsraten für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

### Get Confusion Rates Training

**Syntax:** obj << Get Confusion Rates Training

**Beschreibung:** Gibt die Konfusionsraten für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

### Get Confusion Rates Validation

**Syntax:** obj << Get Confusion Rates Validation

**Beschreibung:** Gibt die Konfusionsraten für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

```js

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

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Gen RSquare Test

**Syntax:** obj << Get Gen RSquare Test

**Beschreibung:** Gibt das verallgemeinerte r² für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

### Get Gen RSquare Training

**Syntax:** obj << Get Gen RSquare Training

**Beschreibung:** Gibt das verallgemeinerte r² für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

### Get Gen RSquare Validation

**Syntax:** obj << Get Gen RSquare Validation

**Beschreibung:** Gibt das verallgemeinerte r² für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get MM SAS DATA Step

**Syntax:** obj << Get MM SAS DATA Step

**Beschreibung:** Erstellt SAS-Code, den Sie im SAS Model Manager registrieren können, und gibt ihn im Logfenster zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM SAS Data Step;

```

### Get MM Tolerant SAS DATA Step

**Syntax:** obj << Get MM Tolerant SAS DATA Step

**Beschreibung:** Erstellt SAS-Code für Daten mit fehlenden Werten, den Sie im SAS Model Manager registrieren können, und gibt ihn im Logfenster zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM Tolerant SAS Data Step;

```

### Get Measures

**Syntax:** obj << Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Measures;

```

### Get Microseconds

**Syntax:** obj << Get Microseconds

**Beschreibung:** Gibt die Anzahl der Mikrosekunden zurück, die für die Durchführung der Analyse benötigt wurde.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Microseconds;
Show( time );

```

### Get Misclassification Rate Test

**Syntax:** obj << Get Misclassification Rate Test

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

### Get Misclassification Rate Training

**Syntax:** obj << Get Misclassification Rate Training

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Trainingssatz zurück.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

### Get Misclassification Rate Validation

**Syntax:** obj << Get Misclassification Rate Validation

**Beschreibung:** Gibt die Fehlklassifikationsrate für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

### Get Precision Recall Area Test

**Syntax:** obj << Get Precision Recall Area Test

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Testsatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

### Get Precision Recall Area Training

**Syntax:** obj << Get Precision Recall Area Training

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Trainingssatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

### Get Precision Recall Area Validation

**Syntax:** obj << Get Precision Recall Area Validation

**Beschreibung:** Gibt die Fläche unter der Precision-Recall-Kurve für den Validierungssatz zurück. Die Precision-Recall-Kurve muss angezeigt werden, bevor die Fläche berechnet werden kann. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

### Get Prediction Formula

**Syntax:** obj << Get Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer Vorhersageformelspalte und gibt sie zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Prediction Formula;

```

### Get RMS Error Test

**Syntax:** obj << Get RMS Error Test

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung (RMSE) des Testsatzes zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Test;
Show( rms );

```

### Get RMS Error Training

**Syntax:** obj << Get RMS Error Training

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung  (RMSE) des Trainingssatzes zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Training;
Show( rms );

```

### Get RMS Error Validation

**Syntax:** obj << Get RMS Error Validation

**Beschreibung:** Gibt die Wurzel der mittleren quadratischen Abweichung (RMSE) des Validierungssatzes zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Validation;
Show( rms );

```

### Get ROC Area Test

**Syntax:** obj << Get ROC Area Test

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für die Testdaten zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

### Get ROC Area Training

**Syntax:** obj << Get ROC Area Training

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für den Trainingsdatensatz zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

### Get ROC Area Validation

**Syntax:** obj << Get ROC Area Validation

**Beschreibung:** Gibt die Fläche unterhalb der Receiver-Operator-Kurve (ROC) für den Validierungsdatensatz zurück. Die ROC-Kurve muss vor der Berechnung der Fläche angezeigt werden. Nur verfügbar bei Verwendung eines Validierungssatzes.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

### Get RSquare Test

**Syntax:** obj << Get RSquare Test

**Beschreibung:** Gibt r² für den Testsatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Test;
Show( r );

```

### Get RSquare Training

**Syntax:** obj << Get RSquare Training

**Beschreibung:** Gibt r² für den Trainingssatz zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Training;
Show( r );

```

### Get RSquare Validation

**Syntax:** obj << Get RSquare Validation

**Beschreibung:** Gibt r² für den Validierungssatz zurück. Nur verfügbar bei Verwendung eines Validierungssatzes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Validation;
Show( r );

```

### Get SAS DATA Step

**Syntax:** obj << Get SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für die Daten zu erzeugen und gibt ihn im Logfenster zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get SAS Data Step;

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Seconds

**Syntax:** obj << Get Seconds

**Beschreibung:** Gibt die Anzahl der Sekunden zurück, die für die Durchführung der Analyse benötigt wurde.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Seconds;
Show( time );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Timing;
Show( t );

```

### Get Tolerant Prediction Formula

**Syntax:** obj << Get Tolerant Prediction Formula

**Beschreibung:** Erzeugt ein Skript zum Erstellen einer toleranten Vorhersageformelspalte und gibt sie im Logfenster zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Tolerant Prediction Formula;

```

### Get Tolerant SAS DATA Step

**Syntax:** obj << Get Tolerant SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für Daten zu erzeugen, die fehlende Werte enthalten, und gibt ihn im Logfenster zurück. Fehlenden Werten wird zufällig ein Zweig im Baum zugewiesen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get Tolerant SAS Data Step;

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj << Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Go

**Syntax:** obj << Go

**Beschreibung:** Beginnt die Iterationen nach Auswahl k-facher Kreuzvalidierung. In JMP Pro beginnt Go die Iterationen nach Angabe der Validierungsspalte.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << K Fold Crossvalidation( 5 );
obj << Go;

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```js

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

**Syntax:** obj = Decision Tree(...Informative Missing( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Bei kategorialen Variablen werden fehlende Werte als Kategorie behandelt. Bei stetigen Variablen werden fehlende Werte entweder als untere oder obere Werte behandelt, je nachdem, was besser angepasst werden kann. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );
obj << Split Best( 1 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt:Age[3] = .;
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Informative Missing( 0 ),
	Split Best( 3 )
);

```

### Initial Splits

**Syntax:** obj = Partition(...Initial Splits( condition, {left condition}, {right condition} )...)

**Beschreibung:** Beschreibt die Teilungen, die durchgeführt werden. Das Argument condition gibt die linke Seite der ersten Teilung an. Die Argumente {linke Bedingung} und {rechte Bedingung} geben eine Teilung auf der entsprechenden Seite an, und dieses Format wird für die gewünschte Anzahl der Teilungen rekursiv fortgesetzt. Um eine Teilung rechts und nicht links anzugeben, weisen Sie das linke Argument als leere Liste zu. Um eine Teilung links und nicht rechts anzugeben, lassen Sie das rechte Argument aus.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"} )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}, {:age >= 25}} )
);

```

**Beispiel 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {:type == {"Family", "Sporty"}} )
);

```

### K Fold Crossvalidation

**Syntax:** obj << K Fold Crossvalidation

**Beschreibung:** Diese Funktion ist deaktiviert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Split Best( 2 )
);
obj << K Fold Crossvalidation( 5 );

```

### Leaf Report

**Syntax:** obj << Leaf Report( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus mit dem Mittelwert und den Häufigkeiten (stetige Zielgröße) oder der Zielgrößenrate und den Häufigkeiten (kategoriale Zielgröße) der Blattknoten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Leaf Report( 1 );

```

### Lift Curve

**Syntax:** obj << Lift Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Lift Curve( 1 );

```

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```js

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

### Lock Columns

**Syntax:** obj << Lock Columns( state=0|1, columns )

**Beschreibung:** Schließt angegebene Spalten von der Verwendung für Teilungen aus.

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Lock Columns( 1, :age, :size );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Lock Columns( 1, :Age, :Hair Color );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

### Make SAS DATA Step

**Syntax:** obj << Make SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für die Daten zu erzeugen und gibt ihn im Skriptfenster zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make SAS Data Step;

```

### Make Tolerant SAS DATA Step

**Syntax:** obj << Make Tolerant SAS DATA Step

**Beschreibung:** Erstellt einen SAS DATA Step, um Scores für Daten zu erzeugen, die fehlende Werte enthalten, und gibt ihn im Skriptfenster zurück. Fehlenden Werten wird zufällig ein Zweig im Baum zugewiesen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make Tolerant SAS Data Step;

```

### Method

**Syntax:** Method( "Decision Tree" )

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Methode zum Partitionieren der Daten an. Standard ist Entscheidungsbaum.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

### Minimum Size Split

**Syntax:** obj << Minimum Size Split( number )

**Beschreibung:** Legt für die Entscheidung, ob eine Gruppe geteilt werden soll, die Mindestgruppengröße fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Minimum Size Split( 15 );
obj << Split Best( 4 );

```

### Missing Value Order

**Syntax:** Missing Value Order( Low(list of numeric columns),High(list of numeric columns))

**Beschreibung:** Gibt an, ob fehlende Werte als niedrig oder hoch behandelt werden.

**JMP Version hinzugefügt:** 16

### Multithreading

**Syntax:** Multithreading( state=0|1 )

**Beschreibung:** Teilt die Berechnungen auf die verfügbaren Threads auf dem Rechner auf. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Syntax:** obj = New Preset()

**Beschreibung:** Erstellt eine anonyme Voreinstellung, die die auf das Objekt angewandten Optionen und Anpassungen darstellt. Dieses Objekt kann an Apply Preset übergeben werden, um die Einstellungen in ein anderes Objekt gleichen Typs zu kopieren.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Ordinal Restricts Order

**Syntax:** obj = Decision Tree(...Ordinal Restricts Order( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Für ordinale Spalten werden nur Teilungen berücksichtigt, die die Reihenfolge beibehalten. Standardmäßig ein.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );
obj << Split Best( 3 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Ordinal Restricts Order( 1 ),
	Split Best( 2 )
);

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```js

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

**Syntax:** obj << Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Trainingsdaten mit den Vorhersagewerten auf der X-Achse und den beobachteten Daten auf der Y-Achse ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
obj << Plot Actual By Predicted;

```

### Precision Recall Curve

**Syntax:** obj << Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar. Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Precision Recall Curve( 1 );

```

### Profiler

**Syntax:** obj << Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Profiler( 1 );

```

### Prune Worst

**Syntax:** obj << Prune Worst

**Beschreibung:** Entfernt die letzte Teilung mit der geringsten Diskriminationsfähigkeit.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Prune Worst;
Wait( .5 );
obj << Prune Worst;

```

### Publish Prediction Formula

**Syntax:** obj << Publish Prediction Formula

**Beschreibung:** Erstellt Vorhersageformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**Syntax:** obj << Publish Tolerant Prediction Formula

**Beschreibung:** Erstellt eine Vorhersageformel, die selbst bei fehlenden Werten eine Vorhersage liefert, und veröffentlicht sie als Formelspaltenskript im Formeldepot.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Tolerant Prediction Formula;

```

### ROC Curve

**Syntax:** obj << ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität). Wenn Sie Validierung verwendet haben, wird jeweils für den Trainings-, Validierungs- und Testsatz ein Diagramm angezeigt.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << ROC Curve( 1 );

```

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```js

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

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```js

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

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Report View( "Summary" );

```

### Response

**Syntax:** obj << Response( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Leaf Label Formula

**Syntax:** obj << Save Leaf Label Formula

**Beschreibung:** Speichert die Blattbeschriftungsformel in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Label Formula;

```

### Save Leaf Labels

**Syntax:** obj << Save Leaf Labels

**Beschreibung:** Speichert die Blattbeschriftungen in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Labels;

```

### Save Leaf Number Formula

**Syntax:** obj << Save Leaf Number Formula

**Beschreibung:** Speichert die Blattnummernformel in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Number Formula;

```

### Save Leaf Numbers

**Syntax:** obj << Save Leaf Numbers

**Beschreibung:** Speichert die Blattnummern in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Numbers;

```

### Save Predicteds

**Syntax:** obj << Save Predicteds

**Beschreibung:** Speichert die Vorhersagewerte in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Predicteds;

```

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Prediction Formula;

```

### Save Residuals

**Syntax:** obj << Save Residuals

**Beschreibung:** Speichert die Residuen in einer neuen Spalte in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Residuals;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	By( _bycol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Script Window;

```

### Save Tolerant Prediction Formula

**Syntax:** obj << Save Tolerant Prediction Formula

**Beschreibung:** Formel speichern, die auch bei fehlenden Werten in einer neuen Spalte in der Datentabelle eine Vorhersage liefert.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Tolerant Prediction Formula;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```js

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

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

```js

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

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Set Random Seed

**Syntax:** obj << Set Random Seed( number )

**Beschreibung:** Gibt einen zufälligen Startwert an, um die Ergebnisse für künftige Aufrufe der Plattform zu reproduzieren.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

### Show Fit Details

**Syntax:** obj << Show Fit Details( state=0|1 )

**Beschreibung:** Blendet einen Bericht mit der Definition aller Messwerte, den Fehlklassifikationsraten und den Konfusionsmatrizen ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Show Fit Details( 1 );

```

### Show Graph

**Syntax:** obj << Show Graph( state=0|1 )

**Beschreibung:** Zeigt den Partitionsgraphen an oder blendet ihn aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowGraph( 0 );
Wait( .5 );
obj << ShowGraph( 1 );

```

### Show Points

**Syntax:** obj << Show Points( state=0|1 )

**Beschreibung:** Zeigt im Partitionsgraphen die Punkte (1 oder ein) oder Farbbereiche (0 oder aus) an. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowPoints( 0 );
Wait( .5 );
obj << ShowPoints( 1 );

```

### Show Split Bar

**Syntax:** obj << Show Split Bar( state=0|1 )

**Beschreibung:** Blendet die farbigen Balken ein oder aus, die in jedem Blatt die Teilungsanteile anzeigen. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Bar( 0 );
Wait( .5 );
obj << Show Split Bar( 1 );

```

### Show Split Candidates

**Syntax:** obj << Show Split Candidates( state=0|1 )

**Beschreibung:** Blendet den Kandidatenbericht in der letzten Teilung ein oder aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Candidates( 1 );
(obj << Report)["Candidates"] << Close( 0 ) << select;

```

### Show Split Count

**Syntax:** obj << Show Split Count( state=0|1 )

**Beschreibung:** Blendet die Zielgrößenhäufigkeiten für jede Stufe an jedem Knoten im Baum ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Count( 0 );
Wait( .5 );
obj << Show Split Count( 1 );

```

### Show Split Prob

**Syntax:** obj << Show Split Prob( state=0|1 )

**Beschreibung:** Blendet die Zielgrößenanteile für jede Stufe an jedem Knoten im Baum ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Prob( 0 );
Wait( .5 );
obj << Show Split Prob( 1 );

```

### Show Split Stats

**Syntax:** obj << Show Split Stats( state=0|1 )

**Beschreibung:** Blendet die Häufigkeit und die Teilungsstatistiken ein oder aus. Die angezeigten Statistiken umfassen G² oder den Mittelwert und die Standardabweichung. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Stats( 0 );
Wait( .5 );
obj << Show Split Stats( 1 );

```

### Show Tree

**Syntax:** obj << Show Tree( state=0|1 )

**Beschreibung:** Zeigt die Baumstruktur mit den Partitionsinformationen an oder blendet sie aus. Standardmäßig ein.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowTree( 1 );

```

### Small Tree View

**Syntax:** obj << Small Tree View( state=0|1 )

**Beschreibung:** Blendet rechts vom Partitionsgraphen eine kleinere Version des Partitionsbaums ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Small Tree View( 1 );

```

### Sort Split Candidates

**Syntax:** obj << Sort Split Candidates( state=0|1 )

**Beschreibung:** Sortiert die Kandidaten nach Signifikanz.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
(obj << Report)["Candidates"] << Close( 0 ) << select;
Wait( 1 );
obj << Sort Split Candidates;

```

### Specify Profit Matrix

**Syntax:** obj << Specify Profit Matrix

**Beschreibung:** Ermöglicht Ihnen, Gewinne oder Kosten in Zusammenhang mit korrekten oder inkorrekten Klassifikationsentscheidungen anzugeben.

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Split Best( 3 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Married", "Single", "Undecided" ),
	Show Fit Details( 1 )
);

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Yes", "No", "Undecided" ),
	Show Fit Details( 1 )
);

```

### Split Best

**Syntax:** obj << Split Best( <number of splits> )

**Beschreibung:** Teilt den Baum am optimalen Teilungspunkt.

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best;
Wait( .5 );
obj << Split Best( 2 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best;
Wait( 1 );
obj << Split Best( 2 );

```

### Split History

**Syntax:** obj << Split History( state=0|1 )

**Beschreibung:** Blendet einen Graphen ein oder aus, der jede Teilung auf der X-Achse und den entsprechenden r²-Wert für das Modell auf der Y-Achse anzeigt.

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Split History;

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Split History;

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### Tree 3D

**Syntax:** obj << Tree 3D( state=0|1 )

**Beschreibung:** Blendet ein 3D-Diagramm der Baumstruktur ein oder aus.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 14 );
obj << Show Tree( 0 );
obj << Tree 3D( 1 );

```

### Use Excluded Rows for Validation

**Syntax:** obj = Decision Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**Beschreibung:** Verwendet die ausgeschlossenen Zeilen in der Datentabelle, um einen Validierungssatz zu erstellen. Diese Option erscheint im Startfenster nur, wenn Sie das Standard-JMP verwenden und es ausgeschlossene Zeilen gibt.

**JMP Version hinzugefügt:** 15

<b>Element im Startfenster: Ja</b>

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Use Excluded Rows for Validation( 1 ),
	Split Best( 2 )
);

```

### Validation

**Syntax:** obj << Validation( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Validation Portion

**Syntax:** obj = Decision Tree(...Validation Portion( fraction=0 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Bildet einen Validierungssatz durch zufällige Auswahl von Zeilen, wobei jede Zeile die Wahrscheinlichkeit p (Anteil) hat, ausgewählt zu werden. Standardmäßig „0“.

**Boosted-Tree-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :country, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Bootstrap-Forest-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**Partitionsbeispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 )
);
obj << Split Best( 2 );

```

**Uplift-Beispiel**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation Portion( 0.2 ),
	Go
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Weight

**Syntax:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Weight( _weightcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Weight( _weightcol )
);
obj << Split Best( 2 );

```

### Window View

**Syntax:** obj = Decision Tree(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### X

**Syntax:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Y

**Syntax:** obj << Y( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### Method

**Syntax:** Method( "Decision Tree" )

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Methode zum Partitionieren der Daten an. Standard ist Entscheidungsbaum.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

### Partition

**Syntax:** Partition( Y( column ), X( columns ) )

**Beschreibung:** Erzeugt einen Entscheidungsbaum durch rekursive Partitionierung der Daten entsprechend der Beziehung zwischen den Prädiktor- und den Zielgrößenwerten. Zielgröße und Prädiktoren können beide entweder stetig oder kategorial sein.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 2 );

```

