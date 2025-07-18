# Time Series



## ARIMA

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Elementmeldungen

### AR Coefficients

**Syntax:** obj &lt;&lt; AR Coefficients( state=0|1 )

**Beschreibung:** Zeigt das Koeffizientendiagramm der Autokorrelation an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << AR Coefficients( 1 );

```

### ARIMA

**Syntax:** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Beschreibung:** Passt ein ARIMA-Modell an. Legt die Ordnungen p,d und q für ein ARIMA(p,d,q)-Modell fest. Legt level für andere Werte als 0,95 fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**Syntax:** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**Beschreibung:** Einen Satz von ARIMA-Modellen anpassen, deren Ordnungen sich in angegebenen Bereichen befinden.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**Syntax:** obj &lt;&lt; Autocorrelation( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**Syntax:** obj = Time Series(...Autocorrelation Lags( number=25 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Legt die Startoption für die maximale Anzahl von Perioden zwischen Punkten bei der Berechnung von Autokorrelationen fest. Standardmäßig „25“.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**Syntax:** obj &lt;&lt; Combine and Save Forecasts from Models

**Beschreibung:** Erstellt eine neue Datentabelle mit den kombinierten Ergebnissen aus allen Modellanpassungen im Bericht.

**JMP Version hinzugefügt:** 16

### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( state=0|1 )

**Beschreibung:** Blendet die Verbindungslinien im grundlegenden Zeitreihendiagramm ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Connecting Lines( 1 );

```

### Cross Correlation

**Syntax:** obj &lt;&lt; Cross Correlation( state=0|1 )

**Beschreibung:** Zeigt das Kreuzkorrelationsdiagramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**Syntax:** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Glättungsmodell mit gedämpftem Trend anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	"Damped-Trend Linear Exponential Smoothing"n( Zero to One )
);

```

### Difference

**Syntax:** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**Beschreibung:** Berechnet die Differenzenreihe und erzeugt Graphen der Autokorrelationen und partiellen Autokorrelationen der Differenzenreihe. Die Differenzenreihe wird von  (1-B)^d * (1-B^S)^D * y_t  vorgegeben. Dabei ist y_t die Zeitreihe, B der durch B * y_t = y_(t-1) definierte Backshift-Operator, d die nicht-saisonale Differerenzenordnung, D die saisonale Differerenzenordnung und S die Anzahl von Beobachtungen pro Periode.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Difference( 1 );
obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**Syntax:** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Anpassung eines doppelt exponentiellen Glättungsmodells aufrufen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Double Exponential Smoothing( Zero to One ),
	Double Exponential Smoothing( Unconstrained ),
	Double Exponential Smoothing( Stable Invertible ),
	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Fit Recommended ETS

**Syntax:** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**Beschreibung:** Passt alle empfohlenen Zustandsraum-Glättungsmodelle an.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**Syntax:** obj = Time Series(...Forecast Periods( number=25 )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

**Beschreibung:** Startoption für die Anzahl der Schritte vorwärts im Vorhersagebericht festlegen. Standardmäßig „25“.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );
obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**Syntax:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**Beschreibung:** Legt fest, ob die Vorhersagen anhand künftiger Beobachtungen oder anhand der zurückgehaltenen Beobachtungen gemacht werden. Wenn diese Option ausgewählt ist, werden die Vorhersagen anhand des zurückgehaltenen Satzes gemacht, der über die mit der Option „Vorhersageperioden“ angegebenen Anzahl festgelegt wird.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**Syntax:** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**Beschreibung:** Erzeugt eine Datentabelle mit mehreren zukünftigen Verläufen eines angepassten Modells. Gibt die Tabellenreferenz zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**Syntax:** obj &lt;&lt; Get Model Specs

**Beschreibung:** Gibt eine benannte Liste der Modellergebnisse zurück, wobei jedes Ergebnis nach der Modellspezifikation benannt ist. Die Ausgabe umfasst Schätzwerte und Standardfehler. Verfügbar für ARIMA, saisonales ARIMA, alle Glättungsmodelle und Transferfunktionsmodelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Model Specs;
Show( l );

```

### Get Models

**Syntax:** obj &lt;&lt; Get Models

