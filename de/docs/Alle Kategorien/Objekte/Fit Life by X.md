# Fit Life by X



## Elementmeldungen

### Add Density Curve to Scatterplot

**Syntax:** obj &lt;&lt; Add Density Curve to Scatterplot( number )

**Beschreibung:** Fügt dem Streudiagramm am angegebenen Wert der X-Variablen eine Dichtekurve hinzu. Dichtekurven werden für jede in der Legende ausgewählte Verteilung gezeichnet. Die Legende befindet sich rechts vom Streudiagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Add Density Curve to Scatterplot( 50 );

```

### Add Quantile Line to Scatterplot

**Syntax:** obj &lt;&lt; Add Quantile Line to Scatterplot( quantile )

**Beschreibung:** Fügt dem Streudiagramm eine Linie am angegebenen Quantil hinzu. Eine Quantillinie wird für jede in der Legende ausgewählte Verteilung gezeichnet. Die Legende befindet sich rechts vom Streudiagramm.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Add Quantile Line to Scatterplot( 0.1 );

```

### Censor Code

**Syntax:** obj = Fit Life by X(...Censor Code( value=1 )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Identifiziert den Wert in der Zensorspalte, der rechts zensierte Beobachtungen angibt. Standardmäßig „1“.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Status ),	Freq( :Weight ),	Censor Code( "Censored" ),	Relationship( Arrhenius Celsius ));

```

### Confidence Interval Method

**Syntax:** obj = Fit Life by X(...Confidence Interval Method( method="Wald" )...)

**Beschreibung:** Gibt die Methode an, die zum Berechnen der Konfidenzintervalle für die Parameter verwendet wird. Wählen Sie zwischen den Methoden Wald und Likelihood. Die Wald-Methode ist eine Approximation und wird schneller ausgeführt. Die Likelihood-Methode liefert präzisere Parameter, die Berechnung dauert jedoch länger. Standardmäßig „Wald“.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Confidence Interval Method( "Likelihood" ));

```

### Density

**Syntax:** obj &lt;&lt; Density( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Beschreibung:** Gibt die Dichte für eine angegebene Verteilung mit dem Lebensdauerwert t und dem Kovariablenwert x zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));d = obj << Density( Lognormal, 30000, 10 );Show( d );

```

### Distribution

**Syntax:** obj = Fit Life by X(...Distribution( Weibull|Lognormal|Loglogistic|Frechet |SEV|Log|Normal|Logistic|LEV )...)

**Beschreibung:** Gibt die Verteilung an, die zum Modellieren der Beziehung zwischen den X- und Y-Variablen verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Fit All Distributions

**Syntax:** obj &lt;&lt; Fit All Distributions

**Beschreibung:** Passt alle verfügbaren Verteilungen an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit All Distributions;

```

### Fit Exponential

**Syntax:** obj &lt;&lt; Fit Exponential

**Beschreibung:** Passt eine Exponentialverteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Exponential;

```

### Fit Frechet

**Syntax:** obj &lt;&lt; Fit Frechet

**Beschreibung:** Passt eine Fréchet-Verteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Frechet;

```

### Fit LEV

**Syntax:** obj &lt;&lt; Fit LEV

**Beschreibung:** Passt eine Verteilung des größten Extremwerts (LEV) an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit LEV;

```

### Fit Logistic

**Syntax:** obj &lt;&lt; Fit Logistic

**Beschreibung:** Passt eine logistische Verteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Logistic;

```

### Fit Loglogistic

**Syntax:** obj &lt;&lt; Fit Loglogistic

**Beschreibung:** Passt eine log-logistische Verteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Loglogistic;

```

### Fit Lognormal

**Syntax:** obj &lt;&lt; Fit Lognormal

**Beschreibung:** Passt eine Lognormal-Verteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Weibull ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Lognormal;

```

### Fit Normal

**Syntax:** obj &lt;&lt; Fit Normal

**Beschreibung:** Passt eine Normalverteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Normal;

```

### Fit SEV

**Syntax:** obj &lt;&lt; Fit SEV

**Beschreibung:** Passt eine Verteilung des kleinsten Extremwerts (SEV) an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit SEV;

```

### Fit Weibull

**Syntax:** obj &lt;&lt; Fit Weibull

**Beschreibung:** Passt eine Weibull-Verteilung an die Daten an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Inverse Power ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Weibull;

```

### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Beschreibung:** Gibt für jede Anpassung der Verteilung die Schätzwerte, Standardfehler, Kovarianzmatrix und Konvergenzergebnisse zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));r = obj << Get Results;Show( r );

```

### Hazard

**Syntax:** obj &lt;&lt; Hazard( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Beschreibung:** Gibt die Ausfallrate für eine angegebene Verteilung mit dem Lebensdauerwert t und dem Kovariablenwert x zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));h = obj << Hazard( Lognormal, 30000, 10 );Show( h );

