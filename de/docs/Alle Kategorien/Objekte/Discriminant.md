# Discriminant



## Elementmeldungen

### Apply This Model

**Syntax:** obj &lt;&lt; Apply This Model

**Beschreibung:** Verwendet die aktuelle Variablenauswahl in der schrittweisen Variablenauswahl als Modell und schließt das Dialogfeld.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
Wait( 2 );
obj << Apply This Model;

```

### Biplot Ray Position

**Syntax:** obj &lt;&lt; Biplot Ray Position( [x position, y position, radius scaling] )

**Beschreibung:** Ermöglicht Ihnen, die Position und Radiusskalierung der Biplot-Strahlen im kanonischen Diagramm und im kanonischen 3D-Diagramm anzugeben.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Biplot Ray Position( [0, 1.7, 3.5] );

```

### Canonical 3D Plot

**Syntax:** obj &lt;&lt; Canonical 3D Plot( state=0|1 )

**Beschreibung:** Zeigt eine dreidimensionale Version des kanonischen Diagramms an. Hinweis: Nur verfügbar, wenn vier oder mehr Gruppen vorhanden sind.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Canonical 3D Plot( 1 );
(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**Syntax:** obj &lt;&lt; Canonical Plot( state=0|1 )

**Beschreibung:** Zeigt das kanonische Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Canonical Plot( 1 );

```

### Color Points

**Syntax:** obj &lt;&lt; Color Points

**Beschreibung:** Färbt die Punkte im kanonischen Diagramm und im kanonischen 3D-Diagramm basierend auf den Stufen der X-Variable. Farbsymbole werden den Zeilen in der Datentabelle hinzugefügt.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
dt << Clear Row States;
Wait( 2 );
obj << Color Points;

```

### Consider New Levels

**Syntax:** obj &lt;&lt; Consider New Levels( fraction )

**Beschreibung:** Gibt an, dass einige Punkte möglicherweise nicht in eine bekannte Gruppe passen und als aus einer neuen Gruppe ohne Scores betrachtet werden sollen. Geben Sie die Priorwahrscheinlichkeit einer neuen Stufe ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Consider New Levels( 0.05 );

```

### Cross Validate by Excluded Rows

**Syntax:** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**Beschreibung:** Gibt an, dass die ausgeschlossenen Zeilen einen Validierungssatz bilden, für den Anpassungskenngrößen berechnet werden. Standardmäßig „0“.

**JMP Version hinzugefügt:** 14

<b>Element im Startfenster: Ja</b>

### Discriminant Method

**Syntax:** obj &lt;&lt; Discriminant Method( Linear );obj &lt;&lt; Discriminant Method( Quadratic );obj &lt;&lt; Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) );obj &lt;&lt; Discriminant Method( Wide Linear )&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Diskriminanzmethode an.

Die Option Regularized erfordert zusätzliche Argumente. Der Parameter Regularization Lambda reicht von 0 (quadratische Diskriminanzanalyse) bis 1 (lineare Diskriminanzanalyse). Der Parameter Regularization Gamma reicht von 0 (keine Schrumpfung) bis 1 (nur Diagonalen).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Discriminant Method(
	Regularized,
	Regularization Lambda( 0.2 ),
	Regularization Gamma( 0.6 )
);

```

### Discriminant Scores

**Syntax:** obj &lt;&lt; Discriminant Scores( state=0|1 )

**Beschreibung:** Blendet eine Tabelle der Diskriminanz-Scores für jede Zeile ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Discriminant Scores( 1 );

```

### Enter All

**Syntax:** obj &lt;&lt; Enter All

**Beschreibung:** Fügt in der schrittweise Variablenauswahl dem Modell alle Variablen hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;

```

### Get Discrim Matrices

**Syntax:** obj &lt;&lt; Get Discrim Matrices

**Beschreibung:** Gibt eine Liste zurück, die die Diskriminanzmatrizen von der Analyse enthält. Die Liste enthält eine benannte Liste für jedes der folgenden Elemente: die Y-Namen, die X-Namen, die X-Werte und die Y-Mittelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
z = obj << Get Discrim Matrices;
Show( z );

```

### Get Measures

**Syntax:** obj &lt;&lt; Get Measures

**Beschreibung:** Gibt zusammenfassende Anpassungsmaße aus dem Modell zurück.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Get Measures;

```

### Go

**Syntax:** obj &lt;&lt; Go

**Beschreibung:** Nimmt Kovariablen in Vorwärtsschritten hinzu, bis es in r² keine weitere Verbesserung gibt.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Go;

```

### Make Scoring Script

**Syntax:** obj &lt;&lt; Make Scoring Script

**Beschreibung:** Erstellt ein Skript, das die von der Option „Formeln speichern“ gespeicherten Formelspalten erzeugt. Sie können dieses Skript speichern und ggf. mit anderen Datentabellen verwenden, um die Formelspalten zu erstellen, die Wahrscheinlichkeiten für die Zugehörigkeit zu berechnen und Gruppenzugehörigkeit vorherzusagen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Make Scoring Script;

```

### Precision Recall Curve

**Syntax:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**Beschreibung:** Blendet das Diagramm der Precision-Recall-Kurve ein oder aus, das für jede Stufe der Zielgrößenvariable eine Kurve enthält. Eine Precision-Recall-Kurve stellt die Präzisionswerte gegen die Werte der Sensitivität bei einer Vielzahl von Schwellenwerten dar.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Precision Recall Curve( 1 );

```

### Profiler

**Syntax:** obj &lt;&lt; Profiler( state=0|1 )

**Beschreibung:** Blendet die Vorhersageanalyse ein oder aus, die dazu dient, die Vorhersagegleichung grafisch durch Schichtenbildung Faktor für Faktor zu untersuchen. Die Vorhersageanalyse enthält Funktionen für die Optimierung.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Profiler;

```

### Publish Probability Formulas

**Syntax:** obj &lt;&lt; Publish Probability Formulas

**Beschreibung:** Erstellt Wahrscheinlichkeitsformeln und speichert sie als Formelspaltenskripte in der Plattform „Formeldepot“. Wenn kein Bericht „Formeldepot“ geöffnet ist, erstellt diese Option ein Formeldepot.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Publish Probability Formulas;

```

### ROC Curve

**Syntax:** obj &lt;&lt; ROC Curve( state=0|1 )

**Beschreibung:** Zeigt die ROC-Kurve (Receiver-Operationscharakteristik) für jede Stufe der Zielgrößenvariable an oder blendet sie aus. Die ROC-Kurve ist ein Diagramm der Sensitivität im Vergleich zur (1 - Spezifizität).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
Wait( 0 );
obj << ROC Curve( 1 );

```

### Remove All

**Syntax:** obj &lt;&lt; Remove All

**Beschreibung:** Entfernt in der schrittweise Variablenauswahl alle Variablen aus dem Modell.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Remove All;

```

### Save Canonical Scores

**Syntax:** obj &lt;&lt; Save Canonical Scores

**Beschreibung:** Speichert Spalten in der Datentabelle, die kanonische Score-Formeln für jede Beobachtung enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Canonical Scores;

```

### Save Discrim Matrices

**Syntax:** obj &lt;&lt; Save Discrim Matrices

**Beschreibung:** Speichert ein Skript in der Datentabelle, dass eine Liste der Diskriminanzmatrizen von der Analyse enthält. Die Liste enthält eine benannte Liste für jedes der folgenden Elemente: die Y-Namen, die X-Namen, die X-Werte und die Y-Mittelwerte.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Discrim Matrices;

```

### Save Formulas

**Syntax:** obj &lt;&lt; Save Formulas

**Beschreibung:** Speichert Formeln für Distanz, Wahrscheinlichkeit und für die vorhergesagte Zugehörigkeit in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Formulas;

```

### Save To New Data Table

**Syntax:** obj &lt;&lt; Save To New Data Table

**Beschreibung:** Speichert die Gruppenmittelwerte und die Biplot-Strahlen der kanonischen Variablen zusammen mit den kanonischen Scores in einer neuen Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save To New Data Table;

```

### Scatterplot Matrix

**Syntax:** obj &lt;&lt; Scatterplot Matrix

**Beschreibung:** Öffnet einen Bericht zur Streudiagrammmatrix, der eine Matrix mit einem Streudiagramm für jedes Paar von Kovariablen anzeigt. Die Option ruft die Plattform „Streudiagrammmatrix“ mit schattierten Dichteellipsen für jede Gruppe auf. Die Streudiagramme enthalten alle Beobachtungen in der Datentabelle, auch wenn Validierung verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Scatterplot Matrix( 1 );

```

### Score Data

**Syntax:** obj &lt;&lt; Score Data( state=0|1 )

### Select Misclassified Rows

**Syntax:** obj &lt;&lt; Select Misclassified Rows

**Beschreibung:** Wählt die fehlklassifizierten Zeilen in der Datentabelle und im Berichtsfenster aus, die eine Liste nach Zeile anzeigen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );
obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**Syntax:** obj &lt;&lt; Select Uncertain Rows( fraction )