**Beschreibung:** Gibt eine benannte Liste der Modellergebnisse zurück, wobei jedes Ergebnis nach der Modellbeschreibung benannt ist. Die Ausgabe umfasst Schätzwerte und Standardfehler. Verfügbar für ARIMA, saisonales ARIMA, alle Glättungsmodelle und Transferfunktionsmodelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Log Passengers ) );
obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );
l = obj << Get Models;
Show( l );

```

### Hide All Reports

**Syntax:** obj &lt;&lt; Hide All Reports

**Beschreibung:** Blendet alle Modelle, die in der Modellvergleichstabelle aufgeführt sind, aus dem Berichtsfenster aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
obj << Hide All Model Reports;

```

### Input Series

**Syntax:** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**Beschreibung:** Gruppiert an die Input-Zeitreihe gesendete Meldungen. Hinweis: Eine Input-Listenvariable muss angegeben werden.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**Syntax:** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**Beschreibung:** Behält die besten Modelle in einzelnen Modellklassen und entfernt die übrigen Modelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );
Wait( 1 );
obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**Syntax:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**Beschreibung:** Gibt den Lambda-Parameter für die Box-Cox-Transformation der ursprünglichen Daten an. Standardmäßig „0“.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series(
	Y( :Steel Shipments ),
	Name( "Use Box-Cox Transformation" )(1),
	Name( "Lambda for Box-Cox" )(0)
);
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**Syntax:** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Linear exponentielles Glättungsmodell anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Linear Exponential Smoothing( Zero to One ),
	Linear Exponential Smoothing( Unconstrained ),
	Linear Exponential Smoothing( Stable Invertible ),
	Linear Exponential Smoothing(
		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )
	),
	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),
	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) )
);

```

### Maximum Iterations

**Syntax:** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**Beschreibung:** Maximale Anzahl von Iterationen für künftige Optimierungen bei der ARIMA-Modellanpassung zurücksetzen. Standardmäßig „250“.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Maximum Iterations( 2 );
obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**Syntax:** obj &lt;&lt; Mean Line( state=0|1 )

**Beschreibung:** Blendet die Mittelwertlinie im grundlegenden Zeitreihendiagramm ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Mean Line( 1 );

```

### Model Comparison Report

**Syntax:** obj &lt;&lt; Model Comparison Report

**Beschreibung:** Konfiguriert die Einstellungen für den Modellvergleichsbericht.

### Number of Forecast Periods

**Syntax:** obj &lt;&lt; Number of Forecast Periods( number )

**Beschreibung:** Setzt die Anzahl der Vorhersageperioden zurück und aktualisiert den ARIMA-Vorhersagebericht.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**Syntax:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**Syntax:** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**Beschreibung:** Legt die Ordnung für das Vorweißen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series(
	Y( :Output CO2 ),
	Input List( :Input Gas Rate ),
	Input Series(
		:Input Gas Rate,
		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )
	)
);

```

### Remove All Simulation

**Syntax:** obj &lt;&lt; Remove All Simulation

**Beschreibung:** Entfernt alle simulierten zukünftigen Verläufe.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove All Simulation;

```

### Remove Cycle

**Syntax:** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**Beschreibung:** Schätzt die zyklische Komponente mittels einer Cosinus-Funktion und entfernt sie dann aus den Daten.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

### Remove Linear Trend

**Syntax:** obj &lt;&lt; Remove Linear Trend

**Beschreibung:** Schätzt den linearen Trend und entfernt ihn dann aus den Daten.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( Y( :Sales ) );
obj << Remove Linear Trend;

```

### Remove Model Simulation

**Syntax:** obj &lt;&lt; Remove Model Simulation( id )

**Beschreibung:** Entfernt simulierte zukünftige Verläufe eines angepassten Modells.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );
obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**Syntax:** obj &lt;&lt; Save Spectral Density

**Beschreibung:** Speichert die Spektraldichte in einer Tabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Save Spectral Density;

```

### Seasonal ARIMA

**Syntax:** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**Beschreibung:** Passt ein saisonales ARIMA-Modell an. Legt die Ordnungen p,d,q,P,D,Q und S für ein ARIMA(p,d,q)(P,D,Q)S-Modell fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );
obj << seasonal arima(
	1,
	0,
	0,
	1,
	0,
	0,
	12,
	No Intercept( 1 ),
	No Constrain( 1 ),
	Confidence Intervals( 0.99 )
);

```

### Seasonal Exponential Smoothing

**Syntax:** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Saisonales exponentielles Glättungsmodell anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Seasonal Exponential Smoothing(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )
	)
);

```