```

### Maximum Iterations

**Syntax:** obj &lt;&lt; Maximum Iterations( number )

**Beschreibung:** Gibt die maximale Anzahl der Iterationen an, die zum Erreichen von Konvergenz verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Maximum Iterations( 20 ),	Nested Model Tests( Regression ));

```

### Nested Model Tests

**Syntax:** obj &lt;&lt; Nested Model Tests( Saturated Location|Location|Location and Scale|Saturated Location and Scale|Regression|No Effect )

**Beschreibung:** Hängt ein nichtparametrisches Überlagerungsdiagramm, verschachtelte Modelltests und ein überlagertes Wahrscheinlichkeitsdiagramm an den Bericht an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Nested Model Tests( Regression ));

```

### Probability

**Syntax:** obj &lt;&lt; Probability( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**Beschreibung:** Gibt die Wahrscheinlichkeit für eine angegebene Verteilung mit dem Lebensdauerwert t und dem Kovariablenwert x zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));p = obj << Probability( Lognormal, 30000, 10 );Show( p );

```

### Quantile

**Syntax:** obj &lt;&lt; Quantile( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, p, x )

**Beschreibung:** Gibt das Quantil für eine angegebene Verteilung mit der Wahrscheinlichkeit p und dem Kovariablenwert x zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));q = obj << Quantile( Lognormal, 0.005, 10 );Show( q );

```

### Rejection Sampler Maximum Trials

**Syntax:** obj &lt;&lt; Rejection Sampler Maximum Trials( number=10000 )

**Beschreibung:** Standardmäßig „10000“.

**JMP Version hinzugefügt:** 14

### Relationship

**Syntax:** obj = Fit Life by X(...Relationship( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Inverse Power|Linear|Log|Logit|Reciprocal|Square Root|Box-Cox|Custom|No Effect|Location|Location and Scale )...)

**Beschreibung:** Identifiziert die Transformationsbeziehung zwischen dem Ereignis und dem Faktor.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Inverse Power ));

```

### Set Level of Quantile Line CI Bands

**Syntax:** obj &lt;&lt; Set Level of Quantile Line CI Bands( alpha=0.95 )

**Beschreibung:** Gibt das Konfidenzniveau für die Konfidenzintervalle um die Quantillinien an.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Add Quantile Line to Scatterplot( 0.1 );obj << Show Quantile Line CI Bands( 1 );Wait( 1 );obj << Set Level of Quantile Line CI Bands( .90 );

```

### Set Scale

**Syntax:** obj &lt;&lt; Set Scale( Weibull|Lognormal|Loglogistic|Frechet|SEV |Normal|Logistic|LEV|Linear )

**Beschreibung:** Gibt die Skala an, die für das Diagramm der nichtparametrischen Überlagerung verwendet wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Set Scale( Logistic );

```

### Set Scriptables

**Syntax:** obj &lt;&lt; Set Scriptables( {&lt;Distribution Comparisons( options )&gt;, &lt;Quantile Comparisons( options )&gt;, &lt;Hazard Comparisons( options )&gt;, &lt;Density Comparisons( options )&gt;} )

**Beschreibung:** Legt in verschiedenen Abschnitten der Ausgabe skriptfähige Optionen innerhalb der Analysediagramme fest.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Set Scriptables(	{Distribution Comparisons( Profiler( 1, Term Value( Temp( 50 ), Hours( 2600 ) ) ) )});

```

### Show Density Curves

**Syntax:** obj &lt;&lt; Show Density Curves( state=0|1 )

**Beschreibung:** Zeigt Dichtekurven im Streudiagramm an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Show Density Curves( 1 );

```

### Show Overlay by Levels

**Syntax:** obj &lt;&lt; Show Overlay by Levels( state=0|1 )

