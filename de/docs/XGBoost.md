# XGBoost



## XGBoost Compare

### AUC

**Syntax:** obj << AUC( state=0|1 )

**Beschreibung:** Blendet AUROC, den Bereich unter der Receiver-Operationscharakteristik, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### AUPRC

**Syntax:** obj << AUPRC( state=0|1 )

**Beschreibung:** Fläche unter der Precision-Recall-Kurve Standardmäßig ein.

**JMP Version hinzugefügt:** 17

### Accuracy

**Syntax:** obj << Accuracy( state=0|1 )

**Beschreibung:** Blendet die Genauigkeit, den Anteil korrekter Klassifikationen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Censor

**Syntax:** obj << Censor( state=0|1 )

**Beschreibung:** Zeigt den Befehl „Zensieren“ an oder blendet ihn aus Standardmäßig ein.

**JMP Version hinzugefügt:** 17

### Concordance

**Syntax:** obj << Concordance( state=0|1 )

**Beschreibung:** Zeigt die Konkordanz an oder blendet sie aus, wobei es sich um den Harrell C-Index handelt, der die Stärke der Sortierungseffizienz misst. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

### Correlation

**Syntax:** obj << Correlation( state=0|1 )

**Beschreibung:** Blendet die Pearson-Korrelation, ein Maß für die Stärke der linearen Beziehung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### F1

**Syntax:** obj << F1( state=0|1 )

**Beschreibung:** Blendet den F1-Score, den harmonischen Durchschnitt von Präzision und Abruf, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Features

**Syntax:** obj << Features( state=0|1 )

**Beschreibung:** Blendet die Funktionenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Freq

**Syntax:** obj << Freq( state=0|1 )

**Beschreibung:** Blendet die Häufigkeitenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### H Measure

**Syntax:** obj << H Measure( state=0|1 )

**Beschreibung:** Zeigt das H-Maß an oder blendet es aus, das die Anteilsverbesserung im Vergleich zur Baseline misst. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

### Hide All Models

**Syntax:** obj << Hide All Models

**Beschreibung:** Alle Modelle ausblenden.

**JMP Version hinzugefügt:** 16

### LogLoss

**Syntax:** obj << LogLoss( state=0|1 )

**Beschreibung:** Blendet den Logarithmus der Likelihood-basierten Verlustfunktion ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### MAE

**Syntax:** obj << MAE( state=0|1 )

**Beschreibung:** Blendet MAE, die mittlere absolute Abweichung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### MCC

**Syntax:** obj << MCC( state=0|1 )

**Beschreibung:** Blendet den Matthews-Korrelationskoeffizienten, die Pearson-Korrelation für binäre Variablen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Misclass

**Syntax:** obj << Misclass( state=0|1 )

**Beschreibung:** Blendet die Fehlklassifikationsrate, den Anteil inkorrekter Klassifikationen, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Predictors

**Syntax:** obj << Predictors( state=0|1 )

**Beschreibung:** Blendet die Prädiktorenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Profit

**Syntax:** obj << Profit( state=0|1 )

**Beschreibung:** Blendet den erwarteten Gewinn ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### RMSE

**Syntax:** obj << RMSE( state=0|1 )

**Beschreibung:** Blendet RMSE, die Wurzel der mittleren quadratischen Abweichung, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### RSquare

**Syntax:** obj << RSquare( state=0|1 )

**Beschreibung:** Blendet den r²-Wert, den Anteil der erklärten Variabilität, ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Remove Hidden Models

**Syntax:** obj << Remove Hidden Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ nicht aktiviert ist.

**JMP Version hinzugefügt:** 16

### Remove Shown Models

**Syntax:** obj << Remove Shown Models

**Beschreibung:** Entfernt alle Modelle, für die das Kontrollkästchen „Anzeigen“ aktiviert ist, und zeigt die übrigen Modelle an.

**JMP Version hinzugefügt:** 15

### Response

**Syntax:** obj << Response( state=0|1 )

**Beschreibung:** Blendet die Zielgrößenspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Show All Models

**Syntax:** obj << Show All Models

**Beschreibung:** Alle Modelle anzeigen.

**JMP Version hinzugefügt:** 16

### Training Metrics

**Syntax:** obj << Training Metrics( state=0|1 )