### Set Seed

**Syntax:** obj &lt;&lt; Set Seed( seed )

**Beschreibung:** Setzt einen zufälligen Startwert.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );
obj << Set Seed( 1111 );
obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**Syntax:** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP Version hinzugefügt:** 16

### Show Lag Plot

**Syntax:** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Blendet die Punkte im grundlegenden Zeitreihendiagramm ein oder aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**Syntax:** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Einfaches exponentielles Glättungsmodell anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Simple Exponential Smoothing( Zero to One ),
	Simple Exponential Smoothing( Unconstrained ),
	Simple Exponential Smoothing( Stable Invertible ),
	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),
	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) )
);

```

### Simple Moving Average

**Syntax:** obj &lt;&lt; Simple Moving Average

**Beschreibung:** Ein Dialogfeld zum Spezifizieren eines einfachen gleitenden Durchschnitts aufrufen und ein Modell anpassen, wenn keine weiteren Argumente vorhanden sind. Argumente an das Modell des einfachen gleitenden Durchschnitts skriptfähig übergeben. Der Rückgabewert ist der skriptfähige Handle des Modells des einfachen gleitenden Durchschnitts. Details zu den Argumenten finden Sie unter „Einfacher gleitender Durchschnitt, skriptfähig“.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = dt << Time Series( Y( :Close ) );
sma = obj << Simple Moving Average;
sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**Syntax:** obj &lt;&lt; Simple Moving Average Centering Method( "Keine Zentrierung"|"Zentriert "|"Zentriert und doppelt geglättet für eine gerade Anzahl von Termen" )

### Simulate More

**Syntax:** obj &lt;&lt; Simulate More( id, n )

**Beschreibung:** Simuliert mehrere zukünftige Verläufe eines angepassten Modells.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate More( 1, 2 );
obj << Simulate More( 2, 3 );

```

### Simulate Once

**Syntax:** obj &lt;&lt; Simulate Once( id )

**Beschreibung:** Simuliert einen zukünftigen Verlauf eines angepassten Modells.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << arima( 1, 0, 0 );
obj << arima( 2, 0, 0 );
obj << Simulate Once( 1 );
obj << Simulate Once( 2 );

```

### Spectral Density

**Syntax:** obj &lt;&lt; Spectral Density( state=0|1 )

**Beschreibung:** Zeigt die Spektraldichtediagramme an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Spectral Density( 1 );

```

### State Space Smoothing

**Syntax:** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**Beschreibung:** Passt ein Zustandsraum-Glättungsmodell an.

**JMP Version hinzugefügt:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );
obj = dt << Time Series( Y( :Passengers ) );
obj << State Space Smoothing(
	Error Type( "Multiplicative" ),
	Trend Type( "Additive" ),
	Seasonal Type( "Multiplicative" ),
	Damped( "No" ),
	Period( 12 ),
	Constrained( "Yes" )
);

```

### Time Series Graph

**Syntax:** obj &lt;&lt; Time Series Graph( state=0|1 )

**Beschreibung:** Grundlegendes Zeitreihendiagramm ein- oder ausschalten. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Time Series Graph( 1 );

```

### Transfer Function

**Syntax:** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**Beschreibung:** Passt ein Transferfunktionsmodell an.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 ),
	Alternative Parameterization( 1 ),
	Confidence Intervals( 0.99 ),
	Number of Forecast Periods( 10 )
);

```

### Use Box-Cox Transformation

**Syntax:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**Beschreibung:** Transformiert die ursprünglichen Daten mithilfe einer Box-Cox-Transformation mit dem Lambda, das über die Option „Lambda für Box-Cox“ angegeben wird. Wenn diese Option ausgewählt ist, werden alle Analysen im Zeitreihenbericht mit den transformierten Daten durchgeführt.

**JMP Version hinzugefügt:** 16

<b>Element im Startfenster: Ja</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );
obj << arima( 1, 0, 0 );
obj << Number of Forecast Periods( 100 );

```

### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Blendet das Variogramm im Bericht „Basisdiagnose Zeitreihe“ ein oder aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :Steel Shipments ) );
obj << Variogram( 1 );

```

### Winters Method

**Syntax:** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**Beschreibung:** Glättungsmodell mittels Winters Methode anpassen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom(
			Level( Bounded( 0, 1 ) ),
			Trend( Bounded( 0, 1 ) ),
			Seasonal( Bounded( 0, 1 ) )
		)
	)
);

```