**Beschreibung:** Zeigt das Diagramm Überlagerung nach Stufen an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Location ),	Freq( :Weight ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Nonparametric Overlay"] << Close( 1 );rpt["Comparisons"] << Close( 1 );rpt[TabListBox( 2 )] << SetSelected( 2 );rpt["Overlay by Levels"] << Close( 0 );Wait( 1 );obj << Show Overlay by Levels( 0 );Wait( 1 );obj << Show Overlay by Levels( 1 );

```

### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Datenpunkte im Diagramm der nichtparametrischen Überlagerung und in den überlagerten Wahrscheinlichkeitsdiagrammen an oder blendet sie aus. Wenn die Punkte ausgeblendet sind, werden stattdessen Schrittfunktionen angezeigt. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Show Points( 0 );Wait( 1 );obj << Show Points( 1 );

```

### Show Quantile Line CI Bands

**Syntax:** obj &lt;&lt; Show Quantile Line CI Bands( state=0|1 )

**Beschreibung:** Zeigt Konfidenzintervalle um die Quantillinien an oder blendet sie aus.

**JMP Version hinzugefügt:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Add Quantile Line to Scatterplot( 0.1 );Wait( 1 );obj << Show Quantile Line CI Bands( 1 );

```

### Show Surface Plot

**Syntax:** obj &lt;&lt; Show Surface Plot( state=0|1 )

**Beschreibung:** Zeigt die Wirkungsflächendiagramme im Abschnitt mit den Ergebnissen der einzelnen Verteilungen des Berichts an oder blendet sie aus. Wirkungsflächendiagramme werden in den Abschnitten „Verteilung“, „Quantil“, „Ausfallrate“ und „Dichte“ für die einzelnen Verteilungen angezeigt.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Comparisons"] << Close( 1 );rpt[TabListBox( 2 )] << SetSelected( 2 );rpt["Lognormal"] << Close( 0 );Wait( 1 );obj << Show Surface Plot( 0 );Wait( 1 );obj << Show Surface Plot( 1 );

```

### TAF

**Syntax:** obj &lt;&lt; TAF( Weibull|Lognormal|Loglogistic|Frechet, value, x )

**Beschreibung:** Gibt den Zeitbeschleunigungsfaktor für eine angegebene Verteilung, die Beschleunigungsbedingung x und einen Baseline-Bedingungswert zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));af = obj << TAF( Lognormal, 10, 40 );Show( af );

```

### Tabbed Individual Report

**Syntax:** obj &lt;&lt; Tabbed Individual Report( state=0|1 )

**Beschreibung:** Organisiert die einzelnen Berichte in Registerbereichen. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Comparisons"] << Close( 1 );Wait( 1 );obj << Tabbed Individual Report( 0 );

```

### Tabbed Overall Report

**Syntax:** obj &lt;&lt; Tabbed Overall Report( state=0|1 )

**Beschreibung:** Organisiert den Gesamtbericht in Registerbereichen für die Abschnitte mit Diagrammen, Vergleichen und Ergebnissen des Gesamtberichts.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Tabbed Overall Report( 1 );

```

### Time Acceleration Baseline

**Syntax:** obj &lt;&lt; Time Acceleration Baseline( number )

**Beschreibung:** Gibt die Verwendungsbedingung für den Beschleunigungsfaktor an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Time Acceleration Baseline( 20 );

```

### Transposed Axes

**Syntax:** obj &lt;&lt; Transposed Axes( state=0|1 )

**Beschreibung:** Gibt an, dass der Beschleunigungsfaktor auf der vertikalen Achse statt auf der horizontalen Achse angezeigt wird.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Transposed Axes( 1 );

```

### Use Transformation Scale

**Syntax:** obj &lt;&lt; Use Transformation Scale( state=0|1 )

**Beschreibung:** Gibt an, dass die Transformationsskala für die Beschleunigungsfaktorachse im Streudiagramm verwendet wird. Diese Option wechselt zwischen den linearen und nichtlinearen Skalen für die Achse des Beschleunigungsfaktors um. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Use Transformation Scale( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plattform mit Filter

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Syntax:** obj &lt;&lt; Get Data Table

**Beschreibung:** Gibt eine Referenz auf die Datentabelle zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Redo Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

**Beispiel 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Beispiel 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Syntax:** obj = Fit Life by X(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Typ des Fensters festlegen, das für den Bericht erstellt werden soll. Standardmäßig wird ein Berichtsfenster vom Typ Visible erstellt. Ein Fenster vom Typ Invisible wird auf dem Bildschirm nicht angezeigt, kann jedoch von Funktionen wie Window() erkannt werden. Ein Fenster vom Typ Private reagiert auf die meisten Fenstermeldungen, kann jedoch nicht erkannt werden und muss über das Berichtsobjekt adressiert werden.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## Spalten

### By

**Syntax:** obj &lt;&lt; By( column(s) )

**Beschreibung:** Führt eine separate Analyse für jede Stufe der angegebenen Spalte durch.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Censor

**Syntax:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Freq

**Syntax:** obj &lt;&lt; Freq( column )

**Beschreibung:** Gibt eine Spalte an, deren Werte jeder Zeile eine Häufigkeit für die Analyse zuweisen.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Freq( :_freqcol ));

```

### Time to Event

**Syntax:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### X

**Syntax:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

## Zugehörige Konstruktoren

### Fit Life by X

**Syntax:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**Beschreibung:** Analysiert die Verteilung von Zeit-bis-Ereignis-Daten, die durch einen einzelnen Regressionsfaktor parametrisiert sind. Analyseoptionen sind u.a. beschleunigte Ausfallmodelle, Lebensdauerverteilungen über Gruppen und Transformationen von Regressionsfaktoren.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