**Beschreibung:** Wählt Zeilen mit unbestimmten Klassifikationen in der Datentabelle und im Berichtsfenster aus, die eine Liste nach Zeilen anzeigen. Eine unsichere Zeile ist eine, deren Wahrscheinlichkeit der Gruppenzugehörigkeit in einer beliebigen Gruppe weder nahe 0 noch nahe 1 ist. Das Argument fraction stellt dar, welche Differenz der Wahrscheinlichkeit von 0 oder 1 als unsicher definiert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );
obj << Select Uncertain Rows( 0.2 );

```

### Show Biplot Rays

**Syntax:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**Beschreibung:** Blendet die Biplot-Strahlen im kanonischen Diagramm und im kanonischen 3D-Diagramm ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**Syntax:** obj &lt;&lt; Show Canonical Details( state=0|1 )

**Beschreibung:** Zeigt den Bericht der kanonischen Details an oder blendet ihn aus.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**Syntax:** obj &lt;&lt; Show Canonical Structure( state=0|1 )

**Beschreibung:** Zeigt den Bericht der kanonischen Strukturen an oder blendet sie aus.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**Syntax:** obj &lt;&lt; Show Canonical Structures( state=0|1 )

### Show Classification Counts

**Syntax:** obj &lt;&lt; Show Classification Counts( state=0|1 )

**Beschreibung:** Blendet die Konfusionsmatrizen ein oder aus und zeigt die Anzahl der beobachteten Werte über Vorhersage im Bericht der Score-Zusammenfassungen an. Standardmäßig zeigt der Bericht der Score-Zusammenfassungen eine Konfusionsmatrix für jede Stufe der kategorialen X-Variablen an.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**Syntax:** obj &lt;&lt; Show Distances to Each Group( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die quadrierte Mahalanobis-Distanz jeder Beobachtung zu jedem Gruppenmittelwert enthält.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Distances to each group( 1 );

```

