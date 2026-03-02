# Model Screening



## Elementmeldungen

### Add Quadratics

**Syntax:** obj = Model Screening(...Add Quadratics( state=0|1 )...)

**Beschreibung:** Fügt Effekte für die Quadrate der stetigen Variablen zu linearen Modellierungsanpassungen hinzu.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :LTG, :BMI, :BP, :Glucose, :HDL ),	Add Quadratics( 1 ));

```

### Add Two Way Interactions

**Syntax:** obj = Model Screening(...Add Two Way Interactions( state=0|1 )...)

**Beschreibung:** Fügt alle Zweifach-Wechselwirkungseffekte zu linearen Modellierungsanpassungen hinzu.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :LTG, :BMI, :BP, :Glucose, :HDL ),	Add Two Way Interactions( 1 ));

```

### Additional Methods

**Syntax:** obj = Model Screening(...Additional Methods( state=0|1 )...)

**Beschreibung:** Ruft verschiedene zusätzliche Methoden in der Plattform „Verallgemeinerte Regression“ auf, zusätzlich zu Lasso: Vorwärtsauswahl, Vorwärtsauswahl mit Zurückschneiden, Elastisches Netz und Ridge.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Additional Methods( 1 ));

```

### Boosted Tree

**Syntax:** obj = Model Screening(...Boosted Tree( state=0|1 )...)

**Beschreibung:** Erstellt einen Entscheidungsbaum, bei dem es sich um eine Folge kleinerer Entscheidungsbäume handelt, um eine Zielgröße vorherzusagen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Bootstrap Forest

**Syntax:** obj = Model Screening(...Bootstrap Forest( state=0|1 )...)

**Beschreibung:** Erstellt eine Sammlung von Entscheidungsbäumen anhand zufälliger Stichprobenziehung und mittelt die Ergebnisse, um eine Zielgröße vorherzusagen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Cardinality of Predictors

**Syntax:** obj &lt;&lt; Cardinality of Predictors( state=0|1 )

**Beschreibung:** Blendet einen Bericht der Anzahl der Stufen und der Anzahl der in der linearen Modellanpassung für jede kategorialen Prädiktor verwendeten Parameter ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Neural( 0 ),	Bootstrap Forest( 0 ),	Generalized Regression( 0 ),	Support Vector Machines( 0 ),	Cardinality of Predictors( 1 ));

```

### Decision Threshold

**Syntax:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**Beschreibung:** Blendet die Verteilung der angepassten Wahrscheinlichkeiten und die Tabellen der beobachteten gegenüber den vorhergesagten Werten für jedes Modell ein oder aus. Sie können die Wahrscheinlichkeitsschwelle ändern, um zu untersuchen, wie sich unterschiedliche Schwellenwerte auf die Klassifikationsergebnisse auswirken.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Decision Threshold( 1 ));

```

### Decision Tree

**Syntax:** obj = Model Screening(...Decision Tree( state=0|1 )...)

**Beschreibung:** Erstellt einen Entscheidungsbaum zur Vorhersage einer Zielgröße. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 1 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Discriminant

**Syntax:** obj = Model Screening(...Discriminant( state=0|1 )...)

**Beschreibung:** Klassifiziert kategoriale Gruppenzugehörigkeit basierend auf stetigen Variablen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Iris.jmp" );Make Validation Column( Validation Set( .3 ), Training Set( .7 ), Go );obj = Model Screening(	Y( :Species ),	Validation( :Validation ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Discriminant( 1 ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));

```

### Elapsed Time

**Syntax:** obj &lt;&lt; Elapsed Time( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die insgesamt abgelaufene Zeit enthält, die zur Anpassung jeder Methode benötigt wurde.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Elapsed Time( 1 ));

```

### Fit Least Squares

**Syntax:** obj = Model Screening(...Fit Least Squares( state=0|1 )...)

**Beschreibung:** Passt ein lineares Regressionsmodell für eine stetige Zielgröße an. Zu den Techniken gehören Regression, Varianzanalyse, Kovarianzanalyse, gemischte Modelle sowie die Analyse statistisch geplanter Experimente. Mit der Betonungsoption können Sie das Berichtslayout angeben. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 1 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Fit Stepwise

**Syntax:** obj = Model Screening(...Fit Stepwise( state=0|1 )...)

**Beschreibung:** Passt schrittweise Regressionsmodelle an, was die Variablenauswahl für gewöhnliche kleinste Quadrate und ordinal logistische Modelle sowie nominal logistische Modelle mit einer binären Zielgröße erleichtert. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 1 ),	Generalized Regression( 0 ));

```

### Generalized Regression

**Syntax:** obj = Model Screening(...Generalized Regression( state=0|1 )...)