### X11

**Syntax:** obj &lt;&lt; X11( Additive|Multiplicative )

**Beschreibung:** Entfernt Trend- und saisonale Effekte mittels der vom statistischen Bundesamt der USA entwickelten X-11-Methode.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );
obj = dt << Time Series( X( :Date ), Y( :Sales ) );
obj << X11( Additive );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Syntax:** obj &lt;&lt; Copy Script

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und legt es in der Zwischenablage ab.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Copy Script;

```

### Data Table Window

**Syntax:** obj &lt;&lt; Data Table Window

**Beschreibung:** Zeigt das Fenster mit der Datentabelle für diese Analyse im Vordergrund an.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Syntax:** obj &lt;&lt; Get Container

**Beschreibung:** Gibt einen Verweis auf das Containerfeld zurück, das den Inhalt des Objekts enthält.

#### Allgemein

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Syntax:** obj &lt;&lt; Get Script With Data Table

**Beschreibung:** Erstellt ein Skript (JSL) zum Erzeugen dieser Analyse und referenziert dabei spezifisch diese Datentabelle und gibt das Skript als Ausdruck zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Syntax:** obj &lt;&lt; Get Timing

**Beschreibung:** Steuert den Start der Plattform zeitlich.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Syntax:** obj &lt;&lt; Redo ByGroup Analysis

**Beschreibung:** Führt die gleiche Analyse in einem neuen Fenster aus. Die Analyse ist unterschiedlich, wenn sich die Daten verändert haben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Syntax:** obj &lt;&lt; Relaunch Analysis

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Syntax:** obj &lt;&lt; Relaunch ByGroup

**Beschreibung:** Öffnet das Plattform-Startfenster und ruft die Einstellungen ab, die zum Erstellen des Berichts verwendet wurden.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Syntax:** obj &lt;&lt; Report View( "Vollständig"|"Übersicht" )

**Beschreibung:** Die Berichtsanzeige legt das Detailniveau für einen Plattformbericht fest. Full zeigt alle Details an, während Summary abhängig von der Plattform nur ausgewählte Inhalte anzeigt. Für benutzerdefiniertes Verhalten unterstützen Anzeigefelder eine Meldung <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Syntax:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert sie als Tabelleneigenschaft in der Datentabelle. Sie können einen Namen für das Skript angeben. Die Option Append Suffix hängt ein numerisches Suffix an den Skriptnamen an, das das Skript von einem vorhandenen Skript mit dem gleichen Namen unterscheidet. Die Option Prompt fordert den Benutzer auf, einen Skriptnamen anzugeben. Die Option Replace ersetzt ein vorhandenes Skript mit dem gleichen Namen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Syntax:** obj &lt;&lt; Save ByGroup Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Syntax:** obj &lt;&lt; Save ByGroup Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Syntax:** obj &lt;&lt; Save Script for All Objects

**Beschreibung:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Syntax:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Beschreibung:** Speichert ein Skript für alle Berichtsobjekte in der aktuellen Datentabelle. Diese Option ist nützlich, wenn Sie mehrere Berichte im Fenster haben. Das Skript wird nach der ersten Plattform benannt, sofern Sie keine Skriptnamen in Anführungszeichen angeben.

#### Beispiel 1

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Beispiel 2

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Syntax:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und speichert es als Tabelleneigenschaft in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Syntax:** obj &lt;&lt; Save Script to Journal

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und fügt eine Schaltfläche mit diesem Skript zum Journal hinzu.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Syntax:** obj &lt;&lt; Save Script to Report

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und zeigt es im Bericht selbst an. Nützlich zum Anlegen eines gedruckten Nachweises der durchgeführten Aktivitäten.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Syntax:** obj &lt;&lt; Save Script to Script Window

**Beschreibung:** Erstellt ein JSL-Skript zum Erzeugen dieser Analyse und hängt es an das Textfenster mit dem aktuellen Skript an.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
obj << Title( "My Platform" );

```

### Top Report

**Syntax:** obj &lt;&lt; Top Report

**Beschreibung:** Gibt eine Referenz auf den Stammknoten im Bericht zurück.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );
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

**Syntax:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Element im Startfenster: Ja&lt;/b&gt;

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

**Syntax:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Time Series( Y( :steel shipments ), By( _bycol ) );