**Beschreibung:** Blendet alle Trainingsmetriken ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Validation

**Syntax:** obj << Validation( state=0|1 )

**Beschreibung:** Blendet die Validierungsspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Validation Metrics

**Syntax:** obj << Validation Metrics( state=0|1 )

**Beschreibung:** Blendet alle Validierungsmetriken ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Weight

**Syntax:** obj << Weight( state=0|1 )

**Beschreibung:** Blendet die Gewichtungsspalte ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### XGBoost Compare

**Syntax:** XGBoost Compare

## XGBoost Fit

### Actual by Predicted Plots

**Syntax:** obj << Actual by Predicted Plots( state=0|1 )

**Beschreibung:** Blendet ein Diagramm der Trainingsdaten mit den Vorhersagewerten auf der X-Achse und den beobachteten Daten auf der Y-Achse ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Autotune

**Syntax:** obj << Autotune

**Beschreibung:** Erstellt ein schnell flexibel füllendes Design mit Parametereinstellungeen für Min. und Max. zur Anpassung von n Modellen, wobei n die Anzahl der Einzelversuche ist.

**JMP Version hinzugefügt:** 17

### Confusion Matrices

**Syntax:** obj << ( fit[number] << Confusion Matrices( state=0|1 ) )

**Beschreibung:** Blendet eine Kreuztabellenmatrix der beobachteten und vorhergesagten Stufen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

### Contour Profiler

**Syntax:** obj << Contour Profiler

**Beschreibung:** Blendet interaktive Graphen von Schnitten der Vorhersagefunktion ein oder aus.

**JMP Version hinzugefügt:** 15

### Copy Parameters to Launch

**Syntax:** obj << Copy Parameters to Launch

**Beschreibung:** Kopiert die Parameter von diesem Modell in den Bereich „Modell starten“.

**JMP Version hinzugefügt:** 16

### Decision Thresholds

**Syntax:** obj << Decision Thresholds( state=0|1 )

**Beschreibung:** Blendet Graphen und Tabellen mit Entscheidungsschwellen ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 16

### Fit Details