**Beschreibung:** Passt verallgemeinerte lineare Modelle mithilfe von Regressionstechniken mit Bestrafung an, wodurch die Variablenauswahl in einer Weise automatisiert wird, die Overfitting verhindert. Zu den Regressionstechniken mit Bestrafung gehören Lasso, adaptives Lasso, elastisches Netz, adaptives elastisches Netz und Ridge-Regression. Die Zielgrößenverteilungen können Daten vom Typ stetig, kategorial, Häufigkeit und Zeit bis Ereignis anpassen. Das ist der empfohlene Charakter für die meisten Regressionseinstellungen. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ));

```

### Informative Missing

**Syntax:** obj = Model Screening(...Informative Missing( state=0|1 )...)

**Beschreibung:** Aktiviert die Option „Informativ fehlend“ für alle Plattformen.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Neural( 0 ),	Informative Missing( 1 ));

```

### K Fold Crossvalidation

**Syntax:** obj = Model Screening(...K Fold Crossvalidation( state=0|1 )...)

**Beschreibung:** Teilt die Daten zufällig in K Teilmengen. Ein Modell wird K-fach an die Daten angepasst, jedes Mal mit einer anderen Teilmenge als Kreuzvalidierungssatz.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### K Nearest Neighbors

**Syntax:** obj = Model Screening(...K Nearest Neighbors( state=0|1 )...)

**Beschreibung:** Sagt eine Zielgröße basierend auf den Zielgrößen der k nächsten Nachbarn vorher. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### K for K Fold

**Syntax:** obj = Model Screening(...K for K Fold( number=5 )...)

**Beschreibung:** Gibt die Anzahl der Teilmengen für K-fache Kreuzvalidierung an. Der Standardwert ist 5 und K muss größer als 1 sein. Standardmäßig „5“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	K for K Fold( 6 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### K for Nested

**Syntax:** obj = Model Screening(...K for Nested( number=5 )...)

**Beschreibung:** Gibt die Anzahl der Teilmengen für geschachtelte Kreuzvalidierung an. Der Standardwert ist 5 und K muss größer als 1 sein. Standardmäßig „5“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	K for Nested( 3 ),	L for Nested( 4 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### L for Nested

**Syntax:** obj = Model Screening(...L for Nested( number=4 )...)

**Beschreibung:** Gibt die Anzahl der inneren Teilmengen für geschachtelte Kreuzvalidierung an. Der Standardwert ist 4 und L muss größer als 1 sein. Standardmäßig „4“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	K for Nested( 5 ),	L for Nested( 4 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Log Methods

**Syntax:** obj = Model Screening(...Log Methods( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

### Logistic Regression

**Syntax:** obj = Model Screening(...Logistic Regression( state=0|1 )...)

**Beschreibung:** Passt ein logistisches Regressionsmodell von nominalen Zielgrößenkategorien sowohl für stetige als auch für kategoriale Prädiktoren an. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 0 ));

```

### Model NParm Limit

**Syntax:** obj &lt;&lt; Model NParm Limit( number=450 )

**Beschreibung:** Gibt die Anzahl der Parameter an, über denen die Modellierungsplattformen nicht ausgeführt werden. Standardmäßig „450“.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Add Two Way Interactions( 1 ),	Add Quadratics( 1 ),	Model NParm Limit( 40 ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Fit Least Squares( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));

```

### Naive Bayes

**Syntax:** obj = Model Screening(...Naive Bayes( state=0|1 )...)

**Beschreibung:** Sagt Gruppenzugehörigkeit für eine kategoriale Variable vorher.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ), );

```

### Nested Crossvalidation

**Syntax:** obj = Model Screening(...Nested Crossvalidation( state=0|1 )...)

**Beschreibung:** Teilt die Daten zufällig in K gleiche Teile und teilt dann weiter alle Teile bis auf einen in L gleiche Teile.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Nested Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Neural

**Syntax:** obj = Model Screening(...Neural( state=0|1 )...)

**Beschreibung:** Sagt eine oder mehrere Zielgrößenvariablen anhand einer flexiblen Funktion der Eingangsvariablen vorher. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Partial Least Squares

**Syntax:** obj = Model Screening(...Partial Least Squares( state=0|1 )...)

**Beschreibung:** Passt ein Modell mit latenten Faktoren an eine oder mehr Zielgrößenvariablen an. Dadurch können Modelle angepasst werden, wenn erklärende Variablen hochgradig korreliert sind oder wenn es mehr erklärende Variablen als Beobachtungen gibt.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	Partial Least Squares( 1 ));

```

### Plot Actual by Predicted

**Syntax:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**Beschreibung:** Überlagert Punkte „Beobachtete Werte über Vorhersage“ von mehreren Modellanpassungen.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 1 ),	Generalized Regression( 1 ),	Plot Actual by Predicted( 1 ));