### Show Group Means

**Syntax:** obj &lt;&lt; Show Group Means( state=0|1 )

**Beschreibung:** Blendet den Gruppenmittelwertbericht ein oder aus, der den Mittelwert jeder Kovariablen angibt. Mittelwerte für jede Stufe der X-Variablen und Gesamtmittelwerte werden angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**Syntax:** obj &lt;&lt; Show Interesting Rows Only( state=0|1 )

**Beschreibung:** Im Bericht der Diskriminanz-Scores werden nur die fehlklassifizierten Zeilen angezeigt und solche mit einer vorhergesagten Wahrscheinlichkeit zwischen 0,05 und 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**Syntax:** obj &lt;&lt; Show Means CL Ellipses( state=0|1 )

**Beschreibung:** Blendet 95%-Konfidenzellipsen für den Mittelwert jeder Gruppe im kanonischen Diagramm und im kanonischen 3D-Diagramm ein oder aus und geht von Normalverteilung aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**Syntax:** obj &lt;&lt; Show Normal 50% Contours( state=0|1 )

**Beschreibung:** Zeigt den Bereich der Normalellipse, der geschätzt 50% der Population enthält, für jede Gruppe im kanonischen Diagramm und im kanonischen 3D-Diagramm an oder blendet ihn aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Normal 50% Contours( 1 );

```

### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Blendet die Punkte im kanonischen Diagramm und im kanonischen 3D-Diagramm ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**Syntax:** obj &lt;&lt; Show Probabilities to Each Group( state=0|1 )

**Beschreibung:** Blendet einen Bericht ein oder aus, der die Wahrscheinlichkeit enthält, dass eine Beobachtung zu jeder der von der kategorialen X-Variablen definierten Gruppen gehört.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**Syntax:** obj &lt;&lt; Show Within Covariances( state=0|1 )

**Beschreibung:** Blendet Berichte in Zusammenhang mit den Kovarianzmatrizen ein oder aus. Die angezeigten Berichte hängen von der angegebenen Diskriminanzmethode ab. Nicht verfügbar für die breite lineare Diskriminanzmethode.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**Syntax:** obj = Discriminant(...Shrink Covariances( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Schrumpft die nichtdiagonalen Elemente der gepoolten Kovarianzmatrix innerhalb der Gruppe und der Kovarianzmatrizen innerhalb der Gruppe. Das kann die Stabilität verbessern und die Varianz der Vorhersage reduzieren.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Shrink Covariances( 1 )
);

```

### Specify Priors

**Syntax:** obj &lt;&lt; Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**Beschreibung:** Legt die Priorwahrscheinlichkeiten für jede Stufe der X-Variable fest.

```jsl

dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**Syntax:** obj &lt;&lt; Step Backward

**Beschreibung:** Geht in der schrittweise Variablenauswahl einen Schritt rückwärts, indem eine Variable aus dem Modell entfernt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Step Backward;

```

### Step Forward

**Syntax:** obj &lt;&lt; Step Forward

**Beschreibung:** Geht in der schrittweise Variablenauswahl einen Schritt vorwärts, indem dem Modell eine Variable hinzugefügt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;