```

### Input List

**Syntax:** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**Syntax:** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**Syntax:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**Syntax:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Zugehörige Konstruktoren

### Time Series

**Syntax:** Time Series( Y( column ) )

**Beschreibung:** Modelliert eine Reihe von Beobachtungen über gleichmäßig voneinander entfernter Zeitpunkte. Umfasst ein Zeitreihendiagramm, Autokorrelationen, Variogramme, spektrale Dichte, ARIMA, saisonales ARIMA, Glättungsmodelle und Vorhersagen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = dt << Time Series( Y( :steel shipments ) );

```

## Damped-Trend Linear Exponential Smoothing

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### Elementmeldungen

#### Autocorrelation

**Syntax:** obj &lt;&lt; Autocorrelation( state=0|1 )

**Beschreibung:** Zeigt die Autokorrelation im Differenzbericht an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( state=0|1 )

**Beschreibung:** Zeigt die Verbindungslinien zwischen den Punkten im Differenzgraphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**Syntax:** obj &lt;&lt; Difference Graph( state=0|1 )

**Beschreibung:** Zeigt den Differenzgraphen an oder blendet ihn aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**Syntax:** obj &lt;&lt; Mean Line( state=0|1 )

**Beschreibung:** Zeigt die Mittelwertlinie im Differenzgraphen an oder blendet sie aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**Syntax:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**Beschreibung:** Zeigt die partielle Autokorrelation im Differenzbericht an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Save

**Syntax:** obj &lt;&lt; Save

**Beschreibung:** Speichert die Differenzwerte in einer neuen Spalte in der Datentabelle.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Differenzgraphen an oder blendet sie aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm im Differenzbericht an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### Elementmeldungen

#### Add Model

**Syntax:** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**Beschreibung:** Modell des einfachen gleitenden Durchschnitts hinzufügen. Das Modell wird durch die Breite des gleitenden Fensters identifiziert. Das optionale Argument gibt an, ob der Durchschnitt zentriert ist.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Add Model( 10 ) );
sma << Add Model( 15, Centered );

```

#### Connecting Lines

**Syntax:** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**Beschreibung:** Graphenoption zum Anzeigen von verbundenen Linien.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**Syntax:** obj &lt;&lt; Get Results

**Beschreibung:** Alle Modelle des einfachen gleitenden Durchschnitts als JSL-Objekt zurückgeben.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**Syntax:** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**Beschreibung:** Modell des einfachen gleitenden Durchschnitts entfernen. Das Modell wird durch die Breite des gleitenden Fensters identifiziert.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**Syntax:** obj &lt;&lt; Remove Report

**JMP Version hinzugefügt:** 16

#### Save to Data Table

**Syntax:** obj &lt;&lt; Save to Data Table

**Beschreibung:** Alle Modelle des einfachen gleitenden Durchschnitts in einer Datentabelle speichern und den Handle der Datentabelle zurückgeben.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**Beschreibung:** Graphenoption zum Anzeigen von Punkten.

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );
obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );
sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### Elementmeldungen

#### Alternative Parameterization

**Syntax:** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**Beschreibung:** Legt fest, ob der allgemeine Regressionskoeffizient aus den Zählerpolynomen ausgeklammert wird.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Alternative Parameterization( 1 )
);

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**Syntax:** obj &lt;&lt; Compute Objective

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Create SAS Job
);

```

#### Import New Inputs

**Syntax:** obj &lt;&lt; Import New Inputs

**JMP Version hinzugefügt:** 16

#### Maximum Iterations

**Syntax:** obj &lt;&lt; Maximum Iterations( number )

**Beschreibung:** Legt die maximale Anzahl der Iterationen fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Maximum Iterations( 10 )
);

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Entfernt die Nebenbedingungen für die AR- und MA-Koeffizienten.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Constrain( 1 )
);

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	No Intercept( 1 )
);