```

### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet überlagerte Precision-Recall-Kurven für alle Modellanpassungen ein oder aus. Es gibt separate Diagramme für die Trainings-, Validierungs- und Testsätze.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),);obj << Precision Recall Curve( 1 );

```

### Predictor Properties

**Syntax:** obj &lt;&lt; Predictor Properties( state=0|1 )

**Beschreibung:** Available if you hold down the shift button, for each platform called, shows information about supported interfaces.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ),	Predictor Properties( 1 ));

```

### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet Vorhersageanalysen für jeden Typ der Modellanpassung ein oder aus. Diese Option ist nur verfügbar für stetige Zielgrößen.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ),	Profiler( 1 ));

```

### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Beschreibung:** Blendet überlagerte ROC-Kurven (Receiver-Operationscharakteristik) für alle Modellanpassungen ein oder aus. Es gibt separate Diagramme für die Trainings-, Validierungs- und Testsätze.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	ROC Curve( 1 ));

```

### Remove Live Reports

**Syntax:** obj = Model Screening(...Remove Live Reports( state=0|1 )...)

**Beschreibung:** Entfernt die einzelnen Modellplattformberichte aus dem Berichtsfenster des Modell-Screening. Sie können diese Option verwenden, um Speicher für weitere Arbeit freizusetzen.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	Remove Live Reports( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### Repeated K Fold

**Syntax:** obj = Model Screening(...Repeated K Fold( number=0 )...)

**Beschreibung:** Gibt die Anzahl an, wie häufig der Vorgang der K-fachen Kreuzvalidierung oder der geschachtelten Kreuzvalidierung wiederholt wird. Standardmäßig „0“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Repeated K Fold( 2 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### SVM NRow Limit

**Syntax:** obj &lt;&lt; SVM NRow Limit( number=10000 )

**Beschreibung:** Gibt die Anzahl der Zeilen an, über denen Stützvektormaschinen nicht ausgeführt werden. Standardmäßig „10000“.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Decision Tree( 1 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 1 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	SVM NRow Limit( 6000 ));

```

### Save Folded Prediction Formula

**Syntax:** obj &lt;&lt; Save Folded Prediction Formula

**Beschreibung:** Speichert neue Spalten in der ursprünglichen Datentabelle. Die neuen Spalten enthalten eine verlustfreie Vorhersageformel für die k-fache Kreuzvalidierung. Für jede Zeile vermeidet die Formel die Verwendung von Modellanpassungen, die mit dieser Zeile trainiert wurden.

### Save KFold Results Table

**Syntax:** obj &lt;&lt; Save KFold Results Table

**Beschreibung:** Speichert die Informationen im Bericht „Zusammenfassung über die Teilmengen“ in einer neuen Datentabelle.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	K Fold Crossvalidation( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 1 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 1 ),	Save KFold Results Table);

```

### Save Prediction Formulas

**Syntax:** obj &lt;&lt; Save Prediction Formulas

**Beschreibung:** Speichert die Vorhersageformeln in der Datentabelle.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Fit Least Squares( 1 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 0 ),	Generalized Regression( 0 ));obj << Select Fit( "Training", "Best" );obj << Save Prediction Formulas;

```

### Save Results Table

**Syntax:** obj &lt;&lt; Save Results Table

**Beschreibung:** Speichert die Informationen im Validierungsbericht in einer neuen Datentabelle. Wenn es einen Testsatz gibt, werden die Informationen im Testbericht ebenfalls in einer neuen Datentabelle gespeichert.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Save Results Table);

```

### Select Fit

**Syntax:** &lt;&lt;Select Fit( Training | Validation | Test | Summary | Clear All, Clear | Dominant | Best(&lt;number&gt;), | Largest(name,&lt;number&gt;) | Smallest(name,&lt;number&gt;) | Where(expression) )

**Beschreibung:** Anpassungen in verschiedenen Berichten basierend auf angegebenen Kriterien auswählen. Diese Option ist nur in JSL verfügbar.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Select Fit( Validation, Largest( "RSquare", 2 ) );

```

### Set Probability Threshold

**Syntax:** obj &lt;&lt; Set Probability Threshold( number=0.5 )

**Beschreibung:** Gibt die Anzahl der Parameter an, über denen die Modellierungsplattformen nicht ausgeführt werden. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 1 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Decision Threshold( 1 ),	Set Probability Threshold( .2 ));

```

### Set Random Seed

**Syntax:** obj = Model Screening(...Set Random Seed( number )...)

**Beschreibung:** Gibt einen zufälligen Startwert an, um die Ergebnisse für künftige Aufrufe der Plattform zu reproduzieren.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 123454321 ));

```