```

### Stepwise Variable Selection

**Syntax:** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Blendet das Bedienfeld für die Spaltenauswahl ein oder aus. Dieses Bedienfeld enthält Optionen, mit denen Sie eine schrittweise Variablenauswahl mithilfe von Kovarianzanalyse und p-Werten vornehmen können. Diese Option ist bei der Methode breit linear nicht verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Stepwise Variable Selection( 1 );

```

### Uncentered Canonical

**Syntax:** obj = Discriminant(...Uncentered Canonical( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Unterdrückt die Zentrierung von kanonischen Scores für die Kompatibilität mit Vorgängerversionen von JMP.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Uncentered Canonical( 1 )
);

```

### Use Matrix Columns

**Syntax:** obj &lt;&lt; Use Matrix Columns( state=0|1 )

**Beschreibung:** Gibt an, dass Matrixspalten in Berechnungen verwendet werden. Matrixspalten können für die Berechnung von Scoring-Vorhersagen in Formelspalten den Aufwand reduzieren.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Matrix Columns( 1 )
);

```

### Use Pseudoinverses

**Syntax:** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Verwendet Moore-Penrose Pseudoinverse in der Analyse, wenn die Kovarianzmatrix singulär ist. Die resultierenden Scores berücksichtigen alle Kovariablen. Wenn nicht aktiviert, verwirft die Analyse Kovariablen, die lineare Kombinationen von Kovariablen sind, die sich in der Liste von Y, Kovariablen vorher befinden. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Pseudoinverses( 0 )
);

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj &lt;&lt; Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Syntax:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Beschreibung:** Wendet eine zuvor erstellte Voreinstellung auf das Objekt an und aktualisiert die Optionen und Anpassungen entsprechend den gespeicherten Einstellungen.

**JMP Version hinzugefügt:** 18

#### Anonyme Voreinstellung

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### In Ordner(n) suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Nach Name suchen

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj &lt;&lt; Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Syntax:** obj &lt;&lt; Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj &lt;&lt; Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj &lt;&lt; Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

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

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj &lt;&lt; Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj &lt;&lt; Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj &lt;&lt; Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Syntax:** obj &lt;&lt; Get Where Expr

**Beschreibung:** Gibt den Ausdruck Where für die Teilmenge der Daten zurück, wenn die Plattform mit By() oder Where() gestartet wurde. Andernfalls wird Empty() zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Syntax:** obj &lt;&lt; Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj &lt;&lt; Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

```jsl

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

### Redo Analysis

**Syntax:** obj &lt;&lt; Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj &lt;&lt; Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

```jsl

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

**Syntax:** obj &lt;&lt; Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

```jsl

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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj &lt;&lt; Report;Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

```jsl

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

```jsl


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

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj &lt;&lt; Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Syntax:** obj &lt;&lt; Title( "new title" )

**Beschreibung:** Legt den Titel für die Plattform fest.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj &lt;&lt; View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## Spalten

### By

**Syntax:** obj = Discriminant(...&lt;By( column(s) )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Categories

**Syntax:** obj = Discriminant(...Categories( column )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Spalte an, die die Kategorien oder Gruppen enthält, in die Beobachtungen klassifiziert werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Covariates

**Syntax:** obj = Discriminant(...Covariates( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Spalten an, die stetige Variablen enthalten, die dazu dienen, Beobachtungen in Kategorien zu klassifizieren.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Freq

**Syntax:** obj = Discriminant(...&lt;Freq( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Freq( _freqcol )
);

```

### Validation

**Syntax:** obj = Discriminant(...&lt;Validation( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine numerische Spalte an, die die Validierungssätze definiert. Diese Spalte darf höchstens drei verschiedene Werte enthalten.

```jsl

dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
obj = dt << Discriminant(
	X( :Severity ),
	Validation( :Validation ),
	Y( :BMI, :Age, :Time ),
	Use Matrix Columns( 1 )
);

```

### Weight

**Syntax:** obj = Discriminant(...&lt;Weight( column )&gt;...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Weight( _weightcol )
);

```

### X

**Syntax:** obj = Discriminant(...X( column )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Spalte an, die die Kategorien oder Gruppen enthält, in die Beobachtungen klassifiziert werden sollen.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

### Y

**Syntax:** obj = Discriminant(...Y( column(s) )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Gibt die Spalten an, die stetige Variablen enthalten, die dazu dienen, Beobachtungen in Kategorien zu klassifizieren.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

## Zugehörige Konstruktoren

### Discriminant

**Syntax:** Discriminant( Y( columns ), X( columns ) )

**Beschreibung:** Schätzt die Distanz von jeder Beobachtung zum multivariaten Mittelwert jeder Gruppe (Centroid) mittels Mahalanobis-Distanz. Die Beobachtungen werden dann in die Gruppen klassifiziert, denen sie am nächsten sind.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width )
);

```

