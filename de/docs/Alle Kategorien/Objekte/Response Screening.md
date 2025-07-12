# Response Screening



## Elementmeldungen

### Cauchy

**Syntax:** obj = Response Screening(...Cauchy( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Schätzt Parameter mithilfe der Maximum-Likelihood und einer Cauchy Link-Funktion. Diese Schätzmethode geht davon aus, dass die Fehler eine Cauchy-Verteilung haben, die stärkere Enden hat als die Normalverteilung. Diese Methode verringert die Gewichtung von Ausreißern.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 48 ) ), Cauchy( 1 ) );

```

### Common X Scale

**Syntax:** obj = Response Screening(...Common X Scale( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Benachrichtigt die Plattform, dass alle stetigen X-Variablen auf einer gemeinsamen Skala liegen. Das ist nötig, um die Steigungen unterschiedlicher X-Variablen zu vergleichen.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	Y( :Sepal length, :Sepal width ),
	X( :Petal length, :Petal width ),
	Common X Scale
);

```

### Common Y Scale

**Syntax:** obj = Response Screening(...Common Y Scale( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Benachrichtigt die Plattform, dass alle stetigen Zielgrößen auf einer gemeinsamen Skala liegen. Das ist nötig, um die Differenzen der Mittelwerte oder Steigungen zu vergleichen.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Common Y Scale
);

```

### Comparisons

**Syntax:** obj = Response Screening(...Comparisons( "Jede mit Kontrolle"|"Alle Kombinationen" )...)

**Beschreibung:** Specifies the method for comparing means or rates. You can compare each level with a control group level or compare all possible level combinations.

**JMP Version hinzugefügt:** 19

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Comparisons( "All combinations" ),
	Name( "2 by M Table" )(1)
);

```

### Corr

**Syntax:** obj = Response Screening(...Corr( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Berechnet die Pearsons Produktmomente-Korrelation in Bezug auf die Indizes, die von der Wertereihenfolge definiert sind.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Employee Tenure, :Position Tenure, :Age Group ),
	Y( :Job Satisfaction ),
	Corr( 1 )
);

```

### Empirical Bayes Shrinkage

**Syntax:** obj = Response Screening(...Empirical Bayes Shrinkage( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Schrumpft die Residuenvarianzschätzwerte in Richtung eines geschätzten a-priori-Modus, wobei die Stärke über alle Schätzungen hinweg übernommen wird. Dies ist nützlich beim Screening vieler stetiger Y-Variablen auf einer gemeinsamen Skala.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 88 ) ),
	Common Y Scale,
	Empirical Bayes Shrinkage( 1 )
);

```

### Fit Selected Items

**Syntax:** obj << Fit Selected Items

**Beschreibung:** Fügt dem Zielgrößen-Screening-Bericht „Y nach X anpassen“-Berichte hinzu. Die hinzugefügten Berichte entsprechen ausgewählten Punkten in den Diagrammen oder ausgewählten Zeilen in der Ergebnistabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Fit Selected Items;

```

### Force X Categorical

**Syntax:** obj = Response Screening(...Force X Categorical( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Ignoriert den Modellierungstyp und behandelt alle X-Spalten als kategorial.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :height, :sex ), Y( :age, :weight ), Force X Categorical( 1 ) );

```

### Force X Continuous

**Syntax:** obj = Response Screening(...Force X Continuous( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Ignoriert den Modellierungstyp und behandelt alle X-Spalten als stetig.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Age Group, :Job Satisfaction ),
	Y( :Gender, :Single Status ),
	Force X Continuous( 1 )
);

```

### Force Y Categorical

**Syntax:** obj = Response Screening(...Force Y Categorical( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Ignoriert den Modellierungstyp und behandelt alle Y-Spalten als kategorial.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( Y( :height, :sex ), X( :age, :weight ), Force Y Categorical( 1 ) );

```

### Force Y Continuous

**Syntax:** obj = Response Screening(...Force Y Continuous( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Ignoriert den Modellierungstyp und behandelt alle Y-Spalten als stetig.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( Y( :age ), X( :height, :weight ), Force Y Continuous( 1 ) );

```

### Get Crosstab RTF

**Syntax:** obj << Get Crosstab RTF( state=0|1 )

**Beschreibung:** Get an RTF source for a crosstab table.

**JMP Version hinzugefügt:** 19

### Get Crosstab Script

**Syntax:** obj << Get Crosstab Script( state=0|1 )

**Beschreibung:** Get a JSL display script for a crosstab table.

**JMP Version hinzugefügt:** 19

### Get PValues

**Syntax:** obj << Get PValues

**Beschreibung:** Gibt eine Referenz auf die p-Wert-Tabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Outlier Indicator
);
pvals = obj << Get PValues;
Show( pvals );

```

### Kappa

**Syntax:** obj = Response Screening(...Kappa( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Fügt der Ergebnistabelle eine neue Spalte namens Kappa hinzu. Kappa ist ein Maß für die Übereinstimmung zwischen Y und X.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Mail Messages.jmp" );
dt << Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );

```

### Kruskal Wallis Test

**Syntax:** obj = Response Screening(...Kruskal Wallis Test( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Berechnet den Kruskal-Wallis-Test, einen nichtparametrischen (Wilcoxon)-Rangtest für stetige Y-Variablen nach kategorialen X-Variablen.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Kruskal Wallis Test( 1 ) );

```

### Max Comparison Levels

**Syntax:** obj = Response Screening(...Max Comparison Levels( number=100 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Anzahl Stufen an, die in Vergleichen unterstützt werden. Standardmäßig „100“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Wafer Number ),
	Y( Column Group( "Responses" ) ),
	Max Comparison Levels( 24 )
);

```

### Max Logworth

**Syntax:** obj = Response Screening(...Max Logworth( number )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Steuert die Skala von Diagrammen mit Logwertigkeitswerten. Logwertigkeitswerte, die den angegebenen Wert überschreiten, werden als der angegebene Wert gezeichnet, um extreme Skalen in Logwertigkeitsdiagrammen zu verhindern.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Max Logworth( 1000 )
);

```

### Missing is Category

**Syntax:** obj = Response Screening(...Missing is Category( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Behandelt die fehlenden Werte einer kategorialen Variable als separate Kategorie.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
Row() = 1;
:age = .;
Row() = 8;
:age = .;
dt << Response Screening( X( :age ), Y( :sex ), Missing is Category( 1 ) );

```

### Negative Binomial Y

**Syntax:** obj = Response Screening(...Negative Binomial Y( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Passt jede Y-Zielgröße als Häufigkeit mit einer Negativ-binomial-Verteilung an.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening(
	X( :clean ),
	Grouping( :failure ),
	Y( :N ),
	Negative Binomial Y( 1 )
);

```

### No Report

**Syntax:** obj = Response Screening(...No Report( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Unterdrückt das Berichtsfenster. Verwenden Sie diese Option, um Speicherbefehle auszuführen, um Ergebnisse zu erhalten, ohne dass das Berichtsfenster angezeigt wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save PValues,
	No Report( 1 )
);

```

### PValues Table on Launch

**Syntax:** obj = Response Screening(...PValues Table on Launch( state=0|1 )...)

**Beschreibung:** Erstellt eine Datentabelle für die p-Werte und einzelne Kenngrößen der Modellanpassung. Standardmäßig „0“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 88 ) ),
	Robust,
	PValues Table on Launch( 1 )
);

```

### Paired X and Y

**Syntax:** obj = Response Screening(...Paired X and Y( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt Tests nur für Y-Spalten gepaart mit X-Spalten entsprechend ihrer Reihenfolge im Startfenster durch. Beispiel: Y1 wird mit X1 gepaart und Y2 wird mit X2 gepaart.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :age, :sex ), Y( :height, :weight ), Paired X and Y( 1 ) );

```

### Poisson Y

**Syntax:** obj = Response Screening(...Poisson Y( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Passt jede Y-Zielgröße als Häufigkeit mit einer Poisson-Verteilung an.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Poisson Y( 1 ) );

```

### Practical Difference Portion

**Syntax:** obj << Practical Difference Portion( number=0.10 )

**Beschreibung:** Gibt den Anteil des Spezifikationsbereichs an, der eine Differenz darstellt, die Sie als praktisch bedeutsam betrachten. Standardmäßig „0.10“.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Practical Differences and Equivalences

**Syntax:** obj << Practical Differences and Equivalences( Practical Portion(fraction) | Specific Difference(number) )

**Beschreibung:** Bei einer vorgegebenen zu erkennenden Differenz wird getestet, ob die tatsächliche Differenz signifikant größer oder signifikant kleiner ist als die zu erkennende Differenz im Absolutwert.

### Quartiles per Group

**Syntax:** obj = Response Screening(...Quartiles per Group( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Berechnet die Quartile und den Bereich für jede Gruppe für stetige Y-Variablen nach kategorialen X-Variablen.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Quartiles per Group( 1 ) );

```

### Ratio Adjustment

**Syntax:** obj = Response Screening(...Ratio Adjustment( "Keine Adjustierung"|"Wenn eine Null, 0,5 addieren"|"Immer 0,5 addieren" )...)

**Beschreibung:** Bietet Optionen zum Addieren von 0,5 zu Zellenhäufigkeiten bei der Berechnung von Risikoverhältnissen, Chancenverhältnissen und Risikodifferenzen. Diese Adjustierung verhindert Probleme, die bei Division durch Null entstehen.

**JMP Version hinzugefügt:** 17

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Ratio Adjustment( "Add 0.5 Always" ),
	Name( "2 by M Table" )(1)
);

```

### Robust

**Syntax:** obj = Response Screening(...Robust( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Passt Regressions- und ANOVA-Modelle mithilfe der Huber-M-Schätzmethode an, die gegenüber Ausreißern resistent ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust( 1 ) );

```

### Save 2 by M

**Syntax:** obj << Name( "Save 2 by M table" )

**Beschreibung:** Speichert die Informationen im Bericht „2 x M“ sowie andere Prüfgrößen in einer neuen Datentabelle.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career )
);
obj << Name( "2 by M Table" )(1);
obj << Name( "Save 2 by M Table" );

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career )
);
obj << "2 by M Table"n( 1 );
obj << "Save 2 by M Table"n;

```

### Save Compare Means

**Syntax:** obj << Save Compare Means

**Beschreibung:** Erstellt eine Datentabelle, die die Ergebnisse der Tests aller paarweisen Vergleiche über die Stufen der kategorialen Variable enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Compare Means
);

```

### Save Means

**Syntax:** obj << Save Means

**Beschreibung:** Erstellt eine Datentabelle, die die Häufigkeiten, Mittelwerte und Standardabweichungen für jede Stufe der kategorialen Variable enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means );

```

### Save Means Differences

**Syntax:** obj << Save Means Differences

**Beschreibung:** Erstellt eine Datentabelle, die die Ergebnisse der Tests aller paarweisen Vergleiche über die Stufen der kategorialen Variable enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Means Differences
);

```

### Save Outlier Indicator

**Syntax:** obj << Save Outlier Indicator

**Beschreibung:** Speichert eine Gruppe von Indikatorspalten in der ursprünglichen Datentabelle, um Ausreißer anzuzeigen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Outlier Indicator
);

```

### Save PValues

**Syntax:** obj << Save PValues

**Beschreibung:** Erstellt eine Datentabelle, die die Informationen in der Ergebnistabelle enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues );

```

### Save Std Residuals

**Syntax:** obj << Save Std Residuals

**Beschreibung:** Für jede Anpassung wird der ursprünglichen Datentabelle eine Spalte hinzugefügt, die die Residuen dividiert durch ihre geschätzte Standardabweichung enthält.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Save Std Residuals
);

```

### Select Columns

**Syntax:** obj << Select Columns( condition )

**Beschreibung:** Wählt Spalten in der ursprünglichen Datentabelle aus, die den ausgewählten Zeilen in der Ergebnistabelle entsprechen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Select Columns;

```

### Select Where

**Syntax:** obj << Select Where

**Beschreibung:** Elemente in der Berichtstabelle auswählen, die einer bestimmten Bedingung entsprechen.

**JMP Version hinzugefügt:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );

```

### Show Crosstab Report

**Syntax:** obj << Show Crosstab Report( state=0|1 )

**Beschreibung:** Experimental Hidden Feature: Show the details for each X and Y combination in a crosstab cell

**JMP Version hinzugefügt:** 19

### Show Means Differences

**Syntax:** obj << Show Means Differences

**Beschreibung:** Zeigt das Diagramm der Logwertigkeit nach Differenz und den Bericht der Differenzen der Mittelwerte im Berichtsfenster „Zielgrößen-Screening“ an. Diese Option geht davon aus, dass die Y-Variablen auf einer gemeinsamen Skala liegen.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( Column Group( "Markers" ) ),
	X( :Sex, :Disease Status ),
	Common Y Scale( 1 ),
	Show Means Differences( 1 ),
	SendToReport(
		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),
		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )
	)
);

```

### Show Plots

**Syntax:** obj << Show Plots( state=0|1 )

**Beschreibung:** Blendet die Diagramme im Berichtsfenster ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Report Tables

**Syntax:** obj << Show Report Tables( state=0|1 )

**Beschreibung:** Blendet die Ergebnistabellen im Berichtsfenster ein oder aus. Standardmäßig ein.

**JMP Version hinzugefügt:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Slopes

**Syntax:** obj << Show Slopes

**Beschreibung:** Zeigt das Diagramm der Logwertigkeit nach Steigung im Berichtsfenster „Zielgrößen-Screening“ an. Diese Option geht davon aus, dass die Y-Variablen auf einer gemeinsamen Skala liegen und die X-Variablen auf einer gemeinsamen Skala liegen.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Show Slopes( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

### Specific Difference to Detect

**Syntax:** obj << Specific Difference to Detect( number )

**Beschreibung:** Gibt anstelle eines Anteils eines Spezifikationsbereichs oder Sigma eine zu erkennende Differenz an. Diese Option geht davon aus, dass alle Y-Variablen auf einer gemeinsamen Skala liegen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Subgroup Twoway

**Syntax:** obj = Response Screening(...Subgroup Twoway( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Passt alle zweifaktoriellen Untergruppenkombinationen an. Diese Option ist nur verfügbar, wenn mindestens eine Untergruppenvariable definiert ist.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening(
	X( :height ),
	Y( :weight ),
	Subgroup( :age, :sex ),
	Subgroup Twoway( 1 )
);

```

### Tabbed Report Layout

**Syntax:** obj << Tabbed Report Layout( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 17

### Unthreaded

**Syntax:** obj = Response Screening(...Unthreaded( state=0|1 )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Unterdrückt Multithreading.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Unthreaded( 1 )
);

```

### Volcano Plots Use FDR Axis

**Syntax:** obj = Response Screening(...Volcano Plots Use FDR Axis( state=0 )...)

**Beschreibung:** Verwenden Sie bei Vulkandiagrammen auf der vertikalen Achse die FDR-korrigierte Logwertigkeit statt der unkorrigierten Logwertigkeit. Standardmäßig „0“.

**JMP Version hinzugefügt:** 18

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Common Y Scale( 1 ),
	Common X Scale( 1 ),
	Volcano Plots Use FDR Axis( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

## Freigegebene Elementmeldungen

### Action

**Syntax:** obj << Action

**Beschreibung:** Allzwecköffnung innerhalb einer Plattform zum Einfügen von auszuwertenden Ausdrücken. Setzt die Kontexte für Anzeigefeld und Datentabelle kurzzeitig auf die Plattform.

```jsl

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

**In Ordner(n) suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Nach Name suchen**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**Syntax:** obj << Automatic Recalc( state=0|1 )

**Beschreibung:** Wiederholt die Analyse bei Ausschluss und Datenänderungen automatisch. Wenn die Option „Automatic Recalc“ eingeschaltet ist, sollten Sie in Betracht ziehen, Wait(0)-Befehle zu verwenden, um sicherzustellen, dass die Ausschlüsse und Datenänderungen vor der Neuberechnung wirksam werden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Syntax:** obj << Broadcast(message)

**Beschreibung:** Sendet eine Meldung an eine Plattform. Wenn es sich bei den zurückgegebenen Ergebnissen von einzelnen Objekten um Tabellen handelt, werden sie, wenn möglich, verkettet. Das endgültige Format ist entweder identisch mit dem Ergebnis der Option „Kombinierte Tabelle speichern“ in einem Tabellenfeld oder mit dem Ergebnis der Option „Verketten“ mithilfe einer Quellspalte. Ansonsten werden die Ergebnisse in einer Liste gespeichert und zurückgegeben.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Syntax:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Beschreibung:** Fügt ein Bedienfeld zum Ändern der Variablen der Plattform hinzu

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

**Syntax:** obj << Copy ByGroup Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj << Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj << Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Data Table Window;

```

### Get By Levels

**Syntax:** obj << Get By Levels

**Beschreibung:** Gibt ein assoziatives Array zurück, das die Nach-Gruppenspalten ihren Werten zuordnet.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Syntax:** obj << Get ByGroup Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj << Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

**Allgemein**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plattform mit Filter**

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

**Syntax:** obj << Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Syntax:** obj << Get Group Platform

**Beschreibung:** Plattformobjekt der Gruppe zurückgeben, wenn diese Plattform Teil einer Gruppe ist. Andernfalls wird Empty() zurückgegeben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Syntax:** obj << Get Script

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und gibt es als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj << Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj << Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Syntax:** obj << Get Web Support

**Beschreibung:** Gibt eine Zahl zurück, die angibt, ob für das Anzeigeobjekt interaktive HTML unterstützt wird. 1 bedeutet einige oder alle Elemente werden unterstützt. 0 bedeutet keine Unterstützung.

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Syntax:** Ignore Platform Preferences( state=0|1 )

**Beschreibung:** Ignoriert die aktuellen Einstellungen der Plattformvoreinstellungen. Die Meldung wird ignoriert, wenn sie nach der Erstellung an die Plattform gesendet wird.

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

### Local Data Filter

**Syntax:** obj << Local Data Filter

**Beschreibung:** Filtert Daten für bestimmte Gruppen oder Bereiche, aber nur lokal in dieser Plattform.

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

### New JSL Preset

**Syntax:** New JSL Preset( preset )

**Beschreibung:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Version hinzugefügt:** 18

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Syntax:** obj << Paste Local Data Filter

**Beschreibung:** Lokalen Datenfilter aus der Zwischenablage auf den aktuellen Bericht anwenden.

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

### Redo Analysis

**Syntax:** obj << Redo Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj << Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj << Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj << Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Syntax:** obj << Remove Column Switcher

**Beschreibung:** Entfernt den letzten Spaltenwechsler, der der Plattform hinzugefügt wurde.

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

**Syntax:** obj << Remove Local Data Filter

**Beschreibung:** Wenn ein lokaler Filter verwendet wurde, wird dieser entfernt und die Plattform verwendet wieder direkt alle Daten aus der Datentabelle

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

**Syntax:** Render Preset( preset )

**Beschreibung:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Version hinzugefügt:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Syntax:** obj << Report;

Report( obj )

**Beschreibung:** Gibt eine Referenz auf das Berichtsobjekt zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj << Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj << Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj << Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj << Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj << Save Script for All Objects To Data Table( <name> )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj << Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj << Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj << Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Syntax:** SendToByGroup( {":Column == level"}, command );

**Beschreibung:** Sendet Plattformbefehle oder Befehle zum benutzerdefinierten Einrichten der Anzeige an jede Stufe einer Nach-Gruppe.

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

**Syntax:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Beschreibung:** SendToEmbeddedScriptable stellt die Einstellungen eingebetteter skriptfähiger Objekte wieder her.

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

**Syntax:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Beschreibung:** „An Bericht senden“ wird zusammen mit dem Zuordnungsbefehl verwendet, um die Darstellung eines Berichts benutzerdefiniert einzurichten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Syntax:** obj << Sync to Data Table Changes

**Beschreibung:** Mit Ausgeschlossenen und vorgenommenen Datenänderungen synchronisieren.

```jsl

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

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj << Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Syntax:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Beschreibung:** Transformationsspalte im lokalen Kontext eines Objekts erstellen, üblicherweise als Plattform. Die Transformationsspalte ist nur für die Lebensdauer der Plattform aktiv.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Syntax:** obj << View Web XML

**Beschreibung:** Gibt den XML-Code zurück, der zum Erstellen des interaktiven HTML-Berichts verwendet wird.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Syntax:** obj = Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

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

## Spalten

### By

**Syntax:** obj = Response Screening(...<By( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);

```

### Freq

**Syntax:** obj = Response Screening(...<Freq( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Freq( _freqcol )
);

```

### Grouping

**Syntax:** obj = Response Screening(...<Grouping( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt kategoriale Spalten als Gruppierungsvariablen an. Die Zeilen, die jeder Stufe der angegebenen Spalte zugeordnet sind, werden separat analysiert.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Grouping( :Site )
);

```

### Response

**Syntax:** obj = Response Screening(...Response( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariablen an, die die zu analysierenden Messungen enthalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Subgroup

**Syntax:** obj = Response Screening(...<Subgroup( column(s) )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine oder mehrere Untergruppenvariablen an. Wenn eine Untergruppenvariable definiert ist, werden für jede Kategorie der Untergruppenvariable zusätzliche Anpassungen durchgeführt.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	X( :Process ),
	Y( Column Group( "Responses" ) ),
	Subgroup( :Site )
);

```

### Weight

**Syntax:** obj = Response Screening(...<Weight( column )>...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Gewichtung für die Analyse zuweisen.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Weight( _weightcol )
);

```

### X

**Syntax:** obj = Response Screening(...X( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Prädiktorvariablen an.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Y

**Syntax:** obj = Response Screening(...Y( column(s) )...)

<b>Element im Startfenster: Ja</b>

**Beschreibung:** Gibt die Zielgrößenvariablen an, die die zu analysierenden Messungen enthalten.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

## Zugehörige Konstruktoren

### Response Screening

**Syntax:** Response Screening( Y( columns ), X( columns ) )

**Beschreibung:** Automatisiert den Prozess der Durchführung von Tests für lineare Modelleffekte über eine große Anzahl von Zielgrößen. Testergebnisse und statistische Kenngrößen werden in Datentabellen und Diagrammen präsentiert. Die False Discovery Rate (FDR) schützt vor falschen Deklarationen von Signifikanz. Eine robuste Schätzmethode verringert die Empfindlichkeit von Tests gegenüber Ausreißern.

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