### Show Methods in Log

**Syntax:** obj = Model Screening(...Show Methods in Log( state=0|1 )...)

**Beschreibung:** Schreibt bei jedem Aufruf einer Anpassungsplattform eine Fortschrittsmeldung ins Log.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Log Methods( 1 ));

```

### Show Profit

**Syntax:** obj &lt;&lt; Show Profit( state=0|1 )

**Beschreibung:** Blendet den erwarteten Gewinn für jedes Modell mit der angegebenen Gewinnmatrix für die Zielgrößenstufen ein oder aus.

**JMP Version hinzugefügt:** 16

```jsl

Open( "$Sample_Data/Diabetes.jmp" );Column( "Y Binary" ) << Set Property(	"Profit Matrix", {[1 - 1, -0.3333333 1, . .], {"Low", "High", "Undecided"}});obj = Model Screening(	Y( :Y Binary ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Show Profit( 1 ));

```

### Show Scripts

**Syntax:** obj &lt;&lt; Show Scripts( state=0|1 )

**Beschreibung:** For each platform called, shows options added to launch script.

**JMP Version hinzugefügt:** 19

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Bootstrap Forest( 1, {Number Trees( 80 ), Number Terms( 5 )} ),	Neural( 0 ),	Support Vector Machines( 0 ),	Show Scripts( 1 ));

```

### Specify Profit Matrix

**Syntax:** obj &lt;&lt; Specify Profit Matrix

**Beschreibung:** Ermöglicht Ihnen, Gewinne oder Kosten in Zusammenhang mit korrekten oder inkorrekten Klassifikationsentscheidungen anzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Model Screening(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Naive Bayes( 0 ),	Neural( 1 ),	Support Vector Machines( 0 ),	Fit Stepwise( 0 ),	Logistic Regression( 1 ),	Generalized Regression( 1 ),	Specify Profit Matrix( [0 -1, -0.6 0, . .], "Married", "Single", "Undecided" ),	Show Profit( 1 ));

```

### Support Vector Machines

**Syntax:** obj = Model Screening(...Support Vector Machines( state=0|1 )...)

**Beschreibung:** Sagt basierend auf den Stützvektoren im Raum der X-Variablen eine Zielgröße vorher. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 1 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ));

```

### Time Limit Each

**Syntax:** obj = Model Screening(...Time Limit Each( number )...)

**Beschreibung:** Gibt eine Zeitgrenze in Sekunden für jede Anpassung an. Bei Plattformen, die vorzeitiges Stoppen unterstützen, werden die besten Schätzwerte bis zu dem Punkt angegeben.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Equity.jmp" );Model Screening(	Y( :BAD ),	Validation( :Validation ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Time Limit Each( 1 ));

```

### Use Two Way Splits for K Fold

**Syntax:** obj = Model Screening(...Use Two Way Splits for K Fold( state=0|1 )...)

**Beschreibung:** Verwendet nur Trainings- und Validierungsteilungen anstelle von Trainings-, Validierungs- und Testteilungen.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	K Fold Crossvalidation( 1 ),	Use Two Way Splits for K Fold( 1 ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Neural( 0 ),	Support Vector Machines( 0 ));

```

### XGBoost

**Syntax:** obj = Model Screening(...XGBoost( state=0|1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Ruft XGBoost für Gradient-Boosting auf, wenn Sie das XGBoost Add-in haben. Diese Option wird nur angezeigt, wenn das Add-in installiert ist.

```jsl

Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Decision Tree( 0 ),	Bootstrap Forest( 0 ),	Boosted Tree( 0 ),	K Nearest Neighbors( 0 ),	Neural( 0 ),	Support Vector Machines( 0 ),	Fit Least Squares( 0 ),	Fit Stepwise( 0 ),	Generalized Regression( 0 ),	XGBoost( 1 ));

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Model Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Factor

**Syntax:** obj &lt;&lt; Factor( column(s) )

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Freq( :_freqcol ));

```

### Response

**Syntax:** obj &lt;&lt; Response( column(s) )

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Validation

**Syntax:** obj &lt;&lt; Validation( column )

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Weight

**Syntax:** obj &lt;&lt; Weight( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Weight( :_weightcol ));

```

### X

**Syntax:** obj &lt;&lt; X( column(s) )

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

## Zugehörige Konstruktoren

### Model Screening

**Syntax:** Model Screening( Y( column ), X( columns ) )

**Beschreibung:** Passt viele verschiedene Vorhersagemodelle an, so dass Sie das beste auswählen können.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = Model Screening(	Y( :Y ),	Validation( :Validation ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));

```