**Syntax:** obj << Fit Details( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße für das angepasste Modell ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Generate Python Code

**Syntax:** obj << Generate Python Code

**Beschreibung:** Erstellt Python-Code für Training und Scoring.

**JMP Version hinzugefügt:** 16

### Importances

**Syntax:** obj << Importances( state=0|1 )

**Beschreibung:** Blendet die statistische Kenngröße Gewichtung für jeden Prädiktor ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 15

### Lift Curves

**Syntax:** obj << Lift Curves( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Lift-Kurve ein oder aus. Eine Lift-Kurve stellt den Lift gegen den Anteil der Beobachtungen dar und bietet eine weitere Ansicht der Vorhersagefähigkeit eines Modells.

**JMP Version hinzugefügt:** 15

### Number of Design Points

**Syntax:** obj << Number of Design Points( number=10 )

**Beschreibung:** Gibt die Anzahl von Einzelsettings für das Tuning-Design an, die ausgeführt werden. Wenn Sie ein großen Problem haben, halten Sie diesen Wert relativ klein. Standardmäßig „10“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

### Number of Inner Folds

**Syntax:** obj << Number of Inner Folds( number=2 )

**Beschreibung:** Gibt die Anzahl von geschachtelten inneren Faltungen an, die während der automatischen Tunings verwendet werden. Standardmäßig „2“.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

### Objective

**Syntax:** obj << Objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**Beschreibung:** Gibt die für die Modellanpassung zu optimierende Funktion an. Die Funktion muss mit dem Modellierungstyp der Zielgröße konsistent sein. Standardmäßig „reg:squarederror“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

### Precision Recall Curves

**Syntax:** obj << Precision Recall Curves( state=0|1 )

**Beschreibung:** Stellt den Kompromiss zwischen Präzision (Precision) und Sensitivität (Recall) für verschiedene Klassifizierungsschwellenwerte dar. Diese Kurven werden bevorzugt in Szenarien eingesetzt, in denen ein Ungleichgewicht zwischen den Klassen besteht.

**JMP Version hinzugefügt:** 15

### Profiler

**Syntax:** obj << Profiler

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

**JMP Version hinzugefügt:** 15

### Publish Prediction Formula

**Syntax:** obj << Publish Prediction Formula

**Beschreibung:** Erstellt Vorhersageformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“.

**JMP Version hinzugefügt:** 15

### ROC Curves

**Syntax:** obj << ROC Curves( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität).

**JMP Version hinzugefügt:** 15

### Remove All But This Fit

**Syntax:** obj << ( fit[number] << Remove All But This Fit )

**Beschreibung:** Entfernt die Berichte und Diagramme für alle Modelle bis auf dieses.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

### Remove Fit

**Syntax:** obj << ( fit[number] << Remove Fit )

**Beschreibung:** Entfernt den gesamten Modellbericht.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << XGBoost(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

### Save Predicteds

**Syntax:** obj << Save Predicteds

**Beschreibung:** Speichert die Vorhersagewerte in einer neuen Spalte in der Datentabelle.

**JMP Version hinzugefügt:** 15

### Save Prediction Formula

**Syntax:** obj << Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Berechnungen können bei großen Modellen langsam sein.

**JMP Version hinzugefügt:** 15

### Save SHAPs

**Syntax:** obj << Save SHAPs

**Beschreibung:** Speichert Shapley-Werte in der Datentabelle. Diese Werte unterteilen Vorhersagen in Komponenten für jeden Prädiktor.

**JMP Version hinzugefügt:** 17

### Surface Profiler

**Syntax:** obj << Surface Profiler

**Beschreibung:** Blendet interaktive Graphen von Schnitten der Vorhersagefunktion ein oder aus.

**JMP Version hinzugefügt:** 15

### Tree Details

**Syntax:** obj << Tree Details( state=0|1 )

**Beschreibung:** Blendet die Aufgliederung jeder Baumteilung ein oder aus.

**JMP Version hinzugefügt:** 15

### Tuning Design Table

**Syntax:** Tuning Design Table( "table name" )

**Beschreibung:** Gibt den Namen einer geöffneten JMP-Datentabelle mit Parametereinstellungen an, die für die Anpassung einer Serie von Modellen verwendet werden. Die Spalten in dieser Tabelle müssen exakt mit den Parameternamen übereinstimmen, und jede Zeile muss Werte dieser Parameter für diese Modellanpassung enthalten. Parameter, die nicht angegeben werden, werden auf ihre Werte aus diesem Dialogfeld gesetzt.

**JMP Version hinzugefügt:** 15

### XGBoost Fit

**Syntax:** XGBoost Fit

### alpha

**Syntax:** obj << alpha( number=0.0 )

**Beschreibung:** Gibt den L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

### alpha_max

**Syntax:** obj << alpha_max( number=0.5 )

**Beschreibung:** Gibt den maximalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

### alpha_min

**Syntax:** obj << alpha_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L1-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

### base_score

**Syntax:** obj << base_score( number=0.5 )

**Beschreibung:** Gibt den anfänglichen Vorhersage-Score aller Instanzen an, das ist die globale systematische Abweichung. Der Mittelwert von y ist üblicherweise eine gute Wahl. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

### booster

**Syntax:** obj << booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**Beschreibung:** Gibt an, welcher Booster verwendet werden soll. Standardmäßig „gbtree“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

### colsample_bylevel

**Syntax:** obj << colsample_bylevel( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für die Stichprobenziehung für jede Schicht an. Die Stichprobenziehung geschieht einmal für jede neu erreichte Tiefe in einem Baum. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

### colsample_bynode

**Syntax:** obj << colsample_bynode( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für die Stichprobenziehung für jeden Knoten (Teilung) an. Die Stichprobenziehung geschieht jeweils einmal zu dem Zeitpunkt, wenn eine neue Teilung ausgewertet wird. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

### colsample_bytree

**Syntax:** obj << colsample_bytree( number=1.0 )

**Beschreibung:** Gibt den Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

### colsample_bytree_max

**Syntax:** obj << colsample_bytree_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

### colsample_bytree_min

**Syntax:** obj << colsample_bytree_min( number=0.5 )

**Beschreibung:** Gibt den minimalen Anteil von Spalten für das Ziehen einer Stichprobe beim Erzeugen jedes Baums an. Das Ziehen der Stichprobe geschieht einmal pro Baum. Dieser Wert muss zwischen 0 und 1 liegen. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

### eval_metric

**Syntax:** obj << eval_metric( text )

**Beschreibung:** Gibt die im Iterationsverlaufsdiagramm angezeigt Metrik an, wirkt sich jedoch nicht auf die eigentliche Modellanpassung aus. Lassen Sie diesen Wert für die Standardmetrik, die der Zielfunktion entspricht, leer oder geben Sie eine der folgenden Optionen an: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

### feature_selector

**Syntax:** obj << feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**Beschreibung:** Gibt die Funktionsauswahl und Sortiermethode für den linearen Booster an. Standardmäßig „cyclic“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Booster( "gblinear" ),
	Fit( feature_selector( "cyclic" ) )
);

```

### gamma

**Syntax:** obj << gamma( number=0.0 )

**Beschreibung:** Gibt die minimale Verlustreduktion an, die erforderlich ist, um eine weitere Partition an einem Blattknoten des Baums vorzunehmen. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

### grow_policy

**Syntax:** obj << grow_policy( "depthwise"|"lossguide"="depthwise" )

**Beschreibung:** Gibt die Methode an, um den Bäumen neue Knoten hinzuzufügen. Derzeit gilt diese Option nur, wenn tree_method=hist. Standardmäßig „depthwise“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

### interaction_constraints

**Syntax:** obj << interaction_constraints( text )

**Beschreibung:** Gibt Nebenbedingungen für die Wechselwirkungen von Features als geschachtelte Liste von Feature Indizes mithilfe von Klammern an. Gemeinsam gruppierte Features können nur miteinander in Wechselwirkung stehen.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( interaction_constraints( "[[0,1]]" ) ) );

```

### iterations

**Syntax:** obj << iterations( number=30 )

**Beschreibung:** Gibt die Anzahl von Boosting-Iterationen an. Standardmäßig „30“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

### iterations_max

**Syntax:** obj << iterations_max( number=100 )

**Beschreibung:** Gibt die maximale Anzahl von Boosting-Iterationen an. Standardmäßig „100“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

### iterations_min

**Syntax:** obj << iterations_min( number=20 )

**Beschreibung:** Gibt die minimale Anzahl von Boosting-Iterationen an. Standardmäßig „20“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

### lambda

**Syntax:** obj << lambda( number=1.0 )

**Beschreibung:** Gibt den L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

### lambda_max

**Syntax:** obj << lambda_max( number=2.0 )

**Beschreibung:** Gibt den maximalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „2.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

### lambda_min

**Syntax:** obj << lambda_min( number=0.0 )

**Beschreibung:** Gibt den minimalen L2-Regularisierungsterm für Gewichtungen an. Durch Erhöhen dieses Werts wird das Modell konservativer. Dieser Wert muss nicht-negativ sein. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

### learning_rate

**Syntax:** obj << learning_rate( number=0.3 )

**Beschreibung:** Gibt die Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.3“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

### learning_rate_max

**Syntax:** obj << learning_rate_max( number=0.4 )

**Beschreibung:** Gibt die maximale Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.4“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

### learning_rate_min

**Syntax:** obj << learning_rate_min( number=0.05 )

**Beschreibung:** Gibt die minimale Lernrate an. Kleinere Lernraten passen meist besser an, benötigen jedoch mehr Iterationen zum Konvergieren, während größere Lernraten schneller anpassen. Standardmäßig „0.05“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

### max_bin

**Syntax:** obj << max_bin( number=256 )

**Beschreibung:** Gibt die maximale Anzahl diskreter Klassen an, in die stetige Funktionen eingeordnet werden sollen. Diese Option gilt nur für tree_method=hist. Standardmäßig „256“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

### max_delta_step

**Syntax:** obj << max_delta_step( number=0.0 )

**Beschreibung:** Gibt den maximalen Deltaschritt an, den jede Blattausgabe annehmen kann. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

### max_depth

**Syntax:** obj << max_depth( number=6 )

**Beschreibung:** Gibt die maximale Tiefe des Baums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit größerer maximaler Tiefe haben ein größeres Risiko für Overfitting. Standardmäßig „6“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

### max_depth_max

**Syntax:** obj << max_depth_max( number=8 )

**Beschreibung:** Gibt die maximale Tiefe des Baummaximums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit Tiefen von 2^depth und größer haben ein größeres Risiko für Overfitting. Standardmäßig „8“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

### max_depth_min

**Syntax:** obj << max_depth_min( number=1 )

**Beschreibung:** Gibt die maximale Tiefe des Baumminimums an. Dieser Wert muss eine ganze Zahl sein. Die Komplexität steigt mit zunehmender Tiefe. Modelle mit Tiefen von 2^depth und größer haben ein größeres Risiko für Overfitting. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

### max_leaves

**Syntax:** obj << max_leaves( number=0 )

**Beschreibung:** Gibt die maximale Anzahl von hinzuzufügenden Knoten an. Diese Option gilt nur für grow_policy=lossguide. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

### min_child_weight

**Syntax:** obj << min_child_weight( number=1.0 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

### min_child_weight_max

**Syntax:** obj << min_child_weight_max( number=3.0 )

**Beschreibung:** Gibt die maximale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die maximale Größe jedes Blatts. Standardmäßig „3.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

### min_child_weight_min

**Syntax:** obj << min_child_weight_min( number=1.0 )

**Beschreibung:** Gibt die minimale Summe der Instanzgewichtung (Hessesch) an, die für ein untergeordnetes Element nötig ist. Dieser Wert ist die minimale Größe jedes Blatts. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

### monotone_constraints

**Syntax:** obj << monotone_constraints( text )

**Beschreibung:** Gibt Nebenbedingungen für Monotonie für jedes Feature an. Die Nebenbedingungen müssen in einer durch Komma getrennten Liste von Werten innerhalb von Klammern angegeben werden. Dabei bedeutet -1 = negativ, 1 = positiv und 0 = keine Nebenbedingung.

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
:Age << Set Modeling Type( "Continuous" );
XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

### normalize_type

**Syntax:** obj << normalize_type( "tree"|"forest"="tree" )

**Beschreibung:** Gibt die Art des Normalisierungsalgorithmus für den DART-Booster an. Standardmäßig „tree“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( normalize_type( "tree" ) ) );

```

### nthread

**Syntax:** obj << nthread( number=0 )

**Beschreibung:** Gibt die Anzahl von parallelen Threads für die Ausführung von XGBoost an. Standardmäßig werden alle verfügbaren Threads verwendet. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

### num_parallel_tree

**Syntax:** obj << num_parallel_tree( number=1 )

**Beschreibung:** Gibt die Anzahl von Boosted Trees an, die parallel wachsen. Die Ergebnisse werden dann gemittelt. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

### one_drop

**Syntax:** obj << one_drop( number=0 )

**Beschreibung:** Wenn dieses Flag im DART-Booster aktiviert ist, wird beim Dropout stets mindestens ein Baum weggelassen. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

### predictor

**Syntax:** obj << predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**Beschreibung:** Gibt die Art des Vorhersagealgorithmus an. Standardmäßig „auto“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

### process_type

**Syntax:** obj << process_type( "default"|"update"="default" )

**Beschreibung:** Gibt die Art des auszuführenden Boostingvorgangs an. Standardmäßig „default“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

### rate_drop

**Syntax:** obj << rate_drop( number=0.0 )

**Beschreibung:** Gibt die Dropout-Rate für den DART-Booster an. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

### refresh_leaf

**Syntax:** obj << refresh_leaf( number=1 )

**Beschreibung:** Gibt den Parameter der Aktualisierung an. Ist 1 festgelegt, werden Blätter und Knoten aktualisiert. Ist 0 festgelegt, werden nur Knoten aktualisiert. Standardmäßig „1“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

### sample_type

**Syntax:** obj << sample_type( "uniform"|"weighted"="uniform" )

**Beschreibung:** Gibt die Art des Algorithmus zum Ziehen von Stichproben für den DART-Booster an. Standardmäßig „uniform“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( sample_type( "uniform" ) ) );

```

### scale_pos_weight

**Syntax:** obj << scale_pos_weight( number=1.0 )

**Beschreibung:** Gibt das Gleichgewicht aus positiven und negativen Gewichtungen an, die für nicht balancierte Klassen nützlich sind. Ein typischer Wert ist Summe(negative Instanzen) / Summe(positive Instanzen). Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

### seed

**Syntax:** obj << seed( number=0 )

**Beschreibung:** Gibt den Startwert für den Zufallszahlengenerator an. Legen Sie diesen Wert für die Reproduzierbarkeit der Ergebnisse fest. Standardmäßig „0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

### sketch_eps

**Syntax:** obj << sketch_eps( number=0.03 )

**Beschreibung:** Wird nur für tree_method=approx verwendet. Dieser Wert kann annähernd in (1 / sketch_eps) = Anzahl von Klassen übersetzt werden. Standardmäßig „0.03“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

### skip_drop

**Syntax:** obj << skip_drop( number=0.0 )

**Beschreibung:** Gibt die Wahrscheinlichkeit dafür an, dass der Dropout-Vorgang während einer DART-Boosting-Iteration übersprungen wird. Standardmäßig „0.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

### subsample

**Syntax:** obj << subsample( number=1.0 )

**Beschreibung:** Gibt den Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

### subsample_max

**Syntax:** obj << subsample_max( number=1.0 )

**Beschreibung:** Gibt den maximalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „1.0“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

### subsample_min

**Syntax:** obj << subsample_min( number=0.5 )

**Beschreibung:** Gibt den minimalen Anteil von Zeilen für das Ziehen einer Stichprobe während jeder Iteration an. Dieser Wert muss zwischen 0 und 1 liegen. Dies ist eine Art von Bagging. Standardmäßig „0.5“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

### top_k

**Syntax:** obj << top_k( number=256 )

**Beschreibung:** Gibt die Anzahl von Top-Funktionen an, die bei den Greedy- und Thrifty-Funktionen zur Auswahl steht. Diese Option gilt nur für den gblinear-Booster. Standardmäßig „256“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

### tree_method

**Syntax:** obj << tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**Beschreibung:** Gibt den Algorithmus für die Baumerzeugung bei XGBoost an. Standardmäßig „auto“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

### tweedie_variance_power

**Syntax:** obj << tweedie_variance_power( number=1.5 )

**Beschreibung:** Gibt die Power der Tweedie-Verteilung an. Dieser Wert muss zwischen 1 und 2 liegen. Diese Option gilt nur für objective=reg:tweedie. Standardmäßig „1.5“.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost(
	Y( :Weight ),
	X( :Height ),
	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) )
);

```

### updater

**Syntax:** obj << updater( text )

**Beschreibung:** Gibt die Baumaktualisierung für den gbtree-Booster an. Geben Sie eine der folgenden Optionen an: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

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

### Censor

**Syntax:** obj << Censor( column )

**JMP Version hinzugefügt:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Change Variables

**Syntax:** obj << Change Variables

**Beschreibung:** Ändert X, Y und andere Variablen für nachfolgende Modelle.

**JMP Version hinzugefügt:** 16

### Compare

**Syntax:** obj << Compare

**Beschreibung:** Aktualisiert die XGBoost-Vergleichsmetriken.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );
obj << Compare( Correlation( 1 ) );

```

### Copy ByGroup Script

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Copy Script;

```

### Factor

**Syntax:** obj << Factor( column(s) )

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Fit

**Syntax:** obj << Fit

**Beschreibung:** Passt ein XGBoost-Modell an. Sie können XGBoost-Parameter angeben und darin Spezifikationen anpassen.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**Syntax:** obj << Freq( column )

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Measures

**Syntax:** obj << Get Measures

**JMP Version hinzugefügt:** 16

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
t = obj << Get Timing;
Show( t );

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

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Relaunch Analysis;

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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Response

**Syntax:** obj << Response( column(s) )

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Save Script to Script Window;

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

### Show Details

**Syntax:** obj << Show Details( state=0|1 )

**Beschreibung:** Weitere Details anzeigen.

**JMP Version hinzugefügt:** 16

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

### Title

**Syntax:** obj << Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Validation

**Syntax:** obj << Validation( column(s) )

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

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

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**Syntax:** obj << X( column(s) )

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### XGBoost

**Syntax:** XGBoost(Y( columns ), X( columns ))

**Beschreibung:** Vorhersagemodellierungsschnittstelle für eXtreme Gradient Boosted Trees.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**Syntax:** obj << Y( column(s) )

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = XGBoost( Y( :Weight ), X( :Height ), Fit );

```