```

#### Number of Forecast Periods

**Syntax:** obj &lt;&lt; Number of Forecast Periods( number )

**Beschreibung:** Legt die Anzahl der Perioden für die Vorhersage fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Number of Forecast Periods( 10 )
);

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Partial Autocorrelations( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Plot( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( number )

**Beschreibung:** Legt das Niveau der angezeigten Konfidenzintervalle fest.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) )
);
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Confidence Intervals( 0.99 )
);

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Save Columns
);

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );
obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );
obj << Transfer Function(
	Order( 2, 0, 0 ),
	Seasonal( 0, 0, 0, 0 ),
	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),
	Variogram( 1 )
);
(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### Elementmeldungen

#### Actual

**Syntax:** obj &lt;&lt; Actual( state=0|1 )

**Beschreibung:** Wählt die Spalte der beobachteten Daten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**Syntax:** obj &lt;&lt; Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**Syntax:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**Syntax:** obj &lt;&lt; Create SAS Job

**Beschreibung:** Erstellt einen SAS-Job, um SAS zu starten und die Analyse in PROC ARIMA durchzuführen.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Create SAS Job;

```

#### Innovations

**Syntax:** obj &lt;&lt; Innovations( state=0|1 )

**Beschreibung:** Standardmäßig ein.

**JMP Version hinzugefügt:** 16

#### Lower Confidence Limit

**Syntax:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze unten“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**Syntax:** obj &lt;&lt; No Constrain( state=0|1 )

**Beschreibung:** Verschärft die Nebenbedingung für den autoregressiven Parameter, damit er beim Aufrufen eines ARIMA-Modells immer im stabilen Bereich bleibt und die Parameter des gleitenden Durchschnitts im invertierbaren Bereich bleiben.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**Syntax:** obj &lt;&lt; No Intercept( state=0|1 )

**Beschreibung:** Setzt die Konstante beim Aufrufen eines ARIMA-Modells auf null.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**Syntax:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**Beschreibung:** Zeigt das partielle Autokorrelationsdiagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Partial Autocorrelations( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**Syntax:** obj &lt;&lt; Plot( state=0|1 )

**Beschreibung:** Zeigt das Residuen-Diagramm an oder blendet es aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Plot( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**Syntax:** obj &lt;&lt; Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**Syntax:** obj &lt;&lt; Prediction Interval( level )

**Beschreibung:** Legt die Größe des Konfidenzintervalls für die Vorhersage im ARIMA-Modell fest. Die Standardgröße ist 0,95.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**Syntax:** obj &lt;&lt; Remove Fit

**JMP Version hinzugefügt:** 16

#### Residuals

**Syntax:** obj &lt;&lt; Residuals( state=0|1 )

**Beschreibung:** Wählt die Spalte der Residuenwerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**Syntax:** obj &lt;&lt; Save Columns

**Beschreibung:** Erstellt eine neue Datentabelle mit den beobachteten und vorhergesagten Werten zusammen mit Standardfehlern, Residuen und 95% Vorhersageintervallen für die Zielgöße. Diese Option ist bei allen ARIMA-, Glättungs- und Transferfunktionsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Columns;

```

#### Save Prediction Formula

**Syntax:** obj &lt;&lt; Save Prediction Formula

**Beschreibung:** Speichert die Vorhersageformel in einer neuen Spalte in der Datentabelle. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Arima( 1, 0, 0 );
obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**Syntax:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**Syntax:** obj &lt;&lt; Show Points( state=0|1 )

**Beschreibung:** Zeigt die Punkte im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Show Points( 1 ) );

(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**Syntax:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**Beschreibung:** Zeigt die Vorhersageintervalle im Zeitreihen-Vorhersagegraphen an oder blendet sie aus. Diese Option ist bei allen ARIMA- und Glättungsmodellen verfügbar. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj2 = obj << Simple Exponential Smoothing( Zero to One );
obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**Syntax:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**Beschreibung:** Wählt die Spalte des Standardfehlers der Vorhersagewerte zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**Syntax:** obj &lt;&lt; Time( state=0|1 )

**Beschreibung:** Wählt die Spalte der Zeitdaten zum Speichern mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );
obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**Syntax:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**Beschreibung:** Wählt die Spalte mit den Werten für „95% Konfidenzgrenze oben“ mit dem Befehl „Spalten speichern“ aus. Standardmäßig ein.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series( Y( :Steel Shipments ) );
obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**Syntax:** obj &lt;&lt; Variogram( state=0|1 )

**Beschreibung:** Zeigt das Variogramm an oder blendet es aus.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );
obj = Time Series(
	Y( :Steel Shipments ),
	Winters Method(
		12,
		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),
		Variogram( 1 )
	)
);
(obj << report)["Residuals"] << Close( 0 );
(obj << report)["Model Comparison"] << Close( 1 );

```

